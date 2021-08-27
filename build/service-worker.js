const CACHE_NAME = 'h5HDf4UKg8';
const urlsToCache = [
  "/",
  "/assets/example_typings_2.png",
  "/assets/example_typings.png",
  "/icons/logo192.png",
  "/icons/logo512.png",
  "/index.html",
  "/service-worker.js",
  "/static/css/main.241160e1.chunk.css",
  "/static/js/2.1750c387.chunk.js",
  "/static/js/3.74ba8da4.chunk.js",
  "/static/js/4.99ffa4d5.chunk.js",
  "/static/js/5.3b90d0df.chunk.js",
  "/static/js/main.34aea85e.chunk.js",
  "/static/js/runtime-main.99cd0b4f.js",
  "/static/media/background.5b447c03.png"
];
// const appIcon = '/icons/favicon.ico';

// array routers on fetch not will cache
const BlackList = [
  'socket',
];
// https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications#request_permission

// const urlB64ToUint8Array = (base64String) => {
//   const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
//   const rawData = atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// };

// const SubscriptionOptions = {
//   applicationServerKey: urlB64ToUint8Array(
//     'get_public_key_on_firebase',
//   ),
//   userVisibleOnly: true,
// };

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[serviceWorker] add all cache from array');
        return cache.addAll(urlsToCache);
      }),
  );
});

this.addEventListener('activate', (event) => {
  // ativa steps
  console.log('[serviceWorker] ativo');
  event.waitUntil(
    // registrar o push
    //  this.registration.pushManager.subscribe(SubscriptionOptions),
    // limpar versão antiga
    caches.keys().then((cacheNames) => Promise.all(cacheNames.map((thisCacheName) => {
      if (thisCacheName !== CACHE_NAME) {
        console.log('[Service Worker] Removing caching files from', thisCacheName);
        return caches.delete(thisCacheName);
      }

      return false;
    }))),

  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request)),
  );
});

/**
   * cache all fetch data make inside app, this is not really usefull in some cases
   */
// this.addEventListener('fetch', (e) => {
//   e.respondWith((async () => {
//     const r = await caches.match(e.request);
//     if (r) { return r; }
//     const response = await fetch(e.request);
//     // posts, put, delete are not allowed to cache
//     if (e.request.method === 'GET' && !BlackList.includes(e.request.url)) {
//       console.log(`[Service Worker ${e.request.method}] Caching new resource from ${CACHE_NAME}: ${e.request.url}`);
//       const cache = await caches.open(CACHE_NAME);
//       cache.put(e.request, response.clone());
//     }

//     return response;
//   })());
// });

//  this.addEventListener("push", function (event) {
//    /**@type {{body: string, title: string, icon: string?}} message */
//    const message = event.data.json();
//    console.log(message);
//      var options = {
//        body: message.body,
//        icon: message.icon||appIcon,
//        vibrate: [100, 50, 100],
//        actions: [
//          {
//            action: 'explore',
//            title: 'Explore this new world',
//            icon: message.icon||appIcon
//          },
//          {
//            action: 'close',
//            title: 'Close',
//            icon: message.icon||appIcon
//          },
//        ]
//      };

//      event.waitUntil(
//        this.registration.showNotification(message.title, options)
//      );
//  });

//  this.addEventListener("notificationclick", function openPushNotification(event) {
//      console.log("Notification click Received.", event.notification.data);
//     event.notification.close();
//    //do something
//  });
