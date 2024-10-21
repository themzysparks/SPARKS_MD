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
} = require("../lib");
let GfxFunc = async (_0x3415cc, {
  Void: _0x7c2340,
  text: _0x2e4747,
  smd: _0x1291fc
}, _0x3f9cc3 = true) => {
  try {
    _0x2e4747 += ": ser";
    let _0x3f087a = "Example  : *" + (prefix + _0x1291fc) + "* Asta";
    let _0x3c85bf = "*Separate the text with ':' sign*\n*Example : " + (prefix + _0x1291fc) + " Asta : Bot*";
    let _0x5087fe = _0x2e4747.split(':')[0x0];
    let _0xdcf3c0 = _0x1291fc.toLowerCase();
    switch (_0xdcf3c0) {
      case "gfx1":
        if (!_0x5087fe) {
          throw _0x3f087a;
        }
        let _0x17915b = 'https://api.caliph.biz.id/api/kaneki?nama=' + encodeURIComponent(_0x5087fe) + "&apikey=caliphkey";
        _0x3415cc.send(_0x17915b, {
          'caption': Config.caption
        }, 'img', _0x3415cc);
        break;
      case "gfx2":
        if (!_0x2e4747) {
          throw _0x3c85bf;
        }
        if (!_0x2e4747.includes(':')) {
          throw _0x3c85bf;
        }
        let [_0x1a6050, _0x2e8fc4] = _0x2e4747.split(':');
        let _0x3eb8fa = "https://api.caliph.biz.id/api/girlneko?nama=" + encodeURIComponent(_0x1a6050.trim()) + "&nama2=" + encodeURIComponent(_0x2e8fc4.trim()) + "&apikey=caliphkey";
        _0x3415cc.send(_0x3eb8fa, {
          'caption': Config.caption
        }, 'img', _0x3415cc);
        break;
      case "gfx3":
        if (!_0x5087fe) {
          throw _0x3f087a;
        }
        let _0x1c8b08 = 'https://api.caliph.biz.id/api/rem?nama=' + encodeURIComponent(_0x5087fe) + "&apikey=caliphkey";
        _0x3415cc.send(_0x1c8b08, {
          'caption': Config.caption
        }, "img", _0x3415cc);
        break;
      case "gfx4":
        if (!_0x5087fe) {
          throw _0x3f087a;
        }
        let _0x278916 = "https://api.caliph.biz.id/api/textpro/matrix?text=" + encodeURIComponent(_0x5087fe) + '&apikey=caliphkey';
        _0x3415cc.send(_0x278916, {
          'caption': Config.caption
        }, 'img', _0x3415cc);
        break;
      case "gfx5":
        if (!_0x5087fe) {
          throw _0x3f087a;
        }
        const _0x3dbc3b = "https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=GataDios&text=" + encodeURIComponent(_0x5087fe);
        _0x3415cc.send(_0x3dbc3b, {
          'caption': Config.caption
        }, "img", _0x3415cc);
        break;
      case 'gfx6':
        if (!_0x2e4747) {
          throw _0x3c85bf;
        }
        if (!_0x2e4747.includes(':')) {
          throw _0x3c85bf;
        }
        let [_0x7f2d95, _0x5e9159] = _0x2e4747.split`:`;
        const _0x329b79 = "https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=GataDios&text1=" + encodeURIComponent(_0x7f2d95) + "&text2=" + encodeURIComponent(_0x5e9159);
        _0x3415cc.send(_0x329b79, {
          'caption': Config.caption
        }, "img", _0x3415cc);
        break;
      case "gfx7":
        if (!_0x2e4747) {
          throw _0x3c85bf;
        }
        if (!_0x2e4747.includes(':')) {
          throw _0x3c85bf;
        }
        let [_0x5cbc8e, _0x2ae1e9] = _0x2e4747.split(':');
        let _0x4152de = "https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=GataDios&text1=" + encodeURIComponent(_0x5cbc8e.trim()) + "&text2=" + encodeURIComponent(_0x2ae1e9.trim());
        _0x3415cc.send(_0x4152de, {
          'caption': Config.caption
        }, "img", _0x3415cc);
        break;
      case 'gfx8':
        if (!_0x5087fe) {
          throw _0x3f087a;
        }
        let _0x18cbb1 = "https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=GataDios&text=" + encodeURIComponent(_0x5087fe);
        _0x3415cc.send(_0x18cbb1, {
          'caption': Config.caption
        }, "img", _0x3415cc);
        break;
      case 'gfx9':
        if (!_0x5087fe) {
          throw _0x3f087a;
        }
        let _0x2a7b4e = "https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=GataDios&text=" + encodeURIComponent(_0x5087fe);
        _0x3415cc.send(_0x2a7b4e, {
          'caption': Config.caption
        }, "img", _0x3415cc);
        break;
      case "gfx10":
        if (!_0x5087fe) {
          throw _0x3f087a;
        }
        let _0x451961 = "https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=GataDios&text=" + encodeURIComponent(_0x5087fe);
        _0x3415cc.send(_0x451961, {
          'caption': Config.caption
        }, "img", _0x3415cc);
        break;
      case "gfx11":
        if (!_0x2e4747) {
          throw _0x3c85bf;
        }
        if (!_0x2e4747.includes(':')) {
          throw _0x3c85bf;
        }
        let [_0xbe32eb, _0x38492f] = _0x2e4747.split(':');
        let _0x4a9c9c = "https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=GataDios&text1=" + encodeURIComponent(_0xbe32eb.trim()) + "&text2=" + encodeURIComponent(_0x38492f.trim());
        _0x3415cc.send(_0x4a9c9c, {
          'caption': Config.caption
        }, 'img', _0x3415cc);
        break;
      case 'gfx12':
        if (!_0x5087fe) {
          throw _0x3f087a;
        }
        let _0x51e6ba = "https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=GataDios&text=" + encodeURIComponent(_0x5087fe);
        _0x3415cc.send(_0x51e6ba, {
          'caption': Config.caption
        }, "img", _0x3415cc);
        break;
      case "gfx13":
        if (!_0x2e4747.includes(':')) {
          throw _0x3c85bf;
        }
        let [_0x2cb435, _0x35690f] = _0x2e4747.split(':');
        let _0x185b08 = "https://api.caliph.biz.id/api/sadboy?nama=" + encodeURIComponent(_0x2cb435.trim()) + '&nama2=' + encodeURIComponent(_0x35690f.trim()) + '&apikey=caliphkey';
        _0x3415cc.send(_0x185b08, {
          'caption': Config.caption
        }, 'img', _0x3415cc);
        break;
      case 'gfx14':
        if (!_0x2e4747) {
          throw _0x3c85bf;
        }
        var [_0x23eac1, _0x5ae128] = _0x2e4747.split(':');
        let _0x381f90 = 'https://api.caliph.biz.id/api/lolimaker?nama=' + encodeURIComponent(_0x23eac1.trim()) + "&nama2=" + encodeURIComponent(_0x5ae128.trim()) + '&apikey=caliphkey';
        _0x3415cc.send(_0x381f90, {
          'caption': Config.caption
        }, "img", _0x3415cc);
        break;
      default:
        break;
    }
  } catch (_0x58a533) {
    console.log(_0x58a533);
    if (_0x3f9cc3) {
      return _0x3415cc.send('' + _0x58a533);
    }
  }
};
let gfxx = ["gfx1", "gfx2", "gfx3", "gfx4", "gfx5", 'gfx6', "gfx7", "gfx8", "gfx9", "gfx10", "gfx11", 'gfx12', "gfx13", "gfx14"];
for (let i = 0x0; i < gfxx.length; i++) {
  smd({
    'cmdname': gfxx[i],
    'infocmd': "create a gfx logo for text",
    'type': "gfx"
  }, async (_0x3a40d2, _0x4ff91d, {
    smd: _0x5b8373,
    Void: _0x16fbb6
  }) => {
    try {
      GfxFunc(_0x3a40d2, {
        'text': _0x4ff91d,
        'Void': _0x16fbb6,
        'smd': _0x5b8373
      });
    } catch (_0x2e2de6) {
      console.log(_0x2e2de6);
    }
  });
}
smd({
  'cmdname': "gfx",
  'infocmd': "create gfx logo for text",
  'type': "gfx"
}, async (_0x2ee13c, _0x3e83c6, {
  smd: _0x53f81b,
  Void: _0x3303a8
}) => {
  try {
    let _0x10a518 = "*Separate the text with _:_ sign!*\n*Example : " + (prefix + _0x53f81b) + " ANITA _:_ Bot*";
    if (!_0x3e83c6) {
      let _0x44e66f = "┌───〈 *ɢꜰx ᴍᴇɴᴜ*  〉───◆\n│╭─────────────···▸\n┴│▸\n⬡│▸ " + gfxx.join(" \n⬡│▸ ") + "\n┬│▸\n│╰────────────···▸▸\n└───────────────···▸\n\n\t *USE: " + (prefix + _0x53f81b) + " ANITA*\n_To get All Results with single Cmd!_\n";
      return await _0x2ee13c.sendUi(_0x2ee13c.chat, {
        'caption': _0x44e66f
      });
    }
    if (!_0x3e83c6.includes(':')) {
      return _0x2ee13c.send(_0x10a518);
    }
    for (let _0x43c8cd = 0x0; _0x43c8cd < gfxx.length; _0x43c8cd++) {
      GfxFunc(_0x2ee13c, {
        'text': _0x3e83c6,
        'Void': _0x3303a8,
        'smd': 'gfx' + (_0x43c8cd + 0x1)
      }, false);
    }
  } catch (_0x424f32) {
    _0x2ee13c.error(_0x424f32 + "\n\nCommand: " + _0x53f81b, _0x424f32, false);
  }
});