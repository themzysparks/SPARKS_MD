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
const fs = require("fs-extra");
const path = require("path");
const cheerio = require("cheerio");
const BodyForm = require('form-data');
const {
  spawn
} = require("child_process");
function pinterest(_0x52108e) {
  return new Promise(async (_0x3198e3, _0x249552) => {
    axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + _0x52108e, {
      'headers': {
        'cookie': "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({
      data: _0x5ecf54
    }) => {
      const _0x174484 = cheerio.load(_0x5ecf54);
      const _0x163db0 = [];
      const _0x5af019 = [];
      _0x174484("div > a").get().map(_0xb01b2 => {
        const _0x11c633 = _0x174484(_0xb01b2).find("img").attr('src');
        _0x163db0.push(_0x11c633);
      });
      _0x163db0.forEach(_0x348556 => {
        if (_0x348556 == undefined) {
          return;
        }
        _0x5af019.push(_0x348556.replace(/236/g, "736"));
      });
      _0x5af019.shift();
      _0x3198e3(_0x5af019);
    });
  });
}
function TelegraPh(_0xf59e82) {
  return new Promise(async (_0x5c8286, _0x4e8eb5) => {
    if (!fs.existsSync(_0xf59e82)) {
      return _0x4e8eb5(new Error("File not Found"));
    }
    try {
      const _0x4b7e96 = new BodyForm();
      _0x4b7e96.append('file', fs.createReadStream(_0xf59e82));
      const _0x5cb99d = await axios({
        'url': "https://telegra.ph/upload",
        'method': 'POST',
        'headers': {
          ..._0x4b7e96.getHeaders()
        },
        'data': _0x4b7e96
      });
      return _0x5c8286("https://telegra.ph" + _0x5cb99d.data[0x0].src);
    } catch (_0x94d1e) {
      return _0x4e8eb5(new Error(String(_0x94d1e)));
    }
  });
}
async function UploadFileUgu(_0x36ef54) {
  return new Promise(async (_0x29a01, _0x1c55af) => {
    const _0x326d3b = new BodyForm();
    _0x326d3b.append("files[]", fs.createReadStream(_0x36ef54));
    await axios({
      'url': 'https://uguu.se/upload.php',
      'method': 'POST',
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
        ..._0x326d3b.getHeaders()
      },
      'data': _0x326d3b
    }).then(_0x4ea722 => {
      _0x29a01(_0x4ea722.data.files[0x0]);
    })["catch"](_0x3df17e => _0x1c55af(_0x3df17e));
  });
}
async function createUrl(_0x35a531, _0x1d43e5 = '1') {
  try {
    if (!_0x35a531) {
      return;
    }
    if (!_0x1d43e5 || _0x1d43e5 === '1' || _0x1d43e5.toLowerCase() === "telegraph") {
      return await TelegraPh(_0x35a531);
    }
    if (_0x1d43e5 === '2' || _0x1d43e5.toLowerCase().includes("ugu")) {
      return await UploadFileUgu(_0x35a531);
    }
  } catch (_0x3f1e6e) {
    console.log("ERROR IN SCRAPPING FOR CREATE URL()\n", _0x3f1e6e);
  }
}
function webp2mp4File(_0x50d9f9) {
  return new Promise((_0x522b7d, _0xaabe4a) => {
    const _0x456b7f = new BodyForm();
    _0x456b7f.append('new-image-url', '');
    _0x456b7f.append('new-image', fs.createReadStream(_0x50d9f9));
    axios({
      'method': "post",
      'url': 'https://s6.ezgif.com/webp-to-mp4',
      'data': _0x456b7f,
      'headers': {
        'Content-Type': "multipart/form-data; boundary=" + _0x456b7f._boundary
      }
    }).then(({
      data: _0x1469af
    }) => {
      const _0x15d365 = new BodyForm();
      const _0x5b2256 = cheerio.load(_0x1469af);
      const _0x14181e = _0x5b2256("input[name=\"file\"]").attr("value");
      _0x15d365.append("file", _0x14181e);
      _0x15d365.append("convert", "Convert WebP to MP4!");
      axios({
        'method': "post",
        'url': "https://ezgif.com/webp-to-mp4/" + _0x14181e,
        'data': _0x15d365,
        'headers': {
          'Content-Type': "multipart/form-data; boundary=" + _0x15d365._boundary
        }
      }).then(({
        data: _0x1956b9
      }) => {
        const _0x19cd4b = cheerio.load(_0x1956b9);
        const _0x276c5e = "https:" + _0x19cd4b("div#output > p.outfile > video > source").attr("src");
        _0x522b7d({
          'status': true,
          'message': "Created By Secktor Botto",
          'result': _0x276c5e
        });
      })["catch"](_0xaabe4a);
    })["catch"](_0xaabe4a);
  });
}
function wikimedia(_0x14dc81) {
  return new Promise((_0x5417c7, _0x59ece) => {
    axios.get('https://commons.wikimedia.org/w/index.php?search=' + _0x14dc81 + '&title=Special:MediaSearch&go=Go&type=image').then(_0x52158e => {
      let _0x2dc763 = cheerio.load(_0x52158e.data);
      let _0x1e2fef = [];
      _0x2dc763(".sdms-search-results__list-wrapper > div > a").each(function (_0x33f093, _0x25afa9) {
        _0x1e2fef.push({
          'title': _0x2dc763(_0x25afa9).find("img").attr('alt'),
          'source': _0x2dc763(_0x25afa9).attr("href"),
          'image': _0x2dc763(_0x25afa9).find("img").attr("data-src") || _0x2dc763(_0x25afa9).find("img").attr("src")
        });
      });
      _0x5417c7(_0x1e2fef);
    });
  });
}
function ffmpeg(_0x459455, _0x174c8e = [], _0x49ed55 = '', _0x5a41b4 = '') {
  return new Promise(async (_0x19abaa, _0xe52985) => {
    try {
      let _0x3a6d65 = path.join(__dirname, './', +new Date() + '.' + _0x49ed55);
      let _0x5eaafd = _0x3a6d65 + '.' + _0x5a41b4;
      await fs.promises.writeFile(_0x3a6d65, _0x459455);
      spawn("ffmpeg", ['-y', '-i', _0x3a6d65, ..._0x174c8e, _0x5eaafd]).on("error", _0xe52985).on("close", async _0x1599e3 => {
        try {
          await fs.promises.unlink(_0x3a6d65);
          if (_0x1599e3 !== 0x0) {
            return _0xe52985(_0x1599e3);
          }
          _0x19abaa(await fs.promises.readFile(_0x5eaafd));
          await fs.promises.unlink(_0x5eaafd);
        } catch (_0x37f4ed) {
          _0xe52985(_0x37f4ed);
        }
      });
    } catch (_0x508695) {
      _0xe52985(_0x508695);
    }
  });
}
function toAudio(_0x196642, _0x532e0b) {
  return ffmpeg(_0x196642, ["-vn", "-ac", '2', "-b:a", "128k", "-ar", "44100", '-f', "mp3"], _0x532e0b, "mp3");
}
function toPTT(_0x5cb9a2, _0x3cb868) {
  return ffmpeg(_0x5cb9a2, ['-vn', "-c:a", "libopus", "-b:a", '128k', "-vbr", 'on', "-compression_level", '10'], _0x3cb868, "opus");
}
function toVideo(_0x1d7139, _0x1d7e37) {
  return ffmpeg(_0x1d7139, ["-c:v", "libx264", '-c:a', 'aac', "-ab", '128k', '-ar', "44100", '-crf', '32', "-preset", "slow"], _0x1d7e37, "mp4");
}
const Config = require('../config');
if (fs.existsSync('./source/' + Config.LANG + ".json")) {
  var json = JSON.parse(fs.readFileSync("./source/" + Config.LANG + ".json"));
} else {
  var json = JSON.parse(fs.readFileSync('./source/asta.json'));
}
function ffancy(_0x18f184) {
  return new Promise((_0x50c264, _0x239034) => {
    axios.get("http://qaz.wtf/u/convert.cgi?text=" + _0x18f184).then(({
      data: _0x18e3a3
    }) => {
      let _0x1965b2 = cheerio.load(_0x18e3a3);
      let _0x1c2a90 = [];
      _0x1965b2("table > tbody > tr").each(function (_0x330b71, _0x3e11ae) {
        _0x1c2a90.push({
          'name': _0x1965b2(_0x3e11ae).find("td:nth-child(1) > span").text(),
          'result': _0x1965b2(_0x3e11ae).find("td:nth-child(2)").text().trim()
        });
      });
      _0x50c264(_0x1c2a90);
    });
  });
}
async function fancy(_0x447bce, _0x517fa8) {
  try {
    let _0x1a22e1 = await ffancy(_0x447bce);
    return _0x1a22e1[_0x517fa8].result;
  } catch (_0x57098e) {
    console.log(_0x57098e);
  }
}
async function randomfancy(_0x2be626) {
  try {
    let _0x805dc5 = await ffancy(_0x2be626);
    return _0x805dc5[0x0].result;
  } catch (_0x3c8cfc) {
    console.log("ERRO IN RANDOME FANCY SCRAPPER\n", _0x3c8cfc);
    return _0x2be626;
  }
}
function getString(_0x13e44c) {
  return json.STRINGS[_0x13e44c];
}
function tlang(_0x19137c = false) {
  let _0x590346 = json.STRINGS.global;
  return _0x19137c ? _0x590346[_0x19137c] : _0x590346;
}
function botpic() {
  return new Promise((_0x32429b, _0xab0d23) => {
    let _0x5e0611 = json.STRINGS.global;
    let _0x2e7280 = ['' + _0x5e0611.pic1, '' + _0x5e0611.pic2, '' + _0x5e0611.pic3, '' + _0x5e0611.pic4, '' + _0x5e0611.pic5, '' + _0x5e0611.pic6];
    const _0x42d43e = _0x2e7280[Math.floor(Math.random() * _0x2e7280.length)];
    _0x32429b(_0x42d43e);
  });
}
async function isAdmin(_0x30192a, _0x3e17dd, _0x2e446c) {
  let _0x5a30af = await _0x30192a.groupMetadata(_0x3e17dd);
  let _0x48903f = _0x5a30af.participants.reduce((_0x5321e3, _0x52be5d) => (_0x52be5d.admin ? _0x5321e3.push({
    'id': _0x52be5d.id,
    'admin': _0x52be5d.admin
  }) : [..._0x5321e3]) && _0x5321e3, []);
  var _0x20606a = _0x48903f.find(_0x1431e7 => _0x1431e7.id === _0x2e446c);
  return _0x20606a;
}
async function syncgit() {
  const _0x3c4874 = require("simple-git");
  const _0x1ac298 = _0x3c4874();
  await _0x1ac298.fetch();
  var _0x1fd21f = await _0x1ac298.log(["main..origin/main"]);
  return _0x1fd21f;
}
async function sync() {
  const _0x137194 = require("simple-git");
  const _0x2998b5 = _0x137194();
  await _0x2998b5.fetch();
  var _0x489f09 = await _0x2998b5.log(['main..origin/main']);
  var _0x1bb930 = '';
  _0x489f09.all.map(_0x54beb5 => {
    _0x1bb930 += "● [" + _0x54beb5.date.substring(0x0, 0xa) + "]: " + _0x54beb5.message + "\n- By:" + _0x54beb5.author_name + "\n";
  });
  return _0x1bb930;
}
function ringtone(_0x4067a9) {
  return new Promise((_0x5b4c93, _0x36b73a) => {
    axios.get("https://meloboom.com/en/search/" + _0x4067a9).then(_0x34e4aa => {
      let _0xb3da56 = cheerio.load(_0x34e4aa.data);
      let _0x128f6e = [];
      _0xb3da56("#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li").each(function (_0x5257c4, _0x377802) {
        _0x128f6e.push({
          'title': _0xb3da56(_0x377802).find('h4').text(),
          'source': 'https://meloboom.com/' + _0xb3da56(_0x377802).find('a').attr("href"),
          'audio': _0xb3da56(_0x377802).find('audio').attr("src")
        });
      });
      _0x5b4c93(_0x128f6e);
    });
  });
}
function styletext(_0x5d28c5) {
  return new Promise((_0x6b1a0e, _0x2c0027) => {
    axios.get("http://qaz.wtf/u/convert.cgi?text=" + _0x5d28c5).then(({
      data: _0x166394
    }) => {
      let _0x2970c2 = cheerio.load(_0x166394);
      let _0x1022af = [];
      _0x2970c2("table > tbody > tr").each(function (_0x5de1b9, _0x569a39) {
        _0x1022af.push({
          'name': _0x2970c2(_0x569a39).find("td:nth-child(1) > span").text(),
          'result': _0x2970c2(_0x569a39).find("td:nth-child(2)").text().trim()
        });
      });
      _0x6b1a0e(_0x1022af);
    });
  });
}
function adultvid() {
  return new Promise((_0x47dfe0, _0x1d7af7) => {
    axios.get("https://tikporntok.com/?random=1").then(_0x383607 => {
      const _0x476741 = cheerio.load(_0x383607.data);
      const _0x325c13 = {
        title: _0x476741("article > h1").text(),
        "source": _0x476741("article > div.video-wrapper.vxplayer").attr("data-post") || "Web Not Response",
        "thumb": _0x476741("article > div.video-wrapper.vxplayer > div.vx_el").attr("data-poster") || "https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png",
        "desc": _0x476741("article > div.intro").text(),
        "upload": _0x476741("article > div.single-pre-meta.ws.clearfix > time").text(),
        "like": _0x476741("article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span").text(),
        "dislike": _0x476741("article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span").text(),
        "favorite": _0x476741("article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span").text(),
        views: _0x476741("article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span").text(),
        "tags": _0x476741("article > div.post-tags").text(),
        "video": _0x476741("article > div.video-wrapper.vxplayer > div.vx_el").attr("src") || _0x476741("article > div.video-wrapper.vxplayer > div.vx_el").attr("data-src") || "https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png"
      };
      _0x47dfe0(_0x325c13);
    });
  });
}
function hentai() {
  return new Promise((_0x2e7f47, _0x1d7856) => {
    const _0x5639e0 = Math.floor(Math.random() * 0x481);
    axios.get("https://sfmcompile.club/page/" + _0x5639e0).then(_0x15c979 => {
      const _0x30327a = cheerio.load(_0x15c979.data);
      const _0x444f0c = [];
      _0x30327a("#primary > div > div > ul > li > article").each(function (_0x3a5afa, _0x516363) {
        _0x444f0c.push({
          'title': _0x30327a(_0x516363).find("header > h2").text(),
          'link': _0x30327a(_0x516363).find("header > h2 > a").attr("href"),
          'category': _0x30327a(_0x516363).find("header > div.entry-before-title > span > span").text().replace("in ", ''),
          'share_count': _0x30327a(_0x516363).find("header > div.entry-after-title > p > span.entry-shares").text(),
          'views_count': _0x30327a(_0x516363).find("header > div.entry-after-title > p > span.entry-views").text(),
          'type': _0x30327a(_0x516363).find("source").attr('type') || "image/jpeg",
          'video_1': _0x30327a(_0x516363).find("source").attr("src") || _0x30327a(_0x516363).find("img").attr("data-src"),
          'video_2': _0x30327a(_0x516363).find("video > a").attr("href") || ''
        });
      });
      _0x2e7f47(_0x444f0c);
    });
  });
}
async function Insta(_0x20eeba) {
  const _0x418f3a = [];
  try {
    const _0x5e7879 = {
      'url': _0x20eeba,
      'submit': ''
    };
    const {
      data: _0x52d683
    } = await axios("https://downloadgram.org/", {
      'method': 'POST',
      'data': _0x5e7879
    });
    const _0x1f9549 = cheerio.load(_0x52d683);
    _0x1f9549("#downloadhere > a").each(function (_0x26c4d1, _0x8a0624) {
      var _0x108b08 = _0x1f9549(_0x8a0624).attr("href");
      if (_0x108b08) {
        _0x418f3a.push(_0x108b08);
      }
    });
  } catch (_0x14137b) {
    console.log("ERROR IN INSTA SCRAPING()\n", _0x14137b);
    return;
  }
  return _0x418f3a;
}
const mediafireDl = async _0xca3691 => {
  const _0x10dc05 = await axios.get(_0xca3691);
  const _0x432015 = cheerio.load(_0x10dc05.data);
  const _0x15d555 = [];
  const _0x21629c = _0x432015('a#downloadButton').attr("href");
  const _0xe3c8d2 = _0x432015("a#downloadButton").text().replace('Download', '').replace('(', '').replace(')', '').replace("\n", '').replace("\n", '').replace("                         ", '');
  const _0x2ca3c3 = _0x21629c.split('/');
  const _0x3d9844 = _0x2ca3c3[0x5];
  mime = _0x3d9844.split('.');
  mime = mime[0x1];
  _0x15d555.push({
    'nama': _0x3d9844,
    'mime': mime,
    'size': _0xe3c8d2,
    'link': _0x21629c
  });
  return _0x15d555;
};
const embarrassing_questions_truth = "What was the last thing you searched for on your phone?,If you had to choose between going naked or having your thoughts appear in thought bubbles above your head for everyone to read which would you choose?,Have you ever walked in on your parents doing it?,After you've dropped a piece of food what's the longest time you've left it on the ground and then ate it?,Have you ever tasted a booger?,Have you ever played Cards Against Humanity with your parents?,What's the first thing you would do if you woke up one day as the opposite sex?,Have you ever peed in the pool?,Who do you think is the worst dressed person in this room?,Have you ever farted in an elevator?,Of the people in this room who do you want to trade lives with?,What are some things you think about when sitting on the toilet?,Did you have an imaginary friend growing up?,Do you cover your eyes during a scary part in a movie?,Have you ever practiced kissing in a mirror?,Did your parents ever give you the “birds and the bees” talk?,What is your guilty pleasure?,What is your worst habit?,Has anyone ever walked in on you when going #2 in the bathroom?,Have you ever had a wardrobe malfunction?,Have you ever walked into a wall?,Do you pick your nose?,Do you sing in the shower?,Have you ever peed yourself?,What was your most embarrassing moment in public?,Have you ever farted loudly in class?,Do you ever talk to yourself in the mirror?,You’re in a public restroom and just went #2 then you realized your stall has no toilet paper. What do you do?,What would be in your web history that you’d be embarrassed if someone saw?,Have you ever tried to take a sexy picture of yourself?,Do you sleep with a stuffed animal?,Do you drool in your sleep?,Do you talk in your sleep?,Who is your secret crush?,Who do you like the least in this room and why?,What does your dream boy or girl look like?,What is your go-to song for the shower?,Who is the sexiest person in this room?,How would you rate your looks on a scale of 1 to 10?,Would you rather have sex with [insert name] in secret or not have sex with that person but everyone thinks you did?,What don't you like about me?,What color underwear are you wearing right now?,What was the last thing you texted?,If you were rescuing people from a burning building and you had to leave one person behind from this room who would it be?,Do you think you'll marry your current girlfriend/boyfriend?,How often do you wash your undergarments?,Have you ever tasted ear wax?,Have you ever farted and then blamed someone else?,Have you ever tasted your sweat?,What is the most illegal thing you have ever done?,Who is your favorite? Mom or Dad?,Would you trade your sibling in for a million dollars?,Would you trade in your dog for a million dollars?,What is your biggest pet peeve?,If you were allowed to marry more than one person would you? Who would you choose to marry?,Would you rather lose your sex organs forever or gain 200 pounds?,Would you choose to save 100 people without anyone knowing about it or not save them but have everyone praise you for it?,If you could only hear one song for the rest of your life what would it be?,If you lost one day of your life every time you said a swear word would you try not to do it?,Who in this room would be the worst person to date? Why?,Would you rather live with no internet or no A/C or heating?,If someone offered you $1 million to break up with your girlfriend/boyfriend would you do it?,If you were reborn what decade would you want to be born in?,If you could go back in time in erase one thing you said or did what would it be?,Has your boyfriend or girlfriend ever embarrassed you?,Have you ever thought about cheating on your partner?,If you could suddenly become invisible what would you do?,Have you ever been caught checking someone out?,Have you ever waved at someone thinking they saw you when really they didn't? What did you do when you realized it?,What's the longest time you've stayed in the bathroom and why did you stay for that long?,What's the most unflattering school picture of you?,Have you ever cried because you missed your parents so much?,Would you rather be caught picking your nose or picking a wedgie?,Describe the strangest dream you've ever had. Did you like it?,Have you ever posted something on social media that you regret?,What is your biggest fear?,Do you pee in the shower?,Have you ever ding dong ditched someone?,The world ends next week and you can do anything you want (even if it's illegal). What would you do?,Would you wear your shirt inside out for a whole day if someone paid you $100?,What is the most childish thing that you still do?,How far would you go to land the guy or girl of your dreams?,Tell us about a time you embarrassed yourself in front of a crush.,Have you ever kept a library book?,Who is one person you pretend to like but actually don’t?,What children’s movie could you watch over and over again?,Do you have bad foot odor?,Do you have any silly nicknames?,When was the last time you wet the bed?,How many pancakes have you eaten in a single sitting?,Have you ever accidentally hit something with your car?,If you had to make out with any Disney character who would it be?,Have you ever watched a movie you knew you shouldn’t?,Have you ever wanted to try LARP (Live Action Role-Play)?,What app on your phone do you waste the most time on?,Have you ever pretended to be sick to get out of something? If so what was it?,What is the most food you’ve eaten in a single sitting?,Do you dance when you’re by yourself?,Would you have voted for or against Trump?,What song on the radio do you sing with every time it comes on?,Do you sleep with a stuffed animal?,Do you own a pair of footie pajamas?,Are you scared of the dark?,What ‘As seen on TV’ product do you secretly want to buy?,Do you still take bubble baths?,If you were home by yourself all day what would you do?,How many selfies do you take a day?,What is something you’ve done to try to be ‘cooler’?,When was the last time you brushed your teeth?,Have you ever used self-tanner?,What do your favorite pajamas look like?,Do you have a security blanket?,Have you ever eaten something off the floor?,Have you ever butt-dialed someone?,Do you like hanging out with your parents?,Have you ever got caught doing something you shouldn’t?,What part of your body do you love and which part do you hate?,Have you ever had lice?,Have you ever pooped your pants?,What was the last R-rated movie you watched?,Do you lick your plate?,What is something that no one else knows about you?,Do you write in a diary?".split(',');
const truth_girl_questions = "What is the worst date you’ve ever been on?,Have you ever had a crush on a friend’s boyfriend/girlfriend?,If you had to make out with a boy at school who would it be?,Would you rather go for a month without washing your hair or go for a day without wearing a bra?,Have you ever asked someone out?,Have you ever had a crush on a person at least 10 years older than you?,Who is the worst kisser you’ve kissed?,What size is your bra?,Do you wear tighty whities or granny panties?,Do you ever admire yourself in the mirror?,Has a crush ever found out you liked them and turned you down?,Have you ever been stood up on a date?,What’s the most embarrassing thing you’ve done regarding your crush?,Do you secretly love Twilight?,Have you ever wanted to be a cheerleader?,If you could marry any celebrity who would it be?,What do you do to get yourself \"sexy\"?,Who is your current crush?,What hairstyle have you always wanted but never been willing to try?,What’s the most embarrassing thing you’ve said or done in front of someone you like?,What part of your body do you love and which part do you hate?,Who is your celebrity crush?,If you could change one thing about your body what would it be?,Who was your first kiss? Did you like it?,Who are you jealous of?,If you could be another girl at our school who would you be?,Would you kiss a guy on the first date? Would you do more than that?,Who are the top five cutest guys in our class? Rank them.,How many kids do you want to have in the future?,Who do you hate the most?,If you could go out on a date with a celebrity who would it be?,If you were stranded on a deserted island who would you want to be stranded with from our school?,Have you ever flirted with your best friend’s siblings?,Have you ever been dumped? What was the reason for it?,Jock nerd or bad guy?,Have you ever had a crush on friend's boyfriend?,Who is your first pick for prom?,What's the sexiest thing about a guy?,What's the sexiest thing about a girl?,What's one physical feature that you would change on yourself if you could?,Would you rather be a guy than a girl? Why?,Describe your dream career.,If you could eat anything you wanted without getting fat what would that food be?,If you had to do a game show with someone in this room who would you pick?,Would you go a year without your phone if it meant you could marry the person of your dreams?,You are going to be stuck on a desert island and you can only bring five things. List them.,If you could only wear one hairstyle for the rest of your life would you choose curly hair or straight hair?,You have to give up one makeup item for the rest of your life. What is it?,Would you date someone shorter than you?,If someone paid you $1000 to wear your bra outside your shirt would you do it?".split(',');
const tord_friend_questions = "Who would you hate to see naked?,How long have you gone without a shower?,If you could only text one person for the rest of your life but you could never talk to that person face to face who would that be?,How long have you gone without brushing your teeth?,What's one thing you would never eat on a first date?,What have you seen that you wish you could unsee?,If you could be reincarnated into anyone's body who would you want to become?,If you switched genders for the day what would you do?,What's one food that you will never order at a restaurant?,What's the worst weather to be stuck outside in if all you could wear was a bathing suit?,If your car broke down in the middle of the road who in this room would be the last person you would call? Why?,What's the most useless piece of knowledge you know?,What did you learn in school that you wish you could forget?,Is it better to use shampoo as soap or soap as shampoo?,If you ran out of toilet paper would you consider wiping with the empty roll?,What would be the worst part about getting pantsed in front of your crush?,If you could only use one swear word for the rest of your life which one would you choose?,What's the best thing to say to your friend that would be the worst thing to say to your crush?,Who do you think is the Beyonce of the group?,Would you rather eat dog food or cat food?,If you had nine lives what would you do that you wouldn't do now?,If you could play a prank on anyone without getting caught who would you play it on?,What would the prank be?,Have you ever pretended to like a gift? How did you pretend?,Would you rather not shower for a month or eat the same meal every day for a month?,What animal most closely resembles your eating style?,If you could choose to never sweat for the rest of your life or never have to use the bathroom which would you choose?,If you could spend every waking moment with your gf or bf would you?".split(',');
const truth_guy_questions = "If you had to choose between dating someone ugly who was good in bed or dating someone hot who was bad in bed which would you choose?,If you could be invisible who would you spy on?,Who are the top 5 hottest girls at our school? In our class?,Who in this room would you make out with?,If you could date one of your bro's girlfriends who would it be?,What your favorite body part?,When was the last time you flexed in the mirror?,Describe your perfect partner.,Have you ever been in love?,Blonde or brunette?,What turns you on the most?,If your parents hated your girlfriend would you dump her?,If your girlfriend hated your best friend what would you do?,Who is your biggest celebrity crush?,Would you take steroids?,Have you ever had a crush on a friend's girlfriend?,Who are you jealous of?,Who do you think is the hottest in our group?,What is your biggest turn-off?,Have you ever been rejected by someone?,If you had to choose between being poor and smart or being rich and dumb what would you choose?,What have you lied to your partner about?,Have you ever cheated on your partner?,Would you go out with an older woman?,Do you have a crush on someone from another school?,Boxers or briefs?,When was the last time you cried?,Have you ever had a crush on a friend's girlfriend?,If you could make out with someone else's girl who would it be?,If every time you checked out a girl's body you would gain 5 pounds how often would you do it?,Have you ever lied about your age?,Have you ever fallen in love at first sight?,If a girl you didn't like had a crush on you how would you act around her?,What if she was your friend?,What would you do if you found out your girlfriend liked someone else?,If we formed a boy band who here would make the best lead singer?".split(',');
const flirty_questions = "Who do you want to make out with the most?,If you had to flash just one person in this room who would it be?,If you haven't had your first kiss yet who in this room do you want to have your first kiss with?,Of the people in this room who would you go out with?,Describe the most attractive thing about each person in this room.,Who here do you think is the best flirt?,Who has the best smile?,Who has the cutest nose?,How about prettiest eyes?,Who's the funniest in this room?,What's one thing you would never do in front of someone you had a crush on?,How often do you check yourself out in the mirror when you're on a date?,Who here do you think would be the best kisser?,Who has the best dance moves?,If you could have one physical feature of someone in this room what would that be?,What is your wildest fantasy?,How far would you go with someone you just met and will never see again?,Rate me on a scale of 1 to 10 with 10 being the hottest.,If I was a food what would I be and how would you eat me?,Would you choose a wild hot relationship or a calm and stable one?,If you had one week to live and you had to marry someone in this room who would it be?,If you only had 24 hours to live and you could do anything with anyone in this room who would it be and what would you do with that person?,What's your biggest turn-on?,And your biggest turn-off?,Would you go out with me if I was the last person on earth?,What's the most flirtatious thing you've ever done?,What's the sexiest thing about [fill in the name of a person in the room]?,If you could go on a romantic date with anyone in this room who would you pick?".split(',');
const dirty_questions = "Have you ever flashed someone?,Have you ever sexted anyone?,Have you ever been to a nudist beach? Would you consider going?,Would you ever consider posing for Playboy?,Who has seen you without clothes on?,Have you ever seen a naughty magazine?,Have you ever sent a nude selfie? Who would you send it to?,Have you ever searched for something dirty on the internet?,Who do you most want to sleep with out of everyone here?,What's your favorite body part on your partner?,How many people have you kissed?,Have you ever been attracted to the same sex?,When and where was your first kiss? Who was it with?,When did you lose your virginity and to whom did you lose it?,What's your ultimate sexual fantasy?,Would you go out with an older guy? How old is too old?,Do you sleep in the nude?,How much money would we have to pay you for you to agree to flash your boobs?,Have you ever been in a \"friends with benefits\" situation?,If you had to go skinny dipping with someone who in this room would you choose?,If I paid you $100 would you wear your sexiest clothes to class?".split(',');
const dare_normal_questions = "Do a free-style rap for the next minute.,Let another person post a status on your behalf.,Hand over your phone to another player who can send a single text saying anything they want to anyone they want.,Let the other players go through your phone for one minute.,Smell another player's armpit.,Smell another player's bare foot.,Eat a bite of a banana peel.,Do an impression of another player until someone can figure out who it is.,Say pickles at the end of every sentence you say until it's your turn again.,Imitate a YouTube star until another player guesses who you're portraying.,Act like a chicken until your next turn.,Talk in a British accent until your next turn.,Call a friend, pretend it's their birthday, and sing them Happy Birthday to You.,Name a famous person that looks like each player in the room.,Show us your best dance moves.,Eat a packet of hot sauce straight.,Let another person draw a tattoo on your back with a permanent marker.,Put on a blindfold and touch the other players' faces until you can figure out who's who.,Serenade the person to your right for a full minute.,Do 20 squats.,Let the other players redo your hairstyle.,Gulp down a raw egg.,Dump out your purse' backpack' or pockets and do a show and tell of what's inside.,Let the player to your right redo your makeup.,Do a prank call on one of your family members.,Let another player create a hat out of toilet paper — and you've got to wear it for the rest of the game.,Do a plank for a full minute.,Let someone give you a wedgie.,Put five cubes in your mouth (you can't chew them, you just have to let them melt—brrr).,Bark like a dog.,Draw your favorite movie and have the other person guess it (Pictionary-style).,Repeat everything the person to your right says until your next turn.,Demonstrate how you style your hair in the mirror (without actually using the mirror).,Play air guitar for one minute.,Empty a glass of cold water onto your head outside.,Lay on the floor and act like a sizzling piece of bacon.,In the next ten minutes, find a way to scare another player and make it a surprise.,Lick a bar of soap.,Eat a teaspoon of mustard.".split(',');
const more_normal_dare_questions = "Show the most embarrassing photo on your phone,Show the last five people you texted and what the messages said,Let the rest of the group DM someone from your Instagram account,Eat a raw piece of garlic,Do 100 squats,Show us your screen time report,Keep three ice cubes in your mouth until they melt,Say something dirty to the person on your left,Give a foot massage to the person on your right,Put 10 different available liquids into a cup and drink it,Yell out the first word that comes to your mind,Give a lap dance to someone of your choice,Remove four items of clothing,Like the first 15 posts on your Facebook newsfeed,Eat a spoonful of mustard,Keep your eyes closed until it's your go again,Send a sext to the last person in your phonebook,Show your orgasm face,Seductively eat a banana,Empty out your wallet/purse and show everyone what's inside,Do your best sexy crawl,Pretend to be the person to your right for 10 minutes,Eat a snack without using your hands,Say two honest things about everyone else in the group,Twerk for a minute,Try and make the group laugh as quickly as possible,Try to put your whole fist in your mouth,Tell everyone an embarrassing story about yourself,Try to lick your elbow,Post the oldest selfie on your phone on Instagram Stories,Tell the saddest story you know,Howl like a wolf for two minutes,Dance without music for two minutes,Pole dance with an imaginary pole,Let someone else tickle you and try not to laugh,Put as many snacks into your mouth at once as you can,Scroll through your phone book until someone says stop. You either have to call or delete that person.,Down your drink (responsibly),Try and make yourself cry in front of the group,Tell the group two truths and a lie, and they have to guess which one the lie is,Show off your secret talent,Reply to the first five Instagram Stories on your timeline,Share the first celebrity on your timeline's Instagram to your Story,Put on as many layers as possible in 60 seconds,Fill your mouth with drink and gargle your answer to the next Truth,Smile as widely as you can and hold it for two minutes".split(',');
const dirty_dare_questions_part_2 = "Eat a piece of fruit in the most sensual way possible.,Play me a song you’d like to have sex to.,Using your fingers, find a way to give me goosebumps right now.,Demonstrate a move on me that you saw and liked while watching porn.,Give me a sensual massage. Start at my feet and work your way up.,For the next 60 seconds, touch yourself like you’d like to touch me.,Spell out a short, sultry message on my body…with your tongue.,Pretend I’m a stranger at a bar. Try to pick me up and convince me to come home with you.,I’m going to go into the other room and dab perfume or cologne somewhere on my body. You have to sniff everywhere until you figure out where I put it on.,Pop an ice cube in your mouth and go down on me for 15 seconds.,Put my cell on vibrate, then place it somewhere on my body. Now, call me.,Pour a trail of sugar from the small of my back to my neck. Now, lick it up.,Meet me in the closet for a round of seven minutes in heaven. The rules? You must keep the making out above the belt.,Take off my underwear…with your mouth.,Dip your fingertips in mouthwash and then rub my nipples, so I’ll get an erotic, tingly sensation the moment you touch me.,Pick a spot on my body that isn’t usually considered sexual—elbows, knees, ankles—and lavish it with kisses until I’m turned on.".split(',');
const dirty_dare_questions_part_1 = "You have ten seconds to excite me just by kissing. Hint: You're not limited to my lips.,Imitate my most flexible sex move.,Make out with me like we used to before we started having sex.,Go find your old Halloween costume and put it on for me. Then, let's decide what to role play.,Place whipped cream on your favorite parts of my body. Now, lick it off.,Eat a strawberry in the most sensual way possible.,Engage in foreplay with me for five minutes with one rule: You're allowed to kiss me anywhere but my mouth.,Give me a massage anywhere on my body for 10 minutes.,Do something to me right now that you've been fantasizing about.,Find something sweet to swipe across your lips and give me a passionate kiss.,Drag me to the closet for an adult round of seven minutes in heaven. You must keep the making out above the belt.,Stimulate two parts of my body at once. Use your hands on one part and lips on another.,Using your mouth, make your way from my wrist to my ear. Take your time!,In your most sultry voice, tell me what you loved about the last time we had sex.,Hop in the shower with me and wash my body, making sure not to miss any hard spots.".split(',');
function dare() {
  const _0x12fb05 = [dare_normal_questions, more_normal_dare_questions, dirty_dare_questions_part_1, dirty_dare_questions_part_2];
  const _0x30092f = _0x12fb05[Math.floor(Math.random() * _0x12fb05.length)];
  const _0x43512c = _0x30092f[Math.floor(Math.random() * _0x30092f.length)];
  return _0x43512c;
}
function truth() {
  const _0x111d22 = [embarrassing_questions_truth, truth_girl_questions, tord_friend_questions, truth_guy_questions, flirty_questions, dirty_questions];
  const _0x96fdbd = _0x111d22[Math.floor(Math.random() * _0x111d22.length)];
  const _0x4da591 = _0x96fdbd[Math.floor(Math.random() * _0x96fdbd.length)];
  return _0x4da591;
}
function random_question() {
  const _0x4c5655 = [embarrassing_questions_truth, truth_girl_questions, tord_friend_questions, truth_guy_questions, flirty_questions, dirty_questions, dare_normal_questions, more_normal_dare_questions, dirty_dare_questions_part_1, dirty_dare_questions_part_2];
  const _0x157cad = _0x4c5655[Math.floor(Math.random() * _0x4c5655.length)];
  const _0x2b724f = _0x157cad[Math.floor(Math.random() * _0x157cad.length)];
  return _0x2b724f;
}
function amount_of_questions(_0x2379de) {
  if (_0x2379de === 0x0) {
    const _0x2ec2ac = [embarrassing_questions_truth, truth_girl_questions, tord_friend_questions, truth_guy_questions, flirty_questions, dirty_questions, dare_normal_questions, more_normal_dare_questions, dirty_dare_questions_part_1, dirty_dare_questions_part_2];
    let _0x127c54 = 0x0;
    for (const _0x55db38 of _0x2ec2ac) {
      _0x127c54 += _0x55db38.length;
    }
    return _0x127c54;
  } else {
    if (_0x2379de === 0x1) {
      const _0x41b1d8 = [embarrassing_questions_truth, truth_girl_questions, tord_friend_questions, truth_guy_questions, flirty_questions, dirty_questions];
      let _0x1110dd = 0x0;
      for (const _0x259ed9 of _0x41b1d8) {
        _0x1110dd += _0x259ed9.length;
      }
      return _0x1110dd;
    } else {
      if (_0x2379de === 0x2) {
        const _0x22ff73 = [dare_normal_questions, more_normal_dare_questions, dirty_dare_questions_part_1, dirty_dare_questions_part_2];
        let _0x5e3775 = 0x0;
        for (const _0x34af79 of _0x22ff73) {
          _0x5e3775 += _0x34af79.length;
        }
        return _0x5e3775;
      } else {
        return null;
      }
    }
  }
}
module.exports = {
  'Insta': Insta,
  'pinterest': pinterest,
  'adultvid': adultvid,
  'hentai': hentai,
  'tlang': tlang,
  'botpic': botpic,
  'language': json,
  'getString': getString,
  'wikimedia': wikimedia,
  'toAudio': toAudio,
  'toPTT': toPTT,
  'toVideo': toVideo,
  'sync': sync,
  'syncgit': syncgit,
  'ffmpeg': ffmpeg,
  'TelegraPh': TelegraPh,
  'UploadFileUgu': UploadFileUgu,
  'webp2mp4File': webp2mp4File,
  'fancy': fancy,
  'randomfancy': randomfancy,
  'ringtone': ringtone,
  'styletext': styletext,
  'isAdmin': isAdmin,
  'isBotAdmin': isAdmin,
  'createUrl': createUrl,
  'mediafireDl': mediafireDl,
  'mediafire': mediafireDl,
  'dare': dare,
  'truth': truth,
  'random_question': random_question,
  'amount_of_questions': amount_of_questions
};