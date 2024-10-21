global.warncount = process.env.WARN_COUNT || global.warncount || '3';
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


global.MsgsInLog = process.env.MSGS_IN_LOG || global.MsgsInLog || "false";
const {
  groupdb,
  userdb,
  bot_,
  smd,
  sendWelcome,
  Config,
  tlang,
  sleep,
  prefix
} = require('../lib');
const axios = require("axios");
const astro_patch = require("../lib/plugins");
smd({
  'pattern': "lydea",
  'alias': ["chatbot"],
  'desc': "activates and deactivates chatbot.\nuse buttons to toggle.",
  'fromMe': true,
  'category': 'ai',
  'filename': __filename
}, async (_0x57b740, _0x4530f4, {
  cmdName: _0x39b8f3
}) => {
  try {
    let _0x16442c = _0x4530f4.split(" ")[0x0].toLowerCase().trim();
    let _0x4fb402 = (await groupdb.findOne({
      'id': _0x57b740.chat
    })) || (await groupdb["new"]({
      'id': _0x57b740.chat
    }));
    let _0x54e4a1 = (await bot_.findOne({
      'id': 'bot_' + _0x57b740.user
    })) || (await groupdb['new']({
      'id': "bot_" + _0x57b740.user
    })) || {
      'chatbot': "false"
    };
    if (_0x16442c == "all" || _0x16442c === "global") {
      if (_0x54e4a1.chatbot == 'true') {
        return await _0x57b740.send('*' + _0x39b8f3 + " was already enabled to all chat!.*");
      }
      await bot_.updateOne({
        'id': 'bot_' + _0x57b740.user
      }, {
        'chatbot': "true"
      });
      return await _0x57b740.send('*' + _0x39b8f3 + " successfully enabled to all chats!.*");
    } else {
      if (_0x16442c.startsWith('on') || _0x16442c.startsWith("act") || _0x16442c.startsWith("enable")) {
        if (_0x4fb402.chatbot == 'true' || _0x54e4a1.chatbot == 'true') {
          return await _0x57b740.send('*' + _0x39b8f3 + " was already enabled.*");
        }
        await groupdb.updateOne({
          'id': _0x57b740.chat
        }, {
          'chatbot': "true"
        });
        return await _0x57b740.send('*' + _0x39b8f3 + " activated successfully.*");
      } else {
        if (_0x16442c.startsWith("off") || _0x16442c.startsWith("deact") || _0x16442c.startsWith("disable")) {
          if (_0x4fb402.chatbot == "false" && _0x54e4a1.chatbot == "false") {
            return await _0x57b740.send('*' + _0x39b8f3 + " was already disabled.*");
          }
          await bot_.updateOne({
            'id': "bot_" + _0x57b740.user
          }, {
            'chatbot': "false"
          });
          await groupdb.updateOne({
            'id': _0x57b740.chat
          }, {
            'chatbot': "false"
          });
          return await _0x57b740.send('*' + _0x39b8f3 + " deactivated successfully.*");
        } else {
          return await _0x57b740.reply('*_' + _0x39b8f3 + " Currently *" + (_0x54e4a1.chatbot == "true" ? "Enabled in 'all' Chats" : _0x4fb402.chatbot == "true" ? "Enabled in Chat" : "Disabled in Chat") + "!_*\n*_Use On/Off/all to enable/disable " + _0x39b8f3 + '_*');
        }
      }
    }
  } catch (_0x932a6) {
    _0x57b740.error(_0x932a6 + "\n\ncommand: lydea(chatbot)", _0x932a6);
  }
});
let warn = {
  "addwarn": async (_0x5ba5d1, _0x332286, _0x40da4a = {}) => {
    try {
      let _0x1f3ff7 = (await userdb.findOne({
        'id': _0x5ba5d1
      })) || (await userdb['new']({
        'id': _0x5ba5d1
      }));
      let _0x4cae7f = _0x1f3ff7.warn || {};
      if (!_0x4cae7f[_0x332286]) {
        _0x4cae7f[_0x332286] = [];
      }
      var _0x499498 = {
        'chat': 'PRIVATE',
        'reason': "Inapropriate Behaviour",
        'date': new Date(),
        'warnedby': tlang().title,
        ..._0x40da4a
      };
      _0x4cae7f[_0x332286].push(_0x499498);
      _0x1f3ff7 = await userdb.updateOne({
        'id': _0x5ba5d1
      }, {
        'warn': _0x4cae7f
      });
      return {
        'status': true,
        'warning': _0x4cae7f[_0x332286].length,
        'user': _0x1f3ff7
      };
    } catch (_0x15aa9f) {
      return {
        'status': false,
        'warning': 0x0,
        'user': {},
        'error': _0x15aa9f
      };
    }
  }
};
smd({
  'pattern': 'checkwarn',
  'alias': ["listwarn", "chatwarn", "allwarn"],
  'desc': "create paste of text.",
  'category': "user",
  'filename': __filename
}, async (_0x4af65e, _0x6e844f) => {
  try {
    let _0x249d2f = '';
    let _0x339bf4 = _0x4af65e.sender;
    if (_0x4af65e.isCreator) {
      _0x339bf4 = _0x4af65e.reply_message ? _0x4af65e.reply_message.sender : _0x4af65e.mentionedJid[0x0] ? _0x4af65e.mentionedJid[0x0] : _0x339bf4;
    }
    let _0x5a3581 = (await userdb.findOne({
      'id': _0x339bf4
    })) || (await userdb["new"]({
      'id': _0x339bf4
    }));
    let _0x3f92c2 = _0x5a3581.warn || false;
    let _0x4001db = {};
    if (_0x3f92c2 && _0x6e844f === "all") {
      _0x3f92c2 = _0x5a3581.warn;
    } else if (_0x3f92c2 && _0x3f92c2[_0x4af65e.chat]) {
      _0x4001db[_0x4af65e.chat] = [..._0x3f92c2[_0x4af65e.chat]];
      _0x3f92c2 = _0x4001db;
    } else {
      _0x3f92c2 = false;
    }
    let _0x13e5ec = _0x6e844f === "all" ? true : !_0x3f92c2[_0x4af65e.chat];
    if (!_0x5a3581 || !_0x3f92c2 || !_0x13e5ec) {
      return await _0x4af65e.send("*_User didn't have any warning yet!!_*");
    }
    console.log("allwarn : ", _0x3f92c2);
    for (const _0x14f794 in _0x3f92c2) {
      let _0x2516cb = _0x3f92c2[_0x14f794];
      _0x249d2f += "\n╭─────────────◆\n│ *[ID] : " + (_0x14f794.includes('@') ? (await _0x4af65e.bot.getName(_0x14f794)) || _0x14f794 : _0x14f794) + "*\n│ *[TOTAL WARNING] : " + _0x3f92c2[_0x14f794].length + "*\n┝─────────────◆\n";
      for (let _0x4fd352 = 0x0; _0x4fd352 < _0x2516cb.length; _0x4fd352++) {
        _0x249d2f += "┝── *WARNING " + (_0x4fd352 + 0x1) + "* ──\n│  *DATE:* " + _0x2516cb[_0x4fd352].date + " " + (_0x2516cb[_0x4fd352].reason ? "  \n│  *REASON:* " + _0x2516cb[_0x4fd352].reason : '') + "\n│  *WARNED BY:* " + _0x2516cb[_0x4fd352].warnedby + "\n│  *CHAT:* " + _0x2516cb[_0x4fd352].chat + "\n";
      }
      _0x249d2f += "╰─────────────◆\n";
    }
    return await _0x4af65e.reply(_0x249d2f ? _0x249d2f : "*_User didn't have any warning yet!!_*");
  } catch (_0x2327a6) {
    await _0x4af65e.error(_0x2327a6 + "\n\nCommand: chatwarn", _0x2327a6);
  }
});
smd({
  'pattern': "warn",
  'fromMe': true,
  'desc': "warn a user!",
  'category': "user",
  'filename': __filename,
  'use': " < USER >"
}, async (_0x52b97e, _0x3bdea8) => {
  try {
    let _0x16a2dd = _0x52b97e.reply_message ? _0x52b97e.reply_message.sender : _0x52b97e.mentionedJid[0x0] ? _0x52b97e.mentionedJid[0x0] : false;
    if (!_0x16a2dd) {
      return await _0x52b97e.send("*_Uhh please, reply to a user!!_*");
    }
    let _0x12df98 = (await userdb.findOne({
      'id': _0x16a2dd
    })) || (await userdb['new']({
      'id': _0x16a2dd
    }));
    let _0x55d02e = _0x12df98.warn || {};
    if (!_0x55d02e[_0x52b97e.chat]) {
      _0x55d02e[_0x52b97e.chat] = [];
    }
    var _0xff49e0 = {
      'chat': _0x52b97e.isGroup ? _0x52b97e.metadata?.["subject"] || "GROUP" : "PRIVATE CHAT",
      'reason': _0x3bdea8,
      'date': _0x52b97e.date,
      'warnedby': _0x52b97e.senderName
    };
    _0x55d02e[_0x52b97e.chat].push(_0xff49e0);
    await userdb.updateOne({
      'id': _0x16a2dd
    }, {
      'warn': _0x55d02e
    });
    let _0x39a2f1 = parseInt(global.warncount) || 0x3;
    if (_0x55d02e[_0x52b97e.chat].length > _0x39a2f1 && !_0x52b97e.checkBot(_0x16a2dd)) {
      if (_0x52b97e.isGroup) {
        if (_0x52b97e.isBotAdmin) {
          await _0x52b97e.send("*_Hey @" + _0x16a2dd.split('@')[0x0] + ", Kicking you from group!_*\n*_Because Your warn limit exceed!_*", {
            'mentions': [_0x16a2dd]
          });
          await _0x52b97e.bot.groupParticipantsUpdate(_0x52b97e.chat, [_0x16a2dd], 'remove');
        } else {
          return await _0x52b97e.send("*_Hey @" + _0x16a2dd.split('@')[0x0] + " Dont Spam, Your warn limit exceed!_*");
        }
      } else {
        await _0x52b97e.send("*_Hey @" + _0x16a2dd.split('@')[0x0] + ", Blocking you!_*\n*_Because Your warn limit exceed!_*", {
          'mentions': [_0x16a2dd]
        });
        await _0x52b97e.bot.updateBlockStatus(_0x16a2dd, "block");
      }
    } else {
      return await _0x52b97e.send("*_Hey @" + _0x16a2dd.split('@')[0x0] + " warning added, Don't spam!_*", {
        'mentions': [_0x16a2dd]
      });
    }
  } catch (_0x2e2d2c) {
    await _0x52b97e.error(_0x2e2d2c + "\n\nCommand: warn ", _0x2e2d2c, false);
  }
});
smd({
  'pattern': "resetwarn",
  'desc': "create paste of text.",
  'category': "user",
  'filename': __filename,
  'use': " user "
}, async (_0xc2002f, _0x58ef6a) => {
  try {
    if (!_0xc2002f.isCreator && !_0xc2002f.isAdmin) {
      return await _0xc2002f.reply(tlang().admin);
    }
    let _0x3d3e78 = _0xc2002f.reply_message ? _0xc2002f.reply_message.sender : _0xc2002f.mentionedJid[0x0] ? _0xc2002f.mentionedJid[0x0] : false;
    if (!_0x3d3e78) {
      return await _0xc2002f.send("*_Uhh please, reply to a user!!_*");
    }
    let _0xa47b93 = (await userdb.findOne({
      'id': _0x3d3e78
    })) || (await userdb["new"]({
      'id': _0x3d3e78
    })) || {};
    let _0x54959c = _0xa47b93.warn || {};
    if (_0xc2002f.isCreator && _0x58ef6a.toLowerCase() === "all" && _0x54959c) {
      _0x54959c = {};
    } else {
      if (!_0xa47b93 || !_0x54959c || !_0x54959c[_0xc2002f.chat]) {
        return await _0xc2002f.send("*_User didn't have any warning yet!!_*");
      }
      delete _0x54959c[_0xc2002f.chat];
    }
    await userdb.updateOne({
      'id': _0x3d3e78
    }, {
      'warn': _0x54959c
    });
    await _0xc2002f.reply("*User is free as a bird now!*\n*All warns has been deleted!*");
  } catch (_0x29b8ae) {
    await _0xc2002f.error(_0x29b8ae + "\n\nCommand: resetwarn", _0x29b8ae);
  }
});
smd({
  'pattern': "act",
  'alias': ["activate", "active"],
  'desc': "Switches for varios works.",
  'category': 'moderation',
  'filename': __filename
}, async (_0x471113, _0x47f24f) => {
  try {
    if (!_0x471113.isGroup) {
      return _0x471113.reply(tlang().group);
    }
    const _0x59965d = _0x471113.isAdmin;
    let _0x906c36 = _0x47f24f?.["split"](" ")[0x0]["toLowerCase"]()?.["trim"]() || false;
    if (!_0x59965d && !_0x471113.isCreator) {
      return _0x471113.reply(tlang().admin);
    }
    let _0x563acb = (await groupdb.findOne({
      'id': _0x471113.chat
    })) || (await groupdb["new"]({
      'id': _0x471113.chat
    })) || false;
    if (!_0x563acb) {
      return await _0x471113.reply("*_Uhh dear, Group not found in Databse!_*");
    }
    switch (_0x906c36) {
      case "antilink":
        {
          if (_0x563acb.antilink !== "false") {
            return await _0x471113.reply("*_Antilink was alredy enabled here!_*");
          }
          await groupdb.updateOne({
            'id': _0x471113.chat
          }, {
            'antilink': "warn"
          });
          await _0x471113.reply("*_Enabled antilink in current chat.!_*");
        }
        break;
      case 'economy':
        {
          if (_0x563acb.economy == "true") {
            return await _0x471113.reply("*_Economy was alredy enabled.!_*");
          }
          await groupdb.updateOne({
            'id': _0x471113.chat
          }, {
            'economy': "true"
          });
          await _0x471113.reply("*_Economy enabled in current chat.!_*");
        }
        break;
      case "events":
      case "event":
        {
          await groupdb.updateOne({
            'id': _0x471113.chat
          }, {
            'welcome': "true",
            'goodbye': "true"
          });
          return await _0x471113.reply("*Successfully Enabled Events!*");
        }
        break;
      case "nsfw":
        {
          if (_0x563acb.nsfw == 'true') {
            return await _0x471113.reply("*_NSFW is already enabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x471113.chat
          }, {
            'nsfw': "true"
          });
          await _0x471113.reply("*_Successfully Enabled NSFW_*");
        }
        break;
      case "bot":
        {
          if (_0x563acb.botenable == "true") {
            return await _0x471113.reply("*_bot is already enabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x471113.chat
          }, {
            'botenable': "true"
          });
          await _0x471113.reply("*_Successfully Enabled bot_*");
        }
        break;
      default:
        {
          _0x471113.reply("Please provide me term like.\n1-events\n2-antilink\n3-economy\n4-bot");
        }
    }
  } catch (_0x4b0d84) {
    await _0x471113.error(_0x4b0d84 + "\n\ncommand: act", _0x4b0d84);
  }
});
smd({
  'pattern': 'deact',
  'alias': ['deactive', 'deactivate'],
  'desc': "Switches for varios works.",
  'category': "moderation",
  'filename': __filename
}, async (_0x102601, _0x49d280) => {
  try {
    if (!_0x102601.isGroup) {
      return _0x102601.reply(tlang().group);
    }
    const _0x27043a = _0x102601.isAdmin;
    let _0x50ee8a = _0x49d280?.["split"](" ")[0x0]["toLowerCase"]()?.['trim']() || false;
    if (!_0x50ee8a) {
      return _0x102601.reply("❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw\n4-bot\n5-economy");
    }
    if (!_0x27043a && !_0x102601.isCreator) {
      return _0x102601.reply(tlang().admin);
    }
    let _0x26228e = (await groupdb.findOne({
      'id': _0x102601.chat
    })) || (await groupdb["new"]({
      'id': _0x102601.chat
    })) || false;
    if (!_0x26228e) {
      return await _0x102601.reply("*_Uhh dear, request not be proceed due to error!_*");
    }
    switch (_0x50ee8a) {
      case "antilink":
        {
          if (_0x26228e.antilink == 'false') {
            return _0x102601.reply("*_Antilink was alredy disabled_*");
          }
          await groupdb.updateOne({
            'id': _0x102601.chat
          }, {
            'antilink': "false"
          });
          _0x102601.reply("*_disabled antilink in current chat!_*");
        }
        break;
      case "economy":
        {
          if (_0x26228e.economy == "false") {
            return _0x102601.reply("*_Economy was alredy disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x102601.chat
          }, {
            'economy': "false"
          });
          _0x102601.reply("*disabled Economy in current chat.*");
        }
        break;
      case 'events':
      case "event":
        {
          if (_0x26228e.events == 'false') {
            return _0x102601.reply("*_Events are already disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x102601.chat
          }, {
            'welcome': "false",
            'goodbye': "false"
          });
          return _0x102601.reply("*Successfully disabled Events!*");
        }
        break;
      case 'nsfw':
        {
          if (_0x26228e.nsfw == 'false') {
            return _0x102601.reply("*_NSFW is already disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x102601.chat
          }, {
            'nsfw': "false"
          });
          _0x102601.reply("*Successfully disabled NSFW*");
        }
        break;
      case "bot":
        {
          if (_0x26228e.botenable == 'false') {
            return await _0x102601.reply("*_bot is already disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x102601.chat
          }, {
            'botenable': "true"
          });
          await _0x102601.reply("*_Successfully disabled bot_*");
        }
        break;
      default:
        {
          _0x102601.reply("Please provide me term like.\n1-events\n2-antilink\n3-bot\n4-economy");
        }
    }
  } catch (_0x46cf4e) {
    await _0x102601.error(_0x46cf4e + "\n\ncommand: deact", _0x46cf4e);
  }
});
smd({
  'pattern': "bot",
  'desc': "activates and deactivates bot.\nuse buttons to toggle.",
  'fromMe': true,
  'category': 'misc',
  'filename': __filename
}, async (_0x2da358, _0x3140e8) => {
  try {
    let _0x4e33c8 = _0x3140e8 ? _0x3140e8.toLowerCase().trim() : false;
    let _0x81b695 = _0x4e33c8 ? _0x4e33c8.split(" ")[0x0] : false;
    let _0x519ac4 = (await groupdb.findOne({
      'id': _0x2da358.chat
    })) || (await groupdb['new']({
      'id': _0x2da358.chat
    }));
    if (!_0x81b695) {
      await _0x2da358.send("*_Bot *" + (_0x519ac4.botenable === 'false' ? 'Disabled' : "Enabled") + " in this Chat!_*");
    } else {
      if (_0x81b695.startsWith('off') || _0x81b695.startsWith("deact") || _0x81b695.startsWith("disable")) {
        if (_0x519ac4.botenable === "false") {
          await _0x2da358.send("*_Bot already disabled in current Chat!!_*");
        } else {
          await groupdb.updateOne({
            'id': _0x2da358.chat
          }, {
            'botenable': "false"
          });
          await _0x2da358.send("*_Bot Disabled Succesfully!_*");
        }
      } else if (_0x81b695.startsWith('on') || _0x81b695.startsWith("act") || _0x81b695.startsWith("enable")) {
        if (_0x519ac4.botenable === 'true') {
          await _0x2da358.send("*_Bot already enabled in current Chat!!_*");
        } else {
          await groupdb.updateOne({
            'id': _0x2da358.chat
          }, {
            'botenable': "true"
          });
          await _0x2da358.send("*_Bot Succesfully Enabled!_*");
        }
      } else {
        await _0x2da358.send("*_Provide Valid Instruction_*\n*Ex: _" + prefix + "bot on/off_*");
      }
    }
  } catch (_0x5c3b12) {
    _0x2da358.error(_0x5c3b12 + "\n\ncommand: bot", _0x5c3b12);
  }
});
smd({
  'pattern': "antitag",
  'desc': "detect tagall in group chat, then kick them",
  'fromMe': true,
  'category': 'misc',
  'filename': __filename
}, async (_0x18e449, _0x28a8cb) => {
  try {
    let _0x5385c2 = _0x28a8cb ? _0x28a8cb.toLowerCase().trim() : false;
    let _0x2efdca = _0x5385c2 ? _0x5385c2.split(" ")[0x0] : false;
    let _0x132add = (await groupdb.findOne({
      'id': _0x18e449.chat
    })) || (await groupdb['new']({
      'id': _0x18e449.chat
    }));
    if (!_0x2efdca) {
      await _0x18e449.send("*_Anti_tag *" + (_0x132add.antitag === "false" ? "Disabled" : "Enabled") + " in this Chat!_*");
    } else {
      if (_0x2efdca.startsWith("off") || _0x2efdca.startsWith("deact") || _0x2efdca.startsWith("disable")) {
        if (_0x132add.antitag === "false") {
          await _0x18e449.send("*_Anti_tag already disabled in current Chat!!_*");
        } else {
          await groupdb.updateOne({
            'id': _0x18e449.chat
          }, {
            'antitag': "false"
          });
          await _0x18e449.send("*_Anti_tag Disabled Succesfully!_*");
        }
      } else if (_0x2efdca.startsWith('on') || _0x2efdca.startsWith("act") || _0x2efdca.startsWith('enable')) {
        if (_0x132add.antitag === "true") {
          await _0x18e449.send("*_Anti_tag already enabled in current Chat!!_*");
        } else {
          await groupdb.updateOne({
            'id': _0x18e449.chat
          }, {
            'antitag': 'true'
          });
          await _0x18e449.send("*_Anti_tag succesfully enabled in chat!_*\n*_Now bot kick user who tag all members!_*");
        }
      } else {
        await _0x18e449.send("*_Provide Valid Instruction_*\n*Ex: _" + prefix + "antitag on/off_*");
      }
    }
  } catch (_0x3412f0) {
    _0x18e449.error(_0x3412f0 + "\n\ncommand: antitag", _0x3412f0);
  }
});
smd({
  'pattern': "antilink",
  'desc': "activates and deactivates antilink.\nuse buttons to toggle.",
  'category': "group",
  'filename': __filename
}, async (_0x2906b6, _0x47a853, {
  smd: _0x4a1959
}) => {
  try {
    if (!_0x2906b6.isGroup) {
      return _0x2906b6.reply(tlang().group);
    }
    if (!_0x2906b6.isAdmin && !_0x2906b6.isCreator) {
      return _0x2906b6.reply(tlang().admin);
    }
    let _0x3c9ca7 = _0x47a853 ? _0x47a853.toLowerCase().trim() : false;
    let _0x2ab90d = _0x3c9ca7 ? _0x3c9ca7.split(" ")[0x0] : false;
    let _0x180213 = (await groupdb.findOne({
      'id': _0x2906b6.chat
    })) || (await groupdb["new"]({
      'id': _0x2906b6.chat
    }));
    if (!_0x2ab90d) {
      return await _0x2906b6.send("*_Antilink " + (_0x180213.antilink === 'false' ? "Disabled" : "Enabled") + " in this Group!_* \n" + (_0x180213.antilink === "false" ? '' : "*Current Mode:* _" + _0x180213.antilink + '_') + "\n\n*Antilink Modes:* ```\n" + (prefix + _0x4a1959) + " kick (Delete Links & Kick Senders)\n" + (prefix + _0x4a1959) + " delete (Delete Links Only)\n" + (prefix + _0x4a1959) + " warn (warn & delete links)\n" + (prefix + _0x4a1959) + " off (Disable Antilink in chat) ```\n\n\n" + Config.caption);
    } else {
      if (_0x2ab90d.startsWith('off') || _0x2ab90d.startsWith('deact') || _0x2ab90d.startsWith("disable")) {
        if (_0x180213.antilink === "false") {
          return await _0x2906b6.send("*_Anti_Link already disabled in current Chat!!_*");
        }
        await groupdb.updateOne({
          'id': _0x2906b6.chat
        }, {
          'antilink': "false"
        });
        return await _0x2906b6.send("*_Anti_Link Disabled Succesfully!_*");
      } else {
        if (_0x2ab90d.startsWith("kick")) {
          if (_0x180213.antilink === "kick") {
            return await _0x2906b6.send("*_Anti_Link already set to kick link senders!!_*");
          }
          await groupdb.updateOne({
            'id': _0x2906b6.chat
          }, {
            'antilink': "kick"
          });
          return await _0x2906b6.send("*_Anti_Link Succesfully set to kick link senders!_*");
        } else {
          if (_0x2ab90d.startsWith('delete')) {
            if (_0x180213.antilink === "delete") {
              return await _0x2906b6.send("*_Anti_Link already set to delete links!!_*");
            }
            await groupdb.updateOne({
              'id': _0x2906b6.chat
            }, {
              'antilink': "delete"
            });
            return await _0x2906b6.send("*_Anti_Link Succesfully set to delete links from chat!_*");
          } else {
            if (_0x2ab90d.startsWith("warn")) {
              if (_0x180213.antilink === 'warn') {
                return await _0x2906b6.send("*_Anti_Link already set to warn link senders!!_*");
              }
              await groupdb.updateOne({
                'id': _0x2906b6.chat
              }, {
                'antilink': "warn"
              });
              return await _0x2906b6.send("*_Anti_Link set to warn and delete links!_*");
            } else {
              return await _0x2906b6.send("*_Uhh Please, Provide Valid Instruction_*\n*Eg: _" + prefix + "antilink kick/delete/warn/off_*");
            }
          }
        }
      }
    }
  } catch (_0x207336) {
    _0x2906b6.error(_0x207336 + "\n\ncommand: antilink", _0x207336);
  }
});
smd({
  'pattern': "welcome",
  'alias': ["setwelcome"],
  'desc': "sets welcome message in specific group.",
  'category': "group",
  'filename': __filename
}, async (_0x2af65e, _0x62a048) => {
  try {
    if (!_0x2af65e.isGroup) {
      return _0x2af65e.reply(tlang().group);
    }
    if (!_0x2af65e.isAdmin && !_0x2af65e.isCreator) {
      return _0x2af65e.reply(tlang().admin);
    }
    let _0x499968 = _0x62a048.toLowerCase().trim();
    let _0x2b272f = (await groupdb.findOne({
      'id': _0x2af65e.chat
    })) || (await groupdb["new"]({
      'id': _0x2af65e.chat
    }));
    if (_0x499968 === 'on' || _0x499968 === 'act' || _0x499968 === "enable") {
      if (_0x2b272f.welcome === 'true') {
        return await _0x2af65e.send("*_Welcome already enabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x2af65e.chat
      }, {
        'welcome': 'true'
      });
      return await _0x2af65e.send("*Welcome successfully enabled!!*");
    }
    if (_0x2b272f.welcome !== "true") {
      return await _0x2af65e.send("*_Welcome *Disabled in this Group!_* \n*_Use on/off to enable/disable welcome_*");
    }
    if (!_0x62a048 || _0x499968 === "get") {
      return await _0x2af65e.reply("*Welcome :* " + _0x2b272f.welcometext);
    }
    if (_0x499968 === 'off' || _0x499968 === 'deact' || _0x499968 === 'disable') {
      if (_0x2b272f.welcome === "false") {
        return await _0x2af65e.send("*_Welcome already disabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x2af65e.chat
      }, {
        'welcome': "false"
      });
      return await _0x2af65e.send("*Welcome message disabled!!*");
    }
    await groupdb.updateOne({
      'id': _0x2af65e.chat
    }, {
      'welcometext': _0x62a048,
      'welcome': 'true'
    });
    await sendWelcome(_0x2af65e, _0x62a048);
  } catch (_0x5e0f1c) {
    _0x2af65e.error(_0x5e0f1c + "\n\ncommand: setwelcome", _0x5e0f1c);
  }
});
smd({
  'pattern': "goodbye",
  'alias': ['setgoodbye', 'setbye'],
  'desc': "sets goodbye message in specific group.",
  'category': "group",
  'filename': __filename
}, async (_0x56168a, _0x2bdbbe) => {
  try {
    if (!_0x56168a.isGroup) {
      return _0x56168a.reply(tlang().group);
    }
    if (!_0x56168a.isAdmin && !_0x56168a.isCreator) {
      return _0x56168a.reply(tlang().admin);
    }
    let _0x3c30f6 = _0x2bdbbe.toLowerCase().trim();
    let _0xa23b6 = (await groupdb.findOne({
      'id': _0x56168a.chat
    })) || (await groupdb["new"]({
      'id': _0x56168a.chat
    }));
    if (_0x3c30f6 === 'on' || _0x3c30f6 === 'act' || _0x3c30f6 === "enable") {
      if (_0xa23b6.goodbye === "true") {
        return await _0x56168a.send("*_Goodbye already enabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x56168a.chat
      }, {
        'goodbye': "true"
      });
      return await _0x56168a.send("*Goodbye successfully enabled!!*");
    }
    if (_0xa23b6.goodbye !== "true") {
      return await _0x56168a.send("*_Goodbye *Disabled in this Group!_* \n*_Use on/off to enable/disable goodbye_*");
    }
    if (!_0x2bdbbe || _0x3c30f6 === "get") {
      return await _0x56168a.reply("*Goodbye Message :* " + _0xa23b6.goodbyetext);
    }
    if (_0x3c30f6 === "off" || _0x3c30f6 === 'deact' || _0x3c30f6 === "disable") {
      if (_0xa23b6.goodbye === 'false') {
        return await _0x56168a.send("*_Goodbye already disabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x56168a.chat
      }, {
        'goodbye': 'false'
      });
      return await _0x56168a.send("*Goodbye message disabled!!*");
    }
    await groupdb.updateOne({
      'id': _0x56168a.chat
    }, {
      'goodbyetext': _0x2bdbbe,
      'goodbye': 'true'
    });
    await sendWelcome(_0x56168a, _0x2bdbbe);
  } catch (_0x43ad83) {
    _0x56168a.error(_0x43ad83 + "\n\ncommand: setgoodbye", _0x43ad83);
  }
});
smd({
  'pattern': "onlyadmin",
  'alias': ["antimessge"],
  'desc': "activates and deactivates onlyadmin.",
  'category': 'group',
  'filename': __filename
}, async (_0x3b1754, _0x189c39, {
  cmdName: _0x4a1dfa
}) => {
  try {
    if (!_0x3b1754.isGroup) {
      return _0x3b1754.reply(tlang().group);
    }
    if (!_0x3b1754.isAdmin && !_0x3b1754.isCreator) {
      return _0x3b1754.reply(tlang().admin);
    }
    let _0x27ff0a = (await groupdb.findOne({
      'id': _0x3b1754.chat
    })) || (await groupdb["new"]({
      'id': _0x3b1754.chat
    }));
    let _0x2be386 = _0x189c39 ? _0x189c39.toLowerCase().trim() : false;
    let _0x362ad9 = _0x2be386 ? _0x2be386.split(" ")[0x0] : false;
    if (!_0x362ad9) {
      return await _0x3b1754.send('*_' + _0x4a1dfa + " *" + (_0x27ff0a.onlyadmin === 'false' ? 'Disabled' : 'Enabled') + " in this Group!_*\n *_Use on/off to enable/disable_*");
    } else {
      if (_0x362ad9.startsWith("off") || _0x362ad9.startsWith("deact") || _0x362ad9.startsWith("disable")) {
        if (_0x27ff0a.onlyadmin === "false") {
          return await _0x3b1754.reply("*_Onlyadmin Already Disabled in Current Chat_*");
        }
        await groupdb.updateOne({
          'id': _0x3b1754.chat
        }, {
          'onlyadmin': 'false'
        });
        await _0x3b1754.bot.groupSettingUpdate(_0x3b1754.chat, "not_announcement");
        return await _0x3b1754.send('*' + _0x4a1dfa + " succesfully disable in group!_*\n*_Now everyone send message in group_*");
      } else {
        if (_0x362ad9.startsWith('on') || _0x362ad9.startsWith("act") || _0x362ad9.startsWith("enable")) {
          if (_0x27ff0a.onlyadmin === 'true') {
            return await _0x3b1754.reply("*_Onlyadmin Already Enabled in Current Chat_*");
          }
          return _0x3b1754.isBotAdmin ? (await groupdb.updateOne({
            'id': _0x3b1754.chat
          }, {
            'onlyadmin': "true"
          }), await _0x3b1754.bot.groupSettingUpdate(_0x3b1754.chat, "announcement"), await _0x3b1754.send('*' + _0x4a1dfa + " succesfully set to kick msg senders!_*\n*_Now only admins allow to send msg in group_*")) : await _0x3b1754.reply("*_UHH Please, Provide Admin Role First_*");
        } else {
          return await _0x3b1754.reply("*_Please Provide Valid Instruction_*\n*_Use on/off to enable/disable_*");
        }
      }
    }
  } catch (_0x21ebc9) {
    _0x3b1754.error(_0x21ebc9 + "\n\ncommand: onlyadmin", _0x21ebc9);
  }
});
smd({
  'pattern': "antibot",
  'desc': "kick Bot Users from Group.!",
  'category': 'group',
  'filename': __filename
}, async (_0x1ae07f, _0x39495d, {
  cmdName: _0x49997a
}) => {
  try {
    if (!_0x1ae07f.isGroup) {
      return _0x1ae07f.reply(tlang().group);
    }
    if (!_0x1ae07f.isAdmin && !_0x1ae07f.isCreator) {
      return _0x1ae07f.reply(tlang().admin);
    }
    let _0x594736 = (await groupdb.findOne({
      'id': _0x1ae07f.chat
    })) || (await groupdb["new"]({
      'id': _0x1ae07f.chat
    }));
    let _0x299f1e = _0x39495d ? _0x39495d.toLowerCase().trim() : '';
    let _0x3275dc = _0x299f1e.startsWith('on') || _0x299f1e.startsWith("act") || _0x299f1e.startsWith("enable") || _0x299f1e.startsWith("del") || _0x299f1e.startsWith("warn") ? "warn" : _0x299f1e.startsWith("kic") ? "kick" : _0x299f1e.startsWith("off") || _0x299f1e.startsWith("reset") || _0x299f1e.startsWith('deact') || _0x299f1e.startsWith("disable") ? "false" : '';
    if (!_0x3275dc) {
      return await _0x1ae07f.send("*_Antibot Currently *" + (_0x594736.antibot === "false" ? "Disabled" : "Enabled") + " in this Group!_*\n*_Use warn/kick/off to enable/disable Antibot_*");
    } else {
      if (_0x3275dc === 'false') {
        if (_0x594736.antibot === "false") {
          return await _0x1ae07f.reply("*_Antibot Already Disabled in Current Chat_*");
        }
        await groupdb.updateOne({
          'id': _0x1ae07f.chat
        }, {
          'antibot': "false"
        });
        return await _0x1ae07f.send("*_Antibot Succesfully Disable in group!_*");
      } else {
        if (_0x3275dc === "warn" || _0x3275dc === "kick") {
          if (_0x594736.antibot === _0x3275dc) {
            return await _0x1ae07f.reply("*_Antibot Already set to " + _0x3275dc + " bots!_*");
          }
          if (!_0x1ae07f.isBotAdmin) {
            return await _0x1ae07f.reply("*_Uhh Please, Provide Admin Role First_*");
          }
          await groupdb.updateOne({
            'id': _0x1ae07f.chat
          }, {
            'antibot': _0x3275dc
          });
          return await _0x1ae07f.send("*_Antibot Succesfully set to " + _0x3275dc + " Bot Users!_*");
        } else {
          return await _0x1ae07f.reply("*_Please provide valid instructions!_*\n*_Use warn/kick/off to enable/disable Antibot!_*");
        }
      }
    }
  } catch (_0x5c60b8) {
    _0x1ae07f.error(_0x5c60b8 + "\n\ncommand: antibot", _0x5c60b8);
  }
});
smd({
  'pattern': "disable",
  'desc': "disable cmds in Group.!",
  'category': 'group',
  'filename': __filename
}, async (_0x384407, _0x3e4d68) => {
  try {
    if (!_0x384407.isGroup) {
      return _0x384407.reply(tlang().group);
    }
    if (!_0x384407.isAdmin && !_0x384407.isCreator) {
      return _0x384407.reply(tlang().admin);
    }
    let _0x31f619 = (await groupdb.findOne({
      'id': _0x384407.chat
    })) || (await groupdb["new"]({
      'id': _0x384407.chat
    }));
    let _0x342b7e = _0x3e4d68 ? _0x3e4d68.toLowerCase().trim() : false;
    let _0x56b6c2 = _0x342b7e ? _0x342b7e.split(" ")[0x0] : '';
    if (!_0x56b6c2) {
      return await _0x384407.send("*Provide cmd name to disable in group*\n*Ex " + prefix + "disable tag(to disabled 'tag' cmd)/info*");
    } else {
      if (_0x56b6c2.startsWith("info") || _0x56b6c2.startsWith("list") || _0x56b6c2.startsWith("cmds")) {
        return await _0x384407.send(_0x31f619.disablecmds === 'false' ? "*_Uhh Dear, Theres no cmd disabled in current group_*" : "*_Disable cmds :_* ```" + _0x31f619.disablecmds.replace('false,', '') + "```");
      } else {
        if (_0x56b6c2.startsWith("enable") || _0x56b6c2.startsWith("disable") || _0x56b6c2.startsWith('bot')) {
          return await _0x384407.reply("*_Uhh Dear, I can't disable that cmd_*");
        } else {
          if (_0x56b6c2) {
            const _0x36f5a4 = astro_patch.commands.find(_0x526931 => _0x526931.pattern === _0x56b6c2) || astro_patch.commands.find(_0x1f71ff => _0x1f71ff.alias && _0x1f71ff.alias.includes(_0x56b6c2));
            if (_0x36f5a4) {
              let _0x565b06 = _0x36f5a4.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              let _0x3a1727 = new RegExp("\\b" + _0x565b06 + "\\b");
              if (_0x3a1727.test(_0x31f619.disablecmds)) {
                return await _0x384407.send("*Uhh Dear, Provided cmd already in disable cmds*");
              }
              var _0x401612 = _0x31f619.disablecmds + ',' + _0x36f5a4.pattern;
              await groupdb.updateOne({
                'id': _0x384407.chat
              }, {
                'disablecmds': _0x401612
              });
              let _0x4ae9f1 = _0x401612.replace("false,", '');
              return await _0x384407.send("*_\"" + _0x56b6c2 + "\" Succesfully added in disable cmds_*" + (_0x4ae9f1 === '' ? '' : "\n*_Disable cmds :_* ```" + _0x4ae9f1 + "```"));
            } else {
              return await _0x384407.reply("*_'" + _0x56b6c2 + "' is not a bot command, Provide valid command_*");
            }
          }
        }
      }
    }
  } catch (_0x3704df) {
    _0x384407.error(_0x3704df + "\n\ncommand: enable", _0x3704df);
  }
});
smd({
  'pattern': "enable",
  'desc': "enable a cmd in Group.!",
  'category': 'group',
  'filename': __filename
}, async (_0x4eb3a4, _0x3fcb44) => {
  try {
    if (!_0x4eb3a4.isGroup) {
      return _0x4eb3a4.reply(tlang().group);
    }
    if (!_0x4eb3a4.isAdmin && !_0x4eb3a4.isCreator) {
      return _0x4eb3a4.reply(tlang().admin);
    }
    let _0x3c0423 = (await groupdb.findOne({
      'id': _0x4eb3a4.chat
    })) || (await groupdb["new"]({
      'id': _0x4eb3a4.chat
    }));
    let _0x40499e = _0x3fcb44 ? _0x3fcb44.toLowerCase().trim() : false;
    let _0x369dd4 = _0x40499e ? _0x40499e.split(" ")[0x0] : '';
    let _0x1713d4 = _0x369dd4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let _0x2f36ed = new RegExp("\\b" + _0x1713d4 + "\\b");
    if (!_0x369dd4 || _0x369dd4 === '') {
      return await _0x4eb3a4.send("*Please provide disabled cmd name to enable it*\n*Ex " + prefix + "enable tag(if 'tag' cmd disabled)/all(reset disables)*");
    } else {
      if (_0x40499e.startsWith('all')) {
        await groupdb.updateOne({
          'id': _0x4eb3a4.chat
        }, {
          'disablecmds': 'false'
        });
        return await _0x4eb3a4.send("*_All disable cmds succesfully enabled_*");
      } else {
        if (_0x2f36ed.test(_0x3c0423.disablecmds) && _0x3c0423.disablecmds.includes(_0x369dd4)) {
          let _0x2d463b = _0x3c0423.disablecmds.replace(_0x2f36ed, '');
          await groupdb.updateOne({
            'id': _0x4eb3a4.chat
          }, {
            'disablecmds': _0x2d463b
          });
          return await _0x4eb3a4.send("*_\"" + _0x369dd4.replace(',', '') + "\" Succesfully removed from disable cmds_*");
        } else {
          return await _0x4eb3a4.send("_There's no cmd disabled with *" + _0x369dd4.replace(',', '') + "* name");
        }
      }
    }
  } catch (_0x2f7bbf) {
    _0x4eb3a4.error(_0x2f7bbf + "\n\ncommand: disable", _0x2f7bbf);
  }
});
smd({
  'pattern': "antifake",
  'desc': "𝗗𝗲𝘁𝗲𝗰𝘁𝘀 𝗽𝗿𝗼𝗺𝗼𝘁𝗲/𝗱𝗲𝗺𝗼𝘁𝗲 𝗮𝗻𝗱 𝘀𝗲𝗻𝗱𝘀 𝗮𝗹𝗲𝗿𝘁. ",
  'category': "group",
  'filename': __filename
}, async (_0x2a70b1, _0x5a404a) => {
  try {
    if (!_0x2a70b1.isGroup) {
      return _0x2a70b1.reply(tlang().group);
    }
    if (!_0x2a70b1.isAdmin && !_0x2a70b1.isCreator) {
      return _0x2a70b1.reply(tlang().admin);
    }
    let _0x514dc9 = (await groupdb.findOne({
      'id': _0x2a70b1.chat
    })) || (await groupdb["new"]({
      'id': _0x2a70b1.chat
    }));
    let _0xf68573 = _0x5a404a ? _0x5a404a.toLowerCase().trim() : '';
    if (_0xf68573.startsWith('off') || _0xf68573.startsWith("deact") || _0xf68573.startsWith("disable")) {
      if (_0x514dc9.antifake == "false") {
        return await _0x2a70b1.send("*Anti_Fake Already Disabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x2a70b1.chat
      }, {
        'antifake': "false"
      });
      return await _0x2a70b1.send("*Anti_Fake Disable Succesfully!*");
    } else {
      if (!_0x5a404a) {
        return await _0x2a70b1.send("*_Antifake " + (_0x514dc9.antifake === 'false' ? "Not set to any" : "set to \"" + _0x514dc9.antifake + "\"") + " Country Code!_*\n *Provide Country code to Update Antifake Status*\n*Eg: _.antifake 92_*");
      }
    }
    let _0x1a7bad = _0x5a404a ? _0x5a404a.split(',').map(_0x41e702 => parseInt(_0x41e702)).filter(_0xf69f90 => !isNaN(_0xf69f90)).join(',') : false;
    if (!_0x5a404a || !_0x1a7bad) {
      return await _0x2a70b1.send("*_Please provide a country code First_*\n *_Only numbers to join this group._*\n*_eg: " + prefix + "antifake 92_*");
    } else {
      return _0x1a7bad ? (await groupdb.updateOne({
        'id': _0x2a70b1.chat
      }, {
        'antifake': '' + _0x1a7bad
      }), await _0x2a70b1.send("*Anti_Fake Succesfully set to \"" + _0x1a7bad + "\"!*\n*_Now People Joined Group Who's Number Start With " + _0x1a7bad + '_*')) : await _0x2a70b1.send("*_Please provide a Valid country code First_*\n *_Only numbers to join this group._*\n*_eg: " + prefix + "antifake 92_*");
    }
  } catch (_0x30bd63) {
    _0x2a70b1.error(_0x30bd63 + "\n\ncommand: antifake", _0x30bd63);
  }
});
smd({
  'pattern': "antidemote",
  'desc': "Detects Promote and Automaticaly demote promoted person.",
  'category': "group",
  'filename': __filename
}, async (_0x428f8d, _0x24ea60) => {
  try {
    if (!_0x428f8d.isGroup) {
      return _0x428f8d.reply(tlang().group);
    }
    if (!_0x428f8d.isAdmin && !_0x428f8d.isCreator) {
      return _0x428f8d.reply(tlang().admin);
    }
    let _0x20906e = (await groupdb.findOne({
      'id': _0x428f8d.chat
    })) || (await groupdb["new"]({
      'id': _0x428f8d.chat
    }));
    let _0x25989c = _0x24ea60 ? _0x24ea60.toLowerCase().trim() : '';
    if (_0x25989c.startsWith('on') || _0x25989c.startsWith("act") || _0x25989c.startsWith("enable")) {
      if (_0x20906e.antidemote == "true") {
        return await _0x428f8d.send("*Anti_Demote Already Enabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x428f8d.chat
      }, {
        'antidemote': "true"
      });
      return await _0x428f8d.send("*Anti_Demote Enable Succesfully! _No One Demote Here Now_.*");
    } else {
      if (_0x25989c.startsWith("off") || _0x25989c.startsWith("deact") || _0x25989c.startsWith("disable")) {
        if (_0x20906e.antidemote == "false") {
          return await _0x428f8d.send("*Anti_Demote Already Disabled In Current Chat!*");
        }
        await groupdb.updateOne({
          'id': _0x428f8d.chat
        }, {
          'antidemote': "false"
        });
        return await _0x428f8d.send("*Anti_Demote Disable Succesfully!*");
      } else {
        return await _0x428f8d.reply("*Uhh Dear, Please Toggle between \"On\" And \"Off\".* \n*_To Enable & Disable Stop Demoting Peoples!_*");
      }
    }
  } catch (_0x461f97) {
    _0x428f8d.error(_0x461f97 + "\n\ncommand: antidemote", _0x461f97);
  }
});
smd({
  'pattern': "antipromote",
  'desc': "Detects Promote and Automaticaly demote promoted person.",
  'category': "group",
  'filename': __filename
}, async (_0x4fc4e1, _0x288f63) => {
  try {
    if (!_0x4fc4e1.isGroup) {
      return _0x4fc4e1.reply(tlang().group);
    }
    if (!_0x4fc4e1.isAdmin && !_0x4fc4e1.isCreator) {
      return _0x4fc4e1.reply(tlang().admin);
    }
    let _0x3242c7 = (await groupdb.findOne({
      'id': _0x4fc4e1.chat
    })) || (await groupdb["new"]({
      'id': _0x4fc4e1.chat
    }));
    let _0x23b636 = _0x288f63 ? _0x288f63.toLowerCase().trim() : '';
    if (_0x23b636.startsWith('on') || _0x23b636.startsWith("act") || _0x23b636.startsWith("enable")) {
      if (_0x3242c7.antipromote == "true") {
        return await _0x4fc4e1.send("*Anti_Promote Already Enabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x4fc4e1.chat
      }, {
        'antipromote': "true"
      });
      return await _0x4fc4e1.send("*Anti_Promote Enable Succesfully! _No One Promote Here Now_.*");
    } else {
      if (_0x23b636.startsWith("off") || _0x23b636.startsWith("deact") || _0x23b636.startsWith("disable")) {
        if (_0x3242c7.antipromote == "false") {
          return await _0x4fc4e1.send("*Anti_Promote Already Disabled In Current Chat!*");
        }
        await groupdb.updateOne({
          'id': _0x4fc4e1.chat
        }, {
          'antipromote': "false"
        });
        return await _0x4fc4e1.send("*Anti_Promote Disable Succesfully!*");
      } else {
        return await _0x4fc4e1.reply("*Uhh Dear, Please Toggle between \"On\" And \"Off\".* \n*_To Stop Promoting Peoples in Chat_*");
      }
    }
  } catch (_0x4304b8) {
    _0x4fc4e1.error(_0x4304b8 + "\n\ncommand: antipromote", _0x4304b8);
  }
});
smd({
  'pattern': 'pdm',
  'desc': "Detect Promote/Demote Users And Send Alerts in Chat ",
  'category': 'group',
  'filename': __filename
}, async (_0x53ce9d, _0x482ade) => {
  try {
    if (!_0x53ce9d.isGroup) {
      return _0x53ce9d.reply(tlang().group);
    }
    if (!_0x53ce9d.isAdmin && !_0x53ce9d.isCreator) {
      return _0x53ce9d.reply(tlang().admin);
    }
    let _0x33386a = (await groupdb.findOne({
      'id': _0x53ce9d.chat
    })) || (await groupdb['new']({
      'id': _0x53ce9d.chat
    }));
    let _0x4f79dc = _0x482ade ? _0x482ade.toLowerCase().trim() : '';
    if (_0x4f79dc.startsWith('on') || _0x4f79dc.startsWith("act") || _0x4f79dc.startsWith('enable')) {
      if (_0x33386a.pdm == "true") {
        return await _0x53ce9d.send("*Promote/Demote Alerts Already Enabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x53ce9d.chat
      }, {
        'pdm': 'true'
      });
      return await _0x53ce9d.send("*Promote/Demote Alerts Enable Succesfully!*");
    } else {
      if (_0x4f79dc.startsWith("off") || _0x4f79dc.startsWith("deact") || _0x4f79dc.startsWith('disable')) {
        if (_0x33386a.pdm == "false") {
          return await _0x53ce9d.send("*Promote/Demote Alerts Already Disabled In Current Chat!*");
        }
        await groupdb.updateOne({
          'id': _0x53ce9d.chat
        }, {
          'pdm': "false"
        });
        return await _0x53ce9d.send("*Promote/Demote Alerts Disable Succesfully!*");
      } else {
        return await _0x53ce9d.reply("*Uhh Dear, Please use between \"On\" And \"Off\".* \n*_To get And Stop Promote/Demote Alerts_*");
      }
    }
  } catch (_0x364962) {
    _0x53ce9d.error(_0x364962 + "\n\ncommand: pdm", _0x364962);
  }
});
smd({
  'pattern': "amute",
  'desc': "sets auto mute time in group.",
  'category': "moderation"
}, async (_0x22fa05, _0x28f8d2) => {
  try {
    if (!_0x22fa05.isGroup) {
      return _0x22fa05.reply(tlang().group);
    }
    if (!_0x22fa05.isAdmin && !_0x22fa05.isCreator) {
      return _0x22fa05.reply(tlang().admin);
    }
    let _0x57fa60 = (await groupdb.findOne({
      'id': _0x22fa05.chat
    })) || (await groupdb['new']({
      'id': _0x22fa05.chat
    }));
    if (!_0x28f8d2) {
      return await _0x22fa05.reply("*Auto_Mute *" + (_0x57fa60.mute === 'false' ? 'disable' : "enabled") + " for current group*" + (_0x57fa60.mute !== "false" ? "\n *Auto mute status set at : " + _0x57fa60.mute + "* " : ''));
    }
    let [_0x3f8a66, _0x486c44] = _0x28f8d2.split(':').map(Number);
    if (isNaN(_0x3f8a66) || isNaN(_0x486c44) || _0x3f8a66 < 0x0 || _0x3f8a66 >= 0x18 || _0x486c44 < 0x0 || _0x486c44 >= 0x3c) {
      return _0x22fa05.reply("Please provide correct form.\nEg: " + prefix + "amute 22:00");
    }
    let _0x8547b4 = _0x3f8a66.toString().padStart(0x2, '0') + ':' + _0x486c44.toString().padStart(0x2, '0');
    await groupdb.updateOne({
      'id': _0x22fa05.chat
    }, {
      'mute': _0x8547b4
    });
    return _0x22fa05.reply("*_Successfully done, Group auto mute at " + _0x8547b4 + '_*');
  } catch (_0x1dfbe0) {
    _0x22fa05.error(_0x1dfbe0 + "\n\ncommand: amute", _0x1dfbe0);
  }
});
smd({
  'pattern': 'aunmute',
  'desc': "sets unmute time in group.",
  'category': "moderation"
}, async (_0x4e60d2, _0x1dc95c) => {
  try {
    if (!_0x4e60d2.isGroup) {
      return _0x4e60d2.reply(tlang().group);
    }
    if (!_0x4e60d2.isAdmin && !_0x4e60d2.isCreator) {
      return _0x4e60d2.reply(tlang().admin);
    }
    let _0x2e5291 = (await groupdb.findOne({
      'id': _0x4e60d2.chat
    })) || (await groupdb['new']({
      'id': _0x4e60d2.chat
    }));
    if (!_0x1dc95c) {
      return await _0x4e60d2.reply("*Auto_Unmute *" + (_0x2e5291.unmute === "false" ? "disable" : "enabled") + " for current group*" + (_0x2e5291.unmute !== "false" ? "\n *Auto unmute status set at : " + _0x2e5291.unmute + "* " : ''));
    }
    let [_0x1ef399, _0x38a38b] = _0x1dc95c.split(':').map(Number);
    if (isNaN(_0x1ef399) || isNaN(_0x38a38b) || _0x1ef399 < 0x0 || _0x1ef399 >= 0x18 || _0x38a38b < 0x0 || _0x38a38b >= 0x3c) {
      return _0x4e60d2.reply("Please provide correct form.\nEg: " + prefix + "aunmute 22:00");
    }
    let _0xc1e5a4 = _0x1ef399.toString().padStart(0x2, '0') + ':' + _0x38a38b.toString().padStart(0x2, '0');
    await groupdb.updateOne({
      'id': _0x4e60d2.chat
    }, {
      'unmute': _0xc1e5a4
    });
    return _0x4e60d2.reply("*_Successfully done, Group auto unmute at " + _0xc1e5a4 + '_*');
  } catch (_0x14af55) {
    _0x4e60d2.error(_0x14af55 + "\n\ncommand: aunmute", _0x14af55);
  }
});
smd({
  'pattern': 'dunmute',
  'desc': "Delete unmute from group.",
  'category': "moderation"
}, async _0x753613 => {
  try {
    if (!_0x753613.isGroup) {
      return _0x753613.reply(tlang().group);
    }
    if (!_0x753613.isAdmin && !_0x753613.isCreator) {
      return _0x753613.reply(tlang().admin);
    }
    let _0x4f4a15 = await groupdb.findOne({
      'id': _0x753613.chat
    });
    if (!_0x4f4a15 || !_0x4f4a15.unmute || _0x4f4a15.unmute == "false") {
      return await _0x753613.reply("*There's no auto unmute set in group.*");
    }
    await groupdb.updateOne({
      'id': _0x753613.chat
    }, {
      'unmute': "false"
    });
    return await _0x753613.reply("*Auto unmute deleted successfully.*");
  } catch (_0x3c300f) {
    _0x753613.error(_0x3c300f + "\n\ncommand: dunmute", _0x3c300f);
  }
});
smd({
  'pattern': "dmute",
  'desc': "Delete mute from group.",
  'category': "moderation"
}, async (_0x4e3a99, _0x224f75) => {
  try {
    if (!_0x4e3a99.isGroup) {
      return _0x4e3a99.reply(tlang().group);
    }
    if (!_0x4e3a99.isAdmin && !_0x4e3a99.isCreator) {
      return _0x4e3a99.reply(tlang().admin);
    }
    let _0x63ac6c = await groupdb.findOne({
      'id': _0x4e3a99.chat
    });
    if (!_0x63ac6c || !_0x63ac6c.mute || _0x63ac6c.mute == "false") {
      return await _0x4e3a99.reply("*There's no auto mute set in group.*");
    }
    await groupdb.updateOne({
      'id': _0x4e3a99.chat
    }, {
      'mute': "false"
    });
    return await _0x4e3a99.reply("*Auto mute deleted successfully.*");
  } catch (_0x14dbc2) {
    _0x4e3a99.error(_0x14dbc2 + "\n\ncommand: dmute", _0x14dbc2);
  }
});
async function haveEqualMembers(_0xdfb282, _0x55b300) {
  if (_0xdfb282.length === 0x0 || _0x55b300.length === 0x0) {
    return false;
  }
  const _0x1d7ecd = _0xdfb282.filter(_0x290ddb => _0x55b300.includes(_0x290ddb));
  const _0x19c967 = _0x1d7ecd.length / _0xdfb282.length * 0x64;
  return _0x19c967 >= 0x4c;
}
smd({
  'pattern': "antiword",
  'desc': "Detects words from chat,and delete/warn senders.",
  'category': "group",
  'filename': __filename,
  'use': "< action | words >"
}, async (_0x4e858c, _0x4cfe72, {
  cmdName: _0x4a3f0d
}) => {
  try {
    if (!_0x4e858c.isGroup) {
      return _0x4e858c.reply(tlang().group);
    }
    if (!_0x4e858c.isAdmin && !_0x4e858c.isCreator) {
      return _0x4e858c.reply(tlang().admin);
    }
    let _0x4754d5 = (await groupdb.findOne({
      'id': _0x4e858c.chat
    })) || (await groupdb["new"]({
      'id': _0x4e858c.chat,
      'antiword': {
        'status': "false",
        'words': ''
      }
    }));
    let _0x4544ec = _0x4cfe72 ? _0x4cfe72.toLowerCase().trim() : false;
    let _0x364172 = _0x4754d5.antiword;
    let _0x33bef4 = "*Antiword Currently *" + (_0x364172.status !== "false" ? "enabled" : "disabled") + "!!!* ```\n  STATUS: " + (_0x364172.status ? _0x364172.status : "--Empty Yet--") + " \n  WORDS: " + (_0x364172.words ? _0x364172.words.replace(/,/gi, " -- ") : "--Empty Yet--") + "```\n\n*Available Cmds:* ```\n  " + (prefix + _0x4a3f0d) + " off \n  " + (prefix + _0x4a3f0d) + " reset\n  " + (prefix + _0x4a3f0d) + " warn | bad,words\n  " + (prefix + _0x4a3f0d) + " delete | hot,badas,etc\n``` \n\n\n " + Config.caption;
    if (!_0x4544ec || !_0x4cfe72) {
      return await _0x4e858c.send(_0x33bef4);
    }
    let _0x21a27e = _0x4544ec.split('|')[0x1] || '';
    let _0x2e76f6 = _0x4544ec.startsWith('on') || _0x4544ec.startsWith("act") || _0x4544ec.startsWith("enable") || _0x4544ec.startsWith('del') ? "delete" : _0x4544ec.startsWith("warn") ? 'warn' : _0x4544ec.startsWith("off") || _0x4544ec.startsWith("deact") || _0x4544ec.startsWith("disable") ? 'false' : _0x4544ec.startsWith('reset') ? 'reset' : '';
    _0x2e76f6 = !_0x2e76f6 && _0x21a27e && _0x364172.status !== "false" ? _0x364172.status : _0x2e76f6;
    if (_0x2e76f6 === "reset") {
      await groupdb.updateOne({
        'id': _0x4e858c.chat
      }, {
        'antiword': {}
      });
      return await _0x4e858c.send("*_Anti_Word status cleard!_*");
    } else {
      if (_0x2e76f6 === "delete" || _0x2e76f6 === 'warn') {
        if (_0x364172.status == _0x2e76f6 && !_0x21a27e) {
          return await _0x4e858c.send("*Please provide badWords, like " + (prefix + _0x4a3f0d) + " " + _0x2e76f6 + " | bad,words");
        }
        _0x21a27e = _0x21a27e ? _0x21a27e : _0x364172.words;
        await groupdb.updateOne({
          'id': _0x4e858c.chat
        }, {
          'antiword': {
            'status': _0x2e76f6,
            'words': _0x21a27e
          }
        });
        return await _0x4e858c.send("*_Anti_Word succesfully set to '" + _0x2e76f6 + "' badward!_*\n*Antiwords are:```" + (_0x21a27e ? _0x21a27e.replace(/,/gi, " | ") : "--Empty Yet--") + "``` *");
      } else {
        if (_0x2e76f6 === "false") {
          if (_0x364172.status === _0x2e76f6) {
            return await _0x4e858c.send("*Anti_Word Already Disabled In Current Chat!*");
          }
          await groupdb.updateOne({
            'id': _0x4e858c.chat
          }, {
            'antiword': {
              'status': "false",
              'words': _0x364172.words
            }
          });
          return await _0x4e858c.send("*Anti_Word Disable Succesfully!*");
        } else {
          return await _0x4e858c.reply("*Uhh dear, Please follow instructions!!*\n\n" + _0x33bef4);
        }
      }
    }
  } catch (_0x10b802) {
    _0x4e858c.error(_0x10b802 + "\n\ncommand: antiword", _0x10b802);
  }
});
let bott = false;
let chatbotCount = 0x0;
smd({
  'on': 'main'
}, async (_0x2bf212, _0x2c0e05, {
  botNumber: _0x2fdd1b,
  isCreator: _0x145fae,
  budy: _0x16dc3b,
  body: _0x5524b6,
  icmd: _0x1baa74
}) => {
  try {
    if (global.MsgsInLog === 'true') {
      console.log('' + (_0x2bf212.isGroup ? "[MESSAGE IN GROUP] From => " + _0x2bf212.metadata.subject + "\n[USER]:" : "[MESSAGE IN PRIVATE] From =>") + (" " + _0x2bf212.senderName + " " + _0x2bf212.senderNum + "\n[" + _0x2bf212.mtype.toUpperCase() + "]: " + _0x2bf212.body + "\n============== [SMD] ================="));
    }
    let _0x3b1a5a = (await groupdb.findOne({
      'id': _0x2bf212.chat
    })) || false;
    let _0x23d786 = false;
    try {
      if (!global.SmdOfficial && global.SmdOfficial !== "yes") {
        return;
      }
      if (_0x3b1a5a && _0x3b1a5a.antitag == 'true' && !_0x2bf212.checkBot() && _0x2bf212.mtype !== 'reactionMessage' && _0x3b1a5a.botenable == 'true') {
        const _0x3cd556 = await haveEqualMembers(_0x2bf212.metadata.participants.map(_0x28093f => _0x28093f.id), _0x2bf212.mentionedJid);
        if (_0x3cd556 && _0x2bf212.isBotAdmin) {
          let _0x54cd91 = {
            'reason': "tagging all members!",
            'chat': _0x2bf212.metadata?.['subject'] || "GROUP",
            'warnedby': tlang().title,
            'date': _0x2bf212.date
          };
          _0x23d786 = await warn.addwarn(_0x2bf212.sender, _0x2bf212.chat, _0x54cd91);
          await _0x2bf212.reply("*_[TAG DETECTED] Hey @" + _0x2bf212.senderNum + " warning!!_*\n*_Tagging all members is not allowed!_*", {
            'mentions': [_0x2bf212.sender]
          });
          await _0x2bf212["delete"]();
        } else if (_0x3cd556 && !_0x2bf212.isBotAdmin) {
          await _0x2bf212.reply("*_[TAGALL DETECTED] Can't do anything, without getting admin role!_*", {
            'mentions': [_0x2bf212.sender]
          });
        }
      }
      if (_0x3b1a5a && _0x2bf212.isGroup && !_0x2bf212.isAdmin && !_0x145fae && _0x2bf212.mtype !== "reactionMessage" && _0x3b1a5a.botenable == "true") {
        if (_0x3b1a5a.antibot && _0x3b1a5a.antibot !== "false" && _0x2bf212.isBot && !_0x2bf212.checkBot(_0x2bf212.sender)) {
          if (_0x2bf212.isBotAdmin) {
            var _0x4426ed = "*_Bot user not allowed, please make it private!_*";
            if (_0x3b1a5a.antibot === "warn") {
              let _0x3726c4 = {
                'reason': "Bots not allowed!",
                'chat': _0x2bf212.metadata?.["subject"] || "GROUP",
                'date': _0x2bf212.date
              };
              _0x23d786 = _0x23d786 ? _0x23d786 : await warn.addwarn(_0x2bf212.sender, _0x2bf212.chat, _0x3726c4);
              if (_0x23d786.status) {
                _0x4426ed = "*_Hey @" + _0x2bf212.senderNum + " warning, Due To Antibot!_*";
              }
            } else {
              if (_0x3b1a5a.antibot === 'kick') {
                try {
                  sleep(0x3e8);
                  await _0x2bf212.bot.groupParticipantsUpdate(_0x2bf212.chat, [_0x2bf212.sender], "remove");
                  _0x4426ed = "*_User @" + _0x2bf212.senderNum + " kick Due To Antibot!_*";
                } catch {}
              }
            }
            await _0x2bf212["delete"]();
            await _0x2bf212.send(_0x4426ed, {
              'mentions': [_0x2bf212.sender]
            });
          } else if (!_0x2bf212.isBotAdmin && _0x2bf212.isBot) {
            await _0x2bf212.reply("*_Uhh Please, Provide Admin Role To Kick Other Bot_*\n*_Or Disable Antibot (On/Off) In Current Group_*");
          }
        }
        if (_0x3b1a5a.onlyadmin && _0x3b1a5a.onlyadmin === "true" && SmdOfficial == "yes") {
          var _0x4426ed = '';
          if (_0x2bf212.isBotAdmin) {
            let _0x2116e6 = {
              'reason': "Only Admin can Chat!",
              'chat': _0x2bf212.metadata?.['subject'] || "PRIVATE",
              'warnedby': tlang().title,
              'date': _0x2bf212.date
            };
            _0x23d786 = _0x23d786 ? _0x23d786 : await warn.addwarn(_0x2bf212.sender, _0x2bf212.chat, _0x2116e6);
            if (_0x23d786.status) {
              _0x4426ed = "*Warns you for chat here!*\n";
            }
            await _0x2bf212['delete']();
            sleep(0x5dc);
            await _0x2bf212.send("*Hey @" + _0x2bf212.senderNum + "* " + _0x4426ed + "*Deleteing message,while onlyadmin activated!!* ", {
              'mentions': [_0x2bf212.sender]
            });
          } else {
            await _0x2bf212.send("*_Provide admin role to kick Message Senders_*\n*Or _Disable onlyadmin(on/off) in currentchat_*");
          }
        }
        if (_0x3b1a5a.antilink && _0x3b1a5a.antilink !== "false" && SmdOfficial === "yes") {
          const _0x56b05b = Config.antilink_values && Config.antilink_values !== "all" ? Config.antilink_values.split(',').filter(_0x483f74 => _0x483f74.trim() !== '') : ['https://', "chat.whatsapp.com", "fb.com"];
          let _0x133bbc = _0x5524b6.toLowerCase();
          if (_0x56b05b.some(_0x13e9b0 => _0x133bbc.includes(_0x13e9b0))) {
            if (!_0x2bf212.isBotAdmin) {
              let _0x123795 = " *[LINK DETECTED]*\nUser @" + _0x2bf212.sender.split('@')[0x0] + " detected sending a link.\nPromote " + Config.botname + " as admin to " + (_0x3b1a5a.antilink === 'kick' ? "kick \nlink senders." : "delete \nlinks from this Chat") + " \n";
              await _0x2bf212.send(_0x123795, {
                'mentions': [_0x2bf212.sender]
              });
            } else {
              if (_0x3b1a5a.antilink === "delete") {
                await _0x2bf212.send("*_Link Detected.. Deletion Done!_*");
                await _0x2bf212["delete"]();
              } else {
                if (_0x3b1a5a.antilink === 'warn' || _0x3b1a5a.antilink === "true") {
                  let _0x5af85f = {
                    'reason': "links not allowed!",
                    'chat': _0x2bf212.metadata?.["subject"] || "PRIVATE",
                    'warnedby': tlang().title,
                    'date': _0x2bf212.date
                  };
                  _0x23d786 = _0x23d786 ? _0x23d786 : await warn.addwarn(_0x2bf212.sender, _0x2bf212.chat, _0x5af85f);
                  var _0x4426ed = _0x23d786.status ? "*_[LINK DETECTED] Hey @" + _0x2bf212.senderNum + " warning!!_*\n*_links not allowed in current group!_*" : "*_[LINK DETECTED]!_*";
                  await _0x2bf212.reply(_0x4426ed, {
                    'mentions': [_0x2bf212.sender]
                  });
                  await _0x2bf212["delete"]();
                } else {
                  if (_0x3b1a5a.antilink === "kick") {
                    await _0x2bf212.send("*_Link Detected!!_*");
                    try {
                      await _0x2bf212['delete']();
                      sleep(0x5dc);
                      await _0x2bf212.bot.groupParticipantsUpdate(_0x2bf212.chat, [_0x2bf212.sender], "remove");
                    } catch {
                      await _0x2bf212.send("*Link Detected*\n" + tlang().botAdmin);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } catch (_0x5aff14) {
      console.log("Error From Antilinks : ", _0x5aff14);
    }
    var _0x461288 = _0x3b1a5a?.["antiword"] || {
      'status': 'false'
    };
    if (_0x2c0e05.length > 0x1 && !_0x2bf212.isBot && _0x461288 && _0x461288.status !== "false" && _0x461288.words) {
      var _0xb59b93 = _0x461288.words.split(',') || [];
      let _0x309cb4 = false;
      _0xb59b93.map(async _0x259d40 => {
        if (_0x2bf212.isAdmin || !global.SmdOfficial || global.SmdOfficial != 'yes') {
          return;
        }
        let _0x6f7b3d = new RegExp("\\b" + _0x259d40?.['trim']() + "\\b", 'ig');
        let _0xd5ceaf = _0x16dc3b.toLowerCase();
        if (!_0x309cb4 && _0x259d40 && _0x6f7b3d.test(_0xd5ceaf)) {
          _0x309cb4 = true;
          await sleep(0x1f4);
          try {
            var _0x7785f6 = '';
            if (_0x461288.status === "warn") {
              let _0x2f6020 = {
                'reason': "For using Bad Word",
                'chat': _0x2bf212.metadata?.["subject"] || 'PRIVATE',
                'warnedby': tlang().title,
                'date': _0x2bf212.date
              };
              _0x23d786 = _0x23d786 ? _0x23d786 : await warn.addwarn(_0x2bf212.sender, _0x2bf212.chat, _0x2f6020);
              if (_0x23d786.status) {
                _0x7785f6 = "\n*Warns you for using badWord!!*\n";
              }
            }
            if (_0x2bf212.isBotAdmin) {
              await _0x2bf212.send("*[BAD WORD DETECTED] Hey @" + _0x2bf212.senderNum + "* " + _0x7785f6 + " *Deleting your message from chat!*\n", {
                'mentions': [_0x2bf212.sender]
              }, 'ANITA', _0x2bf212);
              await _0x2bf212["delete"]();
            } else {
              await _0x2bf212.reply("*_[BAD WORD DETECTED] provide admin to take action!_*", {
                'mentions': [_0x2bf212.sender]
              });
            }
          } catch (_0x2b9fb7) {
            console.log("Error From Bad Words : ", _0x2b9fb7);
          }
        }
      });
    }
    if (_0x23d786) {
      let _0x5d7aa6 = parseInt(global.warncount) || 0x3;
      if (_0x23d786.warning >= _0x5d7aa6) {
        if (_0x2bf212.isGroup) {
          if (_0x2bf212.isBotAdmin) {
            await _0x2bf212.send("*_Hey @" + _0x2bf212.senderNum + " Kicking you from group!_*\n*_Because Your warn limit exceed!_*", {
              'mentions': [_0x2bf212.sender]
            });
            await _0x2bf212.bot.groupParticipantsUpdate(_0x2bf212.chat, [_0x2bf212.sender], "remove");
          }
        } else {
          await _0x2bf212.send("*_Hey @" + _0x2bf212.senderNum + " Blocking you!_*\n*_Because Your warn limit exceed!_*", {
            'mentions': [_0x2bf212.sender]
          });
          await _0x2bf212.bot.updateBlockStatus(_0x2bf212.sender, 'block');
        }
      }
    }
    try {
      if (!global.SmdOfficial || _0x2bf212.mtype === "reactionMessage") {
        return;
      }
      let _0x3db2b2 = (await groupdb.findOne({
        'id': _0x2bf212.chat
      })) || {
        'chatbot': "false"
      };
      if (!bott || chatbotCount >= 0xa) {
        bott = (await bot_.findOne({
          'id': "bot_" + _0x2bf212.user
        })) || {
          'chatbot': "false"
        };
      } else {
        chatbotCount++;
      }
      let _0x164489 = bott && bott.chatbot && bott.chatbot == "true" ? "true" : _0x3db2b2.chatbot || "false";
      if (_0x164489 === "true" && !_0x1baa74 && !_0x2bf212.isBot && _0x2bf212.text) {
        let _0x3da2a1 = !_0x2bf212.isGroup ? _0x2bf212.user : _0x2bf212.quoted ? _0x2bf212.quoted.sender : _0x2bf212.mentionedJid[0x0] || false;
        if (_0x2bf212.isGroup && _0x3da2a1 && !_0x2bf212.checkBot(_0x3da2a1)) {
          return;
        }
        let {
          data: _0x1a1e0d
        } = await axios.get("http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[" + _0x2bf212.senderNum + ']&msg=[' + _0x16dc3b + ']');
        if (_0x1a1e0d && _0x1a1e0d.cnt) {
          _0x2bf212.send(_0x1a1e0d.cnt, {}, "ANITA", _0x2bf212);
        } else {
          '';
        }
      }
    } catch (_0x2e9fbc) {
      console.log("Error From ChatBot : ", _0x2e9fbc);
    }
  } catch (_0xa7f0c8) {
    console.log("Group Settings error in command.main() \n", _0xa7f0c8);
  }
});
let users = {};
let user_warns = {};
smd({
  'group': "add"
}, async (_0x4b3857, {
  Void: _0x9aa7af
}) => {
  try {
    let _0x4c1a6e = await groupdb.findOne({
      'id': _0x4b3857.chat
    });
    if (!_0x4c1a6e || !_0x4b3857.isGroup || _0x4c1a6e.botenable !== "true" || _0x4b3857.blockJid || _0x4b3857.fromMe) {
      return;
    }
    let _0x2a5ad0 = _0x4c1a6e && _0x4c1a6e.welcome ? _0x4c1a6e.welcome : "false";
    let _0x4052a2 = _0x4c1a6e && _0x4c1a6e.antifake ? _0x4c1a6e.antifake.toLowerCase() : 'false';
    let _0x967d0b = _0x4052a2.split(',');
    const _0xf09dd = _0x967d0b.some(_0x38108b => _0x4b3857.user.startsWith(_0x38108b));
    if (_0x4052a2 !== 'false' && !_0xf09dd && !_0x4b3857.isCreator) {
      if (_0x4b3857.isBotAdmin) {
        try {
          await _0x4b3857.kick();
          return await sendWelcome(_0x4b3857, "*[ANTIFAKE START] @User kicked automaticaly!* @pp");
        } catch (_0x40c95f) {
          await _0x4b3857.error(" Can't kick user in antifake\n❲❒❳ GROUP: " + _0x4b3857.metadata.subject + "\n❲❒❳ ERROR: " + _0x40c95f + "\n", _0x40c95f, false);
        }
      } else {
        await _0x4b3857.send("*[ANTI_FAKE ERROR] Need admin role to kick fake users!!*");
      }
    } else if (_0x2a5ad0 === "true") {
      await sendWelcome(_0x4b3857, _0x4c1a6e.welcometext);
    }
  } catch (_0x413586) {
    console.log("Error From Welcome : ", _0x413586);
  }
});
smd({
  'group': 'remove'
}, async (_0x35007f, {
  Void: _0x1bb93a
}) => {
  try {
    let _0x488c2c = (await groupdb.findOne({
      'id': _0x35007f.chat
    })) || false;
    if (!_0x35007f || !_0x488c2c || !_0x35007f.isGroup || _0x488c2c.botenable !== 'true' || _0x35007f.blockJid || _0x35007f.fromMe) {
      return;
    }
    let _0x4a0ba8 = _0x488c2c && _0x488c2c.goodbye ? _0x488c2c.goodbye : "false";
    if (_0x4a0ba8 === 'true') {
      await sendWelcome(_0x35007f, _0x488c2c.goodbyetext);
    }
  } catch (_0x5e48aa) {
    console.log("Error From Goodbye : ", _0x5e48aa);
  }
});
smd({
  'group': "promote"
}, async (_0x3e8d28, {
  Void: _0x237e9b
}) => {
  try {
    let _0x32a13e = (await groupdb.findOne({
      'id': _0x3e8d28.chat
    })) || false;
    if (!_0x32a13e || !_0x3e8d28.isGroup || _0x32a13e.botenable !== 'true' || _0x3e8d28.blockJid) {
      return;
    }
    if (!user_warns[_0x3e8d28.sender]) {
      user_warns[_0x3e8d28.sender] = {
        [_0x3e8d28.action]: 0x1
      };
    } else {
      user_warns[_0x3e8d28.sender][_0x3e8d28.action]++;
    }
    let _0x49df05;
    if (_0x32a13e.antipromote == "true" && !_0x3e8d28.isCreator) {
      _0x49df05 = !_0x3e8d28.isBotAdmin;
      if (users[_0x3e8d28.sender] && users[_0x3e8d28.sender].previous_Action === "antidemote") {
        delete users[_0x3e8d28.sender];
        return;
      }
      if (_0x3e8d28.isBotAdmin) {
        try {
          await _0x3e8d28.demote();
          users[_0x3e8d28.sender] = {
            'previous_Action': 'antipromote'
          };
          if (user_warns[_0x3e8d28.sender][_0x3e8d28.action] > 0x2) {
            return;
          }
          return await sendWelcome(_0x3e8d28, "*[ANTIPROMOTE START] @User Demoted Automatically!* @pp ");
        } catch (_0x1aafd6) {
          await _0x3e8d28.error(" Can't demote user in antipromote\n❲❒❳ GROUP: " + _0x3e8d28.metadata.subject + "\n❲❒❳ ERROR: " + _0x1aafd6 + "\n", _0x1aafd6, false);
        }
      }
    }
    if (_0x32a13e.pdm == "true" || _0x49df05) {
      if (user_warns[_0x3e8d28.sender][_0x3e8d28.action] > 0x2) {
        return;
      }
      var _0xe2d5ed = " *[SOMEONE PROMOTE HERE]*\n" + (_0x49df05 ? "*Note : _I'm Not Admin Here, So I Can't Demote Someone while Anti_Promote Activated_*" : '') + "\n           \n  ❲❒❳ *User:* _@user_\n❲❒❳ *Position:* _Member -> Admin_ @pp\n  ❲❒❳ *Total Members:* _@count_Members_\n❲❒❳ *Group Name:* @gname\n\n\n" + Config.caption;
      return await sendWelcome(_0x3e8d28, _0xe2d5ed);
    }
  } catch (_0x5ee690) {
    console.log("Error From Promote : ", _0x5ee690);
  }
});
smd({
  'group': "demote"
}, async (_0x58e9d9, {
  Void: _0x2bb247
}) => {
  try {
    let _0x36fd8a = (await groupdb.findOne({
      'id': _0x58e9d9.chat
    })) || false;
    if (!_0x36fd8a || !_0x58e9d9.isGroup || _0x36fd8a.botenable !== "true" || _0x58e9d9.blockJid) {
      return;
    }
    if (!user_warns[_0x58e9d9.sender]) {
      user_warns[_0x58e9d9.sender] = {
        [_0x58e9d9.action]: 0x1
      };
    } else {
      user_warns[_0x58e9d9.sender][_0x58e9d9.action]++;
    }
    let _0x1e8213;
    if (_0x36fd8a.antidemote == "true" && !_0x58e9d9.isCreator) {
      _0x1e8213 = !_0x58e9d9.isBotAdmin;
      if (users[_0x58e9d9.sender] && users[_0x58e9d9.sender].previous_Action === "antipromote") {
        delete users[_0x58e9d9.sender];
        return;
      }
      if (_0x58e9d9.isBotAdmin) {
        try {
          await _0x58e9d9.promote();
          users[_0x58e9d9.sender] = {
            'previous_Action': "antidemote"
          };
          if (user_warns[_0x58e9d9.sender][_0x58e9d9.action] > 0x2) {
            return;
          }
          return await sendWelcome(_0x58e9d9, "*[ANTIPROMOTE START] User promote automatically!* @pp ");
        } catch (_0x5efe5c) {
          await _0x58e9d9.error(" Can't promote user in antidemote\n❲❒❳ GROUP: " + _0x58e9d9.metadata.subject + "\n❲❒❳ ERROR: " + _0x5efe5c + "\n", _0x5efe5c, false);
        }
      }
    }
    if (_0x36fd8a.pdm == "true" || _0x1e8213) {
      if (user_warns[_0x58e9d9.sender][_0x58e9d9.action] > 0x2) {
        return;
      }
      var _0x308994 = " *[SOMEONE DEMOTE HERE]*\n  " + (_0x1e8213 ? "*Note : _I'm Not Admin Here, So I Can't promote Someone while Anti_Demote Activated_*" : '') + "\n\n  ❲❒❳ *User:* _@user_\n❲❒❳ *Position:* _Admin -> Member_ @pp\n  ❲❒❳ *Total Members:* _@count_Members_\n❲❒❳ *Group Name:* @gname\n  \n\n" + Config.caption;
      return await sendWelcome(_0x58e9d9, _0x308994);
    }
  } catch (_0x2f4781) {
    console.log("Error From Demote : ", _0x2f4781);
  }
});