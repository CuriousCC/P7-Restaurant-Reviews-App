let cacheVersion = 'cache-v1';
let filesToCache = [
    './',
    './P7-Restaurant-Reviews-App/',
    './P7-Restaurant-Reviews-Appindex.html',
    './P7-Restaurant-Reviews-Apprestaurant.html',
    './P7-Restaurant-Reviews-App/css/styles.css',
    './P7-Restaurant-Reviews-App/js/main.js',
    './P7-Restaurant-Reviews-App/js/restaurant_info.js',
    './P7-Restaurant-Reviews-App/js/dbhelper.js',
    './P7-Restaurant-Reviews-App/data/restaurants.json',
    './P7-Restaurant-Reviews-App/img/1.jpg',
    './P7-Restaurant-Reviews-App/img/2.jpg',
    './P7-Restaurant-Reviews-App/img/3.jpg',
    './P7-Restaurant-Reviews-App/img/4.jpg',
    './P7-Restaurant-Reviews-App/img/5.jpg',
    './P7-Restaurant-Reviews-App/img/6.jpg',
    './P7-Restaurant-Reviews-App/img/7.jpg',
    './P7-Restaurant-Reviews-App/img/8.jpg',
    './P7-Restaurant-Reviews-App/img/9.jpg',
    './P7-Restaurant-Reviews-App/img/10.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheVersion)
            .then((cache) => {
            return cache.addAll(filesToCache)
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.filter((cacheName) => 
                    cacheName.startsWith('cache-') &&
                    cacheName != cacheVersion)
                    .map((cacheName) => 
                    caches.delete(cacheName)));
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open(cacheVersion)
            .then((cache) => cache.match(event.request)
                .then((response) => response || fetch(event.request)
                    .then((response) => {
                        cache.put(event.request, response.clone());
                        return response;
                    }))));
});
