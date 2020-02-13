const cacheName = 'AppCache';
const cacheItems = [
  '/',
  '/styles',
  '/components',
  '/images',
  'favicon.ico',
  'main.js'
]


self.addEventListener('install', event => {
  caches.open(cacheName)
  .then(cache => {
    cache.addAll(cacheItems);
  })
  .catch(error => {
    console.log(error)
  })
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if(response) {
        return response;
      }
      return fetch(event.request)
    })
  )
})
