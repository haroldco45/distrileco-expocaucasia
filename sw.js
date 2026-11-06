// Distrileco ExpoCaucasia 2026 — Vibras Positivas HM
const C = "dlx-expo-v1";
const FILES = ["./","./index.html","./manifest.json","./img/stand.jpg","./img/banner-superarroz.jpg","./img/banner-vistahermosa.jpg",
  "./img/super-5000.jpg","./img/super-2500.jpg","./img/vista-5000.jpg","./img/estante.jpg","./img/pacas.jpg","./img/qr.png","./img/icon-192.png","./img/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  // HTML: red primero (para que los precios nuevos se vean de una); imágenes: caché primero
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).then(r => { const cl = r.clone(); caches.open(C).then(c => c.put(e.request, cl)); return r; }).catch(() => caches.match("./index.html")));
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
