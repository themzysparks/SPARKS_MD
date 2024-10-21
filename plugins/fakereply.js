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
  prefix
} = require("../lib");
smd({
  'cmdname': "fakereply",
  'alias': ["freply"],
  'desc': "Create fake Reply by given texts!",
  'type': 'general',
  'use': " msg| reply_text | number ",
  'usage': "generates fake messages of given text and number!",
  'filename': __filename,
  'public': true
}, async (_0x41f7ce, _0xedc35b) => {
  try {
    let _0x13b864 = ["text", "order", "contact", "image", 'video'];
    let _0x388ac9 = _0xedc35b.split('|');
    if (!_0xedc35b || _0x388ac9.length < 0x3) {
      return await _0x41f7ce.reply("*Use " + prefix + "fakereply text |Reply_text|27717311486|type(text,order,contact,image,video)*");
    }
    let _0x267e29 = _0x388ac9[0x0];
    let _0x4a7d3d = _0x388ac9[0x1];
    let _0x1dd99f = _0x388ac9[0x2].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    let _0x2ca2c4 = _0x388ac9[0x3] && _0x13b864.includes(_0x388ac9[0x3]) ? _0x388ac9[0x3] : 'text';
    let _0x3238f2 = "SMD";
    for (let _0x5b1490 = 0x0; _0x5b1490 < 0xd; _0x5b1490++) {
      _0x3238f2 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZ".length)];
    }
    let _0x579fb2 = await _0x41f7ce.bot.fakeMessage(_0x2ca2c4, {
      'id': _0x3238f2,
      'remoteJid': _0x41f7ce.isGroup ? _0x41f7ce.chat : _0x1dd99f,
      'participant': _0x1dd99f
    }, _0x4a7d3d);
    try {
      if (_0x2ca2c4 === "contact") {
        _0x579fb2.message.contactMessage.jpegThumbnail = await _0x41f7ce.getpp(_0x1dd99f);
      }
    } catch (_0x4f7ed5) {
      console.log(_0x4f7ed5);
    }
    await _0x41f7ce.bot.sendMessage(_0x41f7ce.chat, {
      'text': _0x267e29
    }, {
      'quoted': _0x579fb2
    });
  } catch (_0x48512a) {
    _0x41f7ce.error(_0x48512a + "\n\nCommand: fakereply", _0x48512a, false);
  }
});