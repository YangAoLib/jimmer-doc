(()=>{"use strict";var e,a,d,f,c,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var d=r[e]={exports:{}};return b[e].call(d.exports,d,d.exports,t),d.exports}t.m=b,e=[],t.O=(a,d,f,c)=>{if(!d){var b=1/0;for(i=0;i<e.length;i++){d=e[i][0],f=e[i][1],c=e[i][2];for(var r=!0,o=0;o<d.length;o++)(!1&c||b>=c)&&Object.keys(t.O).every((e=>t.O[e](d[o])))?d.splice(o--,1):(r=!1,c<b&&(b=c));if(r){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[d,f,c]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var c=Object.create(null);t.r(c);var b={};a=a||[null,d({}),d([]),d(d)];for(var r=2&f&&e;"object"==typeof r&&!~a.indexOf(r);r=d(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(c,b),c},t.d=(e,a)=>{for(var d in a)t.o(a,d)&&!t.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,d)=>(t.f[d](e,a),a)),[])),t.u=e=>"assets/js/"+({28:"df566e5d",51:"5b607569",132:"da8fa872",205:"5baa24ad",273:"8bec251d",334:"4408401f",447:"4adc2d26",451:"9d7036c4",470:"107c3b9d",528:"a855791a",672:"3bcfe093",784:"a91a23f8",837:"bf8f7229",839:"6474a3ed",868:"61e6a4fd",871:"8adb4832",931:"d677ce2f",989:"6f4e7a69",1008:"9a16adfe",1091:"f56e78b7",1095:"8a2bd063",1166:"fc750769",1203:"407f6496",1231:"ebc3df01",1235:"a7456010",1239:"5e095de7",1240:"bbdeeff5",1396:"2076d7e2",1455:"3da1f085",1468:"62f23fb6",1469:"d5207b37",1481:"bc71a6b4",1544:"b7f509bb",1629:"e81a5e74",1721:"e7a18048",1731:"f6201957",1752:"4bdb2ae3",1755:"9374caf7",1787:"9656c889",1794:"d680dda8",1797:"dcbdfd9b",1857:"42755155",1861:"1eff7c4f",1903:"acecf23e",1927:"7430318d",1939:"dfe337b2",1949:"5d623b19",1956:"42ce2973",1957:"a6ad7a7e",1970:"c897243c",1972:"73664a40",1989:"25f9c634",2e3:"86a4ae39",2011:"47fb53f1",2029:"ffa3d5f9",2033:"06ea8d5a",2081:"484c6700",2138:"1a4e3797",2156:"568e6e8d",2260:"fa699350",2261:"38ece08d",2309:"30250215",2359:"5e9ec0ef",2416:"cd207294",2462:"6ffc7e7a",2537:"f333202e",2649:"cfbcfe03",2711:"9e4087bc",2761:"5e90d3b6",2934:"5d196ef9",2951:"9465a832",2956:"cc8ed879",2971:"afc3a651",3027:"abd50211",3120:"4f098fea",3156:"cb940960",3163:"629ea2b5",3227:"916803e4",3235:"cc7729f9",3238:"0d6c963d",3249:"ccc49370",3250:"72dca024",3252:"ad5f7726",3271:"1d02c46b",3288:"80991770",3293:"f9ee7f00",3324:"16b7d3f2",3394:"d269fc1f",3405:"88b3fc4f",3437:"5860aa8a",3482:"d3465bcd",3487:"ec8b5733",3516:"88997b11",3603:"c7fe7dac",3637:"f4f34a3a",3639:"dfeeb4df",3655:"2dc448b9",3656:"864d6b27",3658:"8e47f816",3669:"c9d443ab",3682:"3df33f8f",3694:"8717b14a",3738:"41888769",3795:"dd802bfb",3833:"a6009b86",3915:"f1409206",4061:"a4a3b69f",4134:"393be207",4184:"89bd3f0c",4212:"621db11d",4214:"bc9add9e",4273:"24e17b6c",4285:"99dce9cd",4323:"d11b12e6",4335:"06f7bd05",4358:"b4700301",4392:"72c6222a",4433:"a3c63783",4462:"a6ed4384",4583:"1df93b7f",4591:"39c23a61",4638:"77acfde6",4662:"d3dc288c",4707:"a6206f03",4729:"7cb6776d",4768:"dbc856af",4780:"7897bcf9",4813:"6875c492",4855:"567d95c3",4921:"138e0e15",5019:"20af3086",5149:"38b00337",5169:"969fe070",5197:"c731e6cd",5211:"443edfdb",5230:"03a253f5",5263:"258a8d64",5270:"65e8bed6",5292:"ab5e0c9d",5512:"6172360d",5525:"ee507bff",5533:"699a1cfa",5557:"d9f32620",5637:"322d44ed",5705:"87e9b2f1",5742:"aba21aa0",5751:"cfe85388",5787:"f2abe41a",5848:"f0b167d3",5872:"af98a778",5963:"1d3cf7ca",5966:"b8aaa72c",6031:"26c35467",6061:"1f391b9e",6108:"49825b4e",6298:"d541fe11",6340:"7b1ccd6c",6400:"31ebed5b",6401:"ac01436f",6447:"fc8aeb01",6465:"f1611423",6470:"0de66671",6472:"82347b07",6568:"e45d772c",6602:"739494fa",6623:"7eb06729",6627:"406b5e19",6646:"d0a69964",6799:"920fcc92",6842:"d319e4fa",6862:"4c821652",6885:"6292c79f",6922:"5011e362",6925:"982676d6",6934:"acff083d",6972:"e9c19fe3",7004:"141d6773",7008:"91a7a4a9",7045:"05e55622",7098:"a7bd4aaa",7124:"3aa9870b",7221:"6b9e9818",7286:"9fb51e7d",7442:"560ec6df",7472:"814f3328",7594:"006b6f56",7626:"2d7f0f28",7634:"ffd2310c",7643:"a6aa9e1f",7680:"4508db31",7711:"8f57489a",7823:"219f3d18",7916:"b815d928",7990:"0f697ed0",7998:"94021847",8002:"358cdb80",8019:"82b227ed",8035:"4fd0067e",8088:"9ca4b6a3",8140:"0744f459",8170:"92f4e79a",8209:"01a85c17",8229:"b4ff1c31",8256:"a3c61da0",8268:"ff5da3ac",8307:"3f38ebe8",8343:"e9001e62",8401:"17896441",8479:"3f7365b0",8577:"47e4f4d8",8604:"7a94eac7",8609:"925b3f96",8663:"984af282",8689:"b8f719d3",8722:"2a279fb0",8737:"7661071f",8766:"090c04dc",8780:"2947b126",8781:"efc756ff",8800:"14a4ed8d",8818:"ea18561b",8889:"69c00f51",8946:"a2b614be",9027:"ecfc50db",9043:"62ed4681",9048:"a94703ab",9052:"8a4e4186",9065:"957b9088",9168:"5871cbe0",9219:"604fb48f",9287:"784b0d76",9293:"d8fbea84",9300:"e8827d36",9325:"59362658",9328:"e273c56f",9335:"891863a8",9343:"6045a7be",9479:"11a02db1",9594:"1bd76e75",9595:"8105781f",9615:"935da574",9647:"5e95c892",9789:"017593ad",9800:"cd6e53b3",9803:"9d2de78e",9851:"867b0c99",9858:"36994c47",9863:"8b3006e6",9866:"72957e22",9890:"c4753dd5",9907:"83c0c601",9911:"4c403ec6"}[e]||e)+"."+{28:"150a3adb",51:"49af06ca",132:"20c1a144",205:"d79e86eb",273:"d105a0a5",334:"50a4fcae",447:"4aaef7c8",451:"12182235",470:"9de7bb3d",489:"03a3e326",528:"650d43b1",561:"344c499f",672:"97814a1c",784:"787f565f",832:"1edfa112",837:"902a2425",839:"4a244550",868:"01333700",871:"d4b76e1d",909:"c65cac5e",931:"ca957fb2",989:"a6ffa604",1008:"d7fa00b5",1037:"344c499f",1091:"206e2712",1095:"18e92056",1166:"32701f85",1203:"baecdabc",1231:"7cccf42d",1235:"2a29473a",1239:"8d5dde0e",1240:"2e981f95",1396:"307b8547",1455:"78c0cc79",1468:"0b0f7678",1469:"ab1c63bf",1481:"1a0e1068",1489:"07801a71",1544:"68b621ab",1629:"d08f372d",1721:"e5856af2",1731:"4d135a83",1752:"a7c60bac",1755:"16f21d4b",1787:"80ef9a82",1794:"656b2eee",1797:"da4fc28c",1857:"f51189e3",1861:"2d8d6afe",1903:"3d7c80bf",1927:"27186897",1939:"1cdd35bd",1949:"21266bf9",1956:"4c4d47d2",1957:"84473b82",1970:"2680779f",1972:"1710940a",1989:"7482366f",2e3:"8c71a39a",2011:"e1b9d436",2029:"8e7414ae",2033:"e7f2132f",2081:"5a19c1c1",2138:"d9570352",2156:"67699046",2260:"0d65374d",2261:"777ffee0",2309:"e3f4c804",2359:"89f0b906",2408:"4c0142f2",2416:"73977a7a",2462:"2e83fe49",2537:"90854def",2649:"a9d1307a",2711:"44443fd3",2761:"9889f7e2",2934:"9f895655",2942:"344c499f",2951:"d2dc139f",2956:"b4157fc3",2971:"c37e492f",3027:"3f6393fa",3073:"6c464a8c",3120:"373b26e3",3156:"0d4f8b3e",3163:"270dc9d5",3227:"b89f935a",3235:"2fceabae",3238:"3dfbae48",3249:"fc03bea6",3250:"19ac06a0",3252:"cd4e40b5",3271:"54368353",3288:"864a2113",3290:"c65cac5e",3293:"59513b6a",3324:"1f7bcb71",3394:"f13020c8",3405:"25cb6c9e",3437:"371c48ee",3482:"6ef331c0",3487:"67629783",3516:"55382610",3603:"ab582d44",3635:"2ddae30f",3637:"ff874216",3639:"9b7e4976",3655:"8079ec6f",3656:"3a7fd779",3658:"237d71a8",3669:"69dda534",3682:"d034fc3a",3694:"816eb0d4",3726:"bb157f36",3738:"b1345048",3795:"2a7cd083",3833:"f515a081",3915:"0b145b28",4061:"8a0f89d6",4110:"ac3912e4",4126:"8a07cea7",4134:"03a2752f",4184:"050f8cff",4212:"1ed1f3e4",4214:"d2945755",4273:"ed510e27",4285:"3f711e6b",4323:"7a9ed175",4335:"efaa6ded",4358:"e3c209c4",4392:"ed25bcf4",4433:"6b6e781a",4462:"092600be",4583:"7f014c99",4591:"0ad836ee",4638:"57b8c025",4662:"dd897452",4707:"49af9c12",4729:"2c0b7e66",4768:"cc441a97",4780:"b9c9af4a",4813:"35cdddde",4855:"72dc1e88",4921:"081ec6a6",5019:"aba37843",5149:"ac98a7d3",5169:"575de5d2",5197:"68b9edd9",5211:"516ba0de",5230:"0db3be34",5263:"94cd16ab",5270:"a985b44e",5292:"3bbf51d0",5323:"344c499f",5512:"909efd82",5525:"f702ae09",5533:"a2ef947d",5557:"a5b1b715",5637:"7176950d",5705:"a62e0fa2",5741:"2c0731dd",5742:"d2734583",5751:"b529604f",5785:"913fa986",5787:"32cefe31",5799:"344c499f",5848:"2f85e994",5872:"41752220",5963:"06048467",5966:"2636b31c",6031:"51d65c63",6061:"6caab497",6108:"5baad8f8",6298:"d9aad3a2",6340:"b0772e3a",6400:"a800d292",6401:"5c1b0a07",6447:"b8343f55",6465:"9a712475",6470:"8c891772",6472:"76cd5a14",6501:"ecac2115",6568:"26ec5b90",6602:"a67cd580",6623:"563f0d16",6627:"a3cfd31e",6646:"8bd843db",6799:"3715449d",6842:"7a9a80cc",6862:"480ae1c6",6885:"4ee8a439",6922:"133092c3",6925:"76b148be",6934:"ff7040a1",6972:"885c2dbb",7004:"1ec18eb2",7008:"0e7b7abc",7045:"8d92cf1a",7098:"375bd214",7124:"de340dbd",7221:"5675d109",7286:"3e4a5c14",7442:"776097b4",7472:"4ac7a1d5",7594:"dcfb0692",7617:"5a08dae2",7626:"b6cc94a2",7634:"ef868cf0",7643:"5767af63",7680:"c0de87f9",7704:"344c499f",7711:"ca259707",7823:"c34aaa7c",7848:"5631391d",7916:"7f7140ee",7990:"00d90e96",7998:"abd5287d",8002:"0c94f46f",8019:"f7c5b6bc",8035:"19d6757e",8088:"65c3489c",8140:"935f84e6",8170:"1aa6e504",8180:"344c499f",8207:"de4877c9",8209:"eaf4d69a",8229:"7fbd2a48",8256:"f02b6cc5",8268:"eef09b17",8307:"fa2911ec",8343:"ecb0f500",8401:"565dc0d3",8479:"caf2b66c",8577:"85742ea5",8604:"1f138bf6",8609:"8924cc40",8663:"9a55d9ca",8689:"1e8b08fc",8722:"d7ccc1ea",8737:"8a490a3c",8766:"575c99f6",8780:"6b417ce2",8781:"0efce279",8800:"2e9d975f",8818:"e61da5a4",8889:"6b8932ef",8946:"25f5d9cc",9027:"4ec54f81",9043:"b6b05ba6",9048:"0bc420d5",9052:"7a0520e1",9065:"7df4fcde",9168:"0f1647e3",9219:"870df387",9287:"9eaf1f45",9293:"bc035c72",9300:"6f9aebcc",9325:"60597df2",9328:"a5327647",9335:"cf3c7a2a",9343:"0025deaf",9479:"297b7ba1",9594:"19bd7d39",9595:"55e2a300",9615:"4b11454b",9647:"5bd14c33",9750:"661668c6",9789:"8e70575a",9800:"cd6a2d43",9803:"d1b36f3a",9815:"3958bafc",9851:"c4ad72f5",9858:"efd10733",9863:"6ca3bd8a",9866:"c511843b",9890:"f99b0c9c",9907:"dd3270b3",9911:"fecc9609"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},c="docusaurus-code:",t.l=(e,a,d,b)=>{if(f[e])f[e].push(a);else{var r,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+d){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",c+d),r.src=e),f[e]=[a];var l=(a,d)=>{r.onerror=r.onload=null,clearTimeout(s);var c=f[e];if(delete f[e],r.parentNode&&r.parentNode.removeChild(r),c&&c.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/jimmer-doc/zh/",t.gca=function(e){return e={17896441:"8401",30250215:"2309",41888769:"3738",42755155:"1857",59362658:"9325",80991770:"3288",94021847:"7998",df566e5d:"28","5b607569":"51",da8fa872:"132","5baa24ad":"205","8bec251d":"273","4408401f":"334","4adc2d26":"447","9d7036c4":"451","107c3b9d":"470",a855791a:"528","3bcfe093":"672",a91a23f8:"784",bf8f7229:"837","6474a3ed":"839","61e6a4fd":"868","8adb4832":"871",d677ce2f:"931","6f4e7a69":"989","9a16adfe":"1008",f56e78b7:"1091","8a2bd063":"1095",fc750769:"1166","407f6496":"1203",ebc3df01:"1231",a7456010:"1235","5e095de7":"1239",bbdeeff5:"1240","2076d7e2":"1396","3da1f085":"1455","62f23fb6":"1468",d5207b37:"1469",bc71a6b4:"1481",b7f509bb:"1544",e81a5e74:"1629",e7a18048:"1721",f6201957:"1731","4bdb2ae3":"1752","9374caf7":"1755","9656c889":"1787",d680dda8:"1794",dcbdfd9b:"1797","1eff7c4f":"1861",acecf23e:"1903","7430318d":"1927",dfe337b2:"1939","5d623b19":"1949","42ce2973":"1956",a6ad7a7e:"1957",c897243c:"1970","73664a40":"1972","25f9c634":"1989","86a4ae39":"2000","47fb53f1":"2011",ffa3d5f9:"2029","06ea8d5a":"2033","484c6700":"2081","1a4e3797":"2138","568e6e8d":"2156",fa699350:"2260","38ece08d":"2261","5e9ec0ef":"2359",cd207294:"2416","6ffc7e7a":"2462",f333202e:"2537",cfbcfe03:"2649","9e4087bc":"2711","5e90d3b6":"2761","5d196ef9":"2934","9465a832":"2951",cc8ed879:"2956",afc3a651:"2971",abd50211:"3027","4f098fea":"3120",cb940960:"3156","629ea2b5":"3163","916803e4":"3227",cc7729f9:"3235","0d6c963d":"3238",ccc49370:"3249","72dca024":"3250",ad5f7726:"3252","1d02c46b":"3271",f9ee7f00:"3293","16b7d3f2":"3324",d269fc1f:"3394","88b3fc4f":"3405","5860aa8a":"3437",d3465bcd:"3482",ec8b5733:"3487","88997b11":"3516",c7fe7dac:"3603",f4f34a3a:"3637",dfeeb4df:"3639","2dc448b9":"3655","864d6b27":"3656","8e47f816":"3658",c9d443ab:"3669","3df33f8f":"3682","8717b14a":"3694",dd802bfb:"3795",a6009b86:"3833",f1409206:"3915",a4a3b69f:"4061","393be207":"4134","89bd3f0c":"4184","621db11d":"4212",bc9add9e:"4214","24e17b6c":"4273","99dce9cd":"4285",d11b12e6:"4323","06f7bd05":"4335",b4700301:"4358","72c6222a":"4392",a3c63783:"4433",a6ed4384:"4462","1df93b7f":"4583","39c23a61":"4591","77acfde6":"4638",d3dc288c:"4662",a6206f03:"4707","7cb6776d":"4729",dbc856af:"4768","7897bcf9":"4780","6875c492":"4813","567d95c3":"4855","138e0e15":"4921","20af3086":"5019","38b00337":"5149","969fe070":"5169",c731e6cd:"5197","443edfdb":"5211","03a253f5":"5230","258a8d64":"5263","65e8bed6":"5270",ab5e0c9d:"5292","6172360d":"5512",ee507bff:"5525","699a1cfa":"5533",d9f32620:"5557","322d44ed":"5637","87e9b2f1":"5705",aba21aa0:"5742",cfe85388:"5751",f2abe41a:"5787",f0b167d3:"5848",af98a778:"5872","1d3cf7ca":"5963",b8aaa72c:"5966","26c35467":"6031","1f391b9e":"6061","49825b4e":"6108",d541fe11:"6298","7b1ccd6c":"6340","31ebed5b":"6400",ac01436f:"6401",fc8aeb01:"6447",f1611423:"6465","0de66671":"6470","82347b07":"6472",e45d772c:"6568","739494fa":"6602","7eb06729":"6623","406b5e19":"6627",d0a69964:"6646","920fcc92":"6799",d319e4fa:"6842","4c821652":"6862","6292c79f":"6885","5011e362":"6922","982676d6":"6925",acff083d:"6934",e9c19fe3:"6972","141d6773":"7004","91a7a4a9":"7008","05e55622":"7045",a7bd4aaa:"7098","3aa9870b":"7124","6b9e9818":"7221","9fb51e7d":"7286","560ec6df":"7442","814f3328":"7472","006b6f56":"7594","2d7f0f28":"7626",ffd2310c:"7634",a6aa9e1f:"7643","4508db31":"7680","8f57489a":"7711","219f3d18":"7823",b815d928:"7916","0f697ed0":"7990","358cdb80":"8002","82b227ed":"8019","4fd0067e":"8035","9ca4b6a3":"8088","0744f459":"8140","92f4e79a":"8170","01a85c17":"8209",b4ff1c31:"8229",a3c61da0:"8256",ff5da3ac:"8268","3f38ebe8":"8307",e9001e62:"8343","3f7365b0":"8479","47e4f4d8":"8577","7a94eac7":"8604","925b3f96":"8609","984af282":"8663",b8f719d3:"8689","2a279fb0":"8722","7661071f":"8737","090c04dc":"8766","2947b126":"8780",efc756ff:"8781","14a4ed8d":"8800",ea18561b:"8818","69c00f51":"8889",a2b614be:"8946",ecfc50db:"9027","62ed4681":"9043",a94703ab:"9048","8a4e4186":"9052","957b9088":"9065","5871cbe0":"9168","604fb48f":"9219","784b0d76":"9287",d8fbea84:"9293",e8827d36:"9300",e273c56f:"9328","891863a8":"9335","6045a7be":"9343","11a02db1":"9479","1bd76e75":"9594","8105781f":"9595","935da574":"9615","5e95c892":"9647","017593ad":"9789",cd6e53b3:"9800","9d2de78e":"9803","867b0c99":"9851","36994c47":"9858","8b3006e6":"9863","72957e22":"9866",c4753dd5:"9890","83c0c601":"9907","4c403ec6":"9911"}[e]||e,t.p+t.u(e)},(()=>{var e={5354:0,1869:0};t.f.j=(a,d)=>{var f=t.o(e,a)?e[a]:void 0;if(0!==f)if(f)d.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var c=new Promise(((d,c)=>f=e[a]=[d,c]));d.push(f[2]=c);var b=t.p+t.u(a),r=new Error;t.l(b,(d=>{if(t.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var c=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;r.message="Loading chunk "+a+" failed.\n("+c+": "+b+")",r.name="ChunkLoadError",r.type=c,r.request=b,f[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,d)=>{var f,c,b=d[0],r=d[1],o=d[2],n=0;if(b.some((a=>0!==e[a]))){for(f in r)t.o(r,f)&&(t.m[f]=r[f]);if(o)var i=o(t)}for(a&&a(d);n<b.length;n++)c=b[n],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(i)},d=self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();