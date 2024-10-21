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

const Config = require("../config");
const fs = require('fs');
const {
  Insta,
  pinterest,
  adultvid,
  hentai,
  tlang,
  botpic,
  language,
  getString,
  wikimedia,
  toAudio,
  toPTT,
  toVideo,
  sync,
  syncgit,
  ffmpeg,
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  fancy,
  randomfancy,
  ringtone,
  styletext,
  isAdmin,
  isBotAdmin,
  createUrl,
  mediafireDl,
  mediafire,
  dare,
  truth,
  random_question,
  amount_of_questions
} = require("./scraper");
const acrcloud = require(__dirname + "/class/init");
const {
  unixTimestampSecond,
  generateMessageTag,
  processTime,
  getBuffer,
  smdBuffer,
  fetchJson,
  astroJson,
  runtime,
  clockString,
  sleep,
  isUrl,
  getTime,
  formatDate,
  formatp,
  jsonformat,
  logic,
  generateProfilePicture,
  bytesToSize,
  getSizeMedia,
  parseMention,
  GIFBufferToVideoBuffer,
  smsg,
  callsg
} = require("./serialized");
const {
  listall,
  strikeThrough,
  wingdings,
  vaporwave,
  typewriter,
  analucia,
  tildeStrikeThrough,
  underline,
  doubleUnderline,
  slashThrough,
  sparrow,
  heartsBetween,
  arrowBelow,
  crossAboveBelow,
  creepify,
  bubbles,
  mirror,
  squares,
  roundsquares,
  flip,
  tiny,
  createMap,
  serif_I,
  manga,
  ladybug,
  runes,
  serif_B,
  serif_BI,
  fancy1,
  fancy2,
  fancy3,
  fancy4,
  fancy5,
  fancy6,
  fancy7,
  fancy8,
  fancy9,
  fancy10,
  fancy11,
  fancy12,
  fancy13,
  fancy14,
  fancy15,
  fancy16,
  fancy17,
  fancy18,
  fancy19,
  fancy20,
  fancy21,
  fancy22,
  fancy23,
  fancy24,
  fancy25,
  fancy26,
  fancy27,
  fancy28,
  fancy29,
  fancy30,
  fancy31,
  fancy32,
  fancy33,
  randomStyle
} = require('./stylish-font');
const {
  sck1
} = require(__dirname + "/database/user");
const {
  sck
} = require(__dirname + "/database/group");
const {
  alive
} = require(__dirname + '/database/alive');
const {
  pg,
  dbs,
  groupdb,
  userdb,
  alivedb,
  bot_
} = require(__dirname + "/schemes");
const {
  cmd,
  smd,
  commands
} = require(__dirname + "/plugins");
const {
  sendAnimeReaction,
  yt,
  sendGImages,
  AudioToBlackVideo,
  textToLogoGenerator,
  photoEditor,
  updateProfilePicture,
  randomeFunfacts,
  getRandom,
  generateSticker,
  forwardMessage,
  plugins,
  audioEditor,
  send,
  react,
  note,
  sendWelcome,
  aitts
} = require(__dirname, "./asta.js");
module.exports = {
  'yt': yt,
  'plugins': plugins,
  'forwardMessage': forwardMessage,
  'updateProfilePicture': updateProfilePicture,
  'sendAnimeReaction': sendAnimeReaction,
  'sendGImages': sendGImages,
  'textToLogoGenerator': textToLogoGenerator,
  'photoEditor': photoEditor,
  'updateProfilePicture': updateProfilePicture,
  'randomeFunfacts': randomeFunfacts,
  'AudioToBlackVideo': AudioToBlackVideo,
  'getRandom': getRandom,
  'generateSticker': generateSticker,
  'audioEditor': audioEditor,
  'send': send,
  'react': react,
  'note': note,
  'sendWelcome': sendWelcome,
  'aitts': aitts,
  'pg': pg,
  'dbs': dbs,
  'bot_': bot_,
  'alive': alive,
  'sck': sck,
  'smd': smd,
  'commands': commands,
  'sck1': sck1,
  'Insta': Insta,
  'pinterest': pinterest,
  'adultvid': adultvid,
  'hentai': hentai,
  'tlang': tlang,
  'botpic': botpic,
  'language': language,
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
  'isBotAdmin': isBotAdmin,
  'createUrl': createUrl,
  'mediafireDl': mediafireDl,
  'mediafire': mediafire,
  'dare': dare,
  'truth': truth,
  'random_question': random_question,
  'amount_of_questions': amount_of_questions,
  'unixTimestampSecond': unixTimestampSecond,
  'generateMessageTag': generateMessageTag,
  'processTime': processTime,
  'getBuffer': getBuffer,
  'smdBuffer': smdBuffer,
  'fetchJson': fetchJson,
  'astroJson': astroJson,
  'runtime': runtime,
  'clockString': clockString,
  'sleep': sleep,
  'isUrl': isUrl,
  'getTime': getTime,
  'formatDate': formatDate,
  'formatp': formatp,
  'jsonformat': jsonformat,
  'logic': logic,
  'generateProfilePicture': generateProfilePicture,
  'bytesToSize': bytesToSize,
  'getSizeMedia': getSizeMedia,
  'parseMention': parseMention,
  'GIFBufferToVideoBuffer': GIFBufferToVideoBuffer,
  'smsg': smsg,
  'callsg': callsg,
  'pinterest': pinterest,
  'tlang': tlang,
  'botpic': botpic,
  'language': language,
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
  'listall': listall,
  'strikeThrough': strikeThrough,
  'wingdings': wingdings,
  'vaporwave': vaporwave,
  'typewriter': typewriter,
  'analucia': analucia,
  'tildeStrikeThrough': tildeStrikeThrough,
  'underline': underline,
  'doubleUnderline': doubleUnderline,
  'slashThrough': slashThrough,
  'sparrow': sparrow,
  'heartsBetween': heartsBetween,
  'arrowBelow': arrowBelow,
  'crossAboveBelow': crossAboveBelow,
  'creepify': creepify,
  'bubbles': bubbles,
  'mirror': mirror,
  'squares': squares,
  'roundsquares': roundsquares,
  'flip': flip,
  'tiny': tiny,
  'createMap': createMap,
  'serif_I': serif_I,
  'manga': manga,
  'ladybug': ladybug,
  'runes': runes,
  'serif_B': serif_B,
  'serif_BI': serif_BI,
  'serif_I': serif_I,
  'fancy1': fancy1,
  'fancy2': fancy2,
  'fancy3': fancy3,
  'fancy4': fancy4,
  'fancy5': fancy5,
  'fancy6': fancy6,
  'fancy7': fancy7,
  'fancy8': fancy8,
  'fancy9': fancy9,
  'fancy10': fancy10,
  'fancy11': fancy11,
  'fancy12': fancy12,
  'fancy13': fancy13,
  'fancy14': fancy14,
  'fancy15': fancy15,
  'fancy16': fancy16,
  'fancy17': fancy17,
  'fancy18': fancy18,
  'fancy19': fancy19,
  'fancy20': fancy20,
  'fancy21': fancy21,
  'fancy22': fancy22,
  'fancy23': fancy23,
  'fancy24': fancy24,
  'fancy25': fancy25,
  'fancy26': fancy26,
  'fancy27': fancy27,
  'fancy28': fancy28,
  'fancy29': fancy29,
  'fancy30': fancy30,
  'fancy31': fancy31,
  'fancy32': fancy32,
  'fancy33': fancy33,
  'randomStyle': randomStyle,
  'Insta': Insta,
  'addCommand': cmd,
  'groupdb': groupdb,
  'userdb': userdb,
  'alivedb': alivedb,
  'prefix': Config.HANDLERS.includes("null") ? '' : Config.HANDLERS[0x0],
  'Config': Config,
  'setting': Config,
  'stor': async () => {
    return await JSON.parse(fs.readFileSync(__dirname + "/store.json", "utf8"));
  },
  'fancytext': (_0x53f4b1, _0x44fda5) => {
    _0x44fda5 = _0x44fda5 - 0x1;
    return listall(_0x53f4b1)[_0x44fda5];
  },
  'parsedJid': (_0x3c909f = '') => {
    return _0x3c909f.match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g) || [];
  },
  'getAdmin': async (_0x1581e0, _0x1aba8d) => {
    var _0x3d1e4e = await _0x1581e0.groupMetadata(_0x1aba8d.chat);
    a = [];
    for (let _0xc69399 of _0x3d1e4e.participants) {
      if (_0xc69399.admin == null) {
        continue;
      }
      a.push(_0xc69399.id);
    }
    return a;
  },
  'isGroup': isGroup = _0x3274c0 => {
    return _0x3274c0.endsWith("@g.us");
  },
  'parseurl': parseurl = _0x150875 => {
    return _0x150875.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
  },
  'isInstaUrl': _0x5a377d => {
    /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim.test(_0x5a377d);
  },
  'isNumber': function isNumber() {
    const _0x1acb16 = parseInt(this);
    return typeof _0x1acb16 === "number" && !isNaN(_0x1acb16);
  },
  'shazam': async function shazam(_0x848021) {
    let _0x42dae0 = new acrcloud({
      'host': "identify-eu-west-1.acrcloud.com",
      'endpoint': "/v1/identify",
      'signature_version': '1',
      'data_type': "audio",
      'secure': true,
      'access_key': "c816ad50a2bd6282e07b90447d93c38c",
      'access_secret': "ZpYSwmCFpRovcSQBCFCe1KArX7xt8DTkYx2XKiIP"
    });
    let _0xcff5c3 = await _0x42dae0.identify(_0x848021);
    let {
      code: _0x2e46df,
      msg: _0x86faa0
    } = _0xcff5c3.status;
    if (_0x2e46df !== 0x0) {
      return _0x86faa0;
    }
    let {
      title: _0x2b005f,
      artists: _0xf9370b,
      album: _0x6b3cf1,
      genres: _0x4f0409,
      release_date: _0x5791bb,
      external_metadata: _0x47c230
    } = _0xcff5c3.metadata.music[0x0];
    let {
      youtube: _0x31e3da,
      spotify: _0x2c2513
    } = _0x47c230;
    return {
      'status': 0xc8,
      'title': _0x2b005f,
      'artists': _0xf9370b !== undefined ? _0xf9370b.map(_0x22b2d8 => _0x22b2d8.name).join(", ") : '',
      'genres': _0x4f0409 !== undefined ? _0x4f0409.map(_0x677771 => _0x677771.name).join(", ") : '',
      'release_date': _0x5791bb,
      'album': _0x6b3cf1.name || '',
      'data': _0xcff5c3
    };
  }
};