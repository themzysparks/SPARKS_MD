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
  'cmdname': "messages",
  'alias': ["countmessage", "msgcount"],
  'desc': "Check how many users continuesly active in chat!",
  'category': "whatsapp",
  'filename': __filename
}, async (_0x26b2b5, _0x382899, {
  store: _0xe70747
}) => {
  try {
    let _0x31c439 = {};
    _0xe70747.messages[_0x26b2b5.jid].array.forEach(_0x4e655f => {
      const _0x2de2f0 = _0x4e655f.pushName || (_0x26b2b5.isGroup ? _0x4e655f.key.participant : _0x4e655f.key.remoteJid || "unknown").split('@')[0x0];
      _0x31c439[_0x2de2f0] = (_0x31c439[_0x2de2f0] || 0x0) + 0x1;
    });
    let _0x46f124 = Object.entries(_0x31c439);
    if (!_0x46f124 || !_0x46f124[0x0]) {
      return await _0x26b2b5.reply("_No messages found!_");
    }
    const _0x31cc5e = Object.entries(_0x31c439).map(([_0x54a879, _0x4d1c2f]) => "\t*" + (_0x54a879?.["split"]("\n")["join"](" ") || "unknown") + "*  ➪  _" + _0x4d1c2f + '_').join("\n");
    var _0x4db4a9 = ("*LIST OF ACTIVE USERS IN CURRENT CHAT*\n_Note: Sometimes Data will be reset when bot restart!_\n\n*Total Users: _" + _0x46f124.length + "_*\n\n*USERNAME ➪ MESSAGE COUNT(s)*\n" + _0x31cc5e + "\n\n" + Config.caption).trim();
    await _0x26b2b5.send(_0x4db4a9, {
      'contextInfo': {
        ...(await _0x26b2b5.bot.contextInfo("ACTIVE USERS", _0x26b2b5.senderName))
      }
    }, "asta", _0x26b2b5);
  } catch (_0x120dba) {
    console.log({
      'e': _0x120dba
    });
  }
});
let commandHistory = [];
smd({
  'on': "main"
}, async (_0x4564ed, _0x18306f, {
  icmd: _0x3608bf
}) => {
  try {
    if (_0x3608bf && _0x4564ed.cmd) {
      commandHistory.push({
        'user': _0x4564ed.sender,
        'command': _0x4564ed.cmd,
        'timestamp': new Date()
      });
    }
  } catch (_0x229629) {
    await _0x4564ed.error(_0x229629 + "\n\ncommand : listmessage", _0x229629, '*ERROR!*');
  }
});
smd({
  'cmdname': "caption",
  'alias': ["setcaption"],
  'desc': "set caption for Replied Message",
  'category': "misc",
  'filename': __filename
}, async (_0x2f6a61, _0x1b3dd3) => {
  try {
    if (!_0x2f6a61.reply_message || !_0x1b3dd3) {
      return await _0x2f6a61.reply(!_0x2f6a61.reply_message ? "*_Please reply to message with caption | filname_*" : "*Please provide text to set caption!*");
    }
    if (_0x2f6a61.reply_message.image || _0x2f6a61.reply_message.video || _0x2f6a61.reply_message.mtype.includes('document')) {
      let _0xeb2a44 = '' + _0x1b3dd3.split('|')[0x1]?.["trim"]() || "null";
      let _0x7dc461 = _0x2f6a61.reply_message.mtype.includes("document") ? _0x1b3dd3.split('|')[0x0].trim() : _0x1b3dd3;
      _0x2f6a61.reply_message.message[_0x2f6a61.reply_message.mtype].caption = _0x7dc461;
      _0x2f6a61.reply_message.message[_0x2f6a61.reply_message.mtype].fileName = _0xeb2a44;
      await _0x2f6a61.bot.copyNForward(_0x2f6a61.chat, _0x2f6a61.reply_message);
    } else {
      return await _0x2f6a61.reply("please reply to an Audio/Video/document message");
    }
  } catch (_0x2f1e8b) {
    await _0x2f6a61.error(_0x2f1e8b + "\n\ncommand : caption", _0x2f1e8b, false);
  }
});
smd({
  'cmdname': "document",
  'alias': ["senddoc", "todoc"],
  'desc': "send document for Replied image/video Message",
  'category': "misc",
  'filename': __filename
}, async (_0x1de98b, _0x5c3bfb) => {
  try {
    let _0x39c484 = _0x1de98b.image || _0x1de98b.video ? _0x1de98b : _0x1de98b.reply_message && (_0x1de98b.reply_message.image || _0x1de98b.reply_message.video) ? _0x1de98b.reply_message : false;
    if (!_0x39c484) {
      return await _0x1de98b.reply("_Reply to an image/video message!_");
    }
    if (!_0x5c3bfb) {
      return await _0x1de98b.reply("_Need fileName, Example: document asta | caption_");
    }
    let _0x3370d1 = await _0x1de98b.bot.downloadAndSaveMediaMessage(_0x39c484);
    let _0x475abb = _0x5c3bfb.includes(':') ? ':' : _0x5c3bfb.includes(';') ? ';' : '|';
    let _0x35bdac = _0x5c3bfb.split(_0x475abb)[0x0].trim() + '.' + (_0x39c484.image ? "jpg" : "mp4");
    let _0xf98e22 = _0x5c3bfb.split(_0x475abb)[0x1]?.["trim"]() || '';
    _0xf98e22 = ["copy", "default", "old", "reply"].includes(_0xf98e22) ? _0x39c484.text : _0xf98e22;
    if (_0x3370d1) {
      _0x1de98b.bot.sendMessage(_0x1de98b.chat, {
        'document': {
          'url': _0x3370d1
        },
        'mimetype': _0x39c484.mimetype,
        'fileName': _0x35bdac,
        'caption': _0xf98e22
      });
    } else {
      _0x1de98b.reply("*Request Denied!*");
    }
  } catch (_0xd452c1) {
    await _0x1de98b.error(_0xd452c1 + "\n\ncommand : document", _0xd452c1, false);
  }
});
smd({
  'cmdname': 'tovv',
  'alias': ["toviewonce"],
  'desc': "send viewonce for Replied image/video Message",
  'category': "whatsapp",
  'filename': __filename
}, async (_0x24b945, _0xc9f602) => {
  try {
    let _0x54502a = _0x24b945.image || _0x24b945.video ? _0x24b945 : _0x24b945.reply_message && (_0x24b945.reply_message.image || _0x24b945.reply_message.video) ? _0x24b945.reply_message : false;
    if (!_0x54502a) {
      return await _0x24b945.reply("_Reply to image/video with caption!_");
    }
    let _0x1dd22f = await _0x24b945.bot.downloadAndSaveMediaMessage(_0x54502a);
    let _0xee4bff = _0x54502a.image ? 'image' : "video";
    if (_0x1dd22f) {
      _0x24b945.bot.sendMessage(_0x24b945.chat, {
        [_0xee4bff]: {
          'url': _0x1dd22f
        },
        'caption': _0xc9f602,
        'mimetype': _0x54502a.mimetype,
        'fileLength': '99999999',
        'viewOnce': true
      }, {
        'quoted': _0x54502a
      });
    } else {
      _0x24b945.reply("*Request Denied!*");
    }
  } catch (_0x5f587e) {
    await _0x24b945.error(_0x5f587e + "\n\ncommand : tovv", _0x5f587e, false);
  }
});
smd({
  'cmdname': "feature",
  'alias': ["totalfeature", "features", "asta"],
  'category': "tools",
  'filename': __filename,
  'info': "get counting for total features!"
}, async _0x196b4e => {
  try {
    const _0x261390 = require('../lib/plugins');
    let _0x3cd065 = Object.values(_0x261390.commands).length;
    try {
      let {
        key: _0x1089ae
      } = await _0x196b4e.send("Counting... 0", {}, "asta", _0x196b4e);
      for (let _0x1d31f3 = 0x0; _0x1d31f3 <= _0x3cd065; _0x1d31f3++) {
        if (_0x1d31f3 % 0xf === 0x0) {
          await _0x196b4e.send("Counting... " + _0x1d31f3, {
            'edit': _0x1089ae
          }, "asta", _0x196b4e);
        } else if (_0x3cd065 - _0x1d31f3 < 0xa) {
          await _0x196b4e.send("Counting... " + _0x1d31f3, {
            'edit': _0x1089ae
          }, "asta", _0x196b4e);
        }
      }
      await _0x196b4e.send("*Feature Counting Done!*", {
        'edit': _0x1089ae
      }, "asta", _0x196b4e);
    } catch (_0x312aa4) {}
    let _0x830949 = " *乂 ANITA - ＢＯＴ ＦＥＡＴＵＲＥ*\n\n\n  ◦ _Total Features ➪ " + _0x3cd065 + "_\n  \n*◦ BOT FEATURES*\n\n      Plugins ➪ " + Object.values(_0x261390.commands).filter(_0x235408 => _0x235408.pattern).length + "_\n      _Msg Listener ➪ " + Object.values(_0x261390.commands).filter(_0x351025 => _0x351025.on).length + "_\n      _Call Listener ➪ " + Object.values(_0x261390.commands).filter(_0xeff7d => _0xeff7d.call).length + "_\n      _Group Listener ➪ " + Object.values(_0x261390.commands).filter(_0x452148 => _0x452148.group).length + "_\n  \n\n" + Config.caption;
    await _0x196b4e.bot.relayMessage(_0x196b4e.chat, {
      'requestPaymentMessage': {
        'currencyCodeIso4217': "ZAR",
        'amount1000': _0x3cd065 * 0x3e8,
        'requestFrom': '27717311486@s.whatsapp.net',
        'noteMessage': {
          'extendedTextMessage': {
            'text': _0x830949,
            'contextInfo': {
              'mentionedJid': [_0x196b4e.sender],
              'externalAdReply': {
                'showAdAttribution': true
              }
            }
          }
        }
      }
    }, {});
  } catch (_0xac8020) {
    await _0x196b4e.error(_0xac8020 + "\n\ncommand : feature", _0xac8020, false);
  }
});
smd({
  'cmdname': 'character',
  'category': "pastime",
  'use': "[@user]",
  'filename': __filename,
  'info': "Check character of replied USER!"
}, async _0x1f50c2 => {
  const _0x18021e = _0x1f50c2.reply_message ? _0x1f50c2.reply_message.sender : _0x1f50c2.mentionedJid && _0x1f50c2.mentionedJid[0x0] ? _0x1f50c2.mentionedJid[0x0] : '';
  if (!_0x18021e || !_0x18021e.includes('@')) {
    return await _0x1f50c2.reply("*Mention/reply user to check its character!*");
  }
  const _0x4178f3 = ['Sigma', "Generous", 'Grumpy', "Overconfident", "Obedient", 'Good', "Simple", "Kind", "Patient", 'Pervert', 'Cool', "Helpful", 'Brilliant', "Sexy", 'Hot', 'Gorgeous', "Cute", 'Fabolous', "Funny"];
  const _0x31a29e = _0x4178f3[Math.floor(Math.random() * _0x4178f3.length)];
  let _0x374d5d = "Character of @" + _0x18021e.split('@')[0x0] + "  is *" + _0x31a29e + "* 🔥⚡";
  _0x1f50c2.send(_0x374d5d, {
    'mentions': [_0x18021e]
  }, "asta", _0x1f50c2);
});
smd({
  'cmdname': 'poetry',
  'alias': ['shairi', "shayeri"],
  'type': "pastime",
  'info': "get randome poetry lines"
}, async _0x1ce8a8 => {
  try {
    let _0x5821d4 = await fetch("https://shizoapi.onrender.com/api/texts/shayari?apikey=shizo");
    let {
      result: _0x5cd2c5
    } = await _0x5821d4.json();
    _0x1ce8a8.reply(_0x5821d4 && _0x5cd2c5 ? _0x5cd2c5 : "_Request Denied from Server!_");
  } catch (_0x55df72) {
    await _0x1ce8a8.error(_0x55df72 + "\n\ncommand : poetry", _0x55df72, false);
  }
});
smd({
  'cmdname': "alexa",
  'category': 'ai',
  'use': "[text]",
  'filename': __filename,
  'info': "chat with simsimi alexa ai!"
}, async (_0x45453d, _0x18481c) => {
  try {
    if (!_0x18481c) {
      return await _0x45453d.reply("Hi *" + _0x45453d.senderName + "*, do you want to talk?");
    }
    const _0x2563b6 = {
      'method': "POST",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': "text=" + encodeURIComponent(_0x18481c) + "&lc=en&key="
    };
    const _0x105a9f = await fetch("https://api.simsimi.vn/v2/simtalk", _0x2563b6);
    const _0x1dceca = await _0x105a9f.json();
    if (_0x1dceca.status === "200" && _0x1dceca.message) {
      _0x45453d.reply(_0x1dceca.message);
    } else {
      _0x45453d.reply("*No Responce!*");
    }
  } catch (_0x56aa78) {
    await _0x45453d.error(_0x56aa78 + "\n\ncommand : poetry", _0x56aa78, false);
  }
});
smd({
  'cmdname': "ping2",
  'alias': ["botstatus", "statusbot", 'p2'],
  'type': "tools",
  'info': "get randome poetry lines"
}, async _0x10b684 => {
  try {
    const _0x5b0301 = process.memoryUsage();
    const _0xc14d56 = os.cpus().map(_0x4219a6 => {
      _0x4219a6.total = Object.keys(_0x4219a6.times).reduce((_0xd6cd1, _0x56a7ab) => _0xd6cd1 + _0x4219a6.times[_0x56a7ab], 0x0);
      return _0x4219a6;
    });
    const _0x490f39 = _0xc14d56.reduce((_0x3f1f1a, _0x361b61, _0xec61e8, {
      length: _0x11362a
    }) => {
      _0x3f1f1a.total += _0x361b61.total;
      _0x3f1f1a.speed += _0x361b61.speed / _0x11362a;
      _0x3f1f1a.times.user += _0x361b61.times.user;
      _0x3f1f1a.times.nice += _0x361b61.times.nice;
      _0x3f1f1a.times.sys += _0x361b61.times.sys;
      _0x3f1f1a.times.idle += _0x361b61.times.idle;
      _0x3f1f1a.times.irq += _0x361b61.times.irq;
      return _0x3f1f1a;
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
    let _0x50e264 = speed();
    let _0x187fae = speed() - _0x50e264;
    neww = performance.now();
    oldd = performance.now();
    respon = ("\nResponse Speed " + _0x187fae.toFixed(0x4) + " _Second_ \n " + (oldd - neww) + " _miliseconds_\n\nRuntime : " + runtime(process.uptime()) + "\n\n💻 Info Server\nRAM: " + formatp(os.totalmem() - os.freemem()) + " / " + formatp(os.totalmem()) + "\n\n_NodeJS Memory Usaage_\n" + Object.keys(_0x5b0301).map((_0x5bd4a9, _0x304ee2, _0x582b80) => _0x5bd4a9.padEnd(Math.max(..._0x582b80.map(_0x11bfe6 => _0x11bfe6.length)), " ") + ": " + formatp(_0x5b0301[_0x5bd4a9])).join("\n") + "\n\n" + (_0xc14d56[0x0] ? "_Total CPU Usage_\n" + _0xc14d56[0x0].model.trim() + " (" + _0x490f39.speed + " MHZ)\n" + Object.keys(_0x490f39.times).map(_0x20e275 => "- *" + (_0x20e275 + '*').padEnd(0x6) + ": " + (_0x490f39.times[_0x20e275] * 0x64 / _0x490f39.total).toFixed(0x2) + '%').join("\n") + " " : '') + "\n\n ").trim();
    _0x10b684.reply(respon);
  } catch (_0x29220c) {
    await _0x10b684.error(_0x29220c + "\n\ncommand : ping2", _0x29220c, false);
  }
});
smd({
  'cmdname': "myip",
  'alias': ['ip'],
  'type': "misc",
  'info': "get randome poetry lines"
}, async _0x3a5e42 => {
  try {
    let {
      data: _0x304444
    } = await axios.get("https://api.ipify.org/");
    _0x3a5e42.send(_0x304444 ? "*Bot's IP address is : _" + _0x304444 + '_*' : "_No responce from server!_");
  } catch (_0x423b76) {
    await _0x3a5e42.error(_0x423b76 + "\n\ncommand : myip", _0x423b76, false);
  }
});
let ssweb = (_0x4b1121, _0x92b388 = "desktop") => {
  return new Promise((_0x20718c, _0x210ad0) => {
    const _0x23d145 = {
      'url': _0x4b1121,
      'device': _0x92b388,
      'cacheLimit': 0x0
    };
    axios({
      'url': "https://www.screenshotmachine.com/capture.php",
      'method': "POST",
      'data': new URLSearchParams(Object.entries(_0x23d145)),
      'headers': {
        'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(_0x369361 => {
      const _0x449901 = _0x369361.headers["set-cookie"];
      if (_0x369361.data.status == "success") {
        axios.get("https://www.screenshotmachine.com/" + _0x369361.data.link, {
          'headers': {
            'cookie': _0x449901.join('')
          },
          'responseType': "arraybuffer"
        }).then(({
          data: _0x1aaf96
        }) => {
          result = {
            'status': 0xc8,
            'result': _0x1aaf96
          };
          _0x20718c(result);
        });
      } else {
        _0x210ad0({
          'status': 0x194,
          'statuses': "Link Error",
          'message': _0x369361.data
        });
      }
    })['catch'](_0x210ad0);
  });
};
smd({
  'cmdname': 'ss',
  'alias': ["webss", "fullss"],
  'type': "misc",
  'info': "get randome poetry lines"
}, async (_0x1979e5, _0x4b98c0) => {
  try {
    let _0x102e74 = _0x4b98c0.split(" ")[0x0].trim();
    if (!_0x102e74) {
      return await _0x1979e5.reply("*Need URL! Use " + prefix + "ss https://github.com/coderxsa/ANITA*");
    }
    let _0x20f6a7 = await ssweb(_0x102e74);
    if (_0x20f6a7 && _0x20f6a7.status == '200') {
      return await _0x1979e5.send(_0x20f6a7.result, {
        'caption': Config.caption
      }, 'smdimg', _0x1979e5);
    } else {
      _0x1979e5.send("_No responce from server!_");
    }
  } catch (_0xa00f8) {
    await _0x1979e5.error(_0xa00f8 + "\n\ncommand : myip", _0xa00f8, "*Request Denied!*");
  }
});
const secmailData = {};
smd({
  'pattern': "tempmail",
  'alias': ["tmpmail", "newmail", "tempemail"],
  'info': "Create tempory email address, and use it according your need!",
  'type': "tools"
}, async _0x30ca65 => {
  try {
    if (!secmailData[_0x30ca65.sender]) {
      const _0x3d37f2 = await tempmail.create();
      if (!_0x3d37f2 || !_0x3d37f2[0x0]) {
        return await _0x30ca65.reply("*Request Denied!*");
      }
      const _0x4ba9f2 = _0x3d37f2[0x0].split('@');
      secmailData[_0x30ca65.sender] = {
        'email': _0x3d37f2[0x0],
        'login': _0x4ba9f2[0x0],
        'domain': _0x4ba9f2[0x1]
      };
    }
    var _0x2bd538 = false;
    try {
      _0x2bd538 = await smdBuffer("https://telegra.ph/file/b8e96b599e0fa54d25940.jpg");
    } catch (_0xb56ce8) {}
    await _0x30ca65.reply(("*YOUR TEMPMAIL INFO*\n      \n      \n  *EMAIL:* ➪ " + secmailData[_0x30ca65.sender].email + "\n  *Login:* ➪ " + secmailData[_0x30ca65.sender].login + "\n  *Domain:* ➪ " + secmailData[_0x30ca65.sender].domain + "\n  \n  \n  *USE _" + prefix + "checkmail_ to get latest emails!*\n  *USE _" + prefix + "delmail_ to delete current email!*\n  \n  " + Config.caption + "\n  ").trim(), {
      'contextInfo': {
        ...(await _0x30ca65.bot.contextInfo('TEMPMAIL', _0x30ca65.senderName, _0x2bd538))
      }
    }, "smd", _0x30ca65);
  } catch (_0x1f8de6) {
    console.log(_0x1f8de6);
    await _0x30ca65.reply("*Request Denied!*");
  }
});
smd({
  'pattern': "checkmail",
  'alias': ["readmail", "reademail"],
  'type': "tools",
  'info': "check mails in your temporary email address!"
}, async _0x4fd672 => {
  try {
    const _0x3454b7 = _0x4fd672.sender;
    const _0x30f234 = secmailData[_0x3454b7];
    if (!_0x30f234 || !_0x30f234.email) {
      return await _0x4fd672.reply("*You haven't created a temporary email.*\n  *Use _" + prefix + "tempmail_ to create email first!*");
    }
    const _0x3683f2 = await tempmail.mails(_0x30f234.login, _0x30f234.domain);
    if (!_0x3683f2 || !_0x3683f2[0x0] || _0x3683f2.length === 0x0) {
      return await _0x4fd672.reply("*EMPTY  ➪ No mails received yet!* \n*Use _" + prefix + "delmail_ to delete mail!*");
    }
    var _0x4bb3c1 = false;
    try {
      _0x4bb3c1 = await smdBuffer("https://telegra.ph/file/b8e96b599e0fa54d25940.jpg");
    } catch (_0x50312a) {}
    for (const _0x5d7aa3 of _0x3683f2) {
      const _0x2d144a = await tempmail.emailContent(_0x30f234.login, _0x30f234.domain, _0x5d7aa3.id);
      console.log({
        'emailContent': _0x2d144a
      });
      if (_0x2d144a) {
        const _0x512c22 = "\n  *From* ➪ " + _0x5d7aa3.from + "\n  *Date* ➪  " + _0x5d7aa3.date + "\n  *EMAIL ID* ➪  [" + _0x5d7aa3.id + "]\n  *Subject* ➪  " + _0x5d7aa3.subject + "\n  *Content* ➪  " + _0x2d144a;
        await _0x4fd672.reply(_0x512c22, {
          'contextInfo': {
            ...(await _0x4fd672.bot.contextInfo("*EMAIL ➪ " + _0x5d7aa3.id + '*', _0x4fd672.senderName, _0x4bb3c1))
          }
        }, "smd", _0x4fd672);
        ;
      }
    }
  } catch (_0xcd488) {
    console.log(_0xcd488);
    await _0x4fd672.reply("*Request Denied!*");
  }
});
smd({
  'pattern': "delmail",
  'alias': ["deletemail", "deltemp", 'deltmp'],
  'type': "tools",
  'info': "Delete tempory email address!"
}, async _0x2bd00e => {
  try {
    const _0xf1ae3d = _0x2bd00e.sender;
    if (secmailData[_0xf1ae3d]) {
      delete secmailData[_0xf1ae3d];
      await _0x2bd00e.reply("*Successfully deleted the email address.*");
    } else {
      await _0x2bd00e.reply("*No email address to delete.*");
    }
  } catch (_0x2ed604) {
    console.log(_0x2ed604);
    await _0x2bd00e.reply("*Request Denied!*");
  }
});
const tempmail = {
  create: async () => {
    try {
      let _0x4e0bb1 = await fetch("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
      if (!_0x4e0bb1.ok) {
        throw new Error("HTTP error! status: " + _0x4e0bb1.status);
      }
      let _0x5327f8 = await _0x4e0bb1.json();
      return _0x5327f8;
    } catch (_0x4056af) {
      console.log(_0x4056af);
      return null;
    }
  },
  "mails": async (_0x4f8623, _0xf32d9e) => {
    const _0x4dc7d3 = 'https://www.1secmail.com/api/v1/?action=getMessages&login=' + _0x4f8623 + "&domain=" + _0xf32d9e;
    try {
      let _0xcadd9f = await fetch(_0x4dc7d3);
      if (!_0xcadd9f.ok) {
        throw new Error("HTTP error! status: " + _0xcadd9f.status);
      }
      let _0x602a9b = await _0xcadd9f.json();
      return _0x602a9b;
    } catch (_0x433cb7) {
      console.log(_0x433cb7);
      return null;
    }
  },
  "emailContent": async (_0xefd292, _0x2233d3, _0x131ea6) => {
    const _0x9607c8 = "https://www.1secmail.com/api/v1/?action=readMessage&login=" + _0xefd292 + "&domain=" + _0x2233d3 + '&id=' + _0x131ea6;
    try {
      let _0x54121d = await fetch(_0x9607c8);
      if (!_0x54121d.ok) {
        throw new Error("HTTP error! status: " + _0x54121d.status);
      }
      let _0x4e29a3 = await _0x54121d.json();
      const _0x392479 = _0x4e29a3.htmlBody;
      console.log({
        'htmlContent': _0x392479
      });
      const _0x429be4 = cheerio.load(_0x392479);
      const _0xb13cb5 = _0x429be4.text();
      return _0xb13cb5;
    } catch (_0x39888a) {
      console.log(_0x39888a);
      return null;
    }
  }
};