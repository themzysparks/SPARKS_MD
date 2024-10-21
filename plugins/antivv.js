/*
▄▀█ █▄░█ █ ▀█▀ ▄▀█
█▀█ █░▀█ █ ░█░ █▀█

*
   * @project_name : ANITA
   * @author : CODERXSA
   * @youtube : https://www.youtube.com/@coderxsa
   * @instagram : https://www.instagram.com/coderx.sa
   * @description : My Private build i made public for everone to use and easy hosting.
   * @version : 1.0.3
   * Donation : https://pay.yoco.com/coderx
   
   * For all my GitHub bots, I typically only check and update them when I have the time. My primary focus is on my main bots.
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By CODERX.
   * © 2024 ANITA.
*/

//══════════════════════════════════════════════════════════════════════════════════════════════════════//

const {
  smd,
  bot_
} = require("../lib");
let bgmm = false;
smd({
  'cmdname': 'antiviewonce',
  'alias': ["antivv"],
  'desc': "turn On/Off auto viewOnce Downloder",
  'fromMe': true,
  'type': 'user',
  'use': "<on/off>",
  'filename': __filename
}, async (_0xd92779, _0x3f09cd) => {
  try {
    bgmm = (await bot_.findOne({
      'id': "bot_" + _0xd92779.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0xd92779.user
    }));
    let _0x5e8909 = _0x3f09cd.toLowerCase().split(" ")[0x0].trim();
    if (_0x5e8909 === 'on' || _0x5e8909 === "enable" || _0x5e8909 === 'act') {
      if (bgmm.antiviewonce === "true") {
        return await _0xd92779.reply("*AntiViewOnce already enabled!*");
      }
      await bot_.updateOne({
        'id': "bot_" + _0xd92779.user
      }, {
        'antiviewonce': "true"
      });
      return await _0xd92779.reply("*AntiViewOnce Succesfully enabled*");
    } else {
      if (_0x5e8909 === 'off' || _0x5e8909 === "disable" || _0x5e8909 === "deact") {
        if (bgmm.antiviewonce === "false") {
          return await _0xd92779.reply("*AntiViewOnce already disabled*");
        }
        await bot_.updateOne({
          'id': "bot_" + _0xd92779.user
        }, {
          'antiviewonce': 'false'
        });
        return await _0xd92779.reply("*AntiViewOnce Succesfully deactivated*");
      } else {
        return await _0xd92779.send("*_Use on/off to enable/disable antiViewOnce!_*");
      }
    }
  } catch (_0x2b34ff) {
    await _0xd92779.error(_0x2b34ff + "\n\nCommand: AntiViewOnce ", _0x2b34ff);
  }
});
smd({
  'on': "viewonce"
}, async (_0x510b22, _0x20c0bc) => {
  try {
    if (!bgmm) {
      bgmm = await bot_.findOne({
        'id': "bot_" + _0x510b22.user
      });
    }
    if (bgmm && bgmm.antiviewonce && bgmm.antiviewonce === 'true') {
      let _0x44ad31 = {
        'key': {
          ..._0x510b22.key
        },
        'message': {
          'conversation': "```[VIEWONCE DETECTED] downloading!```"
        }
      };
      let _0x5572d1 = await _0x510b22.bot.downloadAndSaveMediaMessage(_0x510b22.msg);
      await _0x510b22.bot.sendMessage(_0x510b22.from, {
        [_0x510b22.mtype2.split('Message')[0x0]]: {
          'url': _0x5572d1
        },
        'caption': _0x510b22.body
      }, {
        'quoted': _0x44ad31
      });
    }
  } catch (_0x32d0e8) {
    console.log("error while getting antiviewOnce media\n, ", _0x32d0e8);
  }
});