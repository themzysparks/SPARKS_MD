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
  smd,
  Config
} = require("../lib");
smd({
  'pattern': 'live',
  'desc': "Show Live Time Of Pakistan",
  'category': "fun",
  'filename': __filename,
  'use': "<group link.>"
}, async _0x274e44 => {
  try {
    var _0x4d69f4 = ('' + _0x274e44.time).replace('am', 'ᴀᴍ').replace('pm', 'ᴘᴍ');
    var _0x5199dc = _0x274e44.date;
    const [_0x39391b, _0x2005e0, _0x345bf9, _0x532236] = ('' + _0x274e44.time).split(/:| /);
    const _0x45b3a1 = parseInt(_0x39391b, 0xa);
    var _0x360a58 = "ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙";
    if (_0x532236 == 'am') {
      if (_0x45b3a1 >= 0x0 && _0x45b3a1 < 0x5) {
        _0x360a58 = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ, ᴇᴀʀʟʏ ʙɪʀᴅ! 🌄";
      } else {
        if (_0x45b3a1 >= 0x5 && _0x45b3a1 < 0xc) {
          _0x360a58 = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅";
        }
      }
    } else {
      if (_0x45b3a1 >= 0x0 && _0x45b3a1 < 0x5) {
        _0x360a58 = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞";
      } else {
        if (_0x45b3a1 >= 0x5 && _0x45b3a1 < 0x8) {
          _0x360a58 = "ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥";
        } else {
          _0x360a58 = "ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙";
        }
      }
    }
    const _0x61faaf = await _0x274e44.bot.fakeMessage('order');
    let _0x127856 = {
      ...(await _0x274e44.bot.contextInfo())
    };
    let _0x39e5ef = "\n╭────────────────╮\n│    *" + _0x360a58 + "* \n│     *ᴛɪᴍᴇ* ⌚ " + _0x4d69f4 + " \n│     *Date* 🎲   " + _0x5199dc + " \n│   " + Config.caption + "\n╰────────────────╯\n";
    await _0x274e44.send(_0x39e5ef, {
      'contextInfo': _0x127856
    }, "asta", _0x61faaf);
  } catch (_0x182bfe) {
    await _0x274e44.error(_0x182bfe + "\n\ncommand: live", _0x182bfe, false);
  }
});