const CACHED_VERSION = 1;
const CACHE_NAME = "offline";

const OFFLINE_URL = "offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
    })()
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if ("navigatorPreload" in navigator) {
        await self.register.navigatorPreload.enable();
      }
    })()
  );
  self.client.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          console.log("Fetch failed, running offline page", error);

          const cache = await caches.open(CACHE_NAME);
          const cachedResposne = await cache.match(OFFLINE_URL);
          return cachedResposne;
        }
      })()
    );
  }
});
