const CACHE = 'kyo-v4';

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  // Network-first para navegación y documentos/CSS/JS: siempre intenta traer lo nuevo
  if (req.mode === 'navigate' || req.destination === 'document' || req.destination === 'style' || req.destination === 'script') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }
  // Resto (imágenes, fuentes): cache-first normal
  e.respondWith(
    caches.match(req).then((r) => r || fetch(req))
  );
});
