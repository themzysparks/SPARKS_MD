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

const ffmpeg = require('fluent-ffmpeg');
const {
  randomBytes
} = require("crypto");
const fs = require('fs');
const {
  getHttpStream,
  toBuffer
} = require("@whiskeysockets/baileys");
const sharp = require('sharp');
const {
  spawn
} = require("child_process");
const path = require("path");
const {
  fromBuffer
} = require("file-type");
const {
  tmpdir
} = require('os');
const ff = require("fluent-ffmpeg");
const webp = require('node-webpmux');
async function toGif(_0xedada1) {
  try {
    const _0x9f7f3c = './' + randomBytes(0x3).toString('hex') + ".webp";
    const _0x5938bd = './' + randomBytes(0x3).toString("hex") + ".gif";
    fs.writeFileSync(_0x9f7f3c, _0xedada1.toString('binary'), "binary");
    const _0x1e4b56 = await new Promise(_0x11181b => {
      spawn("convert", [_0x9f7f3c, _0x5938bd]).on('error', _0x2466a9 => {
        throw _0x2466a9;
      }).on("exit", () => _0x11181b(_0x5938bd));
    });
    let _0x94e1c2 = fs.readFileSync(_0x1e4b56);
    try {
      fs.unlinkSync(_0x9f7f3c);
    } catch {}
    try {
      fs.unlinkSync(_0x5938bd);
    } catch {}
    return _0x94e1c2;
  } catch (_0x1dbb3f) {
    console.log(_0x1dbb3f);
  }
}
async function toMp4(_0x5290d8) {
  try {
    let _0x3c19ec = './' + randomBytes(0x3).toString('hex') + ".gif";
    const _0x20f490 = fs.existsSync(_0x5290d8) ? _0x5290d8 : save(_0x5290d8, _0x3c19ec);
    const _0x27ab01 = './' + randomBytes(0x3).toString("hex") + '.mp4';
    const _0x2c1aa5 = await new Promise(_0x2f97a7 => {
      ffmpeg(_0x20f490).outputOptions(["-pix_fmt yuv420p", "-c:v libx264", "-movflags +faststart", "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'"]).toFormat("mp4").noAudio().save(_0x27ab01).on("exit", () => _0x2f97a7(_0x27ab01));
    });
    let _0x1e83fd = await fs.promises.readFile(_0x2c1aa5);
    try {
      fs.unlinkSync(_0x20f490);
    } catch {}
    try {
      fs.unlinkSync(_0x27ab01);
    } catch {}
    return _0x1e83fd;
  } catch (_0x299de0) {
    console.log(_0x299de0);
  }
}
const EightD = async _0x10f780 => {
  const _0x1789f2 = "./temp/" + randomBytes(0x3).toString("hex") + ".mp3";
  _0x10f780 = Buffer.isBuffer(_0x10f780) ? save(_0x10f780, _0x1789f2) : _0x10f780;
  const _0x459b8c = "./temp/" + randomBytes(0x3).toString('hex') + '.mp3';
  const _0x311bd1 = await new Promise(_0x5c037c => {
    ffmpeg(_0x10f780).audioFilter(["apulsator=hz=0.125"]).audioFrequency(0xac44).audioChannels(0x2).audioBitrate('128k').audioCodec("libmp3lame").audioQuality(0x5).toFormat('mp3').save(_0x459b8c).on("end", () => _0x5c037c(_0x459b8c));
  });
  return _0x311bd1;
};
function save(_0x46a2df, _0x4146ce = "./temp/saveFile.jpg") {
  try {
    fs.writeFileSync(_0x4146ce, _0x46a2df.toString("binary"), "binary");
    return _0x4146ce;
  } catch (_0x4c00fa) {
    console.log(_0x4c00fa);
  }
}
const resizeImage = (_0xa8c0f2, _0x51eb8d, _0x5f3d63) => {
  if (!Buffer.isBuffer(_0xa8c0f2)) {
    throw "Input is not a Buffer";
  }
  return new Promise(async _0x214de2 => {
    sharp(_0xa8c0f2).resize(_0x51eb8d, _0x5f3d63, {
      'fit': "contain"
    }).toBuffer().then(_0x214de2);
  });
};
const _parseInput = async (_0x19bc9a, _0x2d6ebb = false, _0x3de8ca = "path") => {
  const _0x568c34 = await toBuffer(await getHttpStream(_0x19bc9a));
  const _0x4f60a6 = "./temp/file_" + randomBytes(0x3).toString('hex') + '.' + (_0x2d6ebb ? _0x2d6ebb : (await fromBuffer(_0x568c34)).ext);
  const _0x461663 = Buffer.isBuffer(_0x19bc9a) ? save(_0x19bc9a, _0x4f60a6) : fs.existsSync(_0x19bc9a) ? _0x19bc9a : _0x19bc9a;
  if (_0x3de8ca == "path") {
    return _0x461663;
  } else {
    if (_0x3de8ca == 'buffer') {
      const _0x12f859 = await fs.promises.readFile(_0x461663);
      try {
        await fs.promises.unlink(_0x461663);
      } catch (_0xcfc261) {}
      return _0x12f859;
    }
  }
};
async function imageToWebp(_0x34e2d8) {
  const _0x567a5a = path.join(tmpdir(), randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0x19c469 = path.join(tmpdir(), randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".jpg");
  fs.writeFileSync(_0x19c469, _0x34e2d8);
  await new Promise((_0x5844a4, _0x365a01) => {
    ff(_0x19c469).on("error", _0x365a01).on("end", () => _0x5844a4(true)).addOutputOptions(["-vcodec", 'libwebp', "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat('webp').save(_0x567a5a);
  });
  const _0x3c4ba7 = fs.readFileSync(_0x567a5a);
  fs.unlinkSync(_0x567a5a);
  fs.unlinkSync(_0x19c469);
  return _0x3c4ba7;
}
async function videoToWebp(_0x35385e) {
  const _0x4dc7b7 = path.join(tmpdir(), randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0x247c0b = path.join(tmpdir(), randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".mp4");
  fs.writeFileSync(_0x247c0b, _0x35385e);
  await new Promise((_0xbbb513, _0x52f8aa) => {
    ff(_0x247c0b).on("error", _0x52f8aa).on("end", () => _0xbbb513(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', '-ss', "00:00:00", '-t', "00:00:05", "-preset", "default", '-an', '-vsync', '0']).toFormat("webp").save(_0x4dc7b7);
  });
  const _0xa1d34b = fs.readFileSync(_0x4dc7b7);
  fs.unlinkSync(_0x4dc7b7);
  fs.unlinkSync(_0x247c0b);
  return _0xa1d34b;
}
async function writeExifImg(_0x3fd3a1, _0x1d494f) {
  let _0x2b61dd = await imageToWebp(_0x3fd3a1);
  const _0x5f3571 = path.join(tmpdir(), randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0x3a8903 = path.join(tmpdir(), randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  fs.writeFileSync(_0x5f3571, _0x2b61dd);
  if (_0x1d494f.packname || _0x1d494f.author) {
    const _0xd34676 = new webp.Image();
    const _0x47def3 = {
      'sticker-pack-id': 'ANITA',
      'sticker-pack-name': _0x1d494f.packname,
      'sticker-pack-publisher': _0x1d494f.author,
      'emojis': _0x1d494f.categories ? _0x1d494f.categories : ['']
    };
    const _0x10ef22 = Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
    const _0x403bb8 = Buffer.from(JSON.stringify(_0x47def3), "utf-8");
    const _0x59a93f = Buffer.concat([_0x10ef22, _0x403bb8]);
    _0x59a93f.writeUIntLE(_0x403bb8.length, 0xe, 0x4);
    await _0xd34676.load(_0x5f3571);
    fs.unlinkSync(_0x5f3571);
    _0xd34676.exif = _0x59a93f;
    await _0xd34676.save(_0x3a8903);
    return _0x3a8903;
  }
}
async function writeExifVid(_0x53e739, _0x11ebe9) {
  let _0x34efba = await videoToWebp(_0x53e739);
  const _0x39e079 = path.join(tmpdir(), randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  const _0x5a97da = path.join(tmpdir(), randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  fs.writeFileSync(_0x39e079, _0x34efba);
  let _0xb3463;
  let _0x10676a;
  try {
    _0xb3463 = _0x11ebe9.packname;
  } catch (_0x5140d6) {
    _0xb3463 = 'ANITA';
  }
  try {
    _0x10676a = _0x11ebe9.author;
  } catch (_0x4b889e) {
    _0x10676a = '';
  }
  const _0x2f987a = new webp.Image();
  const _0x120efa = {
    'sticker-pack-id': "ANITA",
    'sticker-pack-name': _0xb3463,
    'sticker-pack-publisher': _0x10676a,
    'emojis': _0x11ebe9.categories ? _0x11ebe9.categories : ['']
  };
  const _0x2c497c = Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
  const _0x288f4f = Buffer.from(JSON.stringify(_0x120efa), 'utf-8');
  const _0x1add96 = Buffer.concat([_0x2c497c, _0x288f4f]);
  _0x1add96.writeUIntLE(_0x288f4f.length, 0xe, 0x4);
  await _0x2f987a.load(_0x39e079);
  fs.unlinkSync(_0x39e079);
  _0x2f987a.exif = _0x1add96;
  await _0x2f987a.save(_0x5a97da);
  return _0x5a97da;
}
async function writeExifWebp(_0x599226, _0x726dce) {
  const _0x59b28c = path.join(tmpdir(), randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  const _0x116428 = path.join(tmpdir(), randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  fs.writeFileSync(_0x59b28c, _0x599226);
  if (_0x726dce.packname || _0x726dce.author) {
    const _0x29292c = new webp.Image();
    const _0x38531e = {
      'sticker-pack-id': "Asta_Md",
      'sticker-pack-name': _0x726dce.packname,
      'sticker-pack-publisher': _0x726dce.author,
      'emojis': _0x726dce.categories ? _0x726dce.categories : ['']
    };
    const _0x37d11a = await Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
    const _0x5be8a5 = await Buffer.from(JSON.stringify(_0x38531e), "utf-8");
    const _0x15e468 = await Buffer.concat([_0x37d11a, _0x5be8a5]);
    await _0x15e468.writeUIntLE(_0x5be8a5.length, 0xe, 0x4);
    await _0x29292c.load(_0x59b28c);
    fs.unlinkSync(_0x59b28c);
    _0x29292c.exif = _0x15e468;
    await _0x29292c.save(_0x116428);
    return _0x116428;
  }
}
module.exports = {
  'imageToWebp': imageToWebp,
  'videoToWebp': videoToWebp,
  'writeExifImg': writeExifImg,
  'writeExifVid': writeExifVid,
  'writeExifWebp': writeExifWebp,
  'toGif': toGif,
  'toMp4': toMp4,
  'EightD': EightD,
  '_parseInput': _parseInput,
  'resizeImage': resizeImage
};