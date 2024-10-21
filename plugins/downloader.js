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
  smd,
  fetchJson,
  astroJson,
  fancytext,
  yt,
  getBuffer,
  smdBuffer,
  prefix,
  Config
} = require('../lib');
const {
  search,
  download
} = require('aptoide-scraper');
const googleTTS = require("google-tts-api");
const ytdl = require("@distube/ytdl-core");
const yts = require("secktor-pack");
const fs = require('fs-extra');
const axios = require("axios");
const fetch = require('node-fetch');
const {
  cmd
} = require("../lib/plugins");
smd({
  'pattern': "igstalk",
  'desc': "Get information about an Instagram user.",
  'category': "stalker",
  'filename': __filename,
  'use': "<username>"
}, async (_0x3c3534, _0xf8c67c) => {
  try {
    if (!_0xf8c67c) {
      return await _0x3c3534.send("*_Please provide an Instagram username!_*");
    }
    const _0xb629da = "https://api.maher-zubair.tech/stalk/instagram?q=" + encodeURIComponent(_0xf8c67c);
    const _0x59a778 = await fetch(_0xb629da);
    if (!_0x59a778.ok) {
      return await _0x3c3534.send("*_Error: " + _0x59a778.status + " " + _0x59a778.statusText + '_*');
    }
    const _0x2e42f3 = await _0x59a778.json();
    if (_0x2e42f3.status !== 0xc8) {
      return await _0x3c3534.send("*_An error occurred while fetching the data._*");
    }
    const {
      photo_profile: _0x14d0d3,
      username: _0x480fdc,
      fullname: _0x573407,
      posts: _0x2ce3f2,
      followers: _0xb3d6aa,
      following: _0x3f72f5,
      bio: _0x40b78f
    } = _0x2e42f3.result;
    const _0x188dfe = "\n*Instagram User Information*\n\n*Username:* " + _0x480fdc + "\n*Full Name:* " + _0x573407 + "\n*Bio:* " + (_0x40b78f || "NO BIO") + "\n\n*Posts:* " + _0x2ce3f2 + "\n*Followers:* " + _0xb3d6aa + "\n*Following:* " + _0x3f72f5 + "\n\n\t*ANITA IG STALKER*\n";
    await _0x3c3534.bot.sendFromUrl(_0x3c3534.from, _0x14d0d3, _0x188dfe, _0x3c3534, {}, "image");
  } catch (_0x2cf044) {
    await _0x3c3534.error(_0x2cf044 + "\n\ncommand: igstalk", _0x2cf044);
  }
});
smd({
  'pattern': "ytstalk",
  'desc': "Get information about a YouTube channel.",
  'category': "stalker",
  'filename': __filename,
  'use': "<channel_name>"
}, async (_0x5d78b9, _0x504f3c) => {
  try {
    if (!_0x504f3c) {
      return await _0x5d78b9.send("*_Please provide a YouTube channel name!_*");
    }
    const _0x5f4544 = "https://api.maher-zubair.tech/stalk/ytchannel?q=" + encodeURIComponent(_0x504f3c);
    const _0x217a28 = await fetch(_0x5f4544);
    if (!_0x217a28.ok) {
      return await _0x5d78b9.send("*_Error: " + _0x217a28.status + " " + _0x217a28.statusText + '_*');
    }
    const _0x6b0cc = await _0x217a28.json();
    if (_0x6b0cc.status !== 0xc8) {
      return await _0x5d78b9.send("*_An error occurred while fetching the data._*");
    }
    const _0x5bf623 = _0x6b0cc.result;
    if (!_0x5bf623 || !Array.isArray(_0x5bf623) || _0x5bf623.length === 0x0) {
      return await _0x5d78b9.send("*_No channels found!_*");
    }
    for (const _0x53be4d of _0x5bf623) {
      const {
        channel_id: _0x29b449,
        channel_name: _0x32d714,
        channel_about: _0x43c90b,
        channel_created: _0x121caf,
        channel_picture: _0x4adae4
      } = _0x53be4d;
      const _0x35a074 = "\n*YouTube Channel Information*\n\n*Channel Name:* " + _0x32d714 + "\n*Channel ID:* " + _0x29b449 + "\n*Channel Description:* " + _0x43c90b + "\n*Channel Created:* " + new Date(_0x121caf).toLocaleString() + "\n\n*Profile Picture:*\n";
      const _0x3a9577 = _0x4adae4.high.url || _0x4adae4.medium.url;
      await _0x5d78b9.bot.sendFromUrl(_0x5d78b9.from, _0x3a9577, _0x35a074, _0x5d78b9, {}, "image");
    }
  } catch (_0x4e2303) {
    await _0x5d78b9.error(_0x4e2303 + "\n\ncommand: ytstalk", _0x4e2303);
  }
});
smd({
  'pattern': "gitstalk",
  'desc': "Get information about a GitHub user.",
  'category': "stalker",
  'filename': __filename,
  'use': '<username>'
}, async (_0x5e1527, _0x5ad0d0) => {
  try {
    if (!_0x5ad0d0) {
      return await _0x5e1527.send("*_Please provide a GitHub username!_*");
    }
    const _0x3a647c = 'https://api.maher-zubair.tech/stalk/githubuser?q=' + encodeURIComponent(_0x5ad0d0);
    const _0xc07b27 = await fetch(_0x3a647c);
    if (!_0xc07b27.ok) {
      return await _0x5e1527.send("*_Error: " + _0xc07b27.status + " " + _0xc07b27.statusText + '_*');
    }
    const _0x13d4a7 = await _0xc07b27.json();
    if (_0x13d4a7.status !== 0xc8) {
      return await _0x5e1527.send("*_An error occurred while fetching the data._*");
    }
    const {
      login: _0x8bbda1,
      id: _0x49cc1f,
      avatar_url: _0x461516,
      name: _0x47df8c,
      company: _0x18f79d,
      blog: _0x54678e,
      location: _0x53e1d9,
      bio: _0x39b496,
      public_repos: _0x947ada,
      public_gists: _0x50fe6d,
      followers: _0x1d9e43,
      following: _0xaef231,
      created_at: _0x4d48ec,
      updated_at: _0x5ba545
    } = _0x13d4a7.result;
    const _0x24b0e3 = "\n*GitHub User Information*\n\n*Username:* " + _0x8bbda1 + "\n*Name:* " + (_0x47df8c || "N/A") + "\n*ID:* " + _0x49cc1f + "\n*Bio:* " + (_0x39b496 || "N/A") + "\n*Company:* " + (_0x18f79d || 'N/A') + "\n*Blog:* " + (_0x54678e || "N/A") + "\n*Location:* " + (_0x53e1d9 || "N/A") + "\n\n*Public Repositories:* " + _0x947ada + "\n*Public Gists:* " + _0x50fe6d + "\n*Followers:* " + _0x1d9e43 + "\n*Following:* " + _0xaef231 + "\n\n*Account Created:* " + new Date(_0x4d48ec).toLocaleString() + "\n*Last Updated:* " + new Date(_0x5ba545).toLocaleString() + "\n\n*Avatar:*\n";
    await _0x5e1527.bot.sendFromUrl(_0x5e1527.from, _0x461516, _0x24b0e3, _0x5e1527, {}, 'image');
  } catch (_0x206b90) {
    await _0x5e1527.error(_0x206b90 + "\n\ncommand: gitstalk", _0x206b90);
  }
});
smd({
  'pattern': "ipstalk",
  'desc': "Get information about an IP address.",
  'category': "misc",
  'filename': __filename,
  'use': "<ip_address>"
}, async (_0x3506e9, _0x21cd5a) => {
  try {
    if (!_0x21cd5a) {
      return await _0x3506e9.send("*_Please provide an IP address!_*");
    }
    const _0x4230d4 = "https://api.maher-zubair.tech/stalk/ip?q=" + encodeURIComponent(_0x21cd5a);
    const _0x19967f = await fetch(_0x4230d4);
    if (!_0x19967f.ok) {
      return await _0x3506e9.send("*_Error: " + _0x19967f.status + " " + _0x19967f.statusText + '_*');
    }
    const _0x1b8e49 = await _0x19967f.json();
    if (_0x1b8e49.status !== 0xc8) {
      return await _0x3506e9.send("*_An error occurred while fetching the data._*");
    }
    const {
      continent: _0x9bdf22,
      country: _0xda0e34,
      countryCode: _0x456dc2,
      regionName: _0x1f58b6,
      city: _0x3a0abd,
      zip: _0x3d2f90,
      lat: _0x16ce13,
      lon: _0x23519b,
      timezone: _0x4641e2,
      currency: _0x24bae5,
      isp: _0x2ac303,
      org: _0x407509,
      as: _0x490dea,
      reverse: _0x42501,
      mobile: _0x1580c3,
      proxy: _0x5957cc,
      hosting: _0x5b1d39,
      ip: _0x12f6db
    } = _0x1b8e49.result;
    const _0x59b2b5 = "\n*IP Address Information*\n\n*IP Address:* " + _0x12f6db + "\n*Reverse DNS:* " + _0x42501 + "\n*Continent:* " + _0x9bdf22 + "\n*Country:* " + _0xda0e34 + " (" + _0x456dc2 + ")\n*Region:* " + _0x1f58b6 + "\n*City:* " + _0x3a0abd + "\n*ZIP Code:* " + _0x3d2f90 + "\n*Latitude:* " + _0x16ce13 + "\n*Longitude:* " + _0x23519b + "\n*Timezone:* " + _0x4641e2 + "\n*Currency:* " + _0x24bae5 + "\n*ISP:* " + _0x2ac303 + "\n*Organization:* " + _0x407509 + "\n*AS:* " + _0x490dea + "\n*Mobile:* " + (_0x1580c3 ? "Yes" : 'No') + "\n*Proxy:* " + (_0x5957cc ? "Yes" : 'No') + "\n*Hosting:* " + (_0x5b1d39 ? "Yes" : 'No') + "\n";
    await _0x3506e9.send(_0x59b2b5);
  } catch (_0x23490f) {
    await _0x3506e9.error(_0x23490f + "\n\ncommand: ipstalk", _0x23490f);
  }
});
smd({
  'pattern': "allsocial",
  'desc': "Download media from various social platforms.",
  'category': "downloader",
  'filename': __filename,
  'use': '<url>'
}, async (_0x56ebe8, _0x59adf0) => {
  try {
    if (!_0x59adf0) {
      return await _0x56ebe8.send("*_Please provide a URL!_*");
    }
    const _0x43e4e0 = "https://api.maher-zubair.tech/download/alldownload2?url=" + encodeURIComponent(_0x59adf0);
    const _0x11e416 = await fetch(_0x43e4e0);
    if (!_0x11e416.ok) {
      return await _0x56ebe8.send("*_Error: " + _0x11e416.status + " " + _0x11e416.statusText + '_*');
    }
    const _0x56476d = await _0x11e416.json();
    const _0x47af27 = _0x56476d.result;
    if (!_0x47af27 || !_0x47af27.medias || !_0x47af27.medias.length) {
      return await _0x56ebe8.send("*_No media found!_*");
    }
    const {
      title: _0x5b8a11,
      thumbnail: _0x4729be,
      medias: _0x50116b
    } = _0x47af27;
    const _0x19a8a1 = "*Title:* " + _0x5b8a11 + "\n\n*Source:* " + _0x50116b[0x0].source;
    await _0x56ebe8.bot.sendFromUrl(_0x56ebe8.from, _0x4729be, _0x19a8a1, _0x56ebe8, {}, "image");
    for (const _0x185137 of _0x50116b) {
      const {
        url: _0x23cd4f,
        formattedSize: _0x48db28,
        quality: _0x264361,
        extension: _0x54d250
      } = _0x185137;
      const _0x447eeb = "*Quality:* " + _0x264361 + "\n*Size:* " + _0x48db28 + "\n*Extension:* " + _0x54d250;
      await _0x56ebe8.bot.sendFromUrl(_0x56ebe8.from, _0x23cd4f, _0x447eeb, _0x56ebe8, {}, "video");
    }
  } catch (_0x29a6c0) {
    await _0x56ebe8.error(_0x29a6c0 + "\n\ncommand: allsocial", _0x29a6c0);
  }
});
smd({
  'pattern': "gdrive",
  'desc': "Download files from Google Drive.",
  'category': 'downloader',
  'filename': __filename,
  'use': "<url>"
}, async (_0x1a38cc, _0x2ff735) => {
  try {
    if (!_0x2ff735) {
      return await _0x1a38cc.send("*_Please provide a Google Drive URL!_*");
    }
    const _0x1bfe03 = "https://api.maher-zubair.tech/download/gdrive?url=" + encodeURIComponent(_0x2ff735);
    const _0x4e422d = await fetch(_0x1bfe03);
    if (!_0x4e422d.ok) {
      return await _0x1a38cc.send("*_Error: " + _0x4e422d.status + " " + _0x4e422d.statusText + '_*');
    }
    const _0x143755 = await _0x4e422d.json();
    if (_0x143755.status !== 0xc8) {
      return await _0x1a38cc.send("*_Error: " + _0x143755.status + " - " + (_0x143755.result || "Unknown error") + '_*');
    }
    const {
      downloadUrl: _0x3ed630,
      fileName: _0x16f55f,
      fileSize: _0x553e57,
      mimetype: _0x530dad
    } = _0x143755.result;
    const _0x215cfe = "*File:* " + _0x16f55f + "\n*Size:* " + _0x553e57 + "\n*Type:* " + _0x530dad;
    await _0x1a38cc.bot.sendFromUrl(_0x1a38cc.from, _0x3ed630, _0x215cfe, _0x1a38cc, {}, "file");
  } catch (_0x4e41c8) {
    await _0x1a38cc.error(_0x4e41c8 + "\n\ncommand: gdrive", _0x4e41c8);
  }
});
smd({
  'pattern': "spotify2",
  'alias': ["sp2"],
  'desc': "Downloads a Spotify song.",
  'category': "downloader",
  'filename': __filename,
  'use': "<Spotify URL>"
}, async (_0x2996ff, _0x36d5a1) => {
  try {
    const _0x4dde8e = _0x36d5a1.trim();
    if (!_0x4dde8e || !isValidUrl(_0x4dde8e)) {
      return await _0x2996ff.send("*_Please provide a valid Spotify URL._*");
    }
    const _0x39f68d = "https://api.maher-zubair.tech/download/spotify?url=" + encodeURIComponent(_0x4dde8e);
    const _0x3f2b29 = await axios.get(_0x39f68d);
    const _0x37962d = _0x3f2b29.data;
    if (!_0x37962d || _0x37962d.status !== 0xc8) {
      return await _0x2996ff.reply("*Failed to download the Spotify song.*");
    }
    const {
      song: _0x35404b,
      artist: _0x31af78,
      album_name: _0x38a855,
      release_date: _0x411d24,
      cover_url: _0x4bec86,
      url: _0x58e080
    } = _0x37962d.result;
    let _0x3aa36e = "*Song:* " + _0x35404b + "\n";
    _0x3aa36e += "*Artist:* " + _0x31af78.join(", ") + "\n";
    _0x3aa36e += "*Album:* " + _0x38a855 + "\n";
    _0x3aa36e += "*Release Date:* " + _0x411d24 + "\n\n";
    _0x3aa36e += "*Cover Image:* " + _0x4bec86 + "\n\n";
    const _0x32b8ce = await axios.get(_0x58e080, {
      'responseType': "arraybuffer"
    });
    const _0x102b37 = _0x35404b.replace(/\s/g, '_') + ".mp3";
    await _0x2996ff.bot.sendMessage(_0x2996ff.chat, {
      'audio': _0x32b8ce.data,
      'fileName': _0x102b37,
      'mimetype': "audio/mpeg",
      'caption': _0x3aa36e
    }, {
      'quoted': _0x2996ff
    });
  } catch (_0x20d753) {
    await _0x2996ff.error(_0x20d753 + "\n\nCommand: spotify2", _0x20d753, "*Failed to download the Spotify song.*");
  }
});
function isValidUrl(_0x5e848c) {
  try {
    new URL(_0x5e848c);
    return true;
  } catch (_0x506521) {
    return false;
  }
}
smd({
  'pattern': "spotify",
  'alias': ['sp'],
  'desc': "Searches for Spotify tracks.",
  'category': 'search',
  'filename': __filename,
  'use': "<search query>"
}, async (_0x26e8ba, _0x18e914) => {
  try {
    const _0x34c62d = _0x18e914.trim();
    if (!_0x34c62d) {
      return await _0x26e8ba.send("*_Please provide a search query._*");
    }
    const _0x4ae691 = 'https://api.maher-zubair.tech/search/spotify?q=' + encodeURIComponent(_0x34c62d);
    const _0x334e99 = await axios.get(_0x4ae691);
    const _0x1541a5 = _0x334e99.data;
    if (!_0x1541a5 || _0x1541a5.status !== 0xc8) {
      return await _0x26e8ba.reply("*Failed to fetch Spotify tracks.*");
    }
    const _0x5cb3f2 = _0x1541a5.result;
    if (!_0x5cb3f2 || _0x5cb3f2.length === 0x0) {
      return await _0x26e8ba.reply("*No Spotify tracks found.*");
    }
    let _0x1a10eb = "*Spotify Search Results:*\n\n";
    for (let _0x49fbb2 = 0x0; _0x49fbb2 < _0x5cb3f2.length; _0x49fbb2++) {
      const _0x3e1a14 = _0x5cb3f2[_0x49fbb2];
      _0x1a10eb += '*' + (_0x49fbb2 + 0x1) + ". " + _0x3e1a14.title + "*\n";
      _0x1a10eb += "Artist: " + _0x3e1a14.artist + "\n";
      _0x1a10eb += "Duration: " + formatDuration(_0x3e1a14.duration) + "\n";
      _0x1a10eb += "Popularity: " + _0x3e1a14.popularity + "\n";
      _0x1a10eb += "Preview: " + (_0x3e1a14.preview ? _0x3e1a14.preview : "No preview available") + "\n";
      _0x1a10eb += "URL: " + _0x3e1a14.url + "\n\n";
    }
    return await _0x26e8ba.send(_0x1a10eb, {
      'quoted': _0x26e8ba
    });
  } catch (_0x4cf11d) {
    await _0x26e8ba.error(_0x4cf11d + "\n\nCommand: spotify", _0x4cf11d, "*Failed to search Spotify.*");
  }
});
function formatDuration(_0x412d02) {
  const _0x31eb32 = Math.floor(_0x412d02 / 0x3e8 % 0x3c);
  const _0xbaec0c = Math.floor(_0x412d02 / 60000 % 0x3c);
  const _0x4e9098 = Math.floor(_0x412d02 / 3600000 % 0x18);
  return '' + (_0x4e9098 ? _0x4e9098 + "h " : '') + _0xbaec0c + "m " + _0x31eb32 + 's';
}
smd({
  'pattern': "twitter",
  'alias': ['tw', 'twdl'],
  'desc': "Downloads Twitter videos.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add Twitter URL>"
}, async (_0x51971c, _0x1b5b49) => {
  try {
    let _0x29bb44 = _0x1b5b49.split(" ")[0x0].trim();
    if (!_0x29bb44 || !_0x29bb44.startsWith("https://")) {
      return await _0x51971c.send("*_Please provide a valid Twitter Video URL._*\n*Example: " + prefix + "tw https://twitter.com/username/status/1234567890_*");
    }
    let _0x3a3dbe = await astroJson("https://api.maher-zubair.tech/download/twitter?url=" + _0x29bb44);
    if (!_0x3a3dbe || !_0x3a3dbe.status === 0xc8) {
      return await _0x51971c.reply("*Invalid Video URL!*");
    }
    let _0x4c08ab = _0x3a3dbe.data.caption ? _0x3a3dbe.data.caption : "*Twitter Video Download*\n\n*Username:* " + _0x3a3dbe.data.username;
    return await _0x51971c.bot.sendMessage(_0x51971c.chat, {
      'video': {
        'url': _0x3a3dbe.data.HD
      },
      'caption': _0x4c08ab
    }, {
      'quoted': _0x51971c
    });
  } catch (_0x382a9a) {
    await _0x51971c.error(_0x382a9a + "\n\nCommand: twitter", _0x382a9a, "*_Video not found!_*");
  }
});
smd({
  'pattern': "tgs",
  'desc': "Downloads telegram stickers.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add sticker url.>"
}, async (_0x192476, _0xbc1c3c) => {
  try {
    if (!_0xbc1c3c) {
      return await _0x192476.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
    }
    if (!_0xbc1c3c.includes('addstickers')) {
      return await _0x192476.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
    }
    let _0x4cc0a2 = _0xbc1c3c.split('|')[0x0];
    let _0x24ff0d = _0x4cc0a2.split("/addstickers/")[0x1];
    let {
      result: _0x492a34
    } = await fetchJson('https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=' + encodeURIComponent(_0x24ff0d) + " ");
    let _0x3ef8e0 = _0xbc1c3c.split('|')[0x1] || '';
    let _0x4c2f0b = "Total stickers: " + _0x492a34.stickers.length + "\n*Estimated complete in:* " + _0x492a34.stickers.length * 1.5 + " seconds\nKeep in mind that there is a chance of a ban if used frequently";
    if (_0x492a34.is_animated) {
      return await _0x192476.reply("Animated stickers are not supported");
    } else {
      if (_0x3ef8e0.startsWith("info")) {
        return await _0x192476.reply(_0x4c2f0b);
      }
    }
    let _0x4e3ebd = parseInt(_0x3ef8e0.split(',')[0x0]) || 0xa;
    let _0x69a427 = parseInt(_0x3ef8e0.split(',')[0x1]) || 0x0;
    let _0x5c5caa = _0x3ef8e0.split(';')[0x1] || "Sticker";
    let _0x5c05d0 = true;
    if (_0x5c5caa.includes("photo")) {
      _0x5c05d0 = false;
      _0x5c5caa = "Photo";
    }
    if (_0x4e3ebd > _0x492a34.stickers.length) {
      _0x4e3ebd = _0x492a34.stickers.length;
    }
    if (_0x69a427 > _0x492a34.stickers.length) {
      _0x69a427 = _0x492a34.stickers.length - 0x5;
    }
    if (_0x69a427 > _0x4e3ebd) {
      let _0x3a637b = _0x4e3ebd;
      _0x4e3ebd = _0x69a427;
      _0x69a427 = _0x3a637b;
    }
    await _0x192476.reply(_0x4c2f0b + "\n\n_Downloading as " + _0x5c5caa + " From index *" + _0x69a427 + "* to *" + _0x4e3ebd + "*._\nIf you wants more to download then use Like \n\n .tgs " + _0x4cc0a2 + " |  10 ,  20 ; photo");
    for (_0x69a427; _0x69a427 < _0x4e3ebd; _0x69a427++) {
      let _0x3d1a1c = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + _0x492a34.stickers[_0x69a427].file_id);
      let _0x1aecd2 = "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + _0x3d1a1c.result.file_path;
      if (_0x5c05d0) {
        let _0x6ff3c7 = await getBuffer(_0x1aecd2);
        await _0x192476.reply(_0x6ff3c7, {
          'packname': Config.packname,
          'author': "ANITA-Md"
        }, 'sticker');
      } else {
        await _0x192476.bot.sendMessage(_0x192476.chat, {
          'image': {
            'url': _0x1aecd2
          },
          'caption': "*_Telegram Sticker At Index " + (_0x69a427 + 0x1) + " Downloaded_*"
        });
      }
    }
  } catch (_0x46ef93) {
    await _0x192476.error(_0x46ef93 + "\n\ncommand: tgs", _0x46ef93, "*_Error Sending telegram stickers!!!_*");
  }
});
smd({
  'pattern': "fbaudio",
  'desc': "Downloads Facebook videos in audio.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add Facebook URL>"
}, async (_0x4ec69c, _0x1f5464) => {
  try {
    let _0x5a3463 = _0x1f5464.split(" ")[0x0].trim();
    if (!_0x5a3463 || !_0x5a3463.startsWith('https://')) {
      return await _0x4ec69c.send("*_Please provide a valid Facebook Video URL._");
    }
    let _0x1e49f6 = await astroJson('https://api-smd.onrender.com/api/fbdown?url=' + _0x5a3463);
    if (!_0x1e49f6 || !_0x1e49f6.status) {
      return await _0x4ec69c.reply("*Invalid Video URL!*");
    }
    return await _0x4ec69c.bot.sendMessage(_0x4ec69c.chat, {
      'video': {
        'url': _0x1e49f6.result.audio
      },
      'caption': Config.caption
    }, {
      'quoted': _0x4ec69c
    });
  } catch (_0xec9fa3) {
    await _0x4ec69c.error(_0xec9fa3 + "\n\nCommand: facebook", _0xec9fa3, "*_Video not found!_*");
  }
});
smd({
  'pattern': "instagram2",
  'alias': ["insta", 'ig'],
  'desc': "Download media from Instagram.",
  'category': 'downloader',
  'filename': __filename,
  'use': "<url>"
}, async (_0x4a2b68, _0xfc1e44 = '') => {
  try {
    const _0x447d1c = _0xfc1e44.trim();
    if (!_0x447d1c) {
      return await _0x4a2b68.send("*_Please provide an Instagram URL!_*");
    }
    const _0x2bf013 = "https://api.maher-zubair.tech/download/instagram?url=" + encodeURIComponent(_0x447d1c);
    const _0x59fd4d = await fetch(_0x2bf013);
    if (!_0x59fd4d.ok) {
      return await _0x4a2b68.send("*_Error: " + _0x59fd4d.status + " " + _0x59fd4d.statusText + '_*');
    }
    const _0x7aaf1d = await _0x59fd4d.json();
    if (_0x7aaf1d.status !== 0xc8) {
      return await _0x4a2b68.send("*_Error: " + _0x7aaf1d.status + " - " + (_0x7aaf1d.result || "Unknown error") + '_*');
    }
    const _0x580cd2 = _0x7aaf1d.result[0x0];
    if (!_0x580cd2) {
      return await _0x4a2b68.send("*_No media found!_*");
    }
    const {
      thumbnail: _0x1902d4,
      url: _0x4e2437,
      wm: _0x24a5b9
    } = _0x580cd2;
    const _0x3d13d9 = "*Watermark:* " + _0x24a5b9 + "\n\n_Note: This media may have a watermark._";
    await _0x4a2b68.bot.sendFromUrl(_0x4a2b68.from, _0x1902d4, _0x3d13d9, _0x4a2b68, {}, 'image');
    await _0x4a2b68.bot.sendFromUrl(_0x4a2b68.from, _0x4e2437, '', _0x4a2b68, {}, 'video');
  } catch (_0x53f9cc) {
    await _0x4a2b68.error(_0x53f9cc + "\n\ncommand: instagram2", _0x53f9cc);
  }
});
smd({
  'pattern': "tgs2",
  'desc': "Downloads telegram stickers.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add sticker url.>"
}, async (_0xc08b41, _0x34c22e) => {
  try {
    if (!_0x34c22e) {
      return await _0xc08b41.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
    }
    if (!_0x34c22e.includes("addstickers")) {
      return await _0xc08b41.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
    }
    const _0xf4c94a = _0x34c22e.split('|')[0x0];
    const _0x1b7b7a = _0xf4c94a.split("/addstickers/")[0x1];
    const {
      result: _0x5485a6
    } = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(_0x1b7b7a));
    const _0xa75baf = _0x34c22e.split('|')[0x1] || '';
    const _0x22476d = "Total stickers: " + _0x5485a6.stickers.length + "\n*Estimated complete in:* " + _0x5485a6.stickers.length * 1.5 + " seconds\nKeep in mind that there is a chance of a ban if used frequently";
    if (_0x5485a6.is_animated) {
      return await _0xc08b41.reply("Animated stickers are not supported");
    } else {
      if (_0xa75baf.startsWith("info")) {
        return await _0xc08b41.reply(_0x22476d);
      }
    }
    const [_0x133b9d, _0x599c33] = _0xa75baf.split(',').map(_0x3eb8a0 => parseInt(_0x3eb8a0) || 0x0);
    const [, _0x59ee65] = _0xa75baf.split(';');
    const _0x99b1e2 = !_0x59ee65 || _0x59ee65.toLowerCase() !== 'photo';
    const _0x514a5f = Math.min(_0x133b9d || 0xa, _0x5485a6.stickers.length);
    const _0x1bf077 = Math.min(_0x599c33 || _0x514a5f + 0xa, _0x5485a6.stickers.length);
    await _0xc08b41.reply(_0x22476d + "\n\n_Downloading as " + (_0x99b1e2 ? "Sticker" : 'Photo') + " From index *" + _0x514a5f + "* to *" + _0x1bf077 + "*._\nIf you want more to download, use:\n\n.tgs " + _0xf4c94a + " | " + (_0x514a5f + 0xa) + ", " + (_0x1bf077 + 0xa) + "; " + (_0x99b1e2 ? "sticker" : "photo"));
    for (let _0x27e5c9 = _0x514a5f - 0x1; _0x27e5c9 < _0x1bf077; _0x27e5c9++) {
      const {
        result: _0x217d55
      } = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + _0x5485a6.stickers[_0x27e5c9].file_id);
      const _0x4cd0e5 = "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + _0x217d55.file_path;
      if (_0x99b1e2) {
        const _0x1e4380 = await getBuffer(_0x4cd0e5);
        await _0xc08b41.reply(_0x1e4380, {
          'packname': Config.packname,
          'author': "ANITA-Md"
        }, "sticker");
      } else {
        await _0xc08b41.bot.sendMessage(_0xc08b41.chat, {
          'image': {
            'url': _0x4cd0e5
          },
          'caption': "*_Telegram Sticker At Index " + (_0x27e5c9 + 0x1) + " Downloaded_*"
        });
      }
    }
  } catch (_0x1ad83b) {
    await _0xc08b41.error(_0x1ad83b + "\n\ncommand: tgs", _0x1ad83b, "*_Error Sending telegram stickers!!!_*");
  }
});
smd({
  'pattern': "snack",
  'desc': "Downloads Snack videos.",
  'category': "downloader",
  'filename': __filename,
  'use': "<snack video url>"
}, async (_0x26b02a, _0x430e16) => {
  try {
    if (!_0x430e16) {
      return await _0x26b02a.reply("*Please provide a Snack video URL.*");
    }
    const _0x4a9595 = "https://api.maher-zubair.tech/download/snack?url=" + encodeURIComponent(_0x430e16);
    const _0x55a297 = await fetchJson(_0x4a9595);
    if (_0x55a297.status !== 0xc8) {
      return await _0x26b02a.reply("*Error: " + _0x55a297.result + '*');
    }
    const {
      caption: _0x132a1f,
      url: _0xb61a94
    } = _0x55a297.result;
    await _0x26b02a.send(_0xb61a94, {
      'caption': _0x132a1f
    }, "video", _0x26b02a);
  } catch (_0x2971ad) {
    console.error(_0x2971ad);
    await _0x26b02a.reply("*An error occurred while downloading the video.*");
  }
});
smd({
  'pattern': "wikimedia",
  'desc': "Downloads wikimedia images.",
  'category': 'downloader',
  'filename': __filename,
  'use': '<text|search.>'
}, async (_0x446242, _0x5afb0b) => {
  try {
    if (!_0x5afb0b) {
      return await _0x446242.send("*_Please Give me search query!_*");
    }
    const {
      wikimedia: _0x8f2831
    } = require("../lib");
    const _0x1a3b29 = (await _0x8f2831(_0x5afb0b)) || [];
    if (!_0x1a3b29 || !_0x1a3b29[0x0]) {
      return await _0x446242.send("*_No Results Found!_*");
    }
    const _0x118b3f = _0x446242.iscreator && _0x5afb0b.split('|')[0x1] === "all" ? _0x1a3b29.length : _0x1a3b29.length > 0x5 ? 0x5 : _0x1a3b29.length;
    for (let _0x34d2e5 = 0x0; _0x34d2e5 < _0x118b3f; _0x34d2e5++) {
      try {
        _0x446242.bot.sendFromUrl(_0x446242.from, _0x1a3b29[_0x34d2e5].image, "Title: " + _0x1a3b29[_0x34d2e5].title + "\n*Source:* " + _0x1a3b29[_0x34d2e5].source, _0x446242, {}, "image");
      } catch {}
    }
  } catch (_0x1e6f25) {
    await _0x446242.error(_0x1e6f25 + "\n\ncommand: insta", _0x1e6f25);
  }
});
smd({
  'pattern': "facebook",
  'alias': ['fb', "fbdl"],
  'desc': "Downloads Facebook videos.",
  'category': 'downloader',
  'filename': __filename,
  'use': "<add Facebook URL>"
}, async (_0x56b0ea, _0x3f91db) => {
  try {
    let _0x26ef79 = _0x3f91db.split(" ")[0x0].trim();
    if (!_0x26ef79 || !_0x26ef79.startsWith("https://")) {
      return await _0x56b0ea.send("*_Please provide a valid Facebook Video URL._*\n*Example: " + prefix + "fb https://www.facebook.com/watch/?v=2018727118289093_*");
    }
    let _0x38bfd6 = await astroJson('https://api-smd.onrender.com/api/fbdown?url=' + _0x26ef79);
    if (!_0x38bfd6 || !_0x38bfd6.status) {
      return await _0x56b0ea.reply("*Invalid Video URL!*");
    }
    return await _0x56b0ea.bot.sendMessage(_0x56b0ea.chat, {
      'video': {
        'url': _0x38bfd6.result.Normal_video
      },
      'caption': Config.caption
    }, {
      'quoted': _0x56b0ea
    });
  } catch (_0x20b5fa) {
    await _0x56b0ea.error(_0x20b5fa + "\n\nCommand: facebook", _0x20b5fa, "*_Video not found!_*");
  }
});
smd({
  'pattern': "facebook2",
  'alias': ["fbhd", 'fb'],
  'desc': "Downloads Facebook videos in HD.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add Facebook URL>"
}, async (_0x4c63e1, _0x3eca68) => {
  try {
    let _0x18f432 = _0x3eca68.split(" ")[0x0].trim();
    if (!_0x18f432 || !_0x18f432.startsWith("https://")) {
      return await _0x4c63e1.send("*_Please provide a valid Facebook Video URL._*\n*Example: " + prefix + "fb https://www.facebook.com/watch/?v=2018727118289093_*");
    }
    let _0x532a2b = await astroJson("https://api-smd.onrender.com/api/fbdown?url=" + _0x18f432);
    if (!_0x532a2b || !_0x532a2b.status) {
      return await _0x4c63e1.reply("*Invalid Video URL!*");
    }
    return await _0x4c63e1.bot.sendMessage(_0x4c63e1.chat, {
      'video': {
        'url': _0x532a2b.result.HD
      },
      'caption': Config.caption
    }, {
      'quoted': _0x4c63e1
    });
  } catch (_0x3782f4) {
    await _0x4c63e1.error(_0x3782f4 + "\n\nCommand: facebook", _0x3782f4, "*_Video not found!_*");
  }
});
smd({
  'pattern': "apk",
  'alias': ["modapk"],
  'desc': "Downloads apks  .",
  'category': "downloader",
  'filename': __filename,
  'use': "<add sticker url.>"
}, async (_0x12d609, _0x237f08) => {
  try {
    if (!_0x237f08) {
      return _0x12d609.reply("*_Uhh dear, Give me App Name!_*");
    }
    let _0x3ac471 = await search(_0x237f08);
    let _0x40ba1a = {};
    if (_0x3ac471.length) {
      _0x40ba1a = await download(_0x3ac471[0x0].id);
    } else {
      return _0x12d609.reply("*_Apk not found, Try another name!!_*");
    }
    const _0x152570 = parseInt(_0x40ba1a.size);
    if (_0x152570 > 0xc8) {
      return _0x12d609.reply("❌ File size bigger than 200mb.");
    }
    const _0x444a0d = _0x40ba1a.dllink;
    let _0x5f1686 = await fancytext("『 *ᗩᑭᏦ  ᗞᝪᗯᑎしᝪᗩᗞᗴᖇ* 』\n\n*APP Name :* " + _0x40ba1a.name + "\n*App Id :* " + _0x40ba1a['package'] + "\n*Last Up :* " + _0x40ba1a.lastup + "\n*App Size :* " + _0x40ba1a.size + "\n\n\n " + Config.caption, 0x19);
    const _0x25881e = (_0x40ba1a?.['name'] || "Downloader") + ".apk";
    const _0x31e974 = "temp/" + _0x25881e;
    let _0xff79a9 = await _0x12d609.reply(_0x40ba1a.icon, {
      'caption': _0x5f1686
    }, "img", _0x12d609);
    axios.get(_0x444a0d, {
      'responseType': "stream"
    }).then(_0xff6d40 => {
      const _0x30306d = fs.createWriteStream(_0x31e974);
      _0xff6d40.data.pipe(_0x30306d);
      return new Promise((_0x3793fa, _0x540850) => {
        _0x30306d.on('finish', _0x3793fa);
        _0x30306d.on("error", _0x540850);
      });
    }).then(() => {
      let _0x1547a7 = {
        'document': fs.readFileSync(_0x31e974),
        'mimetype': "application/vnd.android.package-archive",
        'fileName': _0x25881e
      };
      _0x12d609.bot.sendMessage(_0x12d609.jid, _0x1547a7, {
        'quoted': _0xff79a9
      });
      try {
        fs.unlink(_0x31e974);
      } catch {}
    })['catch'](_0x509d40 => {
      try {
        fs.unlink(_0x31e974);
      } catch {}
      ;
      _0x12d609.reply("*_Apk not Found, Sorry_*");
    });
  } catch (_0x477724) {
    await _0x12d609.error(_0x477724 + "\n\ncommand: apk", _0x477724, "*_Apk not Found!_*");
  }
});
cmd({
  'pattern': 'apks',
  'alias': ["apksearch"],
  'desc': "Search App",
  'category': "downloader",
  'filename': __filename,
  'use': "<Search Query>"
}, async (_0x49e756, _0x3bc9be) => {
  try {
    if (!_0x3bc9be) {
      return await _0x49e756.reply("*_Uhh pLease, give me app name!_*");
    }
    const _0x4c0bd6 = await search(_0x3bc9be);
    if (_0x4c0bd6.length) {
      let _0x550da6 = await download(_0x4c0bd6[0x0].id);
      let _0x5eafe9 = "*ANITA • ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪsᴛ* \n*________________________________* \n\n*_Reply Any Number To Download._*\n_Results For : " + _0x3bc9be + "_ \n";
      for (let _0x35394b = 0x0; _0x35394b < _0x4c0bd6.length; _0x35394b++) {
        _0x5eafe9 += "\n*" + (_0x35394b + 0x1) + " : " + _0x4c0bd6[_0x35394b].name + "* \n*Id : " + _0x4c0bd6[_0x35394b].id + "* \n";
      }
      return await _0x49e756.sendMessage(_0x49e756.chat, {
        'image': {
          'url': _0x550da6.icon
        },
        'caption': _0x5eafe9
      }, {
        'quoted': _0x49e756
      });
    } else {
      return _0x49e756.reply("*_APP not Found, Try Other Name_*");
    }
  } catch (_0x53a760) {
    _0x49e756.error(_0x53a760 + "\n\ncommand: apks", _0x53a760);
  }
});
smd({
  'pattern': "soundcloud",
  'alias': ["scdl", "scdownload"],
  'desc': "Download audio from SoundCloud.",
  'category': "downloader",
  'filename': __filename,
  'use': "<SoundCloud audio URL>"
}, async (_0x5ab02e, _0x3e5b30) => {
  try {
    const _0x13ca48 = _0x3e5b30.trim();
    if (!_0x13ca48) {
      return await _0x5ab02e.reply("*Please provide a SoundCloud audio URL.*");
    }
    const _0x3e459c = "https://api.maher-zubair.tech/download/soundcloud?url=" + encodeURIComponent(_0x13ca48);
    const _0x35c6b4 = await fetch(_0x3e459c).then(_0x235049 => _0x235049.json());
    if (!_0x35c6b4 || _0x35c6b4.status !== 0xc8) {
      return await _0x5ab02e.reply("*An error occurred while downloading the SoundCloud audio.*");
    }
    const _0x2dc6f3 = _0x35c6b4.result;
    const _0x2348ba = _0x2dc6f3.link;
    const _0x94823b = _0x2dc6f3.thumb;
    const _0x386554 = _0x2dc6f3.title;
    const _0x496848 = _0x2dc6f3.download_count;
    await _0x5ab02e.bot.sendAudio(_0x5ab02e.chat, _0x2348ba, _0x386554, _0x496848, _0x94823b, {
      'quoted': _0x5ab02e
    });
  } catch (_0x57fdbf) {
    await _0x5ab02e.error(_0x57fdbf + "\n\ncommand: soundcloud", _0x57fdbf, "*An error occurred while downloading the SoundCloud audio.*");
  }
});
smd({
  'pattern': "gitclone",
  'desc': "Downloads apks  .",
  'category': "downloader",
  'filename': __filename,
  'use': "<add sticker url.>"
}, async (_0x5de005, _0xe313e8) => {
  try {
    if (!_0xe313e8) {
      return await _0x5de005.reply("*Provide Repo Url, _.gitclone https://github.com/coderxsa/ANITA_*");
    }
    const _0x463bbc = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!_0x463bbc.test(_0xe313e8)) {
      return await _0x5de005.reply("*Provide Valid Repositry Url*");
    }
    let [_0x51d4c8, _0x1c2f24, _0x3b9170] = _0xe313e8.match(_0x463bbc) || [];
    _0x3b9170 = _0x3b9170.replace(/.git$/, '');
    let _0x463a94 = 'https://api.github.com/repos/' + _0x1c2f24 + '/' + _0x3b9170 + "/zipball";
    let _0x358c16 = (await fetch(_0x463a94, {
      'method': 'HEAD'
    })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[0x1];
    await _0x5de005.bot.sendMessage(_0x5de005.jid, {
      'document': {
        'url': _0x463a94
      },
      'fileName': _0x358c16,
      'mimetype': "application/zip"
    });
  } catch (_0x41c8f2) {
    return _0x5de005.error(_0x41c8f2 + "\n\ncommand: gitclone", _0x41c8f2, "*_File not found!!!_*");
  }
});
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
smd({
  'pattern': "tts",
  'desc': "text to speech.",
  'category': "downloader",
  'filename': __filename,
  'use': "<Hii,this is Asta>"
}, async (_0x180db3, _0x467b2b) => {
  try {
    let _0x44d6f5 = _0x180db3.reply_text ? _0x180db3.reply_text : _0x467b2b;
    if (!_0x44d6f5) {
      return _0x180db3.reply("*_Example : .tts Hi,I am ANITA-Md whatsapp bot._*");
    }
    try {
      let _0x4ae959 = _0x467b2b ? _0x467b2b.split(" ")[0x0].toLowerCase() : 'en';
      const _0x29ef54 = googleTTS.getAudioUrl(_0x44d6f5, {
        'lang': _0x4ae959,
        'slow': true,
        'host': 'https://translate.google.com'
      });
      await _0x180db3.bot.sendMessage(_0x180db3.jid, {
        'audio': {
          'url': _0x29ef54
        },
        'mimetype': 'audio/mpeg',
        'ptt': true,
        'fileName': 'ANITA-Md-tts.m4a'
      }, {
        'quoted': _0x180db3
      });
    } catch (_0x1556df) {
      const _0x38939b = googleTTS.getAudioUrl(_0x44d6f5, {
        'lang': 'en',
        'slow': true,
        'host': "https://translate.google.com"
      });
      await _0x180db3.bot.sendMessage(_0x180db3.jid, {
        'audio': {
          'url': _0x38939b
        },
        'mimetype': "audio/mpeg",
        'ptt': true,
        'fileName': 'ANITA-Md-tts.m4a'
      }, {
        'quoted': _0x180db3
      });
    }
  } catch (_0x4b0184) {
    return _0x180db3.error(_0x4b0184 + "\n\ncommand: tts", _0x4b0184, false);
  }
});
smd({
  'pattern': "downmp4",
  'alias': ['mp4down', "mp4fromurl"],
  'desc': "download mp4 from url.",
  'category': 'downloader',
  'use': '<url>',
  'filename': __filename
}, async (_0x42ef3e, _0x71b31c) => {
  try {
    let _0x169fdb = ('' + (_0x71b31c ? _0x71b31c : _0x42ef3e.reply_text)).split(" ")[0x0].toLowerCase().trim();
    if (!_0x169fdb || !_0x169fdb.toLowerCase().startsWith("http")) {
      return _0x42ef3e.reply("*_Give me Video Link, " + prefix + "downmp4 https://telegra.ph/file/d90855d13352c8aae3981.mp4_*");
    }
    var _0x389c17 = _0x71b31c.toLowerCase().includes('doc') ? "document" : "video";
    await _0x42ef3e.bot.sendMessage(_0x42ef3e.chat, {
      [_0x389c17]: {
        'url': _0x169fdb
      },
      'caption': "*HERE WE GO*",
      'contextInfo': {
        ...(await _0x42ef3e.bot.contextInfo(Config.botname, _0x42ef3e.senderName))
      }
    }, {
      'quoted': _0x42ef3e
    });
  } catch (_0x227354) {
    await _0x42ef3e.error(_0x227354 + "\n\ncommand : downmp4", _0x227354, "*_Please, Give me valid video url!_*");
  }
});
smd({
  'pattern': "video2",
  'desc': "Downloads video from YouTube using yt-search.",
  'category': "downloader",
  'filename': __filename,
  'use': "<video title or URL>"
}, async (_0x105c41, _0x764653) => {
  try {
    const _0x819528 = _0x764653 || _0x105c41.reply_text;
    if (!_0x819528) {
      return _0x105c41.reply("*Use: " + prefix + "video2 <video title or URL>*");
    }
    const _0x1ab8f7 = ytIdRegex.exec(_0x819528) || (await getVideoUrl(_0x819528)).videos[0x0].url;
    if (!_0x1ab8f7) {
      return _0x105c41.reply("*No video found!*");
    }
    const _0x1860ea = await yt.getInfo(ytIdRegex.exec(_0x1ab8f7)[0x1]);
    const _0x1d49a1 = _0x1860ea.duration >= 0x7d0 ? 'document' : "video";
    const _0x488049 = {
      'type': 'video',
      'quality': _0x1860ea.pref_Quality || 'best',
      'format': "mp4"
    };
    const _0xf23adb = await yt.download(ytIdRegex.exec(_0x1ab8f7)[0x1], _0x488049);
    const _0x51dd65 = _0x1860ea.title || ytIdRegex.exec(_0x1ab8f7)[0x1];
    const _0x4355cf = await _0x105c41.bot.contextInfo(Config.botname, "VIDEO DOWNLOADER");
    if (_0xf23adb) {
      await _0x105c41.bot.sendMessage(_0x105c41.chat, {
        [_0x1d49a1]: {
          'url': _0xf23adb
        },
        'fileName': _0x51dd65,
        'caption': Config.caption,
        'mimetype': "video/mp4",
        'contextInfo': _0x4355cf
      });
      fs.unlinkSync(_0xf23adb);
    } else {
      _0x105c41.send("*Video not found!*");
    }
  } catch (_0x6420c2) {
    console.error("Video download error:", _0x6420c2);
    _0x105c41.error(_0x6420c2 + "\n\ncommand: video2", _0x6420c2, "*_Video not found_*");
  }
});
async function getVideoUrl(_0x31e66b) {
  try {
    const _0x7f74a0 = await yts(_0x31e66b);
    if (_0x7f74a0.videos.length > 0x0) {
      return _0x7f74a0.videos[0x0].url;
    }
  } catch (_0x189386) {
    console.error("Video search error:", _0x189386);
  }
  return false;
}
smd({
  'pattern': 'sound',
  'alias': ["ANITAi", "aine", "mentalism", "alive", "waso"],
  'desc': "Downloads ringtone.",
  'category': 'downloader',
  'filename': __filename,
  'use': "<Dowanload Tiktok Sounds>"
}, async (_0x3a181c, _0x1d8ee0) => {
  try {
    if (!_0x1d8ee0) {
      return _0x3a181c.reply("*Give A Number Example: " + prefix + "sound 5*");
    }
    const _0x1731af = parseInt(_0x1d8ee0);
    if (_0x1731af.toString() == "NaN" || _0x1731af < 0x1 || _0x1731af > 0xa0) {
      return _0x3a181c.reply("*_❌ Give a number between 1 to 160_*");
    }
    let _0x2f062d = "https://github.com/Itxxwasi/Tiktokmusic-API/raw/master/tiktokmusic/sound" + _0x1731af.toString() + ".mp3";
    let _0x52b3da = await getBuffer(_0x2f062d);
    var _0xd42e71 = {
      ...(await _0x3a181c.bot.contextInfo(Config.botname, "ᴛɪᴋᴛᴏᴋ ꜱᴏᴜɴᴅ " + _0x1731af))
    };
    let _0x5647b7 = {
      'audio': _0x52b3da,
      'fileName': "Asta-Md tiktok Sound" + _0x1731af + '.m4a',
      'mimetype': 'audio/mpeg',
      'ptt': true,
      'contextInfo': _0xd42e71
    };
    return _0x3a181c.bot.sendMessage(_0x3a181c.chat, _0x5647b7, {
      'quoted': _0x3a181c
    });
  } catch (_0x582a8e) {
    return _0x3a181c.error(_0x582a8e + "\n\ncommand: sound", _0x582a8e, false);
  }
});
smd({
  'pattern': 'tiktok',
  'alias': ['tt', "ttdl"],
  'desc': "Downloads Tiktok Videos Via Url.",
  'category': 'downloader',
  'filename': __filename,
  'use': "<add tiktok url.>"
}, async (_0x5db686, _0xeb44c3) => {
  try {
    const _0x2237de = _0xeb44c3.toLowerCase().includes('doc') ? "document" : _0xeb44c3.toLowerCase().includes('mp3') ? 'audio' : "video";
    if (!_0xeb44c3) {
      return await _0x5db686.reply("*Uhh Please, Provide me tiktok Video Url*\n*_Ex " + prefix + "tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*");
    }
    const _0x579285 = _0xeb44c3 ? _0xeb44c3.split(" ")[0x0] : '';
    if (!/tiktok/.test(_0x579285)) {
      return await _0x5db686.reply("*Uhh Please, Give me Valid Tiktok Video Url!*");
    }
    const _0x330f09 = await fetch("https://aemt.me/download/tiktokdl?url=?url=" + _0x579285);
    const _0x5db506 = await _0x330f09.json();
    return _0x5db506 && _0x5db506.video && _0x5db506.video.noWatermark ? await _0x5db686.send(_0x5db506.video.noWatermark, {
      'caption': Config.caption
    }, _0x2237de, _0x5db686) : await _0x5db686.reply("Error While Downloading Your Video");
  } catch (_0x4b8e96) {
    return _0x5db686.error(_0x4b8e96 + "\n\ncommand: tiktok", _0x4b8e96);
  }
});
smd({
  'pattern': 'tiktok2',
  'desc': "Downloads Tiktok Videos Via Url.",
  'category': 'downloader',
  'filename': __filename,
  'use': "<add tiktok url.>"
}, async (_0x50b465, _0x1986fb) => {
  try {
    if (!_0x1986fb) {
      return await _0x50b465.reply("*Uhh Please, Provide me tiktok Video Url*\n*_Ex " + prefix + "tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*");
    }
    const _0x3f4545 = _0x1986fb.split(" ")[0x0];
    if (!/tiktok/.test(_0x3f4545)) {
      return await _0x50b465.reply("*Uhh Please, Give me Valid Tiktok Video Url!*");
    }
    const _0x2ba08c = "https://aemt.me/download/tiktokdl?url=" + encodeURIComponent(_0x3f4545);
    const _0x3705d2 = await fetchJson(_0x2ba08c);
    if (_0x3705d2.status !== 0xc8) {
      return await _0x50b465.reply("*Error: " + _0x3705d2.result + '*');
    }
    const _0x2c2392 = _0x3705d2.result;
    const _0x1747a8 = _0x2c2392.toLowerCase().includes("mp4") ? "video" : "document";
    await _0x50b465.send(_0x2c2392, {
      'caption': Config.caption
    }, _0x1747a8, _0x50b465);
  } catch (_0xb4c00e) {
    console.error(_0xb4c00e);
    return _0x50b465.error(_0xb4c00e + "\n\ncommand: tiktok", _0xb4c00e);
  }
});
smd({
  'pattern': "pinterest",
  'desc': "Downloads images from Pinterest.",
  'category': "downloader",
  'filename': __filename,
  'use': "<text|image name>"
}, async (_0x1776ab, _0x2024d3) => {
  try {
    if (!_0x2024d3) {
      return _0x1776ab.reply("What picture are you looking for?");
    }
    const _0x44df55 = "https://api.maher-zubair.tech/search/pinterest?q=" + encodeURIComponent(_0x2024d3);
    const _0x787b5f = await fetch(_0x44df55);
    if (!_0x787b5f.ok) {
      return _0x1776ab.reply("*_Error: " + _0x787b5f.status + " " + _0x787b5f.statusText + '_*');
    }
    const _0x2a1c7b = await _0x787b5f.json();
    const _0x50ead0 = _0x2a1c7b.result;
    if (!_0x50ead0 || !_0x50ead0.length) {
      return await _0x1776ab.send("*_No Result found!_*");
    }
    const _0x3d0046 = {
      ...(await _0x1776ab.bot.contextInfo(Config.botname, "ᴘɪɴᴛᴇʀᴇꜱᴛ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
    };
    const _0x46853f = _0x50ead0.length < 0x5 ? _0x50ead0.length : 0x5;
    for (let _0x126678 = 0x0; _0x126678 < _0x46853f; _0x126678++) {
      await _0x1776ab.bot.sendMessage(_0x1776ab.chat, {
        'image': {
          'url': _0x50ead0[_0x126678]
        },
        'contextInfo': _0x3d0046
      });
    }
  } catch (_0x31d364) {
    return _0x1776ab.reply("Uhh Please, Give me a Name. Ex .pintrest apple");
  }
});
smd({
  'pattern': "mediafire",
  'alias': ['mf', "mfire"],
  'desc': "Downloads media from Mediafire.",
  'category': "downloader",
  'filename': __filename,
  'use': "<url of mediafire>"
}, async (_0x1efaac, _0x26d131) => {
  try {
    if (!_0x26d131 || !_0x26d131.includes("mediafire.com")) {
      return _0x1efaac.reply("*_Provide mediafire url, Use: " + prefix + "mf https://www.mediafire.com/file/i33wo2xvgvid05m/muezzaverse_2221749531_musicaldown.com.mp4/file!_*");
    }
    const _0x489f6c = "https://api.maher-zubair.tech/download/mediafire?url=" + encodeURIComponent(_0x26d131);
    const _0x5bab78 = await fetch(_0x489f6c);
    if (!_0x5bab78.ok) {
      return _0x1efaac.reply("*_Error: " + _0x5bab78.status + " " + _0x5bab78.statusText + '_*');
    }
    const _0x1efca9 = await _0x5bab78.json();
    const _0x357903 = _0x1efca9.result;
    if (!_0x357903 || !_0x357903.link) {
      return _0x1efaac.reply("*_Could not find the file!_*");
    }
    const _0x506264 = "『 *ANITA Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ* 』\n\n *Name* : " + _0x357903.name + "\n *Size* : " + _0x357903.size + "\n *Mime* : " + _0x357903.mime + "\n\n\n" + Config.caption;
    const _0x208ef9 = await fancytext(_0x506264, 0x19);
    const _0x2fdb38 = {
      ...(await _0x1efaac.bot.contextInfo(Config.botname, "MEDIAFIRE"))
    };
    const _0x27c7e3 = {
      'document': {
        'url': _0x357903.link
      },
      'caption': _0x208ef9,
      'fileName': _0x357903.name,
      'mimetype': _0x357903.mime,
      'contextInfo': _0x2fdb38
    };
    await _0x1efaac.bot.sendMessage(_0x1efaac.chat, _0x27c7e3);
  } catch (_0x25490b) {
    _0x1efaac.error(_0x25490b + "\n\ncommand: mediafire", _0x25490b, "*_File not found!!_*");
  }
});
smd({
  'pattern': "song",
  'alias': ["audio"],
  'desc': "Downloads audio from youtube.",
  'category': "downloader",
  'filename': __filename,
  'use': "<give text>"
}, async (_0x30457a, _0x328465) => {
  try {
    if (!_0x328465) {
      return await _0x30457a.reply("*_Give Me Search Query_*");
    }
    let _0x16913e = await yts(_0x328465);
    let _0x14b30d = _0x16913e.all[0x0];
    let _0xa8c1f8 = "\t *ANITA • sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*   \n\n*Title :* " + _0x14b30d.title + "\nUrl : " + _0x14b30d.url + "\n*Description :* " + _0x14b30d.timestamp + "\n*Views :* " + _0x14b30d.views + "\n*Uploaded :* " + _0x14b30d.ago + "\n*Author :* " + _0x14b30d.author.name + "\n\n\n_Reply 1 for Video_ Or _1 document_\n_Reply 2 for Audio_ Or _2 document_";
    let _0x16daa8 = await smdBuffer(_0x14b30d.thumbnail);
    var _0x1990f3 = {
      ...(await _0x30457a.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ", _0x16daa8))
    };
    await _0x30457a.bot.sendMessage(_0x30457a.jid, {
      'image': _0x16daa8,
      'caption': _0xa8c1f8,
      'contextInfo': _0x1990f3
    });
  } catch (_0xa0a269) {
    return _0x30457a.error(_0xa0a269 + "\n\ncommand: song", _0xa0a269, "*_File not found!!_*");
  }
});
smd({
  'pattern': "play",
  'alias': ['music'],
  'desc': "Downloads audio from youtube.",
  'category': "downloader",
  'filename': __filename,
  'use': "<give text>"
}, async (_0x4f8516, _0x346310) => {
  try {
    if (!_0x346310) {
      return await _0x4f8516.reply("*_Give Me Search Query_*");
    }
    let _0x45aad6 = await yts(_0x346310);
    let _0xe99f51 = _0x45aad6.all[0x0];
    let _0x41acff = "\t *ANITA • sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*   \n\n*Title :* " + _0xe99f51.title + "\nUrl : " + _0xe99f51.url + "\n*Description :* " + _0xe99f51.timestamp + "\n*Views :* " + _0xe99f51.views + "\n*Uploaded :* " + _0xe99f51.ago + "\n*Author :* " + _0xe99f51.author.name + "\n\n\n_Reply 1 for Video_ Or _1 document_\n_Reply 2 for Audio_ Or _2 document_";
    let _0x193908 = await smdBuffer(_0xe99f51.thumbnail);
    var _0x50b73e = {
      ...(await _0x4f8516.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ", _0x193908))
    };
    await _0x4f8516.bot.sendMessage(_0x4f8516.jid, {
      'image': _0x193908,
      'caption': _0x41acff,
      'contextInfo': _0x50b73e
    });
  } catch (_0x36ef2b) {
    return _0x4f8516.error(_0x36ef2b + "\n\ncommand: play", _0x36ef2b, "*_File not found!!_*");
  }
});
cmd({
  'pattern': 'yts',
  'alias': ['yt', "ytsearch"],
  'desc': "Search Song From youtube",
  'category': "downloader",
  'filename': __filename,
  'use': "<Yt Search Query>"
}, async (_0x3b8f37, _0x1fa3cd) => {
  try {
    if (!_0x1fa3cd) {
      return await _0x3b8f37.reply("*_Give Me Search Query!_*");
    }
    let _0x30a9dc = await yts(_0x1fa3cd);
    let _0x51d6a3 = "*ANITA • ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ* \n*_______________________________* \n\n_Reply Any Number To Download._\n  _For Audio: 1 mp3._\n  _For Video: 1 video._\n  _For document: 1 document._\n\n_Results For : " + _0x1fa3cd + "_ \n\n";
    let _0x53b5ac = 0x1;
    for (let _0x3b6a65 of _0x30a9dc.all) {
      _0x51d6a3 += " \n*" + _0x53b5ac++ + " : " + _0x3b6a65.title + (_0x3b6a65.timestamp ? '(' + _0x3b6a65.timestamp + ')' : '') + "*\n*Url : " + _0x3b6a65.url + '*';
    }
    return await _0x3b8f37.sendMessage(_0x3b8f37.chat, {
      'image': {
        'url': _0x30a9dc.all[0x0].thumbnail
      },
      'caption': _0x51d6a3
    }, {
      'quoted': _0x3b8f37
    });
  } catch (_0x36a463) {}
});
smd({
  'pattern': "ytmp4",
  'alias': ["ytv", "ytvid", 'ytvideo'],
  'desc': "Downloads video from youtube.",
  'category': "downloader",
  'filename': __filename,
  'use': "<yt video url>"
}, async (_0x371506, _0x368368) => {
  let _0x4a81aa = _0x368368 ? _0x368368 : _0x371506.reply_text;
  var _0x41f797 = _0x4a81aa.toLowerCase().includes("doc") ? "document" : _0x4a81aa.toLowerCase().includes("mp3") ? 'audio' : "video";
  const _0x2581ce = ytIdRegex.exec(_0x4a81aa) || [];
  if (!_0x4a81aa || !_0x2581ce[0x0]) {
    return await _0x371506.reply("*_provide youtube video url!_*");
  }
  try {
    let _0x100c75 = await ytdl.getInfo(_0x2581ce[0x0]);
    if (_0x100c75.videoDetails.lengthSeconds >= 0x7d0) {
      _0x41f797 = 'document';
    }
    let _0x43b689 = _0x100c75.videoDetails.title;
    let _0x54150e = './temp/' + _0x2581ce[0x1] + ".mp4";
    const _0x5630f9 = ytdl(_0x2581ce[0x0], {
      'filter': _0x501a6e => _0x501a6e.itag == 0x16 || _0x501a6e.itag == 0x12
    }).pipe(fs.createWriteStream(_0x54150e));
    await new Promise((_0x27112f, _0x5870f4) => {
      _0x5630f9.on("error", _0x5870f4);
      _0x5630f9.on("finish", _0x27112f);
    });
    var _0x223e8d = {
      ...(await _0x371506.bot.contextInfo(Config.botname, "ʏᴛᴅʟ ᴠɪᴅᴇᴏ"))
    };
    let _0x306322 = {
      [_0x41f797]: fs.readFileSync(_0x54150e),
      'mimetype': 'video/mp4',
      'fileName': _0x43b689,
      'caption': "  *Here's Your Video*\n" + Config.caption,
      'contextInfo': _0x223e8d
    };
    await _0x371506.bot.sendMessage(_0x371506.jid, _0x306322, {
      'quoted': _0x371506
    });
    try {
      return await fs.unlinkSync(_0x54150e);
    } catch {}
  } catch (_0x4b5d29) {
    console.log("here now,ytdl-core error: ", _0x4b5d29);
    try {
      let _0x9b4f56 = await yt.getInfo(_0x2581ce[0x1]);
      let _0x10bec4 = {
        'type': "video",
        'quality': _0x9b4f56.pref_Quality || 'best',
        'format': "mp4"
      };
      if (_0x9b4f56.duration >= 0x7d0) {
        _0x41f797 = 'document';
      }
      let _0x75d58f = await yt.download(_0x2581ce[0x1], _0x10bec4);
      var _0x223e8d = {
        ...(await _0x371506.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ"))
      };
      let _0x263d23 = _0x9b4f56.title || _0x75d58f || _0x2581ce[0x1];
      if (_0x75d58f) {
        await _0x371506.bot.sendMessage(_0x371506.chat, {
          [_0x41f797]: {
            'url': _0x75d58f
          },
          'fileName': _0x263d23,
          'mimetype': "video/mp4",
          'contextInfo': _0x223e8d
        });
      } else {
        await _0x371506.send("*_Video not Found_*");
      }
      try {
        fs.unlinkSync('' + _0x75d58f);
      } catch {}
      return;
    } catch (_0x183100) {
      return _0x371506.error(_0x183100 + "\n\ncommand: ytmp4", _0x183100, "*_Uhh dear, Video not Found!!_*");
    }
  }
});
smd({
  'pattern': "threads",
  'category': "downloader",
  'filename': __filename,
  'desc': "Download media from Threads."
}, async (_0x8a0300, _0x17aaf2) => {
  try {
    if (!_0x17aaf2) {
      return await _0x8a0300.send("*_Please provide a Threads link_*");
    }
    let _0x40e267 = "https://api.maher-zubair.tech/download/threads?url=" + _0x17aaf2;
    let _0x2782ef = await fetch(_0x40e267);
    let _0x18025b = await _0x2782ef.json();
    if (_0x18025b.status === 0xc8) {
      let _0x1758bd = _0x18025b.result;
      let _0x31ddde = _0x1758bd.image_urls;
      let _0x44ec09 = _0x1758bd.video_urls;
      if (_0x31ddde.length > 0x0) {
        for (let _0x24f161 of _0x31ddde) {
          await _0x8a0300.send(_0x24f161, {
            'caption': Config.caption
          }, 'image', _0x8a0300);
        }
      }
      if (_0x44ec09.length > 0x0) {
        for (let _0x2ad8ad of _0x44ec09) {
          await _0x8a0300.send(_0x2ad8ad, {
            'caption': Config.caption
          }, 'video', _0x8a0300);
        }
      }
    } else {
      await _0x8a0300.send("*_Request not be preceed!!_*");
    }
  } catch (_0x2618cc) {
    await _0x8a0300.error(_0x2618cc + "\n\ncommand: threads", _0x2618cc, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': "instagram",
  'category': 'downloader',
  'filename': __filename,
  'desc': "Download Instagram media."
}, async (_0x1cac66, _0x5392ee) => {
  try {
    if (!_0x5392ee) {
      return await _0x1cac66.send("*_Please provide an Instagram link_*");
    }
    let _0x25c908 = 'https://api.maher-zubair.tech/download/instagram?url=' + _0x5392ee;
    let _0x685a8a = await fetch(_0x25c908);
    let _0x3d04a9 = await _0x685a8a.json();
    if (_0x3d04a9.status === 0xc8) {
      let _0x140226 = _0x3d04a9.result[0x0];
      await _0x1cac66.send(_0x140226.url, {
        'caption': Config.caption
      }, 'image', _0x1cac66);
    } else {
      await _0x1cac66.send("*_Request not be preceed!!_*");
    }
  } catch (_0x34a882) {
    await _0x1cac66.error(_0x34a882 + "\n\ncommand: instagram", _0x34a882, "*_No responce from API, Sorry!!_*");
  }
});
smd({
  'pattern': 'ytmp3',
  'alias': ['yta'],
  'desc': "Downloads audio by yt link.",
  'category': 'downloader',
  'use': "<yt video url>"
}, async (_0x894d75, _0x60a5f5) => {
  let _0x373380 = _0x60a5f5 ? _0x60a5f5 : _0x894d75.reply_text;
  var _0x2db9d5 = _0x373380.toLowerCase().includes("doc") ? "document" : "audio";
  const _0x391dfd = ytIdRegex.exec(_0x373380) || [];
  if (!_0x373380 || !_0x391dfd[0x0]) {
    return await _0x894d75.reply("*_Uhh please, Provide youtube video url!_*");
  }
  try {
    let _0x6e60ae = await ytdl.getInfo(_0x391dfd[0x0]);
    if (_0x6e60ae.videoDetails.lengthSeconds >= 0x7d0) {
      _0x2db9d5 = "document";
    }
    let _0x5c080d = _0x6e60ae.videoDetails.title;
    let _0x549327 = "./temp/" + _0x391dfd[0x1] + '.mp3';
    const _0x3fe496 = ytdl(_0x391dfd[0x0], {
      'filter': _0x56c1de => _0x56c1de.audioBitrate == 0xa0 || _0x56c1de.audioBitrate == 0x80
    }).pipe(fs.createWriteStream(_0x549327));
    await new Promise((_0x246105, _0x20de80) => {
      _0x3fe496.on("error", _0x20de80);
      _0x3fe496.on("finish", _0x246105);
    });
    var _0x4a2c8a = {
      ...(await _0x894d75.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ"))
    };
    let _0x25782a = {
      [_0x2db9d5]: fs.readFileSync(_0x549327),
      'mimetype': "audio/mpeg",
      'fileName': _0x5c080d,
      'contextInfo': _0x4a2c8a
    };
    await _0x894d75.bot.sendMessage(_0x894d75.jid, _0x25782a, {
      'quoted': _0x894d75
    });
    try {
      return await fs.unlinkSync(_0x549327);
    } catch {}
  } catch (_0x1fcd1b) {
    console.log("here now,ytdl-core : ", _0x1fcd1b);
    try {
      let _0x5db906 = await yt.download(_0x391dfd[0x1], {
        'type': "audio",
        'quality': "best"
      });
      var _0x4a2c8a = {
        ...(await _0x894d75.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ"))
      };
      if (_0x5db906) {
        await _0x894d75.bot.sendMessage(_0x894d75.jid, {
          [_0x2db9d5]: {
            'url': _0x5db906
          },
          'mimetype': "audio/mpeg",
          'fileName': Config.caption,
          'contextInfo': _0x4a2c8a
        });
      } else {
        await _0x894d75.send("*_audio not Found!_*");
      }
      try {
        fs.unlinkSync(_0x5db906);
      } catch {}
    } catch (_0x548468) {
      await _0x894d75.error(_0x548468 + "\n\ncommand: ytmp3", _0x548468, "*_Uhh dear, audio file not Found!!_*");
    }
  }
});
smd({
  'pattern': "ytdoc",
  'alias': ["ytd"],
  'desc': "Downloads audio by yt link as document.",
  'category': 'downloader',
  'use': "<ytdoc video url>"
}, async (_0x2e5433, _0x247358) => {
  try {
    let _0x3f3efa = _0x247358 ? _0x247358 : _0x2e5433.reply_text;
    const _0x26d429 = ytIdRegex.exec(_0x3f3efa) || [];
    if (!_0x3f3efa || !_0x26d429[0x0]) {
      return await _0x2e5433.reply("❌Please provide me a url");
    }
    var _0x412d1b = _0x26d429[0x1];
    var _0x12c24d = false;
    try {
      let _0x36e578 = await ytdl.getInfo(_0x26d429[0x0]);
      _0x412d1b = _0x36e578.videoDetails.title;
      let _0x4ac8bd = "./temp/Asta-Md " + _0x26d429[0x1] + ".mp3";
      const _0x552053 = ytdl(_0x26d429[0x0], {
        'filter': _0x182655 => _0x182655.audioBitrate == 0xa0 || _0x182655.audioBitrate == 0x80
      }).pipe(fs.createWriteStream(_0x4ac8bd));
      _0x12c24d = _0x4ac8bd;
      await new Promise((_0xcf4571, _0x4956e0) => {
        _0x552053.on('error', _0x4956e0);
        _0x552053.on('finish', _0xcf4571);
      });
    } catch (_0x3aeb62) {
      console.log("here now,ytdl-core : ", _0x3aeb62);
      try {
        _0x12c24d = await yt.download(_0x26d429[0x1], {
          'type': "audio",
          'quality': 'best'
        });
      } catch (_0xa49dc5) {
        return await _0x2e5433.error(_0xa49dc5 + "\n\ncommand: ytdoc", _0xa49dc5, "*_file not Found!!_*");
      }
    }
    if (!_0x12c24d) {
      return await _0x2e5433.send("*_Uhh dear, video not found_*");
    }
    var _0x3ae554 = {
      ...(await _0x2e5433.bot.contextInfo(Config.botname, "ʏᴛᴅᴏᴄ ᴍᴘ3 ʏᴏᴜᴛᴜʙᴇ"))
    };
    let _0x438d40 = {
      'document': {
        'url': _0x12c24d
      },
      'mimetype': "audio/mpeg",
      'fileName': "Asta-Md--" + _0x26d429[0x1] + ".mp3",
      'caption': Config.caption,
      'contextInfo': _0x3ae554
    };
    await _0x2e5433.bot.sendMessage(_0x2e5433.jid, _0x438d40, {
      'quoted': _0x2e5433
    });
    try {
      return await fs.unlinkSync(_0x12c24d);
    } catch {}
  } catch (_0x2a34e3) {
    await _0x2e5433.error(_0x2a34e3 + "\n\ncommand: ytdoc", _0x2a34e3, "*_audio file not Found!!_*");
  }
});
cmd({
  'on': "text"
}, async (_0x17b4f0, _0x3a3606, {
  isCreator: _0x65820c
}) => {
  if (_0x17b4f0.quoted && _0x17b4f0.text) {
    const _0x107945 = _0x17b4f0.quoted.text.split("\n");
    if (_0x107945[0x0].includes("ANITA • sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ")) {
      const _0x2e95a1 = _0x107945.find(_0x4a27fa => _0x4a27fa.startsWith("Url :"));
      let _0x52a042 = _0x2e95a1.replace("Url :", '').trim();
      try {
        await _0x17b4f0.sendMessage(_0x17b4f0.chat, {
          'react': {
            'text': '✨',
            'key': _0x17b4f0.key
          }
        });
        let _0x459295;
        if (_0x17b4f0.text.startsWith('1')) {
          let _0x4307db = _0x3a3606.toLowerCase().includes('doc') ? "document" : _0x3a3606.toLowerCase().includes("mp3") ? "audio" : "video";
          _0x459295 = './temp/ytsong.mp4';
          const _0x313022 = ytdl(_0x52a042, {
            'filter': _0x4589ca => _0x4589ca.itag == 0x16 || _0x4589ca.itag == 0x12
          }).pipe(fs.createWriteStream(_0x459295));
          await new Promise((_0x15e53d, _0x2a7ede) => {
            _0x313022.on("error", _0x2a7ede);
            _0x313022.on('finish', _0x15e53d);
          });
          await _0x17b4f0.sendMessage(_0x17b4f0.chat, {
            [_0x4307db]: fs.readFileSync(_0x459295),
            'mimetype': _0x4307db == "audio" ? "audio/mpeg" : "video/mp4",
            'fileName': Config.caption,
            'caption': Config.caption
          }, {
            'quoted': _0x17b4f0
          });
        } else {
          if (_0x17b4f0.text.startsWith('2')) {
            let _0x5ecbaa = _0x3a3606.toLowerCase().includes('doc') ? "document" : 'audio';
            _0x459295 = './temp/ytsong.mp3';
            const _0x479a64 = ytdl(_0x52a042, {
              'filter': _0x5320aa => _0x5320aa.audioBitrate == 0xa0 || _0x5320aa.audioBitrate == 0x80
            }).pipe(fs.createWriteStream(_0x459295));
            await new Promise((_0x4d73a3, _0x2d5f50) => {
              _0x479a64.on("error", _0x2d5f50);
              _0x479a64.on("finish", _0x4d73a3);
            });
            await _0x17b4f0.sendMessage(_0x17b4f0.chat, {
              [_0x5ecbaa]: fs.readFileSync(_0x459295),
              'mimetype': "audio/mpeg",
              'fileName': Config.caption
            }, {
              'quoted': _0x17b4f0
            });
          }
        }
        try {
          return fs.unlinkSync(_0x459295);
        } catch (_0x3593ab) {}
      } catch (_0x1a67ee) {
        return await _0x17b4f0.reply("Error While Downloading Video : " + _0x1a67ee);
      }
    } else {
      if (_0x107945[0x0].includes("ᴀsᴛᴀ-ᴍᴅ • ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ")) {
        let _0x369b84 = '*' + _0x17b4f0.text.split(" ")[0x0] + " : ";
        const _0x4d9824 = _0x107945.find(_0x2cadf6 => _0x2cadf6.startsWith(_0x369b84));
        if (_0x4d9824) {
          try {
            let _0x1a06b8 = _0x4d9824.replace(_0x369b84, '').split('*')[0x0].trim();
            const _0x5b5cb5 = _0x107945[_0x107945.indexOf(_0x4d9824) + 0x1];
            const _0x11323a = _0x5b5cb5.split('*')[0x1].replace("Url : ", '').trim();
            if (_0x11323a.startsWith("http")) {
              await _0x17b4f0.sendMessage(_0x17b4f0.chat, {
                'react': {
                  'text': '✨',
                  'key': _0x17b4f0.key
                }
              });
              let _0xeac900 = _0x3a3606.toLowerCase().includes("doc") ? "document" : _0x3a3606.toLowerCase().includes("mp3") ? "audio" : "video";
              let _0x17a744 = "./temp/Yts Download " + Math.floor(Math.random() * 0x2710) + ".mp4";
              const _0x40b1b6 = ytdl(_0x11323a, {
                'filter': _0x3ee5be => _0x3ee5be.itag == 0x16 || _0x3ee5be.itag == 0x12
              }).pipe(fs.createWriteStream(_0x17a744));
              await new Promise((_0x23a3bd, _0x2020c0) => {
                _0x40b1b6.on("error", _0x2020c0);
                _0x40b1b6.on('finish', _0x23a3bd);
              });
              await _0x17b4f0.sendMessage(_0x17b4f0.chat, {
                [_0xeac900]: fs.readFileSync(_0x17a744),
                'mimetype': _0xeac900 == "audio" ? "audio/mpeg" : "video/mp4",
                'fileName': '' + _0x1a06b8,
                'caption': _0x1a06b8 + " \n " + Config.caption
              }, {
                'quoted': _0x17b4f0
              });
              try {
                fs.unlink(_0x17a744);
              } catch (_0x3fc102) {}
            }
          } catch (_0xe60413) {
            _0x17b4f0.error(_0xe60413 + "\n\nCommand yts Listener", _0xe60413, "*Video Not Found!*");
          }
        }
      } else {
        if (_0x107945[0x0].includes("ᴀsᴛᴀ-ᴍᴅ • ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪsᴛ")) {
          let _0x56b6b7 = '*' + _0x17b4f0.text.split(" ")[0x0] + " : ";
          const _0x510f7d = _0x107945.find(_0x1aa6bb => _0x1aa6bb.startsWith(_0x56b6b7));
          if (_0x510f7d) {
            try {
              const _0x58c45e = _0x107945[_0x107945.indexOf(_0x510f7d) + 0x1];
              const _0x10c5d9 = _0x58c45e.split('*')[0x1].replace("Id : ", '').trim();
              await _0x17b4f0.sendMessage(_0x17b4f0.chat, {
                'react': {
                  'text': '✨',
                  'key': _0x17b4f0.key
                }
              });
              let _0x3e18f2 = await download(_0x10c5d9);
              let _0x5a4af6 = "*App Name :* " + _0x3e18f2.name;
              _0x5a4af6 += "\n*App id        :* " + _0x3e18f2['package'];
              _0x5a4af6 += "\n*Last Up       :* " + _0x3e18f2.lastup;
              _0x5a4af6 += "\n*App Size     :* " + _0x3e18f2.size;
              _0x5a4af6 += "\n               \n" + Config.caption;
              let _0xa11857 = {
                'document': {
                  'url': _0x3e18f2.dllink
                },
                'mimetype': "application/vnd.android.package-archive",
                'fileName': _0x3e18f2.name + ".apk",
                'caption': _0x5a4af6
              };
              return await _0x17b4f0.sendMessage(_0x17b4f0.chat, _0xa11857, {
                'quoted': _0x17b4f0
              });
            } catch (_0x150c27) {
              _0x17b4f0.reply("*_Can't Download, App Limit Exceed_*");
            }
          }
        }
      }
    }
  }
});
smd({
  'pattern': "playlist",
  'desc': "Downloads video from playlist.",
  'category': "downloader",
  'filename': __filename,
  'use': "<yt playlist url>"
}, async (_0x2ed6e2, _0x59ac7e, {
  Void: _0x17acda
}) => {
  try {
    var _0x19523f = _0x59ac7e.toLowerCase().includes('doc') ? 'document' : _0x59ac7e.toLowerCase().includes("mp3") || _0x59ac7e.toLowerCase().includes("audio") ? "audio" : "video";
    if (!_0x59ac7e || !_0x59ac7e.includes('=') || !/http/gi.test(_0x59ac7e)) {
      return await _0x2ed6e2.reply("*Use Playlist URL, Like: " + prefix + "playlist https://www.youtube.com/playlist?list=PLZeei0S6_unh-jTeWsJI1mOI6snxeHn5c*");
    }
    let _0x2ed3a3 = _0x59ac7e.split('=')[0x1].split(" ")[0x0];
    console.log(_0x2ed3a3);
    var _0x891e22 = {
      'listId': _0x2ed3a3
    };
    yts(_0x891e22, async function (_0x91472a, _0x1bf69d) {
      if (_0x91472a) {
        throw _0x91472a;
      }
      _0x2ed6e2.reply("This Process will take a bit time.");
      for (let _0x10c0d9 = 0x0; _0x10c0d9 < _0x1bf69d.videos.length; _0x10c0d9++) {
        if (_0x1bf69d.videos[_0x10c0d9].videoId === undefined) {
          continue;
        }
        let _0x39bdb0 = _0x1bf69d.videos[_0x10c0d9].videoId;
        try {
          let _0x5ede7a = await ytdl.getInfo(_0x39bdb0);
          if (_0x5ede7a.videoDetails.lengthSeconds >= 0x7d0) {
            _0x19523f = "document";
          }
          let _0x39a20 = _0x5ede7a.videoDetails.title;
          let _0x289c0a = '' + Math.floor(Math.random() * 0x2710) + ".mp4";
          const _0xd6c8b3 = ytdl(_0x39bdb0, {
            'filter': _0x589285 => _0x589285.itag == 0x16 || _0x589285.itag == 0x12
          }).pipe(fs.createWriteStream("./temp/" + _0x289c0a));
          await new Promise((_0x8dd28, _0x53084f) => {
            _0xd6c8b3.on("error", _0x53084f);
            _0xd6c8b3.on("finish", _0x8dd28);
          });
          let _0x77ec2d = fs.statSync("./temp/" + _0x289c0a);
          let _0xff4e79 = _0x77ec2d.size;
          let _0x59d906 = _0xff4e79 / 0x100000;
          if (_0x59d906 <= 0x190) {
            let _0x3abbce = {
              [_0x19523f]: fs.readFileSync("./temp/" + _0x289c0a),
              'mimetype': _0x19523f == 'audio' ? "audio/mpeg" : "video/mp4",
              'fileName': '' + _0x39a20,
              'caption': _0x19523f == "document" ? '' : " ⿻ Title : " + _0x39a20 + "\n ⿻ File Size : " + _0x59d906 + " MB",
              'headerType': 0x4,
              'contextInfo': {
                'externalAdReply': {
                  'title': Config.botname,
                  'body': _0x2ed6e2.pushName,
                  'thumbnail': log0,
                  'renderLargerThumbnail': true,
                  'mediaType': 0x2,
                  'mediaUrl': gurl,
                  'sourceUrl': gurl
                }
              }
            };
            _0x17acda.sendMessage(_0x2ed6e2.chat, _0x3abbce, {
              'quoted': _0x2ed6e2
            });
          } else {
            _0x2ed6e2.reply("❌ File size bigger than 400mb.");
          }
          try {
            fs.unlinkSync("./temp/" + _0x289c0a);
          } catch (_0x290cd4) {}
        } catch (_0x4e97c0) {
          console.log(_0x4e97c0);
        }
      }
    });
  } catch (_0x3c5739) {
    console.log(_0x3c5739);
  }
});
smd({
  'pattern': "video",
  'desc': "Downloads video from yt.",
  'category': "downloader",
  'filename': __filename,
  'use': "<faded-Alan Walker>"
}, async (_0x59a9c1, _0x341af5) => {
  let _0x347a41 = _0x341af5 ? _0x341af5 : _0x59a9c1.reply_text;
  var _0x2e9faf = _0x341af5.toLowerCase().includes("doc") ? 'document' : "video";
  if (!_0x347a41) {
    return _0x59a9c1.reply("*Use : " + prefix + "video Al Quran!*");
  }
  let _0x5e3f14 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0x341af5) || [];
  let _0x3d259a = _0x5e3f14[0x0] || false;
  try {
    if (!_0x3d259a) {
      let _0x110866 = await yts(_0x347a41);
      let _0x436791 = _0x110866.videos[0x0];
      _0x3d259a = _0x436791.url;
      _0x5e3f14 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.exec(_0x3d259a);
    }
  } catch {}
  try {
    let _0xccbb8c = await ytdl.getInfo(_0x3d259a);
    let _0x190e90 = Math.floor(i.timestamp * 0x3c);
    if (_0x190e90 >= 0x7d0) {
      _0x2e9faf = "document";
    }
    let _0x2aaa43 = _0xccbb8c.videoDetails.title;
    let _0x4d3924 = './temp/' + _0x5e3f14[0x1] + ".mp4";
    const _0x3a6be4 = ytdl(_0x3d259a, {
      'filter': _0x5b64b7 => _0x5b64b7.itag == 0x16 || _0x5b64b7.itag == 0x12
    }).pipe(fs.createWriteStream(_0x4d3924));
    await new Promise((_0x4e309f, _0x1b63a8) => {
      _0x3a6be4.on('error', _0x1b63a8);
      _0x3a6be4.on('finish', _0x4e309f);
    });
    var _0x378e64 = {
      ...(await _0x59a9c1.bot.contextInfo(Config.botname, "ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
    };
    let _0x1c9917 = {
      [_0x2e9faf]: fs.readFileSync(_0x4d3924),
      'mimetype': 'video/mp4',
      'fileName': _0x2aaa43,
      'caption': Config.caption,
      'contextInfo': _0x378e64
    };
    await _0x59a9c1.bot.sendMessage(_0x59a9c1.jid, _0x1c9917, {
      'quoted': _0x59a9c1
    });
    try {
      fs.unlinkSync(_0x4d3924);
    } catch {}
    ;
  } catch (_0x4ee942) {
    console.log("ytdl Download video error:", _0x4ee942);
    try {
      let _0x3a936c = await yt.getInfo(_0x5e3f14[0x1]);
      if (_0x3a936c.duration >= 0x7d0) {
        _0x2e9faf = "document";
      }
      let _0x5681fe = {
        'type': "video",
        'quality': _0x3a936c.pref_Quality || "best",
        'format': 'mp4'
      };
      let _0x5811e5 = await yt.download(_0x5e3f14[0x1], _0x5681fe);
      var _0x378e64 = {
        ...(await _0x59a9c1.bot.contextInfo(Config.botname, "ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
      };
      let _0x353b23 = _0x3a936c.title || _0x5811e5 || _0x5e3f14[0x1] || "ANITA -- YT Video";
      if (_0x5811e5) {
        await _0x59a9c1.bot.sendMessage(_0x59a9c1.chat, {
          [_0x2e9faf]: {
            'url': _0x5811e5
          },
          'fileName': _0x353b23,
          'caption': Config.caption,
          'mimetype': "video/mp4",
          'contextInfo': _0x378e64
        });
      } else {
        await _0x59a9c1.send("Video not Found");
      }
      try {
        fs.unlinkSync('' + _0x5811e5);
      } catch {}
    } catch (_0x4c1172) {
      return _0x59a9c1.error(_0x4c1172 + "\n\ncommand: video", _0x4c1172, "*_Video not Found_*");
    }
  }
});