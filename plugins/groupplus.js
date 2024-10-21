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
  groupdb,
  userdb,
  bot_,
  smd,
  jsonformat,
  sendWelcome,
  botpic,
  TelegraPh,
  RandomXP,
  Config,
  tlang,
  warndb,
  sleep,
  getAdmin,
  getBuffer,
  prefix
} = require('../lib');
const axios = require("axios");
const sᴜʜᴀɪʟ_ᴍᴅ = require('../lib/plugins');
smd({
  'pattern': "lydea",
  'alias': ['chatbot'],
  'desc': "activates and deactivates chatbot.\nuse buttons to toggle.",
  'fromMe': true,
  'category': 'misc',
  'filename': __filename
}, async (_0x4b254a, _0x3509b1, {
  cmdName: _0x386628
}) => {
  try {
    let _0x16d7cd = _0x3509b1.split(" ")[0x0].toLowerCase().trim();
    let _0x44884a = (await groupdb.findOne({
      'id': _0x4b254a.chat
    })) || (await groupdb["new"]({
      'id': _0x4b254a.chat
    }));
    let _0x24b44f = (await bot_.findOne({
      'id': "bot_" + _0x4b254a.user
    })) || (await groupdb['new']({
      'id': "bot_" + _0x4b254a.user
    })) || {
      'chatbot': "false"
    };
    if (_0x16d7cd == "all" || _0x16d7cd === 'global') {
      if (_0x24b44f.chatbot == "true") {
        return await _0x4b254a.send('*' + _0x386628 + " was already enabled to all chat!.*");
      }
      await bot_.updateOne({
        'id': "bot_" + _0x4b254a.user
      }, {
        'chatbot': "true"
      });
      return await _0x4b254a.send('*' + _0x386628 + " successfully enabled to all chats!.*");
    } else {
      if (_0x16d7cd.startsWith('on') || _0x16d7cd.startsWith("act") || _0x16d7cd.startsWith("enable")) {
        if (_0x44884a.chatbot == "true" || _0x24b44f.chatbot == "true") {
          return await _0x4b254a.send('*' + _0x386628 + " was already enabled.*");
        }
        await groupdb.updateOne({
          'id': _0x4b254a.chat
        }, {
          'chatbot': "true"
        });
        return await _0x4b254a.send('*' + _0x386628 + " activated successfully.*");
      } else {
        if (_0x16d7cd.startsWith("off") || _0x16d7cd.startsWith("deact") || _0x16d7cd.startsWith("disable")) {
          if (_0x44884a.chatbot == 'false' && _0x24b44f.chatbot == "false") {
            return await _0x4b254a.send('*' + _0x386628 + " was already disabled.*");
          }
          await bot_.updateOne({
            'id': "bot_" + _0x4b254a.user
          }, {
            'chatbot': "false"
          });
          await groupdb.updateOne({
            'id': _0x4b254a.chat
          }, {
            'chatbot': 'false'
          });
          return await _0x4b254a.send('*' + _0x386628 + " deactivated successfully.*");
        } else {
          return await _0x4b254a.reply('*_' + _0x386628 + " Currently *" + (_0x24b44f.chatbot == "true" ? "Enabled in 'all' Chats" : _0x44884a.chatbot == 'true' ? "Enabled in Chat" : "Disabled in Chat") + "!_*\n*_Use On/Off/all to enable/disable " + _0x386628 + '_*');
        }
      }
    }
  } catch (_0x4785b7) {
    _0x4b254a.error(_0x4785b7 + "\n\ncommand: lydea(chatbot)", _0x4785b7);
  }
});
let warn = {
  'addwarn': async (_0x154c23, _0x548764, _0x62b92 = {}) => {
    try {
      let _0x5ee77f = (await userdb.findOne({
        'id': _0x154c23
      })) || (await userdb["new"]({
        'id': _0x154c23
      }));
      let _0x20e47e = _0x5ee77f.warn || {};
      if (!_0x20e47e[_0x548764]) {
        _0x20e47e[_0x548764] = [];
      }
      var _0x5f2d1c = {
        'chat': "PRIVATE",
        'reason': "Inapropriate Behaviour",
        'date': new Date(),
        'warnedby': tlang().title,
        ..._0x62b92
      };
      _0x20e47e[_0x548764].push(_0x5f2d1c);
      _0x5ee77f = await userdb.updateOne({
        'id': _0x154c23
      }, {
        'warn': _0x20e47e
      });
      return {
        'status': true,
        'warning': _0x20e47e[_0x548764].length,
        'user': _0x5ee77f
      };
    } catch (_0x1986ad) {
      return {
        'status': false,
        'warning': 0x0,
        'user': {},
        'error': _0x1986ad
      };
    }
  }
};
smd({
  'pattern': "checkwarn",
  'alias': ["listwarn", "chatwarn", "allwarn"],
  'desc': "create paste of text.",
  'category': "general",
  'filename': __filename
}, async (_0x7b9b1a, _0x3090ef) => {
  try {
    let _0x2db255 = '';
    let _0x118831 = _0x7b9b1a.sender;
    if (_0x7b9b1a.isCreator) {
      _0x118831 = _0x7b9b1a.reply_message ? _0x7b9b1a.reply_message.sender : _0x7b9b1a.mentionedJid[0x0] ? _0x7b9b1a.mentionedJid[0x0] : _0x118831;
    }
    let _0x5d28e2 = (await userdb.findOne({
      'id': _0x118831
    })) || (await userdb["new"]({
      'id': _0x118831
    }));
    let _0x41ba94 = _0x5d28e2.warn || false;
    let _0xfa5a4c = {};
    if (_0x41ba94 && _0x3090ef === 'all') {
      _0x41ba94 = _0x5d28e2.warn;
    } else if (_0x41ba94 && _0x41ba94[_0x7b9b1a.chat]) {
      _0xfa5a4c[_0x7b9b1a.chat] = [..._0x41ba94[_0x7b9b1a.chat]];
      _0x41ba94 = _0xfa5a4c;
    } else {
      _0x41ba94 = false;
    }
    let _0x4c94a5 = _0x3090ef === 'all' ? true : !_0x41ba94[_0x7b9b1a.chat];
    if (!_0x5d28e2 || !_0x41ba94 || !_0x4c94a5) {
      return await _0x7b9b1a.send("*_User didn't have any warning yet!!_*");
    }
    console.log("allwarn : ", _0x41ba94);
    for (const _0x4569b8 in _0x41ba94) {
      let _0x37e026 = _0x41ba94[_0x4569b8];
      _0x2db255 += "\n╭─────────────◆\n│ *[ID] : " + (_0x4569b8.includes('@') ? (await _0x7b9b1a.bot.getName(_0x4569b8)) || _0x4569b8 : _0x4569b8) + "*\n│ *[TOTAL WARNING] : " + _0x41ba94[_0x4569b8].length + "*\n┝─────────────◆\n";
      for (let _0x46188f = 0x0; _0x46188f < _0x37e026.length; _0x46188f++) {
        _0x2db255 += "┝── *WARNING " + (_0x46188f + 0x1) + "* ──\n│  *DATE:* " + _0x37e026[_0x46188f].date + " " + (_0x37e026[_0x46188f].reason ? "  \n│  *REASON:* " + _0x37e026[_0x46188f].reason : '') + "\n│  *WARNED BY:* " + _0x37e026[_0x46188f].warnedby + "\n│  *CHAT:* " + _0x37e026[_0x46188f].chat + "\n";
      }
      _0x2db255 += "╰─────────────◆\n";
    }
    return await _0x7b9b1a.reply(_0x2db255 ? _0x2db255 : "*_User didn't have any warning yet!!_*");
  } catch (_0x164162) {
    await _0x7b9b1a.error(_0x164162 + "\n\nCommand: chatwarn", _0x164162);
  }
});
smd({
  'pattern': "warn",
  'fromMe': true,
  'desc': "warn a user!",
  'category': "general",
  'filename': __filename,
  'use': " < USER >"
}, async (_0x4349da, _0x30c654) => {
  try {
    let _0x5d12be = _0x4349da.reply_message ? _0x4349da.reply_message.sender : _0x4349da.mentionedJid[0x0] ? _0x4349da.mentionedJid[0x0] : false;
    if (!_0x5d12be) {
      return await _0x4349da.send("*_Uhh please, reply to a user!!_*");
    }
    let _0x309435 = (await userdb.findOne({
      'id': _0x5d12be
    })) || (await userdb["new"]({
      'id': _0x5d12be
    }));
    let _0x51a2e7 = _0x309435.warn || {};
    if (!_0x51a2e7[_0x4349da.chat]) {
      _0x51a2e7[_0x4349da.chat] = [];
    }
    var _0x1dd198 = {
      'chat': _0x4349da.isGroup ? _0x4349da.metadata?.["subject"] || "GROUP" : "PRIVATE CHAT",
      'reason': _0x30c654,
      'date': _0x4349da.date,
      'warnedby': _0x4349da.senderName
    };
    _0x51a2e7[_0x4349da.chat].push(_0x1dd198);
    await userdb.updateOne({
      'id': _0x5d12be
    }, {
      'warn': _0x51a2e7
    });
    let _0x1cb5f = parseInt(Config.warncount) || 0x3;
    if (_0x51a2e7[_0x4349da.chat].length > _0x1cb5f && !_0x4349da.checkBot(_0x5d12be)) {
      if (_0x4349da.isGroup) {
        if (_0x4349da.isBotAdmin) {
          await _0x4349da.send("*_Hey @" + _0x5d12be.split('@')[0x0] + ", Kicking you from group!_*\n*_Because Your warn limit exceed!_*", {
            'mentions': [_0x5d12be]
          });
          await _0x4349da.bot.groupParticipantsUpdate(_0x4349da.chat, [_0x5d12be], "remove");
        } else {
          return await _0x4349da.send("*_Hey @" + _0x5d12be.split('@')[0x0] + " Dont Spam, Your warn limit exceed!_*");
        }
      } else {
        await _0x4349da.send("*_Hey @" + _0x5d12be.split('@')[0x0] + ", Blocking you!_*\n*_Because Your warn limit exceed!_*", {
          'mentions': [_0x5d12be]
        });
        await _0x4349da.bot.updateBlockStatus(_0x5d12be, 'block');
      }
    } else {
      return await _0x4349da.send("*_Hey @" + _0x5d12be.split('@')[0x0] + " warning added, Don't spam!_*", {
        'mentions': [_0x5d12be]
      });
    }
  } catch (_0x576c55) {
    await _0x4349da.error(_0x576c55 + "\n\nCommand: warn ", _0x576c55, false);
  }
});
smd({
  'pattern': "resetwarn",
  'desc': "create paste of text.",
  'category': "general",
  'filename': __filename,
  'use': " user "
}, async (_0x1f1e0d, _0x493942) => {
  try {
    if (!_0x1f1e0d.isCreator && !_0x1f1e0d.isAdmin) {
      return await _0x1f1e0d.reply(tlang().admin);
    }
    let _0xf6ba6c = _0x1f1e0d.reply_message ? _0x1f1e0d.reply_message.sender : _0x1f1e0d.mentionedJid[0x0] ? _0x1f1e0d.mentionedJid[0x0] : false;
    if (!_0xf6ba6c) {
      return await _0x1f1e0d.send("*_Uhh please, reply to a user!!_*");
    }
    let _0x29d588 = (await userdb.findOne({
      'id': _0xf6ba6c
    })) || (await userdb["new"]({
      'id': _0xf6ba6c
    })) || {};
    let _0x35042b = _0x29d588.warn || {};
    if (_0x1f1e0d.isCreator && _0x493942.toLowerCase() === "all" && _0x35042b) {
      _0x35042b = {};
    } else {
      if (!_0x29d588 || !_0x35042b || !_0x35042b[_0x1f1e0d.chat]) {
        return await _0x1f1e0d.send("*_User didn't have any warning yet!!_*");
      }
      delete _0x35042b[_0x1f1e0d.chat];
    }
    await userdb.updateOne({
      'id': _0xf6ba6c
    }, {
      'warn': _0x35042b
    });
    await _0x1f1e0d.reply("*User is free as a bird now!*\n*All warns has been deleted!*");
  } catch (_0x4f04fd) {
    await _0x1f1e0d.error(_0x4f04fd + "\n\nCommand: resetwarn", _0x4f04fd);
  }
});
smd({
  'pattern': "act",
  'alias': ["activate", "active"],
  'desc': "Switches for varios works.",
  'category': "moderation",
  'filename': __filename
}, async (_0x48bbbc, _0x37a558) => {
  try {
    if (!_0x48bbbc.isGroup) {
      return _0x48bbbc.reply(tlang().group);
    }
    const _0x4580ce = _0x48bbbc.isAdmin;
    let _0x19b4bf = _0x37a558?.["split"](" ")[0x0]["toLowerCase"]()?.["trim"]() || false;
    if (!_0x4580ce && !_0x48bbbc.isCreator) {
      return _0x48bbbc.reply(tlang().admin);
    }
    let _0x34d84a = (await groupdb.findOne({
      'id': _0x48bbbc.chat
    })) || (await groupdb["new"]({
      'id': _0x48bbbc.chat
    })) || false;
    if (!_0x34d84a) {
      return await _0x48bbbc.reply("*_Uhh dear, Group not found in Databse!_*");
    }
    switch (_0x19b4bf) {
      case "antilink":
        {
          if (_0x34d84a.antilink !== "false") {
            return await _0x48bbbc.reply("*_Antilink was alredy enabled here!_*");
          }
          await groupdb.updateOne({
            'id': _0x48bbbc.chat
          }, {
            'antilink': "warn"
          });
          await _0x48bbbc.reply("*_Enabled antilink in current chat.!_*");
        }
        break;
      case "economy":
        {
          if (_0x34d84a.economy == 'true') {
            return await _0x48bbbc.reply("*_Economy was alredy enabled.!_*");
          }
          await groupdb.updateOne({
            'id': _0x48bbbc.chat
          }, {
            'economy': 'true'
          });
          await _0x48bbbc.reply("*_Economy enabled in current chat.!_*");
        }
        break;
      case 'events':
      case "event":
        {
          await groupdb.updateOne({
            'id': _0x48bbbc.chat
          }, {
            'welcome': "true",
            'goodbye': "true"
          });
          return await _0x48bbbc.reply("*Successfully Enabled Events!*");
        }
        break;
      case 'nsfw':
        {
          if (_0x34d84a.nsfw == 'true') {
            return await _0x48bbbc.reply("*_NSFW is already enabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x48bbbc.chat
          }, {
            'nsfw': "true"
          });
          await _0x48bbbc.reply("*_Successfully Enabled NSFW_*");
        }
        break;
      case "bot":
        {
          if (_0x34d84a.botenable == 'true') {
            return await _0x48bbbc.reply("*_bot is already enabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x48bbbc.chat
          }, {
            'botenable': "true"
          });
          await _0x48bbbc.reply("*_Successfully Enabled bot_*");
        }
        break;
      default:
        {
          _0x48bbbc.reply("Please provide me term like.\n1-events\n2-antilink\n3-nsfw\n4-economy\n5-bot");
        }
    }
  } catch (_0x5789b) {
    await _0x48bbbc.error(_0x5789b + "\n\ncommand: act", _0x5789b);
  }
});
smd({
  'pattern': "deact",
  'alias': ["deactive", "deactivate"],
  'desc': "Switches for varios works.",
  'category': "moderation",
  'filename': __filename
}, async (_0x46efc2, _0x2a3f3d) => {
  try {
    if (!_0x46efc2.isGroup) {
      return _0x46efc2.reply(tlang().group);
    }
    const _0x5ae0f4 = _0x46efc2.isAdmin;
    let _0x34332e = _0x2a3f3d?.["split"](" ")[0x0]["toLowerCase"]()?.["trim"]() || false;
    if (!_0x34332e) {
      return _0x46efc2.reply("❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw\n4-bot\n5-economy");
    }
    if (!_0x5ae0f4 && !_0x46efc2.isCreator) {
      return _0x46efc2.reply(tlang().admin);
    }
    let _0x3dac91 = (await groupdb.findOne({
      'id': _0x46efc2.chat
    })) || (await groupdb['new']({
      'id': _0x46efc2.chat
    })) || false;
    if (!_0x3dac91) {
      return await _0x46efc2.reply("*_Uhh dear, request not be proceed due to error!_*");
    }
    switch (_0x34332e) {
      case 'antilink':
        {
          if (_0x3dac91.antilink == "false") {
            return _0x46efc2.reply("*_Antilink was alredy disabled_*");
          }
          await groupdb.updateOne({
            'id': _0x46efc2.chat
          }, {
            'antilink': 'false'
          });
          _0x46efc2.reply("*_disabled antilink in current chat!_*");
        }
        break;
      case "economy":
        {
          if (_0x3dac91.economy == "false") {
            return _0x46efc2.reply("*_Economy was alredy disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x46efc2.chat
          }, {
            'economy': "false"
          });
          _0x46efc2.reply("*disabled Economy in current chat.*");
        }
        break;
      case "events":
      case "event":
        {
          if (_0x3dac91.events == "false") {
            return _0x46efc2.reply("*_Events are already disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x46efc2.chat
          }, {
            'welcome': 'false',
            'goodbye': 'false'
          });
          return _0x46efc2.reply("*Successfully disabled Events!*");
        }
        break;
      case "nsfw":
        {
          if (_0x3dac91.nsfw == "false") {
            return _0x46efc2.reply("*_NSFW is already disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x46efc2.chat
          }, {
            'nsfw': 'false'
          });
          _0x46efc2.reply("*Successfully disabled NSFW*");
        }
        break;
      case "bot":
        {
          if (_0x3dac91.botenable == "false") {
            return await _0x46efc2.reply("*_bot is already disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x46efc2.chat
          }, {
            'botenable': "true"
          });
          await _0x46efc2.reply("*_Successfully disabled bot_*");
        }
        break;
      default:
        {
          _0x46efc2.reply("Please provide me term like.\n1-events\n2-antilink\n3-nsfw\n4-bot\n5-economy");
        }
    }
  } catch (_0x4d3206) {
    await _0x46efc2.error(_0x4d3206 + "\n\ncommand: deact", _0x4d3206);
  }
});
smd({
  'pattern': 'bot',
  'desc': "activates and deactivates bot.\nuse buttons to toggle.",
  'fromMe': true,
  'category': 'misc',
  'filename': __filename
}, async (_0x20da0d, _0x19235f) => {
  try {
    let _0x2ac488 = _0x19235f ? _0x19235f.toLowerCase().trim() : false;
    let _0x58d0c1 = _0x2ac488 ? _0x2ac488.split(" ")[0x0] : false;
    let _0x4aae5f = (await groupdb.findOne({
      'id': _0x20da0d.chat
    })) || (await groupdb['new']({
      'id': _0x20da0d.chat
    }));
    if (!_0x58d0c1) {
      await _0x20da0d.send("*_Bot *" + (_0x4aae5f.botenable === "false" ? "Disabled" : 'Enabled') + " in this Chat!_*");
    } else if (_0x58d0c1.startsWith("off") || _0x58d0c1.startsWith("deact") || _0x58d0c1.startsWith("disable")) {
      if (_0x4aae5f.botenable === "false") {
        await _0x20da0d.send("*_Bot already disabled in current Chat!!_*");
      } else {
        await groupdb.updateOne({
          'id': _0x20da0d.chat
        }, {
          'botenable': "false"
        });
        await _0x20da0d.send("*_Bot Disabled Succesfully!_*");
      }
    } else if (_0x58d0c1.startsWith('on') || _0x58d0c1.startsWith('act') || _0x58d0c1.startsWith("enable")) {
      if (_0x4aae5f.botenable === "true") {
        await _0x20da0d.send("*_Bot already enabled in current Chat!!_*");
      } else {
        await groupdb.updateOne({
          'id': _0x20da0d.chat
        }, {
          'botenable': "true"
        });
        await _0x20da0d.send("*_Bot Succesfully Enabled!_*");
      }
    } else {
      await _0x20da0d.send("*_Provide Valid Instruction_*\n*Ex: _" + prefix + "bot on/off_*");
    }
  } catch (_0x839b3d) {
    _0x20da0d.error(_0x839b3d + "\n\ncommand: bot", _0x839b3d);
  }
});
smd({
  'pattern': "antitag",
  'desc': "detect tagall in group chat, then kick them",
  'fromMe': true,
  'category': 'misc',
  'filename': __filename
}, async (_0x49b3a8, _0x54237d) => {
  try {
    let _0x1a9bf1 = _0x54237d ? _0x54237d.toLowerCase().trim() : false;
    let _0x20d37a = _0x1a9bf1 ? _0x1a9bf1.split(" ")[0x0] : false;
    let _0x333c2d = (await groupdb.findOne({
      'id': _0x49b3a8.chat
    })) || (await groupdb['new']({
      'id': _0x49b3a8.chat
    }));
    if (!_0x20d37a) {
      await _0x49b3a8.send("*_Anti_tag *" + (_0x333c2d.antitag === 'false' ? "Disabled" : "Enabled") + " in this Chat!_*");
    } else if (_0x20d37a.startsWith("off") || _0x20d37a.startsWith('deact') || _0x20d37a.startsWith("disable")) {
      if (_0x333c2d.antitag === "false") {
        await _0x49b3a8.send("*_Anti_tag already disabled in current Chat!!_*");
      } else {
        await groupdb.updateOne({
          'id': _0x49b3a8.chat
        }, {
          'antitag': "false"
        });
        await _0x49b3a8.send("*_Anti_tag Disabled Succesfully!_*");
      }
    } else if (_0x20d37a.startsWith('on') || _0x20d37a.startsWith('act') || _0x20d37a.startsWith('enable')) {
      if (_0x333c2d.antitag === "true") {
        await _0x49b3a8.send("*_Anti_tag already enabled in current Chat!!_*");
      } else {
        await groupdb.updateOne({
          'id': _0x49b3a8.chat
        }, {
          'antitag': 'true'
        });
        await _0x49b3a8.send("*_Anti_tag succesfully enabled in chat!_*\n*_Now bot kick user who tag all members!_*");
      }
    } else {
      await _0x49b3a8.send("*_Provide Valid Instruction_*\n*Ex: _" + prefix + "antitag on/off_*");
    }
  } catch (_0x3ac4c4) {
    _0x49b3a8.error(_0x3ac4c4 + "\n\ncommand: antitag", _0x3ac4c4);
  }
});
smd({
  'pattern': 'antilink',
  'desc': "activates and deactivates antilink.\nuse buttons to toggle.",
  'category': "group",
  'filename': __filename
}, async (_0x5ce696, _0x5940b2, {
  smd: _0x225ef8
}) => {
  try {
    if (!_0x5ce696.isGroup) {
      return _0x5ce696.reply(tlang().group);
    }
    if (!_0x5ce696.isAdmin && !_0x5ce696.isCreator) {
      return _0x5ce696.reply(tlang().admin);
    }
    let _0x50afa0 = _0x5940b2 ? _0x5940b2.toLowerCase().trim() : false;
    let _0x509a1c = _0x50afa0 ? _0x50afa0.split(" ")[0x0] : false;
    let _0x58f7b0 = (await groupdb.findOne({
      'id': _0x5ce696.chat
    })) || (await groupdb['new']({
      'id': _0x5ce696.chat
    }));
    if (!_0x509a1c) {
      return await _0x5ce696.send("*_Antilink " + (_0x58f7b0.antilink === "false" ? "Disabled" : "Enabled") + " in this Group!_* \n" + (_0x58f7b0.antilink === 'false' ? '' : "*Current Mode:* _" + _0x58f7b0.antilink + '_') + "\n\n*Antilink Modes:* ```\n" + (prefix + _0x225ef8) + " kick (Delete Links & Kick Senders)\n" + (prefix + _0x225ef8) + " delete (Delete Links Only)\n" + (prefix + _0x225ef8) + " warn (warn & delete links)\n" + (prefix + _0x225ef8) + " off (Disable Antilink in chat) ```\n\n\n" + Config.caption);
    } else {
      if (_0x509a1c.startsWith("off") || _0x509a1c.startsWith("deact") || _0x509a1c.startsWith("disable")) {
        if (_0x58f7b0.antilink === 'false') {
          return await _0x5ce696.send("*_Anti_Link already disabled in current Chat!!_*");
        }
        await groupdb.updateOne({
          'id': _0x5ce696.chat
        }, {
          'antilink': 'false'
        });
        return await _0x5ce696.send("*_Anti_Link Disabled Succesfully!_*");
      } else {
        if (_0x509a1c.startsWith("kick")) {
          if (_0x58f7b0.antilink === "kick") {
            return await _0x5ce696.send("*_Anti_Link already set to kick link senders!!_*");
          }
          await groupdb.updateOne({
            'id': _0x5ce696.chat
          }, {
            'antilink': "kick"
          });
          return await _0x5ce696.send("*_Anti_Link Succesfully set to kick link senders!_*");
        } else {
          if (_0x509a1c.startsWith('delete')) {
            if (_0x58f7b0.antilink === "delete") {
              return await _0x5ce696.send("*_Anti_Link already set to delete links!!_*");
            }
            await groupdb.updateOne({
              'id': _0x5ce696.chat
            }, {
              'antilink': 'delete'
            });
            return await _0x5ce696.send("*_Anti_Link Succesfully set to delete links from chat!_*");
          } else {
            if (_0x509a1c.startsWith("warn")) {
              if (_0x58f7b0.antilink === 'warn') {
                return await _0x5ce696.send("*_Anti_Link already set to warn link senders!!_*");
              }
              await groupdb.updateOne({
                'id': _0x5ce696.chat
              }, {
                'antilink': "warn"
              });
              return await _0x5ce696.send("*_Anti_Link set to warn and delete links!_*");
            } else {
              return await _0x5ce696.send("*_Uhh Please, Provide Valid Instruction_*\n*Eg: _" + prefix + "antilink kick/delete/warn/off_*");
            }
          }
        }
      }
    }
  } catch (_0x2f9f40) {
    _0x5ce696.error(_0x2f9f40 + "\n\ncommand: antilink", _0x2f9f40);
  }
});
smd({
  'pattern': 'welcome',
  'alias': ['setwelcome'],
  'desc': "sets welcome message in specific group.",
  'category': 'group',
  'filename': __filename
}, async (_0x187fff, _0x23be7c) => {
  try {
    if (!_0x187fff.isGroup) {
      return _0x187fff.reply(tlang().group);
    }
    if (!_0x187fff.isAdmin && !_0x187fff.isCreator) {
      return _0x187fff.reply(tlang().admin);
    }
    let _0x12a84b = _0x23be7c.toLowerCase().trim();
    let _0x493945 = (await groupdb.findOne({
      'id': _0x187fff.chat
    })) || (await groupdb["new"]({
      'id': _0x187fff.chat
    }));
    if (_0x12a84b === 'on' || _0x12a84b === 'act' || _0x12a84b === "enable") {
      if (_0x493945.welcome === "true") {
        return await _0x187fff.send("*_Welcome already enabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x187fff.chat
      }, {
        'welcome': "true"
      });
      await _0x187fff.send("*Welcome successfully enabled!!*");
    }
    if (_0x493945.welcome !== "true") {
      return await _0x187fff.send("*_Welcome *Disabled in this Group!_* \n*_Use on/off to enable/disable welcome_*");
    }
    if (!_0x23be7c || _0x12a84b === "get") {
      return await _0x187fff.reply("*Welcome :* " + _0x493945.welcometext);
    }
    if (_0x12a84b === 'off' || _0x12a84b === "deact" || _0x12a84b === "disable") {
      if (_0x493945.welcome === "false") {
        return await _0x187fff.send("*_Welcome already disabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x187fff.chat
      }, {
        'welcome': 'false'
      });
      return await _0x187fff.send("*Welcome message disabled!!*");
    }
    await groupdb.updateOne({
      'id': _0x187fff.chat
    }, {
      'welcometext': _0x23be7c,
      'welcome': "true"
    });
    await sendWelcome(_0x187fff, _0x23be7c);
  } catch (_0x49a82a) {
    _0x187fff.error(_0x49a82a + "\n\ncommand: setwelcome", _0x49a82a);
  }
});
smd({
  'pattern': "goodbye",
  'alias': ["setgoodbye", "setbye"],
  'desc': "sets goodbye message in specific group.",
  'category': "group",
  'filename': __filename
}, async (_0x266f61, _0x1a74a4) => {
  try {
    if (!_0x266f61.isGroup) {
      return _0x266f61.reply(tlang().group);
    }
    if (!_0x266f61.isAdmin && !_0x266f61.isCreator) {
      return _0x266f61.reply(tlang().admin);
    }
    let _0x3d9af8 = _0x1a74a4.toLowerCase().trim();
    let _0xf536d3 = (await groupdb.findOne({
      'id': _0x266f61.chat
    })) || (await groupdb["new"]({
      'id': _0x266f61.chat
    }));
    if (_0x3d9af8 === 'on' || _0x3d9af8 === "act" || _0x3d9af8 === "enable") {
      if (_0xf536d3.goodbye === 'true') {
        return await _0x266f61.send("*_Goodbye already enabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x266f61.chat
      }, {
        'goodbye': "true"
      });
      await _0x266f61.send("*Goodbye successfully enabled!!*");
    }
    if (_0xf536d3.goodbye !== 'true') {
      return await _0x266f61.send("*_Goodbye *Disabled in this Group!_* \n*_Use on/off to enable/disable goodbye_*");
    }
    if (!_0x1a74a4 || _0x3d9af8 === "get") {
      return await _0x266f61.reply("*Goodbye Message :* " + _0xf536d3.goodbyetext);
    }
    if (_0x3d9af8 === 'off' || _0x3d9af8 === "deact" || _0x3d9af8 === "disable") {
      if (_0xf536d3.goodbye === 'false') {
        return await _0x266f61.send("*_Goodbye already disabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x266f61.chat
      }, {
        'goodbye': "false"
      });
      return await _0x266f61.send("*Goodbye message disabled!!*");
    }
    await groupdb.updateOne({
      'id': _0x266f61.chat
    }, {
      'goodbyetext': _0x1a74a4,
      'goodbye': "true"
    });
    await sendWelcome(_0x266f61, _0x1a74a4);
  } catch (_0x5f0cfe) {
    _0x266f61.error(_0x5f0cfe + "\n\ncommand: setgoodbye", _0x5f0cfe);
  }
});
smd({
  'pattern': "onlyadmin",
  'alias': ["antimessge"],
  'desc': "activates and deactivates onlyadmin.",
  'category': 'group',
  'filename': __filename
}, async (_0x23f653, _0x43e356, {
  cmdName: _0x47dcb6
}) => {
  try {
    if (!_0x23f653.isGroup) {
      return _0x23f653.reply(tlang().group);
    }
    if (!_0x23f653.isAdmin && !_0x23f653.isCreator) {
      return _0x23f653.reply(tlang().admin);
    }
    let _0x3bae8e = (await groupdb.findOne({
      'id': _0x23f653.chat
    })) || (await groupdb['new']({
      'id': _0x23f653.chat
    }));
    let _0x4d59eb = _0x43e356 ? _0x43e356.toLowerCase().trim() : false;
    let _0x53e619 = _0x4d59eb ? _0x4d59eb.split(" ")[0x0] : false;
    if (!_0x53e619) {
      return await _0x23f653.send('*_' + _0x47dcb6 + " *" + (_0x3bae8e.onlyadmin === "false" ? "Disabled" : "Enabled") + " in this Group!_*\n *_Use on/off to enable/disable_*");
    } else {
      if (_0x53e619.startsWith('off') || _0x53e619.startsWith("deact") || _0x53e619.startsWith("disable")) {
        if (_0x3bae8e.onlyadmin === 'false') {
          return await _0x23f653.reply("*_Onlyadmin Already Disabled in Current Chat_*");
        }
        await groupdb.updateOne({
          'id': _0x23f653.chat
        }, {
          'onlyadmin': "false"
        });
        await _0x23f653.bot.groupSettingUpdate(_0x23f653.chat, "not_announcement");
        return await _0x23f653.send('*' + _0x47dcb6 + " succesfully disable in group!_*\n*_Now everyone send message in group_*");
      } else {
        if (_0x53e619.startsWith('on') || _0x53e619.startsWith("act") || _0x53e619.startsWith("enable")) {
          if (_0x3bae8e.onlyadmin === "true") {
            return await _0x23f653.reply("*_Onlyadmin Already Enabled in Current Chat_*");
          }
          return _0x23f653.isBotAdmin ? (await groupdb.updateOne({
            'id': _0x23f653.chat
          }, {
            'onlyadmin': 'true'
          }), await _0x23f653.bot.groupSettingUpdate(_0x23f653.chat, 'announcement'), await _0x23f653.send('*' + _0x47dcb6 + " succesfully set to kick msg senders!_*\n*_Now only admins allow to send msg in group_*")) : await _0x23f653.reply("*_UHH Please, Provide Admin Role First_*");
        } else {
          return await _0x23f653.reply("*_Please Provide Valid Instruction_*\n*_Use on/off to enable/disable_*");
        }
      }
    }
  } catch (_0x45664f) {
    _0x23f653.error(_0x45664f + "\n\ncommand: onlyadmin", _0x45664f);
  }
});
smd({
  'pattern': "antibot",
  'desc': "kick Bot Users from Group.!",
  'category': "group",
  'filename': __filename
}, async (_0x46147e, _0x33aded, {
  cmdName: _0x588bb6
}) => {
  try {
    if (!_0x46147e.isGroup) {
      return _0x46147e.reply(tlang().group);
    }
    if (!_0x46147e.isAdmin && !_0x46147e.isCreator) {
      return _0x46147e.reply(tlang().admin);
    }
    let _0x1408fe = (await groupdb.findOne({
      'id': _0x46147e.chat
    })) || (await groupdb['new']({
      'id': _0x46147e.chat
    }));
    let _0x5882b0 = _0x33aded ? _0x33aded.toLowerCase().trim() : '';
    let _0x1b9ec5 = _0x5882b0.startsWith('on') || _0x5882b0.startsWith('act') || _0x5882b0.startsWith("enable") || _0x5882b0.startsWith('del') || _0x5882b0.startsWith("warn") ? "warn" : _0x5882b0.startsWith("kic") ? 'kick' : _0x5882b0.startsWith("off") || _0x5882b0.startsWith("reset") || _0x5882b0.startsWith('deact') || _0x5882b0.startsWith("disable") ? "false" : '';
    if (!_0x1b9ec5) {
      return await _0x46147e.send("*_Antibot Currently *" + (_0x1408fe.antibot === 'false' ? "Disabled" : "Enabled") + " in this Group!_*\n*_Use warn/kick/off to enable/disable Antibot_*");
    } else {
      if (_0x1b9ec5 === "false") {
        if (_0x1408fe.antibot === "false") {
          return await _0x46147e.reply("*_Antibot Already Disabled in Current Chat_*");
        }
        await groupdb.updateOne({
          'id': _0x46147e.chat
        }, {
          'antibot': "false"
        });
        return await _0x46147e.send("*_Antibot Succesfully Disable in group!_*");
      } else {
        if (_0x1b9ec5 === 'warn' || _0x1b9ec5 === "kick") {
          if (_0x1408fe.antibot === _0x1b9ec5) {
            return await _0x46147e.reply("*_Antibot Already set to " + _0x1b9ec5 + " bots!_*");
          }
          if (!_0x46147e.isBotAdmin) {
            return await _0x46147e.reply("*_Uhh Please, Provide Admin Role First_*");
          }
          await groupdb.updateOne({
            'id': _0x46147e.chat
          }, {
            'antibot': _0x1b9ec5
          });
          return await _0x46147e.send("*_Antibot Succesfully set to " + _0x1b9ec5 + " Bot Users!_*");
        } else {
          return await _0x46147e.reply("*_Please provide valid instructions!_*\n*_Use warn/kick/off to enable/disable Antibot!_*");
        }
      }
    }
  } catch (_0x1d1278) {
    _0x46147e.error(_0x1d1278 + "\n\ncommand: antibot", _0x1d1278);
  }
});
smd({
  'pattern': 'disable',
  'desc': "disable cmds in Group.!",
  'category': "group",
  'filename': __filename
}, async (_0x530e13, _0x42cfd7) => {
  try {
    if (!_0x530e13.isGroup) {
      return _0x530e13.reply(tlang().group);
    }
    if (!_0x530e13.isAdmin && !_0x530e13.isCreator) {
      return _0x530e13.reply(tlang().admin);
    }
    let _0x3311ec = (await groupdb.findOne({
      'id': _0x530e13.chat
    })) || (await groupdb["new"]({
      'id': _0x530e13.chat
    }));
    let _0x3a2f64 = _0x42cfd7 ? _0x42cfd7.toLowerCase().trim() : false;
    let _0x5e7b80 = _0x3a2f64 ? _0x3a2f64.split(" ")[0x0] : '';
    if (!_0x5e7b80) {
      return await _0x530e13.send("*Provide cmd name to disable in group*\n*Ex " + prefix + "disable tag(to disabled 'tag' cmd)/info*");
    } else {
      if (_0x5e7b80.startsWith("info") || _0x5e7b80.startsWith("list") || _0x5e7b80.startsWith("cmds")) {
        return await _0x530e13.send(_0x3311ec.disablecmds === 'false' ? "*_Uhh Dear, Theres no cmd disabled in current group_*" : "*_Disable cmds :_* ```" + _0x3311ec.disablecmds.replace("false,", '') + "```");
      } else {
        if (_0x5e7b80.startsWith("enable") || _0x5e7b80.startsWith('disable') || _0x5e7b80.startsWith("bot")) {
          return await _0x530e13.reply("*_Uhh Dear, I can't disable that cmd_*");
        } else {
          if (_0x5e7b80) {
            const _0x37b169 = sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x2f6079 => _0x2f6079.pattern === _0x5e7b80) || sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x4b28ec => _0x4b28ec.alias && _0x4b28ec.alias.includes(_0x5e7b80));
            if (_0x37b169) {
              let _0xdeb361 = _0x37b169.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              let _0xfec1d6 = new RegExp("\\b" + _0xdeb361 + "\\b");
              if (_0xfec1d6.test(_0x3311ec.disablecmds)) {
                return await _0x530e13.send("*Uhh Dear, Provided cmd already in disable cmds*");
              }
              var _0x2d7d8d = _0x3311ec.disablecmds + ',' + _0x37b169.pattern;
              await groupdb.updateOne({
                'id': _0x530e13.chat
              }, {
                'disablecmds': _0x2d7d8d
              });
              let _0x590071 = _0x2d7d8d.replace('false,', '');
              return await _0x530e13.send("*_\"" + _0x5e7b80 + "\" Succesfully added in disable cmds_*" + (_0x590071 === '' ? '' : "\n*_Disable cmds :_* ```" + _0x590071 + "```"));
            } else {
              return await _0x530e13.reply("*_'" + _0x5e7b80 + "' is not a bot command, Provide valid command_*");
            }
          }
        }
      }
    }
  } catch (_0x12d0ad) {
    _0x530e13.error(_0x12d0ad + "\n\ncommand: enable", _0x12d0ad);
  }
});
smd({
  'pattern': "enable",
  'desc': "enable a cmd in Group.!",
  'category': "group",
  'filename': __filename
}, async (_0x4a62e8, _0x195e5c) => {
  try {
    if (!_0x4a62e8.isGroup) {
      return _0x4a62e8.reply(tlang().group);
    }
    if (!_0x4a62e8.isAdmin && !_0x4a62e8.isCreator) {
      return _0x4a62e8.reply(tlang().admin);
    }
    let _0x380b4d = (await groupdb.findOne({
      'id': _0x4a62e8.chat
    })) || (await groupdb["new"]({
      'id': _0x4a62e8.chat
    }));
    let _0x58e73 = _0x195e5c ? _0x195e5c.toLowerCase().trim() : false;
    let _0x8c05f5 = _0x58e73 ? _0x58e73.split(" ")[0x0] : '';
    let _0x57d5f1 = _0x8c05f5.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let _0x1f363c = new RegExp("\\b" + _0x57d5f1 + "\\b");
    if (!_0x8c05f5 || _0x8c05f5 === '') {
      return await _0x4a62e8.send("*Please provide disabled cmd name to enable it*\n*Ex " + prefix + "enable tag(if 'tag' cmd disabled)/all(reset disables)*");
    } else {
      if (_0x58e73.startsWith("all")) {
        await groupdb.updateOne({
          'id': _0x4a62e8.chat
        }, {
          'disablecmds': "false"
        });
        return await _0x4a62e8.send("*_All disable cmds succesfully enabled_*");
      } else {
        if (_0x1f363c.test(_0x380b4d.disablecmds) && _0x380b4d.disablecmds.includes(_0x8c05f5)) {
          let _0x5edefb = _0x380b4d.disablecmds.replace(_0x1f363c, '');
          await groupdb.updateOne({
            'id': _0x4a62e8.chat
          }, {
            'disablecmds': _0x5edefb
          });
          return await _0x4a62e8.send("*_\"" + _0x8c05f5.replace(',', '') + "\" Succesfully removed from disable cmds_*");
        } else {
          return await _0x4a62e8.send("_There's no cmd disabled with *" + _0x8c05f5.replace(',', '') + "* name");
        }
      }
    }
  } catch (_0x981d38) {
    _0x4a62e8.error(_0x981d38 + "\n\ncommand: disable", _0x981d38);
  }
});
smd({
  'pattern': "antifake",
  'desc': "𝗗𝗲𝘁𝗲𝗰𝘁𝘀 𝗽𝗿𝗼𝗺𝗼𝘁𝗲/𝗱𝗲𝗺𝗼𝘁𝗲 𝗮𝗻𝗱 𝘀𝗲𝗻𝗱𝘀 𝗮𝗹𝗲𝗿𝘁. ",
  'category': "group",
  'filename': __filename
}, async (_0x300c45, _0x375a5a) => {
  try {
    if (!_0x300c45.isGroup) {
      return _0x300c45.reply(tlang().group);
    }
    if (!_0x300c45.isAdmin && !_0x300c45.isCreator) {
      return _0x300c45.reply(tlang().admin);
    }
    let _0x139159 = (await groupdb.findOne({
      'id': _0x300c45.chat
    })) || (await groupdb["new"]({
      'id': _0x300c45.chat
    }));
    let _0x3d114e = _0x375a5a ? _0x375a5a.toLowerCase().trim() : '';
    if (_0x3d114e.startsWith('off') || _0x3d114e.startsWith("deact") || _0x3d114e.startsWith('disable')) {
      if (_0x139159.antifake == "false") {
        return await _0x300c45.send("*Anti_Fake Already Disabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x300c45.chat
      }, {
        'antifake': "false"
      });
      return await _0x300c45.send("*Anti_Fake Disable Succesfully!*");
    } else {
      if (!_0x375a5a) {
        return await _0x300c45.send("*_Antifake " + (_0x139159.antifake === "false" ? "Not set to any" : "set to \"" + _0x139159.antifake + "\"") + " Country Code!_*\n *Provide Country code to Update Antifake Status*\n*Eg: _.antifake 92_*");
      }
    }
    let _0x45375b = _0x375a5a ? _0x375a5a.split(',').map(_0x52ddc1 => parseInt(_0x52ddc1)).filter(_0x37016e => !isNaN(_0x37016e)).join(',') : false;
    return !_0x375a5a || !_0x45375b ? await _0x300c45.send("*_Please provide a country code First_*\n *_Only numbers to join this group._*\n*_eg: " + prefix + "antifake 92_*") : _0x45375b ? (await groupdb.updateOne({
      'id': _0x300c45.chat
    }, {
      'antifake': '' + _0x45375b
    }), await _0x300c45.send("*Anti_Fake Succesfully set to \"" + _0x45375b + "\"!*\n*_Now People Joined Group Who's Number Start With " + _0x45375b + '_*')) : await _0x300c45.send("*_Please provide a Valid country code First_*\n *_Only numbers to join this group._*\n*_eg: " + prefix + "antifake 92_*");
  } catch (_0x53c61b) {
    _0x300c45.error(_0x53c61b + "\n\ncommand: antifake", _0x53c61b);
  }
});
smd({
  'pattern': "antidemote",
  'desc': "Detects Promote and Automaticaly demote promoted person.",
  'category': "group",
  'filename': __filename
}, async (_0x310b05, _0x46f989) => {
  try {
    if (!_0x310b05.isGroup) {
      return _0x310b05.reply(tlang().group);
    }
    if (!_0x310b05.isAdmin && !_0x310b05.isCreator) {
      return _0x310b05.reply(tlang().admin);
    }
    let _0x578a7f = (await groupdb.findOne({
      'id': _0x310b05.chat
    })) || (await groupdb['new']({
      'id': _0x310b05.chat
    }));
    let _0x2b8f95 = _0x46f989 ? _0x46f989.toLowerCase().trim() : '';
    if (_0x2b8f95.startsWith('on') || _0x2b8f95.startsWith("act") || _0x2b8f95.startsWith("enable")) {
      if (_0x578a7f.antidemote == "true") {
        return await _0x310b05.send("*Anti_Demote Already Enabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x310b05.chat
      }, {
        'antidemote': 'true'
      });
      return await _0x310b05.send("*Anti_Demote Enable Succesfully! _No One Demote Here Now_.*");
    } else {
      if (_0x2b8f95.startsWith("off") || _0x2b8f95.startsWith("deact") || _0x2b8f95.startsWith('disable')) {
        if (_0x578a7f.antidemote == "false") {
          return await _0x310b05.send("*Anti_Demote Already Disabled In Current Chat!*");
        }
        await groupdb.updateOne({
          'id': _0x310b05.chat
        }, {
          'antidemote': "false"
        });
        return await _0x310b05.send("*Anti_Demote Disable Succesfully!*");
      } else {
        return await _0x310b05.reply("*Uhh Dear, Please Toggle between \"On\" And \"Off\".* \n*_To Enable & Disable Stop Demoting Peoples!_*");
      }
    }
  } catch (_0x23776f) {
    _0x310b05.error(_0x23776f + "\n\ncommand: antidemote", _0x23776f);
  }
});
smd({
  'pattern': "antipromote",
  'desc': "Detects Promote and Automaticaly demote promoted person.",
  'category': "group",
  'filename': __filename
}, async (_0x1b0260, _0x2cef38) => {
  try {
    if (!_0x1b0260.isGroup) {
      return _0x1b0260.reply(tlang().group);
    }
    if (!_0x1b0260.isAdmin && !_0x1b0260.isCreator) {
      return _0x1b0260.reply(tlang().admin);
    }
    let _0x1e8af9 = (await groupdb.findOne({
      'id': _0x1b0260.chat
    })) || (await groupdb["new"]({
      'id': _0x1b0260.chat
    }));
    let _0x124159 = _0x2cef38 ? _0x2cef38.toLowerCase().trim() : '';
    if (_0x124159.startsWith('on') || _0x124159.startsWith("act") || _0x124159.startsWith("enable")) {
      if (_0x1e8af9.antipromote == 'true') {
        return await _0x1b0260.send("*Anti_Promote Already Enabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x1b0260.chat
      }, {
        'antipromote': "true"
      });
      return await _0x1b0260.send("*Anti_Promote Enable Succesfully! _No One Promote Here Now_.*");
    } else {
      if (_0x124159.startsWith("off") || _0x124159.startsWith("deact") || _0x124159.startsWith('disable')) {
        if (_0x1e8af9.antipromote == "false") {
          return await _0x1b0260.send("*Anti_Promote Already Disabled In Current Chat!*");
        }
        await groupdb.updateOne({
          'id': _0x1b0260.chat
        }, {
          'antipromote': "false"
        });
        return await _0x1b0260.send("*Anti_Promote Disable Succesfully!*");
      } else {
        return await _0x1b0260.reply("*Uhh Dear, Please Toggle between \"On\" And \"Off\".* \n*_To Stop Promoting Peoples in Chat_*");
      }
    }
  } catch (_0x4b3e22) {
    _0x1b0260.error(_0x4b3e22 + "\n\ncommand: antipromote", _0x4b3e22);
  }
});
smd({
  'pattern': "pdm",
  'desc': "Detect Promote/Demote Users And Send Alerts in Chat ",
  'category': "group",
  'filename': __filename
}, async (_0x50cc84, _0x57578c) => {
  try {
    if (!_0x50cc84.isGroup) {
      return _0x50cc84.reply(tlang().group);
    }
    if (!_0x50cc84.isAdmin && !_0x50cc84.isCreator) {
      return _0x50cc84.reply(tlang().admin);
    }
    let _0x217dfa = (await groupdb.findOne({
      'id': _0x50cc84.chat
    })) || (await groupdb["new"]({
      'id': _0x50cc84.chat
    }));
    let _0x8d66dc = _0x57578c ? _0x57578c.toLowerCase().trim() : '';
    if (_0x8d66dc.startsWith('on') || _0x8d66dc.startsWith('act') || _0x8d66dc.startsWith("enable")) {
      if (_0x217dfa.pdm == "true") {
        return await _0x50cc84.send("*Promote/Demote Alerts Already Enabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x50cc84.chat
      }, {
        'pdm': "true"
      });
      return await _0x50cc84.send("*Promote/Demote Alerts Enable Succesfully!*");
    } else {
      if (_0x8d66dc.startsWith("off") || _0x8d66dc.startsWith('deact') || _0x8d66dc.startsWith("disable")) {
        if (_0x217dfa.pdm == 'false') {
          return await _0x50cc84.send("*Promote/Demote Alerts Already Disabled In Current Chat!*");
        }
        await groupdb.updateOne({
          'id': _0x50cc84.chat
        }, {
          'pdm': "false"
        });
        return await _0x50cc84.send("*Promote/Demote Alerts Disable Succesfully!*");
      } else {
        return await _0x50cc84.reply("*Uhh Dear, Please use between \"On\" And \"Off\".* \n*_To get And Stop Promote/Demote Alerts_*");
      }
    }
  } catch (_0x13fa2a) {
    _0x50cc84.error(_0x13fa2a + "\n\ncommand: pdm", _0x13fa2a);
  }
});
smd({
  'pattern': "amute",
  'desc': "sets auto mute time in group.",
  'category': "moderation"
}, async (_0x33da33, _0x513ed0) => {
  try {
    if (!_0x33da33.isGroup) {
      return _0x33da33.reply(tlang().group);
    }
    if (!_0x33da33.isAdmin && !_0x33da33.isCreator) {
      return _0x33da33.reply(tlang().admin);
    }
    let _0x2c531a = (await groupdb.findOne({
      'id': _0x33da33.chat
    })) || (await groupdb['new']({
      'id': _0x33da33.chat
    }));
    if (!_0x513ed0) {
      return await _0x33da33.reply("*Auto_Mute *" + (_0x2c531a.mute === "false" ? "disable" : "enabled") + " for current group*" + (_0x2c531a.mute !== 'false' ? "\n *Auto mute status set at : " + _0x2c531a.mute + "* " : ''));
    }
    let [_0xdb5399, _0x1396dd] = _0x513ed0.split(':').map(Number);
    if (isNaN(_0xdb5399) || isNaN(_0x1396dd) || _0xdb5399 < 0x0 || _0xdb5399 >= 0x18 || _0x1396dd < 0x0 || _0x1396dd >= 0x3c) {
      return _0x33da33.reply("Please provide correct form.\nEg: " + prefix + "amute 22:00");
    }
    let _0x1ba12e = _0xdb5399.toString().padStart(0x2, '0') + ':' + _0x1396dd.toString().padStart(0x2, '0');
    await groupdb.updateOne({
      'id': _0x33da33.chat
    }, {
      'mute': _0x1ba12e
    });
    return _0x33da33.reply("*_Successfully done, Group auto mute at " + _0x1ba12e + '_*');
  } catch (_0x3f803a) {
    _0x33da33.error(_0x3f803a + "\n\ncommand: amute", _0x3f803a);
  }
});
smd({
  'pattern': 'aunmute',
  'desc': "sets unmute time in group.",
  'category': "moderation"
}, async (_0x1c4c2a, _0x8f6e2f) => {
  try {
    if (!_0x1c4c2a.isGroup) {
      return _0x1c4c2a.reply(tlang().group);
    }
    if (!_0x1c4c2a.isAdmin && !_0x1c4c2a.isCreator) {
      return _0x1c4c2a.reply(tlang().admin);
    }
    let _0x145896 = (await groupdb.findOne({
      'id': _0x1c4c2a.chat
    })) || (await groupdb['new']({
      'id': _0x1c4c2a.chat
    }));
    if (!_0x8f6e2f) {
      return await _0x1c4c2a.reply("*Auto_Unmute *" + (_0x145896.unmute === "false" ? "disable" : "enabled") + " for current group*" + (_0x145896.unmute !== "false" ? "\n *Auto unmute status set at : " + _0x145896.unmute + "* " : ''));
    }
    let [_0x24ed39, _0x2d3d7d] = _0x8f6e2f.split(':').map(Number);
    if (isNaN(_0x24ed39) || isNaN(_0x2d3d7d) || _0x24ed39 < 0x0 || _0x24ed39 >= 0x18 || _0x2d3d7d < 0x0 || _0x2d3d7d >= 0x3c) {
      return _0x1c4c2a.reply("Please provide correct form.\nEg: " + prefix + "aunmute 22:00");
    }
    let _0x4d8484 = _0x24ed39.toString().padStart(0x2, '0') + ':' + _0x2d3d7d.toString().padStart(0x2, '0');
    await groupdb.updateOne({
      'id': _0x1c4c2a.chat
    }, {
      'unmute': _0x4d8484
    });
    return _0x1c4c2a.reply("*_Successfully done, Group auto unmute at " + _0x4d8484 + '_*');
  } catch (_0x29ae60) {
    _0x1c4c2a.error(_0x29ae60 + "\n\ncommand: aunmute", _0x29ae60);
  }
});
smd({
  'pattern': "dunmute",
  'desc': "Delete unmute from group.",
  'category': "moderation"
}, async _0x4b5c95 => {
  try {
    if (!_0x4b5c95.isGroup) {
      return _0x4b5c95.reply(tlang().group);
    }
    if (!_0x4b5c95.isAdmin && !_0x4b5c95.isCreator) {
      return _0x4b5c95.reply(tlang().admin);
    }
    let _0x3cfce1 = await groupdb.findOne({
      'id': _0x4b5c95.chat
    });
    if (!_0x3cfce1 || !_0x3cfce1.unmute || _0x3cfce1.unmute == "false") {
      return await _0x4b5c95.reply("*There's no auto unmute set in group.*");
    }
    await groupdb.updateOne({
      'id': _0x4b5c95.chat
    }, {
      'unmute': "false"
    });
    return await _0x4b5c95.reply("*Auto unmute deleted successfully.*");
  } catch (_0x23f5c7) {
    _0x4b5c95.error(_0x23f5c7 + "\n\ncommand: dunmute", _0x23f5c7);
  }
});
smd({
  'pattern': "dmute",
  'desc': "Delete mute from group.",
  'category': "moderation"
}, async (_0x4be4cd, _0x19ae77) => {
  try {
    if (!_0x4be4cd.isGroup) {
      return _0x4be4cd.reply(tlang().group);
    }
    if (!_0x4be4cd.isAdmin && !_0x4be4cd.isCreator) {
      return _0x4be4cd.reply(tlang().admin);
    }
    let _0x47912b = await groupdb.findOne({
      'id': _0x4be4cd.chat
    });
    if (!_0x47912b || !_0x47912b.mute || _0x47912b.mute == "false") {
      return await _0x4be4cd.reply("*There's no auto mute set in group.*");
    }
    await groupdb.updateOne({
      'id': _0x4be4cd.chat
    }, {
      'mute': "false"
    });
    return await _0x4be4cd.reply("*Auto mute deleted successfully.*");
  } catch (_0x175833) {
    _0x4be4cd.error(_0x175833 + "\n\ncommand: dmute", _0x175833);
  }
});
async function haveEqualMembers(_0x501b2b, _0x45cedc) {
  if (_0x501b2b.length === 0x0 || _0x45cedc.length === 0x0) {
    return false;
  }
  const _0x473612 = _0x501b2b.filter(_0x2e9cd0 => _0x45cedc.includes(_0x2e9cd0));
  const _0x506cbe = _0x473612.length / _0x501b2b.length * 0x64;
  return _0x506cbe >= 0x50;
}
smd({
  'pattern': "antiword",
  'desc': "Detects words from chat,and delete/warn senders.",
  'category': "group",
  'filename': __filename,
  'use': "< action | words >"
}, async (_0x572616, _0x3f0ccb, {
  cmdName: _0x5dd072
}) => {
  try {
    if (!_0x572616.isGroup) {
      return _0x572616.reply(tlang().group);
    }
    if (!_0x572616.isAdmin && !_0x572616.isCreator) {
      return _0x572616.reply(tlang().admin);
    }
    let _0x4c7e8d = (await groupdb.findOne({
      'id': _0x572616.chat
    })) || (await groupdb["new"]({
      'id': _0x572616.chat,
      'antiword': {
        'status': "false",
        'words': ''
      }
    }));
    let _0x22b3d5 = _0x3f0ccb ? _0x3f0ccb.toLowerCase().trim() : false;
    let _0x12b781 = _0x4c7e8d.antiword;
    let _0x53b1c0 = "*Antiword Currently *" + (_0x12b781.status !== "false" ? "enabled" : "disabled") + "!!!* ```\n  STATUS: " + (_0x12b781.status ? _0x12b781.status : "--Empty Yet--") + " \n  WORDS: " + (_0x12b781.words ? _0x12b781.words.replace(/,/gi, " -- ") : "--Empty Yet--") + "```\n\n*Available Cmds:* ```\n  " + (prefix + _0x5dd072) + " off \n  " + (prefix + _0x5dd072) + " reset\n  " + (prefix + _0x5dd072) + " warn | bad,words\n  " + (prefix + _0x5dd072) + " delete | hot,badas\n``` \n\n\n " + Config.caption;
    if (!_0x22b3d5 || !_0x3f0ccb) {
      return await _0x572616.send(_0x53b1c0);
    }
    let _0x3abb7b = _0x22b3d5.split('|')[0x1] || '';
    let _0x4d2d87 = _0x22b3d5.startsWith('on') || _0x22b3d5.startsWith("act") || _0x22b3d5.startsWith("enable") || _0x22b3d5.startsWith("del") ? "delete" : _0x22b3d5.startsWith('warn') ? "warn" : _0x22b3d5.startsWith("off") || _0x22b3d5.startsWith("deact") || _0x22b3d5.startsWith('disable') ? "false" : _0x22b3d5.startsWith("reset") ? "reset" : '';
    _0x4d2d87 = !_0x4d2d87 && _0x3abb7b && _0x12b781.status !== "false" ? _0x12b781.status : _0x4d2d87;
    if (_0x4d2d87 === 'reset') {
      await groupdb.updateOne({
        'id': _0x572616.chat
      }, {
        'antiword': {}
      });
      return await _0x572616.send("*_Anti_Word status cleard!_*");
    } else {
      if (_0x4d2d87 === 'delete' || _0x4d2d87 === "warn") {
        if (_0x12b781.status == _0x4d2d87 && !_0x3abb7b) {
          return await _0x572616.send("*Please provide badWords, like " + (prefix + _0x5dd072) + " " + _0x4d2d87 + " | bad,words");
        }
        _0x3abb7b = _0x3abb7b ? _0x3abb7b : _0x12b781.words;
        await groupdb.updateOne({
          'id': _0x572616.chat
        }, {
          'antiword': {
            'status': _0x4d2d87,
            'words': _0x3abb7b
          }
        });
        return await _0x572616.send("*_Anti_Word succesfully set to '" + _0x4d2d87 + "' badward!_*\n*Antiwords are:```" + (_0x3abb7b ? _0x3abb7b.replace(/,/gi, " | ") : "--Empty Yet--") + "``` *");
      } else {
        if (_0x4d2d87 === 'false') {
          if (_0x12b781.status === _0x4d2d87) {
            return await _0x572616.send("*Anti_Word Already Disabled In Current Chat!*");
          }
          await groupdb.updateOne({
            'id': _0x572616.chat
          }, {
            'antiword': {
              'status': 'false',
              'words': _0x12b781.words
            }
          });
          return await _0x572616.send("*Anti_Word Disable Succesfully!*");
        } else {
          return await _0x572616.reply("*Uhh dear, Please follow instructions!!*\n\n" + _0x53b1c0);
        }
      }
    }
  } catch (_0x4bb14d) {
    _0x572616.error(_0x4bb14d + "\n\ncommand: antiword", _0x4bb14d);
  }
});
let bott = false;
let chatbotCount = 0x0;
smd({
  'on': "main"
}, async (_0x6d8e51, _0x50c72c, {
  botNumber: _0x3b6137,
  isCreator: _0x1c6ea8,
  budy: _0x2ffe19,
  body: _0x2b2c63,
  icmd: _0x21caa9
}) => {
  try {
    if (Config.MsgsInLog === "true") {
      console.log('' + (_0x6d8e51.isGroup ? "[MESSAGE IN GROUP] From => " + _0x6d8e51.metadata.subject + "\n[USER]:" : "[MESSAGE IN PRIVATE] From =>") + (" " + _0x6d8e51.senderName + " " + _0x6d8e51.senderNum + "\n[" + _0x6d8e51.mtype.toUpperCase() + "]: " + _0x6d8e51.body + "\n============== [SMD] ================="));
    }
    let _0x7cfb7a = (await groupdb.findOne({
      'id': _0x6d8e51.chat
    })) || false;
    let _0x1f6dc6 = false;
    try {
      if (!global.AstroOfficial && global.AstroOfficial !== "yes") {
        return;
      }
      if (_0x7cfb7a && _0x7cfb7a.antitag == "true" && !_0x6d8e51.checkBot() && _0x6d8e51.mtype !== "reactionMessage" && _0x7cfb7a.botenable == "true") {
        const _0x11f26c = await haveEqualMembers(_0x6d8e51.metadata.participants.map(_0x3851bc => _0x3851bc.id), _0x6d8e51.mentionedJid);
        if (_0x11f26c && _0x6d8e51.isBotAdmin) {
          let _0x4bf85d = {
            'reason': "tagging all members!",
            'chat': _0x6d8e51.metadata?.["subject"] || "GROUP",
            'warnedby': tlang().title,
            'date': _0x6d8e51.date
          };
          _0x1f6dc6 = await warn.addwarn(_0x6d8e51.sender, _0x6d8e51.chat, _0x4bf85d);
          await _0x6d8e51.reply("*_[TAG DETECTED] Hey @" + _0x6d8e51.senderNum + " warning!!_*\n*_Tagging all members is not allowed!_*", {
            'mentions': [_0x6d8e51.sender]
          });
          await _0x6d8e51["delete"]();
        } else if (_0x11f26c && !_0x6d8e51.isBotAdmin) {
          await _0x6d8e51.reply("*_[TAGALL DETECTED] Can't do anything, without getting admin role!_*", {
            'mentions': [_0x6d8e51.sender]
          });
        }
      }
      if (_0x7cfb7a && _0x6d8e51.isGroup && !_0x6d8e51.isAdmin && !_0x1c6ea8 && _0x6d8e51.mtype !== "reactionMessage" && _0x7cfb7a.botenable == "true") {
        if (_0x7cfb7a.antibot && _0x7cfb7a.antibot !== "false" && _0x6d8e51.isBot && !_0x6d8e51.checkBot(_0x6d8e51.sender)) {
          if (_0x6d8e51.isBotAdmin) {
            var _0x19fe2e = "*_Bot user not allowed, please make it private!_*";
            if (_0x7cfb7a.antibot === "warn") {
              let _0x7011cc = {
                'reason': "Bots not allowed!",
                'chat': _0x6d8e51.metadata?.["subject"] || "GROUP",
                'date': _0x6d8e51.date
              };
              _0x1f6dc6 = _0x1f6dc6 ? _0x1f6dc6 : await warn.addwarn(_0x6d8e51.sender, _0x6d8e51.chat, _0x7011cc);
              if (_0x1f6dc6.status) {
                _0x19fe2e = "*_Hey @" + _0x6d8e51.senderNum + " warning, Due To Antibot!_*";
              }
            } else {
              if (_0x7cfb7a.antibot === "kick") {
                try {
                  sleep(0x3e8);
                  await _0x6d8e51.bot.groupParticipantsUpdate(_0x6d8e51.chat, [_0x6d8e51.sender], "remove");
                  _0x19fe2e = "*_User @" + _0x6d8e51.senderNum + " kick Due To Antibot!_*";
                } catch {}
              }
            }
            await _0x6d8e51["delete"]();
            await _0x6d8e51.send(_0x19fe2e, {
              'mentions': [_0x6d8e51.sender]
            });
          } else if (!_0x6d8e51.isBotAdmin && _0x6d8e51.isBot) {
            await _0x6d8e51.reply("*_Uhh Please, Provide Admin Role To Kick Other Bot_*\n*_Or Disable Antibot (On/Off) In Current Group_*");
          }
        }
        if (_0x7cfb7a.onlyadmin && _0x7cfb7a.onlyadmin === "true" && AstroOfficial == "yes") {
          var _0x19fe2e = '';
          if (_0x6d8e51.isBotAdmin) {
            let _0x3d11c0 = {
              'reason': "Only Admin can Chat!",
              'chat': _0x6d8e51.metadata?.["subject"] || "PRIVATE",
              'warnedby': tlang().title,
              'date': _0x6d8e51.date
            };
            _0x1f6dc6 = _0x1f6dc6 ? _0x1f6dc6 : await warn.addwarn(_0x6d8e51.sender, _0x6d8e51.chat, _0x3d11c0);
            if (_0x1f6dc6.status) {
              _0x19fe2e = "*Warns you for chat here!*\n";
            }
            await _0x6d8e51["delete"]();
            sleep(0x5dc);
            await _0x6d8e51.send("*Hey @" + _0x6d8e51.senderNum + "* " + _0x19fe2e + "*Deleteing message,while onlyadmin activated!!* ", {
              'mentions': [_0x6d8e51.sender]
            });
          } else {
            await _0x6d8e51.send("*_Provide admin role to kick Message Senders_*\n*Or _Disable onlyadmin(on/off) in currentchat_*");
          }
        }
        if (_0x7cfb7a.antilink && _0x7cfb7a.antilink !== 'false' && AstroOfficial === 'yes') {
          const _0x51c8c9 = Config.antilink_values && Config.antilink_values !== "all" ? Config.antilink_values.split(',').filter(_0x2bfd01 => _0x2bfd01.trim() !== '') : ['https://', "chat.whatsapp.com", "fb.com"];
          let _0x4ecff4 = _0x2b2c63.toLowerCase();
          if (_0x51c8c9.some(_0x1c7cb8 => _0x4ecff4.includes(_0x1c7cb8))) {
            if (!_0x6d8e51.isBotAdmin) {
              let _0x27ed7e = " *[LINK DETECTED]*\nUser @" + _0x6d8e51.sender.split('@')[0x0] + " detected sending a link.\nPromote " + Config.botname + " as admin to " + (_0x7cfb7a.antilink === "kick" ? "kick \nlink senders." : "delete \nlinks from this Chat") + " \n";
              await _0x6d8e51.send(_0x27ed7e, {
                'mentions': [_0x6d8e51.sender]
              });
            } else {
              if (_0x7cfb7a.antilink === "delete") {
                await _0x6d8e51.send("*_Link Detected.. Deletion Done!_*");
                await _0x6d8e51["delete"]();
              } else {
                if (_0x7cfb7a.antilink === "warn" || _0x7cfb7a.antilink === 'true') {
                  let _0x321ebe = {
                    'reason': "links not allowed!",
                    'chat': _0x6d8e51.metadata?.["subject"] || "PRIVATE",
                    'warnedby': tlang().title,
                    'date': _0x6d8e51.date
                  };
                  _0x1f6dc6 = _0x1f6dc6 ? _0x1f6dc6 : await warn.addwarn(_0x6d8e51.sender, _0x6d8e51.chat, _0x321ebe);
                  var _0x19fe2e = _0x1f6dc6.status ? "*_[LINK DETECTED] Hey @" + _0x6d8e51.senderNum + " warning!!_*\n*_links not allowed in current group!_*" : "*_[LINK DETECTED]!_*";
                  await _0x6d8e51.reply(_0x19fe2e, {
                    'mentions': [_0x6d8e51.sender]
                  });
                  await _0x6d8e51['delete']();
                } else {
                  if (_0x7cfb7a.antilink === 'kick') {
                    await _0x6d8e51.send("*_Link Detected!!_*");
                    try {
                      await _0x6d8e51["delete"]();
                      await sleep(0x5dc);
                      await _0x6d8e51.bot.groupParticipantsUpdate(_0x6d8e51.chat, [_0x6d8e51.sender], "remove");
                    } catch {
                      await _0x6d8e51.send("*Link Detected*\n" + tlang().botAdmin);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } catch (_0x2d4246) {
      console.log("Error From Antilinks : ", _0x2d4246);
    }
    var _0x317be7 = _0x7cfb7a?.["antiword"] || {
      'status': "false"
    };
    if (_0x50c72c.length > 0x1 && !_0x6d8e51.isBot && _0x317be7 && _0x317be7.status !== 'false' && _0x317be7.words) {
      var _0x29dd65 = _0x317be7.words.split(',') || [];
      let _0x48225f = false;
      _0x29dd65.map(async _0x98af14 => {
        if (_0x6d8e51.isAdmin || !global.AstroOfficial || global.AstroOfficial != "yes") {
          return;
        }
        let _0x5d700b = new RegExp("\\b" + _0x98af14?.["trim"]() + "\\b", 'ig');
        let _0xb959b9 = _0x2ffe19.toLowerCase();
        if (!_0x48225f && _0x98af14 && _0x5d700b.test(_0xb959b9)) {
          _0x48225f = true;
          await sleep(0x1f4);
          try {
            var _0x21dab6 = '';
            if (_0x317be7.status === "warn") {
              let _0x1bb0ba = {
                'reason': "For using Bad Word",
                'chat': _0x6d8e51.metadata?.["subject"] || "PRIVATE",
                'warnedby': tlang().title,
                'date': _0x6d8e51.date
              };
              _0x1f6dc6 = _0x1f6dc6 ? _0x1f6dc6 : await warn.addwarn(_0x6d8e51.sender, _0x6d8e51.chat, _0x1bb0ba);
              if (_0x1f6dc6.status) {
                _0x21dab6 = "\n*Warns you for using badWord!!*\n";
              }
            }
            if (_0x6d8e51.isBotAdmin) {
              await _0x6d8e51.send("*[BAD WORD DETECTED] Hey @" + _0x6d8e51.senderNum + "* " + _0x21dab6 + "*Deleting your message from chat!*\n", {
                'mentions': [_0x6d8e51.sender]
              }, "ANITA", _0x6d8e51);
              await _0x6d8e51["delete"]();
            } else {
              await _0x6d8e51.reply("*_[BAD WORD DETECTED] provide admin to take action!_*", {
                'mentions': [_0x6d8e51.sender]
              });
            }
          } catch (_0x2b9d46) {
            console.log("Error From Bad Words : ", _0x2b9d46);
          }
        }
      });
    }
    if (_0x1f6dc6) {
      let _0x3333c0 = parseInt(Config.warncount) || 0x3;
      if (_0x1f6dc6.warning >= _0x3333c0) {
        if (_0x6d8e51.isGroup) {
          if (_0x6d8e51.isBotAdmin) {
            await _0x6d8e51.send("*_Hey @" + _0x6d8e51.senderNum + " Kicking you from group!_*\n*_Because Your warn limit exceed!_*", {
              'mentions': [_0x6d8e51.sender]
            });
            await _0x6d8e51.bot.groupParticipantsUpdate(_0x6d8e51.chat, [_0x6d8e51.sender], "remove");
          }
        } else {
          await _0x6d8e51.send("*_Hey @" + _0x6d8e51.senderNum + " Blocking you!_*\n*_Because Your warn limit exceed!_*", {
            'mentions': [_0x6d8e51.sender]
          });
          await _0x6d8e51.bot.updateBlockStatus(_0x6d8e51.sender, "block");
        }
      }
    }
    try {
      if (!global.AstroOfficial || _0x6d8e51.mtype == 'reactionMessage') {
        return;
      }
      let _0x4afe72 = (await groupdb.findOne({
        'id': _0x6d8e51.chat
      })) || {
        'chatbot': 'false'
      };
      if (!bott || chatbotCount >= 0xa) {
        bott = (await bot_.findOne({
          'id': "bot_" + _0x6d8e51.user
        })) || {
          'chatbot': "false"
        };
      } else {
        chatbotCount++;
      }
      let _0x59947b = bott && bott.chatbot && bott.chatbot == "true" ? "true" : _0x4afe72.chatbot || "false";
      if (_0x59947b === "true" && !_0x21caa9 && !_0x6d8e51.isBot && _0x6d8e51.text) {
        let _0xcfb7ba = !_0x6d8e51.isGroup ? _0x6d8e51.user : _0x6d8e51.quoted ? _0x6d8e51.quoted.sender : _0x6d8e51.mentionedJid[0x0] || false;
        if (_0x6d8e51.isGroup && _0xcfb7ba && !_0x6d8e51.checkBot(_0xcfb7ba)) {
          return;
        }
        let {
          data: _0x40bb27
        } = await axios.get("http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[" + _0x6d8e51.senderNum + "]&msg=[" + _0x2ffe19 + ']');
        if (_0x40bb27 && _0x40bb27.cnt) {
          _0x6d8e51.send(_0x40bb27.cnt, {}, "ANITA", _0x6d8e51);
        } else {
          '';
        }
      }
    } catch (_0x51d800) {
      console.log("Error From ChatBot : ", _0x51d800);
    }
  } catch (_0x37c102) {
    console.log("Group Settings error in command.main() \n", _0x37c102);
  }
});
let users = {};
let user_warns = {};
smd({
  'group': "add"
}, async (_0x527af7, {
  Void: _0x179e52
}) => {
  try {
    let _0x903d62 = await groupdb.findOne({
      'id': _0x527af7.chat
    });
    if (!_0x903d62 || !_0x527af7.isGroup || _0x903d62.botenable !== "true" || _0x527af7.blockJid || _0x527af7.fromMe) {
      return;
    }
    let _0x5c0762 = _0x903d62 && _0x903d62.welcome ? _0x903d62.welcome : "false";
    let _0x21d229 = _0x903d62 && _0x903d62.antifake ? _0x903d62.antifake.toLowerCase() : "false";
    let _0x5dc22f = _0x21d229.split(',');
    const _0x493128 = _0x5dc22f.some(_0x1957ff => _0x527af7.user.startsWith(_0x1957ff));
    if (_0x21d229 !== "false" && !_0x493128 && !_0x527af7.isCreator) {
      if (_0x527af7.isBotAdmin) {
        try {
          await _0x527af7.kick();
          return await sendWelcome(_0x527af7, "*[ANTIFAKE START] @User kicked automaticaly!* @pp");
        } catch (_0x3ac550) {
          await _0x527af7.error(" Can't kick user in antifake\n❲❒❳ GROUP: " + _0x527af7.metadata.subject + "\n❲❒❳ ERROR: " + _0x3ac550 + "\n", _0x3ac550, false);
        }
      } else {
        await _0x527af7.send("*[ANTI_FAKE ERROR] Need admin role to kick fake users!!*");
      }
    } else if (_0x5c0762 === "true") {
      await sendWelcome(_0x527af7, _0x903d62.welcometext);
    }
  } catch (_0x53a3f5) {
    console.log("Error From Welcome : ", _0x53a3f5);
  }
});
smd({
  'group': "remove"
}, async (_0xce87bf, {
  Void: _0xe0325c
}) => {
  try {
    let _0x2369cf = (await groupdb.findOne({
      'id': _0xce87bf.chat
    })) || false;
    if (!_0xce87bf || !_0x2369cf || !_0xce87bf.isGroup || _0x2369cf.botenable !== 'true' || _0xce87bf.blockJid || _0xce87bf.fromMe) {
      return;
    }
    let _0x3de4e9 = _0x2369cf && _0x2369cf.goodbye ? _0x2369cf.goodbye : "false";
    if (_0x3de4e9 === "true") {
      await sendWelcome(_0xce87bf, _0x2369cf.goodbyetext);
    }
  } catch (_0x52ff9e) {
    console.log("Error From Goodbye : ", _0x52ff9e);
  }
});
smd({
  'group': "promote"
}, async (_0x39c487, {
  Void: _0x1d17c7
}) => {
  try {
    let _0x4f7a68 = (await groupdb.findOne({
      'id': _0x39c487.chat
    })) || false;
    if (!_0x4f7a68 || !_0x39c487.isGroup || _0x4f7a68.botenable !== "true" || _0x39c487.blockJid) {
      return;
    }
    if (!user_warns[_0x39c487.sender]) {
      user_warns[_0x39c487.sender] = {
        [_0x39c487.action]: 0x1
      };
    } else {
      user_warns[_0x39c487.sender][_0x39c487.action]++;
    }
    let _0x444253;
    if (_0x4f7a68.antipromote == "true" && !_0x39c487.isCreator) {
      _0x444253 = !_0x39c487.isBotAdmin;
      if (users[_0x39c487.sender] && users[_0x39c487.sender].previous_Action === 'antidemote') {
        delete users[_0x39c487.sender];
        return;
      }
      if (_0x39c487.isBotAdmin) {
        try {
          await _0x39c487.demote();
          users[_0x39c487.sender] = {
            'previous_Action': "antipromote"
          };
          if (user_warns[_0x39c487.sender][_0x39c487.action] > 0x2) {
            return;
          }
          return await sendWelcome(_0x39c487, "*[ANTIPROMOTE START] @User Demoted Automatically!* @pp ");
        } catch (_0x4343d6) {
          await _0x39c487.error(" Can't demote user in antipromote\n❲❒❳ GROUP: " + _0x39c487.metadata.subject + "\n❲❒❳ ERROR: " + _0x4343d6 + "\n", _0x4343d6, false);
        }
      }
    }
    if (_0x4f7a68.pdm == "true" || _0x444253) {
      if (user_warns[_0x39c487.sender][_0x39c487.action] > 0x2) {
        return;
      }
      var _0x1a7639 = " *[SOMEONE PROMOTE HERE]*\n" + (_0x444253 ? "*Note : _I'm Not Admin Here, So I Can't Demote Someone while Anti_Promote Activated_*" : '') + "\n           \n  ❲❒❳ *User:* _@user_\n❲❒❳ *Position:* _Member -> Admin_ @pp\n  ❲❒❳ *Total Members:* _@count_Members_\n❲❒❳ *Group Name:* @gname\n\n\n" + Config.caption;
      return await sendWelcome(_0x39c487, _0x1a7639);
    }
  } catch (_0x28aebe) {
    console.log("Error From Promote : ", _0x28aebe);
  }
});
smd({
  'group': 'demote'
}, async (_0x1b92cc, {
  Void: _0xb8bb73
}) => {
  try {
    let _0x2f7dfe = (await groupdb.findOne({
      'id': _0x1b92cc.chat
    })) || false;
    if (!_0x2f7dfe || !_0x1b92cc.isGroup || _0x2f7dfe.botenable !== "true" || _0x1b92cc.blockJid) {
      return;
    }
    if (!user_warns[_0x1b92cc.sender]) {
      user_warns[_0x1b92cc.sender] = {
        [_0x1b92cc.action]: 0x1
      };
    } else {
      user_warns[_0x1b92cc.sender][_0x1b92cc.action]++;
    }
    let _0x4f3467;
    if (_0x2f7dfe.antidemote == "true" && !_0x1b92cc.isCreator) {
      _0x4f3467 = !_0x1b92cc.isBotAdmin;
      if (users[_0x1b92cc.sender] && users[_0x1b92cc.sender].previous_Action === "antipromote") {
        delete users[_0x1b92cc.sender];
        return;
      }
      if (_0x1b92cc.isBotAdmin) {
        try {
          await _0x1b92cc.promote();
          users[_0x1b92cc.sender] = {
            'previous_Action': 'antidemote'
          };
          if (user_warns[_0x1b92cc.sender][_0x1b92cc.action] > 0x2) {
            return;
          }
          return await sendWelcome(_0x1b92cc, "*[ANTIPROMOTE START] User promote automatically!* @pp ");
        } catch (_0x46039a) {
          await _0x1b92cc.error(" Can't promote user in antidemote\n❲❒❳ GROUP: " + _0x1b92cc.metadata.subject + "\n❲❒❳ ERROR: " + _0x46039a + "\n", _0x46039a, false);
        }
      }
    }
    if (_0x2f7dfe.pdm == "true" || _0x4f3467) {
      if (user_warns[_0x1b92cc.sender][_0x1b92cc.action] > 0x2) {
        return;
      }
      var _0x395fbf = " *[SOMEONE DEMOTE HERE]*\n  " + (_0x4f3467 ? "*Note : _I'm Not Admin Here, So I Can't promote Someone while Anti_Demote Activated_*" : '') + "\n\n  ❲❒❳ *User:* _@user_\n❲❒❳ *Position:* _Admin -> Member_ @pp\n  ❲❒❳ *Total Members:* _@count_Members_\n❲❒❳ *Group Name:* @gname\n  \n\n" + Config.caption;
      return await sendWelcome(_0x1b92cc, _0x395fbf);
    }
  } catch (_0x5aa972) {
    console.log("Error From Demote : ", _0x5aa972);
  }
});