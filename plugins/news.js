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
  smd
} = require("../lib");
const axios = require("axios");
const fetch = require('node-fetch');
smd({
  'pattern': "wanews",
  'alias': ['wa'],
  'desc': "Fetches the latest WhatsApp beta news for Android.",
  'category': "news",
  'filename': __filename,
  'use': "wanews"
}, async (_0x1f1db6, _0x5df4d2) => {
  try {
    const _0x231c8a = await fetch("https://api.maher-zubair.tech/details/wabetainfo");
    const _0x2eb1b0 = await _0x231c8a.json();
    if (!_0x2eb1b0 || _0x2eb1b0.status !== 0xc8 || !_0x2eb1b0.result) {
      return _0x1f1db6.send("*Failed to fetch WhatsApp beta news.*");
    }
    const {
      title: _0x3184bd,
      subtitle: _0x3b2dba,
      date: _0x1dcb20,
      image: _0x14fa77,
      link: _0x8c92e8,
      desc: _0x4ccf99,
      QandA: _0x2974c7
    } = _0x2eb1b0.result;
    let _0x5e94a7 = '*' + _0x3184bd + "*\n\n";
    _0x5e94a7 += _0x3b2dba + "\n";
    _0x5e94a7 += _0x1dcb20 + "\n\n";
    _0x5e94a7 += _0x4ccf99 + "\n\n";
    _0x5e94a7 += "*Link:* " + _0x8c92e8 + "\n\n";
    if (_0x14fa77) {
      _0x5e94a7 += "![Image](" + _0x14fa77 + ")\n\n";
    }
    if (_0x2974c7 && _0x2974c7.length > 0x0) {
      _0x5e94a7 += "*Q&A:*\n";
      _0x2974c7.forEach(_0x117e85 => {
        _0x5e94a7 += '*' + _0x117e85.question + "*\n" + _0x117e85.answer + "\n\n";
      });
    }
    return _0x1f1db6.send(_0x5e94a7, {
      'quoted': _0x1f1db6
    });
  } catch (_0x107544) {
    console.error(_0x107544);
    return _0x1f1db6.error(_0x107544 + "\n\nCommand: wanews", _0x107544, "*Failed to fetch WhatsApp beta news.*");
  }
});
smd({
  'pattern': 'iosnews',
  'alias': ["ios"],
  'desc': "Fetches the latest iOS news.",
  'category': 'news',
  'filename': __filename,
  'use': "iosnews"
}, async (_0x36735c, _0x9b3673) => {
  try {
    const _0x1c774f = await fetch("https://api.maher-zubair.tech/details/ios");
    const _0xc32fa2 = await _0x1c774f.json();
    if (!_0xc32fa2 || _0xc32fa2.status !== 0xc8 || !_0xc32fa2.result) {
      return _0x36735c.send("*Failed to fetch iOS news.*");
    }
    const {
      title: _0x3007ab,
      link: _0x49f6b3,
      images: _0x106b64,
      desc: _0x1c1846
    } = _0xc32fa2.result;
    let _0x50f632 = '*' + _0x3007ab + "*\n\n";
    _0x50f632 += _0x1c1846 + "\n\n";
    _0x50f632 += "*Link:* " + _0x49f6b3 + "\n\n";
    if (_0x106b64 && _0x106b64.length > 0x0) {
      _0x50f632 += "*Images:*\n";
      _0x106b64.forEach(_0x32f06a => {
        _0x50f632 += _0x32f06a + "\n";
      });
      _0x50f632 += "\n";
    }
    return _0x36735c.send(_0x50f632, {
      'quoted': _0x36735c
    });
  } catch (_0x3f6a46) {
    console.error(_0x3f6a46);
    return _0x36735c.error(_0x3f6a46 + "\n\nCommand: iosnews", _0x3f6a46, "*Failed to fetch iOS news.*");
  }
});
smd({
  'pattern': 'googlenews',
  'alias': ["gnews"],
  'desc': "Fetches the latest Google news.",
  'category': "news",
  'filename': __filename,
  'use': 'googlenews'
}, async (_0xf35579, _0x13db35) => {
  try {
    const {
      GMSNEWS: _0x2d9e18
    } = require('gms-mobile-news');
    const _0x3939a8 = await _0x2d9e18();
    _0x3939a8.latest_news().then(_0x2ed211 => {
      const {
        title: _0x4fa9fa,
        date: _0x124acc,
        link: _0x53d1f5,
        image: _0x2f1031,
        short_desc: _0x2bfd53,
        full_desc: _0xd6ff32
      } = _0x2ed211.result;
      let _0x5cf235 = '*' + _0x4fa9fa + "*\n\n";
      _0x5cf235 += "*Date:* " + _0x124acc + "\n\n";
      _0x5cf235 += _0x2bfd53 + "\n\n";
      _0x5cf235 += "*Link:* " + _0x53d1f5 + "\n\n";
      _0x5cf235 += "*Image:* " + _0x2f1031 + "\n\n";
      _0x5cf235 += "*Full Description:*\n" + _0xd6ff32;
      return _0xf35579.send(_0x5cf235, {
        'quoted': _0xf35579
      });
    })["catch"](_0x167c1f => {
      console.log(_0x167c1f);
      return _0xf35579.reply("*Failed to fetch Google news.*");
    });
  } catch (_0x1134b8) {
    await _0xf35579.error(_0x1134b8 + "\n\nCommand: googlenews", _0x1134b8, "*Failed to fetch Google news.*");
  }
});
smd({
  'pattern': 'spacenews',
  'desc': "Fetches articles from the Spaceflight News API.",
  'category': "news",
  'filename': __filename,
  'use': "!spacenews"
}, async _0x320590 => {
  try {
    const _0x50fe5c = await fetch("https://api.spaceflightnewsapi.net/v4/articles/");
    const _0x1a4e8b = await _0x50fe5c.json();
    if (!_0x1a4e8b || !_0x1a4e8b.results || _0x1a4e8b.results.length === 0x0) {
      return await _0x320590.send("*Failed to fetch articles from Spaceflight News API.*");
    }
    const _0x5096ee = _0x1a4e8b.results[0x0];
    const {
      title: _0x240968,
      url: _0x28f865,
      image_url: _0x56c253,
      summary: _0x52ca9d,
      published_at: _0x53da64
    } = _0x5096ee;
    let _0x114eca = "*Title:* " + _0x240968 + "\n\n";
    _0x114eca += "*Summary:* " + _0x52ca9d + "\n\n";
    _0x114eca += "*Published At:* " + _0x53da64 + "\n\n";
    _0x114eca += "*URL:* " + _0x28f865;
    if (_0x56c253) {
      _0x114eca += "\n\n*Image:* " + _0x56c253;
    }
    await _0x320590.send(_0x114eca);
  } catch (_0x1223a5) {
    await _0x320590.error(_0x1223a5 + "\n\ncommand: spacenews", _0x1223a5);
  }
});
smd({
  'pattern': "technews",
  'alias': ['tn'],
  'desc': "Fetches the latest tech news.",
  'category': "news",
  'filename': __filename,
  'use': 'technews'
}, async (_0xdd2cb1, _0x52eecc) => {
  try {
    const _0xbaa572 = await axios.get("https://api.maher-zubair.tech/details/tnews");
    const _0x275bab = _0xbaa572.data;
    if (!_0x275bab || _0x275bab.status !== 0xc8) {
      return await _0xdd2cb1.reply("*Failed to fetch tech news.*");
    }
    const {
      title: _0xf56669,
      link: _0x26dca8,
      img: _0x30eae0,
      desc: _0x28afcf
    } = _0x275bab.result;
    let _0x51ee2b = '*' + _0xf56669 + "*\n\n";
    _0x51ee2b += _0x28afcf + "\n\n";
    _0x51ee2b += "*Link:* " + _0x26dca8 + "\n\n";
    _0x51ee2b += "*Image:* " + _0x30eae0;
    return await _0xdd2cb1.send(_0x51ee2b, {
      'quoted': _0xdd2cb1
    });
  } catch (_0x241615) {
    await _0xdd2cb1.error(_0x241615 + "\n\nCommand: technews", _0x241615, "*Failed to fetch tech news.*");
  }
});
smd({
  'pattern': 'population',
  'desc': "Fetches current population statistics.",
  'category': "statistics",
  'filename': __filename,
  'use': "!population"
}, async _0xa136b4 => {
  try {
    const _0x38c798 = await fetch("https://api.maher-zubair.tech/details/population");
    const _0x2bdf54 = await _0x38c798.json();
    if (!_0x2bdf54 || _0x2bdf54.status !== 0xc8 || !_0x2bdf54.result) {
      return await _0xa136b4.send("*Failed to fetch population statistics.*");
    }
    const {
      current: _0xfe4bbd,
      this_year: _0x40de0b,
      today: _0x569437
    } = _0x2bdf54.result;
    const {
      total: _0x16b127,
      male: _0x11bf9c,
      female: _0x14340f
    } = _0xfe4bbd;
    const {
      births: _0x5b9362,
      deaths: _0x2ae1b4
    } = _0x569437;
    let _0x4da5c1 = "*Current Population Statistics*\n\n";
    _0x4da5c1 += "Total Population: " + _0x16b127 + "\n";
    _0x4da5c1 += "Male: " + _0x11bf9c + "\n";
    _0x4da5c1 += "Female: " + _0x14340f + "\n\n";
    _0x4da5c1 += "*Today's Statistics*\n";
    _0x4da5c1 += "Births: " + _0x5b9362 + "\n";
    _0x4da5c1 += "Deaths: " + _0x2ae1b4;
    await _0xa136b4.send(_0x4da5c1);
  } catch (_0x2c6fcf) {
    await _0xa136b4.error(_0x2c6fcf + "\n\ncommand: population", _0x2c6fcf);
  }
});
smd({
  'pattern': "animesearch",
  'category': "news",
  'desc': "Searches for an anime",
  'use': "<query>",
  'filename': __filename
}, async (_0xba036e, _0x593166) => {
  try {
    const _0x372c3c = _0xba036e.text.split(" ").slice(0x1).join(" ");
    if (!_0x372c3c) {
      return _0x593166.sendMessage(_0xba036e.from, {
        'text': "Please provide an anime title to search."
      }, {
        'quoted': _0xba036e
      });
    }
    const _0xd9731 = await fetch("https://api.maher-zubair.tech/anime/search?q=" + encodeURIComponent(_0x372c3c));
    const _0xe386d4 = await _0xd9731.json();
    if (_0xe386d4.status !== 0xc8) {
      return _0x593166.sendMessage(_0xba036e.from, {
        'text': "Error: " + _0xe386d4.result
      }, {
        'quoted': _0xba036e
      });
    }
    const _0x3ffc8c = _0xe386d4.result;
    const _0x1c7138 = "\n*Title:* " + _0x3ffc8c.title.romaji + "\n*English Title:* " + _0x3ffc8c.title.english + "\n*Native Title:* " + _0x3ffc8c.title.native + "\n*Format:* " + _0x3ffc8c.format + "\n*Episodes:* " + _0x3ffc8c.episodes + "\n*Duration:* " + _0x3ffc8c.duration + " mins\n*Status:* " + _0x3ffc8c.status + "\n*Season:* " + _0x3ffc8c.season + " " + _0x3ffc8c.seasonYear + "\n*Source:* " + _0x3ffc8c.source + "\n*Genres:* " + _0x3ffc8c.genres.join(", ") + "\n*Start Date:* " + _0x3ffc8c.startDate.day + '/' + _0x3ffc8c.startDate.month + '/' + _0x3ffc8c.startDate.year + "\n*End Date:* " + _0x3ffc8c.endDate.day + '/' + _0x3ffc8c.endDate.month + '/' + _0x3ffc8c.endDate.year + "\n*Average Score:* " + _0x3ffc8c.averageScore + "\n*Synonyms:* " + _0x3ffc8c.synonyms.join(", ") + "\n\n*Description:*\n" + _0x3ffc8c.description + "\n      ";
    _0x593166.sendMessage(_0xba036e.from, {
      'text': _0x1c7138
    }, {
      'quoted': _0xba036e
    });
  } catch (_0x502923) {
    console.error(_0x502923);
    _0x593166.sendMessage(_0xba036e.from, {
      'text': "An error occurred while searching for the anime."
    }, {
      'quoted': _0xba036e
    });
  }
});
smd({
  'pattern': "nasanews",
  'fromMe': false,
  'desc': "Get the latest NASA news",
  'type': 'news'
}, async (_0x420604, _0x27ef14) => {
  try {
    const _0x6ef769 = await axios.get("https://api.maher-zubair.tech/details/nasa");
    const _0x750337 = _0x6ef769.data.result;
    const _0x43a181 = "\n🚀 *Title:* " + _0x750337.title + "\n📅 *Date:* " + _0x750337.date + "\n📝 *Explanation:* " + _0x750337.explanation + "\n🔗 *More Info:* [Read More](" + _0x750337.url + ")\n📢 *Copyright:* " + _0x750337.copyright + "\n      ";
    await _0x420604.send(_0x43a181, {
      'quoted': _0x420604.data
    });
  } catch (_0x4b5ac2) {
    console.error("Error fetching NASA news:", _0x4b5ac2);
    await _0x420604.send("_Failed to fetch NASA news._", {
      'quoted': _0x420604.data
    });
  }
});