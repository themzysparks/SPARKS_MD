/*
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                              ＭＹ ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ                                             // 
//                                                                                                      // 
//                                         Ｖ：１．０                                                    // 
//                                                                                                      // 
//                                                                                                      //
//         ░██████╗██████╗░░█████╗░██████╗░██╗░░██╗░██████╗                                             //
//        ██╔════╝██╔══██╗██╔══██╗██╔══██╗██║░██╔╝██╔════╝                                             //
//        ╚█████╗░██████╔╝███████║██████╔╝█████═╝░╚█████╗░                                             //
//        ░╚═══██╗██╔═══╝░██╔══██║██╔══██╗██╔═██╗░░╚═══██╗                                             //
//        ██████╔╝██║░░░░░██║░░██║██║░░██║██║░╚██╗██████╔╝                                             //
//        ╚═════╝░╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░                                             //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

*
   * @project_name : SPARKS_MD
   * @author : SPARKS
   * @youtube : https://youtube.com/@cyberwithsparks
   * @instagram : https://www.instagram.com/sparksthemzy
   * @description : My private build made public for everyone to use with easy hosting.
   * @version : 1.0
   * Donation : https://paystack.com/pay/sparks_md_donation
   
   * I update my GitHub bots when I have time, focusing mainly on key projects.
*
   * Licensed under the GPL-3.0 License;
* 
   * Created By SPARKS.
   * © 2024 SPARKS TECH SOLUTIONS.
*/



//══════════════════════════════════════════════════════════════════════════════════════════════════════//

const fetch = require("node-fetch");
const {
  smd,
  TelegraPh
} = require("../lib");
const Config = require('../config');
smd({
  'pattern': "aesthetic",
  'category': 'wallpaper',
  'filename': __filename,
  'desc': "Get an aesthetic wallpaper."
}, async _0x5a0fdd => {
  try {
    let _0x429381 = await fetch("https://api.maher-zubair.tech/wallpaper/asthetic");
    let _0x5c7570 = await _0x429381.json();
    if (_0x5c7570.status === 0xc8) {
      await _0x5a0fdd.send(_0x5c7570.url, {
        'caption': Config.caption
      }, "image", _0x5a0fdd);
    } else {
      await _0x5a0fdd.send("*_Request not be preceed!!_*");
    }
  } catch (_0xe0cb5b) {
    await _0x5a0fdd.error(_0xe0cb5b + "\n\ncommand: aesthetic", _0xe0cb5b, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "bike",
  'category': "wallpaper",
  'filename': __filename,
  'desc': "Get a bike wallpaper."
}, async _0x4d2ada => {
  try {
    let _0x8e27ef = await fetch("https://api.maher-zubair.tech/wallpaper/bike");
    let _0x34770b = await _0x8e27ef.json();
    if (_0x34770b.status === 0xc8) {
      await _0x4d2ada.send(_0x34770b.url, {
        'caption': Config.caption
      }, "image", _0x4d2ada);
    } else {
      await _0x4d2ada.send("*_Request not be preceed!!_*");
    }
  } catch (_0x4ba3f8) {
    await _0x4d2ada.error(_0x4ba3f8 + "\n\ncommand: bike", _0x4ba3f8, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "cr7",
  'category': "wallpaper",
  'filename': __filename,
  'desc': "Get a CR7 (Cristiano Ronaldo) wallpaper."
}, async _0x4d0c42 => {
  try {
    let _0x252613 = await fetch("https://api.maher-zubair.tech/wallpaper/cr7");
    let _0x1fb5d9 = await _0x252613.json();
    if (_0x1fb5d9.status === 0xc8) {
      await _0x4d0c42.send(_0x1fb5d9.url, {
        'caption': Config.caption
      }, "image", _0x4d0c42);
    } else {
      await _0x4d0c42.send("*_Request not be preceed!!_*");
    }
  } catch (_0x25a526) {
    await _0x4d0c42.error(_0x25a526 + "\n\ncommand: cr7", _0x25a526, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': 'cat',
  'category': 'wallpaper',
  'filename': __filename,
  'desc': "Get a cat wallpaper."
}, async _0x1f1c91 => {
  try {
    let _0x10c0ce = await fetch("https://api.maher-zubair.tech/wallpaper/cat");
    let _0xdde9f0 = await _0x10c0ce.json();
    if (_0xdde9f0.status === 0xc8) {
      await _0x1f1c91.send(_0xdde9f0.url, {
        'caption': Config.caption
      }, "image", _0x1f1c91);
    } else {
      await _0x1f1c91.send("*_Request not be preceed!!_*");
    }
  } catch (_0x2b729a) {
    await _0x1f1c91.error(_0x2b729a + "\n\ncommand: cat", _0x2b729a, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "dog",
  'category': "wallpaper",
  'filename': __filename,
  'desc': "Get a dog wallpaper."
}, async _0x14290a => {
  try {
    let _0x4525eb = await fetch('https://api.maher-zubair.tech/wallpaper/dog');
    let _0x48031b = await _0x4525eb.json();
    if (_0x48031b.status === 0xc8) {
      await _0x14290a.send(_0x48031b.url, {
        'caption': Config.caption
      }, "image", _0x14290a);
    } else {
      await _0x14290a.send("*_Request not be preceed!!_*");
    }
  } catch (_0x4002fa) {
    await _0x14290a.error(_0x4002fa + "\n\ncommand: dog", _0x4002fa, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "messi",
  'category': "wallpaper",
  'filename': __filename,
  'desc': "Get a Lionel Messi wallpaper."
}, async _0x5788ed => {
  try {
    let _0x4e43e8 = await fetch("https://api.maher-zubair.tech/wallpaper/messi");
    let _0x30fa3b = await _0x4e43e8.json();
    if (_0x30fa3b.status === 0xc8) {
      await _0x5788ed.send(_0x30fa3b.url, {
        'caption': Config.caption
      }, 'image', _0x5788ed);
    } else {
      await _0x5788ed.send("*_Request not be preceed!!_*");
    }
  } catch (_0x3a6465) {
    await _0x5788ed.error(_0x3a6465 + "\n\ncommand: messi", _0x3a6465, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "mlegend",
  'category': "wallpaper",
  'filename': __filename,
  'desc': "Get a Mobile Legends wallpaper."
}, async _0x1d0867 => {
  try {
    let _0x193d20 = await fetch("https://api.maher-zubair.tech/wallpaper/mlegend");
    let _0x1c7fc2 = await _0x193d20.json();
    if (_0x1c7fc2.status === 0xc8) {
      await _0x1d0867.send(_0x1c7fc2.url, {
        'caption': Config.caption
      }, "image", _0x1d0867);
    } else {
      await _0x1d0867.send("*_Request not be preceed!!_*");
    }
  } catch (_0x2d9fc6) {
    await _0x1d0867.error(_0x2d9fc6 + "\n\ncommand: mlegend", _0x2d9fc6, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': 'pubg',
  'category': "wallpaper",
  'filename': __filename,
  'desc': "Get a PUBG wallpaper."
}, async _0x4780e1 => {
  try {
    let _0x499c37 = await fetch('https://api.maher-zubair.tech/wallpaper/pubg');
    let _0x5d093e = await _0x499c37.json();
    if (_0x5d093e.status === 0xc8) {
      await _0x4780e1.send(_0x5d093e.url, {
        'caption': Config.caption
      }, "image", _0x4780e1);
    } else {
      await _0x4780e1.send("*_Request not be preceed!!_*");
    }
  } catch (_0x47ed63) {
    await _0x4780e1.error(_0x47ed63 + "\n\ncommand: pubg", _0x47ed63, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "random",
  'category': "wallpaper",
  'filename': __filename,
  'desc': "Get a random wallpaper."
}, async _0x3627e8 => {
  try {
    let _0x2b81f5 = await fetch("https://api.maher-zubair.tech/wallpaper/random");
    let _0x1220ff = await _0x2b81f5.json();
    if (_0x1220ff.status === 0xc8) {
      await _0x3627e8.send(_0x1220ff.url, {
        'caption': Config.caption
      }, "image", _0x3627e8);
    } else {
      await _0x3627e8.send("*_Request not be preceed!!_*");
    }
  } catch (_0x9bd494) {
    await _0x3627e8.error(_0x9bd494 + "\n\ncommand: random", _0x9bd494, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "car",
  'category': "wallpaper",
  'filename': __filename,
  'desc': "Get a car wallpaper."
}, async _0x572123 => {
  try {
    let _0x5f2a48 = await fetch("https://api.maher-zubair.tech/wallpaper/car");
    let _0x40f7cc = await _0x5f2a48.json();
    if (_0x40f7cc.status === 0xc8) {
      await _0x572123.send(_0x40f7cc.url, {
        'caption': Config.caption
      }, "image", _0x572123);
    } else {
      await _0x572123.send("*_Request not be preceed!!_*");
    }
  } catch (_0x5eae5d) {
    await _0x572123.error(_0x5eae5d + "\n\ncommand: car", _0x5eae5d, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "blackpink",
  'category': "wallpaper",
  'filename': __filename,
  'desc': "Get a Blackpink wallpaper."
}, async _0x401b7e => {
  try {
    let _0x26ee53 = await fetch("https://api.maher-zubair.tech/wallpaper/blackpink");
    let _0x5635fc = await _0x26ee53.json();
    if (_0x5635fc.status === 0xc8) {
      await _0x401b7e.send(_0x5635fc.url, {
        'caption': Config.caption
      }, "image", _0x401b7e);
    } else {
      await _0x401b7e.send("*_Request not be preceed!!_*");
    }
  } catch (_0x5377a8) {
    await _0x401b7e.error(_0x5377a8 + "\n\ncommand: blackpink", _0x5377a8, "*_No responce from API, Sorry!!_*");
  }
});