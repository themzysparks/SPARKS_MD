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

const Config = require('../config');
let {
  sendGImages,
  smd
} = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');
const {
  fetchJson,
  getBuffer
} = require("../lib/");
async function sendAnime(_0x25d7ae, _0xebc746, _0x12e9e6, _0x1b0c05 = '') {
  try {
    if (_0x12e9e6 === "waifu" || _0x12e9e6 === "neko" || _0x12e9e6 === "megumin") {
      let _0x1395db = _0x1b0c05.split('|')[0x0] || '';
      let _0x432e4f = _0x1b0c05.split('|')[0x1] || '1';
      let _0x1255d3 = _0x1b0c05.split('|')[0x1] ? '' : " *" + _0x12e9e6 + ",Here we go😊!!!!*";
      let _0x4a6ceb = _0x1395db == "nsfw" ? "https://api.waifu.pics/nsfw/" + (_0x12e9e6 === "megumin" ? "trap" : "waifu") : "https://api.waifu.pics/sfw/" + _0x12e9e6;
      for (let _0x130e45 = 0x0; _0x130e45 < _0x432e4f; _0x130e45++) {
        let _0xb48c43 = await (await fetch(_0x4a6ceb)).json();
        await _0x25d7ae.bot.sendMessage(_0xebc746.chat, {
          'image': {
            'url': _0xb48c43.url
          },
          'caption': _0x1255d3
        }, {
          'quoted': _0xebc746
        });
      }
    } else {
      if (_0x12e9e6 === "loli" || _0x12e9e6 === "foxgirl") {
        let _0x4d5f71 = _0x12e9e6 === "loli" ? "https://waifu.pics/api/sfw/shinobu" : "https://nekos.life/api/v2/img/fox_girl";
        let _0xacaf95 = await axios.get(_0x4d5f71);
        await _0x25d7ae.bot.sendMessage(_0xebc746.chat, {
          'image': {
            'url': _0xacaf95.data.url
          }
        }, {
          'quoted': _0xebc746
        });
      } else {
        if (_0x12e9e6 === "demon" || _0x12e9e6 === "naruto") {
          let _0x47ada7 = "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/" + (_0x12e9e6 === 'demon' ? 'Demonslayer' : "Naruto") + "/video.json";
          const _0x138b87 = await fetchJson(_0x47ada7);
          const _0x1b9786 = _0x138b87.result[Math.floor(Math.random() * _0x138b87.result.length)].url;
          await _0x25d7ae.bot.sendMessage(_0xebc746.chat, {
            'video': {
              'url': _0x1b9786
            },
            'caption': "*Here we go😊!!!!*"
          });
        } else {
          if (_0x12e9e6 === "animenews") {
            let _0x2a44d3 = await axios.get("https://newsapi.org/v2/everything?q=" + _0x1b0c05 + "&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8");
            let _0xff8616 = _0x2a44d3.data.articles;
            _0xff8616.map(async (_0x44a96a, _0x1e4be5) => {
              try {
                _0x25d7ae.bot.sendMessage(_0xebc746.chat, {
                  'image': {
                    'url': _0x44a96a.urlToImage
                  },
                  'caption': "*Title🔰:* " + _0x44a96a.title + "\n\n*Content🧩:* " + _0x44a96a.content + "\n*Author📌:* " + _0x44a96a.author + "\n*Source♦️:* " + _0x44a96a.source.name + "\n*Created On☘️:* " + _0x44a96a.publishedAt + "\n*More on✨:* " + _0x44a96a.url + "\n\n" + Config.caption + '*'
                }, {
                  'quoted': _0xebc746
                });
              } catch (_0x25dc82) {}
            });
          }
        }
      }
    }
  } catch (_0x11197f) {
    console.log("./commands/Anime.js/sendAnime()\n", _0x11197f);
    await _0xebc746.error(_0x11197f);
  }
}
smd({
  'pattern': "waifu",
  'desc': "To get Waifu Random Pics",
  'category': 'anime',
  'filename': __filename
}, async (_0x44837e, _0x1fb1a5, {
  cmdName: _0xca53fd
}) => {
  try {
    return await sendAnime(_0x44837e, _0x44837e, "waifu", _0x1fb1a5);
  } catch {}
});
smd({
  'pattern': "neko",
  'category': "anime",
  'desc': "Sends a Neko Image in chat",
  'filename': __filename
}, async (_0x3a1092, _0x3fad7f, {
  cmdName: _0x312db5
}) => {
  try {
    return await sendAnime(_0x3a1092, _0x3a1092, "neko", _0x3fad7f);
  } catch {}
});
smd({
  'pattern': "megumin",
  'desc': "To get Waifu Random Pics",
  'category': 'anime',
  'filename': __filename
}, async (_0x1ba563, _0x376ceb, {
  cmdName: _0xd06796
}) => {
  try {
    return await sendAnime(_0x1ba563, _0x1ba563, "megumin", _0x376ceb);
  } catch {}
});
smd({
  'pattern': "loli",
  'category': "anime",
  'filename': __filename,
  'desc': "Sends image of loli."
}, async _0x6e3bb7 => {
  try {
    return await sendAnime(_0x6e3bb7, _0x6e3bb7, "loli");
  } catch {}
});
smd({
  'pattern': "foxgirl",
  'category': "anime",
  'desc': "Sends image of Fox Girl Anime.",
  'filename': __filename
}, async _0xe7c4f6 => {
  try {
    return await sendAnime(_0xe7c4f6, _0xe7c4f6, 'foxgirl');
  } catch {}
});
smd({
  'pattern': 'demon',
  'alias': ['ds'],
  'desc': "To get Naruto Random Videos",
  'category': "anime",
  'filename': __filename
}, async _0x169bf3 => {
  try {
    return await sendAnime(_0x169bf3, _0x169bf3, "demon");
  } catch {}
});
smd({
  'pattern': 'naruto',
  'desc': "To get Naruto Random Videos",
  'category': "anime",
  'filename': __filename
}, async _0x20e9e8 => {
  try {
    return await sendAnime(_0x20e9e8, _0x20e9e8, "naruto");
  } catch {}
});
smd({
  'pattern': "pokepic",
  'category': "anime",
  'filename': __filename,
  'desc': "Sends image of pokemon."
}, async (_0x3fd428, _0x305878) => {
  try {
    return await sendGImages(_0x3fd428, _0x305878 + "Pokemon Pics only HD ", "*---「 Poke Pic 」---*", _0x305878);
  } catch {}
});
smd({
  'pattern': "animewall",
  'category': "anime",
  'desc': "Anime Wallpaper Random",
  'filename': __filename
}, async (_0x3884a4, _0x1ab303) => {
  try {
    return await sendGImages(_0x3884a4, _0x1ab303 + "anime wallpaper for desktop full hd", "*---「 Anime Wallpaper 」---*", _0x1ab303);
  } catch {}
});
smd({
  'pattern': 'pokemon',
  'category': 'anime',
  'filename': __filename,
  'desc': "Sends info of pokemon in current chat."
}, async (_0x35de19, _0x2d5175) => {
  try {
    if (!_0x2d5175) {
      return _0x35de19.reply("*Uhh Please Give Me Poki Name/num*");
    }
    try {
      let {
        data: _0x161bd2
      } = await axios.get("https://pokeapi.co/api/v2/pokemon/" + _0x2d5175);
      if (!_0x161bd2.name) {
        return _0x35de19.reply("❌ Could not found any pokemon with that name");
      }
      let _0x46fe1f = "*•Name: " + _0x161bd2.name + "*\n*•Pokedex ID: " + _0x161bd2.id + "*\n*•Height: " + _0x161bd2.height + "*\n*•Weight: " + _0x161bd2.weight + "*\n*•Abilities: " + _0x161bd2.abilities[0x0].ability.name + ", " + _0x161bd2.abilities[0x1].ability.name + "*\n*•Base Experience: " + _0x161bd2.base_experience + "*\n*•Type: " + _0x161bd2.types[0x0].type.name + "*\n*•Base Stat: " + _0x161bd2.stats[0x0].base_stat + "*\n*•Attack: " + _0x161bd2.stats[0x1].base_stat + "*\n*•Defense: " + _0x161bd2.stats[0x2].base_stat + "*\n*•Special Attack: " + _0x161bd2.stats[0x3].base_stat + "*\n*•Special Defense:" + _0x161bd2.stats[0x4].base_stat + "*\n*•Speed: " + _0x161bd2.stats[0x5].base_stat + "*\n";
      return await Suhail.bot.sendMessage(_0x35de19.jid, {
        'image': {
          'url': _0x161bd2.sprites.front_default
        },
        'caption': _0x46fe1f
      }, {
        'quoted': _0x35de19
      });
    } catch (_0x2400b9) {
      _0x35de19.reply("*_Ahh,Couldn't found any pokemon._*");
    }
  } catch {}
});
smd({
  'pattern': "kaneki",
  'desc': "Sends a random image of Kaneki from Tokyo Ghoul.",
  'category': "anime"
}, async _0x43647a => {
  try {
    const _0x4ca6bd = await fetch("https://api.maher-zubair.tech/anime/kaneki");
    if (!_0x4ca6bd.ok) {
      return await _0x43647a.send("*_Error: " + _0x4ca6bd.status + " " + _0x4ca6bd.statusText + '_*');
    }
    const _0x267b14 = await _0x4ca6bd.json();
    if (_0x267b14.status !== 0xc8) {
      return await _0x43647a.send("*_Error: " + _0x267b14.status + " - " + (_0x267b14.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x436593
    } = _0x267b14;
    if (!_0x436593) {
      return await _0x43647a.send("*_No image found!_*");
    }
    await _0x43647a.bot.sendFromUrl(_0x43647a.from, _0x436593, "Random image of Kaneki from Tokyo Ghoul.", _0x43647a, {}, "image");
  } catch (_0x16fba7) {
    await _0x43647a.error(_0x16fba7 + "\n\ncommand: kaneki", _0x16fba7, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': 'akira',
  'desc': "Sends a random image of Akira.",
  'category': "anime"
}, async _0x5d5429 => {
  try {
    const _0x2d3763 = await fetch("https://api.maher-zubair.tech/anime/akira");
    if (!_0x2d3763.ok) {
      return await _0x5d5429.send("*_Error: " + _0x2d3763.status + " " + _0x2d3763.statusText + '_*');
    }
    const _0x34f0e3 = await _0x2d3763.json();
    if (_0x34f0e3.status !== 0xc8) {
      return await _0x5d5429.send("*_Error: " + _0x34f0e3.status + " - " + (_0x34f0e3.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x1919e2
    } = _0x34f0e3;
    if (!_0x1919e2) {
      return await _0x5d5429.send("*_No image found!_*");
    }
    await _0x5d5429.bot.sendFromUrl(_0x5d5429.from, _0x1919e2, "Random image of Akira.", _0x5d5429, {}, "image");
  } catch (_0x5c3aa4) {
    await _0x5d5429.error(_0x5c3aa4 + "\n\ncommand: akira", _0x5c3aa4, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "anna",
  'desc': "Sends a random image of Anna.",
  'category': 'anime'
}, async _0x48cf6f => {
  try {
    const _0x44c920 = await fetch("https://api.maher-zubair.tech/anime/anna");
    if (!_0x44c920.ok) {
      return await _0x48cf6f.send("*_Error: " + _0x44c920.status + " " + _0x44c920.statusText + '_*');
    }
    const _0x5ee074 = await _0x44c920.json();
    if (_0x5ee074.status !== 0xc8) {
      return await _0x48cf6f.send("*_Error: " + _0x5ee074.status + " - " + (_0x5ee074.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x42f689
    } = _0x5ee074;
    if (!_0x42f689) {
      return await _0x48cf6f.send("*_No image found!_*");
    }
    await _0x48cf6f.bot.sendFromUrl(_0x48cf6f.from, _0x42f689, "Random image of Anna.", _0x48cf6f, {}, "image");
  } catch (_0x3c563c) {
    await _0x48cf6f.error(_0x3c563c + "\n\ncommand: anna", _0x3c563c, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "asuna",
  'desc': "Sends a random image of Asuna.",
  'category': "anime"
}, async _0x4d3f7e => {
  try {
    const _0x5c11da = await fetch("https://api.maher-zubair.tech/anime/asuna");
    if (!_0x5c11da.ok) {
      return await _0x4d3f7e.send("*_Error: " + _0x5c11da.status + " " + _0x5c11da.statusText + '_*');
    }
    const _0x37317b = await _0x5c11da.json();
    if (_0x37317b.status !== 0xc8) {
      return await _0x4d3f7e.send("*_Error: " + _0x37317b.status + " - " + (_0x37317b.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x1d6d7a
    } = _0x37317b;
    if (!_0x1d6d7a) {
      return await _0x4d3f7e.send("*_No image found!_*");
    }
    await _0x4d3f7e.bot.sendFromUrl(_0x4d3f7e.from, _0x1d6d7a, "Random image of Asuna.", _0x4d3f7e, {}, "image");
  } catch (_0x154969) {
    await _0x4d3f7e.error(_0x154969 + "\n\ncommand: asuna", _0x154969, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "anna",
  'desc': "Sends a random image of Anna.",
  'category': "anime"
}, async _0xeb936d => {
  try {
    const _0x44687f = await fetch("https://api.maher-zubair.tech/anime/anna");
    if (!_0x44687f.ok) {
      return await _0xeb936d.send("*_Error: " + _0x44687f.status + " " + _0x44687f.statusText + '_*');
    }
    const _0x362e3e = await _0x44687f.json();
    if (_0x362e3e.status !== 0xc8) {
      return await _0xeb936d.send("*_Error: " + _0x362e3e.status + " - " + (_0x362e3e.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x1fcbb0
    } = _0x362e3e;
    if (!_0x1fcbb0) {
      return await _0xeb936d.send("*_No image found!_*");
    }
    await _0xeb936d.bot.sendFromUrl(_0xeb936d.from, _0x1fcbb0, "Random image of Anna.", _0xeb936d, {}, "image");
  } catch (_0x4e80d4) {
    await _0xeb936d.error(_0x4e80d4 + "\n\ncommand: anna", _0x4e80d4, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': 'asuna',
  'desc': "Sends a random image of Asuna.",
  'category': 'anime'
}, async _0x3b368f => {
  try {
    const _0x304779 = await fetch("https://api.maher-zubair.tech/anime/asuna");
    if (!_0x304779.ok) {
      return await _0x3b368f.send("*_Error: " + _0x304779.status + " " + _0x304779.statusText + '_*');
    }
    const _0x361a59 = await _0x304779.json();
    if (_0x361a59.status !== 0xc8) {
      return await _0x3b368f.send("*_Error: " + _0x361a59.status + " - " + (_0x361a59.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x2ab21d
    } = _0x361a59;
    if (!_0x2ab21d) {
      return await _0x3b368f.send("*_No image found!_*");
    }
    await _0x3b368f.bot.sendFromUrl(_0x3b368f.from, _0x2ab21d, "Random image of Asuna.", _0x3b368f, {}, "image");
  } catch (_0x3df622) {
    await _0x3b368f.error(_0x3df622 + "\n\ncommand: asuna", _0x3df622, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': 'boruto',
  'desc': "Sends a random image of Boruto.",
  'category': "anime"
}, async _0x1a51b4 => {
  try {
    const _0x335d76 = await fetch("https://api.maher-zubair.tech/anime/boruto");
    if (!_0x335d76.ok) {
      return await _0x1a51b4.send("*_Error: " + _0x335d76.status + " " + _0x335d76.statusText + '_*');
    }
    const _0x17154d = await _0x335d76.json();
    if (_0x17154d.status !== 0xc8) {
      return await _0x1a51b4.send("*_Error: " + _0x17154d.status + " - " + (_0x17154d.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x132cd8
    } = _0x17154d;
    if (!_0x132cd8) {
      return await _0x1a51b4.send("*_No image found!_*");
    }
    await _0x1a51b4.bot.sendFromUrl(_0x1a51b4.from, _0x132cd8, "Random image of Boruto.", _0x1a51b4, {}, 'image');
  } catch (_0x38f105) {
    await _0x1a51b4.error(_0x38f105 + "\n\ncommand: boruto", _0x38f105, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "chiho",
  'desc': "Sends a random image of Chiho.",
  'category': "anime"
}, async _0xb9fa96 => {
  try {
    const _0x334f93 = await fetch("https://api.maher-zubair.tech/anime/chiho");
    if (!_0x334f93.ok) {
      return await _0xb9fa96.send("*_Error: " + _0x334f93.status + " " + _0x334f93.statusText + '_*');
    }
    const _0xdf5bde = await _0x334f93.json();
    if (_0xdf5bde.status !== 0xc8) {
      return await _0xb9fa96.send("*_Error: " + _0xdf5bde.status + " - " + (_0xdf5bde.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x2400f8
    } = _0xdf5bde;
    if (!_0x2400f8) {
      return await _0xb9fa96.send("*_No image found!_*");
    }
    await _0xb9fa96.bot.sendFromUrl(_0xb9fa96.from, _0x2400f8, "Random image of Chiho.", _0xb9fa96, {}, "image");
  } catch (_0x51c2b3) {
    await _0xb9fa96.error(_0x51c2b3 + "\n\ncommand: chiho", _0x51c2b3, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "eba",
  'desc': "Sends a random image of Eba.",
  'category': "anime"
}, async _0x36a883 => {
  try {
    const _0x34ea2c = await fetch("https://api.maher-zubair.tech/anime/eba");
    if (!_0x34ea2c.ok) {
      return await _0x36a883.send("*_Error: " + _0x34ea2c.status + " " + _0x34ea2c.statusText + '_*');
    }
    const _0x3cd584 = await _0x34ea2c.json();
    if (_0x3cd584.status !== 0xc8) {
      return await _0x36a883.send("*_Error: " + _0x3cd584.status + " - " + (_0x3cd584.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x5722b7
    } = _0x3cd584;
    if (!_0x5722b7) {
      return await _0x36a883.send("*_No image found!_*");
    }
    await _0x36a883.bot.sendFromUrl(_0x36a883.from, _0x5722b7, "Random image of Eba.", _0x36a883, {}, 'image');
  } catch (_0x49ece4) {
    await _0x36a883.error(_0x49ece4 + "\n\ncommand: eba", _0x49ece4, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "elaina",
  'desc': "Sends a random image of Elaina.",
  'category': "anime"
}, async _0x338853 => {
  try {
    const _0x118730 = await fetch("https://api.maher-zubair.tech/anime/elaina");
    if (!_0x118730.ok) {
      return await _0x338853.send("*_Error: " + _0x118730.status + " " + _0x118730.statusText + '_*');
    }
    const _0x1a00cf = await _0x118730.json();
    if (_0x1a00cf.status !== 0xc8) {
      return await _0x338853.send("*_Error: " + _0x1a00cf.status + " - " + (_0x1a00cf.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x4acd72
    } = _0x1a00cf;
    if (!_0x4acd72) {
      return await _0x338853.send("*_No image found!_*");
    }
    await _0x338853.bot.sendFromUrl(_0x338853.from, _0x4acd72, "Random image of Elaina.", _0x338853, {}, "image");
  } catch (_0x4d9a50) {
    await _0x338853.error(_0x4d9a50 + "\n\ncommand: elaina", _0x4d9a50, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "ezra",
  'desc': "Sends a random image of Ezra.",
  'category': "anime"
}, async _0x425f25 => {
  try {
    const _0x474918 = await fetch("https://api.maher-zubair.tech/anime/erza");
    if (!_0x474918.ok) {
      return await _0x425f25.send("*_Error: " + _0x474918.status + " " + _0x474918.statusText + '_*');
    }
    const _0x16e331 = await _0x474918.json();
    if (_0x16e331.status !== 0xc8) {
      return await _0x425f25.send("*_Error: " + _0x16e331.status + " - " + (_0x16e331.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x2759f6
    } = _0x16e331;
    if (!_0x2759f6) {
      return await _0x425f25.send("*_No image found!_*");
    }
    await _0x425f25.bot.sendFromUrl(_0x425f25.from, _0x2759f6, "Random image of Ezra.", _0x425f25, {}, "image");
  } catch (_0x47c301) {
    await _0x425f25.error(_0x47c301 + "\n\ncommand: ezra", _0x47c301, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "inori",
  'desc': "Sends a random image of Inori.",
  'category': 'anime'
}, async _0x5cc429 => {
  try {
    const _0x1933d4 = await fetch('https://api.maher-zubair.tech/anime/inori');
    if (!_0x1933d4.ok) {
      return await _0x5cc429.send("*_Error: " + _0x1933d4.status + " " + _0x1933d4.statusText + '_*');
    }
    const _0x435271 = await _0x1933d4.json();
    if (_0x435271.status !== 0xc8) {
      return await _0x5cc429.send("*_Error: " + _0x435271.status + " - " + (_0x435271.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x3fcc0b
    } = _0x435271;
    if (!_0x3fcc0b) {
      return await _0x5cc429.send("*_No image found!_*");
    }
    await _0x5cc429.bot.sendFromUrl(_0x5cc429.from, _0x3fcc0b, "Random image of Inori.", _0x5cc429, {}, "image");
  } catch (_0xb372fc) {
    await _0x5cc429.error(_0xb372fc + "\n\ncommand: inori", _0xb372fc, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "itachi",
  'desc': "Sends a random image of Itachi.",
  'category': "anime"
}, async _0x467bea => {
  try {
    const _0x5f457b = await fetch("https://api.maher-zubair.tech/anime/itachi");
    if (!_0x5f457b.ok) {
      return await _0x467bea.send("*_Error: " + _0x5f457b.status + " " + _0x5f457b.statusText + '_*');
    }
    const _0x42e9ac = await _0x5f457b.json();
    if (_0x42e9ac.status !== 0xc8) {
      return await _0x467bea.send("*_Error: " + _0x42e9ac.status + " - " + (_0x42e9ac.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x530a84
    } = _0x42e9ac;
    if (!_0x530a84) {
      return await _0x467bea.send("*_No image found!_*");
    }
    await _0x467bea.bot.sendFromUrl(_0x467bea.from, _0x530a84, "Random image of Itachi.", _0x467bea, {}, 'image');
  } catch (_0x4b9ce5) {
    await _0x467bea.error(_0x4b9ce5 + "\n\ncommand: itachi", _0x4b9ce5, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "itori",
  'desc': "Sends a random image of Itori.",
  'category': "anime"
}, async _0x48b402 => {
  try {
    const _0x4b250f = await fetch("https://api.maher-zubair.tech/anime/itori");
    if (!_0x4b250f.ok) {
      return await _0x48b402.send("*_Error: " + _0x4b250f.status + " " + _0x4b250f.statusText + '_*');
    }
    const _0x12f583 = await _0x4b250f.json();
    if (_0x12f583.status !== 0xc8) {
      return await _0x48b402.send("*_Error: " + _0x12f583.status + " - " + (_0x12f583.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x5dd4b9
    } = _0x12f583;
    if (!_0x5dd4b9) {
      return await _0x48b402.send("*_No image found!_*");
    }
    await _0x48b402.bot.sendFromUrl(_0x48b402.from, _0x5dd4b9, "Random image of Itori.", _0x48b402, {}, "image");
  } catch (_0xb139f6) {
    await _0x48b402.error(_0xb139f6 + "\n\ncommand: itori", _0xb139f6, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "kaga",
  'desc': "Sends a random image of Kaga.",
  'category': 'anime'
}, async _0x2e562b => {
  try {
    const _0x4ae68a = await fetch('https://api.maher-zubair.tech/anime/kaga');
    if (!_0x4ae68a.ok) {
      return await _0x2e562b.send("*_Error: " + _0x4ae68a.status + " " + _0x4ae68a.statusText + '_*');
    }
    const _0x520fce = await _0x4ae68a.json();
    if (_0x520fce.status !== 0xc8) {
      return await _0x2e562b.send("*_Error: " + _0x520fce.status + " - " + (_0x520fce.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x46fc56
    } = _0x520fce;
    if (!_0x46fc56) {
      return await _0x2e562b.send("*_No image found!_*");
    }
    await _0x2e562b.bot.sendFromUrl(_0x2e562b.from, _0x46fc56, "Random image of Kaga.", _0x2e562b, {}, "image");
  } catch (_0x539504) {
    await _0x2e562b.error(_0x539504 + "\n\ncommand: kaga", _0x539504, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "kaori",
  'desc': "Sends a random image of Kaori.",
  'category': 'anime'
}, async _0x466422 => {
  try {
    const _0x2e91c3 = await fetch("https://api.maher-zubair.tech/anime/kaori");
    if (!_0x2e91c3.ok) {
      return await _0x466422.send("*_Error: " + _0x2e91c3.status + " " + _0x2e91c3.statusText + '_*');
    }
    const _0x59dd97 = await _0x2e91c3.json();
    if (_0x59dd97.status !== 0xc8) {
      return await _0x466422.send("*_Error: " + _0x59dd97.status + " - " + (_0x59dd97.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x2e8916
    } = _0x59dd97;
    if (!_0x2e8916) {
      return await _0x466422.send("*_No image found!_*");
    }
    await _0x466422.bot.sendFromUrl(_0x466422.from, _0x2e8916, "Random image of Kaori.", _0x466422, {}, 'image');
  } catch (_0x3a8a3e) {
    await _0x466422.error(_0x3a8a3e + "\n\ncommand: kaori", _0x3a8a3e, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "kotori",
  'desc': "Sends a random image of Kotori.",
  'category': "anime"
}, async _0x21e22c => {
  try {
    const _0x38b839 = await fetch("https://api.maher-zubair.tech/anime/kotori");
    if (!_0x38b839.ok) {
      return await _0x21e22c.send("*_Error: " + _0x38b839.status + " " + _0x38b839.statusText + '_*');
    }
    const _0x48ea37 = await _0x38b839.json();
    if (_0x48ea37.status !== 0xc8) {
      return await _0x21e22c.send("*_Error: " + _0x48ea37.status + " - " + (_0x48ea37.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x45aaa2
    } = _0x48ea37;
    if (!_0x45aaa2) {
      return await _0x21e22c.send("*_No image found!_*");
    }
    await _0x21e22c.bot.sendFromUrl(_0x21e22c.from, _0x45aaa2, "Random image of Kotori.", _0x21e22c, {}, "image");
  } catch (_0x17d9a1) {
    await _0x21e22c.error(_0x17d9a1 + "\n\ncommand: kotori", _0x17d9a1, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "kurumi",
  'desc': "Sends a random image of Kurumi.",
  'category': 'anime'
}, async _0x388639 => {
  try {
    const _0x422f1f = await fetch("https://api.maher-zubair.tech/anime/kurumi");
    if (!_0x422f1f.ok) {
      return await _0x388639.send("*_Error: " + _0x422f1f.status + " " + _0x422f1f.statusText + '_*');
    }
    const _0x529f05 = await _0x422f1f.json();
    if (_0x529f05.status !== 0xc8) {
      return await _0x388639.send("*_Error: " + _0x529f05.status + " - " + (_0x529f05.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x3ef9ba
    } = _0x529f05;
    if (!_0x3ef9ba) {
      return await _0x388639.send("*_No image found!_*");
    }
    await _0x388639.bot.sendFromUrl(_0x388639.from, _0x3ef9ba, "Random image of Kurumi.", _0x388639, {}, "image");
  } catch (_0x46b994) {
    await _0x388639.error(_0x46b994 + "\n\ncommand: kurumi", _0x46b994, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "miku",
  'desc': "Sends a random image of Miku.",
  'category': "anime"
}, async _0x1c72ae => {
  try {
    const _0x2b39bc = await fetch("https://api.maher-zubair.tech/anime/miku");
    if (!_0x2b39bc.ok) {
      return await _0x1c72ae.send("*_Error: " + _0x2b39bc.status + " " + _0x2b39bc.statusText + '_*');
    }
    const _0x2e5518 = await _0x2b39bc.json();
    if (_0x2e5518.status !== 0xc8) {
      return await _0x1c72ae.send("*_Error: " + _0x2e5518.status + " - " + (_0x2e5518.developer || "Unknown error") + '_*');
    }
    const {
      url: _0xa06c63
    } = _0x2e5518;
    if (!_0xa06c63) {
      return await _0x1c72ae.send("*_No image found!_*");
    }
    await _0x1c72ae.bot.sendFromUrl(_0x1c72ae.from, _0xa06c63, "Random image of Miku.", _0x1c72ae, {}, "image");
  } catch (_0x3cf8b0) {
    await _0x1c72ae.error(_0x3cf8b0 + "\n\ncommand: miku", _0x3cf8b0, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "naruto",
  'desc': "Sends a random image of Naruto.",
  'category': 'anime'
}, async _0x2e0733 => {
  try {
    const _0x43d41f = await fetch("https://api.maher-zubair.tech/anime/naruto");
    if (!_0x43d41f.ok) {
      return await _0x2e0733.send("*_Error: " + _0x43d41f.status + " " + _0x43d41f.statusText + '_*');
    }
    const _0x1b765f = await _0x43d41f.json();
    if (_0x1b765f.status !== 0xc8) {
      return await _0x2e0733.send("*_Error: " + _0x1b765f.status + " - " + (_0x1b765f.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x3771e9
    } = _0x1b765f;
    if (!_0x3771e9) {
      return await _0x2e0733.send("*_No image found!_*");
    }
    await _0x2e0733.bot.sendFromUrl(_0x2e0733.from, _0x3771e9, "Random image of Naruto.", _0x2e0733, {}, "image");
  } catch (_0x2a4ce6) {
    await _0x2e0733.error(_0x2a4ce6 + "\n\ncommand: naruto", _0x2a4ce6, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "nezuko",
  'desc': "Sends a random image of Nezuko.",
  'category': "anime"
}, async _0x5ae064 => {
  try {
    const _0x2aea6c = await fetch("https://api.maher-zubair.tech/anime/nezuko");
    if (!_0x2aea6c.ok) {
      return await _0x5ae064.send("*_Error: " + _0x2aea6c.status + " " + _0x2aea6c.statusText + '_*');
    }
    const _0xbccd87 = await _0x2aea6c.json();
    if (_0xbccd87.status !== 0xc8) {
      return await _0x5ae064.send("*_Error: " + _0xbccd87.status + " - " + (_0xbccd87.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x14095e
    } = _0xbccd87;
    if (!_0x14095e) {
      return await _0x5ae064.send("*_No image found!_*");
    }
    await _0x5ae064.bot.sendFromUrl(_0x5ae064.from, _0x14095e, "Random image of Nezuko.", _0x5ae064, {}, "image");
  } catch (_0x57ea27) {
    await _0x5ae064.error(_0x57ea27 + "\n\ncommand: nezuko", _0x57ea27, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "sakura",
  'desc': "Sends a random image of Sakura.",
  'category': 'anime'
}, async _0x5d295f => {
  try {
    const _0x31647c = await fetch("https://api.maher-zubair.tech/anime/sakura");
    if (!_0x31647c.ok) {
      return await _0x5d295f.send("*_Error: " + _0x31647c.status + " " + _0x31647c.statusText + '_*');
    }
    const _0xab6611 = await _0x31647c.json();
    if (_0xab6611.status !== 0xc8) {
      return await _0x5d295f.send("*_Error: " + _0xab6611.status + " - " + (_0xab6611.developer || "Unknown error") + '_*');
    }
    const {
      url: _0xf07f22
    } = _0xab6611;
    if (!_0xf07f22) {
      return await _0x5d295f.send("*_No image found!_*");
    }
    await _0x5d295f.bot.sendFromUrl(_0x5d295f.from, _0xf07f22, "Random image of Sakura.", _0x5d295f, {}, "image");
  } catch (_0x5979bd) {
    await _0x5d295f.error(_0x5979bd + "\n\ncommand: sakura", _0x5979bd, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "sasuke",
  'desc': "Sends a random image of Sasuke.",
  'category': "anime"
}, async _0x3bbd33 => {
  try {
    const _0x516bfe = await fetch("https://api.maher-zubair.tech/anime/sasuke");
    if (!_0x516bfe.ok) {
      return await _0x3bbd33.send("*_Error: " + _0x516bfe.status + " " + _0x516bfe.statusText + '_*');
    }
    const _0x2d467e = await _0x516bfe.json();
    if (_0x2d467e.status !== 0xc8) {
      return await _0x3bbd33.send("*_Error: " + _0x2d467e.status + " - " + (_0x2d467e.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x3dcbd8
    } = _0x2d467e;
    if (!_0x3dcbd8) {
      return await _0x3bbd33.send("*_No image found!_*");
    }
    await _0x3bbd33.bot.sendFromUrl(_0x3bbd33.from, _0x3dcbd8, "Random image of Sasuke.", _0x3bbd33, {}, "image");
  } catch (_0x3cf2d4) {
    await _0x3bbd33.error(_0x3cf2d4 + "\n\ncommand: sasuke", _0x3cf2d4, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': "husbu",
  'desc': "Sends a random image of Husbu.",
  'category': "anime"
}, async _0x2948a2 => {
  try {
    const _0x4012a6 = await fetch("https://api.maher-zubair.tech/anime/husbu");
    if (!_0x4012a6.ok) {
      return await _0x2948a2.send("*_Error: " + _0x4012a6.status + " " + _0x4012a6.statusText + '_*');
    }
    const _0x7d5c50 = await _0x4012a6.json();
    if (_0x7d5c50.status !== 0xc8) {
      return await _0x2948a2.send("*_Error: " + _0x7d5c50.status + " - " + (_0x7d5c50.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x1032cf
    } = _0x7d5c50;
    if (!_0x1032cf) {
      return await _0x2948a2.send("*_No image found!_*");
    }
    await _0x2948a2.bot.sendFromUrl(_0x2948a2.from, _0x1032cf, "Random image of Husbu.", _0x2948a2, {}, 'image');
  } catch (_0x357bee) {
    await _0x2948a2.error(_0x357bee + "\n\ncommand: husbu", _0x357bee, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': 'shota',
  'desc': "Sends a random image of Shota.",
  'category': "anime"
}, async _0x12bf06 => {
  try {
    const _0x2a1f1a = await fetch("https://api.maher-zubair.tech/anime/shota");
    if (!_0x2a1f1a.ok) {
      return await _0x12bf06.send("*_Error: " + _0x2a1f1a.status + " " + _0x2a1f1a.statusText + '_*');
    }
    const _0x723202 = await _0x2a1f1a.json();
    if (_0x723202.status !== 0xc8) {
      return await _0x12bf06.send("*_Error: " + _0x723202.status + " - " + (_0x723202.developer || "Unknown error") + '_*');
    }
    const {
      url: _0x41f774
    } = _0x723202;
    if (!_0x41f774) {
      return await _0x12bf06.send("*_No image found!_*");
    }
    await _0x12bf06.bot.sendFromUrl(_0x12bf06.from, _0x41f774, "Random image of Shota.", _0x12bf06, {}, "image");
  } catch (_0x5b2360) {
    await _0x12bf06.error(_0x5b2360 + "\n\ncommand: shota", _0x5b2360, "*_Uhh dear, an error occurred!_*");
  }
});
smd({
  'pattern': 'animesearch',
  'fromMe': false,
  'desc': "Search for anime details",
  'type': "anime"
}, async (_0x410deb, _0x19de49) => {
  try {
    const _0x42b20b = _0x19de49[0x1].trim();
    const _0x40b15d = await axios.get("https://api.maher-zubair.tech/anime/search?q=" + encodeURIComponent(_0x42b20b));
    const _0x330a29 = _0x40b15d.data.result;
    const _0x802f72 = _0x330a29.title.english || _0x330a29.title.romaji || _0x330a29.title.native;
    const _0x5b9adb = _0x330a29.description;
    const _0x407d35 = _0x330a29.genres.join(", ");
    const _0x5b80ba = _0x330a29.status;
    const _0x5e9383 = _0x330a29.episodes;
    const _0x4255ea = _0x330a29.coverImage.medium;
    const _0x14950f = "*Title:* " + _0x802f72 + "\n*Genres:* " + _0x407d35 + "\n*Status:* " + _0x5b80ba + "\n*Episodes:* " + _0x5e9383 + "\n*Description:* " + _0x5b9adb;
    await _0x410deb.send(_0x14950f, {
      'quoted': _0x410deb.data,
      'thumbnail': _0x4255ea
    });
  } catch (_0x25f425) {
    console.error("Error fetching anime details:", _0x25f425);
    await _0x410deb.send("_Failed to fetch anime details._", {
      'quoted': _0x410deb.data
    });
  }
});