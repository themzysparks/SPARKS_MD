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

const axios = require('axios');
const fs = require('fs-extra');
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const Jimp = require("jimp");
const fetch = require('node-fetch');
const {
  getBuffer,
  fetchJson,
  runtime,
  isUrl,
  GIFBufferToVideoBuffer
} = require('./serialized');
const {
  tlang,
  TelegraPh,
  dare,
  truth,
  random_question
} = require("./scraper");
const {
  bot_
} = require("./schemes");
const Config = require("../config.js");
let caption = Config.caption || '';
const {
  Innertube,
  UniversalCache,
  Utils
} = require("youtubei.js");
const {
  existsSync,
  mkdirSync,
  createWriteStream
} = require('fs');
let yt = {
  "getInfo": async (_0x50f93a, _0x2197c1 = {}) => {
    try {
      if (!global.AstroOfficial) {
        return;
      }
      const _0xca50ef = await Innertube.create({
        'cache': new UniversalCache(false),
        'generate_session_locally': true
      });
      let _0x5a8d58 = await _0xca50ef.getInfo(_0x50f93a, _0x2197c1);
      let _0x5d8ba2 = [];
      for (let _0x8a2c7b = 0x0; _0x8a2c7b < _0x5a8d58.streaming_data.formats.length; _0x8a2c7b++) {
        await _0x5d8ba2.push(_0x5a8d58.streaming_data.formats[_0x8a2c7b].quality_label);
      }
      let _0x40ecea = _0x5d8ba2.includes("360p") ? "360p" : "best";
      let _0x2849cb = {
        'status': true,
        'title': _0x5a8d58.basic_info.title,
        'id': _0x5a8d58.basic_info.id,
        'quality': _0x5d8ba2,
        'pref_Quality': _0x40ecea,
        'duration': _0x5a8d58.basic_info.duration,
        'description': _0x5a8d58.basic_info.short_description,
        'keywords': _0x5a8d58.basic_info.keywords,
        'thumbnail': _0x5a8d58.basic_info.thumbnail[0x0].url,
        'author': _0x5a8d58.basic_info.author,
        'views': _0x5a8d58.basic_info.view_count,
        'likes': _0x5a8d58.basic_info.like_count,
        'category': _0x5a8d58.basic_info.category,
        'channel': _0x5a8d58.basic_info.channel,
        'basic_info': _0x5a8d58
      };
      return _0x2849cb;
    } catch (_0x1bacfc) {
      console.log("./lib/asta/yt.getInfo()\n", _0x1bacfc.message);
      return {
        'status': false
      };
    }
  },
  "download": async (_0x78e7b3, _0x54b227 = {
    'type': "video",
    'quality': "best",
    'format': "mp4"
  }) => {
    try {
      if (!global.AstroOfficial) {
        return;
      }
      const _0x4a64dc = await Innertube.create({
        'cache': new UniversalCache(false),
        'generate_session_locally': true
      });
      let _0x1009dd = _0x54b227.type ? _0x54b227.type : 'video';
      let _0x2bc0cc = _0x1009dd === "audio" ? "best" : _0x54b227.quality ? _0x54b227.quality : 'best';
      let _0x25cf88 = _0x54b227.format ? _0x54b227.format : "mp4";
      const _0x5bd217 = await _0x4a64dc.download(_0x78e7b3, {
        'type': _0x1009dd,
        'quality': _0x2bc0cc,
        'format': _0x25cf88
      });
      if (!existsSync('./temp')) {
        mkdirSync('./temp');
      }
      let _0x39e9ef = _0x1009dd === "video" ? 'mp4' : 'm4a';
      let _0x327e1b = "./temp/Asta-Md " + _0x78e7b3 + '.' + _0x39e9ef;
      var _0x1b52f2 = createWriteStream(_0x327e1b);
      for await (const _0x2e5f05 of Utils.streamToIterable(_0x5bd217)) {
        _0x1b52f2.write(_0x2e5f05);
      }
      return _0x327e1b;
    } catch (_0x7a4bd5) {
      console.log("./lib/asta/yt.dowanload()\n", _0x7a4bd5.message);
      return false;
    }
  }
};
async function sendAnimeReaction(_0x1fab45, _0x14a66f = "punch", _0x3b2c8c = '', _0x91b42f = '') {
  try {
    var _0x33ead9 = await fetchJson("https://api.waifu.pics/sfw/" + _0x14a66f);
    const _0x2282a5 = await axios.get(_0x33ead9.url, {
      'responseType': "arraybuffer"
    });
    const _0x5bc121 = Buffer.from(_0x2282a5.data, "utf-8");
    let _0x510409 = _0x1fab45.mentionedJid ? _0x1fab45.mentionedJid[0x0] : _0x1fab45.quoted ? _0x1fab45.quoted.sender : false;
    let _0x15c0cf = await GIFBufferToVideoBuffer(_0x5bc121);
    let _0x3a0bcd = _0x510409 ? "*@" + _0x1fab45.sender.split('@')[0x0] + " " + _0x3b2c8c + " @" + _0x510409.split('@')[0x0] + '*' : "*@" + _0x1fab45.sender.split('@')[0x0] + " " + _0x91b42f + '*';
    return _0x510409 ? await _0x1fab45.bot.sendMessage(_0x1fab45.chat, {
      'video': _0x15c0cf,
      'gifPlayback': true,
      'mentions': [_0x510409, _0x1fab45.sender],
      'caption': _0x3a0bcd
    }, {
      'quoted': _0x1fab45,
      'messageId': _0x1fab45.bot.messageId()
    }) : await _0x1fab45.bot.sendMessage(_0x1fab45.chat, {
      'video': _0x15c0cf,
      'gifPlayback': true,
      'mentions': [_0x1fab45.sender],
      'caption': _0x3a0bcd
    }, {
      'quoted': _0x1fab45,
      'messageId': _0x1fab45.bot.messageId()
    });
  } catch (_0x35d6f1) {
    return await _0x1fab45.error(_0x35d6f1 + "\nERROR AT : /lib/asta.js/sendAnimeReaction()\n\ncommand: " + _0x14a66f);
  }
}
async function sendGImages(_0x1a6a0b, _0x24f6f0, _0x3de690 = caption, _0x362775 = '') {
  try {
    let _0x4f213d = require("async-g-i-s");
    let _0x399cd5 = await _0x4f213d(_0x24f6f0);
    let _0x1b0821 = _0x399cd5[Math.floor(Math.random() * _0x399cd5.length)].url;
    let _0x479641 = {
      'image': {
        'url': _0x1b0821
      },
      'caption': _0x3de690,
      'contextInfo': {
        'externalAdReply': {
          'title': tlang().title,
          'body': _0x362775,
          'thumbnail': log0,
          'mediaType': 0x1,
          'mediaUrl': gurl,
          'sourceUrl': gurl
        }
      }
    };
    return await _0x1a6a0b.bot.sendMessage(_0x1a6a0b.chat, _0x479641, {
      'quoted': _0x1a6a0b,
      'messageId': _0x1a6a0b.bot.messageId()
    });
  } catch (_0x266f63) {
    await _0x1a6a0b.error(_0x266f63);
    return console.log("./lib/asta.js/sendGImages()\n", _0x266f63);
  }
}
async function AudioToBlackVideo(_0xbe33d8, _0x4a4f8d) {
  try {
    try {
      fs.unlinkSync(_0x4a4f8d);
    } catch (_0x4164d5) {}
    const _0x55eb91 = "ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 " + _0xbe33d8;
    const {
      stdout: _0x9af1de
    } = await exec(_0x55eb91);
    const _0x3ab720 = parseFloat(_0x9af1de);
    try {
      fs.unlinkSync("./temp/blackScreen.mp4");
    } catch (_0x172fbe) {}
    const _0x14af0c = "ffmpeg -f lavfi -i color=c=black:s=1280x720:d=" + _0x3ab720 + " -vf \"format=yuv420p\" " + "./temp/blackScreen.mp4";
    await exec(_0x14af0c);
    const _0x1ba7af = "ffmpeg -i ./temp/blackScreen.mp4 -i " + _0xbe33d8 + " -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 " + _0x4a4f8d;
    await exec(_0x1ba7af);
    console.log("Audio converted to black screen video successfully!");
    return {
      'result': true
    };
  } catch (_0x2d0884) {
    console.error("./lib/Aviator.js/AudioToBlackVideo()\n", _0x2d0884);
    return {
      'result': false
    };
  }
}
async function textToLogoGenerator(_0x1cf2e6, _0x2b3a86 = '', _0x2f15b8 = '', _0x12386b = "ser", _0x24f826 = "textpro", _0x30d3dc = true) {
  let _0x16df05 = {};
  let _0x202995 = {};
  let _0x1d8311 = /1|ephoto|ephoto360/gi.test(_0x24f826) ? "https://ephoto360.com/" + _0x2b3a86 + ".html" : /2|potoxy|photooxy/gi.test(_0x24f826) ? "https://photooxy.com/" + _0x2b3a86 + ".html" : /3|enphoto|en360/gi.test(_0x24f826) ? "https://en.ephoto360.com/" + _0x2b3a86 + ".html" : "https://textpro.me/" + _0x2b3a86 + ".html";
  try {
    const {
      textpro: _0x421bb1
    } = require("mumaker");
    if (_0x2f15b8) {
      _0x16df05 = await _0x421bb1(_0x1d8311, [_0x2f15b8, _0x12386b]);
    }
    let _0x2bff4f = {} || {
      ...(await _0x1cf2e6.bot.contextInfo("ᴛᴇxᴛ ᴛᴏ ʟᴏɢᴏ", "Hello " + _0x1cf2e6.senderName))
    };
    return await _0x1cf2e6.bot.sendMessage(_0x1cf2e6.jid, {
      'image': {
        'url': _0x16df05.image
      },
      'caption': caption,
      'contextInfo': _0x2bff4f
    }, {
      'messageId': _0x1cf2e6.bot.messageId()
    });
  } catch (_0x23523b) {
    try {
      let _0x2c0e71 = global.api_smd + ('/api/maker?text1=' + _0x2f15b8 + "&text2=" + _0x12386b + "&url=" + _0x1d8311);
      _0x202995 = await fetchJson(_0x2c0e71);
      if ((!_0x202995 || !_0x202995.status || !_0x202995.img) && _0x30d3dc) {
        return _0x1cf2e6.error(_0x23523b + "\nWebinfo:" + (_0x202995.img || _0x202995) + "\n\nfileName: textToLogoGenerator->s.js", _0x23523b);
      }
      await _0x1cf2e6.bot.sendMessage(_0x1cf2e6.jid, {
        'image': {
          'url': _0x202995.img
        }
      }, {
        'messageId': _0x1cf2e6.bot.messageId()
      });
    } catch (_0x2cd008) {
      let _0x21d0b4 = _0x16df05 && _0x16df05.image ? _0x16df05.image : _0x202995 && _0x202995.img ? _0x202995.img : false;
      if (_0x30d3dc) {
        _0x1cf2e6.error(_0x23523b + "\n\nAPI Error : " + _0x2cd008 + "\n\nfileName: textToLogoGenerator->s.js", _0x23523b, (_0x21d0b4 ? "Here we go\n\n" + _0x21d0b4 : "Error, Request Denied!").trim());
      }
    }
  }
}
async function photoEditor(_0x4fd77a, _0x2c9e10 = 'ad', _0x74fd14 = '', _0x260c3d = true) {
  let _0x1f461b = ["imageMessage"];
  try {
    let _0x555c16 = _0x1f461b.includes(_0x4fd77a.mtype) ? _0x4fd77a : _0x4fd77a.reply_message;
    if (!_0x555c16 || !_0x1f461b.includes(_0x555c16?.['mtype'] || "null")) {
      return await _0x4fd77a.send("*_Uhh Dear, Reply to an image_*");
    }
    let _0x4b04f6 = await _0x4fd77a.bot.downloadAndSaveMediaMessage(_0x555c16);
    let _0x555497 = await TelegraPh(_0x4b04f6);
    try {
      fs.unlinkSync(_0x4b04f6);
    } catch (_0x3f2b3a) {}
    return await _0x4fd77a.bot.sendMessage(_0x4fd77a.chat, {
      'image': {
        'url': 'https://api.popcat.xyz/' + _0x2c9e10 + "?image=" + _0x555497
      },
      'caption': _0x74fd14
    }, {
      'quoted': _0x4fd77a,
      'messageId': _0x4fd77a.bot.messageId()
    });
  } catch (_0x455c10) {
    if (_0x260c3d) {
      await _0x4fd77a.error(_0x455c10 + "\n\ncommand: " + _0x2c9e10 + "\nfileName: photoEditor->s.js", _0x455c10);
    }
  }
}
async function plugins(_0xe937aa, _0x4e002d, _0x29efc4 = '', _0x17327c = '') {
  let _0x4bfe3e = '';
  try {
    let _0x22e2fe = (await bot_.findOne({
      'id': "bot_" + _0xe937aa.user
    })) || (await bot_["new"]({
      'id': 'bot_' + _0xe937aa.user
    }));
    let _0x523641 = _0x22e2fe.plugins;
    if (_0x4e002d.toLowerCase() === 'install') {
      let _0x1ab75e = '';
      for (let _0x480754 of isUrl(_0x29efc4)) {
        var _0x4739e1 = new URL(_0x480754.replace(/[_*]+$/, ''));
        _0x4739e1 = _0x4739e1.href.includes("raw") ? _0x4739e1.href : _0x4739e1.href + "/raw";
        const {
          data: _0x38a13a
        } = await axios.get(_0x4739e1);
        let _0x45a78a = /pattern: ["'](.*)["'],/g.exec(_0x38a13a) || /cmdname: ["'](.*)["'],/g.exec(_0x38a13a) || /name: ["'](.*)["'],/g.exec(_0x38a13a);
        if (!_0x45a78a) {
          _0x4bfe3e += "*gist not found:* _" + _0x4739e1 + "_ \n";
          continue;
        }
        let _0xaee5dc = _0x45a78a[0x1].split(" ")[0x0] || Math.random().toString(0x24).slice(-0x5);
        let _0x3dafd1 = _0xaee5dc.replace(/[^A-Za-z]/g, '');
        if (_0x1ab75e.includes(_0x3dafd1)) {
          continue;
        } else {
          _0x1ab75e = _0x1ab75e + "[\"" + _0x3dafd1 + "\"] ";
        }
        if (_0x523641[_0x3dafd1]) {
          _0x4bfe3e += "*Plugin _'" + _0x3dafd1 + "'_ already installed!*\n";
          continue;
        }
        let _0x76cb4 = _0x17327c + '/' + _0x3dafd1 + ".smd";
        await fs.writeFileSync(_0x76cb4, _0x38a13a, "utf8");
        try {
          require(_0x76cb4);
        } catch (_0x36668a) {
          fs.unlinkSync(_0x76cb4);
          _0x4bfe3e += "*Invalid :* _" + _0x4739e1 + "_\n ```" + _0x36668a + "```\n\n ";
          continue;
        }
        if (!_0x523641[_0x3dafd1]) {
          _0x523641[_0x3dafd1] = _0x4739e1;
          await bot_.updateOne({
            'id': 'bot_' + _0xe937aa.user
          }, {
            'plugins': _0x523641
          });
          _0x4bfe3e += "*Plugin _'" + _0x3dafd1 + "'_ Succesfully installed!*\n";
        }
      }
    } else {
      if (_0x4e002d.toLowerCase() === "remove") {
        if (_0x29efc4 === "all") {
          let _0xfd6cdb = '';
          for (const _0x196965 in _0x523641) {
            try {
              fs.unlinkSync(_0x17327c + '/' + _0x196965 + '.smd');
              _0xfd6cdb = '' + _0xfd6cdb + _0x196965 + ',';
            } catch (_0x337976) {
              console.log("❌ " + _0x196965 + " ❌ NOT BE REMOVED", _0x337976);
            }
          }
          await bot_.updateOne({
            'id': "bot_" + _0xe937aa.user
          }, {
            'plugins': {}
          });
          _0x4bfe3e = "*External plugins " + (_0xfd6cdb ? _0xfd6cdb : 'all') + " removed!!!*";
        } else {
          try {
            if (_0x523641[_0x29efc4]) {
              try {
                fs.unlinkSync(_0x17327c + '/' + _0x29efc4 + ".smd");
              } catch {}
              delete _0x523641[_0x29efc4];
              await bot_.updateOne({
                'id': "bot_" + _0xe937aa.user
              }, {
                'plugins': _0x523641
              });
              _0x4bfe3e += "*Plugin _'" + _0x29efc4 + "'_ Succesfully removed!*";
            } else {
              _0x4bfe3e += "*_plugin not exist in " + Config.botname + '_*';
            }
          } catch (_0x5f3131) {
            console.log("Error while removing plugins \n ", _0x5f3131);
          }
        }
      } else {
        if (_0x4e002d.toLowerCase() === 'plugins') {
          if (_0x29efc4) {
            _0x4bfe3e = _0x523641[_0x29efc4] ? '*_' + _0x29efc4 + ":_* " + _0x523641[_0x29efc4] : false;
          } else {
            for (const _0x47254a in _0x523641) {
              _0x4bfe3e += '*' + (_0x47254a + 0x1) + ":* " + _0x47254a + " \n*Url:* " + _0x523641[_0x47254a] + "\n\n";
            }
          }
        }
      }
    }
    return _0x4bfe3e;
  } catch (_0x207fa4) {
    console.log("Plugins : ", _0x207fa4);
    return (_0x4bfe3e + " \n\nError: " + _0x207fa4).trim();
  }
}
async function updateProfilePicture(_0x2e98e9, _0x38cc3c, _0x310ba4, _0x29e6fd = 'pp') {
  try {
    if (_0x29e6fd === 'pp' || _0x29e6fd === "gpp") {
      let _0x2babe1 = await _0x2e98e9.bot.downloadAndSaveMediaMessage(_0x310ba4);
      await _0x2e98e9.bot.updateProfilePicture(_0x38cc3c, {
        'url': _0x2babe1
      });
    } else {
      async function _0x55c08b(_0x22c0d3) {
        const _0x1c1b24 = await Jimp.read(_0x22c0d3);
        const _0x467d2c = _0x1c1b24.getWidth();
        const _0x2c6fa6 = _0x1c1b24.getHeight();
        const _0x32148f = _0x1c1b24.crop(0x0, 0x0, _0x467d2c, _0x2c6fa6);
        return {
          'img': await _0x32148f.scaleToFit(0x144, 0x2d0).getBufferAsync(Jimp.MIME_JPEG),
          'preview': await _0x32148f.normalize().getBufferAsync(Jimp.MIME_JPEG)
        };
      }
      try {
        const _0x23a519 = await _0x310ba4.download();
        const {
          query: _0x4f43e9
        } = _0x2e98e9.bot;
        const {
          preview: _0x1e8247
        } = await _0x55c08b(_0x23a519);
        await _0x4f43e9({
          'tag': 'iq',
          'attrs': {
            'to': _0x38cc3c,
            'type': "set",
            'xmlns': 'w:profile:picture'
          },
          'content': [{
            'tag': "picture",
            'attrs': {
              'type': "image"
            },
            'content': _0x1e8247
          }]
        });
      } catch (_0x4ea5e4) {
        let _0x19055a = await _0x2e98e9.bot.downloadAndSaveMediaMessage(_0x310ba4);
        await _0x2e98e9.bot.updateProfilePicture(_0x38cc3c, {
          'url': _0x19055a
        });
        return await _0x2e98e9.error(_0x4ea5e4 + " \n\ncommand: update pp", _0x4ea5e4, false);
      }
    }
    return await _0x2e98e9.reply("*_Profile icon updated Succesfully!!_*");
  } catch (_0x260c97) {
    return await _0x2e98e9.error(_0x260c97 + " \n\ncommand: " + (_0x29e6fd ? _0x29e6fd : 'pp'), _0x260c97);
  }
}
async function forwardMessage(_0x3b8a40, _0x5108dc, _0x15a74d = '') {
  let _0xc9f1fc = _0x5108dc.quoted.mtype;
  let _0x126b06;
  if (_0xc9f1fc === "videoMessage" && _0x15a74d === "ptv") {
    _0x126b06 = {
      'ptvMessage': {
        ..._0x5108dc.quoted
      }
    };
  } else {
    if (_0xc9f1fc === "videoMessage") {
      _0x126b06 = {
        'videoMessage': {
          ..._0x5108dc.quoted
        }
      };
    } else {
      if (_0xc9f1fc === "imageMessage") {
        _0x126b06 = {
          'imageMessage': {
            ..._0x5108dc.quoted
          }
        };
      } else {
        if (_0xc9f1fc === "audioMessage") {
          _0x126b06 = {
            'audioMessage': {
              ..._0x5108dc.quoted
            }
          };
        } else {
          if (_0xc9f1fc === "documentMessage") {
            _0x126b06 = {
              'documentMessage': {
                ..._0x5108dc.quoted
              }
            };
          } else {
            if (_0xc9f1fc === 'conversation' || _0xc9f1fc === "extendedTextMessage") {
              return await _0x5108dc.send(_0x5108dc.quoted.text, {}, '', _0x5108dc, _0x3b8a40);
            }
          }
        }
      }
    }
  }
  if (_0x126b06) {
    try {
      await Suhail.bot.relayMessage(_0x3b8a40, _0x126b06, {
        'messageId': _0x5108dc.key.id
      });
    } catch (_0x434a97) {
      console.log("Error in " + _0x15a74d + "-cmd in forwardMessage \n", _0x434a97);
      if (_0x15a74d === "ptv" || _0x15a74d === "save") {
        await _0x5108dc.error(_0x434a97);
      }
    }
  }
}
async function generateSticker(_0x507f41, _0x5d54a9, _0x3afbc2 = {
  'pack': Config.packname,
  'author': Config.author
}, _0x546965 = true) {
  try {
    const {
      Sticker: _0x37cde1,
      createSticker: _0x5d9590,
      StickerTypes: _0x478ddb
    } = require("wa-sticker-formatter");
    let _0x58ab44 = new _0x37cde1(_0x5d54a9, {
      ..._0x3afbc2
    });
    return await _0x507f41.bot.sendMessage(_0x507f41.chat, {
      'sticker': await _0x58ab44.toBuffer()
    }, {
      'quoted': _0x507f41,
      'messageId': _0x507f41.bot.messageId()
    });
  } catch (_0x5c8162) {
    if (_0x546965) {
      await _0x507f41.error(_0x5c8162 + "\n\nfileName: generateSticker->s.js\n");
    }
  }
}
async function getRandom(_0x29fb20 = ".jpg", _0x444421 = 0x2710) {
  return '' + Math.floor(Math.random() * _0x444421) + _0x29fb20;
}
async function randomeFunfacts(_0x4bb160) {
  try {
    if (_0x4bb160 === 'question') {
      return await random_question();
    } else {
      if (_0x4bb160 === 'truth') {
        return await truth();
      } else {
        if (_0x4bb160 === "dare") {
          return await dare();
        } else {
          if (_0x4bb160 === "joke") {
            const _0x34a7ed = await (await fetch("https://official-joke-api.appspot.com/random_joke")).json();
            return "*Joke :* " + _0x34a7ed.setup + "\n*Punchline:*  " + _0x34a7ed.punchline;
          } else {
            if (_0x4bb160 === "joke2") {
              const _0x9ff817 = await (await fetch("https://v2.jokeapi.dev/joke/Any?type=single")).json();
              return "*joke :* " + _0x9ff817.joke;
            } else {
              if (_0x4bb160 === "fact") {
                const {
                  data: _0xeaf023
                } = await axios.get('https://nekos.life/api/v2/fact');
                return "*Fact:* " + _0xeaf023.fact;
              } else {
                if (_0x4bb160 === 'quotes') {
                  const {
                    data: _0x341a03
                  } = await axios.get('https://favqs.com/api/qotd');
                  return "╔════◇\n║ *🎗️Content:* " + _0x341a03.quote.body + "\n║ *👤Author:* " + _0x341a03.quote.author + "\n║\n╚════════════╝";
                }
              }
            }
          }
        }
      }
    }
  } catch (_0x4b85df) {
    msg.error(_0x4b85df);
    console.log("./lib/asta.js/randomeFunfacts()\n", _0x4b85df);
  }
}
async function audioEditor(_0xbc20a0, _0x1de0e5 = "bass", _0x219880 = '') {
  if (!_0xbc20a0.quoted) {
    return await _0xbc20a0.send("*_Uhh Dear, Reply to audio!!!_*");
  }
  let _0x2f097a = _0xbc20a0.quoted.mtype || _0xbc20a0.mtype;
  if (!/audio/.test(_0x2f097a)) {
    return await _0xbc20a0.send("*_Reply to the audio you want to change with_*", {}, '', _0x219880);
  }
  try {
    let _0x4601c4 = "-af equalizer=f=54:width_type=o:width=2:g=20";
    if (/bass/.test(_0x1de0e5)) {
      _0x4601c4 = "-af equalizer=f=54:width_type=o:width=2:g=20";
    }
    if (/blown/.test(_0x1de0e5)) {
      _0x4601c4 = "-af acrusher=.1:1:64:0:log";
    }
    if (/deep/.test(_0x1de0e5)) {
      _0x4601c4 = "-af atempo=4/4,asetrate=44500*2/3";
    }
    if (/earrape/.test(_0x1de0e5)) {
      _0x4601c4 = "-af volume=12";
    }
    if (/fast/.test(_0x1de0e5)) {
      _0x4601c4 = "-filter:a \"atempo=1.63,asetrate=44100\"";
    }
    if (/fat/.test(_0x1de0e5)) {
      _0x4601c4 = "-filter:a \"atempo=1.6,asetrate=22100\"";
    }
    if (/nightcore/.test(_0x1de0e5)) {
      _0x4601c4 = "-filter:a atempo=1.06,asetrate=44100*1.25";
    }
    if (/reverse/.test(_0x1de0e5)) {
      _0x4601c4 = "-filter_complex \"areverse\"";
    }
    if (/robot/.test(_0x1de0e5)) {
      _0x4601c4 = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
    }
    if (/slow/.test(_0x1de0e5)) {
      _0x4601c4 = "-filter:a \"atempo=0.7,asetrate=44100\"";
    }
    if (/smooth/.test(_0x1de0e5)) {
      _0x4601c4 = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
    }
    if (/tupai/.test(_0x1de0e5)) {
      _0x4601c4 = "-filter:a \"atempo=0.5,asetrate=65100\"";
    }
    let _0x45ab0f = await _0xbc20a0.bot.downloadAndSaveMediaMessage(_0xbc20a0.quoted);
    let _0x24e7d2 = "temp/" + (_0xbc20a0.sender.slice(0x6) + _0x1de0e5) + '.mp3';
    exec("ffmpeg -i " + _0x45ab0f + " " + _0x4601c4 + " " + _0x24e7d2, async (_0x338315, _0x2abf61, _0x41ea96) => {
      try {
        fs.unlinkSync(_0x45ab0f);
      } catch {}
      ;
      if (_0x338315) {
        return _0xbc20a0.error(_0x338315);
      } else {
        let _0x21b6f2 = fs.readFileSync(_0x24e7d2);
        try {
          fs.unlinkSync(_0x24e7d2);
        } catch {}
        ;
        var _0x547472 = {
          ...(await _0xbc20a0.bot.contextInfo("Hello " + _0xbc20a0.senderName + " 🤍", "⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ⇆"))
        };
        return _0xbc20a0.bot.sendMessage(_0xbc20a0.chat, {
          'audio': _0x21b6f2,
          'mimetype': "audio/mpeg",
          'ptt': !!/ptt|voice/.test(_0xbc20a0.test || ''),
          'contextInfo': _0x547472
        }, {
          'quoted': _0xbc20a0,
          'messageId': _0xbc20a0.bot.messageId()
        });
      }
    });
  } catch (_0x2db231) {
    await _0xbc20a0.error(_0x2db231 + "\n\ncmdName : " + _0x1de0e5 + "\n");
    return console.log("./lib/asta.js/audioEditor()\n", _0x2db231);
  }
}
async function send(_0x53db07, _0x110f18, _0x3f189d = {
  'packname': '',
  'author': 'ANITA'
}, _0x25c14f = '', _0x41d916 = '', _0x13bc88 = '') {
  if (!_0x110f18 || !_0x53db07) {
    return;
  }
  try {
    let _0x417206 = _0x13bc88 ? _0x13bc88 : _0x53db07.chat;
    return await _0x53db07.send(_0x110f18, _0x3f189d, _0x25c14f, _0x41d916, _0x417206);
  } catch (_0x36de24) {
    console.log("./lib/asta.js/send()\n", _0x36de24);
  }
}
async function react(_0x492015, _0x528c24, _0x9604df = '') {
  try {
    if (!_0x528c24 || !_0x492015) {
      return;
    }
    let _0x1a6871 = _0x9604df && _0x9604df.key ? _0x9604df.key : _0x492015.key;
    return await _0x492015.bot.sendMessage(_0x492015.chat, {
      'react': {
        'text': _0x528c24,
        'key': _0x1a6871
      }
    }, {
      'messageId': _0x492015.bot.messageId()
    });
  } catch (_0x5b28ea) {
    console.log("./lib/asta.js/react()\n", _0x5b28ea);
  }
}
let note = {
  'info': "make sure to provide 1st parameter of bot number as {user:botNumber} ,and 2nd as note text|id"
};
note.addnote = async (_0x1175e4, _0x3b983d) => {
  try {
    let _0x20b527 = (await bot_.findOne({
      'id': "bot_" + _0x1175e4.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0x1175e4.user
    }));
    let _0x31d06a = _0x20b527.notes;
    let _0x555852 = 0x0;
    while (_0x31d06a[_0x555852] !== undefined) {
      _0x555852++;
    }
    _0x31d06a[_0x555852] = _0x3b983d;
    await bot_.updateOne({
      'id': "bot_" + _0x1175e4.user
    }, {
      'notes': _0x31d06a
    });
    return {
      'status': true,
      'id': _0x555852,
      'msg': "*New note added at ID: " + _0x555852 + '*'
    };
  } catch (_0x2fd94c) {
    console.log("note.addnote ERROR :  ", _0x2fd94c);
    return {
      'status': false,
      'error': _0x2fd94c,
      'msg': "*Can't add new notes due to error!!*"
    };
  }
};
note.delnote = async (_0x303f7c, _0x4287a3) => {
  try {
    let _0x370648 = (await bot_.findOne({
      'id': "bot_" + _0x303f7c.user
    })) || (await bot_['new']({
      'id': "bot_" + _0x303f7c.user
    }));
    let _0x497cf1 = _0x370648.notes;
    let _0x34227f = "*Please provide valid note id!*";
    if (_0x497cf1[_0x4287a3]) {
      delete _0x497cf1[_0x4287a3];
      await bot_.updateOne({
        'id': "bot_" + _0x303f7c.user
      }, {
        'notes': _0x497cf1
      });
      _0x34227f = "*Note with Id:" + _0x4287a3 + " deleted successfully!*";
    }
    return {
      'status': true,
      'msg': _0x34227f
    };
  } catch (_0x365c9f) {
    console.log("note.delnote  ERROR :  ", _0x365c9f);
    return {
      'status': false,
      'error': _0x365c9f,
      'msg': "*Can't delete notes due to error!!*"
    };
  }
};
note.delallnote = async (_0x1f08fc, _0x22bc3a = '') => {
  try {
    await bot_.updateOne({
      'id': "bot_" + _0x1f08fc.user
    }, {
      'notes': {}
    });
    return {
      'status': true,
      'msg': "*All saved notes deleted from server!*"
    };
  } catch (_0x185cad) {
    console.log("note.delnote  ERROR :  ", _0x185cad);
    return {
      'status': false,
      'error': _0x185cad,
      'msg': "*Request not be proceed, Sorry!*"
    };
  }
};
note.allnotes = async (_0x34dde5, _0x37cf16 = '') => {
  try {
    let _0x43ec86 = (await bot_.findOne({
      'id': "bot_" + _0x34dde5.user
    })) || (await bot_['new']({
      'id': "bot_" + _0x34dde5.user
    }));
    let _0x846805 = _0x43ec86.notes;
    let _0x3a6b62 = "*Please provide valid note id!*";
    if (_0x37cf16 == "all" || !_0x37cf16) {
      let _0x4941df = '';
      for (const _0x26ba80 in _0x846805) {
        _0x4941df += "*NOTE " + _0x26ba80 + ":* " + _0x846805[_0x26ba80] + "\n\n";
      }
      _0x3a6b62 = _0x4941df ? _0x4941df : "*No notes found!*";
    } else if (_0x37cf16 && _0x846805[_0x37cf16]) {
      _0x3a6b62 = "*Note " + _0x37cf16 + ":* " + _0x846805[_0x37cf16];
    }
    return {
      'status': true,
      'msg': _0x3a6b62
    };
  } catch (_0x47e0e3) {
    console.log("note.delnote  ERROR :  ", _0x47e0e3);
    return {
      'status': false,
      'error': _0x47e0e3,
      'msg': "*Can't delete notes due to error!!*"
    };
  }
};
async function sendWelcome(_0x25050f, _0xaece15 = '', _0xa62e19 = '', _0x3d7582 = '', _0x585e71 = "msg", _0x541d9f = false) {
  try {
    if (!global.AstroOfficial) {
      return "Get Ouut";
    }
    if (_0xaece15) {
      if (_0x25050f.isGroup) {
        _0xaece15 = _0xaece15.replace(/@gname|&gname/gi, _0x25050f.metadata.subject).replace(/@desc|&desc/gi, _0x25050f.metadata.desc).replace(/@count|&count/gi, _0x25050f.metadata.participants.length);
      }
      let _0x341eba = _0xaece15.replace(/@user|&user/gi, '@' + _0x25050f.senderNum).replace(/@name|&name/gi, _0x25050f.senderName || '_').replace(/@gname|&gname/gi, '').replace(/@desc|&desc/gi, '').replace(/@count|&count/gi, '1').replace(/@pp|&pp|@gpp|&gpp|@context|&context/g, '').replace(/@time|&time/gi, _0x25050f.time).replace(/@date|&date/gi, _0x25050f.date).replace(/@bot|&bot/gi, '' + Config.botname).replace(/@owner|&owner/gi, '' + Config.ownername).replace(/@caption|&caption/gi, caption).replace(/@gurl|@website|&gurl|&website|@link|&link/gi, gurl).replace(/@myyt|&myyt/gi, 'https://github/Astropeda').replace(/@telegram|&telegram/gi, global.telegram || "https://t.me/Astropeda").replace(/@channel|@yt_channel|&channel|&yt_channel/gi, global.YT_PRODUCT || global.YT_CHANNEL || global.YT_PROMOTE || global.YT || 'https://github/coderxsa').replace(/@runtime|&runtime|@uptime|&uptime/gi, '' + runtime(process.uptime())).trim();
      try {
        _0x341eba = _0x341eba.replace(/@line|&line/gi, (await fetchJson("https://api.popcat.xyz/pickuplines")).pickupline || '');
      } catch (_0x286329) {
        _0x341eba = _0x341eba.replace(/@line|&line/gi, '');
      }
      try {
        if (/@quote|&quote/gi.test(_0x341eba)) {
          let {
            data: _0x2fd2f4
          } = await axios.get("https://favqs.com/api/qotd");
          if (_0x2fd2f4 && _0x2fd2f4.quote) {
            _0x341eba = _0x341eba.replace(/@quote|&quote/gi, _0x2fd2f4.quote.body || '').replace(/@author|&author/gi, _0x2fd2f4.quote.author || '');
          }
        }
      } catch (_0x1449f4) {
        _0x341eba = _0x341eba.replace(/@quote|&quote|@author|&author/gi, '');
      }
      if (!_0x585e71 || _0x585e71 === "msg") {
        try {
          if (typeof _0x3d7582 === "string") {
            _0x3d7582 = _0x3d7582.split(',');
          }
          if (/@user|&user/g.test(_0xaece15) && !_0x3d7582.includes(_0x25050f.sender)) {
            _0x3d7582.push(_0x25050f.sender);
          }
        } catch (_0x5be52a) {
          console.log("ERROR : ", _0x5be52a);
        }
        var _0x4c0f72 = {
          ...(_0x541d9f || /@context|&context/g.test(_0xaece15) ? await _0x25050f.bot.contextInfo(Config.botname, _0x25050f.pushName) : {}),
          'mentionedJid': _0x3d7582
        };
        if (/@pp/g.test(_0xaece15)) {
          return await _0x25050f.send(await _0x25050f.getpp(), {
            'caption': _0x341eba,
            'mentions': _0x3d7582,
            'contextInfo': _0x4c0f72
          }, 'image', _0xa62e19);
        } else {
          return _0x25050f.jid && /@gpp/g.test(_0xaece15) ? await _0x25050f.send(await _0x25050f.getpp(_0x25050f.jid), {
            'caption': _0x341eba,
            'mentions': _0x3d7582,
            'contextInfo': _0x4c0f72
          }, "image", _0xa62e19) : await _0x25050f.send(_0x341eba, {
            'mentions': _0x3d7582,
            'contextInfo': _0x4c0f72
          }, "asta", _0xa62e19);
        }
      } else {
        return _0x341eba;
      }
    }
  } catch (_0x47aebb) {
    console.log("./lib/asta.js/sendWelcome()\n", _0x47aebb);
  }
}
async function aitts(_0x454ba0, _0x14a193 = '', _0x1b717c = true) {
  try {
    if (!global.AstroOfficial || global.AstroOfficial !== "yes") {
      return "u bloody, Get out from here!!";
    }
    if (!ELEVENLAB_API_KEY || !ELEVENLAB_API_KEY.length > 0x8) {
      return _0x454ba0.reply("Dear, You Dont Have ELEVENLAB_API_KEY \nCreate ELEVENLAB KEY from below Link \nhttps://elevenlabs.io/\n\nAnd Set it in ELEVENLAB_API_KEY Var\n\n" + caption);
    }
    const _0x550cf7 = ["21m00Tcm4TlvDq8ikWAM", '2EiwWnXFnvU5JabPnv8n', 'AZnzlk1XvdvUeBnXmlld', "CYw3kZ02Hs0563khs1Fj", 'D38z5RcWu1voky8WS1ja', 'EXAVITQu4vr4xnSDxMaL', "ErXwobaYiN019PkySvjV", 'GBv7mTt0atIp3Br8iCZE', "IKne3meq5aSn9XLyUdCD", "LcfcDJNUP1GQjkzn1xUU", "MF3mGyEYCl7XYWbV9V6O", "N2lVS1w4EtoT3dr4eOWO", 'ODq5zmih8GrVes37Dizd', "SOYHLrjzK2X1ezoPC6cr", 'TX3LPaxmHKxFdv7VOQHJ', 'ThT5KcBeYPX3keUQqHPh', "TxGEqnHWrfWFTfGW9XjX", 'VR6AewLTigWG4xSOukaG', "XB0fDUnXU5powFXDhCwa", "XrExE9yKIg1WjnnlVkGX", "Yko7PKHZNXotIFUBG7I9", 'ZQe5CZNOzWyzPSCn5a3c', "Zlb1dXrM653N07WRdFW3", "bVMeCyTHy58xNoL34h3p", "flq6f7yk4E4fJM5XTYuZ", 'g5CIjZEefAph4nQFvHAz', "jBpfuIE2acCO8z3wKNLl", "jsCqWAovK2LkecY7zXl4", "oWAxZDx7w5VEj9dCyTzz", "onwK4e9ZLuTAKqWW03F9", "pMsXgVXv3BLzUgSXRplE", "pNInz6obpgDQGcFmaJgB", "piTKgcLEGmPE4e6mEKli", "t0jbNlBVZ17f02VDIeMI", 'wViXBPUzp2ZZixB1xQuM', "yoZ06aMxZJJ28mfd3POQ", "z9fAnlkpzviPz146aGWa", 'zcAOhNBS3c14rBihAFp1', "zrHiDhphv9ZnVXBqCLjz"];
    const _0x43d36b = parseInt(aitts_Voice_Id);
    if (!_0x14a193 && !_0x454ba0.isCreator) {
      return _0x454ba0.reply("*Uhh Dear, Please Provide text..!*\n*Example: _.aitts i am " + _0x454ba0.pushName + "._*");
    } else {
      if (!_0x14a193 && _0x454ba0.isCreator || _0x14a193 === 'setting' || _0x14a193 === "info") {
        return _0x454ba0.bot.sendMessage(_0x454ba0.jid, {
          'text': "*Hey " + _0x454ba0.pushName + "!.*\n  _Please provide text!_\n  *Example:* _.aitts i am " + _0x454ba0.pushName + "._\n\n  *You Currently " + (!isNaN(_0x43d36b) && _0x43d36b > 0x0 && _0x43d36b <= 0x27 ? "set Voice Id: " + _0x43d36b + "*\nUpdate" : "not set any Specific Voice*\nAdd Specific") + " Voice: _.addvar AITTS_ID:35/4/32,etc._\n\n\n  *Also use available voices*```\n\n  1: Rachel\n  2: Clyde\n  3: Domi\n  4: Dave\n  5: Fin\n  6: Bella\n  7: Antoni\n  8: Thomas\n  9: Charlie\n  10: Emily\n  11: Elli\n  12: Callum\n  13: Patrick\n  14: Harry\n  15: Liam\n  16: Dorothy\n  17: Josh\n  18: Arnold\n  19: Charlotte\n  20: Matilda\n  21: Matthew\n  22: James\n  23: Joseph\n  24: Jeremy\n  25: Michael\n  26: Ethan\n  27: Gigi\n  28: Freya\n  29: Grace\n  30: Daniel\n  31: Serena\n  32: Adam\n  33: Nicole\n  34: Jessie\n  35: Ryan\n  36: asta\n  37: Glinda\n  38: Giovanni\n  39: Mimi\n  ```" + ("\n\n  *Example:* _.aitts i am " + _0x454ba0.pushName + "_:36 \n  *OR:* _.aitts i am " + _0x454ba0.pushName + "_:asta     \n\n\n  " + caption).trim()
        }, {
          'messageId': _0x454ba0.bot.messageId()
        });
      }
    }
    let _0x365eaa = _0x14a193;
    var _0x5529fa = 0x0 || Math.floor(Math.random() * _0x550cf7.length);
    let _0x2623c7 = false;
    if (!isNaN(_0x43d36b) && _0x43d36b > 0x0 && _0x43d36b < 0x27) {
      _0x2623c7 = true;
      _0x5529fa = _0x43d36b;
    }
    if (_0x14a193 && _0x14a193.includes(':')) {
      let _0x326c2f = _0x14a193.split(':');
      let _0x38d53c = _0x326c2f[_0x326c2f.length - 0x1].trim() || '';
      _0x365eaa = _0x326c2f.slice(0x0, _0x326c2f.length - 0x1).join(':');
      if (_0x38d53c.toLowerCase() === "richel" || _0x38d53c === '1') {
        _0x5529fa = 0x0;
      } else {
        if (_0x38d53c.toLowerCase() === "clyde" || _0x38d53c === '2') {
          _0x5529fa = 0x1;
        } else {
          if (_0x38d53c.toLowerCase() === "domi" || _0x38d53c === '3') {
            _0x5529fa = 0x2;
          } else {
            if (_0x38d53c.toLowerCase() === 'dave' || _0x38d53c === '4') {
              _0x5529fa = 0x3;
            } else {
              if (_0x38d53c.toLowerCase() === "fin" || _0x38d53c === '5') {
                _0x5529fa = 0x4;
              } else {
                if (_0x38d53c.toLowerCase() === 'bella' || _0x38d53c === '6') {
                  _0x5529fa = 0x5;
                } else {
                  if (_0x38d53c.toLowerCase() === "antoni" || _0x38d53c === '7') {
                    _0x5529fa = 0x6;
                  } else {
                    if (_0x38d53c.toLowerCase() === "thomas" || _0x38d53c === '8') {
                      _0x5529fa = 0x7;
                    } else {
                      if (_0x38d53c.toLowerCase() === "charlie" || _0x38d53c === '9') {
                        _0x5529fa = 0x8;
                      } else {
                        if (_0x38d53c.toLowerCase() === "emily" || _0x38d53c === '10') {
                          _0x5529fa = 0x9;
                        } else {
                          if (_0x38d53c.toLowerCase() === "elli" || _0x38d53c === '11') {
                            _0x5529fa = 0xa;
                          } else {
                            if (_0x38d53c.toLowerCase() === "callum" || _0x38d53c === '12') {
                              _0x5529fa = 0xb;
                            } else {
                              if (_0x38d53c.toLowerCase() === "patrick" || _0x38d53c === '13') {
                                _0x5529fa = 0xc;
                              } else {
                                if (_0x38d53c.toLowerCase() === 'harry' || _0x38d53c === '14') {
                                  _0x5529fa = 0xd;
                                } else {
                                  if (_0x38d53c.toLowerCase() === "liam" || _0x38d53c === '15') {
                                    _0x5529fa = 0xe;
                                  } else {
                                    if (_0x38d53c.toLowerCase() === "dorothy" || _0x38d53c === '16') {
                                      _0x5529fa = 0xf;
                                    } else {
                                      if (_0x38d53c.toLowerCase() === "josh" || _0x38d53c === '17') {
                                        _0x5529fa = 0x10;
                                      } else {
                                        if (_0x38d53c.toLowerCase() === "arnold" || _0x38d53c === '18') {
                                          _0x5529fa = 0x11;
                                        } else {
                                          if (_0x38d53c.toLowerCase() === "charlotte" || _0x38d53c === '19') {
                                            _0x5529fa = 0x12;
                                          } else {
                                            if (_0x38d53c.toLowerCase() === "matilda" || _0x38d53c === '20') {
                                              _0x5529fa = 0x13;
                                            } else {
                                              if (_0x38d53c.toLowerCase() === "matthew" || _0x38d53c === '21') {
                                                _0x5529fa = 0x14;
                                              } else {
                                                if (_0x38d53c.toLowerCase() === 'james' || _0x38d53c === '22') {
                                                  _0x5529fa = 0x15;
                                                } else {
                                                  if (_0x38d53c.toLowerCase() === "joseph" || _0x38d53c === '23') {
                                                    _0x5529fa = 0x16;
                                                  } else {
                                                    if (_0x38d53c.toLowerCase() === "jeremy" || _0x38d53c === '24') {
                                                      _0x5529fa = 0x17;
                                                    } else {
                                                      if (_0x38d53c.toLowerCase() === "michael" || _0x38d53c === '25') {
                                                        _0x5529fa = 0x18;
                                                      } else {
                                                        if (_0x38d53c.toLowerCase() === 'ethan' || _0x38d53c === '26') {
                                                          _0x5529fa = 0x19;
                                                        } else {
                                                          if (_0x38d53c.toLowerCase() === "gigi" || _0x38d53c === '27') {
                                                            _0x5529fa = 0x1a;
                                                          } else {
                                                            if (_0x38d53c.toLowerCase() === "freya" || _0x38d53c === '28') {
                                                              _0x5529fa = 0x1b;
                                                            } else {
                                                              if (_0x38d53c.toLowerCase() === "grace" || _0x38d53c === '29') {
                                                                _0x5529fa = 0x1c;
                                                              } else {
                                                                if (_0x38d53c.toLowerCase() === "daniel" || _0x38d53c === '30') {
                                                                  _0x5529fa = 0x1d;
                                                                } else {
                                                                  if (_0x38d53c.toLowerCase() === "serena" || _0x38d53c === '31') {
                                                                    _0x5529fa = 0x1e;
                                                                  } else {
                                                                    if (_0x38d53c.toLowerCase() === "adam" || _0x38d53c === '32') {
                                                                      _0x5529fa = 0x1f;
                                                                    } else {
                                                                      if (_0x38d53c.toLowerCase() === "nicole" || _0x38d53c === '33') {
                                                                        _0x5529fa = 0x20;
                                                                      } else {
                                                                        if (_0x38d53c.toLowerCase() === "jessie" || _0x38d53c === '34') {
                                                                          _0x5529fa = 0x21;
                                                                        } else {
                                                                          if (_0x38d53c.toLowerCase() === "ryan" || _0x38d53c === '35') {
                                                                            _0x5529fa = 0x22;
                                                                          } else {
                                                                            if (_0x38d53c.toLowerCase() === 'asta' || _0x38d53c === '36') {
                                                                              _0x5529fa = 0x23;
                                                                            } else {
                                                                              if (_0x38d53c.toLowerCase() === "glinda" || _0x38d53c === '37') {
                                                                                _0x5529fa = 0x24;
                                                                              } else {
                                                                                if (_0x38d53c.toLowerCase() === "giovanni" || _0x38d53c === '38') {
                                                                                  _0x5529fa = 0x25;
                                                                                } else if (_0x38d53c.toLowerCase() === "mimi" || _0x38d53c === '39') {
                                                                                  _0x5529fa = 0x26;
                                                                                } else {
                                                                                  _0x365eaa = _0x14a193;
                                                                                  _0x5529fa = _0x5529fa;
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
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const _0x37aa22 = {
      'method': "POST",
      'url': 'https://api.elevenlabs.io/v1/text-to-speech/' + _0x550cf7[_0x5529fa],
      'headers': {
        'accept': "audio/mpeg",
        'content-type': "application/json",
        'xi-api-key': '' + ELEVENLAB_API_KEY
      },
      'data': {
        'text': _0x365eaa
      },
      'responseType': 'arraybuffer'
    };
    const {
      data: _0x404ed4
    } = await axios.request(_0x37aa22);
    if (!_0x404ed4) {
      return await _0x454ba0.send("*_Request not be proceed!_*");
    }
    await _0x454ba0.sendMessage(_0x454ba0.from, {
      'audio': _0x404ed4,
      'mimetype': "audio/mpeg",
      'ptt': true
    }, {
      'quoted': _0x454ba0,
      'messageId': _0x454ba0.bot.messageId()
    });
  } catch (_0x49ae31) {
    if (_0x1b717c) {
      await _0x454ba0.error(_0x49ae31 + "\n\ncommand: aitts", _0x49ae31);
    }
  }
}
let setMention = {
  'mention': false
};
setMention.status = async (_0x28ad9f, _0x9786e8 = false) => {
  try {
    setMention.mention = false;
    let _0x56b857 = (await bot_.findOne({
      'id': "bot_" + _0x28ad9f.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0x28ad9f.user
    }));
    let _0x26e0ca = _0x56b857.mention || {};
    if (_0x9786e8) {
      if (_0x26e0ca.status) {
        return await _0x28ad9f.reply("_Mention Already Enabled!_");
      }
      _0x26e0ca.status = true;
      await bot_.updateOne({
        'id': "bot_" + _0x28ad9f.user
      }, {
        'mention': _0x26e0ca
      });
      return await _0x28ad9f.reply("_Mention Enabled!_");
    } else {
      if (!_0x26e0ca.status) {
        return await _0x28ad9f.reply("_Mention Already Disabled!_");
      }
      _0x26e0ca.status = false;
      await bot_.updateOne({
        'id': "bot_" + _0x28ad9f.user
      }, {
        'mention': _0x26e0ca
      });
      return await _0x28ad9f.reply("_Mention Disabled!_");
    }
  } catch (_0x4ac66e) {
    _0x28ad9f.error(_0x4ac66e + "\n\nCommand: mention", _0x4ac66e, false);
  }
};
setMention.get = async _0x3feed6 => {
  try {
    let _0x253b68 = (await bot_.findOne({
      'id': 'bot_' + _0x3feed6.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0x3feed6.user
    }));
    let _0x260568 = _0x253b68.mention || {};
    return _0x260568.get ? await _0x3feed6.reply("*Status :* " + (_0x260568.status ? 'ON' : "OFF") + "\nUse on/off/get/test to enable and disable mention\n\n*Mention Info:* " + _0x260568.get) : await _0x3feed6.reply("*You did'nt set mention message yet!*\n*please Check: https://github.com/coderxsa/ANITA*");
  } catch (_0x184a40) {
    _0x3feed6.error(_0x184a40 + "\n\nCommand: mention", _0x184a40, false);
  }
};
setMention.typesArray = _0x4084e5 => {
  try {
    const _0x29d50d = _0x4084e5.split("\n");
    let _0x58952b = {
      'text': []
    };
    let _0x891b23 = ["gif", "video", "audio", "image", "sticker"];
    let _0x23dbe2 = null;
    for (const _0x5a8773 of _0x29d50d) {
      const _0x25b036 = _0x5a8773.split(" ");
      if (_0x25b036.length >= 0x1) {
        const _0x2cbce8 = _0x25b036.findIndex(_0x4656f2 => _0x4656f2.startsWith('type/'));
        if (_0x2cbce8 !== -0x1) {
          _0x23dbe2 = _0x25b036[_0x2cbce8].slice(0x5).toLowerCase();
          let _0x38c700 = /anita|smd|message|chat/gi.test(_0x23dbe2);
          if (!_0x58952b[_0x38c700 ? "anita" : _0x23dbe2]) {
            _0x58952b[_0x38c700 ? "anita" : _0x23dbe2] = [];
          }
        }
        const _0x3b6537 = _0x25b036.filter(_0x169202 => _0x169202 !== "type/" + _0x23dbe2 && _0x169202 !== '');
        _0x23dbe2 = /anita|smd|message|chat/gi.test(_0x23dbe2) ? 'anita' : _0x23dbe2;
        if (_0x3b6537.length > 0x0) {
          if (_0x891b23.includes(_0x23dbe2)) {
            _0x3b6537.forEach(_0xe65b92 => {
              if (/http/gi.test(_0xe65b92)) {
                _0x58952b[_0x23dbe2].push(_0xe65b92);
              }
            });
          } else if (/react/gi.test(_0x23dbe2)) {
            _0x58952b.react.push(..._0x3b6537);
          } else {
            _0x58952b[/anita/gi.test(_0x23dbe2) ? "anita" : "text"].push(_0x3b6537.join(" "));
          }
        }
      }
      _0x23dbe2 = null;
    }
    return _0x58952b || {};
  } catch (_0x4fec12) {
    console.log("Error in Mention typesArray\n", _0x4fec12);
  }
};
setMention.update = async (_0x240f7b, _0x1a318a) => {
  try {
    setMention.mention = false;
    let _0x13aba2 = {
      'status': true,
      'get': _0x1a318a
    };
    try {
      const _0x218135 = _0x1a318a.match(/\{.*\}/);
      if (_0x218135) {
        const _0x1b127d = _0x218135[0x0];
        const _0x1537f0 = JSON.parse(_0x1b127d);
        _0x13aba2.json = _0x1537f0;
        _0x1a318a = _0x1a318a.replace(/\{.*\}/, '');
      }
    } catch (_0xcc3d05) {
      console.log("ERROR mention JSON parse", _0xcc3d05);
    }
    _0x13aba2.text = _0x1a318a;
    _0x13aba2.type = setMention.typesArray(_0x1a318a) || {};
    await bot_.updateOne({
      'id': 'bot_' + _0x240f7b.user
    }, {
      'mention': _0x13aba2
    });
    return await _0x240f7b.send("*Mention updated!*", {
      'mentios': [_0x240f7b.user]
    });
  } catch (_0x4614a1) {
    _0x240f7b.error(_0x4614a1 + "\n\nCommand: mention", _0x4614a1, false);
  }
};
setMention.cmd = async (_0x474701, _0x3c5d8b = '') => {
  try {
    let _0x1fdda1 = false || false;
    if (!_0x1fdda1) {
      let _0x322569 = (await bot_.findOne({
        'id': "bot_" + _0x474701.user
      })) || (await bot_["new"]({
        'id': "bot_" + _0x474701.user
      }));
      _0x1fdda1 = _0x322569.mention || false;
      setMention.mention = _0x1fdda1;
    }
    if (global.AstroOfficial !== "yes") {
      return;
    }
    if (_0x3c5d8b === "get" || _0x3c5d8b === "info" || !_0x3c5d8b && _0x1fdda1.status && _0x1fdda1.get) {
      setMention.get(_0x474701);
    } else {
      if (!_0x3c5d8b) {
        _0x474701.reply("_Read wiki to set mention message https://github.com/coderxsa/ANITA_", {}, 'smd');
      } else {
        if (["off", 'deact', "disable", "false"].includes(_0x3c5d8b.toLowerCase() || _0x3c5d8b)) {
          setMention.status(_0x474701, false);
        } else {
          if (['on', "act", "enable", "true", "active"].includes(_0x3c5d8b.toLowerCase() || _0x3c5d8b)) {
            setMention.status(_0x474701, true);
          } else if (["check", "test", 'me'].includes(_0x3c5d8b.toLowerCase() || _0x3c5d8b)) {
            setMention.check(_0x474701, _0x3c5d8b, true);
          } else {
            setMention.update(_0x474701, _0x3c5d8b);
          }
        }
      }
    }
  } catch (_0x1b573c) {
    console.log("ERROR IN MENTION CMD \n ", _0x1b573c);
  }
};
setMention.randome = _0xe6e933 => {
  try {
    const _0x1ad5ca = Object.keys(_0xe6e933 || {});
    if (_0x1ad5ca.length > 0x1) {
      const _0x1cf8ba = _0x1ad5ca[Math.floor(Math.random() * (_0x1ad5ca.length - 0x1)) + 0x1];
      const _0x3cc9c0 = _0xe6e933[_0x1cf8ba];
      if (_0x3cc9c0 && _0x3cc9c0.length > 0x0) {
        const _0x4b3095 = Math.floor(Math.random() * _0x3cc9c0.length);
        return {
          'type': _0x1cf8ba,
          'url': _0x3cc9c0[_0x4b3095]
        };
      }
    }
    return _0xe6e933 && _0xe6e933.text ? {
      'url': _0xe6e933.text.join(" ") || '',
      'type': "smd"
    } : undefined;
  } catch (_0x2ace0f) {
    console.log(_0x2ace0f);
  }
};
global.mentionasta = process.env.MENTIONSUHAIL || true;
setMention.check = async (_0x596023, _0x34ce3e = '', _0x2d53a0 = false) => {
  try {
    const _0x41a00b = _0x2d53a0 || _0x596023.mentionedJid.includes(_0x596023.user) || _0x34ce3e.includes('@' + _0x596023.user.split('@')[0x0]) || global.mentionasta && (_0x596023.mentionedJid.includes("@27717311486@s.whatsapp.net") || _0x596023.mentionedJid.includes("@27717311486@s.whatsapp.net") || /@27717311486|@27717311486/g.test(_0x34ce3e));
    if (_0x41a00b) {
      if (global.AstroOfficial !== "yes") {
        return;
      }
      let _0x29eed7 = false || false;
      if (!_0x29eed7) {
        let _0xc96f8a = (await bot_.findOne({
          'id': "bot_" + _0x596023.user
        })) || (await bot_["new"]({
          'id': "bot_" + _0x596023.user
        }));
        _0x29eed7 = _0xc96f8a.mention || false;
        setMention.mention = _0x29eed7;
      }
      if (typeof _0x29eed7 !== "object" || !_0x29eed7 || !_0x29eed7.status) {
        return;
      }
      const _0xd00baf = setMention.randome(_0x29eed7.type);
      if (_0xd00baf) {
        let _0xa26020 = _0xd00baf.type;
        const _0x517cd3 = {};
        if (_0xd00baf.type === "gif") {
          _0xa26020 = "video";
          _0x517cd3 = {
            'gifPlayback': true
          };
        }
        try {
          const _0x2b95a1 = {
            ..._0x29eed7.json,
            ..._0x517cd3
          };
          if (_0x2b95a1.contextInfo && _0x2b95a1.contextInfo.externalAdReply && _0x2b95a1.contextInfo.externalAdReply.thumbnail) {
            _0x2b95a1.contextInfo.externalAdReply.thumbnail = (await getBuffer(_0x2b95a1.contextInfo.externalAdReply.thumbnail)) || log0;
          }
          await _0x596023.send(_0xd00baf.url, _0x2b95a1, _0xa26020, _0x596023);
        } catch (_0x5eafac) {
          console.log("Error Sending ContextInfo in mention ", _0x5eafac);
          try {
            _0x596023.send(_0xd00baf.url, {
              ..._0x517cd3
            }, _0xa26020, _0x596023);
          } catch (_0x39eae0) {}
        }
      }
    }
  } catch (_0x369d8c) {
    console.log("Error in Mention Check\n", _0x369d8c);
  }
};
let setFilter = {
  'filter': false
};
setFilter.set = async (_0xa42ee, _0x395d71 = '') => {
  try {
    if (!_0x395d71) {
      return _0xa42ee.send("*Use " + prefix + "filter word:reply_text!*");
    }
    let [_0x391237, _0x44ebd7] = _0x395d71.split(':').map(_0x4f67f8 => _0x4f67f8.trim());
    if (!_0x391237 || !_0x44ebd7) {
      return _0xa42ee.send("*Use " + prefix + "filter " + (_0x391237 || 'word') + ": " + (_0x44ebd7 || 'reply_text') + '!*');
    }
    let _0x488cf1 = (await bot_.findOne({
      'id': 'bot_' + _0xa42ee.user
    })) || (await bot_["new"]({
      'id': 'bot_' + _0xa42ee.user
    }));
    let _0x55ac95 = _0x488cf1.filter || {};
    _0x55ac95[_0x391237] = _0x44ebd7;
    setFilter.filter = _0x55ac95;
    _0xa42ee.send("*Successfully set filter to '" + _0x391237 + "'!*");
  } catch (_0x29d057) {
    _0xa42ee.error(_0x29d057 + "\n\nCommand:filter", _0x29d057, "_Can't set filter!_");
  }
};
setFilter.stop = async (_0x2e219d, _0x2972aa = '') => {
  try {
    if (!_0x2972aa) {
      return _0x2e219d.send("*Provide a word that set in filter!*\n*Use " + prefix + "flist to get list of filtered words!*");
    }
    let _0x13dae0 = (await bot_.findOne({
      'id': "bot_" + _0x2e219d.user
    })) || (await bot_["new"]({
      'id': 'bot_' + _0x2e219d.user
    }));
    let _0x2ca1c8 = _0x13dae0.filter || {};
    if (!_0x2ca1c8[_0x2972aa]) {
      return _0x2e219d.reply("*Given Word ('" + _0x2972aa + "') not set to any filter!*");
    }
    delete _0x2ca1c8[_0x2972aa];
    setFilter.filter = _0x2ca1c8;
    await bot_.updateOne({
      'id': 'bot_' + _0x2e219d.user
    }, {
      'filter': _0x2ca1c8
    });
    _0x2e219d.reply("*_Filter word '" + _0x2972aa + "' deleted!_*");
  } catch (_0x45d77a) {
    _0x2e219d.error(_0x45d77a + "\n\nCommand:fstop", _0x45d77a, "*Can't delete filter!*");
  }
};
setFilter.list = async (_0x1907ee, _0x4fe41e = '') => {
  try {
    let _0x391179 = (await bot_.findOne({
      'id': "bot_" + _0x1907ee.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0x1907ee.user
    }));
    let _0x3a7523 = _0x391179.filter || {};
    let _0x1a3fcf = Object.entries(_0x3a7523).map(([_0x173da9, _0x2b2fe1]) => _0x173da9 + " : " + _0x2b2fe1).join("\n");
    if (_0x391179.filter && _0x1a3fcf) {
      _0x1907ee.reply("*[LIST OF FILTERED WORDS]*\n\n" + _0x1a3fcf);
    } else {
      _0x1907ee.reply("*_You didn't set any filter!_*");
    }
  } catch (_0x2b728a) {
    _0x1907ee.error(_0x2b728a + "\n\nCommand:flist", _0x2b728a, false);
  }
};
setFilter.check = async (_0x313640, _0x5e40c7 = '') => {
  try {
    let _0x540a0d = false || false;
    if (!_0x540a0d) {
      let _0x146d52 = (await bot_.findOne({
        'id': 'bot_' + _0x313640.user
      })) || (await bot_["new"]({
        'id': 'bot_' + _0x313640.user
      }));
      _0x540a0d = _0x146d52.filter || {};
      setFilter.filter = _0x146d52.filter || {};
    }
    if (_0x540a0d[_0x5e40c7]) {
      _0x313640.reply(_0x540a0d[_0x5e40c7], {}, 'smd', _0x313640);
    }
  } catch (_0x2e7a1e) {
    console.log(_0x2e7a1e);
  }
};
module.exports = {
  'yt': yt,
  'sendAnimeReaction': sendAnimeReaction,
  'sendGImages': sendGImages,
  'AudioToBlackVideo': AudioToBlackVideo,
  'textToLogoGenerator': textToLogoGenerator,
  'photoEditor': photoEditor,
  'updateProfilePicture': updateProfilePicture,
  'randomeFunfacts': randomeFunfacts,
  'plugins': plugins,
  'getRandom': getRandom,
  'generateSticker': generateSticker,
  'forwardMessage': forwardMessage,
  'audioEditor': audioEditor,
  'send': send,
  'react': react,
  'note': note,
  'sendWelcome': sendWelcome,
  'aitts': aitts,
  'mention': setMention,
  'filter': setFilter
};