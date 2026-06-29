
const CACHE_NAME = 'v1_cache';
const ASSETS = [
  '',
  'index.html',
  'fund.html',
  'actt.html',
  'pin.html',
  'logo.png',
  'manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});