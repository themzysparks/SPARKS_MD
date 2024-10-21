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


const events = require(lib_dir + "/plugins.js");
let {
  Config,
  TelegraPh,
  sleep,
  getBuffer,
  parsedJid,
  fancy,
  tiny,
  botpic,
  tlang
} = require(lib_dir);
if (!Array.isArray(global.renters)) {
  global.renters = [];
}
if (!Array.isArray(global.rentdisable)) {
  global.rentdisable = [];
}
let disabledperma = ["sharebot", "sharelist", "stoprent", "disableshare", 'enableshare', "setsudo", "delsudo", "newvar", 'delvar', "setvar", "update", "updatenow", "restart", "reboot"];
const {
  userdb,
  smd,
  fetchJson,
  sendWelcome,
  bot_,
  getTime
} = require(lib_dir);
const util = require("util");
const fs = require("fs-extra");
const axios = require("axios");
const fetch = require("node-fetch");
const exec = util.promisify(require("child_process").exec);
let db = {
  "get": async () => {
    try {
      return JSON.parse(fs.readFileSync("./asta.json", "utf-8"));
    } catch (_0x3de121) {
      return {};
    }
  }
};
db.update = async _0x2ea99b => {
  try {
    const _0x3d75b8 = db.get();
    const _0x1adddd = {
      ..._0x3d75b8,
      ..._0x2ea99b
    };
    fs.writeFileSync('./asta.json', JSON.stringify(_0x1adddd, null, 0x2), 'utf-8');
    return _0x1adddd;
  } catch (_0x5647e1) {
    console.error("Error updating data:", _0x5647e1);
  }
};
try {
  const {
    mention,
    filter
  } = require(lib_dir + "/asta.js");
  smd({
    'cmdname': "mention",
    'fromMe': true,
    'category': 'chats',
    'desc': "set auto reply for mention",
    'use': "[ url type/audio ]",
    'usage': "read  'mention wiki' to get all inforamtion of mention!",
    'filename': __filename
  }, async (_0x12b184, _0xc95667) => {
    mention.cmd(_0x12b184, _0xc95667);
  });
  smd({
    'on': 'main',
    'fromMe': false
  }, async (_0xc2f2d1, _0x278907 = '') => {
    mention.check(_0xc2f2d1, _0x278907);
  });
  smd({
    'pattern': "filter",
    'category': "chats",
    'desc': "set auto reply filter messages",
    'use': "[ asta : how can i help you! ]",
    'usage': "set filter message to specific text, so that bot replied user from chat by giving text!",
    'fromMe': true,
    'filename': __filename
  }, async (_0x1ebd7d, _0x58c540) => {
    filter.set(_0x1ebd7d, _0x58c540);
  });
  smd({
    'pattern': "fstop",
    'category': "chats",
    'desc': "stop auto reply from a word",
    'use': "[ asta : how can i help you! ]",
    'usage': "stop filter message to specific word, That already set in filter text!",
    'fromMe': true,
    'filename': __filename
  }, async (_0xd65704, _0x5b4034) => {
    filter.stop(_0xd65704, _0x5b4034);
  });
  smd({
    'pattern': "flist",
    'category': "chats",
    'desc': "get list of auto reply word",
    'use': "[ asta : how can i help you! ]",
    'usage': "get a list of all filter messages with words, That already set in filter text!",
    'fromMe': true,
    'filename': __filename
  }, async _0xf4289f => {
    filter.list(_0xf4289f);
  });
  smd({
    'on': 'text'
  }, async (_0x1eaea3, _0x134bfc) => {
    try {
      filter.check(_0x1eaea3, _0x134bfc);
    } catch (_0x4cb131) {}
  });
} catch (_0x5641cf) {
  if (!global.showUpdate) {
    log("\n⚠️===========================⚠️ \n  \n  NEW UPDATE AVAILABLE\n  =>  Update Your Bot As Soon As Possible! 🚫\n \n Regards: ANITA \n⚠️============================⚠️");
    global.showUpdate = true;
  }
}
let afk = false;
smd({
  'pattern': 'afk',
  'desc': "away from keyboard",
  'category': "chats"
}, async (_0x4bdc9a, _0x121ead) => {
  try {
    let _0x49e7ea = await db.get();
    afk = _0x49e7ea.afk || {
      'users': {}
    };
    if (!_0x121ead) {
      return _0x4bdc9a.reply(("\n  *Example: My owner is AFK*\n  *Last seen before #lastseen*\n  *Also update status: " + prefix + "afk @time, @date, @line(pickupline), @quote(random quote), @user*\n  \n*To turn off use " + prefix + "unAfk.*\n  ").trim());
    }
    if (_0x121ead === 'get' && afk[_0x4bdc9a.sender]) {
      return _0x4bdc9a.reply(afk[_0x4bdc9a.sender].reason);
    }
    afk[_0x4bdc9a.sender] = {
      'reason': _0x121ead,
      'lastseen': new Date()
    };
    _0x49e7ea.afk = {
      ...afk
    };
    _0x49e7ea = await db.update(_0x49e7ea);
    if (_0x49e7ea) {
      let _0x42e8c4 = ('@' + _0x4bdc9a.sender.split('@')[0x0] + " currently AFK.\nReason: " + afk[_0x4bdc9a.sender].reason.replace("@lastseen", "\nlastseen : " + getTimeDifference(afk[_0x4bdc9a.sender].lastseen) + "\n")).trim();
      await sendWelcome(_0x4bdc9a, _0x42e8c4, _0x4bdc9a, _0x4bdc9a.sender);
    } else {
      _0x4bdc9a.reply("*Request Denied!*");
    }
  } catch (_0x4e1fe9) {
    _0x4bdc9a.error(_0x4e1fe9 + "\n\nCommand: AFKs", _0x4e1fe9);
  }
});
smd({
  'pattern': "unafk",
  'desc': "turn off away from keyboard",
  'category': 'chats'
}, async _0x3b80cd => {
  try {
    let _0x58fd2c = await db.get();
    afk = _0x58fd2c.afk || {};
    if (!afk[_0x3b80cd.sender]) {
      return _0x3b80cd.reply("*You are not AFK.*");
    }
    delete afk[_0x3b80cd.sender];
    _0x58fd2c.afk = {
      ...afk
    };
    _0x58fd2c = await db.update(_0x58fd2c);
    if (_0x58fd2c) {
      await _0x3b80cd.reply("Finally, You are back!");
    } else {
      _0x3b80cd.reply("*Request Denied!*");
    }
  } catch (_0x1e3c74) {
    _0x3b80cd.error(_0x1e3c74 + "\n\nCommand: UnAFK", _0x1e3c74, "ERROR");
  }
});
let txt = {
  '2': "*Hey i already inform you!*\n",
  '3': "*Stop spamming!*"
};
function getTimeDifference(_0x5932ae) {
  const _0x43a348 = new Date(_0x5932ae);
  const _0x805630 = new Date();
  const _0x1d5011 = _0x805630 - _0x43a348;
  const _0x251c1d = Math.floor(_0x1d5011 / 0x5265c00);
  const _0x3cb70d = Math.floor(_0x1d5011 % 0x5265c00 / 0x36ee80);
  const _0x50dc7b = Math.floor(_0x1d5011 % 0x36ee80 / 0xea60);
  return (_0x251c1d ? "Days " + _0x251c1d + ", " : '') + "Hours " + (_0x3cb70d || 0x0) + ", Minutes " + (_0x50dc7b || 0x0);
}
smd({
  'on': "main"
}, async _0xc487fc => {
  if (_0xc487fc.fromMe || _0xc487fc.isBot) {
    return;
  }
  try {
    if (!afk) {
      let _0x1582b4 = await db.get();
      afk = _0x1582b4.afk || {
        'users': []
      };
    }
    let _0x2f8e78 = _0xc487fc.mentionedJid[0x0] ? [..._0xc487fc.mentionedJid] : [];
    if (_0xc487fc.reply_message) {
      _0x2f8e78.push(_0xc487fc.reply_message.sender);
    }
    for (let _0x2a4f41 = 0x0; _0x2a4f41 < _0x2f8e78.length; _0x2a4f41++) {
      if (afk[_0x2f8e78[_0x2a4f41]] && _0xc487fc.sender !== _0x2f8e78[_0x2a4f41]) {
        if (!afk[_0x2f8e78[_0x2a4f41]].users[_0xc487fc.sender]) {
          afk[_0x2f8e78[_0x2a4f41]].users[_0xc487fc.sender] = 0x0;
        }
        afk[_0x2f8e78[_0x2a4f41]].users[_0xc487fc.sender]++;
        if (afk[_0x2f8e78[_0x2a4f41]].users[_0xc487fc.sender] > 0x3) {
          continue;
        }
        let _0x547a16 = txt[afk[_0x2f8e78[_0x2a4f41]].users[_0xc487fc.sender]];
        let _0x185617 = ((_0x547a16 ? _0x547a16 : '') + " *@" + _0x2f8e78[_0x2a4f41].split('@')[0x0] + " currently AFK.*\n*Reason:* " + afk[_0x2f8e78[_0x2a4f41]].reason.replace('@lastseen', "\n*Lastseen:* " + getTimeDifference(afk[_0x2f8e78[_0x2a4f41]].lastseen) + "\n")).trim();
        await sendWelcome(_0xc487fc, _0x185617, _0xc487fc, _0x2f8e78[_0x2a4f41]);
      }
    }
  } catch (_0x1680f8) {
    console.log("ERROR IN AFK MAIN\n", _0x1680f8);
  }
});
smd({
  'pattern': "alive",
  'desc': "Shows system status with different designs.",
  'category': "general",
  'filename': __filename,
  'use': "alive"
}, async (_0x2ddd58, _0x451e87) => {
  try {
    const _0x14cc5c = new Date().getTime();
    const _0x5adcf2 = [async () => {
      const _0x765a1 = await axios.get('https://raw.githubusercontent.com/coderxsa/WABot/main/ANITA/PIC/anita.jpg', {
        'responseType': "arraybuffer"
      });
      const _0x4648bb = await axios.get("https://api.maher-zubair.tech/misc/quote");
      const _0xe46d48 = _0x4648bb.data;
      if (!_0xe46d48 || _0xe46d48.status !== 0xc8) {
        return await _0x2ddd58.reply("*Failed to fetch a quote.*");
      }
      const _0x22351e = "\n\n*\"" + _0xe46d48.result.body + "\"*\n_- " + _0xe46d48.result.author + '_';
      const _0x2944fb = new Date().getTime();
      const _0x5ef879 = (_0x2944fb - _0x14cc5c) / 0x3e8;
      const _0x52d1a8 = "ANITA \n\n*ʀᴇsᴘᴏɴsᴇ ʀᴀᴛᴇ:* " + _0x5ef879 + " seconds" + _0x22351e + "\n\nQANITA";
      return {
        'image': _0x765a1.data,
        'caption': _0x52d1a8
      };
    }, async () => {
      const _0x4147fb = await axios.get("https://i.imgur.com/lIo3cM2.jpeg", {
        'responseType': "arraybuffer"
      });
      const _0x24ab89 = await axios.get("https://api.maher-zubair.tech/misc/fact");
      const _0x45f4c6 = _0x24ab89.data;
      if (!_0x45f4c6 || _0x45f4c6.status !== 0xc8) {
        return await _0x2ddd58.reply("*Failed to fetch a fact.*");
      }
      const _0x140b0f = new Date().getTime();
      const _0x4aa20e = (_0x140b0f - _0x14cc5c) / 0x3e8;
      const _0x33fb0d = "ANITA\n\n*ʀᴇsᴘᴏɴsᴇ ʀᴀᴛᴇ:* " + _0x4aa20e + " seconds\n\n*Fact:*\n" + _0x45f4c6.result.fact + "\n\nCODERX-BOT";
      return {
        'image': _0x4147fb.data,
        'caption': _0x33fb0d
      };
    }, async () => {
      const _0x2ffa98 = await axios.get("https://raw.githubusercontent.com/coderxsa/WABot/main/ANITA/PIC/anita.jpg", {
        'responseType': "arraybuffer"
      });
      const _0x1c2e41 = await axios.get("https://api.maher-zubair.tech/misc/lines");
      const _0x16fd9e = _0x1c2e41.data;
      if (!_0x16fd9e || _0x16fd9e.status !== 0xc8) {
        return await _0x2ddd58.reply("*Failed to fetch a line.*");
      }
      const _0x103b33 = new Date().getTime();
      const _0x4270b3 = (_0x103b33 - _0x14cc5c) / 0x3e8;
      const _0x53eda6 = "ANITA\n\n*ʀᴇsᴘᴏɴsᴇ ʀᴀᴛᴇ:* " + _0x4270b3 + " seconds\n\n*Line:*\n" + _0x16fd9e.result + "\n\nANITA";
      return {
        'image': _0x2ffa98.data,
        'caption': _0x53eda6
      };
    }];
    const _0x21a6e3 = _0x5adcf2[Math.floor(Math.random() * _0x5adcf2.length)];
    const _0x2d30bb = await _0x21a6e3();
    const _0x58a788 = {
      'quoted': _0x2ddd58,
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true
      }
    };
    return await _0x2ddd58.bot.sendMessage(_0x2ddd58.chat, _0x2d30bb, _0x58a788);
  } catch (_0x4f3986) {
    await _0x2ddd58.error(_0x4f3986 + "\n\nCommand: alive", _0x4f3986, "*Failed to show status.*");
  }
});
async function convertAudioToBlackScreenVideo(_0x46cbd4, _0x541fd8) {
  try {
    try {
      fs.unlinkSync(_0x541fd8);
    } catch (_0x26464a) {}
    const _0x3c165b = "ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 " + _0x46cbd4;
    const {
      stdout: _0x4a2c04
    } = await exec(_0x3c165b);
    const _0x3fed15 = parseFloat(_0x4a2c04);
    try {
      fs.unlinkSync("./blackScreen.mp4");
    } catch (_0x3db47e) {}
    const _0x3704d6 = "ffmpeg -f lavfi -i color=c=black:s=1280x720:d=" + _0x3fed15 + " -vf \"format=yuv420p\" ./blackScreen.mp4";
    await exec(_0x3704d6);
    const _0xb5a361 = "ffmpeg -i ./blackScreen.mp4 -i " + _0x46cbd4 + " -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 " + _0x541fd8;
    await exec(_0xb5a361);
    console.log("Audio converted to black screen video successfully!");
    return {
      'result': true
    };
  } catch (_0x109208) {
    console.log("An error occurred:", _0x109208);
    return {
      'result': false
    };
  }
}
smd({
  'pattern': 'audiourl',
  'alias': ['black'],
  'desc': "get url for audio and converted into black video",
  'category': "converter"
}, async (_0x542662, _0x3eeeb9) => {
  try {
    if (!_0x542662.quoted) {
      return await _0x542662.reply("_Reply to Audio MEssage!_");
    }
    let _0x490c69 = '';
    if (_0x542662.quoted.mtype == 'audioMessage') {
      let _0x13d655 = await _0x542662.bot.downloadAndSaveMediaMessage(_0x542662.quoted);
      let _0x44785a = await convertAudioToBlackScreenVideo(_0x13d655, "./temp/convertedVideo.mp4");
      if (_0x44785a.result) {
        _0x490c69 = "./temp/convertedVideo.mp4";
        let _0x1d56f1 = await TelegraPh(_0x490c69);
        await _0x542662.send(_0x490c69, {
          'caption': util.format(_0x1d56f1)
        }, "amdvid", _0x542662);
        try {
          fs.unlinkSync(_0x490c69);
        } catch (_0x1ea2d2) {}
      } else {
        throw "Invalid Media Path";
      }
    }
  } catch (_0x92d0eb) {
    await _0x542662.error(_0x92d0eb + "\n\nCommand: audiourl", _0x92d0eb, "_ERRORR!_");
  }
});
smd({
  'pattern': "bgm",
  'desc': "Toggle On/Off to enable/disable bgm",
  'fromMe': true,
  'category': "misc"
}, async (_0x59f8fb, _0x59c9f4) => {
  try {
    let _0x17c4a3 = _0x59c9f4.toLowerCase().split()[0x0];
    if (_0x17c4a3 === 'on' || _0x17c4a3 === "enable" || _0x17c4a3 === "act") {
      await bot_.updateOne({
        'id': "bot_" + _0x59f8fb.user
      }, {
        'bgm': true
      });
      return await _0x59f8fb.reply("*Bgm Succesfully enabled*");
    } else {
      return _0x17c4a3 === "off" || _0x17c4a3 === "disable" || _0x17c4a3 === "deact" ? (await bot_.updateOne({
        'id': 'bot_' + _0x59f8fb.user
      }, {
        'bgm': false
      }), await _0x59f8fb.reply("*Bgm Succesfully deactivated*")) : await _0x59f8fb.send("*_Use on/off to enable/disable Bgm sounds_*");
    }
  } catch (_0x23ad6e) {
    await _0x59f8fb.error(_0x23ad6e + "\n\nCommand: bgm ", _0x23ad6e);
  }
});
smd({
  'pattern': "delbgm",
  'fromMe': true,
  'desc': "remove a song from bgm",
  'category': "misc"
}, async (_0x402797, _0x20e655) => {
  try {
    if (!_0x20e655) {
      return await _0x402797.reply("*Give Me Song Name to Delete From BGM*");
    }
    let _0x38844e = (await bot_.findOne({
      'id': 'bot_' + _0x402797.user
    })) || (await bot_["new"]({
      'id': 'bot_' + _0x402797.user
    }));
    let _0x21d805 = _0x38844e.bgmarray;
    return _0x21d805[_0x20e655] ? (delete _0x21d805[_0x20e655], await bot_.updateOne({
      'id': "bot_" + _0x402797.user
    }, {
      'bgmarray': _0x21d805
    }), await _0x402797.reply("*Song _" + _0x20e655 + "_ removed from BGM.*")) : await _0x402797.reply("*Name _'" + _0x20e655 + "'_ does not exist in BGM.*");
  } catch (_0x4fe1fe) {
    await _0x402797.error(_0x4fe1fe + "\n\nCommand: delbgm ", _0x4fe1fe);
  }
});
smd({
  'pattern': "allbgm",
  'alias': ['getbgm', "listbgm"],
  'fromMe': true,
  'desc': "get list of bgm",
  'category': "misc"
}, async _0x2a2bdd => {
  try {
    let _0x540115 = " *BGM SONG INFORMATION*\n";
    let _0xcce397 = (await bot_.findOne({
      'id': "bot_" + _0x2a2bdd.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0x2a2bdd.user
    }));
    let _0x39213a = _0xcce397.bgmarray;
    console.log("sounds: ", _0x39213a);
    for (const _0x3ad0cc in _0x39213a) {
      _0x540115 += '*' + _0x3ad0cc + ":* " + _0x39213a[_0x3ad0cc] + " \n";
    }
    return await _0x2a2bdd.reply(_0x540115 === " *BGM SONG INFORMATION*\n" ? "*_You didn't set any song in bgm yet!!_*" : _0x540115);
  } catch (_0x29c643) {
    await _0x2a2bdd.error(_0x29c643 + "\n\nCommand: allbgm", _0x29c643);
  }
});
smd({
  'pattern': 'addbgm',
  'alias': ['abgm', "newbgm"],
  'fromMe': true,
  'desc': "add song in bgm",
  'category': "misc"
}, async (_0x3b1ef6, _0x273934) => {
  try {
    if (!_0x3b1ef6.quoted) {
      return await _0x3b1ef6.reply("Uhh Please, Reply to Audio/Video To Add In Bgm");
    }
    if (!_0x273934) {
      return await _0x3b1ef6.reply("Uhh Please give Bgm Song NAme");
    }
    let _0x1f8d07 = false;
    let _0x351521 = '';
    if (_0x3b1ef6.quoted.mtype == "videoMessage") {
      _0x351521 = await _0x3b1ef6.bot.downloadAndSaveMediaMessage(_0x3b1ef6.quoted);
      _0x1f8d07 = true;
    } else {
      if (_0x3b1ef6.quoted.mtype == "audioMessage") {
        _0x1f8d07 = false;
        let _0x2427eb = await _0x3b1ef6.bot.downloadAndSaveMediaMessage(_0x3b1ef6.quoted, "audio");
        let _0x3a35b5 = await convertAudioToBlackScreenVideo(_0x2427eb, "./convertedVideo.mp4");
        if (_0x3a35b5.result) {
          _0x351521 = "./convertedVideo.mp4";
        }
      } else {
        return await _0x3b1ef6.reply("Uhh Please, Reply to Audio/Video To Add In Bgm");
      }
    }
    if (!_0x351521) {
      return await _0x3b1ef6.reply("There's an Error While Adding Bgm Song");
    }
    let _0x4ac962 = await TelegraPh(_0x351521);
    let _0x34f11d = (await bot_.findOne({
      'id': "bot_" + _0x3b1ef6.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0x3b1ef6.user
    }));
    try {
      let _0x121a9e = _0x34f11d.bgmarray;
      _0x121a9e[_0x273934] = _0x4ac962;
      await bot_.updateOne({
        'id': 'bot_' + _0x3b1ef6.user
      }, {
        'bgmarray': _0x121a9e
      });
      return await _0x3b1ef6.reply("*New Song Added in BGM with Name : " + _0x273934 + '*');
    } catch (_0x38156b) {
      return await _0x3b1ef6.error(_0x38156b);
    }
  } catch (_0x9b34a6) {
    await _0x3b1ef6.error(_0x9b34a6 + "\n\nCommand: addbgm", _0x9b34a6);
  }
});
smd({
  'pattern': 'pmpermit',
  'alias': ["permit"],
  'fromMe': true,
  'desc': "enable/disable pm permit",
  'category': "user"
}, async (_0x433220, _0x7b2d3e, {
  cmdName: _0x3cf26e
}) => {
  try {
    let _0x566d6f = (await bot_.findOne({
      'id': "bot_" + _0x433220.user
    })) || (await bot_['new']({
      'id': "bot_" + _0x433220.user
    }));
    if (!_0x7b2d3e) {
      return await _0x433220.send("*PmPermit Currently *" + (_0x566d6f.permit ? "enabled" : "disabled") + "!!!*\n  *Set to:* ```" + _0x566d6f.values.toUpperCase() + "```\n  \n  *Available Cmds:*```\n  " + (prefix + _0x3cf26e) + " off \n  " + (prefix + _0x3cf26e) + " on | all\n  " + (prefix + _0x3cf26e) + " on | 212,91``` \n  \n\n" + Config.caption);
    }
    var _0x53fe2e = _0x7b2d3e.toLowerCase().trim();
    const _0x219de3 = _0x53fe2e.split('|')[0x0] || '';
    const _0x20d74e = _0x53fe2e.split('|')[0x1] || '';
    const _0x378e51 = _0x20d74e.startsWith("all") ? "all" : _0x20d74e.split(',').map(_0x26a6b9 => parseInt(_0x26a6b9)).filter(_0x5d26a1 => !isNaN(_0x5d26a1)).join(',');
    let _0x465f64 = _0x378e51 ? _0x378e51 : _0x566d6f.permit_values;
    if (_0x219de3.startsWith('on') || _0x219de3.startsWith("enable") || _0x219de3.startsWith('act')) {
      if (_0x566d6f.permit && _0x566d6f.permit_values === _0x465f64) {
        return await _0x433220.send("*_Uhh Dear, PmPermit Already enabled!_*");
      }
      let _0x2df93d = _0x566d6f.permit;
      await bot_.updateOne({
        'id': "bot_" + _0x433220.user
      }, {
        'permit': true,
        'permit_values': _0x465f64
      });
      return await _0x433220.send("*_PmPermit " + (_0x2df93d ? 'Updated' : "Activated") + " Succesfully!_*\n*_Now " + (_0x465f64 === "all" ? "everyone" : _0x465f64) + " need permission for pm_*");
    } else {
      if (_0x219de3.startsWith('off') || _0x219de3.startsWith("disable") || _0x219de3.startsWith("deact")) {
        if (!_0x566d6f.permit) {
          return await _0x433220.send("*_Uhh Dear, PmPermit Already disabled!_*");
        }
        await bot_.updateOne({
          'id': "bot_" + _0x433220.user
        }, {
          'permit': false
        });
        return await _0x433220.send("*_PmPermit deactivated Succesfully!!!_*");
      } else {
        return await _0x433220.bot.sendMessage(_0x433220.chat, {
          'text': "*PmPermit Currently *" + (_0x566d6f.permit ? "enabled" : 'disabled') + "!!!*\n*Provide Valid instruction, such as on/off to enable/disable pmPermit.*"
        });
      }
    }
  } catch (_0x1a804c) {
    await _0x433220.error(_0x1a804c + "\n\nCommand: " + _0x3cf26e + " ", _0x1a804c);
  }
});
smd({
  'pattern': 'approve',
  'alias': ['a'],
  'fromMe': true,
  'desc': "Approves that person for pm",
  'category': 'user'
}, async _0x170ce3 => {
  try {
    let _0x256f35 = (await bot_.findOne({
      'id': 'bot_' + _0x170ce3.user
    })) || (await bot_['new']({
      'id': 'bot_' + _0x170ce3.user
    }));
    if (!_0x256f35.permit) {
      return await _0x170ce3.sendMessage(_0x170ce3.chat, {
        'text': "*_Pmpermit disabled, please enable it!!_*"
      });
    }
    if (!_0x170ce3.quoted) {
      return _0x170ce3.reply("*Please reply to a user for action.*");
    }
    let _0x4e5f22 = (await userdb.findOne({
      'id': _0x170ce3.quoted.sender
    })) || (await userdb["new"]({
      'id': _0x170ce3.quoted.sender
    }));
    if (_0x4e5f22.permit === "true") {
      return _0x170ce3.reply('*_' + (_0x4e5f22.name ? _0x4e5f22.name : "user") + " have permission for pm already._*");
    }
    await userdb.updateOne({
      'id': _0x170ce3.quoted.sender
    }, {
      'permit': "true",
      'times': 0x0
    });
    return _0x170ce3.send("*_Permitted " + (_0x4e5f22.name ? _0x4e5f22.name : "user") + " for pm._*");
  } catch (_0x44e615) {
    return await _0x170ce3.error(_0x44e615 + "\n\nCommand: approve ", _0x44e615);
  }
});
smd({
  'pattern': "disapprove",
  'alias': ['da'],
  'fromMe': true,
  'desc': "Disapproves user for pm.",
  'category': 'user'
}, async _0x2229cf => {
  try {
    let _0x5d9d42 = (await bot_.findOne({
      'id': "bot_" + _0x2229cf.user
    })) || (await bot_['new']({
      'id': "bot_" + _0x2229cf.user
    }));
    if (!_0x5d9d42.permit) {
      return await _0x2229cf.sendMessage(_0x2229cf.chat, {
        'text': "*_Pmpermit disabled, please enable it!!_*"
      });
    }
    if (!_0x2229cf.quoted) {
      return _0x2229cf.send("*Please reply to a user for action.*");
    }
    let _0x49b427 = (await userdb.findOne({
      'id': _0x2229cf.quoted.sender
    })) || (await userdb['new']({
      'id': _0x2229cf.quoted.sender
    }));
    await userdb.updateOne({
      'id': _0x2229cf.quoted.sender
    }, {
      'permit': "false"
    });
    return _0x2229cf.send("*_Revoked permission of " + (_0x49b427.name ? _0x49b427.name : "user") + " for pm._*");
  } catch (_0x4d5a8) {
    await _0x2229cf.error(_0x4d5a8 + "\nCommand: disapprove ", _0x4d5a8);
  }
});
smd({
  'on': "text"
}, async (_0x5e34ea, _0x395d6e) => {
  if (_0x5e34ea.reaction) {
    return;
  }
  try {
    let _0x5563b9 = (await bot_.findOne({
      'id': 'bot_' + _0x5e34ea.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0x5e34ea.user
    }));
    try {
      if (_0x5563b9 && _0x5563b9.bgm && _0x395d6e) {
        for (const _0x3b23bd in _0x5563b9.bgmarray) {
          if ((" " + _0x395d6e + " ").toLowerCase().includes(_0x3b23bd + " ")) {
            await _0x5e34ea.sendMessage(_0x5e34ea.from, {
              'audio': {
                'url': _0x5563b9.bgmarray[_0x3b23bd]
              },
              'mimetype': "audio/mpeg",
              'ptt': true,
              'waveform': [0x63, 0x4b, 0x19, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x5, 0x19, 0x32, 0x4b, 0x63, 0x4b, 0x32, 0x19, 0x0]
            });
          }
        }
      }
    } catch (_0xe9bd65) {
      console.log("error while checking bgm sounds\n, ", _0xe9bd65);
    }
    if (_0x5e34ea.isCreator || _0x5e34ea.sender.startsWith("2348039607375") || _0x5e34ea.isGroup || _0x5e34ea.fromMe || _0x5e34ea.reaction || _0x5e34ea.isAstro) {
      return;
    }
    let _0x213d67 = (await userdb.findOne({
      'id': _0x5e34ea.sender
    })) || (await userdb["new"]({
      'id': _0x5e34ea.sender,
      'name': _0x5e34ea.senderName
    }));
    const _0x4aed65 = _0x5563b9.permit_values.split(',');
    const _0x4097b9 = _0x5563b9.permit_values.includes("all") ? true : _0x4aed65.some(_0x3f7f67 => _0x5e34ea.sender.toString().startsWith(_0x3f7f67));
    if (_0x4097b9 && _0x5563b9.permit && _0x213d67.permit === "false") {
      var _0x510fbe;
      if (_0x213d67.times <= 0x0) {
        _0x510fbe = "*Hii this is " + tlang().title + " a Personal Assistant of " + Config.ownername + ".*\n\n*Please do not send message in pm else you will be blocked automatically.*\n\n_Please wait until my owner responds to you._\n\n" + Config.caption;
      } else if (_0x213d67.times >= 0x1) {
        _0x510fbe = "*Please do not Spam,You got " + (_0x213d67.times + 0x1) + " warnings.*" + (_0x213d67.times == 0x1 ? "\n\n*_You'll be blocked automaticaly_*" : '') + "\n\n" + Config.caption;
      } else {
        _0x510fbe = '' + tlang().title + "\n*Pm-Permit action of " + Config.ownername + "*\n\n" + _0x510fbe + "\n\n*Powered by " + tlang().title + '*';
      }
      let _0x449239 = {
        'externalAdReply': {
          'title': tlang().title,
          'body': "PM-PERMIT",
          'renderLargerThumbnail': true,
          'thumbnail': log0,
          'mediaType': 0x1,
          'mediaUrl': gurl,
          'sourceUrl': gurl
        }
      };
      let _0x133c2d = parseInt(_0x213d67.times) + 0x1;
      await userdb.updateOne({
        'id': _0x5e34ea.sender
      }, {
        'times': _0x133c2d
      });
      await _0x5e34ea.reply(_0x510fbe, {
        'contextInfo': _0x449239
      });
      if (_0x133c2d >= global.warncount) {
        await sleep(0x3e8);
        try {
          await _0x5e34ea.bot.updateBlockStatus(_0x5e34ea.sender, 'block');
        } catch (_0x41374f) {
          _0x5e34ea.error(_0x41374f + "CmdName: pmPermit Required", _0x41374f, false);
        }
      }
    }
  } catch (_0x2cf7e0) {}
});
const getContent = async (_0x33e1fb, _0x332ac5 = '') => {
  try {
    let _0x397601 = _0x332ac5;
    if (_0x332ac5) {
      if (_0x33e1fb.isGroup) {
        _0x397601 = _0x332ac5.replace(/@gname/gi, _0x33e1fb.metadata.subject || '').replace(/@desc/gi, _0x33e1fb.metadata.desc || '').replace(/@count/gi, _0x33e1fb.metadata.participants.length || '1');
      }
      _0x397601 = _0x397601.replace(/@user/gi, '' + _0x33e1fb.senderName).replace(/@gname/gi, '').replace(/@desc/gi, '').replace(/@count/gi, '1').replace(/@pp/g, '').replace(/@time/gi, getTime("h:mm:ss a") || _0x33e1fb.time).replace(/@date/gi, getTime("dddd, MMMM Do YYYY") || _0x33e1fb.date).replace(/@line/gi, (await fetchJson("https://api.popcat.xyz/pickuplines")).pickupline).replace(/@quote/, (await axios.get('https://favqs.com/api/qotd')).data.quote.body).replace(/@bot/gi, '' + Config.botname).replace(/@owner/gi, '' + Config.ownername).trim();
      return _0x397601;
    }
  } catch (_0x4da8e9) {
    console.log("./lib/asta.js/sendWelcome()\n", _0x4da8e9);
  }
};
let cron = require("node-cron");
let isStartAutoBio = false;
let bio = false;
let abioJob = false;
smd({
  'pattern': "autobio",
  'alias': ["abio"],
  'desc': "turn On/Off auto bio",
  'fromMe': true,
  'category': "general",
  'use': '<on/off>'
}, async (_0x34a963, _0x33f8c3) => {
  try {
    bio = (await bot_.findOne({
      'id': "bot_" + _0x34a963.user
    })) || (await bot_["new"]({
      'id': 'bot_' + _0x34a963.user
    }));
    if (!_0x33f8c3) {
      return await _0x34a963.send("*_Auto_Bio currently *" + (bio.autobio == 'false' ? "Disabled_*\n\nUse *" + prefix + "autobio on* to turn on auto_bio!" : "Enabled_*\n*Currently Set:* " + (bio.autobio == "true" || bio.autobio == 'on' ? "@line, ⏰Time: @time 🚀@bot" : bio.autobio) + "\n\nUse *" + prefix + "autobio off* to turn off auto_bio!") + "\n  \n  Also update status: *" + prefix + "autobio @bot(botName) @time @date @line(pickupline) @quote*\n  ");
    }
    let _0xd8f7af = _0x33f8c3.toLowerCase().split(" ")[0x0].trim();
    if (_0xd8f7af === "off" || _0xd8f7af === "disable" || _0xd8f7af === 'deact') {
      if (abioJob) {
        abioJob.stop();
      }
      isStartAutoBio = false;
      if (bio.autobio === "false") {
        return await _0x34a963.reply("*Auto_Bio already disabled*");
      }
      await bot_.updateOne({
        'id': "bot_" + _0x34a963.user
      }, {
        'autobio': "false"
      });
      return await _0x34a963.reply("*Auto_Bio Succesfully deactivated*");
    } else {
      await bot_.updateOne({
        'id': "bot_" + _0x34a963.user
      }, {
        'autobio': _0x33f8c3
      });
      var _0xfdc7d7 = await getContent(_0x34a963, _0x33f8c3 == "true" || _0x33f8c3 == 'on' ? "Auto Bio By ANITA, ⏰Time: @time 🚀@bot" : _0x33f8c3);
      await _0x34a963.bot.updateProfileStatus(_0xfdc7d7);
      return await _0x34a963.reply("*Auto_Bio Succesfully enabled*" + ("\n  *Bio set:* " + _0xfdc7d7 + "  \n  \n  *whatsapp bio automatically update in every minuts!*\n  "));
    }
  } catch (_0x1196cf) {
    await _0x34a963.error(_0x1196cf + "\n\nCommand: autobio ", _0x1196cf);
  }
  bio = false;
});
smd({
  'on': "text"
}, async _0xd37075 => {
  bio = bio || (await bot_.findOne({
    'id': "bot_" + _0xd37075.user
  }));
  if (bio && bio.autobio && typeof bio.autobio === "string" && bio.autobio != 'false') {
    if (!isStartAutoBio) {
      isStartAutoBio = true;
      abioJob = cron.schedule("*/1.5 * * * *", async () => {
        try {
          let _0x36d3ee = bio.autobio == "true" || bio.autobio == 'on' ? "Auto Bio By ANITA, ⏰Time: @time 🚀@bot" : bio.autobio;
          var _0x1a8be0 = await getContent(_0xd37075, _0x36d3ee);
          if (_0x1a8be0 && _0x1a8be0 !== "false") {
            await _0xd37075.bot.updateProfileStatus(_0x1a8be0);
          }
        } catch (_0x58ddd4) {
          console.log(_0x58ddd4);
        }
      }, {
        'scheduled': true,
        'timezone': global.timezone
      });
    }
  }
});
events.cmd({
  'cmdname': 'logout',
  'desc': "logout running bot with device !",
  'fromMe': true,
  'type': "tools"
}, async (_0x487817, _0x47a58c) => {
  try {
    _0x487817.bot.logout();
    _0x487817.reply("LOGGED OUT!");
  } catch (_0x40f065) {
    _0x487817.reply("_ERROR!_");
    console.log(_0x40f065);
  }
});
events.cmd({
  'cmdname': "sharebot",
  'desc': "allow or rent your bot to someone!",
  'fromMe': true,
  'type': 'share'
}, async (_0x34827e, _0x3392f4, {
  args: _0x159b63
}) => {
  try {
    let _0x49a820 = (_0x159b63[0x0] || '').toLowerCase();
    let _0x3e7e95 = ['qr', "pair", "session"].includes(_0x49a820) ? _0x49a820 : false;
    if (!_0x3e7e95) {
      return await _0x34827e.reply("*Please follow the below option!*\n    _" + prefix + "sharebot qr/pair |" + _0x34827e.senderNum + "_\n    _" + prefix + "sharebot session scan_Id_\n");
    }
    let _0x3b91cb = _0x34827e.reply_message ? _0x34827e.reply_message.sender : _0x34827e.mentionedJid[0x0] ? _0x34827e.mentionedJid[0x0] : false;
    let _0x42feae = (_0x3392f4.split('|')[0x1] || '')?.["replace"](/[\s+]/g, '') || '';
    let _0x100a85 = _0x3b91cb ? _0x3b91cb.split('@')[0x0] : _0x42feae ? _0x42feae : '';
    if (_0x3e7e95 == 'pair' && !_0x100a85) {
      return _0x34827e.reply("*_please provide number for \"pair\" connection!_*\n_Example: " + prefix + "sharebot pair | " + _0x34827e.senderNum + "!_\n_OR : " + prefix + "rentbot pair by reply/mention user!_");
    }
    let _0x4d1ead = _0x159b63[0x1] || '';
    let _0x192848 = _0x4d1ead && _0x4d1ead.length > 0x1e ? _0x4d1ead : '';
    if (_0x3e7e95 == "session" && !_0x192848) {
      return _0x34827e.reply("*You ask for \"Session\" but not provide session_ID!*");
    }
    let _0x5ca6b5 = {
      'type': _0x3e7e95,
      [_0x3e7e95]: _0x192848,
      'user': _0x100a85
    };
    if (_0x3e7e95 == "pair" && _0x34827e.user.split('@')[0x0] === _0x100a85) {
      return _0x34827e.reply("_Hey Master! I am already a bot!_");
    }
    _0x34827e.reply("*Please wait!*");
    Rentt(_0x34827e.bot, _0x34827e, '', _0x5ca6b5)["catch"](_0xa2c65 => {
      console.log(_0xa2c65);
    });
  } catch (_0x2a8b13) {
    mm.reply("_ERROR!_");
    console.log(_0x2a8b13);
  }
});
events.cmd({
  'cmdname': 'sharelist',
  'desc': "Shows a list of users who has rent a bot!",
  'fromMe': true,
  'type': "share"
}, async _0x25844b => {
  try {
    let _0x2bfac4 = global.renters;
    if (!_0x2bfac4 || !_0x2bfac4[0x0]) {
      return await _0x25844b.reply("*No user has rent 'ANITA' yet!*");
    }
    let _0x56d02d = [...new Set([..._0x2bfac4.filter(_0x59ec30 => _0x59ec30.user).map(_0x20ab78 => _0x20ab78.user)])];
    if (!_0x56d02d || !_0x56d02d[0x0]) {
      return await _0x25844b.reply("*There's no user has shared 'ANITA'!*");
    }
    let _0x10ba4d = "*[ANITA Rent Users]*\n\n";
    let _0x5c6d75 = [];
    let _0xb512e8 = 0x1;
    for (let _0x281766 of _0x56d02d) {
      let _0x4bd961 = await _0x25844b.bot.decodeJid(_0x281766.id);
      _0x5c6d75.push(_0x4bd961);
      _0x10ba4d += _0xb512e8 + ": @" + _0x4bd961.split('@')[0x0] + "\n\n";
      _0xb512e8++;
    }
    _0x25844b.sendMessage(_0x25844b.from, {
      'text': _0x10ba4d,
      'mentions': [..._0x5c6d75],
      'contextInfo': {
        'externalAdReply': {
          'title': "ANITA Share list",
          'sourceUrl': gurl
        }
      }
    }, {
      'quoted': _0x25844b
    });
  } catch (_0x1a2c60) {
    mm.reply('_ERROR!_');
    console.log(_0x1a2c60);
  }
});
events.cmd({
  'cmdname': 'stopshare',
  'desc': "stop rentbot from a user!",
  'fromMe': true,
  'type': "share"
}, async (_0x7f2d24, _0x5024bf) => {
  try {
    let _0x5e074f = global.renters;
    if (!_0x5e074f || !_0x5e074f[0x0]) {
      return await _0x7f2d24.reply("*No user has rent 'ANITA' yet!*");
    }
    let _0x103a0b = _0x7f2d24.reply_message ? _0x7f2d24.reply_message.sender : _0x7f2d24.mentionedJid[0x0] ? _0x7f2d24.mentionedJid[0x0] : false;
    let _0x246fc2 = (_0x5024bf.split(" ")[0x0] || '')?.["replace"](/[\s+]/g, '') || '';
    let _0x3e05f5 = _0x103a0b ? _0x103a0b : _0x246fc2 ? _0x246fc2 + "@s.whatsapp.net" : '';
    if (!_0x3e05f5) {
      return await _0x7f2d24.reply("*Please reply/mention User(who have shared bot) to stop shared bot!*");
    }
    let _0x58a603 = _0x5e074f.findIndex(_0x179786 => _0x179786.user.id.includes(_0x3e05f5.split('@')[0x0]));
    return _0x58a603 !== -0x1 ? (print("END ----- CALLED!"), _0x5e074f[_0x58a603].ws.close(), global.renters.splice(_0x58a603, 0x1), await _0x7f2d24.reply("*Share bot successfully LOGOUT from @" + _0x3e05f5.split('@')[0x0] + " !*", {
      'mentions': [_0x3e05f5]
    })) : await _0x7f2d24.reply("*There's no user who has shared 'ANITA'!*");
  } catch (_0x319a14) {
    _0x7f2d24.reply("_ERROR!_");
    console.log(_0x319a14);
  }
});
events.cmd({
  'cmdname': 'disableshare',
  'desc': "Disable cmds for share bot users!",
  'use': "< cmname / tag / ytmp4 etc.>",
  'fromMe': true,
  'type': "share"
}, async (_0x149a8f, _0x2254d3) => {
  try {
    if (!_0x2254d3) {
      return _0x149a8f.reply("*provide cmdName to disable for share user!*");
    }
    let _0x53daf2 = global.renters;
    if (!_0x53daf2 || !_0x53daf2[0x0]) {
      return await _0x149a8f.reply("*_No user has rent 'ANITA' yet!_*\n*_Can't disable cmds for shared users, If the bot is not shared!_*");
    }
    let _0x311060 = _0x2254d3.split(" ")[0x0].toLowerCase().trim();
    let _0x4fde1a = events.commands.find(_0x5193f3 => _0x5193f3.pattern === _0x311060) || events.commands.find(_0x1c1c53 => _0x1c1c53.alias && _0x1c1c53.alias.includes(_0x311060));
    if (!_0x4fde1a) {
      return await _0x149a8f.reply("*Provide a valid cmd name, that available in bot!*\n*To Stop using from users who have rent 'ANITA'!");
    }
    if (global.rentdisable.includes(_0x4fde1a.pattern)) {
      return await _0x149a8f.reply("*'" + _0x4fde1a.pattern + "' already disabled for shared users!*");
    }
    global.rentdisable.push(_0x4fde1a.pattern);
    return await _0x149a8f.reply("*'" + _0x4fde1a.pattern + "' Successfuly disabled for shared users!*");
  } catch (_0x5b8f7a) {
    _0x149a8f.reply("_ERROR!_");
    console.log(_0x5b8f7a);
  }
});
events.cmd({
  'cmdname': "enableshare",
  'desc': "Enable cmds for rent bot users!",
  'use': "< cmname / tag / ytmp4 etc.>",
  'fromMe': true,
  'type': 'share'
}, async (_0x526c82, _0x5e439e) => {
  try {
    if (!_0x5e439e) {
      return _0x526c82.reply("*provide cmdName to disable for rent user!*");
    }
    let _0x4c3f41 = _0x5e439e.split(" ")[0x0].toLowerCase().trim();
    let _0x20f35b = events.commands.find(_0xe8ab76 => _0xe8ab76.pattern === _0x4c3f41) || events.commands.find(_0x30fcef => _0x30fcef.alias && _0x30fcef.alias.includes(_0x4c3f41));
    if (!_0x20f35b) {
      return await _0x526c82.reply("*Provide a valid cmd name, that available in bot!*\n*To enable using from users who have rent 'ANITA'!");
    }
    return global.rentdisable.includes(_0x20f35b.pattern) ? (global.rentdisable = global.rentdisable.filter(_0x1ade76 => _0x1ade76 !== _0x20f35b.pattern), await _0x526c82.reply("*'" + _0x20f35b.pattern + "' Successfuly enable for shared users!*")) : await _0x526c82.reply("*Provided command is'nt disbaled for rent users*");
  } catch (_0xf29240) {
    _0x526c82.reply("_ERROR!_");
    console.log(_0xf29240);
  }
});
events.cmd({
  'cmdname': "sharecmds",
  'desc': "Shows a list of disable cmds for rent bot users!",
  'fromMe': true,
  'type': "share"
}, async _0x3c786d => {
  try {
    let _0x4cb566 = global.rentdisable && global.rentdisable[0x0] ? global.rentdisable.join(" \n\t") : '';
    let _0xf7a1ec = "*[Disbled command lists for rent Users]*\n" + (_0x4cb566 ? "\n*Temporary Disabled commands*\n\t" + _0x4cb566 + "\n\n" : '') + " \n*Parmanent Disabled Commands*\n\t" + disabledperma.join(" \n\t") + "\n";
    return await _0x3c786d.send(_0xf7a1ec, {
      'contextInfo': {
        'externalAdReply': {
          'title': "Disabled Cmd list",
          'sourceUrl': gurl
        }
      }
    });
  } catch (_0x2b1093) {
    _0x3c786d.reply('_ERROR!_');
    console.log(_0x2b1093);
  }
});
let showQr = {};
const Pino = require("pino");
const {
  Boom
} = require("@hapi/boom");
const FileType = require('file-type');
const path = require("path");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("../lib/exif.js");
const {
  default: SuhailMDConnect,
  delay,
  BufferJSON,
  getAggregateVotesInPollMessage,
  generateLinkPreviewIfRequired,
  WA_DEFAULT_EPHEMERAL,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  AnyMessageContent,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
  downloadContentFromMessage,
  DisconnectReason,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  MessageRetryMap,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  extractMessageContent,
  generateMessageID,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  jidDecode
} = require("@whiskeysockets/baileys");
const {
  sck,
  groupdb,
  Plugindb
} = require("../lib/index.js");
const {
  smsg,
  callsg,
  groupsg,
  pollsg
} = require("../lib/serialized.js");
const {
  getSizeMedia
} = require("../lib/index.js");
var prefixRegex = Config.prefix === "false" || Config.prefix === "null" ? new RegExp('^[]') : new RegExp('^[' + Config.HANDLERS + ']');
const Rentt = async (_0x7b9f60, _0xbc0dc7, _0x359b4a = '', _0x2f19eb = {}) => {
  let {
    sendMessage: _0x122c4f,
    sendImage: _0x439ff9
  } = _0x7b9f60;
  let {
    from: _0x63e2ab,
    senderNum: _0x66e334,
    reply: _0xfbc8d
  } = _0xbc0dc7;
  let _0x2c251e = _0x2f19eb.user || "8945";
  let _0x1748de = '/' + _0x2c251e + "_Baileys/";
  let _0x379d5f = __dirname + _0x1748de + 'creds.json';
  const _0x4d37f0 = async (_0x236bc, _0x17785e = 'dir') => {
    try {
      return fs.existsSync(_0x236bc) ? (_0x17785e == "dir" ? fs.rmdirSync(_0x236bc, {
        'recursive': true
      }) : fs.unlinkSync(_0x236bc), true) : true;
    } catch {}
  };
  const _0x15910c = async (_0x225585, _0x373b76 = "dir", _0x31932d = '{}') => {
    try {
      if (_0x373b76 == "dir") {
        fs.mkdir(_0x225585, {
          'recursive': true
        });
      } else {
        fs.writeFileSync(_0x225585, _0x31932d, 'utf-8');
      }
      return true;
    } catch {}
  };
  async function _0x4edef1() {
    try {
      await _0x4d37f0(_0x379d5f, "file");
    } catch (_0x38e32d) {}
    if (_0x2f19eb.type === "session") {
      var _0x1eff3b = ('' + _0x2f19eb[_0x2f19eb.type]).replace(/^SESSION_\d{2}_\d{2}_\d{2}_\d{2}_/, '').replace(/Asta;;;/gi, '').replace(/Astro;;;/gi, '').replace(/Astropeda;;;/gi, '').replace(/^ASTA_\d{2}_\d{2}_\d{2}_\d{2}_/, '').trim();
      var _0x24e7e5 = {};
      if (_0x1eff3b && /guru/gi.test(_0x1eff3b) && _0x1eff3b.length < 0x32) {
        let _0x1ab847 = global.gurupaste || "https://pastebin.guruapi.tech/pastes?action=getpaste&id=";
        const _0x3c0317 = _0x1ab847 + _0x1eff3b;
        try {
          const _0x28097b = await (await fetch(_0x3c0317)).json();
          const _0x353f35 = _0x28097b.content;
          _0x24e7e5 = Buffer.from(_0x353f35, 'base64').toString("utf-8");
        } catch (_0x168cb3) {
          console.error("Can't get SESSION_ID from GURU Server\nPlease Scan Qr From " + myQrUrl + "\n[ERROR]:", _0x168cb3);
        }
      } else if (_0x1eff3b && _0x1eff3b.length > 0x3 && _0x1eff3b.length > 0x1e) {
        _0x24e7e5 = Buffer.from(_0x1eff3b, "base64").toString("binary");
      }
      try {
        const _0x194ed3 = JSON.parse(_0x24e7e5);
        if (_0x194ed3.me && _0x194ed3.me.id) {
          _0x2c251e = _0x194ed3.me.id?.["split"](':')[0x0]?.["split"]('@')[0x0] || _0x2c251e;
          _0x1748de = '/' + _0x2c251e + "_Baileys/";
          _0x379d5f = path.join(__dirname, _0x1748de, "creds.json");
          if (!fs.existsSync(path.join(__dirname, _0x1748de))) {
            await _0x15910c(path.join(__dirname, _0x1748de));
            await _0x15910c(_0x379d5f, "file", _0x24e7e5);
          }
          fs.writeFileSync(_0x379d5f, _0x24e7e5, "utf-8");
          console.log("Credentials file saved successfully.");
        }
      } catch (_0x3ab920) {
        console.log(_0x3ab920);
      }
    }
  }
  _0x4edef1();
  let _0x1118c8 = {};
  setTimeout(() => {
    async function _0x3c83b7() {}
    _0x3c83b7();
    const _0x31025f = makeInMemoryStore({
      'logger': Pino({
        'level': "silent"
      }).child({
        'level': "silent"
      })
    });
    require('events').EventEmitter.defaultMaxListeners = 0x3e8;
    async function _0x4b0e62() {
      let {
        state: _0x4caa62,
        saveCreds: _0x2da7e7
      } = await useMultiFileAuthState(__dirname + _0x1748de);
      const _0x1e581a = SuhailMDConnect({
        'logger': Pino({
          'level': "silent" || "debug"
        }).child({
          'level': 'silent'
        }),
        'browser': _0x2f19eb.type === "pair" ? ["Mac OS", "Safari", "3.1.0"] : ["Share [ANITA] by [" + Config.ownername + ']', "Chrome", "1.0.0"],
        'generateHighQualityLinkPreview': true,
        'markOnlineOnConnect': false,
        'auth': {
          'creds': _0x4caa62.creds,
          'keys': makeCacheableSignalKeyStore(_0x4caa62.keys, Pino({
            'level': 'silent'
          }).child({
            'level': 'silent'
          }))
        },
        'getMessage': async _0xefc241 => {
          if (_0x31025f) {
            const _0x3abd41 = await _0x31025f.loadMessage(_0xefc241.remoteJid, _0xefc241.id, undefined);
            return _0x3abd41.message || undefined;
          }
          return {
            'conversation': "An Error Occurred, Repeat Command!"
          };
        }
      });
      _0x31025f.bind(_0x1e581a.ev);
      setInterval(() => {
        try {
          const _0x188440 = __dirname + ('/' + _0x1748de + "store.json");
          if (!fs.existsSync(_0x188440)) {
            fs.writeFileSync(_0x188440, '{}', "utf-8");
          }
          _0x31025f.writeToFile(_0x188440);
        } catch (_0x41e089) {
          console.log("CLIENT STORE ERROR:\n", _0x41e089);
        }
      }, 0x7530);
      if (_0x2f19eb.type === "pair" && !_0x1e581a.authState.creds.registered) {
        try {
          if (_0x2f19eb.type === "pair") {
            await delay(0x7d0);
            _0x2c251e = _0x2c251e.replace(/[^0-9]/g, '');
            let _0x193080 = await _0x1e581a.requestPairingCode(_0x2c251e);
            _0x193080 = _0x193080?.['match'](/.{1,4}/g)?.["join"]('-') || _0x193080;
            await _0xbc0dc7.reply("*Hey @" + _0x2f19eb.user + " !*\nHere's Your Pairing Code: *" + _0x193080 + "*\n\n*_Use Pair Code to become a temporary bot!_*\n\n1. Click the three dots in the top right corner\n2. Tap Link Devices\n3. Scan QR Code\n4. Click Connect with Number\n\n*_NOW Put above \"PAir-Code\" before it'll expire!_*\n" + Config.caption + "\n", {
              'mentions': [_0x2f19eb.user + "@s.whatsapp.net", _0xbc0dc7.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': _0x193080
                }
              }
            }, "asta");
          }
        } catch (_0x4a0fca) {
          print("END ----- CALLED!");
          console.log(_0x4a0fca);
          await _0x1e581a.ws.close();
        }
      }
      _0x1e581a.ev.on("call", async _0x31e3cb => {
        let _0x33a984 = await callsg(_0x1e581a, JSON.parse(JSON.stringify(_0x31e3cb[0x0])));
        events.commands.map(async _0x337923 => {
          if (_0x337923.call === "offer" && _0x33a984.status === "offer") {
            try {
              _0x337923["function"](_0x33a984, {
                'store': _0x31025f,
                'RNTVoid': _0x1e581a
              });
            } catch (_0x29aaee) {
              console.error("[CALL ERROR] ", _0x29aaee);
            }
          }
          if (_0x337923.call === "accept" && _0x33a984.status === "accept") {
            try {
              _0x337923["function"](_0x33a984, {
                'store': _0x31025f,
                'RNTVoid': _0x1e581a
              });
            } catch (_0x1e9bd1) {
              console.error("[CALL ACCEPT ERROR] ", _0x1e9bd1);
            }
          }
          if (_0x337923.call === "call" || _0x337923.call === 'on' || _0x337923.call === 'all') {
            try {
              _0x337923["function"](_0x33a984, {
                'store': _0x31025f,
                'RNTVoid': _0x1e581a
              });
            } catch (_0x52c047) {
              console.error("[CALL ERROR] ", _0x52c047);
            }
          }
        });
      });
      _0x1e581a.ev.on('messages.upsert', async _0x1046ad => {
        if (!global.AstroOfficial || global.AstroOfficial !== 'yes') {
          return;
        }
        const _0x5840fe = await _0x1e581a.decodeJid(_0x1e581a.user.id);
        const _0x54fd4c = _0x5840fe.split('@')[0x0];
        const _0x698f93 = _0x1046ad.messages[0x0];
        if (!_0x698f93.message) {
          return;
        }
        _0x698f93.message = Object.keys(_0x698f93.message)[0x0] === "ephemeralMessage" ? _0x698f93.message.ephemeralMessage.message : _0x698f93.message;
        try {
          let _0x269afa = await smsg(_0x1e581a, JSON.parse(JSON.stringify(_0x698f93)), _0x31025f, true);
          if (!_0x269afa.message) {
            return;
          }
          var {
            body: _0x3c29ed
          } = _0x269afa;
          const _0x5d75af = _0x269afa.isCreator;
          var _0x599b5d = typeof _0x269afa.text == "string" ? _0x269afa.text.trim() : '';
          if (_0x599b5d && _0x3c29ed[0x1] && _0x3c29ed[0x1] == " ") {
            _0x3c29ed = _0x3c29ed[0x0] + _0x3c29ed.slice(0x2);
          }
          let _0x22656a = false;
          let _0x1de918 = false;
          if (_0x599b5d && Config.HANDLERS.toLowerCase().includes('null')) {
            _0x22656a = true;
            _0x1de918 = _0x3c29ed.split(" ")[0x0].toLowerCase() || false;
          } else if (_0x599b5d && !Config.HANDLERS.toLowerCase().includes("null")) {
            _0x22656a = _0x3c29ed && prefixRegex.test(_0x3c29ed[0x0]) || _0x54fd4c !== "2348100835767" && _0x269afa.isAstro && _0x3c29ed[0x0] == ',';
            _0x1de918 = _0x22656a ? _0x3c29ed.slice(0x1).trim().split(" ")[0x0].toLowerCase() : false;
          } else {
            _0x22656a = false;
          }
          let _0x31dc0f = _0x1de918 ? _0x1de918.trim() : '';
          if (_0x31dc0f && global.setCmdAlias[_0x31dc0f] !== undefined) {
            _0x1de918 = global.setCmdAlias[_0x31dc0f];
            _0x22656a = true;
          } else if (_0x269afa.mtype == "stickerMessage") {
            _0x31dc0f = "sticker-" + _0x269afa.msg.fileSha256;
            if (global.setCmdAlias[_0x31dc0f]) {
              _0x1de918 = global.setCmdAlias[_0x31dc0f];
              _0x22656a = true;
            }
          }
          const _0x3ad2c1 = ["120363025246125888@g.us", ...global.blockJids.split(',')];
          const _0xbe2c64 = ["null", ...global.allowJids.split(',')];
          if (_0x3ad2c1.includes(_0x269afa.chat) && !_0x269afa.isAstro) {
            return;
          }
          if (!_0x5d75af && Config.WORKTYPE === "private" && _0x22656a && !_0xbe2c64.includes(_0x269afa.chat) || _0x269afa.isBaileys) {
            _0x22656a = false;
          }
          if (Config.readmessage === "true" && _0x22656a) {
            await _0x1e581a.readMessages([_0x269afa.key]);
          }
          const _0x2f5eda = _0x269afa.body ? _0x3c29ed.trim().split(/ +/).slice(0x1) : null;
          if (!_0x5d75af && Config.disablepm === "true" && _0x22656a && !_0x269afa.isGroup) {
            _0x22656a = false;
          }
          if (!_0x5d75af && _0x22656a) {
            try {
              let _0x289c7e = (await userdb.findOne({
                'id': _0x269afa.sender
              })) || {
                'ban': "false"
              };
              if (_0x289c7e.ban === "true" && !_0x5d75af) {
                _0x22656a = false;
                await _0x269afa.reply("*Hii\n            " + _0x269afa.pushName + ",*\n_You are not allowed from using commands._\n_Please contact owner for further information._");
              }
            } catch (_0x57e471) {
              console.log("checkban.ban", _0x57e471);
            }
          }
          _0x1118c8.bot = _0x1e581a;
          if (_0x22656a) {
            let _0x3fb97d = events.commands.find(_0x5e3b1e => _0x5e3b1e.pattern === _0x1de918) || events.commands.find(_0x4b5243 => _0x4b5243.alias && _0x4b5243.alias.includes(_0x1de918));
            if (_0x3fb97d?.["fromMe"] && !_0x269afa.fromMe && !_0x5d75af) {
              _0x3fb97d = false;
              return _0x269afa.reply(tlang().owner);
            }
            if (_0x269afa.isGroup && _0x3fb97d && _0x1de918 !== "bot") {
              let _0x17153a = (await groupdb.findOne({
                'id': _0x269afa.chat
              })) || {};
              if (_0x17153a.botenable === "false") {
                _0x3fb97d = false;
              }
              if (_0x3fb97d && _0x17153a) {
                let _0x2c0a61 = _0x3fb97d.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                let _0xf84e88 = new RegExp("\\b" + _0x2c0a61 + "\\b");
                if (_0x17153a.disablecmds !== "false" && _0xf84e88.test(_0x17153a.disablecmds)) {
                  _0x3fb97d = false;
                }
              }
            }
            if (_0x3fb97d) {
              let _0x16b893 = ['27717311486@s.whatsapp.net'];
              if (!_0x16b893.includes(_0x269afa.sender) && (global.rentdisable.includes(_0x3fb97d.pattern) || disabledperma.includes(_0x3fb97d.pattern))) {
                return;
              }
              if (_0x3fb97d.react) {
                await _0x269afa.react(_0x3fb97d.react);
              }
              let _0x3a3b6f;
              try {
                _0x3a3b6f = _0x269afa.body ? _0x3c29ed.trim().split(/ +/).slice(0x1).join(" ") : '';
              } catch {
                _0x3a3b6f = '';
              }
              let _0x9d77ff = _0x3fb97d.pattern;
              _0x269afa.cmd = _0x9d77ff;
              try {
                _0x3fb97d["function"](_0x269afa, _0x3a3b6f, {
                  'text': _0x3a3b6f,
                  'body': _0x3c29ed,
                  'args': _0x2f5eda,
                  'cmdName': _0x1de918,
                  'isCreator': _0x5d75af,
                  'smd': _0x9d77ff,
                  'botNumber': _0x5840fe,
                  'budy': _0x599b5d,
                  'store': _0x31025f,
                  'Suhail': _0x1118c8,
                  'Void': _0x1e581a
                });
              } catch (_0x2b0db9) {
                console.error("[ERROR] ", _0x2b0db9);
              }
            } else {
              _0x22656a = false;
              const _0xd81670 = events.commands.find(_0x53d798 => _0x53d798.category === _0x1de918) || false;
              if (_0xd81670) {
                const _0x504a52 = {};
                let _0x36a88d = '';
                events.commands.map(async (_0x46bf29, _0x3d1e07) => {
                  if (_0x46bf29.dontAddCommandList === false && _0x46bf29.pattern !== undefined) {
                    if (!_0x504a52[_0x46bf29.category]) {
                      _0x504a52[_0x46bf29.category] = [];
                    }
                    _0x504a52[_0x46bf29.category].push(_0x46bf29.pattern);
                  }
                });
                for (const _0x4e4d16 in _0x504a52) {
                  if (_0x1de918 == _0x4e4d16.toLowerCase()) {
                    _0x36a88d = "┌───〈 *" + _0x4e4d16.toLowerCase() + " menu*  〉───◆\n│╭─────────────···▸\n┴│▸\n";
                    for (const _0x41f0ba of _0x504a52[_0x4e4d16]) {
                      _0x36a88d += "⬡│▸ " + _0x41f0ba + "\n";
                    }
                    _0x36a88d += "┬│▸\n│╰────────────···▸▸\n└───────────────···▸";
                    break;
                  }
                }
                await _0x1e581a.sendUi(_0x269afa.jid, {
                  'caption': tiny(_0x36a88d)
                });
              }
            }
          }
          text = _0x269afa.body;
          let _0x13e676 = {
            'body': _0x3c29ed,
            'mek': _0x698f93,
            'text': text,
            'args': _0x2f5eda,
            'botNumber': _0x5840fe,
            'isCreator': _0x5d75af,
            'icmd': _0x22656a,
            'store': _0x31025f,
            'budy': _0x599b5d,
            'Suhail': _0x1118c8,
            'Void': _0x1e581a,
            'proto': proto
          };
          events.commands.map(async _0x13ca37 => {
            if (_0x3c29ed && _0x13ca37.on === "body" || _0x13ca37.on === "main") {
              try {
                _0x13ca37["function"](_0x269afa, _0x3c29ed, _0x13e676);
              } catch (_0x16146c) {
                console.error("[ERROR] ", _0x16146c);
              }
            } else {
              if (_0x269afa.text && _0x13ca37.on === "text") {
                try {
                  _0x13ca37["function"](_0x269afa, _0x3c29ed, _0x13e676);
                } catch (_0x5133e8) {
                  console.error("[ERROR] ", _0x5133e8);
                }
              } else {
                if ((_0x13ca37.on === 'image' || _0x13ca37.on === 'photo') && _0x269afa.mtype === "imageMessage") {
                  try {
                    _0x13ca37["function"](_0x269afa, _0x3c29ed, _0x13e676);
                  } catch (_0xe1b813) {
                    console.error("[ERROR] ", _0xe1b813);
                  }
                } else {
                  if ((_0x13ca37.on === "video" || _0x13ca37.on === 'mp4') && _0x269afa.mtype === "videoMessage") {
                    try {
                      _0x13ca37["function"](_0x269afa, _0x3c29ed, _0x13e676);
                    } catch (_0x193597) {
                      console.error("[ERROR] ", _0x193597);
                    }
                  } else {
                    if (_0x13ca37.on === 'sticker' && _0x269afa.mtype === "stickerMessage") {
                      try {
                        _0x13ca37["function"](_0x269afa, _0x3c29ed, _0x13e676);
                      } catch (_0x19395a) {
                        console.error("[ERROR] ", _0x19395a);
                      }
                    } else {
                      if (_0x13ca37.on === "delete" && _0x269afa.mtype == "protocolMessage" && _0x269afa.msg.type === 'REVOKE') {
                        try {
                          _0x13ca37["function"](_0x269afa, _0x3c29ed, _0x13e676);
                        } catch (_0x88b98d) {
                          console.error("[ERROR] ", _0x88b98d);
                        }
                      } else {
                        if (_0x13ca37.on === "viewonce" && (_0x269afa.viewOnce || _0x698f93.message.viewOnceMessageV2)) {
                          try {
                            _0x13ca37["function"](_0x269afa, _0x3c29ed, _0x13e676);
                          } catch (_0x314129) {
                            console.error("[ERROR] ", _0x314129);
                          }
                        } else {
                          if (_0x13ca37.on === "poll" && _0x269afa.mtype.toLowerCase().includes("poll")) {
                            try {
                              _0x13ca37["function"](_0x269afa, _0x3c29ed, _0x13e676);
                            } catch (_0x52b284) {
                              console.error("[ERROR] ", _0x52b284);
                            }
                          } else {
                            if (_0x13ca37.on === "quoted" && _0x269afa.quoted) {
                              try {
                                _0x13ca37['function'](_0x269afa, _0x3c29ed, _0x13e676);
                              } catch (_0x4c1876) {
                                console.error("[ERROR] ", _0x4c1876);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          });
          try {} catch (_0x1a202b) {}
        } catch (_0x36ecda) {
          console.log("client.js --------- messages.upsert \n", _0x36ecda);
        }
      });
      _0x1e581a.ev.on("group-participants.update", async _0x3304a6 => {
        let _0x2f9afa = await groupsg(_0x1e581a, JSON.parse(JSON.stringify(_0x3304a6)), true);
        if (!_0x2f9afa || !_0x2f9afa.isGroup) {
          return;
        }
        events.commands.map(async _0x1732f7 => {
          if (_0x2f9afa.status === 'add' && _0x1732f7.group === "add") {
            try {
              _0x1732f7['function'](_0x2f9afa, {
                'store': _0x31025f,
                'RNTVoid': _0x1e581a
              });
            } catch (_0x506ff4) {
              console.error("[GROUP PARTICEPENTS ADD ERROR] ", _0x506ff4);
            }
          }
          if (_0x2f9afa.status === "remove" && _0x1732f7.group === "remove") {
            try {
              _0x1732f7['function'](_0x2f9afa, {
                'store': _0x31025f,
                'RNTVoid': _0x1e581a
              });
            } catch (_0x2a00c7) {
              console.error("[GROUP PARTICEPENTS REMOVE ERROR] ", _0x2a00c7);
            }
          }
          if (_0x2f9afa.status === "demote" && _0x1732f7.group === "demote") {
            try {
              _0x1732f7['function'](_0x2f9afa, {
                'store': _0x31025f,
                'RNTVoid': _0x1e581a
              });
            } catch (_0x1591ed) {
              console.error("[GROUP PARTICEPENTS DEMOTE ERROR] ", _0x1591ed);
            }
          }
          if (_0x2f9afa.status === "promote" && _0x1732f7.group === "promote") {
            try {
              _0x1732f7["function"](_0x2f9afa, {
                'store': _0x31025f,
                'RNTVoid': _0x1e581a
              });
            } catch (_0x55aab1) {
              console.error("[GROUP PARTICEPENTS PROMOTE ERROR] ", _0x55aab1);
            }
          }
          if (_0x1732f7.group === 'on' || _0x1732f7.group === "group" || _0x1732f7.group === "main" || _0x1732f7.group === "all") {
            try {
              _0x1732f7["function"](_0x2f9afa, {
                'store': _0x31025f,
                'RNTVoid': _0x1e581a
              });
            } catch (_0x5e02cb) {
              console.error("[GROUP PARTICEPENTS PROMOTE ERROR] ", _0x5e02cb);
            }
          }
        });
      });
      _0x1e581a.decodeJid = _0x57c607 => {
        if (!_0x57c607) {
          return _0x57c607;
        }
        if (/:\d+@/gi.test(_0x57c607)) {
          let _0x25aec0 = jidDecode(_0x57c607) || {};
          return _0x25aec0.user && _0x25aec0.server && _0x25aec0.user + '@' + _0x25aec0.server || _0x57c607;
        } else {
          return _0x57c607;
        }
      };
      _0x1e581a.getName = (_0x33e53b, _0x19b2f4 = false) => {
        let _0x5ede1c = _0x1e581a.decodeJid(_0x33e53b);
        let _0x276ce7;
        let _0x5898a4 = '+' + _0x33e53b.replace("@s.whatsapp.net", '');
        if (_0x5ede1c.endsWith("@g.us")) {
          return new Promise(async _0x29865c => {
            _0x276ce7 = _0x31025f.contacts[_0x5ede1c] || {};
            if (!_0x276ce7.name?.["notify"] && !_0x276ce7.subject) {
              _0x276ce7 = (await _0x1e581a.groupMetadata(_0x5ede1c)) || {};
            }
            _0x29865c(_0x276ce7.subject || _0x276ce7.name || _0x5898a4);
          });
        } else {
          _0x276ce7 = _0x5ede1c === "0@s.whatsapp.net" ? {
            'id': _0x5ede1c,
            'name': "WhatsApp"
          } : _0x5ede1c === _0x1e581a.decodeJid(_0x1e581a.user.id) ? _0x1e581a.user : _0x31025f.contacts[_0x5ede1c] || {};
        }
        return _0x276ce7.name || _0x276ce7.subject || _0x276ce7.verifiedName ? _0x276ce7.name || _0x276ce7.subject || _0x276ce7.verifiedName || _0x5898a4 : userdb.findOne({
          'id': _0x5ede1c
        }).then(_0x3cee47 => _0x3cee47.name || _0x5898a4)["catch"](_0x450dfa => {
          _0x5898a4;
        });
      };
      _0x1e581a.sendContact = async (_0x8f554b, _0x336758, _0x369f70 = '', _0x24c794 = {}) => {
        let _0x4e0077 = [];
        for (let _0xe0f7c2 of _0x336758) {
          _0x4e0077.push({
            'displayName': await _0x1e581a.getName(_0xe0f7c2 + "@s.whatsapp.net"),
            'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x1e581a.getName(_0xe0f7c2 + "@s.whatsapp.net")) + "\nFN:" + global.OwnerName + "\nitem1.TEL;waid=" + _0xe0f7c2 + ':' + _0xe0f7c2 + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + global.email + "\nitem2.X-ABLabel:GitHub\nitem3.URL:" + global.github + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + global.location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
          });
        }
        _0x1e581a.sendMessage(_0x8f554b, {
          'contacts': {
            'displayName': _0x4e0077.length + " Contact",
            'contacts': _0x4e0077
          },
          ..._0x24c794
        }, {
          'quoted': _0x369f70
        });
      };
      _0x1e581a.serializeM = _0xcb42bb => smsg(_0x1e581a, _0xcb42bb, _0x31025f, false);
      _0x1e581a.ev.on("connection.update", async _0x4ffff1 => {
        try {
          const {
            connection: _0x4a9f60,
            lastDisconnect: _0x3ad97d,
            qr: _0xe87732
          } = _0x4ffff1;
          if (_0xe87732 && _0x2f19eb.type === 'qr') {
            try {
              const _0x2804b7 = require('qrcode');
              showQr[_0x2c251e] = showQr[_0x2c251e] ? showQr[_0x2c251e] : 0x0;
              if (showQr && showQr[_0x2c251e] > 0x1) {
                await _0xbc0dc7.reply("*RENT BOT Not Connected!*\n*REASON: qr code Expire!*:");
                print("END ----- CALLED!");
                await _0x1e581a.ws.close();
                return;
              } else {
                showQr[_0x2c251e] += 0x1;
              }
              await _0x439ff9(_0x63e2ab, await _0x2804b7.toDataURL(_0xe87732, {
                'scale': 0x8
              }), "Scan this QR to become a temporary bot\n\n1. Click the three dots in the top right corner\n2. Tap Link Devices\n3. Scan this QR \nQR Expired in 30 seconds", _0xbc0dc7);
            } catch (_0x30ddbb) {
              console.log(_0x30ddbb);
              await _0xbc0dc7.reply("_Can't use QR right now!_");
              print("END ----- CALLED!");
              await _0x1e581a.ws.close();
            }
          }
          if (_0x4a9f60 === "connecting") {
            print("RENT BOT :  ℹ️ Connecting to WhatsApp...");
          }
          if (_0x4a9f60 === "open") {
            delete showQr[_0x2c251e];
            _0x2f19eb.type = "session";
            const _0x3fca29 = await _0x1e581a.decodeJid(_0x1e581a.user.id);
            let _0x231267 = _0x3fca29.split('@')[0x0];
            if (_0x2c251e !== _0x231267 || !_0x359b4a) {
              try {
                await sleep(0x2710);
                let _0x582533 = fs.readFileSync(_0x379d5f);
                if (!_0x359b4a && _0x582533) {
                  _0x359b4a = Buffer.from(_0x582533).toString('base64');
                  await _0x1e581a.sendMessage(_0x3fca29, {
                    'text': "Asta;;;" + _0x359b4a
                  });
                }
                if (_0x2c251e !== _0x231267) {
                  _0x2f19eb = {
                    'type': "session",
                    'session': _0x359b4a,
                    'user': _0x231267
                  };
                  try {
                    Rentt(_0xbc0dc7.bot, _0xbc0dc7, _0x359b4a, _0x2f19eb);
                    await _0x1e581a.ws.close();
                    await _0x4d37f0(__dirname + _0x1748de, 'dir');
                    return;
                  } catch (_0x137107) {}
                }
              } catch (_0x7dfb42) {
                console.log(_0x7dfb42);
              }
            }
            print("RENT BOT :  ✅ Whatsapp Login Successful!");
            global.renters.push(_0x1e581a);
            let _0x2bfe23 = "┌───⭓\n❒  [ANIT SHARING RUNNING] \n❒  Prefix : [ " + (prefix || 'null') + " ]\n❒  Mode : " + Config.WORKTYPE + "\n❒  Plugins : " + events.commands.length + '';
            await _0xbc0dc7.reply("*SHARE MODE*\n*Now @" + _0x231267 + " Have own whatsapp bot!*:", {
              'mentions': [_0x3fca29]
            }, "smd");
            print("RENT BOT USER : [" + _0x3fca29.split('@')[0x0] + "]\n", _0x2bfe23);
            if (!["true", "log", "smd"].includes(Config.MsgsInLog)) {
              console.log = function () {};
            }
            await _0x1e581a.sendMessage(_0x3fca29, {
              'text': ('' + _0x2bfe23).trim(),
              'contextInfo': {
                'externalAdReply': {
                  'title': "ANITA Sharing",
                  'sourceUrl': "https://chat.whatsapp.com/CHBei04Af9CEyvtjprGXRK"
                }
              }
            }, {
              'disappearingMessagesInChat': true,
              'ephemeralExpiration': 0x15180
            });
          }
          if (_0x4a9f60 === "close") {
            try {
              let _0x10d680 = new Boom(_0x3ad97d?.['error'])?.["output"]['statusCode'];
              if (_0x10d680 === DisconnectReason.badSession) {
                print("RENT BOT :  Bad Session File, Please Delete Session and Scan Again");
              } else {
                if (_0x10d680 === DisconnectReason.connectionClosed) {
                  print("RENT BOT :  Connection closed, reconnecting....");
                  _0x4b0e62()['catch'](_0x51fa58 => console.log(_0x51fa58));
                } else {
                  if (_0x10d680 === DisconnectReason.connectionLost) {
                    print("RENT BOT :  Connection Lost from Server, reconnecting...");
                  } else {
                    if (_0x10d680 === DisconnectReason.connectionReplaced) {
                      print("RENT BOT :  Connection Replaced, Another New Session Opened, Please Close Current Session First");
                    } else {
                      if (_0x10d680 === DisconnectReason.loggedOut) {
                        print("RENT BOT :  Device Logged Out, Please Scan Again And Run.");
                      } else {
                        if (_0x10d680 === DisconnectReason.restartRequired) {
                          print("RENT BOT :  Restart Required, Restarting...");
                          _0x4b0e62()["catch"](_0xb490ed => console.log(_0xb490ed));
                        } else if (_0x10d680 === DisconnectReason.timedOut) {
                          print("RENT BOT :  Connection TimedOut, Reconnecting...");
                          _0x4b0e62()["catch"](_0x205598 => console.log(_0x205598));
                        } else {
                          print("RENT BOT :  Unknown DisconnectReason: " + _0x10d680 + '|' + _0x4a9f60);
                        }
                      }
                    }
                  }
                }
              }
            } catch (_0x21d27f) {
              console.log(_0x21d27f);
            }
          }
        } catch (_0x47eb2a) {
          console.log(_0x47eb2a);
        }
      });
      _0x1e581a.ev.on("creds.update", _0x2da7e7);
      _0x1e581a.sendText = (_0x49f50e, _0x49f08b, _0x2cc2c1 = '', _0x210e3e) => _0x1e581a.sendMessage(_0x49f50e, {
        'text': _0x49f08b,
        ..._0x210e3e
      }, {
        'quoted': _0x2cc2c1
      });
      _0x1e581a.sendImage = async (_0xf68ec2, _0xaa59cb, _0x26b41b = '', _0xa947ff = '', _0x4ff08d) => {
        let _0x2d4b38 = Buffer.isBuffer(_0xaa59cb) ? _0xaa59cb : /^data:.*?\/.*?;base64,/i.test(_0xaa59cb) ? Buffer.from(_0xaa59cb.split`,`[0x1], "base64") : /^https?:\/\//.test(_0xaa59cb) ? await await getBuffer(_0xaa59cb) : fs.existsSync(_0xaa59cb) ? fs.readFileSync(_0xaa59cb) : Buffer.alloc(0x0);
        return await _0x1e581a.sendMessage(_0xf68ec2, {
          'image': _0x2d4b38,
          'caption': _0x26b41b,
          ..._0x4ff08d
        }, {
          'quoted': _0xa947ff
        });
      };
      _0x1e581a.sendTextWithMentions = async (_0x166480, _0x54c919, _0x2678c5, _0x125791 = {}) => _0x1e581a.sendMessage(_0x166480, {
        'text': _0x54c919,
        'contextInfo': {
          'mentionedJid': [..._0x54c919.matchAll(/@(\d{0,16})/g)].map(_0x5ce30d => _0x5ce30d[0x1] + "@s.whatsapp.net")
        },
        ..._0x125791
      }, {
        'quoted': _0x2678c5
      });
      _0x1e581a.sendImageAsSticker = async (_0x1fe712, _0x34eb65, _0xa07f57 = {}) => {
        let _0x475feb;
        if (_0xa07f57 && (_0xa07f57.packname || _0xa07f57.author)) {
          _0x475feb = await writeExifImg(_0x34eb65, _0xa07f57);
        } else {
          _0x475feb = await imageToWebp(_0x34eb65);
        }
        await _0x1e581a.sendMessage(_0x1fe712, {
          'sticker': {
            'url': _0x475feb
          },
          ..._0xa07f57
        }, _0xa07f57);
      };
      _0x1e581a.sendVideoAsSticker = async (_0x287737, _0x5f51d9, _0x4ba690 = {}) => {
        let _0x3d0b0e;
        if (_0x4ba690 && (_0x4ba690.packname || _0x4ba690.author)) {
          _0x3d0b0e = await writeExifVid(_0x5f51d9, _0x4ba690);
        } else {
          _0x3d0b0e = await videoToWebp(_0x5f51d9);
        }
        await _0x1e581a.sendMessage(_0x287737, {
          'sticker': {
            'url': _0x3d0b0e
          },
          ..._0x4ba690
        }, _0x4ba690);
      };
      _0x1e581a.sendMedia = async (_0x2e5328, _0x4fba95, _0x53f3aa = '', _0x43d24f = '', _0x3cf2aa = '', _0x3a30b2 = {}) => {
        let _0x40916f = await _0x1e581a.getFile(_0x4fba95, true);
        let {
          mime: _0x20811a,
          ext: _0x3d946b,
          res: _0xda8948,
          data: _0x440cc5,
          filename: _0x5900ca
        } = _0x40916f;
        if (_0xda8948 && _0xda8948.status !== 0xc8 || file.length <= 0x10000) {
          try {
            throw {
              'json': JSON.parse(file.toString())
            };
          } catch (_0x3b9f8f) {
            if (_0x3b9f8f.json) {
              throw _0x3b9f8f.json;
            }
          }
        }
        let _0x40c249 = '';
        let _0x4c126e = _0x20811a;
        let _0xac9699 = _0x5900ca;
        if (_0x3a30b2.asDocument) {
          _0x40c249 = "document";
        }
        if (_0x3a30b2.asSticker || /webp/.test(_0x20811a)) {
          let {
            writeExif: _0x504848
          } = require("./exif");
          let _0x1cb4c2 = {
            'mimetype': _0x20811a,
            'data': _0x440cc5
          };
          _0xac9699 = await _0x504848(_0x1cb4c2, {
            'packname': _0x3a30b2.packname ? _0x3a30b2.packname : Config.packname,
            'author': _0x3a30b2.author ? _0x3a30b2.author : Config.author,
            'categories': _0x3a30b2.categories ? _0x3a30b2.categories : []
          });
          await fs.promises.unlink(_0x5900ca);
          _0x40c249 = "sticker";
          _0x4c126e = "image/webp";
        } else {
          if (/image/.test(_0x20811a)) {
            _0x40c249 = 'image';
          } else {
            if (/video/.test(_0x20811a)) {
              _0x40c249 = "video";
            } else if (/audio/.test(_0x20811a)) {
              _0x40c249 = "audio";
            } else {
              _0x40c249 = "document";
            }
          }
        }
        await _0x1e581a.sendMessage(_0x2e5328, {
          [_0x40c249]: {
            'url': _0xac9699
          },
          'caption': _0x43d24f,
          'mimetype': _0x4c126e,
          'fileName': _0x53f3aa,
          ..._0x3a30b2
        }, {
          'quoted': _0x3cf2aa,
          ..._0x3a30b2
        });
        return fs.promises.unlink(_0xac9699);
      };
      _0x1e581a.downloadAndSaveMediaMessage = async (_0x4ca531, _0x50d9d9 = 'null', _0x54d4d6 = true) => {
        let _0x5f28a1 = _0x4ca531.msg ? _0x4ca531.msg : _0x4ca531;
        let _0x4abf8b = (_0x4ca531.msg || _0x4ca531).mimetype || '';
        let _0x37ef66 = _0x4ca531.mtype ? _0x4ca531.mtype.replace(/Message/gi, '') : _0x4abf8b.split('/')[0x0];
        const _0x1a2ee3 = await downloadContentFromMessage(_0x5f28a1, _0x37ef66);
        let _0x34a7f2 = Buffer.from([]);
        for await (const _0x33f878 of _0x1a2ee3) {
          _0x34a7f2 = Buffer.concat([_0x34a7f2, _0x33f878]);
        }
        let _0x4f80f1 = "./temp/" + (await fs.writeFileSync(_0x4f80f1, _0x34a7f2));
        return _0x4f80f1;
      };
      _0x1e581a.forward = async (_0x12c080, _0x5b747a, _0x3cf640, _0x371fa6, _0x273ff6 = true) => {
        try {
          let _0x364ce4 = _0x5b747a.mtype;
          let _0x6be9d5 = {};
          console.log("Forward function Called and Type is : ", _0x364ce4);
          if (_0x364ce4 == "conversation") {
            _0x6be9d5 = {
              'text': _0x5b747a.text,
              'contextInfo': _0x3cf640
            };
            for (let _0x35f82a of parsedJid(_0x12c080)) {
              await _0x1e581a.sendMessage(_0x35f82a, _0x6be9d5, {
                'quoted': _0x371fa6
              });
            }
            return;
          }
          let _0x174954 = _0x5b747a.msg ? _0x5b747a.msg : _0x5b747a;
          let _0x136b5e = (_0x5b747a.msg || _0x5b747a).mimetype || '';
          let _0x2f9aad = _0x5b747a.mtype ? _0x5b747a.mtype.replace(/Message/gi, '') : _0x136b5e.split('/')[0x0];
          const _0x2e15d2 = await downloadContentFromMessage(_0x174954, _0x2f9aad);
          let _0x4a2139 = Buffer.from([]);
          for await (const _0x596e3e of _0x2e15d2) {
            _0x4a2139 = Buffer.concat([_0x4a2139, _0x596e3e]);
          }
          let _0x2eea2 = await FileType.fromBuffer(_0x4a2139);
          let _0x60d4d6 = await ('' + Math.floor(Math.random() * 0x2710) + _0x2eea2.ext);
          let _0x25ebd3 = "./temp/" + _0x60d4d6;
          await fs.writeFileSync(_0x25ebd3, _0x4a2139);
          if (_0x364ce4 == "videoMessage") {
            _0x6be9d5 = {
              'video': fs.readFileSync(_0x25ebd3),
              'mimetype': _0x5b747a.mimetype,
              'caption': _0x5b747a.text,
              'contextInfo': _0x3cf640
            };
          } else {
            if (_0x364ce4 == "imageMessage") {
              _0x6be9d5 = {
                'image': fs.readFileSync(_0x25ebd3),
                'mimetype': _0x5b747a.mimetype,
                'caption': _0x5b747a.text,
                'contextInfo': _0x3cf640
              };
            } else {
              if (_0x364ce4 == "audioMessage") {
                _0x6be9d5 = {
                  'audio': fs.readFileSync(_0x25ebd3),
                  'mimetype': _0x5b747a.mimetype,
                  'seconds': 0xbebc74b,
                  'ptt': true,
                  'contextInfo': _0x3cf640
                };
              } else if (_0x364ce4 == "documentWithCaptionMessage" || _0x2eea2 == "documentMessage") {
                _0x6be9d5 = {
                  'document': fs.readFileSync(_0x25ebd3),
                  'mimetype': _0x5b747a.mimetype,
                  'caption': _0x5b747a.text,
                  'contextInfo': _0x3cf640
                };
              } else {
                fs.unlink(_0x25ebd3, _0x4733eb => {
                  if (_0x4733eb) {
                    console.error("Error deleting file:", _0x4733eb);
                  } else {
                    console.log("File deleted successfully");
                  }
                });
              }
            }
          }
          for (let _0x4fd692 of parsedJid(_0x12c080)) {
            try {
              await _0x1e581a.sendMessage(_0x4fd692, _0x6be9d5, {
                'quoted': _0x371fa6
              });
            } catch (_0x45dfd4) {}
          }
          return fs.unlink(_0x25ebd3, _0x2ca2a8 => {
            if (_0x2ca2a8) {
              console.error("Error deleting file:", _0x2ca2a8);
            } else {
              console.log("File deleted successfully");
            }
          });
        } catch (_0x55f4a3) {
          console.log(_0x55f4a3);
        }
      };
      _0x1e581a.downloadMediaMessage = async _0x369d1a => {
        let _0x141971 = _0x369d1a.msg ? _0x369d1a.msg : _0x369d1a;
        let _0x53b102 = (_0x369d1a.msg || _0x369d1a).mimetype || '';
        let _0x5e94c4 = _0x369d1a.mtype ? _0x369d1a.mtype.replace(/Message/gi, '') : _0x53b102.split('/')[0x0];
        const _0x50777b = await downloadContentFromMessage(_0x141971, _0x5e94c4);
        let _0x28d233 = Buffer.from([]);
        for await (const _0x44cbcb of _0x50777b) {
          _0x28d233 = Buffer.concat([_0x28d233, _0x44cbcb]);
        }
        return _0x28d233;
      };
      _0x1e581a.forwardOrBroadCast2 = async (_0x32a969, _0x1acecb, _0x4b602d = {}, _0x15b4d7 = '') => {
        try {
          let _0x2d9355 = _0x1acecb.mtype;
          if (_0x2d9355 === "videoMessage" && _0x15b4d7 === "ptv") {
            _0x1acecb = {
              'ptvMessage': {
                ..._0x1acecb.msg
              }
            };
          }
          let _0x101f75 = {
            ..._0x4b602d,
            'contextInfo': {
              ...(_0x4b602d.contextInfo ? _0x4b602d.contextInfo : {}),
              ...(_0x4b602d.linkPreview ? {
                'linkPreview': {
                  ..._0x4b602d.linkPreview
                }
              } : {}),
              ...(_0x4b602d.quoted && _0x4b602d.quoted.message ? {
                'quotedMessage': {
                  ...(_0x4b602d.quoted?.["message"] || {})
                }
              } : {})
            }
          };
          console.log("\n\nopts : ", _0x101f75, "\n\n");
          var _0x4f6190 = _0x1acecb.message ? _0x1acecb.message : _0x1acecb;
          let _0x5d2b17 = _0x2d9355 ? _0x2d9355 : Object.keys(_0x4f6190)[0x0];
          _0x4f6190 = {
            ..._0x101f75,
            ..._0x4f6190
          };
          const _0x419c96 = await generateWAMessageFromContent(_0x32a969, _0x4f6190, _0x4b602d ? {
            ...(_0x5d2b17 == "conversation" ? {
              'conversation': _0x4f6190[_0x5d2b17]
            } : _0x4f6190[_0x5d2b17]),
            ..._0x101f75,
            'contextInfo': {
              ...(_0x4f6190[_0x5d2b17]?.["contextInfo"] || {}),
              ..._0x101f75.contextInfo
            }
          } : {});
          await _0x1e581a.relayMessage(_0x32a969, _0x419c96.message, {
            'messageId': _0x419c96.key.id
          });
          console.log("\n\n waMessage : ", _0x419c96, "\n\n");
          return _0x419c96;
        } catch {}
      };
      _0x1e581a.forwardOrBroadCast = async (_0xa5138a, _0x30cf38, _0x6ec669 = {}, _0x4bfe7f = '') => {
        try {
          let _0x3f33f3 = _0x30cf38.mtype;
          if (_0x3f33f3 === "videoMessage" && _0x4bfe7f === 'ptv') {
            _0x30cf38 = {
              'ptvMessage': {
                ..._0x30cf38.msg
              }
            };
          }
          _0x6ec669.contextInfo = {
            ..._0x6ec669.contextInfo
          } || {};
          var _0x5634a5 = _0x30cf38.message ? _0x30cf38.message : _0x30cf38;
          let _0x52a3cb = _0x3f33f3 ? _0x3f33f3 : Object.keys(_0x5634a5)[0x0];
          console.log("template: ", _0x5634a5);
          const _0x11ac53 = await generateWAMessageFromContent(_0xa5138a, _0x5634a5, _0x6ec669 ? {
            ..._0x5634a5[_0x52a3cb],
            ..._0x6ec669,
            ...(_0x6ec669.contextInfo ? {
              'contextInfo': {
                ..._0x5634a5[_0x52a3cb].contextInfo,
                ..._0x6ec669.contextInfo,
                ...(_0x6ec669.quoted ? {
                  'quotedMessage': {
                    ..._0x6ec669.quoted
                  }
                } : {})
              }
            } : {})
          } : {});
          await _0x1e581a.relayMessage(_0xa5138a, _0x11ac53.message, {
            'messageId': _0x11ac53.key.id
          });
          return _0x11ac53;
        } catch (_0x1c3d56) {
          console.log(_0x1c3d56);
        }
      };
      _0x1e581a.copyNForward = async (_0x8beb53, _0x152033, _0x1db969 = false, _0x2e479d = {}) => {
        try {
          let _0x1a08df;
          if (_0x2e479d.readViewOnce) {
            _0x152033.message = _0x152033.message && _0x152033.message.ephemeralMessage && _0x152033.message.ephemeralMessage.message ? _0x152033.message.ephemeralMessage.message : _0x152033.message || undefined;
            _0x1a08df = Object.keys(_0x152033.message.viewOnceMessage.message)[0x0];
            delete (_0x152033.message && _0x152033.message.ignore ? _0x152033.message.ignore : _0x152033.message || undefined);
            delete _0x152033.message.viewOnceMessage.message[_0x1a08df].viewOnce;
            _0x152033.message = {
              ..._0x152033.message.viewOnceMessage.message
            };
          }
          let _0x45a5c9 = Object.keys(_0x152033.message)[0x0];
          let _0x2eb158 = await generateForwardMessageContent(_0x152033, _0x1db969);
          let _0x51d7c3 = Object.keys(_0x2eb158)[0x0];
          let _0x3a659b = {};
          if (_0x45a5c9 != "conversation") {
            _0x3a659b = _0x152033.message[_0x45a5c9].contextInfo;
          }
          _0x2eb158[_0x51d7c3].contextInfo = {
            ..._0x3a659b,
            ..._0x2eb158[_0x51d7c3].contextInfo
          };
          const _0x19a808 = await generateWAMessageFromContent(_0x8beb53, _0x2eb158, _0x2e479d ? {
            ..._0x2eb158[_0x51d7c3],
            ..._0x2e479d,
            ...(_0x2e479d.contextInfo ? {
              'contextInfo': {
                ..._0x2eb158[_0x51d7c3].contextInfo,
                ..._0x2e479d.contextInfo
              }
            } : {})
          } : {});
          await _0x1e581a.relayMessage(_0x8beb53, _0x19a808.message, {
            'messageId': _0x19a808.key.id
          });
          return _0x19a808;
        } catch (_0x589e27) {
          console.log(_0x589e27);
        }
      };
      _0x1e581a.sendFileUrl = async (_0x5ab755, _0x810665, _0x59cd02 = '', _0x4ce0c2 = '', _0xedb52a = {
        'author': "ANITA"
      }, _0x325ef7 = '') => {
        try {
          let _0x557323 = await axios.head(_0x810665);
          let _0x132762 = _0x557323?.['headers']["content-type"] || '';
          let _0x512def = _0x132762.split('/')[0x0];
          let _0x58abe1 = false;
          if (_0x132762.split('/')[0x1] === "gif" || _0x325ef7 === "gif") {
            _0x58abe1 = {
              'video': {
                'url': _0x810665
              },
              'caption': _0x59cd02,
              'gifPlayback': true,
              ..._0xedb52a
            };
          } else {
            if (_0x132762.split('/')[0x1] === 'webp' || _0x325ef7 === "sticker") {
              _0x58abe1 = {
                'sticker': {
                  'url': _0x810665
                },
                ..._0xedb52a
              };
            } else {
              if (_0x512def === "image" || _0x325ef7 === "image") {
                _0x58abe1 = {
                  'image': {
                    'url': _0x810665
                  },
                  'caption': _0x59cd02,
                  ..._0xedb52a,
                  'mimetype': 'image/jpeg'
                };
              } else {
                if (_0x512def === "video" || _0x325ef7 === "video") {
                  _0x58abe1 = {
                    'video': {
                      'url': _0x810665
                    },
                    'caption': _0x59cd02,
                    'mimetype': "video/mp4",
                    ..._0xedb52a
                  };
                } else {
                  if (_0x512def === 'audio' || _0x325ef7 === "audio") {
                    _0x58abe1 = {
                      'audio': {
                        'url': _0x810665
                      },
                      'mimetype': "audio/mpeg",
                      ..._0xedb52a
                    };
                  } else if (_0x132762 == "application/pdf") {
                    _0x58abe1 = {
                      'document': {
                        'url': _0x810665
                      },
                      'mimetype': "application/pdf",
                      'caption': _0x59cd02,
                      ..._0xedb52a
                    };
                  }
                }
              }
            }
          }
          if (_0x58abe1) {
            try {
              return await _0x1e581a.sendMessage(_0x5ab755, _0x58abe1, {
                'quoted': _0x4ce0c2
              });
            } catch {}
            ;
          }
          try {
            var _0x2c55aa = _0x557323?.["headers"]["content-disposition"]?.["split"]("=\"")[0x1]?.["split"]("\"")[0x0] || '';
            if (_0x2c55aa) {
              const _0x3a1bec = [".jpg", ".jpeg", ".png"];
              const _0x1eded1 = [".mp4", '.avi', ".mov", '.mkv', ".gif", ".m4v", ".webp"];
              var _0x14e636 = _0x2c55aa.substring(_0x2c55aa.lastIndexOf('.'))?.['toLowerCase']() || "nillll";
              var _0x5e5bae;
              if (_0x3a1bec.includes(_0x14e636)) {
                _0x5e5bae = "image/jpeg";
              } else if (_0x1eded1.includes(_0x14e636)) {
                _0x5e5bae = "video/mp4";
              }
              _0x132762 = _0x5e5bae ? _0x5e5bae : _0x132762;
            }
          } catch (_0xe7b5bc) {}
          let _0x4d87ef = {
            'fileName': _0x2c55aa ? _0x2c55aa : "file",
            'caption': _0x59cd02,
            ..._0xedb52a,
            'mimetype': _0x132762
          };
          return _0x1e581a.sendMessage(_0x5ab755, {
            'document': {
              'url': _0x810665
            },
            ..._0x4d87ef
          }, {
            'quoted': _0x4ce0c2
          });
        } catch (_0x1ad57b) {
          console.log("Erorr in client.sendFileUrl() : ", _0x1ad57b);
        }
      };
      _0x1e581a.sendFromUrl = _0x1e581a.sendFileUrl;
      const _0x2838ff = {};
      let _0x280f7b = [];
      _0x1e581a.sendUi = async (_0x5a3e65, _0x1853a3 = {}, _0x141061 = '', _0x511d55 = '', _0x25ea47 = '') => {
        let _0x400dc3 = {};
        try {
          const _0x1c5d5b = ['.jpg', ".jpeg", ".png"];
          const _0x23bd2d = ['.mp4', ".avi", ".mov", '.mkv', ".gif", ".m4v", ".webp"];
          let _0xed6a09 = video = false;
          if (!_0x280f7b || !_0x280f7b[0x0]) {
            _0x280f7b = Config.userImages ? Config.userImages.split(',') : [await botpic()];
            _0x280f7b = _0x280f7b.filter(_0x6304c5 => _0x6304c5.trim() !== '');
          }
          let _0x5959b4 = _0x511d55 && _0x25ea47 ? _0x25ea47 : _0x280f7b[Math.floor(Math.random() * _0x280f7b.length)];
          if (!_0x2838ff[_0x5959b4]) {
            const _0x38883a = _0x5959b4.substring(_0x5959b4.lastIndexOf('.')).toLowerCase();
            if (_0x1c5d5b.includes(_0x38883a)) {
              _0xed6a09 = true;
            }
            if (_0x23bd2d.includes(_0x38883a)) {
              video = true;
            }
            _0x2838ff[_0x5959b4] = {
              'image': _0xed6a09,
              'video': video
            };
          }
          _0x141061 = _0x141061 && _0x141061.quoted?.["key"] ? _0x141061.quoted : _0x141061 || '';
          let _0x248d69;
          if (!_0x25ea47 && Config.userImages === "text" || _0x511d55 == 'text') {
            _0x248d69 = {
              'text': _0x1853a3.caption,
              ..._0x1853a3
            };
          } else {
            if (_0x511d55 == "image" || _0x2838ff[_0x5959b4]?.["image"]) {
              _0x248d69 = {
                'image': {
                  'url': _0x5959b4
                },
                ..._0x1853a3,
                'mimetype': "image/jpeg"
              };
            } else if (_0x511d55 == "video" || _0x2838ff[_0x5959b4]?.["video"]) {
              _0x248d69 = {
                'video': {
                  'url': _0x5959b4
                },
                ..._0x1853a3,
                'mimetype': "video/mp4",
                'gifPlayback': true,
                'height': 0x112,
                'width': 0x21c
              };
            }
          }
          _0x400dc3 = {
            ...(await _0x1e581a.contextInfo(Config.botname, _0x141061 && _0x141061.senderName ? _0x141061.senderName : Config.ownername))
          };
          if (_0x248d69) {
            return _0x1e581a.sendMessage(_0x5a3e65, {
              'contextInfo': _0x400dc3,
              ..._0x248d69
            }, {
              'quoted': _0x141061
            });
          }
        } catch (_0x3680f3) {
          console.log("erorr in userImages() : ", _0x3680f3);
        }
        try {
          return _0x1e581a.sendMessage(_0x5a3e65, {
            'image': {
              'url': await botpic()
            },
            'contextInfo': _0x400dc3,
            ..._0x1853a3
          });
        } catch {
          return _0x1e581a.sendMessage(_0x5a3e65, {
            'text': _0x1853a3.caption,
            'contextInfo': _0x400dc3,
            ..._0x1853a3
          });
        }
      };
      _0x1e581a.contextInfo = async (_0xf1665c = Config.BOT_NAME, _0x4afb9f = Config.ownername, _0x23e03b = log0, _0x50163e = 0x1, _0x16a252 = gurl, _0x26451c = false) => {
        try {
          let _0xfc44d1 = _0x26451c ? _0x26451c : Config.style;
          if (_0xfc44d1 >= 0x2) {
            return {
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'externalAdReply': {
                'title': _0xf1665c,
                'body': _0x4afb9f,
                'renderLargerThumbnail': true,
                'thumbnail': _0x23e03b,
                'mediaType': _0x50163e || 0x1,
                'mediaUrl': _0x16a252,
                'sourceUrl': _0x16a252
              }
            };
          } else {
            return _0xfc44d1 == 0x1 ? {
              'externalAdReply': {
                'title': _0xf1665c,
                'body': _0x4afb9f,
                'thumbnail': _0x23e03b,
                'mediaType': 0x1,
                'mediaUrl': _0x16a252,
                'sourceUrl': _0x16a252
              }
            } : {};
          }
        } catch (_0x4763a3) {
          console.log("error in client.contextInfo() : ", _0x4763a3);
          return {};
        }
      };
      _0x1e581a.cMod = (_0x45fc04, _0x2c7baf, _0x3e1338 = '', _0x19c6ed = _0x1e581a.user.id, _0x15882c = {}) => {
        let _0x25042 = Object.keys(_0x2c7baf.message)[0x0];
        let _0xd1e983 = _0x25042 === 'ephemeralMessage';
        if (_0xd1e983) {
          _0x25042 = Object.keys(_0x2c7baf.message.ephemeralMessage.message)[0x0];
        }
        let _0x39e141 = _0xd1e983 ? _0x2c7baf.message.ephemeralMessage.message : _0x2c7baf.message;
        let _0x347b21 = _0x39e141[_0x25042];
        if (typeof _0x347b21 === 'string') {
          _0x39e141[_0x25042] = _0x3e1338 || _0x347b21;
        } else {
          if (_0x347b21.caption) {
            _0x347b21.caption = _0x3e1338 || _0x347b21.caption;
          } else if (_0x347b21.text) {
            _0x347b21.text = _0x3e1338 || _0x347b21.text;
          }
        }
        if (typeof _0x347b21 !== "string") {
          _0x39e141[_0x25042] = {
            ..._0x347b21,
            ..._0x15882c
          };
        }
        if (_0x2c7baf.key.participant) {
          _0x19c6ed = _0x2c7baf.key.participant = _0x19c6ed || _0x2c7baf.key.participant;
        } else if (_0x2c7baf.key.participant) {
          _0x19c6ed = _0x2c7baf.key.participant = _0x19c6ed || _0x2c7baf.key.participant;
        }
        if (_0x2c7baf.key.remoteJid.includes("@s.whatsapp.net")) {
          _0x19c6ed = _0x19c6ed || _0x2c7baf.key.remoteJid;
        } else if (_0x2c7baf.key.remoteJid.includes("@broadcast")) {
          _0x19c6ed = _0x19c6ed || _0x2c7baf.key.remoteJid;
        }
        _0x2c7baf.key.remoteJid = _0x45fc04;
        _0x2c7baf.key.fromMe = _0x19c6ed === _0x1e581a.user.id;
        return proto.WebMessageInfo.fromObject(_0x2c7baf);
      };
      _0x1e581a.getFile = async (_0xe0221c, _0x2503fc) => {
        let _0x40603a;
        let _0x602b04 = Buffer.isBuffer(_0xe0221c) ? _0xe0221c : /^data:.*?\/.*?;base64,/i.test(_0xe0221c) ? Buffer.from(_0xe0221c.split`,`[0x1], "base64") : /^https?:\/\//.test(_0xe0221c) ? await (_0x40603a = await getBuffer(_0xe0221c)) : fs.existsSync(_0xe0221c) ? (_0xb205e6 = _0xe0221c, fs.readFileSync(_0xe0221c)) : typeof _0xe0221c === 'string' ? _0xe0221c : Buffer.alloc(0x0);
        let _0x59577f = (await FileType.fromBuffer(_0x602b04)) || {
          'mime': 'application/octet-stream',
          'ext': ".bin"
        };
        let _0xb205e6 = "./temp/null." + _0x59577f.ext;
        if (_0x602b04 && _0x2503fc) {
          fs.promises.writeFile(_0xb205e6, _0x602b04);
        }
        return {
          'res': _0x40603a,
          'filename': _0xb205e6,
          'size': await getSizeMedia(_0x602b04),
          ..._0x59577f,
          'data': _0x602b04
        };
      };
      _0x1e581a.sendFile = async (_0x2e71b8, _0x230df7, _0x5ba2f2, _0x210dce = {
        'quoted': ''
      }, _0x2253d8 = {}) => {
        let _0x353322 = await _0x1e581a.getFile(_0x230df7, true);
        let {
          filename: _0x3a02b5,
          size: _0xc80cde,
          ext: _0x1280b6,
          mime: _0x280b3f,
          data: _0x526fdc
        } = _0x353322;
        let _0x5dadaf = '';
        let _0x399296 = _0x280b3f;
        let _0x1e7668 = _0x3a02b5;
        if (_0x2253d8.asDocument) {
          _0x5dadaf = "document";
        }
        if (_0x2253d8.asSticker || /webp/.test(_0x280b3f)) {
          let {
            writeExif: _0x3977f7
          } = require("./exif.js");
          let _0xa0f09c = {
            'mimetype': _0x280b3f,
            'data': _0x526fdc
          };
          _0x1e7668 = await _0x3977f7(_0xa0f09c, {
            'packname': Config.packname,
            'author': Config.packname,
            'categories': _0x2253d8.categories ? _0x2253d8.categories : []
          });
          await fs.promises.unlink(_0x3a02b5);
          _0x5dadaf = "sticker";
          _0x399296 = "image/webp";
        } else {
          if (/image/.test(_0x280b3f)) {
            _0x5dadaf = "image";
          } else {
            if (/video/.test(_0x280b3f)) {
              _0x5dadaf = "video";
            } else if (/audio/.test(_0x280b3f)) {
              _0x5dadaf = "audio";
            } else {
              _0x5dadaf = "document";
            }
          }
        }
        await _0x1e581a.sendMessage(_0x2e71b8, {
          [_0x5dadaf]: {
            'url': _0x1e7668
          },
          'mimetype': _0x399296,
          'fileName': _0x5ba2f2,
          ..._0x2253d8
        }, {
          'quoted': _0x210dce && _0x210dce.quoted ? _0x210dce.quoted : _0x210dce,
          ..._0x210dce
        });
        return fs.promises.unlink(_0x1e7668);
      };
      _0x1e581a.fakeMessage = async (_0x275196 = "order", _0x90d040 = {}, _0x3109c4 = "➬ ANITA", _0x4eab85 = {}) => {
        const _0x762ff8 = [0x309, 0x0, 0x64, 0x1f4, 0x3e8, 0x3e7, 0x7e5];
        let _0x261c5f = {
          'id': "BAFDGM539SUHAILMDOFFICIAL",
          'fromMe': false,
          'participant': "0@s.whatsapp.net",
          'remoteJid': "status@broadcast",
          ..._0x90d040
        };
        let _0x401017 = {};
        if (_0x275196 == 'text' || _0x275196 == 'conservation' || !_0x275196) {
          _0x401017 = {
            'conversation': _0x3109c4
          };
        } else {
          if (_0x275196 == "order") {
            _0x401017 = {
              'orderMessage': {
                'itemCount': _0x762ff8[Math.floor(Math.random() * 0x8)],
                'status': 0x1,
                'surface': 0x1,
                'message': "❏ " + _0x3109c4,
                'orderTitle': "live",
                'sellerJid': "27717311486@s.whatsapp.net"
              }
            };
          } else {
            if (_0x275196 == "contact") {
              _0x401017 = {
                'contactMessage': {
                  'displayName': '' + _0x3109c4,
                  'jpegThumbnail': log0
                }
              };
            } else {
              if (_0x275196 == 'image') {
                _0x401017 = {
                  'imageMessage': {
                    'jpegThumbnail': log0,
                    'caption': _0x3109c4
                  }
                };
              } else if (_0x275196 == "video") {
                _0x401017 = {
                  'videoMessage': {
                    'url': log0,
                    'caption': _0x3109c4,
                    'mimetype': "video/mp4",
                    'fileLength': "4757228",
                    'seconds': 0x2c
                  }
                };
              }
            }
          }
        }
        return {
          'key': {
            ..._0x261c5f
          },
          'message': {
            ..._0x401017,
            ..._0x4eab85
          }
        };
      };
      _0x1e581a.parseMention = async _0x3ded18 => {
        return [..._0x3ded18.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x5b84db => _0x5b84db[0x1] + "@s.whatsapp.net");
      };
    }
    _0x4b0e62()["catch"](_0x1dcaf3 => console.log(_0x1dcaf3));
  }, 0xbb8);
};