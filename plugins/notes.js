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
  note,
  smd,
  prefix
} = require("../lib");
smd({
  'cmdname': 'delnote',
  'type': "notes",
  'filename': __filename,
  'fromMe': true,
  'info': "Deletes note from db.",
  'use': "< note id | 1 >"
}, async (_0x156f4b, _0x3b1559) => {
  try {
    let _0xb18320 = _0x3b1559.split(" ")[0x0];
    if (!_0xb18320 || isNaN(_0xb18320)) {
      return _0x156f4b.reply("*Provide Note ID, Example: " + prefix + "delnote 1*");
    }
    let _0x4d3360 = await note.delnote(_0x156f4b, _0xb18320);
    return await _0x156f4b.reply(_0x4d3360.msg);
  } catch (_0xc32a1a) {
    await _0x156f4b.error(_0xc32a1a + "\n\ncommand: delnote", _0xc32a1a);
  }
});
smd({
  'cmdname': "delallnote",
  'type': "notes",
  'fromMe': true,
  'filename': __filename,
  'info': "Deletes all notes from db."
}, async _0x1a5e37 => {
  try {
    let _0x220d05 = await note.delallnote(_0x1a5e37);
    return await _0x1a5e37.reply(_0x220d05.msg);
  } catch (_0xf86849) {
    await _0x1a5e37.error(_0xf86849 + "\n\ncommand: delallnotes", _0xf86849);
  }
});
smd({
  'cmdname': "allnote",
  'type': "notes",
  'filename': __filename,
  'fromMe': true,
  'info': "Shows list of all notes."
}, async _0x466523 => {
  try {
    let _0x548bc5 = await note.allnotes(_0x466523, "all");
    return await _0x466523.reply(_0x548bc5.msg);
  } catch (_0x291f7e) {
    await _0x466523.error(_0x291f7e + "\n\ncommand: delallnotes", _0x291f7e, "*Can't fetch data, Sorry!!*");
  }
});
smd({
  'cmdname': "getnote",
  'type': "notes",
  'filename': __filename,
  'fromMe': true,
  'info': "Shows note by id.",
  'use': "< id|1|2 >"
}, async (_0xf82f30, _0x131bf9) => {
  try {
    if (!_0x131bf9) {
      return await _0xf82f30.reply("*Provide Note ID, Ex: " + prefix + "getnote id|1|2|..*");
    }
    let _0x12e2cd = await note.allnotes(_0xf82f30, _0x131bf9.split(" ")[0x0].toLowerCase().trim());
    return await _0xf82f30.reply(_0x12e2cd.msg);
  } catch (_0x53be81) {
    await _0xf82f30.error(_0x53be81 + "\n\ncommand: getnote", _0x53be81, "*Can't fetch data, Sorry!!*");
  }
});
smd({
  'cmdname': "addnote",
  'type': "notes",
  'info': "Adds a note on db.",
  'fromMe': true,
  'filename': __filename,
  'use': "< text >"
}, async (_0x23ca4d, _0x26566b) => {
  try {
    if (!_0x26566b) {
      return await _0x23ca4d.reply("*Please provide text to save in notes!*");
    }
    let _0x30cb92 = await note.addnote(_0x23ca4d, _0x26566b);
    return await _0x23ca4d.reply(_0x30cb92.msg);
  } catch (_0xb65208) {
    await _0x23ca4d.error(_0xb65208 + "\n\ncommand: addnote", _0xb65208);
  }
});
smd({
  'cmdname': 'note',
  'type': "notes",
  'fromMe': true,
  'filename': __filename,
  'info': "Shows list of all notes."
}, async (_0x5813f7, _0x353f27, {
  smd: _0x382553
}) => {
  try {
    let _0x3971e3 = "╭───── *『 MONGODB NOTES 』* ───◆\n┃ Here You Can Store Notes For Later Use\n┃ *------------------------------------------*\n┃  ┌┤  *✯---- ADD NEW NOTE ----⦿*\n┃  │✭ *Cmd :* " + (prefix + _0x382553) + " add 'Your Text'\n┃  │✭ *Usage :* Save Text in MongoDb Server\n┃  ╰───────────────────◆\n┃\n┃  ┌┤  *✯---- GET ALL NOTES ----⦿*\n┃  │✭ *Cmd :* " + (prefix + _0x382553) + " all\n┃  │✭ *Usage :* Read/Get All Saved Notes \n┃  ╰───────────────────◆\n┃\n┃  ┌┤  *✯---- DELETE A NOTE ----⦿*\n┃  │✭ *Cmd :* " + (prefix + _0x382553) + " del 'note id'\n┃  │✭ *Usage :* Delete A Single Note By ID Number \n┃  ╰───────────────────◆\n┃\n┃  ┌┤  *✯---- DELETE ALL NOTES ----⦿*\n┃  │✭ *Cmd :* " + (prefix + _0x382553) + " delall\n┃  │✭ *Usage :* Delete All Saved Notes \n┃  ╰───────────────────◆\n╰━━━━━━━━━━━━━━━━━━━━━━──⊷";
    if (!_0x353f27) {
      return await _0x5813f7.reply(_0x3971e3);
    }
    let _0x3c95f3 = _0x353f27.split(" ")[0x0].trim().toLowerCase();
    if (_0x3c95f3 === "add" || _0x3c95f3 === "new") {
      let _0x49f143 = await note.addnote(_0x5813f7, _0x353f27.replace("add", '').replace("new", ''));
      return await _0x5813f7.reply(_0x49f143.msg);
    } else {
      if (_0x3c95f3 === "all") {
        let _0x49163f = await note.allnotes(_0x5813f7, "all");
        return await _0x5813f7.reply(_0x49163f.msg);
      } else {
        if (_0x3c95f3 === "delall") {
          let _0x107fad = await note.delallnote(_0x5813f7);
          return await _0x5813f7.reply(_0x107fad.msg);
        } else {
          if (_0x3c95f3 === "del") {
            let _0x2db864 = _0x353f27.split(" ")[0x1];
            if (!_0x2db864 || isNaN(_0x2db864)) {
              return _0x5813f7.reply("*Uhh Please, Provide Note ID. Example: .delnote 1*");
            }
            let _0x2bc83f = await note.delnote(_0x5813f7, _0x2db864);
            return await _0x5813f7.reply(_0x2bc83f.msg);
          } else {
            return await _0x5813f7.reply("*Invalid action provided, please follow* \n\n" + _0x3971e3);
          }
        }
      }
    }
  } catch (_0x3a794d) {
    await _0x5813f7.error(_0x3a794d + "\n\ncommand: addnote", _0x3a794d, "*Can't fetch data, Sorry!*");
  }
});