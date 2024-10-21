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

const fs = require('fs');
const path = require("path");
const Config = require(__dirname + "/../config.js");
const blockJid = ['' + (process.env.BLOCKJIDS || "120363023983262391@g.us"), ...(typeof global.blockJids === "string" ? global.blockJids.split(',') : [])];
const allowJid = ['null', ...(typeof global.allowJids === "string" ? global.allowJids.split(',') : [])];
const Pino = require("pino");
const {
  Boom
} = require("@hapi/boom");
const FileType = require("file-type");
const express = require("express");
const app = express();
const events = require('./plugins');
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./exif");
var {
  default: AstaConnectSock,
  proto,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  DisconnectReason,
  useMultiFileAuthState,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  makeInMemoryStore,
  jidDecode
} = require("@whiskeysockets/baileys");
var last_status = {};
global.setCmdAlias = {};
global.AstaOfficial = false;
global.sqldb = false;
global.pg_pools = false;
const {
  userdb,
  groupdb,
  sleep,
  getBuffer,
  parsedJid,
  tiny,
  botpic,
  tlang,
  runtime,
  getSizeMedia,
  bot_,
  smdBuffer
} = require("../lib");
const fetch = require("node-fetch");
const axios = require("axios");
const {
  smsg,
  callsg,
  groupsg
} = require("./serialized.js");
var prefa = !!(!Config.HANDLERS || ["false", "null", " ", '', "nothing", "not", "empty"].includes(!Config.HANDLERS));
global.prefix = prefa ? '' : Config.HANDLERS[0x0];
global.prefixRegex = prefa || ["all"].includes(Config.HANDLERS) ? new RegExp('^') : new RegExp('^[' + Config.HANDLERS + ']');
global.prefixboth = ["all"].includes(Config.HANDLERS);
const connnectpg = async () => {
  try {
    const {
      Pool: _0x4983ed
    } = require('pg');
    const _0x534eaa = new _0x4983ed({
      'connectionString': global.DATABASE_URL,
      'ssl': {
        'rejectUnauthorized': false
      }
    });
    const _0x16820a = await _0x534eaa.connect();
    _0x16820a.release();
    console.log("🌍 Connected to the PostgreSQL.");
    return true;
  } catch (_0x50b930) {
    console.log("Could not connect with PostgreSQL.\n");
    return false;
  }
};
const connnectMongo = async () => {
  const _0x2ae123 = require("mongoose");
  try {
    _0x2ae123.set("strictQuery", true);
    await _0x2ae123.connect(MONGODB);
    console.log("🌍 Connected to the MongoDB.");
    return true;
  } catch {
    console.log("Could not connect with MongoDB.");
    return false;
  }
};
let Asta = {};
const store = makeInMemoryStore({
  'logger': Pino({
    'level': 'silent'
  }).child({
    'level': "silent"
  })
});
const storeFilePath = path.join(__dirname, "/store.json");
try {
  if (fs.existsSync(storeFilePath)) {
    store.readFromFile(storeFilePath);
  }
} catch (_0x373c98) {
  console.log("CLIENT STORE ERROR:\n", _0x373c98);
}
require('events').EventEmitter.defaultMaxListeners = 0x7d0;
async function syncdb() {
  let _0x514c33 = __dirname + "/assets/asta.jpeg";
  try {
    global.log0 = typeof THUMB_IMAGE === "string" ? await getBuffer(THUMB_IMAGE.split(',')[0x0]) : fs.readFileSync(_0x514c33);
  } catch (_0x1b1947) {
    _0x514c33 = __dirname + "/assets/asta.jpeg";
  }
  global.log0 = global.log0 || fs.readFileSync(_0x514c33);
  const {
    state: _0x23eeb8,
    saveCreds: _0x3bfb81
  } = await useMultiFileAuthState(__dirname + "/Session/");
  let _0xbd05e4 = AstaConnectSock({
    'logger': Pino({
      'level': "silent" || "debug" || "fatal"
    }),
    'printQRInTerminal': false,
    'browser': ["Windows", "chrome", "ANITA"],
    'fireInitQueries': true,
    'shouldSyncHistoryMessage': true,
    'downloadHistory': true,
    'syncFullHistory': true,
    'generateHighQualityLinkPreview': true,
    'markOnlineOnConnect': true,
    'auth': _0x23eeb8,
    'getMessage': async _0x167271 => {
      let _0x35d648 = {
        'conversation': "Hello World!"
      };
      if (store) {
        const _0x257b81 = await store.loadMessage(_0x167271.remoteJid, _0x167271.id);
        return _0x257b81.message || _0x35d648;
      }
      return _0x35d648;
    }
  });
  store.bind(_0xbd05e4.ev);
  setInterval(() => {
    try {
      const _0x213884 = __dirname + "/store.json";
      store.writeToFile(_0x213884);
    } catch (_0x454213) {
      console.log("CLIENT STORE ERROR:\n", _0x454213);
    }
  }, 0x2710);
  _0xbd05e4.ev.on("call", async _0x59d795 => {
    let _0x59db53 = await callsg(_0xbd05e4, JSON.parse(JSON.stringify(_0x59d795[0x0])));
    events.commands.map(async _0x535705 => {
      if (_0x535705.call === "offer" && _0x59db53.status === 'offer') {
        try {
          _0x535705["function"](_0x59db53, {
            'store': store,
            'Void': _0xbd05e4
          });
        } catch (_0x49df69) {
          console.error("[CALL ERROR] ", _0x49df69);
        }
      }
      if (_0x535705.call === "accept" && _0x59db53.status === 'accept') {
        try {
          _0x535705['function'](_0x59db53, {
            'store': store,
            'Void': _0xbd05e4
          });
        } catch (_0x5e1eaf) {
          console.error("[CALL ACCEPT ERROR] ", _0x5e1eaf);
        }
      }
      if (_0x535705.call === "call" || _0x535705.call === 'on' || _0x535705.call === "all") {
        try {
          _0x535705["function"](_0x59db53, {
            'store': store,
            'Void': _0xbd05e4
          });
        } catch (_0x3f0076) {
          console.error("[CALL ERROR] ", _0x3f0076);
        }
      }
    });
  });
  var _0xa64d6d = false;
  let _0x4ace32 = {};
  let _0x17bda2 = {};
  _0xbd05e4.ev.on("messages.upsert", async _0x1f6e63 => {
    try {
      if (!_0x1f6e63.messages || !Array.isArray(_0x1f6e63.messages)) {
        return;
      }
      _0xa64d6d = _0xa64d6d || _0xbd05e4.decodeJid(_0xbd05e4.user.id);
      for (mek of _0x1f6e63.messages) {
        mek.message = Object.keys(mek.message || {})[0x0] === 'ephemeralMessage' ? mek.message.ephemeralMessage.message : mek.message;
        if (!mek.message || !mek.key || !/broadcast/gi.test(mek.key.remoteJid)) {
          continue;
        }
        let _0x1a75e8 = await smsg(_0xbd05e4, JSON.parse(JSON.stringify(mek)), store, true);
        if (!_0x1a75e8.message) {
          continue;
        }
        let _0x435d56 = _0x1a75e8.body;
        let _0x45fdd0 = {
          'body': _0x435d56,
          'mek': mek,
          'text': _0x435d56,
          'args': _0x435d56.split(" ") || [],
          'botNumber': _0xa64d6d,
          'isCreator': _0x1a75e8.isCreator,
          'store': store,
          'budy': _0x435d56,
          'Asta': {
            'bot': _0xbd05e4
          },
          'Void': _0xbd05e4,
          'proto': proto
        };
        events.commands.map(async _0xb6257e => {
          if (typeof _0xb6257e.on === "string") {
            let _0x256225 = _0xb6257e.on.trim();
            let _0x1db9df = !_0xb6257e.fromMe || _0xb6257e.fromMe && _0x1a75e8.fromMe;
            if (/status|story/gi.test(_0x256225) && (_0x1a75e8.jid === 'status@broadcast' || mek.key.remoteJid === 'status@broadcast') && _0x1db9df) {
              _0xb6257e["function"](_0x1a75e8, _0x435d56, _0x45fdd0);
            } else if (["broadcast"].includes(_0x256225) && (/broadcast/gi.test(mek.key.remoteJid) || _0x1a75e8.broadcast || /broadcast/gi.test(_0x1a75e8.from)) && _0x1db9df) {
              _0xb6257e['function'](_0x1a75e8, _0x435d56, _0x45fdd0);
            }
          }
        });
      }
    } catch (_0x397f84) {
      console.log("ERROR broadCast --------- messages.upsert \n", _0x397f84);
    }
  });
  _0xbd05e4.ev.on("messages.upsert", async _0x2048b1 => {
    try {
      _0xa64d6d = _0xa64d6d || _0xbd05e4.decodeJid(_0xbd05e4.user.id);
      if (!global.isStart) {
        return;
      }
      for (mek of _0x2048b1.messages) {
        if (!mek.message) {
          continue;
        }
        mek.message = Object.keys(mek.message || {})[0x0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
        if (!mek.message || !mek.key || /broadcast/gi.test(mek.key.remoteJid)) {
          continue;
        }
        let _0x273a1b = await smsg(_0xbd05e4, JSON.parse(JSON.stringify(mek)), store, true);
        if (!_0x273a1b.message || _0x273a1b.chat.endsWith("broadcast")) {
          continue;
        }
        var {
          body: _0x4bc57a
        } = _0x273a1b;
        var _0x2dfccd = _0x273a1b.isCreator;
        var _0x25a9ce = typeof _0x273a1b.text == "string" ? _0x273a1b.text.trim() : false;
        if (_0x25a9ce && _0x4bc57a[0x1] && _0x4bc57a[0x1] == " ") {
          _0x4bc57a = _0x4bc57a[0x0] + _0x4bc57a.slice(0x2);
        }
        let _0x8ef446 = false;
        let _0x294cab = false;
        let _0x149da4 = false;
        if (_0x25a9ce && Config.HANDLERS.toLowerCase().includes("null")) {
          _0x8ef446 = true;
          _0x294cab = _0x4bc57a.split(" ")[0x0].toLowerCase() || false;
        } else if (_0x25a9ce && !Config.HANDLERS.toLowerCase().includes("null")) {
          _0x8ef446 = prefixboth || _0x4bc57a && prefixRegex.test(_0x4bc57a[0x0]) || _0x273a1b.isAsta && /923184474176|923004591719|17863688449/g.test(_0xa64d6d) && _0x4bc57a[0x0] == ',';
          _0x294cab = _0x8ef446 ? prefa ? _0x4bc57a.trim().split(" ")[0x0].toLowerCase() : _0x4bc57a.slice(0x1).trim().split(" ")[0x0].toLowerCase() : false;
          _0x149da4 = prefixboth ? _0x4bc57a.trim().split(" ")[0x0].toLowerCase() : '';
        } else {
          _0x8ef446 = false;
        }
        let _0x2ea6dd = _0x294cab ? _0x294cab.trim() : '';
        if (_0x2ea6dd && global.setCmdAlias[_0x2ea6dd] !== undefined) {
          _0x294cab = global.setCmdAlias[_0x2ea6dd];
          _0x8ef446 = true;
        } else if (_0x273a1b.mtype == "stickerMessage") {
          _0x2ea6dd = 'sticker-' + _0x273a1b.msg.fileSha256;
          if (global.setCmdAlias[_0x2ea6dd]) {
            _0x294cab = global.setCmdAlias[_0x2ea6dd];
            _0x8ef446 = true;
          }
        }
        if (blockJid.includes(_0x273a1b.chat) && !_0x273a1b.isAsta) {
          return;
        }
        if (_0x8ef446 && (_0x273a1b.isBaileys || !_0x2dfccd && Config.WORKTYPE === "private" && !allowJid.includes(_0x273a1b.chat))) {
          _0x8ef446 = false;
        }
        const _0x3885ad = _0x273a1b.body ? _0x4bc57a.trim().split(/ +/).slice(0x1) : [];
        if (!_0x2dfccd && global.disablepm === "true" && _0x8ef446 && !_0x273a1b.isGroup) {
          _0x8ef446 = false;
        }
        if (!_0x2dfccd && global.disablegroup === "true" && _0x8ef446 && _0x273a1b.isGroup && !allowJid.includes(_0x273a1b.chat)) {
          _0x8ef446 = false;
        }
        Asta.bot = _0xbd05e4;
        if (_0x8ef446) {
          let _0x2dd1da = events.commands.find(_0x18f886 => _0x18f886.pattern === _0x294cab) || events.commands.find(_0x550b0e => _0x550b0e.alias && _0x550b0e.alias.includes(_0x294cab));
          if (!_0x2dd1da && prefixboth && _0x149da4) {
            _0x2dd1da = events.commands.find(_0x3d49bb => _0x3d49bb.pattern === _0x149da4) || events.commands.find(_0x68ce59 => _0x68ce59.alias && _0x68ce59.alias.includes(_0x149da4));
          }
          if (_0x2dd1da && _0x2dd1da.fromMe && !_0x273a1b.fromMe && !_0x2dfccd) {
            _0x2dd1da = false;
            return _0x273a1b.reply(tlang().owner);
          }
          if (_0x273a1b.isGroup && _0x2dd1da && _0x294cab !== 'bot') {
            let _0xdcbdfb = _0x4ace32[_0x273a1b.chat] || (await groupdb.findOne({
              'id': _0x273a1b.chat
            })) || {
              'botenable': toBool(_0x273a1b.isAsta || !blockJid.includes(_0x273a1b.chat))
            };
            if (_0xdcbdfb && _0xdcbdfb.botenable === "false") {
              _0x2dd1da = false;
            }
            if (_0x2dd1da && _0xdcbdfb) {
              let _0x29c3cf = _0x2dd1da.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              let _0x34d50e = new RegExp("\\b" + _0x29c3cf + "\b");
              if (_0xdcbdfb.disablecmds !== "false" && _0x34d50e.test(_0xdcbdfb.disablecmds)) {
                _0x2dd1da = false;
              }
            }
          }
          if (!_0x2dfccd && _0x2dd1da) {
            try {
              let _0x394270 = _0x17bda2[_0x273a1b.sender] || (await userdb.findOne({
                'id': _0x273a1b.sender
              })) || {
                'ban': 'false'
              };
              if (_0x394270.ban === "true") {
                _0x2dd1da = false;
                _0x273a1b.reply("Hey " + _0x273a1b.senderName.split("\n").join("  ") + ",\n_You are banned from using commands._");
              }
            } catch (_0x1d3080) {
              console.log("checkban.ban", _0x1d3080);
            }
          }
          if (_0x2dd1da) {
            if (_0x2dd1da.react) {
              _0x273a1b.react(_0x2dd1da.react);
            }
            let _0x1778ee = _0x273a1b.body ? _0x4bc57a.trim().split(/ +/).slice(0x1).join(" ") : '';
            let _0x147b6f = _0x2dd1da.pattern;
            _0x273a1b.cmd = _0x147b6f;
            try {
              _0x2dd1da["function"](_0x273a1b, _0x1778ee, {
                'cmd': _0x147b6f,
                'text': _0x1778ee,
                'body': _0x4bc57a,
                'args': _0x3885ad,
                'cmdName': _0x294cab,
                'isCreator': _0x2dfccd,
                'smd': _0x147b6f,
                'botNumber': _0xa64d6d,
                'budy': _0x25a9ce,
                'store': store,
                'Asta': Asta,
                'Void': _0xbd05e4
              });
            } catch (_0x213155) {
              console.log("[ERROR] ", _0x213155);
            }
          } else {
            _0x8ef446 = false;
            const _0x5f8442 = events.commands.find(_0x3a61ae => _0x3a61ae.category === _0x294cab) || false;
            if (_0x5f8442) {
              const _0x41038f = {};
              let _0x2d5031 = '';
              events.commands.map(async (_0xf925cd, _0x35683d) => {
                if (_0xf925cd.dontAddCommandList === false && _0xf925cd.pattern !== undefined) {
                  if (!_0x41038f[_0xf925cd.category]) {
                    _0x41038f[_0xf925cd.category] = [];
                  }
                  _0x41038f[_0xf925cd.category].push(_0xf925cd.pattern);
                }
              });
              for (const _0xbda705 in _0x41038f) {
                if (_0x294cab == _0xbda705.toLowerCase()) {
                  _0x2d5031 = "┌───〈 " + _0xbda705.toLowerCase() + " menu  〉───◆\n│╭─────────────···▸\n┴│▸\n";
                  for (const _0x24bb67 of _0x41038f[_0xbda705]) {
                    _0x2d5031 += "⬡│▸ " + _0x24bb67 + "\n";
                  }
                  _0x2d5031 += "┬│▸\n│╰────────────···▸▸\n└───────────────···▸";
                  break;
                }
              }
              _0xbd05e4.sendUi(_0x273a1b.jid, {
                'caption': tiny(_0x2d5031)
              });
            }
          }
        }
        try {
          _0x4ace32[_0x273a1b.chat] = (await groupdb.findOne({
            'id': _0x273a1b.chat
          })) || (await groupdb["new"]({
            'id': _0x273a1b.chat,
            'botenable': _0x273a1b.chat === "120363023983262391@g.us" ? "false" : 'true',
            'goodbye': toBool(global.gdbye),
            'welcome': toBool(global.wlcm)
          }));
          _0x17bda2[_0x273a1b.sender] = (await userdb.findOne({
            'id': _0x273a1b.sender
          })) || (await userdb["new"]({
            'id': _0x273a1b.sender,
            'name': _0x273a1b.pushName || "Unknown"
          }));
        } catch (_0x43a9ab) {
          main();
        }
        text = _0x273a1b.body;
        let _0x15c0bc = {
          'dbuser': _0x17bda2[_0x273a1b.sender],
          'dbgroup': _0x4ace32[_0x273a1b.chat],
          'body': _0x4bc57a,
          'mek': mek,
          'text': text,
          'args': _0x3885ad,
          'botNumber': _0xa64d6d,
          'isCreator': _0x2dfccd,
          'icmd': _0x8ef446,
          'store': store,
          'budy': _0x25a9ce,
          'Asta': Asta,
          'Void': _0xbd05e4,
          'proto': proto
        };
        let _0x42b2ac = {
          'mp4': 'video',
          'mp3': "audio",
          'webp': "sticker",
          'photo': "image",
          'picture': "image",
          'vv': "viewonce"
        };
        events.commands.map(async _0x5d0683 => {
          if (typeof _0x5d0683.on === 'string') {
            let _0x3a9fb0 = _0x5d0683.on.trim();
            let _0x12dafc = !_0x5d0683.fromMe || _0x5d0683.fromMe && _0x273a1b.fromMe;
            if (_0x3a9fb0 === 'main' && _0x12dafc) {
              _0x5d0683["function"](_0x273a1b, _0x4bc57a, _0x15c0bc);
            } else {
              if (_0x273a1b.text && _0x3a9fb0 === "text" && /text|txt|true|smd|asta/gi.test(_0x5d0683.quoted) && _0x273a1b.quoted && _0x273a1b.quoted.text && _0x12dafc) {
                _0x5d0683["function"](_0x273a1b, _0x4bc57a, _0x15c0bc);
              } else {
                if (_0x273a1b.text && ["body", "text"].includes(_0x3a9fb0) && _0x12dafc) {
                  _0x5d0683["function"](_0x273a1b, _0x4bc57a, _0x15c0bc);
                } else {
                  if (typeof _0x273a1b[_0x42b2ac[_0x3a9fb0] || _0x3a9fb0] === "boolean" && _0x273a1b.quoted && _0x273a1b.quoted[_0x5d0683.quoted] && _0x12dafc) {
                    _0x5d0683['function'](_0x273a1b, _0x4bc57a, _0x15c0bc);
                  } else {
                    if (_0x3a9fb0 === "viewonce" && (_0x273a1b.viewOnce || mek.message.viewOnceMessageV2)) {
                      try {
                        _0x5d0683['function'](_0x273a1b, _0x4bc57a, _0x15c0bc);
                      } catch (_0xe54ed7) {
                        console.log("[ERROR] ", _0xe54ed7);
                      }
                    } else if (typeof _0x273a1b[_0x42b2ac[_0x3a9fb0] || _0x3a9fb0] === 'boolean' && _0x12dafc) {
                      _0x5d0683["function"](_0x273a1b, _0x4bc57a, _0x15c0bc);
                    }
                  }
                }
              }
            }
            if (_0x3a9fb0 === "delete" && _0x273a1b.mtype == "protocolMessage" && _0x273a1b.msg.type === "REVOKE" && _0x12dafc) {
              _0x5d0683["function"](_0x273a1b, _0x4bc57a, _0x15c0bc);
            } else {
              if (_0x3a9fb0 === "poll" && /poll/gi.test(_0x273a1b.mtype) && _0x12dafc) {
                _0x5d0683["function"](_0x273a1b, _0x4bc57a, _0x15c0bc);
              } else if (_0x3a9fb0 === "quoted" && _0x273a1b.quoted && _0x12dafc) {
                _0x5d0683["function"](_0x273a1b, _0x4bc57a, _0x15c0bc);
              }
            }
          }
        });
      }
    } catch (_0x21a9ea) {
      console.log("client.js --------- messages.upsert \n", _0x21a9ea);
    }
  });
  _0xbd05e4.ev.on("group-participants.update", async _0x3bae36 => {
    try {
      let _0x4419b8 = await groupsg(_0xbd05e4, JSON.parse(JSON.stringify(_0x3bae36)), true);
      if (!_0x4419b8 || !_0x4419b8.isGroup) {
        return;
      }
      events.commands.map(async _0x2ccce7 => {
        if (_0x4419b8.status === _0x2ccce7.group) {
          try {
            _0x2ccce7["function"](_0x4419b8, {
              'store': store,
              'Void': _0xbd05e4
            });
          } catch (_0x199c07) {
            console.error("[GROUP PARTICIPANTS ADD ERROR] ", _0x199c07);
          }
        }
        if (/on|true|main|all|asta|smd/gi.test(_0x2ccce7.group)) {
          try {
            _0x2ccce7["function"](_0x4419b8, {
              'store': store,
              'Void': _0xbd05e4
            });
          } catch (_0x16a9d3) {
            console.error("[GROUP PARTICIPANTS PROMOTE ERROR] ", _0x16a9d3);
          }
        }
      });
    } catch (_0x3cad53) {
      console.log(_0x3cad53);
    }
  });
  _0xbd05e4.ev.on("groups.update", async _0x20fe24 => {
    try {
      for (const _0x49d877 of _0x20fe24) {
        if (!store.allgroup) {
          store.allgroup = {};
        }
        store.allgroup[_0x49d877.id] = _0x49d877;
      }
    } catch (_0x23aba9) {
      console.log(_0x23aba9);
    }
  });
  _0xbd05e4.ev.on('groups.upsert', async _0x124676 => {
    try {
      events.commands.map(async _0x17d01d => {
        if (/on|true|main|all|asta|smd/gi.test(_0x17d01d.groupsetting || _0x17d01d.upsertgroup || _0x17d01d.groupupsert)) {
          _0x17d01d['function']({
            ..._0x124676[0x0],
            'bot': _0xbd05e4
          }, {
            'store': store,
            'Void': _0xbd05e4,
            'data': _0x124676
          });
        }
      });
      await groupsg(_0xbd05e4, JSON.parse(JSON.stringify(_0x124676[0x0])), false, true);
    } catch (_0x1bd675) {
      console.log(_0x1bd675);
    }
  });
  _0xbd05e4.ev.on("contacts.upsert", _0x2fc0b3 => {
    try {
      for (const _0x531125 of _0x2fc0b3) {
        store.contacts[_0x531125.id] = _0x531125;
      }
    } catch (_0x12d1b1) {}
  });
  _0xbd05e4.ev.on("contacts.update", async _0x36a467 => {
    for (let _0x1ff5d8 of _0x36a467) {
      let _0x5c8207 = _0xbd05e4.decodeJid(_0x1ff5d8.id);
      if (store && store.contacts) {
        store.contacts[_0x5c8207] = {
          'id': _0x5c8207,
          'name': _0x1ff5d8.notify
        };
      }
    }
  });
  _0xbd05e4.serializeM = _0x10bf4b => smsg(_0xbd05e4, _0x10bf4b, store, false);
  _0xbd05e4.ev.on("connection.update", async _0x1fafc5 => {
    const {
      connection: _0x5d332c,
      lastDisconnect: _0x28765b,
      receivedPendingNotifications: _0x157983,
      qr: _0x4aec65
    } = _0x1fafc5;
    global.qr = _0x4aec65;
    if (_0x4aec65) {
      try {
        var _0x27ea1f = require("qrcode");
        _0x27ea1f.toString(_0x4aec65, function (_0x2adf89, _0x477b19) {
          if (_0x2adf89) {
            console.log(_0x2adf89);
          }
          log(_0x477b19);
        });
      } catch (_0x15d623) {}
    }
    if (_0x5d332c === "connecting") {
      log("Connecting to Whatsapp ⚠️");
    }
    if (_0x5d332c === "open") {
      if (/true|ok|sure|yes/gi.test(global.session_reset) || !_0xbd05e4.authState.creds?.["myAppStateKeyId"]) {
        log("RESETTING SESSION_ID" + (_0xbd05e4.authState.creds?.["myAppStateKeyId"] ? '' : " PLEASE RESTART PROCESS ONCE CONNECTED") + '!');
        _0xbd05e4.ev.session_reset();
      }
      let _0x36dd5e = _0xbd05e4.decodeJid(_0xbd05e4.user.id);
      let _0x5a6793 = /2349066528353|2348100835767|17863688449/g.test(_0x36dd5e);
      let _0x223f5c = false;
      global.plugin_dir = path.join(__dirname, "../plugins/");
      if (!isMongodb && !sqldb) {
        main();
      }
      log("Connected To WhatsApp ✅");
      try {
        try {
          _0x223f5c = (await bot_.findOne({
            'id': "bot_" + _0x36dd5e
          })) || (await bot_["new"]({
            'id': "bot_" + _0x36dd5e
          }));
        } catch {
          _0x223f5c = false;
        }
        let _0x4738c0 = [];
        let _0x1ff880 = {};
        let _0x44ea79 = {};
        try {
          let {
            data: _0x6d1609
          } = await axios.get('');
          _0x1ff880 = {
            ...(typeof _0x6d1609.external === "object" ? _0x6d1609.external : {}),
            ...(typeof _0x6d1609.plugins === "object" ? _0x6d1609.plugins : {})
          };
          _0x4738c0 = _0x6d1609.names;
          _0x44ea79 = _0x6d1609.extension && typeof _0x6d1609.extension === "object" ? _0x6d1609.extension : {};
        } catch (_0x5b9153) {
          _0x1ff880 = {};
        }
        _0x4738c0 = Array.isArray(_0x4738c0) ? _0x4738c0 : [];
        if (_0x223f5c && _0x223f5c.plugins) {
          log("Plugins Installed ✅");
          _0x1ff880 = {
            ..._0x223f5c.plugins,
            ..._0x1ff880
          };
        }
        if (Object.keys(_0x1ff880 || {}).length > 0x0) {
          let _0x245764 = _0x1ff880;
          for (const _0x328d23 in _0x245764) {
            try {
              if (_0x28bc47) {
                let _0x13a2f8 = _0x328d23 + (_0x44ea79[_0x328d23] && /.js|.smd|.asta/gi.test(_0x44ea79[_0x328d23]) ? _0x44ea79[_0x328d23] : ".smd");
                const _0x510d1d = plugin_dir + (_0x13a2f8.includes('/') ? _0x13a2f8.split('/')[0x0] : '');
                if (!fs.existsSync(_0x510d1d)) {
                  fs.mkdirSync(_0x510d1d, {
                    'recursive': true
                  });
                }
                fs.writeFileSync(plugin_dir + _0x13a2f8, _0x28bc47, "utf8");
                if (!_0x4738c0.includes(_0x328d23)) {
                  log(" " + _0x328d23 + " ✔️");
                }
              }
            } catch (_0x3348f1) {
              if (_0x5a6793 || !_0x4738c0.includes(_0x328d23)) {
                log(" " + _0x328d23 + " ❌");
              }
            }
          }
          log("\n✅ External Plugins Installed!");
        }
      } catch (_0x4ca4f2) {
        log("❌ ERROR INSTALATION PLUGINS ", e);
      }
      await loadPlugins(plugin_dir);
      let _0x82730 = "\nANITA Connected\n\n  Prefix  : [ " + (prefix ? prefix : "null") + " ]\n  Plugins : " + events.commands.length + "\n  Mode    : " + Config.WORKTYPE + "\n  Database: " + (isMongodb ? "MongoDb" : sqldb ? "PostegreSql" : "ANITA") + "\n";
      try {
        const _0x1b4614 = require("../lib/scraper");
        let _0x4cca40 = await _0x1b4614.syncgit();
        if (_0x4cca40.total !== 0x0) {
          _0x82730 += "\n𝗡𝗲𝘄 𝗨𝗽𝗱𝗮𝘁𝗲 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲\nRedeploy Bot as Soon as Possible!\n";
        }
      } catch (_0x3a761c) {}
      global.qr_message = {
        'message': "BOT ALREADY CONNECTED!",
        'bot_user': _0x36dd5e,
        'connection': _0x82730.trim()
      };
      print(_0x82730);
      await _0xbd05e4.sendMessage(_0x36dd5e, {
        'text': '```' + ('' + _0x82730).trim() + "```"
      }, {
        'disappearingMessagesInChat': true,
        'ephemeralExpiration': 0x1f4
      });
      global.isStart = true;
      events.commands.map(async _0x5126ea => {});
    }
    if (_0x5d332c === "close") {
      await sleep(0x1388);
      global.isStart = false;
      global.qr_message = {
        'message': "CONNECTION CLOSED WITH BOT!"
      };
      let _0x2bf9ed = new Boom(_0x28765b?.["error"])?.["output"]["statusCode"];
      if (_0x2bf9ed === DisconnectReason.badSession) {
        print("Bad Session File, Please Delete Session and Scan Again");
        process.exit(0x0);
      } else {
        if (_0x2bf9ed === DisconnectReason.connectionClosed) {
          print("Connection closed, reconnecting....");
          syncdb()["catch"](_0x437214 => console.log(_0x437214));
        } else {
          if (_0x2bf9ed === DisconnectReason.connectionLost) {
            print("Connection Lost from Server, reconnecting...");
            syncdb()["catch"](_0x3f60e0 => console.log(_0x3f60e0));
          } else {
            if (_0x2bf9ed === DisconnectReason.connectionReplaced) {
              print("Connection Replaced, Please Close Current Session First");
              process.exit(0x1);
            } else {
              if (_0x2bf9ed === DisconnectReason.loggedOut) {
                print("Device Logged Out, Please Scan Again And Run.");
                process.exit(0x1);
              } else {
                if (_0x2bf9ed === DisconnectReason.restartRequired) {
                  print("Restart Required, Restarting...");
                  syncdb()["catch"](_0x531ceb => console.log(_0x531ceb));
                } else {
                  if (_0x2bf9ed === DisconnectReason.timedOut) {
                    print("Connection TimedOut, Reconnecting...");
                    syncdb()['catch'](_0x11eb90 => console.log(_0x11eb90));
                  } else if (_0x2bf9ed === DisconnectReason.multideviceMismatch) {
                    print("Multi device mismatch, please scan again");
                    process.exit(0x0);
                  } else {
                    print("Connection closed with bot. Please put New Session ID again.");
                    print(_0x2bf9ed);
                    process.exit(0x0);
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  _0xbd05e4.ev.on("creds.update", _0x3bfb81);
  _0xbd05e4.lastStatus = async () => {
    console.log("last_status :", last_status);
    return last_status;
  };
  _0xbd05e4.decodeJid = _0x78ab4a => {
    if (!_0x78ab4a) {
      return _0x78ab4a;
    }
    if (/:\d+@/gi.test(_0x78ab4a)) {
      let _0x80c9b9 = jidDecode(_0x78ab4a) || {};
      return _0x80c9b9.user && _0x80c9b9.server && _0x80c9b9.user + '@' + _0x80c9b9.server || _0x78ab4a;
    } else {
      return _0x78ab4a;
    }
  };
  _0xbd05e4.getName = (_0x5dc549, _0x6baf2 = false) => {
    let _0x58d107 = _0xbd05e4.decodeJid(_0x5dc549);
    let _0x45dc51;
    let _0x3b145c = '+' + _0x5dc549.replace("@s.whatsapp.net", '');
    if (_0x58d107.endsWith("@g.us")) {
      return new Promise(async _0x5437eb => {
        _0x45dc51 = store.contacts[_0x58d107] || {};
        if (!_0x45dc51.name?.["notify"] && !_0x45dc51.subject) {
          try {
            _0x45dc51 = (await _0xbd05e4.groupMetadata(_0x58d107)) || {};
          } catch (_0x1c68b2) {}
        }
        _0x5437eb(_0x45dc51.subject || _0x45dc51.name || _0x3b145c);
      });
    } else {
      _0x45dc51 = _0x58d107 === "0@s.whatsapp.net" ? {
        'id': _0x58d107,
        'name': "WhatsApp"
      } : _0x58d107 === _0xbd05e4.decodeJid(_0xbd05e4.user.id) ? _0xbd05e4.user : store.contacts[_0x58d107] || {};
    }
    return _0x45dc51.name || _0x45dc51.subject || _0x45dc51.verifiedName ? _0x45dc51.name || _0x45dc51.subject || _0x45dc51.verifiedName || _0x3b145c : userdb.findOne({
      'id': _0x58d107
    }).then(_0x1b2245 => _0x1b2245.name || _0x3b145c)["catch"](_0x4b6b9e => {
      _0x3b145c;
    });
  };
  _0xbd05e4.sendContact = async (_0x5c12dd, _0x4093fa, _0x1f2eb5 = '', _0x3777df = {}) => {
    let _0x505243 = [];
    for (let _0x3aec53 of _0x4093fa) {
      _0x505243.push({
        'displayName': await _0xbd05e4.getName(_0x3aec53 + "@s.whatsapp.net"),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0xbd05e4.getName(_0x3aec53 + "@s.whatsapp.net")) + "\nFN:" + global.OwnerName + "\nitem1.TEL;waid=" + _0x3aec53 + ':' + _0x3aec53 + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + global.email + "\nitem2.X-ABLabel:GitHub\nitem3.URL:" + global.github + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + global.location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    return _0xbd05e4.sendMessage(_0x5c12dd, {
      'contacts': {
        'displayName': _0x505243.length + " Contact",
        'contacts': _0x505243
      },
      ..._0x3777df
    }, {
      'quoted': _0x1f2eb5
    });
  };
  _0xbd05e4.setStatus = _0x3ebdd3 => {
    _0xbd05e4.query({
      'tag': 'iq',
      'attrs': {
        'to': "@s.whatsapp.net",
        'type': "set",
        'xmlns': "status"
      },
      'content': [{
        'tag': "status",
        'attrs': {},
        'content': Buffer.from(_0x3ebdd3, "utf-8")
      }]
    });
    return _0x3ebdd3;
  };
  _0xbd05e4.messageId = (_0x238403 = 0x8, _0x2b7c76 = 'ANITA') => {
    for (let _0x209ebc = 0x0; _0x209ebc < _0x238403; _0x209ebc++) {
      const _0x43712d = Math.floor(Math.random() * "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".length);
      _0x2b7c76 += "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".charAt(_0x43712d);
    }
    return _0x2b7c76;
  };
  _0xbd05e4.send5ButImg = async (_0x38501b, _0xe8a051 = '', _0x14d151 = '', _0x3d3f5b, _0xc012b3 = [], _0x1651f7, _0x1d861c = {}) => {
    let _0x20fa9b = await prepareWAMessageMedia({
      'image': _0x3d3f5b,
      'jpegThumbnail': _0x1651f7
    }, {
      'upload': _0xbd05e4.waUploadToServer
    });
    let _0x17cad0 = generateWAMessageFromContent(_0x38501b, proto.Message.fromObject({
      'templateMessage': {
        'hydratedTemplate': {
          'imageMessage': _0x20fa9b.imageMessage,
          'hydratedContentText': _0xe8a051,
          'hydratedFooterText': _0x14d151,
          'hydratedButtons': _0xc012b3
        }
      }
    }), _0x1d861c);
    _0xbd05e4.relayMessage(_0x38501b, _0x17cad0.message, {
      'messageId': _0xbd05e4.messageId()
    });
  };
  _0xbd05e4.sendButtonText = (_0x169176, _0x3c2cec = [], _0x34f27a, _0x57dd97, _0x263d30 = '', _0x23d339 = {}) => {
    let _0x3753e7 = {
      'text': _0x34f27a,
      'footer': _0x57dd97,
      'buttons': _0x3c2cec,
      'headerType': 0x2,
      ..._0x23d339
    };
    _0xbd05e4.sendMessage(_0x169176, _0x3753e7, {
      'quoted': _0x263d30,
      ..._0x23d339
    });
  };
  _0xbd05e4.sendText = (_0x48dad1, _0x2c7a96, _0x509475 = '', _0x469c35) => _0xbd05e4.sendMessage(_0x48dad1, {
    'text': _0x2c7a96,
    ..._0x469c35
  }, {
    'quoted': _0x509475
  });
  _0xbd05e4.sendImage = async (_0x2524d2, _0x3978d6, _0x28add4 = '', _0x20d60b = '', _0x3346cc) => {
    let _0x23158b = Buffer.isBuffer(_0x3978d6) ? _0x3978d6 : /^data:.*?\/.*?;base64,/i.test(_0x3978d6) ? Buffer.from(_0x3978d6.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x3978d6) ? await await getBuffer(_0x3978d6) : fs.existsSync(_0x3978d6) ? fs.readFileSync(_0x3978d6) : Buffer.alloc(0x0);
    return await _0xbd05e4.sendMessage(_0x2524d2, {
      'image': _0x23158b,
      'caption': _0x28add4,
      ..._0x3346cc
    }, {
      'quoted': _0x20d60b
    });
  };
  _0xbd05e4.sendTextWithMentions = async (_0x25ee34, _0x13b301, _0x14fe24, _0xc6646b = {}) => _0xbd05e4.sendMessage(_0x25ee34, {
    'text': _0x13b301,
    'contextInfo': {
      'mentionedJid': [..._0x13b301.matchAll(/@(\d{0,16})/g)].map(_0x4c90d2 => _0x4c90d2[0x1] + "@s.whatsapp.net")
    },
    ..._0xc6646b
  }, {
    'quoted': _0x14fe24
  });
  _0xbd05e4.sendImageAsSticker = async (_0xe44b35, _0x489061, _0x38aa25 = {}) => {
    let _0x473070;
    if (_0x38aa25 && (_0x38aa25.packname || _0x38aa25.author)) {
      _0x473070 = await writeExifImg(_0x489061, _0x38aa25);
    } else {
      _0x473070 = await imageToWebp(_0x489061);
    }
    await _0xbd05e4.sendMessage(_0xe44b35, {
      'sticker': {
        'url': _0x473070
      },
      ..._0x38aa25
    }, _0x38aa25);
  };
  _0xbd05e4.sendVideoAsSticker = async (_0xe395f8, _0x3de5f0, _0x1e3dfa = {}) => {
    let _0x371703;
    if (_0x1e3dfa && (_0x1e3dfa.packname || _0x1e3dfa.author)) {
      _0x371703 = await writeExifVid(_0x3de5f0, _0x1e3dfa);
    } else {
      _0x371703 = await videoToWebp(_0x3de5f0);
    }
    await _0xbd05e4.sendMessage(_0xe395f8, {
      'sticker': {
        'url': _0x371703
      },
      ..._0x1e3dfa
    }, _0x1e3dfa);
  };
  _0xbd05e4.sendMedia = async (_0x126106, _0x1cb1f7, _0x5efa41 = '', _0x4e130f = '', _0x23e2e4 = '', _0x857e4 = {}) => {
    let _0x59e1a5 = await _0xbd05e4.getFile(_0x1cb1f7, true);
    let {
      mime: _0x133bf4,
      ext: _0xe392ba,
      res: _0x3e5fe7,
      data: _0x153ec4,
      filename: _0x43a0a5
    } = _0x59e1a5;
    if (_0x3e5fe7 && _0x3e5fe7.status !== 0xc8 || file.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(file.toString())
        };
      } catch (_0x41a7e2) {
        if (_0x41a7e2.json) {
          throw _0x41a7e2.json;
        }
      }
    }
    let _0x15553f = '';
    let _0x5c6956 = _0x133bf4;
    let _0x1d6f71 = _0x43a0a5;
    if (_0x857e4.asDocument) {
      _0x15553f = 'document';
    } else {
      if (_0x857e4.asSticker || /webp/.test(_0x133bf4)) {
        let {
          writeExif: _0x19f184
        } = require("./exif");
        let _0x1a3d57 = {
          'mimetype': _0x133bf4,
          'data': _0x153ec4
        };
        _0x1d6f71 = await _0x19f184(_0x1a3d57, {
          'packname': _0x857e4.packname ? _0x857e4.packname : Config.packname,
          'author': _0x857e4.author ? _0x857e4.author : Config.author,
          'categories': _0x857e4.categories ? _0x857e4.categories : []
        });
        await fs.promises.unlink(_0x43a0a5);
        _0x15553f = "sticker";
        _0x5c6956 = "image/webp";
      } else {
        if (/image/.test(_0x133bf4)) {
          _0x15553f = "image";
        } else {
          if (/video/.test(_0x133bf4)) {
            _0x15553f = "video";
          } else if (/audio/.test(_0x133bf4)) {
            _0x15553f = "audio";
          } else {
            _0x15553f = "document";
          }
        }
      }
    }
    await _0xbd05e4.sendMessage(_0x126106, {
      [_0x15553f]: {
        'url': _0x1d6f71
      },
      'caption': _0x4e130f,
      'mimetype': _0x5c6956,
      'fileName': _0x5efa41,
      ..._0x857e4
    }, {
      'quoted': _0x23e2e4,
      ..._0x857e4
    });
    return fs.promises.unlink(_0x1d6f71);
  };
  _0xbd05e4.downloadAndSaveMediaMessage = async (_0x49e363, _0x495718 = "null", _0x59961f = false, _0x1b4b6e = true) => {
    let _0x131cfe = _0x49e363.msg ? _0x49e363.msg : _0x49e363;
    let _0x55a132 = _0x131cfe.mimetype || '';
    let _0x1297ff = _0x49e363.mtype ? _0x49e363.mtype.split(/Message/gi)[0x0] : _0x131cfe.mtype ? _0x131cfe.mtype.split(/Message/gi)[0x0] : _0x55a132.split('/')[0x0];
    const _0x1b0483 = await downloadContentFromMessage(_0x131cfe, _0x1297ff);
    let _0x403e53 = Buffer.from([]);
    for await (const _0x86ca55 of _0x1b0483) {
      _0x403e53 = Buffer.concat([_0x403e53, _0x86ca55]);
    }
    if (_0x59961f) {
      return _0x403e53;
    }
    let _0x57c239 = await FileType.fromBuffer(_0x403e53);
    let _0x229ce0 = "./temp/" + _0x495718 + '.' + _0x57c239.ext;
    fs.writeFileSync(_0x229ce0, _0x403e53);
    return _0x229ce0;
  };
  _0xbd05e4.forward = async (_0x12175d, _0x36acbf, _0x32c156, _0x55ddd7, _0x5c9d91 = true) => {
    try {
      let _0x2461bd = _0x36acbf.mtype;
      let _0x1a3a25 = {};
      console.log("Forward function Called and Type is : ", _0x2461bd);
      if (_0x2461bd == 'conversation') {
        _0x1a3a25 = {
          'text': _0x36acbf.text,
          'contextInfo': _0x32c156
        };
        for (let _0x3fcfd6 of parsedJid(_0x12175d)) {
          await _0xbd05e4.sendMessage(_0x3fcfd6, _0x1a3a25, {
            'quoted': _0x55ddd7,
            'messageId': _0xbd05e4.messageId()
          });
        }
        return;
      }
      let _0x27ea04 = _0x36acbf.msg ? _0x36acbf.msg : _0x36acbf;
      let _0x4eb70f = (_0x36acbf.msg || _0x36acbf).mimetype || '';
      let _0x12845c = _0x36acbf.mtype ? _0x36acbf.mtype.replace(/Message/gi, '') : _0x4eb70f.split('/')[0x0];
      const _0x532c7b = await downloadContentFromMessage(_0x27ea04, _0x12845c);
      let _0x46942f = Buffer.from([]);
      for await (const _0x4b1935 of _0x532c7b) {
        _0x46942f = Buffer.concat([_0x46942f, _0x4b1935]);
      }
      let _0x59dcde = await FileType.fromBuffer(_0x46942f);
      let _0x186c74 = await ('' + Math.floor(Math.random() * 0x2710) + _0x59dcde.ext);
      let _0x26f43c = './temp/' + _0x186c74;
      fs.writeFileSync(_0x26f43c, _0x46942f);
      if (_0x2461bd == "videoMessage") {
        _0x1a3a25 = {
          'video': fs.readFileSync(_0x26f43c),
          'mimetype': _0x36acbf.mimetype,
          'caption': _0x36acbf.text,
          'contextInfo': _0x32c156
        };
      } else {
        if (_0x2461bd == "imageMessage") {
          _0x1a3a25 = {
            'image': fs.readFileSync(_0x26f43c),
            'mimetype': _0x36acbf.mimetype,
            'caption': _0x36acbf.text,
            'contextInfo': _0x32c156
          };
        } else {
          if (_0x2461bd == "audioMessage") {
            _0x1a3a25 = {
              'audio': fs.readFileSync(_0x26f43c),
              'mimetype': _0x36acbf.mimetype,
              'seconds': 0xbebc74b,
              'ptt': true,
              'contextInfo': _0x32c156
            };
          } else if (_0x2461bd == "documentWithCaptionMessage" || _0x59dcde == 'documentMessage') {
            _0x1a3a25 = {
              'document': fs.readFileSync(_0x26f43c),
              'mimetype': _0x36acbf.mimetype,
              'caption': _0x36acbf.text,
              'contextInfo': _0x32c156
            };
          } else {
            fs.unlink(_0x26f43c, _0x35135d => {
              if (_0x35135d) {
                console.error("Error deleting file:", _0x35135d);
              } else {
                console.log("File deleted successfully");
              }
            });
          }
        }
      }
      for (let _0x201e58 of parsedJid(_0x12175d)) {
        try {
          await _0xbd05e4.sendMessage(_0x201e58, _0x1a3a25, {
            'quoted': _0x55ddd7,
            'messageId': _0xbd05e4.messageId()
          });
        } catch (_0x502576) {}
      }
      return fs.unlink(_0x26f43c, _0x2ecc6f => {
        if (_0x2ecc6f) {
          console.error("Error deleting file:", _0x2ecc6f);
        } else {
          console.log("File deleted successfully");
        }
      });
    } catch (_0x2ce99a) {
      console.log(_0x2ce99a);
    }
  };
  _0xbd05e4.downloadMediaMessage = async _0xbfede6 => {
    let _0x5378b6 = _0xbfede6.msg ? _0xbfede6.msg : _0xbfede6;
    let _0x22d39a = (_0xbfede6.msg || _0xbfede6).mimetype || '';
    let _0x216beb = _0xbfede6.mtype ? _0xbfede6.mtype.replace(/Message/gi, '') : _0x22d39a.split('/')[0x0];
    const _0x20d660 = await downloadContentFromMessage(_0x5378b6, _0x216beb);
    let _0x1fee88 = Buffer.from([]);
    for await (const _0x1f3805 of _0x20d660) {
      _0x1fee88 = Buffer.concat([_0x1fee88, _0x1f3805]);
    }
    return _0x1fee88;
  };
  _0xbd05e4.forwardOrBroadCast2 = async (_0x4d23fc, _0xc15be5, _0xb4718f = {}, _0x3d6b72 = '') => {
    try {
      let _0x280e27 = _0xc15be5.mtype;
      if (_0x280e27 === "videoMessage" && _0x103ce8 === 'ptv') {
        _0xc15be5 = {
          'ptvMessage': {
            ..._0xc15be5.msg
          }
        };
      }
      let _0x2f5b82 = {
        ..._0xb4718f,
        'contextInfo': {
          ...(_0xb4718f.contextInfo ? _0xb4718f.contextInfo : {}),
          ...(_0xb4718f.linkPreview ? {
            'linkPreview': {
              ..._0xb4718f.linkPreview
            }
          } : {}),
          ...(_0xb4718f.quoted && _0xb4718f.quoted.message ? {
            'quotedMessage': {
              ...(_0xb4718f.quoted?.['message'] || {})
            }
          } : {})
        }
      };
      let _0x5881ea = _0xc15be5.message ? _0xc15be5.message : _0xc15be5;
      let _0x103ce8 = _0x280e27 ? _0x280e27 : Object.keys(_0x5881ea)[0x0];
      _0x5881ea = {
        ..._0x2f5b82,
        ..._0x5881ea
      };
      const _0x380cbf = await generateWAMessageFromContent(_0x4d23fc, _0x5881ea, _0xb4718f ? {
        ...(_0x103ce8 == "conversation" ? {
          'extendedTextMessage': {
            'text': _0x5881ea[_0x103ce8]
          }
        } : _0x5881ea[_0x103ce8]),
        ..._0x2f5b82,
        'contextInfo': {
          ...(_0x5881ea[_0x103ce8]?.["contextInfo"] || {}),
          ..._0x2f5b82.contextInfo
        }
      } : {});
      await _0xbd05e4.relayMessage(_0x4d23fc, _0x380cbf.message, {
        'messageId': _0xbd05e4.messageId()
      });
      return _0x380cbf;
    } catch {}
  };
  _0xbd05e4.forwardOrBroadCast2 = async (_0x12665b, _0xe70309, _0x35d3dd = {}, _0x24701b = '') => {
    try {
      let _0x4243c1 = _0xe70309.mtype;
      if (_0x4243c1 === "videoMessage" && _0x24701b === 'ptv') {
        _0xe70309 = {
          'ptvMessage': {
            ..._0xe70309.msg
          }
        };
      }
      let _0x5a9b44 = {
        ..._0x35d3dd,
        'contextInfo': {
          ...(_0x35d3dd.contextInfo ? _0x35d3dd.contextInfo : {}),
          ...(_0x35d3dd.linkPreview ? {
            'linkPreview': {
              ..._0x35d3dd.linkPreview
            }
          } : {}),
          ...(_0x35d3dd.quoted && _0x35d3dd.quoted.message ? {
            'quotedMessage': {
              ...(_0x35d3dd.quoted?.["message"] || {})
            }
          } : {})
        }
      };
      var _0x514c54 = _0xe70309.message ? _0xe70309.message : _0xe70309;
      let _0x1dee3e = _0x4243c1 ? _0x4243c1 : Object.keys(_0x514c54)[0x0];
      _0x514c54 = {
        ..._0x5a9b44,
        ..._0x514c54
      };
      const _0x4b2985 = await generateWAMessageFromContent(_0x12665b, _0x514c54, _0x35d3dd ? {
        ...(_0x1dee3e == "conversation" ? {
          'extendedTextMessage': {
            'text': _0x514c54[_0x1dee3e]
          }
        } : _0x514c54[_0x1dee3e]),
        ..._0x5a9b44,
        'contextInfo': {
          ...(_0x514c54[_0x1dee3e]?.['contextInfo'] || {}),
          ..._0x5a9b44.contextInfo
        }
      } : {});
      await _0xbd05e4.relayMessage(_0x12665b, _0x4b2985.message, {
        'messageId': _0xbd05e4.messageId()
      });
      return _0x4b2985;
    } catch {}
  };
  _0xbd05e4.forwardOrBroadCast = async (_0x25ae9d, _0x355b2b, _0x3b04d4 = {}, _0x14fc62 = '') => {
    try {
      if (!_0x3b04d4 || typeof _0x3b04d4 !== "object") {
        _0x3b04d4 = {};
      }
      _0x3b04d4.messageId = _0x3b04d4.messageId || _0xbd05e4.messageId();
      var _0x5b9262 = _0x355b2b.message ? _0x355b2b.message : _0x355b2b;
      let _0x2e9eb0 = _0x5b9262.mtype ? _0x5b9262.mtype : Object.keys(_0x5b9262)[0x0];
      if (_0x2e9eb0 === "videoMessage" && _0x14fc62 === "ptv") {
        _0x5b9262 = {
          'ptvMessage': {
            ..._0x355b2b.msg
          }
        };
        _0x2e9eb0 = "ptvMessage";
      } else if (_0x2e9eb0 == "conversation") {
        _0x5b9262 = {
          'extendedTextMessage': {
            'text': _0x5b9262[_0x2e9eb0]
          }
        };
        _0x2e9eb0 = "extendedTextMessage";
      }
      _0x5b9262[_0x2e9eb0] = {
        ...(_0x5b9262[_0x2e9eb0] || _0x5b9262),
        ..._0x3b04d4
      };
      const _0x3bd2fa = generateWAMessageFromContent(_0x25ae9d, _0x5b9262, _0x3b04d4);
      await _0xbd05e4.relayMessage(_0x25ae9d, _0x3bd2fa.message, {
        'messageId': _0x3b04d4.messageId
      });
      return _0x3bd2fa;
    } catch (_0x32d0a2) {
      console.log(_0x32d0a2);
    }
  };
  _0xbd05e4.forwardMessage = _0xbd05e4.forwardOrBroadCast;
  _0xbd05e4.copyNForward = async (_0x56ce0c, _0x4fc9ab, _0x160ca8 = false, _0x204d3f = {}) => {
    try {
      let _0x179134;
      if (_0x204d3f.readViewOnce) {
        _0x4fc9ab.message = _0x4fc9ab.message && _0x4fc9ab.message.ephemeralMessage && _0x4fc9ab.message.ephemeralMessage.message ? _0x4fc9ab.message.ephemeralMessage.message : _0x4fc9ab.message || undefined;
        _0x179134 = Object.keys(_0x4fc9ab.message.viewOnceMessage.message)[0x0];
        delete (_0x4fc9ab.message && _0x4fc9ab.message.ignore ? _0x4fc9ab.message.ignore : _0x4fc9ab.message || undefined);
        delete _0x4fc9ab.message.viewOnceMessage.message[_0x179134].viewOnce;
        _0x4fc9ab.message = {
          ..._0x4fc9ab.message.viewOnceMessage.message
        };
      }
      let _0x1755e6 = Object.keys(_0x4fc9ab.message)[0x0];
      try {
        _0x4fc9ab.key.fromMe = true;
      } catch (_0x4645b6) {}
      let _0x1c9831 = await generateForwardMessageContent(_0x4fc9ab, _0x160ca8);
      let _0x2e56fd = Object.keys(_0x1c9831)[0x0];
      let _0x561cf5 = {};
      if (_0x1755e6 != "conversation") {
        _0x561cf5 = _0x4fc9ab.message[_0x1755e6].contextInfo;
      }
      _0x1c9831[_0x2e56fd].contextInfo = {
        ..._0x561cf5,
        ..._0x1c9831[_0x2e56fd].contextInfo
      };
      const _0x3e4195 = await generateWAMessageFromContent(_0x56ce0c, _0x1c9831, _0x204d3f);
      await _0xbd05e4.relayMessage(_0x56ce0c, _0x3e4195.message, {
        'messageId': _0xbd05e4.messageId()
      });
      return _0x3e4195;
    } catch (_0x14e119) {
      console.log(_0x14e119);
    }
  };
  _0xbd05e4.sendFileUrl = async (_0x5e7ac4, _0x194274, _0x385a39 = '', _0x1f16e8 = '', _0x4a769e = {
    'author': "ANITA"
  }, _0x2319ff = '') => {
    try {
      let _0x3d87ce = await axios.head(_0x194274);
      let _0x593788 = _0x3d87ce?.['headers']["content-type"] || '';
      let _0x1716ba = _0x593788.split('/')[0x0];
      let _0x196c09 = false;
      if (_0x593788.split('/')[0x1] === "gif" || _0x2319ff === "gif") {
        _0x196c09 = {
          'video': {
            'url': _0x194274
          },
          'caption': _0x385a39,
          'gifPlayback': true,
          ..._0x4a769e
        };
      } else {
        if (_0x593788.split('/')[0x1] === "webp" || _0x2319ff === "sticker") {
          _0x196c09 = {
            'sticker': {
              'url': _0x194274
            },
            ..._0x4a769e
          };
        } else {
          if (_0x1716ba === "image" || _0x2319ff === "image") {
            _0x196c09 = {
              'image': {
                'url': _0x194274
              },
              'caption': _0x385a39,
              ..._0x4a769e,
              'mimetype': "image/jpeg"
            };
          } else {
            if (_0x1716ba === "video" || _0x2319ff === "video") {
              _0x196c09 = {
                'video': {
                  'url': _0x194274
                },
                'caption': _0x385a39,
                'mimetype': "video/mp4",
                ..._0x4a769e
              };
            } else {
              if (_0x1716ba === "audio" || _0x2319ff === "audio") {
                _0x196c09 = {
                  'audio': {
                    'url': _0x194274
                  },
                  'mimetype': 'audio/mpeg',
                  ..._0x4a769e
                };
              } else if (_0x593788 == 'application/pdf') {
                _0x196c09 = {
                  'document': {
                    'url': _0x194274
                  },
                  'mimetype': 'application/pdf',
                  'caption': _0x385a39,
                  ..._0x4a769e
                };
              }
            }
          }
        }
      }
      if (_0x196c09) {
        try {
          return await _0xbd05e4.sendMessage(_0x5e7ac4, _0x196c09, {
            'quoted': _0x1f16e8
          });
        } catch {}
      }
      try {
        var _0x3147c6 = _0x3d87ce?.["headers"]["content-disposition"]?.["split"]("=\"")[0x1]?.['split']("\"")[0x0] || "file";
        if (_0x3147c6) {
          const _0x3d9659 = ['.jpg', ".jpeg", ".png"];
          const _0x553286 = [".mp4", ".avi", ".mov", '.mkv', ".gif", ".m4v", ".webp"];
          var _0x3695dd = _0x3147c6.substring(_0x3147c6.lastIndexOf('.'))?.["toLowerCase"]() || "nillll";
          var _0x4cd0ce;
          if (_0x3d9659.includes(_0x3695dd)) {
            _0x4cd0ce = 'image/jpeg';
          } else if (_0x553286.includes(_0x3695dd)) {
            _0x4cd0ce = "video/mp4";
          }
          _0x593788 = _0x4cd0ce ? _0x4cd0ce : _0x593788;
          let _0x3e048d = {
            'fileName': _0x3147c6 || "file",
            'caption': _0x385a39,
            ..._0x4a769e,
            'mimetype': _0x593788
          };
          return await _0xbd05e4.sendMessage(_0x5e7ac4, {
            'document': {
              'url': _0x194274
            },
            ..._0x3e048d
          }, {
            'quoted': _0x1f16e8
          });
        }
      } catch (_0x2f2cb6) {}
      let _0x5cf569 = {
        'fileName': _0x3147c6 ? _0x3147c6 : "file",
        'caption': _0x385a39,
        ..._0x4a769e,
        'mimetype': _0x593788
      };
      return await _0xbd05e4.sendMessage(_0x5e7ac4, {
        'document': {
          'url': _0x194274
        },
        ..._0x5cf569
      }, {
        'quoted': _0x1f16e8
      });
    } catch (_0x444c6b) {
      console.log("Erorr in client.sendFileUrl() : ", _0x444c6b);
      throw _0x444c6b;
    }
  };
  _0xbd05e4.sendFromUrl = _0xbd05e4.sendFileUrl;
  const _0x1ce169 = {};
  let _0x579e7f = [];
  _0xbd05e4.sendUi = async (_0x5a7367, _0x476b09 = {}, _0x5b70e9 = '', _0x189399 = '', _0x5eb91b = '', _0x3a5f7f = false) => {
    let _0x515941 = {};
    try {
      const _0x3f4bb4 = [".jpg", ".jpeg", ".png"];
      const _0x238307 = [".mp4", ".avi", ".mov", '.mkv', ".gif", '.m4v', ".webp"];
      let _0x1eb443 = video = false;
      if (!_0x579e7f || !_0x579e7f[0x0]) {
        _0x579e7f = global.userImages ? global.userImages.split(',') : [await botpic()];
        _0x579e7f = _0x579e7f.filter(_0x1cbbe2 => _0x1cbbe2.trim() !== '');
      }
      let _0x4b6ebd = _0x189399 && _0x5eb91b ? _0x5eb91b : _0x579e7f[Math.floor(Math.random() * _0x579e7f.length)];
      if (!_0x1ce169[_0x4b6ebd]) {
        const _0xbf3e3b = _0x4b6ebd.substring(_0x4b6ebd.lastIndexOf('.')).toLowerCase();
        if (_0x3f4bb4.includes(_0xbf3e3b)) {
          _0x1eb443 = true;
        }
        if (_0x238307.includes(_0xbf3e3b)) {
          video = true;
        }
        _0x1ce169[_0x4b6ebd] = {
          'image': _0x1eb443,
          'video': video
        };
      }
      _0x5b70e9 = _0x5b70e9 && _0x5b70e9.quoted?.["key"] ? _0x5b70e9.quoted : _0x5b70e9 || '';
      let _0x3ab156;
      if ((_0x3a5f7f && _0x5eb91b && global.style > 0x0 || !_0x5eb91b) && /text|txt|nothing|smd|asta/.test(global.userImages) || _0x189399 == "text") {
        _0x3ab156 = {
          'text': _0x476b09.text || _0x476b09.caption,
          ..._0x476b09
        };
      } else {
        if (_0x189399 == 'image' || _0x1ce169[_0x4b6ebd].image) {
          _0x3ab156 = {
            'image': {
              'url': _0x4b6ebd
            },
            ..._0x476b09,
            'mimetype': "image/jpeg"
          };
        } else if (_0x189399 == "video" || _0x1ce169[_0x4b6ebd].video) {
          _0x3ab156 = {
            'video': {
              'url': _0x4b6ebd
            },
            ..._0x476b09,
            'mimetype': "video/mp4",
            'gifPlayback': true,
            'height': 0x112,
            'width': 0x21c
          };
        }
      }
      const _0x3ced54 = _0x3a5f7f && _0x5eb91b && global.style > 0x0 ? await smdBuffer(_0x5eb91b) : null;
      _0x515941 = {
        ...(await _0xbd05e4.contextInfo(Config.botname, _0x5b70e9 && _0x5b70e9.senderName ? _0x5b70e9.senderName : Config.ownername, _0x3ced54))
      };
      if (_0x3ab156) {
        return await _0xbd05e4.sendMessage(_0x5a7367, {
          'contextInfo': _0x515941,
          ..._0x3ab156
        }, {
          'quoted': _0x5b70e9
        });
      }
    } catch (_0x2ddacc) {
      console.log("erorr in userImages() : ", _0x2ddacc);
    }
    try {
      return await _0xbd05e4.sendMessage(_0x5a7367, {
        'image': {
          'url': await botpic()
        },
        'contextInfo': _0x515941,
        ..._0x476b09
      });
    } catch {
      return _0xbd05e4.sendMessage(_0x5a7367, {
        'text': _0x476b09.text || _0x476b09.caption,
        ..._0x476b09
      });
    }
  };
  _0xbd05e4.contextInfo = async (_0x5c40fb = Config.botname, _0x3af2fe = Config.ownername, _0x3b78b2 = log0, _0x464d64 = 0x1, _0x4a3fdc = gurl, _0x264cad = false) => {
    try {
      let _0x20168b = _0x264cad ? _0x264cad : global.style;
      if (_0x20168b >= 0x5) {
        return {
          'externalAdReply': {
            'title': _0x5c40fb,
            'body': _0x3af2fe,
            'renderLargerThumbnail': true,
            'showAdAttribution': true,
            'thumbnail': _0x3b78b2 || log0,
            'mediaType': _0x464d64 || 0x1,
            'mediaUrl': _0x4a3fdc,
            'sourceUrl': _0x4a3fdc
          }
        };
      } else {
        if (_0x20168b == 0x4) {
          return {
            'forwardingScore': 0x3e7,
            'isForwarded': true,
            'externalAdReply': {
              'title': _0x5c40fb,
              'body': _0x3af2fe,
              'renderLargerThumbnail': true,
              'thumbnail': _0x3b78b2 || log0,
              'mediaType': _0x464d64 || 0x1,
              'mediaUrl': _0x4a3fdc,
              'sourceUrl': _0x4a3fdc
            }
          };
        } else {
          if (_0x20168b == 0x3) {
            return {
              'externalAdReply': {
                'title': _0x5c40fb,
                'body': _0x3af2fe,
                'renderLargerThumbnail': true,
                'thumbnail': _0x3b78b2 || log0,
                'mediaType': _0x464d64 || 0x1,
                'mediaUrl': _0x4a3fdc,
                'sourceUrl': _0x4a3fdc
              }
            };
          } else {
            if (_0x20168b == 0x2) {
              return {
                'externalAdReply': {
                  'title': _0x5c40fb,
                  'body': _0x3af2fe,
                  'thumbnail': _0x3b78b2 || log0,
                  'showAdAttribution': true,
                  'mediaType': 0x1,
                  'mediaUrl': _0x4a3fdc,
                  'sourceUrl': _0x4a3fdc
                }
              };
            } else {
              return _0x20168b == 0x1 ? {
                'externalAdReply': {
                  'title': _0x5c40fb,
                  'body': _0x3af2fe,
                  'thumbnail': _0x3b78b2 || log0,
                  'mediaType': 0x1,
                  'mediaUrl': _0x4a3fdc,
                  'sourceUrl': _0x4a3fdc
                }
              } : {};
            }
          }
        }
      }
    } catch (_0x431077) {
      console.log("error in client.contextInfo() : ", _0x431077);
      return {};
    }
  };
  _0xbd05e4.cMod = (_0x213623, _0x13859d, _0x144975 = '', _0x24e426 = _0xbd05e4.user.id, _0x3d4a17 = {}) => {
    let _0x3d97db = Object.keys(_0x13859d.message)[0x0];
    let _0x396b36 = _0x3d97db === 'ephemeralMessage';
    if (_0x396b36) {
      _0x3d97db = Object.keys(_0x13859d.message.ephemeralMessage.message)[0x0];
    }
    let _0x24f8d0 = _0x396b36 ? _0x13859d.message.ephemeralMessage.message : _0x13859d.message;
    let _0x23bc10 = _0x24f8d0[_0x3d97db];
    if (typeof _0x23bc10 === 'string') {
      _0x24f8d0[_0x3d97db] = _0x144975 || _0x23bc10;
    } else {
      if (_0x23bc10.caption) {
        _0x23bc10.caption = _0x144975 || _0x23bc10.caption;
      } else if (_0x23bc10.text) {
        _0x23bc10.text = _0x144975 || _0x23bc10.text;
      }
    }
    if (typeof _0x23bc10 !== "string") {
      _0x24f8d0[_0x3d97db] = {
        ..._0x23bc10,
        ..._0x3d4a17
      };
    }
    if (_0x13859d.key.participant) {
      _0x24e426 = _0x13859d.key.participant = _0x24e426 || _0x13859d.key.participant;
    } else if (_0x13859d.key.participant) {
      _0x24e426 = _0x13859d.key.participant = _0x24e426 || _0x13859d.key.participant;
    }
    if (_0x13859d.key.remoteJid.includes("@s.whatsapp.net")) {
      _0x24e426 = _0x24e426 || _0x13859d.key.remoteJid;
    } else if (_0x13859d.key.remoteJid.includes('@broadcast')) {
      _0x24e426 = _0x24e426 || _0x13859d.key.remoteJid;
    }
    _0x13859d.key.remoteJid = _0x213623;
    _0x13859d.key.fromMe = _0x24e426 === _0xbd05e4.user.id;
    return proto.WebMessageInfo.fromObject(_0x13859d);
  };
  _0xbd05e4.getFile = async (_0x10ba23, _0x3a97f0) => {
    let _0x355bb3;
    let _0xe8134e = Buffer.isBuffer(_0x10ba23) ? _0x10ba23 : /^data:.*?\/.*?;base64,/i.test(_0x10ba23) ? Buffer.from(_0x10ba23.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x10ba23) ? await (_0x355bb3 = await getBuffer(_0x10ba23)) : fs.existsSync(_0x10ba23) ? (_0x228d4b = _0x10ba23, fs.readFileSync(_0x10ba23)) : typeof _0x10ba23 === "string" ? _0x10ba23 : Buffer.alloc(0x0);
    let _0x2bc9fc = (await FileType.fromBuffer(_0xe8134e)) || {
      'mime': 'application/octet-stream',
      'ext': '.bin'
    };
    let _0x228d4b = "./temp/null." + _0x2bc9fc.ext;
    if (_0xe8134e && _0x3a97f0) {
      fs.promises.writeFile(_0x228d4b, _0xe8134e);
    }
    return {
      'res': _0x355bb3,
      'filename': _0x228d4b,
      'size': getSizeMedia(_0xe8134e),
      ..._0x2bc9fc,
      'data': _0xe8134e
    };
  };
  _0xbd05e4.sendFile = async (_0x348a3e, _0x28ce5d, _0x76f1ae, _0x35db45 = {
    'quoted': ''
  }, _0x5c8e33 = {}) => {
    let _0x483acc = await _0xbd05e4.getFile(_0x28ce5d, true);
    let {
      filename: _0x4a084c,
      size: _0x40f20c,
      ext: _0x3d47bb,
      mime: _0x386b47,
      data: _0x3d5d19
    } = _0x483acc;
    let _0x4f9b1a = '';
    let _0x3aece8 = _0x386b47;
    let _0x500c30 = _0x4a084c;
    if (_0x5c8e33.asDocument) {
      _0x4f9b1a = "document";
    }
    if (_0x5c8e33.asSticker || /webp/.test(_0x386b47)) {
      let {
        writeExif: _0x5a5736
      } = require('./exif.js');
      let _0x24f19c = {
        'mimetype': _0x386b47,
        'data': _0x3d5d19
      };
      _0x500c30 = await _0x5a5736(_0x24f19c, {
        'packname': Config.packname,
        'author': Config.packname,
        'categories': _0x5c8e33.categories ? _0x5c8e33.categories : []
      });
      await fs.promises.unlink(_0x4a084c);
      _0x4f9b1a = "sticker";
      _0x3aece8 = "image/webp";
    } else {
      if (/image/.test(_0x386b47)) {
        _0x4f9b1a = 'image';
      } else {
        if (/video/.test(_0x386b47)) {
          _0x4f9b1a = "video";
        } else if (/audio/.test(_0x386b47)) {
          _0x4f9b1a = "audio";
        } else {
          _0x4f9b1a = "document";
        }
      }
    }
    await _0xbd05e4.sendMessage(_0x348a3e, {
      [_0x4f9b1a]: {
        'url': _0x500c30
      },
      'mimetype': _0x3aece8,
      'fileName': _0x76f1ae,
      ..._0x5c8e33
    }, {
      'quoted': _0x35db45 && _0x35db45.quoted ? _0x35db45.quoted : _0x35db45,
      ..._0x35db45
    });
    return fs.promises.unlink(_0x500c30);
  };
  _0xbd05e4.fakeMessage = async (_0x5356f5 = "text", _0x76edb1 = {}, _0x163a9a = "➬ ANITA", _0x1b4a5b = {}) => {
    const _0x2a2201 = [0x309, 0x0, 0x64, 0x1f4, 0x3e8, 0x3e7, 0x7e5];
    let _0x24fb0a = {
      'id': _0xbd05e4.messageId(),
      'fromMe': false,
      'participant': "0@s.whatsapp.net",
      'remoteJid': "status@broadcast",
      ..._0x76edb1
    };
    let _0x1dd3f4 = {};
    if (_0x5356f5 == "text" || _0x5356f5 == "conservation" || !_0x5356f5) {
      _0x1dd3f4 = {
        'conversation': _0x163a9a
      };
    } else {
      if (_0x5356f5 == "order") {
        _0x1dd3f4 = {
          'orderMessage': {
            'itemCount': _0x2a2201[Math.floor(_0x2a2201.length * Math.random())],
            'status': 0x1,
            'surface': 0x1,
            'message': "❏ " + _0x163a9a,
            'orderTitle': "live",
            'sellerJid': "27717311486@s.whatsapp.net"
          }
        };
      } else {
        if (_0x5356f5 == 'contact') {
          _0x1dd3f4 = {
            'contactMessage': {
              'displayName': '' + _0x163a9a,
              'jpegThumbnail': log0
            }
          };
        } else {
          if (_0x5356f5 == "image") {
            _0x1dd3f4 = {
              'imageMessage': {
                'jpegThumbnail': log0,
                'caption': _0x163a9a
              }
            };
          } else if (_0x5356f5 == "video") {
            _0x1dd3f4 = {
              'videoMessage': {
                'url': log0,
                'caption': _0x163a9a,
                'mimetype': "video/mp4",
                'fileLength': "4757228",
                'seconds': 0x2c
              }
            };
          }
        }
      }
    }
    return {
      'key': {
        ..._0x24fb0a
      },
      'message': {
        ..._0x1dd3f4,
        ..._0x1b4a5b
      }
    };
  };
  _0xbd05e4.parseMention = async _0x51aa6d => {
    return [..._0x51aa6d.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x516b7e => _0x516b7e[0x1] + "@s.whatsapp.net");
  };
  app.get("/chat", (_0x4a86be, _0x233df5) => {
    let _0x33f7b6 = _0x4a86be.query.chat || _0x4a86be.query.jid || _0xbd05e4.user.id || _0xbd05e4.user.m || '';
    if (["all", "msg", "total"].includes(_0x33f7b6)) {
      return _0x233df5.json({
        'chat': _0x33f7b6,
        'conversation': JSON.stringify(store, null, 0x2)
      });
    }
    if (!_0x33f7b6) {
      return _0x233df5.json({
        'ERROR': "Chat Id parameter missing"
      });
    }
    _0x33f7b6 = _0xbd05e4.decodeJid(_0x33f7b6);
    const _0x496d42 = (store.messages[_0x33f7b6] || store.messages[_0x33f7b6 + "@s.whatsapp.net"] || store.messages[_0x33f7b6 + "@g.us"])?.["array"] || false;
    if (!_0x496d42) {
      return _0x233df5.json({
        'chat': _0x33f7b6,
        'Message': "no messages found in given chat id!"
      });
    }
    _0x233df5.json({
      'chat': _0x33f7b6,
      'conversation': JSON.stringify(_0x496d42, null, 0x2)
    });
  });
  _0xbd05e4.dl_size = global.dl_size || 0xc8;
  _0xbd05e4.awaitForMessage = async (_0x19c110 = {}) => {
    return new Promise((_0xad9645, _0x9cb8a6) => {
      if (typeof _0x19c110 !== "object") {
        _0x9cb8a6(new Error("Options must be an object"));
      }
      if (typeof _0x19c110.sender !== "string") {
        _0x9cb8a6(new Error("Sender must be a string"));
      }
      if (typeof _0x19c110.remoteJid !== "string") {
        _0x9cb8a6(new Error("ChatJid must be a string"));
      }
      if (_0x19c110.timeout && typeof _0x19c110.timeout !== "number") {
        _0x9cb8a6(new Error("Timeout must be a number"));
      }
      if (_0x19c110.filter && typeof _0x19c110.filter !== "function") {
        _0x9cb8a6(new Error("Filter must be a function"));
      }
      const _0x56f2ee = _0x19c110?.["timeout"] || undefined;
      const _0x83f9fb = _0x19c110?.["filter"] || (() => true);
      let _0x5347e7 = undefined;
      let _0x55d0c1 = _0x17627e => {
        let {
          type: _0x17e512,
          messages: _0x5df9e4
        } = _0x17627e;
        if (_0x17e512 == "notify") {
          for (let _0x5bae3c of _0x5df9e4) {
            const _0x2a752f = _0x5bae3c.key.fromMe;
            const _0xd9ac = _0x5bae3c.key.remoteJid;
            const _0x2b1dd5 = _0xd9ac.endsWith("@g.us");
            const _0x24213d = _0xd9ac == "status@broadcast";
            const _0x37ee19 = _0xbd05e4.decodeJid(_0x2a752f ? _0xbd05e4.user.id : _0x2b1dd5 || _0x24213d ? _0x5bae3c.key.participant : _0xd9ac);
            if (_0x37ee19 == _0x19c110.sender && _0xd9ac == _0x19c110.remoteJid && _0x83f9fb(_0x5bae3c)) {
              _0xbd05e4.ev.off("messages.upsert", _0x55d0c1);
              clearTimeout(_0x5347e7);
              _0xad9645(_0x5bae3c);
            }
          }
        }
      };
      _0xbd05e4.ev.on("messages.upsert", _0x55d0c1);
      if (_0x56f2ee) {
        _0x5347e7 = setTimeout(() => {
          _0xbd05e4.ev.off("messages.upsert", _0x55d0c1);
          _0x9cb8a6(new Error('Timeout'));
        }, _0x56f2ee);
      }
    });
  };
  return _0xbd05e4;
}
let asciiArt = "\n\n " + Config.VERSION + "\n 𝗠𝗨𝗟𝗧𝗜𝗗𝗘𝗩𝗜𝗖𝗘 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗨𝗦𝗘𝗥 𝗕𝗢𝗧\n\n";
console.log(asciiArt);
global.libDir = __dirname;
global.toBool = (_0x284be5, _0x41486e = false) => /true|yes|ok|act|sure|enable|smd|asta/gi.test(_0x284be5) ? _0x41486e ? true : 'true' : _0x41486e ? false : "false";
async function loadPlugins(_0xc41108) {
  try {
    fs.readdirSync(_0xc41108).forEach(_0x1d0ee1 => {
      const _0x13caf0 = path.join(_0xc41108, _0x1d0ee1);
      if (fs.statSync(_0x13caf0).isDirectory()) {
        loadPlugins(_0x13caf0);
      } else {
        if (_0x1d0ee1.includes('_Baileys') || _0x1d0ee1.includes("_MSGS")) {
          log("\nRENTBOTT's DATA DETECTED!", "\nUSER NUMBER:", _0x1d0ee1.replace("_MSGS", '').replace("_Baileys", ''), "\n\n");
        } else {
          if (['.js', ".smd", ".asta"].includes(path.extname(_0x1d0ee1).toLowerCase())) {
            try {
              require(_0x13caf0);
            } catch (_0x3a923c) {
              log("\n❌There's an error in '" + _0x1d0ee1 + "' file ❌ \n\n", _0x3a923c);
            }
          }
        }
      }
    });
  } catch (_0x507cb3) {}
}
app.set("json spaces", 0x3);
app.get('/', (_0x8ea456, _0x23f93d) => {
  try {
    let _0x4dc1c7 = path.join(__dirname, "assets", "index.html");
    if (fs.existsSync(_0x4dc1c7)) {
      _0x23f93d.sendFile(_0x4dc1c7);
    } else {
      _0x23f93d.type('html').send("\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>ANITA Bouncing Text</title>\n  <style>\n    body, html {\n      margin: 0;\n      padding: 0;\n      height: 100%;\n    }\n\n    .container {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100%;\n    }\n\n    .bounce {\n      animation: bounce 2s infinite;\n    }\n\n    @keyframes bounce {\n      0%, 100% {\n        transform: translateY(0);\n      }\n      50% {\n        transform: translateY(-20px);\n      }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <h1 class=\"bounce\">ANITA</h1>\n  </div>\n</body>\n</html>\n");
    }
  } catch (_0x37fda9) {}
});
app.get("/asta", (_0x239db7, _0x3da854) => _0x3da854.type("html").send("\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>ANITA Bouncing Text</title>\n  <style>\n    body, html {\n      margin: 0;\n      padding: 0;\n      height: 100%;\n    }\n\n    .container {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100%;\n    }\n\n    .bounce {\n      animation: bounce 2s infinite;\n    }\n\n    @keyframes bounce {\n      0%, 100% {\n        transform: translateY(0);\n      }\n      50% {\n        transform: translateY(-20px);\n      }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <h1 class=\"bounce\">ANITA</h1>\n  </div>\n</body>\n</html>\n"));
app.get("/var", (_0x398f87, _0x180528) => _0x180528.json({
  ...Config,
  'SESSION_ID': SESSION_ID
}));
app.get("/qr", async (_0xf299ae, _0x371ec8) => {
  try {
    if (!global.qr) {
      throw "QR NOT FETCHED!";
    }
    let _0x30f85e = require('qrcode');
    _0x371ec8.end(await _0x30f85e.toBuffer(global.qr));
  } catch (_0x926031) {
    console.log("/qr PATH_URL Error : ", _0x926031);
    if (!_0x371ec8.headersSent) {
      _0x371ec8.send({
        'error': _0x926031.message || _0x926031,
        'reason': global.qr_message || "SERVER DOWN!",
        'uptime': runtime(process.uptime())
      });
    }
  }
});
app.get("/logo", (_0x42073e, _0x56f9ac) => _0x56f9ac.end(global.log0));
let randomPort = global.port ? global.port : Math.floor(Math.random() * 0x2328) + 0x3e8;
app.listen(randomPort, () => console.log("ANITA Server listening on http://localhost:" + randomPort + "/ "));
global.print = console.log;
global.log = console.log;
global.Debug = {
  ...console
};
if (!/true|log|smd|error|logerror|err|all|info|loginfo|warn|logwarn/.test(global.MsgsInLog)) {
  console.log = () => {};
}
if (!/error|logerror|err|all/.test(global.MsgsInLog)) {
  console.error = () => {};
}
if (!/info|loginfo|all/.test(global.MsgsInLog)) {
  console.info = () => {};
}
if (!/warn|logwarn|all/.test(global.MsgsInLog)) {
  console.warn = () => {};
}
let Appurls = [];
if (global.appUrl && /http/gi.test(global.appUrl)) {
  Appurls = [global.appUrl, 'http://localhost:' + quickport];
}
if (process.env.REPL_ID) {
  Appurls.push("https://" + process.env.REPL_ID + ".pike.replit.dev");
  Appurls.push("https://" + process.env.REPL_ID + '.' + (process.env.REPLIT_CLUSTER || "pike") + '.replit.dev');
}
if (process.env.REPL_SLUG) {
  Appurls.push('https://' + process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + ".repl.co");
}
if (process.env.PROJECT_DOMAIN) {
  Appurls.push('https://' + process.env.PROJECT_DOMAIN + ".glitch.me");
}
if (process.env.CODESPACE_NAME) {
  Appurls.push('https://' + process.env.CODESPACE_NAME + ".github.dev");
}
function keepAlive() {
  setInterval(() => {
    for (let _0x2d50c6 = 0x0; _0x2d50c6 < Appurls.length; _0x2d50c6++) {
      const _0x24dfc9 = Appurls[_0x2d50c6];
      if (/(\/\/|\.)undefined\./.test(_0x24dfc9)) {
        continue;
      }
      try {
        axios.get(_0x24dfc9);
      } catch (_0x5d0faa) {}
      try {
        fetch(_0x24dfc9);
      } catch (_0x459c95) {}
    }
  }, 0x493e0);
}
if (Array.isArray(Appurls)) {
  keepAlive();
}
async function MakeSession(_0x450e72 = SESSION_ID, _0x330d74 = __dirname + "/Session/", _0x36c742 = false) {
  let _0xa90ec2 = ('' + _0x450e72).replace(/^SESSION_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/^SESSION_ID_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/^ASTA_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/Secktor;;;/gi, '').replace(/Astro;;;/gi, '').replace(/Asta;;;/gi, '').trim();
  function _0x522384(_0x5533a4, _0x897298) {
    return new Promise((_0x445940, _0x45167c) => {
      fs.readFile(_0x897298, "utf8", (_0x55be65, _0x2d4f3b) => {
        if (_0x55be65) {
          _0x445940(false);
        } else {
          _0x445940(_0x2d4f3b.includes(_0x5533a4));
        }
      });
    });
  }
  const _0x3ac9aa = toBool(_0x36c742 || global.IS_ASTRO || process.env.IS_ASTRO, true) || (await _0x522384('/coderxsa/', "./Dockerfile"));
  if (_0x3ac9aa) {
    AstaOfficial = "yes";
    if (!fs.existsSync(_0x330d74)) {
      fs.mkdirSync(_0x330d74);
    }
    if (_0xa90ec2 && _0xa90ec2.startsWith('PId_')) {
      try {
        var _0x4715cb = _0xa90ec2.replace("PId_", '');
        const _0x137016 = require('pastebin-js');
        const _0x2293d1 = new _0x137016("ECRgNok5kmfqqPofmC4NwFM8J6rx3qSO");
        const _0x50cee8 = await _0x2293d1.getPaste(_0x4715cb);
        console.log({
          'pasteId': _0x4715cb
        });
        _0xa90ec2 = _0x50cee8 && typeof _0x50cee8 == "string" ? Buffer.from(_0x50cee8, 'utf-8').toString("base64") : _0xa90ec2;
      } catch (_0x346e88) {
        console.log("CAN'T GET SESSION FROM PASTE ID\nERROR : ", _0x346e88);
      }
    }
    if (_0xa90ec2 && /guru/gi.test(_0xa90ec2) && _0xa90ec2.length < 0x1e) {
      try {
        let _0x583747 = global.gurupaste || "https://pastebin.guruapi.tech/pastes?action=getpaste&id=";
        const {
          data: _0x21eccb
        } = await axios.get(_0x583747 + _0xa90ec2);
        const _0x3b2c2a = _0x21eccb && _0x21eccb.content ? _0x21eccb.content : false;
        var _0x1ca597 = _0x3b2c2a ? Buffer.from(_0x3b2c2a, "base64").toString("utf-8") : {};
        const _0x224be3 = JSON.parse(_0x1ca597);
        fs.writeFileSync(_0x330d74 + "creds.json", JSON.stringify(_0x224be3, null, 0x2));
        log("\nCredentials saved successfully.");
      } catch (_0x4c979b) {
        log("EMPTY SESSION_ID FROM GURU SERVER\nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n\n\nERROR: ", _0x4c979b);
      }
    } else {
      if (_0xa90ec2 && _0xa90ec2.length > 0x3 && _0xa90ec2.length < 0x14 && _0xa90ec2.length > 0x1e) {
        try {
          let {
            data: _0x20d212
          } = await axios.get("https://paste.c-net.org/" + _0xa90ec2);
          fs.writeFileSync(_0x330d74 + "creds.json", Buffer.from(_0x20d212, "base64").toString("utf-8"), "utf8");
        } catch (_0x256336) {
          log("\nERROR GETTING SESSION_ID FROM PASTE SERVER\n \nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n");
        }
      } else {
        if (_0xa90ec2) {
          try {
            log("Checking Session ID!");
            var _0x1ca597 = Buffer.from(_0xa90ec2, "base64").toString("utf-8");
            const _0x2ed3ee = JSON.parse(_0x1ca597);
            if (_0x2ed3ee["creds.json"]) {
              for (const _0x501273 in _0x2ed3ee) {
                try {
                  fs.writeFileSync(_0x330d74 + _0x501273, typeof _0x2ed3ee[_0x501273] == "string" ? _0x2ed3ee[_0x501273] : JSON.stringify(_0x2ed3ee[_0x501273], null, 0x2));
                } catch (_0x2c5b03) {}
              }
            } else {
              fs.writeFileSync(_0x330d74 + 'creds.json', JSON.stringify(_0x2ed3ee, null, 0x2));
            }
            log("\nCredentials Saved Successfully.");
          } catch (_0x53f91f) {
            log("INVALID SESSION_ID ERROR FROM SERVER\nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n\n\nERROR : ", _0x53f91f);
          }
        }
      }
    }
  } else {
    AstaOfficial = false;
    log("\n\nYou are using a Modified Version. Please Run Bot from the Original Repository.\nDeploy From : https://github.com/coderxsa/ANITA");
    process.exit(0x0);
  }
}
async function main() {
  if (MONGODB && MONGODB.includes('MONGODB')) {
    try {
      isMongodb = await connnectMongo();
    } catch {}
  }
  if (!global.isMongodb && global.DATABASE_URL && !["false", "null"].includes(global.DATABASE_URL)) {
    try {
      global.sqldb = await connnectpg();
    } catch {}
  }
}
module.exports = {
  'init': MakeSession,
  'connect': syncdb,
  'logger': global.Debug,
  'DATABASE': {
    'sync': main
  }
};