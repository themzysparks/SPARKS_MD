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


function hi() {
  console.log("Hello World!");
}
hi();
const os = require('os');
const Config = require("../config");
let {
  fancytext,
  tiny,
  runtime,
  formatp,
  prefix
} = require("../lib");
const long = String.fromCharCode(0x200e);
const readmore = long.repeat(0xfa1);
const astro_patch = require('../lib/plugins');
const trend_usage = (() => {
  const _0x4479c0 = ((_0x52c9bc, _0x194ffe) => {
    const _0x23e5cb = Math.random() * (_0x194ffe - (_0x52c9bc + 0x1));
    const _0x1b9561 = Math.floor(_0x23e5cb) + _0x52c9bc;
    return _0x1b9561;
  })(0x1, 0x63);
  return _0x4479c0;
})();
const database_info = (() => {
  const _0x34cd93 = ((_0x5f25d6, _0x2f9261) => {
    const _0x4e1431 = Math.random() * (_0x2f9261 - (_0x5f25d6 + 0x1));
    const _0x5f48d1 = Math.floor(_0x4e1431) + _0x5f25d6;
    return _0x5f48d1;
  })(0x1, 0x1f3);
  return _0x34cd93;
})();
astro_patch.smd({
  'cmdname': 'menu',
  'desc': "Help list",
  'react': '🚬',
  'desc': "To show all available.j0commands.",
  'type': "user",
  'filename': __filename
}, async (_0x7843a7, _0x4f6531) => {
  try {
    const {
      commands: _0x53c9ff
    } = require('../lib');
    if (_0x4f6531.split(" ")[0x0]) {
      let _0xc9c18f = [];
      const _0x175cc2 = _0x53c9ff.find(_0x39a56d => _0x39a56d.pattern === _0x4f6531.split(" ")[0x0].toLowerCase());
      if (_0x175cc2) {
        _0xc9c18f.push("*🔉Command:* " + _0x175cc2.pattern);
        if (_0x175cc2.category) {
          _0xc9c18f.push("*💁Category:* " + _0x175cc2.category);
        }
        if (_0x175cc2.alias && _0x175cc2.alias[0x0]) {
          _0xc9c18f.push("*💁Alias:* " + _0x175cc2.alias.join(", "));
        }
        if (_0x175cc2.desc) {
          _0xc9c18f.push("*💁Description:* " + _0x175cc2.desc);
        }
        if (_0x175cc2.use) {
          _0xc9c18f.push("*〽️Usage:*\n ```" + prefix + _0x175cc2.pattern + " " + _0x175cc2.use + '```');
        }
        if (_0x175cc2.usage) {
          _0xc9c18f.push("*〽️Usage:*\n ```" + _0x175cc2.usage + "```");
        }
        await _0x7843a7.reply(_0xc9c18f.join("\n"));
      }
    }
    let _0x35c4d7;
    let _0x471c0c;
    let _0x1599e2;
    let _0x58a1cc;
    let _0x2d3725;
    let _0x4559dc;
    if (Config.menu === '') {
      _0x35c4d7 = Math.floor(Math.random() * 0x4) + 0x1;
    }
    if (_0x35c4d7 === 0x1 || Config.menu.trim().startsWith('1') || Config.menu.toLowerCase().includes("menu1")) {
      _0x471c0c = "┏﹝ *" + Config.botname + "* ﹞";
      _0x1599e2 = '┃۞';
      _0x58a1cc = '┌『';
      _0x2d3725 = '』';
      _0x4559dc = " | ";
      footer = "\n└═════════════⋙";
    } else if (_0x35c4d7 === 0x2 || Config.menu.trim().startsWith('2') || Config.menu.toLowerCase().includes('menu2')) {
      _0x471c0c = "┌═[ *" + Config.botname + "* ]";
      _0x1599e2 = "☯│▸";
      _0x58a1cc = '┌〈';
      _0x2d3725 = '〉';
      _0x4559dc = "☯│▸ ";
      footer = "\n│╰══════════···▸▸";
    } else {
      _0x471c0c = "╭〘  " + Config.botname + "  〙";
      _0x1599e2 = "│ │";
      _0x58a1cc = "╭─❏";
      _0x2d3725 = '❏';
      _0x4559dc = '│';
      footer = "╰════════════─⊷";
    }
    const _0x50fde7 = {};
    _0x53c9ff.map(async _0x192637 => {
      if (_0x192637.dontAddCommandList === false && _0x192637.pattern !== undefined) {
        if (!_0x50fde7[_0x192637.category]) {
          _0x50fde7[_0x192637.category] = [];
        }
        _0x50fde7[_0x192637.category].push(_0x192637.pattern);
      }
    });
    const _0x1bf221 = _0x7843a7.time;
    const _0x156fa2 = _0x7843a7.date;
    let _0x80d16d = "\n  " + _0x471c0c + "\n  " + _0x1599e2 + " *ᴏᴡɴᴇʀ:* " + Config.ownername + "\n  " + _0x1599e2 + " *ᴜᴘᴛɪᴍᴇ:* " + runtime(process.uptime()) + "\n  " + _0x1599e2 + " *ʀᴀᴍ ᴜsᴀɢᴇ:* " + formatp(os.totalmem() - os.freemem()) + "\n  " + _0x1599e2 + " *ᴛɪᴍᴇ:* " + _0x1bf221 + "\n  " + _0x1599e2 + " *ᴅᴀᴛᴇ:* " + _0x156fa2 + "\n  " + _0x1599e2 + " *ᴄᴏᴍᴍᴀɴᴅs:* " + _0x53c9ff.length + "\n  " + _0x1599e2 + " *ᴜsᴀɢᴇ ᴛʀᴇɴᴅ:* " + trend_usage + "\n  " + _0x1599e2 + " *ᴅᴀᴛᴀʙᴀsᴇ:* " + database_info + "\n  " + footer + "\n┌┤✑\n ▄▀█\u2003█▄░█\u2003█\u2003▀█▀\u2003▄▀█\n█▀█\u2003█░▀█\u2003█\u2003░█░\u2003█▀█\n  WA - BOT\n │ ©2024 by *CODERXSA*\n  └─────────────────┈ ⳹\n  \n" + readmore + "\n";
    for (const _0x1ff980 in _0x50fde7) {
      _0x80d16d += _0x58a1cc + " *" + tiny(_0x1ff980) + "* " + _0x2d3725 + "\n";
      if (_0x4f6531.toLowerCase() === _0x1ff980.toLowerCase()) {
        _0x80d16d = _0x58a1cc + " *" + tiny(_0x1ff980) + "* " + _0x2d3725 + "\n";
        for (const _0x47b5c6 of _0x50fde7[_0x1ff980]) {
          _0x80d16d += _0x4559dc + " " + fancytext(_0x47b5c6, 0x1) + "\n";
        }
        _0x80d16d += footer + "\n";
        break;
      } else {
        for (const _0xc1f1d0 of _0x50fde7[_0x1ff980]) {
          _0x80d16d += _0x4559dc + " " + fancytext(_0xc1f1d0, 0x1) + "\n";
        }
        _0x80d16d += footer + "\n";
      }
    }
    _0x80d16d += Config.caption;
    const _0x87a794 = {
      'caption': _0x80d16d,
      'ephemeralExpiration': 0xbb8
    };
    return await _0x7843a7.sendUi(_0x7843a7.chat, _0x87a794, _0x7843a7);
  } catch (_0x519741) {
    await _0x7843a7.error(_0x519741 + "\nCommand: menu", _0x519741);
  }
});