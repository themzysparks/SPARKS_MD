/*
▄▀█ █▄░█ █ ▀█▀ ▄▀█
█▀█ █░▀█ █ ░█░ █▀█

*
   * @project_name : ANITA
   * @author : CODERXSA
   * @youtube : https://www.youtube.com/@coderxsa
   * @instagram : https://www.instagram.com/coderx.sa
   * @description : My Private build i made public for everone to use and easy hosting.
   * @version : 1.0.3
   * Donation : https://pay.yoco.com/coderx
   
   * For all my GitHub bots, I typically only check and update them when I have the time. My primary focus is on my main bots.
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By CODERX.
   * © 2024 ANITA.
*/
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
const {
  aitts,
  smd,
  prefix,
  Config,
  parsedJid,
  sleep
} = require('../lib');
const axios = require("axios");
const {
  send
} = require("../lib");
const fetch = require("node-fetch");
async function aiResponce(_0x13283f, _0x49a0a6, _0x1d5a41 = '') {
  let _0x6e4ee5 = '';
  try {
    if (_0x49a0a6 === "chat") {
      _0x6e4ee5 = await (await axios.get("http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[" + _0x13283f.sender.split('@')[0x0] + "]&msg=[" + _0x1d5a41 + ']')).data.cnt;
    } else {
      if (_0x49a0a6 === "gpt") {
        const _0xd1a370 = await fetch("https://api.openai.com/v1/chat/completions", {
          'method': "POST",
          'headers': {
            'Content-Type': "application/json",
            'Authorization': "Bearer " + Config.OPENAI_API_KEY
          },
          'body': JSON.stringify({
            'model': 'gpt-3.5-turbo',
            'messages': [{
              'role': "system",
              'content': "You"
            }, {
              'role': 'user',
              'content': _0x1d5a41
            }]
          })
        });
        const _0x513994 = await _0xd1a370.json();
        if (!_0x513994.choices || _0x513994.choices.length === 0x0) {
          _0x6e4ee5 = "*Invalid ChatGPT API Key, Please Put New Key*";
        } else {
          _0x6e4ee5 = _0x513994.choices[0x0].message.content;
        }
      } else {
        if (_0x49a0a6 === "dalle") {
          const _0x525c48 = await fetch("https://api.openai.com/v1/images/generations", {
            'method': "POST",
            'headers': {
              'Content-Type': "application/json",
              'Authorization': "Bearer " + Config.OPENAI_API_KEY
            },
            'body': JSON.stringify({
              'model': "image-alpha-001",
              'prompt': _0x1d5a41,
              'size': "512x512",
              'response_format': "url"
            })
          });
          const _0x56ef47 = await _0x525c48.json();
          _0x6e4ee5 = _0x56ef47.data[0x0].url;
        }
      }
    }
    if (_0x49a0a6 === "rmbg") {
      const _0x6c5560 = {
        'image_url': _0x1d5a41,
        'size': "auto"
      };
      axios.post("https://api.remove.bg/v1.0/removebg", _0x6c5560, {
        'headers': {
          'X-Api-Key': Config.REMOVE_BG_KEY
        },
        'responseType': 'arraybuffer'
      }).then(_0x503491 => {
        _0x6e4ee5 = Buffer.from(_0x503491.data, "binary");
      })["catch"](_0x387d46 => {
        _0x6e4ee5 = false;
      });
    }
    return _0x6e4ee5;
  } catch (_0x30b77b) {
    console.log("error in aiResponce : ", _0x30b77b);
    return "Error While getting Ai responce ";
  }
}
smd({
  'pattern': "rmbg",
  'alias': ["removebg"],
  'desc': "Removes the background from an image.",
  'category': 'ai',
  'filename': __filename,
  'use': "<image URL>"
}, async (_0x4194db, _0x18f75c) => {
  try {
    const _0x37a4a0 = _0x18f75c.trim();
    if (!_0x37a4a0 || !isValidUrl(_0x37a4a0)) {
      return await _0x4194db.send("*_Please provide a valid image URL._*");
    }
    const _0x201b5b = "https://aemt.me/removebg?url=" + encodeURIComponent(_0x37a4a0);
    const _0x160884 = await axios.get(_0x201b5b, {
      'headers': {
        'accept': 'application/json'
      }
    });
    const _0x781442 = _0x160884.data;
    if (!_0x781442 || !_0x781442.url || !_0x781442.url.status === 'true') {
      return await _0x4194db.reply("*Failed to remove background from the image.*");
    }
    const _0x489be6 = _0x781442.url.result;
    const _0x1523b0 = await axios.get(_0x489be6, {
      'responseType': "arraybuffer"
    });
    const _0x398fc5 = Buffer.from(_0x1523b0.data, "binary");
    await _0x4194db.bot.sendMessage(_0x4194db.chat, {
      'image': _0x398fc5
    }, {
      'quoted': _0x4194db
    });
  } catch (_0x5ba7ee) {
    await _0x4194db.error(_0x5ba7ee + "\n\nCommand: rmbg", _0x5ba7ee, "*Failed to remove background from the image.*");
  }
});
function isValidUrl(_0x861bdb) {
  try {
    new URL(_0x861bdb);
    return true;
  } catch (_0x2a48df) {
    return false;
  }
}
smd({
  'pattern': 'sd',
  'desc': "Generates an image using Stable Diffusion AI.",
  'category': 'ai',
  'filename': __filename,
  'use': '<text>'
}, async (_0x4dc104, _0x4d55eb) => {
  try {
    const _0xe754e6 = _0x4d55eb.trim();
    if (!_0xe754e6) {
      return await _0x4dc104.send("*_Please provide some text to generate an image._*");
    }
    const _0x516cd6 = "https://aemt.me/stablediffusion?text=" + encodeURIComponent(_0xe754e6);
    const _0xcb59f5 = await axios.get(_0x516cd6, {
      'headers': {
        'accept': 'application/json'
      },
      'responseType': "arraybuffer"
    });
    if (!_0xcb59f5.data) {
      return await _0x4dc104.reply("*Failed to generate an image using Stable Diffusion AI.*");
    }
    const _0x2e68c1 = Buffer.from(_0xcb59f5.data, "binary");
    await _0x4dc104.bot.sendMessage(_0x4dc104.chat, {
      'image': _0x2e68c1
    }, {
      'quoted': _0x4dc104
    });
  } catch (_0x391e5e) {
    await _0x4dc104.error(_0x391e5e + "\n\nCommand: stablediffusion", _0x391e5e, "*Failed to use Stable Diffusion AI.*");
  }
});
smd({
  'pattern': "bard",
  'desc': "Generates a response from Bard AI.",
  'category': 'ai',
  'filename': __filename,
  'use': "<text>"
}, async (_0x442ae6, _0x20458a) => {
  try {
    const _0x300bc0 = _0x20458a.trim();
    if (!_0x300bc0) {
      return await _0x442ae6.send("*_Please provide some text to generate a response._*");
    }
    const _0x38671d = "https://aemt.me/bard?text=" + encodeURIComponent(_0x300bc0);
    const _0x29b976 = await axios.get(_0x38671d, {
      'headers': {
        'accept': "application/json"
      }
    });
    const _0x174fda = _0x29b976.data;
    if (!_0x174fda || !_0x174fda.status) {
      return await _0x442ae6.reply("*Failed to generate a response from Bard AI.*");
    }
    const _0x310bd1 = _0x174fda.result;
    return await _0x442ae6.send("*ANITA ʙᴀʀᴅ ᴀɪ:*\n " + _0x310bd1, {
      'quoted': _0x442ae6
    });
  } catch (_0x5d0825) {
    await _0x442ae6.error(_0x5d0825 + "\n\nCommand: bard", _0x5d0825, "*Failed to use Bard AI.*");
  }
});
smd({
  'pattern': "gpt4",
  'category': 'ai',
  'desc': "Chat with GPT-4 AI model",
  'use': "<text>",
  'filename': __filename
}, async (_0xe9182c, _0x2b6790, {
  cmdName: _0x26b429
}) => {
  if (!_0x2b6790) {
    return _0xe9182c.reply("*_Please provide a query_*\n*_Example " + (prefix + _0x26b429) + " What is the meaning of life?_*");
  }
  try {
    const _0x22b0da = "https://ultimetron.guruapi.tech/gpt4?prompt=" + encodeURIComponent(_0x2b6790);
    const _0x532ecc = await fetch(_0x22b0da);
    const _0x49ca83 = await _0x532ecc.json();
    if (!_0x49ca83.result.success) {
      return _0xe9182c.send("*There's a problem, try again later!*");
    }
    const {
      reply: _0x1fafd1
    } = _0x49ca83.result;
    await send(_0xe9182c, "ANITA ɢᴘᴛ𝟺\n```" + _0x1fafd1 + '```');
  } catch (_0x581461) {
    return await _0xe9182c.error(_0x581461 + "\n\n command: " + _0x26b429, _0x581461, "*_An error occurred while processing your request_*");
  }
});
smd({
  'pattern': "gemini",
  'category': 'ai',
  'desc': "Chat with Bard AI model",
  'use': "<text>",
  'filename': __filename
}, async (_0x2db907, _0xd09a40, {
  cmdName: _0x3ab30b
}) => {
  if (!_0xd09a40) {
    return _0x2db907.reply("*_Please provide a query_*\n*_Example " + (prefix + _0x3ab30b) + " What is the meaning of life?_*");
  }
  try {
    const _0xcca9b8 = await (await fetch("https://api.maher-zubair.tech/ai/gemini?q=" + _0xd09a40)).json();
    if (!_0xcca9b8.status === 0xc8) {
      return _0x2db907.send("*There's a problem, try again later!*");
    }
    const {
      result: _0x4bda8d
    } = _0xcca9b8;
    await send(_0x2db907, "ANITA ɢᴇᴍɪɴɪ ᴀɪ```" + _0x4bda8d + '```');
  } catch (_0x2fd630) {
    return await _0x2db907.error(_0x2fd630 + "\n\n command: " + _0x3ab30b, _0x2fd630, "*_An error occurred while processing your request_*");
  }
});
smd({
  'cmdname': "alexa2",
  'category': 'ai',
  'use': '[text]',
  'filename': __filename,
  'info': "chat with simsimi alexa ai!"
}, async (_0x17359b, _0x2fd8a5) => {
  try {
    if (!_0x2fd8a5) {
      return await _0x17359b.reply("Hi *" + _0x17359b.senderName + "*, do you want to talk?");
    }
    const _0x3a5842 = {
      'method': "POST",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': "text=" + encodeURIComponent(_0x2fd8a5) + "&lc=en&key="
    };
    const _0x558923 = await fetch("https://api.simsimi.vn/v2/simtalk", _0x3a5842);
    const _0x11b954 = await _0x558923.json();
    if (_0x11b954.status === "200" && _0x11b954.message) {
      _0x17359b.reply(_0x11b954.message);
    } else {
      _0x17359b.reply("*No Responce!*");
    }
  } catch (_0x37b0ab) {
    await _0x17359b.error(_0x37b0ab + "\n\ncommand : poetry", _0x37b0ab, false);
  }
});
smd({
  'pattern': "chat",
  'desc': "chat with an AI",
  'category': 'ai',
  'use': "<Hii, Astro>",
  'filename': __filename
}, async (_0x502e20, _0x52a11a) => {
  try {
    return _0x502e20.reply(await aiResponce(_0x502e20, "chat", _0x52a11a));
  } catch (_0x51655b) {
    await _0x502e20.error(_0x51655b + "\n\ncommand: chat", _0x51655b, "*_no responce from chatbot, sorry!!_*");
  }
});
smd({
  'pattern': "dalle",
  'alias': ["dall", 'dall-e'],
  'desc': "chat with an AI",
  'category': 'ai',
  'use': "<Hii, Astro>",
  'filename': __filename
}, async (_0x2ff0ae, _0x49e2ed) => {
  try {
    if (!_0x49e2ed) {
      return await _0x2ff0ae.reply("*Give Me A Query To Get Dall-E Response?*");
    }
    const _0x3573ee = "https://api.maher-zubair.tech/ai/dalle?q=" + encodeURIComponent(_0x49e2ed);
    try {
      const _0x2e8c58 = await fetch(_0x3573ee);
      const _0x5932f6 = await _0x2e8c58.json();
      return _0x5932f6.status === 0xc8 && _0x5932f6.img ? await _0x2ff0ae.bot.sendMessage(_0x2ff0ae.chat, {
        'img': {
          'url': _0x5932f6.img
        },
        'caption': "[PROMPT]: ```" + _0x49e2ed + "``` \n " + Config.caption
      }) : _0x2ff0ae.reply("```" + (_0x5932f6.err || "Error generating image") + '```');
    } catch (_0x1149e4) {
      console.log("ERROR IN DALLE RESPONSE FROM API", _0x1149e4);
      return _0x2ff0ae.reply("*_No response from Dall-E AI, Sorry!_*");
    }
  } catch (_0x5b31c8) {
    await _0x2ff0ae.error(_0x5b31c8 + "\n\ncommand: dalle", _0x5b31c8, "*_No response from Dall-E AI, Sorry!_*");
  }
});
smd({
  'pattern': "imagine",
  'alias': ["imagin"],
  'desc': "chat with an AI",
  'category': 'ai',
  'use': "<boy walking on street>",
  'filename': __filename
}, async (_0x14f435, _0x5eb33a) => {
  try {
    let _0x22b6ac = _0x5eb33a || _0x14f435.reply_text;
    if (!_0x22b6ac) {
      return await _0x14f435.reply("*Give Me A Query To Get imagination?*");
    }
    let _0x59027c = false;
    try {
      const _0x3c5063 = await fetch("https://aemt.me/openai?text=" + (_0x22b6ac + " \nNOTE: Make sure to looks like imagination, make it short and concise, also in english!"));
      const _0x3c8a8f = await _0x3c5063.json();
      _0x59027c = _0x3c8a8f && _0x3c8a8f.status && _0x3c8a8f.result ? _0x3c8a8f.result : '';
    } catch (_0x4677d0) {
      _0x59027c = false;
    }
    try {
      await Draw(_0x22b6ac || _0x14f435.reply_text).then(_0x30d2a2 => {
        _0x14f435.bot.sendMessage(_0x14f435.chat, {
          'image': _0x30d2a2,
          'caption': "*[IMAGININATION]:* ```" + _0x22b6ac + " ```" + (_0x59027c ? "\n\n*[RESPONCE]:* ```" + _0x59027c + "``` \n" : '') + "  \n " + Config.caption + " "
        });
      });
      return;
    } catch (_0x44b7a9) {
      console.log("ERROR IN IMAGINE RESPONCE FROM IMAGINE API n", _0x44b7a9);
    }
    if (Config.OPENAI_API_KEY == '' || !Config.OPENAI_API_KEY || !('' + Config.OPENAI_API_KEY).startsWith('sk')) {
      return _0x14f435.reply("```You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys\nAnd Set Key in Heroku OPENAI_API_KEY Var```");
    }
    return await _0x14f435.bot.sendMessage(_0x14f435.chat, {
      'image': {
        'url': await aiResponce(_0x14f435, "dalle", _0x22b6ac)
      },
      'caption': "*---Your DALL-E Result---*\n" + Config.caption
    });
  } catch (_0x5e1309) {
    await _0x14f435.error(_0x5e1309 + "\n\ncommand: imagine", _0x5e1309, "*_No responce from Server side, Sorry!!_*");
  }
});
smd({
  'pattern': "imagine2",
  'alias': ["imagin2"],
  'desc': "chat with an AI",
  'category': 'ai',
  'use': "<boy walking on street>",
  'filename': __filename
}, async (_0x378d84, _0x172f36) => {
  try {
    let _0x13e2f9 = _0x172f36 || _0x378d84.reply_text;
    if (!_0x13e2f9) {
      return await _0x378d84.reply("*Give Me A Query To Get imagination?*");
    }
    const _0x357c6b = "https://gurugpt.cyclic.app/dalle?prompt=" + encodeURIComponent(_0x13e2f9 + " \nNOTE: Make sure to looks like imagination");
    let _0x3d76b7 = false;
    try {
      const _0x2ed76b = await fetch("https://aemt.me/openai?text=" + (_0x13e2f9 + " \nNOTE: Make sure to looks like imagination, make it short and concise, also in english!"));
      const _0x3dd849 = await _0x2ed76b.json();
      _0x3d76b7 = _0x3dd849 && _0x3dd849.status && _0x3dd849.result ? _0x3dd849.result : '';
    } catch (_0x147b90) {
      _0x3d76b7 = false;
    }
    try {
      return await _0x378d84.bot.sendMessage(_0x378d84.chat, {
        'image': {
          'url': _0x357c6b
        },
        'caption': "*[IMAGININATION]:* ```" + _0x13e2f9 + " ```" + (_0x3d76b7 ? "\n\n*[RESPONCE]:* ```" + _0x3d76b7 + "``` \n" : '') + "  \n " + Config.caption + " "
      });
    } catch (_0x131d00) {
      console.log("ERROR IN IMAGINE RESPONCE FROM API GURUGPT\n", _0x131d00);
    }
    if (Config.OPENAI_API_KEY == '' || !Config.OPENAI_API_KEY || !('' + Config.OPENAI_API_KEY).startsWith('sk')) {
      return _0x378d84.reply("```You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys\nAnd Set Key in Heroku OPENAI_API_KEY Var```");
    }
    return await _0x378d84.bot.sendMessage(_0x378d84.chat, {
      'image': {
        'url': await aiResponce(_0x378d84, "dalle", _0x13e2f9)
      },
      'caption': "*---Your DALL-E Result---*\n" + Config.caption
    });
  } catch (_0x59f612) {
    await _0x378d84.error(_0x59f612 + "\n\ncommand: imagine", _0x59f612, "*_No responce from Server side, Sorry!!_*");
  }
});
async function Draw(_0x1c904e) {
  const _0x12f0c8 = await fetch("https://api-inference.huggingface.co/models/prompthero/openjourney-v2", {
    'method': "POST",
    'headers': {
      'content-type': "application/json",
      'Authorization': "Bearer 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"
    },
    'body': JSON.stringify({
      'inputs': _0x1c904e
    })
  }).then(_0x3ce554 => _0x3ce554.blob());
  const _0x9b25ce = await _0x12f0c8.arrayBuffer();
  return Buffer.from(_0x9b25ce);
}
smd({
  'pattern': "aitts",
  'desc': "Text to Voice Using Eleven Lab Ai",
  'category': 'ai',
  'use': "<Hii, ANITA>",
  'filename': __filename
}, async (_0x239191, _0x3bb446) => {
  await aitts(_0x239191, _0x3bb446 || _0x239191.reply_text);
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
  'use': "<Hii, Astro>",
  'filename': __filename
}, async (_0x2f00a0, _0x3eb644, {
  smd: _0x686c8e
}) => {
  try {
    let _0x27e6a5 = _0x3eb644 ? _0x3eb644 : _0x2f00a0.reply_text;
    if (!_0x27e6a5) {
      return await _0x2f00a0.send("*provide number with msg to send Anonymously.* \n*Example " + (prefix + _0x686c8e) + " 2348039607375,your_Message*", {}, '', _0x2f00a0);
    }
    if (_0x2f00a0.isCreator && _0x27e6a5 === "info") {
      return await _0x2f00a0.reply(isAnnonyMsgAlive == '' ? "*Theres no Anonymous Chat created yet*" : "*Anonymous Chat Recivers*\n_" + isAnnonyMsgAlive + '_');
    }
    const _0x151aa6 = _0x27e6a5.indexOf(',');
    if (_0x151aa6 === -0x1) {
      return await _0x2f00a0.reply("*Invalid format. Please provide both number and Message separated by a comma.*");
    }
    let _0xf5d1e0 = _0x27e6a5.slice(0x0, _0x151aa6).trim() + "@s.whatsapp.net";
    let _0x3ad919 = _0x27e6a5.slice(_0x151aa6 + 0x1).trim();
    let _0x44bdea = (await parsedJid(_0xf5d1e0)) || [];
    if (_0x44bdea[0x0]) {
      const {
        date: _0x53985d,
        time: _0x30fb47
      } = await getDateTime();
      const _0x52baa2 = "anony-msg-" + Math.floor(0x186a0 + Math.random() * 0xdbba0);
      astro_patch_AnonyMsg[_0x52baa2] = new AnonymousMsg();
      let _0x2cd984 = astro_patch_AnonyMsg[_0x52baa2];
      _0x2cd984.id = _0x52baa2;
      _0x2cd984.sender = _0x2f00a0.sender;
      _0x2cd984.reciever = _0x44bdea[0x0];
      _0x2cd984.msgStatus = true;
      _0x2cd984.senderMsg = _0x2f00a0;
      _0x3ad919 = "*ANITA • ᴀɴɴᴏɴʏᴍᴏᴜs ᴍsɢ*\n\n*Msg_Id:* " + _0x2cd984.id + "\n*Date:* _" + _0x53985d + "_\n*Time:* _" + _0x30fb47 + "_\n\n*Message:* " + _0x3ad919 + "\n\n\n" + Config.caption;
      isAnnonyMsgAlive = isAnnonyMsgAlive + ',' + _0x2cd984.reciever;
      await _0x2f00a0.bot.sendMessage(_0x2cd984.reciever, {
        'text': _0x3ad919
      });
      return await _0x2f00a0.reply("*_Anonymous message sent succesfully_*");
    } else {
      return await _0x2f00a0.reply("*_Provided number is not valid!!!_*");
    }
  } catch (_0x58ffa6) {
    await _0x2f00a0.error(_0x58ffa6 + "\n\ncommand: " + _0x686c8e, _0x58ffa6, "*_Can't send annonymously message yet, Sorry!!_*");
  }
});
smd({
  'on': "text"
}, async _0x438ec1 => {
  try {
    if (_0x438ec1.quoted && isAnnonyMsgAlive.includes(_0x438ec1.sender) && _0x438ec1.text.length > 0x2) {
      const _0x83eab5 = _0x438ec1.reply_text.split("\n");
      if (_0x83eab5.length < 0x3) {
        return;
      }
      if (_0x438ec1.reply_text.includes("ANITA• ᴀɴɴᴏɴʏᴍᴏᴜs ᴍsɢ") && _0x83eab5[0x0].includes("ANITA • ᴀɴɴᴏɴʏᴍᴏᴜs ᴍsɢ") && _0x83eab5[0x2].includes('Msg_Id')) {
        let _0x17d1ab = '' + _0x83eab5[0x2].replace("*Msg_Id:* ", '').trim();
        let _0xd41cac = astro_patch_AnonyMsg[_0x17d1ab];
        if (!_0xd41cac) {
          return;
        }
        try {
          if (_0xd41cac) {
            let _0x4056af = _0x438ec1.text.split(',')[0x0].trim();
            if (_0x4056af.toLowerCase().startsWith('reply')) {
              _0xd41cac.howmanyreply += 0x1;
              const _0x28fea2 = _0x438ec1.text.indexOf(',');
              let _0x3b91fe = "*ANITA • ʏᴏᴜʀ ᴀɴᴏɴʏ-ᴍsɢ ʀᴇᴘʟʏ*\n\n*_From @" + _0xd41cac.reciever.split('@')[0x0] + "_*\n*_Msg_Id: " + _0xd41cac.id + "_*\n\n*Message:* " + _0x438ec1.text.slice(_0x28fea2 + 0x1).trim() + "\n\n\n\n" + Config.caption;
              if (_0xd41cac.howmanyreply >= 0x2) {
                isAnnonyMsgAlive = isAnnonyMsgAlive.replace(',' + _0x438ec1.sender, '');
              }
              await _0x438ec1.bot.sendMessage(_0xd41cac.sender, {
                'text': _0x3b91fe,
                'mentions': [_0xd41cac.reciever]
              }, {
                'quoted': _0xd41cac.senderMsg
              });
              if (_0xd41cac.howmanyreply >= 0x2) {
                isAnnonyMsgAlive = isAnnonyMsgAlive.replace(',' + _0x438ec1.sender, '');
                delete astro_patch_AnonyMsg[_0x17d1ab];
              }
              return await _0x438ec1.reply("*_Your Message succesfully deliver to User_* " + (_0xd41cac.howmanyreply == 0x1 ? "\n*you can reply 1 more time*" : '') + " ");
            } else {
              if (_0xd41cac.tellinfo === 0x0) {
                _0xd41cac.tellinfo = 0x1;
                let _0x1db94a = "*Basically, Its an Annonymous Message*\n\n_Msg_Id: " + _0xd41cac.id + "_\n_this message sended by a chatbot_\n_User not wants to expose itself to send that msg_\n\n\n*if you wanna reply to that user,*\n*Send msg by replying to above message*\n*Type like:* reply, Type_your_Message_Here\n*Example:* reply, Can you text me from your number\n\n\n" + Config.caption;
                _0x438ec1.bot.sendMessage(_0xd41cac.reciever, {
                  'text': _0x1db94a
                }, {
                  'quoted': _0x438ec1
                });
              } else if (_0xd41cac.tellinfo === 0x1) {
                _0xd41cac.tellinfo = 0x2;
                _0x438ec1.reply("*Please follow the format if reply to msg*\n*Type like: _reply, Type_your_Message_Here_*");
              }
            }
          }
        } catch (_0x46d7e9) {
          console.log("error : ", _0x46d7e9);
        }
      }
    }
  } catch {}
});
smd({
  'pattern': 'advt',
  'alias': ['advertisement'],
  'category': 'ai',
  'desc': "Advertise of your Message, by sending it to provided nmbr range.",
  'use': "234803xx,Your_text_here",
  'fromMe': true,
  'filename': __filename
}, async (_0x11d01d, _0x2316dd) => {
  try {
    let _0x26a3da = _0x2316dd ? _0x2316dd : _0x11d01d.reply_text;
    if (!_0x26a3da) {
      return await _0x11d01d.reply("*Advertise of your Message*\n*by sending it to provided nmbr range.*\n" + prefix + "advt 234803xx,Your_text_here");
    }
    const _0x3588b3 = _0x26a3da.indexOf(',');
    if (_0x3588b3 === -0x1) {
      return await _0x11d01d.send("*Invalid format. Please provide number and Message separated by a comma.*");
    }
    let _0x317766 = '' + _0x26a3da.slice(0x0, _0x3588b3).trim();
    let _0x19bd5e = _0x26a3da.slice(_0x3588b3 + 0x1).trim() + "\n\n\n" + Config.caption;
    if (!_0x317766.includes('x')) {
      return _0x11d01d.send("*You did not add x in number.*\n*Ex: " + prefix + "advt 234803xx,Your_Message_here*  \n " + Config.caption);
    }
    await _0x11d01d.send("*Sending message to given number range.!*\n*It may take some time, so wait please*");
    var _0x4b1723 = _0x317766.split('x')[0x0];
    var _0x434186 = _0x317766.split('x')[_0x317766.split('x').length - 0x1] ? _0x317766.split('x')[_0x317766.split('x').length - 0x1] : '';
    var _0x40313c = _0x317766.split('x').length - 0x1;
    var _0x363fcc;
    if (_0x40313c == 0x1) {
      _0x363fcc = 0xa;
    } else {
      if (_0x40313c == 0x2) {
        _0x363fcc = 0x64;
      } else {
        if (_0x40313c == 0x3) {
          _0x363fcc = 0x3e8;
        } else {
          if (_0x40313c > 0x3) {
            return await _0x11d01d.send("*Only 3(x) are Allowed in number*");
          }
        }
      }
    }
    let _0x49411d = 0x0;
    let _0x51766a = '';
    var _0x467558 = '';
    for (let _0x46bfb4 = 0x0; _0x46bfb4 < _0x363fcc; _0x46bfb4++) {
      var _0x34eaaa = await _0x11d01d.bot.onWhatsApp('' + _0x4b1723 + _0x46bfb4 + _0x434186 + "@s.whatsapp.net");
      if (_0x34eaaa[0x0]) {
        _0x467558 = _0x34eaaa[0x0].jid;
        if (_0x51766a.includes(_0x467558)) {
          continue;
        }
        await sleep(0x5dc);
        await _0x11d01d.bot.sendMessage(_0x467558, {
          'text': _0x19bd5e
        });
        _0x51766a = _0x51766a + ',' + _0x467558;
        _0x49411d += 0x1;
      }
    }
    return await _0x11d01d.send("*_Advertisement of your Message is Done,_* \n\n*_Message Succesfully sent to " + _0x49411d + " chats_*\nLast_User: " + _0x467558.split('@')[0x0] + "\nSearch_No: " + _0x363fcc + " number searched\n\n\n" + Config.caption);
  } catch (_0x654743) {
    await _0x11d01d.error(_0x654743 + "\n\ncommand: dalle", _0x654743, "*_No responce from Server side, Sorry!!_*");
  }
});
async function processing(_0x1ceb56, _0x4a7a4c) {
  try {
    const _0x25acaf = require("form-data");
    return new Promise(async (_0x2bf77d, _0x2073ba) => {
      Form = new _0x25acaf();
      scheme = "https://inferenceengine.vyro.ai/" + _0x4a7a4c;
      Form.append("model_version", 0x1, {
        'Content-Transfer-Encoding': "binary",
        'contentType': "multipart/form-data; charset=uttf-8"
      });
      Form.append("image", Buffer.from(_0x1ceb56), {
        'filename': _0x4a7a4c + '.jpg',
        'contentType': "image/jpeg"
      });
      Form.submit({
        'url': scheme,
        'host': "inferenceengine.vyro.ai",
        'path': '/' + _0x4a7a4c,
        'protocol': 'https:',
        'headers': {
          'User-Agent': "okhttp/4.9.3",
          'Connection': "Keep-Alive",
          'Accept-Encoding': "gzip"
        }
      }, function (_0x14ece6, _0xc4b476) {
        if (_0x14ece6) {
          _0x2073ba();
        }
        let _0x3c14b9 = [];
        _0xc4b476.on("data", function (_0x300227, _0x3c3e63) {
          _0x3c14b9.push(_0x300227);
        }).on("end", () => {
          _0x2bf77d(Buffer.concat(_0x3c14b9));
        }).on('error', _0x59d1bc => {
          _0x2073ba();
        });
      });
    });
  } catch (_0x1740dd) {
    console.log(_0x1740dd);
    return _0x1ceb56;
  }
}
smd({
  'cmdname': "remini",
  'desc': "enhance image quality!",
  'type': 'ai',
  'filename': __filename
}, async _0x88808e => {
  let _0x381a6a = _0x88808e.image ? _0x88808e : _0x88808e.reply_message;
  if (!_0x381a6a || !_0x381a6a.image) {
    return await _0x88808e.send("*Reply to image, to enhance quality!*");
  }
  try {
    let _0x71b82d = await _0x381a6a.download();
    const _0x3de8d3 = await processing(_0x71b82d, "enhance");
    await _0x88808e.send(_0x3de8d3, {}, "img", _0x88808e);
    _0x71b82d = false;
  } catch (_0x2aeec0) {
    _0x88808e.error(_0x2aeec0 + "\n\nCommand: remini", _0x2aeec0, "*Process Denied :(*");
  }
});
smd({
  'cmdname': "dehaze",
  'desc': "enhance image quality!",
  'type': 'ai',
  'filename': __filename
}, async _0x6babca => {
  let _0x5bc955 = _0x6babca.image ? _0x6babca : _0x6babca.reply_message;
  if (!_0x5bc955 || !_0x5bc955.image) {
    return await _0x6babca.send("*Reply to image, to enhance quality!*");
  }
  try {
    let _0x1b37e0 = await _0x5bc955.download();
    const _0x17a59a = await processing(_0x1b37e0, "dehaze");
    await _0x6babca.send(_0x17a59a, {}, "img", _0x6babca);
    _0x1b37e0 = false;
  } catch (_0x16aade) {
    _0x6babca.error(_0x16aade + "\n\nCommand: dehaze", _0x16aade, "*Process Denied :(*");
  }
});
smd({
  'cmdname': "recolor",
  'desc': "enhance image quality!",
  'type': 'ai',
  'filename': __filename
}, async _0x53706b => {
  let _0x318ba8 = _0x53706b.image ? _0x53706b : _0x53706b.reply_message;
  if (!_0x318ba8 || !_0x318ba8.image) {
    return await _0x53706b.send("*Reply to image, to enhance quality!*");
  }
  try {
    let _0x2733f6 = await _0x318ba8.download();
    const _0x264d7e = await processing(_0x2733f6, 'recolor');
    await _0x53706b.send(_0x264d7e, {}, 'img', _0x53706b);
    _0x2733f6 = false;
  } catch (_0x4673cc) {
    _0x53706b.error(_0x4673cc + "\n\nCommand: recolor", _0x4673cc, "*Process Denied :(*");
  }
});
smd({
  'pattern': "blackbox",
  'desc': "Get information and sources for a given text from Blackbox API.",
  'category': 'ai',
  'filename': __filename,
  'use': "<text>"
}, async (_0x32ecc7, _0x5c5d5e) => {
  try {
    const _0x1755cc = _0x5c5d5e.trim();
    if (!_0x1755cc) {
      return await _0x32ecc7.send("*_Please provide some text to query Blackbox._*");
    }
    const _0x6f49da = "https://aemt.me/blackbox?text=" + encodeURIComponent(_0x1755cc);
    const _0x272afb = await axios.get(_0x6f49da, {
      'headers': {
        'accept': 'application/json'
      }
    });
    if (!_0x272afb.data || !_0x272afb.data.result) {
      return await _0x32ecc7.reply("*Failed to fetch information from Blackbox.*");
    }
    const {
      result: _0x5b3635
    } = _0x272afb.data;
    const _0x4c980e = "\nOk here we Go!: " + _0x5b3635;
    return await _0x32ecc7.send(_0x4c980e);
  } catch (_0x47de24) {
    console.error("Error in Blackbox command:", _0x47de24);
    await _0x32ecc7.error(_0x47de24 + "\n\nCommand: blackbox", _0x47de24, "*Failed to fetch information from Blackbox.*");
  }
});