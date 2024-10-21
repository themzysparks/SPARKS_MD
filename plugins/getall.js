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
  smd,
  tlang,
  prefix
} = require("../lib");
smd({
  'cmdname': "getall",
  'desc': "get jid of all members of groups/pm chats/all groups.",
  'type': "owner",
  'fromMe': true,
  'use': "[ members / user / groups ]",
  'usage': "get jids of groups,personal chats, also members of group, so that used them for forward cmd!",
  'filename': __filename,
  'public': false
}, async (_0x270fcd, _0x54df23, {
  store: _0x4e2078
}) => {
  try {
    let _0x86193f = '';
    let _0x5dc8a4 = _0x54df23.split(" ")[0x0];
    if (_0x5dc8a4 === "members" || _0x5dc8a4 === "member") {
      if (!_0x270fcd.isGroup) {
        return _0x270fcd.reply(tlang("group"));
      }
      const _0x25f881 = _0x270fcd.metadata.participants || {};
      for (let _0x3c313f of _0x25f881) {
        _0x86193f += "📍 " + _0x3c313f.id + "\n";
      }
      if (_0x86193f) {
        _0x270fcd.reply("*「 LIST OF GROUP MEMBER'S JID 」*\n\n" + _0x86193f);
      } else {
        _0x270fcd.reply("*Request Denied!*");
      }
    } else {
      if (_0x5dc8a4 == "user" || _0x5dc8a4 == 'pm' || _0x5dc8a4 == 'pc') {
        let _0x5e1432 = await _0x4e2078.chats.all().filter(_0x4d083f => _0x4d083f.id.endsWith(".net")).map(_0x2b5906 => _0x2b5906);
        for (let _0x12f93e of _0x5e1432) {
          _0x86193f += "📍 " + _0x12f93e.id + "\n";
        }
        if (_0x86193f) {
          _0x270fcd.reply("*「 LIST OF PERSONAL CHAT JIDS 」*\n\nTotal " + _0x5e1432.length + " users are text in personal chat.\n\n" + _0x86193f);
        } else {
          _0x270fcd.reply("*Request Denied!*");
        }
      } else {
        if (_0x5dc8a4 == "group" || _0x5dc8a4 == "groups" || _0x5dc8a4 == 'gc') {
          n = await _0x270fcd.bot.groupFetchAllParticipating();
          const _0x4ea098 = Object.entries(n).slice(0x0).map(_0x343c87 => _0x343c87[0x1]);
          for (var _0x5977d4 of _0x4ea098.map(_0x3a1cbc => _0x3a1cbc.id)) {
            _0x86193f += "📍 " + _0x5977d4 + "\n";
          }
          if (_0x86193f) {
            _0x270fcd.reply("*「 LIST OF GROUP CHAT JIDS」*\n\n" + _0x86193f);
          } else {
            _0x270fcd.reply("*Request Denied!*");
          }
        } else {
          return await _0x270fcd.reply("*Use " + prefix + "getall pc| gc| member!*");
        }
      }
    }
  } catch (_0x2b6a63) {
    _0x270fcd.error(_0x2b6a63 + "\n\nCommand getall", _0x2b6a63);
  }
});