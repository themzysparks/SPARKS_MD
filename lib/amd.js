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
const Config = require(__dirname + '/../config.js');
const blockJid = ['' + (process.env.BLOCKJIDS || "120363023982391@g.us"), ...(typeof global.blockJids === "string" ? global.blockJids.split(',') : [])];
const allowJid = ["null", ...(typeof global.allowJids === "string" ? global.allowJids.split(',') : [])];
const Pino = require('pino');
const {
  Boom
} = require("@hapi/boom");
const FileType = require("file-type");
const express = require("express");
const app = express();
const events = require("./plugins");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./exif");
let {
  default: SuhailMDConnect,
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
global.AstroOfficial = false;
global.sqldb = false;
global.pg_pools = false;
const {
  userdb,
  sck,
  groupdb,
  Plugindb,
  bot_,
  smdBuffer
} = require("../lib");
const fetch = require("node-fetch");
const axios = require('axios');
let {
  sleep,
  getBuffer,
  parsedJid,
  tiny,
  botpic,
  tlang
} = require("../lib");
const {
  smsg,
  callsg,
  groupsg
} = require('./serialized.js');
const {
  runtime,
  getSizeMedia
} = require("../lib");
var prefa = !!(!Config.HANDLERS || ["false", "null", " ", '', "nothing", "not", "empty"].includes(!Config.HANDLERS));
global.prefix = prefa ? '' : Config.HANDLERS[0x0];
global.prefixRegex = prefa || ["all"].includes(Config.HANDLERS) ? new RegExp('^') : new RegExp('^[' + Config.HANDLERS + ']');
global.prefixboth = ["all"].includes(Config.HANDLERS);
const connnectpg = async () => {
  try {
    const {
      Pool: _0x1e310e
    } = require('pg');
    const _0x16ae79 = new _0x1e310e({
      'connectionString': global.DATABASE_URL,
      'ssl': {
        'rejectUnauthorized': false
      }
    });
    const _0x2b84f3 = await _0x16ae79.connect();
    _0x2b84f3.release();
    console.log("🌍 Connected to the PostgreSQL.");
    return true;
  } catch (_0x6c7664) {
    console.log("Could not connect with PostgreSQL.\n");
    return false;
  }
};
const connnectMongo = async () => {
  const _0x243d2e = require('mongoose');
  try {
    _0x243d2e.set('strictQuery', true);
    await _0x243d2e.connect(mongodb);
    console.log("🌍 Connected to the Mongodb.");
    return true;
  } catch {
    console.log("Could not connect with Mongodb.");
    return false;
  }
};
let Suhail = {};
const store = makeInMemoryStore({
  'logger': Pino({
    'level': "silent"
  }).child({
    'level': "silent"
  })
});
try {
  if (fs.existsSync(__dirname + "/store.json")) {
    store.readFromFile(__dirname + "/store.json");
  }
} catch (_0xa13238) {
  console.log("CLIENT STORE ERROR:\n", _0xa13238);
}
require("events").EventEmitter.defaultMaxListeners = 0x7d0;
async function syncdb() {
  let _0x1e95db = __dirname + "/assets/logo.png";
  try {
    global.log0 = typeof THUMB_IMAGE === 'string' ? await getBuffer(THUMB_IMAGE.split(',')[0x0]) : fs.readFileSync(_0x1e95db);
  } catch (_0x2e2c0a) {
    _0x1e95db = __dirname + "/assets/logo.png";
  }
  global.log0 = global.log0 || fs.readFileSync(_0x1e95db);
  const {
    state: _0x44f588,
    saveCreds: _0x3e2f49
  } = await useMultiFileAuthState(__dirname + "/Sessions/");
  let _0x27b497 = SuhailMDConnect({
    'logger': Pino({
      'level': 'silent' || "debug" || "fatal"
    }),
    'printQRInTerminal': false,
    'browser': ["Windows", "chrome", ''],
    'fireInitQueries': true,
    'shouldSyncHistoryMessage': true,
    'downloadHistory': true,
    'syncFullHistory': true,
    'generateHighQualityLinkPreview': true,
    'markOnlineOnConnect': false,
    'auth': _0x44f588,
    'getMessage': async _0x260a52 => {
      let _0x36b36f = {
        'conversation': "ANITA"
      };
      if (store) {
        const _0x44b700 = await store.loadMessage(_0x260a52.remoteJid, _0x260a52.id);
        return _0x44b700.message || _0x36b36f;
      }
      return _0x36b36f;
    }
  });
  store.bind(_0x27b497.ev);
  setInterval(() => {
    try {
      store.writeToFile(__dirname + "/store.json");
    } catch (_0x34b953) {
      console.log("CLIENT STORE ERROR:\n", _0x34b953);
    }
  }, 0x2710);
  _0x27b497.ev.on("call", async _0x465b99 => {
    let _0x4f8097 = await callsg(_0x27b497, JSON.parse(JSON.stringify(_0x465b99[0x0])));
    events.commands.map(async _0x54ddbe => {
      if (_0x54ddbe.call === "offer" && _0x4f8097.status === "offer") {
        try {
          _0x54ddbe["function"](_0x4f8097, {
            'store': store,
            'Void': _0x27b497
          });
        } catch (_0x2313f1) {
          console.error("[CALL ERROR] ", _0x2313f1);
        }
      }
      if (_0x54ddbe.call === "accept" && _0x4f8097.status === "accept") {
        try {
          _0x54ddbe["function"](_0x4f8097, {
            'store': store,
            'Void': _0x27b497
          });
        } catch (_0x7c044c) {
          console.error("[CALL ACCEPT ERROR] ", _0x7c044c);
        }
      }
      if (_0x54ddbe.call === "call" || _0x54ddbe.call === 'on' || _0x54ddbe.call === "all") {
        try {
          _0x54ddbe['function'](_0x4f8097, {
            'store': store,
            'Void': _0x27b497
          });
        } catch (_0x1f698d) {
          console.error("[CALL ERROR] ", _0x1f698d);
        }
      }
    });
  });
  var _0x5e1ab9 = false;
  let _0x23155a = {};
  let _0x57ad7c = {};
  _0x27b497.ev.on("messages.upsert", async _0xa0d8be => {
    try {
      if (!_0xa0d8be.messages || !Array.isArray(_0xa0d8be.messages)) {
        return;
      }
      _0x5e1ab9 = _0x5e1ab9 || _0x27b497.decodeJid(_0x27b497.user.id);
      for (mek of _0xa0d8be.messages) {
        mek.message = Object.keys(mek.message || {})[0x0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
        if (!mek.message || !mek.key || !/broadcast/gi.test(mek.key.remoteJid)) {
          continue;
        }
        let _0x537b3b = await smsg(_0x27b497, JSON.parse(JSON.stringify(mek)), store, true);
        if (!_0x537b3b.message) {
          continue;
        }
        let _0x5b815d = _0x537b3b.body;
        let _0x5a82e0 = {
          'body': _0x5b815d,
          'mek': mek,
          'text': _0x5b815d,
          'args': _0x5b815d.split(" ") || [],
          'botNumber': _0x5e1ab9,
          'isCreator': _0x537b3b.isCreator,
          'store': store,
          'budy': _0x5b815d,
          'Suhail': {
            'bot': _0x27b497
          },
          'Void': _0x27b497,
          'proto': proto
        };
        events.commands.map(async _0x3f06c2 => {
          if (typeof _0x3f06c2.on === 'string') {
            let _0x20e89d = _0x3f06c2.on.trim();
            let _0x22a06d = !_0x3f06c2.fromMe || _0x3f06c2.fromMe && _0x537b3b.fromMe;
            if (/status|story/gi.test(_0x20e89d) && (_0x537b3b.jid === "status@broadcast" || mek.key.remoteJid === "status@broadcast") && _0x22a06d) {
              _0x3f06c2["function"](_0x537b3b, _0x5b815d, _0x5a82e0);
            } else if (["broadcast"].includes(_0x20e89d) && (/broadcast/gi.test(mek.key.remoteJid) || _0x537b3b.broadcast || /broadcast/gi.test(_0x537b3b.from)) && _0x22a06d) {
              _0x3f06c2['function'](_0x537b3b, _0x5b815d, _0x5a82e0);
            }
          }
        });
      }
    } catch (_0x4b1898) {
      console.log("ERROR broadCast --------- messages.upsert \n", _0x4b1898);
    }
  });
  _0x27b497.ev.on("messages.upsert", async _0x1d83f5 => {
    try {
      _0x5e1ab9 = _0x5e1ab9 || _0x27b497.decodeJid(_0x27b497.user.id);
      if (!global.isStart) {
        return;
      }
      for (mek of _0x1d83f5.messages) {
        if (!mek.message) {
          continue;
        }
        mek.message = Object.keys(mek.message || {})[0x0] === 'ephemeralMessage' ? mek.message.ephemeralMessage.message : mek.message;
        if (!mek.message || !mek.key || /broadcast/gi.test(mek.key.remoteJid)) {
          continue;
        }
        let _0x4c5367 = await smsg(_0x27b497, JSON.parse(JSON.stringify(mek)), store, true);
        if (!_0x4c5367.message || _0x4c5367.chat.endsWith("broadcast")) {
          continue;
        }
        var {
          body: _0x118cdb
        } = _0x4c5367;
        var _0x4eb0ba = _0x4c5367.isCreator;
        var _0x3de650 = typeof _0x4c5367.text == "string" ? _0x4c5367.text.trim() : false;
        if (_0x3de650 && _0x118cdb[0x1] && _0x118cdb[0x1] == " ") {
          _0x118cdb = _0x118cdb[0x0] + _0x118cdb.slice(0x2);
        }
        let _0x454a1c = false;
        let _0x3254d7 = false;
        let _0x497053 = false;
        if (_0x3de650 && Config.HANDLERS.toLowerCase().includes("null")) {
          _0x454a1c = true;
          _0x3254d7 = _0x118cdb.split(" ")[0x0].toLowerCase() || false;
        } else if (_0x3de650 && !Config.HANDLERS.toLowerCase().includes('null')) {
          _0x454a1c = prefixboth || _0x118cdb && prefixRegex.test(_0x118cdb[0x0]) || _0x4c5367.isAstro && /23480396375|23490262116|23480524641/g.test(_0x5e1ab9) && _0x118cdb[0x0] == ',';
          _0x3254d7 = _0x454a1c ? prefa ? _0x118cdb.trim().split(" ")[0x0].toLowerCase() : _0x118cdb.slice(0x1).trim().split(" ")[0x0].toLowerCase() : false;
          _0x497053 = prefixboth ? _0x118cdb.trim().split(" ")[0x0].toLowerCase() : '';
        } else {
          _0x454a1c = false;
        }
        let _0x450054 = _0x3254d7 ? _0x3254d7.trim() : '';
        if (_0x450054 && global.setCmdAlias[_0x450054] !== undefined) {
          _0x3254d7 = global.setCmdAlias[_0x450054];
          _0x454a1c = true;
        } else if (_0x4c5367.mtype == "stickerMessage") {
          _0x450054 = 'sticker-' + _0x4c5367.msg.fileSha256;
          if (global.setCmdAlias[_0x450054]) {
            _0x3254d7 = global.setCmdAlias[_0x450054];
            _0x454a1c = true;
          }
        }
        if (blockJid.includes(_0x4c5367.chat) && !_0x4c5367.isAstro) {
          return;
        }
        if (_0x454a1c && (_0x4c5367.isBaileys || !_0x4eb0ba && Config.WORKTYPE === "private" && !allowJid.includes(_0x4c5367.chat))) {
          _0x454a1c = false;
        }
        const _0x201649 = _0x4c5367.body ? _0x118cdb.trim().split(/ +/).slice(0x1) : [];
        if (!_0x4eb0ba && global.disablepm === "true" && _0x454a1c && !_0x4c5367.isGroup) {
          _0x454a1c = false;
        }
        if (!_0x4eb0ba && global.disablegroup === "true" && _0x454a1c && _0x4c5367.isGroup && !allowJid.includes(_0x4c5367.chat)) {
          _0x454a1c = false;
        }
        Suhail.bot = _0x27b497;
        if (_0x454a1c) {
          let _0x2518e3 = events.commands.find(_0x5e3348 => _0x5e3348.pattern === _0x3254d7) || events.commands.find(_0x1488e4 => _0x1488e4.alias && _0x1488e4.alias.includes(_0x3254d7));
          if (!_0x2518e3 && prefixboth && _0x497053) {
            _0x2518e3 = events.commands.find(_0x2c222e => _0x2c222e.pattern === _0x497053) || events.commands.find(_0x1aadb8 => _0x1aadb8.alias && _0x1aadb8.alias.includes(_0x497053));
          }
          if (_0x2518e3 && _0x2518e3.fromMe && !_0x4c5367.fromMe && !_0x4eb0ba) {
            _0x2518e3 = false;
            return _0x4c5367.reply(tlang().owner);
          }
          if (_0x4c5367.isGroup && _0x2518e3 && _0x3254d7 !== "bot") {
            let _0x4b47f0 = _0x23155a[_0x4c5367.chat] || (await groupdb.findOne({
              'id': _0x4c5367.chat
            })) || {
              'botenable': toBool(_0x4c5367.isAstro || !blockJid.includes(_0x4c5367.chat))
            };
            if (_0x4b47f0 && _0x4b47f0.botenable === "false") {
              _0x2518e3 = false;
            }
            if (_0x2518e3 && _0x4b47f0) {
              let _0x10d5c8 = _0x2518e3.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              let _0x32e1a1 = new RegExp("\\b" + _0x10d5c8 + "\\b");
              if (_0x4b47f0.disablecmds !== "false" && _0x32e1a1.test(_0x4b47f0.disablecmds)) {
                _0x2518e3 = false;
              }
            }
          }
          if (!_0x4eb0ba && _0x2518e3) {
            try {
              let _0x364c7a = _0x57ad7c[_0x4c5367.sender] || (await userdb.findOne({
                'id': _0x4c5367.sender
              })) || {
                'ban': "false"
              };
              if (_0x364c7a.ban === "true") {
                _0x2518e3 = false;
                _0x4c5367.reply("*Hey " + _0x4c5367.senderName.split("\n").join("  ") + ",*\n_You are banned from using my commands._");
              }
            } catch (_0x30a834) {
              console.log("checkban.ban", _0x30a834);
            }
          }
          if (_0x2518e3) {
            if (_0x2518e3.react) {
              _0x4c5367.react(_0x2518e3.react);
            }
            let _0xb39986 = _0x4c5367.body ? _0x118cdb.trim().split(/ +/).slice(0x1).join(" ") : '';
            let _0x4cd6b7 = _0x2518e3.pattern;
            _0x4c5367.cmd = _0x4cd6b7;
            try {
              _0x2518e3["function"](_0x4c5367, _0xb39986, {
                'cmd': _0x4cd6b7,
                'text': _0xb39986,
                'body': _0x118cdb,
                'args': _0x201649,
                'cmdName': _0x3254d7,
                'isCreator': _0x4eb0ba,
                'smd': _0x4cd6b7,
                'botNumber': _0x5e1ab9,
                'budy': _0x3de650,
                'store': store,
                'Suhail': Suhail,
                'Void': _0x27b497
              });
            } catch (_0x193be2) {
              console.log("[ERROR] ", _0x193be2);
            }
          } else {
            _0x454a1c = false;
            const _0x37bbed = events.commands.find(_0x234fc4 => _0x234fc4.category === _0x3254d7) || false;
            if (_0x37bbed) {
              const _0x396d9a = {};
              let _0x138915 = '';
              events.commands.map(async (_0x4a5cd4, _0x29b1d7) => {
                if (_0x4a5cd4.dontAddCommandList === false && _0x4a5cd4.pattern !== undefined) {
                  if (!_0x396d9a[_0x4a5cd4.category]) {
                    _0x396d9a[_0x4a5cd4.category] = [];
                  }
                  _0x396d9a[_0x4a5cd4.category].push(_0x4a5cd4.pattern);
                }
              });
              for (const _0x33c833 in _0x396d9a) {
                if (_0x3254d7 == _0x33c833.toLowerCase()) {
                  _0x138915 = "┌───〈 *" + _0x33c833.toLowerCase() + " menu*  〉───◆\n│╭─────────────···▸\n┴│▸\n";
                  for (const _0x80337f of _0x396d9a[_0x33c833]) {
                    _0x138915 += "⬡│▸ " + _0x80337f + "\n";
                  }
                  _0x138915 += "┬│▸\n│╰────────────···▸▸\n└───────────────···▸";
                  break;
                }
              }
              _0x27b497.sendUi(_0x4c5367.jid, {
                'caption': tiny(_0x138915)
              });
            }
          }
        }
        try {
          _0x23155a[_0x4c5367.chat] = (await groupdb.findOne({
            'id': _0x4c5367.chat
          })) || (await groupdb["new"]({
            'id': _0x4c5367.chat,
            'botenable': _0x4c5367.chat === "1203630239862391@g.us" ? "false" : "true",
            'goodbye': toBool(global.gdbye),
            'welcome': toBool(global.wlcm)
          }));
          _0x57ad7c[_0x4c5367.sender] = (await userdb.findOne({
            'id': _0x4c5367.sender
          })) || (await userdb["new"]({
            'id': _0x4c5367.sender,
            'name': _0x4c5367.pushName || "Unknown"
          }));
        } catch (_0x44e78f) {
          main();
        }
        text = _0x4c5367.body;
        let _0x58a709 = {
          'dbuser': _0x57ad7c[_0x4c5367.sender],
          'dbgroup': _0x23155a[_0x4c5367.chat],
          'body': _0x118cdb,
          'mek': mek,
          'text': text,
          'args': _0x201649,
          'botNumber': _0x5e1ab9,
          'isCreator': _0x4eb0ba,
          'icmd': _0x454a1c,
          'store': store,
          'budy': _0x3de650,
          'Suhail': Suhail,
          'Void': _0x27b497,
          'proto': proto
        };
        let _0x2bd387 = {
          'mp4': "video",
          'mp3': "audio",
          'webp': 'sticker',
          'photo': "image",
          'picture': "image",
          'vv': "viewonce"
        };
        events.commands.map(async _0x49c879 => {
          if (typeof _0x49c879.on === "string") {
            let _0x50e5e7 = _0x49c879.on.trim();
            let _0x374684 = !_0x49c879.fromMe || _0x49c879.fromMe && _0x4c5367.fromMe;
            if (_0x50e5e7 === "main" && _0x374684) {
              _0x49c879["function"](_0x4c5367, _0x118cdb, _0x58a709);
            } else {
              if (_0x4c5367.text && _0x50e5e7 === "text" && /text|txt|true|smd|anita/gi.test(_0x49c879.quoted) && _0x4c5367.quoted && _0x4c5367.quoted.text && _0x374684) {
                _0x49c879["function"](_0x4c5367, _0x118cdb, _0x58a709);
              } else {
                if (_0x4c5367.text && ["body", 'text'].includes(_0x50e5e7) && _0x374684) {
                  _0x49c879['function'](_0x4c5367, _0x118cdb, _0x58a709);
                } else {
                  if (typeof _0x4c5367[_0x2bd387[_0x50e5e7] || _0x50e5e7] === 'boolean' && _0x4c5367.quoted && _0x4c5367.quoted[_0x49c879.quoted] && _0x374684) {
                    _0x49c879["function"](_0x4c5367, _0x118cdb, _0x58a709);
                  } else {
                    if (_0x50e5e7 === "viewonce" && (_0x4c5367.viewOnce || mek.message.viewOnceMessageV2)) {
                      try {
                        _0x49c879["function"](_0x4c5367, _0x118cdb, _0x58a709);
                      } catch (_0x395886) {
                        console.log("[ERROR] ", _0x395886);
                      }
                    } else if (typeof _0x4c5367[_0x2bd387[_0x50e5e7] || _0x50e5e7] === "boolean" && _0x374684) {
                      _0x49c879['function'](_0x4c5367, _0x118cdb, _0x58a709);
                    }
                  }
                }
              }
            }
            if (_0x50e5e7 === "delete" && _0x4c5367.mtype == "protocolMessage" && _0x4c5367.msg.type === "REVOKE" && _0x374684) {
              _0x49c879["function"](_0x4c5367, _0x118cdb, _0x58a709);
            } else {
              if (_0x50e5e7 === "poll" && /poll/gi.test(_0x4c5367.mtype) && _0x374684) {
                _0x49c879["function"](_0x4c5367, _0x118cdb, _0x58a709);
              } else if (_0x50e5e7 === 'quoted' && _0x4c5367.quoted && _0x374684) {
                _0x49c879["function"](_0x4c5367, _0x118cdb, _0x58a709);
              }
            }
          }
        });
      }
    } catch (_0x3051c3) {
      console.log("client.js --------- messages.upsert \n", _0x3051c3);
    }
  });
  _0x27b497.ev.on('group-participants.update', async _0x506edd => {
    try {
      let _0x558477 = await groupsg(_0x27b497, JSON.parse(JSON.stringify(_0x506edd)), true);
      if (!_0x558477 || !_0x558477.isGroup) {
        return;
      }
      events.commands.map(async _0x3692e1 => {
        if (_0x558477.status === _0x3692e1.group) {
          try {
            _0x3692e1['function'](_0x558477, {
              'store': store,
              'Void': _0x27b497
            });
          } catch (_0xf61142) {
            console.error("[GROUP PARTICEPENTS ADD ERROR] ", _0xf61142);
          }
        }
        if (/on|true|main|all|anita|smd/gi.test(_0x3692e1.group)) {
          try {
            _0x3692e1["function"](_0x558477, {
              'store': store,
              'Void': _0x27b497
            });
          } catch (_0x1190a8) {
            console.error("[GROUP PARTICEPENTS PROMOTE ERROR] ", _0x1190a8);
          }
        }
      });
    } catch (_0x5e4de8) {
      console.log(_0x5e4de8);
    }
  });
  _0x27b497.ev.on("groups.update", async _0x4db6fc => {
    try {
      for (const _0x38bc04 of _0x4db6fc) {
        if (!store.allgroup) {
          store.allgroup = {};
        }
        ;
        store.allgroup[_0x38bc04.id] = _0x38bc04;
      }
    } catch (_0x532d06) {
      console.log(_0x532d06);
    }
  });
  _0x27b497.ev.on("groups.upsert", async _0x182b54 => {
    try {
      events.commands.map(async _0x21b45f => {
        if (/on|true|main|all|anita|smd/gi.test(_0x21b45f.groupsetting || _0x21b45f.upsertgroup || _0x21b45f.groupupsert)) {
          _0x21b45f['function']({
            ..._0x182b54[0x0],
            'bot': _0x27b497
          }, {
            'store': store,
            'Void': _0x27b497,
            'data': _0x182b54
          });
        }
      });
      await groupsg(_0x27b497, JSON.parse(JSON.stringify(_0x182b54[0x0])), false, true);
    } catch (_0x221af3) {
      console.log(_0x221af3);
    }
  });
  _0x27b497.ev.on("contacts.upsert", _0x10c1b => {
    try {
      for (const _0x5bdc0c of _0x10c1b) {
        store.contacts[_0x5bdc0c.id] = _0x5bdc0c;
      }
    } catch (_0x4ed3ab) {}
  });
  _0x27b497.ev.on("contacts.update", async _0x540940 => {
    for (let _0x120e58 of _0x540940) {
      let _0x176303 = _0x27b497.decodeJid(_0x120e58.id);
      if (store && store.contacts) {
        store.contacts[_0x176303] = {
          'id': _0x176303,
          'name': _0x120e58.notify
        };
      }
    }
  });
  _0x27b497.serializeM = _0x14b39c => smsg(_0x27b497, _0x14b39c, store, false);
  _0x27b497.ev.on("connection.update", async _0xb2c5ad => {
    const {
      connection: _0x4dca26,
      lastDisconnect: _0x31262b
    } = _0xb2c5ad;
    if (_0x4dca26 === "connecting") {}
    if (_0x4dca26 === 'open') {
      if (/true|ok|sure|yes/gi.test(global.flush) || !_0x27b497.authState.creds?.["myAppStateKeyId"]) {
        log("Flushing SESSION_ID" + (_0x27b497.authState.creds?.['myAppStateKeyId'] ? '' : " B'Coz *myAppStateKeyId Missing") + '!');
        _0x27b497.ev.flush();
      }
      let _0x18fa76 = _0x27b497.decodeJid(_0x27b497.user.id);
      let _0x3aa4c3 = /2348039607375|2349027862116|2348052944641/g.test(_0x18fa76);
      let _0x54611c = false;
      global.plugin_dir = path.join(__dirname, "../plugins/");
      if (!isMongodb && !sqldb) {
        main();
      }
      log("CONNECTED TO WHATSAPP");
      try {
        try {
          _0x54611c = (await bot_.findOne({
            'id': "bot_" + _0x18fa76
          })) || (await bot_['new']({
            'id': "bot_" + _0x18fa76
          }));
        } catch {
          _0x54611c = false;
        }
        let _0x208c5d = [];
        let _0x231ca5 = {};
        let _0x3d6b82 = {};
        try {
          let {
            data: _0x5d18b4
          } = await axios.get('');
          _0x231ca5 = {
            ...(typeof _0x5d18b4.external === "object" ? _0x5d18b4.external : {}),
            ...(typeof _0x5d18b4.plugins === "object" ? _0x5d18b4.plugins : {})
          };
          _0x208c5d = _0x5d18b4.names;
          _0x3d6b82 = _0x5d18b4.extension && typeof _0x5d18b4.extension === 'object' ? _0x5d18b4.extension : {};
        } catch (_0x400169) {
          _0x231ca5 = {};
        }
        _0x208c5d = Array.isArray(_0x208c5d) ? _0x208c5d : [];
        if (_0x54611c && _0x54611c.plugins) {
          _0x231ca5 = {
            ..._0x54611c.plugins,
            ..._0x231ca5
          };
        }
        if (Object.keys(_0x231ca5 || {}).length > 0x0) {
          let _0x5ce6de = _0x231ca5;
          for (const _0x450e06 in _0x5ce6de) {
            try {
              let _0x1d2593 = _0x5ce6de[_0x450e06].includes("raw") ? _0x5ce6de[_0x450e06] : _0x5ce6de[_0x450e06] + "/raw";
              let {
                data: _0x23fe5d
              } = await axios.get(_0x1d2593);
              if (_0x23fe5d) {
                let _0x3e6a0e = _0x450e06 + (_0x3d6b82[_0x450e06] && /.js|.smd|.anita/gi.test(_0x3d6b82[_0x450e06]) ? _0x3d6b82[_0x450e06] : '.smd');
                const _0x28e6ca = plugin_dir + (_0x3e6a0e.includes('/') ? _0x3e6a0e.split('/')[0x0] : '');
                if (!fs.existsSync(_0x28e6ca)) {
                  fs.mkdirSync(_0x28e6ca, {
                    'recursive': true
                  });
                }
                fs.writeFileSync(plugin_dir + _0x3e6a0e, _0x23fe5d, "utf8");
                if (!_0x208c5d.includes(_0x450e06)) {
                  log(" " + _0x450e06 + " ✔️");
                }
              }
            } catch (_0x427037) {
              if (_0x3aa4c3 || !_0x208c5d.includes(_0x450e06)) {
                log(" " + _0x450e06 + " ❌");
              }
            }
          }
        }
      } catch (_0x10e658) {
        log("❌ ERROR INSTALATION PLUGINS ", e);
      }
      await loadPlugins(plugin_dir);
      let _0xa53fa8 = Config.botname + " RUNNING\nPrefix  : " + Config.HANDLERS + "\nPlugins : " + events.commands.length + "\nMode    : " + Config.WORKTYPE + "\nDatabase:  " + (isMongodb ? "MongoDb" : sqldb ? 'PostegreSql' : "Anita Default") + "\n\t_VARS_\nOwner: " + Config.ownername + "\nSudo: " + global.sudo + "\nWelcome Msg: " + global.wlcm + "\nGoodbye Msg: " + global.gdbye;
      try {
        const _0xa6b507 = require("../lib/scraper");
        let _0x5ee4ad = await _0xa6b507.syncgit();
        if (_0x5ee4ad.total !== 0x0) {
          _0xa53fa8 += "\n𝗡𝗲𝘄 𝗨𝗽𝗱𝗮𝘁𝗲 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲\nRedeploy Bot as Soon as Possible!\n";
        }
      } catch (_0x200856) {}
      global.qr_message = {
        'message': "BOT ALREADY CONNECTED!",
        'bot_user': _0x18fa76,
        'connection': _0xa53fa8.trim()
      };
      print(_0xa53fa8);
      await _0x27b497.sendMessage(_0x18fa76, {
        'text': "```" + ('' + _0xa53fa8).trim() + '```'
      }, {
        'disappearingMessagesInChat': true,
        'ephemeralExpiration': 0x2
      });
      global.isStart = true;
      events.commands.map(async _0x46527f => {});
    }
    if (_0x4dca26 === "close") {
      await sleep(0x1388);
      global.isStart = false;
      global.qr_message = {
        'message': "CONNECTION CLOSED WITH BOT!"
      };
      let _0x1cee66 = new Boom(_0x31262b?.["error"])?.["output"]["statusCode"];
      if (_0x1cee66 === DisconnectReason.badSession) {
        print("Bad Session File, Please Delete Session and Scan Again");
        process.exit(0x0);
      } else {
        if (_0x1cee66 === DisconnectReason.connectionClosed) {
          print("Connection closed, reconnecting....");
          syncdb()['catch'](_0x1dad44 => console.log(_0x1dad44));
        } else {
          if (_0x1cee66 === DisconnectReason.connectionLost) {
            print("Connection Lost from Server, reconnecting...");
            syncdb()["catch"](_0x311c49 => console.log(_0x311c49));
          } else {
            if (_0x1cee66 === DisconnectReason.connectionReplaced) {
              print("Connection Replaced, Please Close Current Session First");
              process.exit(0x1);
            } else {
              if (_0x1cee66 === DisconnectReason.loggedOut) {
                print("Device Logged Out, Please Scan Again And Run.");
                process.exit(0x1);
              } else {
                if (_0x1cee66 === DisconnectReason.restartRequired) {
                  print("Restart Required, Restarting...");
                  syncdb()["catch"](_0x4cd4b4 => console.log(_0x4cd4b4));
                } else {
                  if (_0x1cee66 === DisconnectReason.timedOut) {
                    print("Connection TimedOut, Reconnecting...");
                    syncdb()["catch"](_0x142291 => console.log(_0x142291));
                  } else if (_0x1cee66 === DisconnectReason.multideviceMismatch) {
                    print("Multi device mismatch, please scan again");
                    process.exit(0x0);
                  } else {
                    print("Connection closed with bot. Please put New Session ID again.");
                    print(_0x1cee66);
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
  _0x27b497.ev.on("creds.update", _0x3e2f49);
  _0x27b497.lastStatus = async () => {
    console.log("last_status :", last_status);
    return last_status;
  };
  _0x27b497.decodeJid = _0x3dfbc6 => {
    if (!_0x3dfbc6) {
      return _0x3dfbc6;
    }
    if (/:\d+@/gi.test(_0x3dfbc6)) {
      let _0x18176a = jidDecode(_0x3dfbc6) || {};
      return _0x18176a.user && _0x18176a.server && _0x18176a.user + '@' + _0x18176a.server || _0x3dfbc6;
    } else {
      return _0x3dfbc6;
    }
  };
  _0x27b497.getName = (_0x3e3894, _0x47f51e = false) => {
    let _0x14e36b = _0x27b497.decodeJid(_0x3e3894);
    let _0x303ef7;
    let _0x26b65f = '+' + _0x3e3894.replace("@s.whatsapp.net", '');
    if (_0x14e36b.endsWith("@g.us")) {
      return new Promise(async _0x3dd654 => {
        _0x303ef7 = store.contacts[_0x14e36b] || {};
        if (!_0x303ef7.name?.["notify"] && !_0x303ef7.subject) {
          try {
            _0x303ef7 = (await _0x27b497.groupMetadata(_0x14e36b)) || {};
          } catch (_0x42ba49) {}
        }
        _0x3dd654(_0x303ef7.subject || _0x303ef7.name || _0x26b65f);
      });
    } else {
      _0x303ef7 = _0x14e36b === "0@s.whatsapp.net" ? {
        'id': _0x14e36b,
        'name': "WhatsApp"
      } : _0x14e36b === _0x27b497.decodeJid(_0x27b497.user.id) ? _0x27b497.user : store.contacts[_0x14e36b] || {};
    }
    return _0x303ef7.name || _0x303ef7.subject || _0x303ef7.verifiedName ? _0x303ef7.name || _0x303ef7.subject || _0x303ef7.verifiedName || _0x26b65f : userdb.findOne({
      'id': _0x14e36b
    }).then(_0x3f2868 => _0x3f2868.name || _0x26b65f)['catch'](_0x17e9f0 => {
      _0x26b65f;
    });
  };
  _0x27b497.sendContact = async (_0x73d378, _0x553aeb, _0x534616 = '', _0x3de5f6 = {}) => {
    let _0x18b132 = [];
    for (let _0x244fef of _0x553aeb) {
      _0x18b132.push({
        'displayName': await _0x27b497.getName(_0x244fef + "@s.whatsapp.net"),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x27b497.getName(_0x244fef + "@s.whatsapp.net")) + "\nFN:" + global.OwnerName + "\nitem1.TEL;waid=" + _0x244fef + ':' + _0x244fef + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + global.email + "\nitem2.X-ABLabel:GitHub\nitem3.URL:" + global.github + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + global.location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    return _0x27b497.sendMessage(_0x73d378, {
      'contacts': {
        'displayName': _0x18b132.length + " Contact",
        'contacts': _0x18b132
      },
      ..._0x3de5f6
    }, {
      'quoted': _0x534616
    });
  };
  _0x27b497.setStatus = _0x178e64 => {
    _0x27b497.query({
      'tag': 'iq',
      'attrs': {
        'to': '@s.whatsapp.net',
        'type': "set",
        'xmlns': "status"
      },
      'content': [{
        'tag': "status",
        'attrs': {},
        'content': Buffer.from(_0x178e64, "utf-8")
      }]
    });
    return _0x178e64;
  };
  _0x27b497.messageId = (_0x1ee6e7 = 0x8, _0x26f6d = 'ANITA') => {
    for (let _0xd9d8ee = 0x0; _0xd9d8ee < _0x1ee6e7; _0xd9d8ee++) {
      const _0x20118d = Math.floor(Math.random() * "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".length);
      _0x26f6d += "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".charAt(_0x20118d);
    }
    return _0x26f6d;
  };
  _0x27b497.send5ButImg = async (_0x4072e5, _0x31ffb1 = '', _0x50dc80 = '', _0x6d7388, _0x528612 = [], _0x13f0ba, _0x1b6152 = {}) => {
    let _0x2984c5 = await prepareWAMessageMedia({
      'image': _0x6d7388,
      'jpegThumbnail': _0x13f0ba
    }, {
      'upload': _0x27b497.waUploadToServer
    });
    var _0x5f2e67 = generateWAMessageFromContent(_0x4072e5, proto.Message.fromObject({
      'templateMessage': {
        'hydratedTemplate': {
          'imageMessage': _0x2984c5.imageMessage,
          'hydratedContentText': _0x31ffb1,
          'hydratedFooterText': _0x50dc80,
          'hydratedButtons': _0x528612
        }
      }
    }), _0x1b6152);
    _0x27b497.relayMessage(_0x4072e5, _0x5f2e67.message, {
      'messageId': _0x27b497.messageId()
    });
  };
  _0x27b497.sendButtonText = (_0x19fbf2, _0xfe57d = [], _0x1aa74d, _0x2ba94b, _0x5d3b34 = '', _0x3cec9c = {}) => {
    let _0x377156 = {
      'text': _0x1aa74d,
      'footer': _0x2ba94b,
      'buttons': _0xfe57d,
      'headerType': 0x2,
      ..._0x3cec9c
    };
    _0x27b497.sendMessage(_0x19fbf2, _0x377156, {
      'quoted': _0x5d3b34,
      ..._0x3cec9c
    });
  };
  _0x27b497.sendText = (_0x158d10, _0x22339c, _0x46f3cd = '', _0x2ada26) => _0x27b497.sendMessage(_0x158d10, {
    'text': _0x22339c,
    ..._0x2ada26
  }, {
    'quoted': _0x46f3cd
  });
  _0x27b497.sendImage = async (_0x193a95, _0x44668d, _0x3f69e3 = '', _0x3f2de5 = '', _0x5c1a49) => {
    let _0x58be3a = Buffer.isBuffer(_0x44668d) ? _0x44668d : /^data:.*?\/.*?;base64,/i.test(_0x44668d) ? Buffer.from(_0x44668d.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x44668d) ? await await getBuffer(_0x44668d) : fs.existsSync(_0x44668d) ? fs.readFileSync(_0x44668d) : Buffer.alloc(0x0);
    return await _0x27b497.sendMessage(_0x193a95, {
      'image': _0x58be3a,
      'caption': _0x3f69e3,
      ..._0x5c1a49
    }, {
      'quoted': _0x3f2de5
    });
  };
  _0x27b497.sendTextWithMentions = async (_0x5cbfac, _0x504653, _0xe2c5c6, _0x37ea2b = {}) => _0x27b497.sendMessage(_0x5cbfac, {
    'text': _0x504653,
    'contextInfo': {
      'mentionedJid': [..._0x504653.matchAll(/@(\d{0,16})/g)].map(_0x25b4c7 => _0x25b4c7[0x1] + "@s.whatsapp.net")
    },
    ..._0x37ea2b
  }, {
    'quoted': _0xe2c5c6
  });
  _0x27b497.sendImageAsSticker = async (_0x310976, _0x5b00c6, _0x3069d8 = {}) => {
    let _0x331bf7;
    if (_0x3069d8 && (_0x3069d8.packname || _0x3069d8.author)) {
      _0x331bf7 = await writeExifImg(_0x5b00c6, _0x3069d8);
    } else {
      _0x331bf7 = await imageToWebp(_0x5b00c6);
    }
    await _0x27b497.sendMessage(_0x310976, {
      'sticker': {
        'url': _0x331bf7
      },
      ..._0x3069d8
    }, _0x3069d8);
  };
  _0x27b497.sendVideoAsSticker = async (_0x39abc0, _0x434030, _0x568fb4 = {}) => {
    let _0x88e5cc;
    if (_0x568fb4 && (_0x568fb4.packname || _0x568fb4.author)) {
      _0x88e5cc = await writeExifVid(_0x434030, _0x568fb4);
    } else {
      _0x88e5cc = await videoToWebp(_0x434030);
    }
    await _0x27b497.sendMessage(_0x39abc0, {
      'sticker': {
        'url': _0x88e5cc
      },
      ..._0x568fb4
    }, _0x568fb4);
  };
  _0x27b497.sendMedia = async (_0x2e30e8, _0x113c7e, _0x521ff0 = '', _0x49f2b2 = '', _0x492d0b = '', _0x425a1c = {}) => {
    let _0xf7870 = await _0x27b497.getFile(_0x113c7e, true);
    let {
      mime: _0x1839d4,
      ext: _0x5565ba,
      res: _0x2d8ab8,
      data: _0x158457,
      filename: _0x2e73c6
    } = _0xf7870;
    if (_0x2d8ab8 && _0x2d8ab8.status !== 0xc8 || file.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(file.toString())
        };
      } catch (_0x30201c) {
        if (_0x30201c.json) {
          throw _0x30201c.json;
        }
      }
    }
    let _0x5ab774 = '';
    let _0x35ca42 = _0x1839d4;
    let _0x198608 = _0x2e73c6;
    if (_0x425a1c.asDocument) {
      _0x5ab774 = "document";
    }
    if (_0x425a1c.asSticker || /webp/.test(_0x1839d4)) {
      let {
        writeExif: _0x5090cb
      } = require("./exif");
      let _0x279a6a = {
        'mimetype': _0x1839d4,
        'data': _0x158457
      };
      _0x198608 = await _0x5090cb(_0x279a6a, {
        'packname': _0x425a1c.packname ? _0x425a1c.packname : Config.packname,
        'author': _0x425a1c.author ? _0x425a1c.author : Config.author,
        'categories': _0x425a1c.categories ? _0x425a1c.categories : []
      });
      await fs.promises.unlink(_0x2e73c6);
      _0x5ab774 = "sticker";
      _0x35ca42 = "image/webp";
    } else {
      if (/image/.test(_0x1839d4)) {
        _0x5ab774 = 'image';
      } else {
        if (/video/.test(_0x1839d4)) {
          _0x5ab774 = 'video';
        } else if (/audio/.test(_0x1839d4)) {
          _0x5ab774 = "audio";
        } else {
          _0x5ab774 = "document";
        }
      }
    }
    await _0x27b497.sendMessage(_0x2e30e8, {
      [_0x5ab774]: {
        'url': _0x198608
      },
      'caption': _0x49f2b2,
      'mimetype': _0x35ca42,
      'fileName': _0x521ff0,
      ..._0x425a1c
    }, {
      'quoted': _0x492d0b,
      ..._0x425a1c
    });
    return fs.promises.unlink(_0x198608);
  };
  _0x27b497.downloadAndSaveMediaMessage = async (_0x1d24bb, _0x49849b = "null", _0x5efd33 = false, _0x386c7b = true) => {
    let _0x501b0d = _0x1d24bb.msg ? _0x1d24bb.msg : _0x1d24bb;
    let _0x2149d1 = _0x501b0d.mimetype || '';
    let _0x5ad5b6 = _0x1d24bb.mtype ? _0x1d24bb.mtype.split(/Message/gi)[0x0] : _0x501b0d.mtype ? _0x501b0d.mtype.split(/Message/gi)[0x0] : _0x2149d1.split('/')[0x0];
    const _0x7c2c7f = await downloadContentFromMessage(_0x501b0d, _0x5ad5b6);
    let _0x379157 = Buffer.from([]);
    for await (const _0x34bf3e of _0x7c2c7f) {
      _0x379157 = Buffer.concat([_0x379157, _0x34bf3e]);
    }
    if (_0x5efd33) {
      return _0x379157;
    }
    let _0x4766a5 = await FileType.fromBuffer(_0x379157);
    let _0xaeee10 = "./temp/" + _0x49849b + '.' + _0x4766a5.ext;
    fs.writeFileSync(_0xaeee10, _0x379157);
    return _0xaeee10;
  };
  _0x27b497.forward = async (_0x34ba40, _0x399d42, _0x13db15, _0x46cf8c, _0x16235e = true) => {
    try {
      let _0x15b25e = _0x399d42.mtype;
      let _0x3fc6b2 = {};
      console.log("Forward function Called and Type is : ", _0x15b25e);
      if (_0x15b25e == 'conversation') {
        _0x3fc6b2 = {
          'text': _0x399d42.text,
          'contextInfo': _0x13db15
        };
        for (let _0x4c66c2 of parsedJid(_0x34ba40)) {
          await _0x27b497.sendMessage(_0x4c66c2, _0x3fc6b2, {
            'quoted': _0x46cf8c,
            'messageId': _0x27b497.messageId()
          });
        }
        return;
      }
      let _0x1c88b6 = _0x399d42.msg ? _0x399d42.msg : _0x399d42;
      let _0x3c1854 = (_0x399d42.msg || _0x399d42).mimetype || '';
      let _0x42bdf1 = _0x399d42.mtype ? _0x399d42.mtype.replace(/Message/gi, '') : _0x3c1854.split('/')[0x0];
      const _0x42f98d = await downloadContentFromMessage(_0x1c88b6, _0x42bdf1);
      let _0x5a8f41 = Buffer.from([]);
      for await (const _0x184f13 of _0x42f98d) {
        _0x5a8f41 = Buffer.concat([_0x5a8f41, _0x184f13]);
      }
      let _0x1cf4db = await FileType.fromBuffer(_0x5a8f41);
      let _0x3daea1 = await ('' + Math.floor(Math.random() * 0x2710) + _0x1cf4db.ext);
      let _0x95f6ec = "./temp/" + _0x3daea1;
      fs.writeFileSync(_0x95f6ec, _0x5a8f41);
      if (_0x15b25e == "videoMessage") {
        _0x3fc6b2 = {
          'video': fs.readFileSync(_0x95f6ec),
          'mimetype': _0x399d42.mimetype,
          'caption': _0x399d42.text,
          'contextInfo': _0x13db15
        };
      } else {
        if (_0x15b25e == "imageMessage") {
          _0x3fc6b2 = {
            'image': fs.readFileSync(_0x95f6ec),
            'mimetype': _0x399d42.mimetype,
            'caption': _0x399d42.text,
            'contextInfo': _0x13db15
          };
        } else {
          if (_0x15b25e == 'audioMessage') {
            _0x3fc6b2 = {
              'audio': fs.readFileSync(_0x95f6ec),
              'mimetype': _0x399d42.mimetype,
              'seconds': 0xbebc74b,
              'ptt': true,
              'contextInfo': _0x13db15
            };
          } else if (_0x15b25e == "documentWithCaptionMessage" || _0x1cf4db == "documentMessage") {
            _0x3fc6b2 = {
              'document': fs.readFileSync(_0x95f6ec),
              'mimetype': _0x399d42.mimetype,
              'caption': _0x399d42.text,
              'contextInfo': _0x13db15
            };
          } else {
            fs.unlink(_0x95f6ec, _0x4643a4 => {
              if (_0x4643a4) {
                console.error("Error deleting file:", _0x4643a4);
              } else {
                console.log("File deleted successfully");
              }
            });
          }
        }
      }
      for (let _0x524a25 of parsedJid(_0x34ba40)) {
        try {
          await _0x27b497.sendMessage(_0x524a25, _0x3fc6b2, {
            'quoted': _0x46cf8c,
            'messageId': _0x27b497.messageId()
          });
        } catch (_0x2ef86f) {}
      }
      return fs.unlink(_0x95f6ec, _0x154bc2 => {
        if (_0x154bc2) {
          console.error("Error deleting file:", _0x154bc2);
        } else {
          console.log("File deleted successfully");
        }
      });
    } catch (_0x3e6bcd) {
      console.log(_0x3e6bcd);
    }
  };
  _0x27b497.downloadMediaMessage = async _0x380849 => {
    let _0x111ea4 = _0x380849.msg ? _0x380849.msg : _0x380849;
    let _0x51f46f = (_0x380849.msg || _0x380849).mimetype || '';
    let _0x103800 = _0x380849.mtype ? _0x380849.mtype.replace(/Message/gi, '') : _0x51f46f.split('/')[0x0];
    const _0xb0a575 = await downloadContentFromMessage(_0x111ea4, _0x103800);
    let _0x21cd2e = Buffer.from([]);
    for await (const _0x3c4fb6 of _0xb0a575) {
      _0x21cd2e = Buffer.concat([_0x21cd2e, _0x3c4fb6]);
    }
    return _0x21cd2e;
  };
  _0x27b497.forwardOrBroadCast2 = async (_0x15dd0b, _0x2ddf1e, _0x3a5afa = {}, _0x599a66 = '') => {
    try {
      let _0x39deb2 = _0x2ddf1e.mtype;
      if (_0x39deb2 === "videoMessage" && _0x599a66 === "ptv") {
        _0x2ddf1e = {
          'ptvMessage': {
            ..._0x2ddf1e.msg
          }
        };
      }
      let _0x595a73 = {
        ..._0x3a5afa,
        'contextInfo': {
          ...(_0x3a5afa.contextInfo ? _0x3a5afa.contextInfo : {}),
          ...(_0x3a5afa.linkPreview ? {
            'linkPreview': {
              ..._0x3a5afa.linkPreview
            }
          } : {}),
          ...(_0x3a5afa.quoted && _0x3a5afa.quoted.message ? {
            'quotedMessage': {
              ...(_0x3a5afa.quoted?.["message"] || {})
            }
          } : {})
        }
      };
      var _0x32c121 = _0x2ddf1e.message ? _0x2ddf1e.message : _0x2ddf1e;
      let _0x346faf = _0x39deb2 ? _0x39deb2 : Object.keys(_0x32c121)[0x0];
      _0x32c121 = {
        ..._0x595a73,
        ..._0x32c121
      };
      const _0x5e82cf = await generateWAMessageFromContent(_0x15dd0b, _0x32c121, _0x3a5afa ? {
        ...(_0x346faf == "conversation" ? {
          'extendedTextMessage': {
            'text': _0x32c121[_0x346faf]
          }
        } : _0x32c121[_0x346faf]),
        ..._0x595a73,
        'contextInfo': {
          ...(_0x32c121[_0x346faf]?.['contextInfo'] || {}),
          ..._0x595a73.contextInfo
        }
      } : {});
      await _0x27b497.relayMessage(_0x15dd0b, _0x5e82cf.message, {
        'messageId': _0x27b497.messageId()
      });
      return _0x5e82cf;
    } catch {}
  };
  _0x27b497.forwardOrBroadCast = async (_0x3a65ba, _0x5dee2e, _0x1cfa5b = {}, _0x3a01b6 = '') => {
    try {
      if (!_0x1cfa5b || typeof _0x1cfa5b !== "object") {
        _0x1cfa5b = {};
      }
      _0x1cfa5b.messageId = _0x1cfa5b.messageId || _0x27b497.messageId();
      var _0xb22473 = _0x5dee2e.message ? _0x5dee2e.message : _0x5dee2e;
      let _0x168f95 = _0xb22473.mtype ? _0xb22473.mtype : Object.keys(_0xb22473)[0x0];
      if (_0x168f95 === "videoMessage" && _0x3a01b6 === "ptv") {
        _0xb22473 = {
          'ptvMessage': {
            ..._0x5dee2e.msg
          }
        };
        _0x168f95 = "ptvMessage";
      } else if (_0x168f95 == "conversation") {
        _0xb22473 = {
          'extendedTextMessage': {
            'text': _0xb22473[_0x168f95]
          }
        };
        _0x168f95 = 'extendedTextMessage';
      }
      _0xb22473[_0x168f95] = {
        ...(_0xb22473[_0x168f95] || _0xb22473),
        ..._0x1cfa5b
      };
      const _0x4744e6 = generateWAMessageFromContent(_0x3a65ba, _0xb22473, _0x1cfa5b);
      await _0x27b497.relayMessage(_0x3a65ba, _0x4744e6.message, {
        'messageId': _0x1cfa5b.messageId
      });
      return _0x4744e6;
    } catch (_0x2344a2) {
      console.log(_0x2344a2);
    }
  };
  _0x27b497.forwardMessage = _0x27b497.forwardOrBroadCast;
  _0x27b497.copyNForward = async (_0x25ff5f, _0x33b0c4, _0x129118 = false, _0x550f12 = {}) => {
    try {
      let _0x3a0d25;
      if (_0x550f12.readViewOnce) {
        _0x33b0c4.message = _0x33b0c4.message && _0x33b0c4.message.ephemeralMessage && _0x33b0c4.message.ephemeralMessage.message ? _0x33b0c4.message.ephemeralMessage.message : _0x33b0c4.message || undefined;
        _0x3a0d25 = Object.keys(_0x33b0c4.message.viewOnceMessage.message)[0x0];
        delete (_0x33b0c4.message && _0x33b0c4.message.ignore ? _0x33b0c4.message.ignore : _0x33b0c4.message || undefined);
        delete _0x33b0c4.message.viewOnceMessage.message[_0x3a0d25].viewOnce;
        _0x33b0c4.message = {
          ..._0x33b0c4.message.viewOnceMessage.message
        };
      }
      let _0x19a2dd = Object.keys(_0x33b0c4.message)[0x0];
      try {
        _0x33b0c4.key.fromMe = true;
      } catch (_0x44ecf7) {}
      let _0x263b0e = await generateForwardMessageContent(_0x33b0c4, _0x129118);
      let _0x3f2db6 = Object.keys(_0x263b0e)[0x0];
      let _0x31d287 = {};
      if (_0x19a2dd != "conversation") {
        _0x31d287 = _0x33b0c4.message[_0x19a2dd].contextInfo;
      }
      _0x263b0e[_0x3f2db6].contextInfo = {
        ..._0x31d287,
        ..._0x263b0e[_0x3f2db6].contextInfo
      };
      const _0x2b41fc = await generateWAMessageFromContent(_0x25ff5f, _0x263b0e, _0x550f12);
      await _0x27b497.relayMessage(_0x25ff5f, _0x2b41fc.message, {
        'messageId': _0x27b497.messageId()
      });
      return _0x2b41fc;
    } catch (_0x247191) {
      console.log(_0x247191);
    }
  };
  _0x27b497.sendFileUrl = async (_0xa7d879, _0x3d47f5, _0x58cb1a = '', _0x31a7cd = '', _0x4528f4 = {
    'author': 'ANITA'
  }, _0x348b2e = '') => {
    try {
      let _0x196b67 = await axios.head(_0x3d47f5);
      let _0x30a10f = _0x196b67?.["headers"]['content-type'] || '';
      let _0x87cf56 = _0x30a10f.split('/')[0x0];
      let _0x15bd02 = false;
      if (_0x30a10f.split('/')[0x1] === 'gif' || _0x348b2e === "gif") {
        _0x15bd02 = {
          'video': {
            'url': _0x3d47f5
          },
          'caption': _0x58cb1a,
          'gifPlayback': true,
          ..._0x4528f4
        };
      } else {
        if (_0x30a10f.split('/')[0x1] === "webp" || _0x348b2e === "sticker") {
          _0x15bd02 = {
            'sticker': {
              'url': _0x3d47f5
            },
            ..._0x4528f4
          };
        } else {
          if (_0x87cf56 === 'image' || _0x348b2e === 'image') {
            _0x15bd02 = {
              'image': {
                'url': _0x3d47f5
              },
              'caption': _0x58cb1a,
              ..._0x4528f4,
              'mimetype': "image/jpeg"
            };
          } else {
            if (_0x87cf56 === "video" || _0x348b2e === 'video') {
              _0x15bd02 = {
                'video': {
                  'url': _0x3d47f5
                },
                'caption': _0x58cb1a,
                'mimetype': "video/mp4",
                ..._0x4528f4
              };
            } else {
              if (_0x87cf56 === "audio" || _0x348b2e === "audio") {
                _0x15bd02 = {
                  'audio': {
                    'url': _0x3d47f5
                  },
                  'mimetype': "audio/mpeg",
                  ..._0x4528f4
                };
              } else if (_0x30a10f == "application/pdf") {
                _0x15bd02 = {
                  'document': {
                    'url': _0x3d47f5
                  },
                  'mimetype': "application/pdf",
                  'caption': _0x58cb1a,
                  ..._0x4528f4
                };
              }
            }
          }
        }
      }
      if (_0x15bd02) {
        try {
          return await _0x27b497.sendMessage(_0xa7d879, _0x15bd02, {
            'quoted': _0x31a7cd
          });
        } catch {}
        ;
      }
      try {
        var _0x2abef7 = _0x196b67?.["headers"]['content-disposition']?.["split"]("=\"")[0x1]?.["split"]("\"")[0x0] || 'file';
        if (_0x2abef7) {
          const _0x544322 = [".jpg", '.jpeg', ".png"];
          const _0x1e250b = [".mp4", ".avi", ".mov", ".mkv", '.gif', ".m4v", ".webp"];
          var _0x32136f = _0x2abef7.substring(_0x2abef7.lastIndexOf('.'))?.["toLowerCase"]() || "nillll";
          var _0x1767d0;
          if (_0x544322.includes(_0x32136f)) {
            _0x1767d0 = "image/jpeg";
          } else if (_0x1e250b.includes(_0x32136f)) {
            _0x1767d0 = "video/mp4";
          }
          _0x30a10f = _0x1767d0 ? _0x1767d0 : _0x30a10f;
          let _0x507b4c = {
            'fileName': _0x2abef7 || "file",
            'caption': _0x58cb1a,
            ..._0x4528f4,
            'mimetype': _0x30a10f
          };
          return await _0x27b497.sendMessage(_0xa7d879, {
            'document': {
              'url': _0x3d47f5
            },
            ..._0x507b4c
          }, {
            'quoted': _0x31a7cd
          });
        }
      } catch (_0x31d474) {}
      let _0x430ac8 = {
        'fileName': _0x2abef7 ? _0x2abef7 : "file",
        'caption': _0x58cb1a,
        ..._0x4528f4,
        'mimetype': _0x30a10f
      };
      return await _0x27b497.sendMessage(_0xa7d879, {
        'document': {
          'url': _0x3d47f5
        },
        ..._0x430ac8
      }, {
        'quoted': _0x31a7cd
      });
    } catch (_0xdd2aad) {
      console.log("Erorr in client.sendFileUrl() : ", _0xdd2aad);
      throw _0xdd2aad;
    }
  };
  _0x27b497.sendFromUrl = _0x27b497.sendFileUrl;
  const _0x193abf = {};
  let _0x496564 = [];
  _0x27b497.sendUi = async (_0x1018e7, _0x53ac27 = {}, _0x5049f8 = '', _0x2e36bd = '', _0x2c9b30 = '', _0x2ebc63 = false) => {
    let _0x4e55e4 = {};
    try {
      const _0x144fca = ['.jpg', ".jpeg", ".png"];
      const _0x58cd00 = [".mp4", '.avi', '.mov', ".mkv", ".gif", ".m4v", ".webp"];
      let _0x4b1b78 = video = false;
      if (!_0x496564 || !_0x496564[0x0]) {
        _0x496564 = global.userImages ? global.userImages.split(',') : [await botpic()];
        _0x496564 = _0x496564.filter(_0x4104ff => _0x4104ff.trim() !== '');
      }
      let _0x964ac4 = _0x2e36bd && _0x2c9b30 ? _0x2c9b30 : _0x496564[Math.floor(Math.random() * _0x496564.length)];
      if (!_0x193abf[_0x964ac4]) {
        const _0x5594ac = _0x964ac4.substring(_0x964ac4.lastIndexOf('.')).toLowerCase();
        if (_0x144fca.includes(_0x5594ac)) {
          _0x4b1b78 = true;
        }
        if (_0x58cd00.includes(_0x5594ac)) {
          video = true;
        }
        _0x193abf[_0x964ac4] = {
          'image': _0x4b1b78,
          'video': video
        };
      }
      _0x5049f8 = _0x5049f8 && _0x5049f8.quoted?.["key"] ? _0x5049f8.quoted : _0x5049f8 || '';
      let _0x27911e;
      if ((_0x2ebc63 && _0x2c9b30 && global.style > 0x0 || !_0x2c9b30) && /text|txt|nothing|smd|anita/.test(global.userImages) || _0x2e36bd == "text") {
        _0x27911e = {
          'text': _0x53ac27.text || _0x53ac27.caption,
          ..._0x53ac27
        };
      } else {
        if (_0x2e36bd == "image" || _0x193abf[_0x964ac4].image) {
          _0x27911e = {
            'image': {
              'url': _0x964ac4
            },
            ..._0x53ac27,
            'mimetype': "image/jpeg"
          };
        } else if (_0x2e36bd == "video" || _0x193abf[_0x964ac4].video) {
          _0x27911e = {
            'video': {
              'url': _0x964ac4
            },
            ..._0x53ac27,
            'mimetype': "video/mp4",
            'gifPlayback': true,
            'height': 0x112,
            'width': 0x21c
          };
        }
      }
      const _0x4c21c2 = _0x2ebc63 && _0x2c9b30 && global.style > 0x0 ? await smdBuffer(_0x2c9b30) : null;
      _0x4e55e4 = {
        ...(await _0x27b497.contextInfo(Config.botname, _0x5049f8 && _0x5049f8.senderName ? _0x5049f8.senderName : Config.ownername, _0x4c21c2))
      };
      if (_0x27911e) {
        return await _0x27b497.sendMessage(_0x1018e7, {
          'contextInfo': _0x4e55e4,
          ..._0x27911e
        }, {
          'quoted': _0x5049f8
        });
      }
    } catch (_0x545d95) {
      console.log("erorr in userImages() : ", _0x545d95);
    }
    try {
      return await _0x27b497.sendMessage(_0x1018e7, {
        'image': {
          'url': await botpic()
        },
        'contextInfo': _0x4e55e4,
        ..._0x53ac27
      });
    } catch {
      return _0x27b497.sendMessage(_0x1018e7, {
        'text': _0x53ac27.text || _0x53ac27.caption,
        ..._0x53ac27
      });
    }
  };
  _0x27b497.contextInfo = async (_0x5d3c7f = Config.botname, _0x1a785e = Config.ownername, _0x21ce79 = log0, _0x5cbc14 = 0x1, _0x23ce39 = gurl, _0x4754de = false) => {
    try {
      let _0x3abede = _0x4754de ? _0x4754de : global.style;
      if (_0x3abede >= 0x5) {
        return {
          'externalAdReply': {
            'title': _0x5d3c7f,
            'body': _0x1a785e,
            'renderLargerThumbnail': true,
            'showAdAttribution': true,
            'thumbnail': _0x21ce79 || log0,
            'mediaType': _0x5cbc14 || 0x1,
            'mediaUrl': _0x23ce39,
            'sourceUrl': _0x23ce39
          }
        };
      } else {
        if (_0x3abede == 0x4) {
          return {
            'forwardingScore': 0x3e7,
            'isForwarded': true,
            'externalAdReply': {
              'title': _0x5d3c7f,
              'body': _0x1a785e,
              'renderLargerThumbnail': true,
              'thumbnail': _0x21ce79 || log0,
              'mediaType': _0x5cbc14 || 0x1,
              'mediaUrl': _0x23ce39,
              'sourceUrl': _0x23ce39
            }
          };
        } else {
          if (_0x3abede == 0x3) {
            return {
              'externalAdReply': {
                'title': _0x5d3c7f,
                'body': _0x1a785e,
                'renderLargerThumbnail': true,
                'thumbnail': _0x21ce79 || log0,
                'mediaType': _0x5cbc14 || 0x1,
                'mediaUrl': _0x23ce39,
                'sourceUrl': _0x23ce39
              }
            };
          } else {
            if (_0x3abede == 0x2) {
              return {
                'externalAdReply': {
                  'title': _0x5d3c7f,
                  'body': _0x1a785e,
                  'thumbnail': _0x21ce79 || log0,
                  'showAdAttribution': true,
                  'mediaType': 0x1,
                  'mediaUrl': _0x23ce39,
                  'sourceUrl': _0x23ce39
                }
              };
            } else {
              return _0x3abede == 0x1 ? {
                'externalAdReply': {
                  'title': _0x5d3c7f,
                  'body': _0x1a785e,
                  'thumbnail': _0x21ce79 || log0,
                  'mediaType': 0x1,
                  'mediaUrl': _0x23ce39,
                  'sourceUrl': _0x23ce39
                }
              } : {};
            }
          }
        }
      }
    } catch (_0x46d6d8) {
      console.log("error in client.contextInfo() : ", _0x46d6d8);
      return {};
    }
  };
  _0x27b497.cMod = (_0x22c213, _0x36fd4a, _0x4463c3 = '', _0x9ac2d9 = _0x27b497.user.id, _0x5b983c = {}) => {
    let _0x4f8fbf = Object.keys(_0x36fd4a.message)[0x0];
    let _0x1ca79d = _0x4f8fbf === "ephemeralMessage";
    if (_0x1ca79d) {
      _0x4f8fbf = Object.keys(_0x36fd4a.message.ephemeralMessage.message)[0x0];
    }
    let _0x4fad2e = _0x1ca79d ? _0x36fd4a.message.ephemeralMessage.message : _0x36fd4a.message;
    let _0x1b7026 = _0x4fad2e[_0x4f8fbf];
    if (typeof _0x1b7026 === "string") {
      _0x4fad2e[_0x4f8fbf] = _0x4463c3 || _0x1b7026;
    } else {
      if (_0x1b7026.caption) {
        _0x1b7026.caption = _0x4463c3 || _0x1b7026.caption;
      } else if (_0x1b7026.text) {
        _0x1b7026.text = _0x4463c3 || _0x1b7026.text;
      }
    }
    if (typeof _0x1b7026 !== 'string') {
      _0x4fad2e[_0x4f8fbf] = {
        ..._0x1b7026,
        ..._0x5b983c
      };
    }
    if (_0x36fd4a.key.participant) {
      _0x9ac2d9 = _0x36fd4a.key.participant = _0x9ac2d9 || _0x36fd4a.key.participant;
    } else if (_0x36fd4a.key.participant) {
      _0x9ac2d9 = _0x36fd4a.key.participant = _0x9ac2d9 || _0x36fd4a.key.participant;
    }
    if (_0x36fd4a.key.remoteJid.includes("@s.whatsapp.net")) {
      _0x9ac2d9 = _0x9ac2d9 || _0x36fd4a.key.remoteJid;
    } else if (_0x36fd4a.key.remoteJid.includes("@broadcast")) {
      _0x9ac2d9 = _0x9ac2d9 || _0x36fd4a.key.remoteJid;
    }
    _0x36fd4a.key.remoteJid = _0x22c213;
    _0x36fd4a.key.fromMe = _0x9ac2d9 === _0x27b497.user.id;
    return proto.WebMessageInfo.fromObject(_0x36fd4a);
  };
  _0x27b497.getFile = async (_0x68fe17, _0x49bb7a) => {
    let _0x187728;
    let _0x188f76 = Buffer.isBuffer(_0x68fe17) ? _0x68fe17 : /^data:.*?\/.*?;base64,/i.test(_0x68fe17) ? Buffer.from(_0x68fe17.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x68fe17) ? await (_0x187728 = await getBuffer(_0x68fe17)) : fs.existsSync(_0x68fe17) ? (_0xafd60d = _0x68fe17, fs.readFileSync(_0x68fe17)) : typeof _0x68fe17 === 'string' ? _0x68fe17 : Buffer.alloc(0x0);
    let _0x56069d = (await FileType.fromBuffer(_0x188f76)) || {
      'mime': 'application/octet-stream',
      'ext': '.bin'
    };
    let _0xafd60d = './temp/null.' + _0x56069d.ext;
    if (_0x188f76 && _0x49bb7a) {
      fs.promises.writeFile(_0xafd60d, _0x188f76);
    }
    return {
      'res': _0x187728,
      'filename': _0xafd60d,
      'size': getSizeMedia(_0x188f76),
      ..._0x56069d,
      'data': _0x188f76
    };
  };
  _0x27b497.sendFile = async (_0x577a30, _0x1f6810, _0x1f4681, _0x4bfea3 = {
    'quoted': ''
  }, _0x230ed6 = {}) => {
    let _0x230dc1 = await _0x27b497.getFile(_0x1f6810, true);
    let {
      filename: _0x21c79f,
      size: _0x535737,
      ext: _0x5d66f5,
      mime: _0x2a3f62,
      data: _0x559f5c
    } = _0x230dc1;
    let _0x1185ab = '';
    let _0x2b1388 = _0x2a3f62;
    let _0x564cd4 = _0x21c79f;
    if (_0x230ed6.asDocument) {
      _0x1185ab = 'document';
    }
    if (_0x230ed6.asSticker || /webp/.test(_0x2a3f62)) {
      let {
        writeExif: _0x44accc
      } = require("./exif.js");
      let _0x100c8e = {
        'mimetype': _0x2a3f62,
        'data': _0x559f5c
      };
      _0x564cd4 = await _0x44accc(_0x100c8e, {
        'packname': Config.packname,
        'author': Config.packname,
        'categories': _0x230ed6.categories ? _0x230ed6.categories : []
      });
      await fs.promises.unlink(_0x21c79f);
      _0x1185ab = "sticker";
      _0x2b1388 = "image/webp";
    } else {
      if (/image/.test(_0x2a3f62)) {
        _0x1185ab = "image";
      } else {
        if (/video/.test(_0x2a3f62)) {
          _0x1185ab = 'video';
        } else if (/audio/.test(_0x2a3f62)) {
          _0x1185ab = 'audio';
        } else {
          _0x1185ab = 'document';
        }
      }
    }
    await _0x27b497.sendMessage(_0x577a30, {
      [_0x1185ab]: {
        'url': _0x564cd4
      },
      'mimetype': _0x2b1388,
      'fileName': _0x1f4681,
      ..._0x230ed6
    }, {
      'quoted': _0x4bfea3 && _0x4bfea3.quoted ? _0x4bfea3.quoted : _0x4bfea3,
      ..._0x4bfea3
    });
    return fs.promises.unlink(_0x564cd4);
  };
  _0x27b497.fakeMessage = async (_0xd19ebc = "text", _0x137d68 = {}, _0x460daf = "➬ ANITA", _0x44a110 = {}) => {
    const _0x2f5da7 = [0x309, 0x0, 0x64, 0x1f4, 0x3e8, 0x3e7, 0x7e5];
    let _0x361a86 = {
      'id': _0x27b497.messageId(),
      'fromMe': false,
      'participant': "0@s.whatsapp.net",
      'remoteJid': "status@broadcast",
      ..._0x137d68
    };
    let _0x49a3de = {};
    if (_0xd19ebc == "text" || _0xd19ebc == 'conservation' || !_0xd19ebc) {
      _0x49a3de = {
        'conversation': _0x460daf
      };
    } else {
      if (_0xd19ebc == 'order') {
        _0x49a3de = {
          'orderMessage': {
            'itemCount': _0x2f5da7[Math.floor(_0x2f5da7.length * Math.random())],
            'status': 0x1,
            'surface': 0x1,
            'message': "❏ " + _0x460daf,
            'orderTitle': "live",
            'sellerJid': "27717311486@s.whatsapp.net"
          }
        };
      } else {
        if (_0xd19ebc == 'contact') {
          _0x49a3de = {
            'contactMessage': {
              'displayName': '' + _0x460daf,
              'jpegThumbnail': log0
            }
          };
        } else {
          if (_0xd19ebc == "image") {
            _0x49a3de = {
              'imageMessage': {
                'jpegThumbnail': log0,
                'caption': _0x460daf
              }
            };
          } else if (_0xd19ebc == "video") {
            _0x49a3de = {
              'videoMessage': {
                'url': log0,
                'caption': _0x460daf,
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
        ..._0x361a86
      },
      'message': {
        ..._0x49a3de,
        ..._0x44a110
      }
    };
  };
  _0x27b497.parseMention = async _0x1c5b3c => {
    return [..._0x1c5b3c.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x3c3dcb => _0x3c3dcb[0x1] + "@s.whatsapp.net");
  };
  app.get('/chat', (_0x947866, _0x150878) => {
    let _0x498230 = _0x947866.query.chat || _0x947866.query.jid || _0x27b497.user.id || _0x27b497.user.m || '';
    if (["all", "msg", 'total'].includes(_0x498230)) {
      return _0x150878.json({
        'chat': _0x498230,
        'conversation': JSON.stringify(store, null, 0x2)
      });
    }
    if (!_0x498230) {
      return _0x150878.json({
        'ERROR': "Chat Id parameter missing"
      });
    }
    _0x498230 = _0x27b497.decodeJid(_0x498230);
    const _0x406624 = (store.messages[_0x498230] || store.messages[_0x498230 + "@s.whatsapp.net"] || store.messages[_0x498230 + "@g.us"])?.["array"] || false;
    if (!_0x406624) {
      return _0x150878.json({
        'chat': _0x498230,
        'Message': "no messages found in given chat id!"
      });
    }
    _0x150878.json({
      'chat': _0x498230,
      'conversation': JSON.stringify(_0x406624, null, 0x2)
    });
  });
  _0x27b497.dl_size = global.dl_size || 0xc8;
  _0x27b497.awaitForMessage = async (_0x58b94b = {}) => {
    return new Promise((_0x32feb4, _0x1c0ff4) => {
      if (typeof _0x58b94b !== "object") {
        _0x1c0ff4(new Error("Options must be an object"));
      }
      if (typeof _0x58b94b.sender !== "string") {
        _0x1c0ff4(new Error("Sender must be a string"));
      }
      if (typeof _0x58b94b.remoteJid !== "string") {
        _0x1c0ff4(new Error("ChatJid must be a string"));
      }
      if (_0x58b94b.timeout && typeof _0x58b94b.timeout !== 'number') {
        _0x1c0ff4(new Error("Timeout must be a number"));
      }
      if (_0x58b94b.filter && typeof _0x58b94b.filter !== "function") {
        _0x1c0ff4(new Error("Filter must be a function"));
      }
      const _0x314d1e = _0x58b94b?.["timeout"] || undefined;
      const _0x1038e1 = _0x58b94b?.["filter"] || (() => true);
      let _0x5aa63b = undefined;
      let _0x3a81a1 = _0x2a6d47 => {
        let {
          type: _0x421c11,
          messages: _0x59d63c
        } = _0x2a6d47;
        if (_0x421c11 == "notify") {
          for (let _0x1f017b of _0x59d63c) {
            const _0x44d989 = _0x1f017b.key.fromMe;
            const _0x3b98f0 = _0x1f017b.key.remoteJid;
            const _0x43fecc = _0x3b98f0.endsWith("@g.us");
            const _0x398f50 = _0x3b98f0 == "status@broadcast";
            const _0x3b4380 = _0x27b497.decodeJid(_0x44d989 ? _0x27b497.user.id : _0x43fecc || _0x398f50 ? _0x1f017b.key.participant : _0x3b98f0);
            if (_0x3b4380 == _0x58b94b.sender && _0x3b98f0 == _0x58b94b.remoteJid && _0x1038e1(_0x1f017b)) {
              _0x27b497.ev.off('messages.upsert', _0x3a81a1);
              clearTimeout(_0x5aa63b);
              _0x32feb4(_0x1f017b);
            }
          }
        }
      };
      _0x27b497.ev.on("messages.upsert", _0x3a81a1);
      if (_0x314d1e) {
        _0x5aa63b = setTimeout(() => {
          _0x27b497.ev.off("messages.upsert", _0x3a81a1);
          _0x1c0ff4(new Error("Timeout"));
        }, _0x314d1e);
      }
    });
  };
  return _0x27b497;
}
let asciiArt = "\n\n " + Config.VERSION + "\n" + "█████  ███    ██ ██ ████████  █████      \n" + "██   ██ ████   ██ ██    ██    ██   ██     \n" + "███████ ██ ██  ██ ██    ██    ███████     \n" + "██   ██ ██  ██ ██ ██    ██    ██   ██     \n" + "██   ██ ██   ████ ██    ██    ██   ██     \n" + "                                          \n" + "MULTIDEVICE WHATSAPP USER BOT\n\nGithub: https://github.com/coderxsa/ANITA";
;
console.log(asciiArt);
global.lib_dir = __dirname;
global.toBool = (_0x50845e, _0xd6d92e = false) => /true|yes|ok|act|sure|enable|smd|asta/gi.test(_0x50845e) ? _0xd6d92e ? true : "true" : _0xd6d92e ? false : "false";
async function loadPlugins(_0x1a181c) {
  try {
    fs.readdirSync(_0x1a181c).forEach(_0x4c4f02 => {
      const _0x274052 = path.join(_0x1a181c, _0x4c4f02);
      if (fs.statSync(_0x274052).isDirectory()) {
        loadPlugins(_0x274052);
      } else {
        if (_0x4c4f02.includes("_Baileys") || _0x4c4f02.includes("_MSGS")) {
          log("\nRENTBOTT's DATA DETECTED!", "\nUSER NUMBER:", _0x4c4f02.replace('_MSGS', '').replace('_Baileys', ''), "\n\n");
        } else {
          if ([".js", ".smd", ".pak", ".anita"].includes(path.extname(_0x4c4f02).toLowerCase())) {
            try {
              require(_0x274052);
            } catch (_0x2c8581) {
              log("\n❌There's an error in '" + _0x4c4f02 + "' file ❌ \n\n", _0x2c8581);
            }
          }
        }
      }
    });
  } catch (_0x46e8a1) {}
}
app.set("json spaces", 0x3);
app.get('/', (_0x3fc590, _0x27746d) => {
  try {
    let _0x4aa0bc = path.join(__dirname, 'assets', "index.html");
    if (fs.existsSync(_0x4aa0bc)) {
      _0x27746d.sendFile(_0x4aa0bc);
    } else {
      _0x27746d.type("html").send("\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Bouncing Text - ANITA</title>\n<style>\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f0f0f0;\n    overflow: hidden;\n  }\n\n  .bounce-text {\n    font-size: 48px;\n    font-family: Arial, sans-serif;\n    animation: bounce 1s infinite alternate;\n  }\n\n  @keyframes bounce {\n    0% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(-20px);\n    }\n  }\n</style>\n</head>\n<body>\n\n<div class=\"bounce-text\">ANITA</div>\n\n</body>\n</html>\n\n");
    }
  } catch (_0x201901) {}
});
app.get("/asta", (_0xb59c00, _0x3e41d8) => _0x3e41d8.type('html').send("\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Bouncing Text - ANITA</title>\n<style>\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f0f0f0;\n    overflow: hidden;\n  }\n\n  .bounce-text {\n    font-size: 48px;\n    font-family: Arial, sans-serif;\n    animation: bounce 1s infinite alternate;\n  }\n\n  @keyframes bounce {\n    0% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(-20px);\n    }\n  }\n</style>\n</head>\n<body>\n\n<div class=\"bounce-text\">ANITA</div>\n\n</body>\n</html>\n\n"));
app.get("/var", (_0x1b885e, _0x2b1942) => _0x2b1942.json({
  ...Config,
  'SESSION_ID': SESSION_ID
}));
app.get("/qr", async (_0x22fb03, _0x132295) => {
  try {
    if (!global.qr) {
      throw "QR NOT FETCHED!";
    }
    let _0x251eb2 = require('qrcode');
    _0x132295.end(await _0x251eb2.toBuffer(global.qr));
  } catch (_0xb0423c) {
    console.log("/qr PATH_URL Error : ", _0xb0423c);
    if (!_0x132295.headersSent) {
      _0x132295.send({
        'error': _0xb0423c.message || _0xb0423c,
        'reason': global.qr_message || "SERVER DOWN!",
        'uptime': runtime(process.uptime())
      });
    }
  }
});
app.get("/logo", (_0x136135, _0x4c6ab7) => _0x4c6ab7.end(global.log0));
let quickport = global.port ? global.port : Math.floor(Math.random() * 0x2328) + 0x3e8;
app.listen(quickport, () => console.log("Asta On  http://localhost:" + quickport + "/  "));
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
  Appurls = [global.appUrl, "http://localhost:" + quickport];
}
if (process.env.REPL_ID) {
  Appurls.push("https://" + process.env.REPL_ID + ".pike.replit.dev");
  Appurls.push("https://" + process.env.REPL_ID + '.' + (process.env.REPLIT_CLUSTER || 'pike') + ".replit.dev");
}
if (process.env.REPL_SLUG) {
  Appurls.push("https://" + process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + ".repl.co");
}
if (process.env.PROJECT_DOMAIN) {
  Appurls.push("https://" + process.env.PROJECT_DOMAIN + ".glitch.me");
}
if (process.env.CODESPACE_NAME) {
  Appurls.push("https://" + process.env.CODESPACE_NAME + ".github.dev");
}
function keepAlive() {
  setInterval(() => {
    for (let _0x2ae35a = 0x0; _0x2ae35a < Appurls.length; _0x2ae35a++) {
      const _0x24cb8c = Appurls[_0x2ae35a];
      if (/(\/\/|\.)undefined\./.test(_0x24cb8c)) {
        continue;
      }
      try {
        axios.get(_0x24cb8c);
      } catch (_0x5e1f6e) {}
      try {
        fetch(_0x24cb8c);
      } catch (_0x1c4efa) {}
    }
  }, 0x493e0);
}
if (Array.isArray(Appurls)) {
  keepAlive();
}
async function MakeSession(_0x357014 = SESSION_ID, _0x2f8e7c = __dirname + "/Sessions/", _0x38aac6 = false) {
  let _0x138a04 = ('' + _0x357014).replace(/^SESSION_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/^SESSION_ID_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/^ASTA_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/Asta;;;/gi, '').replace(/Astro;;;/gi, '').replace(/Astropeda;;;/gi, '').trim();
  function _0x9f0e77(_0x90b3ed, _0x3f9fc6) {
    return new Promise((_0x3615af, _0x1db116) => {
      fs.readFile(_0x3f9fc6, "utf8", (_0x52b14c, _0x26a6f2) => {
        if (_0x52b14c) {
          _0x3615af(false);
        } else {
          _0x3615af(_0x26a6f2.includes(_0x90b3ed));
        }
      });
    });
  }
  const _0x5778fd = toBool(_0x38aac6 || global.IS_ASTRO || process.env.IS_ASTRO, true) || (await _0x9f0e77("/anita/", "./Dockerfile"));
  if (_0x5778fd) {
    AstroOfficial = "yes";
    if (!fs.existsSync(_0x2f8e7c)) {
      fs.mkdirSync(_0x2f8e7c);
    }
    if (_0x138a04 && _0x138a04.startsWith("PId_")) {
      try {
        var _0x1d42af = _0x138a04.replace("PId_", '');
        const _0x5c0c6a = require("pastebin-js");
        const _0x445b23 = new _0x5c0c6a('ECRgNok5kmfqqPofmC4NwFM8J6rx3qSO');
        const _0x15f7d9 = await _0x445b23.getPaste(_0x1d42af);
        console.log({
          'pasteId': _0x1d42af
        });
        _0x138a04 = _0x15f7d9 && typeof _0x15f7d9 == "string" ? Buffer.from(_0x15f7d9, "utf-8").toString("base64") : _0x138a04;
      } catch (_0x1348de) {
        console.log("CAN'T GET SESSION FROM PASTE ID\nERROR : ", _0x1348de);
      }
    }
    if (_0x138a04 && /guru/gi.test(_0x138a04) && _0x138a04.length < 0x1e) {
      try {
        let _0x6be643 = global.gurupaste || "https://pastebin.guruapi.tech/pastes?action=getpaste&id=";
        const {
          data: _0x86c530
        } = await axios.get(_0x6be643 + _0x138a04);
        const _0x5c559e = _0x86c530 && _0x86c530.content ? _0x86c530.content : false;
        var _0x494b7e = _0x5c559e ? Buffer.from(_0x5c559e, "base64").toString('utf-8') : {};
        const _0x963448 = JSON.parse(_0x494b7e);
        fs.writeFileSync(_0x2f8e7c + 'creds.json', JSON.stringify(_0x963448, null, 0x2));
        log("\nCredentials saved successfully.");
      } catch (_0x44ae5d) {
        log("EMPTY SESSION_ID FROM GURU SERVER\nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n\n\nERROR: ", _0x44ae5d);
      }
    } else {
      if (_0x138a04 && _0x138a04.length > 0x3 && _0x138a04.length < 0x14) {
        try {
          let {
            data: _0xc809a3
          } = await axios.get("https://paste.c-net.org/" + _0x138a04);
          fs.writeFileSync(_0x2f8e7c + 'creds.json', Buffer.from(_0xc809a3, "base64").toString('utf-8'), "utf8");
        } catch (_0x5be855) {
          log("\nERROR GETTING SESSION_ID FROM PASTE SERVER\n \nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n");
        }
      } else {
        if (_0x138a04) {
          try {
            log("Checking Session ID!");
            var _0x494b7e = Buffer.from(_0x138a04, "base64").toString('utf-8');
            const _0x5c8e24 = JSON.parse(_0x494b7e);
            if (_0x5c8e24['creds.json']) {
              for (const _0x38a60c in _0x5c8e24) {
                try {
                  fs.writeFileSync(_0x2f8e7c + _0x38a60c, typeof _0x5c8e24[_0x38a60c] == "string" ? _0x5c8e24[_0x38a60c] : JSON.stringify(_0x5c8e24[_0x38a60c], null, 0x2));
                } catch (_0x2c02c3) {}
              }
            } else {
              fs.writeFileSync(_0x2f8e7c + "creds.json", JSON.stringify(_0x5c8e24, null, 0x2));
            }
            log("\nSESSION SAVED!");
          } catch (_0x2066ab) {
            log("INVALID SESSION_ID ERROR FROM SERVER\nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n\n\nERROR : ", _0x2066ab);
          }
        }
      }
    }
  } else {
    AstroOfficial = [];
    log("\n\nYou are using a Modified Version. Please Run Bot from the Original Repository.\nDeploy From : https://github.com/coderxsa/ANITA\n");
    process.exit(0x0);
  }
}
async function main() {
  if (mongodb && mongodb.includes('mongodb')) {
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