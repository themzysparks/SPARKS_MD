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
  sleep
} = require('../lib');
const teddyM = {
  'smd': "anita"
};
smd({
  'cmdname': "teddy",
  'type': "fun",
  'info': "cute teddy",
  'on': "text",
  'filename': __filename
}, async (_0x41c86d, _0x232ce2, {
  smd: _0x117c5e
}) => {
  let _0x1c22bb = _0x117c5e === "teddy" ? true : _0x41c86d.isPublic && _0x232ce2.toLowerCase().includes("teddy") ? true : '';
  if (_0x1c22bb && !teddyM[_0x41c86d.id]) {
    teddyM[_0x41c86d.id] = true;
    let _0x5df1ea = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈'];
    const {
      key: _0x1930d6
    } = await _0x41c86d.reply("(\\_/)\n( •.•)\n/>🤍");
    for (let _0x429f24 = 0x0; _0x429f24 < _0x5df1ea.length; _0x429f24++) {
      await sleep(0x1f4);
      await _0x41c86d.reply("(\\_/)\n( •.•)\n/>" + _0x5df1ea[_0x429f24], {
        'edit': _0x1930d6
      });
    }
  }
});