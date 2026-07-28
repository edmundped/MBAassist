const CACHE = "mbaassist-v2";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./assets/study-hero.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

/* Network-first for the page itself so a redeploy is picked up straight away;
   cache-first for everything else. Falls back to cache when offline.        */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const isPage = e.request.mode === "navigate" || e.request.destination === "document";
  if (isPage) {
    e.respondWith(
      fetch(e.request)
        .then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; })
        .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached ||
      fetch(e.request).then(r => {
        const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r;
      }).catch(() => cached)
    )
  );
});
