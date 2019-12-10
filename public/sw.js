/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/bg.jpg",
    "revision": "83464957f372f01b0d892135a3cbc2f1"
  },
  {
    "url": "images/favicon.png",
    "revision": "c576797e1877e6abac4ecddd6f0f7848"
  },
  {
    "url": "images/loader.gif",
    "revision": "34cf53375f840ece721fc985de40d881"
  },
  {
    "url": "index.html",
    "revision": "faa0bb4308a8e97ddfde14851ef8ab19"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
