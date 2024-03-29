/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// eslint-disable-next-line no-unused-vars
const { assets } = global.serviceWorkerOption;

// eslint-disable-next-line no-unused-vars
self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
});

// eslint-disable-next-line no-unused-vars
self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
