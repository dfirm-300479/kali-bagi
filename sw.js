/* Ubah angka VERSI setiap kali Anda mengganti index.html, supaya HP mengambil yang baru. */
const VERSI = 'kali-bagi-v1';
const FONT_CACHE = 'kali-bagi-font';
const INTI = [
  './',
  'index.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-512.png',
  'icons/apple-touch-icon.png'
];
const HOST_FONT = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSI).then(function (c) { return c.addAll(INTI); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSI && k !== FONT_CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function segarkan(req, namaCache) {
  return caches.open(namaCache).then(function (cache) {
    return cache.match(req, { ignoreSearch: true }).then(function (ada) {
      var jaringan = fetch(req).then(function (res) {
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      }).catch(function () {
        if (ada) return ada;
        if (req.mode === 'navigate') return cache.match('index.html');
        return Response.error();
      });
      return ada || jaringan;
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (HOST_FONT.indexOf(url.hostname) >= 0) {
    e.respondWith(segarkan(req, FONT_CACHE));
    return;
  }
  if (url.origin !== self.location.origin) return;
  e.respondWith(segarkan(req, VERSI));
});
