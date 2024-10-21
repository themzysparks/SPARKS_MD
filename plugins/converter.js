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

const axios = require("axios");
const fs = require("fs-extra");
const util = require("util");
const {
  StickerTypes
} = require("wa-sticker-formatter");
const fetch = require("node-fetch");
const {
  fancytext,
  smdBuffer,
  getBuffer,
  listall,
  prefix,
  smd,
  TelegraPh,
  Config
} = require("../lib");
async function generateSticker(_0x5d53d5, _0xd0dfa5, _0x2d03e2 = {
  'pack': Config.packname,
  'author': Config.author
}, _0x265fa8 = true) {
  try {
    const {
      Sticker: _0x45755b,
      createSticker: _0x556668,
      StickerTypes: _0x1bca21
    } = require("wa-sticker-formatter");
    let _0x1fd33e = new _0x45755b(_0xd0dfa5, {
      ..._0x2d03e2
    });
    return await _0x5d53d5.bot.sendMessage(_0x5d53d5.chat, {
      'sticker': await _0x1fd33e.toBuffer()
    }, {
      'quoted': _0x5d53d5,
      'messageId': _0x5d53d5.bot.messageId()
    });
  } catch (_0x41d555) {
    if (_0x265fa8) {
      await _0x5d53d5.error(_0x41d555 + "\n\nfileName: generateSticker->s.js\n");
    }
  }
}
let mtypes = ['imageMessage', "videoMessage", "stickerMessage"];
smd({
  'cmdname': "sticker",
  'alias': ['s'],
  'info': "Makes sticker of replied image/video.",
  'type': "sticker",
  'filename': __filename,
  'use': "<reply to any image/video.>"
}, async _0x1adb81 => {
  try {
    let _0x40ad37 = mtypes.includes(_0x1adb81.mtype) ? _0x1adb81 : _0x1adb81.reply_message;
    if (_0x40ad37 && mtypes.includes(_0x40ad37?.["mtype"] || "need_Media")) {
      let _0x5638d9 = await _0x40ad37.download();
      let _0x14a769 = {
        'pack': Config.packname,
        'author': Config.author,
        'type': StickerTypes.FULL,
        'quality': 0xa
      };
      await generateSticker(_0x1adb81, _0x5638d9, _0x14a769);
      return _0x5638d9 = false;
    } else {
      return _0x1adb81.reply("*_Uhh Dear, Reply to image/video!!_*");
    }
  } catch (_0xdb9cac) {
    return await _0x1adb81.error(_0xdb9cac + "\n\ncmdName: sticker\n");
  }
});
smd({
  'cmdname': "take",
  'info': "Makes sticker of replied image/video.",
  'type': "sticker",
  'filename': __filename,
  'use': "<reply to sticker.>"
}, async (_0x4f28f5, _0x37b9fe) => {
  try {
    let _0x568718 = _0x4f28f5.reply_message;
    if (!_0x568718 || _0x568718?.["mtype"] != "stickerMessage") {
      return await _0x4f28f5.reply("*Uhh Please, Reply to sticker*");
    }
    let _0x216e92 = _0x37b9fe.split('|');
    let _0x44cd5f = _0x216e92[0x0]?.["trim"]() !== '' ? _0x216e92[0x0] : _0x4f28f5.pushName;
    let _0x196444 = _0x216e92[0x1] && _0x216e92[0x1] !== '' ? _0x216e92[0x1] : "ANITA ♥️";
    let _0x6cc833 = await _0x568718.download();
    let _0x408c34 = {
      'pack': _0x44cd5f,
      'author': _0x196444,
      'type': StickerTypes.FULL,
      'quality': 0xa
    };
    await generateSticker(_0x4f28f5, _0x6cc833, _0x408c34);
    return _0x6cc833 = false;
  } catch (_0x350794) {
    return await _0x4f28f5.error(_0x350794 + "\n\ncmdName: take\n");
  }
});
smd({
  'cmdname': 'attp',
  'info': "Makes sticker of given text.",
  'type': "sticker",
  'filename': __filename,
  'use': "< text.>"
}, async (_0xec4a59, _0xa5d676) => {
  try {
    let _0x3187c0 = await smdBuffer('https://raganork-api.onrender.com/api/attp?text=' + (_0xa5d676 ? _0xa5d676 : "Please provide text to generate sticker") + "&apikey=with_love_souravkl11");
    return await generateSticker(_0xec4a59, _0x3187c0);
  } catch (_0x1eb506) {
    return await _0xec4a59.error(_0x1eb506 + "\n\ncmdName: attp\n");
  }
});
smd({
  'cmdname': "crop",
  'alias': ["cropsticker"],
  'info': "Makes sticker of replied image.",
  'type': "sticker",
  'filename': __filename,
  'use': "<reply to image.>"
}, async _0x5910f5 => {
  try {
    let _0x20da49 = mtypes.includes(_0x5910f5.mtype) ? _0x5910f5 : _0x5910f5.reply_message;
    if (_0x20da49 && mtypes.includes(_0x20da49?.["mtype"] || 'need_Media')) {
      let _0x3e3d9e = await _0x20da49.download();
      let _0x59c88b = {
        'pack': Config.packname,
        'author': Config.author,
        'type': StickerTypes.CROPPED,
        'quality': 0x32
      };
      await generateSticker(_0x5910f5, _0x3e3d9e, _0x59c88b);
      return _0x3e3d9e = false;
    } else {
      return _0x5910f5.reply("*_Uhh Dear, Reply to image!!_*");
    }
  } catch (_0x1f40ee) {
    return await _0x5910f5.error(_0x1f40ee + "\n\ncmdName: crop\n", "*_Request Failed, Reply to an image only!_*");
  }
});
smd({
  'cmdname': 'circle',
  'alias': ["circlestic", "circlesticker", 'cs'],
  'info': "circle sticker of image.",
  'type': "sticker",
  'filename': __filename,
  'use': "<reply to image.>"
}, async _0x335823 => {
  try {
    let _0xc6b88d = mtypes.includes(_0x335823.mtype) ? _0x335823 : _0x335823.reply_message;
    if (_0xc6b88d && mtypes.includes(_0xc6b88d?.['mtype'] || "need_Media")) {
      let _0x2ca814 = await _0xc6b88d.download();
      let _0x3f9626 = {
        'pack': Config.packname,
        'author': Config.author,
        'type': StickerTypes.CIRCLE,
        'quality': 0x32
      };
      await generateSticker(_0x335823, _0x2ca814, _0x3f9626);
      return _0x2ca814 = false;
    } else {
      return _0x335823.reply("*_Uhh Dear, Reply to image!!_*");
    }
  } catch (_0x366e83) {
    return await _0x335823.error(_0x366e83 + "\n\ncmdName: circle\n", "*_Request Failed, Make sure You replied an image_*");
  }
});
smd({
  'cmdname': 'round',
  'alias': ["roundstic", "roundsticker"],
  'info': "Makes sticker of replied image/video.",
  'type': "sticker",
  'filename': __filename,
  'use': "<reply to image.>"
}, async _0x124895 => {
  try {
    let _0x2f6b04 = mtypes.includes(_0x124895.mtype) ? _0x124895 : _0x124895.reply_message;
    if (_0x2f6b04 && mtypes.includes(_0x2f6b04?.["mtype"] || "need_Media")) {
      let _0x3da7a4 = await _0x2f6b04.download();
      let _0x579f2a = {
        'pack': Config.packname,
        'author': Config.author,
        'type': StickerTypes.ROUNDED,
        'quality': 0x32
      };
      await generateSticker(_0x124895, _0x3da7a4, _0x579f2a);
      return _0x3da7a4 = false;
    } else {
      return _0x124895.reply("*_Uhh Dear, Reply to an image!!_*");
    }
  } catch (_0x33f634) {
    return await _0x124895.error(_0x33f634 + "\n\ncmdName: round\n", "*_Request Failed, Make sure You replied an image!_*");
  }
});
smd({
  'cmdname': 'wallpaper',
  'info': "To get Random Pics",
  'type': "anime",
  'filename': __filename
}, async _0xd821f9 => {
  try {
    const _0x34d57d = await (await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc"))?.['json']();
    const _0x16a33c = _0x34d57d?.["urls"]?.['regular'] || false;
    if (_0x16a33c) {
      await _0xd821f9.sendUi(_0xd821f9.jid, {
        'caption': "*---Random Wallpapers Here---*"
      }, {
        'quoted': _0xd821f9
      }, "image", _0x16a33c);
    } else {
      await _0xd821f9.send("*_Request Failed, Wallpaper not be fetched!_*");
    }
  } catch (_0x50088c) {
    return await _0xd821f9.error(_0x50088c + "\n\ncmdName: wallpaper\n");
  }
});
smd({
  'pattern': "memegen",
  'desc': "Write text on quoted image.",
  'category': "sticker",
  'filename': __filename,
  'use': "<text>"
}, async (_0x583d6d, _0x13a71e) => {
  try {
    let _0x2409d5 = pmtypes.includes(_0x583d6d.mtype) ? _0x583d6d : _0x583d6d.reply_message;
    if (!_0x13a71e) {
      return await _0x583d6d.reply("*please provide text and image*");
    }
    if (!_0x2409d5 || !pmtypes.includes(_0x2409d5.mtype)) {
      return _0x583d6d.reply("*Uhh please, Reply to an image*");
    }
    let _0x2bd9ca = _0x13a71e.split('|')[0x0] || '';
    let _0xf25e0d = (_0x13a71e.split('|')[0x1] || "sticker").toLowerCase();
    let _0x36405d = _0x2bd9ca.split(';')[0x0] || '_';
    let _0x582920 = _0x2bd9ca.split(';')[0x1] || '_';
    let _0x2cd387 = await _0x583d6d.bot.downloadAndSaveMediaMessage(_0x2409d5);
    let _0x5b5982 = await TelegraPh(_0x2cd387);
    try {
      fs.unlinkSync(_0x2cd387);
    } catch (_0x4a1bd9) {}
    console.log("match", _0x13a71e);
    let _0x98d89b = await getBuffer("https://api.memegen.link/images/custom/" + _0x36405d + '/' + _0x582920 + ".png?background=" + _0x5b5982);
    if (_0xf25e0d?.["startsWith"]('p')) {
      await _0x583d6d.send(_0x98d89b, {
        'caption': Config.caption
      }, "image");
    }
    let _0x1ba347 = {
      'pack': Config.packname,
      'author': Config.author,
      'type': StickerTypes.FULL,
      'quality': 0x46
    };
    await generateSticker(_0x583d6d, _0x98d89b, _0x1ba347);
    return _0x98d89b = false;
  } catch (_0x1bd4c1) {
    _0x583d6d.error(_0x1bd4c1 + "\n\ncmdName: memegen\n");
    console.log(_0x1bd4c1);
  }
});
smd({
  'pattern': "emix",
  'desc': "Mixes two emojies.",
  'category': "sticker",
  'use': "<query>",
  'filename': __filename
}, async (_0x3bd996, _0x3e5fec) => {
  try {
    let _0x59d60c = _0x3e5fec.split(',')[0x0] || false;
    let _0x2f4a53 = _0x3e5fec.split(',')[0x1] || false;
    if (!_0x3e5fec || !_0x59d60c || !_0x2f4a53) {
      return _0x3bd996.reply("Example : " + prefix + "emix 😅,🤔");
    }
    const _0xb3d72 = await fetch('https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' + _0x59d60c + '_' + _0x2f4a53);
    const _0x29b7b2 = await _0xb3d72?.["json"]();
    if (!_0x29b7b2 || _0x29b7b2?.["locale"] == '') {
      return _0x3bd996.send("*_Can't create mixture, try other emojies_*");
    } else {
      let _0x43f058 = await smdBuffer(_0x29b7b2.results[0x0].url);
      let _0x4c77a1 = {
        'pack': Config.packname,
        'author': Config.author,
        'type': StickerTypes.FULL,
        'quality': 0x46
      };
      await generateSticker(_0x3bd996, _0x43f058, _0x4c77a1);
      return _0x43f058 = false;
    }
  } catch (_0x19700c) {
    _0x3bd996.error(_0x19700c + "\n\ncmdName: emix");
  }
});
smd({
  'pattern': "quotely",
  'desc': "Makes Sticker of quoted text.",
  'alias': ['q'],
  'category': "sticker",
  'use': "<reply to any message.>",
  'filename': __filename
}, async (_0x5001ce, _0x5f101f) => {
  try {
    let _0x133843 = _0x5001ce.reply_message ? _0x5001ce.reply_message : _0x5001ce && _0x5f101f ? _0x5001ce : false;
    let _0x250505 = _0x5001ce.reply_message ? _0x5001ce.reply_message.text : _0x5f101f;
    if (!_0x133843 || !_0x250505) {
      return _0x5001ce.reply("*_Please quote/reply to any message!!!_*");
    }
    let _0x5133d9 = await _0x5001ce.getpp(_0x133843.sender);
    let _0x54662a = ["#FFFFFF", "#000000"];
    let _0x17fc9d = _0x5f101f === "white" ? _0x54662a[0x0] : _0x5f101f === "black" ? _0x54662a[0x1] : _0x54662a[Math.floor(Math.random() * _0x54662a.length)];
    let _0x295b39 = _0x5001ce.bot.getName(_0x133843.sender);
    let _0x304d2f = {
      'type': "quote",
      'format': 'png',
      'backgroundColor': _0x17fc9d,
      'width': 0x200,
      'height': 0x200,
      'scale': 0x3,
      'messages': [{
        'avatar': true,
        'from': {
          'first_name': _0x295b39,
          'language_code': 'en',
          'name': _0x295b39,
          'photo': {
            'url': _0x5133d9
          }
        },
        'text': _0x250505,
        'replyMessage': {}
      }]
    };
    let _0x5aa3a7 = await axios.post("https://bot.lyo.su/quote/generate", _0x304d2f);
    if (!_0x5aa3a7 || _0x5aa3a7.status !== 0xc8 || !_0x5aa3a7.data || !_0x5aa3a7.data.ok) {
      return await _0x5001ce.send("*_Can't create quote sticker!_*");
    }
    let _0x1d2e8a = Buffer.alloc(_0x5aa3a7.data.result.image.length, _0x5aa3a7.data.result.image, "base64");
    try {
      await _0x5001ce.send(_0x1d2e8a, {
        'packname': Config.packname,
        'author': "ANITA"
      }, "sticker");
    } catch (_0x38a890) {
      console.log("error in quotely : ", _0x38a890);
      let _0x2578fc = {
        'pack': Config.packname,
        'author': Config.author,
        'type': StickerTypes.FULL,
        'quality': 0x46
      };
      return await generateSticker(_0x5001ce, _0x1d2e8a, _0x2578fc);
    }
  } catch (_0xe7abbb) {
    return await _0x5001ce.error(_0xe7abbb + "\n\ncmdName: emix", _0xe7abbb);
  }
});
smd({
  'pattern': "fancy",
  'desc': "Makes stylish/fancy given text",
  'category': "converter",
  'use': "56 Asta",
  'filename': __filename
}, async (_0x572e62, _0x301782) => {
  try {
    let _0x4117c6 = "┏━━━━━━━━━━━━━━━━━━━━━━━━\n┃\t*💬ANITA_FANCY_TEXT💬* \n┗━━━━━━━━━━━━━━━━━━━━━━━━\n\n " + (_0x301782 ? "```🔢Reply the number you wants to select``` \n\n" : "```\t\t" + prefix + "fancy ANITA(For all text)\n\t\t" + prefix + "fancy 25 ANITA(For specific text)```\n\n");
    let _0x1a486c = parseInt(_0x301782);
    if (isNaN(_0x1a486c)) {
      let _0x46c824 = _0x301782 ? _0x301782 : "ANITA";
      listall(_0x46c824).forEach((_0x55111f, _0x4a17ae) => {
        _0x4117c6 += "\n" + (_0x4a17ae += 0x1) + " " + _0x55111f + "\n";
      });
      try {
        return await _0x572e62.send(_0x4117c6, {
          'caption': _0x4117c6
        }, '', msg);
      } catch {
        return await _0x572e62.reply(_0x4117c6);
      }
    }
    let _0x525312 = await fancytext('' + _0x301782.slice(0x2), _0x1a486c);
    return await _0x572e62.send(_0x525312, {}, '', _0x572e62);
  } catch (_0x39c01d) {
    return await _0x572e62.error(_0x39c01d + "\n\ncmdName: fancy", _0x39c01d);
  }
});
smd({
  'pattern': "tiny",
  'desc': "Makes url tiny.",
  'category': "converter",
  'use': "<url>",
  'react': '✅',
  'filename': __filename
}, async (_0x4d7fe7, _0x10232a) => {
  try {
    if (!_0x10232a || !_0x10232a.toLowerCase().includes('https')) {
      return _0x4d7fe7.reply("Provide me a link");
    }
    let _0x10f37e = _0x10232a.split(" ")[0x0];
    let _0x7ddb4b = await axios.get('https://tinyurl.com/api-create.php?url=' + _0x10f37e);
    _0x4d7fe7.reply("*🛡️Your Shortened URL*\n\n" + _0x7ddb4b.data);
  } catch (_0x102a8b) {
    _0x4d7fe7.error(_0x102a8b + "\n\ncmdName: tiny", _0x102a8b, false);
  }
});
smd({
  'pattern': "fliptext",
  'desc': "Flips given text.",
  'category': "converter",
  'use': "<query>",
  'filename': __filename
}, async (_0x162ca5, _0x38c5a5) => {
  try {
    let _0x5873b1 = _0x38c5a5 ? _0x38c5a5 : _0x162ca5.reply_text;
    if (!_0x5873b1) {
      return _0x162ca5.reply("*_Example : " + prefix + "fliptext ANITA!_*");
    }
    let _0x2b3133 = _0x5873b1.split('').reverse().join('');
    await _0x162ca5.reply("*「  Text Flipper Tool  」* \n*IGiven text :*\n" + _0x5873b1 + "\n\n*Fliped text :*\n" + _0x2b3133);
  } catch (_0x2e06fb) {
    _0x162ca5.error(_0x2e06fb + "\n\ncommand : fliptext", _0x2e06fb);
  }
});
smd({
  'pattern': "ebinary",
  'desc': "encode binary",
  'category': "converter",
  'use': "<query>",
  'filename': __filename
}, async (_0x4303a5, _0x2f7a95) => {
  try {
    let _0x245924 = _0x2f7a95 ? _0x2f7a95 : _0x4303a5.reply_text;
    if (!_0x245924) {
      return _0x4303a5.reply("*_Send text to be encoded.!_*");
    }
    let _0x109f85 = _0x245924.split('').map(_0x23333c => {
      return _0x23333c.charCodeAt(0x0).toString(0x2);
    }).join(" ");
    await _0x4303a5.reply(_0x109f85);
  } catch (_0x5a15f6) {
    await _0x4303a5.error(_0x5a15f6 + "\n\ncommand : ebinary", _0x5a15f6);
  }
});
smd({
  'pattern': "dbinary",
  'desc': "decode binary",
  'category': 'converter',
  'use': '<query>',
  'filename': __filename
}, async (_0xbd747b, _0x1b03ef) => {
  try {
    let _0x18cbb5 = _0x1b03ef ? _0x1b03ef : _0xbd747b.reply_text;
    if (!_0x18cbb5) {
      return _0xbd747b.reply("Send text to be decoded.");
    }
    var _0x1fa5e9 = _0x18cbb5.split(" ");
    var _0x196b7f = [];
    for (i = 0x0; i < _0x1fa5e9.length; i++) {
      _0x196b7f.push(String.fromCharCode(parseInt(_0x1fa5e9[i], 0x2)));
    }
    await _0xbd747b.reply(_0x196b7f.join(''));
  } catch (_0x111822) {
    await _0xbd747b.error(_0x111822 + "\n\ncommand : dbinary", _0x111822);
  }
});
smd({
  'pattern': 'qr',
  'category': "converter",
  'filename': __filename,
  'use': "< text >",
  'desc': "Sends CitelsVoid Qr code to scan and get your session id."
}, async (_0x34a9df, _0x466734) => {
  try {
    if (!_0x466734) {
      return _0x34a9df.reply("*Provide Text To generate QR!*");
    }
    let _0xa358c7 = 'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=' + text;
    await _0x34a9df.bot.sendUi(_0x34a9df.jid, {
      'caption': "*_Scan Qr To Get You Text_*"
    }, {
      'quoted': _0x34a9df
    }, "image", _0xa358c7);
  } catch (_0x2266a3) {
    await _0x34a9df.error(_0x2266a3 + "\n\ncommand : qr", _0x2266a3);
  }
});
smd({
  'pattern': "paste",
  'desc': "create paste of text.",
  'category': 'converter',
  'use': "< text >",
  'filename': __filename
}, async (_0x3546c0, _0xbed094) => {
  try {
    let _0x2eb380 = _0xbed094 ? _0xbed094 : _0x3546c0.reply_text;
    let {
      data: _0x2160da
    } = await axios.get("https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Suhail-Md+Bot&author_name=Astro_Tech_Info&content=[%7B\"tag\":\"p\",\"children\":[\"" + _0x2eb380.replace(/ /g, '+') + "\"]%7D]&return_content=true");
    return _0x3546c0.reply("*Paste created on telegraph*\nName:-" + util.format(_0x2160da.result.title) + " \nUrl:- " + util.format(_0x2160da.result.url));
  } catch (_0x34e30f) {
    await _0x3546c0.error(_0x34e30f + "\n\ncommand: paste ", _0x34e30f, false);
  }
});
let pmtypes = ["imageMessage", "stickerMessage"];
smd({
  'cmdname': 'photo',
  'info': "Makes photo of replied sticker.",
  'type': "converter",
  'use': "<reply to any gif>",
  'filename': __filename
}, async _0x5af552 => {
  try {
    let _0x1511a1 = pmtypes.includes(_0x5af552.mtype) ? _0x5af552 : _0x5af552.reply_message;
    if (!_0x1511a1 || !pmtypes.includes(_0x1511a1?.["mtype"])) {
      return _0x5af552.reply("*_Uhh Dear, Reply to Any Sticker.!!_*");
    }
    let _0x5944bb = await _0x5af552.bot.downloadAndSaveMediaMessage(_0x1511a1);
    await _0x5af552.bot.sendMessage(_0x5af552.jid, {
      'image': {
        'url': _0x5944bb
      },
      'mimetype': 'image/jpeg'
    });
    try {
      fs.unlinkSync(_0x5944bb);
    } catch (_0x3c8be1) {}
  } catch (_0x20e32f) {
    _0x5af552.error(_0x20e32f + "\n\ncmdName: photo\n", _0x20e32f, false);
  }
});
let audtypes = ['audioMessage', "videoMessage"];
smd({
  'pattern': "toaudio",
  'alias': ["mp3", "tomp3"],
  'desc': "changes type to audio.",
  'category': "converter",
  'use': "<reply to any Video>",
  'filename': __filename
}, async _0x339308 => {
  try {
    let _0x2b1984 = audtypes.includes(_0x339308.mtype) ? _0x339308 : _0x339308.reply_message;
    if (!_0x2b1984 || !audtypes.includes(_0x2b1984?.['mtype'])) {
      return _0x339308.reply("*_Uhh Dear, Reply to Any Video.!!_*");
    }
    let _0xd25361 = await _0x339308.bot.downloadAndSaveMediaMessage(_0x2b1984);
    const {
      toAudio: _0x28d4af
    } = require('../lib');
    let _0x11b0fd = fs.readFileSync(_0xd25361);
    let _0x1d06b2 = await _0x28d4af(_0x11b0fd);
    try {
      fs.unlink(_0xd25361);
    } catch (_0x27fec9) {}
    return await _0x339308.bot.sendMessage(_0x339308.jid, {
      'audio': _0x1d06b2,
      'mimetype': "audio/mpeg"
    });
  } catch (_0x574b8d) {
    _0x339308.error(_0x574b8d + "\n\ncmdName: toaudio", _0x574b8d);
  }
});
smd({
  'pattern': 'voice',
  'alias': ["ptt", "toptt"],
  'desc': "adds bass in given sound",
  'category': 'converter',
  'use': "<reply to any audio>"
}, async _0x549e6a => {
  try {
    let _0x4dd77d = audtypes.includes(_0x549e6a.mtype) ? _0x549e6a : _0x549e6a.reply_message;
    if (!_0x4dd77d || !audtypes.includes(_0x4dd77d?.["mtype"])) {
      return _0x549e6a.reply("*_Uhh Please, Reply to audio/video_*");
    }
    let _0x5dd669 = await _0x4dd77d.download();
    return await _0x549e6a.bot.sendMessage(_0x549e6a.jid, {
      'audio': _0x5dd669,
      'mimetype': "audio/mpeg",
      'ptt': true
    }, {
      'quoted': _0x549e6a
    });
  } catch (_0x52f687) {
    _0x549e6a.error(_0x52f687 + "\n\ncmdName: voice", _0x52f687);
  }
});
smd({
  'pattern': "tomp4",
  'alias': ["mp4", "tovideo"],
  'desc': "convert sticker to mp4.",
  'category': 'converter',
  'use': "<reply to any Video>",
  'filename': __filename
}, async _0x2b1b0f => {
  let _0x510980 = _0x2b1b0f.mtype === 'videoMessage' ? _0x2b1b0f : _0x2b1b0f.reply_message;
  if (!_0x510980) {
    return _0x2b1b0f.reply("*_Uhh Dear, Reply To Animated Sticker or Gif!!_*");
  }
  const {
    webp2mp4File: _0x29c0e2
  } = require('../lib');
  let _0x2fb033 = _0x510980?.["mimetype"] || '';
  if (_0x510980?.["mtype"] != "videoMessage" && !/webp/.test(_0x2fb033)) {
    return await _0x2b1b0f.send("*Damn... Reply To An Animated Sticker or Gif *");
  }
  let _0x3b30b8 = await _0x2b1b0f.bot.downloadAndSaveMediaMessage(_0x510980);
  try {
    try {
      if (/webp/.test(_0x2fb033)) {
        let _0x3ddce2 = await _0x29c0e2(_0x3b30b8);
        _0x3b30b8 = _0x3ddce2.result;
      }
    } catch (_0x3d8ddf) {
      console.log("error while converting sticker to mp4\n", _0x3d8ddf);
    }
    await _0x2b1b0f.bot.sendMessage(_0x2b1b0f.jid, {
      'video': {
        'url': _0x3b30b8
      },
      'caption': Config.caption
    });
    try {
      await fs.unlink(_0x3b30b8);
    } catch (_0x4e142f) {}
  } catch (_0x261c2b) {
    _0x2b1b0f.error(_0x261c2b + "\n\ncmdName: tomp4", _0x261c2b);
  }
});
function splitTextIntoLines(_0x38d9b4, _0x366044, _0x18805a) {
  const _0xc1a2c6 = _0x38d9b4.split(" ");
  const _0x1f568a = [];
  let _0x132777 = '';
  for (const _0x3c934c of _0xc1a2c6) {
    const _0x2467c5 = _0x132777 === '' ? _0x3c934c : _0x132777 + " " + _0x3c934c;
    const _0x30c502 = _0x366044.measureText(_0x2467c5).width;
    if (_0x30c502 <= _0x18805a) {
      _0x132777 = _0x2467c5;
    } else {
      _0x1f568a.push(_0x132777);
      _0x132777 = _0x3c934c;
    }
  }
  if (_0x132777 !== '') {
    _0x1f568a.push(_0x132777);
  }
  return _0x1f568a;
}
smd({
  'cmdname': "ttp",
  'alias': ["roundstic", "roundsticker"],
  'info': "Makes sticker of replied image/video.",
  'type': "sticker",
  'filename': __filename,
  'use': "<reply to image.>"
}, async (_0x4f3abe, _0x125de8) => {
  try {
    let _0xa4f0ff = _0x125de8 || _0x4f3abe.reply_text;
    if (_0xa4f0ff) {
      let _0xbc9f6a = parseInt(_0xa4f0ff) || '';
      if (_0xbc9f6a && !isNaN(_0xbc9f6a)) {
        _0xa4f0ff = await fancytext('' + _0xa4f0ff.slice(0x2), _0xbc9f6a);
      }
      const {
        createCanvas: _0x198b8a
      } = require("canvas");
      const _0x14dc55 = require('fs');
      const _0xf21246 = _0x198b8a(0x12c, 0x12c);
      const _0x4a4e4a = _0xf21246.getContext('2d');
      _0x4a4e4a.clearRect(0x0, 0x0, _0xf21246.width, _0xf21246.height);
      _0x4a4e4a.font = "20px Arial";
      _0x4a4e4a.fillStyle = "black";
      _0x4a4e4a.textAlign = 'center';
      const _0x51ef14 = splitTextIntoLines(_0xa4f0ff, _0x4a4e4a, 280);
      const _0x160832 = _0x51ef14.length * 0x19;
      const _0x203767 = (0x12c - _0x160832) / 0x2;
      _0x51ef14.forEach((_0x4b2d1f, _0x2ac046) => {
        const _0x2c5100 = _0x203767 + _0x2ac046 * 0x19;
        _0x4a4e4a.fillText(_0x4b2d1f, 150, _0x2c5100);
      });
      const _0x3e4c6d = _0xf21246.createPNGStream();
      const _0x311d9d = _0x14dc55.createWriteStream("./temp/ttp.png");
      _0x3e4c6d.pipe(_0x311d9d);
      _0x311d9d.on("finish", async () => {
        console.log("Image created:", "./temp/ttp.png");
        let _0x151fd4 = _0x14dc55.readFileSync("./temp/ttp.png");
        let _0x3908be = {
          'pack': Config.packname,
          'author': Config.author,
          'type': StickerTypes.ROUNDED,
          'quality': 0x32
        };
        await generateSticker(_0x4f3abe, _0x151fd4, _0x3908be);
        return _0x151fd4 = false;
      });
    } else {
      return _0x4f3abe.reply("*_Uhh Dear, provide text, ex .ttp 4 hii im ANITA!!_*");
    }
  } catch (_0x101ea0) {
    return await _0x4f3abe.error(_0x101ea0 + "\n\ncmdName: ttp\n");
  }
});