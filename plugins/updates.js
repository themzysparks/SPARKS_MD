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
  smdBuffer,
  tlang,
  sleep
} = require(global.lib_dir || "../lib");
let fs = require('fs');
var sifat = ['Fine', "Unfriendly", 'Cute', 'Sigma', "Chapri", "Nibba/nibbi", "Annoying", "Dilapidated", "Angry person", "Polite", "Burden", 'Great', 'Cringe', "Liar"];
var hoby = ["Cooking", "Dancing", "Playing", "Gaming", "Painting", "Helping Others", "Watching anime", "Reading", "Riding Bike", "Singing", "Chatting", "Sharing Memes", "Drawing", "Eating Parents Money", "Playing Truth or Dare", "Staying Alone"];
var cakep = ['Yes', 'No', "Very Ugly", "Very Handsome"];
var wetak = ["Caring", "Generous", "Angry person", "Sorry", "Submissive", "Fine", "Im sorry", "Kind Hearted", "Patient", "UwU", "Top", "Helpful"];
var checkme = {};
smd({
  'cmdname': "checkme",
  'alias': ['aboutme'],
  'desc': "Check randome information about your character!",
  'category': "updates",
  'filename': __filename
}, async (_0x318b62, _0x350e03) => {
  try {
    let _0x5b69a4 = _0x318b62.sender;
    if (_0x318b62.isCreator) {
      _0x5b69a4 = _0x318b62.reply_message ? _0x318b62.reply_message.sender : _0x318b62.mentionedJid[0x0] ? _0x318b62.mentionedJid[0x0] : _0x5b69a4;
    }
    let _0x8eb7e7 = !/fresh|reset|new|why|update/g.test(_0x350e03) && checkme[_0x5b69a4] ? checkme[_0x5b69a4] : "*ABOUT @" + _0x5b69a4.split('@')[0x0] + "*\n  \n*Name :* " + (await _0x318b62.bot.getName(_0x5b69a4)).split("\n").join("  ") + "\n*Characteristic :* " + sifat[Math.floor(Math.random() * sifat.length)] + "\n*Hobby :* " + hoby[Math.floor(Math.random() * hoby.length)] + "\n*Simp :* " + Math.floor(Math.random() * 0x65) + "%\n*Great :* " + Math.floor(Math.random() * 0x65) + "%\n*Handsome :* " + cakep[Math.floor(Math.random() * cakep.length)] + "\n*Character :* " + wetak[Math.floor(Math.random() * wetak.length)] + "\n*Good Morals :* " + Math.floor(Math.random() * 0x65) + "%\n*Bad Morals :* " + Math.floor(Math.random() * 0x65) + "%\n*Intelligence :* " + Math.floor(Math.random() * 0x65) + "%\n*Courage :* " + Math.floor(Math.random() * 0x65) + "%\n*Afraid :* " + Math.floor(Math.random() * 0x65) + "%\n  \n *ANITA*";
    checkme[_0x5b69a4] = _0x8eb7e7;
    _0x318b62.bot.sendUi(_0x318b62.from, {
      'caption': _0x8eb7e7,
      'mentions': [_0x5b69a4]
    }, {
      'quoted': _0x318b62
    }, "image", await _0x318b62.getpp(_0x5b69a4), true);
  } catch (_0x20134b) {
    _0x318b62.error(_0x20134b + "\n\nCommand:aboutme", _0x20134b, false);
  }
});
smd({
  'pattern': "cleartmp",
  'type': "updates",
  'info': "Clear temporary files cache"
}, async _0x1e052f => {
  try {
    if (fs.existsSync("./temp")) {
      fs.readdirSync("./temp").forEach(_0x259d52 => fs.rmSync("./temp/" + _0x259d52));
    }
    await _0x1e052f.reply("_The *temp* folder has been cleaned_");
  } catch (_0x14aab0) {
    _0x1e052f.error(_0x14aab0 + "\n\nCommand: cleartmp", _0x14aab0, false);
  }
});
smd({
  'cmdname': "request",
  'alias': ["reportbug", "report"],
  'desc': "report bug/features of bot to its creator!",
  'category': "updates",
  'filename': __filename
}, async (_0xd10c53, _0x1049ee) => {
  try {
    if (!_0x1049ee) {
      return _0xd10c53.reply("Example : " + prefix + "request [REQUEST/BUG] yt commands are not working!");
    }
    if (_0x1049ee.split(" ").length < 0x5) {
      return _0xd10c53.reply("_your `REQUEST/BUG`  must have `5 words` !_");
    }
    let _0x389ba5 = "\n\n*User* : @" + _0xd10c53.senderNum + "\n\n*Request/Bug* : " + _0x1049ee;
    let _0x5d3fa3 = "\n\n*Hii " + _0xd10c53.senderName.split("\n").join(" ") + ", Your request has been forwarded to my Creator!*.";
    await _0xd10c53.sendMessage('27717311486@s.whatsapp.net', {
      'text': "*| REQUEST/BUG |*" + _0x389ba5,
      'mentions': [_0xd10c53.sender]
    }, {
      'quoted': _0xd10c53
    });
    await _0xd10c53.reply("*| REQUEST/BUG |*" + _0x5d3fa3 + _0x389ba5, {
      'mentions': [_0xd10c53.sender]
    }, "asta", _0xd10c53);
  } catch (_0x4c23d6) {
    _0xd10c53.error(_0x4c23d6 + "\n\nCommand: request", _0x4c23d6, false);
  }
});
smd({
  'cmdname': "closetime",
  'alias': ['setclose', "setmute"],
  'desc': "set temporary timer to close a group chat!",
  'category': "updates",
  'filename': __filename
}, async (_0x296133, _0x1085b7, {
  args: _0x10017d
}) => {
  try {
    if (!_0x296133.isGroup) {
      return _0x296133.reply(tlang("group"));
    }
    if (!_0x296133.isBotAdmin) {
      return _0x296133.reply(tlang("botAdmin"));
    }
    if (!_0x296133.isAdmin && !_0x296133.isCreator) {
      return _0x296133.reply(tlang('admin'));
    }
    let _0x52d752 = _0x10017d[0x1] || '';
    let _0x2d833a = parseInt(_0x10017d[0x0]) || '';
    if (!_0x2d833a || isNaN(_0x2d833a)) {
      return await _0x296133.reply("*please provide time with type*\n*Use : " + prefix + "setclose 2 minute*");
    }
    if (_0x52d752.includes("sec")) {
      var _0x1dead3 = _0x10017d[0x0] * "1000";
    } else {
      if (_0x52d752.includes("min")) {
        var _0x1dead3 = _0x10017d[0x0] * "60000";
      } else {
        if (_0x52d752.includes("hour")) {
          var _0x1dead3 = _0x10017d[0x0] * '3600000';
        } else {
          return _0x296133.reply("*Please provide an option below !*\n      *" + prefix + "setclose 30 second*\n      *" + prefix + "setclose 10 minute*\n      *" + prefix + "setclose 1 hour*");
        }
      }
    }
    _0x296133.reply("*Group close in next '" + _0x10017d[0x0] + " " + _0x10017d[0x1] + "'!*");
    setTimeout(() => {
      _0x296133.bot.groupSettingUpdate(_0x296133.from, "announcement");
      _0x296133.reply("*Group closed!*");
    }, _0x1dead3);
  } catch (_0x46dc58) {
    console.log({
      'e': _0x46dc58
    });
  }
});
smd({
  'cmdname': "opentime",
  'alias': ["setopen", 'setunmute'],
  'desc': "set temporary timer to open a group chat!",
  'category': "updates",
  'filename': __filename
}, async (_0x533643, _0x3d4e17, {
  args: _0x1842dc
}) => {
  try {
    if (!_0x533643.isGroup) {
      return _0x533643.reply(tlang("group"));
    }
    if (!_0x533643.isBotAdmin) {
      return _0x533643.reply(tlang("botAdmin"));
    }
    if (!_0x533643.isAdmin && !_0x533643.isCreator) {
      return _0x533643.reply(tlang("admin"));
    }
    let _0x43fd41 = _0x1842dc[0x1] || '';
    let _0x787b7d = parseInt(_0x1842dc[0x0]) || '';
    if (!_0x787b7d || isNaN(_0x787b7d)) {
      return await _0x533643.reply("*please provide time with type*\n*Use : " + prefix + "setopen 2 minute*");
    }
    if (_0x43fd41.includes("sec")) {
      var _0x402434 = _0x1842dc[0x0] * "1000";
    } else {
      if (_0x43fd41.includes('min')) {
        var _0x402434 = _0x1842dc[0x0] * '60000';
      } else {
        if (_0x43fd41.includes("hour")) {
          var _0x402434 = _0x1842dc[0x0] * '3600000';
        } else {
          return _0x533643.reply("*Please provide an option below !*\n      *" + prefix + "setopen 40 second*\n      *" + prefix + "setopen 10 minute*\n      *" + prefix + "setopen 1 hour*");
        }
      }
    }
    _0x533643.reply("*Group open in next '" + _0x1842dc[0x0] + " " + _0x1842dc[0x1] + "'!*");
    setTimeout(() => {
      _0x533643.bot.groupSettingUpdate(_0x533643.from, "not_announcement");
      _0x533643.reply("*Hurray! Group Opened*\n *Now Members Can Send Messages*");
    }, _0x402434);
  } catch (_0x9b4101) {
    console.log({
      'e': _0x9b4101
    });
  }
});
smd({
  'cmdname': "ephemeral",
  'alias': ['disapear'],
  'desc': "enable disapearing messages from chat!",
  'category': "updates",
  'filename': __filename
}, async (_0x3ddda8, _0xefffc2, {
  args: _0x2d903c
}) => {
  try {
    if (!_0x3ddda8.isGroup) {
      return _0x3ddda8.reply(tlang("group"));
    }
    if (!_0x3ddda8.isBotAdmin) {
      return _0x3ddda8.reply(tlang('botAdmin'));
    }
    if (!_0x3ddda8.isAdmin && !_0x3ddda8.isCreator) {
      return _0x3ddda8.reply(tlang("admin"));
    }
    if (!_0xefffc2) {
      return await _0x3ddda8.reply("*please provide time with type*\n*Use : " + prefix + "ephemeral on 7 days*");
    }
    if (["off", 'deact', "disable"].includes(_0xefffc2.split(" ")[0x0].toLowerCase())) {
      await _0x3ddda8.bot.sendMessage(_0x3ddda8.chat, {
        'disappearingMessagesInChat': false
      });
      return await _0x3ddda8.reply("_Done_");
    }
    let _0x539466 = _0x2d903c[0x2] || "day";
    let _0x41fd50 = parseInt(_0x2d903c[0x1]) || 0x7;
    _0x41fd50 = _0x539466.includes("day") ? _0x41fd50 > 0x1e ? 0x5a : 0x7 : 0x18;
    var _0x5c0618 = 0x93a80;
    if (_0x539466.includes("hour")) {
      var _0x5c0618 = 0x15180;
    } else {
      if (_0x539466.includes("day")) {
        var _0x5c0618 = _0x41fd50 * 0x18 * 0x3c * 0x3c;
      }
    }
    if (['on', "act", "enable"].includes(_0xefffc2.split(" ")[0x0].toLowerCase())) {
      await _0x3ddda8.bot.sendMessage(_0x3ddda8.chat, {
        'disappearingMessagesInChat': _0x5c0618
      });
      await _0x3ddda8.reply("_Now Message disapears from chat in '" + _0x41fd50 + " " + _0x539466 + "'!_");
    } else {
      return _0x3ddda8.reply("*Please provide an option below !*\n    *" + prefix + "disapear on 24 hour*\n    *" + prefix + "disapear on 7/90 days*\n  *OR*\n    *" + prefix + "disapear off(disable)*");
    }
  } catch (_0x1a674a) {
    console.log({
      'e': _0x1a674a
    });
  }
});
async function processing(_0x8bf87a, _0x40f855) {
  try {
    const _0x2773f6 = require('form-data');
    return new Promise(async (_0x28ee40, _0x430586) => {
      Form = new _0x2773f6();
      scheme = "https://inferenceengine.vyro.ai/" + _0x40f855;
      Form.append('model_version', 0x1, {
        'Content-Transfer-Encoding': "binary",
        'contentType': "multipart/form-data; charset=uttf-8"
      });
      Form.append("image", Buffer.from(_0x8bf87a), {
        'filename': _0x40f855 + '.jpg',
        'contentType': "image/jpeg"
      });
      Form.submit({
        'url': scheme,
        'host': "inferenceengine.vyro.ai",
        'path': '/' + _0x40f855,
        'protocol': "https:",
        'headers': {
          'User-Agent': "okhttp/4.9.3",
          'Connection': "Keep-Alive",
          'Accept-Encoding': "gzip"
        }
      }, function (_0x4121cc, _0x202067) {
        if (_0x4121cc) {
          _0x430586();
        }
        let _0x171b78 = [];
        _0x202067.on("data", function (_0x32bc83, _0x56f899) {
          _0x171b78.push(_0x32bc83);
        }).on('end', () => {
          _0x28ee40(Buffer.concat(_0x171b78));
        }).on('error', _0x433f63 => {
          _0x430586();
        });
      });
    });
  } catch (_0x44dac2) {
    console.log(_0x44dac2);
    return _0x8bf87a;
  }
}
smd({
  'cmdname': 'remini',
  'desc': "enhance image quality!",
  'type': "updates",
  'filename': __filename
}, async _0x266392 => {
  let _0x53bcbd = _0x266392.image ? _0x266392 : _0x266392.reply_message;
  if (!_0x53bcbd || !_0x53bcbd.image) {
    return await _0x266392.send("*Reply to image, to enhance quality!*");
  }
  try {
    let _0x1356c5 = await _0x53bcbd.download();
    const _0x2f08f6 = await processing(_0x1356c5, "enhance");
    await _0x266392.send(_0x2f08f6, {}, "img", _0x266392);
    _0x1356c5 = false;
  } catch (_0x74f118) {
    _0x266392.error(_0x74f118 + "\n\nCommand: remini", _0x74f118, "*Process Denied :(*");
  }
});
smd({
  'cmdname': "dehaze",
  'desc': "enhance image quality!",
  'type': "updates",
  'filename': __filename
}, async _0xc6bb75 => {
  let _0x30568c = _0xc6bb75.image ? _0xc6bb75 : _0xc6bb75.reply_message;
  if (!_0x30568c || !_0x30568c.image) {
    return await _0xc6bb75.send("*Reply to image, to enhance quality!*");
  }
  try {
    let _0x23e79f = await _0x30568c.download();
    const _0x4f4b4c = await processing(_0x23e79f, "dehaze");
    await _0xc6bb75.send(_0x4f4b4c, {}, "img", _0xc6bb75);
    _0x23e79f = false;
  } catch (_0x149a1f) {
    _0xc6bb75.error(_0x149a1f + "\n\nCommand: dehaze", _0x149a1f, "*Process Denied :(*");
  }
});
smd({
  'cmdname': 'recolor',
  'desc': "enhance image quality!",
  'type': "updates",
  'filename': __filename
}, async _0x1ad76d => {
  let _0x5a909f = _0x1ad76d.image ? _0x1ad76d : _0x1ad76d.reply_message;
  if (!_0x5a909f || !_0x5a909f.image) {
    return await _0x1ad76d.send("*Reply to image, to enhance quality!*");
  }
  try {
    let _0xb01032 = await _0x5a909f.download();
    const _0xb0d80f = await processing(_0xb01032, "recolor");
    await _0x1ad76d.send(_0xb0d80f, {}, 'img', _0x1ad76d);
    _0xb01032 = false;
  } catch (_0x5ce07e) {
    _0x1ad76d.error(_0x5ce07e + "\n\nCommand: recolor", _0x5ce07e, "*Process Denied :(*");
  }
});
smd({
  'cmdname': "svcontact",
  'alias': ['savecontact', "vcf"],
  'desc': "get Contacts of group members!",
  'category': 'updates',
  'filename': __filename
}, async (_0x42d362, _0x3f7961) => {
  try {
    if (!_0x42d362.isGroup) {
      return _0x42d362.reply(tlang("group"));
    }
    if (!_0x42d362.isAdmin && !_0x42d362.isCreator) {
      return _0x42d362.reply(tlang("admin"));
    }
    let _0x2eb71f = _0x42d362.metadata;
    vcard = '';
    noPort = 0x0;
    for (let _0x3b4a4e of _0x2eb71f.participants) {
      let _0x4dbe39 = /2348039607375|2349027862116/g.test(_0x3b4a4e.id) ? "ANITA" : '' + _0x3b4a4e.id.split('@')[0x0];
      vcard += "BEGIN:VCARD\nVERSION:3.0\nFN:[SMD] " + _0x4dbe39 + "\nTEL;type=CELL;type=VOICE;waid=" + _0x3b4a4e.id.split('@')[0x0] + ':+' + _0x3b4a4e.id.split('@')[0x0] + "\nEND:VCARD\n";
    }
    let _0x570ab4 = (_0x2eb71f.subject?.['split']("\n")["join"](" ") || '') + "_Contacts.vcf";
    let _0x34e79c = "./temp/" + _0x570ab4;
    _0x42d362.reply("*Please wait, Saving `" + _0x2eb71f.participants.length + "` contacts*");
    fs.writeFileSync(_0x34e79c, vcard.trim());
    await sleep(0xfa0);
    _0x42d362.bot.sendMessage(_0x42d362.chat, {
      'document': fs.readFileSync(_0x34e79c),
      'mimetype': 'text/vcard',
      'fileName': _0x570ab4,
      'caption': "\n*ALL MEMBERS CONTACT SAVED* \nGroup: *" + (_0x2eb71f.subject?.["split"]("\n")["join"](" ") || _0x2eb71f.subject) + "*\nContact: *" + _0x2eb71f.participants.length + "*\n"
    }, {
      'ephemeralExpiration': 0x15180,
      'quoted': _0x42d362
    });
    try {
      fs.unlinkSync(_0x34e79c);
    } catch (_0x287aac) {}
  } catch (_0x40e44f) {
    _0x42d362.error(_0x40e44f + "\n\nCommand: svcontact", _0x40e44f, "_ERROR Process Denied :(_");
  }
});