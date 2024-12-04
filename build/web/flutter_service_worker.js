'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "44a8a36ce153d765fb952c4a1d954800",
"version.json": "277b8783ffcb15f2000813047ea4f135",
"index.html": "854a4b38c7a6c3e8445653e3c42cedb2",
"/": "854a4b38c7a6c3e8445653e3c42cedb2",
"main.dart.js": "484562f23af5b21eb0470f4e66e2e5e1",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "da643cd46508e87992682fd2b970eadb",
"assets/AssetManifest.json": "4aaedb1841b9d7a479e388ffd2bd0aaf",
"assets/NOTICES": "1bc23b444c909983b760adeb1e5a44e4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "631a6fdf7879384606b40a54915070ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ee13bd086f9463dc0e7e189cb0bb356b",
"assets/fonts/MaterialIcons-Regular.otf": "1c2e5b6fca49d168366559d93be71b34",
"assets/assets/images/info.png": "a67db6894e4e8a1887f742c67f1adb87",
"assets/assets/images/land.png": "0e8c6a5eca5fa74ec2cebde8b0a35459",
"assets/assets/images/treasure.png": "26b6a603f362d528189ada28fcb83903",
"assets/assets/images/our_logo.png": "12c48e02789d570004bed182474c5e64",
"assets/assets/images/avatar_pirate.png": "5d9a3b03c2883fb334fb95d59f2f3e5f",
"assets/assets/images/sadAvatar.png": "c7fd8917f0219ae49ba3ff5192999960",
"assets/assets/images/avatar_man.png": "adf1db26f262b5f1ad700265f1ef2411",
"assets/assets/images/logo_info_all.png": "e766d79adc9373b9e7a06917c739f61c",
"assets/assets/images/island.png": "638666e1836921b04ef9d78f93254bc8",
"assets/assets/images/sparkle.png": "c226670817f9552c9d07255371fef3f1",
"assets/assets/images/treasure-unscreen1.gif": "388c2c24047f909a5a071059dcc906d3",
"assets/assets/images/bottom_borad.png": "cbd94e8cfaff0d3156424ca68551e199",
"assets/assets/images/haifa_new.png": "ed79012cf4d98fdf3411d06ba4694f7a",
"assets/assets/images/answerwood.png": "e10ef1da8ce7fe193130b528a5149d66",
"assets/assets/images/pause_header.png": "e4218efc1b23f49c66a31d191925e12a",
"assets/assets/images/avatar.png": "2fc5365b8af869adad6874a4bcccb626",
"assets/assets/images/kids_cheering.mp3": "18ed0a353e1060ce27d39fe02d956586",
"assets/assets/images/logos.png": "e673c20c3dc0a5f0a4f5a85cc3592713",
"assets/assets/images/tree.png": "7606d0d1852e8c59b17fd616d0d0bd43",
"assets/assets/images/logo_shiba.png": "3d5e612cc7256fc86edb6830de24026a",
"assets/assets/images/question_label.png": "0580b9631ba6c606c927bd92e7d516cf",
"assets/assets/images/board.png": "4e75201c4358935f3a77139b7385a8cf",
"assets/assets/images/treasure-unscreen.gif": "b44ed0bb519afd07bb922c2382a924e3",
"assets/assets/images/logo_info.png": "90a9a394f2fe4bcbd1d2689f1ad4cd3b",
"assets/assets/images/logo_haifauni.png": "9e86e1880cd70cbce9b0e85f1fdad16d",
"assets/assets/images/treasure.mp4": "a42d499606f01cbc8acf9820280d0525",
"assets/assets/images/open_treasure.png": "9e74dcf9ed3adf4c3317d10ebb9a9084",
"assets/assets/images/finalScreen1.jpg": "046b7391edaa4638297d03083cc6cc4f",
"assets/assets/images/pause_board.png": "d1151199a881ba262b8d9b4b5f64ad9f",
"assets/assets/images/final_board.png": "d83a0125948df0bc7c29b22ca7a6ffa0",
"assets/assets/images/button.png": "ae4b9a0cfdaf9550de0dc4c55614d405",
"assets/assets/icons/sound_blank.png": "b23fcfde410b6049f3f7c3335e34cf6d",
"assets/assets/icons/Group-32.png": "f7567386410c1a6f2a0678880a956a68",
"assets/assets/icons/alert_blank.png": "6489f85bb2cfb35a76abaaa41ef2f521",
"assets/assets/icons/play_fill.png": "68731def10b89bdd595e2b6b6fa5a0d0",
"assets/assets/icons/Group-33.png": "423f9168687606cffa7b48eb27487322",
"assets/assets/icons/x_blank.png": "787e6c6369d0ba58ee6ef6ad9fa0631b",
"assets/assets/icons/Group-23.png": "c959a402b6a9c204263130c5a5fa0331",
"assets/assets/icons/pause_blank.png": "4763d3dea0df49fe832b87296d7628b7",
"assets/assets/icons/Group-22.png": "655d275dc303737ea46c35afb3ab0a62",
"assets/assets/icons/pause_fill.png": "3cef26087866a09d26f5da4b28b0908b",
"assets/assets/icons/Group-20.png": "54f23421837971ad9eed60ecbae04883",
"assets/assets/icons/Group-34.png": "cc059f41e513ff60b6a37604efdbf0cd",
"assets/assets/icons/x_fill.png": "cc904642af9400468a65a9dceb581b55",
"assets/assets/icons/Group-35.png": "4609f22836dc80fff48ece5ca02462ae",
"assets/assets/icons/Group-21.png": "70cb0d7829295bb571eb29132194ea53",
"assets/assets/icons/Group-46.png": "608d261ab74ee36fb187800a136e8e33",
"assets/assets/icons/alert_fill.png": "9c5921b5c611bcd34030147bbef1c911",
"assets/assets/icons/msg_fill.png": "77933dee76830dd5bab415ba470719d2",
"assets/assets/icons/Group-47.png": "293911ab2b2dbbb9105cb1bb41442cea",
"assets/assets/icons/Group-45.png": "02582aaaa7ae2dd7abb89192c86c9aac",
"assets/assets/icons/Group-44.png": "ea88dba1f43095ce0d11aa2f6644e004",
"assets/assets/icons/menu_blank.png": "fe995270336b0c8a78b52b388df53048",
"assets/assets/icons/Group-41.png": "14fc1884c3c2bdb4de90741e8694da01",
"assets/assets/icons/person_fill.png": "8145b1b50f26e3b4e220df3679995fda",
"assets/assets/icons/search_blank.png": "5ec816aca62b4fa5b5adbeacb5df1378",
"assets/assets/icons/favorite_blank.png": "27464b86ae39589beb88c85fe97c9fa4",
"assets/assets/icons/settings_blank.png": "1e5d08ff531051c7248ff1dcb2cb1482",
"assets/assets/icons/play_blank.png": "83caf0f588e7a24bffd8c8579a627e85",
"assets/assets/icons/person_blank.png": "a9e804a075781580d717cb4c1c814f05",
"assets/assets/icons/menu_fill.png": "d24b86b715c751cbaeac7bf6573e50d9",
"assets/assets/icons/Group-38.png": "06641de0507d9b16c947a5e7abbc426b",
"assets/assets/icons/Group-10.png": "257ab43ba7f7fe5d8bc86977c8ef2a0f",
"assets/assets/icons/v_blank.png": "611b15df1392989d7ed2d05065287324",
"assets/assets/icons/settings_fill.png": "adf3d382a171228eec19a5a2944b1418",
"assets/assets/icons/Group-11.png": "ceb65dfa32e561113419bfb35cc19f92",
"assets/assets/icons/Group-39.png": "feb05862307681b979bdb8a2ebc7b104",
"assets/assets/icons/home_fill.png": "b095d8b361a18abcdbd26ada3eb05826",
"assets/assets/icons/home_blank.png": "4b4a20dc383746aff95c1797ac8f8adf",
"assets/assets/icons/Group-8.png": "a190faea163ea8e6d0281d2b61d5e6a6",
"assets/assets/icons/Group-9.png": "feba0a3b776b8e5d15bd3248efc86433",
"assets/assets/icons/msg_blank.png": "36b4301a37512a1f5985a8917ad70822",
"assets/assets/icons/favorite_fill.png": "972ffe272dae2aee2805c2a1c29fe706",
"assets/assets/icons/sound_fill.png": "06201e2aa2599eb1e668ccd03a7a6b28",
"assets/assets/icons/Group-17.png": "98d78e85024a63cbfdd411eda669461e",
"assets/assets/icons/Group-15.png": "0a48419e6c9a4205d2a5cfd4e30277bc",
"assets/assets/icons/v_fill.png": "cc3379dd177f2e3bac051e1d9bdb4e33",
"assets/assets/icons/search_fill.png": "8f801f63da85487947bdfce7c2f8c1b4",
"assets/assets/icons/Group-14.png": "42b52d02e912dbad3dda28bb85f1b760",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
