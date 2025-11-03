'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fe82379dbacabfa3a45f36a15dea576b",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "6cfcbbde98b54511e6bae01fb1d4ef3b",
"/": "6cfcbbde98b54511e6bae01fb1d4ef3b",
"main.dart.js": "a12105dd6bf51e47bb96b83bc52fdad3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "37dd3bcaf3986e47d7df41211e5b1d4d",
"icons/Icon-192.png": "60a113ebe68697991c9e740c931d5468",
"icons/Icon-maskable-192.png": "60a113ebe68697991c9e740c931d5468",
"icons/Icon-maskable-512.png": "57be9638c56183ec2612898b5885a096",
"icons/Icon-512.png": "57be9638c56183ec2612898b5885a096",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/config": "bc1c8b889f1c671d962e1d6c99eabf53",
".git/objects/0c/f332585c13ad6b270972b8753c6ded9b2ba555": "032c0997b42c1c4bc876f80ff3010b3b",
".git/objects/3e/aac774abb0079000cb755c15b65c4d422898ee": "f8db2fb6eae756c7c35e063733561842",
".git/objects/3e/cf9117aea8a762ec20b58ab3a8f3187ccf7070": "1e34d39b54d62ffac88c47641aa17e28",
".git/objects/3b/fcf3fa0ac114b92b9313792fa544eca97fed7b": "b71c913750f9ddab121e1723b208b08f",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/967982db4d3ae7e4cfe2911ff72310655d6ae1": "196400950b8b02d27ff1305b195fdc9d",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/51/ac868d2e4ae1bd595259ed84b7b017381d96cb": "ba2f43323ba13940fda45e34aac637b4",
".git/objects/51/3338264e79384ca8cf15bf6913ad2c5e3aa40e": "ce88a270d334cc4757d318e5c3217a75",
".git/objects/3d/3f7d3a511f11688a16deff9522c80fbd810b4e": "475ff51a832dac51d969b1617aeaa289",
".git/objects/34/3b9c4db1fef22238d0c601f65031db43fa282b": "58bbee4cfca6eb3866162df2cb4a8652",
".git/objects/9c/180e753efcce5ce4a410ee031109ef75065691": "79e7d05f1b9320df7d5aaf3f6e1abc08",
".git/objects/ad/394b243d68cab32e509dc6678dab2614cc6b3e": "a0627f45e755d18dac8579d1d78f6012",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/90f0b39f6df550d90d12774b290109b0bfabe9": "fa35a66c8140012644d88ce2881aa340",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/ca/ef824f140a181d43393733002220270a5fe18e": "3feec57dfa527245e82378c879aede73",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c1/0aad9a6c6925841633bc84909a76bad13e5307": "732d961a3b115759dde0203e4d35d6be",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/86/6501a22de88d046af5e729672970a7252fef16": "e561c5cd64c79e50085bedcb8cd31377",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/2f/2300e9a61e725e8c7aba7b1572bca4c856acbd": "f1a321663bc456e22b1298b844a98924",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/31/6b071f7f6f7cb0fb96526b89477ef2017a96d3": "54a47c7528fcc506c9f302b5f4bbeebf",
".git/objects/96/6832455c23189089a2f6280e233455b6a29c40": "825ce932dd3d8574eb5582d96369f800",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/5e/41cb52b5d2d23af8a0c6d672ad73d774135bad": "d4aa9976ba6c08d7253368aec2fb0fe5",
".git/objects/01/7199fca884815d1aa5cc3341351417a815c612": "f7a0e8e3c6930d69ad78f2fad856f34f",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/55/7ab5952b63f390424e8162f8c98d17f9043a97": "7d002d28a49c94cfd47c43f59be5c98b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/de/94c303264adbd1e3280be53765b8e0fcba25be": "6599e39a2648c6065d014723f7573975",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/f0/aeb037f718e082014f8e481de1fbcb9bdc0c43": "2ff3ce893dd45c44d0073355e9bfb0b9",
".git/objects/f7/75c084e5ddbf887f120bf9f0beec002e10cd3e": "822f5883ceeeef677c2a1b8a542b5906",
".git/objects/f7/78b19680a407c3b7796a0afb34d2e172875ff1": "e45d4d9ec06958a82952e61363e03d95",
".git/objects/c5/44aeefcbc485a51d71d2079413c328a1e8903e": "99fb3970d7339b365529b1c04cb3b238",
".git/objects/f6/38cd30b863c0e1ab065487bcb95c935aabf0dd": "112346c74ec63db6e51c19a971c8cdf6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/1db7fe61df88f5392d0201c7587613c41b4f38": "545f4c4b6dd139eda6524b7151c2b1ce",
".git/objects/f8/d782a77b118874bc621c70105654ca93d00b8f": "67ea17a575034ea8967c6c3bac0bd569",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/e19ce7c80c91d1c5c0882f4ea3134ed3632bb6": "e3a41f58e771f43b449ee3145ef76a3d",
".git/objects/2c/e0c78e278105d8cc15d55a61b31045565780e5": "031ee7273eab0baf61fdfd3e5ab23c8c",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/24/8ec3f2cc9791a2380c918744069ae44ce40814": "11ad584a2e2d79c3640f2449913bd23a",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/2b/a07ddc2922b07589e2ab87f5038402d45b8d09": "25751fa0310573c9b57063cd7c5f9833",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf335657167d15e89eb31ee19f2777a2",
".git/logs/refs/heads/main": "968cae1c2769a53ec5c257a12422ad25",
".git/logs/refs/remotes/origin/main": "f3e99755867b9c03aaa4933543002b2d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3c623c7a10e7116a0846962ad9e4138c",
".git/refs/remotes/origin/main": "3c623c7a10e7116a0846962ad9e4138c",
".git/index": "f91973e195e9ffbe4c9edd3b1ee96ab0",
".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
"assets/AssetManifest.json": "41c82d76f17dd1daca93b7033d966c56",
"assets/NOTICES": "034c1c5d13b24750acb80e562d5576b1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "27f2d0b16a665895b5faac521e3f7a9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_3d_controller/assets/model_viewer.min.js": "11f3833db561a92ac9100cd43d28899b",
"assets/packages/flutter_3d_controller/assets/model_viewer_template.html": "d370dc1bc2b1dd29090c1946dbef646a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ac8175432e0af100712637f47291ada7",
"assets/fonts/MaterialIcons-Regular.otf": "969377d6a0d0ce4cc5d7457446d2e959",
"assets/assets/bg.png": "2d5f030a33854e4b2f37f940b223ec80",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
