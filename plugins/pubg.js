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
  smd,
  textToLogoGenerator,
  prefix
} = require(lib_dir);
let pubg = {
  'type': 'pubg',
  'info': "create pubg text logo.",
  'filename': __filename
};
let singleText = async (_0x1e8fff, _0x520dab, {
  cmdName: _0x5e726c
}) => {
  try {
    let _0x4697be = {
      'pubg1': "tao-cover-game-pubg-anh-bia-game-playerunknown-s-battlegrounds-401",
      'pubg2': "tao-anh-bia-cover-facebook-game-pubg-407",
      'pubg3': "tao-logo-pubg-truc-tuyen-mien-phi-714",
      'pubg4': "tao-logo-mascot-pubg-online-sieu-ngau-716",
      'pubg5': "tao-logo-pubg-truc-tuyen-nhieu-mau-sac-717",
      'pubg6': "tao-logo-pubg-phong-cach-chibi-online-721"
    };
    if (!_0x520dab) {
      return _0x1e8fff.reply("*_Example : " + (prefix + _0x5e726c) + " Astro_*");
    }
    return await textToLogoGenerator(_0x1e8fff, _0x4697be[_0x5e726c], _0x520dab, "asta", '1');
  } catch (_0x1ba5d2) {
    return await _0x1e8fff.error(_0x1ba5d2 + "\n\ncmdName: " + _0x5e726c, _0x1ba5d2);
  }
};
for (cmd of ["pubg1", "pubg2", "pubg3", "pubg4", "pubg5", "pubg6"]) {
  smd({
    'cmdname': cmd,
    ...pubg
  }, singleText);
}
smd({
  'cmdname': 'pubg7',
  ...pubg
}, async (_0x5aad50, _0x287bb9, {
  cmdName: _0x16cdf2
}) => {
  try {
    let _0x4a8ab7 = _0x287bb9 ? _0x287bb9.split(';')[0x0] : '';
    let _0x119cbe = _0x287bb9 ? _0x287bb9.split(';')[0x1] : '';
    if (!_0x119cbe || !_0x4a8ab7) {
      return await _0x5aad50.reply("*_Example : " + (prefix + _0x16cdf2) + " text1;text2_*");
    }
    return await textToLogoGenerator(_0x5aad50, "tao-logo-pubg-truc-tuyen-phong-cach-den-trang-715", _0x4a8ab7, _0x119cbe, '1');
  } catch (_0x2001d2) {
    return await _0x5aad50.error(_0x2001d2 + "\n\ncmdName: " + _0x16cdf2, _0x2001d2);
  }
});