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
  runtime,
  formatp,
  prefix,
  smd,
  smdBuffer
} = require("../lib");
const axios = require('axios');
const fetch = require("node-fetch");
const os = require('os');
const speed = require("performance-now");
const Config = require("../config");
const cheerio = require("cheerio");
smd({
  'pattern': "channel",
  'desc': "To check ping",
  'react': '🗨️',
  'category': 'user',
  'filename': __filename
}, async _0x3c6bb0 => {
  const _0x2c2363 = "ANITA 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 𝙎𝙐𝙋𝙋𝙊𝙍𝙏\n\n _ʜᴇʏ ʜᴇʀᴇ's ᴏᴜʀ ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ, ᴘʟᴇᴀsᴇ ғᴏʟʟᴏᴡ ᴀɴᴅ sᴜᴘᴘᴏʀᴛ ᴜs ᴛᴏ ᴋᴇᴇᴘ ᴛʜɪs ᴘʀᴏᴊᴇᴄᴛ ᴀʟɪᴠᴇ_\n *ʟɪɴᴋ:* https://chat.whatsapp.com/CHBei04Af9CEyvtjprGXRK\n\n " + Config.botname + " *©ANITA*";
  const _0x3b26b7 = {
    'forwardingScore': 0x3e7,
    'isForwarded': true
  };
  await _0x3c6bb0.send(_0x2c2363, {
    'contextInfo': _0x3b26b7
  });
});
smd({
  'pattern': "support",
  'desc': "To check ping",
  'react': '🗨️',
  'category': "user",
  'filename': __filename
}, async _0x59957f => {
  const _0x52a827 = "ERRORS WITH REPO COMMAND THIS IS NEW REPO \n\n *REPO:*https://github.com/coderxsa/ANITA\n\n " + Config.botname + " *WORKS*";
  const _0x306091 = {
    'forwardingScore': 0x3e7,
    'isForwarded': true
  };
  await _0x59957f.send(_0x52a827, {
    'contextInfo': _0x306091
  });
});
smd({
  'cmdname': "listmessage",
  'alias': ["countmessage", 'msgcount'],
  'desc': "Check how many users continuesly active in chat!",
  'category': 'misc',
  'filename': __filename
}, async (_0x3d7f68, _0x18e333, {
  store: _0x48854d
}) => {
  try {
    let _0x38e5e9 = {};
    _0x48854d.messages[_0x3d7f68.jid].array.forEach(_0x135909 => {
      const _0x5c34c5 = _0x135909.pushName || (_0x3d7f68.isGroup ? _0x135909.key.participant : _0x135909.key.remoteJid || "unknown").split('@')[0x0];
      _0x38e5e9[_0x5c34c5] = (_0x38e5e9[_0x5c34c5] || 0x0) + 0x1;
    });
    let _0x1d2ebd = Object.entries(_0x38e5e9);
    if (!_0x1d2ebd || !_0x1d2ebd[0x0]) {
      return await _0x3d7f68.reply("_No messages found!_");
    }
    const _0x8c8162 = Object.entries(_0x38e5e9).map(([_0x36e0c4, _0xb3046f]) => "\t*" + (_0x36e0c4?.['split']("\n")["join"](" ") || "unknown") + "*  ➪  _" + _0xb3046f + '_').join("\n");
    var _0x493ad9 = ("*LIST OF ACTIVE USERS IN CURRENT CHAT*\n_Note: Sometimes Data will be reset when bot restart!_\n\n*Total Users: _" + _0x1d2ebd.length + "_*\n\n*USERNAME ➪ MESSAGE COUNT(s)*\n" + _0x8c8162 + "\n\n" + Config.caption).trim();
    await _0x3d7f68.send(_0x493ad9, {
      'contextInfo': {
        ...(await _0x3d7f68.bot.contextInfo("ACTIVE USERS", _0x3d7f68.senderName))
      }
    }, 'anita', _0x3d7f68);
  } catch (_0xdb981c) {
    console.log({
      'e': _0xdb981c
    });
  }
});
let commandHistory = [];
smd({
  'on': "main"
}, async (_0x5a19d7, _0x1efa26, {
  icmd: _0x1273ac
}) => {
  try {
    if (_0x1273ac && _0x5a19d7.cmd) {
      commandHistory.push({
        'user': _0x5a19d7.sender,
        'command': _0x5a19d7.cmd,
        'timestamp': new Date()
      });
    }
  } catch (_0x352fca) {
    await _0x5a19d7.error(_0x352fca + "\n\ncommand : listmessage", _0x352fca, "*ERROR!*");
  }
});
smd({
  'cmdname': 'usage',
  'desc': "Counts the commands used by users after starting bot?",
  'category': "misc",
  'filename': __filename
}, async _0x274c14 => {
  try {
    let _0x47d131 = [];
    const _0xe5c565 = {};
    commandHistory.forEach(({
      user: _0x315f59,
      command: _0xa18d96
    }) => {
      if (!_0xe5c565[_0x315f59]) {
        _0xe5c565[_0x315f59] = {
          'commands': {},
          'count': 0x0
        };
        _0x47d131.push(_0x315f59);
      }
      if (!_0xe5c565[_0x315f59].commands[_0xa18d96]) {
        _0xe5c565[_0x315f59].commands[_0xa18d96] = 0x1;
      } else {
        _0xe5c565[_0x315f59].commands[_0xa18d96]++;
      }
      _0xe5c565[_0x315f59].count++;
    });
    const _0x2dbb18 = _0x47d131.map((_0x27edbb, _0x24b55c) => {
      const _0x56c4c2 = _0xe5c565[_0x27edbb].commands;
      const _0xdb3aee = Object.entries(_0x56c4c2).map(([_0x364535, _0x56fd5a]) => _0x364535 + " " + (_0x56fd5a <= 0x1 ? '' : '(' + _0x56fd5a + ')')).join(", ");
      return '*' + (_0x24b55c + 0x1) + " -- @" + _0x27edbb.split('@')[0x0] + "'s ➪ " + _0xe5c565[_0x27edbb].count + "*  \n *LIST ➪*  _" + _0xdb3aee.trim() + '_';
    }).join("\n\n");
    var _0x191a35 = ("*LIST OF COMMANDS USED TODAY!*\n_Note: Data will be reset when bot restart!_\n\n*Total Users: _" + _0x47d131.length + "_*\n*Total Command Used: _" + commandHistory.length + "_*\n\n" + _0x2dbb18 + "\n\n" + Config.caption).trim();
    await _0x274c14.send(_0x191a35, {
      'contextInfo': {
        ...(await _0x274c14.bot.contextInfo("HISTORY"))
      },
      'mentions': [..._0x47d131]
    }, "asta", _0x274c14);
  } catch (_0x23ef8a) {
    await _0x274c14.error(_0x23ef8a + "\n\ncommand : cmdused", _0x23ef8a, "*ERROR!*");
  }
});
smd({
  'cmdname': 'test',
  'alias': ["check", 'checkbot'],
  'desc': "Check bot is active?",
  'category': 'misc',
  'filename': __filename
}, async _0x33d36d => {
  try {
    await _0x33d36d.reply("*ANITA CURRENTLY ACTIVE!*", {
      'contextInfo': {
        'externalAdReply': {
          'title': "ACTIVE",
          'sourceUrl': gurl,
          'showAdAttribution': true,
          'thumbnail': await smdBuffer(await _0x33d36d.getpp())
        }
      }
    }, "asta");
  } catch (_0xfbcb7b) {}
});
smd({
  'cmdname': 'caption',
  'desc': "set caption for Replied Message",
  'category': "misc",
  'filename': __filename
}, async (_0x26c1d0, _0x44fba0) => {
  try {
    if (!_0x26c1d0.reply_message || !_0x44fba0) {
      return await _0x26c1d0.reply(!_0x26c1d0.reply_message ? "*_Please reply to message with caption | filname_*" : "*Please provide text to set caption!*");
    }
    if (_0x26c1d0.reply_message.image || _0x26c1d0.reply_message.video || _0x26c1d0.reply_message.mtype.includes('document')) {
      let _0x4a66ce = '' + _0x44fba0.split('|')[0x1]?.["trim"]() || "null";
      let _0x8fc1ca = _0x26c1d0.reply_message.mtype.includes("document") ? _0x44fba0.split('|')[0x0].trim() : _0x44fba0;
      _0x26c1d0.reply_message.message[_0x26c1d0.reply_message.mtype].caption = _0x8fc1ca;
      _0x26c1d0.reply_message.message[_0x26c1d0.reply_message.mtype].fileName = _0x4a66ce;
      await _0x26c1d0.bot.copyNForward(_0x26c1d0.chat, _0x26c1d0.reply_message);
    } else {
      return await _0x26c1d0.reply("please reply to an Audio/Video/document message");
    }
  } catch (_0x366726) {
    await _0x26c1d0.error(_0x366726 + "\n\ncommand : caption", _0x366726, false);
  }
});
smd({
  'cmdname': "todoc",
  'desc': "send document for Replied image/video Message",
  'category': "misc",
  'filename': __filename
}, async (_0x5d087f, _0x29e0d3) => {
  try {
    let _0x19c330 = _0x5d087f.image || _0x5d087f.video ? _0x5d087f : _0x5d087f.reply_message && (_0x5d087f.reply_message.image || _0x5d087f.reply_message.video) ? _0x5d087f.reply_message : false;
    if (!_0x19c330) {
      return await _0x5d087f.reply("_Reply to an image/video message!_");
    }
    if (!_0x29e0d3) {
      return await _0x5d087f.reply("_Need fileName, Example: document anita | caption_");
    }
    let _0x381385 = await _0x5d087f.bot.downloadAndSaveMediaMessage(_0x19c330);
    let _0x22776b = _0x29e0d3.includes(':') ? ':' : _0x29e0d3.includes(';') ? ';' : '|';
    let _0x1052be = _0x29e0d3.split(_0x22776b)[0x0].trim() + '.' + (_0x19c330.image ? 'jpg' : "mp4");
    let _0x39612d = _0x29e0d3.split(_0x22776b)[0x1]?.['trim']() || '';
    _0x39612d = ["copy", "default", "old", "reply"].includes(_0x39612d) ? _0x19c330.text : _0x39612d;
    if (_0x381385) {
      _0x5d087f.bot.sendMessage(_0x5d087f.chat, {
        'document': {
          'url': _0x381385
        },
        'mimetype': _0x19c330.mimetype,
        'fileName': _0x1052be,
        'caption': _0x39612d
      });
    } else {
      _0x5d087f.reply("*Request Denied!*");
    }
  } catch (_0x317377) {
    await _0x5d087f.error(_0x317377 + "\n\ncommand : document", _0x317377, false);
  }
});
smd({
  'cmdname': 'tovv',
  'desc': "send viewonce for Replied image/video Message",
  'category': 'misc',
  'filename': __filename
}, async (_0x268637, _0x17756d) => {
  try {
    let _0x4c796c = _0x268637.image || _0x268637.video ? _0x268637 : _0x268637.reply_message && (_0x268637.reply_message.image || _0x268637.reply_message.video) ? _0x268637.reply_message : false;
    if (!_0x4c796c) {
      return await _0x268637.reply("_Reply to image/video with caption!_");
    }
    let _0x3beee5 = await _0x268637.bot.downloadAndSaveMediaMessage(_0x4c796c);
    let _0x32d81d = _0x4c796c.image ? "image" : "video";
    if (_0x3beee5) {
      _0x268637.bot.sendMessage(_0x268637.chat, {
        [_0x32d81d]: {
          'url': _0x3beee5
        },
        'caption': _0x17756d,
        'mimetype': _0x4c796c.mimetype,
        'fileLength': "99999999",
        'viewOnce': true
      }, {
        'quoted': _0x4c796c
      });
    } else {
      _0x268637.reply("*Request Denied!*");
    }
  } catch (_0x427b0d) {
    await _0x268637.error(_0x427b0d + "\n\ncommand : tovv", _0x427b0d, false);
  }
});
smd({
  'cmdname': "feature",
  'category': 'misc',
  'filename': __filename,
  'info': "get counting for total features!"
}, async _0x1e92d2 => {
  try {
    const _0x2b5e78 = require("../lib/plugins");
    let _0x462816 = Object.values(_0x2b5e78.commands).length;
    try {
      let {
        key: _0x43502d
      } = await _0x1e92d2.send("Counting... 0", {}, "anita", _0x1e92d2);
      for (let _0x2fb2a6 = 0x0; _0x2fb2a6 <= _0x462816; _0x2fb2a6++) {
        if (_0x2fb2a6 % 0xf === 0x0) {
          await _0x1e92d2.send("Counting... " + _0x2fb2a6, {
            'edit': _0x43502d
          }, "anita", _0x1e92d2);
        } else if (_0x462816 - _0x2fb2a6 < 0xa) {
          await _0x1e92d2.send("Counting... " + _0x2fb2a6, {
            'edit': _0x43502d
          }, "anita", _0x1e92d2);
        }
      }
      await _0x1e92d2.send("*Feature Counting Done!*", {
        'edit': _0x43502d
      }, "anita", _0x1e92d2);
    } catch (_0x1a22d2) {}
    let _0x1b35b1 = " * ANITA- ＢＯＴ ＦＥＡＴＵＲＥ*\n\n\n  ◦ _Total Features ➪ " + _0x462816 + "_\n  \n*◦ LIST DOWN THE FEATURES*\n\n      _Commands ➪ " + Object.values(_0x2b5e78.commands).filter(_0x267137 => _0x267137.pattern).length + "_\n      _Msg Listener ➪ " + Object.values(_0x2b5e78.commands).filter(_0x18eac9 => _0x18eac9.on).length + "_\n      _Call Listener ➪ " + Object.values(_0x2b5e78.commands).filter(_0x12ea8e => _0x12ea8e.call).length + "_\n      _Group Listener ➪ " + Object.values(_0x2b5e78.commands).filter(_0x1ff0df => _0x1ff0df.group).length + "_\n  \n\n" + Config.caption;
    await _0x1e92d2.bot.relayMessage(_0x1e92d2.chat, {
      'requestPaymentMessage': {
        'currencyCodeIso4217': 'NG',
        'amount1000': _0x462816 * 0x1388,
        'requestFrom': "0@s.whatsapp.net",
        'noteMessage': {
          'extendedTextMessage': {
            'text': _0x1b35b1,
            'contextInfo': {
              'mentionedJid': [_0x1e92d2.sender],
              'externalAdReply': {
                'showAdAttribution': true
              }
            }
          }
        }
      }
    }, {});
  } catch (_0x5c42c3) {
    await _0x1e92d2.error(_0x5c42c3 + "\n\ncommand : feature", _0x5c42c3, false);
  }
});
smd({
  'cmdname': "character",
  'category': "fun",
  'use': "[@user]",
  'filename': __filename,
  'info': "Check character of replied USER!"
}, async _0x1089ab => {
  const _0x1fe9d9 = _0x1089ab.reply_message ? _0x1089ab.reply_message.sender : _0x1089ab.mentionedJid && _0x1089ab.mentionedJid[0x0] ? _0x1089ab.mentionedJid[0x0] : '';
  if (!_0x1fe9d9 || !_0x1fe9d9.includes('@')) {
    return await _0x1089ab.reply("*Mention/reply user to check its character!*");
  }
  const _0x387b82 = ["Sigma", "Generous", "Grumpy", "Overconfident", "Obedient", "Good", "Simple", "Kind", "Patient", "Pervert", 'Cool', "Helpful", 'Brilliant', "Sexy", 'Hot', "Gorgeous", "Cute", "Fabolous", "Funny"];
  const _0x760f65 = _0x387b82[Math.floor(Math.random() * _0x387b82.length)];
  let _0x592fcd = "Character of @" + _0x1fe9d9.split('@')[0x0] + "  is *" + _0x760f65 + "* 🔥⚡";
  _0x1089ab.send(_0x592fcd, {
    'mentions': [_0x1fe9d9]
  }, "asta", _0x1089ab);
});
smd({
  'cmdname': "poetry",
  'type': 'fun',
  'info': "get randome poetry lines"
}, async _0x5a79d2 => {
  try {
    let _0x1203d3 = await fetch("https://shizoapi.onrender.com/api/texts/shayari?apikey=shizo");
    let {
      result: _0x23872e
    } = await _0x1203d3.json();
    _0x5a79d2.reply(_0x1203d3 && _0x23872e ? _0x23872e : "_Request Denied from Server!_");
  } catch (_0x3a4fce) {
    await _0x5a79d2.error(_0x3a4fce + "\n\ncommand : poetry", _0x3a4fce, false);
  }
});
smd({
  'cmdname': 'alexa',
  'category': 'ai',
  'use': "[text]",
  'filename': __filename,
  'info': "chat with simsimi alexa ai!"
}, async (_0xb4a367, _0x2ac9cf) => {
  try {
    if (!_0x2ac9cf) {
      return await _0xb4a367.reply("Hi *" + _0xb4a367.senderName + "*, do you want to talk?");
    }
    const _0x5282e0 = {
      'method': 'POST',
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': "text=" + encodeURIComponent(_0x2ac9cf) + "&lc=en&key="
    };
    const _0x216d13 = await fetch("https://api.simsimi.vn/v2/simtalk", _0x5282e0);
    const _0x38d78f = await _0x216d13.json();
    if (_0x38d78f.status === "200" && _0x38d78f.message) {
      _0xb4a367.reply(_0x38d78f.message);
    } else {
      _0xb4a367.reply("*No Responce!*");
    }
  } catch (_0x7f32d0) {
    await _0xb4a367.error(_0x7f32d0 + "\n\ncommand : poetry", _0x7f32d0, false);
  }
});
smd({
  'cmdname': "ping2",
  'alias': ["botstatus", "statusbot", 'p2'],
  'type': "misc",
  'info': "get randome poetry lines"
}, async _0xac9570 => {
  try {
    const _0x13e71c = process.memoryUsage();
    const _0xd372c4 = os.cpus().map(_0x1a73a2 => {
      _0x1a73a2.total = Object.keys(_0x1a73a2.times).reduce((_0x8f0559, _0x33191b) => _0x8f0559 + _0x1a73a2.times[_0x33191b], 0x0);
      return _0x1a73a2;
    });
    const _0xfe4acb = _0xd372c4.reduce((_0x8aae44, _0x135f73, _0x130cea, {
      length: _0x3cf1c6
    }) => {
      _0x8aae44.total += _0x135f73.total;
      _0x8aae44.speed += _0x135f73.speed / _0x3cf1c6;
      _0x8aae44.times.user += _0x135f73.times.user;
      _0x8aae44.times.nice += _0x135f73.times.nice;
      _0x8aae44.times.sys += _0x135f73.times.sys;
      _0x8aae44.times.idle += _0x135f73.times.idle;
      _0x8aae44.times.irq += _0x135f73.times.irq;
      return _0x8aae44;
    }, {
      'speed': 0x0,
      'total': 0x0,
      'times': {
        'user': 0x0,
        'nice': 0x0,
        'sys': 0x0,
        'idle': 0x0,
        'irq': 0x0
      }
    });
    let _0x2f44c4 = speed();
    let _0x568c18 = speed() - _0x2f44c4;
    neww = performance.now();
    oldd = performance.now();
    respon = ("\nResponse Speed " + _0x568c18.toFixed(0x4) + " _Second_ \n " + (oldd - neww) + " _miliseconds_\n\nRuntime : " + runtime(process.uptime()) + "\n\n💻 Info Server\nRAM: " + formatp(os.totalmem() - os.freemem()) + " / " + formatp(os.totalmem()) + "\n\n_NodeJS Memory Usaage_\n" + Object.keys(_0x13e71c).map((_0x3cef81, _0x5c1420, _0x394179) => _0x3cef81.padEnd(Math.max(..._0x394179.map(_0x400b8f => _0x400b8f.length)), " ") + ": " + formatp(_0x13e71c[_0x3cef81])).join("\n") + "\n\n" + (_0xd372c4[0x0] ? "_Total CPU Usage_\n" + _0xd372c4[0x0].model.trim() + " (" + _0xfe4acb.speed + " MHZ)\n" + Object.keys(_0xfe4acb.times).map(_0xcdec38 => "- *" + (_0xcdec38 + '*').padEnd(0x6) + ": " + (_0xfe4acb.times[_0xcdec38] * 0x64 / _0xfe4acb.total).toFixed(0x2) + '%').join("\n") + " " : '') + "\n\n ").trim();
    _0xac9570.reply(respon);
  } catch (_0x5f41d8) {
    await _0xac9570.error(_0x5f41d8 + "\n\ncommand : ping2", _0x5f41d8, false);
  }
});
smd({
  'cmdname': "myip",
  'alias': ['ip'],
  'type': 'misc',
  'info': "get randome poetry lines"
}, async _0x33e8ae => {
  try {
    let {
      data: _0x323969
    } = await axios.get('https://api.ipify.org/');
    _0x33e8ae.send(_0x323969 ? "*Bot's IP address is : _" + _0x323969 + '_*' : "_No responce from server!_");
  } catch (_0x48e030) {
    await _0x33e8ae.error(_0x48e030 + "\n\ncommand : myip", _0x48e030, false);
  }
});
let ssweb = (_0x183aab, _0x1142ed = "desktop") => {
  return new Promise((_0x37538f, _0x406480) => {
    const _0x4a3c62 = {
      'url': _0x183aab,
      'device': _0x1142ed,
      'cacheLimit': 0x0
    };
    axios({
      'url': "https://www.screenshotmachine.com/capture.php",
      'method': "POST",
      'data': new URLSearchParams(Object.entries(_0x4a3c62)),
      'headers': {
        'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(_0x26093f => {
      const _0x30a63a = _0x26093f.headers['set-cookie'];
      if (_0x26093f.data.status == "success") {
        axios.get("https://www.screenshotmachine.com/" + _0x26093f.data.link, {
          'headers': {
            'cookie': _0x30a63a.join('')
          },
          'responseType': "arraybuffer"
        }).then(({
          data: _0x15b3a3
        }) => {
          result = {
            'status': 0xc8,
            'result': _0x15b3a3
          };
          _0x37538f(result);
        });
      } else {
        _0x406480({
          'status': 0x194,
          'statuses': "Link Error",
          'message': _0x26093f.data
        });
      }
    })["catch"](_0x406480);
  });
};
smd({
  'cmdname': 'ss',
  'type': "misc",
  'info': "get randome poetry lines"
}, async (_0x321ac5, _0x24babf) => {
  try {
    let _0x1e0902 = _0x24babf.split(" ")[0x0].trim();
    if (!_0x1e0902) {
      return await _0x321ac5.reply("*Need URL! Use " + prefix + "ss https://github.com/coderxsa/ANITA*");
    }
    let _0x36e526 = await ssweb(_0x1e0902);
    if (_0x36e526 && _0x36e526.status == '200') {
      return await _0x321ac5.send(_0x36e526.result, {
        'caption': Config.caption
      }, "amdimg", _0x321ac5);
    } else {
      _0x321ac5.send("_No responce from server!_");
    }
  } catch (_0x3db424) {
    await _0x321ac5.error(_0x3db424 + "\n\ncommand : myip", _0x3db424, "*Request Denied!*");
  }
});
const secmailData = {};
smd({
  'pattern': "tempmail",
  'alias': ["tmpmail", "newmail", "tempemail"],
  'info': "Create tempory email address, and use it according your need!",
  'type': 'misc'
}, async _0x2ad441 => {
  try {
    if (!secmailData[_0x2ad441.sender]) {
      const _0x5d0f33 = await tempmail.create();
      if (!_0x5d0f33 || !_0x5d0f33[0x0]) {
        return await _0x2ad441.reply("*Request Denied!*");
      }
      const _0x4f2581 = _0x5d0f33[0x0].split('@');
      secmailData[_0x2ad441.sender] = {
        'email': _0x5d0f33[0x0],
        'login': _0x4f2581[0x0],
        'domain': _0x4f2581[0x1]
      };
    }
    var _0x53d10a = false;
    try {
      _0x53d10a = await smdBuffer("https://telegra.ph/file/b8e96b599e0fa54d25940.jpg");
    } catch (_0x581b26) {}
    await _0x2ad441.reply(("*YOUR TEMPMAIL INFO*\n      \n      \n  *EMAIL:* ➪ " + secmailData[_0x2ad441.sender].email + "\n  *Login:* ➪ " + secmailData[_0x2ad441.sender].login + "\n  *Domain:* ➪ " + secmailData[_0x2ad441.sender].domain + "\n  \n  \n  *USE _" + prefix + "checkmail_ to get latest emails!*\n  *USE _" + prefix + "delmail_ to delete current email!*\n  \n  " + Config.caption + "\n  ").trim(), {
      'contextInfo': {
        ...(await _0x2ad441.bot.contextInfo('TEMPMAIL', _0x2ad441.senderName, _0x53d10a))
      }
    }, "smd", _0x2ad441);
  } catch (_0x563139) {
    console.log(_0x563139);
    await _0x2ad441.reply("*Request Denied!*");
  }
});
smd({
  'pattern': "checkmail",
  'alias': ["readmail", "reademail"],
  'type': "misc",
  'info': "check mails in your temporary email address!"
}, async _0x2be471 => {
  try {
    const _0xa63df1 = _0x2be471.sender;
    const _0x2561a6 = secmailData[_0xa63df1];
    if (!_0x2561a6 || !_0x2561a6.email) {
      return await _0x2be471.reply("*You haven't created a temporary email.*\n  *Use _" + prefix + "tempmail_ to create email first!*");
    }
    const _0xfc0b58 = await tempmail.mails(_0x2561a6.login, _0x2561a6.domain);
    if (!_0xfc0b58 || !_0xfc0b58[0x0] || _0xfc0b58.length === 0x0) {
      return await _0x2be471.reply("*EMPTY  ➪ No mails received yet!* \n*Use _" + prefix + "delmail_ to delete mail!*");
    }
    var _0x4be9d9 = false;
    try {
      _0x4be9d9 = await smdBuffer("https://telegra.ph/file/b8e96b599e0fa54d25940.jpg");
    } catch (_0x2c8ddc) {}
    for (const _0x5b1446 of _0xfc0b58) {
      const _0x276866 = await tempmail.emailContent(_0x2561a6.login, _0x2561a6.domain, _0x5b1446.id);
      console.log({
        'emailContent': _0x276866
      });
      if (_0x276866) {
        const _0x1da36d = "\n  *From* ➪ " + _0x5b1446.from + "\n  *Date* ➪  " + _0x5b1446.date + "\n  *EMAIL ID* ➪  [" + _0x5b1446.id + "]\n  *Subject* ➪  " + _0x5b1446.subject + "\n  *Content* ➪  " + _0x276866;
        await _0x2be471.reply(_0x1da36d, {
          'contextInfo': {
            ...(await _0x2be471.bot.contextInfo("*EMAIL ➪ " + _0x5b1446.id + '*', _0x2be471.senderName, _0x4be9d9))
          }
        }, 'smd', _0x2be471);
        ;
      }
    }
  } catch (_0x2f965b) {
    console.log(_0x2f965b);
    await _0x2be471.reply("*Request Denied!*");
  }
});
smd({
  'pattern': "delmail",
  'alias': ["deletemail", "deltemp", "deltmp"],
  'type': "misc",
  'info': "Delete tempory email address!"
}, async _0x2dd81b => {
  try {
    const _0xcf7378 = _0x2dd81b.sender;
    if (secmailData[_0xcf7378]) {
      delete secmailData[_0xcf7378];
      await _0x2dd81b.reply("*Successfully deleted the email address.*");
    } else {
      await _0x2dd81b.reply("*No email address to delete.*");
    }
  } catch (_0x4bef04) {
    console.log(_0x4bef04);
    await _0x2dd81b.reply("*Request Denied!*");
  }
});
const tempmail = {
  "create": async () => {
    try {
      let _0x9ab033 = await fetch('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1');
      if (!_0x9ab033.ok) {
        throw new Error("HTTP error! status: " + _0x9ab033.status);
      }
      let _0x226d49 = await _0x9ab033.json();
      return _0x226d49;
    } catch (_0x210649) {
      console.log(_0x210649);
      return null;
    }
  },
  "mails": async (_0x894842, _0x102631) => {
    const _0x3b6d0c = "https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x894842 + "&domain=" + _0x102631;
    try {
      let _0x5d6e9b = await fetch(_0x3b6d0c);
      if (!_0x5d6e9b.ok) {
        throw new Error("HTTP error! status: " + _0x5d6e9b.status);
      }
      let _0x1ffad7 = await _0x5d6e9b.json();
      return _0x1ffad7;
    } catch (_0x17edb8) {
      console.log(_0x17edb8);
      return null;
    }
  },
  "emailContent": async (_0x435f63, _0x3184c5, _0x24f2f1) => {
    const _0xff485f = "https://www.1secmail.com/api/v1/?action=readMessage&login=" + _0x435f63 + '&domain=' + _0x3184c5 + '&id=' + _0x24f2f1;
    try {
      let _0x1760ca = await fetch(_0xff485f);
      if (!_0x1760ca.ok) {
        throw new Error("HTTP error! status: " + _0x1760ca.status);
      }
      let _0x517bf5 = await _0x1760ca.json();
      const _0x359439 = _0x517bf5.htmlBody;
      console.log({
        'htmlContent': _0x359439
      });
      const _0x5d86b3 = cheerio.load(_0x359439);
      const _0x393512 = _0x5d86b3.text();
      return _0x393512;
    } catch (_0x5105a1) {
      console.log(_0x5105a1);
      return null;
    }
  }
};