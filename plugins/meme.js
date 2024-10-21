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

const fs = require("fs-extra");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  userdb,
  tiny,
  fancytext,
  smdBuffer,
  getBuffer,
  sleep,
  listall,
  getRandom,
  prefix,
  smd,
  generateSticker,
  TelegraPh,
  Config,
  tlang
} = require("../lib/");
smd({
  'pattern': "trump",
  'alias': ["tea", 'kofi'],
  'category': 'meme',
  'desc': "give text to creat trum tweet",
  'filename': __filename
}, async (_0x60dfe1, _0xa3ec11) => {
  try {
    if (!_0xa3ec11) {
      return await _0x60dfe1.send("*provide text!*");
    }
    let _0x37c0ba = await addTextToImage('./plugins/meme.say/trumSay.png', "./temp/trump.png", "  " + _0xa3ec11, 0x46, 0x96, 0x2bc, 0x4, '35');
    await sleep(0x5dc);
    await _0x60dfe1.bot.sendMessage(_0x60dfe1.jid, {
      'image': {
        'url': _0x37c0ba
      },
      'caption': Config.caption
    });
  } catch (_0x2da32e) {
    return await _0x60dfe1.error(_0x2da32e + "\n\n command: coffe", _0x2da32e, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mia",
  'alias': ["tea", "kofi"],
  'category': "meme",
  'desc': "Finds info about song",
  'filename': __filename
}, async (_0x12ffcc, _0x4997e5) => {
  try {
    if (!_0x4997e5) {
      return await _0x12ffcc.send("*provide text!*");
    }
    const {
      sleep: _0x13b6a4
    } = require("../lib");
    let _0x2d453d = await addTextToImage("./plugins/meme.say/mia.png", './temp/mia.png', "  " + _0x4997e5, 0x5a, 0x78, 0x258, 0x3, '35');
    await _0x13b6a4(0x5dc);
    await _0x12ffcc.bot.sendMessage(_0x12ffcc.jid, {
      'image': {
        'url': _0x2d453d
      },
      'caption': Config.caption
    });
  } catch (_0x34bb1f) {
    return await _0x12ffcc.error(_0x34bb1f + "\n\n command: coffe", _0x34bb1f, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "johni",
  'alias': ['tea', 'kofi'],
  'category': "meme",
  'desc': "Finds info about song",
  'filename': __filename
}, async (_0x14682c, _0x4fb72e) => {
  try {
    if (!_0x4fb72e) {
      return await _0x14682c.send("*provide text!*");
    }
    const {
      sleep: _0x40511b
    } = require("../lib");
    let _0x5484a0 = await addTextToImage("./plugins/meme.say/johni.png", "./temp/johni.png", "  " + _0x4fb72e, 0x28, 0xd2, 0x23a, 0x3, '30');
    await _0x40511b(0x5dc);
    await _0x14682c.bot.sendMessage(_0x14682c.jid, {
      'image': {
        'url': _0x5484a0
      },
      'caption': Config.caption
    });
  } catch (_0xeee9fb) {
    return await _0x14682c.error(_0xeee9fb + "\n\n command: coffe", _0xeee9fb, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "elon",
  'alias': ["tea", "kofi"],
  'category': "meme",
  'desc': "Finds info about song",
  'filename': __filename
}, async (_0x2ad30b, _0x5817a3) => {
  try {
    if (!_0x5817a3) {
      return await _0x2ad30b.send("*provide text!*");
    }
    const {
      sleep: _0x46a5c1
    } = require("../lib");
    let _0x41121d = await addTextToImage('./plugins/meme.say/elon.jpg', "./temp/elon.png", "\t" + _0x5817a3, 0x3c, 0x82, 0x384, 0x5);
    await _0x46a5c1(0x5dc);
    await _0x2ad30b.bot.sendMessage(_0x2ad30b.jid, {
      'image': {
        'url': _0x41121d
      },
      'caption': Config.caption
    });
  } catch (_0x1bd92d) {
    return await _0x2ad30b.error(_0x1bd92d + "\n\n command: coffe", _0x1bd92d, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mark",
  'alias': ["tea", "kofi"],
  'category': 'meme',
  'desc': "Finds info about song",
  'filename': __filename
}, async (_0x15f172, _0x208151) => {
  try {
    if (!_0x208151) {
      return await _0x15f172.send("*provide text!*");
    }
    const {
      sleep: _0x254794
    } = require('../lib');
    let _0x2c75db = await addTextToImage("./plugins/meme.say/mark.png", "./temp/mark.png", "  " + _0x208151, 0x1e, 0x50, 0x1f4, 0x3, '20');
    await _0x254794(0x5dc);
    await _0x15f172.bot.sendMessage(_0x15f172.jid, {
      'image': {
        'url': _0x2c75db
      },
      'caption': Config.caption
    });
  } catch (_0x1f048c) {
    return await _0x15f172.error(_0x1f048c + "\n\n command: coffe", _0x1f048c, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "ronaldo",
  'alias': ['tea', "kofi"],
  'category': 'meme',
  'desc': "Finds info about song",
  'filename': __filename
}, async (_0x17058b, _0x3d77c9) => {
  try {
    if (!_0x3d77c9) {
      return await _0x17058b.send("*provide text!*");
    }
    const {
      sleep: _0x298930
    } = require("../lib");
    let _0x19ff68 = await addTextToImage("./plugins/meme.say/ronaldo.png", "./temp/ronaldo.png", "  " + _0x3d77c9, 0x32, 0x8c, 0x258, 0x4, '35');
    await _0x298930(0x5dc);
    await _0x17058b.bot.sendMessage(_0x17058b.jid, {
      'image': {
        'url': _0x19ff68
      },
      'caption': Config.caption
    });
  } catch (_0x94a139) {
    return await _0x17058b.error(_0x94a139 + "\n\n command: ronaldo", _0x94a139, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "modi",
  'alias': ["tea", "kofi"],
  'category': 'meme',
  'desc': "Finds info about song",
  'filename': __filename
}, async (_0x469204, _0x28270c) => {
  try {
    if (!_0x28270c) {
      return await _0x469204.send("*provide text!*");
    }
    const {
      sleep: _0x40b49e
    } = require("../lib");
    let _0x114c34 = await addTextToImage("./plugins/meme.say/modi.png", "./temp/modi.png", "  " + _0x28270c, 0x14, 0x46, 0x1f4, 0x4, '20');
    await _0x40b49e(0x5dc);
    await _0x469204.bot.sendMessage(_0x469204.jid, {
      'image': {
        'url': _0x114c34
      },
      'caption': Config.caption
    });
  } catch (_0x35273b) {
    return await _0x469204.error(_0x35273b + "\n\n command: modi", _0x35273b, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "imran",
  'alias': ["tea", 'kofi'],
  'category': "meme",
  'desc': "Finds info about song",
  'filename': __filename
}, async (_0x278820, _0x2e423f) => {
  try {
    if (!_0x2e423f) {
      return await _0x278820.send("*provide text!*");
    }
    const {
      sleep: _0x5843f9
    } = require("../lib");
    let _0xd3bd0 = await addTextToImage("./plugins/meme.say/imran.png", './temp/imran.png', "  " + _0x2e423f, 0x14, 0x46, 0x1f4, 0x5, '20');
    await _0x5843f9(0x5dc);
    await _0x278820.bot.sendMessage(_0x278820.jid, {
      'image': {
        'url': _0xd3bd0
      },
      'caption': Config.caption
    });
  } catch (_0x1fdb75) {
    return await _0x278820.error(_0x1fdb75 + "\n\n command: imran", _0x1fdb75, "*_Didn't get any results, Sorry!_*");
  }
});
const {
  createCanvas,
  loadImage
} = require("canvas");
async function addTextToImage(_0x482107, _0xca18d9, _0x2a1cd7, _0x1f1afb, _0x5cba65, _0x5b6483, _0xbbe330, _0x9f1f22 = '30') {
  const _0x8ca26b = await loadImage(_0x482107);
  const _0x5e7dfb = createCanvas(_0x8ca26b.width, _0x8ca26b.height);
  const _0x50ace7 = _0x5e7dfb.getContext('2d');
  _0x50ace7.drawImage(_0x8ca26b, 0x0, 0x0, _0x5e7dfb.width, _0x5e7dfb.height);
  _0x50ace7.font = _0x9f1f22 + "px Arial";
  _0x50ace7.fillStyle = "black";
  _0x50ace7.textAlign = "left";
  _0x50ace7.textBaseline = 'top';
  const _0xb03b0b = splitTextIntoLines(_0x2a1cd7, _0x50ace7, _0x5b6483);
  if (_0xb03b0b.length > _0xbbe330) {
    _0xb03b0b.splice(_0xbbe330);
    const _0x53f1b4 = _0xb03b0b[_0xbbe330 - 0x1];
    const _0x543e08 = _0x53f1b4.slice(0x0, _0x53f1b4.length - 0xa) + "...Read More";
    _0xb03b0b[_0xbbe330 - 0x1] = _0x543e08;
  }
  _0xb03b0b.forEach((_0x257c37, _0x3be229) => {
    _0x50ace7.fillText(_0x257c37, _0x1f1afb, _0x5cba65 + _0x3be229 * 0x19);
  });
  const _0x3f6c37 = fs.createWriteStream(_0xca18d9);
  const _0x28ddbc = _0x5e7dfb.createPNGStream();
  _0x28ddbc.pipe(_0x3f6c37);
  await new Promise(_0x27bdb0 => {
    _0x3f6c37.on("finish", _0x27bdb0);
  });
  return _0xca18d9;
  console.log("Image with text created:", _0xca18d9);
}
function splitTextIntoLines(_0x3e0b47, _0x3c1e47, _0x14ff02) {
  const _0x286c4d = _0x3e0b47.split(" ");
  const _0x92baae = [];
  let _0x49666a = '';
  for (const _0x461ade of _0x286c4d) {
    const _0x48b7c4 = _0x49666a === '' ? _0x461ade : _0x49666a + " " + _0x461ade;
    const _0xd2ae27 = _0x3c1e47.measureText(_0x48b7c4).width;
    if (_0xd2ae27 <= _0x14ff02) {
      _0x49666a = _0x48b7c4;
    } else {
      _0x92baae.push(_0x49666a);
      _0x49666a = _0x461ade;
    }
  }
  if (_0x49666a !== '') {
    _0x92baae.push(_0x49666a);
  }
  return _0x92baae;
}