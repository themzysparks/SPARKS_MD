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
  smd
} = require("../lib");
smd({
  'pattern': "save",
  'desc': "Save whatsapp status",
  'category': 'whatsapp',
  'filename': __filename,
  'use': "< status >"
}, async _0x372148 => {
  try {
    let _0x37d022 = _0x372148.reply_message && _0x372148.reply_message.status ? _0x372148.reply_message : false;
    if (_0x37d022) {
      _0x372148.bot.forwardOrBroadCast(_0x372148.user, _0x37d022, {
        'quoted': {
          'key': _0x37d022.key,
          'message': _0x37d022.message
        }
      });
    } else {
      _0x372148.send("*reply to whatsapp status*");
    }
  } catch (_0x3c5456) {
    await _0x372148.error(_0x3c5456 + "\n\ncommand : #(Status Saver)", _0x3c5456, false);
  }
});
const regexSend = new RegExp("\\b(?:" + ["send", "share", 'snd', "give", "save", "sendme", 'forward'].join('|') + ")\\b", 'i');
smd({
  'on': "quoted"
}, async (_0x22f25d, _0x26ba8a) => {
  try {
    let _0xbce014 = _0x22f25d.reply_message.status ? _0x22f25d.reply_message : false;
    if (_0xbce014 && regexSend.test(_0x26ba8a.toLowerCase())) {
      _0x22f25d.bot.forwardOrBroadCast(_0x22f25d.fromMe ? _0x22f25d.user : _0x22f25d.from, _0xbce014, {
        'quoted': {
          'key': _0xbce014.key,
          'message': _0xbce014.message
        }
      });
    }
  } catch (_0x1dcb8d) {
    console.log(_0x1dcb8d);
  }
});
global.waPresence = process.env.WAPRESENCE && process.env.WAPRESENCE === "online" ? "available" : process.env.WAPRESENCE || '';
global.api_smd = "https://api-smd.onrender.com";
let status = false;
smd({
  'on': "main"
}, async (_0x506242, _0x294073, {
  icmd: _0x939c7c
}) => {
  try {
    if (!status) {
      try {
        status = true;
      } catch (_0x16c1a5) {}
    }
    if (_0x506242.status) {
      return;
    }
    if (('' + global.readmessagefrom).includes(_0x506242.senderNum) || ["yes", 'true', 'ok', "sure"].includes(global.readmessage) || _0x939c7c && ["yes", "true", 'ok', 'sure'].includes(global.readcmds)) {
      _0x506242.bot.readMessages([_0x506242.key]);
    }
  } catch (_0x329250) {
    console.log(_0x329250);
  }
});
smd({
  'on': "text"
}, async (_0x7042cc, _0x30ba21, {
  icmd: _0x583797
}) => {
  try {
    if (["unavailable", 'available', 'composing', "recording", "paused"].includes(waPresence)) {
      _0x7042cc.bot.sendPresenceUpdate(waPresence, _0x7042cc.from);
    }
    if (_0x7042cc.isAstro && !_0x7042cc.fromMe && !_0x7042cc.text.startsWith('$')) {
      _0x7042cc.react('');
    }
  } catch (_0x5a5e2b) {
    console.log(_0x5a5e2b);
  }
});
smd({
  'on': "status"
}, async (_0x2e56da, _0x4454b4) => {
  try {
    if (('' + global.read_status_from).split(',').includes(_0x2e56da.key.participant.split('@')[0x0]) || ['yes', "true", 'ok', 'sure'].includes(global.read_status) || _0x2e56da.fromMe || _0x2e56da.isAstro) {
      await _0x2e56da.bot.readMessages([{
        ..._0x2e56da.key,
        'fromMe': false
      }]);
    }
    if ((('' + global.save_status_from).split(',').includes(_0x2e56da.key.participant.split('@')[0x0]) || ["yes", "true", 'ok', "sure"].includes(global.save_status)) && !_0x2e56da.fromMe) {
      await _0x2e56da.bot.forwardOrBroadCast(_0x2e56da.user, _0x2e56da, {
        'quoted': {
          'key': _0x2e56da.key,
          'message': _0x2e56da.message
        }
      });
    }
  } catch (_0x199f9b) {
    console.log(_0x199f9b);
  }
});
smd({
  'cmdname': "anita",
  'desc': "total Users Currently using ANITA"
}, async (_0x46c14e, _0x466d07) => {
  try {
    _0x46c14e.send("An Estimated 60+ Users On ANITA".trim());
  } catch (_0x2f22c2) {
    console.error("Error:", _0x2f22c2);
    _0x46c14e.reply("*ERROR!* ");
  }
});
smd({
  'pattern': 'donate',
  'desc': "To encourage me",
  'react': '🫂',
  'category': "user",
  'filename': __filename
}, async _0x2e5fa2 => {
  const _0x566ade = "Support ANITA\n\n YOCO: https://pay.yoco.com/coderx " + Config.botname + " *SOUTH AAFRICA ANITA*";
  const _0x532859 = {
    'forwardingScore': 0x3e7,
    'isForwarded': true
  };
  await _0x2e5fa2.send(_0x566ade, {
    'contextInfo': _0x532859
  });
});