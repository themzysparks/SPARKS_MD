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


let {
  smd
} = require("../lib");
smd({
  'pattern': 'clear',
  'fromMe': true,
  'desc': "delete whatsapp chat",
  'type': "whatsapp"
}, async (_0x4e3093, _0x3d7000) => {
  try {
    await _0x4e3093.bot.chatModify({
      'delete': true,
      'lastMessages': [{
        'key': _0x4e3093.key,
        'messageTimestamp': _0x4e3093.messageTimestamp
      }]
    }, _0x4e3093.jid);
    await _0x4e3093.send("_Cleared!_");
  } catch (_0x1000cb) {
    _0x4e3093.error(_0x1000cb + "\n\nCommand : clear", _0x1000cb, false);
  }
});
smd({
  'pattern': "archive",
  'fromMe': true,
  'desc': "archive whatsapp chat",
  'type': "whatsapp"
}, async (_0x9dff5a, _0x3c0fba) => {
  try {
    const _0xfacbb8 = {
      'message': _0x9dff5a.message,
      'key': _0x9dff5a.key,
      'messageTimestamp': _0x9dff5a.messageTimestamp
    };
    await _0x9dff5a.bot.chatModify({
      'archive': true,
      'lastMessages': [_0xfacbb8]
    }, _0x9dff5a.jid);
    await _0x9dff5a.send("_Archived_");
  } catch (_0x5208e8) {
    _0x9dff5a.error(_0x5208e8 + "\n\nCommand : archive", _0x5208e8, false);
  }
});
smd({
  'pattern': "unarchive",
  'fromMe': true,
  'desc': "unarchive whatsapp chat",
  'type': "whatsapp"
}, async (_0x260a70, _0x2ad8f0) => {
  try {
    const _0x121c0a = {
      'message': _0x260a70.message,
      'key': _0x260a70.key,
      'messageTimestamp': _0x260a70.messageTimestamp
    };
    await _0x260a70.bot.chatModify({
      'archive': false,
      'lastMessages': [_0x121c0a]
    }, _0x260a70.jid);
    await _0x260a70.send("_Unarchived_");
  } catch (_0x47ea66) {
    _0x260a70.error(_0x47ea66 + "\n\nCommand : unarchive", _0x47ea66, false);
  }
});
smd({
  'pattern': "chatpin",
  'alias': ["pinchat"],
  'fromMe': true,
  'desc': "pin a chat",
  'type': "whatsapp"
}, async (_0x3bf833, _0x5413f9) => {
  try {
    await _0x3bf833.bot.chatModify({
      'pin': true
    }, _0x3bf833.jid);
    await _0x3bf833.send("_Pined_");
  } catch (_0x196915) {
    _0x3bf833.error(_0x196915 + "\n\nCommand : chatpin", _0x196915, false);
  }
});
smd({
  'pattern': "unpin",
  'alias': ["unpinchat", "chatunpin"],
  'fromMe': true,
  'desc': "unpin a msg",
  'type': "whatsapp"
}, async (_0x2fbcee, _0x1408c5) => {
  try {
    await _0x2fbcee.bot.chatModify({
      'pin': false
    }, _0x2fbcee.jid);
    await _0x2fbcee.send("_Unpined_");
  } catch (_0x3a10ad) {
    _0x2fbcee.error(_0x3a10ad + "\n\nCommand : unpin", _0x3a10ad, false);
  }
});
smd({
  'pattern': "markread",
  'fromMe': true,
  'desc': "mark as readed",
  'type': "whatsapp"
}, async (_0x4ea2b7, _0x39097d) => {
  try {
    await _0x4ea2b7.bot.chatModify({
      'markRead': true,
      'lastMessages': [_0x4ea2b7]
    }, _0x4ea2b7.jid);
  } catch (_0x388343) {
    _0x4ea2b7.error(_0x388343 + "\n\nCommand : markread", _0x388343, false);
  }
});
smd({
  'pattern': "markunread",
  'fromMe': true,
  'desc': "mark as UnRead",
  'type': "whatsapp"
}, async (_0x4a790a, _0xbe91ee) => {
  try {
    let _0x35a199 = await _0x4a790a.send('🍁', {}, "react");
    console.log({
      'msg': _0x35a199
    });
    await _0x4a790a.bot.chatModify({
      'markRead': false,
      'lastMessages': [_0x4a790a]
    }, _0x4a790a.jid);
  } catch (_0xa336d) {
    _0x4a790a.error(_0xa336d + "\n\nCommand : markunread", _0xa336d, false);
  }
});
smd({
  'pattern': "unmutechat",
  'fromMe': true,
  'desc': "unmute a chat",
  'type': 'whatsapp'
}, async (_0x125b78, _0x18a1a8) => {
  try {
    await _0x125b78.bot.chatModify({
      'mute': null
    }, _0x125b78.jid);
    await _0x125b78.send("_Chat Unmuted!_");
  } catch (_0x119548) {
    _0x125b78.error(_0x119548 + "\n\nCommand : unmutechat", _0x119548, false);
  }
});
smd({
  'pattern': 'profilename',
  'fromMe': true,
  'desc': "To change your profile name",
  'type': "whatsapp"
}, async (_0x35a436, _0x144cce) => {
  try {
    _0x144cce = _0x144cce || _0x35a436.reply_message.text;
    if (!_0x144cce) {
      return await _0x35a436.send("*Need Name!*\n*Example: profilename your name*.");
    }
    await _0x35a436.bot.updateProfileName(_0x144cce);
    await _0x35a436.send("_Profile name updated!_");
  } catch (_0x14e225) {
    _0x35a436.error(_0x14e225 + "\n\nCommand : profilename", _0x14e225, false);
  }
});
smd({
  'pattern': "getprivacy",
  'fromMe': true,
  'desc': "get your privacy settings",
  'type': "whatsapp settings"
}, async (_0x31334a, _0x1f058c) => {
  const {
    readreceipts: _0xb43bc0,
    profile: _0x13cb0,
    status: _0x3d34d9,
    online: _0x345b4c,
    last: _0x382e6c,
    groupadd: _0x4749d9,
    calladd: _0x211b57
  } = await _0x31334a.bot.fetchPrivacySettings(true);
  const _0x3c5721 = "*♺ whatsapp privacy settings*\n\n*ᝄ name :* " + (_0x31334a.fromMe && _0x31334a.pushName ? _0x31334a.pushName : _0x31334a.bot.user.name).split("\n").join("  ") + "\n*ᝄ number :* " + _0x31334a.user.split('@')[0x0] + "\n\n*ᝄ online :* " + _0x345b4c + "\n*ᝄ profile :* " + _0x13cb0 + "\n*ᝄ last seen :* " + _0x382e6c + "\n*ᝄ whts status :* " + _0x3d34d9 + "\n*ᝄ read receipt :* " + _0xb43bc0 + "\n\n*ᝄ who can add in group :* " + _0x4749d9 + "\n*ᝄ who can call :* " + _0x211b57;
  let _0x4c8c39 = await _0x31334a.getpp(_0x31334a.user);
  await _0x31334a.send(_0x4c8c39, {
    'caption': _0x3c5721
  }, "img");
});
smd({
  'pattern': 'lastseen',
  'fromMe': true,
  'desc': "to change lastseen privacy",
  'type': "whatsapp settings"
}, async (_0x56ef48, _0x29b5b4, {
  smd: _0x2ebbac
}) => {
  try {
    if (!_0x29b5b4) {
      return await _0x56ef48.send("_*Example:-* .lastseen all_\n_to change last seen privacy settings_");
    }
    const _0x440ca0 = ['all', 'contacts', "contact_blacklist", 'none'];
    if (!_0x440ca0.includes(_0x29b5b4)) {
      return await _0x56ef48.send("_action must be *" + _0x440ca0.join(" / ") + "* values_");
    }
    await _0x56ef48.bot.updateLastSeenPrivacy(_0x29b5b4);
    await _0x56ef48.send("_Privacy settings *last seen* Updated to *" + _0x29b5b4 + '*_');
  } catch (_0x279d92) {
    _0x56ef48.error(_0x279d92 + "\n\nCommand : lastseen", _0x279d92, false);
  }
});
smd({
  'pattern': "online",
  'fromMe': true,
  'desc': "to change online privacy",
  'type': "whatsapp settings"
}, async (_0x5f3119, _0x59f859) => {
  try {
    if (!_0x59f859) {
      return await _0x5f3119.send("_*Example:-* .online all_\n_to change *online*  privacy settings_");
    }
    const _0x58bf48 = ["all", "match_last_seen"];
    if (!_0x58bf48.includes(_0x59f859)) {
      return await _0x5f3119.send("_action must be *" + _0x58bf48.join('/') + "* values_");
    }
    await _0x5f3119.bot.updateOnlinePrivacy(_0x59f859);
    await _0x5f3119.send("_Privacy Updated to *" + _0x59f859 + '*_');
  } catch (_0xb782fd) {
    _0x5f3119.error(_0xb782fd + "\n\nCommand : online", _0xb782fd, false);
  }
});
smd({
  'pattern': "mypp",
  'fromMe': true,
  'desc': "privacy setting profile picture",
  'type': "whatsapp settings"
}, async (_0x31d8f7, _0x4ccecb) => {
  try {
    if (!_0x4ccecb) {
      return await _0x31d8f7.send("_*Example:-* .mypp all_\n_to change *profile picture*  privacy settings_");
    }
    const _0x455d73 = ['all', "contacts", 'contact_blacklist', 'none'];
    if (!_0x455d73.includes(_0x4ccecb)) {
      return await _0x31d8f7.send("_action must be *" + _0x455d73.join('/') + "* values_");
    }
    await _0x31d8f7.bot.updateProfilePicturePrivacy(_0x4ccecb);
    await _0x31d8f7.send("_Privacy Updated to *" + _0x4ccecb + '*_');
  } catch (_0x3d9781) {
    _0x31d8f7.error(_0x3d9781 + "\n\nCommand : mypp", _0x3d9781, false);
  }
});
smd({
  'pattern': "mystatus",
  'fromMe': true,
  'desc': "privacy for my status",
  'type': "whatsapp settings"
}, async (_0x1779f4, _0x4b4c77) => {
  try {
    if (!_0x4b4c77) {
      return await _0x1779f4.send("_*Example:-* .mystatus all_\n_to change *status*  privacy settings_");
    }
    const _0x40946e = ['all', "contacts", 'contact_blacklist', "none"];
    if (!_0x40946e.includes(_0x4b4c77)) {
      return await _0x1779f4.send("_action must be *" + _0x40946e.join('/') + "* values_");
    }
    await _0x1779f4.bot.updateStatusPrivacy(_0x4b4c77);
    await _0x1779f4.send("_Privacy Updated to *" + _0x4b4c77 + '*_');
  } catch (_0x197059) {
    _0x1779f4.error(_0x197059 + "\n\nCommand : mystatus", _0x197059, false);
  }
});
smd({
  'pattern': 'read',
  'fromMe': true,
  'desc': "privacy for read message",
  'type': "whatsapp settings"
}, async (_0x52bdd6, _0x815eea, _0x3d856a) => {
  try {
    if (!_0x815eea) {
      return await _0x52bdd6.send("_*Example:-* .read all_\n_to change *read and receipts message*  privacy settings_");
    }
    const _0x3b1b8b = ["all", "none"];
    if (!_0x3b1b8b.includes(_0x815eea)) {
      return await _0x52bdd6.send("_action must be *" + _0x3b1b8b.join('/') + "* values_");
    }
    await _0x52bdd6.bot.updateReadReceiptsPrivacy(_0x815eea);
    await _0x52bdd6.send("_Privacy Updated to *" + _0x815eea + '*_');
  } catch (_0x375234) {
    _0x52bdd6.error(_0x375234 + "\n\nCommand : read", _0x375234, false);
  }
});
smd({
  'pattern': 'groupadd',
  'fromMe': true,
  'desc': "privacy for group add",
  'type': "whatsapp settings"
}, async (_0x471fc1, _0x4aa8b5, _0x3d6d0a) => {
  try {
    if (!_0x4aa8b5) {
      return await _0x471fc1.send("_*Example:-* .groupadd all_\n_to change *group add*  privacy settings_");
    }
    const _0x524a62 = ['all', 'contacts', "contact_blacklist", "none"];
    if (!_0x524a62.includes(_0x4aa8b5)) {
      return await _0x471fc1.send("_action must be *" + _0x524a62.join('/') + "* values_");
    }
    await _0x471fc1.bot.updateGroupsAddPrivacy(_0x4aa8b5);
    await _0x471fc1.send("_Privacy Updated to *" + _0x4aa8b5 + '*_');
  } catch (_0x5d79df) {
    _0x471fc1.error(_0x5d79df + "\n\nCommand : groupadd", _0x5d79df, false);
  }
});