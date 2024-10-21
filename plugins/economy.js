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
  groupdb,
  smd,
  getBuffer,
  tlang,
  prefix
} = require("../lib");
const eco = require('discord-mongoose-economy');
let ty = false;
try {
  if (isMongodb) {
    ty = eco.connect(mongodb);
    console.log("Connected with discord economy!!");
  }
} catch (_0x3a3a36) {
  ty = false;
}
if (ty) {
  smd({
    'pattern': "daily",
    'desc': "daily gold.",
    'category': "economy",
    'filename': __filename
  }, async ({
    reply: _0x26cb72,
    chat: _0x2fa94e,
    isGroup: _0x332dfd,
    sender: _0x3c895e,
    error: _0x2a8c0c
  }) => {
    try {
      let _0x2a3356 = (await groupdb.findOne({
        'id': _0x2fa94e
      })) || {};
      if (_0x2a3356?.['economy'] == "false") {
        return _0x26cb72("*🚦Economy* is not active in current group.");
      }
      if (!_0x332dfd) {
        return _0x26cb72(tlang().group);
      }
      const _0x328dda = await eco.daily(_0x3c895e, "ANITA", 0x1f4);
      if (_0x328dda.cd) {
        return await _0x26cb72("🧧 You already claimed daily for today, come back in " + _0x328dda.cdL + '🫡');
      } else {
        _0x26cb72("you claimed daily " + _0x328dda.amount + " 🪙 for today🎉.");
      }
    } catch (_0x8b34e4) {
      _0x2a8c0c(_0x8b34e4 + "\n\ncommand: daily", _0x8b34e4);
    }
  });
  smd({
    'pattern': "resetwallet",
    'desc': "reset wallet of quoted user.",
    'category': 'economy',
    'filename': __filename,
    'react': '💷'
  }, async _0x550c5b => {
    try {
      let _0x159575 = (await groupdb.findOne({
        'id': _0x550c5b.chat
      })) || (await groupdb['new']({
        'id': _0x550c5b.chat
      }));
      let _0x4f8515 = _0x159575.economy || "false";
      if (_0x4f8515 == "false") {
        return _0x550c5b.reply("*🚦Economy* is not active in current group.");
      }
      if (!isCreator) {
        return _0x550c5b.reply(tlang().owner);
      }
      let _0x972d67 = _0x550c5b.mentionedJid ? _0x550c5b.mentionedJid[0x0] : _0x550c5b.msg.contextInfo.participant || false;
      if (!_0x972d67) {
        return _0x550c5b.reply("Please give me user.");
      }
      const _0xf7f0a4 = await eco.balance(_0x972d67, "ANITA");
      await eco.deduct(_0x972d67, "ANITA", _0xf7f0a4.wallet);
      return await _0x550c5b.reply("⛩️ User: @" + _0x972d67.split('@')[0x0] + " \n *🧧 @" + _0x972d67.split('@')[0x0] + " lost all 🪙 in wallet.*\n_Now live with that poverty.🫡_", {
        'mentions': [_0x972d67]
      });
    } catch (_0xc3541) {
      _0x550c5b.error(_0xc3541 + "\n\ncommand: resetwallet", _0xc3541);
    }
  });
  smd({
    'pattern': "capacity",
    'desc': "update capacity.",
    'category': "economy",
    'filename': __filename,
    'react': '💷'
  }, async (_0x8dd0cb, _0x5b3dc5) => {
    try {
      let _0x3dafd8 = (await groupdb.findOne({
        'id': _0x8dd0cb.chat
      })) || (await groupdb["new"]({
        'id': _0x8dd0cb.chat
      }));
      let _0x268f00 = _0x3dafd8.economy || "false";
      if (_0x268f00 == 'false') {
        return _0x8dd0cb.reply("*🚦Economy* is not active in current group.");
      }
      if (!_0x8dd0cb.isGroup) {
        return _0x8dd0cb.reply(tlang().group);
      }
      if (!_0x5b3dc5) {
        return _0x8dd0cb.reply("💴 *Bank-capacity* 💳\n\n1 | *1000 sp* = 🪙100\n\n2 | *100000 sp* = 🪙1000\n\n3 | *10000000 sp* = 🪙10000000\n\nExample- " + prefix + "capacity 1 OR " + prefix + "bankupgrade 1000");
      }
      let _0x72714d = _0x8dd0cb.mentionedJid ? _0x8dd0cb.mentionedJid[0x0] : _0x8dd0cb.msg.contextInfo.participant || false;
      let _0x4956d2 = _0x5b3dc5.trim();
      let _0x5b4eed = parseInt(_0x4956d2);
      const _0xa891b9 = await eco.balance(_0x72714d, 'ANITA');
      switch (_0x4956d2) {
        case "1000":
        case '1':
          if (_0x5b4eed > _0xa891b9.wallet) {
            return _0x8dd0cb.reply("*_You need to pay 🪙100 to increase bank capacity ~ 1000 sp_*");
          }
          return await _0x8dd0cb.reply("*1000 🪙diamond storage has been added in " + _0x8dd0cb.senderName + " bank*");
          break;
        case "100000":
        case '2':
          if (_0x5b4eed < _0xa891b9.wallet) {
            return _0x8dd0cb.reply("*You need to pay 🪙1000 to increase bank capacity ~ 100000 sp*");
          }
          return await _0x8dd0cb.reply("*100000 🪙diamond storage has been added in " + _0x8dd0cb.pushName + " bank*");
          break;
        case '10000000':
        case '3':
          if (_0x5b4eed < _0xa891b9.wallet) {
            return _0x8dd0cb.reply("You need to pay 🪙10000 to increase bank capacity ~ 1000 sp");
          }
          return await _0x8dd0cb.reply("*10000000 🪙diamond storage has been added in " + _0x8dd0cb.pushName + "'s bank*");
          break;
        default:
          await _0x8dd0cb.reply("*What are you trying to do📉*.");
      }
    } catch (_0x511a2e) {
      _0x8dd0cb.error(_0x511a2e + "\n\ncommand: capacity", _0x511a2e);
    }
  });
  smd({
    'pattern': "deposit",
    'desc': "deposit gold.",
    'category': "economy",
    'filename': __filename,
    'react': '💷'
  }, async (_0x622f40, _0x16d9dc) => {
    try {
      let _0x3bb9c0 = (await groupdb.findOne({
        'id': _0x622f40.chat
      })) || {};
      let _0x225b49 = _0x3bb9c0.economy || 'false';
      if (_0x225b49 == 'false') {
        return _0x622f40.reply("*🚦Economy* is not active in current group.");
      }
      if (!_0x16d9dc) {
        return _0x622f40.reply("Baka!! Provide the 💰amount you want to deposit!");
      }
      let _0x41644d = parseInt(_0x16d9dc);
      const _0x4c1d53 = await eco.deposit(_0x622f40.sender, "Asta", _0x41644d);
      if (_0x4c1d53.noten) {
        return _0x622f40.reply("You can't deposit what you don't have💰.");
      }
      return await _0x622f40.reply("⛩️ Sender: " + _0x622f40.pushName + "\n🍀Successfully 💰Deposited 🪙" + _0x4c1d53.amount + " to your bank.Upgrade your bank capacity to add more money📈.");
    } catch (_0x357553) {
      _0x622f40.error(_0x357553 + "\n\ncommand: deposit", _0x357553);
    }
  });
  smd({
    'pattern': 'lb',
    'desc': "check leaderboard.",
    'category': "economy",
    'filename': __filename,
    'react': '💷'
  }, async _0x3c1fe2 => {
    try {
      let _0x35fef6 = await eco.lb("Asta", 0xa);
      let _0x2e54ed = "*Top " + _0x35fef6.length + " users with more money in wallet.*\n";
      let _0x2f4c6c = [];
      for (let _0x663b35 = 0x0; _0x663b35 < _0x35fef6.length; _0x663b35++) {
        var _0x24f8ce = _0x3c1fe2.bot.getName(_0x35fef6[_0x663b35].userID);
        _0x2e54ed += '*' + (_0x663b35 + 0x1) + "*\n╭─────────────◆\n│ *Name:-* _" + _0x24f8ce + "_\n│ *User:-* _@" + _0x35fef6[_0x663b35].userID.split('@')[0x0] + "_\n│ *Wallet:-* _" + _0x35fef6[_0x663b35].wallet + "_\n│ *Bank Amount:-* _" + _0x35fef6[_0x663b35].bank + "_\n│ *Bank Capacity:-* _" + _0x35fef6[_0x663b35].bankCapacity + "_\n╰─────────────◆\n\n";
        _0x2f4c6c.push(_0x35fef6[_0x663b35].userID);
      }
      await _0x3c1fe2.reply(_0x2e54ed, {
        'mentions': _0x2f4c6c
      });
    } catch (_0x1b2197) {
      _0x3c1fe2.error(_0x1b2197 + "\n\ncommand: lb", _0x1b2197);
    }
  });
  smd({
    'pattern': "transfer",
    'desc': "transfer gold.",
    'category': "economy",
    'filename': __filename,
    'react': '💷'
  }, async (_0x5b3546, _0x5c0223) => {
    try {
      let _0x1977cc = (await groupdb.findOne({
        'id': _0x5b3546.chat
      })) || {};
      let _0x281657 = _0x1977cc.economy || "false";
      if (_0x281657 == "false") {
        return _0x5b3546.reply("*🚦Economy* is not active in current group.");
      }
      let _0x2c6c88 = _0x5c0223.trim().split(" ");
      if (_0x2c6c88[0x0] === '') {
        return _0x5b3546.reply("Use " + prefix + "transfer 100 @user");
      }
      let _0x173ec0 = _0x5b3546.mentionedJid ? _0x5b3546.mentionedJid[0x0] : _0x5b3546.msg.contextInfo.participant || false;
      if (!_0x173ec0) {
        return _0x5b3546.reply("Please give me any user🤦‍♂️.");
      }
      const _0x26bf99 = _0x5b3546.sender;
      const _0x5a37eb = _0x2c6c88[0x0];
      let _0x347b0f = parseInt(_0x5a37eb);
      if (!_0x347b0f) {
        return _0x5b3546.reply("check your text plz u r using the command in a wrong way👀");
      }
      const _0x432a5b = await eco.balance(_0x26bf99, "Asta");
      let _0x18c89d = _0x432a5b.wallet < parseInt(_0x5a37eb);
      if (_0x18c89d == true) {
        return _0x5b3546.reply("you dont have sufficient money to transfer👎");
      }
      return await _0x5b3546.reply("*📠 Transaction successful of " + _0x2c6c88[0x0] + " 💰*");
    } catch (_0x2ccb5f) {
      _0x5b3546.error(_0x2ccb5f + "\n\ncommand: transfer", _0x2ccb5f);
    }
  });
  smd({
    'pattern': "wallet",
    'desc': "shows wallet.",
    'category': "economy",
    'filename': __filename,
    'react': '💷'
  }, async _0xbbd92c => {
    try {
      let _0x5527c2 = (await groupdb.findOne({
        'id': _0xbbd92c.chat
      })) || (await groupdb['new']({
        'id': _0xbbd92c.chat
      }));
      let _0x5e507b = _0x5527c2.economy || "false";
      if (_0x5e507b == "false") {
        return _0xbbd92c.reply("*🚦Economy* is not active in current group.");
      }
      const _0x31f31b = await eco.balance(_0xbbd92c.sender, "Asta");
      return await _0xbbd92c.reply("*👛 " + _0xbbd92c.pushName + "'s Purse:*\n\n_🪙" + _0x31f31b.wallet + '_');
    } catch (_0x4d9a9e) {
      _0xbbd92c.error(_0x4d9a9e + "\n\ncommand: wallet", _0x4d9a9e);
    }
  });
  smd({
    'pattern': "give",
    'desc': "Add money in wallet.",
    'category': "economy",
    'filename': __filename,
    'react': '💷'
  }, async (_0x208fc5, _0x34c677) => {
    try {
      if (!_0x208fc5.isCreator) {
        return _0x208fc5.reply("*_Hey Master, only my owner can give money!_*");
      }
      let _0x24590c = _0x208fc5.mentionedJid ? _0x208fc5.mentionedJid[0x0] : _0x208fc5.msg?.["contextInfo"]?.["participant"] || false;
      if (!_0x24590c) {
        return _0x208fc5.reply("Please give me user to add money.");
      }
      await eco.give(_0x24590c, "Asta", parseInt(_0x34c677.split(" ")[0x0]));
      return await _0x208fc5.bot.sendMessage(_0x208fc5.chat, {
        'text': "Added 📈 " + parseInt(_0x34c677.split(" ")[0x0]) + " to @" + _0x24590c.split('@')[0x0] + " wallet🛸.",
        'mentions': [_0x24590c]
      }, {
        'quoted': _0x208fc5
      });
    } catch (_0x38deea) {
      _0x208fc5.error(_0x38deea + "\n\ncommand: give", _0x38deea);
    }
  });
  smd({
    'pattern': "bank",
    'desc': "shows bank amount.",
    'category': "economy",
    'filename': __filename,
    'react': '💷'
  }, async _0xbbd0da => {
    try {
      let _0x39199f = (await groupdb.findOne({
        'id': _0xbbd0da.chat
      })) || (await groupdb['new']({
        'id': _0xbbd0da.chat
      }));
      let _0x2fb7ad = _0x39199f.economy || 'false';
      if (_0x2fb7ad == 'false') {
        return _0xbbd0da.reply("*🚦Economy* is not active in current group.");
      }
      const _0x4ee6cb = await eco.balance(_0xbbd0da.sender, "Asta");
      return await _0xbbd0da.reply("🍀User: " + _0xbbd0da.pushName + "\n\n_🪙" + _0x4ee6cb.bank + '/' + _0x4ee6cb.bankCapacity + '_');
    } catch (_0x215270) {
      _0xbbd0da.error(_0x215270 + "\n\ncommand: bank", _0x215270);
    }
  });
  smd({
    'pattern': "rob",
    'desc': "rob bank amount.",
    'category': "economy",
    'filename': __filename
  }, async _0x131bb9 => {
    try {
      let _0x9bef3e = (await groupdb.findOne({
        'id': _0x131bb9.chat
      })) || (await groupdb["new"]({
        'id': _0x131bb9.chat
      }));
      let _0x107006 = _0x9bef3e.economy || "false";
      if (_0x107006 == "false") {
        return _0x131bb9.reply("*🚦Economy* is not active in current group.");
      }
      let _0x209ec9 = _0x131bb9.mentionedJid ? _0x131bb9.mentionedJid[0x0] : _0x131bb9.msg.contextInfo.participant || false;
      if (!_0x209ec9) {
        return _0x131bb9.reply("Please give me user to rob.");
      }
      const _0x54c97c = _0x131bb9.sender;
      const _0x28adce = await eco.balance(_0x54c97c, "Asta");
      const _0x530d83 = await eco.balance(_0x209ec9, "Asta");
      const _0x36d3ff = ["ran", "rob", "caught"];
      const _0xf0beeb = _0x36d3ff[Math.floor(Math.random() * _0x36d3ff.length)];
      if (0x3e8 > _0x28adce.wallet) {
        return _0x131bb9.reply("*☹️ You don't have enough money to pay incase you get caught*");
      }
      if (0x3e8 > _0x530d83.wallet) {
        return _0x131bb9.reply("*Sorry, your victim is too poor 🤷🏽‍♂️ let go🫤.*");
      }
      switch (_0xf0beeb) {
        case 'ran':
          await _0x131bb9.reply("*Your victim escaped, be more scary next time🫰.*");
          break;
        case "rob":
          const _0x4e82fd = Math.floor(Math.random() * 0x3e8);
          await eco.deduct(_0x209ec9, "Asta", _0x4e82fd);
          await eco.give(_0x131bb9.sender, "Asta", _0x4e82fd);
          await _0x131bb9.reply("*🤑 Robbery operation done successfully.🗡️*\nYou ran with " + _0x4e82fd + " amount in your wallet.");
          break;
        case "caught":
          const _0x54a031 = Math.floor(Math.random() * 0x3e8);
          await eco.deduct(_0x54c97c, 'Asta', _0x54a031);
          await _0x131bb9.reply("*Sorry FBI👮 caught up with you, you paid " + _0x54a031 + " 🪙 from wallet🥹.*");
          break;
        default:
          await _0x131bb9.reply("*What are you trying to do👀*.");
      }
    } catch (_0x413c75) {
      _0x131bb9.error(_0x413c75 + "\n\ncommand: rob", _0x413c75);
    }
  });
  smd({
    'pattern': "withdraw",
    'desc': "withdraw money from bank account.",
    'category': 'economy',
    'filename': __filename,
    'react': '💷'
  }, async (_0x3d9e3c, _0x53be4f) => {
    try {
      let _0xafff0c = (await groupdb.findOne({
        'id': _0x3d9e3c.chat
      })) || {};
      let _0x5b0d93 = _0xafff0c.economy || "false";
      if (_0x5b0d93 == "false") {
        return _0x3d9e3c.reply("*🚦Economy* is not active in current group.");
      }
      const _0x18c84f = _0x3d9e3c.sender;
      if (!_0x53be4f) {
        return _0x3d9e3c.reply("*Provide the amount💰 you want to withdraw💳!*");
      }
      const _0x1a880d = _0x53be4f.trim();
      const _0x1669fc = await eco.withdraw(_0x18c84f, "Asta", _0x1a880d);
      if (_0x1669fc.noten) {
        return _0x3d9e3c.reply("*🏧 Insufficient fund in bank🫤*");
      }
      _0x3d9e3c.reply("*🏧 ALERT* \n _🪙" + _0x1669fc.amount + " has been withdrawn from your wallet💰._");
    } catch (_0x4f04f8) {
      _0x3d9e3c.error(_0x4f04f8 + "\n\ncommand: withdraw", _0x4f04f8);
    }
  });
  smd({
    'pattern': 'gamble',
    'desc': "gamble money.",
    'category': 'economy',
    'filename': __filename,
    'react': '💷'
  }, async (_0x1302d5, _0x4926c7) => {
    try {
      let _0x463904 = (await groupdb.findOne({
        'id': _0x1302d5.chat
      })) || {};
      let _0x248150 = _0x463904.economy || "false";
      if (_0x248150 == "false") {
        return _0x1302d5.reply("*🚦Economy* is not active in current group.");
      }
      const _0x5b9fce = _0x1302d5.sender;
      var _0x377b95 = _0x4926c7.split(" ");
      var _0x144e9f = _0x377b95[0x1];
      var _0x3bfeb4 = _0x377b95[0x0].toLowerCase();
      var _0x165801 = parseInt(_0x3bfeb4);
      const _0xac58e8 = await eco.balance(_0x5b9fce, "Asta");
      const _0x4990c1 = _0xac58e8.wallet > parseInt(_0x3bfeb4);
      const _0x51c78c = 0x32 > parseInt(_0x3bfeb4);
      const _0x3f2245 = _0x165801 * 0x2;
      var _0x301fcf;
      if (_0x144e9f === "left") {
        _0x301fcf = "https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/leftr.webp?raw=true";
      } else {
        if (_0x144e9f === "right") {
          _0x301fcf = "https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/rightr.webp?raw=true";
        } else {
          if (_0x144e9f === 'up') {
            _0x301fcf = 'https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/upr.webp?raw=true';
          } else if (_0x144e9f === "down") {
            _0x301fcf = "https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/downr.webp?raw=true";
          } else {
            _0x1302d5.reply("Please provide direction(left,right,up,down).\nEg:- " + prefix + "gamble 200 left");
          }
        }
      }
      let _0x313ee6 = await getBuffer(_0x301fcf);
      _0x1302d5.reply(_0x313ee6, {
        'packname': "Asta",
        'author': "Economy"
      }, "sticker");
      const _0x16c912 = ['up', "right", "left", "down", 'up', "left", "down", 'right', 'up', "down", "right", "left"];
      const _0x456c14 = _0x16c912[Math.floor(Math.random() * _0x16c912.length)];
      if (!_0x4926c7) {
        return _0x1302d5.reply("Example:  " + prefix + "gamble 100 direction(left,right,up,down)");
      }
      if (!_0x3bfeb4) {
        return _0x1302d5.reply("*Please, specify the amount you are gambling with!*");
      }
      if (!_0x144e9f) {
        return _0x1302d5.reply("*Specify the direction you are betting on!*");
      }
      if (!_0x165801) {
        return _0x1302d5.reply("*Check your text please, You are using the command in a wrong way*");
      }
      if (_0x4990c1 == false) {
        return _0x1302d5.reply("*You don't have sufficient 🪙 Diamond to gamble with*");
      }
      if (_0x51c78c == true) {
        return _0x1302d5.reply("*Sorry " + _0x1302d5.pushName + ", you can only gamble with more than 🪙50.*");
      }
      if (_0x456c14 == _0x144e9f) {
        return await _0x1302d5.reply("*📈 You won 🪙" + _0x3f2245 + '*');
      } else {
        return await _0x1302d5.reply("*📉 You lost 🪙" + _0x377b95[0x0] + '*');
      }
    } catch (_0x4f77dc) {
      _0x1302d5.error(_0x4f77dc + "\n\ncommand: gamble", _0x4f77dc);
    }
  });
  smd({
    'pattern': "slot2",
    'desc': "withdraw money from bank account.",
    'category': "economy",
    'filename': __filename,
    'react': '💷'
  }, async (_0x296a39, _0x1e20a3) => {
    try {
      let _0x2c32dd = (await groupdb.findOne({
        'id': _0x296a39.chat
      })) || {};
      let _0x40d289 = _0x2c32dd.economy || "false";
      if (_0x40d289 == "false") {
        return _0x296a39.reply("*🚦Economy* is not active in current group.");
      }
      var _0x46bfbb = new Date();
      if (_0x46bfbb.getDay() == 0x6 || _0x46bfbb.getDay() == 0x5 || _0x46bfbb.getDay() == 0x0) {
        if (_0x1e20a3 == "help") {
          return _0x296a39.reply("*1:* Use " + prefix + "slot to play\n\n*2:* You must have 🪙100 in your wallet\n\n*3:* If you don't have money in wallet then 👛withdraw from your bank🏦\n\n*4:* If you don't have 🤑 money in your 🏦bank too then use economy features to 📈gain money");
        }
        if (_0x1e20a3 == 'money') {
          return _0x296a39.reply("*1:* Small Win --> +🪙20\n\n*2:* Small Lose --> -🪙20\n\n*3:* Big Win --> +🪙100\n\n*4:* Big Lose --> -🪙50\n\n*5:* 🎉 JackPot --> +🪙1000");
        }
        const _0x57a62e = ['🥥', '🍎', '🍇'];
        const _0x4ce6b8 = ['🍎', '🍇', '🥥'];
        const _0x3b8bae = ['🍇', '🥥', '🍎'];
        const _0x365249 = ["*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_", "*Totally out of line*\n\n_--> 🥥-🍎-🍍_", "*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_"];
        const _0x58fb73 = ["*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_", "*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_", "*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_"];
        const _0x52d689 = ["*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_", "*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_", "*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_"];
        const _0x397e0d = ["*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_", "*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_"];
        const _0x4f5ef9 = ["*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_", "*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_", "*🎊 You Just hit a jackpot worth 🪙1000*"];
        const _0x54b91f = _0x296a39.sender;
        const _0x2cbfe2 = await eco.balance(_0x54b91f, "Asta");
        if (0x64 > _0x2cbfe2.wallet) {
          return _0x296a39.reply("You are going to be spinning on your wallet, you need at least 🪙100");
        }
        const _0x2930d3 = _0x57a62e[Math.floor(Math.random() * _0x57a62e.length)];
        const _0x4bd642 = _0x4ce6b8[Math.floor(Math.random() * _0x4ce6b8.length)];
        const _0x21cfd3 = _0x3b8bae[Math.floor(Math.random() * _0x3b8bae.length)];
        const _0x3075d4 = _0x365249[Math.floor(Math.random() * _0x365249.length)];
        const _0x25c6be = _0x52d689[Math.floor(Math.random() * _0x52d689.length)];
        const _0x553ea5 = _0x397e0d[Math.floor(Math.random() * _0x397e0d.length)];
        const _0x574743 = _0x4f5ef9[Math.floor(Math.random() * _0x4f5ef9.length)];
        const _0x426f4a = _0x58fb73[Math.floor(Math.random() * _0x58fb73.length)];
        if (_0x1e20a3.split(" ")[0x0]) {
          let _0x3ec791 = _0x1e20a3.split(" ")[0x0];
          const _0x46a4c9 = await eco.balance(_0x296a39.sender, 'Asta');
          console.log(_0x46a4c9.wallet);
          if (_0x3ec791 <= _0x46a4c9.wallet) {
            const _0x71961a = Math.floor(Math.random() * _0x3ec791);
            if (_0x2930d3 !== _0x4bd642 && _0x4bd642 !== _0x21cfd3) {
              return _0x296a39.reply(_0x3075d4 + "\n\n*Big Lose -->* _🪙" + _0x71961a + '_');
            } else {
              if (_0x2930d3 == _0x4bd642 && _0x4bd642 == _0x21cfd3) {
                return _0x296a39.reply(_0x25c6be + "\n*_Little Jackpot -->* _🪙" + _0x71961a / 0x2 + '_');
              } else {
                if (_0x2930d3 == _0x4bd642 && _0x4bd642 !== _0x21cfd3) {
                  return _0x296a39.reply(_0x553ea5 + "\n*Small Win -->* _🪙" + _0x71961a + '_');
                } else {
                  if (_0x2930d3 !== _0x4bd642 && _0x2930d3 == _0x21cfd3) {
                    return _0x296a39.reply(_0x426f4a + "\n\n*Small Lose -->* _🪙" + _0x71961a + '_');
                  } else {
                    if (_0x2930d3 !== _0x4bd642 && _0x4bd642 == _0x21cfd3) {
                      return _0x296a39.reply(_0x553ea5 + "\n\n*Small Win -->* _🪙" + _0x71961a + '_');
                    } else {
                      if (_0x2930d3 == _0x4bd642 && _0x4bd642 == _0x21cfd3 && _0x21cfd3 == f4) {
                        return _0x296a39.reply(_0x574743 + "\n\n_🎊 JackPot --> _🪙" + _0x71961a * 0x14 + '_');
                      } else {
                        return _0x296a39.reply("Do you understand what you are doing?");
                      }
                    }
                  }
                }
              }
            }
          } else {
            return _0x296a39.reply("You don't have enough 💰amount in your👛 wallet.\n- Please don't provide 🤑amount.");
          }
        }
        if (_0x2930d3 !== _0x4bd642 && _0x4bd642 !== _0x21cfd3) {
          _0x296a39.reply(_0x3075d4 + "\n\n*Big Lose -->* _🪙50_");
        } else {
          if (_0x2930d3 == _0x4bd642 && _0x4bd642 == _0x21cfd3) {
            _0x296a39.reply(_0x25c6be + "\n*_Little Jackpot -->* _🪙100_");
          } else {
            if (_0x2930d3 == _0x4bd642 && _0x4bd642 !== _0x21cfd3) {
              _0x296a39.reply(_0x553ea5 + "\n*Small Win -->* _🪙20_");
            } else {
              if (_0x2930d3 !== _0x4bd642 && _0x2930d3 == _0x21cfd3) {
                _0x296a39.reply(_0x426f4a + "\n\n*Small Lose -->* _🪙20_");
              } else {
                if (_0x2930d3 !== _0x4bd642 && _0x4bd642 == _0x21cfd3) {
                  _0x296a39.reply(_0x553ea5 + "\n\n*Small Win -->* _🪙20_");
                } else {
                  if (_0x2930d3 == _0x4bd642 && _0x4bd642 == _0x21cfd3 && _0x21cfd3 == f4) {
                    _0x296a39.reply(_0x574743 + "\n\n_🎊 JackPot --> _🪙1000_");
                  } else {
                    _0x296a39.reply("Do you understand what you are doing?");
                  }
                }
              }
            }
          }
        }
      } else {
        _0x296a39.reply("*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*");
      }
    } catch (_0x555eaf) {
      _0x296a39.error(_0x555eaf + "\n\ncommand: slot2", _0x555eaf);
    }
  });
  smd({
    'pattern': 'slot',
    'desc': "slot game.",
    'category': "economy",
    'filename': __filename,
    'react': '💷'
  }, async _0x22bbb8 => {
    try {
      let _0xd34521 = (await groupdb.findOne({
        'id': _0x22bbb8.chat
      })) || {};
      let _0x692af5 = _0xd34521.economy || "false";
      if (_0x692af5 == "false") {
        return _0x22bbb8.reply("*🚦Economy* is not active in current group.");
      }
      const _0x5a8453 = await eco.balance(_0x22bbb8.sender, "Asta");
      if (0x64 > _0x5a8453.wallet) {
        return _0x22bbb8.reply("You are going to be spinning on your wallet, you need at least 🪙100");
      }
      var _0x1e88e1 = new Array();
      _0x1e88e1[0x0] = "1 : 2 : 3";
      _0x1e88e1[0x1] = "1 : 2 : 3";
      _0x1e88e1[0x2] = "1 : 2 : 3";
      _0x1e88e1[0x3] = "4 : 3 : 3";
      _0x1e88e1[0x4] = "1 : 1 : 1";
      _0x1e88e1[0x5] = "5 : 2 : 5";
      _0x1e88e1[0x6] = "3 : 5 : 3";
      _0x1e88e1[0x7] = "1 : 3 : 6";
      _0x1e88e1[0x8] = "6 : 2 : 7";
      _0x1e88e1[0x9] = "1 : 6 : 3";
      _0x1e88e1[0xa] = "6 : 3 : 2";
      _0x1e88e1[0xb] = "5 : 5 : 6";
      _0x1e88e1[0xc] = "1 : 5 : 3";
      _0x1e88e1[0xd] = "4 : 1 : 7";
      _0x1e88e1[0xe] = "4 : 3 : 2";
      _0x1e88e1[0xf] = "4 : 3 : 2";
      _0x1e88e1[0x10] = "7 : 4 : 6";
      _0x1e88e1[0x11] = "6 : 5 : 1";
      _0x1e88e1[0x12] = "5 : 7 : 2";
      var _0xeaa62c = Math.floor(0x13 * Math.random());
      var _0x538127 = Math.floor(0x13 * Math.random());
      var _0x44cccf = Math.floor(0x13 * Math.random());
      var _0x4a82a2 = _0x1e88e1[_0xeaa62c];
      var _0x2d1a79 = _0x1e88e1[_0x538127];
      var _0x8aa502 = _0x1e88e1[_0x44cccf];
      console.log(_0x4a82a2 + "\n" + _0x2d1a79 + "\n" + _0x8aa502);
      let _0x4aee7d = _0x4a82a2.split(':');
      let _0xe3fb1e = _0x2d1a79.split(':');
      let _0x3f46dc = _0x8aa502.split(':');
      var _0x5a1e40;
      if (_0x4aee7d[0x2] === _0xe3fb1e[0x1] && _0xe3fb1e[0x1] === _0x3f46dc[0x0]) {
        _0x5a1e40 = true;
      }
      if (_0x4aee7d[0x0] === _0xe3fb1e[0x1] && _0xe3fb1e[0x1] === _0x3f46dc[0x2]) {
        _0x5a1e40 = true;
      }
      if (_0x4aee7d[0x0] === _0xe3fb1e[0x0] && _0xe3fb1e[0x0] === _0x3f46dc[0x0]) {
        _0x5a1e40 = true;
      }
      if (_0x4aee7d[0x1] === _0xe3fb1e[0x1] && _0xe3fb1e[0x1] === _0x3f46dc[0x1]) {
        _0x5a1e40 = true;
      }
      if (_0x4aee7d[0x2] === _0xe3fb1e[0x2] && _0xe3fb1e[0x2] === _0x3f46dc[0x2]) {
        _0x5a1e40 = true;
      }
      if (_0x4aee7d[0x0] === _0xe3fb1e[0x1] && _0xe3fb1e[0x1] === _0x3f46dc[0x2]) {
        _0x5a1e40 = true;
      }
      if (_0x4aee7d[0x2] === _0xe3fb1e[0x1] && _0xe3fb1e[0x1] === _0x3f46dc[0x0]) {
        _0x5a1e40 = true;
      }
      if (_0x4aee7d[0x0] === _0x4aee7d[0x1] && _0x4aee7d[0x0] === _0x4aee7d[0x2]) {
        _0x5a1e40 = true;
      }
      if (_0xe3fb1e[0x0] === _0xe3fb1e[0x1] && _0xe3fb1e[0x0] === _0xe3fb1e[0x2]) {
        _0x5a1e40 = true;
      }
      if (_0x3f46dc[0x0] === _0x3f46dc[0x1] && _0x3f46dc[0x0] === _0x3f46dc[0x2]) {
        _0x5a1e40 = true;
      }
      if (_0x4aee7d[0x0] === _0x3f46dc[0x1] && _0x4aee7d[0x0] === _0x3f46dc[0x2]) {
        _0x5a1e40 = true;
      }
      if (_0x5a1e40) {
        const _0x197ffa = Math.floor(Math.random() * 0x1388);
        return await _0x22bbb8.reply("You got " + _0x197ffa * 0xa + " in your wallet.");
      } else {
        const _0x5be3c2 = Math.floor(Math.random() * 0x12c);
        let _0x219c9e = "\n🎰 Slot Machine Result\n     " + _0x4a82a2 + "\n\n      " + _0x2d1a79 + "\n\n      " + _0x8aa502 + "\n\nNot Jacpot📉 but lost ";
        let _0x512098 = _0x219c9e.replace(/1/g, '🔴').replace(/2/g, '🔵').replace(/3/g, '🟣').replace(/4/g, '🟢').replace(/5/g, '🟡').replace(/6/g, '⚪️').replace(/7/g, '⚫️').replace(/:/g, "    ");
        return await _0x22bbb8.reply(_0x512098 + (" " + _0x5be3c2 + '.'));
      }
    } catch (_0x43ed74) {
      _0x22bbb8.error(_0x43ed74 + "\n\ncommand: slot", _0x43ed74);
    }
  });
}