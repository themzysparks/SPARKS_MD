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
 } = require('../lib');
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
 const astro_patch = require("../lib/plugins");
 const {
   cmd
 } = astro_patch;
 const grouppattern = /https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/g;
 smd({
   'cmdname': "join",
   'info': "joins group by link",
   'type': 'whatsapp',
   'fromMe': true,
   'filename': __filename,
   'use': "<group link.>"
 }, async (_0x86b741, _0x13de9c) => {
   try {
     if (_0x86b741.reply_message && _0x86b741.reply_message.groupInvite) {
       var _0x4661ba = await _0x86b741.bot.groupAcceptInviteV4(_0x86b741.chat, _0x86b741.reply_message.msg);
       if (_0x4661ba && _0x4661ba.includes("joined to:")) {
         return await send(_0x86b741, '*_Joined_*', {}, '', _0x86b741);
       }
     }
     let _0xe72ac1 = _0x13de9c ? _0x13de9c : _0x86b741.reply_text;
     const _0x2cf886 = _0xe72ac1.match(grouppattern);
     if (!_0x2cf886) {
       return await _0x86b741.reply("*_Uhh Please, provide group link_*");
     }
     let _0x1a5fad = _0x2cf886[0x0].split('https://chat.whatsapp.com/')[0x1].trim();
     await _0x86b741.bot.groupAcceptInvite(_0x1a5fad).then(_0x25904d => send(_0x86b741, "*_Joined_*", {}, '', _0x86b741))["catch"](_0x754336 => _0x86b741.send("*_Can't Join, Group Id not found!!_*"));
   } catch (_0xd57fff) {
     await _0x86b741.error(_0xd57fff + "\n\ncommand: join", _0xd57fff, "*_Can't Join, Group Id not found, Sorry!!_*");
   }
 });
 smd({
   'cmdname': "newgc",
   'info': "Create New Group",
   'type': 'whatsapp',
   'filename': __filename,
   'use': "<group link.>"
 }, async (_0x28e65d, _0x17c420, {
   smd: _0xdf951d,
   cmdName: _0x2cc7af
 }) => {
   try {
     if (!_0x28e65d.isCreator) {
       return _0x28e65d.reply(tlang().owner);
     }
     if (!_0x17c420) {
       return await _0x28e65d.reply("*_provide Name to Create new Group!!!_*\n*_Ex: " + (prefix + _0xdf951d) + " My Name Group @user1,2,3.._*");
     }
     let _0x24bf00 = _0x17c420;
     if (_0x24bf00.toLowerCase() === "info") {
       return await _0x28e65d.send(("\n  *Its a command to create new Gc*\n  \t```Ex: " + (prefix + cmd) + " My new Group```\n  \n*You also add peoples in newGc*\n  \t```just reply or mention Users```\n  ").trim());
     }
     let _0x4ab333 = [_0x28e65d.sender];
     if (_0x28e65d.quoted) {
       _0x4ab333.push(_0x28e65d.quoted.sender);
     }
     if (_0x28e65d.mentionedJid && _0x28e65d.mentionedJid[0x0]) {
       _0x4ab333.push(..._0x28e65d.mentionedJid);
       try {
         mentionJids.forEach(_0x8ed8b1 => {
           var _0x79b4b9 = _0x8ed8b1.split('@')[0x0].trim();
           _0x24bf00 = _0x24bf00.replace(new RegExp('@' + _0x79b4b9, 'g'), '');
         });
       } catch {}
     }
     const _0x198d96 = _0x24bf00.substring(0x0, 0x3c);
     const _0x532de4 = await Suhail.bot.groupCreate(_0x198d96, [..._0x4ab333]);
     if (_0x532de4) {
       let _0xa40156 = await _0x28e65d.bot.sendMessage(_0x532de4.id, {
         'text': "*_Hey Master, Welcome to new Group_*\n" + Config.caption
       });
       try {
         var _0x2611c4 = await Suhail.bot.groupInviteCode(_0x532de4.id);
       } catch {
         var _0x2611c4 = false;
       }
       var _0xc7aa8b = "https://chat.whatsapp.com/" + _0x2611c4;
       var _0x1d011c = {
         'externalAdReply': {
           'title': "ANITA",
           'body': '' + _0x198d96,
           'renderLargerThumbnail': true,
           'thumbnail': log0,
           'mediaType': 0x1,
           'mediaUrl': _0xc7aa8b,
           'sourceUrl': _0xc7aa8b
         }
       };
       return await send(_0x28e65d, ("*_Hurray, New group created!!!_*\n" + (_0x2611c4 ? '*_' + _0xc7aa8b + '_*' : '')).trim(), {
         'contextInfo': _0x1d011c
       }, '', _0xa40156);
     } else {
       await _0x28e65d.send("*_Can't create new group, Sorry!!_*");
     }
   } catch (_0x5c0937) {
     await _0x28e65d.error(_0x5c0937 + "\n\ncommand: " + _0x2cc7af, _0x5c0937, "*_Can't create new group, Sorry!!_*");
   }
 });
 smd({
   'pattern': 'ginfo',
   'desc': "get group info by link",
   'type': "group",
   'filename': __filename,
   'use': "<group link.>"
 }, async (_0x501568, _0x409a82) => {
   try {
     let _0x13c3fb = _0x409a82 ? _0x409a82 : _0x501568.reply_text;
     const _0xc5483c = _0x13c3fb.match(grouppattern) || false;
     if (!_0xc5483c) {
       return await _0x501568.reply("*_Uhh Please, provide group link_*");
     }
     let _0x4c21bb = _0xc5483c[0x0].split("https://chat.whatsapp.com/")[0x1].trim();
     const _0x426521 = await _0x501568.bot.groupGetInviteInfo(_0x4c21bb);
     if (_0x426521) {
       const _0xbab0b0 = new Date(_0x426521.creation * 0x3e8);
       var _0x27872d = _0xbab0b0.getFullYear();
       var _0x1ea2c5 = _0xbab0b0.getMonth() + 0x1;
       var _0xbd630 = _0xbab0b0.getDate();
       var _0x19ac21 = _0x27872d + '-' + _0x1ea2c5.toString().padStart(0x2, '0') + '-' + _0xbd630.toString().padStart(0x2, '0');
       var _0x3a91d7 = {
         'externalAdReply': {
           'title': "ANITA",
           'body': _0x426521.subject,
           'renderLargerThumbnail': true,
           'thumbnail': log0,
           'mediaType': 0x1,
           'mediaUrl': _0xc5483c[0x0],
           'sourceUrl': _0xc5483c[0x0]
         }
       };
       return await send(_0x501568, (_0x426521.subject + "\n  \n  Creator: wa.me/" + _0x426521.owner.split('@')[0x0] + " \n  GJid; ```" + _0x426521.id + "  ```\n  *Muted:* " + (_0x426521.announce ? " yes" : " no") + "\n  *Locked:* " + (_0x426521.restrict ? " yes" : " no") + "\n  *createdAt:* " + _0x19ac21 + "\n  *participents:* " + (_0x426521.size > 0x3 ? _0x426521.size + 'th' : _0x426521.size) + "\n  " + (_0x426521.desc ? "*description:* " + _0x426521.desc + "\n" : '') + "\n  " + Config.caption + "\n  ").trim(), {
         'mentions': [_0x426521.owner],
         'contextInfo': _0x3a91d7
       }, '', _0x501568);
     } else {
       await _0x501568.send("*_Group Id not found, Sorry!!_*");
     }
   } catch (_0x1f15bf) {
     await _0x501568.error(_0x1f15bf + "\n\ncommand: ginfo", _0x1f15bf, "*_Group Id not found, Sorry!!_*");
   }
 });
 smd({
   'cmdname': "rejectall",
   'alias': ["rejectjoin"],
   'info': "reject all request to join!",
   'type': "group",
   'filename': __filename
 }, async (_0x24eef4, _0x2d866c) => {
   try {
     if (!_0x24eef4.isGroup) {
       return _0x24eef4.reply(tlang().group);
     }
     if (!_0x24eef4.isBotAdmin || !_0x24eef4.isAdmin) {
       return await _0x24eef4.reply(!_0x24eef4.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x24eef4.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     const _0x387590 = await _0x24eef4.bot.groupRequestParticipantsList(_0x24eef4.chat);
     if (!_0x387590 || !_0x387590[0x0]) {
       return await _0x24eef4.reply("*_No Request Join Yet_*");
     }
     let _0x27a1a6 = [];
     let _0x1b5fd9 = "*List of rejected users*\n\n";
     for (let _0x2346b9 = 0x0; _0x2346b9 < _0x387590.length; _0x2346b9++) {
       try {
         await _0x24eef4.bot.groupRequestParticipantsUpdate(_0x24eef4.from, [_0x387590[_0x2346b9].jid], 'reject');
         _0x1b5fd9 += '@' + _0x387590[_0x2346b9].jid.split('@')[0x0] + "\n";
         _0x27a1a6 = [..._0x27a1a6, _0x387590[_0x2346b9].jid];
       } catch {}
     }
     await _0x24eef4.send(_0x1b5fd9, {
       'mentions': [_0x27a1a6]
     });
   } catch (_0x127398) {
     await _0x24eef4.error(_0x127398 + "\n\ncommand: rejectall", _0x127398);
   }
 });
 smd({
   'cmdname': "acceptall",
   'alias': ["acceptjoin"],
   'info': "accept all request to join!",
   'type': "group",
   'filename': __filename
 }, async (_0x394d10, _0x105df1) => {
   try {
     if (!_0x394d10.isGroup) {
       return _0x394d10.reply(tlang().group);
     }
     if (!_0x394d10.isBotAdmin || !_0x394d10.isAdmin) {
       return await _0x394d10.reply(!_0x394d10.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x394d10.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     const _0xabf942 = await _0x394d10.bot.groupRequestParticipantsList(_0x394d10.chat);
     if (!_0xabf942 || !_0xabf942[0x0]) {
       return await _0x394d10.reply("*_No Join Request Yet_*");
     }
     let _0x36c307 = [];
     let _0x3a6c13 = "*List of accepted users*\n\n";
     for (let _0x4202f8 = 0x0; _0x4202f8 < _0xabf942.length; _0x4202f8++) {
       try {
         await _0x394d10.bot.groupRequestParticipantsUpdate(_0x394d10.from, [_0xabf942[_0x4202f8].jid], 'approve');
         _0x3a6c13 += '@' + _0xabf942[_0x4202f8].jid.split('@')[0x0] + "\n";
         _0x36c307 = [..._0x36c307, _0xabf942[_0x4202f8].jid];
       } catch {}
     }
     await _0x394d10.send(_0x3a6c13, {
       'mentions': [_0x36c307]
     });
   } catch (_0x239f97) {
     await _0x394d10.error(_0x239f97 + "\n\ncommand: acceptall", _0x239f97);
   }
 });
 smd({
   'cmdname': 'listrequest',
   'alias': ["requestjoin"],
   'info': "Set Description of Group",
   'type': "group",
   'filename': __filename,
   'use': "<enter Description Text>"
 }, async (_0x27186d, _0x5eaed3) => {
   try {
     if (!_0x27186d.isGroup) {
       return _0x27186d.reply(tlang().group);
     }
     if (!_0x27186d.isBotAdmin || !_0x27186d.isAdmin) {
       return await _0x27186d.reply(!_0x27186d.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x27186d.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     const _0x2f3ee5 = await _0x27186d.bot.groupRequestParticipantsList(_0x27186d.chat);
     if (!_0x2f3ee5 || !_0x2f3ee5[0x0]) {
       return await _0x27186d.reply("*_No Request Join Yet_*");
     }
     let _0x2c8530 = [];
     let _0x4274f2 = "*List of User Request to join*\n\n";
     for (let _0x418b3d = 0x0; _0x418b3d < _0x2f3ee5.length; _0x418b3d++) {
       _0x4274f2 += '@' + _0x2f3ee5[_0x418b3d].jid.split('@')[0x0] + "\n";
       _0x2c8530 = [..._0x2c8530, _0x2f3ee5[_0x418b3d].jid];
     }
     return await _0x27186d.send(_0x4274f2, {
       'mentions': [_0x2c8530]
     });
   } catch (_0x5f1093) {
     await _0x27186d.error(_0x5f1093 + "\n\ncommand: listrequest", _0x5f1093);
   }
 });
 smd({
   'cmdname': 'setdesc',
   'alias': ["setgdesc", "gdesc"],
   'info': "Set Description of Group",
   'type': 'group',
   'filename': __filename,
   'use': "<enter Description Text>"
 }, async (_0x4dcd96, _0x3d1122) => {
   try {
     if (!_0x4dcd96.isGroup) {
       return _0x4dcd96.reply(tlang().group);
     }
     if (!_0x3d1122) {
       return await _0x4dcd96.reply("*Provide Description text, You wants to Set*");
     }
     if (!_0x4dcd96.isBotAdmin || !_0x4dcd96.isAdmin) {
       return await _0x4dcd96.reply(!_0x4dcd96.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x4dcd96.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     try {
       await _0x4dcd96.bot.groupUpdateDescription(_0x4dcd96.chat, _0x3d1122 + "\n\n\t" + Config.caption);
       _0x4dcd96.reply("*_✅Group description Updated Successfuly!_*");
     } catch (_0x2aa5e2) {
       await _0x4dcd96.reply("*_Can't update description, Group Id not found!!_*");
     }
   } catch (_0x44cb15) {
     await _0x4dcd96.error(_0x44cb15 + "\n\ncommand: setdesc", _0x44cb15);
   }
 });
 smd({
   'cmdname': "setname",
   'alias': ["setgname", "gname"],
   'info': "Set Description of Group",
   'type': "group",
   'filename': __filename,
   'use': "<enter Description Text>"
 }, async (_0x435922, _0x497c66) => {
   try {
     if (!_0x435922.isGroup) {
       return _0x435922.reply(tlang().group);
     }
     if (!_0x497c66) {
       return await _0x435922.reply("*Uhh Dear, Give text to Update This Group Name*");
     }
     if (!_0x435922.isBotAdmin || !_0x435922.isAdmin) {
       return await _0x435922.reply(!_0x435922.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x435922.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     try {
       await _0x435922.bot.groupUpdateSubject(_0x435922.chat, _0x497c66);
       _0x435922.reply("*_✅Group Name Updated Successfuly.!_*");
     } catch (_0x2c212d) {
       await _0x435922.reply("*_Can't update name, Group Id not found!!_*");
     }
   } catch (_0x2b6ef1) {
     await _0x435922.error(_0x2b6ef1 + "\n\ncommand: setdesc", _0x2b6ef1);
   }
 });
 smd({
   'cmdname': "left",
   'info': "left from a group.",
   'fromMe': true,
   'type': "group",
   'filename': __filename
 }, async (_0x328237, _0x34ef97) => {
   try {
     if (!_0x328237.isGroup) {
       return await _0x328237.send(tlang().group, {}, '', _0x328237);
     }
     let _0x21b5d6 = _0x34ef97.toLowerCase().trim();
     if (_0x21b5d6.startsWith("sure") || _0x21b5d6.startsWith('ok') || _0x21b5d6.startsWith("yes")) {
       await _0x328237.bot.groupParticipantsUpdate(_0x328237.chat, [_0x328237.user], "remove");
       _0x328237.send("*Group Left!!*", {}, '', _0x328237, _0x328237.user);
     } else {
       return await _0x328237.send("*_Use: " + prefix + "left sure/yes/ok, For security threats_*", {}, '', _0x328237);
     }
   } catch (_0x4990c9) {
     await _0x328237.error(_0x4990c9 + "\n\ncommand: left", _0x4990c9, false);
   }
 });
 let mtypes = ["imageMessage"];
 smd({
   'pattern': "gpp",
   'desc': "Set Group profile picture",
   'category': "group",
   'use': "<reply to image>",
   'filename': __filename
 }, async _0x2808b5 => {
   try {
     if (!_0x2808b5.isGroup) {
       return await _0x2808b5.send(tlang().group, {}, '', _0x2808b5);
     }
     if (!_0x2808b5.isBotAdmin || !_0x2808b5.isAdmin) {
       return await _0x2808b5.reply(!_0x2808b5.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x2808b5.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     let _0xb0de59 = mtypes.includes(_0x2808b5.mtype) ? _0x2808b5 : _0x2808b5.reply_message;
     if (!_0xb0de59 || !mtypes.includes(_0xb0de59?.['mtype'] || "need_Media")) {
       return await _0x2808b5.reply("*Reply to an image, dear*");
     }
     return await updateProfilePicture(_0x2808b5, _0x2808b5.chat, _0xb0de59, "gpp");
   } catch (_0x3e7c58) {
     await _0x2808b5.error(_0x3e7c58 + "\n\ncommand : gpp", _0x3e7c58);
   }
 });
 smd({
   'pattern': 'fullgpp',
   'desc': "Set full screen group profile picture",
   'category': 'group',
   'use': "<reply to image>",
   'filename': __filename
 }, async _0x2a740b => {
   try {
     if (!_0x2a740b.isGroup) {
       return await _0x2a740b.send(tlang().group, {}, '', _0x2a740b);
     }
     if (!_0x2a740b.isBotAdmin || !_0x2a740b.isAdmin) {
       return await _0x2a740b.reply(!_0x2a740b.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x2a740b.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
     }
     let _0x4ba121 = mtypes.includes(_0x2a740b.mtype) ? _0x2a740b : _0x2a740b.reply_message;
     if (!_0x4ba121 || !mtypes.includes(_0x4ba121?.["mtype"] || "need_Media")) {
       return await _0x2a740b.reply("*Reply to an image, dear*");
     }
     return await updateProfilePicture(_0x2a740b, _0x2a740b.chat, _0x4ba121, "fullgpp");
   } catch (_0x27ba28) {
     await _0x2a740b.error(_0x27ba28 + "\n\ncommand : fullgpp", _0x27ba28);
   }
   {}
 });
 cmd({
   'pattern': "common",
   'desc': "Get common participants in two groups, and kick using .common kick, jid",
   'category': "owner",
   'fromMe': true,
   'filename': __filename
 }, async (_0x491e30, _0x15fc08) => {
   try {
     let _0x3d52ce = await parsedJid(_0x15fc08);
     var _0x4c64c2;
     var _0x4f1492;
     if (_0x3d52ce.length > 0x1) {
       _0x4c64c2 = _0x3d52ce[0x0].includes("@g.us") ? _0x3d52ce[0x0] : _0x491e30.chat;
       _0x4f1492 = _0x3d52ce[0x1].includes("@g.us") ? _0x3d52ce[0x1] : _0x491e30.chat;
     } else {
       if (_0x3d52ce.length == 0x1) {
         _0x4c64c2 = _0x491e30.chat;
         _0x4f1492 = _0x3d52ce[0x0].includes("@g.us") ? _0x3d52ce[0x0] : _0x491e30.chat;
       } else {
         return await _0x491e30.send("*Uhh Dear, Please Provide a Group Jid*");
       }
     }
     if (_0x4f1492 === _0x4c64c2) {
       return await _0x491e30.send("*Please Provide Valid Group Jid*");
     }
     var _0xafae79 = await _0x491e30.bot.groupMetadata(_0x4c64c2);
     var _0x5ee9c5 = await _0x491e30.bot.groupMetadata(_0x4f1492);
     var _0x534002 = _0xafae79.participants.filter(({
       id: _0x5184dc
     }) => _0x5ee9c5.participants.some(({
       id: _0x29b8ad
     }) => _0x29b8ad === _0x5184dc)) || [];
     if (_0x534002.length == 0x0) {
       return await _0x491e30.send("Theres no Common Users in Both Groups");
     }
     let _0x45c25b = !!(_0x15fc08.split(" ")[0x0].trim() === 'kick');
     let _0x16e5a3 = false;
     var _0x256306 = "   *List Of Common Participants*";
     if (_0x45c25b) {
       let _0x313a1d = {
         'chat': _0x4c64c2
       };
       _0x256306 = "  *Kicking Common Participants*";
       const _0x4b4bed = (await getAdmin(_0x491e30.bot, _0x313a1d)) || [];
       var _0x2dc07f = _0x4b4bed.includes(_0x491e30.user) || false;
       var _0x50fbfd = _0x4b4bed.includes(_0x491e30.sender) || false;
       if (!_0x2dc07f || !_0x50fbfd) {
         _0x45c25b = false;
         _0x256306 = "  *乂 Can't Kick Common Participants*";
       }
       if (!_0x2dc07f) {
         _0x16e5a3 = "*❲❒❳ Reason:* _I Can't Kick Common Participants Without Getting Admin Role,So Provide Admin Role First,_\n";
       }
       if (!_0x50fbfd) {
         _0x16e5a3 = "*❲❒❳ Reason:* _Uhh Dear, Only Group Admin Can Kick Common Users Through This Cmd_\n";
       }
     }
     var _0x2c9e6c = " " + _0x256306 + "   \n" + (_0x16e5a3 ? _0x16e5a3 : '') + "\n*❲❒❳ Group1:* " + _0xafae79.subject + "\n*❲❒❳ Group2:* " + _0x5ee9c5.subject + "\n*❲❒❳ Common Counts:* _" + _0x534002.length + "_Members_\n\n\n";
     var _0x11d23a = [];
     _0x534002.map(async _0x35b0d4 => {
       _0x2c9e6c += "  *⬡* @" + _0x35b0d4.id.split('@')[0x0] + "\n";
       _0x11d23a.push(_0x35b0d4.id.split('@')[0x0] + '@s.whatsapp.net');
     });
     await _0x491e30.send(_0x2c9e6c + ("\n\n\n©" + Config.caption), {
       'mentions': _0x11d23a
     });
     if (_0x45c25b && !_0x16e5a3) {
       try {
         for (const _0x59d571 of _0x11d23a) {
           if (_0x491e30.user === _0x59d571 || _0x59d571 === "2349027862116@s.whatsapp.net" || _0x59d571 === "2348039607375@s.whatsapp.net") {
             continue;
           }
           await new Promise(_0x262a19 => setTimeout(_0x262a19, 0x3e8));
           await _0x491e30.bot.groupParticipantsUpdate(_0x4c64c2, [_0x59d571], "remove");
         }
       } catch (_0x29aa38) {
         console.error("Error removing participants:", _0x29aa38);
       }
     }
   } catch (_0x352e2b) {
     await _0x491e30.error(_0x352e2b + "\n\ncommand: common", _0x352e2b, "*Can't fetch data due to error, Sorry!!*");
   }
 });
 cmd({
   'pattern': "diff",
   'desc': "Get difference of participants in two groups",
   'category': 'owner',
   'filename': __filename
 }, async (_0x77e830, _0x254c6e) => {
   try {
     let _0x1eb0d4 = await parsedJid(_0x254c6e);
     var _0x2e7a03;
     var _0x59c4f6;
     if (_0x1eb0d4.length > 0x1) {
       _0x2e7a03 = _0x1eb0d4[0x0].includes("@g.us") ? _0x1eb0d4[0x0] : _0x77e830.chat;
       _0x59c4f6 = _0x1eb0d4[0x1].includes('@g.us') ? _0x1eb0d4[0x1] : _0x77e830.chat;
     } else {
       if (_0x1eb0d4.length == 0x1) {
         _0x2e7a03 = _0x77e830.chat;
         _0x59c4f6 = _0x1eb0d4[0x0].includes('@g.us') ? _0x1eb0d4[0x0] : _0x77e830.chat;
       } else {
         return await _0x77e830.send("Uhh Dear, Please Provide a Group Jid");
       }
     }
     if (_0x59c4f6 === _0x2e7a03) {
       return await _0x77e830.send("Please Provide Valid Group Jid");
     }
     var _0x2bb77d = await _0x77e830.bot.groupMetadata(_0x2e7a03);
     var _0x5ceb6 = await _0x77e830.bot.groupMetadata(_0x59c4f6);
     var _0x493e28 = _0x2bb77d.participants.filter(({
       id: _0x275595
     }) => !_0x5ceb6.participants.some(({
       id: _0x1bb06a
     }) => _0x1bb06a === _0x275595)) || [];
     if (_0x493e28.length == 0x0) {
       return await _0x77e830.send("Theres no Different Users in Both Groups");
     }
     var _0x2ae06c = "  *乂 List Of Different Participants* \n\n*❲❒❳ Group1:* " + _0x2bb77d.subject + "\n*❲❒❳ Group2:* " + _0x5ceb6.subject + "\n*❲❒❳ Differ Counts:* _" + _0x493e28.length + "_Members_\n\n\n";
     var _0x1d2635 = [];
     _0x493e28.map(async _0x4ba33a => {
       _0x2ae06c += "  *⬡* @" + _0x4ba33a.id.split('@')[0x0] + "\n";
       _0x1d2635.push(_0x4ba33a.id.split('@')[0x0] + '@s.whatsapp.net');
     });
     return await _0x77e830.send(_0x2ae06c + ("\n\n\n©" + Config.caption), {
       'mentions': _0x1d2635
     });
   } catch (_0x551e40) {
     await _0x77e830.error(_0x551e40 + "\n\ncommand: unblock", _0x551e40, "*Can't fetch data due to error, Sorry!!*");
   }
 });
 cmd({
   'pattern': "invite",
   'desc': "get group link.",
   'category': "group",
   'filename': __filename
 }, async _0x5900ff => {
   try {
     if (!_0x5900ff.isGroup) {
       return _0x5900ff.reply(tlang().group);
     }
     if (!_0x5900ff.isBotAdmin) {
       return _0x5900ff.reply("*_I'm Not Admin, So I can't Send Invite Link_*");
     }
     var _0x3794eb = await _0x5900ff.bot.groupInviteCode(_0x5900ff.chat);
     var _0x31324b = "https://chat.whatsapp.com/" + _0x3794eb;
     return _0x5900ff.reply("*Group Invite Link Is Here* \n*" + _0x31324b + '*');
   } catch (_0x691b6d) {
     await _0x5900ff.error(_0x691b6d + "\n\ncommand: invite", _0x691b6d, "*_Can't fetch data due to error, Sorry!!_*");
   }
 });
 cmd({
   'pattern': 'revoke',
   'desc': "get group link.",
   'category': "group",
   'filename': __filename
 }, async _0x52e6ee => {
   try {
     if (!_0x52e6ee.isGroup) {
       return _0x52e6ee.reply(tlang().group);
     }
     if (!_0x52e6ee.isBotAdmin) {
       return _0x52e6ee.reply("*_I'm Not Admin, So I Can't ReSet Group Invite Link_*");
     }
     await _0x52e6ee.bot.groupRevokeInvite(_0x52e6ee.chat);
     return _0x52e6ee.reply("*_Group Link Revoked SuccesFully_*");
   } catch (_0x3c6d83) {
     await _0x52e6ee.error(_0x3c6d83 + "\n\ncommand: revoke", _0x3c6d83, "*Can't revoke data due to error, Sorry!!*");
   }
 });
 cmd({
   'pattern': "tagall",
   'desc': "Tags every person of group.",
   'category': "group",
   'filename': __filename
 }, async (_0x1bb5dd, _0x4719fc) => {
   try {
     if (!_0x1bb5dd.isGroup) {
       return _0x1bb5dd.reply(tlang().group);
     }
     const _0x28cbf0 = _0x1bb5dd.metadata.participants || {};
     if (!_0x1bb5dd.isAdmin && !_0x1bb5dd.isCreator) {
       return _0x1bb5dd.reply(tlang().admin);
     }
     let _0x479710 = "\n══✪〘   *Tag All*   〙✪══\n\n➲ *Message :* " + (_0x4719fc ? _0x4719fc : "blank Message") + " \n " + Config.caption + " \n\n\n➲ *Author:* " + _0x1bb5dd.pushName + " 🔖\n";
     for (let _0x27aa48 of _0x28cbf0) {
       if (!_0x27aa48.id.startsWith("27717311486")) {
         _0x479710 += " 📍 @" + _0x27aa48.id.split('@')[0x0] + "\n";
       }
     }
     await _0x1bb5dd.bot.sendMessage(_0x1bb5dd.chat, {
       'text': _0x479710,
       'mentions': _0x28cbf0.map(_0x299056 => _0x299056.id)
     }, {
       'quoted': _0x1bb5dd
     });
   } catch (_0x2936bb) {
     await _0x1bb5dd.error(_0x2936bb + "\n\ncommand: tagall", _0x2936bb, false);
   }
 });
 cmd({
   'pattern': "kik",
   'alias': ["fkik"],
   'desc': "Kick all numbers from a certain country",
   'category': "group",
   'filename': __filename
 }, async (_0x338348, _0x40a833) => {
   try {
     if (!_0x338348.isGroup) {
       return _0x338348.reply(tlang().group);
     }
     if (!_0x40a833) {
       return await _0x338348.reply("*Provide Me Country Code. Example: .kik 212*");
     }
     if (!_0x338348.isBotAdmin) {
       return _0x338348.reply("*_I'm Not Admin, So I can't kik anyone!_*");
     }
     if (!_0x338348.isAdmin && !_0x338348.isCreator) {
       return _0x338348.reply(tlang().admin);
     }
     let _0x9c6f85 = _0x40a833?.["split"](" ")[0x0]["replace"]('+', '') || "ANITA";
     let _0x543445 = _0x338348.metadata.participants;
     let _0x134656 = 0x0;
     let _0x2ce90e = false;
     for (let _0x2a20bd of _0x543445) {
       let _0x5c5a6c = _0x338348.admins?.["includes"](_0x2a20bd.id) || false;
       if (_0x2a20bd.id.startsWith(_0x9c6f85) && !_0x5c5a6c && _0x2a20bd.id !== _0x338348.user && !_0x2a20bd.id.startsWith("27717311486")) {
         if (!_0x2ce90e) {
           _0x2ce90e = true;
           await _0x338348.reply("*_Kicking ALL the Users With " + _0x9c6f85 + " Country Code_*");
         }
         try {
           await _0x338348.bot.groupParticipantsUpdate(_0x338348.chat, [_0x2a20bd.id], "remove");
           _0x134656++;
         } catch {}
       }
     }
     return _0x134656 == 0x0 ? await _0x338348.reply("*_Ahh, There Is No User Found With " + _0x9c6f85 + " Country Code_*") : await _0x338348.reply("*_Hurray, " + _0x134656 + " Users With " + _0x9c6f85 + " Country Code kicked_*");
   } catch (_0x13841e) {
     await _0x338348.error(_0x13841e + "\n\ncommand: kik", _0x13841e, "*Can't kik user due to error, Sorry!!*");
   }
 });
 cmd({
   'pattern': 'num',
   'desc': "get all numbers from a certain country",
   'category': "group",
   'filename': __filename
 }, async (_0x192a25, _0x18b487) => {
   try {
     if (!_0x192a25.isGroup) {
       return _0x192a25.reply(tlang().group);
     }
     if (!_0x18b487) {
       return await _0x192a25.reply("*Provide Me Country Code. Example: .num 91*");
     }
     if (!_0x192a25.isAdmin && !_0x192a25.isCreator) {
       return _0x192a25.reply(tlang().admin);
     }
     let _0xed7674 = _0x18b487.split(" ")[0x0];
     let _0x4ca4c3 = _0x192a25.metadata?.['participants'] || {};
     let _0x33a1cc = "*List Of Users With " + _0xed7674 + " Country Code*\n";
     let _0x31b7c8 = '';
     for (let _0x16b4ff of _0x4ca4c3) {
       if (_0x16b4ff.id.startsWith(_0xed7674)) {
         _0x31b7c8 += _0x16b4ff.id.split('@')[0x0] + "\n";
       }
     }
     if (!_0x31b7c8) {
       _0x33a1cc = "*There Is No Users With " + _0xed7674 + " Country Code*";
     } else {
       _0x33a1cc += _0x31b7c8 + Config.caption;
     }
     await _0x192a25.reply(_0x33a1cc);
   } catch (_0x121db0) {
     await _0x192a25.error(_0x121db0 + "\n\ncommand: num", _0x121db0, "*Can't fetch users data due to error, Sorry!!*");
   }
 });
 smd({
   'pattern': "poll",
   'desc': "Makes poll in group.",
   'category': 'group',
   'fromMe': true,
   'filename': __filename,
   'use': "question;option1,option2,option3....."
 }, async (_0xc7c5ec, _0x36c93b) => {
   try {
     let [_0x11c5ef, _0x3f868a] = _0x36c93b.split(';');
     if (_0x36c93b.split(';') < 0x2) {
       return await _0xc7c5ec.reply(prefix + "poll question;option1,option2,option3.....");
     }
     let _0x4a365c = [];
     for (let _0xa40263 of _0x3f868a.split(',')) {
       if (_0xa40263 && _0xa40263 != '') {
         _0x4a365c.push(_0xa40263);
       }
     }
     await _0xc7c5ec.bot.sendMessage(_0xc7c5ec.chat, {
       'poll': {
         'name': _0x11c5ef,
         'values': _0x4a365c
       }
     });
   } catch (_0x44efbd) {
     await _0xc7c5ec.error(_0x44efbd + "\n\ncommand: poll", _0x44efbd);
   }
 });
 cmd({
   'pattern': 'promote',
   'desc': "Provides admin role to replied/quoted user",
   'category': "group",
   'filename': __filename,
   'use': '<quote|reply|number>'
 }, async _0x187b2e => {
   try {
     if (!_0x187b2e.isGroup) {
       return _0x187b2e.reply(tlang().group);
     }
     if (!_0x187b2e.isBotAdmin) {
       return _0x187b2e.reply("*_I'm Not Admin Here, So I Can't Promote Someone_*");
     }
     if (!_0x187b2e.isAdmin) {
       return _0x187b2e.reply(tlang().admin);
     }
     let _0x569110 = _0x187b2e.mentionedJid[0x0] ? _0x187b2e.mentionedJid[0x0] : _0x187b2e.quoted ? _0x187b2e.quoted.sender : false;
     if (!_0x569110) {
       return await _0x187b2e.reply("*Uhh dear, reply/mention an User*");
     }
     await _0x187b2e.bot.groupParticipantsUpdate(_0x187b2e.chat, [_0x569110], 'promote');
     await _0x187b2e.send('*_@' + _0x569110.split('@')[0x0] + " promoted Succesfully!_*", {
       'mentions': [_0x569110]
     });
   } catch (_0x558e4c) {
     await _0x187b2e.error(_0x558e4c + "\n\ncommand: promote", _0x558e4c);
   }
 });
 cmd({
   'pattern': "kick",
   'desc': "Kicks replied/quoted user from group.",
   'category': 'group',
   'filename': __filename,
   'use': "<quote|reply|number>"
 }, async (_0x19c9ee, _0x4abeb8) => {
   try {
     if (!_0x19c9ee.isGroup) {
       return _0x19c9ee.reply(tlang().group);
     }
     if (!_0x19c9ee.isBotAdmin) {
       return await _0x19c9ee.reply("*_I'm Not Admin In This Group, Idiot_*");
     }
     if (!_0x19c9ee.isAdmin) {
       return _0x19c9ee.reply(tlang().admin);
     }
     let _0x30528a = _0x19c9ee.quoted ? _0x19c9ee.quoted.sender : _0x19c9ee.mentionedJid[0x0] ? _0x19c9ee.mentionedJid[0x0] : false;
     if (!_0x30528a) {
       return await _0x19c9ee.reply("*Uhh dear, reply/mention an User*");
     }
     if (_0x19c9ee.checkBot(_0x30528a)) {
       return await _0x19c9ee.reply("*Huh, I can't kick my Creator!!*");
     }
     await _0x19c9ee.bot.groupParticipantsUpdate(_0x19c9ee.chat, [_0x30528a], 'remove');
     await _0x19c9ee.send("*Hurray, @" + _0x30528a.split('@')[0x0] + " Kicked Succesfully!*", {
       'mentions': [_0x30528a]
     });
   } catch (_0x4ce20b) {
     await _0x19c9ee.error(_0x4ce20b + "\n\ncommand: kick", _0x4ce20b);
   }
 });
 smd({
   'pattern': 'group',
   'desc': "mute and unmute group.",
   'category': "group",
   'filename': __filename
 }, async (_0x59c514, _0x314da1) => {
   if (!_0x59c514.isGroup) {
     return _0x59c514.reply(tlang().group);
   }
   if (!_0x59c514.isAdmin && !_0x59c514.isCreator) {
     return _0x59c514.reply(tlang().admin);
   }
   try {
     const _0x4579e0 = (await _0x59c514.bot.profilePictureUrl(_0x59c514.chat, "image")["catch"](_0x2d273c => THUMB_IMAGE)) || THUMB_IMAGE;
     const _0xe8fa94 = _0x59c514.metadata;
     const _0xeb71ce = _0x59c514.admins;
     const _0x4809fa = _0xeb71ce.map((_0x3a39dc, _0x42ce9f) => "  " + (_0x42ce9f + 0x1) + ". wa.me/" + _0x3a39dc.id.split('@')[0x0]).join("\n");
     console.log("listAdmin , ", _0x4809fa);
     const _0x259047 = _0xe8fa94.owner || _0xeb71ce.find(_0x433372 => _0x433372.admin === "superadmin")?.['id'] || false;
     let _0x43ae87 = "\n      *「 INFO GROUP 」*\n*▢ ID :*\n   • " + _0xe8fa94.id + "\n*▢ NAME :* \n   • " + _0xe8fa94.subject + "\n*▢ Members :*\n   • " + _0xe8fa94.participants.length + "\n*▢ Group Owner :*\n   • " + (_0x259047 ? "wa.me/" + _0x259047.split('@')[0x0] : "notFound") + "\n*▢ Admins :*\n" + _0x4809fa + "\n*▢ Description :*\n   • " + (_0xe8fa94.desc?.['toString']() || "unknown") + "\n   ";
     let _0x44c014 = isMongodb ? await sck.findOne({
       'id': _0x59c514.chat
     }) : false;
     if (_0x44c014) {
       _0x43ae87 += ("*▢ 🪢 Extra Group Configuration :*\n  • Group Nsfw :    " + (_0x44c014.nsfw == "true" ? '✅' : '❎') + " \n  • Antilink :    " + (_0x44c014.antilink == "true" ? '✅' : '❎') + "\n  • Economy :    " + (_0x44c014.economy == "true" ? '✅' : '❎') + "\n").trim();
       if (_0x44c014.welcome == "true") {
         _0x43ae87 += "\n*▢ Wellcome Message :* \n  • " + _0x44c014.welcometext;
         _0x43ae87 += "\n\n*▢ Goodbye Message :* \n  • " + _0x44c014.goodbyetext;
       }
     }
     try {
       await _0x59c514.bot.sendMessage(_0x59c514.chat, {
         'image': {
           'url': _0x4579e0
         },
         'caption': _0x43ae87
       }, {
         'quoted': _0x59c514
       });
     } catch (_0x5b71ea) {
       await _0x59c514.send(_0x43ae87, {}, '', _0x59c514);
       return console.log("error in group info,\n", _0x5b71ea);
     }
   } catch (_0x326b95) {
     await _0x59c514.error(_0x326b95 + "\ncmdName: Group info");
     return console.log("error in group info,\n", _0x326b95);
   }
 });
 cmd({
   'pattern': 'pick',
   'desc': "Pics random user from Group",
   'category': 'group',
   'filename': __filename
 }, async (_0x436718, _0x47453e) => {
   try {
     if (!_0x436718.isGroup) {
       return _0x436718.reply(tlang().group);
     }
     if (!_0x47453e) {
       return _0x436718.reply("*Which type of User you want?*");
     }
     let _0x18bb9d = _0x436718.metadata.participants.map(_0x2988c7 => _0x2988c7.id);
     let _0x12dd14 = _0x18bb9d[Math.floor(Math.random() * _0x18bb9d.length)];
     _0x436718.bot.sendMessage(_0x436718.jid, {
       'text': "The most " + _0x47453e + " around us is *@" + _0x12dd14.split('@')[0x0] + '*',
       'mentions': [_0x12dd14]
     }, {
       'quoted': _0x436718
     });
   } catch (_0x4cb035) {
     await _0x436718.error(_0x4cb035 + "\n\ncommand : pick", _0x4cb035);
   }
 });
 smd({
   'pattern': "ship",
   'category': "group",
   'filename': __filename
 }, async _0x39c4ce => {
   if (!_0x39c4ce.isGroup) {
     return _0x39c4ce.reply(tlang().group);
   }
   let _0x41a9b3 = _0x39c4ce.metadata.participants.map(_0x376b9f => _0x376b9f.id);
   var _0x503a98 = _0x39c4ce.reply_message ? _0x39c4ce.reply_message.sender : _0x39c4ce.mentionedJid[0x0] ? _0x39c4ce.mentionedJid[0x0] : false;
   var _0xb64d64;
   if (_0x503a98) {
     _0xb64d64 = _0x503a98;
   } else {
     _0xb64d64 = _0x41a9b3[Math.floor(Math.random() * _0x41a9b3.length)];
   }
   if (_0x39c4ce.sender === _0xb64d64) {
     return _0x39c4ce.reply("*Wait... What!!!,You wanna do matchmaking with yourself!*");
   }
   async function _0x161c40() {
     var _0x521752;
     const _0xcc3b59 = Math.floor(Math.random() * 0x64);
     if (_0xcc3b59 < 0x19) {
       _0x521752 = "\t\t\t\t\t*RelationShip Percentage : " + _0xcc3b59 + "%* \n\t\tThere's still time to reconsider your choices";
     } else {
       if (_0xcc3b59 < 0x32) {
         _0x521752 = "\t\t\t\t\t*RelationShip Percentage : " + _0xcc3b59 + "%* \n\t\t Good enough, I guess! 💫";
       } else {
         if (_0xcc3b59 < 0x4b) {
           _0x521752 = "\t\t\t\t\t*RelationShip Percentage : " + _0xcc3b59 + "%* \n\t\t\tStay together and you'll find a way ⭐️";
         } else if (_0xcc3b59 < 0x5a) {
           _0x521752 = "\t\t\t\t\t*RelationShip Percentage : " + _0xcc3b59 + "%* \n\tAmazing! You two will be a good couple 💖 ";
         } else {
           _0x521752 = "\t\t\t\t\t*RelationShip Percentage : " + _0xcc3b59 + "%* \n\tYou both are fit to be together 💙";
         }
       }
     }
     return _0x521752;
   }
   var _0x2482be = {
     ...(await _0x39c4ce.bot.contextInfo("Matchmaking", "   ˚ʚ♡ɞ˚"))
   };
   await _0x39c4ce.reply("\t❣️ *Matchmaking...* ❣️\n\t*✯────────────────────✯*\n@" + _0x39c4ce.sender.split('@')[0x0] + "  x  @" + _0xb64d64.split('@')[0x0] + "\n\t*✯────────────────────✯*\n\n" + (await _0x161c40()) + "\n\n" + Config.caption, {
     'contextInfo': _0x2482be,
     'mentions': [_0xb64d64]
   }, "asta");
 });
 smd({
   'pattern': "mute",
   'desc': "Provides admin role to replied/quoted user",
   'category': "group",
   'filename': __filename,
   'use': "<quote|reply|number>"
 }, async _0x2501c8 => {
   try {
     if (!_0x2501c8.isGroup) {
       return _0x2501c8.reply(tlang().group);
     }
     if (_0x2501c8.metadata?.["announce"]) {
       return await _0x2501c8.reply("*Uhh " + (_0x2501c8.isAstro ? "Master" : 'Sir') + ", Group already muted*");
     }
     if (!_0x2501c8.isBotAdmin) {
       return _0x2501c8.reply(tlang().botAdmin);
     }
     if (!_0x2501c8.isCreator && !_0x2501c8.isAdmin) {
       return _0x2501c8.reply(tlang().admin);
     }
     await _0x2501c8.bot.groupSettingUpdate(_0x2501c8.chat, "announcement").then(_0x1d8287 => _0x2501c8.reply("*_Group Chat Muted successfully!!_*"))["catch"](_0x4f3d84 => _0x2501c8.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x182206) {
     await _0x2501c8.error(_0x182206 + "\n\ncommand: gmute", _0x182206);
   }
 });
 smd({
   'pattern': "unmute",
   'desc': "Provides admin role to replied/quoted user",
   'category': "group",
   'filename': __filename,
   'use': '<quote|reply|number>'
 }, async _0x53222a => {
   try {
     if (!_0x53222a.isGroup) {
       return _0x53222a.reply(tlang().group);
     }
     if (!_0x53222a.metadata?.['announce']) {
       return await _0x53222a.reply("*Hey " + (_0x53222a.isAstro ? "Master" : "Sir") + ", Group already unmute*");
     }
     if (!_0x53222a.isBotAdmin) {
       return _0x53222a.reply(tlang().botAdmin);
     }
     if (!_0x53222a.isCreator && !_0x53222a.isAdmin) {
       return _0x53222a.reply(tlang().admin);
     }
     await _0x53222a.bot.groupSettingUpdate(_0x53222a.chat, "not_announcement").then(_0x554110 => _0x53222a.reply("*_Group Chat UnMute successfully!!_*"))["catch"](_0x302108 => _0x53222a.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x47724b) {
     await _0x53222a.error(_0x47724b + "\n\ncommand: gunmute", _0x47724b);
   }
 });
 smd({
   'pattern': "lock",
   'fromMe': true,
   'desc': "only allow admins to modify the group's settings.",
   'type': "group"
 }, async (_0x457688, _0x11bf4e) => {
   try {
     if (!_0x457688.isGroup) {
       return _0x457688.reply(tlang().group);
     }
     if (_0x457688.metadata.restrict) {
       return await _0x457688.reply("*Hey " + (_0x457688.isAstro ? "Master" : "Sir") + ", Group setting already locked*");
     }
     if (!_0x457688.isBotAdmin) {
       return await _0x457688.reply("*_I'm not admin!_*");
     }
     ;
     if (!_0x457688.isCreator && !_0x457688.isAdmin) {
       return _0x457688.reply(tlang().admin);
     }
     await _0x457688.bot.groupSettingUpdate(_0x457688.chat, "locked").then(_0x1ae709 => _0x457688.reply("*_Group locked, Only Admin can change group settinggs!!_*"))["catch"](_0x363a2d => _0x457688.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x4d1581) {
     await _0x457688.error(_0x4d1581 + "\n\ncommand: lock", _0x4d1581);
   }
 });
 smd({
   'pattern': "unlock",
   'fromMe': true,
   'desc': "allow everyone to modify the group's settings.",
   'type': "group"
 }, async (_0x1e6b38, _0x11c801) => {
   try {
     if (!_0x1e6b38.isGroup) {
       return _0x1e6b38.reply(tlang().group);
     }
     if (!_0x1e6b38.metadata.restrict) {
       return await _0x1e6b38.reply("*Hey " + (_0x1e6b38.isAstro ? "Master" : 'Sir') + ", Group setting already unlocked*");
     }
     if (!_0x1e6b38.isBotAdmin) {
       return await _0x1e6b38.reply("*_I'm not admin!_*");
     }
     ;
     if (!_0x1e6b38.isCreator && !_0x1e6b38.isAdmin) {
       return _0x1e6b38.reply(tlang().admin);
     }
     await _0x1e6b38.bot.groupSettingUpdate(_0x1e6b38.chat, "unlocked").then(_0x437de5 => _0x1e6b38.reply("*_Group unlocked, everyone change group settings!!_*"))['catch'](_0xd168eb => _0x1e6b38.reply("*_Can't change Group Setting, Sorry!_*"));
   } catch (_0x2e8c93) {
     await _0x1e6b38.error(_0x2e8c93 + "\n\ncommand: unlock", _0x2e8c93);
   }
 });
 smd({
   'pattern': "tag",
   'alias': ['hidetag'],
   'desc': "Tags everyperson of group without mentioning their numbers",
   'category': "group",
   'filename': __filename,
   'use': '<text>'
 }, async (_0x5cb861, _0x521d05) => {
   try {
     if (!_0x5cb861.isGroup) {
       return _0x5cb861.reply(tlang().group);
     }
     if (!_0x521d05 && !_0x5cb861.reply_message) {
       return _0x5cb861.reply("*Example : " + prefix + "tag Hi Everyone, How are you Doing*");
     }
     if (!_0x5cb861.isAdmin && !_0x5cb861.isCreator) {
       return _0x5cb861.reply(tlang().admin);
     }
     let _0x5f1ae8 = _0x5cb861.reply_message ? _0x5cb861.reply_message : _0x5cb861;
     let _0x415db8 = _0x5cb861.reply_message ? _0x5cb861.reply_message.text : _0x521d05;
     let _0x36338a = '';
     let _0x169564;
     let _0x5985f3 = _0x5f1ae8.mtype;
     if (_0x5985f3 == "imageMessage") {
       _0x36338a = "image";
       _0x169564 = await _0x5f1ae8.download();
     } else {
       if (_0x5985f3 == "videoMessage") {
         _0x36338a = 'video';
         _0x169564 = await _0x5f1ae8.download();
       } else if (!_0x521d05 && _0x5cb861.quoted) {
         _0x169564 = _0x5cb861.quoted.text;
       } else {
         _0x169564 = _0x521d05;
       }
     }
     if (!_0x169564) {
       return await _0x5cb861.send("*_Uhh dear, reply to message!!!_*");
     }
     return await _0x5cb861.send(_0x169564, {
       'caption': _0x415db8,
       'mentions': _0x5cb861.metadata.participants.map(_0x552e77 => _0x552e77.id)
     }, _0x36338a, _0x5f1ae8);
   } catch (_0x2659d2) {
     await _0x5cb861.error(_0x2659d2 + "\n\ncommand: tag", _0x2659d2);
   }
 });
 cmd({
   'pattern': "tagadmin",
   'desc': "Tags only Admin numbers",
   'category': "group",
   'filename': __filename,
   'use': "<text>"
 }, async (_0x5d492c, _0x184634) => {
   try {
     if (!_0x5d492c.isGroup) {
       return _0x5d492c.reply(tlang().group);
     }
     if (!_0x5d492c.isAdmin && !_0x5d492c.isCreator) {
       return _0x5d492c.reply(tlang().admin);
     }
     const _0x463fd3 = _0x5d492c.admins.map((_0x1c3b11, _0x548669) => " *|  @" + _0x1c3b11.id.split('@')[0x0] + '*').join("\n");
     let _0x40fe94 = ("\n▢ Tag by : @" + _0x5d492c.sender.split('@')[0x0] + "\n" + (_0x184634 ? "≡ Message :" + _0x184634 : '') + "\n\n*┌─⊷ GROUP ADMINS*\n" + _0x463fd3 + "\n*└───────────⊷*\n\n" + Config.caption).trim();
     return await _0x5d492c.bot.sendMessage(_0x5d492c.chat, {
       'text': _0x40fe94,
       'mentions': [_0x5d492c.sender, ..._0x5d492c.admins.map(_0x3f6f43 => _0x3f6f43.id)]
     });
   } catch (_0x370a56) {
     await _0x5d492c.error(_0x370a56 + "\n\ncommand: tagadmin", _0x370a56);
   }
 });
 cmd({
   'pattern': "add",
   'desc': "Add that person in group",
   'category': "group",
   'filename': __filename,
   'use': '<number|reply|mention>'
 }, async (_0x3699d1, _0x17a189) => {
   try {
     if (!_0x3699d1.isGroup) {
       return _0x3699d1.reply(tlang().group);
     }
     if (!_0x3699d1.isBotAdmin) {
       return await _0x3699d1.reply("*_I'm Not Admin In This Group, " + (_0x3699d1.isAstro ? "Master" : "Sir") + '_*');
     }
     if (!_0x3699d1.isAdmin) {
       return _0x3699d1.reply(tlang().admin);
     }
     let _0x5504ac = _0x3699d1.quoted ? _0x3699d1.quoted.sender : _0x3699d1.mentionedJid[0x0] ? _0x3699d1.mentionedJid[0x0] : _0x17a189 ? _0x17a189.replace(/[^0-9]/g, '').replace(/[\s+]/g, '') + "@s.whatsapp.net" : false;
     if (!_0x5504ac) {
       return await _0x3699d1.reply("*_Uhh Dear, Please Provide An User._*");
     }
     try {
       await _0x3699d1.bot.groupParticipantsUpdate(_0x3699d1.chat, [_0x5504ac], "add");
       await _0x3699d1.reply("*_User Added in Group!!_*");
       _0x3699d1.react('✨');
     } catch (_0x38d1d8) {
       await _0x3699d1.react('❌');
       await _0x3699d1.bot.sendMessage(_0x5504ac, {
         'text': "*_Here's The Group Invite Link!!_*\n\n @" + _0x3699d1.sender.split('@')[0x0] + " Wants to add you in below group\n\n*_https://chat.whatsapp.com/" + (await _0x3699d1.bot.groupInviteCode(_0x3699d1.chat)) + "_*\n ---------------------------------  \n*_Join If YOu Feel Free?_*",
         'mentions': [_0x3699d1.sender]
       }, {
         'quoted': _0x3699d1
       });
       await _0x3699d1.reply("*_Can't add user, Invite sent in pm_*");
     }
   } catch (_0x3e772c) {
     await _0x3699d1.error(_0x3e772c + "\n\ncommand: add", _0x3e772c);
   }
 });
 cmd({
   'pattern': "getjids",
   'alias': ["gjid", 'gjids', "allgc", "gclist"],
   'desc': "Sends chat id of every groups.",
   'category': "group",
   'filename': __filename
 }, async (_0x1250ca, _0x266adf, {
   cmdName: _0x313c8e
 }) => {
   try {
     if (!_0x1250ca.isCreator) {
       return _0x1250ca.reply(tlang().owner);
     }
     n = await _0x1250ca.bot.groupFetchAllParticipating();
     const _0x511716 = Object.entries(n).slice(0x0).map(_0x5407bd => _0x5407bd[0x1]);
     let _0x553b91 = '';
     let _0x44997c = false;
     let _0x1f0ed9 = false;
     if (_0x266adf.includes("jid")) {
       _0x44997c = true;
     } else if (_0x266adf.includes("name")) {
       _0x1f0ed9 = true;
     }
     await _0x1250ca.reply("Fetching " + (_0x44997c ? "Only jids" : _0x1f0ed9 ? "Only Names" : "Names and Jids") + " from " + _0x511716.length + " Groups");
     await sleep(0x7d0);
     for (var _0x20270c of _0x511716.map(_0x1f1677 => _0x1f1677.id)) {
       _0x553b91 += _0x44997c ? '' : "\n*Group:* " + n[_0x20270c].subject + " ";
       _0x553b91 += _0x1f0ed9 ? '' : "\n*JID:* " + _0x20270c + "\n";
     }
     return await _0x1250ca.send(_0x553b91);
   } catch (_0x452efc) {
     await _0x1250ca.error(_0x452efc + "\n\ncommand: " + _0x313c8e, _0x452efc);
   }
 });
 cmd({
   'pattern': "demote",
   'desc': "Demotes replied/quoted user from group",
   'category': "group",
   'filename': __filename,
   'use': "<quote|reply|number>"
 }, async _0x3d2886 => {
   try {
     if (!_0x3d2886.isGroup) {
       return _0x3d2886.reply(tlang().group);
     }
     if (!_0x3d2886.isBotAdmin) {
       return await _0x3d2886.reply("*_I'm Not Admin In This Group, Idiot_*");
     }
     if (!_0x3d2886.isAdmin) {
       return _0x3d2886.reply(tlang().admin);
     }
     let _0x136b11 = _0x3d2886.mentionedJid[0x0] ? _0x3d2886.mentionedJid[0x0] : _0x3d2886.reply_message ? _0x3d2886.reply_message.sender : false;
     if (!_0x136b11) {
       return await _0x3d2886.reply("*Uhh dear, reply/mention an User*");
     }
     if (_0x3d2886.checkBot(_0x136b11)) {
       return await _0x3d2886.reply("*_Huh, I can't demote my creator!!_*");
     }
     try {
       await _0x3d2886.bot.groupParticipantsUpdate(_0x3d2886.chat, [_0x136b11], "demote");
       await _0x3d2886.reply("*_User demote sucessfully!!_*");
     } catch (_0x4e4c4f) {
       await _0x3d2886.reply("*_Can,t demote user, try it manually, Sorry!!_*");
     }
   } catch (_0xe82113) {
     await _0x3d2886.error(_0xe82113 + "\n\ncommand: demote", _0xe82113);
   }
 });
 smd({
   'pattern': "del",
   'alias': ['delete', "dlt"],
   'desc': "Deletes message of any user",
   'category': 'group',
   'filename': __filename,
   'use': "<quote/reply message.>"
 }, async _0x3a350b => {
   try {
     if (!_0x3a350b.reply_message) {
       return _0x3a350b.reply("*_Please reply to a message!!!_*");
     }
     let _0xf4eda5 = _0x3a350b.reply_message;
     if (_0xf4eda5 && _0xf4eda5.fromMe && _0x3a350b.isCreator) {
       return _0xf4eda5['delete']();
     } else {
       if (_0xf4eda5 && _0x3a350b.isGroup) {
         if (!_0x3a350b.isBotAdmin) {
           return _0x3a350b.reply("*I can't delete messages without getting Admin Role.*");
         }
         if (!_0x3a350b.isAdmin) {
           return _0x3a350b.reply(tlang().admin);
         }
         await _0xf4eda5["delete"]();
       } else {
         return await _0x3a350b.reply(tlang().owner);
       }
     }
   } catch (_0x2dde60) {
     await _0x3a350b.error(_0x2dde60 + "\n\ncommand: del", _0x2dde60);
   }
 });
 cmd({
   'pattern': "broadcast",
   'desc': "Bot makes a broadcast in all groups",
   'fromMe': true,
   'category': 'group',
   'filename': __filename,
   'use': "<text for broadcast.>"
 }, async (_0x5de4b1, _0x193765) => {
   try {
     if (!_0x193765) {
       return await _0x5de4b1.reply("*_Uhh Dear, Provide text to broadcast in all groups_*");
     }
     let _0x385ddd = await _0x5de4b1.bot.groupFetchAllParticipating();
     let _0x242221 = Object.entries(_0x385ddd).slice(0x0).map(_0x58e51 => _0x58e51[0x1]);
     let _0x368154 = _0x242221.map(_0x2fba6f => _0x2fba6f.id);
     await _0x5de4b1.send("*_Sending Broadcast To " + _0x368154.length + " Group Chat, Finish Time " + _0x368154.length * 1.5 + " second_*");
     let _0x268a6c = "*--❗" + tlang().title + " Broadcast❗--*\n\n *🍀Message:* " + _0x193765;
     let _0x3b4780 = {
       'forwardingScore': 0x3e7,
       'isForwarded': true,
       'externalAdReply': {
         'title': "ANITA Broadcast",
         'body': _0x5de4b1.senderName,
         'renderLargerThumbnail': true,
         'thumbnail': log0,
         'mediaType': 0x1,
         'mediaUrl': '',
         'sourceUrl': gurl,
         'showAdAttribution': true
       }
     };
     for (let _0x235fb4 of _0x368154) {
       try {
         await sleep(0x5dc);
         await send(_0x5de4b1, _0x268a6c, {
           'contextInfo': _0x3b4780
         }, '', '', _0x235fb4);
       } catch {}
     }
     return await _0x5de4b1.reply("*Successful Sending Broadcast To " + _0x368154.length + " Group*");
   } catch (_0xfd06fa) {
     await _0x5de4b1.error(_0xfd06fa + "\n\ncommand: broadcast", _0xfd06fa);
   }
 });