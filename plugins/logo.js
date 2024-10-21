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

const {
  smd,
  prefix,
  Config
} = require('../lib');
const fetch = require("node-fetch");
async function textToLogoGenerator(_0x15b62b, _0x5d2f25, _0x46b6e9, _0x26c86a = 'ser', _0x2b06f2 = 'textpro', _0x48bb97 = true) {
  let _0xef8776 = {};
  let _0x121a12 = {};
  let _0x2d303e = /1|ephoto|ephoto360/gi.test(_0x2b06f2) ? "https://ephoto360.com/" + _0x5d2f25 + ".html" : /2|potoxy|photooxy/gi.test(_0x2b06f2) ? "https://photooxy.com/" + _0x5d2f25 + '.html' : /3|enphoto|en360/gi.test(_0x2b06f2) ? "https://en.ephoto360.com/" + _0x5d2f25 + ".html" : "https://textpro.me/" + _0x5d2f25 + ".html";
  try {
    const {
      textpro: _0x1bef21
    } = require("mumaker");
    if (_0x46b6e9) {
      _0xef8776 = await _0x1bef21(_0x2d303e, [_0x46b6e9, _0x26c86a]);
    }
    let _0xbdf423 = {} || {
      ...(await _0x15b62b.bot.contextInfo("Text to Logo", "Hello " + _0x15b62b.senderName))
    };
    return await _0x15b62b.bot.sendMessage(_0x15b62b.jid, {
      'image': {
        'url': _0xef8776.image
      },
      'caption': Config.caption,
      'contextInfo': _0xbdf423
    }, {
      'messageId': _0x15b62b.bot.messageId()
    });
  } catch (_0x97cc77) {
    try {
      let _0x1b0b57 = global.api_smd + "/api/maker?text1=" + _0x46b6e9 + '&text2=' + _0x26c86a + "&url=" + _0x2d303e;
      _0x121a12 = await fetchJson(_0x1b0b57);
      if ((!_0x121a12 || !_0x121a12.status || !_0x121a12.img) && _0x48bb97) {
        return _0x15b62b.error(_0x97cc77 + "\nWebinfo: " + (_0x121a12.img || _0x121a12) + "\n\nfileName: textToLogoGenerator->s.js", _0x97cc77);
      }
      await _0x15b62b.bot.sendMessage(_0x15b62b.jid, {
        'image': {
          'url': _0x121a12.img
        }
      }, {
        'messageId': _0x15b62b.bot.messageId()
      });
    } catch (_0x4a1f72) {
      let _0x23137a = _0xef8776 && _0xef8776.image ? _0xef8776.image : _0x121a12 && _0x121a12.img ? _0x121a12.img : false;
      if (_0x48bb97) {
        _0x15b62b.error(_0x97cc77 + "\n\nAPI Error: " + _0x4a1f72 + "\n\nfileName: textToLogoGenerator->s.js", _0x97cc77, (_0x23137a ? "Here we go\n\n" + _0x23137a : "Error, Request Denied!").trim());
      }
    }
  }
}
async function fetchJson(_0x501b83) {
  const _0xfa020f = await fetch(_0x501b83);
  return await _0xfa020f.json();
}
smd({
  'cmdname': 'logo1',
  'type': "logo",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x566775, _0x30c505) => {
  try {
    if (!_0x30c505) {
      return _0x566775.reply("*_Example : " + (prefix + cmdName) + " ANITA_*");
    }
    await textToLogoGenerator(_0x566775, "hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74", _0x30c505, 'ser', '1');
  } catch (_0x389287) {
    return await _0x566775.error(_0x389287 + "\n\ncmdName: " + cmdName, _0x389287);
  }
});
smd({
  'cmdname': "logo2",
  'type': 'logo',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x52c64f, _0x5abcf4) => {
  try {
    if (!_0x5abcf4) {
      return _0x52c64f.reply("*_Example : " + (prefix + cmdName) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x52c64f, "tao-hieu-ung-chu-digital-glitch-truc-tuyen-941", _0x5abcf4, "ANITA", '1');
  } catch (_0x33aafa) {
    return await _0x52c64f.error(_0x33aafa + "\n\ncmdName: " + cmdName, _0x33aafa);
  }
});
smd({
  'cmdname': 'logo3',
  'type': "logo",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x360ada, _0x1d39bd) => {
  try {
    if (!_0x1d39bd) {
      return _0x360ada.reply("*_Example : " + (prefix + cmdName) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x360ada, "tao-hieu-ung-chu-pixel-glitch-truc-tuyen-940", _0x1d39bd, "ANITA", '1');
  } catch (_0x2592d2) {
    return await _0x360ada.error(_0x2592d2 + "\n\ncmdName: " + cmdName, _0x2592d2);
  }
});
smd({
  'cmdname': "logo4",
  'type': "logo",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x13e9d5, _0x2c4db1) => {
  try {
    if (!_0x2c4db1) {
      return _0x13e9d5.reply("*_Example : " + (prefix + cmdName) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x13e9d5, "tao-hieu-ung-chu-graffiti-duong-pho-an-tuong-online-795", _0x2c4db1, "ANITA", '1');
  } catch (_0x402934) {
    return await _0x13e9d5.error(_0x402934 + "\n\ncmdName: " + cmdName, _0x402934);
  }
});
smd({
  'cmdname': "logo5",
  'type': "logo",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0xf0b4b0, _0x527c64) => {
  try {
    if (!_0x527c64) {
      return _0xf0b4b0.reply("*_Example : " + (prefix + cmdName) + " ANITA_*");
    }
    return await textToLogoGenerator(_0xf0b4b0, "hieu-ung-chu/chu-graffiti-online-mau-8-182", _0x527c64, "ANITA", '1');
  } catch (_0x55ae15) {
    return await _0xf0b4b0.error(_0x55ae15 + "\n\ncmdName: " + cmdName, _0x55ae15);
  }
});
smd({
  'cmdname': "logo6",
  'type': 'logo',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0xa49ecf, _0x536eae) => {
  try {
    let _0x330e8f = _0x536eae ? _0x536eae.split(';')[0x0] : '';
    let _0x1e486e = _0x536eae ? _0x536eae.split(';')[0x1] : '';
    if (!_0x1e486e || !_0x330e8f) {
      return await _0xa49ecf.reply("*_Example : " + (prefix + cmdName) + " text1;text2_*");
    }
    return await textToLogoGenerator(_0xa49ecf, "tao-hieu-ung-chu-graffiti-sieu-ngau-online-794", _0x330e8f, _0x1e486e);
  } catch (_0x1ae59f) {
    return await _0xa49ecf.error(_0x1ae59f + "\n\ncmdName: " + cmdName, _0x1ae59f);
  }
});
smd({
  'cmdname': "logo7",
  'type': 'logo',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x3debce, _0x541d52) => {
  try {
    let _0x42ccac = _0x541d52 ? _0x541d52.split(';')[0x0] : '';
    let _0x39353d = _0x541d52 ? _0x541d52.split(';')[0x1] : '';
    if (!_0x42ccac) {
      return await _0x3debce.reply("*_Example : " + (prefix + cmdName) + " text1_*");
    }
    return await textToLogoGenerator(_0x3debce, 'hieu-ung-chu/tao-cover-graffiti-online-181', _0x42ccac, _0x39353d || 'ser', '1');
  } catch (_0xde6794) {
    return await _0x3debce.error(_0xde6794 + "\n\ncmdName: " + cmdName, _0xde6794);
  }
});
smd({
  'cmdname': "logo8",
  'type': "logo",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x420232, _0x196cd4) => {
  try {
    let _0x5bb256 = _0x196cd4 ? _0x196cd4.split(';')[0x0] : '';
    let _0x52fd11 = _0x196cd4 ? _0x196cd4.split(';')[0x1] : '';
    if (!_0x52fd11 || !_0x5bb256) {
      return await _0x420232.reply("*_Example : " + (prefix + cmdName) + " text1;text2_*");
    }
    await textToLogoGenerator(_0x420232, "tao-logo-gradient-3d-truc-tuyen-501", _0x5bb256, _0x52fd11, '1');
  } catch (_0x43565e) {
    return await _0x420232.error(_0x43565e + "\n\ncmdName: " + cmdName, _0x43565e);
  }
});
smd({
  'cmdname': "logo9",
  'type': 'logo',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x2d28fc, _0x56d766) => {
  try {
    let _0x100308 = _0x56d766 ? _0x56d766.split(';')[0x0] : '';
    let _0x3b1f36 = _0x56d766 ? _0x56d766.split(';')[0x1] : '';
    if (!_0x3b1f36 || !_0x100308) {
      return await _0x2d28fc.reply("*_Example : " + (prefix + cmdName) + " text1;text2_*");
    }
    await textToLogoGenerator(_0x2d28fc, "tao-logo-chu-truc-tuyen-499", _0x100308, _0x3b1f36, '1');
  } catch (_0x2bfd14) {
    return await _0x2d28fc.error(_0x2bfd14 + "\n\ncmdName: " + cmdName, _0x2bfd14);
  }
});
smd({
  'cmdname': "logo10",
  'type': "logo",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x206732, _0x2f8fe5) => {
  try {
    let _0x22a872 = _0x2f8fe5 ? _0x2f8fe5.split(';')[0x0] : '';
    let _0x5ced98 = _0x2f8fe5 ? _0x2f8fe5.split(';')[0x1] : '';
    if (!_0x5ced98 || !_0x22a872) {
      return await _0x206732.reply("*_Example : " + (prefix + cmdName) + " text1;text2_*");
    }
    await textToLogoGenerator(_0x206732, "tao-logo-phong-cach-pornhub-612", _0x22a872, _0x5ced98, '1');
  } catch (_0x50b5e5) {
    return await _0x206732.error(_0x50b5e5 + "\n\ncmdName: " + cmdName, _0x50b5e5);
  }
});
smd({
  'cmdname': "logo11",
  'type': 'logo',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x400ad9, _0x564b66) => {
  try {
    let _0x3acc4c = _0x564b66 ? _0x564b66.split(';')[0x0] : '';
    let _0x57681f = _0x564b66 ? _0x564b66.split(';')[0x1] : '';
    if (!_0x57681f || !_0x3acc4c) {
      return await _0x400ad9.reply("*_Example : " + (prefix + cmdName) + " text1;text2_*");
    }
    return await textToLogoGenerator(_0x400ad9, 'tao-logo-3d-phong-cach-avengers-445', _0x3acc4c, _0x57681f, '1');
  } catch (_0x1681dd) {
    return await _0x400ad9.error(_0x1681dd + "\n\ncmdName: " + cmdName, _0x1681dd);
  }
});
smd({
  'cmdname': "logo12",
  'type': "logo",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x2fddea, _0x3e51fe) => {
  try {
    let _0x54a178 = _0x3e51fe ? _0x3e51fe.split(';')[0x0] : '';
    let _0x219647 = _0x3e51fe ? _0x3e51fe.split(';')[0x1] : '';
    if (!_0x219647 || !_0x54a178) {
      return await _0x2fddea.reply("*_Example : " + (prefix + cmdName) + " text1;text2_*");
    }
    return await textToLogoGenerator(_0x2fddea, "tao-logo-phong-cach-marvel-419", _0x54a178, _0x219647, '1');
  } catch (_0x2ca988) {
    return await _0x2fddea.error(_0x2ca988 + "\n\ncmdName: " + cmdName, _0x2ca988);
  }
});