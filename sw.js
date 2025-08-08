self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('maryam-snake-v2').then(cache => cache.addAll(['./','./index.html','./manifest.json','./sw.js'])));
});
self.addEventListener('fetch', (e) => { e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request))); });
