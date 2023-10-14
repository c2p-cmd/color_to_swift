'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e6fd84decfa793a8c7bbefd830a79859",
"index.html": "68b94406172b754f7ae845eb72fc668d",
"/": "68b94406172b754f7ae845eb72fc668d",
"main.dart.js": "d28473bf8026c507ffd6e29a87d6f080",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "96b7f69e8fa6055bbd835244f266d50b",
"icons/Icon-192.png": "7a128b8e5371b9a9b89994baa04399ed",
"icons/Icon-maskable-192.png": "7a128b8e5371b9a9b89994baa04399ed",
"icons/Icon-maskable-512.png": "a8b7dadf493025dcc84c209a427c194d",
"icons/Icon-512.png": "a8b7dadf493025dcc84c209a427c194d",
"manifest.json": "921740e717d3456f475d64941e72c967",
".git/config": "b52229cbbfe8ebff828aa76a7cb2dcd3",
".git/objects/57/98ca5321fe362dbb347152c3083553c971f40a": "033fae20a619a3edd1915620d1574fe9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/b3697a0c12bc4702a2d5ea713e7936c6193fa4": "1ad6ae6b4b99e9afc2c10a057a79e593",
".git/objects/04/c093fcd6c2e6cc4ba5e962d703571c373e8c34": "d656190db909b532b7b6d0a69930fcfb",
".git/objects/6a/f25d29d1d4a9209c3dd8ae6786b7cff2cbd865": "c3c6c0f01adbdeb16750461f9979d885",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/58/8a77e8af6254f80ede91179fed13b854c954a1": "6739ad6c0dbbd8fc461c5afd97d38011",
".git/objects/5a/07761a382948514ef54755ff1e54cdba6826dc": "0992f14c9e800add84a8569dee16755d",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9c/a38f600b2e1e10d71359dbdf8a3018e63d0a67": "7ea78ce6bf4dcba133a4e1f4cc7da062",
".git/objects/a4/eab858f69e5071661f0f4f35da401bde9414fe": "7e0e17c230ea1b87c7c3af77aec91a2b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/1404e7edc0c85ff3f8f5a974f0cdeda6f4aa5a": "6bb9b31cd5a837ccab8a8e71f366f4de",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/3685eb5348a77832a641b20b488078fe4e57c3": "e0bc30cc67abc71708dd2766d0012820",
".git/objects/f2/1501e72346ab9c7aeba9493caebff61f45ea0a": "7961a1c5c9cdd360c09a0399fe2c348e",
".git/objects/f5/4b154c214fb0c20cc1f181ea97843862d95587": "cc5bb259f32f99f0d16ca90c4aae5867",
".git/objects/e3/1285fa773d5e98e5bea85c1d9b46ec4c0d1c48": "7e118e0e7491d4de02368e0808cc4dd7",
".git/objects/ed/836734c3b18eb16a83536b8171a13f811717bd": "1daae03e239f1340d09c62008f5ee1bb",
".git/objects/18/413975e6b488b87ed9411365da14f8deb81895": "d0f02fa96ea6b167202fcc1d45765700",
".git/objects/7d/39f31947803ab9164910123986a1a0a8c5c537": "4f1dd180d076cceedcf721e24307fd58",
".git/objects/89/da50345d87becd34ebb05c1ac0dd2a1d5aef4b": "1c4173c7dd04445989d1255462b12dd3",
".git/objects/73/754a1738d3cc9bb5ac91a867df528320e06ab8": "8488abab263c7d94bbb81b0635730ae0",
".git/objects/17/c956013e98b875f44010b8c02659873a6018d4": "fae8995c77c10b1859a7a5ff440b8cb9",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/b5d598671687ac0a11b956689151e2ac1ee8d7": "255fab25e436e4d12628407959bb196c",
".git/objects/81/643750a48321c8589165fd09ea4a95b6fdc278": "703f12ee7fd1c2a743bddd4095510432",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/f827409dd833d61d3fc1d10087502de6785032": "338dc1652c90090066a848da2d589102",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/c32eeb5317581640324185fa14794bbe631def": "aa71d3e76b63d0c026c58e8248195ebf",
".git/objects/06/3dd20fa30c02cf0305a1146e41608f4ea7cde5": "0b41e30a368cbf4e9edc21903f0c9092",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/c5d61dc3ded6e42bafd3139792d472ab6ef456": "05433cf4c50b85ce6aeafa3df8458367",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9745a614076e25ff1bf70ecde1f6de35c41354": "f15bdee25ec9f86b670b9d03096b7a0d",
".git/objects/ea/78c5579d4d3e1b3758916a38544710600c6551": "be13eca7b6b57f528436b3ba623e0145",
".git/objects/e1/fcd53ff67ca8312431ed92da2b5319b108894b": "92cb920c7a8a35fac5d560d870e4e8dc",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/1b2c88945194ab3adf52945eedb3a8cc8aac44": "452ee0046735f4bad900c4a1e84a9f38",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/ce/3dd118152935489b95755d66d44f03b73c46e5": "db22e42afdc6924dc9c0638c75be8d6e",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/abad903e15c245ed6cf6c41ee015e1e9783ea7": "86fdb8294149295a3a514c273d2ca4c8",
".git/objects/24/0ed052cf7c19861992c0d74eb483687be2acb2": "3cfc4e554fd2a05004238435d4020616",
".git/objects/24/54dfec91ee0a4b15f4a07b762160e4d09a9ac5": "ce0275d3b89fd5cd209b06de6e84617b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "9b15e7214e2e9d24572ceafeb86b8b8d",
".git/logs/refs/heads/main": "1300f9e2572b7431b4ce605449e913d1",
".git/logs/refs/remotes/origin/main": "e5fe10015368bb96ea7f3470f257fcbc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b027395d8ae9b927c75b54f4ad15f97a",
".git/refs/remotes/origin/main": "b027395d8ae9b927c75b54f4ad15f97a",
".git/index": "75f1c7c5795439bb198c90399f532c05",
".git/COMMIT_EDITMSG": "3824fa491963d00325a96e4f7f013320",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "efef659f1dbd4009c842d1c39b7dbbce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "e717b8b9f5a740987cff0e5feb1441c1",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
