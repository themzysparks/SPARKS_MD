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


let DELCHAT = process.env.DELCHAT || 'pm';
const {
  smd,
  tlang,
  botpic,
  prefix,
  Config,
  bot_
} = require("../lib");
let bgmm = false;
smd({
  'pattern': "antidelete",
  'alias': ['delete'],
  'desc': "turn On/Off auto download deletes",
  'fromMe': true,
  'category': 'general',
  'use': "<on/off>",
  'filename': __filename
}, async (_0x39bf37, _0x350e39) => {
  try {
    bgmm = (await bot_.findOne({
      'id': "bot_" + _0x39bf37.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0x39bf37.user
    }));
    let _0x353ee8 = _0x350e39.toLowerCase().split(" ")[0x0].trim();
    if (_0x353ee8 === 'on' || _0x353ee8 === "enable" || _0x353ee8 === "act") {
      if (bgmm.antidelete === "true") {
        return await _0x39bf37.reply("*Anti_Delete already enabled!*");
      }
      await bot_.updateOne({
        'id': "bot_" + _0x39bf37.user
      }, {
        'antidelete': "true"
      });
      return await _0x39bf37.reply("*Anti_Delete Succesfully enabled*");
    } else {
      if (_0x353ee8 === "off" || _0x353ee8 === 'disable' || _0x353ee8 === "deact") {
        if (bgmm.antidelete === "false") {
          return await _0x39bf37.reply("*Anti_Delete already disabled*");
        }
        await bot_.updateOne({
          'id': "bot_" + _0x39bf37.user
        }, {
          'antidelete': "false"
        });
        return await _0x39bf37.reply("*Anti_Delete Succesfully deactivated*");
      } else {
        return await _0x39bf37.send("*_Use on/off to enable/disable Anti_Delete!_*");
      }
    }
  } catch (_0x3d543c) {
    await _0x39bf37.error(_0x3d543c + "\n\nCommand: antidelete ", _0x3d543c);
  }
});
let ms = [];
let {
  stor,
  isGroup
} = require("../lib");
smd({
  'on': "delete"
}, async (_0x285e81, _0x2f5141, {
  store: _0x1a8013
}) => {
  try {
    let _0x55cf92 = await bot_.findOne({
      'id': "bot_" + _0x285e81.user
    });
    if (_0x55cf92 && _0x55cf92.antidelete && _0x55cf92.antidelete === "true") {
      let _0x27c362 = _0x285e81.msg.key.participant ? _0x285e81.msg.key.participant : _0x285e81.msg.key.fromMe ? _0x285e81.user : _0x285e81.msg.key.remoteJid;
      let _0x37b738 = await stor();
      if (!_0x37b738.messages[_0x285e81.from]) {
        _0x37b738.messages[_0x285e81.from] = {};
      }
      ms = [..._0x37b738.messages[_0x285e81.from], ..._0x1a8013.messages[_0x285e81.from].array];
      for (let _0x2618d6 = 0x0; _0x2618d6 < ms.length; _0x2618d6++) {
        if (ms[_0x2618d6].key.id === _0x285e81.msg.key.id) {
          let _0x1843a9 = await _0x285e81.bot.fakeMessage("text", {
            'id': _0x285e81.msg.key.id
          }, "*[ANTIDELETE DETECTED]*");
          let _0x368ed9 = await _0x285e81.bot.forwardOrBroadCast(/pm/gi.test(DELCHAT) ? _0x285e81.user : _0x285e81.from, ms[_0x2618d6].message, {
            'quoted': ms[_0x2618d6].message && ms[_0x2618d6].message.conversation ? undefined : _0x1843a9
          });
          if (_0x368ed9) {
            await _0x285e81.bot.sendMessage(/pm/gi.test(DELCHAT) ? _0x285e81.user : _0x285e81.from, {
              'text': "*[DELETED INFORMATION]*\n\n*TIME:* " + _0x285e81.time + "\n*CHAT:* " + (await _0x285e81.bot.getName(_0x285e81.chat)).split("\n").join("  ") + "\n*DELETED BY:* @" + _0x285e81.senderNum + "\n*MESSGE FROM:* @" + _0x27c362.split('@')[0x0],
              'mentions': [_0x27c362, _0x285e81.sender]
            }, {
              'quoted': _0x368ed9
            });
          }
          break;
        }
      }
    }
  } catch (_0x1391a9) {
    console.log(_0x1391a9);
  }
});