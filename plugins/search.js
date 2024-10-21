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

const moment = require("moment-timezone");
const {
  fetchJson,
  smd,
  tlang,
  send,
  shazam,
  getBuffer,
  prefix,
  Config,
  groupdb
} = require("../lib");
let gis = require("async-g-i-s");
const axios = require("axios");
const fetch = require("node-fetch");
smd({
  'pattern': 'lyrics',
  'desc': "Get the lyrics of a song.",
  'category': "search",
  'filename': __filename,
  'use': '<song_name>'
}, async (_0x33651d, _0xa5ae6) => {
  try {
    if (!_0xa5ae6) {
      return await _0x33651d.send("*_Please provide a song name!_*");
    }
    const _0x36903b = "https://api.maher-zubair.tech/search/lyrics?q=" + encodeURIComponent(_0xa5ae6);
    const _0x336073 = await fetch(_0x36903b);
    if (!_0x336073.ok) {
      return await _0x33651d.send("*_Error: " + _0x336073.status + " " + _0x336073.statusText + '_*');
    }
    const _0x3a69ef = await _0x336073.json();
    if (_0x3a69ef.status !== 0xc8) {
      return await _0x33651d.send("*_An error occurred while fetching the data._*");
    }
    const {
      artist: _0x35b8f9,
      lyrics: _0x36871d,
      title: _0x99a8d
    } = _0x3a69ef.result;
    const _0x2ebd67 = "\n*Song:* " + _0x99a8d + "\n*Artist:* " + _0x35b8f9 + "\n\n" + _0x36871d + "\n";
    await _0x33651d.send(_0x2ebd67);
  } catch (_0x111301) {
    await _0x33651d.error(_0x111301 + "\n\ncommand: lyrics", _0x111301);
  }
});
smd({
  'pattern': "bing",
  'alias': ["bingsearch"],
  'desc': "Search on Bing.",
  'category': 'search',
  'filename': __filename,
  'use': "<search query>"
}, async (_0x3424df, _0x5d744f) => {
  try {
    if (!_0x5d744f) {
      return await _0x3424df.reply("*Please provide a search query.*");
    }
    const _0x4e3d95 = "https://api-smd.onrender.com/api/bingsearch?query=" + encodeURIComponent(_0x5d744f);
    const _0x454da9 = await fetch(_0x4e3d95).then(_0x184359 => _0x184359.json());
    if (!_0x454da9 || !_0x454da9.status) {
      return await _0x3424df.reply("*An error occurred while fetching the search results.*");
    }
    const _0x237c26 = _0x454da9.result;
    let _0xe90215 = "*Bing Search Results for \"" + _0x5d744f + "\"*\n\n";
    for (const _0x4a8f68 of _0x237c26) {
      _0xe90215 += "*Title:* " + _0x4a8f68.title + "\n*Description:* " + _0x4a8f68.description + "\n*URL:* " + _0x4a8f68.url + "\n\n";
    }
    await _0x3424df.reply(_0xe90215);
  } catch (_0x9d2be3) {
    await _0x3424df.error(_0x9d2be3 + "\n\ncommand: bing", _0x9d2be3, "*An error occurred while searching on Bing.*");
  }
});
smd({
  'pattern': 'zip',
  'alias': ["zipcode"],
  'desc': "Provides information about a US zip code.",
  'category': "tools",
  'use': "zip [zip_code]",
  'examples': ["zip 90001", "zip 33162"]
}, async (_0x2fce9a, _0x3ef27b) => {
  if (!_0x3ef27b) {
    return _0x2fce9a.reply("Please provide a zip code.");
  }
  try {
    const _0x223015 = await axios.get('https://api.zippopotam.us/us/' + _0x3ef27b);
    const {
      postCode: _0x73fb16,
      country: _0x8a8768,
      countryAbbreviation: _0x41b7d6,
      places: _0x1f43ed
    } = _0x223015.data;
    let _0x23ed7a = "\n  *Zip Code:* " + _0x73fb16 + "\n  *Country:* " + _0x8a8768 + " (" + _0x41b7d6 + ")\n  *Places:*\n  ";
    _0x1f43ed.forEach((_0x3dd668, _0x6a2cca) => {
      _0x23ed7a += "\n" + (_0x6a2cca + 0x1) + ". " + _0x3dd668["place name"] + ", " + _0x3dd668.state + " (" + _0x3dd668.latitude + ", " + _0x3dd668.longitude + ')';
    });
    await _0x2fce9a.send(_0x23ed7a);
  } catch (_0x439ac8) {
    await _0x2fce9a.error(_0x439ac8 + "\n\nCommand: zip", _0x439ac8, "Failed to retrieve zip code information.");
  }
});
smd({
  'pattern': 'shazam',
  'category': "search",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0xe9dfa1 => {
  try {
    let _0x39a59c = _0xe9dfa1.reply_message ? _0xe9dfa1.reply_message.mtype : '';
    if (!/audio/.test(_0x39a59c)) {
      return _0xe9dfa1.reply("Reply audio " + prefix + "find");
    }
    let _0x178c35 = await _0xe9dfa1.reply_message.download();
    const {
      shazam: _0x4dc430
    } = require(lib_dir);
    let _0x380f1b = await _0x4dc430(_0x178c35);
    if (!_0x380f1b || !_0x380f1b.status) {
      return _0xe9dfa1.send(_0x380f1b);
    }
    let _0x5bfb11 = "*TITLE: _" + _0x380f1b.title + "_* \n*ARTIST: _" + _0x380f1b.artists + "_*\n *ALBUM:* _" + _0x380f1b.album + "_ ";
    await _0xe9dfa1.bot.sendUi(_0xe9dfa1.jid, {
      'caption': _0x5bfb11
    }, {
      'quoted': _0xe9dfa1
    }, "text", "true");
  } catch (_0x428910) {
    return await _0xe9dfa1.error(_0x428910 + "\n\n command: find", _0x428910, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "github",
  'category': "search",
  'desc': "Finds info about song",
  'filename': __filename
}, async (_0x318256, _0x2bde6a) => {
  try {
    _0x318256.react('🔍');
    if (!_0x2bde6a) {
      return _0x318256.reply("Give me a user name like " + prefix + "github Astropeda");
    }
    const {
      data: _0x1eedab
    } = await axios("https://api.github.com/users/" + _0x2bde6a);
    if (!_0x1eedab) {
      return await _0x318256.send("*_Didn't get any results, Provide valid user name!_*");
    }
    _0x318256.sendMessage(_0x318256.jid, {
      'image': {
        'url': _0x1eedab.avatar_url
      },
      'caption': "ㅤㅤㅤ*[ GITHUB USER INFO ]*\n\n🚩 Id : " + _0x1eedab.id + "\n🔖 Nickname : " + _0x1eedab.name + "\n🔖 Username : " + _0x1eedab.login + "\n✨ Bio : " + _0x1eedab.bio + "\n🏢 Company : " + _0x1eedab.company + "\n📍 Location : " + _0x1eedab.location + "\n📧 Email : " + _0x1eedab.email + "\n📰 Blog : " + _0x1eedab.blog + "\n🔓 Public Repo : " + _0x1eedab.repos_url + "\n🔐 Public Gists : " + _0x1eedab.gists_url + "\n💕 Followers : " + _0x1eedab.followers + "\n👉 Following : " + _0x1eedab.following + "\n🔄 Updated At : " + _0x1eedab.updated_at + "\n🧩 Created At : " + _0x1eedab.created_at
    }, {
      'quoted': _0x318256
    });
  } catch (_0x5cc695) {
    return await _0x318256.error(_0x5cc695 + "\n\n command: github", _0x5cc695, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'coffe',
  'alias': ['tea', "kofi"],
  'category': 'search',
  'react': '🫡',
  'desc': "send randome coffe",
  'filename': __filename
}, async _0x46ac65 => {
  try {
    return await _0x46ac65.bot.sendMessage(_0x46ac65.chat, {
      'image': {
        'url': 'https://coffee.alexflipnote.dev/random'
      },
      'caption': "Here is your Coffee..."
    }, {
      'quoted': _0x46ac65
    });
  } catch (_0x302ce7) {
    return await _0x46ac65.error(_0x302ce7 + "\n\n command: coffe", _0x302ce7, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "imdb",
  'category': "search",
  'desc': "sends info of asked movie/series.",
  'use': "<text>",
  'filename': __filename
}, async (_0x1bd36a, _0x210f81) => {
  try {
    _0x1bd36a.react('🔍');
    if (!_0x210f81) {
      return _0x1bd36a.reply("_Name a Series or movie " + tlang().greet + '._');
    }
    let {
      data: _0x4668e7
    } = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x210f81 + "&plot=full");
    if (!_0x4668e7 || _0x4668e7.cod == '404') {
      return await _0x1bd36a.reply("*_Please provide valid country name!_*");
    }
    let _0x35dc73 = "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` 𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
    _0x35dc73 += "🎬Title      : " + _0x4668e7.Title + "\n";
    _0x35dc73 += "📅Year       : " + _0x4668e7.Year + "\n";
    _0x35dc73 += "⭐Rated      : " + _0x4668e7.Rated + "\n";
    _0x35dc73 += "📆Released   : " + _0x4668e7.Released + "\n";
    _0x35dc73 += "⏳Runtime    : " + _0x4668e7.Runtime + "\n";
    _0x35dc73 += "🌀Genre      : " + _0x4668e7.Genre + "\n";
    _0x35dc73 += "👨🏻‍💻Director   : " + _0x4668e7.Director + "\n";
    _0x35dc73 += "✍Writer     : " + _0x4668e7.Writer + "\n";
    _0x35dc73 += "👨Actors     : " + _0x4668e7.Actors + "\n";
    _0x35dc73 += "📃Plot       : " + _0x4668e7.Plot + "\n";
    _0x35dc73 += "🌐Language   : " + _0x4668e7.Language + "\n";
    _0x35dc73 += "🌍Country    : " + _0x4668e7.Country + "\n";
    _0x35dc73 += "🎖️Awards     : " + _0x4668e7.Awards + "\n";
    _0x35dc73 += "📦BoxOffice  : " + _0x4668e7.BoxOffice + "\n";
    _0x35dc73 += "🏙️Production : " + _0x4668e7.Production + "\n";
    _0x35dc73 += "🌟imdbRating : " + _0x4668e7.imdbRating + "\n";
    _0x35dc73 += "❎imdbVotes  : " + _0x4668e7.imdbVotes + "\n\n";
    _0x35dc73 += Config.caption;
    await _0x1bd36a.bot.sendUi(_0x1bd36a.jid, {
      'caption': _0x35dc73
    }, {
      'quoted': _0x1bd36a
    }, "image", _0x4668e7.Poster);
  } catch (_0x1d3dbb) {
    return await _0x1bd36a.error(_0x1d3dbb + "\n\n command: " + cmdName, _0x1d3dbb, "*_Uhh dear, Didn't get any results!_*");
  }
});
smd({
  'pattern': "weather",
  'category': "search",
  'desc': "Sends weather info about asked place.",
  'use': "<location>",
  'filename': __filename
}, async (_0x599489, _0x4a0b33) => {
  try {
    if (!_0x4a0b33) {
      return _0x599489.reply("*_Give me city name, " + (_0x599489.isCreator ? "Master" : "Idiot") + "!!_*");
    }
    let {
      data: _0x3d80f0
    } = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + _0x4a0b33 + "&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en");
    if (!_0x3d80f0 || _0x3d80f0.cod === "404") {
      return await _0x599489.reply("*_Please provide valid city name!_*");
    }
    let _0x4a0706 = "*🌟Weather of  " + _0x4a0b33 + "*\n\n";
    _0x4a0706 += "*Weather:-* " + _0x3d80f0.weather[0x0].main + "\n";
    _0x4a0706 += "*Description:-* " + _0x3d80f0.weather[0x0].description + "\n";
    _0x4a0706 += "*Avg Temp:-* " + _0x3d80f0.main.temp + "\n";
    _0x4a0706 += "*Feels Like:-* " + _0x3d80f0.main.feels_like + "\n";
    _0x4a0706 += "*Pressure:-* " + _0x3d80f0.main.pressure + "\n";
    _0x4a0706 += "*Humidity:-* " + _0x3d80f0.main.humidity + "\n";
    _0x4a0706 += "*Humidity:-* " + _0x3d80f0.wind.speed + "\n";
    _0x4a0706 += "*Latitude:-* " + _0x3d80f0.coord.lat + "\n";
    _0x4a0706 += "*Longitude:-* " + _0x3d80f0.coord.lon + "\n";
    _0x4a0706 += "*Country:-* " + _0x3d80f0.sys.country + "\n\n";
    _0x4a0706 += Config.caption;
    _0x599489.bot.sendUi(_0x599489.jid, {
      'caption': _0x4a0706
    }, {
      'quoted': _0x599489
    }, "text", "true");
  } catch (_0x34a850) {
    return await _0x599489.error(_0x34a850 + "\n\n command: weather", _0x34a850, "*_Please provide valid city name!_*");
  }
});
smd({
  'pattern': "npm",
  'desc': "download mp4 from url.",
  'category': "search",
  'use': "<package name>",
  'filename': __filename
}, async (_0x356b66, _0x49371b) => {
  try {
    if (!_0x49371b) {
      return _0x356b66.reply("Please give me package name.📦");
    }
    const {
      data: _0x23a6cb
    } = await axios.get('https://api.npms.io/v2/search?q=' + _0x49371b);
    let _0x5aa643 = _0x23a6cb.results.map(({
      package: _0x175aa5
    }) => '*' + _0x175aa5.name + "* (v" + _0x175aa5.version + ")\n_" + _0x175aa5.links.npm + "_\n_" + _0x175aa5.description + '_').join("\n\n")?.["trim"]();
    if (_0x23a6cb && _0x5aa643) {
      await _0x356b66.reply(_0x5aa643);
    } else {
      await _0x356b66.reply("*No Result Found. Sorry!!*");
    }
  } catch (_0x4912ed) {
    await _0x356b66.error(_0x4912ed + "\n\ncommand : npm", _0x4912ed);
  }
});
smd({
  'pattern': "cric",
  'category': "search",
  'desc': "Sends info of given query from Google Search.",
  'use': "<text>",
  'filename': __filename
}, async (_0x38f5dc, _0x4408c7) => {
  try {
    await _0x38f5dc.reply("*_Please Wait, Getting Cricket Info_*");
    const _0x488d5c = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78");
    const _0xac8de0 = await _0x488d5c.json();
    for (let _0x48db4a = 0x0; _0x48db4a < _0xac8de0.data.length; _0x48db4a++) {
      _0x4408c7 += "\n*--------------------- MATCH " + _0x48db4a + '-------------------*';
      _0x4408c7 += "\n*Match Name:* " + _0xac8de0.data[_0x48db4a].name;
      _0x4408c7 += "\n*Match Status:* " + _0xac8de0.data[_0x48db4a].status;
      _0x4408c7 += "\n*Match Date:* " + _0xac8de0.data[_0x48db4a].dateTimeGMT;
      _0x4408c7 += "\n*Match Started:* " + _0xac8de0.data[_0x48db4a].matchStarted;
      _0x4408c7 += "\n*Match Ended:* " + _0xac8de0.data[_0x48db4a].matchEnded;
    }
    return await _0x38f5dc.reply(_0x4408c7);
  } catch (_0x56f2b3) {
    return await _0x38f5dc.error(_0x56f2b3 + "\n\n command: cric", _0x56f2b3, "*_Uhh dear, Didn't get any results!_*");
  }
});
smd({
  'pattern': "google",
  'alias': ["search", "gsearch"],
  'category': "search",
  'desc': "Sends info of given query from Google Search.",
  'use': "<text>",
  'filename': __filename
}, async (_0x28e0f6, _0x4d475b) => {
  try {
    if (!_0x4d475b) {
      return _0x28e0f6.reply("*_Uhh please, give me a query_*\n*_Example : " + prefix + "google Anita._*");
    }
    let _0x430b59 = require("google-it");
    _0x430b59({
      'query': _0x4d475b
    }).then(_0x47d3c9 => {
      let _0x16d769 = "Google Search From : " + _0x4d475b + " \n\n";
      for (let _0x15be83 of _0x47d3c9) {
        _0x16d769 += "➣ *Title : " + _0x15be83.title + "*\n";
        _0x16d769 += "➣ *Description :* " + _0x15be83.snippet + "\n";
        _0x16d769 += "➣ *Link :* _" + _0x15be83.link + "_\n\n────────────────────────\n\n";
      }
      return _0x28e0f6.reply(_0x16d769);
    });
  } catch (_0x4ffde7) {
    return await _0x28e0f6.error(_0x4ffde7 + "\n\n command: google", _0x4ffde7, "*_Uhh dear, Didn't get any results!_*");
  }
});
const downloadImages = async (_0x3e25a6 = '', _0x17cf75 = 'on') => {
  if (!_0x3e25a6) {
    throw "need search query";
  }
  const _0x51176c = async _0x1be60d => {
    try {
      let {
        data: _0x43d2d9
      } = await axios.get(api_smd + "/api/gimg?query=" + encodeURIComponent(_0x1be60d));
      if (_0x43d2d9 && _0x43d2d9.status && Array.isArray(_0x43d2d9.result) && _0x43d2d9.result.length > 0x0) {
        return _0x43d2d9.result;
      }
      return false;
    } catch (_0x24b6bf) {
      console.error("Error fetching images from gimg smd-api-1.vercel.app:", _0x24b6bf);
      return false;
    }
  };
  const _0x51e8bf = async _0x58a6fd => {
    try {
      let {
        data: _0x28d27c
      } = await axios.get(api_smd + "/api/bingimg?query=" + encodeURIComponent(_0x58a6fd));
      if (_0x28d27c && _0x28d27c.status && Array.isArray(_0x28d27c.result) && _0x28d27c.result.length > 0x0) {
        return _0x28d27c.result;
      }
      return false;
    } catch (_0x3f89c7) {
      console.error("Error fetching images from bingimg (smd-api-1.vercel.app) API:", _0x3f89c7);
      return false;
    }
  };
  const _0xb48c72 = async _0x13b302 => {
    try {
      let _0x4a6f2f = await gis(_0x13b302, {
        'query': {
          'safe': _0x17cf75
        },
        'userAgent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
      });
      if (_0x4a6f2f && Array.isArray(_0x4a6f2f) && _0x4a6f2f.length > 0x0) {
        return _0x4a6f2f;
      }
      return false;
    } catch (_0x214fe5) {
      console.error("Error fetching images from Google Images:", _0x214fe5);
      return false;
    }
  };
  let _0x9e55bf = [_0xb48c72, _0x51176c, _0x51e8bf];
  let _0x19c99c = false;
  for (let _0x315587 = 0x0; _0x315587 < _0x9e55bf.length; _0x315587++) {
    try {
      _0x19c99c = await _0x9e55bf[_0x315587](_0x3e25a6);
      if (_0x19c99c && _0x19c99c.length > 0x0) {
        break;
      }
    } catch (_0x5167d9) {
      console.error("Error fetching images:", _0x5167d9);
    }
  }
  return _0x19c99c;
};
smd({
  'pattern': "image",
  'alias': ["img", 'pic'],
  'category': "search",
  'desc': "Searches Image on Google",
  'use': "<text>",
  'filename': __filename
}, async (_0xadbfe7, _0x427cb9) => {
  try {
    let _0x5407fd = _0x427cb9 ? _0x427cb9 : _0xadbfe7.reply_text;
    if (!_0x5407fd) {
      return _0xadbfe7.reply("Provide me a query!\n*Ex : .image luffy |10*");
    }
    let _0x33767e = _0x5407fd.split('|')[0x0] || _0x5407fd;
    let _0x4251b2 = _0x5407fd.split('|')[0x1] || 0x5;
    let _0x1e932d = parseInt(_0x4251b2) || 0x5;
    try {
      let _0x57ce54 = await downloadImages(_0x33767e, "off");
      if (_0x57ce54 && _0x57ce54[0x0]) {
        _0x1e932d = _0x57ce54 && _0x57ce54.length > _0x1e932d ? _0x1e932d : _0x57ce54.length;
        await _0xadbfe7.reply("*_Sending images of '" + _0x33767e + "' in chat!_*");
        for (let _0x52032a = 0x0; _0x52032a < _0x1e932d; _0x52032a++) {
          try {
            let _0xcb6369 = Math.floor(Math.random() * _0x57ce54.length);
            _0xadbfe7.bot.sendFromUrl(_0xadbfe7.jid, _0x57ce54[_0xcb6369].url || _0x57ce54[_0xcb6369], '', _0xadbfe7, {}, "image");
            _0x57ce54.splice(_0xcb6369, 0x1);
          } catch {}
        }
        return;
      }
    } catch (_0x1f5c46) {
      console.log("ERROR IN SYNC G>I>S IMAGE PACKAGE\n\t", _0x1f5c46);
    }
    let _0x549e8d = [];
    const _0x2ca65b = {
      'q': _0x33767e,
      'tbm': "isch",
      'hl': 'en',
      'gl': 'in',
      'ijn': '0'
    };
    const _0x704de6 = {
      'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
      'Accept-Encoding': 'application/json'
    };
    const _0x218aaa = await axios.get("https://www.google.com/search", {
      'headers': _0x704de6,
      'params': _0x2ca65b
    });
    let _0x54f2fa = _0x218aaa.data;
    _0x54f2fa = _0x54f2fa.slice(_0x54f2fa.lastIndexOf('AF_initDataCallback'));
    _0x54f2fa = _0x54f2fa.slice(_0x54f2fa.indexOf('['));
    _0x54f2fa = _0x54f2fa.slice(0x0, _0x54f2fa.indexOf("</script>") - 0x1);
    _0x54f2fa = _0x54f2fa.slice(0x0, _0x54f2fa.lastIndexOf(','));
    const _0x48e3b1 = JSON.parse(_0x54f2fa);
    const _0x2f0d12 = _0x48e3b1[0x38][0x1][0x0][0x0][0x1][0x0];
    for (let _0x1847bc = 0x0; _0x1847bc < _0x4251b2; _0x1847bc++) {
      if (_0x2f0d12[_0x1847bc] && _0x2f0d12[_0x1847bc][0x0][0x0]["444383007"][0x1]) {
        let _0x608b08 = _0x2f0d12[_0x1847bc][0x0][0x0]["444383007"][0x1][0x3][0x0];
        _0x549e8d.push(_0x608b08);
      }
    }
    for (let _0x13cbf1 of _0x549e8d) {
      try {
        _0xadbfe7.bot.sendFromUrl(_0xadbfe7.chat, _0x13cbf1, '', _0xadbfe7, {}, "image");
      } catch {}
    }
  } catch (_0x54aa66) {
    return await _0xadbfe7.error(_0x54aa66 + "\n\n command: image", _0x54aa66, "*_Uhh dear, Didn't get any results!_*");
  }
});
smd({
  'pattern': "couplepp",
  'category': "search",
  'desc': "Sends two couples pics.",
  'filename': __filename
}, async _0x571fac => {
  try {
    let _0x3a91fb = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json");
    let _0x460ffe = _0x3a91fb[Math.floor(Math.random() * _0x3a91fb.length)];
    _0x571fac.reply(_0x460ffe.male, {
      'caption': "*✦Couple Male profile✦*"
    }, "image");
    _0x571fac.reply(_0x460ffe.female, {
      'caption': "*✦Couple Female profile✦*"
    }, 'image');
  } catch (_0x24e874) {
    return await _0x571fac.error(_0x24e874 + "\n\n command: couplepp", _0x24e874, "*_Uhh dear, Didn't get any results!_*");
  }
});
smd({
  'pattern': "iswa",
  'alias': ["oldwa", 'bio', 'onwa'],
  'category': "search",
  'desc': "Searches in given rage about given number.",
  'use': "9112345678xx",
  'filename': __filename
}, async (_0x48c037, _0x57feb5) => {
  if (!_0x57feb5) {
    return await _0x48c037.reply("Give Me Number without + sign. Example: .iswa 234902786xx");
  }
  var _0x43d368 = _0x57feb5.split(" ")[0x0];
  if (!_0x43d368.includes('x')) {
    return _0x48c037.reply("*You did not add x*\nExample: iswa 234902786xx  \n " + Config.caption);
  }
  _0x48c037.reply("*Searching for WhatsApp account in given range...* \n " + Config.caption);
  var _0x5054be = _0x43d368.split('x')[0x0];
  var _0x117e57 = _0x43d368.split('x')[_0x43d368.split('x').length - 0x1] ? _0x43d368.split('x')[_0x43d368.split('x').length - 0x1] : '';
  var _0x20e37d = _0x43d368.split('x').length - 0x1;
  var _0x383038;
  if (_0x20e37d == 0x1) {
    _0x383038 = 0xa;
  } else {
    if (_0x20e37d == 0x2) {
      _0x383038 = 0x64;
    } else if (_0x20e37d == 0x3) {
      _0x383038 = 0x3e8;
    }
  }
  _0x57feb5 = "*--『 List of Whatsapp Numbers 』--*\n\n";
  var _0x53be4d = "\n*Bio:* || \nHey there! I am using WhatsApp.\n";
  var _0x1282ae = "\n*Numbers with no WhatsApp account within provided range.*\n";
  for (let _0x1f828a = 0x0; _0x1f828a < _0x383038; _0x1f828a++) {
    var _0x329a6f = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var _0x20ebd4 = _0x329a6f[Math.floor(Math.random() * _0x329a6f.length)];
    var _0x54178f = _0x329a6f[Math.floor(Math.random() * _0x329a6f.length)];
    var _0xae3e47 = _0x329a6f[Math.floor(Math.random() * _0x329a6f.length)];
    var _0x4e8bc8 = _0x329a6f[Math.floor(Math.random() * _0x329a6f.length)];
    var _0x142e5a;
    if (_0x20e37d == 0x1) {
      _0x142e5a = '' + _0x20ebd4;
    } else {
      if (_0x20e37d == 0x2) {
        _0x142e5a = '' + _0x20ebd4 + _0x54178f;
      } else {
        if (_0x20e37d == 0x3) {
          _0x142e5a = '' + _0x20ebd4 + _0x54178f + _0xae3e47;
        } else if (_0x20e37d == 0x4) {
          _0x142e5a = '' + _0x20ebd4 + _0x54178f + _0xae3e47 + _0x4e8bc8;
        }
      }
    }
    var _0x2d38a4 = await _0x48c037.bot.onWhatsApp('' + _0x5054be + _0x1f828a + _0x117e57 + "@s.whatsapp.net");
    var _0x39d9a8 = _0x2d38a4.length !== 0x0 ? _0x2d38a4 : false;
    try {
      try {
        var _0x5e8fbe = await _0x48c037.bot.fetchStatus(_0x2d38a4[0x0].jid);
      } catch {
        var _0x5e8fbe = "401";
      }
      if (_0x5e8fbe == "401" || _0x5e8fbe.status.length == 0x0) {
        _0x53be4d += 'wa.me/' + _0x2d38a4[0x0].jid.split('@')[0x0] + "\n";
      } else {
        _0x57feb5 += "🧐 *Number:* wa.me/" + _0x2d38a4[0x0].jid.split('@')[0x0] + "\n ✨*Bio :* " + _0x5e8fbe.status + "\n🍁*Last update :* " + moment(_0x5e8fbe.setAt).tz(timezone).format("HH:mm:ss DD/MM/YYYY") + "\n\n";
      }
    } catch {
      _0x1282ae += " ≛ " + _0x5054be + _0x1f828a + _0x117e57 + "\n";
    }
  }
  return await _0x48c037.reply('' + _0x57feb5 + _0x53be4d + _0x1282ae);
});
smd({
  'pattern': 'nowa',
  'category': "search",
  'desc': "Searches in given rage about given number.",
  'use': "27xxxxx",
  'filename': __filename
}, async (_0x5b4a88, _0xab60ef) => {
  if (!_0xab60ef) {
    return await _0x5b4a88.reply("Give Me Number without + sign. Example: .nowa 27xxxx");
  }
  const _0x160b9a = _0xab60ef.split(" ")[0x0];
  if (!_0x160b9a.includes('x')) {
    return _0x5b4a88.reply("*You did not add x in number.*\nExample: " + prefix + "nowa 27xxxx  \n " + Config.caption);
  }
  _0x5b4a88.reply("*Searching for WhatsApp account in the given range...*\n" + Config.caption);
  const _0x2aa324 = _0x160b9a.split('x')[0x0];
  const _0x4c42f7 = _0x160b9a.split('x').slice(-0x1)[0x0] || '';
  const _0x24b557 = _0x160b9a.split('x').length - 0x1;
  const _0x36f5ab = [0xa, 0x64, 0x3e8][_0x24b557 - 0x1] || 0x0;
  let _0x28dbc9 = "\n*『 WhatsApp Account With No Bio』* \n";
  let _0x4764d3 = '';
  let _0x7b1a31 = "*『 Numbers With No WhatsApp Account 』* \n\n";
  for (let _0x416597 = 0x0; _0x416597 < _0x36f5ab; _0x416597++) {
    const _0x3c2c5b = await _0x5b4a88.bot.onWhatsApp('' + _0x2aa324 + _0x416597 + _0x4c42f7);
    try {
      const _0x44e5a6 = await _0x5b4a88.bot.fetchStatus(_0x3c2c5b[0x0].jid);
      if (_0x44e5a6 === "401" || _0x44e5a6.status.length === 0x0) {
        _0x4764d3 += 'wa.me/' + _0x3c2c5b[0x0].jid.split('@')[0x0] + "\n";
      }
    } catch {
      _0x7b1a31 += " ≛ " + _0x2aa324 + _0x416597 + _0x4c42f7 + "\n";
    }
  }
  if (!_0x4764d3) {
    _0x28dbc9 = '';
  } else {
    _0x28dbc9 += _0x4764d3 + "\n\n";
  }
  return await _0x5b4a88.reply('' + _0x28dbc9 + _0x7b1a31 + Config.caption);
});