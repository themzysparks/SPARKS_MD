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
  astroJson,
  smdBuffer
} = require("../lib");
const axios = require("axios");
smd({
  'cmdname': "stickersearch",
  'alias': ["sticsearch"],
  'category': "search",
  'use': "[text]",
  'info': "Searches Stickers"
}, async (_0xf47a90, _0x24b90f) => {
  try {
    const {
      generateSticker: _0x4014fd
    } = require("../lib");
    if (!_0x24b90f) {
      return _0xf47a90.reply("Sorry you did not give any search term!");
    }
    const _0x598f95 = await axios.get("https://g.tenor.com/v1/search?q=" + _0x24b90f + "&key=LIVDSRZULELA&limit=8")["catch"](() => {});
    if (!_0x598f95.data || !_0x598f95.data.results || !_0x598f95.data.results[0x0]) {
      return _0xf47a90.reply("*Could not find!*");
    }
    let _0x57460a = _0x598f95.data.results.length > 0x5 ? 0x5 : _0x598f95.data.results.length;
    for (let _0x15a879 = 0x0; _0x15a879 < _0x57460a; _0x15a879++) {
      let _0x63e7a8 = await smdBuffer(_0x598f95.data.results?.[_0x15a879]?.["media"][0x0]?.["mp4"]?.["url"]);
      let _0x182d25 = {
        'pack': Config.packname,
        'author': Config.author,
        'type': 'full',
        'quality': 0x1
      };
      if (_0x63e7a8) {
        _0x4014fd(_0xf47a90, _0x63e7a8, _0x182d25);
      }
    }
  } catch (_0x32deab) {
    _0xf47a90.error(_0x32deab + "\n\nCommand: stickersearch", _0x32deab, "*Could not find*");
  }
});