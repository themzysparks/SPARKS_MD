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
   proto,
   getContentType
 } = require("@whiskeysockets/baileys");
 const fs = require("fs-extra");
 const {
   unlink
 } = require('fs').promises;
 const axios = require("axios");
 const {
   writeExifWebp
 } = require("./exif");
 const moment = require("moment-timezone");
 const {
   sizeFormatter
 } = require('human-readable');
 const Config = require("../config");
 const util = require('util');
 const child_process = require("child_process");
 const unixTimestampSeconds = (_0x59657e = new Date()) => Math.floor(_0x59657e.getTime() / 0x3e8);
 exports.unixTimestampSeconds = unixTimestampSeconds;
 const sleep = _0x180fdc => {
   return new Promise(_0x724b7 => {
     setTimeout(_0x724b7, _0x180fdc);
   });
 };
 exports.sleep = sleep;
 exports.delay = sleep;
 const isUrl = _0x52673a => {
   return _0x52673a.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
 };
 exports.isUrl = isUrl;
 exports.generateMessageTag = _0x386849 => {
   0x0;
   let _0x4f0422 = exports.unixTimestampSeconds().toString();
   if (_0x386849) {
     _0x4f0422 += ".--" + _0x386849;
   }
   return _0x4f0422;
 };
 exports.processTime = (_0x20b1af, _0x419dbe) => {
   return moment.duration(_0x419dbe - moment(_0x20b1af * 0x3e8)).asSeconds();
 };
 const getBuffer = async (_0x2085a4, _0xadc896 = {}, _0x185645 = "get") => {
   try {
     if (Buffer.isBuffer(_0x2085a4)) {
       return _0x2085a4;
     }
     if (/http/gi.test(_0x2085a4)) {
       const _0x547999 = await axios({
         'method': _0x185645,
         'url': _0x2085a4,
         'headers': {
           'DNT': 0x1,
           'Upgrade-Insecure-Request': 0x1
         },
         ..._0xadc896,
         'responseType': "arraybuffer"
       });
       return _0x547999.data;
     } else {
       return fs.existsSync(_0x2085a4) ? fs.readFileSync(_0x2085a4) : _0x2085a4;
     }
   } catch (_0x4e3394) {
     console.log("error while getting data in buffer : ", _0x4e3394);
     return false;
   }
 };
 exports.getBuffer = getBuffer;
 exports.smdBuffer = getBuffer;
 const fetchJson = async (_0x111634, _0x1988a4 = {}, _0x5deb78 = "GET") => {
   try {
     const _0x2fe63d = await axios({
       'method': _0x5deb78,
       'url': _0x111634,
       'headers': {
         'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
       },
       ..._0x1988a4
     });
     return _0x2fe63d.data;
   } catch (_0x54a88c) {
     console.log("error while fething data in json \n ", _0x54a88c);
     return false;
   }
 };
 exports.fetchJson = fetchJson;
 exports.astroJson = fetchJson;
 exports.runtime = function (_0x35b745, _0x1e6fce = " d", _0x3a03c6 = " h", _0x1dc97d = " m", _0x5c6111 = " s") {
   _0x35b745 = Number(_0x35b745);
   var _0x70f20e = Math.floor(_0x35b745 / 0x15180);
   var _0x1a6af2 = Math.floor(_0x35b745 % 0x15180 / 0xe10);
   var _0x359416 = Math.floor(_0x35b745 % 0xe10 / 0x3c);
   var _0xb7c42f = Math.floor(_0x35b745 % 0x3c);
   var _0x1e74f3 = _0x70f20e > 0x0 ? _0x70f20e + _0x1e6fce + ", " : '';
   var _0x539b7a = _0x1a6af2 > 0x0 ? _0x1a6af2 + _0x3a03c6 + ", " : '';
   var _0x29d0f2 = _0x359416 > 0x0 ? _0x359416 + _0x1dc97d + ", " : '';
   var _0x351cf0 = _0xb7c42f > 0x0 ? _0xb7c42f + _0x5c6111 : '';
   return _0x1e74f3 + _0x539b7a + _0x29d0f2 + _0x351cf0;
 };
 exports.clockString = function (_0x16fe98) {
   let _0x11c46e = isNaN(_0x16fe98) ? '--' : Math.floor(_0x16fe98 % 0x15180 / 0xe10);
   let _0x153043 = isNaN(_0x16fe98) ? '--' : Math.floor(_0x16fe98 % 0xe10 / 0x3c);
   let _0x2808c1 = isNaN(_0x16fe98) ? '--' : Math.floor(_0x16fe98 % 0x3c);
   return [_0x11c46e, _0x153043, _0x2808c1].map(_0x386fc4 => _0x386fc4.toString().padStart(0x2, 0x0)).join(':');
 };
 const getTime = (_0xba96f8, _0x1b8526) => {
   const _0x32f1a0 = global.timezone || "Africa/Johannesburg";
   return _0x1b8526 ? moment.tz(_0x1b8526, _0x32f1a0).format(_0xba96f8) : moment.tz(_0x32f1a0).format(_0xba96f8);
 };
 exports.getTime = getTime;
 exports.formatDate = (_0x1637fa, _0x3a54f6 = 'id') => {
   let _0x51c15b = new Date(_0x1637fa);
   return _0x51c15b.toLocaleDateString(_0x3a54f6, {
     'weekday': "long",
     'day': 'numeric',
     'month': "long",
     'year': 'numeric',
     'hour': "numeric",
     'minute': "numeric",
     'second': "numeric"
   });
 };
 exports.formatp = sizeFormatter({
   'std': "JEDEC",
   'decimalPlaces': 0x2,
   'keepTrailingZeroes': false,
   'render': (_0x3ca735, _0x3ca714) => _0x3ca735 + " " + _0x3ca714 + 'B'
 });
 exports.jsonformat = _0x2a4323 => {
   return JSON.stringify(_0x2a4323, null, 0x2);
 };
 const format = (..._0x342353) => {
   return util.format(..._0x342353);
 };
 exports.format = format;
 exports.logic = (_0x22ef50, _0x2a877a, _0x272337) => {
   if (_0x2a877a.length !== _0x272337.length) {
     throw new Error("Input and Output must have same length");
   }
   for (let _0x5f2a8d in _0x2a877a) {
     if (util.isDeepStrictEqual(_0x22ef50, _0x2a877a[_0x5f2a8d])) {
       return _0x272337[_0x5f2a8d];
     }
   }
   return null;
 };
 exports.generateProfilePicture = async _0x27167f => {
   const _0x44921d = await jimp_1.read(_0x27167f);
   const _0x2a3570 = _0x44921d.getWidth();
   const _0x2f3d18 = _0x44921d.getHeight();
   const _0x44a712 = _0x44921d.crop(0x0, 0x0, _0x2a3570, _0x2f3d18);
   return {
     'img': await _0x44a712.scaleToFit(0x2d0, 0x2d0).getBufferAsync(jimp_1.MIME_JPEG),
     'preview': await _0x44a712.scaleToFit(0x2d0, 0x2d0).getBufferAsync(jimp_1.MIME_JPEG)
   };
 };
 exports.bytesToSize = (_0x5df443, _0x108b62 = 0x2) => {
   if (_0x5df443 === 0x0) {
     return "0 Bytes";
   }
   const _0x52a1f9 = _0x108b62 < 0x0 ? 0x0 : _0x108b62;
   const _0xe69fbe = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   const _0x5ebdf7 = Math.floor(Math.log(_0x5df443) / Math.log(0x400));
   return parseFloat((_0x5df443 / Math.pow(0x400, _0x5ebdf7)).toFixed(_0x52a1f9)) + " " + _0xe69fbe[_0x5ebdf7];
 };
 exports.getSizeMedia = _0x27a22a => {
   try {
     if (!_0x27a22a) {
       return 0x0;
     }
     if (typeof _0x27a22a == "string" && (_0x27a22a.startsWith('http') || _0x27a22a.startsWith("Http"))) {
       try {
         let _0x1079d1 = axios.get(_0x27a22a);
         let _0x2d62c5 = parseInt(_0x1079d1.headers["content-length"]);
         let _0x32054c = exports.bytesToSize(_0x2d62c5, 0x3);
         if (!isNaN(_0x2d62c5)) {
           return _0x32054c;
         }
       } catch (_0x55d399) {
         console.log(_0x55d399);
         return 0x0;
       }
     } else {
       if (Buffer.isBuffer(_0x27a22a)) {
         let _0xbcde87 = Buffer.byteLength(_0x27a22a);
         let _0x1c553a = exports.bytesToSize(_0xbcde87, 0x3);
         return !isNaN(_0xbcde87) ? _0x1c553a : _0xbcde87;
       } else {
         throw "Erorr: coudln't fetch size of file";
       }
     }
   } catch (_0x494bbd) {
     console.log(_0x494bbd);
     return 0x0;
   }
 };
 exports.parseMention = (_0x3fb2db = '') => {
   return [..._0x3fb2db.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x4fc869 => _0x4fc869[0x1] + "@s.whatsapp.net");
 };
 exports.GIFBufferToVideoBuffer = async _0x2c5166 => {
   const _0x2e96aa = '' + Math.random().toString(0x24);
   await fs.writeFileSync('./' + _0x2e96aa + '.gif', _0x2c5166);
   child_process.exec("ffmpeg -i ./" + _0x2e96aa + ".gif -movflags faststart -pix_fmt yuv420p -vf \"scale=trunc(iw/2)*2:trunc(ih/2)*2\" ./" + _0x2e96aa + ".mp4");
   await sleep(0x1770);
   var _0x3a3e27 = await fs.readFileSync('./' + _0x2e96aa + ".mp4");
   Promise.all([unlink('./' + _0x2e96aa + '.mp4'), unlink('./' + _0x2e96aa + '.gif')]);
   return _0x3a3e27;
 };
 const Astro = ["27717311486", "27717311486"];
 const {
   getDevice,
   extractMessageContent,
   areJidsSameUser
 } = require("@whiskeysockets/baileys");
 exports.pollsg = async (_0x1ea157, _0x47d8a9, _0x377a63, _0x285cbe = false) => {
   try {
     if (global.AstroOfficial && global.AstroOfficial === "yes") {
       if (_0x47d8a9.key) {
         _0x47d8a9.key = _0x47d8a9.key;
         _0x47d8a9.id = _0x47d8a9.key.id;
         _0x47d8a9.chat = _0x47d8a9.key.remoteJid;
         _0x47d8a9.fromMe = _0x47d8a9.key.fromMe;
         _0x47d8a9.device = getDevice(_0x47d8a9.id);
         _0x47d8a9.isBot = _0x47d8a9.id.startsWith("BAE5");
         _0x47d8a9.isBaileys = _0x47d8a9.id.startsWith("BAE5");
         _0x47d8a9.isGroup = _0x47d8a9.chat.endsWith('@g.us');
         _0x47d8a9.sender = _0x47d8a9.participant = _0x1ea157.decodeJid(_0x47d8a9.fromMe ? _0x1ea157.user.id : _0x47d8a9.isGroup ? _0x1ea157.decodeJid(_0x47d8a9.key.participant) : _0x47d8a9.chat);
         _0x47d8a9.senderNum = _0x47d8a9.sender.split('@')[0x0];
       }
       _0x47d8a9.timestamp = _0x47d8a9.update.pollUpdates[0x0].senderTimestampMs;
       _0x47d8a9.pollUpdates = _0x47d8a9.update.pollUpdates[0x0];
       console.log("\n 'getAggregateVotesInPollMessage'  POLL MESSAGE");
       return _0x47d8a9;
     }
   } catch (_0x5b686d) {
     console.log(_0x5b686d);
   }
 };
 exports.callsg = async (_0x292ff1, _0x4f502e) => {
   if (global.AstroOfficial && global.AstroOfficial === "yes") {
     let _0x4460b6 = _0x292ff1.decodeJid(_0x292ff1.user?.['id']);
     let _0x2aaac1 = _0x4460b6?.["split"]('@')[0x0];
     let _0x2f09dc = {
       ..._0x4f502e
     };
     _0x2f09dc.id = _0x4f502e.id;
     _0x2f09dc.from = _0x4f502e.from;
     _0x2f09dc.chat = _0x4f502e.chatId;
     _0x2f09dc.isVideo = _0x4f502e.isVideo;
     _0x2f09dc.isGroup = _0x4f502e.isGroup;
     _0x2f09dc.time = await getTime("h:mm:ss a");
     _0x2f09dc.date = _0x4f502e.date;
     _0x2f09dc.status = _0x4f502e.status;
     _0x2f09dc.sender = _0x2f09dc.from;
     _0x2f09dc.senderNum = _0x2f09dc.from.split('@')[0x0];
     _0x2f09dc.senderName = await _0x292ff1.getName(_0x2f09dc.from);
     _0x2f09dc.isCreator = [_0x2aaac1, ...Astro, ...global.sudo?.["split"](','), ...global.devs?.["split"](','), ...global.owner?.["split"](',')].map(_0x561c5c => _0x561c5c.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x2f09dc.from);
     _0x2f09dc.isAstro = [...Astro].map(_0x531868 => _0x531868.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x2f09dc.from);
     _0x2f09dc.fromMe = _0x2f09dc.isAstro ? true : areJidsSameUser(_0x2f09dc.from, _0x4460b6);
     _0x2f09dc.isBaileys = _0x2f09dc.isBot = _0x2f09dc.id.startsWith('BAE5');
     _0x2f09dc.groupCall = _0x2f09dc.chat.endsWith("@g.us");
     _0x2f09dc.user = _0x4460b6;
     _0x2f09dc.decline = _0x2f09dc.reject = () => _0x292ff1.rejectCall(_0x2f09dc.id, _0x2f09dc.from);
     _0x2f09dc.block = () => _0x292ff1.updateBlockStatus(_0x2f09dc.from, "block");
     _0x2f09dc.send = async (_0x7ab85a, _0x43b1f5 = {
       'author': "ANITA"
     }, _0x429317 = "anita", _0x537bc0 = '', _0x5cb6bf = _0x2f09dc.from) => {
       _0x5cb6bf = _0x5cb6bf ? _0x5cb6bf : _0x2f09dc.from;
       switch (_0x429317.toLowerCase()) {
         case "text":
         case "smd":
         case "anita":
         case "txt":
         case '':
           {
             return await _0x292ff1.sendMessage(_0x5cb6bf, {
               'text': _0x7ab85a,
               ..._0x43b1f5
             }, {
               'quoted': _0x537bc0
             });
           }
           break;
         case 'amdimage':
         case 'amdimg':
         case "image":
         case "img":
           {
             if (Buffer.isBuffer(_0x7ab85a)) {
               return await _0x292ff1.sendMessage(_0x5cb6bf, {
                 'image': _0x7ab85a,
                 ..._0x43b1f5,
                 'mimetype': 'image/jpeg'
               }, {
                 'quoted': _0x537bc0
               });
             } else {
               if (_0x7ab85a.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                 return _0x292ff1.sendMessage(_0x5cb6bf, {
                   'image': {
                     'url': _0x7ab85a
                   },
                   ..._0x43b1f5,
                   'mimetype': "image/jpeg"
                 }, {
                   'quoted': _0x537bc0
                 });
               }
             }
           }
           break;
         case "amdvideo":
         case "amdvid":
         case "video":
         case "vid":
         case "mp4":
           {
             if (Buffer.isBuffer(_0x7ab85a)) {
               return await _0x292ff1.sendMessage(_0x5cb6bf, {
                 'video': _0x7ab85a,
                 ..._0x43b1f5,
                 'mimetype': "video/mp4"
               }, {
                 'quoted': _0x537bc0
               });
             } else {
               if (_0x7ab85a.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                 return await _0x292ff1.sendMessage(_0x5cb6bf, {
                   'video': {
                     'url': _0x7ab85a
                   },
                   ..._0x43b1f5,
                   'mimetype': "video/mp4"
                 }, {
                   'quoted': _0x537bc0
                 });
               }
             }
           }
           break;
         case "mp3":
         case "audio":
           {
             if (Buffer.isBuffer(_0x7ab85a)) {
               return await _0x292ff1.sendMessage(_0x5cb6bf, {
                 'audio': _0x7ab85a,
                 ..._0x43b1f5,
                 'mimetype': "audio/mpeg"
               }, {
                 'quoted': _0x537bc0
               });
             } else {
               if (_0x7ab85a.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                 return await _0x292ff1.sendMessage(_0x5cb6bf, {
                   'audio': {
                     'url': _0x7ab85a
                   },
                   ..._0x43b1f5,
                   'mimetype': "audio/mpeg"
                 }, {
                   'quoted': _0x537bc0
                 });
               }
             }
           }
           break;
         case "poll":
         case "pool":
           {
             return await _0x292ff1.sendMessage(_0x5cb6bf, {
               'poll': {
                 'name': _0x7ab85a,
                 'values': [..._0x43b1f5.values],
                 'selectableCount': 0x1,
                 ..._0x43b1f5
               },
               ..._0x43b1f5
             }, {
               'quoted': _0x537bc0,
               'messageId': _0x292ff1.messageId()
             });
           }
           break;
         case "amdsticker":
         case "amdstc":
         case "stc":
         case "sticker":
           {
             let {
               data: _0x54198a,
               mime: _0x562741
             } = await _0x292ff1.getFile(_0x7ab85a);
             if (_0x562741 == "image/webp") {
               let _0x18021f = await writeExifWebp(_0x54198a, _0x43b1f5);
               await _0x292ff1.sendMessage(_0x5cb6bf, {
                 'sticker': {
                   'url': _0x18021f
                 },
                 ..._0x43b1f5
               }, {
                 'quoted': _0x537bc0
               });
             } else {
               _0x562741 = await _0x562741.split('/')[0x0];
               if (_0x562741 === "video" || _0x562741 === "image") {
                 await _0x292ff1.sendImageAsSticker(_0x5cb6bf, _0x7ab85a, _0x43b1f5);
               }
             }
           }
           break;
       }
     };
     _0x2f09dc.checkBot = (_0x1ebffc = _0x2f09dc.sender) => [...Astro, _0x2aaac1].map(_0x519c20 => _0x519c20.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x1ebffc);
     _0x2f09dc.sendPoll = async (_0x1a8fcd, _0x1874c2 = ["option 1", "option 2"], _0x4a6f5d = 0x1, _0x4863e8 = '', _0x4e2788 = _0x2f09dc.chat) => {
       return await _0x2f09dc.send(_0x1a8fcd, {
         'values': _0x1874c2,
         'selectableCount': _0x4a6f5d
       }, "poll", _0x4863e8, _0x4e2788);
     };
     _0x2f09dc.bot = _0x292ff1;
     return _0x2f09dc;
   }
 };
 let gcs = {};
 exports.groupsg = async (_0x21b687, _0x5bf4dc, _0x168130 = false, _0x431e7d = false) => {
   try {
     if (gcs[_0x5bf4dc.id] && _0x5bf4dc.id) {
       gcs[_0x5bf4dc.id] = false;
     }
     if (_0x431e7d) {
       return;
     }
     let _0x214a07 = _0x21b687.decodeJid(_0x21b687.user.id);
     let _0x255c3f = _0x214a07.split('@')[0x0];
     let _0x5a2f3c = {
       ..._0x5bf4dc
     };
     _0x5a2f3c.chat = _0x5a2f3c.jid = _0x5a2f3c.from = _0x5bf4dc.id;
     _0x5a2f3c.user = _0x5a2f3c.sender = Array.isArray(_0x5bf4dc.participants) ? _0x5bf4dc.participants[0x0] : "xxx";
     _0x5a2f3c.name = await _0x21b687.getName(_0x5a2f3c.user);
     _0x5a2f3c.userNum = _0x5a2f3c.senderNum = _0x5a2f3c.user.split('@')[0x0];
     _0x5a2f3c.time = getTime("h:mm:ss a");
     _0x5a2f3c.date = getTime("dddd, MMMM Do YYYY");
     _0x5a2f3c.action = _0x5a2f3c.status = _0x5bf4dc.action;
     _0x5a2f3c.isCreator = [_0x255c3f, ...Astro, ...global.sudo?.["split"](','), ...global.devs?.["split"](','), ...global.owner?.['split'](',')].map(_0x119c50 => _0x119c50.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x5a2f3c.user);
     _0x5a2f3c.isAstro = [...Astro].map(_0x27f7b1 => _0x27f7b1.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x5a2f3c.user);
     _0x5a2f3c.fromMe = _0x5a2f3c.isAstro ? true : areJidsSameUser(_0x5a2f3c.user, _0x214a07);
     if (_0x5a2f3c.action === "remove" && _0x5a2f3c.fromMe) {
       return;
     }
     _0x5a2f3c.astaBot = [...Astro].map(_0x2723d4 => _0x2723d4.replace(/[^0-9]/g) + '@s.whatsapp.net').includes(_0x214a07);
     _0x5a2f3c.blockJid = ['120363023983262391@g.us', "120363025246125888@g.us", ...global.blockJids?.['split'](',')].includes(_0x5a2f3c.chat);
     _0x5a2f3c.isGroup = _0x5a2f3c.chat.endsWith("@g.us");
     if (_0x5a2f3c.isGroup) {
       _0x5a2f3c.metadata = await _0x21b687.groupMetadata(_0x5a2f3c.chat);
       gcs[_0x5a2f3c.chat] = _0x5a2f3c.metadata;
       _0x5a2f3c.admins = _0x5a2f3c.metadata.participants.reduce((_0x51d384, _0x19cc2b) => (_0x19cc2b.admin ? _0x51d384.push({
         'id': _0x19cc2b.id,
         'admin': _0x19cc2b.admin
       }) : [..._0x51d384]) && _0x51d384, []);
       _0x5a2f3c.isAdmin = !!_0x5a2f3c.admins.find(_0x526b02 => _0x526b02.id === _0x5a2f3c.user);
       _0x5a2f3c.isBotAdmin = !!_0x5a2f3c.admins.find(_0xc6c55 => _0xc6c55.id === _0x214a07);
     }
     _0x5a2f3c.kick = _0x5a2f3c.remove = (_0x4984e5 = _0x5a2f3c.user) => _0x21b687.groupParticipantsUpdate(_0x5a2f3c.chat, [_0x4984e5], "remove");
     _0x5a2f3c.add = (_0x44e925 = _0x5a2f3c.user) => _0x21b687.groupParticipantsUpdate(_0x5a2f3c.chat, [_0x44e925], "add");
     _0x5a2f3c.promote = (_0x28f379 = _0x5a2f3c.user) => _0x21b687.groupParticipantsUpdate(_0x5a2f3c.chat, [_0x28f379], 'promote');
     _0x5a2f3c.demote = (_0xf7a87c = _0x5a2f3c.user) => _0x21b687.groupParticipantsUpdate(_0x5a2f3c.chat, [_0xf7a87c], "demote");
     _0x5a2f3c.getpp = async (_0x1fbd82 = _0x5a2f3c.user) => {
       try {
         return await _0x21b687.profilePictureUrl(_0x1fbd82, 'image');
       } catch {
         return 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg';
       }
     };
     _0x5a2f3c.sendMessage = async (_0x524476 = _0x5a2f3c.chat, _0x2736cb = {}, _0x3d05c1 = {
       'quoted': ''
     }) => {
       return await _0x21b687.sendMessage(_0x524476, _0x2736cb, _0x3d05c1);
     };
     _0x5a2f3c.sendUi = async (_0x5ecd71 = _0x5a2f3c.chat, _0x12803c = {}, _0x4804a6 = '', _0x328e95 = false, _0x5219ed = false, _0xb5286a = false) => {
       return await _0x21b687.sendUi(_0x5ecd71, _0x12803c, _0x4804a6, _0x328e95, _0x5219ed, _0xb5286a);
     };
     _0x5a2f3c.error = async (_0x4a3ccf, _0x44cda8 = false, _0x28cfd9 = "*_Request failed due to error!!_*", _0x70aadf = {
       'author': "ANITA"
     }, _0xa26f11 = false) => {
       let _0x6bed49 = _0xa26f11 ? _0xa26f11 : Config.errorChat === 'chat' ? _0x5a2f3c.chat : _0x5a2f3c.botNumber;
       let _0x207fa7 = "*CMD ERROR*\n```\nUSER: @" + _0x5a2f3c.user.split('@')[0x0] + "\n    NOTE: Use .report to send alert about Err.\n\nERR_Message: " + _0x4a3ccf + "\n```";
       if (_0x28cfd9 && Config.errorChat !== 'chat' && _0x5a2f3c.chat !== _0x5a2f3c.botNumber) {
         await _0x21b687.sendMessage(_0x5a2f3c.jid, {
           'text': _0x28cfd9
         });
       }
       console.log(_0x44cda8 ? _0x44cda8 : _0x4a3ccf);
       try {
         return await _0x21b687.sendMessage(_0x6bed49, {
           'text': _0x207fa7,
           ..._0x70aadf,
           'mentions': [_0x5a2f3c.user]
         }, {
           'ephemeralExpiration': 0x3f480
         });
       } catch {}
     };
     _0x5a2f3c.send = async (_0x4e7d08, _0x3847a3 = {
       'mentions': [_0x5a2f3c.user]
     }, _0x2ee6ec = "anita", _0x581e12 = '', _0x270d17 = _0x5a2f3c.chat) => {
       _0x270d17 = _0x270d17 ? _0x270d17 : _0x5a2f3c.chat;
       switch (_0x2ee6ec.toLowerCase()) {
         case 'text':
         case "smd":
         case 'anita':
         case "txt":
         case '':
           {
             return await _0x21b687.sendMessage(_0x270d17, {
               'text': _0x4e7d08,
               ..._0x3847a3,
               'mentions': [_0x5a2f3c.user]
             }, {
               'quoted': _0x581e12
             });
           }
           break;
         case "react":
           {
             return await _0x21b687.sendMessage(_0x270d17, {
               'react': {
                 'text': _0x4e7d08,
                 'key': _0x581e12?.['key']
               }
             });
           }
           break;
         case 'amdimage':
         case "amdimg":
         case "image":
         case "img":
           {
             if (Buffer.isBuffer(_0x4e7d08)) {
               return await _0x21b687.sendMessage(_0x270d17, {
                 'image': _0x4e7d08,
                 ..._0x3847a3,
                 'mimetype': "image/jpeg",
                 'mentions': [_0x5a2f3c.user]
               }, {
                 'quoted': _0x581e12
               });
             } else {
               if (_0x4e7d08.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                 return _0x21b687.sendMessage(_0x270d17, {
                   'image': {
                     'url': _0x4e7d08
                   },
                   ..._0x3847a3,
                   'mimetype': "image/jpeg",
                   'mentions': [_0x5a2f3c.user]
                 }, {
                   'quoted': _0x581e12
                 });
               }
             }
           }
           break;
         case "amdvideo":
         case 'amdvid':
         case "video":
         case "vid":
         case 'mp4':
           {
             if (Buffer.isBuffer(_0x4e7d08)) {
               return await _0x21b687.sendMessage(_0x270d17, {
                 'video': _0x4e7d08,
                 ..._0x3847a3,
                 'mimetype': "video/mp4"
               }, {
                 'quoted': _0x581e12
               });
             } else {
               if (_0x4e7d08.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                 return await _0x21b687.sendMessage(_0x270d17, {
                   'video': {
                     'url': _0x4e7d08
                   },
                   ..._0x3847a3,
                   'mimetype': "video/mp4"
                 }, {
                   'quoted': _0x581e12
                 });
               }
             }
           }
         case "mp3":
         case "audio":
           {
             if (Buffer.isBuffer(_0x4e7d08)) {
               return await _0x21b687.sendMessage(_0x270d17, {
                 'audio': _0x4e7d08,
                 ..._0x3847a3,
                 'mimetype': "audio/mpeg"
               }, {
                 'quoted': _0x581e12
               });
             } else {
               if (_0x4e7d08.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                 return await _0x21b687.sendMessage(_0x270d17, {
                   'audio': {
                     'url': _0x4e7d08
                   },
                   ..._0x3847a3,
                   'mimetype': "audio/mpeg"
                 }, {
                   'quoted': _0x581e12
                 });
               }
             }
           }
           break;
         case "poll":
         case 'pool':
           {
             return await _0x21b687.sendMessage(_0x270d17, {
               'poll': {
                 'name': _0x4e7d08,
                 'values': [..._0x3847a3.values],
                 'selectableCount': 0x1,
                 ..._0x3847a3
               },
               ..._0x3847a3
             }, {
               'quoted': _0x581e12,
               'messageId': _0x21b687.messageId()
             });
           }
           break;
         case 'amdsticker':
         case "amdstc":
         case "stc":
         case "sticker":
           {
             let {
               data: _0x4b0ada,
               mime: _0xc619b6
             } = await _0x21b687.getFile(_0x4e7d08);
             if (_0xc619b6 == "image/webp") {
               let _0x5b480c = await writeExifWebp(_0x4b0ada, _0x3847a3);
               await _0x21b687.sendMessage(_0x270d17, {
                 'sticker': {
                   'url': _0x5b480c
                 },
                 ..._0x3847a3
               });
             } else if (_0xc619b6.split('/')[0x0] === 'video' || _0xc619b6.split('/')[0x0] === 'image') {
               await _0x21b687.sendImageAsSticker(_0x270d17, _0x4e7d08, _0x3847a3);
             }
           }
           break;
       }
     };
     _0x5a2f3c.sendPoll = async (_0x538e24, _0x493f31 = ["option 1", "option 2"], _0x491758 = 0x1, _0x1d275c = '', _0x249bdb = _0x5a2f3c.jid) => {
       return await _0x5a2f3c.send(_0x538e24, {
         'values': _0x493f31,
         'selectableCount': _0x491758
       }, 'poll', _0x1d275c, _0x249bdb);
     };
     _0x5a2f3c.checkBot = (_0x17fdd6 = _0x5a2f3c.sender) => [...Astro, _0x255c3f].map(_0x3fd0eb => _0x3fd0eb.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x17fdd6);
     _0x5a2f3c.botNumber = _0x214a07;
     _0x5a2f3c.bot = _0x168130 ? _0x21b687 : {};
     return global.AstroOfficial && global.AstroOfficial === "yes" ? _0x5a2f3c : {};
   } catch (_0x54c871) {
     console.log(_0x54c871);
   }
 };
 let botNumber = '';
 exports.smsg = async (_0x49c12d, _0x435bf5, _0x3570d4, _0x2a3512 = false) => {
   if (!_0x435bf5) {
     return _0x435bf5;
   }
   let _0x4aa934 = proto.WebMessageInfo;
   botNumber = botNumber ? botNumber : _0x49c12d.decodeJid(_0x49c12d.user.id);
   let _0x13f20a = botNumber.split('@')[0x0];
   let _0x187daf = {
     ..._0x435bf5
   };
   _0x187daf.data = {
     ..._0x435bf5
   };
   if (_0x435bf5.key) {
     _0x187daf.key = _0x435bf5.key;
     _0x187daf.id = _0x187daf.key.id;
     _0x187daf.chat = _0x187daf.key.remoteJid;
     _0x187daf.fromMe = _0x187daf.key.fromMe;
     _0x187daf.device = getDevice(_0x187daf.id);
     _0x187daf.isBot = _0x187daf.isBaileys = _0x187daf.id.startsWith("BAE5") || _0x187daf.id.startsWith("ANITA");
     if (_0x187daf.chat === 'status@broadcast') {
       _0x187daf.status = true;
     }
     _0x187daf.isGroup = _0x187daf.chat.endsWith("@g.us");
     _0x187daf.sender = _0x187daf.participant = _0x187daf.fromMe ? botNumber : _0x49c12d.decodeJid(_0x187daf.status || _0x187daf.isGroup ? _0x187daf.key.participant : _0x187daf.chat);
     _0x187daf.senderNum = _0x187daf.sender.split('@')[0x0] || _0x187daf.sender;
   }
   _0x187daf.senderName = _0x187daf.pushName || 'sir';
   if (_0x187daf.isGroup) {
     _0x187daf.metadata = gcs[_0x187daf.chat] || (await _0x49c12d.groupMetadata(_0x187daf.chat));
     gcs[_0x187daf.chat] = _0x187daf.metadata;
     _0x187daf.admins = _0x187daf.metadata.participants.reduce((_0x52ccef, _0x10dfc9) => (_0x10dfc9.admin ? _0x52ccef.push({
       'id': _0x10dfc9.id,
       'admin': _0x10dfc9.admin
     }) : [..._0x52ccef]) && _0x52ccef, []);
     _0x187daf.isAdmin = !!_0x187daf.admins.find(_0x57692 => _0x57692.id === _0x187daf.sender);
     _0x187daf.isBotAdmin = !!_0x187daf.admins.find(_0x18dac2 => _0x18dac2.id === botNumber);
   }
   _0x187daf.isCreator = [_0x13f20a, ...Astro, ...global.sudo.split(','), ...global.devs.split(','), ...global.owner.split(',')].includes(_0x187daf.senderNum);
   _0x187daf.isAstro = Astro.includes(_0x187daf.senderNum);
   _0x187daf.blockJid = ["120363023983262391@g.us", '120363025246125888@g.us', ...global.blockJids?.['split'](',')].includes(_0x187daf.chat);
   _0x187daf.allowJid = ["null", ...global.allowJids?.["split"](',')].includes(_0x187daf.chat);
   _0x187daf.isPublic = Config.WORKTYPE === "public" ? true : _0x187daf.allowJid || _0x187daf.isCreator || _0x187daf.isAstro;
   if (_0x435bf5.message) {
     _0x187daf.mtype = getContentType(_0x435bf5.message) || Object.keys(_0x435bf5.message)[0x0] || '';
     _0x187daf[_0x187daf.mtype.split('Message')[0x0]] = true;
     _0x187daf.message = extractMessageContent(_0x435bf5.message);
     _0x187daf.mtype2 = getContentType(_0x187daf.message) || Object.keys(_0x187daf.message)[0x0];
     _0x187daf.msg = extractMessageContent(_0x187daf.message[_0x187daf.mtype2]) || _0x187daf.message[_0x187daf.mtype2];
     _0x187daf.msg.mtype = _0x187daf.mtype2;
     _0x187daf.mentionedJid = _0x187daf.msg?.["contextInfo"]?.['mentionedJid'] || [];
     _0x187daf.body = _0x187daf.msg?.["text"] || _0x187daf.msg?.["conversation"] || _0x187daf.msg?.["caption"] || _0x187daf.message?.["conversation"] || _0x187daf.msg?.['selectedButtonId'] || _0x187daf.msg?.['singleSelectReply']?.["selectedRowId"] || _0x187daf.msg?.["selectedId"] || _0x187daf.msg?.["contentText"] || _0x187daf.msg?.["selectedDisplayText"] || _0x187daf.msg?.['title'] || _0x187daf.msg?.["name"] || '';
     _0x187daf.timestamp = typeof _0x435bf5.messageTimestamp === "number" ? _0x435bf5.messageTimestamp : _0x435bf5.messageTimestamp?.["low"] ? _0x435bf5.messageTimestamp.low : _0x435bf5.messageTimestamp?.["high"] || _0x435bf5.messageTimestamp;
     _0x187daf.time = getTime("h:mm:ss a");
     _0x187daf.date = getTime('DD/MM/YYYY');
     _0x187daf.mimetype = _0x187daf.msg.mimetype || '';
     if (/webp/i.test(_0x187daf.mimetype)) {
       _0x187daf.isAnimated = _0x187daf.msg.isAnimated;
     }
     let _0x39d822 = _0x187daf.msg.contextInfo ? _0x187daf.msg.contextInfo.quotedMessage : null;
     _0x187daf.data.reply_message = _0x39d822;
     _0x187daf.quoted = _0x39d822 ? {} : null;
     _0x187daf.reply_text = '';
     if (_0x39d822) {
       _0x187daf.quoted.message = extractMessageContent(_0x39d822);
       if (_0x187daf.quoted.message) {
         _0x187daf.quoted.key = {
           'remoteJid': _0x187daf.msg.contextInfo.remoteJid || _0x187daf.chat,
           'participant': _0x49c12d.decodeJid(_0x187daf.msg.contextInfo.participant) || false,
           'fromMe': areJidsSameUser(_0x49c12d.decodeJid(_0x187daf.msg.contextInfo.participant), botNumber) || false,
           'id': _0x187daf.msg.contextInfo.stanzaId || ''
         };
         _0x187daf.quoted.mtype = getContentType(_0x39d822) || Object.keys(_0x39d822)[0x0];
         _0x187daf.quoted.mtype2 = getContentType(_0x187daf.quoted.message) || Object.keys(_0x187daf.quoted.message)[0x0];
         _0x187daf.quoted[_0x187daf.quoted.mtype.split("Message")[0x0]] = true;
         _0x187daf.quoted.msg = extractMessageContent(_0x187daf.quoted.message[_0x187daf.quoted.mtype2]) || _0x187daf.quoted.message[_0x187daf.quoted.mtype2] || {};
         _0x187daf.quoted.msg.mtype = _0x187daf.quoted.mtype2;
         _0x187daf.expiration = _0x187daf.msg.contextInfo.expiration || 0x0;
         _0x187daf.quoted.chat = _0x187daf.quoted.key.remoteJid;
         _0x187daf.quoted.fromMe = _0x187daf.quoted.key.fromMe;
         _0x187daf.quoted.id = _0x187daf.quoted.key.id;
         _0x187daf.quoted.device = getDevice(_0x187daf.quoted.id || _0x187daf.id);
         _0x187daf.quoted.isBaileys = _0x187daf.quoted.isBot = _0x187daf.quoted.id?.["startsWith"]("BAE5") || _0x187daf.quoted.id?.["startsWith"]("ANITA") || _0x187daf.quoted.id?.['length'] == 0x10;
         _0x187daf.quoted.isGroup = _0x187daf.quoted.chat.endsWith("@g.us");
         _0x187daf.quoted.sender = _0x187daf.quoted.participant = _0x187daf.quoted.key.participant;
         _0x187daf.quoted.senderNum = _0x187daf.quoted.sender.split('@')[0x0];
         _0x187daf.quoted.text = _0x187daf.quoted.body = _0x187daf.quoted.msg.text || _0x187daf.quoted.msg.caption || _0x187daf.quoted.message.conversation || _0x187daf.quoted.msg?.["selectedButtonId"] || _0x187daf.quoted.msg?.['singleSelectReply']?.["selectedRowId"] || _0x187daf.quoted.msg?.["selectedId"] || _0x187daf.quoted.msg?.["contentText"] || _0x187daf.quoted.msg?.["selectedDisplayText"] || _0x187daf.quoted.msg?.["title"] || _0x187daf.quoted?.["msg"]?.["name"] || '';
         _0x187daf.quoted.mimetype = _0x187daf.quoted.msg?.["mimetype"] || '';
         if (/webp/i.test(_0x187daf.quoted.mimetype)) {
           _0x187daf.quoted.isAnimated = _0x187daf.quoted.msg?.["isAnimated"] || false;
         }
         _0x187daf.quoted.mentionedJid = _0x187daf.quoted.msg.contextInfo?.["mentionedJid"] || [];
         _0x187daf.getQuotedObj = _0x187daf.getQuotedMessage = async (_0x4f0e21 = _0x187daf.chat, _0x264580 = _0x187daf.quoted.id, _0x531a6c = false) => {
           if (!_0x264580) {
             return false;
           }
           let _0x1a108b = await _0x3570d4.loadMessage(_0x4f0e21, _0x264580, _0x49c12d);
           return exports.smsg(_0x49c12d, _0x1a108b, _0x3570d4, _0x531a6c);
         };
         _0x187daf.quoted.fakeObj = _0x4aa934.fromObject({
           'key': _0x187daf.quoted.key,
           'message': _0x187daf.data.quoted,
           ...(_0x187daf.isGroup ? {
             'participant': _0x187daf.quoted.sender
           } : {})
         });
         _0x187daf.quoted["delete"] = async () => await _0x49c12d.sendMessage(_0x187daf.chat, {
           'delete': _0x187daf.quoted.key
         });
         _0x187daf.quoted.download = async () => await _0x49c12d.downloadMediaMessage(_0x187daf.quoted);
         _0x187daf.quoted.from = _0x187daf.quoted.jid = _0x187daf.quoted.key.remoteJid;
         if (_0x187daf.quoted.jid === "status@broadcast") {
           _0x187daf.quoted.status = true;
         }
         _0x187daf.reply_text = _0x187daf.quoted.text;
         _0x187daf.forwardMessage = (_0x5583cd = _0x187daf.jid, _0x273cf9 = _0x187daf.quoted.fakeObj, _0x5823f4 = false, _0x4596ff = {}) => _0x49c12d.copyNForward(_0x5583cd, _0x273cf9, _0x5823f4, {
           'contextInfo': {
             'isForwarded': false
           }
         }, _0x4596ff);
       }
     }
   }
   _0x187daf.getMessage = async (_0x45c058 = _0x187daf.key, _0x524589 = false) => {
     if (!_0x45c058 || !_0x45c058.id) {
       return false;
     }
     let _0x8cb95 = await _0x3570d4.loadMessage(_0x45c058.remoteJid || _0x187daf.chat, _0x45c058.id);
     return await exports.smsg(_0x49c12d, _0x8cb95, _0x3570d4, _0x524589);
   };
   _0x187daf.Suhail = (_0x206c5e = _0x187daf.sender) => [...Astro].map(_0x45b640 => _0x45b640.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x206c5e);
   _0x187daf.checkBot = (_0x51d169 = _0x187daf.sender) => [...Astro, _0x13f20a].map(_0x56557e => _0x56557e.replace(/[^0-9]/g) + '@s.whatsapp.net').includes(_0x51d169);
   _0x187daf.download = () => _0x49c12d.downloadMediaMessage(_0x187daf.msg);
   _0x187daf.text = _0x187daf.body;
   _0x187daf.quoted_text = _0x187daf.reply_text;
   _0x187daf.from = _0x187daf.jid = _0x187daf.chat;
   _0x187daf.copy = (_0x4c6dd4 = _0x187daf, _0x468ef5 = false) => {
     return exports.smsg(_0x49c12d, _0x4aa934.fromObject(_0x4aa934.toObject(_0x4c6dd4)), _0x3570d4, _0x468ef5);
   };
   _0x187daf.getpp = async (_0x11141b = _0x187daf.sender) => {
     try {
       return await _0x49c12d.profilePictureUrl(_0x11141b, "image");
     } catch {
       return "https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg";
     }
   };
   _0x187daf.removepp = (_0x1b5d8c = botNumber) => _0x49c12d.removeProfilePicture(_0x1b5d8c);
   _0x187daf.sendMessage = (_0x5134a6 = _0x187daf.chat, _0x263766 = {}, _0x3b1b1f = {
     'quoted': ''
   }) => _0x49c12d.sendMessage(_0x5134a6, _0x263766, _0x3b1b1f);
   _0x187daf['delete'] = async (_0x10383b = _0x187daf) => await _0x49c12d.sendMessage(_0x187daf.chat, {
     'delete': _0x10383b.key
   });
   _0x187daf.copyNForward = (_0x3343d5 = _0x187daf.chat, _0x13ed65 = _0x187daf.quoted || _0x187daf, _0x3064d4 = false, _0x26bd98 = {}) => _0x49c12d.copyNForward(_0x3343d5, _0x13ed65, _0x3064d4, _0x26bd98);
   _0x187daf.sticker = (_0x275c82, _0x534b49 = _0x187daf.chat, _0x45c70b = {
     'mentions': [_0x187daf.sender]
   }) => _0x49c12d.sendMessage(_0x534b49, {
     'sticker': _0x275c82,
     'contextInfo': {
       'mentionedJid': _0x45c70b.mentions
     }
   }, {
     'quoted': _0x187daf,
     'messageId': _0x49c12d.messageId()
   });
   _0x187daf.replyimg = (_0x4464a7, _0x578a93, _0x3b5dfd = _0x187daf.chat, _0x4f2487 = {
     'mentions': [_0x187daf.sender]
   }) => _0x49c12d.sendMessage(_0x3b5dfd, {
     'image': _0x4464a7,
     'caption': _0x578a93,
     'contextInfo': {
       'mentionedJid': _0x4f2487.mentions
     }
   }, {
     'quoted': _0x187daf,
     'messageId': _0x49c12d.messageId()
   });
   _0x187daf.imgurl = (_0x2ebb9a, _0x287f58, _0x48ee5b = _0x187daf.chat, _0x267172 = {
     'mentions': [_0x187daf.sender]
   }) => _0x49c12d.sendMessage(_0x48ee5b, {
     'image': {
       'url': _0x2ebb9a
     },
     'caption': _0x287f58,
     ..._0x267172
   }, {
     'quoted': _0x187daf,
     'messageId': _0x49c12d.messageId()
   });
   _0x187daf.sendUi = async (_0x3e708c = _0x187daf.chat, _0x3db4d5, _0x18199b = '', _0xb3daf1 = '', _0x5c778e = '') => {
     await _0x49c12d.sendUi(_0x3e708c, _0x3db4d5, _0x18199b, _0xb3daf1, _0x5c778e);
   };
   _0x187daf.error = async (_0x56955f, _0x104e6c = false, _0x41eb92 = "*_Request not be Proceed!!_*", _0x27bf18 = {
     'author': "ANITA"
   }, _0x317eea = false) => {
     let _0x3e3b5d = _0x317eea ? _0x317eea : Config.errorChat === "chat" ? _0x187daf.chat : _0x187daf.user;
     let _0x45b178 = "*CMD ERROR*\n```\nUSER: @" + _0x187daf.sender.split('@')[0x0] + "\nNOTE: See Console for more info.\n\nERR_Message: " + _0x56955f + "\n```";
     if (_0x41eb92 && Config.errorChat !== "chat" && _0x187daf.chat !== botNumber) {
       await _0x49c12d.sendMessage(_0x187daf.jid, {
         'text': _0x41eb92
       }, {
         'quoted': _0x187daf,
         'messageId': _0x49c12d.messageId()
       });
     }
     console.log(_0x104e6c ? _0x104e6c : _0x56955f);
     try {
       if (_0x56955f) {
         return await _0x49c12d.sendMessage(_0x3e3b5d, {
           'text': _0x45b178,
           ..._0x27bf18,
           'mentions': [_0x187daf.sender]
         }, {
           'quoted': _0x187daf,
           'ephemeralExpiration': 0x3f480,
           'messageId': _0x49c12d.messageId()
         });
       }
     } catch {}
   };
   _0x187daf.user = botNumber;
   _0x187daf.send = async (_0x2b8869, _0x2106e3 = {
     'author': "ANITA"
   }, _0x5b48a3 = "anita", _0x453ff3 = '', _0x17fb52 = _0x187daf.chat) => {
     if (!_0x2b8869) {
       return {};
     }
     try {
       _0x17fb52 = _0x17fb52 ? _0x17fb52 : _0x187daf.chat;
       switch (_0x5b48a3.toLowerCase()) {
         case "text":
         case "smd":
         case "anita":
         case "txt":
         case '':
           {
             return await _0x49c12d.sendMessage(_0x17fb52, {
               'text': _0x2b8869,
               ..._0x2106e3
             }, {
               'quoted': _0x453ff3,
               'messageId': _0x49c12d.messageId()
             });
           }
           break;
         case 'react':
           {
             return await _0x49c12d.sendMessage(_0x17fb52, {
               'react': {
                 'text': _0x2b8869,
                 'key': (typeof _0x453ff3 === "object" ? _0x453ff3 : _0x187daf).key
               }
             }, {
               'messageId': _0x49c12d.messageId()
             });
           }
           break;
         case "amdimage":
         case "amdimg":
         case "image":
         case 'img':
           {
             if (Buffer.isBuffer(_0x2b8869)) {
               return await _0x49c12d.sendMessage(_0x17fb52, {
                 'image': _0x2b8869,
                 ..._0x2106e3,
                 'mimetype': "image/jpeg"
               }, {
                 'quoted': _0x453ff3,
                 'messageId': _0x49c12d.messageId()
               });
             } else {
               if (_0x2b8869.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                 return await _0x49c12d.sendMessage(_0x17fb52, {
                   'image': {
                     'url': _0x2b8869
                   },
                   ..._0x2106e3,
                   'mimetype': "image/jpeg"
                 }, {
                   'quoted': _0x453ff3,
                   'messageId': _0x49c12d.messageId()
                 });
               }
             }
           }
           break;
         case "amdvideo":
         case "amdvid":
         case "video":
         case "vid":
         case "mp4":
           {
             if (Buffer.isBuffer(_0x2b8869)) {
               return await _0x49c12d.sendMessage(_0x17fb52, {
                 'video': _0x2b8869,
                 ..._0x2106e3,
                 'mimetype': "video/mp4"
               }, {
                 'quoted': _0x453ff3,
                 'messageId': _0x49c12d.messageId()
               });
             } else {
               if (_0x2b8869.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                 return await _0x49c12d.sendMessage(_0x17fb52, {
                   'video': {
                     'url': _0x2b8869
                   },
                   ..._0x2106e3,
                   'mimetype': "video/mp4"
                 }, {
                   'quoted': _0x453ff3,
                   'messageId': _0x49c12d.messageId()
                 });
               }
             }
           }
         case 'mp3':
         case 'audio':
           {
             if (Buffer.isBuffer(_0x2b8869)) {
               return await _0x49c12d.sendMessage(_0x17fb52, {
                 'audio': _0x2b8869,
                 ..._0x2106e3,
                 'mimetype': "audio/mpeg"
               }, {
                 'quoted': _0x453ff3,
                 'messageId': _0x49c12d.messageId()
               });
             } else {
               if (_0x2b8869.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                 return await _0x49c12d.sendMessage(_0x17fb52, {
                   'audio': {
                     'url': _0x2b8869
                   },
                   ..._0x2106e3,
                   'mimetype': "audio/mpeg"
                 }, {
                   'quoted': _0x453ff3,
                   'messageId': _0x49c12d.messageId()
                 });
               }
             }
           }
           break;
         case 'doc':
         case "smddocument":
         case "document":
           {
             if (Buffer.isBuffer(_0x2b8869)) {
               return await _0x49c12d.sendMessage(_0x17fb52, {
                 'document': _0x2b8869,
                 ..._0x2106e3
               }, {
                 'quoted': _0x453ff3,
                 'messageId': _0x49c12d.messageId()
               });
             } else {
               if (_0x2b8869.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                 return await _0x49c12d.sendMessage(_0x17fb52, {
                   'document': {
                     'url': _0x2b8869
                   },
                   ..._0x2106e3
                 }, {
                   'quoted': _0x453ff3,
                   'messageId': _0x49c12d.messageId()
                 });
               }
             }
           }
           break;
         case "poll":
         case "pool":
           {
             return await _0x49c12d.sendMessage(_0x17fb52, {
               'poll': {
                 'name': _0x2b8869,
                 'values': [..._0x2106e3.values],
                 'selectableCount': 0x1,
                 ..._0x2106e3
               },
               ..._0x2106e3
             }, {
               'quoted': _0x453ff3,
               'messageId': _0x49c12d.messageId()
             });
           }
           break;
         case "template":
           {
             let _0x16f534 = await generateWAMessage(_0x187daf.chat, _0x2b8869, _0x2106e3);
             let _0x39bc9d = {
               'viewOnceMessage': {
                 'message': {
                   ..._0x16f534.message
                 }
               }
             };
             return await _0x49c12d.relayMessage(_0x187daf.chat, _0x39bc9d, {
               'messageId': _0x49c12d.messageId()
             });
           }
           break;
         case "amdsticker":
         case "amdstc":
         case "stc":
         case 'sticker':
           {
             try {
               let {
                 data: _0x5dc2b1,
                 mime: _0x8d00e6
               } = await _0x49c12d.getFile(_0x2b8869);
               if (_0x8d00e6 == "image/webp") {
                 let _0x4ccaca = await writeExifWebp(_0x5dc2b1, _0x2106e3);
                 await _0x49c12d.sendMessage(_0x17fb52, {
                   'sticker': {
                     'url': _0x4ccaca
                   },
                   ..._0x2106e3
                 }, {
                   'quoted': _0x453ff3,
                   'messageId': _0x49c12d.messageId()
                 });
               } else {
                 _0x8d00e6 = await _0x8d00e6.split('/')[0x0];
                 if (_0x8d00e6 === "video" || _0x8d00e6 === "image") {
                   await _0x49c12d.sendImageAsSticker(_0x17fb52, _0x2b8869, _0x2106e3);
                 }
               }
             } catch (_0x320260) {
               console.log("ERROR FROM SMGS SEND FUNC AS STICKER\n\t", _0x320260);
               if (!Buffer.isBuffer(_0x2b8869)) {
                 _0x2b8869 = await getBuffer(_0x2b8869);
               }
               const {
                 Sticker: _0x3c8a92
               } = require("wa-sticker-formatter");
               let _0x4ab4b0 = {
                 'pack': Config.packname,
                 'author': Config.author,
                 'type': 'full',
                 'quality': 0x2,
                 ..._0x2106e3
               };
               let _0x41886b = new _0x3c8a92(_0x2b8869, {
                 ..._0x4ab4b0
               });
               return await _0x49c12d.sendMessage(_0x17fb52, {
                 'sticker': await _0x41886b.toBuffer()
               }, {
                 'quoted': _0x453ff3,
                 'messageId': _0x49c12d.messageId()
               });
             }
           }
           break;
       }
     } catch (_0x398c5f) {
       console.log("\n\nERROR IN SMSG MESSAGE>SEND FROM SERIALIZE.JS\n\t", _0x398c5f);
     }
   };
   _0x187daf.sendPoll = async (_0x1e6bf9, _0x4da35e = ["option 1", "option 2"], _0x1bb22e = 0x1, _0x3f92e8 = _0x187daf, _0x5180fd = _0x187daf.chat) => {
     return await _0x187daf.send(_0x1e6bf9, {
       'values': _0x4da35e,
       'selectableCount': _0x1bb22e
     }, "poll", _0x3f92e8, _0x5180fd);
   };
   _0x187daf.reply = async (_0x388977, _0x9a71e = {}, _0x22dc63 = '', _0x129d0d = _0x187daf, _0x5985a9 = _0x187daf.chat) => {
     return await _0x187daf.send(_0x388977, _0x9a71e, _0x22dc63, _0x129d0d, _0x5985a9);
   };
   _0x187daf.react = (_0x46f7de = '🍂', _0x319d32 = _0x187daf) => {
     _0x49c12d.sendMessage(_0x187daf.chat, {
       'react': {
         'text': _0x46f7de || '🍂',
         'key': (_0x319d32 ? _0x319d32 : _0x187daf).key
       }
     }, {
       'messageId': _0x49c12d.messageId()
     });
   };
   _0x187daf.edit = async (_0x3c2fea, _0x55db8c = {}, _0x217c52 = '', _0x277a92 = _0x187daf.chat) => {
     if (_0x55db8c && !_0x55db8c.edit) {
       _0x55db8c = {
         ..._0x55db8c,
         'edit': (_0x187daf.quoted || _0x187daf).key
       };
     }
     return await _0x187daf.send(_0x3c2fea, _0x55db8c, _0x217c52, '', _0x277a92);
   };
   _0x187daf.senddoc = (_0x293f6a, _0x41aa8b, _0x2ca19f = _0x187daf.chat, _0x1d7705 = {
     'mentions': [_0x187daf.sender],
     'filename': Config.ownername,
     'mimetype': _0x41aa8b,
     'externalAdRepl': {
       'title': Config.ownername,
       'thumbnailUrl': '',
       'thumbnail': log0,
       'mediaType': 0x1,
       'mediaUrl': gurl,
       'sourceUrl': gurl
     }
   }) => _0x49c12d.sendMessage(_0x2ca19f, {
     'document': _0x293f6a,
     'mimetype': _0x1d7705.mimetype,
     'fileName': _0x1d7705.filename,
     'contextInfo': {
       'externalAdReply': _0x1d7705.externalAdRepl,
       'mentionedJid': _0x1d7705.mentions
     }
   }, {
     'quoted': _0x187daf,
     'messageId': _0x49c12d.messageId()
   });
   _0x187daf.sendcontact = (_0x5a80eb, _0x323b72, _0x5cdfd0) => {
     var _0x4874f8 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x5a80eb + "\nORG:" + _0x323b72 + ";\nTEL;type=CELL;type=VOICE;waid=" + _0x5cdfd0 + ':+' + _0x5cdfd0 + "\nEND:VCARD";
     return _0x49c12d.sendMessage(_0x187daf.chat, {
       'contacts': {
         'displayName': _0x5a80eb,
         'contacts': [{
           'vcard': _0x4874f8
         }]
       }
     }, {
       'quoted': _0x187daf,
       'messageId': _0x49c12d.messageId()
     });
   };
   _0x187daf.loadMessage = async (_0x4949a8 = _0x187daf.key) => {
     if (!_0x4949a8) {
       return false;
     }
     let _0x509acd = await _0x3570d4.loadMessage(_0x187daf.chat, _0x4949a8.id, _0x49c12d);
     return await exports.smsg(_0x49c12d, _0x509acd, _0x3570d4, false);
   };
   if (_0x187daf.mtype == "protocolMessage" && _0x187daf.msg.type === "REVOKE") {
     _0x187daf.getDeleted = async () => {
       let _0x41b700 = await _0x3570d4.loadMessage(_0x187daf.chat, _0x187daf.msg.key.id, _0x49c12d);
       return await exports.smsg(_0x49c12d, _0x41b700, _0x3570d4, false);
     };
   }
   _0x187daf.reply_message = _0x187daf.quoted;
   _0x187daf.bot = _0x2a3512 ? _0x49c12d : {};
   return global.AstroOfficial && global.AstroOfficial === "yes" ? _0x187daf : {};
 };
 let file = require.resolve(__filename);
 fs.watchFile(file, () => {
   console.log("Update " + __filename);
 });