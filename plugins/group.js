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
  'type': "whatsapp",
  'fromMe': true,
  'filename': __filename,
  'use': "<group link.>"
}, async (_0x288a16, _0x1a42a4) => {
  try {
    if (_0x288a16.reply_message && _0x288a16.reply_message.groupInvite) {
      var _0x3218c6 = await _0x288a16.bot.groupAcceptInviteV4(_0x288a16.chat, _0x288a16.reply_message.msg);
      if (_0x3218c6 && _0x3218c6.includes("joined to:")) {
        return await send(_0x288a16, '*_Joined_*', {}, '', _0x288a16);
      }
    }
    let _0x6c2d21 = _0x1a42a4 ? _0x1a42a4 : _0x288a16.reply_text;
    const _0x2534bd = _0x6c2d21.match(grouppattern);
    if (!_0x2534bd) {
      return await _0x288a16.reply("*_Uhh Please, provide group link_*");
    }
    let _0x5e76fb = _0x2534bd[0x0].split("https://chat.whatsapp.com/")[0x1].trim();
    await _0x288a16.bot.groupAcceptInvite(_0x5e76fb).then(_0x19946b => send(_0x288a16, '*_Joined_*', {}, '', _0x288a16))["catch"](_0x53dcc0 => _0x288a16.send("*_Can't Join, Group Id not found!!_*"));
  } catch (_0x1b7d44) {
    await _0x288a16.error(_0x1b7d44 + "\n\ncommand: join", _0x1b7d44, "*_Can't Join, Group Id not found, Sorry!!_*");
  }
});
smd({
  'cmdname': "newgc",
  'info': "Create New Group",
  'type': 'whatsapp',
  'filename': __filename,
  'use': "<group link.>"
}, async (_0x7835a0, _0x3f4f72, {
  smd: _0x42b2a3,
  cmdName: _0x2d0537
}) => {
  try {
    if (!_0x7835a0.isCreator) {
      return _0x7835a0.reply(tlang().owner);
    }
    if (!_0x3f4f72) {
      return await _0x7835a0.reply("*_provide Name to Create new Group!!!_*\n*_Ex: " + (prefix + _0x42b2a3) + " My Name Group @user1,2,3.._*");
    }
    let _0x1f06f5 = _0x3f4f72;
    if (_0x1f06f5.toLowerCase() === "info") {
      return await _0x7835a0.send(("\n  *Its a command to create new Gc*\n  \t```Ex: " + (prefix + cmd) + " My new Group```\n  \n*You also add peoples in newGc*\n  \t```just reply or mention Users```\n  ").trim());
    }
    let _0x15fcfd = [_0x7835a0.sender];
    if (_0x7835a0.quoted) {
      _0x15fcfd.push(_0x7835a0.quoted.sender);
    }
    if (_0x7835a0.mentionedJid && _0x7835a0.mentionedJid[0x0]) {
      _0x15fcfd.push(..._0x7835a0.mentionedJid);
      try {
        mentionJids.forEach(_0x218a1d => {
          var _0x2204e6 = _0x218a1d.split('@')[0x0].trim();
          _0x1f06f5 = _0x1f06f5.replace(new RegExp('@' + _0x2204e6, 'g'), '');
        });
      } catch {}
    }
    const _0x5e8f5b = _0x1f06f5.substring(0x0, 0x3c);
    const _0x23a2e7 = await Suhail.bot.groupCreate(_0x5e8f5b, [..._0x15fcfd]);
    if (_0x23a2e7) {
      let _0x2336ec = await _0x7835a0.bot.sendMessage(_0x23a2e7.id, {
        'text': "*_Hey Master, Welcome to new Group_*\n" + Config.caption
      });
      try {
        var _0xf7e7a2 = await Suhail.bot.groupInviteCode(_0x23a2e7.id);
      } catch {
        var _0xf7e7a2 = false;
      }
      var _0x4f5fea = "https://chat.whatsapp.com/" + _0xf7e7a2;
      var _0x1c5f2e = {
        'externalAdReply': {
          'title': "ANITA",
          'body': '' + _0x5e8f5b,
          'renderLargerThumbnail': true,
          'thumbnail': log0,
          'mediaType': 0x1,
          'mediaUrl': _0x4f5fea,
          'sourceUrl': _0x4f5fea
        }
      };
      return await send(_0x7835a0, ("*_Hurray, New group created!!!_*\n" + (_0xf7e7a2 ? '*_' + _0x4f5fea + '_*' : '')).trim(), {
        'contextInfo': _0x1c5f2e
      }, '', _0x2336ec);
    } else {
      await _0x7835a0.send("*_Can't create new group, Sorry!!_*");
    }
  } catch (_0x354da3) {
    await _0x7835a0.error(_0x354da3 + "\n\ncommand: " + _0x2d0537, _0x354da3, "*_Can't create new group, Sorry!!_*");
  }
});
smd({
  'pattern': "ginfo",
  'desc': "get group info by link",
  'type': "group",
  'filename': __filename,
  'use': "<group link.>"
}, async (_0x248089, _0x2bfdf6) => {
  try {
    let _0x1cfbeb = _0x2bfdf6 ? _0x2bfdf6 : _0x248089.reply_text;
    const _0x9df3a0 = _0x1cfbeb.match(grouppattern) || false;
    if (!_0x9df3a0) {
      return await _0x248089.reply("*_Uhh Please, provide group link_*");
    }
    let _0x36cd78 = _0x9df3a0[0x0].split("https://chat.whatsapp.com/")[0x1].trim();
    const _0x1994f5 = await _0x248089.bot.groupGetInviteInfo(_0x36cd78);
    if (_0x1994f5) {
      const _0x586d79 = new Date(_0x1994f5.creation * 0x3e8);
      var _0x483e10 = _0x586d79.getFullYear();
      var _0xd7488a = _0x586d79.getMonth() + 0x1;
      var _0xbcd034 = _0x586d79.getDate();
      var _0x38ce74 = _0x483e10 + '-' + _0xd7488a.toString().padStart(0x2, '0') + '-' + _0xbcd034.toString().padStart(0x2, '0');
      var _0x16f0f4 = {
        'externalAdReply': {
          'title': "ANITA",
          'body': _0x1994f5.subject,
          'renderLargerThumbnail': true,
          'thumbnail': log0,
          'mediaType': 0x1,
          'mediaUrl': _0x9df3a0[0x0],
          'sourceUrl': _0x9df3a0[0x0]
        }
      };

      // Here is the fix: use _0x248089.bot.sendMessage to send the response
      return await _0x248089.bot.sendMessage(_0x248089.jid, {
        text: (_0x1994f5.subject + "\n\nCreator: wa.me/" + _0x1994f5.owner.split('@')[0x0] + " \nGJid: ```" + _0x1994f5.id + "```\n*Muted:* " + (_0x1994f5.announce ? " yes" : " no") + "\n*Locked:* " + (_0x1994f5.restrict ? " yes" : " no") + "\n*Created At:* " + _0x38ce74 + "\n*Participants:* " + (_0x1994f5.size > 0x3 ? _0x1994f5.size + 'th' : _0x1994f5.size) + "\n" + (_0x1994f5.desc ? "*Description:* " + _0x1994f5.desc + "\n" : '') + "\n" + Config.caption).trim(),
        'mentions': [_0x1994f5.owner],
        'contextInfo': _0x16f0f4
      });
    } else {
      await _0x248089.reply("*_Group Id not found, Sorry!!_*");
    }
  } catch (_0x48f8a3) {
    await _0x248089.reply("An error occurred while fetching group info: " + _0x48f8a3.message);
  }
});
smd({
  'cmdname': "rejectall",
  'alias': ["rejectjoin"],
  'info': "reject all request to join!",
  'type': "group",
  'filename': __filename
}, async (_0x2e41ff, _0x22d75e) => {
  try {
    if (!_0x2e41ff.isGroup) {
      return _0x2e41ff.reply(tlang().group);
    }
    if (!_0x2e41ff.isBotAdmin || !_0x2e41ff.isAdmin) {
      return await _0x2e41ff.reply(!_0x2e41ff.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x2e41ff.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    const _0x2bfc70 = await _0x2e41ff.bot.groupRequestParticipantsList(_0x2e41ff.chat);
    if (!_0x2bfc70 || !_0x2bfc70[0x0]) {
      return await _0x2e41ff.reply("*_No Request Join Yet_*");
    }
    let _0x68457a = [];
    let _0x484c7c = "*List of rejected users*\n\n";
    for (let _0x192bf6 = 0x0; _0x192bf6 < _0x2bfc70.length; _0x192bf6++) {
      try {
        await _0x2e41ff.bot.groupRequestParticipantsUpdate(_0x2e41ff.from, [_0x2bfc70[_0x192bf6].jid], "reject");
        _0x484c7c += '@' + _0x2bfc70[_0x192bf6].jid.split('@')[0x0] + "\n";
        _0x68457a = [..._0x68457a, _0x2bfc70[_0x192bf6].jid];
      } catch {}
    }
    await _0x2e41ff.send(_0x484c7c, {
      'mentions': [_0x68457a]
    });
  } catch (_0x5807b6) {
    await _0x2e41ff.error(_0x5807b6 + "\n\ncommand: rejectall", _0x5807b6);
  }
});
smd({
  'cmdname': 'acceptall',
  'alias': ["acceptjoin"],
  'info': "accept all request to join!",
  'type': "group",
  'filename': __filename
}, async (_0x13431c, _0x42d7a8) => {
  try {
    if (!_0x13431c.isGroup) {
      return _0x13431c.reply(tlang().group);
    }
    if (!_0x13431c.isBotAdmin || !_0x13431c.isAdmin) {
      return await _0x13431c.reply(!_0x13431c.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x13431c.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    const _0xae10f1 = await _0x13431c.bot.groupRequestParticipantsList(_0x13431c.chat);
    if (!_0xae10f1 || !_0xae10f1[0x0]) {
      return await _0x13431c.reply("*_No Join Request Yet_*");
    }
    let _0x352e1b = [];
    let _0x1c823c = "*List of accepted users*\n\n";
    for (let _0x3f8722 = 0x0; _0x3f8722 < _0xae10f1.length; _0x3f8722++) {
      try {
        await _0x13431c.bot.groupRequestParticipantsUpdate(_0x13431c.from, [_0xae10f1[_0x3f8722].jid], "approve");
        _0x1c823c += '@' + _0xae10f1[_0x3f8722].jid.split('@')[0x0] + "\n";
        _0x352e1b = [..._0x352e1b, _0xae10f1[_0x3f8722].jid];
      } catch {}
    }
    await _0x13431c.send(_0x1c823c, {
      'mentions': [_0x352e1b]
    });
  } catch (_0x4a1119) {
    await _0x13431c.error(_0x4a1119 + "\n\ncommand: acceptall", _0x4a1119);
  }
});
smd({
  'cmdname': "listrequest",
  'alias': ["requestjoin"],
  'info': "Set Description of Group",
  'type': 'group',
  'filename': __filename,
  'use': "<enter Description Text>"
}, async (_0x54b844, _0x4388ed) => {
  try {
    if (!_0x54b844.isGroup) {
      return _0x54b844.reply(tlang().group);
    }
    if (!_0x54b844.isBotAdmin || !_0x54b844.isAdmin) {
      return await _0x54b844.reply(!_0x54b844.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x54b844.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    const _0x24f7c1 = await _0x54b844.bot.groupRequestParticipantsList(_0x54b844.chat);
    if (!_0x24f7c1 || !_0x24f7c1[0x0]) {
      return await _0x54b844.reply("*_No Request Join Yet_*");
    }
    let _0x57a729 = [];
    let _0x3da909 = "*List of User Request to join*\n\n";
    for (let _0x126bfb = 0x0; _0x126bfb < _0x24f7c1.length; _0x126bfb++) {
      _0x3da909 += '@' + _0x24f7c1[_0x126bfb].jid.split('@')[0x0] + "\n";
      _0x57a729 = [..._0x57a729, _0x24f7c1[_0x126bfb].jid];
    }
    return await _0x54b844.send(_0x3da909, {
      'mentions': [_0x57a729]
    });
  } catch (_0x242a2b) {
    await _0x54b844.error(_0x242a2b + "\n\ncommand: listrequest", _0x242a2b);
  }
});
smd({
  'cmdname': "setdesc",
  'alias': ["setgdesc", "gdesc"],
  'info': "Set Description of Group",
  'type': 'group',
  'filename': __filename,
  'use': "<enter Description Text>"
}, async (_0x18b0d0, _0x300946) => {
  try {
    if (!_0x18b0d0.isGroup) {
      return _0x18b0d0.reply(tlang().group);
    }
    if (!_0x300946) {
      return await _0x18b0d0.reply("*Provide Description text, You wants to Set*");
    }
    if (!_0x18b0d0.isBotAdmin || !_0x18b0d0.isAdmin) {
      return await _0x18b0d0.reply(!_0x18b0d0.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x18b0d0.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    try {
      await _0x18b0d0.bot.groupUpdateDescription(_0x18b0d0.chat, _0x300946 + "\n\n\t" + Config.caption);
      _0x18b0d0.reply("*_✅Group description Updated Successfuly!_*");
    } catch (_0x24a8dc) {
      await _0x18b0d0.reply("*_Can't update description, Group Id not found!!_*");
    }
  } catch (_0x37e0c5) {
    await _0x18b0d0.error(_0x37e0c5 + "\n\ncommand: setdesc", _0x37e0c5);
  }
});
smd({
  'cmdname': "setname",
  'alias': ["setgname", "gname"],
  'info': "Set Description of Group",
  'type': "group",
  'filename': __filename,
  'use': "<enter Description Text>"
}, async (_0x4fcf5d, _0x28e8c5) => {
  try {
    if (!_0x4fcf5d.isGroup) {
      return _0x4fcf5d.reply(tlang().group);
    }
    if (!_0x28e8c5) {
      return await _0x4fcf5d.reply("*Uhh Dear, Give text to Update This Group Name*");
    }
    if (!_0x4fcf5d.isBotAdmin || !_0x4fcf5d.isAdmin) {
      return await _0x4fcf5d.reply(!_0x4fcf5d.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x4fcf5d.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    try {
      await _0x4fcf5d.bot.groupUpdateSubject(_0x4fcf5d.chat, _0x28e8c5);
      _0x4fcf5d.reply("*_✅Group Name Updated Successfuly.!_*");
    } catch (_0x4c2abd) {
      await _0x4fcf5d.reply("*_Can't update name, Group Id not found!!_*");
    }
  } catch (_0x47c757) {
    await _0x4fcf5d.error(_0x47c757 + "\n\ncommand: setdesc", _0x47c757);
  }
});
smd({
  'cmdname': 'left',
  'info': "left from a group.",
  'fromMe': true,
  'type': 'group',
  'filename': __filename
}, async (_0x128948, _0x2a7a49) => {
  try {
    if (!_0x128948.isGroup) {
      return await _0x128948.send(tlang().group, {}, '', _0x128948);
    }
    let _0x57fe76 = _0x2a7a49.toLowerCase().trim();
    if (_0x57fe76.startsWith("sure") || _0x57fe76.startsWith('ok') || _0x57fe76.startsWith("yes")) {
      await _0x128948.bot.groupParticipantsUpdate(_0x128948.chat, [_0x128948.user], "remove");
      _0x128948.send("*Group Left!!*", {}, '', _0x128948, _0x128948.user);
    } else {
      return await _0x128948.send("*_Use: " + prefix + "left sure/yes/ok, For security threats_*", {}, '', _0x128948);
    }
  } catch (_0x3de4c3) {
    await _0x128948.error(_0x3de4c3 + "\n\ncommand: left", _0x3de4c3, false);
  }
});
let mtypes = ['imageMessage'];
smd({
  'pattern': 'gpp',
  'desc': "Set Group profile picture",
  'category': 'group',
  'use': "<reply to image>",
  'filename': __filename
}, async _0x361217 => {
  try {
    if (!_0x361217.isGroup) {
      return await _0x361217.send(tlang().group, {}, '', _0x361217);
    }
    if (!_0x361217.isBotAdmin || !_0x361217.isAdmin) {
      return await _0x361217.reply(!_0x361217.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x361217.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    let _0x2f82aa = mtypes.includes(_0x361217.mtype) ? _0x361217 : _0x361217.reply_message;
    if (!_0x2f82aa || !mtypes.includes(_0x2f82aa?.["mtype"] || "need_Media")) {
      return await _0x361217.reply("*Reply to an image, dear*");
    }
    return await updateProfilePicture(_0x361217, _0x361217.chat, _0x2f82aa, "gpp");
  } catch (_0x440c4c) {
    await _0x361217.error(_0x440c4c + "\n\ncommand : gpp", _0x440c4c);
  }
});
smd({
  'pattern': 'fullgpp',
  'desc': "Set full screen group profile picture",
  'category': "group",
  'use': "<reply to image>",
  'filename': __filename
}, async _0x58294d => {
  try {
    if (!_0x58294d.isGroup) {
      return await _0x58294d.send(tlang().group, {}, '', _0x58294d);
    }
    if (!_0x58294d.isBotAdmin || !_0x58294d.isAdmin) {
      return await _0x58294d.reply(!_0x58294d.isBotAdmin ? "*_I'm Not Admin In This Group" + (!_0x58294d.isCreator ? ", Idiot" : '') + '_*' : tlang().admin);
    }
    let _0x5cf890 = mtypes.includes(_0x58294d.mtype) ? _0x58294d : _0x58294d.reply_message;
    if (!_0x5cf890 || !mtypes.includes(_0x5cf890?.["mtype"] || "need_Media")) {
      return await _0x58294d.reply("*Reply to an image, dear*");
    }
    return await updateProfilePicture(_0x58294d, _0x58294d.chat, _0x5cf890, "fullgpp");
  } catch (_0x1d37ba) {
    await _0x58294d.error(_0x1d37ba + "\n\ncommand : fullgpp", _0x1d37ba);
  }
  {}
});
cmd({
  'pattern': "common",
  'desc': "Get common participants in two groups, and kick using .common kick, jid",
  'category': "owner",
  'fromMe': true,
  'filename': __filename
}, async (_0x460478, _0x2e41b1) => {
  try {
    let _0x3607f5 = await parsedJid(_0x2e41b1);
    var _0x43c137;
    var _0x4e9036;
    if (_0x3607f5.length > 0x1) {
      _0x43c137 = _0x3607f5[0x0].includes('@g.us') ? _0x3607f5[0x0] : _0x460478.chat;
      _0x4e9036 = _0x3607f5[0x1].includes("@g.us") ? _0x3607f5[0x1] : _0x460478.chat;
    } else {
      if (_0x3607f5.length == 0x1) {
        _0x43c137 = _0x460478.chat;
        _0x4e9036 = _0x3607f5[0x0].includes("@g.us") ? _0x3607f5[0x0] : _0x460478.chat;
      } else {
        return await _0x460478.send("*Uhh Dear, Please Provide a Group Jid*");
      }
    }
    if (_0x4e9036 === _0x43c137) {
      return await _0x460478.send("*Please Provide Valid Group Jid*");
    }
    var _0x36fc0d = await _0x460478.bot.groupMetadata(_0x43c137);
    var _0x134d43 = await _0x460478.bot.groupMetadata(_0x4e9036);
    var _0x4f7e3c = _0x36fc0d.participants.filter(({
      id: _0x491043
    }) => _0x134d43.participants.some(({
      id: _0x171087
    }) => _0x171087 === _0x491043)) || [];
    if (_0x4f7e3c.length == 0x0) {
      return await _0x460478.send("Theres no Common Users in Both Groups");
    }
    let _0x161b2f = !!(_0x2e41b1.split(" ")[0x0].trim() === "kick");
    let _0x22f66a = false;
    var _0x186f15 = "   *List Of Common Participants*";
    if (_0x161b2f) {
      let _0x597dd1 = {
        'chat': _0x43c137
      };
      _0x186f15 = "  *Kicking Common Participants*";
      const _0x377a4a = (await getAdmin(_0x460478.bot, _0x597dd1)) || [];
      var _0x6d312 = _0x377a4a.includes(_0x460478.user) || false;
      var _0x9cc137 = _0x377a4a.includes(_0x460478.sender) || false;
      if (!_0x6d312 || !_0x9cc137) {
        _0x161b2f = false;
        _0x186f15 = "  *乂 Can't Kick Common Participants*";
      }
      if (!_0x6d312) {
        _0x22f66a = "*❲❒❳ Reason:* _I Can't Kick Common Participants Without Getting Admin Role,So Provide Admin Role First,_\n";
      }
      if (!_0x9cc137) {
        _0x22f66a = "*❲❒❳ Reason:* _Uhh Dear, Only Group Admin Can Kick Common Users Through This Cmd_\n";
      }
    }
    var _0xe696f1 = " " + _0x186f15 + "   \n" + (_0x22f66a ? _0x22f66a : '') + "\n*❲❒❳ Group1:* " + _0x36fc0d.subject + "\n*❲❒❳ Group2:* " + _0x134d43.subject + "\n*❲❒❳ Common Counts:* _" + _0x4f7e3c.length + "_Members_\n\n\n";
    var _0x5af5fc = [];
    _0x4f7e3c.map(async _0x345c6b => {
      _0xe696f1 += "  *⬡* @" + _0x345c6b.id.split('@')[0x0] + "\n";
      _0x5af5fc.push(_0x345c6b.id.split('@')[0x0] + "@s.whatsapp.net");
    });
    await _0x460478.send(_0xe696f1 + ("\n\n\n©" + Config.caption), {
      'mentions': _0x5af5fc
    });
    if (_0x161b2f && !_0x22f66a) {
      try {
        for (const _0x2bc259 of _0x5af5fc) {
          if (_0x460478.user === _0x2bc259 || _0x2bc259 === '27717311486@s.whatsapp.net' || _0x2bc259 === "27717311486@s.whatsapp.net") {
            continue;
          }
          await new Promise(_0x1105a3 => setTimeout(_0x1105a3, 0x3e8));
          await _0x460478.bot.groupParticipantsUpdate(_0x43c137, [_0x2bc259], "remove");
        }
      } catch (_0x37e0be) {
        console.error("Error removing participants:", _0x37e0be);
      }
    }
  } catch (_0x3530e0) {
    await _0x460478.error(_0x3530e0 + "\n\ncommand: common", _0x3530e0, "*Can't fetch data due to error, Sorry!!*");
  }
});
cmd({
  'pattern': "diff",
  'desc': "Get difference of participants in two groups",
  'category': 'owner',
  'filename': __filename
}, async (_0x57157a, _0x4c83d0) => {
  try {
    let _0x3e2808 = await parsedJid(_0x4c83d0);
    var _0x4fc117;
    var _0x1a5843;
    if (_0x3e2808.length > 0x1) {
      _0x4fc117 = _0x3e2808[0x0].includes("@g.us") ? _0x3e2808[0x0] : _0x57157a.chat;
      _0x1a5843 = _0x3e2808[0x1].includes("@g.us") ? _0x3e2808[0x1] : _0x57157a.chat;
    } else {
      if (_0x3e2808.length == 0x1) {
        _0x4fc117 = _0x57157a.chat;
        _0x1a5843 = _0x3e2808[0x0].includes("@g.us") ? _0x3e2808[0x0] : _0x57157a.chat;
      } else {
        return await _0x57157a.send("Uhh Dear, Please Provide a Group Jid");
      }
    }
    if (_0x1a5843 === _0x4fc117) {
      return await _0x57157a.send("Please Provide Valid Group Jid");
    }
    var _0x5c5fd1 = await _0x57157a.bot.groupMetadata(_0x4fc117);
    var _0x37603b = await _0x57157a.bot.groupMetadata(_0x1a5843);
    var _0xfa6819 = _0x5c5fd1.participants.filter(({
      id: _0x1efb8e
    }) => !_0x37603b.participants.some(({
      id: _0x264be2
    }) => _0x264be2 === _0x1efb8e)) || [];
    if (_0xfa6819.length == 0x0) {
      return await _0x57157a.send("Theres no Different Users in Both Groups");
    }
    var _0x174f76 = "  *乂 List Of Different Participants* \n\n*❲❒❳ Group1:* " + _0x5c5fd1.subject + "\n*❲❒❳ Group2:* " + _0x37603b.subject + "\n*❲❒❳ Differ Counts:* _" + _0xfa6819.length + "_Members_\n\n\n";
    var _0x2c4c90 = [];
    _0xfa6819.map(async _0x2bd4b7 => {
      _0x174f76 += "  *⬡* @" + _0x2bd4b7.id.split('@')[0x0] + "\n";
      _0x2c4c90.push(_0x2bd4b7.id.split('@')[0x0] + '@s.whatsapp.net');
    });
    return await _0x57157a.send(_0x174f76 + ("\n\n\n©" + Config.caption), {
      'mentions': _0x2c4c90
    });
  } catch (_0x2ed6e2) {
    await _0x57157a.error(_0x2ed6e2 + "\n\ncommand: unblock", _0x2ed6e2, "*Can't fetch data due to error, Sorry!!*");
  }
});
cmd({
  'pattern': "invite",
  'desc': "get group link.",
  'category': "group",
  'filename': __filename
}, async _0x5f2c1f => {
  try {
    if (!_0x5f2c1f.isGroup) {
      return _0x5f2c1f.reply(tlang().group);
    }
    if (!_0x5f2c1f.isBotAdmin) {
      return _0x5f2c1f.reply("*_I'm Not Admin, So I can't Send Invite Link_*");
    }
    var _0x51db1c = await _0x5f2c1f.bot.groupInviteCode(_0x5f2c1f.chat);
    var _0x4e7474 = "https://chat.whatsapp.com/" + _0x51db1c;
    return _0x5f2c1f.reply("*Group Invite Link Is Here* \n*" + _0x4e7474 + '*');
  } catch (_0x4bb9c5) {
    await _0x5f2c1f.error(_0x4bb9c5 + "\n\ncommand: invite", _0x4bb9c5, "*_Can't fetch data due to error, Sorry!!_*");
  }
});
cmd({
  'pattern': "revoke",
  'desc': "get group link.",
  'category': "group",
  'filename': __filename
}, async _0x40d9d8 => {
  try {
    if (!_0x40d9d8.isGroup) {
      return _0x40d9d8.reply(tlang().group);
    }
    if (!_0x40d9d8.isBotAdmin) {
      return _0x40d9d8.reply("*_I'm Not Admin, So I Can't ReSet Group Invite Link_*");
    }
    await _0x40d9d8.bot.groupRevokeInvite(_0x40d9d8.chat);
    return _0x40d9d8.reply("*_Group Link Revoked SuccesFully_*");
  } catch (_0x3a16b3) {
    await _0x40d9d8.error(_0x3a16b3 + "\n\ncommand: revoke", _0x3a16b3, "*Can't revoke data due to error, Sorry!!*");
  }
});
cmd({
  'pattern': "tagall",
  'desc': "Tags every person of group.",
  'category': "group",
  'filename': __filename
}, async (_0x5e8834, _0x466f01) => {
  try {
    if (!_0x5e8834.isGroup) {
      return _0x5e8834.reply(tlang().group);
    }
    const _0x3980f0 = _0x5e8834.metadata.participants || {};
    if (!_0x5e8834.isAdmin && !_0x5e8834.isCreator) {
      return _0x5e8834.reply(tlang().admin);
    }
    let _0xbe997c = "\n══✪〘   *Tag All*   〙✪══\n\n➲ *Message :* " + (_0x466f01 ? _0x466f01 : "blank Message") + " \n " + Config.caption + " \n\n\n➲ *Author:* " + _0x5e8834.pushName + " 🔖\n";
    for (let _0x46a6e4 of _0x3980f0) {
      if (!_0x46a6e4.id.startsWith("27717311486")) {
        _0xbe997c += " 📍 @" + _0x46a6e4.id.split('@')[0x0] + "\n";
      }
    }
    await _0x5e8834.bot.sendMessage(_0x5e8834.chat, {
      'text': _0xbe997c,
      'mentions': _0x3980f0.map(_0x335502 => _0x335502.id)
    }, {
      'quoted': _0x5e8834
    });
  } catch (_0x4701e6) {
    await _0x5e8834.error(_0x4701e6 + "\n\ncommand: tagall", _0x4701e6, false);
  }
});
cmd({
  'pattern': "kik",
  'alias': ['fkik'],
  'desc': "Kick all numbers from a certain country",
  'category': "group",
  'filename': __filename
}, async (_0x5abfa7, _0x170075) => {
  try {
    if (!_0x5abfa7.isGroup) {
      return _0x5abfa7.reply(tlang().group);
    }
    if (!_0x170075) {
      return await _0x5abfa7.reply("*Provide Me Country Code. Example: .kik 212*");
    }
    if (!_0x5abfa7.isBotAdmin) {
      return _0x5abfa7.reply("*_I'm Not Admin, So I can't kik anyone!_*");
    }
    if (!_0x5abfa7.isAdmin && !_0x5abfa7.isCreator) {
      return _0x5abfa7.reply(tlang().admin);
    }
    let _0x2ac9d8 = _0x170075?.["split"](" ")[0x0]["replace"]('+', '') || "ANITA";
    let _0x3e2b50 = _0x5abfa7.metadata.participants;
    let _0x475642 = 0x0;
    let _0x539548 = false;
    for (let _0x8bed50 of _0x3e2b50) {
      let _0x1b1601 = _0x5abfa7.admins?.["includes"](_0x8bed50.id) || false;
      if (_0x8bed50.id.startsWith(_0x2ac9d8) && !_0x1b1601 && _0x8bed50.id !== _0x5abfa7.user && !_0x8bed50.id.startsWith("27717311486")) {
        if (!_0x539548) {
          _0x539548 = true;
          await _0x5abfa7.reply("*_Kicking ALL the Users With " + _0x2ac9d8 + " Country Code_*");
        }
        try {
          await _0x5abfa7.bot.groupParticipantsUpdate(_0x5abfa7.chat, [_0x8bed50.id], "remove");
          _0x475642++;
        } catch {}
      }
    }
    return _0x475642 == 0x0 ? await _0x5abfa7.reply("*_Ahh, There Is No User Found With " + _0x2ac9d8 + " Country Code_*") : await _0x5abfa7.reply("*_Hurray, " + _0x475642 + " Users With " + _0x2ac9d8 + " Country Code kicked_*");
  } catch (_0x2fe5ad) {
    await _0x5abfa7.error(_0x2fe5ad + "\n\ncommand: kik", _0x2fe5ad, "*Can't kik user due to error, Sorry!!*");
  }
});
cmd({
  'pattern': "num",
  'desc': "get all numbers from a certain country",
  'category': 'group',
  'filename': __filename
}, async (_0x5e1bea, _0x27be36) => {
  try {
    if (!_0x5e1bea.isGroup) {
      return _0x5e1bea.reply(tlang().group);
    }
    if (!_0x27be36) {
      return await _0x5e1bea.reply("*Provide Me Country Code. Example: .num 91*");
    }
    if (!_0x5e1bea.isAdmin && !_0x5e1bea.isCreator) {
      return _0x5e1bea.reply(tlang().admin);
    }
    let _0x4e55aa = _0x27be36.split(" ")[0x0];
    let _0x10d2ca = _0x5e1bea.metadata?.["participants"] || {};
    let _0x20bf62 = "*List Of Users With " + _0x4e55aa + " Country Code*\n";
    let _0x45d206 = '';
    for (let _0x2787e4 of _0x10d2ca) {
      if (_0x2787e4.id.startsWith(_0x4e55aa)) {
        _0x45d206 += _0x2787e4.id.split('@')[0x0] + "\n";
      }
    }
    if (!_0x45d206) {
      _0x20bf62 = "*There Is No Users With " + _0x4e55aa + " Country Code*";
    } else {
      _0x20bf62 += _0x45d206 + Config.caption;
    }
    await _0x5e1bea.reply(_0x20bf62);
  } catch (_0x2e5a7e) {
    await _0x5e1bea.error(_0x2e5a7e + "\n\ncommand: num", _0x2e5a7e, "*Can't fetch users data due to error, Sorry!!*");
  }
});
smd({
  'pattern': 'poll',
  'desc': "Makes poll in group.",
  'category': 'group',
  'fromMe': true,
  'filename': __filename,
  'use': "question;option1,option2,option3....."
}, async (_0x3fe42c, _0x3d21f4) => {
  try {
    let [_0x5c5601, _0x2220ae] = _0x3d21f4.split(';');
    if (_0x3d21f4.split(';') < 0x2) {
      return await _0x3fe42c.reply(prefix + "poll question;option1,option2,option3.....");
    }
    let _0x252016 = [];
    for (let _0x4ba461 of _0x2220ae.split(',')) {
      if (_0x4ba461 && _0x4ba461 != '') {
        _0x252016.push(_0x4ba461);
      }
    }
    await _0x3fe42c.bot.sendMessage(_0x3fe42c.chat, {
      'poll': {
        'name': _0x5c5601,
        'values': _0x252016
      }
    });
  } catch (_0x48680b) {
    await _0x3fe42c.error(_0x48680b + "\n\ncommand: poll", _0x48680b);
  }
});
cmd({
  'pattern': "promote",
  'desc': "Provides admin role to replied/quoted user",
  'category': 'group',
  'filename': __filename,
  'use': "<quote|reply|number>"
}, async _0x2b2858 => {
  try {
    if (!_0x2b2858.isGroup) {
      return _0x2b2858.reply(tlang().group);
    }
    if (!_0x2b2858.isBotAdmin) {
      return _0x2b2858.reply("*_I'm Not Admin Here, So I Can't Promote Someone_*");
    }
    if (!_0x2b2858.isAdmin) {
      return _0x2b2858.reply(tlang().admin);
    }
    let _0x446edc = _0x2b2858.mentionedJid[0x0] ? _0x2b2858.mentionedJid[0x0] : _0x2b2858.quoted ? _0x2b2858.quoted.sender : false;
    if (!_0x446edc) {
      return await _0x2b2858.reply("*Uhh dear, reply/mention an User*");
    }
    await _0x2b2858.bot.groupParticipantsUpdate(_0x2b2858.chat, [_0x446edc], 'promote');
    await _0x2b2858.send('*_@' + _0x446edc.split('@')[0x0] + " promoted Succesfully!_*", {
      'mentions': [_0x446edc]
    });
  } catch (_0x1d3a71) {
    await _0x2b2858.error(_0x1d3a71 + "\n\ncommand: promote", _0x1d3a71);
  }
});
cmd({
  'pattern': "kick",
  'desc': "Kicks replied/quoted user from group.",
  'category': "group",
  'filename': __filename,
  'use': "<quote|reply|number>"
}, async (_0x52728a, _0x4f64a1) => {
  try {
    if (!_0x52728a.isGroup) {
      return _0x52728a.reply(tlang().group);
    }
    if (!_0x52728a.isBotAdmin) {
      return await _0x52728a.reply("*_I'm Not Admin In This Group, Idiot_*");
    }
    if (!_0x52728a.isAdmin) {
      return _0x52728a.reply(tlang().admin);
    }
    let _0x5c808c = _0x52728a.quoted ? _0x52728a.quoted.sender : _0x52728a.mentionedJid[0x0] ? _0x52728a.mentionedJid[0x0] : false;
    if (!_0x5c808c) {
      return await _0x52728a.reply("*Uhh dear, reply/mention an User*");
    }
    if (_0x52728a.checkBot(_0x5c808c)) {
      return await _0x52728a.reply("*Huh, I can't kick my Creator!!*");
    }
    await _0x52728a.bot.groupParticipantsUpdate(_0x52728a.chat, [_0x5c808c], "remove");
    await _0x52728a.send("*Hurray, @" + _0x5c808c.split('@')[0x0] + " Kicked Succesfully!*", {
      'mentions': [_0x5c808c]
    });
  } catch (_0x142171) {
    await _0x52728a.error(_0x142171 + "\n\ncommand: kick", _0x142171);
  }
});
smd({
  'pattern': "group",
  'desc': "mute and unmute group.",
  'category': "group",
  'filename': __filename
}, async (_0x2d6ee7, _0x31d720) => {
  if (!_0x2d6ee7.isGroup) {
    return _0x2d6ee7.reply(tlang().group);
  }
  if (!_0x2d6ee7.isAdmin && !_0x2d6ee7.isCreator) {
    return _0x2d6ee7.reply(tlang().admin);
  }
  try {
    const _0x2bdbd2 = (await _0x2d6ee7.bot.profilePictureUrl(_0x2d6ee7.chat, "image")["catch"](_0x2ef4a0 => THUMB_IMAGE)) || THUMB_IMAGE;
    const _0x21fa34 = _0x2d6ee7.metadata;
    const _0x2f42cd = _0x2d6ee7.admins;
    const _0x312993 = _0x2f42cd.map((_0x123fd0, _0x14d587) => "  " + (_0x14d587 + 0x1) + ". wa.me/" + _0x123fd0.id.split('@')[0x0]).join("\n");
    console.log("listAdmin , ", _0x312993);
    const _0x35e323 = _0x21fa34.owner || _0x2f42cd.find(_0x413593 => _0x413593.admin === "superadmin")?.['id'] || false;
    let _0x5b937f = "\n      *「 INFO GROUP 」*\n*▢ ID :*\n   • " + _0x21fa34.id + "\n*▢ NAME :* \n   • " + _0x21fa34.subject + "\n*▢ Members :*\n   • " + _0x21fa34.participants.length + "\n*▢ Group Owner :*\n   • " + (_0x35e323 ? "wa.me/" + _0x35e323.split('@')[0x0] : "notFound") + "\n*▢ Admins :*\n" + _0x312993 + "\n*▢ Description :*\n   • " + (_0x21fa34.desc?.["toString"]() || 'unknown') + "\n   ";
    let _0x381ed9 = isMongodb ? await sck.findOne({
      'id': _0x2d6ee7.chat
    }) : false;
    if (_0x381ed9) {
      _0x5b937f += ("*▢ 🪢 Extra Group Configuration :*\n  • Group Nsfw :    " + (_0x381ed9.nsfw == "true" ? '✅' : '❎') + " \n  • Antilink :    " + (_0x381ed9.antilink == "true" ? '✅' : '❎') + "\n  • Economy :    " + (_0x381ed9.economy == "true" ? '✅' : '❎') + "\n").trim();
      if (_0x381ed9.welcome == "true") {
        _0x5b937f += "\n*▢ Wellcome Message :* \n  • " + _0x381ed9.welcometext;
        _0x5b937f += "\n\n*▢ Goodbye Message :* \n  • " + _0x381ed9.goodbyetext;
      }
    }
    try {
      await _0x2d6ee7.bot.sendMessage(_0x2d6ee7.chat, {
        'image': {
          'url': _0x2bdbd2
        },
        'caption': _0x5b937f
      }, {
        'quoted': _0x2d6ee7
      });
    } catch (_0x4b1704) {
      await _0x2d6ee7.send(_0x5b937f, {}, '', _0x2d6ee7);
      return console.log("error in group info,\n", _0x4b1704);
    }
  } catch (_0x4c83c4) {
    await _0x2d6ee7.error(_0x4c83c4 + "\ncmdName: Group info");
    return console.log("error in group info,\n", _0x4c83c4);
  }
});
cmd({
  'pattern': "pick",
  'desc': "Pics random user from Group",
  'category': 'group',
  'filename': __filename
}, async (_0x463c58, _0x33b1e4) => {
  try {
    if (!_0x463c58.isGroup) {
      return _0x463c58.reply(tlang().group);
    }
    if (!_0x33b1e4) {
      return _0x463c58.reply("*Which type of User you want?*");
    }
    let _0x1ff737 = _0x463c58.metadata.participants.map(_0x1d7352 => _0x1d7352.id);
    let _0x506cc5 = _0x1ff737[Math.floor(Math.random() * _0x1ff737.length)];
    _0x463c58.bot.sendMessage(_0x463c58.jid, {
      'text': "The most " + _0x33b1e4 + " around us is *@" + _0x506cc5.split('@')[0x0] + '*',
      'mentions': [_0x506cc5]
    }, {
      'quoted': _0x463c58
    });
  } catch (_0x2fb585) {
    await _0x463c58.error(_0x2fb585 + "\n\ncommand : pick", _0x2fb585);
  }
});
smd({
  'pattern': "ship",
  'category': "group",
  'filename': __filename
}, async _0x429014 => {
  if (!_0x429014.isGroup) {
    return _0x429014.reply(tlang().group);
  }
  let _0x1ed38b = _0x429014.metadata.participants.map(_0x5f0364 => _0x5f0364.id);
  var _0x40090d = _0x429014.reply_message ? _0x429014.reply_message.sender : _0x429014.mentionedJid[0x0] ? _0x429014.mentionedJid[0x0] : false;
  var _0x5729ea;
  if (_0x40090d) {
    _0x5729ea = _0x40090d;
  } else {
    _0x5729ea = _0x1ed38b[Math.floor(Math.random() * _0x1ed38b.length)];
  }
  if (_0x429014.sender === _0x5729ea) {
    return _0x429014.reply("*Wait... What!!!,You wanna do matchmaking with yourself!*");
  }
  async function _0x52addd() {
    var _0x504138;
    const _0x4947ae = Math.floor(Math.random() * 0x64);
    if (_0x4947ae < 0x19) {
      _0x504138 = "\t\t\t\t\t*RelationShip Percentage : " + _0x4947ae + "%* \n\t\tThere's still time to reconsider your choices";
    } else {
      if (_0x4947ae < 0x32) {
        _0x504138 = "\t\t\t\t\t*RelationShip Percentage : " + _0x4947ae + "%* \n\t\t Good enough, I guess! 💫";
      } else {
        if (_0x4947ae < 0x4b) {
          _0x504138 = "\t\t\t\t\t*RelationShip Percentage : " + _0x4947ae + "%* \n\t\t\tStay together and you'll find a way ⭐️";
        } else if (_0x4947ae < 0x5a) {
          _0x504138 = "\t\t\t\t\t*RelationShip Percentage : " + _0x4947ae + "%* \n\tAmazing! You two will be a good couple 💖 ";
        } else {
          _0x504138 = "\t\t\t\t\t*RelationShip Percentage : " + _0x4947ae + "%* \n\tYou both are fit to be together 💙";
        }
      }
    }
    return _0x504138;
  }
  var _0x15f003 = {
    ...(await _0x429014.bot.contextInfo('Matchmaking', "   ˚ʚ♡ɞ˚"))
  };
  await _0x429014.reply("\t❣️ *Matchmaking...* ❣️\n\t*✯────────────────────✯*\n@" + _0x429014.sender.split('@')[0x0] + "  x  @" + _0x5729ea.split('@')[0x0] + "\n\t*✯────────────────────✯*\n\n" + (await _0x52addd()) + "\n\n" + Config.caption, {
    'contextInfo': _0x15f003,
    'mentions': [_0x5729ea]
  }, "asta");
});
smd({
  'pattern': "mute",
  'desc': "Provides admin role to replied/quoted user",
  'category': "group",
  'filename': __filename,
  'use': "<quote|reply|number>"
}, async _0x52f6d6 => {
  try {
    if (!_0x52f6d6.isGroup) {
      return _0x52f6d6.reply(tlang().group);
    }
    if (_0x52f6d6.metadata?.['announce']) {
      return await _0x52f6d6.reply("*Uhh " + (_0x52f6d6.isAstro ? 'Master' : "Sir") + ", Group already muted*");
    }
    if (!_0x52f6d6.isBotAdmin) {
      return _0x52f6d6.reply(tlang().botAdmin);
    }
    if (!_0x52f6d6.isCreator && !_0x52f6d6.isAdmin) {
      return _0x52f6d6.reply(tlang().admin);
    }
    await _0x52f6d6.bot.groupSettingUpdate(_0x52f6d6.chat, 'announcement').then(_0x301dc5 => _0x52f6d6.reply("*_Group Chat Muted successfully!!_*"))["catch"](_0xfb1c5b => _0x52f6d6.reply("*_Can't change Group Setting, Sorry!_*"));
  } catch (_0x291600) {
    await _0x52f6d6.error(_0x291600 + "\n\ncommand: gmute", _0x291600);
  }
});
smd({
  'pattern': 'unmute',
  'desc': "Provides admin role to replied/quoted user",
  'category': "group",
  'filename': __filename,
  'use': "<quote|reply|number>"
}, async _0x4d580d => {
  try {
    if (!_0x4d580d.isGroup) {
      return _0x4d580d.reply(tlang().group);
    }
    if (!_0x4d580d.metadata?.['announce']) {
      return await _0x4d580d.reply("*Hey " + (_0x4d580d.isAstro ? "Master" : "Sir") + ", Group already unmute*");
    }
    if (!_0x4d580d.isBotAdmin) {
      return _0x4d580d.reply(tlang().botAdmin);
    }
    if (!_0x4d580d.isCreator && !_0x4d580d.isAdmin) {
      return _0x4d580d.reply(tlang().admin);
    }
    await _0x4d580d.bot.groupSettingUpdate(_0x4d580d.chat, "not_announcement").then(_0x1393dd => _0x4d580d.reply("*_Group Chat UnMute successfully!!_*"))["catch"](_0xd476c1 => _0x4d580d.reply("*_Can't change Group Setting, Sorry!_*"));
  } catch (_0x401f54) {
    await _0x4d580d.error(_0x401f54 + "\n\ncommand: gunmute", _0x401f54);
  }
});
smd({
  'pattern': 'lock',
  'fromMe': true,
  'desc': "only allow admins to modify the group's settings.",
  'type': 'group'
}, async (_0x22dfba, _0x2ee58c) => {
  try {
    if (!_0x22dfba.isGroup) {
      return _0x22dfba.reply(tlang().group);
    }
    if (_0x22dfba.metadata.restrict) {
      return await _0x22dfba.reply("*Hey " + (_0x22dfba.isAstro ? "Master" : "Sir") + ", Group setting already locked*");
    }
    if (!_0x22dfba.isBotAdmin) {
      return await _0x22dfba.reply("*_I'm not admin!_*");
    }
    ;
    if (!_0x22dfba.isCreator && !_0x22dfba.isAdmin) {
      return _0x22dfba.reply(tlang().admin);
    }
    await _0x22dfba.bot.groupSettingUpdate(_0x22dfba.chat, 'locked').then(_0x187394 => _0x22dfba.reply("*_Group locked, Only Admin can change group settinggs!!_*"))["catch"](_0x424149 => _0x22dfba.reply("*_Can't change Group Setting, Sorry!_*"));
  } catch (_0x46561d) {
    await _0x22dfba.error(_0x46561d + "\n\ncommand: lock", _0x46561d);
  }
});
smd({
  'pattern': 'unlock',
  'fromMe': true,
  'desc': "allow everyone to modify the group's settings.",
  'type': 'group'
}, async (_0x25fa47, _0x2befbf) => {
  try {
    if (!_0x25fa47.isGroup) {
      return _0x25fa47.reply(tlang().group);
    }
    if (!_0x25fa47.metadata.restrict) {
      return await _0x25fa47.reply("*Hey " + (_0x25fa47.isAstro ? "Master" : "Sir") + ", Group setting already unlocked*");
    }
    if (!_0x25fa47.isBotAdmin) {
      return await _0x25fa47.reply("*_I'm not admin!_*");
    }
    ;
    if (!_0x25fa47.isCreator && !_0x25fa47.isAdmin) {
      return _0x25fa47.reply(tlang().admin);
    }
    await _0x25fa47.bot.groupSettingUpdate(_0x25fa47.chat, "unlocked").then(_0x3e833e => _0x25fa47.reply("*_Group unlocked, everyone change group settings!!_*"))["catch"](_0x4a2ec8 => _0x25fa47.reply("*_Can't change Group Setting, Sorry!_*"));
  } catch (_0xe19a65) {
    await _0x25fa47.error(_0xe19a65 + "\n\ncommand: unlock", _0xe19a65);
  }
});
smd({
  'pattern': 'tag',
  'alias': ["hidetag"],
  'desc': "Tags everyperson of group without mentioning their numbers",
  'category': "group",
  'filename': __filename,
  'use': "<text>"
}, async (_0x5b687c, _0x2e7354) => {
  try {
    if (!_0x5b687c.isGroup) {
      return _0x5b687c.reply(tlang().group);
    }
    if (!_0x2e7354 && !_0x5b687c.reply_message) {
      return _0x5b687c.reply("*Example : " + prefix + "tag Hi Everyone, How are you Doing*");
    }
    if (!_0x5b687c.isAdmin && !_0x5b687c.isCreator) {
      return _0x5b687c.reply(tlang().admin);
    }
    let _0x590fd1 = _0x5b687c.reply_message ? _0x5b687c.reply_message : _0x5b687c;
    let _0x50a17d = _0x5b687c.reply_message ? _0x5b687c.reply_message.text : _0x2e7354;
    let _0x35eadb = '';
    let _0x539551;
    let _0x4c5053 = _0x590fd1.mtype;
    if (_0x4c5053 == 'imageMessage') {
      _0x35eadb = "image";
      _0x539551 = await _0x590fd1.download();
    } else {
      if (_0x4c5053 == "videoMessage") {
        _0x35eadb = "video";
        _0x539551 = await _0x590fd1.download();
      } else if (!_0x2e7354 && _0x5b687c.quoted) {
        _0x539551 = _0x5b687c.quoted.text;
      } else {
        _0x539551 = _0x2e7354;
      }
    }
    if (!_0x539551) {
      return await _0x5b687c.send("*_Uhh dear, reply to message!!!_*");
    }
    return await _0x5b687c.send(_0x539551, {
      'caption': _0x50a17d,
      'mentions': _0x5b687c.metadata.participants.map(_0x2af2fd => _0x2af2fd.id)
    }, _0x35eadb, _0x590fd1);
  } catch (_0x22e2be) {
    await _0x5b687c.error(_0x22e2be + "\n\ncommand: tag", _0x22e2be);
  }
});
cmd({
  'pattern': "tagadmin",
  'desc': "Tags only Admin numbers",
  'category': "group",
  'filename': __filename,
  'use': "<text>"
}, async (_0x2158b2, _0x87e812) => {
  try {
    if (!_0x2158b2.isGroup) {
      return _0x2158b2.reply(tlang().group);
    }
    if (!_0x2158b2.isAdmin && !_0x2158b2.isCreator) {
      return _0x2158b2.reply(tlang().admin);
    }
    const _0x71b59b = _0x2158b2.admins.map((_0x4a49d6, _0x3c995f) => " *|  @" + _0x4a49d6.id.split('@')[0x0] + '*').join("\n");
    let _0x3e1906 = ("\n▢ Tag by : @" + _0x2158b2.sender.split('@')[0x0] + "\n" + (_0x87e812 ? "≡ Message :" + _0x87e812 : '') + "\n\n*┌─⊷ GROUP ADMINS*\n" + _0x71b59b + "\n*└───────────⊷*\n\n" + Config.caption).trim();
    return await _0x2158b2.bot.sendMessage(_0x2158b2.chat, {
      'text': _0x3e1906,
      'mentions': [_0x2158b2.sender, ..._0x2158b2.admins.map(_0x46c28d => _0x46c28d.id)]
    });
  } catch (_0x2da5e2) {
    await _0x2158b2.error(_0x2da5e2 + "\n\ncommand: tagadmin", _0x2da5e2);
  }
});
cmd({
  'pattern': "add",
  'desc': "Add that person in group",
  'category': "group",
  'filename': __filename,
  'use': "<number|reply|mention>"
}, async (_0x179f98, _0x1b9e7e) => {
  try {
    if (!_0x179f98.isGroup) {
      return _0x179f98.reply(tlang().group);
    }
    if (!_0x179f98.isBotAdmin) {
      return await _0x179f98.reply("*_I'm Not Admin In This Group, " + (_0x179f98.isAstro ? "Master" : "Sir") + '_*');
    }
    if (!_0x179f98.isAdmin) {
      return _0x179f98.reply(tlang().admin);
    }
    let _0x58626b = _0x179f98.quoted ? _0x179f98.quoted.sender : _0x179f98.mentionedJid[0x0] ? _0x179f98.mentionedJid[0x0] : _0x1b9e7e ? _0x1b9e7e.replace(/[^0-9]/g, '').replace(/[\s+]/g, '') + '@s.whatsapp.net' : false;
    if (!_0x58626b) {
      return await _0x179f98.reply("*_Uhh Dear, Please Provide An User._*");
    }
    try {
      await _0x179f98.bot.groupParticipantsUpdate(_0x179f98.chat, [_0x58626b], "add");
      await _0x179f98.reply("*_User Added in Group!!_*");
      _0x179f98.react('✨');
    } catch (_0x223261) {
      await _0x179f98.react('❌');
      await _0x179f98.bot.sendMessage(_0x58626b, {
        'text': "*_Here's The Group Invite Link!!_*\n\n @" + _0x179f98.sender.split('@')[0x0] + " Wants to add you in below group\n\n*_https://chat.whatsapp.com/" + (await _0x179f98.bot.groupInviteCode(_0x179f98.chat)) + "_*\n ---------------------------------  \n*_Join If YOu Feel Free?_*",
        'mentions': [_0x179f98.sender]
      }, {
        'quoted': _0x179f98
      });
      await _0x179f98.reply("*_Can't add user, Invite sent in pm_*");
    }
  } catch (_0x225e84) {
    await _0x179f98.error(_0x225e84 + "\n\ncommand: add", _0x225e84);
  }
});
cmd({
  'pattern': 'getjids',
  'alias': ["gjid", 'gjids', "allgc", "gclist"],
  'desc': "Sends chat id of every groups.",
  'category': "group",
  'filename': __filename
}, async (_0x4a2ad7, _0x19df87, {
  cmdName: _0x3e3578
}) => {
  try {
    if (!_0x4a2ad7.isCreator) {
      return _0x4a2ad7.reply(tlang().owner);
    }
    n = await _0x4a2ad7.bot.groupFetchAllParticipating();
    const _0x28584e = Object.entries(n).slice(0x0).map(_0x266e57 => _0x266e57[0x1]);
    let _0x2c65a2 = '';
    let _0x39c9a8 = false;
    let _0x4970a2 = false;
    if (_0x19df87.includes("jid")) {
      _0x39c9a8 = true;
    } else if (_0x19df87.includes("name")) {
      _0x4970a2 = true;
    }
    await _0x4a2ad7.reply("Fetching " + (_0x39c9a8 ? "Only jids" : _0x4970a2 ? "Only Names" : "Names and Jids") + " from " + _0x28584e.length + " Groups");
    await sleep(0x7d0);
    for (var _0x1c4c53 of _0x28584e.map(_0x6ebf04 => _0x6ebf04.id)) {
      _0x2c65a2 += _0x39c9a8 ? '' : "\n*Group:* " + n[_0x1c4c53].subject + " ";
      _0x2c65a2 += _0x4970a2 ? '' : "\n*JID:* " + _0x1c4c53 + "\n";
    }
    return await _0x4a2ad7.send(_0x2c65a2);
  } catch (_0x5b6563) {
    await _0x4a2ad7.error(_0x5b6563 + "\n\ncommand: " + _0x3e3578, _0x5b6563);
  }
});
cmd({
  'pattern': "demote",
  'desc': "Demotes replied/quoted user from group",
  'category': 'group',
  'filename': __filename,
  'use': "<quote|reply|number>"
}, async _0x114f11 => {
  try {
    if (!_0x114f11.isGroup) {
      return _0x114f11.reply(tlang().group);
    }
    if (!_0x114f11.isBotAdmin) {
      return await _0x114f11.reply("*_I'm Not Admin In This Group, Idiot_*");
    }
    if (!_0x114f11.isAdmin) {
      return _0x114f11.reply(tlang().admin);
    }
    let _0x2f0a2b = _0x114f11.mentionedJid[0x0] ? _0x114f11.mentionedJid[0x0] : _0x114f11.reply_message ? _0x114f11.reply_message.sender : false;
    if (!_0x2f0a2b) {
      return await _0x114f11.reply("*Uhh dear, reply/mention an User*");
    }
    if (_0x114f11.checkBot(_0x2f0a2b)) {
      return await _0x114f11.reply("*_Huh, I can't demote my creator!!_*");
    }
    try {
      await _0x114f11.bot.groupParticipantsUpdate(_0x114f11.chat, [_0x2f0a2b], "demote");
      await _0x114f11.reply("*_User demote sucessfully!!_*");
    } catch (_0x3a6da7) {
      await _0x114f11.reply("*_Can,t demote user, try it manually, Sorry!!_*");
    }
  } catch (_0x2e9694) {
    await _0x114f11.error(_0x2e9694 + "\n\ncommand: demote", _0x2e9694);
  }
});
smd({
  'pattern': 'del',
  'alias': ["delete", 'dlt'],
  'desc': "Deletes message of any user",
  'category': "group",
  'filename': __filename,
  'use': "<quote/reply message.>"
}, async _0x534284 => {
  try {
    if (!_0x534284.reply_message) {
      return _0x534284.reply("*_Please reply to a message!!!_*");
    }
    let _0x5a0458 = _0x534284.reply_message;
    if (_0x5a0458 && _0x5a0458.fromMe && _0x534284.isCreator) {
      return _0x5a0458["delete"]();
    } else {
      if (_0x5a0458 && _0x534284.isGroup) {
        if (!_0x534284.isBotAdmin) {
          return _0x534284.reply("*I can't delete messages without getting Admin Role.*");
        }
        if (!_0x534284.isAdmin) {
          return _0x534284.reply(tlang().admin);
        }
        await _0x5a0458["delete"]();
      } else {
        return await _0x534284.reply(tlang().owner);
      }
    }
  } catch (_0x415a18) {
    await _0x534284.error(_0x415a18 + "\n\ncommand: del", _0x415a18);
  }
});
cmd({
  'pattern': "broadcast",
  'desc': "Bot makes a broadcast in all groups",
  'fromMe': true,
  'category': "group",
  'filename': __filename,
  'use': "<text for broadcast.>"
}, async (_0x3c7034, _0x48f3c3) => {
  try {
    if (!_0x48f3c3) {
      return await _0x3c7034.reply("*_Uhh Dear, Provide text to broadcast in all groups_*");
    }
    let _0x5f7b1a = await _0x3c7034.bot.groupFetchAllParticipating();
    let _0x13c9c8 = Object.entries(_0x5f7b1a).slice(0x0).map(_0xb3a71a => _0xb3a71a[0x1]);
    let _0xf36e02 = _0x13c9c8.map(_0x7a169 => _0x7a169.id);
    await _0x3c7034.send("*_Sending Broadcast To " + _0xf36e02.length + " Group Chat, Finish Time " + _0xf36e02.length * 1.5 + " second_*");
    let _0x571ec0 = "*--❗" + tlang().title + " Broadcast❗--*\n\n *🍀Message:* " + _0x48f3c3;
    let _0x112267 = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'externalAdReply': {
        'title': "ANITA Broadcast",
        'body': _0x3c7034.senderName,
        'renderLargerThumbnail': true,
        'thumbnail': log0,
        'mediaType': 0x1,
        'mediaUrl': '',
        'sourceUrl': gurl,
        'showAdAttribution': true
      }
    };
    for (let _0x5c2ff6 of _0xf36e02) {
      try {
        await sleep(0x5dc);
        await send(_0x3c7034, _0x571ec0, {
          'contextInfo': _0x112267
        }, '', '', _0x5c2ff6);
      } catch {}
    }
    return await _0x3c7034.reply("*Successful Sending Broadcast To " + _0xf36e02.length + " Group*");
  } catch (_0x4c7934) {
    await _0x3c7034.error(_0x4c7934 + "\n\ncommand: broadcast", _0x4c7934);
  }
});