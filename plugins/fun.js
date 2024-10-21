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
const {
  smd
} = require("../lib");
const fetch = require("node-fetch");
async function randomeFunfacts(_0x21c054) {
  try {
    if (_0x21c054 === "question") {
      return await random_question();
    } else {
      if (_0x21c054 === "truth") {
        return await truth();
      } else {
        if (_0x21c054 === "dare") {
          return await dare();
        } else {
          if (_0x21c054 === "joke") {
            const _0x30fc00 = await (await fetch("https://official-joke-api.appspot.com/random_joke")).json();
            return "*Joke :* " + _0x30fc00.setup + "\n*Punchline:*  " + _0x30fc00.punchline;
          } else {
            if (_0x21c054 === "joke2") {
              const _0x4944e8 = await (await fetch("https://v2.jokeapi.dev/joke/Any?type=single")).json();
              return "*joke :* " + _0x4944e8.joke;
            } else {
              if (_0x21c054 === "fact") {
                const {
                  data: _0xaa547b
                } = await axios.get("https://nekos.life/api/v2/fact");
                return "*Fact:* " + _0xaa547b.fact;
              } else {
                if (_0x21c054 === "quotes") {
                  const {
                    data: _0x15899d
                  } = await axios.get('https://favqs.com/api/qotd');
                  return "╔════◇\n║ *🎗️Content:* " + _0x15899d.quote.body + "\n║ *👤Author:* " + _0x15899d.quote.author + "\n║\n╚════════════╝";
                }
              }
            }
          }
        }
      }
    }
  } catch (_0x46a10e) {
    msg.error(_0x46a10e);
    console.log("./lib/asta.js/randomeFunfacts()\n", _0x46a10e);
  }
}
smd({
  'pattern': "rizz",
  'desc': "Get a random pickup line.",
  'category': "fun",
  'filename': __filename
}, async _0x2d4bf3 => {
  try {
    const _0x4d0fee = await fetch("https://api.popcat.xyz/pickuplines");
    if (!_0x4d0fee.ok) {
      return await _0x2d4bf3.send("*_Error: " + _0x4d0fee.status + " " + _0x4d0fee.statusText + '_*');
    }
    const _0x586124 = await _0x4d0fee.json();
    const {
      pickupline: _0x492b04,
      contributor: _0x135a38
    } = _0x586124;
    const _0x172f3a = '' + _0x492b04;
    await _0x2d4bf3.send(_0x172f3a);
  } catch (_0x116e75) {
    await _0x2d4bf3.error(_0x116e75 + "\n\ncommand: rizz", _0x116e75);
  }
});
smd({
  'cmdname': "question",
  'info': "Random Question.",
  'type': "fun",
  'filename': __filename
}, async (_0x30a558, _0x5f3306, {
  smd: _0x47434b
}) => {
  try {
    await _0x30a558.reply(await randomeFunfacts(_0x47434b));
  } catch (_0x47618b) {
    await _0x30a558.error(_0x47618b + "\n\ncommand: " + _0x47434b, _0x47618b);
  }
});
smd({
  'cmdname': "truth",
  'info': "truth and dare(truth game.).",
  'type': "fun",
  'filename': __filename
}, async (_0x3f9bd3, _0x2030db, {
  smd: _0x46ec84
}) => {
  try {
    await _0x3f9bd3.reply(await randomeFunfacts(_0x46ec84));
  } catch (_0x574af6) {
    await _0x3f9bd3.error(_0x574af6 + "\n\ncommand: " + _0x46ec84, _0x574af6);
  }
});
smd({
  'cmdname': 'dare',
  'info': "truth and dare(dare game.).",
  'type': 'fun',
  'filename': __filename
}, async (_0x5b5e3b, _0x4b8fcd, {
  smd: _0x3ad622
}) => {
  try {
    await _0x5b5e3b.reply(await randomeFunfacts(_0x3ad622));
  } catch (_0x45f8cf) {
    await _0x5b5e3b.error(_0x45f8cf + "\n\ncommand: " + _0x3ad622, _0x45f8cf);
  }
});
smd({
  'cmdname': "joke",
  'info': "Sends Joke in chat.",
  'type': "fun",
  'filename': __filename
}, async (_0x2fe379, _0x1f5110, {
  smd: _0x458eb9
}) => {
  try {
    await _0x2fe379.reply(await randomeFunfacts(_0x458eb9));
  } catch (_0x2398fb) {
    await _0x2fe379.error(_0x2398fb + "\n\ncommand: " + _0x458eb9, _0x2398fb);
  }
});
smd({
  'cmdname': "joke2",
  'info': "Sends Joke in chat.",
  'type': "fun",
  'filename': __filename
}, async (_0x5daeeb, _0x49cb50, {
  smd: _0x27a936
}) => {
  try {
    await _0x5daeeb.reply(await randomeFunfacts(_0x27a936));
  } catch (_0x2d9040) {
    await _0x5daeeb.error(_0x2d9040 + "\n\ncommand: " + _0x27a936, _0x2d9040);
  }
});
smd({
  'cmdname': "fact",
  'info': "Sends fact in chat.",
  'type': "fun",
  'filename': __filename
}, async (_0x43ecde, _0x4aef64, {
  smd: _0x36a82b
}) => {
  try {
    await _0x43ecde.reply(await randomeFunfacts(_0x36a82b));
  } catch (_0xb156b6) {
    await _0x43ecde.error(_0xb156b6 + "\n\ncommand: " + _0x36a82b, _0xb156b6);
  }
});
smd({
  'cmdname': "quotes",
  'info': "Sends quotes in chat.",
  'type': "fun",
  'filename': __filename
}, async (_0x11a5d1, _0x269565, {
  smd: _0x45b4ce
}) => {
  try {
    await _0x11a5d1.reply(await randomeFunfacts(_0x45b4ce));
  } catch (_0xc89aeb) {
    await _0x11a5d1.error(_0xc89aeb + "\n\ncommand: " + _0x45b4ce, _0xc89aeb);
  }
});
smd({
  'cmdname': "define",
  'info': "urban dictionary.",
  'type': 'fun',
  'filename': __filename
}, async (_0x4680a1, _0x53425a) => {
  try {
    let _0x4fc5e7 = _0x53425a ? _0x53425a : _0x4680a1.reply_text;
    if (!_0x4fc5e7) {
      return await _0x4680a1.send("*_Hey " + _0x4680a1.senderName + ", please provide a text!_*");
    }
    let {
      data: _0x4affd0
    } = await axios.get("http://api.urbandictionary.com/v0/define?term=" + _0x4fc5e7);
    var _0x8b4a68 = _0x4affd0 ? "*Word:* ```" + _0x4fc5e7 + "``` \n*Definition:* ```" + _0x4affd0.list[0x0].definition.replace(/\[/g, '').replace(/\]/g, '') + "``` \n*Example:* ```" + _0x4affd0.list[0x0].example.replace(/\[/g, '').replace(/\]/g, '') + "```" : "*_No results found for given word_*";
    return _0x4680a1.reply(_0x8b4a68);
  } catch (_0x2fa566) {
    await _0x4680a1.error(_0x2fa566 + "\n\ncommand: define", _0x2fa566, "*No result for:* ```" + text + "```");
  }
});
smd({
  'pattern': "fakeinfo",
  'fromMe': false,
  'desc': "Get fake information",
  'type': "fun"
}, async (_0x578f94, _0xd67f5b) => {
  try {
    const _0x407632 = await axios.get("https://api.maher-zubair.tech/misc/fakeinfo");
    const _0xc46b8c = _0x407632.data.result.results[0x0];
    const _0x2075da = "\n👤 *Name:* " + _0xc46b8c.name.title + " " + _0xc46b8c.name.first + " " + _0xc46b8c.name.last + "\n📅 *Date of Birth:* " + new Date(_0xc46b8c.dob.date).toLocaleDateString() + "\n📞 *Phone:* " + _0xc46b8c.phone + "\n📧 *Email:* " + _0xc46b8c.email + "\n🌐 *Location:* " + _0xc46b8c.location.city + ", " + _0xc46b8c.location.state + ", " + _0xc46b8c.location.country + "\n🔑 *Username:* " + _0xc46b8c.login.username + "\n📷 *Profile Picture:* [View Image](" + _0xc46b8c.picture.large + ")\n       ";
    await _0x578f94.send(_0x2075da, {
      'quoted': _0x578f94.data
    });
  } catch (_0x50bb10) {
    console.error("Error fetching fake information:", _0x50bb10);
    await _0x578f94.send("_Failed to fetch fake information._", {
      'quoted': _0x578f94.data
    });
  }
});
smd({
  'pattern': 'insult',
  'fromMe': false,
  'desc': "Get insulted",
  'type': 'fun'
}, async (_0x3ce689, _0x3503cf) => {
  try {
    const _0xae961b = await axios.get('https://api.maher-zubair.tech/misc/insult');
    const _0x47a8f8 = _0xae961b.data.result;
    await _0x3ce689.send(_0x47a8f8, {
      'quoted': _0x3ce689.data
    });
  } catch (_0xb2b03e) {
    console.error("Error fetching insult:", _0xb2b03e);
    await _0x3ce689.send("_Failed to fetch insult._", {
      'quoted': _0x3ce689.data
    });
  }
});
smd({
  'pattern': "lines",
  'fromMe': false,
  'desc': "Get a nice message",
  'type': "fun"
}, async (_0x286010, _0x5bffdb) => {
  try {
    const _0x18bc2e = await axios.get('https://api.maher-zubair.tech/misc/lines');
    const _0x21fb2a = _0x18bc2e.data.result;
    await _0x286010.send(_0x21fb2a, {
      'quoted': _0x286010.data
    });
  } catch (_0x3e4787) {
    console.error("Error fetching message:", _0x3e4787);
    await _0x286010.send("_Failed to fetch message._", {
      'quoted': _0x286010.data
    });
  }
});