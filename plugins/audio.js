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
  smd
} = require("../lib");
const {
  exec
} = require("child_process");
const fs = require('fs');
async function audioEditor(_0x2c85b2, _0x2cd23e = "bass", _0x1fa07f = '') {
  if (!_0x2c85b2.quoted) {
    return await _0x2c85b2.send("*_Uhh Dear, Reply to audio!!!_*");
  }
  let _0x3645a1 = _0x2c85b2.quoted.mtype || _0x2c85b2.mtype;
  if (!/audio/.test(_0x3645a1)) {
    return await _0x2c85b2.send("*_Reply to the audio you want to change with_*", {}, '', _0x1fa07f);
  }
  try {
    let _0x5da40f = "-af equalizer=f=54:width_type=o:width=2:g=20";
    if (/bass/.test(_0x2cd23e)) {
      _0x5da40f = "-af equalizer=f=54:width_type=o:width=2:g=20";
    }
    if (/blown/.test(_0x2cd23e)) {
      _0x5da40f = "-af acrusher=.1:1:64:0:log";
    }
    if (/deep/.test(_0x2cd23e)) {
      _0x5da40f = "-af atempo=4/4,asetrate=44500*2/3";
    }
    if (/earrape/.test(_0x2cd23e)) {
      _0x5da40f = "-af volume=12";
    }
    if (/fast/.test(_0x2cd23e)) {
      _0x5da40f = "-filter:a \"atempo=1.63,asetrate=44100\"";
    }
    if (/fat/.test(_0x2cd23e)) {
      _0x5da40f = "-filter:a \"atempo=1.6,asetrate=22100\"";
    }
    if (/nightcore/.test(_0x2cd23e)) {
      _0x5da40f = "-filter:a atempo=1.06,asetrate=44100*1.25";
    }
    if (/reverse/.test(_0x2cd23e)) {
      _0x5da40f = "-filter_complex \"areverse\"";
    }
    if (/robot/.test(_0x2cd23e)) {
      _0x5da40f = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
    }
    if (/slow/.test(_0x2cd23e)) {
      _0x5da40f = "-filter:a \"atempo=0.7,asetrate=44100\"";
    }
    if (/smooth/.test(_0x2cd23e)) {
      _0x5da40f = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
    }
    if (/tupai/.test(_0x2cd23e)) {
      _0x5da40f = "-filter:a \"atempo=0.5,asetrate=65100\"";
    }
    let _0x3c87d2 = await _0x2c85b2.bot.downloadAndSaveMediaMessage(_0x2c85b2.quoted);
    let _0xfa5301 = "temp/" + (_0x2c85b2.sender.slice(0x6) + _0x2cd23e) + '.mp3';
    exec("ffmpeg -i " + _0x3c87d2 + " " + _0x5da40f + " " + _0xfa5301, async (_0x1a768b, _0xf94b78, _0x32b673) => {
      try {
        fs.unlinkSync(_0x3c87d2);
      } catch {}
      if (_0x1a768b) {
        return _0x2c85b2.error(_0x1a768b);
      } else {
        let _0x1bf0f5 = fs.readFileSync(_0xfa5301);
        try {
          fs.unlinkSync(_0xfa5301);
        } catch {}
        var _0x124243 = {
          ...(await _0x2c85b2.bot.contextInfo("ANITA " + _0x2c85b2.senderName + " 🤍", "⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ⇆"))
        };
        return _0x2c85b2.bot.sendMessage(_0x2c85b2.chat, {
          'audio': _0x1bf0f5,
          'mimetype': "audio/mpeg",
          'ptt': !!/ptt|voice/.test(_0x2c85b2.test || ''),
          'contextInfo': _0x124243
        }, {
          'quoted': _0x2c85b2,
          'messageId': _0x2c85b2.bot.messageId()
        });
      }
    });
  } catch (_0x42af7f) {
    await _0x2c85b2.error(_0x42af7f + "\n\ncmdName : " + _0x2cd23e + "\n");
    return console.log("./lib/asta.js/audioEditor()\n", _0x42af7f);
  }
}
smd({
  'cmdname': "bass",
  'info': "adds bass in given sound",
  'type': "audio",
  'use': "<reply to any audio>"
}, async (_0x13374f, _0x421cf2, {
  smd: _0xb5e1c6
}) => {
  try {
    return await audioEditor(_0x13374f, _0xb5e1c6, _0x13374f);
  } catch (_0x387333) {
    return await _0x13374f.error(_0x387333 + " \n\nCommand: " + _0xb5e1c6, _0x387333);
  }
});
smd({
  'cmdname': "blown",
  'info': "adds blown in given sound",
  'type': 'audio',
  'use': "<reply to any audio>"
}, async (_0x2a078d, _0x30b7d3, {
  smd: _0x54ebcf
}) => {
  try {
    return await audioEditor(_0x2a078d, _0x54ebcf, _0x2a078d);
  } catch (_0x91be3b) {
    return await _0x2a078d.error(_0x91be3b + " \n\nCommand: " + _0x54ebcf, _0x91be3b);
  }
});
smd({
  'cmdname': "deep",
  'info': "adds deep in given sound",
  'type': "audio",
  'use': "<reply to any audio>"
}, async (_0x1bad77, _0x46b734, {
  smd: _0x26c95b
}) => {
  try {
    return await audioEditor(_0x1bad77, _0x26c95b, _0x1bad77);
  } catch (_0x90032c) {
    return await _0x1bad77.error(_0x90032c + " \n\nCommand: " + _0x26c95b, _0x90032c);
  }
});
smd({
  'cmdname': 'earrape',
  'info': "adds earrape in given sound",
  'type': 'audio',
  'use': "<reply to any audio>"
}, async (_0x9da858, _0x362c48, {
  smd: _0x307c86
}) => {
  try {
    return await audioEditor(_0x9da858, _0x307c86, _0x9da858);
  } catch (_0x28bc5c) {
    return await _0x9da858.error(_0x28bc5c + " \n\nCommand: " + _0x307c86, _0x28bc5c);
  }
});
smd({
  'cmdname': "fast",
  'info': "adds fast in given sound",
  'type': 'audio',
  'use': "<reply to any audio>"
}, async (_0x2535ac, _0x2ef3a1, {
  smd: _0x2c5847
}) => {
  try {
    return await audioEditor(_0x2535ac, _0x2c5847, _0x2535ac);
  } catch (_0x5f3193) {
    return await _0x2535ac.error(_0x5f3193 + " \n\nCommand: " + _0x2c5847, _0x5f3193);
  }
});
smd({
  'cmdname': "fat",
  'info': "adds fat in given sound",
  'type': "audio",
  'use': "<reply to any audio>"
}, async (_0x52c5c1, _0x21cabd, {
  smd: _0x900f75
}) => {
  try {
    return await audioEditor(_0x52c5c1, _0x900f75, _0x52c5c1);
  } catch (_0x598801) {
    return await _0x52c5c1.error(_0x598801 + " \n\nCommand: " + _0x900f75, _0x598801);
  }
});
smd({
  'cmdname': "nightcore",
  'info': "adds nightcore in given sound",
  'type': 'audio',
  'use': "<reply to any audio>"
}, async (_0x53893e, _0x3e5b18, {
  smd: _0xc034cd
}) => {
  try {
    return await audioEditor(_0x53893e, _0xc034cd, _0x53893e);
  } catch (_0xde2bcf) {
    return await _0x53893e.error(_0xde2bcf + " \n\nCommand: " + _0xc034cd, _0xde2bcf);
  }
});
smd({
  'cmdname': "reverse",
  'info': "adds reverse in given sound",
  'type': "audio",
  'use': "<reply to any audio>"
}, async (_0x15d2ef, _0x41875a, {
  smd: _0x59ba48
}) => {
  try {
    return await audioEditor(_0x15d2ef, _0x59ba48, _0x15d2ef);
  } catch (_0x30f878) {
    return await _0x15d2ef.error(_0x30f878 + " \n\nCommand: " + _0x59ba48, _0x30f878);
  }
});
smd({
  'cmdname': 'robot',
  'info': "adds robot in given sound",
  'type': "audio",
  'use': "<reply to any audio>"
}, async (_0x4cfba6, _0x35460f, {
  smd: _0x1fd704
}) => {
  try {
    return await audioEditor(_0x4cfba6, _0x1fd704, _0x4cfba6);
  } catch (_0x47e9bc) {
    return await _0x4cfba6.error(_0x47e9bc + " \n\nCommand: " + _0x1fd704, _0x47e9bc);
  }
});
smd({
  'cmdname': "slow",
  'info': "adds slow in given sound",
  'type': "audio",
  'use': "<reply to any audio>"
}, async (_0x202af0, _0x992484, {
  smd: _0x3d7d3d
}) => {
  try {
    return await audioEditor(_0x202af0, _0x3d7d3d, _0x202af0);
  } catch (_0x34f3da) {
    return await _0x202af0.error(_0x34f3da + " \n\nCommand: " + _0x3d7d3d, _0x34f3da);
  }
});
smd({
  'cmdname': 'smooth',
  'info': "adds smooth in given sound",
  'type': "audio",
  'use': "<reply to any audio>"
}, async (_0x322e58, _0x4004d9, {
  smd: _0x44237d
}) => {
  try {
    return await audioEditor(_0x322e58, _0x44237d, _0x322e58);
  } catch (_0x1c43b7) {
    return await _0x322e58.error(_0x1c43b7 + " \n\nCommand: " + _0x44237d, _0x1c43b7);
  }
});
smd({
  'cmdname': "tupai",
  'info': "adds tupai in given sound",
  'type': "audio",
  'use': "<reply to any audio>"
}, async (_0x564a2d, _0x10f5c8, {
  smd: _0x125e4e
}) => {
  try {
    return await audioEditor(_0x564a2d, _0x125e4e, _0x564a2d);
  } catch (_0x61318e) {
    return await _0x564a2d.error(_0x61318e + " \n\nCommand: " + _0x125e4e, _0x61318e);
  }
});