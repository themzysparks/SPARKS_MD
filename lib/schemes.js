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

let optJson = {
   'bot_': {},
   'sck1': {
     'rank': {}
   },
   'sck': {},
   'tempdb': {}
 };
 const {
   sck1
 } = require(__dirname + "/database/user");
 const {
   sck
 } = require(__dirname + '/database/group');
 const {
   alive
 } = require(__dirname + "/database/alive");
 const {
   dbtemp
 } = require(__dirname + "/database/tempdb");
 const {
   Pool
 } = require('pg');
 let pg = {};
 const fs = require('fs');
 let pgtables = {
   'bot_': " \n        CREATE TABLE IF NOT EXISTS bot_ (\n          id VARCHAR(255) UNIQUE NOT NULL DEFAULT 'ANITA',\n          alive_text TEXT DEFAULT '*HEY &user*',\n          alive_get TEXT DEFAULT 'you didnt set alive message yet',\n          alive_url VARCHAR(255) DEFAULT '',\n          alive_image BOOLEAN DEFAULT false,\n          alive_video BOOLEAN DEFAULT false,\n          permit BOOLEAN DEFAULT false,\n          permit_values VARCHAR(255) DEFAULT '212',\n          chatbot VARCHAR(255) DEFAULT 'false',\n          bgm BOOLEAN DEFAULT false,\n          bgmarray JSON DEFAULT '{}',\n          plugins JSON DEFAULT '{}',\n          notes JSON DEFAULT '{}',\n          antiviewonce VARCHAR(255) DEFAULT 'true',\n          antidelete VARCHAR(255) DEFAULT 'true',\n          autobio VARCHAR(255) DEFAULT 'false',\n          levelup VARCHAR(255) DEFAULT 'true',\n          autoreaction VARCHAR(255) DEFAULT 'true',\n          anticall VARCHAR(255) DEFAULT 'true',\n          mention JSON DEFAULT '{}',\n          filter JSON DEFAULT '{}',\n          afk JSON DEFAULT '{}',\n          rent JSON DEFAULT '{}',\n temp JSON DEFAULT '{}'           \n        );",
   'sck1': "\n  CREATE TABLE IF NOT EXISTS sck1 (\n    id VARCHAR(255) UNIQUE NOT NULL DEFAULT 'ANITA',\n    name VARCHAR(255) DEFAULT 'Unknown',\n    times INTEGER DEFAULT 0,\n    permit VARCHAR(255) DEFAULT 'false',\n    ban VARCHAR(255) DEFAULT 'false',\n    afk VARCHAR(255) DEFAULT 'false',\n    afktime INTEGER DEFAULT 0,\n    bot BOOLEAN DEFAULT false,\n    msg JSON DEFAULT '{}',\n    warn JSON DEFAULT '{}',\n rank JSON DEFAULT '{}'  \n  );",
   'sck': "CREATE TABLE IF NOT EXISTS Sck (\n    id VARCHAR(255) UNIQUE NOT NULL DEFAULT 'AANITA',\n    events VARCHAR(255) DEFAULT 'false',\n    nsfw VARCHAR(255) DEFAULT 'false',\n    pdm VARCHAR(255) DEFAULT 'false',\n    antipromote VARCHAR(255) DEFAULT 'false',\n    antidemote VARCHAR(255) DEFAULT 'false',\n    welcome VARCHAR(255) DEFAULT 'false',\n    goodbye VARCHAR(255) DEFAULT 'false',\n    welcometext TEXT DEFAULT '*@user @pp Welcome to @gname',\n    goodbyetext TEXT DEFAULT '@user @pp left @gname',\n    botenable VARCHAR(255) DEFAULT 'true',\n    antilink VARCHAR(255) DEFAULT 'false',\n    antiword JSON DEFAULT '{}',\n    antifake VARCHAR(255) DEFAULT 'false',\n    antispam VARCHAR(255) DEFAULT 'false',\n    antitag VARCHAR(255) DEFAULT 'false',\n    antibot VARCHAR(255) DEFAULT 'false',\n    onlyadmin VARCHAR(255) DEFAULT 'false',\n    economy VARCHAR(255) DEFAULT 'false',\n    disablecmds VARCHAR(255) DEFAULT 'false',\n    chatbot VARCHAR(255) DEFAULT 'false',\n    mute VARCHAR(255) DEFAULT 'false',\n    unmute VARCHAR(255) DEFAULT 'false',\n disables TEXT[] DEFAULT ARRAY[]::TEXT[]  \n  );",
   'tempdb': "\n  CREATE TABLE IF NOT EXISTS tempdb (\n    id VARCHAR(255) UNIQUE NOT NULL DEFAULT 'ANITA',\n    data JSON DEFAULT '{}',\n creator TEXT DEFAULT 'Astro' \n  );"
 };
 global.DATABASE_URL = global.DATABASE_URL || global.DATABASE_URI || process.env.DATABASE_URL;
 let cacheTable = {};
 global.pool = global.pool || false;
 pg.connnectpg = () => {
   pool = new Pool({
     'connectionString': global.DATABASE_URL,
     'ssl': {
       'rejectUnauthorized': false
     }
   });
   pool.on("connect", () => {
     cacheTable.connnectpg = true;
     sqldb = true;
     return sqldb;
   });
   pool.on('error', _0x2b7696 => {
     console.log("PostgreSQL database error:");
     setTimeout(pg.connnectpg, 0x3e8);
   });
 };
 pg.createTable = async _0x113b6d => {
   if (!sqldb && !cacheTable.connnectpg || !pool && global.sqldb) {
     let _0x55bdc2 = pg.connnectpg();
     if (!_0x55bdc2) {
       return false;
     }
   }
   if (cacheTable[_0x113b6d]) {
     return true;
   }
   const _0x1b65c7 = await pool.connect();
   try {
     await _0x1b65c7.query('BEGIN');
     await _0x1b65c7.query(pgtables[_0x113b6d]);
     await _0x1b65c7.query("COMMIT");
     if (!cacheTable[_0x113b6d]) {
       console.log("PostgreSQL " + _0x113b6d + " Table created in Database.");
     }
     cacheTable[_0x113b6d] = true;
     return true;
   } catch (_0x3b4fa1) {
     console.log("Error creating PostgreSQL " + _0x113b6d + " Table:", _0x3b4fa1);
   } finally {
     _0x1b65c7.release();
   }
 };
 pg["new"] = async (_0x521c3f, _0x489ec9) => {
   if (!(await pg.createTable(_0x521c3f))) {
     return false;
   }
   const _0x3ee8aa = await pool.connect();
   try {
     if (await pg.findOne(_0x521c3f, _0x489ec9)) {
       return await pg.updateOne(_0x521c3f, {
         'id': _0x489ec9?.['id']
       }, _0x489ec9);
     }
     await _0x3ee8aa.query("BEGIN");
     const _0x222c99 = "\n      INSERT INTO " + _0x521c3f + " (" + Object.keys(_0x489ec9).join(", ") + ")\n      VALUES (" + Object.keys(_0x489ec9).map((_0x24f83a, _0x2fe034) => '$' + (_0x2fe034 + 0x1)).join(", ").trim() + ")\n      ON CONFLICT (id) DO NOTHING\n      RETURNING *;\n    ";
     const _0x1ff0d8 = Object.values(_0x489ec9);
     const _0x4e540a = await _0x3ee8aa.query(_0x222c99, _0x1ff0d8);
     await _0x3ee8aa.query("COMMIT");
     return _0x4e540a.rows[0x0];
   } catch (_0x36f206) {
     await _0x3ee8aa.query("ROLLBACK");
     console.log("Error inserting new row into " + _0x521c3f + "\n", _0x36f206);
   } finally {
     _0x3ee8aa.release();
   }
 };
 pg.countDocuments = async _0x4d97dc => {
   if (!(await pg.createTable(_0x4d97dc))) {
     return 0x0;
   }
   const _0x3751f2 = await pool.connect();
   try {
     const _0x46e607 = await _0x3751f2.query("SELECT COUNT(*) FROM " + _0x4d97dc);
     return parseInt(_0x46e607.rows[0x0].count);
   } catch (_0x8e1994) {
     return 0x0;
   } finally {
     _0x3751f2.release();
   }
 };
 pg.findOne = async (_0x1b4350, _0x2dff1d) => {
   if (!(await pg.createTable(_0x1b4350))) {
     return false;
   }
   const _0x5bbeee = await pool.connect();
   try {
     const _0x369190 = await _0x5bbeee.query("SELECT * FROM " + _0x1b4350 + " WHERE id = $1", [_0x2dff1d?.['id']]);
     return _0x369190.rows[0x0];
   } catch (_0x95006b) {
     console.log("Error while finding " + _0x1b4350 + " document by Id: " + _0x2dff1d?.['id'] + "\n", _0x95006b);
     return false;
   } finally {
     _0x5bbeee.release();
   }
 };
 pg.find = async (_0x5f5106, _0x335f2d = {}) => {
   if (!(await pg.createTable(_0x5f5106))) {
     return [];
   }
   const _0x4a7957 = await pool.connect();
   try {
     let _0xbdf2c6 = Object.values(_0x335f2d);
     if (!_0xbdf2c6 || !_0xbdf2c6[0x0]) {
       return (await _0x4a7957.query("SELECT * FROM " + _0x5f5106))?.["rows"] || [];
     } else {
       if (_0x335f2d?.['id']) {
         return [{
           ...(await pg.findOne(_0x5f5106, _0x335f2d))
         }] || [];
       }
     }
   } catch (_0x59a852) {
     console.log("Error while find " + _0x5f5106 + " documents", _0x59a852);
     return [];
   } finally {
     _0x4a7957.release();
   }
 };
 pg.updateOne = async (_0x23c175, _0x11d3c5, _0xd2b8d9 = {}) => {
   if (!(await pg.createTable(_0x23c175))) {
     return false;
   }
   const _0xa0a9ac = await pool.connect();
   try {
     await _0xa0a9ac.query("BEGIN");
     const _0x3474a8 = "SELECT * FROM " + _0x23c175 + " WHERE id = $1 FOR UPDATE";
     const _0x59d990 = await _0xa0a9ac.query(_0x3474a8, [_0x11d3c5?.['id']]);
     if (_0x59d990.rows[0x0]) {
       const _0xbe8379 = "UPDATE " + _0x23c175 + " SET " + Object.keys(_0xd2b8d9).map((_0x1c8e7c, _0x167e26) => _0x1c8e7c + " = $" + (_0x167e26 + 0x2)).join(", ") + " WHERE id = $1 RETURNING *;";
       const _0x9a1004 = [_0x11d3c5.id, ...Object.values(_0xd2b8d9)];
       const _0x257224 = await _0xa0a9ac.query(_0xbe8379, _0x9a1004);
       await _0xa0a9ac.query("COMMIT");
       return _0x257224.rows[0x0];
     } else {
       return await pg["new"](_0x23c175, {
         ..._0x11d3c5,
         ..._0xd2b8d9
       });
     }
   } catch (_0x401a98) {
     await _0xa0a9ac.query('ROLLBACK');
     console.error("Error while finding and updating " + _0x23c175 + " document by Id: " + _0x11d3c5?.['id'] + "\n", _0x401a98);
     return [];
   } finally {
     _0xa0a9ac.release();
   }
 };
 pg.findOneAndDelete = async (_0x14af86, _0x561388) => {
   if (!(await pg.createTable(_0x14af86))) {
     return false;
   }
   const _0x20bcd1 = await pool.connect();
   try {
     await _0x20bcd1.query("BEGIN");
     const _0x4699ac = await _0x20bcd1.query("SELECT * FROM " + _0x14af86 + " WHERE id = $1 FOR UPDATE", [_0x561388?.['id']]);
     if (_0x4699ac.rows[0x0]) {
       const _0x596db5 = await _0x20bcd1.query("DELETE FROM " + _0x14af86 + " WHERE id = $1 RETURNING *", [_0x561388.id]);
       await _0x20bcd1.query("COMMIT");
       return _0x596db5.rows[0x0];
     } else {
       return true;
     }
   } catch (_0x7914b) {
     await _0x20bcd1.query("ROLLBACK");
     console.error("Error while finding and deleting " + _0x14af86 + " document by Id: " + _0x561388?.['id'] + "\n", _0x7914b);
     return false;
   } finally {
     _0x20bcd1.release();
   }
 };
 pg.collection = {
   'drop': async _0x24ae8c => {
     if (!(await pg.createTable(_0x24ae8c))) {
       return false;
     }
     const _0xaf2946 = await pool.connect();
     try {
       await _0xaf2946.query("BEGIN");
       await _0xaf2946.query("DROP TABLE IF EXISTS " + _0x24ae8c);
       await _0xaf2946.query("COMMIT");
       delete cacheTable[_0x24ae8c];
       return true;
     } catch (_0x12d5c1) {
       await _0xaf2946.query("ROLLBACK");
       console.error("Error while dropping " + _0x24ae8c + " table\n", _0x12d5c1);
       return false;
     } finally {
       _0xaf2946.release();
     }
   }
 };
 let dbs = {
   'newtables': {
     'bot_': {
       'id': "ANITA",
       'alive_text': "*HEY &user*",
       'alive_get': "you did'nt set alive message yet\nType [.alive info] to get alive info",
       'alive_url': '',
       'alive_image': false,
       'alive_video': false,
       'permit': false,
       'permit_values': "all",
       'chatbot': "false",
       'antiviewonce': "true",
       'antidelete': "true",
       'autobio': 'false',
       'levelup': "false",
       'anticall': "true",
       'autoreaction': "true",
       'bgm': false,
       'bgmarray': {},
       'plugins': {},
       'notes': {},
       'warn': {},
       'afk': {},
       'filter': {},
       'mention': {},
       'rent': {},
       ...(optJson.bot_ || {})
     },
     'sck': {
       'id': "AANITA",
       'events': "false",
       'nsfw': "false",
       'pdm': 'false',
       'antipromote': "false",
       'antidemote': "false",
       'welcome': "false",
       'goodbye': "false",
       'welcometext': "*@user @pp welcome to @gname",
       'goodbyetext': "*@user @pp left @gname",
       'botenable': "true",
       'antilink': "false",
       'antiword': {},
       'antifake': "false",
       'antispam': "false",
       'antitag': "false",
       'antibot': "false",
       'onlyadmin': "false",
       'economy': "false",
       'disablecmds': "false",
       'chatbot': "false",
       'mute': 'false',
       'unmute': "false",
       ...(optJson.sck || {})
     },
     'sck1': {
       'id': "chatid",
       'name': "Unknown",
       'times': 0x0,
       'permit': "false",
       'ban': "false",
       'warn': {},
       ...(optJson.sck1 || {})
     },
     'tempdb': {
       'id': "chatid",
       'data': {},
       ...(optJson.tempdb || {})
     }
   }
 };
 dbs.loadGroupData = async _0x2bc4a4 => {
   try {
     return fs.existsSync(__dirname + '/' + _0x2bc4a4 + ".json") ? await JSON.parse(fs.readFileSync(__dirname + '/' + _0x2bc4a4 + ".json", "utf8")) : (fs.writeFileSync(__dirname + '/' + _0x2bc4a4 + '.json', JSON.stringify({}, null, 0x2), "utf8"), {});
   } catch (_0x4b081c) {
     console.error("Error loading user data:", _0x4b081c);
     return {};
   }
 };
 dbs.saveGroupData = async (_0x2709f5, _0x2fb566 = {}) => {
   fs.writeFileSync(__dirname + '/' + _0x2709f5 + ".json", JSON.stringify(_0x2fb566, null, 0x2), "utf8");
 };
 dbs.countDocuments = async _0x142ead => {
   try {
     let _0x5bbac2 = await dbs.loadGroupData(_0x142ead);
     let _0x3a8ce5 = Object.keys(_0x5bbac2);
     return _0x3a8ce5.length;
   } catch (_0x36bb89) {
     console.log("Error while countDocuments of " + _0x142ead + " in database,\n", _0x36bb89);
     return 0x0;
   }
 };
 dbs['new'] = async (_0x3f42a6, _0x1d5144) => {
   try {
     let _0x236b57 = await dbs.loadGroupData(_0x3f42a6);
     return !_0x236b57[_0x1d5144.id] ? (_0x236b57[_0x1d5144.id] = {
       ...dbs.newtables[_0x3f42a6],
       ..._0x1d5144
     }, await dbs.saveGroupData(_0x3f42a6, _0x236b57), _0x236b57[_0x1d5144.id]) : _0x236b57[_0x1d5144.id];
   } catch (_0x404601) {
     console.log("Error while Creating new " + _0x3f42a6 + " in database,\n", _0x404601);
     return {};
   }
 };
 dbs.findOne = async (_0x346514, _0x4be241) => {
   try {
     let _0x305e62 = await dbs.loadGroupData(_0x346514);
     if (_0x305e62[_0x4be241.id]) {
       return _0x305e62[_0x4be241.id];
     } else {
       return;
     }
   } catch (_0x5ba2ef) {
     console.log("Error while findOne " + _0x346514 + " in database,\n", _0x5ba2ef);
     return;
   }
 };
 dbs.find = async (_0x30b22c, _0x7132a9 = {}) => {
   try {
     let _0xd6bead = Object.values(_0x7132a9);
     let _0x5526e9 = await dbs.loadGroupData(_0x30b22c);
     if (_0x5526e9[_0x7132a9.id]) {
       return [{
         ..._0x5526e9[_0x7132a9.id]
       }];
     } else {
       if (!_0xd6bead[0x0]) {
         return Object.values(_0x5526e9);
       }
     }
     return [];
   } catch (_0x2b5795) {
     console.log("Error while finding  " + _0x30b22c + "(s) in database,\n", _0x2b5795);
     return [];
   }
 };
 dbs.updateOne = async (_0xc1eccf, _0x5f5be3, _0x2984c9 = {}) => {
   try {
     let _0x27a979 = await dbs.loadGroupData(_0xc1eccf);
     return _0x27a979[_0x5f5be3.id] ? (_0x27a979[_0x5f5be3.id] = {
       ..._0x27a979[_0x5f5be3.id],
       ..._0x2984c9
     }, await dbs.saveGroupData(_0xc1eccf, _0x27a979), _0x27a979[_0x5f5be3.id]) : await dbs["new"](_0xc1eccf, {
       ..._0x5f5be3,
       ..._0x2984c9
     });
   } catch (_0x2fff7f) {
     console.log("Error while updateOne " + _0xc1eccf + " in database,\n", _0x2fff7f);
     return {};
   }
 };
 dbs.findOneAndDelete = async (_0x175c20, _0x527165) => {
   try {
     let _0x242697 = await dbs.loadGroupData(_0x175c20);
     delete _0x242697[_0x527165.id];
     await dbs.saveGroupData(_0x175c20, _0x242697);
     return true;
   } catch (_0x3ea432) {
     console.log("Error while findOneAndDelete " + _0x175c20 + " in database,\n", _0x3ea432);
     return null;
   }
 };
 dbs['delete'] = dbs.findOneAndDelete;
 dbs.collection = {
   'drop': async _0x52ea56 => {
     try {
       let _0x210d40 = await dbs.loadGroupData(_0x52ea56);
       Object.keys(_0x210d40).forEach(_0x44c9db => delete _0x210d40[_0x44c9db]);
       await dbs.saveGroupData(_0x52ea56, _0x210d40);
       return true;
     } catch (_0x541926) {
       console.log("Error while collection.drop all user in database,\n", _0x541926);
       return null;
     }
   }
 };
 dbs.deleteAll = dbs.collection.drop;
 let groupdb = {
   "countDocuments": async () => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await sck.countDocuments();
       } else {
         return sqldb && pg ? await pg.countDocuments("sck") : await dbs.countDocuments('sck');
       }
     } catch (_0x41c02d) {
       console.log("Error while Creating user in database,\n", _0x41c02d);
       return 0x0;
     }
   },
   "new": async _0xa8adba => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         let _0x2f4d53 = (await sck.findOne({
           'id': _0xa8adba.id
         })) || (await new sck({
           'id': _0xa8adba.id,
           ..._0xa8adba
         }).save());
         return _0x2f4d53;
       } else {
         if (sqldb && pg) {
           var _0x13b0df = (await pg.findOne("sck", {
             'id': _0xa8adba.id
           })) || (await pg['new']("sck", _0xa8adba));
           return _0x13b0df;
         } else {
           var _0x13b0df = (await dbs.findOne("sck", {
             'id': _0xa8adba.id
           })) || (await dbs['new']('sck', _0xa8adba));
           return _0x13b0df;
         }
       }
     } catch (_0x3dba68) {
       console.log("Error while Creating user in database,\n", _0x3dba68);
       return {};
     }
   },
   "findOne": async _0x16ba32 => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await sck.findOne({
           'id': _0x16ba32.id
         });
       } else {
         if (sqldb && pg) {
           return await pg.findOne("sck", _0x16ba32);
         } else {
           var _0x1d4130 = await dbs.findOne('sck', {
             'id': _0x16ba32.id
           });
           return _0x1d4130;
         }
       }
     } catch (_0x45f0d2) {
       console.log("Error while finding user in database,\n", _0x45f0d2);
       return;
     }
   },
   "find": async _0x3b2932 => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         let _0x4ae9f0 = await sck.find(_0x3b2932);
         return _0x4ae9f0;
       } else {
         return sqldb && pg ? await pg.find("sck", _0x3b2932) : await dbs.find("sck", _0x3b2932);
       }
     } catch (_0xd5b48b) {
       console.log("Error while finding user in database,\n", _0xd5b48b);
       return [];
     }
   },
   "updateOne": async (_0x470465, _0x2eac16 = {}) => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (!_0x470465.id) {
         return {};
       }
       if (isMongodb) {
         return await sck.updateOne({
           'id': _0x470465.id
         }, {
           ..._0x2eac16
         });
       } else {
         return sqldb && pg ? await pg.updateOne("sck", {
           'id': _0x470465.id
         }, _0x2eac16) : await dbs.updateOne("sck", _0x470465, _0x2eac16);
       }
     } catch (_0x345721) {
       console.log("Error while updateOne user in database,\n", _0x345721);
       return {};
     }
   },
   "findOneAndDelete": async _0x1256c3 => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (!_0x1256c3.id) {
         return [];
       }
       if (isMongodb) {
         return await sck.findOneAndDelete({
           'id': _0x1256c3.id
         });
       } else {
         return sqldb && pg ? await pg.findOneAndDelete("sck", _0x1256c3) : await dbs.findOneAndDelete('sck', _0x1256c3);
       }
     } catch (_0xcb7483) {
       console.log("Error while findOneAndDelete user in database,\n", _0xcb7483);
       return null;
     }
   }
 };
 groupdb["delete"] = groupdb.findOneAndDelete;
 groupdb.collection = {
   'drop': async () => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await sck.collection.drop();
       } else {
         return sqldb && pg ? await pg.collection.drop('sck') : await dbs.collection.drop("sck");
       }
     } catch (_0x527a25) {
       console.log("Error while collection.drop all user in database,\n", _0x527a25);
       return null;
     }
   }
 };
 let userdb = {
   "countDocuments": async () => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await sck1.countDocuments();
       } else {
         return sqldb && pg ? await pg.countDocuments("sck1") : await dbs.countDocuments('sck1');
       }
     } catch (_0x5b0c0f) {
       console.log("Error from userdb.countDocuments() in user database,\n", _0x5b0c0f);
       return 0x0;
     }
   },
   "new": async _0x3ad875 => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         let _0x1d0e44 = (await sck1.findOne({
           'id': _0x3ad875.id
         })) || (await new sck1({
           'id': _0x3ad875.id,
           ..._0x3ad875
         }).save());
         return _0x1d0e44;
       } else {
         if (sqldb && pg) {
           var _0x5385d9 = (await pg.findOne("sck1", {
             'id': _0x3ad875.id
           })) || (await pg["new"]("sck1", _0x3ad875));
           return _0x5385d9;
         } else {
           var _0x5385d9 = (await dbs.findOne("sck1", {
             'id': _0x3ad875.id
           })) || (await dbs['new']("sck1", _0x3ad875));
           return _0x5385d9;
         }
       }
     } catch (_0x389ff4) {
       console.log("Error userdb.new() in user database,\n", _0x389ff4);
       return {};
     }
   },
   "findOne": async _0x1e2c90 => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await sck1.findOne({
           'id': _0x1e2c90.id
         });
       } else {
         if (sqldb && pg) {
           return await pg.findOne("sck1", _0x1e2c90);
         } else {
           var _0x492c32 = await dbs.findOne("sck1", {
             'id': _0x1e2c90.id
           });
           return _0x492c32;
         }
       }
     } catch (_0x3360fa) {
       console.log("Error userdb.findOne() in user database,\n", _0x3360fa);
       return;
     }
   },
   find: async _0x14577e => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         let _0x573343 = await sck1.find(_0x14577e);
         return _0x573343;
       } else {
         return sqldb && pg ? await pg.find("sck1", _0x14577e) : await dbs.find("sck1", _0x14577e);
       }
     } catch (_0x3434c8) {
       console.log("Error userdb.find() in user database,\n", _0x3434c8);
       return [];
     }
   },
   "updateOne": async (_0x44d0b9, _0x3c350d = {}) => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (!_0x44d0b9.id) {
         return {};
       }
       if (isMongodb) {
         return await sck1.updateOne({
           'id': _0x44d0b9.id
         }, {
           ..._0x3c350d
         });
       } else {
         return sqldb && pg ? await pg.updateOne("sck1", {
           'id': _0x44d0b9.id
         }, _0x3c350d) : await dbs.updateOne('sck1', _0x44d0b9, _0x3c350d);
       }
     } catch (_0x3f9ac7) {
       console.log("Error userdb.updateOne() in user database,\n", _0x3f9ac7);
       return {};
     }
   },
   "findOneAndDelete": async _0x1cdbdc => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (!_0x1cdbdc.id) {
         return [];
       }
       if (isMongodb) {
         return await sck1.findOneAndDelete({
           'id': _0x1cdbdc.id
         });
       } else {
         return sqldb && pg ? await pg.findOneAndDelete("sck1", _0x1cdbdc) : await dbs.findOneAndDelete("sck1", _0x1cdbdc);
       }
     } catch (_0xd571a4) {
       console.log("Error userdb.findOneAndDelete() in user database,\n", _0xd571a4);
       return null;
     }
   }
 };
 userdb["delete"] = userdb.findOneAndDelete;
 userdb.collection = {
   'drop': async () => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await sck1.collection.drop();
       } else {
         return sqldb && pg ? await pg.collection.drop("sck1") : await dbs.collection.drop('sck1');
       }
     } catch (_0x529e2f) {
       console.log("Error userdb.collection.drop() in user database,\n", _0x529e2f);
       return null;
     }
   }
 };
 let alivedb = {
   countDocuments: async () => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await alive.countDocuments();
       } else {
         return sqldb && pg ? await pg.countDocuments("bot_") : await dbs.countDocuments("bot_");
       }
     } catch (_0x392361) {
       console.log("Error while Creating user in database,\n", _0x392361);
       return 0x0;
     }
   },
   "new": async _0x1df3b6 => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         let _0x1eeacd = (await alive.findOne({
           'id': _0x1df3b6.id
         })) || (await new alive({
           'id': _0x1df3b6.id,
           ..._0x1df3b6
         }).save());
         return _0x1eeacd;
       } else {
         if (sqldb && pg) {
           return (await pg.findOne("bot_", {
             'id': _0x1df3b6.id
           })) || (await pg["new"]("bot_", _0x1df3b6));
         } else {
           var _0x579182 = (await dbs.findOne('bot_', {
             'id': _0x1df3b6.id
           })) || (await dbs["new"]("bot_", _0x1df3b6));
           return _0x579182;
         }
       }
     } catch (_0x881f94) {
       console.log("Error while Creating BOT INFO in database,\n", _0x881f94);
       return {};
     }
   },
   "findOne": async _0x1186d5 => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await alive.findOne({
           'id': _0x1186d5.id
         });
       } else {
         if (sqldb && pg) {
           return await pg.findOne('bot_', _0x1186d5);
         } else {
           var _0x224fce = await dbs.findOne("bot_", {
             'id': _0x1186d5.id
           });
           return _0x224fce;
         }
       }
     } catch (_0x4139c) {
       console.log("Error while finding user in database,\n", _0x4139c);
       return;
     }
   },
   "find": async _0x437b0a => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         let _0xe9b086 = await alive.find(_0x437b0a);
         return _0xe9b086;
       } else {
         return sqldb && pg ? await pg.find("bot_", _0x437b0a) : await dbs.find("bot_", _0x437b0a);
       }
     } catch (_0x40148f) {
       console.log("Error while finding user in database,\n", _0x40148f);
       return [];
     }
   },
   updateOne: async (_0x50432a, _0x4d0116 = {}) => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (!_0x50432a.id) {
         return {};
       }
       if (isMongodb) {
         return await alive.updateOne({
           'id': _0x50432a.id
         }, {
           ..._0x4d0116
         });
       } else {
         return sqldb && pg ? await pg.updateOne('bot_', {
           'id': _0x50432a.id
         }, _0x4d0116) : await dbs.updateOne('bot_', _0x50432a, _0x4d0116);
       }
     } catch (_0x1b8e92) {
       console.log("Error while updateOne user in database,\n", _0x1b8e92);
       return {};
     }
   },
   "findOneAndDelete": async _0x4b5f36 => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (!_0x4b5f36.id) {
         return [];
       }
       if (isMongodb) {
         return await alive.findOneAndDelete({
           'id': _0x4b5f36.id
         });
       } else {
         return sqldb && pg ? await pg.findOneAndDelete('bot_', _0x4b5f36) : await dbs.findOneAndDelete('bot_', _0x4b5f36);
       }
     } catch (_0x33cb07) {
       console.log("Error while findOneAndDelete user in database,\n", _0x33cb07);
       return null;
     }
   }
 };
 alivedb["delete"] = alivedb.findOneAndDelete;
 alivedb.collection = {
   'drop': async () => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await alive.collection.drop();
       } else {
         return sqldb && pg ? await pg.collection.drop("bot_") : await dbs.collection.drop("bot_");
       }
     } catch (_0x4372c3) {
       console.log("Error while collection.drop all user in database,\n", _0x4372c3);
       return null;
     }
   }
 };
 let tempdb = {
   "countDocuments": async () => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await dbtemp.countDocuments();
       } else {
         return sqldb && pg ? await pg.countDocuments('tempdb') : await dbs.countDocuments("tempdb");
       }
     } catch (_0x265dcb) {
       console.log("Error while Creating user in database,\n", _0x265dcb);
       return 0x0;
     }
   },
   "new": async _0x568aca => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         let _0x2757ac = (await dbtemp.findOne({
           'id': _0x568aca.id
         })) || (await new dbtemp({
           'id': _0x568aca.id,
           ..._0x568aca
         }).save());
         return _0x2757ac;
       } else {
         if (sqldb && pg) {
           var _0xca6aca = (await pg.findOne('tempdb', {
             'id': _0x568aca.id
           })) || (await pg["new"]("tempdb", _0x568aca));
           return _0xca6aca;
         } else {
           var _0xca6aca = (await dbs.findOne("tempdb", {
             'id': _0x568aca.id
           })) || (await dbs["new"]("tempdb", _0x568aca));
           return _0xca6aca;
         }
       }
     } catch (_0x183106) {
       console.log("Error while Creating user in database,\n", _0x183106);
       return {};
     }
   },
   "findOne": async _0x303bbc => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await dbtemp.findOne({
           'id': _0x303bbc.id
         });
       } else {
         if (sqldb && pg) {
           return await pg.findOne('tempdb', _0x303bbc);
         } else {
           var _0x491f1c = await dbs.findOne('tempdb', {
             'id': _0x303bbc.id
           });
           return _0x491f1c;
         }
       }
     } catch (_0x3f8a61) {
       console.log("Error while finding user in database,\n", _0x3f8a61);
       return;
     }
   },
   find: async _0x1cca1f => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         let _0x389325 = await dbtemp.find(_0x1cca1f);
         return _0x389325;
       } else {
         return sqldb && pg ? await pg.find("tempdb", _0x1cca1f) : await dbs.find("tempdb", _0x1cca1f);
       }
     } catch (_0x432158) {
       console.log("Error while finding user in database,\n", _0x432158);
       return [];
     }
   },
   "updateOne": async (_0x2dc3e5, _0xea3add = {}) => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (!_0x2dc3e5.id) {
         return {};
       }
       if (isMongodb) {
         return await dbtemp.updateOne({
           'id': _0x2dc3e5.id
         }, {
           ..._0xea3add
         });
       } else {
         return sqldb && pg ? await pg.updateOne("tempdb", {
           'id': _0x2dc3e5.id
         }, _0xea3add) : await dbs.updateOne("tempdb", _0x2dc3e5, _0xea3add);
       }
     } catch (_0x600055) {
       console.log("Error while updateOne user in database,\n", _0x600055);
       return {};
     }
   },
   findOneAndDelete: async _0xc15a92 => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (!_0xc15a92.id) {
         return [];
       }
       if (isMongodb) {
         return await dbtemp.findOneAndDelete({
           'id': _0xc15a92.id
         });
       } else {
         return sqldb && pg ? await pg.findOneAndDelete("tempdb", _0xc15a92) : await dbs.findOneAndDelete("tempdb", _0xc15a92);
       }
     } catch (_0x523246) {
       console.log("Error while findOneAndDelete user in database,\n", _0x523246);
       return null;
     }
   }
 };
 tempdb["delete"] = tempdb.findOneAndDelete;
 tempdb.collection = {
   'drop': async () => {
     try {
       if (!global.AstroOfficial) {
         return;
       }
       if (isMongodb) {
         return await dbtemp.collection.drop();
       } else {
         return sqldb && pg ? await pg.collection.drop("tempdb") : await dbs.collection.drop('tempdb');
       }
     } catch (_0x4248d5) {
       console.log("Error while collection.drop all user in database,\n", _0x4248d5);
       return null;
     }
   }
 };
 module.exports = {
   'tempdb': tempdb,
   'pg': pg,
   'dbs': dbs,
   'groupdb': groupdb,
   'userdb': userdb,
   'alivedb': alivedb,
   'bot_': alivedb
 };