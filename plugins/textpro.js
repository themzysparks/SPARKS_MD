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


let {
  smd,
  prefix,
  Config
} = require(lib_dir);
const fetch = require('node-fetch');
async function textToLogoGenerator(_0x3f1faa, _0x465393, _0x5be2de, _0x54ac14 = "ser", _0x2629c7 = "textpro", _0x32ea20 = true) {
  let _0x10fbc6 = {};
  let _0x52b918 = {};
  let _0x750523 = /1|ephoto|ephoto360/gi.test(_0x2629c7) ? "https://ephoto360.com/" + _0x465393 + ".html" : /2|potoxy|photooxy/gi.test(_0x2629c7) ? 'https://photooxy.com/' + _0x465393 + '.html' : /3|enphoto|en360/gi.test(_0x2629c7) ? 'https://en.ephoto360.com/' + _0x465393 + ".html" : "https://textpro.me/" + _0x465393 + '.html';
  try {
    const {
      textpro: _0x2b534c
    } = require("mumaker");
    if (_0x5be2de) {
      _0x10fbc6 = await _0x2b534c(_0x750523, [_0x5be2de, _0x54ac14]);
    }
    let _0x23a23d = {} || {
      ...(await _0x3f1faa.bot.contextInfo("Text to Logo", "Hello " + _0x3f1faa.senderName))
    };
    return await _0x3f1faa.bot.sendMessage(_0x3f1faa.jid, {
      'image': {
        'url': _0x10fbc6.image
      },
      'caption': Config.caption,
      'contextInfo': _0x23a23d
    }, {
      'messageId': _0x3f1faa.bot.messageId()
    });
  } catch (_0x2d1afd) {
    try {
      let _0x4de9cd = global.api_smd + '/api/maker?text1=' + _0x5be2de + "&text2=" + _0x54ac14 + '&url=' + _0x750523;
      _0x52b918 = await fetchJson(_0x4de9cd);
      if ((!_0x52b918 || !_0x52b918.status || !_0x52b918.img) && _0x32ea20) {
        return _0x3f1faa.error(_0x2d1afd + "\nWebinfo: " + (_0x52b918.img || _0x52b918) + "\n\nfileName: textToLogoGenerator->s.js", _0x2d1afd);
      }
      await _0x3f1faa.bot.sendMessage(_0x3f1faa.jid, {
        'image': {
          'url': _0x52b918.img
        }
      }, {
        'messageId': _0x3f1faa.bot.messageId()
      });
    } catch (_0x52db07) {
      let _0x553655 = _0x10fbc6 && _0x10fbc6.image ? _0x10fbc6.image : _0x52b918 && _0x52b918.img ? _0x52b918.img : false;
      if (_0x32ea20) {
        _0x3f1faa.error(_0x2d1afd + "\n\nAPI Error: " + _0x52db07 + "\n\nfileName: textToLogoGenerator->s.js", _0x2d1afd, (_0x553655 ? "Here we go\n\n" + _0x553655 : "Error, Request Denied!").trim());
      }
    }
  }
}
async function fetchJson(_0xe6cd0c) {
  const _0x1f2ddf = await fetch(_0xe6cd0c);
  return await _0x1f2ddf.json();
}
smd({
  'cmdname': "glow",
  'type': "deeapsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x519bcc, _0x2b0aea, {
  cmdName: _0xfea2f8
}) => {
  try {
    if (!_0x2b0aea) {
      return _0x519bcc.reply("*_Example : " + (prefix + _0xfea2f8) + " David_*");
    }
    await require(lib_dir).textToLogoGenerator(_0x519bcc, 'hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74', _0x2b0aea, "ser", '1');
  } catch (_0x1c4403) {
    return await _0x519bcc.error(_0x1c4403 + "\n\ncmdName: " + _0xfea2f8, _0x1c4403);
  }
});
smd({
  'cmdname': "glitch",
  'type': "deeapsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x4d1eb8, _0x1c85f4, {
  cmdName: _0x18ebfc
}) => {
  try {
    if (!_0x1c85f4) {
      return _0x4d1eb8.reply("*_Example : " + (prefix + _0x18ebfc) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x4d1eb8, "tao-hieu-ung-chu-digital-glitch-truc-tuyen-941", _0x1c85f4, "asta", '1');
  } catch (_0x11a4df) {
    return await _0x4d1eb8.error(_0x11a4df + "\n\ncmdName: " + _0x18ebfc, _0x11a4df);
  }
});
smd({
  'cmdname': "pixel",
  'type': 'deeapsea',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x3d6375, _0x8351d, {
  cmdName: _0x14df86
}) => {
  try {
    if (!_0x8351d) {
      return _0x3d6375.reply("*_Example : " + (prefix + _0x14df86) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x3d6375, "tao-hieu-ung-chu-pixel-glitch-truc-tuyen-940", _0x8351d, 'asta', '1');
  } catch (_0x272446) {
    return await _0x3d6375.error(_0x272446 + "\n\ncmdName: " + _0x14df86, _0x272446);
  }
});
smd({
  'cmdname': "grafiti",
  'type': "deeapsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x21a586, _0x4e9a16, {
  cmdName: _0x39e635
}) => {
  try {
    if (!_0x4e9a16) {
      return _0x21a586.reply("*_Example : " + (prefix + _0x39e635) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x21a586, 'tao-hieu-ung-chu-graffiti-duong-pho-an-tuong-online-795', _0x4e9a16, 'asta', '1');
  } catch (_0x20c599) {
    return await _0x21a586.error(_0x20c599 + "\n\ncmdName: " + _0x39e635, _0x20c599);
  }
});
smd({
  'cmdname': "grafiti2",
  'type': "deeapsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x4a745b, _0x4c7960, {
  cmdName: _0x3cfb36
}) => {
  try {
    if (!_0x4c7960) {
      return _0x4a745b.reply("*_Example : " + (prefix + _0x3cfb36) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x4a745b, "hieu-ung-chu/chu-graffiti-online-mau-8-182", _0x4c7960, "asta", '1');
  } catch (_0x32afb5) {
    return await _0x4a745b.error(_0x32afb5 + "\n\ncmdName: " + _0x3cfb36, _0x32afb5);
  }
});
smd({
  'cmdname': "grafiti3",
  'type': "deeapsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0xefe37c, _0x2a98de, {
  cmdName: _0x27e0e5
}) => {
  try {
    let _0xe8bc37 = _0x2a98de ? _0x2a98de.split(';')[0x0] : '';
    let _0xcd7999 = _0x2a98de ? _0x2a98de.split(';')[0x1] : '';
    if (!_0xcd7999 || !_0xe8bc37) {
      return await _0xefe37c.reply("*_Example : " + (prefix + _0x27e0e5) + " text1;text2_*");
    }
    return await textToLogoGenerator(_0xefe37c, 'tao-hieu-ung-chu-graffiti-sieu-ngau-online-794', _0xe8bc37, _0xcd7999);
  } catch (_0x22d5d9) {
    return await _0xefe37c.error(_0x22d5d9 + "\n\ncmdName: " + _0x27e0e5, _0x22d5d9);
  }
});
smd({
  'cmdname': 'grafiti4',
  'type': 'deeapsea',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x533b26, _0x12de73, {
  cmdName: _0x3c634c
}) => {
  try {
    let _0x4937f9 = _0x12de73 ? _0x12de73.split(';')[0x0] : '';
    let _0x4c1025 = _0x12de73 ? _0x12de73.split(';')[0x1] : '';
    if (!_0x4937f9) {
      return await _0x533b26.reply("*_Example : " + (prefix + _0x3c634c) + " text1_*");
    }
    return await textToLogoGenerator(_0x533b26, "hieu-ung-chu/tao-cover-graffiti-online-181", _0x4937f9, _0x4c1025 || 'ser', '1');
  } catch (_0x249a09) {
    return await _0x533b26.error(_0x249a09 + "\n\ncmdName: " + _0x3c634c, _0x249a09);
  }
});
smd({
  'cmdname': 'gradient',
  'type': "deeapsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x152d31, _0x3862c9, {
  cmdName: _0x4b5b1e
}) => {
  try {
    let _0x1445c4 = _0x3862c9 ? _0x3862c9.split(';')[0x0] : '';
    let _0x2d31e5 = _0x3862c9 ? _0x3862c9.split(';')[0x1] : '';
    if (!_0x2d31e5 || !_0x1445c4) {
      return await _0x152d31.reply("*_Example : " + (prefix + _0x4b5b1e) + " text1;text2_*");
    }
    await textToLogoGenerator(_0x152d31, "tao-logo-gradient-3d-truc-tuyen-501", _0x1445c4, _0x2d31e5, '1');
  } catch (_0x9aa7a0) {
    return await _0x152d31.error(_0x9aa7a0 + "\n\ncmdName: " + _0x4b5b1e, _0x9aa7a0);
  }
});
smd({
  'cmdname': "wtone",
  'type': "deeapsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x77a701, _0x5623c6, {
  cmdName: _0x11845e
}) => {
  try {
    let _0x21c458 = _0x5623c6 ? _0x5623c6.split(';')[0x0] : '';
    let _0x1c2438 = _0x5623c6 ? _0x5623c6.split(';')[0x1] : '';
    if (!_0x1c2438 || !_0x21c458) {
      return await _0x77a701.reply("*_Example : " + (prefix + _0x11845e) + " text1;text2_*");
    }
    await textToLogoGenerator(_0x77a701, 'tao-logo-chu-truc-tuyen-499', _0x21c458, _0x1c2438, '1');
  } catch (_0x92842d) {
    return await _0x77a701.error(_0x92842d + "\n\ncmdName: " + _0x11845e, _0x92842d);
  }
});
smd({
  'cmdname': "phub",
  'type': "deeapsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x1c8574, _0x36359c, {
  cmdName: _0x83b8d3
}) => {
  try {
    let _0x2789c6 = _0x36359c ? _0x36359c.split(';')[0x0] : '';
    let _0x385a6f = _0x36359c ? _0x36359c.split(';')[0x1] : '';
    if (!_0x385a6f || !_0x2789c6) {
      return await _0x1c8574.reply("*_Example : " + (prefix + _0x83b8d3) + " text1;text2_*");
    }
    await textToLogoGenerator(_0x1c8574, "tao-logo-phong-cach-pornhub-612", _0x2789c6, _0x385a6f, '1');
  } catch (_0x32ccd7) {
    return await _0x1c8574.error(_0x32ccd7 + "\n\ncmdName: " + _0x83b8d3, _0x32ccd7);
  }
});
smd({
  'cmdname': "avenger",
  'type': 'deeapsea',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x84673d, _0x8161d9, {
  cmdName: _0xe23207
}) => {
  try {
    let _0xc40666 = _0x8161d9 ? _0x8161d9.split(';')[0x0] : '';
    let _0x40f07c = _0x8161d9 ? _0x8161d9.split(';')[0x1] : '';
    if (!_0x40f07c || !_0xc40666) {
      return await _0x84673d.reply("*_Example : " + (prefix + _0xe23207) + " text1;text2_*");
    }
    return await textToLogoGenerator(_0x84673d, "tao-logo-3d-phong-cach-avengers-445", _0xc40666, _0x40f07c, '1');
  } catch (_0x101df3) {
    return await _0x84673d.error(_0x101df3 + "\n\ncmdName: " + _0xe23207, _0x101df3);
  }
});
smd({
  'cmdname': 'marvel',
  'type': "deeapsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x271ad4, _0x585f6e, {
  cmdName: _0x2faed8
}) => {
  try {
    let _0xfaa90f = _0x585f6e ? _0x585f6e.split(';')[0x0] : '';
    let _0x21a6d3 = _0x585f6e ? _0x585f6e.split(';')[0x1] : '';
    if (!_0x21a6d3 || !_0xfaa90f) {
      return await _0x271ad4.reply("*_Example : " + (prefix + _0x2faed8) + " text1;text2_*");
    }
    return await textToLogoGenerator(_0x271ad4, "tao-logo-phong-cach-marvel-419", _0xfaa90f, _0x21a6d3, '1');
  } catch (_0x2a230a) {
    return await _0x271ad4.error(_0x2a230a + "\n\ncmdName: " + _0x2faed8, _0x2a230a);
  }
});
smd({
  'cmdname': "sea",
  'type': 'deepsea',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x4af1ee, _0x217660, {
  cmdName: _0x1ff0a9
}) => {
  try {
    if (!_0x217660) {
      return _0x4af1ee.reply("*_Example : " + (prefix + _0x1ff0a9) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x4af1ee, "create-3d-deep-sea-metal-text-effect-online-1053", _0x217660);
  } catch (_0x3affb7) {
    return await _0x4af1ee.error(_0x3affb7 + "\n\ncmdName: " + _0x1ff0a9, _0x3affb7);
  }
});
smd({
  'cmdname': "horror",
  'type': 'deepsea',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x520ae2, _0x2d7222, {
  cmdName: _0x592e0a
}) => {
  try {
    if (!_0x2d7222) {
      return _0x520ae2.reply("*_Example : " + (prefix + _0x592e0a) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x520ae2, "horror-blood-text-effect-online-883", _0x2d7222);
  } catch (_0x1869b7) {
    return await _0x520ae2.error(_0x1869b7 + "\n\ncmdName: " + _0x592e0a, _0x1869b7);
  }
});
smd({
  'cmdname': "whitebear",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x68d4ef, _0x3e2b53, {
  cmdName: _0x16ada8
}) => {
  try {
    if (!_0x3e2b53) {
      return _0x68d4ef.reply("*_Example : " + (prefix + _0x16ada8) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x68d4ef, 'online-black-and-white-bear-mascot-logo-creation-1012', _0x3e2b53);
  } catch (_0x1ab189) {
    return await _0x68d4ef.error(_0x1ab189 + "\n\ncmdName: " + _0x16ada8, _0x1ab189);
  }
});
smd({
  'cmdname': "joker",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x4d9062, _0x5d73d6, {
  cmdName: _0x14c33a
}) => {
  try {
    if (!_0x5d73d6) {
      return _0x4d9062.reply("*_Example : " + (prefix + _0x14c33a) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x4d9062, "create-logo-joker-online-934", _0x5d73d6);
  } catch (_0x37c1b1) {
    return await _0x4d9062.error(_0x37c1b1 + "\n\ncmdName: " + _0x14c33a, _0x37c1b1);
  }
});
smd({
  'cmdname': "metallic",
  'type': 'deepsea',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x255f73, _0x2cdb28, {
  cmdName: _0x241acb
}) => {
  try {
    if (!_0x2cdb28) {
      return _0x255f73.reply("*_Example : " + (prefix + _0x241acb) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x255f73, "create-a-metallic-text-effect-free-online-1041", _0x2cdb28);
  } catch (_0x322a9a) {
    return await _0x255f73.error(_0x322a9a + "\n\ncmdName: " + _0x241acb, _0x322a9a);
  }
});
smd({
  'cmdname': "steel",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x574ff1, _0x55cff7, {
  cmdName: _0x518c96
}) => {
  try {
    if (!match) {
      return _0x574ff1.reply("*_Example : " + (prefix + _0x518c96) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x574ff1, "steel-text-effect-online-921", match);
  } catch (_0x32e94f) {
    return await _0x574ff1.error(_0x32e94f + "\n\ncmdName: " + _0x518c96, _0x32e94f);
  }
});
smd({
  'cmdname': "harrypotter",
  'type': 'deepsea',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x103b7d, _0xdc230c, {
  cmdName: _0x28c5be
}) => {
  try {
    if (!_0xdc230c) {
      return _0x103b7d.reply("*_Example : " + (prefix + _0x28c5be) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x103b7d, 'create-harry-potter-text-effect-online-1025', _0xdc230c);
  } catch (_0x3ce95a) {
    return await _0x103b7d.error(_0x3ce95a + "\n\ncmdName: " + _0x28c5be, _0x3ce95a);
  }
});
smd({
  'cmdname': "underwater",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x437e4c, _0x8b7996, {
  cmdName: _0x21da35
}) => {
  try {
    if (!_0x8b7996) {
      return _0x437e4c.reply("*_Example : " + (prefix + _0x21da35) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x437e4c, "3d-underwater-text-effect-generator-online-1013", _0x8b7996);
  } catch (_0x18eb7d) {
    return await _0x437e4c.error(_0x18eb7d + "\n\ncmdName: " + _0x21da35, _0x18eb7d);
  }
});
smd({
  'cmdname': "luxury",
  'type': 'deepsea',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x154f1a, _0xb64c58, {
  cmdName: _0x1988c6
}) => {
  try {
    if (!_0xb64c58) {
      return _0x154f1a.reply("*_Example : " + (prefix + _0x1988c6) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x154f1a, "3d-luxury-gold-text-effect-online-1003", _0xb64c58);
  } catch (_0x5e8cdf) {
    return await _0x154f1a.error(_0x5e8cdf + "\n\ncmdName: " + _0x1988c6, _0x5e8cdf);
  }
});
smd({
  'cmdname': "glue",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x5c912c, _0x1284e1, {
  cmdName: _0x3529ae
}) => {
  try {
    if (!_0x1284e1) {
      return _0x5c912c.reply("*_Example : " + (prefix + _0x3529ae) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x5c912c, 'create-3d-glue-text-effect-with-realistic-style-986', _0x1284e1);
  } catch (_0x19b0a7) {
    return await _0x5c912c.error(_0x19b0a7 + "\n\ncmdName: " + _0x3529ae, _0x19b0a7);
  }
});
smd({
  'cmdname': "fabric",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x1a92f4, _0xfac39b, {
  cmdName: _0x5159e0
}) => {
  try {
    if (!_0xfac39b) {
      return _0x1a92f4.reply("*_Example : " + (prefix + _0x5159e0) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x1a92f4, "fabric-text-effect-online-964", _0xfac39b);
  } catch (_0x3f5805) {
    return await _0x1a92f4.error(_0x3f5805 + "\n\ncmdName: " + _0x5159e0, _0x3f5805);
  }
});
smd({
  'cmdname': 'toxic',
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x40cb8f, _0x2acecb, {
  cmdName: _0x49fd4f
}) => {
  try {
    if (!_0x2acecb) {
      return _0x40cb8f.reply("*_Example : " + (prefix + _0x49fd4f) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x40cb8f, "toxic-text-effect-online-901", _0x2acecb);
  } catch (_0x1a4dc8) {
    return await _0x40cb8f.error(_0x1a4dc8 + "\n\ncmdName: " + _0x49fd4f, _0x1a4dc8);
  }
});
smd({
  'cmdname': 'ancient',
  'type': 'deepsea',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x14ef2f, _0x52c67f, {
  cmdName: _0x414524
}) => {
  try {
    if (!_0x52c67f) {
      return _0x14ef2f.reply("*_Example : " + (prefix + _0x414524) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x14ef2f, "3d-golden-ancient-text-effect-online-free-1060", _0x52c67f);
  } catch (_0x3c6150) {
    return await _0x14ef2f.error(_0x3c6150 + "\n\ncmdName: " + _0x414524, _0x3c6150);
  }
});
smd({
  'cmdname': 'cloud',
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x12bcbd, _0x5b1073, {
  cmdName: _0x40ca20
}) => {
  try {
    if (!_0x5b1073) {
      return _0x12bcbd.reply("*_Example : " + (prefix + _0x40ca20) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x12bcbd, 'create-a-cloud-text-effect-on-the-sky-online-1004', _0x5b1073);
  } catch (_0x4f616e) {
    return await _0x12bcbd.error(_0x4f616e + "\n\ncmdName: " + _0x40ca20, _0x4f616e);
  }
});
smd({
  'cmdname': 'transformer',
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x4addba, _0x53783d, {
  cmdName: _0x33dc16
}) => {
  try {
    if (!_0x53783d) {
      return _0x4addba.reply("*_Example : " + (prefix + _0x33dc16) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x4addba, "create-a-transformer-text-effect-online-1035", _0x53783d);
  } catch (_0x85902d) {
    return await _0x4addba.error(_0x85902d + "\n\ncmdName: " + _0x33dc16, _0x85902d);
  }
});
smd({
  'cmdname': "thunder",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x1d3120, _0x49f096, {
  cmdName: _0x24dcc6
}) => {
  try {
    if (!_0x49f096) {
      return _0x1d3120.reply("*_Example : " + (prefix + _0x24dcc6) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x1d3120, "online-thunder-text-effect-generator-1031", _0x49f096);
  } catch (_0x426675) {
    return await _0x1d3120.error(_0x426675 + "\n\ncmdName: " + _0x24dcc6, _0x426675);
  }
});
smd({
  'cmdname': 'scifi',
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0xdbb89d, _0x51d60b, {
  cmdName: _0x9c12a0
}) => {
  try {
    if (!_0x51d60b) {
      return _0xdbb89d.reply("*_Example : " + (prefix + _0x9c12a0) + " ANITA_*");
    }
    return await textToLogoGenerator(_0xdbb89d, "create-3d-sci-fi-text-effect-online-1050", _0x51d60b);
  } catch (_0x4fc2a7) {
    return await _0xdbb89d.error(_0x4fc2a7 + "\n\ncmdName: " + _0x9c12a0, _0x4fc2a7);
  }
});
smd({
  'cmdname': 'sand',
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x46e259, _0x20f584, {
  cmdName: _0x3799d6
}) => {
  try {
    if (!_0x20f584) {
      return _0x46e259.reply("*_Example : " + (prefix + _0x3799d6) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x46e259, 'write-in-sand-summer-beach-free-online-991', _0x20f584);
  } catch (_0x29b747) {
    return await _0x46e259.error(_0x29b747 + "\n\ncmdName: " + _0x3799d6, _0x29b747);
  }
});
smd({
  'cmdname': 'rainbow',
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x28ae71, _0x57eeba, {
  cmdName: _0x41dfe2
}) => {
  try {
    if (!_0x57eeba) {
      return _0x28ae71.reply("*_Example : " + (prefix + _0x41dfe2) + " ANITA*");
    }
    return await textToLogoGenerator(_0x28ae71, '3d-rainbow-color-calligraphy-text-effect-1049', _0x57eeba);
  } catch (_0x3c50a3) {
    return await _0x28ae71.error(_0x3c50a3 + "\n\ncmdName: " + _0x41dfe2, _0x3c50a3);
  }
});
smd({
  'cmdname': "pencil",
  'type': 'deepsea',
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x34ea0b, _0x24b2ea, {
  cmdName: _0x9e33ac
}) => {
  try {
    if (!_0x24b2ea) {
      return _0x34ea0b.reply("*_Example : " + (prefix + _0x9e33ac) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x34ea0b, "create-a-sketch-text-effect-online-1044", _0x24b2ea);
  } catch (_0x14d1b0) {
    return await _0x34ea0b.error(_0x14d1b0 + "\n\ncmdName: " + _0x9e33ac, _0x14d1b0);
  }
});
smd({
  'cmdname': "neon",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x3b182b, _0x3a75e6, {
  cmdName: _0x2b98f6
}) => {
  try {
    if (!_0x3a75e6) {
      return _0x3b182b.reply("*_Example : " + (prefix + _0x2b98f6) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x3b182b, 'create-3d-neon-light-text-effect-online-1028', _0x3a75e6);
  } catch (_0x30217a) {
    return await _0x3b182b.error(_0x30217a + "\n\ncmdName: " + _0x2b98f6, _0x30217a);
  }
});
smd({
  'cmdname': 'magma',
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x243ace, _0xd2ed60, {
  cmdName: _0x2f61ae
}) => {
  try {
    if (!_0xd2ed60) {
      return _0x243ace.reply("*_Example : " + (prefix + _0x2f61ae) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x243ace, "create-a-magma-hot-text-effect-online-1030", _0xd2ed60);
  } catch (_0x2fbd83) {
    return await _0x243ace.error(_0x2fbd83 + "\n\ncmdName: " + _0x2f61ae, _0x2fbd83);
  }
});
smd({
  'cmdname': "leaves",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x408c2a, _0x34aedd, {
  cmdName: _0x5a63ff
}) => {
  try {
    if (!_0x34aedd) {
      return _0x408c2a.reply("*_Example : " + (prefix + _0x5a63ff) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x408c2a, 'natural-leaves-text-effect-931', _0x34aedd);
  } catch (_0x529313) {
    return await _0x408c2a.error(_0x529313 + "\n\ncmdName: " + _0x5a63ff, _0x529313);
  }
});
smd({
  'cmdname': "discovery",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x4e96b1, _0x456472, {
  cmdName: _0x2d24fe
}) => {
  try {
    if (!_0x456472) {
      return _0x4e96b1.reply("*_Example : " + (prefix + _0x2d24fe) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x4e96b1, "create-space-text-effects-online-free-1042", _0x456472);
  } catch (_0x37f7eb) {
    return await _0x4e96b1.error(_0x37f7eb + "\n\ncmdName: " + _0x2d24fe, _0x37f7eb);
  }
});
smd({
  'cmdname': 'christmas',
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x47ceb5, _0x10e1fe, {
  cmdName: _0x16ffac
}) => {
  try {
    if (!_0x10e1fe) {
      return _0x47ceb5.reply("*_Example : " + (prefix + _0x16ffac) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x47ceb5, 'christmas-tree-text-effect-online-free-1057', _0x10e1fe);
  } catch (_0x124152) {
    return await _0x47ceb5.error(_0x124152 + "\n\ncmdName: " + _0x16ffac, _0x124152);
  }
});
smd({
  'cmdname': "candy",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x203857, _0x55614b, {
  cmdName: _0x5d6a7c
}) => {
  try {
    if (!_0x55614b) {
      return _0x203857.reply("*_Example : " + (prefix + _0x5d6a7c) + " ANITA_*");
    }
    return await textToLogoGenerator(_0x203857, 'create-christmas-candy-cane-text-effect-1056', _0x55614b);
  } catch (_0x35967f) {
    return await _0x203857.error(_0x35967f + "\n\ncmdName: " + _0x5d6a7c, _0x35967f);
  }
});
smd({
  'cmdname': "1917",
  'type': "deepsea",
  'info': "Some text to image feature with various styles.",
  'filename': __filename
}, async (_0x388b8c, _0x205f75, {
  cmdName: _0x85be8e
}) => {
  try {
    if (!_0x205f75) {
      return _0x388b8c.reply("*_Example : " + (prefix + _0x85be8e) + " ANITA*");
    }
    return await textToLogoGenerator(_0x388b8c, '1917-style-text-effect-online-980', _0x205f75);
  } catch (_0x665f87) {
    return await _0x388b8c.error(_0x665f87 + "\n\ncmdName: " + _0x85be8e, _0x665f87);
  }
});