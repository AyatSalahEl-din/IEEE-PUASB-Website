'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eee825c2d06565d707f56ad3d05707e2",
"assets/AssetManifest.bin.json": "9a21f38152d5f93a5b862aeded9a4147",
"assets/AssetManifest.json": "dfa417ec31aab3b45bd5580da814f29a",
"assets/assets/images/201.jpg": "24f0d30ad867ddb3141caeee135a8cca",
"assets/assets/images/2016%25204.jpg": "ce71cfad64af85d25aea660d6810884a",
"assets/assets/images/2016.jpg": "b35e48a1b4ad4ce91ab1e5bdabe93599",
"assets/assets/images/2018%25202.jpg": "ef14467960182bd568b09bb8b254c66e",
"assets/assets/images/2018%25203.jpg": "b2fde3b92841587d30aa8d72e6eb197b",
"assets/assets/images/2020%25202.jpg": "f58f0ed013280b76f0c2616a728bf406",
"assets/assets/images/2020.jpg": "41a552b1961c8ebbdde6703887a04137",
"assets/assets/images/2022%25202.jpg": "bccdbebb5b157209163fcd417a3b8d07",
"assets/assets/images/2022.jpg": "8e063a2395ff9da04fe718b619ba306d",
"assets/assets/images/2024.jpg": "2e82baa0f0ff2f6a94ce1471a029ff8b",
"assets/assets/images/AIESEC.jpg": "38147cdd8ec080b818c94176abb4427b",
"assets/assets/images/aosama.png": "8e41de274c12b8ea273fc039d09f1fab",
"assets/assets/images/ASPPC.jpg": "6933e05a39a10e7c610d4a58543a4e06",
"assets/assets/images/ayat2.jpg": "c234c508559218e2913f3ae2723fa87e",
"assets/assets/images/ayatt.jpg": "af4b901e41aaeb2c60ea44814b241692",
"assets/assets/images/blackSeakers1.jpg": "f99ad4ead56d4d18ec27289f7ca55340",
"assets/assets/images/blackSeakers2.jpg": "433e336e9707d834af9d405c99e0dab3",
"assets/assets/images/blackSeakers3.jpg": "f87644993ba1f08c57a5b1fbbaa11b27",
"assets/assets/images/blackSeakers4.jpg": "674860de1be56011f79d8f03af3da85d",
"assets/assets/images/blackSeakers5.jpg": "d40f68eff47958f8a09bd711e8d06c0a",
"assets/assets/images/BlackSeekers.jpg": "a4c0f5a0608ffd79d6e15e16e22afcfa",
"assets/assets/images/BlackSeekers2.png": "2a0a858b1b04db5807292aa94bba95fc",
"assets/assets/images/Blue%2520Brain.jpg": "8be4638306cd8c11fe327059bebc5d6f",
"assets/assets/images/blue.png": "9ae6be6988463b1a2d5805ec37a894c1",
"assets/assets/images/bluehoriz.png": "d3419170f6a77085e18ceed8d02d23c3",
"assets/assets/images/book_your_seat.png": "9c864cbb988e48f6845c262d9fcca218",
"assets/assets/images/cairoICT.jpg": "aeb8bd44f00f4c379e5a79fb80320b89",
"assets/assets/images/cairoICT1.jpg": "d636f7b659b7da11c7852de83b7fe5dd",
"assets/assets/images/CareerDebate.jpg": "867c266c4f4797a8b4e9212fd80f1634",
"assets/assets/images/careerDebate1.jpg": "a73ee5e24a3fbc263f6cb67b203b95e6",
"assets/assets/images/careerDebate2.jpg": "76fd8ccb6bbd4506e6ba12e379965ae8",
"assets/assets/images/careerDebateV2.jpg": "4f1bca8c7ce2af156c951e72c49e5441",
"assets/assets/images/careerScope.jpg": "2980e392f57dada36816b580262ef124",
"assets/assets/images/EED.jpg": "2117a77d1f1029646c5e7dea684d9958",
"assets/assets/images/EED18.jpg": "a727f8833a8ff1357150dbc0f137d11c",
"assets/assets/images/esmail.png": "75c3db89a0e184b1b349780c5a9757b5",
"assets/assets/images/event1.jpg": "f31dda30053a79d2e53b8ca91d02111d",
"assets/assets/images/event2.jpg": "da767706af8e4eeed86f641332d5bb48",
"assets/assets/images/event3.jpg": "33e4cd6cc639891d7ae23f6a6a29d299",
"assets/assets/images/EYouth.jpg": "e4678ec229c8f9f3809e8f38de80c840",
"assets/assets/images/EYouth1.jpg": "c8f9f8f7fc0a607edbe7d7f0f1a2be11",
"assets/assets/images/EYouth10.jpg": "fde1d0de4b46b86cd07ba2e304ab07c6",
"assets/assets/images/EYouth11.jpg": "da0dca28179ce35665f093ca7cd79cf0",
"assets/assets/images/EYouth2.jpg": "3a4a1b28272ffb8495c5d3b5667d7dcc",
"assets/assets/images/EYouth3.jpg": "351b615e1aca13bc6bdab8f5666f7e24",
"assets/assets/images/EYouth4.jpg": "b6ed429516265f4101cfc541ae763296",
"assets/assets/images/EYouth5.jpg": "e8302941bc9d00baeaf0536adbafa69b",
"assets/assets/images/EYouth6.jpg": "5953959b7af25b0a6a44db23290a23bd",
"assets/assets/images/EYouth7.jpg": "11d6af0816e63fab8f19d5e28b19950c",
"assets/assets/images/EYouth8.jpg": "bc15375c3d29813a534e25ddc0e427b5",
"assets/assets/images/EYouth9.jpg": "30f308d1ea3e5458e933fc8b505a56c3",
"assets/assets/images/FOCUS.jpg": "2d03cdd566b8841cd9b01384ec4b6e04",
"assets/assets/images/focus1.png": "7d9d276550aeb967ab2563b2aff6b14e",
"assets/assets/images/focus2.jpg": "f98a5f7e3f216c2666c9ed112662c3f1",
"assets/assets/images/fundraising.jpg": "75eb54c8159b39dbf07c5cbce80421fb",
"assets/assets/images/FundRaisingWorkshop.jpg": "e8afb9902f05c99a3296f4acc3e746df",
"assets/assets/images/getHired.jpg": "4459ffdacfa33252a67abf9ab5436e52",
"assets/assets/images/hamshary.png": "008ebe8e8f0a23032ed8c08919387755",
"assets/assets/images/hana.png": "cb67269cb1e7843ecbd95412850d8f0c",
"assets/assets/images/hozaifa.png": "4e242d9b25dc232b4203d908fbcb0ad9",
"assets/assets/images/IBM1.jpg": "3afc70095159fa98a5dfc787c100575c",
"assets/assets/images/IBM2.jpg": "cb93a591f19e12af069cf7c61c79e771",
"assets/assets/images/IBM3.jpg": "5176e114f814570a0b324dd65e83f720",
"assets/assets/images/IEEE.jpg": "0a7edb247cbbe7ff9fa7721cb3784338",
"assets/assets/images/Insights%2520from%2520Industry%2520Experts1.jpg": "e850ebfa659abd35020c3525a6559586",
"assets/assets/images/Insights%2520from%2520Industry%2520Experts2.jpg": "b63e06290853fa70c17b3e52432d6a87",
"assets/assets/images/Insights%2520from%2520Industry%2520Experts3.jpg": "3ee9b64fda7b01b0d423e157ef6e6a78",
"assets/assets/images/Insights%2520from%2520Industry%2520Experts4.jpg": "0a52aaa6938068922feb49ea91eae213",
"assets/assets/images/Know%2520Your%2520Committees.jpg": "e5f0cced04bfb196ffdee4e392d39f9e",
"assets/assets/images/Know%2520Your%2520Committees1.jpg": "3b1e7f63ec1512a34880d06f675e309e",
"assets/assets/images/Know%2520Your%2520Committees2.jpg": "0b2d0e6cb5d63e3ac9d532695b1f61b9",
"assets/assets/images/Know%2520Your%2520Committees3.jpg": "eb2f9094e5ee8de18501b8244193d5aa",
"assets/assets/images/leadingurcareer.jpg": "b9b401dac6d9b10c14903b102f70f793",
"assets/assets/images/location_icon.png": "f9b55068ebe5de9d3fa84dc5899fd28f",
"assets/assets/images/logo.png": "b2e93368f912f0d3df1ae3681379b450",
"assets/assets/images/marchelino.jpg": "26add916ba248c365a859f5ecd244df3",
"assets/assets/images/mariam.png": "129cc57b7055b9551cb9d4202f916045",
"assets/assets/images/Mask%2520group.png": "95edaf8eed3e650c553e386edb61951d",
"assets/assets/images/MegaBrain.jpg": "1022aa01ba7c796bebbda37039b34b66",
"assets/assets/images/megaBrain1.jpg": "8ba988e2d80babf197438e2af1a528d2",
"assets/assets/images/megaBrain2.jpg": "b6525c190ffdc9e8c972fb8797d097fb",
"assets/assets/images/megaBrain3.jpg": "71343a46756d487b91ef06e75d29950f",
"assets/assets/images/megaBrain4.jpg": "76a2e6fc1bbcba627fc2128bf3270293",
"assets/assets/images/menna.jpg": "a3e54b420878b63e0a7c11ed1f36f581",
"assets/assets/images/microsoft%2520word1.jpg": "0ea579610cc7f9f4afd1e4ef20af89c8",
"assets/assets/images/microsoft%2520word10.jpg": "b08cdad5f62835179437139136366794",
"assets/assets/images/microsoft%2520word2.jpg": "1a36162371d5d5c499e0a7b92342ddcb",
"assets/assets/images/microsoft%2520word3.jpg": "de8f15a60e2aca3d3f7f85681c893f35",
"assets/assets/images/microsoft%2520word4.jpg": "352e392700f46b4b01577563e7fdcf77",
"assets/assets/images/microsoft%2520word5.jpg": "00ed43f091c761315e2bdef3f8958a38",
"assets/assets/images/microsoft%2520word6.jpg": "0373f615a11440e89b23d9a00c9346d2",
"assets/assets/images/microsoft%2520word7.jpg": "6d0a53ff9bfe419bb0664cc5e063d972",
"assets/assets/images/microsoft%2520word8.jpg": "bdc6934d97682ab8ba82dd3ba4a61401",
"assets/assets/images/microsoft%2520word9.jpg": "695b96b85260118f88cacc657c22ac0e",
"assets/assets/images/Mid-year.jpg": "2504f1faaa575472ef56a439a7469607",
"assets/assets/images/n.png": "d73ddf9a22e209561be3d4e64923cc5d",
"assets/assets/images/nadia.jpg": "46c9b867a1f2626abab75a3cd349732f",
"assets/assets/images/OD1.jpg": "4af6a7d1845d13445841683d416dddfa",
"assets/assets/images/OD2.jpg": "506edcbd1e1602d2c73100809d7f54f6",
"assets/assets/images/OD3.jpg": "62a4a85e0faca111ed0efe0411b850e8",
"assets/assets/images/OD4.jpg": "846c7d5643980977598a8380fedcd411",
"assets/assets/images/OD5.jpg": "bfb9ea768833c25a68fade693aee8ad2",
"assets/assets/images/OD6.jpg": "8ac1cbceb34ffc2498a739f0d808e28e",
"assets/assets/images/OD7.jpg": "d75321770b443238223dd545be2a4ec4",
"assets/assets/images/omani.png": "21042d8ae14c4af6e964fcf0e5ef5d8e",
"assets/assets/images/osama.jpg": "28e0ee16cc85b7586371df583e88dc05",
"assets/assets/images/Partners.png": "7119db3ef40759b871d821de52977392",
"assets/assets/images/Picture1.png": "c43affc6119fe432fad4b24803abd4e0",
"assets/assets/images/Picture2.png": "c1038302db8d9445829dddac37bab0a2",
"assets/assets/images/Picture3.png": "40b2d8a3ce7eaf24c5703e362c887196",
"assets/assets/images/Picture4.png": "a0f99f428eeeb1527d21be71c9818d6b",
"assets/assets/images/Picture5.png": "1ece1700c4acc654fe673a6caa4de767",
"assets/assets/images/Picture6.png": "022dc5d7033094e4171ce5fa3121e785",
"assets/assets/images/projectshero.mp4": "74fd38a3f304003797c12dde5ffaa41c",
"assets/assets/images/RAS.jpg": "7ace4c736f6b0285c8e7e5b4401dd04f",
"assets/assets/images/RAS0.jpg": "99e978833320658e4441245e69f8cf9f",
"assets/assets/images/RAS1.jpg": "035c42bb295fdedbcf1a2ab19164ca28",
"assets/assets/images/RAS10.jpg": "fc2f924ce24271a4e0b45684fc998ed9",
"assets/assets/images/RAS11.jpg": "3f264b5c92a35a51cedf00598ee922dc",
"assets/assets/images/RAS12.jpg": "637955b01efcb3342f793182b709024c",
"assets/assets/images/RAS13.jpg": "dc98f9a45771732ee141c91d2822c0fa",
"assets/assets/images/RAS14.jpg": "b8cedad3de23739eea0796c50a2593b7",
"assets/assets/images/RAS15.jpg": "a8b53fe3475f13bc1685f29c4d625e54",
"assets/assets/images/RAS16.jpg": "a8ec8e44e4c1aed12a747f04b89491c5",
"assets/assets/images/RAS17.jpg": "84ba8514412cb5c4919c0d2c9431e94b",
"assets/assets/images/RAS18.jpg": "c82e1017f5bd0526360e90d48fec4fb8",
"assets/assets/images/RAS19.jpg": "26334de947fc7596a7303fd6a3b410a2",
"assets/assets/images/RAS2.jpg": "26f0f12117614a83bb59e465e70b5852",
"assets/assets/images/RAS20.jpg": "964bb1f0f72d190daa07ceaffcef8faf",
"assets/assets/images/RAS21.jpg": "1eeb9363fb48b30173e64f13f89df6c2",
"assets/assets/images/RAS3.jpg": "749ab6c3f3ae9be20306de8db95eb42b",
"assets/assets/images/RAS4.jpg": "38f5ed5fbe3aa697921a4b76d88d92e8",
"assets/assets/images/RAS5.jpg": "f3854f9e85897a7157ccb748154c70e4",
"assets/assets/images/RAS6.jpg": "df37c9f829d5799103912995bc5df965",
"assets/assets/images/RAS7.jpg": "92356254bb57d2a31a0ef05949d0a52e",
"assets/assets/images/RAS8.jpg": "7b15308b7fffb0f06bc9980225e56e15",
"assets/assets/images/RAS9.jpg": "e6271585252d94058e38c76f2d1d1cfd",
"assets/assets/images/rec.jpg": "7db5a23917be0e46368d1b2e9eb76b4b",
"assets/assets/images/rec2.jpg": "073e0e5b654ea6bd1dc494d3fda50987",
"assets/assets/images/recruitment1.jpg": "6eeaf20cce01b22bdcab1fa524a03802",
"assets/assets/images/recruitment2.jpg": "c9fae7e4d645cacc4a1a0dc914d9aae1",
"assets/assets/images/Recruitment2017.jpg": "78e1743ee0c78f9dd8992e009bc9ade9",
"assets/assets/images/recruitment3.jpg": "cc21fb0f1cff1e3c71ba69390c126de3",
"assets/assets/images/recruitment4.jpg": "55640e5223e0a3acab470c09271cb2bf",
"assets/assets/images/shahd.jpg": "c6027136213604fc2c02166490ab633a",
"assets/assets/images/sur1.jpg": "bd0f37491486a6fa138526ed92403701",
"assets/assets/images/sur2.jpg": "1e56e14465d3cb0674845ef8cc4f9fe6",
"assets/assets/images/surrender.jpg": "7d8938d6e8d8c526ed4d204ff74e104d",
"assets/assets/images/tarek.png": "4f3c9fef784af0d7ba4b8b1acfe4015d",
"assets/assets/images/volRec.jpg": "1351fd242af57bfe33d03d740c969fa9",
"assets/assets/images/volRec1.jpg": "5fc012155328741419d299fd14e76349",
"assets/assets/images/website_colors.dart": "b93a2507f756d34288ee2c50a3a899fc",
"assets/assets/images/white.png": "c43472d050722261e35523cf612ba9a9",
"assets/assets/images/whitehoriz.png": "85a7510a46970f22b6d9da0c8f60cc01",
"assets/assets/images/workshop.jpg": "8c14e78da32bebee96c8469f87dad3b8",
"assets/assets/images/workshop1.jpg": "98255035190a88239a142f5dfc8aea2d",
"assets/assets/images/workshop10.jpg": "3ff4f620bf5ed3d2838086a4000f3613",
"assets/assets/images/workshop2.jpg": "43c82a107bb0df484be2d170f4861344",
"assets/assets/images/workshop3.jpg": "4c2655f653b3eed7afd673a75263802f",
"assets/assets/images/workshop4.jpg": "3ddea906ebfe11e64047aadab915aea3",
"assets/assets/images/workshop5.jpg": "0ee3707661dc6e1c48e343078f8d5891",
"assets/assets/images/workshop6.jpg": "69b1b6fbe4481d9c7eb50ab3be5f3e4a",
"assets/assets/images/workshop7.jpg": "92a6291de201be9cbfa610dfada430d9",
"assets/assets/images/workshop8.jpg": "d80eab213db549d08e759fd428b47f38",
"assets/assets/images/workshop9.jpg": "513b008fa4092e949eb70e5e21f69728",
"assets/assets/images/zyad.png": "76f43dc27c1762678211e8c01fb6ccd3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "3bcde5151a2b51979cf2a5d11442d814",
"assets/NOTICES": "d88c22f94d2ac4f491b21fd8e5515d92",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c8955389283c13d8d3db2e290ede2c62",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "e387b93df0e48f57db3ba80857aae6cf",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f02e4b723878574e24b937d7d76b73c9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8c76d55d645b8adb81b78bd91ecc2991",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9f0ca1bf1fa7b5a229cc5a11691e4ce",
"/": "c9f0ca1bf1fa7b5a229cc5a11691e4ce",
"main.dart.js": "462ec8662ccf70c4c9d0434f0d3febfe",
"manifest.json": "c93441aa0c6b7a67bbad9efb8961e365",
"version.json": "b57441faf14fad5fd9da2d59b4d893f6"};
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
