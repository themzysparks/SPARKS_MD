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
   updateProfilePicture,
   parsedJid
 } = require("../lib");
 const {
   sck,
   smd,
   send,
   Config,
   tlang,
   sleep,
   getAdmin,
   prefix
 } = require("../lib");
 const astro_patch = require('../lib/plugins');
 const {
   cmd
 } = astro_patch;
 const grouppattern = /https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/g;
 smd({
   'cmdname': "join",
   'info': "joins group by link",
   'type': "whatsapp",
   'fromMe': true,
   'filename': __filename,
   'use': "<group link.>"
 }, async (_0xf5b9e8, _0x15ed36) => {
   try {
     if (_0xf5b9e8.reply_message && _0xf5b9e8.reply_message.groupInvite) {
       var _0x2e269f = await _0xf5b9e8.bot.groupAcceptInviteV4(_0xf5b9e8.chat, _0xf5b9e8.reply_message.msg);
       if (_0x2e269f && _0x2e269f.includes("joined to:")) {
         return await send(_0xf5b9e8, "*_Joined_*", {}, '', _0xf5b9e8);
       }
     }
     let _0x3243b6 = _0x15ed36 ? _0x15ed36 : _0xf5b9e8.reply_text;
     const _0x50a3d5 = _0x3243b6.match(grouppattern);
     if (!_0x50a3d5) {
       return await _0xf5b9e8.reply("*_Uhh Please, provide group link_*");
     }
     let _0x496738 = _0x50a3d5[0x0].split("https://chat.whatsapp.com/")[0x1].trim();
     await _0xf5b9e8.bot.groupAcceptInvite(_0x496738).then(_0xcec38a => send(_0xf5b9e8, "*_Joined_*", {}, '', _0xf5b9e8))["catch"](_0x1c8305 => _0xf5b9e8.send("*_Can't Join, Group Id not found!!_*"));
   } catch (_0x2fc5b7) {
     await _0xf5b9e8.error(_0x2fc5b7 + "\n\ncommand: join", _0x2fc5b7, "*_Can't Join, Group Id not found, Sorry!!_*");
   }
 });
 smd({
   'cmdname': "newgc",
   'info': "Create New Group",
   'type': 'whatsapp',
   'filename': __filename,
   'use': "<group link.>"
 }, async (_0x843c61, _0x34b297, {
   smd: _0x54c85d,
   cmdName: _0xde52da
 }) => {
   try {
     if (!_0x843c61.isCreator) {
       return _0x843c61.reply(tlang().owner);
     }
     if (!_0x34b297) {
       return await _0x843c61.reply("*_provide Name to Create new Group!!!_*\n*_Ex: " + (prefix + _0x54c85d) + " My Name Group @user1,2,3.._*");
     }
     let _0x51df42 = _0x34b297;
     if (_0x51df42.toLowerCase() === 'info') {
       return await _0x843c61.send(("\n  *Its a command to create new Gc*\n  \t```Ex: " + (prefix + cmd) + " My new Group```\n  \n*You also add peoples in newGc*\n  \t```just reply or mention Users```\n  ").trim());
     }
     let _0x4adedf = [_0x843c61.sender];
     if (_0x843c61.quoted) {
       _0x4adedf.push(_0x843c61.quoted.sender);
     }
     if (_0x843c61.mentionedJid && _0x843c61.mentionedJid[0x0]) {
       _0x4adedf.push(..._0x843c61.mentionedJid);
       try {
         mentionJids.forEach(_0x4fcf56 => {
           var _0x1c4b8f = _0x4fcf56.split('@')[0x0].trim();
           _0x51df42 = _0x51df42.replace(new RegExp('@' + _0x1c4b8f, 'g'), '');
         });
       } catch {}
     }
     const _0x1d7dcd = _0x51df42.substring(0x0, 0x3c);
     const _0x54fbbd = await Suhail.bot.groupCreate(_0x1d7dcd, [..._0x4adedf]);
     if (_0x54fbbd) {
       let _0x40be84 = await _0x843c61.bot.sendMessage(_0x54fbbd.id, {
         'text': "*_Hey Master, Welcome to new Group_*\n" + Config.caption
       });
       try {
         var _0x56bfd0 = await Suhail.bot.groupInviteCode(_0x54fbbd.id);
       } catch {
         var _0x56bfd0 = false;
       }
       var _0x5bc2fe = "https://chat.whatsapp.com/" + _0x56bfd0;
       var _0x6666e5 = {
         'externalAdReply': {
           'title': 'ANITA',
           'body': '' + _0x1d7dcd,
           'renderLargerThumbnail': true,
           'thumbnail': log0,
           'mediaType': 0x1,
           'mediaUrl': _0x5bc2fe,
           'sourceUrl': _0x5bc2fe
         }
       };
       return await send(_0x843c61, ("*_Hurray, New group created!!!_*\n" + (_0x56bfd0 ? '*_' + _0x5bc2fe + '_*' : '')).trim(), {
         'contextInfo': _0x6666e5
       }, '', _0x40be84);
     } else {
       await _0x843c61.send("*_Can't create new group, Sorry!!_*");
     }
   } catch (_0x45f628) {
     await _0x843c61.error(_0x45f628 + "\n\ncommand: " + _0xde52da, _0x45f628, "*_Can't create new group, Sorry!!_*");
   }
 });
 smd({
   'pattern': "ginfo",
   'desc': "get group info by link",
   'type': "group",
   'filename': __filename,
   'use': "<group link.>"
 }, async (_0x134764, _0x13976d) => {
   try {
     let _0x2b645f = _0x13976d ? _0x13976d : _0x134764.reply_text;
     const _0x13c5ed = _0x2b645f.match(grouppattern) || false;
     if (!_0x13c5ed) {
       return await _0x134764.reply("*_Uhh Please, provide group link_*");
     }
     let _0x1fa1c0 = _0x13c5ed[0x0].split("https://chat.whatsapp.com/")[0x1].trim();
     const _0x134c2e = await _0x134764.bot.groupGetInviteInfo(_0x1fa1c0);
     if (_0x134c2e) {
       const _0x4c8d23 = new Date(_0x134c2e.creation * 0x3e8);
       var _0x52aeb5 = _0x4c8d23.getFullYear();
       var _0x480df0 = _0x4c8d23.getMonth() + 0x1;
       var _0x13597d = _0x4c8d23.getDate();
       var _0x51d6f7 = _0x52aeb5 + '-' + _0x480df0.toString().padStart(0x2, '0') + '-' + _0x13597d.toString().padStart(0x2, '0');
       var _0x8370b2 = {
         'externalAdReply': {
           'title': "ANITA",
           'body': _0x134c2e.subject,
           'renderLargerThumbnail': true,
           'thumbnail': log0,
           'mediaType': 0x1,
           'mediaUrl': _0x13c5ed[0x0],
           'sourceUrl': _0x13c5ed[0x0]
         }
       };
       return await send(_0x134764, (_0x134c2e.subject + "\n  \n  Creator: wa.me/" + _0x134c2e.owner.split('@')[0x0] + " \n  GJid; ```" + _0x134c2e.id + "  ```\n  *Muted:* " + (_0x134c2e.announce ? " yes" : " no") + "\n  *Locked:* " + (_0x134c2e.restrict ? " yes" : " no") + "\n  *createdAt:* " + _0x51d6f7 + "\n  *participents:* " + (_0x134c2e.size > 0x3 ? _0x134c2e.size + 'th' : _0x134c2e.size) + "\n  " + (_0x134c2e.desc ? "*description:* " + _0x134c2e.desc + "\n" : '') + "\n  " + Config.caption + "\n  ").trim(), {
         'mentions': [_0x134c2e.owner],
         'contextInfo': _0x8370b2
       }, '', _0x134764);
     } else {
       await _0x134764.send("*_Group Id not found, Sorry!!_*");
     }
   } catch (_0x549722) {
     await _0x134764.error(_0x549722 + "\n\ncommand: ginfo", _0x549722, "*_Group Id not found, Sorry!!_*");
   }
 });
 smd({
   'cmdname': "rejectall",
   'alias': ["rejectjoin"],
   'info': "reject all request to join!",
   'type': "group",
   'filename': __filename
 }, async (_0xc1c478, _0x3848c0) => {
   try {
     if (!_0xc1c478.isGroup) {
       return _0xc1c478.reply(tlang().group);
     }
     if (!_0xc1c478.isBotAdmin || !_0xc1c478.isAdmin) {
       return await _0xc1c478.reply(!_0xc1c478.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0xc1c478.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     const _0x11b657 = await _0xc1c478.bot.groupRequestParticipantsList(_0xc1c478.chat);
     if (!_0x11b657 || !_0x11b657[0x0]) {
       return await _0xc1c478.reply("*_No Request Join Yet_*");
     }
     let _0x362c17 = [];
     let _0x38c3dd = "*List of rejected users*\n\n";
     for (let _0x249b8b = 0x0; _0x249b8b < _0x11b657.length; _0x249b8b++) {
       try {
         await _0xc1c478.bot.groupRequestParticipantsUpdate(_0xc1c478.from, [_0x11b657[_0x249b8b].jid], "reject");
         _0x38c3dd += '@' + _0x11b657[_0x249b8b].jid.split('@')[0x0] + "\n";
         _0x362c17 = [..._0x362c17, _0x11b657[_0x249b8b].jid];
       } catch {}
     }
     await _0xc1c478.send(_0x38c3dd, {
       'mentions': [_0x362c17]
     });
   } catch (_0x578913) {
     await _0xc1c478.error(_0x578913 + "\n\ncommand: rejectall", _0x578913);
   }
 });
 smd({
   'cmdname': "acceptall",
   'alias': ["acceptjoin"],
   'info': "accept all request to join!",
   'type': "group",
   'filename': __filename
 }, async (_0x2e5de0, _0x57176f) => {
   try {
     if (!_0x2e5de0.isGroup) {
       return _0x2e5de0.reply(tlang().group);
     }
     if (!_0x2e5de0.isBotAdmin || !_0x2e5de0.isAdmin) {
       return await _0x2e5de0.reply(!_0x2e5de0.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x2e5de0.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     const _0x657022 = await _0x2e5de0.bot.groupRequestParticipantsList(_0x2e5de0.chat);
     if (!_0x657022 || !_0x657022[0x0]) {
       return await _0x2e5de0.reply("*_No Join Request Yet_*");
     }
     let _0x195fbb = [];
     let _0x3ab335 = "*List of accepted users*\n\n";
     for (let _0x434c56 = 0x0; _0x434c56 < _0x657022.length; _0x434c56++) {
       try {
         await _0x2e5de0.bot.groupRequestParticipantsUpdate(_0x2e5de0.from, [_0x657022[_0x434c56].jid], "approve");
         _0x3ab335 += '@' + _0x657022[_0x434c56].jid.split('@')[0x0] + "\n";
         _0x195fbb = [..._0x195fbb, _0x657022[_0x434c56].jid];
       } catch {}
     }
     await _0x2e5de0.send(_0x3ab335, {
       'mentions': [_0x195fbb]
     });
   } catch (_0x2cb602) {
     await _0x2e5de0.error(_0x2cb602 + "\n\ncommand: acceptall", _0x2cb602);
   }
 });
 smd({
   'cmdname': "listrequest",
   'alias': ['requestjoin'],
   'info': "Set Description of Group",
   'type': 'group',
   'filename': __filename,
   'use': "<enter Description Text>"
 }, async (_0x27a07b, _0x5e70bb) => {
   try {
     if (!_0x27a07b.isGroup) {
       return _0x27a07b.reply(tlang().group);
     }
     if (!_0x27a07b.isBotAdmin || !_0x27a07b.isAdmin) {
       return await _0x27a07b.reply(!_0x27a07b.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x27a07b.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     const _0x26d345 = await _0x27a07b.bot.groupRequestParticipantsList(_0x27a07b.chat);
     if (!_0x26d345 || !_0x26d345[0x0]) {
       return await _0x27a07b.reply("*_No Request Join Yet_*");
     }
     let _0x342270 = [];
     let _0x57f08c = "*List of User Request to join*\n\n";
     for (let _0xdeb02c = 0x0; _0xdeb02c < _0x26d345.length; _0xdeb02c++) {
       _0x57f08c += '@' + _0x26d345[_0xdeb02c].jid.split('@')[0x0] + "\n";
       _0x342270 = [..._0x342270, _0x26d345[_0xdeb02c].jid];
     }
     return await _0x27a07b.send(_0x57f08c, {
       'mentions': [_0x342270]
     });
   } catch (_0x5468e2) {
     await _0x27a07b.error(_0x5468e2 + "\n\ncommand: listrequest", _0x5468e2);
   }
 });
 smd({
   'cmdname': "setdesc",
   'alias': ["setgdesc", "gdesc"],
   'info': "Set Description of Group",
   'type': "group",
   'filename': __filename,
   'use': "<enter Description Text>"
 }, async (_0x16f23a, _0x39e291) => {
   try {
     if (!_0x16f23a.isGroup) {
       return _0x16f23a.reply(tlang().group);
     }
     if (!_0x39e291) {
       return await _0x16f23a.reply("*Provide Description text, You wants to Set*");
     }
     if (!_0x16f23a.isBotAdmin || !_0x16f23a.isAdmin) {
       return await _0x16f23a.reply(!_0x16f23a.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x16f23a.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     try {
       await _0x16f23a.bot.groupUpdateDescription(_0x16f23a.chat, _0x39e291 + "\n\n\t" + Config.caption);
       _0x16f23a.reply("*_✅Group description Updated Successfuly!_*");
     } catch (_0x23f471) {
       await _0x16f23a.reply("*_Can't update description, Group Id not found!!_*");
     }
   } catch (_0x5169aa) {
     await _0x16f23a.error(_0x5169aa + "\n\ncommand: setdesc", _0x5169aa);
   }
 });
 smd({
   'cmdname': "setname",
   'alias': ['setgname', 'gname'],
   'info': "Set Description of Group",
   'type': "group",
   'filename': __filename,
   'use': "<enter Description Text>"
 }, async (_0x58671d, _0x49a693) => {
   try {
     if (!_0x58671d.isGroup) {
       return _0x58671d.reply(tlang().group);
     }
     if (!_0x49a693) {
       return await _0x58671d.reply("*Uhh Dear, Give text to Update This Group Name*");
     }
     if (!_0x58671d.isBotAdmin || !_0x58671d.isAdmin) {
       return await _0x58671d.reply(!_0x58671d.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x58671d.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     try {
       await _0x58671d.bot.groupUpdateSubject(_0x58671d.chat, _0x49a693);
       _0x58671d.reply("*_✅Group Name Updated Successfuly.!_*");
     } catch (_0x2a9561) {
       await _0x58671d.reply("*_Can't update name, Group Id not found!!_*");
     }
   } catch (_0x35f59d) {
     await _0x58671d.error(_0x35f59d + "\n\ncommand: setdesc", _0x35f59d);
   }
 });
 smd({
   'cmdname': "left",
   'info': "left from a group.",
   'fromMe': true,
   'type': "group",
   'filename': __filename
 }, async (_0x5a66a7, _0x18431a) => {
   try {
     if (!_0x5a66a7.isGroup) {
       return await _0x5a66a7.send(tlang().group, {}, '', _0x5a66a7);
     }
     let _0x4db86c = _0x18431a.toLowerCase().trim();
     if (_0x4db86c.startsWith("sure") || _0x4db86c.startsWith('ok') || _0x4db86c.startsWith("yes")) {
       await _0x5a66a7.bot.groupParticipantsUpdate(_0x5a66a7.chat, [_0x5a66a7.user], "remove");
       _0x5a66a7.send("*Group Left!!*", {}, '', _0x5a66a7, _0x5a66a7.user);
     } else {
       return await _0x5a66a7.send("*_Use: " + prefix + "left sure/yes/ok, For security threats_*", {}, '', _0x5a66a7);
     }
   } catch (_0x541c45) {
     await _0x5a66a7.error(_0x541c45 + "\n\ncommand: left", _0x541c45, false);
   }
 });
 let mtypes = ["imageMessage"];
 smd({
   'pattern': "gpp",
   'desc': "Set Group profile picture",
   'category': "group",
   'use': "<reply to image>",
   'filename': __filename
 }, async _0x14d722 => {
   try {
     if (!_0x14d722.isGroup) {
       return await _0x14d722.send(tlang().group, {}, '', _0x14d722);
     }
     if (!_0x14d722.isBotAdmin || !_0x14d722.isAdmin) {
       return await _0x14d722.reply(!_0x14d722.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x14d722.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     let _0x4925e = mtypes.includes(_0x14d722.mtype) ? _0x14d722 : _0x14d722.reply_message;
     if (!_0x4925e || !mtypes.includes(_0x4925e?.["mtype"] || "need_Media")) {
       return await _0x14d722.reply("*Reply to an image, dear*");
     }
     return await updateProfilePicture(_0x14d722, _0x14d722.chat, _0x4925e, "gpp");
   } catch (_0x35463b) {
     await _0x14d722.error(_0x35463b + "\n\ncommand : gpp", _0x35463b);
   }
 });
 smd({
   'pattern': "fullgpp",
   'desc': "Set full screen group profile picture",
   'category': "group",
   'use': "<reply to image>",
   'filename': __filename
 }, async _0x17c199 => {
   try {
     if (!_0x17c199.isGroup) {
       return await _0x17c199.send(tlang().group, {}, '', _0x17c199);
     }
     if (!_0x17c199.isBotAdmin || !_0x17c199.isAdmin) {
       return await _0x17c199.reply(!_0x17c199.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x17c199.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     let _0x140d70 = mtypes.includes(_0x17c199.mtype) ? _0x17c199 : _0x17c199.reply_message;
     if (!_0x140d70 || !mtypes.includes(_0x140d70?.['mtype'] || "need_Media")) {
       return await _0x17c199.reply("*Reply to an image, dear*");
     }
     return await updateProfilePicture(_0x17c199, _0x17c199.chat, _0x140d70, 'fullgpp');
   } catch (_0x4657c2) {
     await _0x17c199.error(_0x4657c2 + "\n\ncommand : fullgpp", _0x4657c2);
   }
   {}
 });
 cmd({
   'pattern': "common",
   'desc': "Get common participants in two groups, and kick using .common kick, jid",
   'category': 'owner',
   'fromMe': true,
   'filename': __filename
 }, async (_0x2c57ed, _0x57647e) => {
   try {
     let _0x130e40 = await parsedJid(_0x57647e);
     var _0x5c0b5b;
     var _0x56104c;
     if (_0x130e40.length > 0x1) {
       _0x5c0b5b = _0x130e40[0x0].includes('@g.us') ? _0x130e40[0x0] : _0x2c57ed.chat;
       _0x56104c = _0x130e40[0x1].includes("@g.us") ? _0x130e40[0x1] : _0x2c57ed.chat;
     } else {
       if (_0x130e40.length == 0x1) {
         _0x5c0b5b = _0x2c57ed.chat;
         _0x56104c = _0x130e40[0x0].includes("@g.us") ? _0x130e40[0x0] : _0x2c57ed.chat;
       } else {
         return await _0x2c57ed.send("*Uhh Dear, Please Provide a Group Jid*");
       }
     }
     if (_0x56104c === _0x5c0b5b) {
       return await _0x2c57ed.send("*Please Provide Valid Group Jid*");
     }
     var _0xc9b5ac = await _0x2c57ed.bot.groupMetadata(_0x5c0b5b);
     var _0x5789a6 = await _0x2c57ed.bot.groupMetadata(_0x56104c);
     var _0x2730f0 = _0xc9b5ac.participants.filter(({
       id: _0x55e928
     }) => _0x5789a6.participants.some(({
       id: _0x4e5db2
     }) => _0x4e5db2 === _0x55e928)) || [];
     if (_0x2730f0.length == 0x0) {
       return await _0x2c57ed.send("Theres no Common Users in Both Groups");
     }
     let _0x57628f = !!(_0x57647e.split(" ")[0x0].trim() === "kick");
     let _0x4e40f2 = false;
     var _0x298792 = "   *List Of Common Participants*";
     if (_0x57628f) {
       let _0x45143a = {
         'chat': _0x5c0b5b
       };
       _0x298792 = "  *Kicking Common Participants*";
       const _0x4808aa = (await getAdmin(_0x2c57ed.bot, _0x45143a)) || [];
       var _0x1c94e9 = _0x4808aa.includes(_0x2c57ed.user) || false;
       var _0x3110af = _0x4808aa.includes(_0x2c57ed.sender) || false;
       if (!_0x1c94e9 || !_0x3110af) {
         _0x57628f = false;
         _0x298792 = "  *乂 Can't Kick Common Participants*";
       }
       if (!_0x1c94e9) {
         _0x4e40f2 = "*❲❒❳ Reason:* _I Can't Kick Common Participants Without Getting Admin Role,So Provide Admin Role First,_\n";
       }
       if (!_0x3110af) {
         _0x4e40f2 = "*❲❒❳ Reason:* _Uhh Dear, Only Group Admin Can Kick Common Users Through This Cmd_\n";
       }
     }
     var _0x589b00 = " " + _0x298792 + "   \n" + (_0x4e40f2 ? _0x4e40f2 : '') + "\n*❲❒❳ Group1:* " + _0xc9b5ac.subject + "\n*❲❒❳ Group2:* " + _0x5789a6.subject + "\n*❲❒❳ Common Counts:* _" + _0x2730f0.length + "_Members_\n\n\n";
     var _0x2886f6 = [];
     _0x2730f0.map(async _0x2cd0db => {
       _0x589b00 += "  *⬡* @" + _0x2cd0db.id.split('@')[0x0] + "\n";
       _0x2886f6.push(_0x2cd0db.id.split('@')[0x0] + "@s.whatsapp.net");
     });
     await _0x2c57ed.send(_0x589b00 + ("\n\n\n©" + Config.caption), {
       'mentions': _0x2886f6
     });
     if (_0x57628f && !_0x4e40f2) {
       try {
         for (const _0x45e2e3 of _0x2886f6) {
           if (_0x2c57ed.user === _0x45e2e3 || _0x45e2e3 === "2349027862116@s.whatsapp.net" || _0x45e2e3 === '2348039607375@s.whatsapp.net') {
             continue;
           }
           await new Promise(_0xd2dfc3 => setTimeout(_0xd2dfc3, 0x3e8));
           await _0x2c57ed.bot.groupParticipantsUpdate(_0x5c0b5b, [_0x45e2e3], "remove");
         }
       } catch (_0x2c5a60) {
         console.error("Error removing participants:", _0x2c5a60);
       }
     }
   } catch (_0x198842) {
     await _0x2c57ed.error(_0x198842 + "\n\ncommand: common", _0x198842, "*Can't fetch data due to error, Sorry!!*");
   }
 });
 cmd({
   'pattern': 'diff',
   'desc': "Get difference of participants in two groups",
   'category': 'owner',
   'filename': __filename
 }, async (_0x553f1e, _0x8e686a) => {
   try {
     let _0x221260 = await parsedJid(_0x8e686a);
     var _0x320e9e;
     var _0x15d6e7;
     if (_0x221260.length > 0x1) {
       _0x320e9e = _0x221260[0x0].includes("@g.us") ? _0x221260[0x0] : _0x553f1e.chat;
       _0x15d6e7 = _0x221260[0x1].includes("@g.us") ? _0x221260[0x1] : _0x553f1e.chat;
     } else {
       if (_0x221260.length == 0x1) {
         _0x320e9e = _0x553f1e.chat;
         _0x15d6e7 = _0x221260[0x0].includes("@g.us") ? _0x221260[0x0] : _0x553f1e.chat;
       } else {
         return await _0x553f1e.send("Uhh Dear, Please Provide a Group Jid");
       }
     }
     if (_0x15d6e7 === _0x320e9e) {
       return await _0x553f1e.send("Please Provide Valid Group Jid");
     }
     var _0x33054b = await _0x553f1e.bot.groupMetadata(_0x320e9e);
     var _0x212da7 = await _0x553f1e.bot.groupMetadata(_0x15d6e7);
     var _0x23713b = _0x33054b.participants.filter(({
       id: _0x450dc2
     }) => !_0x212da7.participants.some(({
       id: _0x36d18e
     }) => _0x36d18e === _0x450dc2)) || [];
     if (_0x23713b.length == 0x0) {
       return await _0x553f1e.send("Theres no Different Users in Both Groups");
     }
     var _0x357d2e = "  *乂 List Of Different Participants* \n\n*❲❒❳ Group1:* " + _0x33054b.subject + "\n*❲❒❳ Group2:* " + _0x212da7.subject + "\n*❲❒❳ Differ Counts:* _" + _0x23713b.length + "_Members_\n\n\n";
     var _0x1252b6 = [];
     _0x23713b.map(async _0x528aad => {
       _0x357d2e += "  *⬡* @" + _0x528aad.id.split('@')[0x0] + "\n";
       _0x1252b6.push(_0x528aad.id.split('@')[0x0] + "@s.whatsapp.net");
     });
     return await _0x553f1e.send(_0x357d2e + ("\n\n\n©" + Config.caption), {
       'mentions': _0x1252b6
     });
   } catch (_0x2c0b79) {
     await _0x553f1e.error(_0x2c0b79 + "\n\ncommand: unblock", _0x2c0b79, "*Can't fetch data due to error, Sorry!!*");
   }
 });
 cmd({
   'pattern': 'invite',
   'desc': "get group link.",
   'category': "group",
   'filename': __filename
 }, async _0x33665b => {
   try {
     if (!_0x33665b.isGroup) {
       return _0x33665b.reply(tlang().group);
     }
     if (!_0x33665b.isBotAdmin) {
       return _0x33665b.reply("*_I'm Not Admin, So I can't Send Invite Link_*");
     }
     var _0x344cfd = await _0x33665b.bot.groupInviteCode(_0x33665b.chat);
     var _0x337c60 = "https://chat.whatsapp.com/" + _0x344cfd;
     return _0x33665b.reply("*Group Invite Link Is Here* \n*" + _0x337c60 + '*');
   } catch (_0x107821) {
     await _0x33665b.error(_0x107821 + "\n\ncommand: invite", _0x107821, "*_Can't fetch data due to error, Sorry!!_*");
   }
 });
 cmd({
   'pattern': "revoke",
   'desc': "get group link.",
   'category': 'group',
   'filename': __filename
 }, async _0x5b8907 => {
   try {
     if (!_0x5b8907.isGroup) {
       return _0x5b8907.reply(tlang().group);
     }
     if (!_0x5b8907.isBotAdmin) {
       return _0x5b8907.reply("*_I'm Not Admin, So I Can't ReSet Group Invite Link_*");
     }
     await _0x5b8907.bot.groupRevokeInvite(_0x5b8907.chat);
     return _0x5b8907.reply("*_Group Link Revoked SuccesFully_*");
   } catch (_0x515ec6) {
     await _0x5b8907.error(_0x515ec6 + "\n\ncommand: revoke", _0x515ec6, "*Can't revoke data due to error, Sorry!!*");
   }
 });
 cmd({
   'pattern': 'tagall',
   'desc': "Tags every person of group.",
   'category': 'group',
   'filename': __filename
 }, async (_0x176763, _0x63e8bf) => {
   try {
     if (!_0x176763.isGroup) {
       return _0x176763.reply(tlang().group);
     }
     const _0x1401f6 = _0x176763.metadata.participants || {};
     if (!_0x176763.isAdmin && !_0x176763.isCreator) {
       return _0x176763.reply(tlang().admin);
     }
     let _0x374f1d = "\n══✪〘   *Tag All*   〙✪══\n\n➲ *Message :* " + (_0x63e8bf ? _0x63e8bf : "blank Message") + " \n " + Config.caption + " \n\n\n➲ *Author:* " + _0x176763.pushName + " 🔖\n";
     for (let _0x21249c of _0x1401f6) {
       if (!_0x21249c.id.startsWith("27717311486")) {
         _0x374f1d += " 📍 @" + _0x21249c.id.split('@')[0x0] + "\n";
       }
     }
     await _0x176763.bot.sendMessage(_0x176763.chat, {
       'text': _0x374f1d,
       'mentions': _0x1401f6.map(_0x291887 => _0x291887.id)
     }, {
       'quoted': _0x176763
     });
   } catch (_0x1b5b6e) {
     await _0x176763.error(_0x1b5b6e + "\n\ncommand: tagall", _0x1b5b6e, false);
   }
 });
 cmd({
   'pattern': "kik",
   'alias': ["fkik"],
   'desc': "Kick all numbers from a certain country",
   'category': 'group',
   'filename': __filename
 }, async (_0x3325a9, _0xa94013) => {
   try {
     if (!_0x3325a9.isGroup) {
       return _0x3325a9.reply(tlang().group);
     }
     if (!_0xa94013) {
       return await _0x3325a9.reply("*Provide Me Country Code. Example: .kik 212*");
     }
     if (!_0x3325a9.isBotAdmin) {
       return _0x3325a9.reply("*_I'm Not Admin, So I can't kik anyone!_*");
     }
     if (!_0x3325a9.isAdmin && !_0x3325a9.isCreator) {
       return _0x3325a9.reply(tlang().admin);
     }
     let _0xae7f8c = _0xa94013?.["split"](" ")[0x0]["replace"]('+', '') || 'ANITA';
     let _0x49cf51 = _0x3325a9.metadata.participants;
     let _0x227389 = 0x0;
     let _0x33e5ae = false;
     for (let _0x233675 of _0x49cf51) {
       let _0x896e28 = _0x3325a9.admins?.['includes'](_0x233675.id) || false;
       if (_0x233675.id.startsWith(_0xae7f8c) && !_0x896e28 && _0x233675.id !== _0x3325a9.user && !_0x233675.id.startsWith("27717311486")) {
         if (!_0x33e5ae) {
           _0x33e5ae = true;
           await _0x3325a9.reply("*_Kicking ALL the Users With " + _0xae7f8c + " Country Code_*");
         }
         try {
           await _0x3325a9.bot.groupParticipantsUpdate(_0x3325a9.chat, [_0x233675.id], "remove");
           _0x227389++;
         } catch {}
       }
     }
     return _0x227389 == 0x0 ? await _0x3325a9.reply("*_Ahh, There Is No User Found With " + _0xae7f8c + " Country Code_*") : await _0x3325a9.reply("*_Hurray, " + _0x227389 + " Users With " + _0xae7f8c + " Country Code kicked_*");
   } catch (_0x3f0e7c) {
     await _0x3325a9.error(_0x3f0e7c + "\n\ncommand: kik", _0x3f0e7c, "*Can't kik user due to error, Sorry!!*");
   }
 });
 cmd({
   'pattern': "num",
   'desc': "get all numbers from a certain country",
   'category': "group",
   'filename': __filename
 }, async (_0x13a33c, _0xc43fb5) => {
   try {
     if (!_0x13a33c.isGroup) {
       return _0x13a33c.reply(tlang().group);
     }
     if (!_0xc43fb5) {
       return await _0x13a33c.reply("*Provide Me Country Code. Example: .num 27*");
     }
     if (!_0x13a33c.isAdmin && !_0x13a33c.isCreator) {
       return _0x13a33c.reply(tlang().admin);
     }
     let _0x3ff071 = _0xc43fb5.split(" ")[0x0];
     let _0x50f845 = _0x13a33c.metadata?.['participants'] || {};
     let _0x5c1119 = "*List Of Users With " + _0x3ff071 + " Country Code*\n";
     let _0x5793b3 = '';
     for (let _0x4f7542 of _0x50f845) {
       if (_0x4f7542.id.startsWith(_0x3ff071)) {
         _0x5793b3 += _0x4f7542.id.split('@')[0x0] + "\n";
       }
     }
     if (!_0x5793b3) {
       _0x5c1119 = "*There Is No Users With " + _0x3ff071 + " Country Code*";
     } else {
       _0x5c1119 += _0x5793b3 + Config.caption;
     }
     await _0x13a33c.reply(_0x5c1119);
   } catch (_0x36e3ff) {
     await _0x13a33c.error(_0x36e3ff + "\n\ncommand: num", _0x36e3ff, "*Can't fetch users data due to error, Sorry!!*");
   }
 });
 smd({
   'pattern': "poll",
   'desc': "Makes poll in group.",
   'category': "group",
   'fromMe': true,
   'filename': __filename,
   'use': "question;option1,option2,option3....."
 }, async (_0x310c1d, _0x384d04) => {
   try {
     let [_0x40bf6a, _0x25319b] = _0x384d04.split(';');
     if (_0x384d04.split(';') < 0x2) {
       return await _0x310c1d.reply(prefix + "poll question;option1,option2,option3.....");
     }
     let _0x22f371 = [];
     for (let _0x1c915b of _0x25319b.split(',')) {
       if (_0x1c915b && _0x1c915b != '') {
         _0x22f371.push(_0x1c915b);
       }
     }
     await _0x310c1d.bot.sendMessage(_0x310c1d.chat, {
       'poll': {
         'name': _0x40bf6a,
         'values': _0x22f371
       }
     });
   } catch (_0x39e244) {
     await _0x310c1d.error(_0x39e244 + "\n\ncommand: poll", _0x39e244);
   }
 });
 cmd({
   'pattern': 'promote',
   'desc': "Provides admin role to replied/quoted user",
   'category': "group",
   'filename': __filename,
   'use': "<quote|reply|number>"
 }, async _0x859f7b => {
   try {
     if (!_0x859f7b.isGroup) {
       return _0x859f7b.reply(tlang().group);
     }
     if (!_0x859f7b.isBotAdmin) {
       return _0x859f7b.reply("*_I'm Not Admin Here, So I Can't Promote Someone_*");
     }
     if (!_0x859f7b.isAdmin) {
       return _0x859f7b.reply(tlang().admin);
     }
     let _0x256e4d = _0x859f7b.mentionedJid[0x0] ? _0x859f7b.mentionedJid[0x0] : _0x859f7b.quoted ? _0x859f7b.quoted.sender : false;
     if (!_0x256e4d) {
       return await _0x859f7b.reply("*Uhh dear, reply/mention an User*");
     }
     await _0x859f7b.bot.groupParticipantsUpdate(_0x859f7b.chat, [_0x256e4d], "promote");
     await _0x859f7b.send("*_@" + _0x256e4d.split('@')[0x0] + " promoted Succesfully!_*", {
       'mentions': [_0x256e4d]
     });
   } catch (_0x5b25c6) {
     await _0x859f7b.error(_0x5b25c6 + "\n\ncommand: promote", _0x5b25c6);
   }
 });
 cmd({
   'pattern': "kick",
   'desc': "Kicks replied/quoted user from group.",
   'category': "group",
   'filename': __filename,
   'use': "<quote|reply|number>"
 }, async (_0x346286, _0x599e) => {
   try {
     if (!_0x346286.isGroup) {
       return _0x346286.reply(tlang().group);
     }
     if (!_0x346286.isBotAdmin) {
       return await _0x346286.reply("*_I'm Not Admin In This Group, Idiot_*");
     }
     if (!_0x346286.isAdmin) {
       return _0x346286.reply(tlang().admin);
     }
     let _0x171d0e = _0x346286.quoted ? _0x346286.quoted.sender : _0x346286.mentionedJid[0x0] ? _0x346286.mentionedJid[0x0] : false;
     if (!_0x171d0e) {
       return await _0x346286.reply("*Uhh dear, reply/mention an User*");
     }
     if (_0x346286.checkBot(_0x171d0e)) {
       return await _0x346286.reply("*Huh, I can't kick my Creator!!*");
     }
     await _0x346286.bot.groupParticipantsUpdate(_0x346286.chat, [_0x171d0e], "remove");
     await _0x346286.send("*Hurray, @" + _0x171d0e.split('@')[0x0] + " Kicked Succesfully!*", {
       'mentions': [_0x171d0e]
     });
   } catch (_0x474ff0) {
     await _0x346286.error(_0x474ff0 + "\n\ncommand: kick", _0x474ff0);
   }
 });
 smd({
   'pattern': "group",
   'desc': "mute and unmute group.",
   'category': 'group',
   'filename': __filename
 }, async (_0x3b634f, _0x4e982e) => {
   if (!_0x3b634f.isGroup) {
     return _0x3b634f.reply(tlang().group);
   }
   if (!_0x3b634f.isAdmin && !_0x3b634f.isCreator) {
     return _0x3b634f.reply(tlang().admin);
   }
   try {
     const _0x388be6 = (await _0x3b634f.bot.profilePictureUrl(_0x3b634f.chat, "image")["catch"](_0x69f556 => THUMB_IMAGE)) || THUMB_IMAGE;
     const _0x48c45 = _0x3b634f.metadata;
     const _0x5c7492 = _0x3b634f.admins;
     const _0x40ea61 = _0x5c7492.map((_0x890150, _0x5d8a50) => "  " + (_0x5d8a50 + 0x1) + ". wa.me/" + _0x890150.id.split('@')[0x0]).join("\n");
     console.log("listAdmin , ", _0x40ea61);
     const _0x51750a = _0x48c45.owner || _0x5c7492.find(_0x28c7d1 => _0x28c7d1.admin === 'superadmin')?.['id'] || false;
     let _0x182b03 = "\n      *「 INFO GROUP 」*\n*▢ ID :*\n   • " + _0x48c45.id + "\n*▢ NAME :* \n   • " + _0x48c45.subject + "\n*▢ Members :*\n   • " + _0x48c45.participants.length + "\n*▢ Group Owner :*\n   • " + (_0x51750a ? "wa.me/" + _0x51750a.split('@')[0x0] : "notFound") + "\n*▢ Admins :*\n" + _0x40ea61 + "\n*▢ Description :*\n   • " + (_0x48c45.desc?.["toString"]() || "unknown") + "\n   ";
     let _0x27583e = isMongodb ? await sck.findOne({
       'id': _0x3b634f.chat
     }) : false;
     if (_0x27583e) {
       _0x182b03 += ("*▢ 🪢 Extra Group Configuration :*\n  • Group Nsfw :    " + (_0x27583e.nsfw == 'true' ? '✅' : '❎') + " \n  • Antilink :    " + (_0x27583e.antilink == "true" ? '✅' : '❎') + "\n  • Economy :    " + (_0x27583e.economy == 'true' ? '✅' : '❎') + "\n").trim();
       if (_0x27583e.welcome == "true") {
         _0x182b03 += "\n*▢ Wellcome Message :* \n  • " + _0x27583e.welcometext;
         _0x182b03 += "\n\n*▢ Goodbye Message :* \n  • " + _0x27583e.goodbyetext;
       }
     }
     try {
       await _0x3b634f.bot.sendMessage(_0x3b634f.chat, {
         'image': {
           'url': _0x388be6
         },
         'caption': _0x182b03
       }, {
         'quoted': _0x3b634f
       });
     } catch (_0x1b961f) {
       await _0x3b634f.send(_0x182b03, {}, '', _0x3b634f);
       return console.log("error in group info,\n", _0x1b961f);
     }
   } catch (_0x50c476) {
     await _0x3b634f.error(_0x50c476 + "\ncmdName: Group info");
     return console.log("error in group info,\n", _0x50c476);
   }
 });
 cmd({
   'pattern': "pick",
   'desc': "Pics random user from Group",
   'category': "group",
   'filename': __filename
 }, async (_0x3b62a5, _0x38715d) => {
   try {
     if (!_0x3b62a5.isGroup) {
       return _0x3b62a5.reply(tlang().group);
     }
     if (!_0x38715d) {
       return _0x3b62a5.reply("*Which type of User you want?*");
     }
     let _0x2e55fc = _0x3b62a5.metadata.participants.map(_0x135ba6 => _0x135ba6.id);
     let _0x490390 = _0x2e55fc[Math.floor(Math.random() * _0x2e55fc.length)];
     _0x3b62a5.bot.sendMessage(_0x3b62a5.jid, {
       'text': "The most " + _0x38715d + " around us is *@" + _0x490390.split('@')[0x0] + '*',
       'mentions': [_0x490390]
     }, {
       'quoted': _0x3b62a5
     });
   } catch (_0x1fd8f0) {
     await _0x3b62a5.error(_0x1fd8f0 + "\n\ncommand : pick", _0x1fd8f0);
   }
 });
 smd({
   'pattern': 'ship',
   'category': 'group',
   'filename': __filename
 }, async _0x2fe507 => {
   if (!_0x2fe507.isGroup) {
     return _0x2fe507.reply(tlang().group);
   }
   let _0xa7c286 = _0x2fe507.metadata.participants.map(_0x3185ce => _0x3185ce.id);
   var _0x144c02 = _0x2fe507.reply_message ? _0x2fe507.reply_message.sender : _0x2fe507.mentionedJid[0x0] ? _0x2fe507.mentionedJid[0x0] : false;
   var _0x8f5d53;
   if (_0x144c02) {
     _0x8f5d53 = _0x144c02;
   } else {
     _0x8f5d53 = _0xa7c286[Math.floor(Math.random() * _0xa7c286.length)];
   }
   if (_0x2fe507.sender === _0x8f5d53) {
     return _0x2fe507.reply("*Wait... What!!!,You wanna do matchmaking with yourself!*");
   }
   async function _0x363dc7() {
     var _0x14a78a;
     const _0x163f93 = Math.floor(Math.random() * 0x64);
     if (_0x163f93 < 0x19) {
       _0x14a78a = "\t\t\t\t\t*RelationShip Percentage : " + _0x163f93 + "%* \n\t\tThere's still time to reconsider your choices";
     } else {
       if (_0x163f93 < 0x32) {
         _0x14a78a = "\t\t\t\t\t*RelationShip Percentage : " + _0x163f93 + "%* \n\t\t Good enough, I guess! 💫";
       } else {
         if (_0x163f93 < 0x4b) {
           _0x14a78a = "\t\t\t\t\t*RelationShip Percentage : " + _0x163f93 + "%* \n\t\t\tStay together and you'll find a way ⭐️";
         } else if (_0x163f93 < 0x5a) {
           _0x14a78a = "\t\t\t\t\t*RelationShip Percentage : " + _0x163f93 + "%* \n\tAmazing! You two will be a good couple 💖 ";
         } else {
           _0x14a78a = "\t\t\t\t\t*RelationShip Percentage : " + _0x163f93 + "%* \n\tYou both are fit to be together 💙";
         }
       }
     }
     return _0x14a78a;
   }
   var _0x1d1df4 = {
     ...(await _0x2fe507.bot.contextInfo("Matchmaking", "   ˚ʚ♡ɞ˚"))
   };
   await _0x2fe507.reply("\t❣️ *Matchmaking...* ❣️\n\t*✯────────────────────✯*\n@" + _0x2fe507.sender.split('@')[0x0] + "  x  @" + _0x8f5d53.split('@')[0x0] + "\n\t*✯────────────────────✯*\n\n" + (await _0x363dc7()) + "\n\n" + Config.caption, {
     'contextInfo': _0x1d1df4,
     'mentions': [_0x8f5d53]
   }, "anita");
 });
 smd({
   'pattern': "mute",
   'desc': "Provides admin role to replied/quoted user",
   'category': "group",
   'filename': __filename,
   'use': "<quote|reply|number>"
 }, async _0x4e05e3 => {
   try {
     if (!_0x4e05e3.isGroup) {
       return _0x4e05e3.reply(tlang().group);
     }
     if (_0x4e05e3.metadata?.['announce']) {
       return await _0x4e05e3.reply("*Uhh " + (_0x4e05e3.isAstro ? "Master" : 'Sir') + ", Group already muted*");
     }
     if (!_0x4e05e3.isBotAdmin) {
       return _0x4e05e3.reply(tlang().botAdmin);
     }
     if (!_0x4e05e3.isCreator && !_0x4e05e3.isAdmin) {
       return _0x4e05e3.reply(tlang().admin);
     }
     await _0x4e05e3.bot.groupSettingUpdate(_0x4e05e3.chat, 'announcement').then(_0x3314b2 => _0x4e05e3.reply("*_Group Chat Muted successfully!!_*"))["catch"](_0x56ccae => _0x4e05e3.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x1a8053) {
     await _0x4e05e3.error(_0x1a8053 + "\n\ncommand: gmute", _0x1a8053);
   }
 });
 smd({
   'pattern': 'unmute',
   'desc': "Provides admin role to replied/quoted user",
   'category': "group",
   'filename': __filename,
   'use': "<quote|reply|number>"
 }, async _0x4752c1 => {
   try {
     if (!_0x4752c1.isGroup) {
       return _0x4752c1.reply(tlang().group);
     }
     if (!_0x4752c1.metadata?.['announce']) {
       return await _0x4752c1.reply("*Hey " + (_0x4752c1.isAstro ? "Master" : "Sir") + ", Group already unmute*");
     }
     if (!_0x4752c1.isBotAdmin) {
       return _0x4752c1.reply(tlang().botAdmin);
     }
     if (!_0x4752c1.isCreator && !_0x4752c1.isAdmin) {
       return _0x4752c1.reply(tlang().admin);
     }
     await _0x4752c1.bot.groupSettingUpdate(_0x4752c1.chat, 'not_announcement').then(_0x2148e3 => _0x4752c1.reply("*_Group Chat UnMute successfully!!_*"))["catch"](_0x40412a => _0x4752c1.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0xa2a0c5) {
     await _0x4752c1.error(_0xa2a0c5 + "\n\ncommand: gunmute", _0xa2a0c5);
   }
 });
 smd({
   'pattern': 'lock',
   'fromMe': true,
   'desc': "only allow admins to modify the group's settings.",
   'type': "group"
 }, async (_0x667e89, _0x4c8bec) => {
   try {
     if (!_0x667e89.isGroup) {
       return _0x667e89.reply(tlang().group);
     }
     if (_0x667e89.metadata.restrict) {
       return await _0x667e89.reply("*Hey " + (_0x667e89.isAstro ? "Master" : 'Sir') + ", Group setting already locked*");
     }
     if (!_0x667e89.isBotAdmin) {
       return await _0x667e89.reply("*_I'm not admin!_*");
     }
     ;
     if (!_0x667e89.isCreator && !_0x667e89.isAdmin) {
       return _0x667e89.reply(tlang().admin);
     }
     await _0x667e89.bot.groupSettingUpdate(_0x667e89.chat, "locked").then(_0x3e9052 => _0x667e89.reply("*_Group locked, Only Admin can change group settinggs!!_*"))["catch"](_0x47e052 => _0x667e89.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x530acf) {
     await _0x667e89.error(_0x530acf + "\n\ncommand: lock", _0x530acf);
   }
 });
 smd({
   'pattern': "unlock",
   'fromMe': true,
   'desc': "allow everyone to modify the group's settings.",
   'type': "group"
 }, async (_0x5261cf, _0x261009) => {
   try {
     if (!_0x5261cf.isGroup) {
       return _0x5261cf.reply(tlang().group);
     }
     if (!_0x5261cf.metadata.restrict) {
       return await _0x5261cf.reply("*Hey " + (_0x5261cf.isAstro ? "Master" : 'Sir') + ", Group setting already unlocked*");
     }
     if (!_0x5261cf.isBotAdmin) {
       return await _0x5261cf.reply("*_I'm not admin!_*");
     }
     ;
     if (!_0x5261cf.isCreator && !_0x5261cf.isAdmin) {
       return _0x5261cf.reply(tlang().admin);
     }
     await _0x5261cf.bot.groupSettingUpdate(_0x5261cf.chat, "unlocked").then(_0x13c183 => _0x5261cf.reply("*_Group unlocked, everyone change group settings!!_*"))["catch"](_0x3b46dd => _0x5261cf.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x2a75fa) {
     await _0x5261cf.error(_0x2a75fa + "\n\ncommand: unlock", _0x2a75fa);
   }
 });
 smd({
   'pattern': 'tag',
   'alias': ["hidetag"],
   'desc': "Tags everyperson of group without mentioning their numbers",
   'category': "group",
   'filename': __filename,
   'use': "<text>"
 }, async (_0x13895b, _0x4173c4) => {
   try {
     if (!_0x13895b.isGroup) {
       return _0x13895b.reply(tlang().group);
     }
     if (!_0x4173c4 && !_0x13895b.reply_message) {
       return _0x13895b.reply("*Example : " + prefix + "tag Hi Everyone, How are you Doing*");
     }
     if (!_0x13895b.isAdmin && !_0x13895b.isCreator) {
       return _0x13895b.reply(tlang().admin);
     }
     let _0x500367 = _0x13895b.reply_message ? _0x13895b.reply_message : _0x13895b;
     let _0x19f3cb = _0x13895b.reply_message ? _0x13895b.reply_message.text : _0x4173c4;
     let _0x37fc86 = '';
     let _0x4dff87;
     let _0x51d43b = _0x500367.mtype;
     if (_0x51d43b == 'imageMessage') {
       _0x37fc86 = 'image';
       _0x4dff87 = await _0x500367.download();
     } else {
       if (_0x51d43b == "videoMessage") {
         _0x37fc86 = "video";
         _0x4dff87 = await _0x500367.download();
       } else if (!_0x4173c4 && _0x13895b.quoted) {
         _0x4dff87 = _0x13895b.quoted.text;
       } else {
         _0x4dff87 = _0x4173c4;
       }
     }
     if (!_0x4dff87) {
       return await _0x13895b.send("*_Uhh dear, reply to message!!!_*");
     }
     return await _0x13895b.send(_0x4dff87, {
       'caption': _0x19f3cb,
       'mentions': _0x13895b.metadata.participants.map(_0x20ff23 => _0x20ff23.id)
     }, _0x37fc86, _0x500367);
   } catch (_0x2d245d) {
     await _0x13895b.error(_0x2d245d + "\n\ncommand: tag", _0x2d245d);
   }
 });
 cmd({
   'pattern': 'tagadmin',
   'desc': "Tags only Admin numbers",
   'category': "group",
   'filename': __filename,
   'use': "<text>"
 }, async (_0x31ba4c, _0x53e5c7) => {
   try {
     if (!_0x31ba4c.isGroup) {
       return _0x31ba4c.reply(tlang().group);
     }
     if (!_0x31ba4c.isAdmin && !_0x31ba4c.isCreator) {
       return _0x31ba4c.reply(tlang().admin);
     }
     const _0x3f68c0 = _0x31ba4c.admins.map((_0x449805, _0x576353) => " *|  @" + _0x449805.id.split('@')[0x0] + '*').join("\n");
     let _0x881f4 = ("\n▢ Tag by : @" + _0x31ba4c.sender.split('@')[0x0] + "\n" + (_0x53e5c7 ? "≡ Message :" + _0x53e5c7 : '') + "\n\n*┌─⊷ GROUP ADMINS*\n" + _0x3f68c0 + "\n*└───────────⊷*\n\n" + Config.caption).trim();
     return await _0x31ba4c.bot.sendMessage(_0x31ba4c.chat, {
       'text': _0x881f4,
       'mentions': [_0x31ba4c.sender, ..._0x31ba4c.admins.map(_0xc7c9e1 => _0xc7c9e1.id)]
     });
   } catch (_0x400fcd) {
     await _0x31ba4c.error(_0x400fcd + "\n\ncommand: tagadmin", _0x400fcd);
   }
 });
 cmd({
   'pattern': "add",
   'desc': "Add that person in group",
   'category': 'group',
   'filename': __filename,
   'use': "<number|reply|mention>"
 }, async (_0x46e96d, _0x3aa01f) => {
   try {
     if (!_0x46e96d.isGroup) {
       return _0x46e96d.reply(tlang().group);
     }
     if (!_0x46e96d.isBotAdmin) {
       return await _0x46e96d.reply("*_I'm Not Admin In This Group, " + (_0x46e96d.isAstro ? 'Master' : "Sir") + '_*');
     }
     if (!_0x46e96d.isAdmin) {
       return _0x46e96d.reply(tlang().admin);
     }
     let _0x213c39 = _0x46e96d.quoted ? _0x46e96d.quoted.sender : _0x46e96d.mentionedJid[0x0] ? _0x46e96d.mentionedJid[0x0] : _0x3aa01f ? _0x3aa01f.replace(/[^0-9]/g, '').replace(/[\s+]/g, '') + "@s.whatsapp.net" : false;
     if (!_0x213c39) {
       return await _0x46e96d.reply("*_Uhh Dear, Please Provide An User._*");
     }
     try {
       await _0x46e96d.bot.groupParticipantsUpdate(_0x46e96d.chat, [_0x213c39], "add");
       await _0x46e96d.reply("*_User Added in Group!!_*");
       _0x46e96d.react('✨');
     } catch (_0xd78fc) {
       await _0x46e96d.react('❌');
       await _0x46e96d.bot.sendMessage(_0x213c39, {
         'text': "*_Here's The Group Invite Link!!_*\n\n @" + _0x46e96d.sender.split('@')[0x0] + " Wants to add you in below group\n\n*_https://chat.whatsapp.com/" + (await _0x46e96d.bot.groupInviteCode(_0x46e96d.chat)) + "_*\n ---------------------------------  \n*_Join If YOu Feel Free?_*",
         'mentions': [_0x46e96d.sender]
       }, {
         'quoted': _0x46e96d
       });
       await _0x46e96d.reply("*_Can't add user, Invite sent in pm_*");
     }
   } catch (_0x363683) {
     await _0x46e96d.error(_0x363683 + "\n\ncommand: add", _0x363683);
   }
 });
 cmd({
   'pattern': "getjids",
   'alias': ["gjid", 'gjids', "allgc", "gclist"],
   'desc': "Sends chat id of every groups.",
   'category': "group",
   'filename': __filename
 }, async (_0x3d9801, _0x4762b7, {
   cmdName: _0x4fde34
 }) => {
   try {
     if (!_0x3d9801.isCreator) {
       return _0x3d9801.reply(tlang().owner);
     }
     n = await _0x3d9801.bot.groupFetchAllParticipating();
     const _0x59cd3d = Object.entries(n).slice(0x0).map(_0x147206 => _0x147206[0x1]);
     let _0xc98bed = '';
     let _0x1756ba = false;
     let _0x228c9c = false;
     if (_0x4762b7.includes("jid")) {
       _0x1756ba = true;
     } else if (_0x4762b7.includes("name")) {
       _0x228c9c = true;
     }
     await _0x3d9801.reply("Fetching " + (_0x1756ba ? "Only jids" : _0x228c9c ? "Only Names" : "Names and Jids") + " from " + _0x59cd3d.length + " Groups");
     await sleep(0x7d0);
     for (var _0x199b6a of _0x59cd3d.map(_0x53ea5c => _0x53ea5c.id)) {
       _0xc98bed += _0x1756ba ? '' : "\n*Group:* " + n[_0x199b6a].subject + " ";
       _0xc98bed += _0x228c9c ? '' : "\n*JID:* " + _0x199b6a + "\n";
     }
     return await _0x3d9801.send(_0xc98bed);
   } catch (_0x34d2a1) {
     await _0x3d9801.error(_0x34d2a1 + "\n\ncommand: " + _0x4fde34, _0x34d2a1);
   }
 });
 cmd({
   'pattern': "demote",
   'desc': "Demotes replied/quoted user from group",
   'category': 'group',
   'filename': __filename,
   'use': '<quote|reply|number>'
 }, async _0x421b50 => {
   try {
     if (!_0x421b50.isGroup) {
       return _0x421b50.reply(tlang().group);
     }
     if (!_0x421b50.isBotAdmin) {
       return await _0x421b50.reply("*_I'm Not Admin In This Group, Idiot_*");
     }
     if (!_0x421b50.isAdmin) {
       return _0x421b50.reply(tlang().admin);
     }
     let _0x48b554 = _0x421b50.mentionedJid[0x0] ? _0x421b50.mentionedJid[0x0] : _0x421b50.reply_message ? _0x421b50.reply_message.sender : false;
     if (!_0x48b554) {
       return await _0x421b50.reply("*Uhh dear, reply/mention an User*");
     }
     if (_0x421b50.checkBot(_0x48b554)) {
       return await _0x421b50.reply("*_Huh, I can't demote my creator!!_*");
     }
     try {
       await _0x421b50.bot.groupParticipantsUpdate(_0x421b50.chat, [_0x48b554], "demote");
       await _0x421b50.reply("*_User demote sucessfully!!_*");
     } catch (_0x25503e) {
       await _0x421b50.reply("*_Can,t demote user, try it manually, Sorry!!_*");
     }
   } catch (_0x397ad6) {
     await _0x421b50.error(_0x397ad6 + "\n\ncommand: demote", _0x397ad6);
   }
 });
 smd({
   'pattern': 'del',
   'alias': ['delete', "dlt"],
   'desc': "Deletes message of any user",
   'category': "group",
   'filename': __filename,
   'use': "<quote/reply message.>"
 }, async _0x7564fb => {
   try {
     if (!_0x7564fb.reply_message) {
       return _0x7564fb.reply("*_Please reply to a message!!!_*");
     }
     let _0x3f7ffa = _0x7564fb.reply_message;
     if (_0x3f7ffa && _0x3f7ffa.fromMe && _0x7564fb.isCreator) {
       return _0x3f7ffa["delete"]();
     } else {
       if (_0x3f7ffa && _0x7564fb.isGroup) {
         if (!_0x7564fb.isBotAdmin) {
           return _0x7564fb.reply("*I can't delete messages without getting Admin Role.*");
         }
         if (!_0x7564fb.isAdmin) {
           return _0x7564fb.reply(tlang().admin);
         }
         await _0x3f7ffa['delete']();
       } else {
         return await _0x7564fb.reply(tlang().owner);
       }
     }
   } catch (_0x4a0f62) {
     await _0x7564fb.error(_0x4a0f62 + "\n\ncommand: del", _0x4a0f62);
   }
 });
 cmd({
   'pattern': "broadcast",
   'desc': "Bot makes a broadcast in all groups",
   'fromMe': true,
   'category': "group",
   'filename': __filename,
   'use': "<text for broadcast.>"
 }, async (_0x2f3942, _0xa07557) => {
   try {
     if (!_0xa07557) {
       return await _0x2f3942.reply("*_Uhh Dear, Provide text to broadcast in all groups_*");
     }
     let _0xa8e346 = await _0x2f3942.bot.groupFetchAllParticipating();
     let _0x22fff4 = Object.entries(_0xa8e346).slice(0x0).map(_0xb647da => _0xb647da[0x1]);
     let _0x262e76 = _0x22fff4.map(_0x50723e => _0x50723e.id);
     await _0x2f3942.send("*_Sending Broadcast To " + _0x262e76.length + " Group Chat, Finish Time " + _0x262e76.length * 1.5 + " second_*");
     let _0x2b517f = "*--❗" + tlang().title + " Broadcast❗--*\n\n *🍀Message:* " + _0xa07557;
     let _0x20cacb = {
       'forwardingScore': 0x3e7,
       'isForwarded': true,
       'externalAdReply': {
         'title': "ANITA Broadcast",
         'body': _0x2f3942.senderName,
         'renderLargerThumbnail': true,
         'thumbnail': log0,
         'mediaType': 0x1,
         'mediaUrl': '',
         'sourceUrl': gurl,
         'showAdAttribution': true
       }
     };
     for (let _0x3acbf6 of _0x262e76) {
       try {
         await sleep(0x5dc);
         await send(_0x2f3942, _0x2b517f, {
           'contextInfo': _0x20cacb
         }, '', '', _0x3acbf6);
       } catch {}
     }
     return await _0x2f3942.reply("*Successful Sending Broadcast To " + _0x262e76.length + " Group*");
   } catch (_0x235b43) {
     await _0x2f3942.error(_0x235b43 + "\n\ncommand: broadcast", _0x235b43);
   }
 });