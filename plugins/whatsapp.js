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

const moment = require("moment-timezone");
const Config = require('../config');
let {
  smd,
  prefix,
  updateProfilePicture,
  parsedJid
} = require("../lib");
const {
  cmd
} = require("../lib/plugins");
let mtypes = ["imageMessage"];
smd({
  'pattern': 'pp',
  'desc': "Set profile picture",
  'category': "whatsapp",
  'use': "<reply to image>",
  'fromMe': true,
  'filename': __filename
}, async _0x5c459f => {
  try {
    let _0x1a4eb9 = mtypes.includes(_0x5c459f.mtype) ? _0x5c459f : _0x5c459f.reply_message;
    if (!_0x1a4eb9 || !mtypes.includes(_0x1a4eb9?.["mtype"] || "need_Media")) {
      return await _0x5c459f.reply("*Reply to an image, dear*");
    }
    return await updateProfilePicture(_0x5c459f, _0x5c459f.user, _0x1a4eb9, 'pp');
  } catch (_0x5d7466) {
    await _0x5c459f.error(_0x5d7466 + "\n\ncommand : pp", _0x5d7466);
  }
});
smd({
  'pattern': "fullpp",
  'desc': "Set full screen profile picture",
  'category': "whatsapp",
  'use': "<reply to image>",
  'fromMe': true,
  'filename': __filename
}, async _0x482429 => {
  try {
    let _0x5afff9 = mtypes.includes(_0x482429.mtype) ? _0x482429 : _0x482429.reply_message;
    if (!_0x5afff9 || !mtypes.includes(_0x5afff9?.["mtype"] || "need_Media")) {
      return await _0x482429.reply("*Reply to an image, dear*");
    }
    return await updateProfilePicture(_0x482429, _0x482429.user, _0x5afff9, "fullpp");
  } catch (_0x46327a) {
    await _0x482429.error(_0x46327a + "\n\ncommand : fullpp", _0x46327a);
  }
  {}
});
smd({
  'pattern': "rpp",
  'desc': "remove profile picture",
  'category': "whatsapp",
  'use': "<chat>",
  'fromMe': true,
  'filename': __filename
}, async _0x2072c1 => {
  try {
    await _0x2072c1.removepp();
    _0x2072c1.send("*_Profile picture removed successfully!_*");
  } catch (_0x1f6603) {
    await _0x2072c1.error(_0x1f6603 + "\n\ncommand : rpp", _0x1f6603);
  }
});
smd({
  'pattern': "bio",
  'desc': "update profile status of whatsapp",
  'category': "whatsapp",
  'use': '<text>',
  'fromMe': true,
  'filename': __filename
}, async (_0xd26ca7, _0x276832) => {
  try {
    if (!_0x276832) {
      return await _0xd26ca7.send("*_provide text to update profile status!_*\n*_Example: " + prefix + "bio Asta Md_*");
    }
    await _0xd26ca7.bot.updateProfileStatus(_0x276832);
    _0xd26ca7.send("*Profile status updated successfully!*");
  } catch (_0x19dba2) {
    await _0xd26ca7.error(_0x19dba2 + "\n\ncommand : bio", _0x19dba2);
  }
});
cmd({
  'pattern': 'ptv',
  'desc': "send ptv Message of video",
  'category': "whatsapp",
  'filename': __filename
}, async (_0x4da915, _0x13f73f, {
  cmdName: _0x53f9dc
}) => {
  try {
    if (!_0x4da915.quoted) {
      return await _0x4da915.send("*Uhh Please, reply to video*");
    }
    let _0x41b7e9 = _0x4da915.quoted.mtype;
    if (_0x41b7e9 !== "videoMessage") {
      return await _0x4da915.send("*Uhh Dear, reply to a video message*");
    }
    return await _0x4da915.bot.forwardOrBroadCast(_0x4da915.chat, _0x4da915.quoted, {}, "ptv");
  } catch (_0x1d34b2) {
    await _0x4da915.error(_0x1d34b2 + "\n\ncommand : ptv", _0x1d34b2);
  }
});
cmd({
  'pattern': "slog",
  'desc': "Save Message to log number",
  'category': "whatsapp",
  'filename': __filename
}, async (_0x1eeb62, _0x20e9ee, {
  cmdName: _0x4b0cf1
}) => {
  try {
    let _0x5c9b1e = _0x1eeb62.reply_message;
    if (!_0x5c9b1e) {
      return await _0x1eeb62.send("*Uhh Please, reply to to a Message*");
    }
  } catch (_0x133bce) {
    await _0x1eeb62.error(_0x133bce + "\n\ncommand : save", _0x133bce);
  }
});
cmd({
  'pattern': "quoted",
  'desc': "get reply Message from Replied Message",
  'category': 'user',
  'filename': __filename
}, async _0x40e32b => {
  try {
    if (!_0x40e32b.quoted) {
      return await _0x40e32b.send("*_Uhh Dear, Reply to a Message_*");
    }
    var _0x5584a0 = await _0x40e32b.bot.serializeM(await _0x40e32b.getQuotedObj());
    if (!_0x5584a0 || !_0x5584a0.quoted) {
      return await _0x40e32b.replay("*Message you replied does not contain a reply Message*");
    }
    try {
      await _0x40e32b.react('✨', _0x40e32b);
      return await _0x40e32b.bot.copyNForward(_0x40e32b.chat, _0x5584a0.quoted, false);
    } catch (_0x14dd43) {
      await _0x40e32b.bot.forward(_0x40e32b.chat, _0x5584a0.quoted, {}, _0x40e32b);
      console.log(_0x14dd43);
    }
  } catch (_0x122085) {
    await _0x40e32b.error(_0x122085 + "\n\ncommand : quoted", _0x122085);
  }
});
cmd({
  'pattern': 'blocklist',
  'desc': "get list of all Blocked Numbers",
  'category': "whatsapp",
  'fromMe': true,
  'filename': __filename,
  'use': "<text>"
}, async _0x2b1d9d => {
  try {
    const _0x4548ac = await _0x2b1d9d.bot.fetchBlocklist();
    if (_0x4548ac.length === 0x0) {
      return await _0x2b1d9d.reply("Uhh Dear, You don't have any Blocked Numbers.");
    }
    let _0x3c31c8 = "\n*≡ List*\n\n*_Total Users:* " + _0x4548ac.length + "_\n\n┌─⊷ \t*BLOCKED USERS*\n";
    for (let _0x395487 = 0x0; _0x395487 < _0x4548ac.length; _0x395487++) {
      _0x3c31c8 += "▢ " + (_0x395487 + 0x1) + ":- wa.me/" + _0x4548ac[_0x395487].split('@')[0x0] + "\n";
    }
    _0x3c31c8 += "└───────────";
    return await _0x2b1d9d.bot.sendMessage(_0x2b1d9d.chat, {
      'text': _0x3c31c8
    });
  } catch (_0x55c9c6) {
    await _0x2b1d9d.error(_0x55c9c6 + "\n\ncommand : blocklist", _0x55c9c6);
  }
});
cmd({
  'pattern': "location",
  'desc': "Adds *readmore* in given text.",
  'category': "whatsapp",
  'filename': __filename
}, async (_0x49b449, _0x45cef9) => {
  try {
    if (!_0x45cef9) {
      return await _0x49b449.reply("*Give Coordinates To Send Location!*\n *Ex: " + prefix + "location 24.121231,55.1121221*");
    }
    let _0x228d4f = parseFloat(_0x45cef9.split(',')[0x0]) || '';
    let _0x1134d6 = parseFloat(_0x45cef9.split(',')[0x1]) || '';
    if (!_0x228d4f || isNaN(_0x228d4f) || !_0x1134d6 || isNaN(_0x1134d6)) {
      return await _0x49b449.reply("*_Cordinates Not In Formate, Try Again_*");
    }
    await _0x49b449.reply("*----------LOCATION------------*\n```Sending Location Of Given Data:\n Latitude: " + _0x228d4f + "\n Longitude: " + _0x1134d6 + "```\n\n" + Config.caption);
    return await _0x49b449.sendMessage(_0x49b449.jid, {
      'location': {
        'degreesLatitude': _0x228d4f,
        'degreesLongitude': _0x1134d6
      }
    }, {
      'quoted': _0x49b449
    });
  } catch (_0x4a5c60) {
    await _0x49b449.error(_0x4a5c60 + "\n\ncommand : location", _0x4a5c60);
  }
});
smd({
  'pattern': "listpc",
  'category': 'whatsapp',
  'desc': "Finds info about personal chats",
  'filename': __filename
}, async (_0x5a3f86, _0x25bbcb, {
  store: _0x5c440f
}) => {
  try {
    _0x5a3f86.react('🫡');
    let _0x4b2465 = await _0x5c440f.chats.all().filter(_0x3096a5 => _0x3096a5.id.endsWith(".net")).map(_0x53132d => _0x53132d);
    let _0x2d085f = " 「  " + Config.botname + "'s pm user list  」\n\nTotal " + _0x4b2465.length + " users are text in personal chat.";
    for (let _0x32ba04 of _0x4b2465) {
      _0x2d085f += "\n\nUser: @" + _0x32ba04.id.split('@')[0x0] + "\nMessages : " + _0x32ba04.unreadCount + "\nLastchat : " + moment(_0x32ba04.conversationTimestamp * 0x3e8).tz(timezone).format("DD/MM/YYYY HH:mm:ss");
    }
    _0x5a3f86.bot.sendTextWithMentions(_0x5a3f86.chat, _0x2d085f, _0x5a3f86);
  } catch (_0x5f2d80) {
    return await _0x5a3f86.error(_0x5f2d80 + "\n\n command: listpc", _0x5f2d80, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "listgc",
  'category': "whatsapp",
  'desc': "Finds info about all active groups",
  'filename': __filename
}, async (_0x2e79a2, _0x39bd14, {
  store: _0x228f36,
  Void: _0x19e710
}) => {
  try {
    _0x2e79a2.react('🫡');
    let _0x17366c = await _0x228f36.chats.all().filter(_0x2cafe4 => _0x2cafe4.id.endsWith('@g.us')).map(_0x42d679 => _0x42d679);
    let _0x373c35 = " 「  " + Config.botname + "'s group user list  」\n\nTotal " + _0x17366c.length + " active Groups found!";
    for (let _0x385911 of _0x17366c) {
      let _0xcc7b61 = await _0x19e710.groupMetadata(_0x385911.id);
      _0x373c35 += "\n\nName : " + _0xcc7b61.subject + " " + (_0xcc7b61.owner ? "\nOwner : @" + _0xcc7b61.owner.split('@')[0x0] : '') + "\nID : " + _0x385911.id + "\nMade : " + (_0xcc7b61.creation ? moment(_0xcc7b61.creation * 0x3e8).tz("Africa/Johannesburg").format("DD/MM/YYYY HH:mm:ss") : _0xcc7b61.creation) + "\nMember : " + (_0xcc7b61.participants.length || 0x0) + "\n\nMessages : " + _0x385911.unreadCount + "\nLastchat : " + moment(_0x385911.conversationTimestamp * 0x3e8).tz(timezone).format("DD/MM/YYYY HH:mm:ss");
    }
    _0x2e79a2.send(_0x373c35, {}, "asta", _0x2e79a2);
  } catch (_0x466428) {
    return await _0x2e79a2.error(_0x466428 + "\n\n command: listpc", _0x466428, "*_Didn't get any results, Sorry!_*");
  }
});
cmd({
  'pattern': "vcard",
  'desc': "Create Contact by given name.",
  'category': "whatsapp",
  'filename': __filename
}, async (_0xb39e1b, _0x3c352b) => {
  try {
    if (!_0xb39e1b.quoted) {
      return _0xb39e1b.reply("*Please Reply to User With Name*");
    }
    if (!_0x3c352b) {
      return _0xb39e1b.reply("Please Give Me User Name, \n *Example : " + prefix + "vcard Asta Tech Info* ");
    }
    var _0x15d24d = _0x3c352b.split(" ");
    if (_0x15d24d.length > 0x3) {
      _0x3c352b = _0x15d24d.slice(0x0, 0x3).join(" ");
    }
    const _0x180d0e = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x3c352b + "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" + _0xb39e1b.quoted.sender.split('@')[0x0] + ':+' + owner[0x0] + "\nEND:VCARD";
    let _0x105cce = {
      'contacts': {
        'displayName': _0x3c352b,
        'contacts': [{
          'vcard': _0x180d0e
        }]
      }
    };
    return await _0xb39e1b.bot.sendMessage(_0xb39e1b.chat, _0x105cce, {
      'quoted': _0xb39e1b
    });
  } catch (_0x42f7fe) {
    await _0xb39e1b.error(_0x42f7fe + "\n\ncommand : vcard", _0x42f7fe);
  }
});
smd({
  'pattern': "edit",
  'fromMe': true,
  'desc': "edit message that sended by bot",
  'type': 'whatsapp'
}, async (_0x5c92c8, _0x18f69d) => {
  try {
    let _0x2a2b77 = _0x5c92c8.reply_message && _0x5c92c8.reply_message.fromMe ? _0x5c92c8.reply_message : false;
    if (!_0x2a2b77) {
      return await _0x5c92c8.reply("_Reply to a message that sent by you!_");
    }
    if (!_0x18f69d) {
      return await _0x5c92c8.reply("_Need text, Example: edit hi_");
    }
    return await _0x5c92c8.edit(_0x18f69d, {
      'edit': _0x2a2b77
    });
  } catch (_0x11c338) {
    await _0x5c92c8.error(_0x11c338 + "\n\ncommand : edit", _0x11c338);
  }
});
smd({
  'pattern': "forward",
  'alias': ["send"],
  'desc': "forward your messages in jid",
  'type': "whatsapp"
}, async (_0x37103e, _0x217ce4) => {
  try {
    if (!_0x37103e.reply_message) {
      return _0x37103e.reply("*_Reply to something!_*");
    }
    let _0x36ee64 = await parsedJid(_0x217ce4);
    if (!_0x36ee64 || !_0x36ee64[0x0]) {
      return await _0x37103e.send("*Provide jid to forward message*\n*use _" + prefix + "jid,_ to get jid of users!*");
    }
    for (let _0x4bfe2c = 0x0; _0x4bfe2c < _0x36ee64.length; _0x4bfe2c++) {
      _0x37103e.bot.forwardOrBroadCast(_0x36ee64[_0x4bfe2c], _0x37103e.reply_message);
    }
  } catch (_0x3f8c5e) {
    await _0x37103e.error(_0x3f8c5e + "\n\ncommand : forward", _0x3f8c5e);
  }
});
smd({
  'cmdname': "block",
  'info': "blocks a person",
  'fromMe': true,
  'type': "whatsapp",
  'filename': __filename,
  'use': "<quote/reply user.>"
}, async _0xed892e => {
  try {
    let _0x5dac29 = _0xed892e.reply_message ? _0xed892e.reply_message.sender : !_0xed892e.isGroup ? _0xed892e.from : _0xed892e.mentionedJid[0x0] ? _0xed892e.mentionedJid[0x0] : '';
    if (!_0x5dac29 && !_0x5dac29.includes("@s.whatsapp.net")) {
      return await _0xed892e.reply("*Uhh dear, reply/mention an User*");
    }
    if (_0xed892e.checkBot(_0x5dac29)) {
      return await _0xed892e.reply("*Huh, I can't block my Creator!!*");
    }
    await _0xed892e.bot.updateBlockStatus(_0x5dac29, "block").then(_0x12697c => {
      _0xed892e.react('✨', _0xed892e);
    })["catch"](_0x3b329e => _0xed892e.reply("*_Can't block user, Sorry!!_*"));
  } catch (_0xfea917) {
    await _0xed892e.error(_0xfea917 + "\n\ncommand: block", _0xfea917, false);
  }
});
smd({
  'cmdname': "unblock",
  'info': "Unblocked user.",
  'type': "whatsapp",
  'fromMe': true,
  'filename': __filename
}, async _0x9f9bbd => {
  try {
    let _0x49760f = _0x9f9bbd.reply_message ? _0x9f9bbd.reply_message.sender : !_0x9f9bbd.isGroup ? _0x9f9bbd.from : _0x9f9bbd.mentionedJid[0x0] ? _0x9f9bbd.mentionedJid[0x0] : '';
    if (!_0x49760f && !_0x49760f.includes("@s.whatsapp.net")) {
      return await _0x9f9bbd.reply("*Uhh dear, reply/mention an User*");
    }
    await _0x9f9bbd.bot.updateBlockStatus(_0x49760f, "unblock").then(_0x17fc54 => _0x9f9bbd.send('*@' + _0x49760f.split('@')[0x0] + " Unblocked Successfully..!*", {
      'mentions': [users]
    }))["catch"](_0x1336f6 => _0x9f9bbd.reply("*_Can't Unblock user, Make sure user blocked!!_*"));
  } catch (_0x4a6e94) {
    await _0x9f9bbd.error(_0x4a6e94 + "\n\ncommand: unblock", _0x4a6e94);
  }
});
cmd({
  'pattern': 'vv',
  'alias': ["viewonce", "retrive"],
  'desc': "download viewOnce Message.",
  'category': "whatsapp",
  'use': "<query>",
  'react': '🫦',
  'filename': __filename
}, async (_0x43eeb5, _0x292568) => {
  try {
    var _0x357c7e = false;
    if (_0x43eeb5.reply_message) {
      if (_0x43eeb5.reply_message.viewOnce || _0x43eeb5.device === "ios" && /audioMessage|videoMessage|imageMessage/g.test(_0x43eeb5.reply_message.mtype)) {
        _0x357c7e = _0x43eeb5.reply_message;
      }
    }
    _0x357c7e.mtype = _0x357c7e.mtype2;
    if (!_0x357c7e) {
      return _0x43eeb5.reply("```Please Reply A ViewOnce Message```");
    }
    let _0x138266 = {
      'key': _0x357c7e.key,
      'message': {
        'conversation': "```[VIEWONCE FOUND DOWNLOAD 100%]```"
      }
    };
    let _0x2fb0ec = await _0x43eeb5.bot.downloadAndSaveMediaMessage(_0x357c7e.msg);
    await _0x43eeb5.bot.sendMessage(_0x43eeb5.jid, {
      [_0x357c7e.mtype2.split("Mess")[0x0]]: {
        'url': _0x2fb0ec
      },
      'caption': _0x357c7e.body
    }, {
      'quoted': _0x138266
    });
  } catch (_0x5d1859) {
    await _0x43eeb5.error(_0x5d1859 + "\n\ncommand: vv", _0x5d1859);
  }
});