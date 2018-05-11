const CACHE_NAME = 'my-app-static-files-v1';
const CACHE_DATA_NAME = 'my-app-data-v1';
var urlsToCache = [
    '/',
    '/app.js'
];

self.addEventListener('install', function(event){
   
    console.log('service worker installing', event);
   
    return event.waitUntil(
        self.caches.open(CACHE_NAME)
            .then(function(cache){
                return cache.addAll(urlsToCache);
            })
    );

}); 


self.addEventListener('activate', function(event){

    console.log('activatinf',event);

    var cacheWhiteList = [CACHE_NAME,CACHE_DATA_NAME];

    return event.waitUntil(
        self.caches.keys()
            .then(function(cacheNames){
                return Promise.all(
                    cacheNames.map(function(cacheName){
                        if(cacheWhiteList.indexOf(cacheName) === -1){
                            return self.caches.delete(cacheName);
                        }
                    })
                )
            })
    );
});

self.addEventListener('fetch', function(event){
    console.log("Fetch",event);

    // if(event.request.url === 'https://loremflickr.com/cache/resized/968_41745033742_6f72e73a7d_z_320_240_nofilter.jpg'){
    //     event.respondWith(
    //         self.fetch('https://loremflickr.com/cache/resized/909_27976427218_c6df6d7b55_320_240_g.jpg', {mode: 'no-cors'})
    //     )
    // }

    var dataUrl = "https://api.github.com";

    if(event.request.url.indexOf(dataUrl) === -1){
        event.repondWith(
            self.caches.match(event.request)
                .then(function(response){
                    
                })
        )
    }else {

    }





});