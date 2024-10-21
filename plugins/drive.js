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
  isUrl,
  Config
} = require("../lib/index");
import("node-fetch").then(_0x2098f3 => {
  const _0x1b7f1c = _0x2098f3["default"];
  smd({
    'pattern': 'drive',
    'alias': ["mdrive", "gdrive"],
    'desc': "google drive downloader",
    'type': "downloader",
    'use': "<URL>"
  }, async (_0x5ca8c2, _0x442bfc) => {
    try {
      _0x442bfc = isUrl(_0x442bfc || _0x5ca8c2.reply_text);
      if (!_0x442bfc || !_0x442bfc[0x0]) {
        return await _0x5ca8c2.send("*Example : mdrive https://drive.google.com/file/d/15Vl6Df8GO8Gi3woPG-gOMxLQ-B_fkLaw/view*");
      }
      let _0x3d412d = await _0x549352(_0x442bfc[0x0], _0x1b7f1c);
      if (!_0x3d412d) {
        return await _0x5ca8c2.reply("*Not found*");
      }
      let _0x3be34c = await _0x5ca8c2.send(("≡ *GOGGLE DRIVE DOWNLOADER*\n\n▢ *Name:* " + _0x3d412d.fileName + "\n▢ *Size:* " + _0x4efe0c(_0x3d412d.sizeBytes) + "\n▢ *Type:* " + _0x3d412d.mimetype + "\n\n" + Config.caption).trim());
      return await _0x5ca8c2.bot.sendMessage(_0x5ca8c2.chat, {
        'document': {
          'url': _0x3d412d.downloadUrl
        },
        ..._0x3d412d
      }, {
        'quoted': _0x3be34c
      });
    } catch (_0x5e2c74) {
      _0x5ca8c2.error(_0x5e2c74 + "\n\nCommand drive", _0x5e2c74, _0x5e2c74.message || "ERROR!");
    }
  });
  async function _0x549352(_0x1b75b0, _0x7c87f1) {
    let _0x4822da;
    if (!_0x1b75b0 || !_0x1b75b0.match(/drive\.google/i)) {
      throw "Invalid URL";
    }
    _0x4822da = (_0x1b75b0.match(/\/?id=(.+)/i) || _0x1b75b0.match(/\/d\/(.*?)\//))[0x1];
    if (!_0x4822da) {
      throw "ID Not Found";
    }
    let _0x279f2b = await _0x7c87f1('https://drive.google.com/uc?id=' + _0x4822da + "&authuser=0&export=download", {
      'method': "post",
      'headers': {
        'accept-encoding': "gzip, deflate, br",
        'content-length': 0x0,
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'origin': 'https://drive.google.com',
        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
        'x-client-data': "CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=",
        'x-drive-first-party': "DriveWebUi",
        'x-json-requested': "true"
      }
    });
    let _0x1703b4 = JSON.parse((await _0x279f2b.text()).slice(0x4));
    let {
      fileName: _0x15180b,
      sizeBytes: _0x31c7d9,
      downloadUrl: _0x2f3a89
    } = _0x1703b4;
    if (!_0x2f3a89) {
      throw "URL noT Found!";
    }
    let _0x38942f = await _0x7c87f1(_0x2f3a89);
    if (_0x38942f.status !== 0xc8) {
      throw "Request Not Completed!";
    }
    return {
      'downloadUrl': _0x2f3a89,
      'fileName': _0x15180b,
      'sizeBytes': _0x31c7d9,
      'mimetype': _0x38942f.headers.get("content-type")
    };
  }
  function _0x4efe0c(_0x2f3502, _0x3e355e = 0x2) {
    if (_0x2f3502 === 0x0) {
      return "0 Bytes";
    }
    const _0x14074f = _0x3e355e < 0x0 ? 0x0 : _0x3e355e;
    const _0x5464e4 = ["Bytes", 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const _0x343650 = Math.floor(Math.log(_0x2f3502) / Math.log(0x400));
    return parseFloat((_0x2f3502 / Math.pow(0x400, _0x343650)).toFixed(_0x14074f)) + " " + _0x5464e4[_0x343650];
  }
})["catch"](_0x31599a => {
  console.error("Error during dynamic import:", _0x31599a);
});