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
  tlang,
  prefix,
  Config,
  sleep,
  getBuffer,
  astroJson,
  smdBuffer
} = require("../lib");
async function loadMessages(_0x45eea4, _0xf03090, _0x234344 = '') {
  try {
    _0x234344 = (_0x234344 ? _0x234344 : _0xf03090).split('@')[0x0];
    let _0x5eade9 = await _0x45eea4.loadMessages(_0xf03090);
    let _0x5650af = [];
    for (let _0x5a3f84 = 0x0; _0x5a3f84 < _0x5eade9.length; _0x5a3f84++) {
      if (_0x5eade9[_0x5a3f84].key.participant?.["includes"](_0x234344)) {
        _0x5650af.push(_0x5eade9[_0x5a3f84]);
      }
    }
    return _0x5650af;
  } catch (_0x942216) {
    console.log(_0x942216);
    return [];
  }
}
smd({
  'pattern': "delspam",
  'alias': ["dlspam"],
  'category': "tech",
  'desc': "delete messages of user from chat",
  'use': "[ 4/ 6/ 10 ]",
  'usage': "delete messages of replied/@mentioned user from chat by giving number of messages!",
  'filename': __filename
}, async (_0x5ced03, _0x11588c, {
  store: _0x1bc735
}) => {
  try {
    if (!_0x5ced03.isGroup) {
      return await _0x5ced03.send(tlang("group"));
    }
    if (!_0x5ced03.isBotAdmin) {
      return await _0x5ced03.send("I am Not Admin!");
    }
    if (!_0x5ced03.isAdmin && !_0x5ced03.isCreator) {
      return await _0x5ced03.send(tlang('admin'));
    }
    let _0x24d91e = _0x5ced03.quoted ? _0x5ced03.quoted.senderNum : _0x5ced03.mentionedJid[0x0] ? _0x5ced03.mentionedJid[0x0] : false;
    if (!_0x24d91e) {
      return await _0x5ced03.send("*Please reply/@user to delete messages!*\n*Use '" + prefix + "delspam 5 @user' (delete 5 msgs)*");
    }
    let _0x4d1a52 = await loadMessages(_0x1bc735, _0x5ced03.chat, _0x24d91e);
    let _0x3e637a = parseInt(_0x11588c.split(" ")[0x0]) || 0x5;
    let _0x1e9274 = _0x4d1a52.length - _0x3e637a;
    for (let _0x77886c = _0x4d1a52.length - 0x1; _0x77886c >= _0x1e9274; _0x77886c--) {
      try {
        if (_0x4d1a52[_0x77886c]) {
          await _0x5ced03["delete"](_0x4d1a52[_0x77886c]);
        }
      } catch (_0x4de2b8) {}
    }
  } catch (_0x1e6886) {
    console.log(_0x1e6886);
  }
});