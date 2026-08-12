const CACHE_NAME = 'quinime-radio-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './aset/lagu.json',
  './img/icon.ico'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
