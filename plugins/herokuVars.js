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


const Config = require("../config");
let {
  fancytext,
  tlang,
  tiny,
  runtime,
  formatp,
  botpic,
  prefix,
  sck1,
  smd
} = require('../lib');
const appName = Config.HEROKU_APP_NAME ? Config.HEROKU_APP_NAME.toLowerCase() : '';
const authToken = Config.HEROKU_API_KEY;
const HEROKU = !!(authToken && appName);
const fetch = require("node-fetch");
let updateConfig = () => {
  try {
    delete require.cache['../config'];
    require('../config');
    return true;
  } catch (_0x268231) {
    console.log(_0x268231);
  }
};
const heroku = {
  addvar: async (_0x19e140, _0x566c94) => {
    try {
      const _0x435177 = {
        'Accept': "application/vnd.heroku+json; version=3",
        'Authorization': "Bearer " + authToken,
        'Content-Type': "application/json"
      };
      const _0xa39f4d = await fetch('https://api.heroku.com/apps/' + appName + "/config-vars", {
        'method': "PATCH",
        'headers': _0x435177,
        'body': JSON.stringify({
          [_0x19e140]: _0x566c94
        })
      });
      const _0x588f54 = await _0xa39f4d.json();
      return {
        'status': true,
        'data': _0x588f54
      };
    } catch (_0x6936ff) {
      return {
        'status': false,
        'data': _0x6936ff
      };
    }
  },
  getallvar: async () => {
    try {
      const _0x118862 = {
        'Accept': "application/vnd.heroku+json; version=3",
        'Authorization': "Bearer " + authToken
      };
      const _0x316d07 = await fetch("https://api.heroku.com/apps/" + appName + "/config-vars", {
        'headers': _0x118862
      });
      const _0x5e3564 = await _0x316d07.json();
      let _0x2c9a98 = "   『 *" + appName + " VARS* 』 \n*________________________________________*\n";
      Object.keys(_0x5e3564).forEach(_0x781462 => {
        _0x2c9a98 += '*' + _0x781462 + " :*  " + (_0x5e3564[_0x781462] ? "```" + _0x5e3564[_0x781462] + '```' : '') + " \n";
      });
      return {
        'status': true,
        'data': _0x2c9a98
      };
    } catch (_0x5278fb) {
      return {
        'status': false,
        'data': _0x5278fb.message || _0x5278fb
      };
    }
  },
  "getvar": async _0x292fd0 => {
    try {
      const _0x11979c = {
        'Accept': "application/vnd.heroku+json; version=3",
        'Authorization': "Bearer " + authToken
      };
      const _0x33a83a = await fetch("https://api.heroku.com/apps/" + appName + "/config-vars", {
        'headers': _0x11979c
      });
      const _0x5edaa2 = await _0x33a83a.json();
      return {
        'status': true,
        'data': _0x5edaa2[_0x292fd0]
      };
    } catch (_0x5b18d2) {
      return {
        'status': false,
        'data': _0x5b18d2.message || _0x5b18d2
      };
    }
  },
  setvar: async (_0x48b3cf, _0x1591c0) => {
    try {
      const _0x2d042a = {
        'Accept': "application/vnd.heroku+json; version=3",
        'Authorization': "Bearer " + authToken,
        'Content-Type': "application/json"
      };
      fetch('https://api.heroku.com/apps/' + appName + "/config-vars", {
        'method': "GET",
        'headers': _0x2d042a
      }).then(_0x270bd4 => {
        return _0x270bd4.ok ? _0x270bd4.json() : {
          'status': false,
          'data': "Failed to fetch app variables. Status: " + _0x270bd4.status
        };
      }).then(_0x3b0d0b => {
        if (_0x3b0d0b.hasOwnProperty(_0x48b3cf)) {
          const _0x58ff56 = {
            ..._0x3b0d0b
          };
          _0x58ff56[_0x48b3cf] = _0x1591c0;
          return fetch("https://api.heroku.com/apps/" + appName + "/config-vars", {
            'method': 'PATCH',
            'headers': _0x2d042a,
            'body': JSON.stringify(_0x58ff56)
          });
        } else {
          return {
            'status': false,
            'data': "Variable not found in app"
          };
        }
      }).then(_0x5dd1dc => {
        if (_0x5dd1dc.ok) {
          return {
            'status': true,
            'data': _0x5dd1dc
          };
        }
      })["catch"](_0x5017e2 => {
        return {
          'status': false,
          'data': _0x5017e2
        };
      });
    } catch (_0x58c920) {
      return {
        'status': false,
        'data': _0x58c920
      };
    }
  },
  "setvar": async (_0x3a86da, _0x46a399) => {
    try {
      const _0xa13515 = {
        'Accept': "application/vnd.heroku+json; version=3",
        'Authorization': "Bearer " + authToken,
        'Content-Type': 'application/json'
      };
      const _0x530838 = await fetch("https://api.heroku.com/apps/" + appName + "/config-vars", {
        'method': "GET",
        'headers': _0xa13515
      });
      if (!_0x530838.ok) {
        return {
          'status': false,
          'data': "Variable not found in heroku app"
        };
      }
      const _0x1ce83f = await _0x530838.json();
      if (_0x1ce83f.hasOwnProperty(_0x3a86da)) {
        const _0x6c1d9 = {
          ..._0x1ce83f
        };
        _0x6c1d9[_0x3a86da] = _0x46a399;
        const _0x1a9311 = await fetch("https://api.heroku.com/apps/" + appName + '/config-vars', {
          'method': "PATCH",
          'headers': _0xa13515,
          'body': JSON.stringify(_0x6c1d9)
        });
        return _0x1a9311.ok ? {
          'status': true,
          'data': _0x1a9311
        } : {
          'status': false,
          'data': "Failed to update app variable. Status: " + _0x1a9311.status
        };
      } else {
        return {
          'status': false,
          'data': "Variable not found in app"
        };
      }
    } catch (_0x4ae5fa) {
      return {
        'status': false,
        'data': _0x4ae5fa.message || _0x4ae5fa
      };
    }
  }
};
smd({
  'cmdname': "getsudo",
  'alias': ['mods', "gsudo"],
  'info': "get sudo users list.",
  'fromMe': true,
  'type': "tools",
  'filename': __filename
}, async _0x50ef8c => {
  let _0x3da924 = global.sudo.split(',').filter(_0x2f2117 => _0x2f2117 && _0x2f2117 !== 'null').map(_0x34e540 => _0x34e540.trim());
  let _0x12fbac = _0x3da924.map((_0x32f66d, _0x35d434) => "  " + (_0x35d434 + 0x1) + " 〄 @" + _0x32f66d + "\n\n").join('');
  let _0x54743e = [_0x50ef8c.sender, ..._0x3da924.map(_0x2ba330 => _0x2ba330 + "@s.whatsapp.net")];
  if (!_0x12fbac || !_0x3da924 || !_0x3da924[0x0]) {
    return await _0x50ef8c.reply("*There's no mods/sudo added for your bot!*");
  }
  let _0x19fc4b = ("\n   👤 *" + (Config.botname ? Config.botname : "ANITA") + " MODS* 👤\n   \n" + _0x12fbac).trim();
  return await _0x50ef8c.reply('https://telegra.ph/file/5fd51597b0270b8cff15b.png', {
    'caption': _0x19fc4b,
    'mentions': _0x54743e
  }, "img", _0x50ef8c);
});
smd({
  'pattern': "setsudo",
  'alias': ["ssudo", "setmod"],
  'fromMe': true,
  'desc': "Make sudo to a user",
  'category': "tools",
  'filename': __filename
}, async _0x28e4a7 => {
  try {
    let _0x119a03 = _0x28e4a7.reply_message ? _0x28e4a7.reply_message.sender : _0x28e4a7.mentionedJid[0x0] ? _0x28e4a7.mentionedJid[0x0] : '';
    if (!_0x119a03 || !_0x119a03.includes("@s.whatsapp.net")) {
      return await _0x28e4a7.reply("*Uhh dear, reply/mention an User*");
    }
    let _0x829f68 = _0x119a03.split('@')[0x0];
    if (global.sudo.includes(_0x829f68)) {
      return _0x28e4a7.reply("*Number Already Exist In Sudo!*");
    }
    global.sudo += ',' + _0x829f68;
    let _0x302ec7 = HEROKU ? await heroku.addvar("SUDO", global.sudo) : {
      'status': false
    };
    if (_0x302ec7 && _0x302ec7.status) {
      return _0x28e4a7.reply('*' + _0x829f68 + " Added Succesfully.*\nSudo Numbers : ```" + global.sudo + "```");
    } else if (!_0x302ec7 || !_0x302ec7?.['status']) {
      if (HEROKU) {
        await _0x28e4a7.reply("*_Request terminated due to error!_*\n\n  There's no responce from _HEROKU_, \n  please check that you put valid _HEROKU_APP_NAME_ and _HEROKU_API_KEY_");
      }
      await _0x28e4a7.reply("*User temporary added in sudo.*");
    }
  } catch (_0x3c9d07) {
    await _0x28e4a7.error(_0x3c9d07 + "\n\ncommand: setsudo", _0x3c9d07);
  }
});
smd({
  'pattern': "delsudo",
  'alias': ['dsudo', 'delmod'],
  'fromMe': true,
  'desc': "delete sudo user.",
  'category': "tools",
  'filename': __filename
}, async _0x554abb => {
  try {
    let _0x14a053 = _0x554abb.reply_message ? _0x554abb.reply_message.sender : _0x554abb.mentionedJid[0x0] ? _0x554abb.mentionedJid[0x0] : '';
    if (!_0x14a053 || !_0x14a053.includes("@s.whatsapp.net")) {
      return await _0x554abb.reply("*Uhh dear, reply/mention an User*");
    }
    let _0x3c1625 = _0x14a053.split('@')[0x0];
    let _0x2c921d = ',' + _0x3c1625;
    if (global.sudo.includes(_0x2c921d)) {
      global.sudo = global.sudo.replace(_0x2c921d, '');
    } else {
      return await _0x554abb.reply("*_User not found in the Sudo List!_*");
    }
    let _0x16683a = HEROKU ? await heroku.addvar("SUDO", global.sudo) : {
      'status': false
    };
    if (_0x16683a && _0x16683a.status) {
      return _0x554abb.reply('*' + _0x3c1625 + " Deleted Succesfully.*\nSudo Numbers : ```" + global.sudo + "```");
    } else if (!_0x16683a || !_0x16683a?.['status']) {
      if (HEROKU) {
        await _0x554abb.reply("*_Request terminated due to error!_*\n\n  There's no responce from _HEROKU_, \n  please check that you put valid _HEROKU_APP_NAME_ and _HEROKU_API_KEY_");
      }
      await _0x554abb.reply("*User removed from sudo.*");
    }
  } catch (_0x290296) {
    await _0x554abb.error(_0x290296 + "\n\ncommand: delsudo", _0x290296);
  }
});
smd({
  'pattern': "allvar",
  'alias': ['getallvar', "allvars"],
  'desc': "To get All  Heroku Vars",
  'fromMe': true,
  'category': "tools",
  'filename': __filename
}, async _0x4a06b2 => {
  try {
    let _0x145fff = await heroku.getallvar();
    console.log({
      'result': _0x145fff
    });
    if (_0x145fff.status) {
      return _0x4a06b2.send(_0x145fff.data);
    } else {
      console.error(_0x145fff.data);
      _0x4a06b2.reply("*_There's no responce from HEROKU_*, \n  please check that you put valid\n  _HEROKU_APP_NAME_ & _HEROKU_API_KEY_\n``` See Console to check whats the err```");
    }
  } catch (_0x4a4c63) {
    await _0x4a06b2.error(_0x4a4c63 + "\n\ncommand: allvar", _0x4a4c63);
  }
});
smd({
  'pattern': "newvar",
  'alias': ['addvar', "avar"],
  'desc': "To Set Heroku Vars",
  'category': "tools",
  'fromMe': true,
  'filename': __filename
}, async (_0x54c74c, _0x603853, {
  cmdName: _0x3e9005
}) => {
  try {
    if (!_0x603853) {
      return _0x54c74c.reply("*Use " + (prefix + _0x3e9005) + " CAPTION:ANITA*");
    }
    const _0xad404 = _0x603853.indexOf(':');
    const _0x2aad99 = _0x603853.slice(0x0, _0xad404).toUpperCase().trim();
    const _0x12f42f = _0x603853.slice(_0xad404 + 0x1).trim();
    process.env[_0x2aad99] = _0x12f42f;
    updateConfig();
    if (!_0x12f42f) {
      return msg.reply("*Uhh Please, Provide Value After ':' !*\n*Example : " + (prefix + smd) + " AUTO_SAVE_STATUS:true*");
    }
    let _0x24d604 = await heroku.addvar(_0x2aad99, _0x12f42f);
    if (_0x24d604 && _0x24d604.status) {
      return _0x54c74c.reply('*' + _0x2aad99 + ":* [ " + _0x12f42f + " ]  *Added successfully.*");
    } else if (!_0x24d604 || !_0x24d604.status) {
      console.error(result.data);
      await _0x54c74c.reply("*_Can't add " + _0x3e9005 + " due to error!_*\n\n  _please check that you put valid_\n  _*HEROKU_APP_NAME* and *HEROKU_API_KEY*_");
    }
  } catch (_0x5ab6d4) {
    await _0x54c74c.error(_0x5ab6d4 + "\n\ncommand: " + _0x3e9005, _0x5ab6d4);
  }
});
smd({
  'pattern': "getvar",
  'desc': "To Get A Heroku Var",
  'category': "tools",
  'fromMe': true,
  'filename': __filename
}, async (_0x20c73c, _0x4467e9, {
  cmdName: _0x3eb143
}) => {
  try {
    if (!_0x4467e9) {
      return _0x20c73c.reply("*Please give me Variable Name*\n*Example : " + (prefix + _0x3eb143) + " CAPTION*");
    }
    const _0x38d47f = _0x4467e9.split(" ")[0x0].toUpperCase();
    let _0x39fd93 = await heroku.getvar(_0x38d47f);
    if (_0x39fd93.status) {
      return _0x39fd93.data ? _0x20c73c.reply('*' + _0x38d47f + " :* " + _0x39fd93.data) : _0x20c73c.reply('*' + _0x38d47f + "* does not exist in Heroku *" + appName + "* app.");
    } else if (!_0x39fd93 || !_0x39fd93.status) {
      console.error(result.data);
      await _0x20c73c.reply("*_There's no responce from HEROKU_*, \n  _please check that you put valid_\n  _*HEROKU_APP_NAME* & *HEROKU_API_KEY*_");
    }
  } catch (_0x160e99) {
    await _0x20c73c.error(_0x160e99 + "\n\ncommand: " + _0x3eb143, _0x160e99);
  }
});
smd({
  'pattern': "setvar",
  'desc': "To Set Heroku Vars",
  'category': "tools",
  'fromMe': true,
  'filename': __filename
}, async (_0x5042ba, _0x5add99, {
  smd: _0x3680a1
}) => {
  try {
    if (!_0x5add99) {
      return _0x5042ba.reply("*Uhh dear, Give me variable name*\n*Example : " + prefix + "setvar PREFIX:null*");
    }
    const _0x9866a8 = _0x5add99.indexOf(':');
    const _0x1de0ee = _0x5add99.slice(0x0, _0x9866a8).toUpperCase().trim();
    const _0x40909a = _0x5add99.slice(_0x9866a8 + 0x1).trim();
    if (!_0x40909a) {
      return msg.reply("*Uhh Please, Provide value after ':' !*\n*Example : " + (prefix + _0x3680a1) + " AUTO_READ_STATUS:true*");
    }
    process.env[_0x1de0ee] = _0x40909a;
    updateConfig();
    let _0x4466ef = await heroku.setvar(_0x1de0ee, _0x40909a);
    if (_0x4466ef.status) {
      await _0x5042ba.reply('*' + _0x1de0ee + ":* [ " + _0x40909a + " ]  *updated successfully.*");
    } else if (!_0x4466ef || !_0x4466ef.status) {
      console.error(_0x4466ef.data);
      await _0x5042ba.reply(_0x4466ef.data);
    }
  } catch (_0x21f60c) {
    await _0x5042ba.error(_0x21f60c + "\n\ncommand: " + _0x3680a1, _0x21f60c);
  }
});