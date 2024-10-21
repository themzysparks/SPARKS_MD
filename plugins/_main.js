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

const util = require("util");
const fs = require("fs-extra");
const {
  cmd
} = require("../lib/plugins");
const {
  formatp,
  TelegraPh,
  aitts,
  smd,
  prefix,
  runtime,
  Config,
  parsedJid,
  sleep,
  createUrl
} = require("../lib");
const axios = require("axios");
const fetch = require('node-fetch');
const os = require('os');
const speed = require("performance-now");
async function aiResponce(_0x24b364, _0x4ffed3, _0x1add4b = '') {
  let _0x4af34a = '';
  try {
    if (_0x4ffed3 === "chat") {
      _0x4af34a = await (await axios.get("http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[" + _0x24b364.sender.split('@')[0x0] + "]&msg=[" + _0x1add4b + ']')).data.cnt;
    } else {
      if (_0x4ffed3 === "gpt") {
        const _0x5d0913 = await fetch('https://api.openai.com/v1/chat/completions', {
          'method': 'POST',
          'headers': {
            'Content-Type': "application/json",
            'Authorization': "Bearer " + Config.OPENAI_API_KEY
          },
          'body': JSON.stringify({
            'model': "gpt-3.5-turbo",
            'messages': [{
              'role': "system",
              'content': "You"
            }, {
              'role': "user",
              'content': _0x1add4b
            }]
          })
        });
        const _0x307dbf = await _0x5d0913.json();
        if (!_0x307dbf.choices || _0x307dbf.choices.length === 0x0) {
          _0x4af34a = "*Invalid ChatGPT API Key, Please Put New Key*";
        } else {
          _0x4af34a = _0x307dbf.choices[0x0].message.content;
        }
      } else {
        if (_0x4ffed3 === "dalle") {
          const _0x48f598 = await fetch("https://api.openai.com/v1/images/generations", {
            'method': "POST",
            'headers': {
              'Content-Type': "application/json",
              'Authorization': "Bearer " + Config.OPENAI_API_KEY
            },
            'body': JSON.stringify({
              'model': "image-alpha-001",
              'prompt': _0x1add4b,
              'size': "512x512",
              'response_format': "url"
            })
          });
          const _0x3e7a23 = await _0x48f598.json();
          _0x4af34a = _0x3e7a23.data[0x0].url;
        }
      }
    }
    if (_0x4ffed3 === 'rmbg') {
      const _0x5140d0 = {
        'image_url': _0x1add4b,
        'size': "auto"
      };
      axios.post("https://api.remove.bg/v1.0/removebg", _0x5140d0, {
        'headers': {
          'X-Api-Key': Config.REMOVE_BG_KEY
        },
        'responseType': "arraybuffer"
      }).then(_0x457b6c => {
        _0x4af34a = Buffer.from(_0x457b6c.data, "binary");
      })["catch"](_0x43668b => {
        _0x4af34a = false;
      });
    }
    return _0x4af34a;
  } catch (_0x4207c2) {
    console.log("error in aiResponce : ", _0x4207c2);
    return "Error While getting Ai responce ";
  }
}
;
smd({
  'pattern': "chat",
  'desc': "chat with an AI",
  'category': 'ai',
  'use': "<Hii, Astropeda>",
  'filename': __filename
}, async (_0x1c5257, _0x47379d) => {
  try {
    return _0x1c5257.reply(await aiResponce(_0x1c5257, "chat", _0x47379d));
  } catch (_0x255b66) {
    await _0x1c5257.error(_0x255b66 + "\n\ncommand: chat", _0x255b66, "*_no responce from chatbot, sorry!!_*");
  }
});
smd({
  'pattern': "gpt",
  'desc': "chat with an AI",
  'category': 'ai',
  'use': "<Hii, ANITA>",
  'filename': __filename
}, async (_0x1678ab, _0x22502b) => {
  try {
    try {
      let _0x3e6287 = _0x22502b ? _0x22502b : bot.reply_text;
      if (!_0x3e6287) {
        return man.reply("Provide me a query ex Who is ANITA");
      }
      const _0x4b339e = await fetch("https://aemt.me/openai?text=" + _0x3e6287);
      const _0x532d48 = await _0x4b339e.json();
      if (_0x532d48 && _0x532d48.status && _0x532d48.result) {
        return await _0x1678ab.reply(_0x532d48.result);
      }
    } catch {}
    if (Config.OPENAI_API_KEY == '' || !Config.OPENAI_API_KEY || !('' + Config.OPENAI_API_KEY).startsWith('sk')) {
      return _0x1678ab.reply("```You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys\nAnd Set Key in Heroku OPENAI_API_KEY Var```");
    }
    if (!_0x22502b) {
      return _0x1678ab.reply("Hey there! " + _0x1678ab.senderName + ". How are you doing these days?");
    }
    return _0x1678ab.send(await aiResponce(_0x1678ab, "gpt", _0x22502b));
  } catch (_0x2bdfe7) {
    await _0x1678ab.error(_0x2bdfe7 + "\n\ncommand: gpt", _0x2bdfe7, "*_no responce from chatgpt, sorry!!_*");
  }
});
smd({
  'pattern': "fgpt",
  'desc': "chat with an AI",
  'category': 'ai',
  'use': '<query>',
  'filename': __filename
}, async (_0x21a75a, _0x10322d) => {
  try {
    let _0x274970 = _0x10322d ? _0x10322d : _0x21a75a.reply_text;
    if (!_0x274970) {
      return _0x21a75a.reply("Provide me a query ex Who is ANITA");
    }
    const _0x4877d2 = await fetch('https://aemt.me/openai?text=' + _0x274970);
    const _0x18240d = await _0x4877d2.json();
    if (_0x18240d && _0x18240d.status && _0x18240d.result) {
      return await _0x21a75a.send(_0x18240d.result);
    } else {
      await _0x21a75a.send("*_Error while getting gpt responce!!_*");
    }
  } catch (_0x4862b1) {
    await _0x21a75a.error(_0x4862b1 + "\n\ncommand: fgpt", _0x4862b1, "*_no responce from chatgpt, sorry!!_*");
  }
});
smd({
  'pattern': "dalle",
  'alias': ["dall", "dall-e"],
  'desc': "chat with an AI",
  'category': 'ai',
  'use': "<Hii, Astropeda>",
  'filename': __filename
}, async (_0x121b71, _0x35b471) => {
  try {
    if (!_0x35b471) {
      return await _0x121b71.reply("*Give Me A Query To Get Dall-E Reponce?*");
    }
    const _0x34640e = "https://gurugpt.cyclic.app/dalle?prompt=" + encodeURIComponent(_0x35b471);
    try {
      return await _0x121b71.bot.sendMessage(_0x121b71.chat, {
        'image': {
          'url': _0x34640e
        },
        'caption': "[PROMPT]: ```" + _0x35b471 + " ```  \n " + Config.caption + " "
      });
    } catch (_0xde61) {
      console.log("ERROR IN DALLE RESPONCE FROM API GURUGPT\n", _0xde61);
    }
    if (Config.OPENAI_API_KEY == '' || !Config.OPENAI_API_KEY || !('' + Config.OPENAI_API_KEY).startsWith('sk')) {
      return _0x121b71.reply("```You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys\nAnd Set Key in Heroku OPENAI_API_KEY Var```");
    }
    return await _0x121b71.bot.sendMessage(_0x121b71.chat, {
      'image': {
        'url': await aiResponce(_0x121b71, "dalle", _0x35b471)
      },
      'caption': "*---Your DALL-E Result---*\n" + Config.caption
    });
  } catch (_0x4813f7) {
    await _0x121b71.error(_0x4813f7 + "\n\ncommand: dalle", _0x4813f7, "*_No responce from Dall-E Ai, Sorry!!_*");
  }
});
smd({
  'pattern': "imagine",
  'alias': ["imagin"],
  'desc': "chat with an AI",
  'category': 'ai',
  'use': "<boy walking on street>",
  'filename': __filename
}, async (_0x5f3013, _0x1636f3) => {
  try {
    let _0x1a1262 = _0x1636f3 || _0x5f3013.reply_text;
    if (!_0x1a1262) {
      return await _0x5f3013.reply("*Give Me A Query To Get imagination?*");
    }
    let _0x49a552 = false;
    try {
      const _0xe428f3 = await fetch('https://aemt.me/openai?text=' + (_0x1a1262 + " \nNOTE: Make sure to looks like imagination, make it short and concise, also in english!"));
      const _0x5eb5a4 = await _0xe428f3.json();
      _0x49a552 = _0x5eb5a4 && _0x5eb5a4.status && _0x5eb5a4.result ? _0x5eb5a4.result : '';
    } catch (_0x2d8f4f) {
      _0x49a552 = false;
    }
    try {
      await Draw(_0x1a1262 || _0x5f3013.reply_text).then(_0x5e7b79 => {
        _0x5f3013.bot.sendMessage(_0x5f3013.chat, {
          'image': _0x5e7b79,
          'caption': "*[IMAGININATION]:* ```" + _0x1a1262 + " ```" + (_0x49a552 ? "\n\n*[RESPONCE]:* ```" + _0x49a552 + "``` \n" : '') + "  \n " + Config.caption + " "
        });
      });
      return;
    } catch (_0x309029) {
      console.log("ERROR IN IMAGINE RESPONCE FROM IMAGINE API n", _0x309029);
    }
    if (Config.OPENAI_API_KEY == '' || !Config.OPENAI_API_KEY || !('' + Config.OPENAI_API_KEY).startsWith('sk')) {
      return _0x5f3013.reply("```You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys\nAnd Set Key in Heroku OPENAI_API_KEY Var```");
    }
    return await _0x5f3013.bot.sendMessage(_0x5f3013.chat, {
      'image': {
        'url': await aiResponce(_0x5f3013, "dalle", _0x1a1262)
      },
      'caption': "*---Your DALL-E Result---*\n" + Config.caption
    });
  } catch (_0x5c90f7) {
    await _0x5f3013.error(_0x5c90f7 + "\n\ncommand: imagine", _0x5c90f7, "*_No responce from Server side, Sorry!!_*");
  }
});
smd({
  'pattern': "imagine2",
  'alias': ["imagin2"],
  'desc': "chat with an AI",
  'category': 'ai',
  'use': "<boy walking on street>",
  'filename': __filename
}, async (_0x21b9df, _0x2ed3e6) => {
  try {
    let _0x5d53fb = _0x2ed3e6 || _0x21b9df.reply_text;
    if (!_0x5d53fb) {
      return await _0x21b9df.reply("*Give Me A Query To Get imagination?*");
    }
    const _0x555653 = 'https://gurugpt.cyclic.app/dalle?prompt=' + encodeURIComponent(_0x5d53fb + " \nNOTE: Make sure to looks like imagination");
    let _0x37d0a1 = false;
    try {
      const _0x1bb342 = await fetch("https://aemt.me/openai?text=" + (_0x5d53fb + " \nNOTE: Make sure to looks like imagination, make it short and concise, also in english!"));
      const _0x13af7b = await _0x1bb342.json();
      _0x37d0a1 = _0x13af7b && _0x13af7b.status && _0x13af7b.result ? _0x13af7b.result : '';
    } catch (_0x35fd5d) {
      _0x37d0a1 = false;
    }
    try {
      return await _0x21b9df.bot.sendMessage(_0x21b9df.chat, {
        'image': {
          'url': _0x555653
        },
        'caption': "*[IMAGININATION]:* ```" + _0x5d53fb + " ```" + (_0x37d0a1 ? "\n\n*[RESPONCE]:* ```" + _0x37d0a1 + "``` \n" : '') + "  \n " + Config.caption + " "
      });
    } catch (_0x5a0742) {
      console.log("ERROR IN IMAGINE RESPONCE FROM API GURUGPT\n", _0x5a0742);
    }
    if (Config.OPENAI_API_KEY == '' || !Config.OPENAI_API_KEY || !('' + Config.OPENAI_API_KEY).startsWith('sk')) {
      return _0x21b9df.reply("```You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys\nAnd Set Key in Heroku OPENAI_API_KEY Var```");
    }
    return await _0x21b9df.bot.sendMessage(_0x21b9df.chat, {
      'image': {
        'url': await aiResponce(_0x21b9df, "dalle", _0x5d53fb)
      },
      'caption': "*---Your DALL-E Result---*\n" + Config.caption
    });
  } catch (_0x1fd302) {
    await _0x21b9df.error(_0x1fd302 + "\n\ncommand: imagine", _0x1fd302, "*_No responce from Server side, Sorry!!_*");
  }
});
async function Draw(_0x1232ee) {
  const _0x3dbf4d = await fetch('https://api-inference.huggingface.co/models/prompthero/openjourney-v2', {
    'method': "POST",
    'headers': {
      'content-type': "application/json",
      'Authorization': "Bearer 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"
    },
    'body': JSON.stringify({
      'inputs': _0x1232ee
    })
  }).then(_0x21d7c8 => _0x21d7c8.blob());
  const _0x3ce115 = await _0x3dbf4d.arrayBuffer();
  return Buffer.from(_0x3ce115);
}
smd({
  'pattern': "rmbg",
  'alias': ["removebg"],
  'category': 'ai',
  'filename': __filename,
  'desc': "Remove image Background."
}, async _0x152090 => {
  try {
    if (!Config.REMOVE_BG_KEY) {
      return _0x152090.reply("```You Dont Have REMOVE_BG_KEY \nPlease Create RemoveBG KEY from Given Link \nhttps://www.remove.bg/\nAnd Set Key in REMOVE_BG_KEY Var```");
    }
    let _0x1be9fa = ['imageMessage'];
    let _0x270f0c = _0x1be9fa.includes(_0x152090.mtype) ? _0x152090 : _0x152090.reply_message;
    if (!_0x270f0c || !_0x1be9fa.includes(_0x270f0c?.["mtype"] || "null")) {
      return await _0x152090.send("*_Uhh Dear, Reply to an image_*");
    }
    let _0x3329e5 = await _0x152090.bot.downloadAndSaveMediaMessage(_0x270f0c);
    let _0x286f1c = await TelegraPh(_0x3329e5);
    try {
      fs.unlinkSync(_0x3329e5);
    } catch {}
    let _0x5743f1 = await aiResponce(_0x152090, "rmbg", _0x286f1c);
    if (_0x5743f1) {
      await _0x152090.send(_0x5743f1, {
        'caption': Config.caption
      }, "image", _0x152090);
    } else {
      await _0x152090.send("*_Request not be preceed!!_*");
    }
  } catch (_0x36ab47) {
    await _0x152090.error(_0x36ab47 + "\n\ncommand: rmbg", _0x36ab47, "*_No responce from remove.bg, Sorry!!_*");
  }
});
smd({
  'pattern': "readmore",
  'alias': ["rmore", "readmor"],
  'desc': "Adds *readmore* in given text.",
  'category': "general",
  'filename': __filename
}, async (_0x48e118, _0x238848) => {
  try {
    let _0x5b2605 = _0x238848 ? _0x238848 : _0x48e118.reply_text;
    if (!_0x5b2605) {
      _0x5b2605 = "*Uhh Dear,Please provide text*\n*Eg:- _.readmor text1 readmore text2_*";
    } else {
      _0x5b2605 += " ";
    }
    if (_0x5b2605.includes('readmore')) {
      await _0x48e118.reply(_0x5b2605.replace(/readmore/, String.fromCharCode(0x200e).repeat(0xfa1)));
    } else {
      await _0x48e118.reply(_0x5b2605.replace(" ", String.fromCharCode(0x200e).repeat(0xfa1)));
    }
  } catch (_0x45ac06) {
    await _0x48e118.error(_0x45ac06 + "\n\ncommand : readmore", _0x45ac06, false);
  }
});
let pmtypes = ["videoMessage", "imageMessage"];
cmd({
  'pattern': 'url',
  'alias': ['createurl'],
  'category': "general",
  'filename': __filename,
  'desc': "image to url.",
  'use': "<video | image>"
}, async _0x5f3a83 => {
  try {
    let _0x164f99 = pmtypes.includes(_0x5f3a83.mtype) ? _0x5f3a83 : _0x5f3a83.reply_message;
    if (!_0x164f99 || !pmtypes.includes(_0x164f99?.["mtype"])) {
      return _0x5f3a83.reply("*_Uhh Dear, Reply To An Image/Video!_*");
    }
    let _0x52be2b = await _0x5f3a83.bot.downloadAndSaveMediaMessage(_0x164f99);
    let _0x29746f = await createUrl(_0x52be2b);
    if (!_0x29746f) {
      return _0x5f3a83.reply("*_Failed To Create Url!_*");
    }
    try {
      fs.unlink(_0x52be2b);
    } catch {}
    await _0x5f3a83.send(util.format(_0x29746f), {}, "asta", _0x164f99);
  } catch (_0x279ebd) {
    await _0x5f3a83.error(_0x279ebd + "\n\ncommand url", _0x279ebd);
  }
});
cmd({
  'pattern': "upload",
  'alias': ['url2'],
  'category': 'general',
  'filename': __filename,
  'desc': "image to url.",
  'use': "<video | image>"
}, async _0x5db361 => {
  try {
    let _0x124189 = pmtypes.includes(_0x5db361.mtype) ? _0x5db361 : _0x5db361.reply_message;
    if (!_0x124189 || !pmtypes.includes(_0x124189?.["mtype"])) {
      return _0x5db361.reply("*_Uhh Dear, Reply To An Image/Video!_*");
    }
    let _0x51f9b8 = await _0x5db361.bot.downloadAndSaveMediaMessage(_0x124189);
    let _0x12d846 = await createUrl(_0x51f9b8, 'uguMashi');
    try {
      fs.unlink(_0x51f9b8);
    } catch {}
    if (!_0x12d846 || !_0x12d846.url) {
      return _0x5db361.reply("*_Failed To Create Url!_*");
    }
    await _0x5db361.send(util.format(_0x12d846.url), {}, "asta", _0x124189);
  } catch (_0x2be444) {
    await _0x5db361.error(_0x2be444 + "\n\ncommand upload", _0x2be444);
  }
});
smd({
  'pattern': 'calc',
  'desc': "calculate an equation.",
  'category': 'general',
  'use': "<equation>",
  'filename': __filename
}, async (_0x374d6c, _0x28733d) => {
  try {
    if (!_0x28733d) {
      return await _0x374d6c.reply("*Please enter a math operation*\n*Example: .calc 22+12*");
    }
    let _0x586aa1 = _0x28733d.replace(/\s+/g, '');
    if (!/^(\d+([-+%*/]\d+)+)$/.test(_0x586aa1)) {
      return await _0x374d6c.reply("Please enter a valid mathematical operation.");
    }
    const _0x4a6623 = new Function("return " + _0x586aa1)();
    if (_0x586aa1.includes('/') && _0x586aa1.split('/').some(_0x571e2b => _0x571e2b === '0')) {
      return _0x374d6c.reply("Cannot divide by zero.");
    }
    if (_0x586aa1.split(/[-+%*/]/).length <= 0x2) {
      const [_0x3f71a0, _0xfd1474, _0x198cf7] = _0x586aa1.match(/\d+|[-+%*/]/g);
      return await _0x374d6c.reply(_0x3f71a0 + " " + _0xfd1474 + " " + _0x198cf7 + " = " + _0x4a6623);
    } else {
      return await _0x374d6c.reply("Result: " + _0x4a6623);
    }
  } catch (_0x5ceb1f) {
    return await _0x374d6c.error(_0x5ceb1f + "\n\ncommand: calc", _0x5ceb1f);
  }
});
async function getDateTime() {
  const _0x4b40a8 = new Date();
  const _0x76b623 = _0x4b40a8.toISOString().slice(0x0, 0xa);
  const _0x2af93a = _0x4b40a8.toLocaleTimeString();
  return {
    'date': _0x76b623,
    'time': _0x2af93a
  };
}
smd({
  'pattern': "repo",
  'alias': ["git", 'sc', "script"],
  'desc': "Sends info about repo",
  'category': 'general',
  'filename': __filename
}, async _0x55ed87 => {
  try {
    let {
      data: _0x1dfca2
    } = await axios.get("https://github.com/coderxsa/ANITA");
    let _0x76be41 = ("\nANITA ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ, ᴍᴀᴅᴇ ʙʏ *CODERX* ᴀɴᴅ ᴅᴇᴘʟᴏʏᴇᴅ ʙʏ *" + Config.ownername + "*.\n\n  *❲❒❳ Stars:* " + (_0x1dfca2?.['stargazers_count'] || '120+') + " stars\n  *❲❒❳ Forks:* " + (_0x1dfca2?.["forks_count"] || "1000+") + " forks\n  *❲❒❳ Authors:* coderxsa\n  *❲❒❳ Created On:* " + (_0x1dfca2?.["created_at"] || 'undefined') + "\n  *❲❒❳ Repo:* _https://github.com/coderxsa/ANITA_\n  *❲❒❳ Scan:* _" + scan + '_' + (Config.caption ? "\n\n" + Config.caption : '')).trim();
    return await _0x55ed87.sendUi(_0x55ed87.jid, {
      'caption': _0x76be41
    });
  } catch (_0x549767) {
    await _0x55ed87.error(_0x549767 + "\n\ncommand: repo", _0x549767);
  }
});
smd({
  'pattern': "cpu",
  'desc': "To check bot status",
  'category': "general",
  'filename': __filename
}, async _0x513361 => {
  try {
    const _0x25afb8 = process.memoryUsage();
    const _0x2a606d = os.cpus().map(_0x38f774 => {
      _0x38f774.total = Object.keys(_0x38f774.times).reduce((_0x16f0e6, _0x5be942) => _0x16f0e6 + _0x38f774.times[_0x5be942], 0x0);
      return _0x38f774;
    });
    const _0x588884 = _0x2a606d.reduce((_0x25e9b0, _0x4edc3e, _0x28810c, {
      length: _0x2712fb
    }) => {
      _0x25e9b0.total += _0x4edc3e.total;
      _0x25e9b0.speed += _0x4edc3e.speed / _0x2712fb;
      _0x25e9b0.times.user += _0x4edc3e.times.user;
      _0x25e9b0.times.nice += _0x4edc3e.times.nice;
      _0x25e9b0.times.sys += _0x4edc3e.times.sys;
      _0x25e9b0.times.idle += _0x4edc3e.times.idle;
      _0x25e9b0.times.irq += _0x4edc3e.times.irq;
      return _0x25e9b0;
    }, {
      'speed': 0x0,
      'total': 0x0,
      'times': {
        'user': 0x0,
        'nice': 0x0,
        'sys': 0x0,
        'idle': 0x0,
        'irq': 0x0
      }
    });
    timestampe = speed();
    latensie = speed() - timestampe;
    var _0x1e0005 = performance.now();
    var _0x1ebc3a = performance.now();
    respon = ("*❲❒❳ " + Config.botname + " Server Info ❲❒❳*\n\n  *❲❒❳ Runtime:* " + runtime(process.uptime()) + "\n  *❲❒❳ Speed:* " + latensie.toFixed(0x3) + '/' + (_0x1ebc3a - _0x1e0005).toFixed(0x3) + " ms\n  *❲❒❳ RAM:* " + formatp(os.totalmem() - os.freemem()) + " / " + formatp(os.totalmem()) + "\n\n  *❲❒❳ Memory Usage:*\n      " + Object.keys(_0x25afb8).map((_0x334839, _0x528ff8, _0x48ec51) => _0x334839.padEnd(Math.max(..._0x48ec51.map(_0x2bf86c => _0x2bf86c.length)), " ") + ": " + formatp(_0x25afb8[_0x334839])).join("\n      ") + "\n\n" + (_0x2a606d[0x0] ? "  *❲❒❳ Total CPU Usage:*\n  *" + _0x2a606d[0x0].model.trim() + " (" + _0x588884.speed + " MHZ)*\n      " + Object.keys(_0x588884.times).map(_0x197510 => '-' + (_0x197510 + '').padEnd(0x6) + ": " + (_0x588884.times[_0x197510] * 0x64 / _0x588884.total).toFixed(0x2) + '%').join("\n      ") + "\n\n  *❲❒❳ CPU Core Usage (" + _0x2a606d.length + " Core CPU)*\n  " + _0x2a606d.map((_0x2460c8, _0x1fb5a8) => "*Core " + (_0x1fb5a8 + 0x1) + ": " + _0x2460c8.model.trim() + " (" + _0x2460c8.speed + " MHZ)*\n      " + Object.keys(_0x2460c8.times).map(_0xf85cc5 => '-' + (_0xf85cc5 + '').padEnd(0x6) + ": " + (_0x2460c8.times[_0xf85cc5] * 0x64 / _0x2460c8.total).toFixed(0x2) + '%').join("\n      ")).join("\n\n") : '') + "\n").trim();
    return await _0x513361.send(respon, {}, '', _0x513361);
  } catch (_0x2ec22f) {
    await _0x513361.error(_0x2ec22f + "\n\ncommand: cpu", _0x2ec22f, "*_No responce from Server side, Sorry!!_*");
  }
});
smd({
  'pattern': "advt",
  'alias': ["advertisement"],
  'category': 'ai',
  'desc': "Advertise of your Message, by sending it to provided nmbr range.",
  'use': "27717311486,Your_text_here",
  'fromMe': true,
  'filename': __filename
}, async (_0x370d41, _0x2ec0e9) => {
  try {
    let _0xec16d4 = _0x2ec0e9 ? _0x2ec0e9 : _0x370d41.reply_text;
    if (!_0xec16d4) {
      return await _0x370d41.reply("*Advertise of your Message*\n*by sending it to provided nmbr range.*\n" + prefix + "advt 27717311486,Your_text_here");
    }
    const _0x1161d4 = _0xec16d4.indexOf(',');
    if (_0x1161d4 === -0x1) {
      return await _0x370d41.send("*Invalid format. Please provide number and Message separated by a comma.*");
    }
    let _0x4ecc33 = '' + _0xec16d4.slice(0x0, _0x1161d4).trim();
    let _0x25e201 = _0xec16d4.slice(_0x1161d4 + 0x1).trim() + "\n\n\n" + Config.caption;
    if (!_0x4ecc33.includes('x')) {
      return _0x370d41.send("*You did not add x in number.*\n*Ex: " + prefix + "advt 27717311486,Your_Message_here*  \n " + Config.caption);
    }
    await _0x370d41.send("*Sending message to given number range.!*\n*It may take some time, so wait please*");
    var _0x84cc6b = _0x4ecc33.split('x')[0x0];
    var _0x456639 = _0x4ecc33.split('x')[_0x4ecc33.split('x').length - 0x1] ? _0x4ecc33.split('x')[_0x4ecc33.split('x').length - 0x1] : '';
    var _0x35a56c = _0x4ecc33.split('x').length - 0x1;
    var _0x135104;
    if (_0x35a56c == 0x1) {
      _0x135104 = 0xa;
    } else {
      if (_0x35a56c == 0x2) {
        _0x135104 = 0x64;
      } else {
        if (_0x35a56c == 0x3) {
          _0x135104 = 0x3e8;
        } else {
          if (_0x35a56c > 0x3) {
            return await _0x370d41.send("*Only 3(x) are Allowed in number*");
          }
        }
      }
    }
    let _0x470c2a = 0x0;
    let _0x3cbca1 = '';
    var _0x3e7d8c = '';
    for (let _0x2c419e = 0x0; _0x2c419e < _0x135104; _0x2c419e++) {
      var _0x2e9167 = await _0x370d41.bot.onWhatsApp('' + _0x84cc6b + _0x2c419e + _0x456639 + '@s.whatsapp.net');
      if (_0x2e9167[0x0]) {
        _0x3e7d8c = _0x2e9167[0x0].jid;
        if (_0x3cbca1.includes(_0x3e7d8c)) {
          continue;
        }
        await sleep(0x5dc);
        await _0x370d41.bot.sendMessage(_0x3e7d8c, {
          'text': _0x25e201
        });
        _0x3cbca1 = _0x3cbca1 + ',' + _0x3e7d8c;
        _0x470c2a += 0x1;
      }
    }
    return await _0x370d41.send("*_Advertisement of your Message is Done,_* \n\n*_Message Succesfully sent to " + _0x470c2a + " chats_*\nLast_User: " + _0x3e7d8c.split('@')[0x0] + "\nSearch_No: " + _0x135104 + " number searched\n\n\n" + Config.caption);
  } catch (_0x58425f) {
    await _0x370d41.error(_0x58425f + "\n\ncommand: dalle", _0x58425f, "*_No responce from Server side, Sorry!!_*");
  }
});
const astro_patch_AnonyMsg = {};
let isAnnonyMsgAlive = '';
class AnonymousMsg {
  constructor() {
    this.id = '';
    this.sender = '';
    this.reciever = '';
    this.senderMsg = '';
    this.tellinfo = 0x0;
    this.howmanyreply = 0x0;
  }
}
smd({
  'pattern': "anonymsg",
  'alias': ["recognition", "anonychat"],
  'desc': "Send message Annonymously",
  'category': 'ai',
  'use': "<Hii, Astropeda>",
  'filename': __filename
}, async (_0x3db40a, _0x2653de, {
  smd: _0x215c3b
}) => {
  try {
    let _0xe843b1 = _0x2653de ? _0x2653de : _0x3db40a.reply_text;
    if (!_0xe843b1) {
      return await _0x3db40a.send("*provide number with msg to send Anonymously.* \n*Example " + (prefix + _0x215c3b) + " 27717311486,your_Message*", {}, '', _0x3db40a);
    }
    if (_0x3db40a.isCreator && _0xe843b1 === "info") {
      return await _0x3db40a.reply(isAnnonyMsgAlive == '' ? "*Theres no Anonymous Chat created yet*" : "*Anonymous Chat Recivers*\n_" + isAnnonyMsgAlive + '_');
    }
    const _0x4dc60d = _0xe843b1.indexOf(',');
    if (_0x4dc60d === -0x1) {
      return await _0x3db40a.reply("*Invalid format. Please provide both number and Message separated by a comma.*");
    }
    let _0x601d22 = _0xe843b1.slice(0x0, _0x4dc60d).trim() + "@s.whatsapp.net";
    let _0x34326b = _0xe843b1.slice(_0x4dc60d + 0x1).trim();
    let _0x351d69 = (await parsedJid(_0x601d22)) || [];
    if (_0x351d69[0x0]) {
      const {
        date: _0x3b5045,
        time: _0x5a7fd9
      } = await getDateTime();
      const _0x34eec0 = 'anony-msg-' + Math.floor(0x186a0 + Math.random() * 0xdbba0);
      astro_patch_AnonyMsg[_0x34eec0] = new AnonymousMsg();
      let _0x37185f = astro_patch_AnonyMsg[_0x34eec0];
      _0x37185f.id = _0x34eec0;
      _0x37185f.sender = _0x3db40a.sender;
      _0x37185f.reciever = _0x351d69[0x0];
      _0x37185f.msgStatus = true;
      _0x37185f.senderMsg = _0x3db40a;
      _0x34326b = "*ANITA • ᴀɴɴᴏɴʏᴍᴏᴜs ᴍsɢ*\n\n*Msg_Id:* " + _0x37185f.id + "\n*Date:* _" + _0x3b5045 + "_\n*Time:* _" + _0x5a7fd9 + "_\n\n*Message:* " + _0x34326b + "\n\n\n" + Config.caption;
      isAnnonyMsgAlive = isAnnonyMsgAlive + ',' + _0x37185f.reciever;
      await _0x3db40a.bot.sendMessage(_0x37185f.reciever, {
        'text': _0x34326b
      });
      return await _0x3db40a.reply("*_Anonymous message sent succesfully_*");
    } else {
      return await _0x3db40a.reply("*_Provided number is not valid!!!_*");
    }
  } catch (_0x4fb283) {
    await _0x3db40a.error(_0x4fb283 + "\n\ncommand: " + _0x215c3b, _0x4fb283, "*_Can't send annonymously message yet, Sorry!!_*");
  }
});
smd({
  'on': 'text'
}, async _0x14787d => {
  try {
    if (_0x14787d.quoted && isAnnonyMsgAlive.includes(_0x14787d.sender) && _0x14787d.text.length > 0x2) {
      const _0x3a3fd2 = _0x14787d.reply_text.split("\n");
      if (_0x3a3fd2.length < 0x3) {
        return;
      }
      if (_0x14787d.reply_text.includes("ANITA • ᴀɴɴᴏɴʏᴍᴏᴜs ᴍsɢ") && _0x3a3fd2[0x0].includes("ANITA • ᴀɴɴᴏɴʏᴍᴏᴜs ᴍsɢ") && _0x3a3fd2[0x2].includes("Msg_Id")) {
        let _0x46985b = '' + _0x3a3fd2[0x2].replace("*Msg_Id:* ", '').trim();
        let _0x12057e = astro_patch_AnonyMsg[_0x46985b];
        if (!_0x12057e) {
          return;
        }
        try {
          if (_0x12057e) {
            let _0x34e4f4 = _0x14787d.text.split(',')[0x0].trim();
            if (_0x34e4f4.toLowerCase().startsWith("reply")) {
              _0x12057e.howmanyreply += 0x1;
              const _0x1967cc = _0x14787d.text.indexOf(',');
              let _0xaaa11 = "*QANITA • ʏᴏᴜʀ ᴀɴᴏɴʏ-ᴍsɢ ʀᴇᴘʟʏ*\n\n*_From @" + _0x12057e.reciever.split('@')[0x0] + "_*\n*_Msg_Id: " + _0x12057e.id + "_*\n\n*Message:* " + _0x14787d.text.slice(_0x1967cc + 0x1).trim() + "\n\n\n\n" + Config.caption;
              if (_0x12057e.howmanyreply >= 0x2) {
                isAnnonyMsgAlive = isAnnonyMsgAlive.replace(',' + _0x14787d.sender, '');
              }
              await _0x14787d.bot.sendMessage(_0x12057e.sender, {
                'text': _0xaaa11,
                'mentions': [_0x12057e.reciever]
              }, {
                'quoted': _0x12057e.senderMsg
              });
              if (_0x12057e.howmanyreply >= 0x2) {
                isAnnonyMsgAlive = isAnnonyMsgAlive.replace(',' + _0x14787d.sender, '');
                delete astro_patch_AnonyMsg[_0x46985b];
              }
              return await _0x14787d.reply("*_Your Message succesfully deliver to User_* " + (_0x12057e.howmanyreply == 0x1 ? "\n*you can reply 1 more time*" : '') + " ");
            } else {
              if (_0x12057e.tellinfo === 0x0) {
                _0x12057e.tellinfo = 0x1;
                let _0x15c87b = "*Basically, Its an Annonymous Message*\n\n_Msg_Id: " + _0x12057e.id + "_\n_this message sended by a chatbot_\n_User not wants to expose itself to send that msg_\n\n\n*if you wanna reply to that user,*\n*Send msg by replying to above message*\n*Type like:* reply, Type_your_Message_Here\n*Example:* reply, Can you text me from your number\n\n\n" + Config.caption;
                _0x14787d.bot.sendMessage(_0x12057e.reciever, {
                  'text': _0x15c87b
                }, {
                  'quoted': _0x14787d
                });
              } else if (_0x12057e.tellinfo === 0x1) {
                _0x12057e.tellinfo = 0x2;
                _0x14787d.reply("*Please follow the format if reply to msg*\n*Type like: _reply, Type_your_Message_Here_*");
              }
            }
          }
        } catch (_0x420d9a) {
          console.log("error : ", _0x420d9a);
        }
      }
    }
  } catch {}
});
smd({
  'pattern': 'aitts',
  'desc': "Text to Voice Using Eleven Lab Ai",
  'category': 'ai',
  'use': "<Hii, ANITA>",
  'filename': __filename
}, async (_0x58d934, _0x519a9a) => {
  await aitts(_0x58d934, _0x519a9a || _0x58d934.reply_text);
});