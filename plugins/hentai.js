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
const Config = require("../config");
smd({
  'pattern': "pussy",
  'category': 'nsfw',
  'filename': __filename,
  'desc': "Gets pussy pics."
}, async _0xf08c13 => {
  try {
    let _0x1c8782 = await fetch("https://api.maher-zubair.tech/nsfw/pussy");
    let _0x4ad3af = await _0x1c8782.json();
    if (_0x4ad3af.status === 0xc8) {
      await _0xf08c13.send(_0x4ad3af.url, {
        'caption': Config.caption
      }, "image", _0xf08c13);
    } else {
      await _0xf08c13.send("*_Request not be preceed!!_*");
    }
  } catch (_0x4fe007) {
    await _0xf08c13.error(_0x4fe007 + "\n\ncommand: pussy", _0x4fe007, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "ass",
  'category': "nsfw",
  'filename': __filename,
  'desc': "Gets ass pics."
}, async _0x46d84d => {
  try {
    let _0x1d8b6e = await fetch("https://api.maher-zubair.tech/nsfw/ass");
    let _0x3aed38 = await _0x1d8b6e.json();
    if (_0x3aed38.status === 0xc8) {
      await _0x46d84d.send(_0x3aed38.url, {
        'caption': Config.caption
      }, "image", _0x46d84d);
    } else {
      await _0x46d84d.send("*_Request not be preceed!!_*");
    }
  } catch (_0x446f62) {
    await _0x46d84d.error(_0x446f62 + "\n\ncommand: ass", _0x446f62, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "nai",
  'desc': "Generate an AI photo.",
  'category': "nsfw",
  'filename': __filename,
  'use': "<query>"
}, async (_0x18d3c6, _0x1936ce) => {
  try {
    if (!_0x1936ce) {
      return await _0x18d3c6.send("*_Please provide a query for the AI photo generator!_*");
    }
    const _0x45cf72 = "https://api.maher-zubair.tech/nsfw/x-gen?q=" + encodeURIComponent(_0x1936ce);
    const _0x3b3f29 = await fetch(_0x45cf72);
    if (!_0x3b3f29.ok) {
      return await _0x18d3c6.send("*_Error: " + _0x3b3f29.status + " " + _0x3b3f29.statusText + '_*');
    }
    const _0x55f41d = _0x3b3f29.headers.get("content-type");
    if (_0x55f41d && _0x55f41d.startsWith("image")) {
      const _0xb46d61 = _0x3b3f29.url;
      await _0x18d3c6.bot.sendFromUrl(_0x18d3c6.from, _0xb46d61, "Here is your generated photo:", _0x18d3c6, {}, "image");
    } else {
      if (_0x55f41d && _0x55f41d.includes("application/json")) {
        const _0x2ab8ec = await _0x3b3f29.json();
        if (_0x2ab8ec.status !== 0xc8) {
          return await _0x18d3c6.send("*_An error occurred while fetching the data._*");
        }
        const _0x5cde11 = _0x2ab8ec.result;
        await _0x18d3c6.bot.sendFromUrl(_0x18d3c6.from, _0x5cde11, "Here is your generated photo:", _0x18d3c6, {}, "image");
      } else {
        return await _0x18d3c6.send("*_Unexpected content type received from the API._*");
      }
    }
  } catch (_0x221c87) {
    console.error(_0x221c87);
    await _0x18d3c6.error(_0x221c87 + "\n\ncommand:  nai", _0x221c87);
  }
});
smd({
  'pattern': "boobs",
  'category': 'nsfw',
  'filename': __filename,
  'desc': "Gets boob pics."
}, async _0xedcb97 => {
  try {
    let _0x51b4c2 = await fetch("https://meme-api.herokuapp.com/gimme/biganimetiddies");
    let _0x56b2f0 = await _0x51b4c2.json();
    if (_0x56b2f0.status === 0xc8) {
      await _0xedcb97.send(_0x56b2f0.url, {
        'caption': Config.caption
      }, "image", _0xedcb97);
    } else {
      await _0xedcb97.send("*_Request not be preceed!!_*");
    }
  } catch (_0x29be98) {
    await _0xedcb97.error(_0x29be98 + "\n\ncommand: boobs", _0x29be98, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "nwaifu",
  'category': "nsfw",
  'filename': __filename,
  'desc': "Gets waifu pics."
}, async _0x306079 => {
  try {
    let _0x2a8a03 = await fetch("https://waifu.pics/api/nsfw/waifu");
    let _0x1f08d6 = await _0x2a8a03.json();
    if (_0x1f08d6.status === 0xc8) {
      await _0x306079.send(_0x1f08d6.url, {
        'caption': Config.caption
      }, 'image', _0x306079);
    } else {
      await _0x306079.send("*_Request not be preceed!!_*");
    }
  } catch (_0x1c8c45) {
    await _0x306079.error(_0x1c8c45 + "\n\ncommand: nwaifu", _0x1c8c45, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': 'yuri',
  'category': 'nsfw',
  'filename': __filename,
  'desc': "Gets yuri pics."
}, async _0x4c4877 => {
  try {
    let _0x4c59d2 = await fetch("https://api.maher-zubair.tech/nsfw/yuri");
    let _0x41ebdd = await _0x4c59d2.json();
    if (_0x41ebdd.status === 0xc8) {
      await _0x4c4877.send(_0x41ebdd.url, {
        'caption': Config.caption
      }, "image", _0x4c4877);
    } else {
      await _0x4c4877.send("*_Request not be preceed!!_*");
    }
  } catch (_0x3c73cf) {
    await _0x4c4877.error(_0x3c73cf + "\n\ncommand: yuri", _0x3c73cf, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': 'dick',
  'category': "nsfw",
  'filename': __filename,
  'desc': "Gets dick pics."
}, async _0xec0a02 => {
  try {
    let _0xcad1f9 = await fetch('https://api.maher-zubair.tech/nsfw/dick');
    let _0x5f0446 = await _0xcad1f9.json();
    if (_0x5f0446.status === 0xc8) {
      await _0xec0a02.send(_0x5f0446.url, {
        'caption': Config.caption
      }, "image", _0xec0a02);
    } else {
      await _0xec0a02.send("*_Request not be preceed!!_*");
    }
  } catch (_0x1cb6a7) {
    await _0xec0a02.error(_0x1cb6a7 + "\n\ncommand: dick", _0x1cb6a7, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "lesbian",
  'category': "nsfw",
  'filename': __filename,
  'desc': "Gets lesbian pics."
}, async _0x1215fd => {
  try {
    let _0x95908f = await fetch('https://api.maher-zubair.tech/nsfw/lesbian');
    let _0x472559 = await _0x95908f.json();
    if (_0x472559.status === 0xc8) {
      await _0x1215fd.send(_0x472559.url, {
        'caption': Config.caption
      }, "image", _0x1215fd);
    } else {
      await _0x1215fd.send("*_Request not be preceed!!_*");
    }
  } catch (_0x22b39d) {
    await _0x1215fd.error(_0x22b39d + "\n\ncommand: lesbian", _0x22b39d, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "blowjob",
  'category': "nsfw",
  'filename': __filename,
  'desc': "Gets blowjob pics."
}, async _0x44434d => {
  try {
    let _0x2bfaae = await fetch('https://api.maher-zubair.tech/nsfw/blowjob');
    let _0x1895ee = await _0x2bfaae.json();
    if (_0x1895ee.status === 0xc8) {
      await _0x44434d.send(_0x1895ee.url, {
        'caption': Config.caption
      }, "image", _0x44434d);
    } else {
      await _0x44434d.send("*_Request not be preceed!!_*");
    }
  } catch (_0x5d27c2) {
    await _0x44434d.error(_0x5d27c2 + "\n\ncommand: blowjob", _0x5d27c2, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "bdsm",
  'category': "nsfw",
  'filename': __filename,
  'desc': "Gets bdsm pics."
}, async _0x3bf202 => {
  try {
    let _0x50743d = await fetch("https://api.maher-zubair.tech/nsfw/bdsm");
    let _0x4d89a2 = await _0x50743d.json();
    if (_0x4d89a2.status === 0xc8) {
      await _0x3bf202.send(_0x4d89a2.url, {
        'caption': Config.caption
      }, "image", _0x3bf202);
    } else {
      await _0x3bf202.send("*_Request not be preceed!!_*");
    }
  } catch (_0x1ee20d) {
    await _0x3bf202.error(_0x1ee20d + "\n\ncommand: bdsm", _0x1ee20d, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "fuck",
  'category': "nsfw",
  'filename': __filename,
  'desc': "Gets fuck pics."
}, async _0x3808d4 => {
  try {
    let _0x4b1a99 = await fetch("https://api.maher-zubair.tech/nsfw/fuck");
    let _0x2ac720 = await _0x4b1a99.json();
    if (_0x2ac720.status === 0xc8) {
      await _0x3808d4.send(_0x2ac720.url, {
        'caption': Config.caption
      }, "image", _0x3808d4);
    } else {
      await _0x3808d4.send("*_Request not be preceed!!_*");
    }
  } catch (_0x523439) {
    await _0x3808d4.error(_0x523439 + "\n\ncommand: fuck", _0x523439, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': 'fingering',
  'category': "nsfw",
  'filename': __filename,
  'desc': "Gets fingering pics."
}, async _0x43a270 => {
  try {
    let _0x365a49 = await fetch("https://api.maher-zubair.tech/nsfw/fingering");
    let _0x33e151 = await _0x365a49.json();
    if (_0x33e151.status === 0xc8) {
      await _0x43a270.send(_0x33e151.url, {
        'caption': Config.caption
      }, 'image', _0x43a270);
    } else {
      await _0x43a270.send("*_Request not be preceed!!_*");
    }
  } catch (_0x2716d) {
    await _0x43a270.error(_0x2716d + "\n\ncommand: fingering", _0x2716d, "*_No responce from API, Sorry!!_*");
  }
});