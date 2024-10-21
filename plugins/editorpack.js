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
  prefix,
  Config,
  smdBuffer
} = require("../lib");
let photo = ["imageMessage"];
let gfxold = ['ad', "uncover", 'clown', "mnm", "pet", "drip", "gun", "colorify"];
let gfxx = ['beautiful', 'blur', "facepalm", "invert", "rainbow", "wanted", 'wasted', "greyscale", "sepia", "rip", "trash", "hitler", "jail", "shit", 'affect', ...gfxold];
async function createUrl(_0x2ab2b7, _0x38994b = '1') {
  try {
    if (!_0x2ab2b7) {
      return;
    }
    if (!_0x38994b || _0x38994b === '1' || _0x38994b.toLowerCase() === "telegraph") {
      return await TelegraPh(_0x2ab2b7);
    }
    if (_0x38994b === '2' || _0x38994b.toLowerCase().includes("ugu")) {
      return await UploadFileUgu(_0x2ab2b7);
    }
  } catch (_0x36c927) {
    console.log("ERROR IN SCRAPPING FOR CREATE URL()\n", _0x36c927);
  }
}
async function photoEditor(_0x4b8fdf, _0x187334 = 'ad', _0x314347 = '', _0x51abb4 = true) {
  let _0x8f3d1a = ['imageMessage'];
  try {
    let _0x217dc2 = _0x8f3d1a.includes(_0x4b8fdf.mtype) ? _0x4b8fdf : _0x4b8fdf.reply_message;
    if (!_0x217dc2 || !_0x8f3d1a.includes(_0x217dc2?.["mtype"] || "null")) {
      return await _0x4b8fdf.send("*_Uhh Dear, Reply to an image_*");
    }
    let _0x122e21 = await _0x4b8fdf.bot.downloadAndSaveMediaMessage(_0x217dc2);
    let _0x472ec1 = await TelegraPh(_0x122e21);
    try {
      fs.unlinkSync(_0x122e21);
    } catch (_0x4276e9) {}
    return await _0x4b8fdf.bot.sendMessage(_0x4b8fdf.chat, {
      'image': {
        'url': "https://api.popcat.xyz/" + _0x187334 + '?image=' + _0x472ec1
      },
      'caption': _0x314347
    }, {
      'quoted': _0x4b8fdf,
      'messageId': _0x4b8fdf.bot.messageId()
    });
  } catch (_0x54a3f4) {
    if (_0x51abb4) {
      await _0x4b8fdf.error(_0x54a3f4 + "\n\ncommand: " + _0x187334 + "\nfileName: photoEditor->s.js", _0x54a3f4);
    }
  }
}
const sendEditor = async (_0x22c426, _0x5af92f, _0x28e288 = true, _0x1a20fe = Config.caption?.["split"]("\n")[0x0] || '') => {
  if (!gfxx.includes(_0x5af92f)) {
    return;
  }
  try {
    let _0x4f934d = _0x22c426.image ? _0x22c426 : _0x22c426.reply_message && _0x22c426.reply_message.image ? _0x22c426.reply_message : false;
    if (!_0x4f934d || !photo.includes(_0x4f934d.mtype2)) {
      return _0x22c426.reply("*_Uhh Dear,  Reply To An Image!_*");
    }
    let _0x26a1b9 = await _0x22c426.bot.downloadAndSaveMediaMessage(_0x4f934d);
    var _0x3af32c = '';
    try {
      _0x3af32c = (await createUrl(_0x26a1b9, "uguMashi")).url;
      if (!_0x3af32c) {
        throw new Error("invalid Media!");
      }
    } catch (_0xcc8cf9) {
      console.log(_0xcc8cf9);
      try {
        _0x3af32c = await createUrl(_0x26a1b9);
      } catch (_0x3b4fce) {
        _0x3af32c = false;
      }
    }
    try {
      fs.unlink(_0x26a1b9);
    } catch (_0x20f839) {}
    if (!_0x3af32c) {
      return _0x22c426.reply("*_Failed To Create Url!_*");
    }
    let _0x46c5b5 = await smdBuffer(api_smd + "/api/maker/" + _0x5af92f + "?url=" + _0x3af32c);
    _0x22c426.send(_0x46c5b5, {
      'caption': _0x1a20fe
    }, "img", _0x4f934d);
  } catch (_0x3bae38) {
    if (_0x28e288) {
      console.log(_0x3bae38);
      await _0x22c426.error(_0x3bae38 + "\n\ncommand " + _0x5af92f, _0x3bae38, false);
    }
  }
};
for (let i = 0x0; i < gfxx.length; i++) {
  smd({
    'cmdname': gfxx[i],
    'infocmd': "Edit image with " + gfxx[i] + " effect!",
    'type': "editor",
    'use': "< image >",
    'filename': __filename
  }, async (_0x89e334, _0x50bfab, {
    smd: _0x51f5fc
  }) => {
    try {
      if (gfxold.includes(_0x51f5fc)) {
        await photoEditor(_0x89e334, _0x51f5fc);
      } else {
        sendEditor(_0x89e334, _0x51f5fc);
      }
    } catch (_0xe63c78) {
      await message.error(_0xe63c78 + "\n\ncommand: " + _0x51f5fc, _0xe63c78, "Request Denied!");
    }
  });
}
smd({
  'cmdname': "editor",
  'infocmd': "create gfx logo for text",
  'type': 'editor',
  'use': "< image >",
  'filename': __filename
}, async (_0x6f8bd7, _0x2ffdde, {
  smd: _0x4fadbd
}) => {
  try {
    let _0x468cbe = _0x6f8bd7.image ? _0x6f8bd7 : _0x6f8bd7.reply_message && _0x6f8bd7.reply_message.image ? _0x6f8bd7.reply_message : false;
    if (!_0x468cbe) {
      let _0x21fa67 = "┌───〈 *ᴇᴅɪᴛᴏʀ ᴍᴇɴᴜ*  〉───◆\n│╭─────────────···▸\n┴│▸\n⬡│▸ " + gfxx.join(" \n⬡│▸ ") + "\n┬│▸\n│╰────────────···▸▸\n└───────────────···▸\n\n\t *USE: _" + (prefix + _0x4fadbd) + "_ by replying image*\n_To get All Results with single Cmd!_\n";
      return await _0x6f8bd7.sendUi(_0x6f8bd7.chat, {
        'caption': _0x21fa67
      });
    }
    for (let _0x1bb936 = 0x0; _0x1bb936 < gfxx.length; _0x1bb936++) {
      try {
        if (gfxold.includes(gfxx[_0x1bb936])) {
          await photoEditor(_0x6f8bd7, gfxx[_0x1bb936]);
        } else {
          sendEditor(_0x6f8bd7, gfxx[_0x1bb936], false);
        }
      } catch (_0x2839dd) {}
    }
  } catch (_0x45d715) {
    _0x6f8bd7.error(_0x45d715 + "\n\nCommand: " + _0x4fadbd, _0x45d715, false);
  }
});