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

const os = require('os');
const fs = require('fs');
const Config = require('../config');
let {
  fancytext,
  tlang,
  tiny,
  runtime,
  formatp,
  prefix,
  smd,
  commands
} = require("../lib");
const long = String.fromCharCode(0x200e);
const readmore = long.repeat(0xfa1);
const astro_patch = require("../lib/plugins");
const {
  exec
} = require("child_process");
const translatte = require("translatte");
smd({
  'pattern': "menus",
  'type': "MENU list",
  'info': "user",
  'dontAddCommandList': true
}, async _0x3c89c5 => {
  try {
    let _0x3bb033 = (" \n➮ʀᴜɴᴛɪᴍᴇ - " + runtime(process.uptime()) + " \n➮ᴅᴀᴛᴇ - " + _0x3c89c5.date + " \n➮ɴᴏᴡ ᴛɪᴍᴇ - " + _0x3c89c5.time + " \n➮Fᴏᴜɴᴅᴇʀ- *SCODERX*\n➮Oᴡɴᴇʀ - " + Config.ownername + " \n➮Nᴜᴍ - " + owner.split(',')[0x0] + " \n➮Mᴇᴍᴏ - " + formatp(os.totalmem() - os.freemem()) + " \n      \n *ANITA SIMPLE WHATSAPP BOT*\n\n " + readmore + " \n╭──❰ *ALL MENU* ❱ \n│💞 Lɪꜱᴛ \n│💞 Cᴀᴛᴇɢᴏʀʏ \n│💞 Hᴇʟᴘ \n│💞 Aʟɪᴠᴇ \n│💞 Uᴘᴛɪᴍᴇ \n│💞 Wᴇᴀᴛʜᴇʀ \n│💞 Lɪɴᴋ \n│💞 Cᴘᴜ \n│💞 Rᴇᴘᴏꜱɪᴛᴏʀʏ \n╰─────────────⦁").trim();
    return await _0x3c89c5.bot.sendUi(_0x3c89c5.from, {
      'caption': _0x3bb033
    });
  } catch (_0x59412f) {
    await _0x3c89c5.error(_0x59412f + "\nCommand:menus", _0x59412f);
  }
});
astro_patch.cmd({
  'pattern': 'setcmd',
  'desc': "To set a custom command",
  'category': "tools",
  'fromMe': true,
  'filename': __filename
}, async (_0x25ae9a, _0x58f6c8, {
  Void: _0x1c3205
}) => {
  try {
    if (!_0x58f6c8) {
      return await _0x25ae9a.send("*_Please provide cmd name by replying a Sticker_*");
    }
    let _0x541bf4 = _0x58f6c8.split(',');
    let _0x2d2dad;
    let _0x19b758;
    let _0xa8f10e = false;
    if (_0x25ae9a.quoted) {
      let _0x4680f1 = _0x25ae9a.quoted.mtype;
      if (_0x4680f1 === "stickerMessage" && _0x58f6c8) {
        _0xa8f10e = true;
        _0x2d2dad = _0x58f6c8.split(" ")[0x0];
        _0x19b758 = 'sticker-' + _0x25ae9a.quoted.msg.fileSha256;
      }
    }
    if (!_0xa8f10e && _0x541bf4.length > 0x1) {
      _0x19b758 = _0x541bf4[0x0].trim().toLowerCase();
      _0x2d2dad = _0x541bf4[0x1].trim().toLowerCase();
    } else {
      if (!_0xa8f10e) {
        return await _0x25ae9a.send("*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*");
      }
    }
    if (_0x2d2dad.length < 0x1) {
      return await _0x25ae9a.reply("*_Uhh Please, Provide New_Cmd Name First_*");
    }
    if (global.setCmdAlias[_0x2d2dad]) {
      return await _0x25ae9a.send("*_\"" + (_0xa8f10e ? "Given Sticker" : _0x2d2dad) + "\" Already set for \"" + global.setCmdAlias[_0x2d2dad] + "\" Cmd, Please try another " + (_0xa8f10e ? 'Sticker' : "Name") + '_*');
    }
    const _0x34e58b = astro_patch.commands.find(_0x388474 => _0x388474.pattern === _0x19b758) || astro_patch.commands.find(_0x944d75 => _0x944d75.alias && _0x944d75.alias.includes(_0x19b758));
    return _0x34e58b ? (global.setCmdAlias[_0x2d2dad] = _0x34e58b.pattern, await _0x25ae9a.send("*_Cmd \"" + global.setCmdAlias[_0x2d2dad] + "\" Successfully set to \"" + (_0xa8f10e ? "Sticker" : _0x2d2dad) + "\"._*\n*_These all names are reset if the bot restarts_*")) : await _0x25ae9a.send("*_Provided Cmd (" + _0x19b758 + ") not found in bot commands. Please provide a valid command name_*");
  } catch (_0x166921) {
    await _0x25ae9a.error(_0x166921 + "\nCommand:setcmd", _0x166921);
  }
});
astro_patch.cmd({
  'pattern': "delcmd",
  'desc': "To delete a custom command",
  'category': "tools",
  'fromMe': true,
  'filename': __filename
}, async (_0xccc90e, _0x1842ed, {
  Void: _0x53b825
}) => {
  try {
    let _0x26e95f = _0x1842ed ? _0x1842ed.split(" ")[0x0].trim().toLowerCase() : '';
    let _0x4517fa = false;
    if (_0xccc90e.quoted) {
      if (_0xccc90e.quoted.mtype === "stickerMessage") {
        _0x4517fa = true;
        _0x26e95f = "sticker-" + _0xccc90e.quoted.msg.fileSha256;
      } else {
        if (!_0x1842ed) {
          return await _0xccc90e.send("*_Please reply to a Sticker that was set for a command_*");
        }
      }
    } else {
      if (!_0x1842ed) {
        return await _0xccc90e.send("*_Uhh Dear, provide the name that was set for a command_*\n*Eg: _.delcmd Cmd_Name_*");
      }
    }
    if (global.setCmdAlias[_0x26e95f]) {
      await _0xccc90e.send("*_\"" + (_0x4517fa ? "Given Sticker" : _0x26e95f) + "\" deleted successfully for \"" + global.setCmdAlias[_0x26e95f] + "\" command_*");
      delete global.setCmdAlias[_0x26e95f];
      return;
    } else {
      return await _0xccc90e.send("*_\"" + (_0x4517fa ? "Given Sticker" : _0x26e95f) + "\" is not set for any command._*\n *_Please provide a valid " + (_0x4517fa ? "Sticker" : "command name") + " to delete_*");
    }
  } catch (_0x34f1c2) {
    await _0xccc90e.error(_0x34f1c2 + "\nCommand:delcmd", _0x34f1c2);
  }
});
astro_patch.smd({
  'pattern': "ping",
  'desc': "To check ping",
  'category': 'misc',
  'filename': __filename
}, async _0x28c786 => {
  var _0x578788 = new Date().getTime();
  const {
    key: _0xce9534
  } = await _0x28c786.reply("*Testing Ping!!!*");
  var _0x72eb65 = new Date().getTime();
  return await _0x28c786.send("*Pong*\n *" + (_0x72eb65 - _0x578788) + " ms*", {
    'edit': _0xce9534
  }, '', _0x28c786);
});
astro_patch.cmd({
  'pattern': "uptime",
  'alias': ['runtime'],
  'desc': "Tells runtime/uptime of bot.",
  'category': "misc",
  'filename': __filename
}, async _0x3569bc => {
  try {
    _0x3569bc.reply("*_Uptime of " + tlang().title + ": " + runtime(process.uptime()) + '_*');
  } catch (_0x118a84) {
    await _0x3569bc.error(_0x118a84 + "\n\ncommand : uptime", _0x118a84, false);
  }
});
astro_patch.cmd({
  'pattern': "list",
  'desc': "list menu",
  'category': "user",
  'react': '🥀'
}, async _0x35da6d => {
  try {
    const {
      commands: _0xa3b2ca
    } = require("../lib");
    let _0x3d55eb = "\n  \n╭━━〘 * " + Config.botname + " * 〙    \n┃ 💞 Prefix: " + Config.HANDLERS + "\n┃ 💞 Owner: " + Config.ownername + "\n┃ 💞 Commands: " + _0xa3b2ca.length + "\n┃ 💞 Uptime: " + runtime(process.uptime()) + "\n┃ 💞 Mem: " + formatp(os.totalmem() - os.freemem()) + "\n╰━━━━━━━━━━━━━━⊷\n";
    for (let _0x5d5a7a = 0x0; _0x5d5a7a < _0xa3b2ca.length; _0x5d5a7a++) {
      if (_0xa3b2ca[_0x5d5a7a].pattern === undefined) {
        continue;
      }
      _0x3d55eb += '*' + (_0x5d5a7a + 0x1) + " " + fancytext(_0xa3b2ca[_0x5d5a7a].pattern, 0x1) + "*\n";
      _0x3d55eb += "  " + fancytext(_0xa3b2ca[_0x5d5a7a].desc, 0x1) + "\n";
    }
    return await _0x35da6d.sendUi(_0x35da6d.chat, {
      'caption': _0x3d55eb + Config.caption
    });
  } catch (_0x43bc8f) {
    await _0x35da6d.error(_0x43bc8f + "\nCommand:list", _0x43bc8f);
  }
});
astro_patch.smd({
  'pattern': 'owner',
  'desc': "To display owner information",
  'category': "owner",
  'filename': __filename
}, async _0x56b689 => {
  try {
    const _0x4fe83b = "BEGIN:VCARD\nVERSION:3.0\nFN:" + Config.ownername + "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" + global.owner?.["split"](',')[0x0] + ':+' + global.owner?.["split"](',')[0x0] + "\nEND:VCARD";
    let _0xd3b3b5 = {
      'contacts': {
        'displayName': Config.ownername,
        'contacts': [{
          'vcard': _0x4fe83b
        }]
      },
      'contextInfo': {
        'externalAdReply': {
          'title': Config.ownername,
          'body': "Touch here.",
          'renderLargerThumbnail': true,
          'thumbnailUrl': '',
          'thumbnail': log0,
          'mediaType': 0x1,
          'mediaUrl': '',
          'sourceUrl': "https://wa.me/+" + global.owner?.["split"](',')[0x0] + "?text=HELLO+" + Config.ownername
        }
      }
    };
    return await _0x56b689.sendMessage(_0x56b689.jid, _0xd3b3b5, {
      'quoted': _0x56b689
    });
  } catch (_0x1f84d6) {
    await _0x56b689.error(_0x1f84d6 + "\nCommand:owner", _0x1f84d6);
  }
});
astro_patch.cmd({
  'pattern': "trt",
  'alias': ["translate"],
  'category': "user",
  'filename': __filename,
  'use': "< text >",
  'desc': "Translates the given text to the desired language."
}, async (_0x4d791e, _0x237056) => {
  try {
    let _0x5a70d7 = _0x237056 ? _0x237056.split(" ")[0x0].toLowerCase() : 'en';
    if (!_0x4d791e.reply_text) {
      var _0x2fd2fb = _0x237056.replace(_0x5a70d7, '')?.["trim"]() || false;
    } else {
      var _0x2fd2fb = _0x4d791e.reply_text;
    }
    if (!_0x2fd2fb) {
      return await _0x4d791e.reply("*Please provide the text to translate. Example: " + prefix + "trt en Who are you*");
    }
    var _0x1c40fe = await translatte(_0x2fd2fb, {
      'from': 'auto',
      'to': _0x5a70d7
    });
    if ("text" in _0x1c40fe) {
      return await _0x4d791e.reply(_0x1c40fe.text);
    }
  } catch (_0x119eb4) {
    await _0x4d791e.error(_0x119eb4 + "\n\nCommand: trt", _0x119eb4);
  }
});
const readDirectory = _0x586b37 => {
  return new Promise((_0x4ad3c3, _0x9263) => {
    fs.readdir(_0x586b37, (_0x496ab4, _0x52a876) => {
      if (_0x496ab4) {
        _0x9263("Error reading directory");
      } else {
        _0x4ad3c3(_0x52a876);
      }
    });
  });
};
astro_patch.cmd({
  'pattern': 'file',
  'desc': "to get the exact name and location of the command in the repository, so the user can edit it.",
  'category': "user",
  'fromMe': true,
  'filename': __filename
}, async (_0x1c7622, _0x210450) => {
  try {
    if (!_0x210450) {
      return _0x1c7622.reply("*Please provide a command or directory*");
    }
    if (_0x210450.startsWith('.')) {
      let _0x59e951 = "*------------- FILE MANAGER -2------------*\n";
      try {
        const _0x4ee47b = await readDirectory(_0x210450);
        _0x4ee47b.forEach(_0x1ff712 => {
          _0x59e951 += _0x1ff712 + "\n";
        });
        await _0x1c7622.reply(_0x59e951.toString());
      } catch (_0x172a1e) {
        _0x1c7622.reply(_0x172a1e);
      }
      return;
    }
    const {
      commands: _0x57b871
    } = require("../lib");
    let _0x3c13c9 = [];
    let _0x2259d0 = _0x210450.split(" ")[0x0].toLowerCase().trim();
    let _0x5b7d80 = _0x57b871.find(_0x339957 => _0x339957.pattern === _0x2259d0) || _0x57b871.find(_0x2d6f8b => _0x2d6f8b.alias && _0x2d6f8b.alias.includes(_0x2259d0));
    if (!_0x5b7d80) {
      return await _0x1c7622.reply("*❌No such command.*");
    }
    _0x3c13c9.push("*🍁Command:* " + _0x5b7d80.pattern);
    if (_0x5b7d80.category) {
      _0x3c13c9.push("*🧩Type:* " + _0x5b7d80.category);
    }
    if (_0x5b7d80.alias && _0x5b7d80.alias[0x0]) {
      _0x3c13c9.push("*🧩Alias:* " + _0x5b7d80.alias.join(", "));
    }
    if (_0x5b7d80.desc) {
      _0x3c13c9.push("*✨Description:* " + _0x5b7d80.desc);
    }
    if (_0x5b7d80.use) {
      _0x3c13c9.push("*〽️Usage:*\n ```" + prefix + _0x5b7d80.pattern + " " + _0x5b7d80.use + '```');
    }
    if (_0x5b7d80.usage) {
      _0x3c13c9.push("*〽️Usage:*\n ```" + _0x5b7d80.usage + "```");
    }
    if (_0x5b7d80.filename) {
      _0x3c13c9.push("*✨FileName:* " + _0x5b7d80.filename);
    }
    try {
      if (_0x210450.includes("function") && _0x5b7d80["function"] && _0x1c7622.isAsta && _0x5b7d80.pattern !== "file") {
        _0x3c13c9.push("*🧩Function:* " + _0x5b7d80['function'].toString());
      }
    } catch {}
    await _0x1c7622.reply(_0x3c13c9.join("\n"));
  } catch (_0xde1ef2) {
    await _0x1c7622.error(_0xde1ef2 + "\nCommand:file", _0xde1ef2);
  }
});
astro_patch.cmd({
  'pattern': "eval",
  'alias': ['$'],
  'category': 'tools',
  'filename': __filename,
  'fromMe': true,
  'desc': "Runs JavaScript code on the Node.js server.",
  'use': "< run code >",
  'dontAddCommandList': true
}, async (_0x4b072c, _0x20194c, {
  isCreator: _0x5658ee,
  cmdName: _0x6808f8,
  Void: _0x235900
}) => {
  try {
    if (!_0x20194c) {
      return _0x4b072c.reply("*Provide a query to run*");
    }
    let _0x4eabe8 = eval("const a = async()=>{\n" + _0x20194c + "\n}\na()");
    if (typeof _0x4eabe8 === "object") {
      await _0x4b072c.reply(JSON.stringify(_0x4eabe8));
    } else {
      await _0x4b072c.reply(_0x4eabe8.toString());
    }
  } catch (_0x9a456d) {
    return await _0x4b072c.reply(_0x9a456d.toString());
  }
});
astro_patch.cmd({
  'pattern': "shell",
  'category': 'tools',
  'filename': __filename,
  'fromMe': true,
  'desc': "Runs a command in the server shell (e.g., Heroku).",
  'use': "<shell commands | ls, cd >",
  'dontAddCommandList': true
}, async (_0x24924e, _0x538921) => {
  try {
    if (!_0x24924e.isCreator) {
      return _0x24924e.reply(tlang().owner);
    }
    if (!_0x538921) {
      return _0x24924e.reply("*Please provide a command to run*");
    }
    exec(_0x538921, (_0x8c4bc1, _0x8cce7b) => {
      if (_0x8c4bc1) {
        return _0x24924e.reply("----" + tlang().title + "----\n\n" + _0x8c4bc1);
      }
      if (_0x8cce7b) {
        return _0x24924e.reply('----' + tlang().title + "----\n\n" + _0x8cce7b);
      }
    });
  } catch (_0x246b99) {
    await _0x24924e.error(_0x246b99 + "\n\ncommand shell", _0x246b99);
  }
});