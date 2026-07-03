const CACHE_NAME = "PriceTracker-v0.1.0";

const urls = [
    "./",
    "./index.html",

    "./css/reset.css",
    "./css/variables.css",
    "./css/layout.css",
    "./css/button.css",
    "./css/page.css",
    "./css/textField.css",
    "./css/listItem.css",

    "./js/app.js",
    "./js/router.js",
    "./js/database.js",

    "./js/components/button.js",
    "./js/components/page.js",
    "./js/components/textField.js",
    "./js/components/listItem.js",

    "./js/views/home.js",
    "./js/views/products.js",
    "./js/views/productEdit.js",
    "./js/views/stores.js",
    "./js/views/storeEdit.js",
    "./js/views/priceEdit.js",
    "./js/views/history.js",
    "./js/views/settings.js"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urls))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});