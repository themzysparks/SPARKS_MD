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
smd({
  'cmdname': "gifsearch",
  'alias': ["gify", "tenor"],
  'category': "search",
  'use': "[text]",
  'info': "Searches gif"
}, async (_0x5d699f, _0x311ddb) => {
  try {
    if (!_0x311ddb) {
      return _0x5d699f.reply("Sorry you did not give any search term!");
    }
    const _0x5da902 = require("axios");
    const _0x1c05af = await _0x5da902.get("https://g.tenor.com/v1/search?q=" + _0x311ddb + "&key=LIVDSRZULELA&limit=8")['catch'](() => {});
    if (!_0x1c05af.data || !_0x1c05af.data.results || !_0x1c05af.data.results[0x0]) {
      return _0x5d699f.reply("*Could not find*");
    }
    let _0x27dc7a = _0x1c05af.data.results.length > 0x5 ? 0x5 : _0x1c05af.data.results.length;
    for (let _0x40e12f = 0x0; _0x40e12f < _0x27dc7a; _0x40e12f++) {
      _0x5d699f.send(_0x1c05af.data.results?.[_0x40e12f]?.["media"][0x0]?.["mp4"]?.["url"], {
        'caption': Config.caption,
        'gifPlayback': true
      }, "amdvid", _0x5d699f);
    }
  } catch (_0x2267a1) {
    _0x5d699f.error(_0x2267a1 + "\n\nCommand: gifsearch", _0x2267a1, "*Could not find*");
  }
});