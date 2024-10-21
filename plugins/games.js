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

const axios = require("axios");
const {
  cmd
} = require('../lib/plugins');
const eco = require("discord-mongoose-economy");
const {
  smd,
  prefix,
  send,
  Config
} = require("../lib/");
smd({
  'pattern': 'guessage',
  'alias': ["age"],
  'desc': "Guesses the age of a person based on their name.",
  'category': "fun",
  'use': "guessage [name]",
  'examples': ["guessage John", "guessage Emily"]
}, async (_0x32342f, _0x350cdc) => {
  if (!_0x350cdc) {
    return _0x32342f.reply("Please provide a name to guess the age.");
  }
  try {
    const _0x1b97bc = await axios.get("https://api.agify.io/?name=" + _0x350cdc);
    const {
      count: _0x42405e,
      age: _0x1d3c9d
    } = _0x1b97bc.data;
    const _0x5607cb = "\n*Name:* " + _0x350cdc + "\n*Estimated Age:* " + _0x1d3c9d + "\n*Count:* " + _0x42405e + "\n      ";
    await _0x32342f.send(_0x5607cb);
  } catch (_0x3f2fdc) {
    await _0x32342f.error(_0x3f2fdc + "\n\nCommand: guessage", _0x3f2fdc, "Failed to guess age.");
  }
});
smd({
  'pattern': "guesscountry",
  'alias': ['country'],
  'desc': "Guesses the likely countries associated with a name.",
  'category': "fun",
  'use': "guesscountry [name]",
  'examples': ["guesscountry Michael", "guesscountry Fatima"]
}, async (_0x453da1, _0x3a13ed) => {
  if (!_0x3a13ed) {
    return _0x453da1.reply("Please provide a name to guess the country.");
  }
  try {
    const _0x2f47b7 = await axios.get("https://api.nationalize.io/?name=" + _0x3a13ed);
    const {
      count: _0x1b04d7,
      country: _0x468587
    } = _0x2f47b7.data;
    let _0x584a51 = "\n*Name:* " + _0x3a13ed + "\n*Count:* " + _0x1b04d7 + "\n*Likely Countries:*\n";
    _0x468587.forEach((_0x537550, _0x617801) => {
      _0x584a51 += "\n" + (_0x617801 + 0x1) + ". " + _0x537550.country_id + " (" + (_0x537550.probability * 0x64).toFixed(0x2) + '%)';
    });
    await _0x453da1.send(_0x584a51);
  } catch (_0x5a18a9) {
    await _0x453da1.error(_0x5a18a9 + "\n\nCommand: guesscountry", _0x5a18a9, "Failed to guess country.");
  }
});
smd({
  'pattern': "guessgender",
  'alias': ['gender'],
  'desc': "Guesses the gender of a person based on their name.",
  'category': "fun",
  'use': "guessgender [name]",
  'examples': ["guessgender David", "guessgender Sarah"]
}, async (_0x343926, _0x42d160) => {
  if (!_0x42d160) {
    return _0x343926.reply("Please provide a name to guess the gender.");
  }
  try {
    const _0x2ebaad = await axios.get("https://api.genderize.io/?name=" + _0x42d160);
    const {
      count: _0x912508,
      gender: _0x3c06eb,
      probability: _0x51e8f1
    } = _0x2ebaad.data;
    const _0x3d4da8 = "\n*Name:* " + _0x42d160 + "\n*Estimated Gender:* " + _0x3c06eb + "\n*Probability:* " + (_0x51e8f1 * 0x64).toFixed(0x2) + "%\n*Count:* " + _0x912508 + "\n      ";
    await _0x343926.send(_0x3d4da8);
  } catch (_0x1c0e6a) {
    await _0x343926.error(_0x1c0e6a + "\n\nCommand: guessgender", _0x1c0e6a, "Failed to guess gender.");
  }
});
const astro_patch_numGuess = {};
class GuessingGame {
  constructor() {
    this.attempts = 0x0;
    this.player = '';
    this.id = '';
    this.status = false;
    this.mode = "low";
    this.randomNumber = 0x0;
    this.guessedNumber = 0x0;
  }
}
smd({
  'cmdname': "guess",
  'info': "Play Guessing Number game",
  'filename': __filename,
  'type': "game",
  'use': "< easy | medium | hard >"
}, async (_0x3cdb51, _0x267208) => {
  try {
    const _0x45e69e = _0x3cdb51.chat;
    let _0xeba4c3 = astro_patch_numGuess[_0x45e69e];
    let _0x141d59 = _0x267208.toLowerCase();
    let _0x1dcd6d = _0xeba4c3 && _0xeba4c3?.['player'] === _0x3cdb51.sender ? true : _0x3cdb51.isCreator;
    if (_0x141d59 === "end" && _0xeba4c3) {
      return _0x1dcd6d ? (delete astro_patch_numGuess[_0x45e69e], await _0x3cdb51.reply("*_Number Guessing Game ended. Goodbye!_*")) : await _0x3cdb51.reply("*_You're not player of running game!!_*");
    } else {
      if (_0x141d59 === "end" && !_0xeba4c3) {
        return await _0x3cdb51.reply("*_Hey " + (_0x3cdb51.senderName || "master") + ", There's no game running yet!!_*");
      }
    }
    if (_0xeba4c3 && _0xeba4c3.status) {
      return await _0x3cdb51.reply("*_A game is already in progress in this chat._*\n To End the Game:  .Guess end");
    }
    let _0x1fef95 = '';
    let _0x20792f = 0x0;
    if (_0x141d59.includes("easy")) {
      _0x20792f = Math.floor(Math.random() * 0x64);
      _0x1fef95 = 'Easy';
    } else {
      if (_0x141d59.includes("medium")) {
        _0x20792f = Math.floor(Math.random() * 0x3e8);
        _0x1fef95 = "Medium";
      } else {
        if (_0x141d59.includes("hard")) {
          _0x20792f = Math.floor(Math.random() * 0x2710);
          _0x1fef95 = "Hard";
        } else {
          return await _0x3cdb51.send("█▄ █ █   █  █▄ ▄█  ██▄ ██▀ █▀▄\n█ ▀█ █▄█  █  ▀  █  █▄█ █▄▄ █▀▄\n   𝗡𝘂𝗺𝗯𝗲𝗿 𝗚𝘂𝗲𝘀𝘀𝗶𝗻𝗴 𝗚𝗮𝗺𝗲 𝗠𝗲𝗻𝘂\n\n*Uhh Dear, Choose " + (_0x141d59 ? "a Valid Option" : "an Option") + " First, Like _" + prefix + "Guess Normal_*\n*𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗠𝗼𝗱𝗲𝘀:*\n  ▢ Easy   ( _0 to 100_)\n  ▢ Medium ( _0 to 1000_)\n  ▢ Hard   ( _0 to 10000_)\n  ▢ End  ( _End the Game_)\n");
        }
      }
    }
    if (!_0xeba4c3) {
      astro_patch_numGuess[_0x45e69e] = new GuessingGame();
    }
    _0xeba4c3 = astro_patch_numGuess[_0x45e69e];
    _0xeba4c3.status = true;
    _0xeba4c3.randomNumber = _0x20792f;
    _0xeba4c3.mode = _0x1fef95;
    _0xeba4c3.player = _0x3cdb51.sender;
    _0xeba4c3.id = _0x3cdb51.chat;
    await _0x3cdb51.reply("█▄ █ █   █  █▄ ▄█  ██▄ ██▀ █▀▄\n█ ▀█ █▄█  █  ▀  █  █▄█ █▄▄ █▀▄\n  𝗡𝘂𝗺𝗯𝗲𝗿 𝗚𝘂𝗲𝘀𝘀𝗶𝗻𝗴 𝗚𝗮𝗺𝗲 𝗦𝘁𝗮𝗿𝘁𝗲𝗱\n\n*𝗦𝗲𝗹𝗲𝗰𝘁𝗲𝗱 𝗠𝗼𝗱𝗲 : _" + _0xeba4c3.mode + "_* \n\t▢ *_Well, I'm thinking of a number between " + (_0xeba4c3.mode === "Easy" ? "1 and 100" : _0xeba4c3.mode === 'Medium' ? "1 and 1000" : "1 and 10000") + "._*\n\n*𝗬𝗼𝘂𝗿 𝗧𝗮𝘀𝗸 :*\n   _▢ You Task is to Guess That Number._\n   _▢ Checks How Sharp is Your Memory._\n   _▢ Lets see How Many Attempts You Take To Guess Number._");
  } catch (_0x22e36b) {
    await _0x3cdb51.error(_0x22e36b + "\n\ncommand:guess", _0x22e36b);
  }
});
const astro_patch_cfg = {};
const quotes = ["Connect Four: Where strategy meets fun!", "Let the battle of four-in-a-row begin!", "It's time to connect and conquer!", "Can you outsmart your opponent in Connect Four?", "Challenge your mind with Connect Four's strategic gameplay.", "Connect Four: A game of wits and tactics.", "Four in a row, that's the way to go!", "Connect Four: Unleash your strategic genius.", "Get ready to drop and connect your way to victory!", "Connect Four: Where every move counts.", "Prove your skills in the ultimate Connect Four showdown!", "Connect Four: The classic game of strategy and anticipation.", "Connect Four: Easy to learn, hard to master.", "Who will be the first to connect their pieces and claim victory?", "Prepare for a thrilling battle of strategy in Connect Four.", "Get ready to connect and win!", "Who will be the Connect Four champion?", "Strategize and conquer the board!", "Let the Connect Four battle begin!", "Connect Four: The ultimate test of skill!"];
class ConnectFourGame {
  constructor() {
    this.player1 = '';
    this.player2 = '';
    this.rowsMatrix = 0x6;
    this.columnsMatrix = 0x7;
    this.currentPlayer = '';
    this.gameStatus = false;
    this.attempts = {};
    this.matrix = [['⚪', '⚪', '⚪', '⚪', '⚪', '⚪', '⚪'], ['⚪', '⚪', '⚪', '⚪', '⚪', '⚪', '⚪'], ['⚪', '⚪', '⚪', '⚪', '⚪', '⚪', '⚪'], ['⚪', '⚪', '⚪', '⚪', '⚪', '⚪', '⚪'], ['⚪', '⚪', '⚪', '⚪', '⚪', '⚪', '⚪'], ['⚪', '⚪', '⚪', '⚪', '⚪', '⚪', '⚪']];
  }
  async ["updateLastIndex"](_0x183d58) {
    let _0x487045 = this.currentPlayer === this.player1 ? '🔵' : '🔴';
    let _0x3f6121 = this.matrix.length - 0x1;
    while (_0x3f6121 > 0x0 && this.matrix[_0x3f6121][_0x183d58] !== '⚪') {
      _0x3f6121--;
    }
    return this.matrix[_0x3f6121][_0x183d58] == '⚪' ? (this.matrix[_0x3f6121][_0x183d58] = _0x487045, true) : false;
  }
  async ["printMatrix"]() {
    let _0x1d2781 = '';
    for (let _0x4a0090 = 0x0; _0x4a0090 < this.matrix.length; _0x4a0090++) {
      _0x1d2781 += "\n| ";
      for (let _0x58c96f = 0x0; _0x58c96f < this.matrix[_0x4a0090].length; _0x58c96f++) {
        _0x1d2781 += this.matrix[_0x4a0090][_0x58c96f] + " | ";
      }
    }
    return _0x1d2781;
  }
  async ['checkWin']() {
    let _0x5f2910 = this.currentPlayer === this.player1 ? '🔵' : '🔴';
    for (let _0xc5effe = 0x0; _0xc5effe < this.matrix.length; _0xc5effe++) {
      for (let _0x116caa = 0x0; _0x116caa <= this.matrix[_0xc5effe].length - 0x4; _0x116caa++) {
        if (this.matrix[_0xc5effe][_0x116caa] === _0x5f2910 && this.matrix[_0xc5effe][_0x116caa + 0x1] === _0x5f2910 && this.matrix[_0xc5effe][_0x116caa + 0x2] === _0x5f2910 && this.matrix[_0xc5effe][_0x116caa + 0x3] === _0x5f2910) {
          return this.currentPlayer;
        }
      }
    }
    for (let _0x5009d7 = 0x0; _0x5009d7 <= this.matrix.length - 0x4; _0x5009d7++) {
      for (let _0x53d742 = 0x0; _0x53d742 < this.matrix[_0x5009d7].length; _0x53d742++) {
        if (this.matrix[_0x5009d7][_0x53d742] === _0x5f2910 && this.matrix[_0x5009d7 + 0x1][_0x53d742] === _0x5f2910 && this.matrix[_0x5009d7 + 0x2][_0x53d742] === _0x5f2910 && this.matrix[_0x5009d7 + 0x3][_0x53d742] === _0x5f2910) {
          return this.currentPlayer;
        }
      }
    }
    for (let _0x522b58 = 0x0; _0x522b58 <= this.matrix.length - 0x4; _0x522b58++) {
      for (let _0x40920f = 0x0; _0x40920f <= this.matrix[_0x522b58].length - 0x4; _0x40920f++) {
        if (this.matrix[_0x522b58][_0x40920f] === _0x5f2910 && this.matrix[_0x522b58 + 0x1][_0x40920f + 0x1] === _0x5f2910 && this.matrix[_0x522b58 + 0x2][_0x40920f + 0x2] === _0x5f2910 && this.matrix[_0x522b58 + 0x3][_0x40920f + 0x3] === _0x5f2910) {
          return this.currentPlayer;
        }
      }
    }
    for (let _0x297ab0 = 0x0; _0x297ab0 <= this.matrix.length - 0x4; _0x297ab0++) {
      for (let _0x2d1670 = this.matrix[_0x297ab0].length - 0x1; _0x2d1670 >= 0x3; _0x2d1670--) {
        if (this.matrix[_0x297ab0][_0x2d1670] === _0x5f2910 && this.matrix[_0x297ab0 + 0x1][_0x2d1670 - 0x1] === _0x5f2910 && this.matrix[_0x297ab0 + 0x2][_0x2d1670 - 0x2] === _0x5f2910 && this.matrix[_0x297ab0 + 0x3][_0x2d1670 - 0x3] === _0x5f2910) {
          return this.currentPlayer;
        }
      }
    }
    return null;
  }
}
smd({
  'cmdname': 'cfg',
  'info': "Start Connect Four game session.",
  'filename': __filename,
  'type': "game",
  'use': "< @user >"
}, async _0xbad24c => {
  const _0x874aad = _0xbad24c.chat;
  let _0x1f7456 = astro_patch_cfg[_0x874aad];
  if (_0x1f7456 && _0x1f7456.gameStatus) {
    return await _0xbad24c.send("*A game is already in progress in this chat.*\n*Game Between :- _@" + _0x1f7456.player1.split('@')[0x0] + "_ vs _@" + _0x1f7456.player2.split('@')[0x0] + "_*\n_If You @{message.sender.split(\"@\")[0]} wants to Play,_ \n_Then Delete Cfg Session:- {prefix}delcfg_\n", {
      'mentions': [_0x1f7456.player1, _0x1f7456.player2]
    });
  }
  if (!_0x1f7456) {
    _0x1f7456 = new ConnectFourGame();
    astro_patch_cfg[_0x874aad] = _0x1f7456;
  }
  try {
    let _0x5da264 = _0xbad24c.quoted ? _0xbad24c.quoted.sender : _0xbad24c.mentionedJid ? _0xbad24c.mentionedJid[0x0] : '-';
    _0x5da264 = _0x5da264 === _0xbad24c.sender ? '' : '' + _0x5da264;
    if (_0x5da264.includes('@')) {
      _0x1f7456.player1 = _0xbad24c.sender;
      _0x1f7456.player2 = _0x5da264;
      _0x1f7456.gameStatus = true;
    } else {
      if (!_0x1f7456.player1 || _0x1f7456.player1 === _0xbad24c.sender) {
        _0x1f7456.player1 = _0xbad24c.sender;
        return await _0xbad24c.send("▄▀▀ ▄▀▄ █▄ █ █▄ █ ▄▀▀ ▀█▀ \n▀▄▄ ▀▄▀ █ ▀█ █ ▀█ ▀▄▄    █\n   𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝗙𝗼𝘂𝗿 𝗚𝗮𝗺𝗲 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 \n\n*Connect Four Game Session Created...*\n*room Id : _cfg-" + _0x874aad.split('@')[0x0] + "_*\n\n_Player 1: @" + _0x1f7456.player1.split('@')[0x0] + " Joined_\n_Waiting For Another Player To Start Game..._\n\n*Type _.cfg to Join This Game Session.*", {
          'mentions': [_0x1f7456.player1]
        });
      } else if (_0xbad24c.sender != _0x1f7456.player1) {
        _0x1f7456.player2 = _0xbad24c.sender;
        _0x1f7456.gameStatus = true;
      }
    }
  } catch (_0x360a42) {
    await _0xbad24c.reply("errors : " + _0x360a42);
  }
  if (_0x1f7456.gameStatus) {
    _0x1f7456.currentPlayer = _0x1f7456.player1;
    _0x1f7456.attempts[_0x1f7456.player1] = 0x0;
    _0x1f7456.attempts[_0x1f7456.player2] = 0x0;
    let _0x2fbf41 = await _0x1f7456.printMatrix();
    let _0x55393a = "▄▀▀ ▄▀▄ █▄ █ █▄ █ ▄▀▀ ▀█▀\n▀▄▄ ▀▄▀ █ ▀█ █ ▀█ ▀▄▄    █\n   𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝗙𝗼𝘂𝗿 𝗚𝗮𝗺𝗲 𝗦𝘁𝗮𝗿𝘁𝗲𝗱 \n\n" + _0x2fbf41 + " \n◣━━━━━━━━━━ ━━━━━━━━━━◢\n\n*Connet Four Game Session started* \n*room Id : _cfg-" + _0x874aad.split('@')[0x0] + "_*\n\n*Current Turn: _@" + _0x1f7456.player1.split('@')[0x0] + "_*\n*Next Turn :  _@" + _0x1f7456.player2.split('@')[0x0] + "_*\n*_Hey @" + _0x1f7456.currentPlayer.split('@')[0x0] + ", Please take your turn_*\n▢ _Enter Line Number Between *'1'* to *'7'*_\n\n*Connect Four Game Task :*\n  _Player Needs To Connect Four Colors in a Sequence,_\n  _You can Connect Four Colors ▢Horizontally, ▢Vertically, ▢Diagonally._         \n\n*Lets Play :- _" + quotes[Math.floor(Math.random() * quotes.length)] + "_*\n";
    await _0xbad24c.send(_0x55393a, {
      'mentions': [_0x1f7456.player1, _0x1f7456.player2, _0x1f7456.currentPlayer]
    });
  }
});
smd({
  'pattern': "delcfg",
  'desc': "deletes Connect Four running session.",
  'filename': __filename,
  'category': 'game'
}, async ({
  chat: _0x56d4a3,
  isCreator: _0xa8ad6e,
  send: _0xcdae11,
  reply: _0x2e9141,
  sender: _0x22828f,
  senderName: _0x29985f
}) => {
  let _0x4cea4a = astro_patch_cfg[_0x56d4a3];
  if (_0x4cea4a) {
    if (!_0xa8ad6e && _0x22828f !== _0x4cea4a.player2 && _0x22828f !== _0x4cea4a.player1) {
      await _0x2e9141("*_Hey " + _0x29985f + ", You're not player of running game_*\n");
    } else {
      delete astro_patch_cfg[_0x56d4a3];
      await _0x2e9141("▄▀▀ ▄▀▄ █▄ █ █▄ █ ▄▀▀ ▀█▀\n▀▄▄ ▀▄▀ █ ▀█ █ ▀█ ▀▄▄    █\n   𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝗙𝗼𝘂𝗿 𝗚𝗮𝗺𝗲 𝗗𝗲𝗹𝗲𝘁𝗲𝗱\n\n*Room Id : _cfg-" + _0x56d4a3.split('@')[0x0] + "_ Cleared Successfully*\n*_Connect Four Game Session Deleted From This Chat..._*\n");
    }
  } else {
    await _0x2e9141("▄▀▀ ▄▀▄ █▄ █ █▄ █ ▄▀▀ ▀█▀ \n▀▄▄ ▀▄▀ █ ▀█ █ ▀█ ▀▄▄    █\n  𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝗙𝗼𝘂𝗿 𝗚𝗮𝗺𝗲 404𝗘𝗿𝗿𝗼𝗿   \n\n*Uhh Dear, _Theres No Game Started yet in This Chat_*\n");
  }
});
smd({
  'on': 'text'
}, async (_0x541180, _0x5a0429) => {
  const _0x301508 = _0x541180.chat;
  const _0x5c6b36 = astro_patch_cfg[_0x301508];
  if (!_0x5c6b36) {
    return;
  }
  let _0x2961f3 = parseInt(_0x541180.text ? _0x541180.text.split(" ")[0x0] : "NaN");
  if (_0x5c6b36.gameStatus && _0x5c6b36.currentPlayer === _0x541180.sender && !isNaN(_0x2961f3)) {
    try {
      let _0x5e4e37 = _0x2961f3 - 0x1;
      if (_0x5e4e37 < 0x0 || _0x5e4e37 >= _0x5c6b36.columnsMatrix) {
        return;
      }
      let _0xff8d7b = await _0x5c6b36.updateLastIndex(_0x5e4e37);
      if (!_0xff8d7b) {
        return await _0x541180.bot.sendMessage(_0x541180.chat, {
          'text': "*_Invalid move Dear @" + _0x5c6b36.currentPlayer.split('@')[0x0] + ", Line you enter is completely Filled. Please Give Other Line Numbers._*",
          'mentions': [_0x5c6b36.currentPlayer]
        }, {
          'quoted': _0x541180
        });
      }
      let _0x22cf86 = (await _0x5c6b36.checkWin()) || false;
      _0x5c6b36.attempts[_0x5c6b36.currentPlayer]++;
      let _0xdc163c = await _0x5c6b36.printMatrix();
      _0x5c6b36.currentPlayer = _0x5c6b36.currentPlayer === _0x5c6b36.player1 ? _0x5c6b36.player2 : _0x5c6b36.player1;
      if (!_0x22cf86) {
        let _0x2c980e = "▄▀▀ ▄▀▄ █▄ █ █▄ █ ▄▀▀ ▀█▀ \n▀▄▄ ▀▄▀ █ ▀█ █ ▀█ ▀▄▄    █\n   𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝗙𝗼𝘂𝗿 cfg_𝗲 𝗕𝗼𝗮𝗿𝗱\n\n" + _0xdc163c + "\n◣━━━━━━━━━━ ━━━━━━━━━━◢\n\n*Current Turn " + (_0x5c6b36.currentPlayer === _0x5c6b36.player1 ? '🔵' : '🔴') + " : _@" + _0x5c6b36.currentPlayer.split('@')[0x0] + "_*\n*Nextt Turn  " + (_0x5c6b36.currentPlayer === _0x5c6b36.player1 ? '🔴' : '🔵') + " : _@" + (_0x5c6b36.currentPlayer === _0x5c6b36.player1 ? _0x5c6b36.player2 : _0x5c6b36.player1).split('@')[0x0] + "_*\n\n ▢ *_Please take your turn to Break Pattern_*\n ▢ _Enter Line Number Between *'1'* to *'7'*_\n\n*Connent Four Game Quote :*\n  ▢ _" + quotes[Math.floor(Math.random() * quotes.length)] + "_\n";
        return await _0x541180.send(_0x2c980e, {
          'mentions': [_0x5c6b36.player1, _0x5c6b36.player2]
        });
      } else {
        delete astro_patch_cfg[_0x301508];
        return await _0x541180.send("▄▀▀ ▄▀▄ █▄ █ █▄ █ ▄▀▀ ▀█▀ \n▀▄▄ ▀▄▀ █ ▀█ █ ▀█ ▀▄▄    █\n   𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝗙𝗼𝘂𝗿 𝗚𝗮𝗺𝗲 𝗙𝗶𝗻𝗶𝘀𝗵𝗲𝗱\n\n*𝗪𝗶𝗻𝗻𝗲𝗿 𝗢𝗳 𝗧𝗵𝗲 𝗚𝗮𝗺𝗲 𝗜𝘀: _@" + _0x22cf86.split('@')[0x0] + "_*\n*𝗟𝗼𝗼𝘀𝗲𝗿 𝗢𝗳 𝗧𝗵𝗲 𝗚𝗮𝗺𝗲 𝗜𝘀: _@" + _0x5c6b36.currentPlayer.split('@')[0x0] + "_*\n\n" + _0xdc163c + "\n◣━━━━━━━━━━ ━━━━━━━━━━◢     \n\n*_Congratulations! @" + _0x22cf86.split('@')[0x0] + " you win the Game!_* \n_You Connect Four Colors in_ '" + _0x5c6b36.attempts[_0x22cf86] + "' _Turns._\n\n_Connect Four Game Session Finished Now_\n_Type_ .Cfg _to Start Again Connect Four Session._\n", {
          'mentions': [_0x5c6b36.player1, _0x5c6b36.player2]
        });
      }
    } catch (_0xaed680) {
      return await console.log("Connect Four Game Error : ", _0xaed680);
    }
  }
});
const countries = {
  'Afghanistan': 'Kabul',
  'Albania': "Tirana",
  'Algeria': "Algiers",
  'Angola': "Luanda",
  'Argentina': "Buenos Aires",
  'Armenia': "Yerevan",
  'Australia': "Canberra",
  'Austria': "Vienna",
  'Azerbaijan': "Baku",
  'Bahamas': "Nassau",
  'Bahrain': "Manama",
  'Bangladesh': "Dhaka",
  'Barbados': "Bridgetown",
  'Belarus': 'Minsk',
  'Belgium': "Brussels",
  'Belize': "Belmopan",
  'Benin': "Porto-Novo",
  'Bhutan': 'Thimphu',
  'Bolivia': "Sucre",
  'Botswana': "Gaborone",
  'Brazil': 'Brasília',
  'Bulgaria': "Sofia",
  "Burkina Faso": "Ouagadougou",
  'Burundi': "Gitega",
  "Cabo Verde": "Praia",
  'Cambodia': "Phnom Penh",
  'Cameroon': "Yaoundé",
  'Canada': "Ottawa",
  "Central African Republic": 'Bangui',
  'Chad': "N'Djamena",
  'Chile': "Santiago",
  'China': "Beijing",
  'Colombia': 'Bogotá',
  'Comoros': "Moroni",
  "Costa Rica": "San jose",
  "Cote d'Ivoire": "Yamoussoukro",
  'Croatia': 'Zagreb',
  'Cuba': "Havana",
  'Cyprus': "Nicosia",
  "Czech Republic": "Prague",
  'Denmark': "Copenhagen",
  'Djibouti': "Djibouti",
  'Dominica': "Roseau",
  "Dominican Republic": "Santo Domingo",
  'Ecuador': "Quito",
  'Egypt': 'Cairo',
  "El Salvador": "San Salvador",
  "Equatorial Guinea": "Malabo",
  'Eritrea': "Asmara",
  'Estonia': "Tallinn",
  'Eswatini': "Mbabane",
  'Ethiopia': "Addis Ababa",
  'Fiji': "Suva",
  'Finland': 'Helsinki',
  'France': "Paris",
  'Gabon': 'Libreville',
  'Gambia': "Banjul",
  'Georgia': "Tbilisi",
  'Germany': "Berlin",
  'Ghana': "Accra",
  'Greece': "Athens",
  'Grenada': "St. George's",
  'Guatemala': "Guatemala City",
  'Guinea': "Conakry",
  'Guinea-Bissau': 'Bissau',
  'Guyana': 'Georgetown',
  'Haiti': "Port prince",
  'Honduras': 'Tegucigalpa',
  'Hungary': "Budapest",
  'Iceland': "Reykjavik",
  'India': "New Delhi",
  'Indonesia': "Jakarta",
  'Iran': "Tehran",
  'Iraq': "Baghdad",
  'Ireland': "Dublin",
  'Israel': 'Jerusalem',
  'Italy': 'Rome',
  'Jamaica': "Kingston",
  'Japan': "Tokyo",
  'Jordan': "Amman",
  'Kazakhstan': "Nur Sultan",
  'Kenya': 'Nairobi',
  'Kiribati': 'Tarawa',
  "Korea, North": 'Pyongyang',
  "Korea, South": 'Seoul',
  'Kosovo': 'Pristina',
  'Kuwait': "Kuwait",
  'Kyrgyzstan': "Bishkek",
  'Laos': 'Vientiane',
  'Latvia': "Riga",
  'Lebanon': "Beirut",
  'Lesotho': 'Maseru',
  'Liberia': "Monrovia",
  'Libya': 'Tripoli',
  'Liechtenstein': "Vaduz",
  'Lithuania': 'Vilnius',
  'Luxembourg': "Luxembourg City",
  'Madagascar': "Antananarivo",
  'Malawi': 'Lilongwe',
  'Malaysia': "Kuala Lumpur",
  'Maldives': 'Male',
  'Mali': 'Bamako',
  'Malta': "Valletta",
  "Marshall Islands": "Majuro",
  'Mauritania': 'Nouakchott',
  'Mauritius': "Port Louis",
  'Mexico': "Mexico City",
  'Micronesia': 'Palikir',
  'Moldova': 'Chisinau',
  'Monaco': 'Monaco',
  'Mongolia': "Ulaanbaatar",
  'Montenegro': 'Podgorica',
  'Morocco': "Rabat",
  'Mozambique': "Maputo",
  'Myanmar': "Naypyidaw",
  'Namibia': "Windhoek",
  'Nauru': "Yaren",
  'Nepal': 'Kathmandu',
  'Netherlands': "Amsterdam",
  "New Zealand": 'Wellington',
  'Nicaragua': "Managua",
  'Niger': "Niamey",
  'Nigeria': 'Abuja',
  "North Macedonia": "Skopje",
  'Norway': 'Oslo',
  'Oman': "Muscat",
  'Pakistan': 'Islamabad',
  'Palau': "Ngerulmud",
  'Palestine': "Ramallah",
  'Panama': "Panama City",
  'Paraguay': 'Asunción',
  'Peru': 'Lima',
  'Philippines': 'Manila',
  'Poland': "Warsaw",
  'Portugal': "Lisbon",
  'Qatar': "Doha",
  'Romania': "Bucharest",
  'Russia': "Moscow",
  'Rwanda': "Kigali",
  "Saint Kitts": "Basseterre",
  "Saint Lucia": "Castries",
  'Samoa': "Apia",
  "San Marino": "San Marino",
  "Saudi Arabia": 'Riyadh',
  'Senegal': "Dakar",
  'Serbia': "Belgrade",
  'Seychelles': "Victoria",
  "Sierra Leone": "Freetown",
  'Singapore': "Singapore",
  'Slovakia': 'Bratislava',
  'Slovenia': "Ljubljana",
  "Solomon Islands": "Honiara",
  'Somalia': "Mogadishu",
  "South Africa": "Pretoria",
  "South Sudan": 'Juba',
  'Spain': "Madrid",
  "Sri Lanka": "Colombo",
  'Sudan': 'Khartoum',
  'Suriname': "Paramaribo",
  'Sweden': "Stockholm",
  'Switzerland': 'Bern',
  'Syria': "Damascus",
  'Taiwan': "Taipei",
  'Tajikistan': "Dushanbe",
  'Tanzania': "Dodoma",
  'Thailand': "Bangkok",
  'Timor-Leste': "Dili",
  'Togo': "Lome",
  'Tonga': "Nuku'alofa",
  'Tunisia': "Tunis",
  'Turkey': 'Ankara',
  'Turkmenistan': "Ashgabat",
  'Tuvalu': "Funafuti",
  'Uganda': "Kampala",
  'Ukraine': "Kyiv",
  "United Arab Emirates": "Abu Dhabi",
  "United Kingdom": "London",
  "United States": 'Washington',
  'Uruguay': "Montevideo",
  'Uzbekistan': "Tashkent",
  'Vanuatu': "Port Vila",
  'Vatican': "Vatican City",
  'Venezuela': 'Caracas',
  'Vietnam': "Hanoi",
  'Yemen': "Sana",
  'Zambia': "Lusaka",
  'Zimbabwe': "Harare"
};
let astro_patch_Capital = {
  'id': '',
  'player': '',
  'country': '',
  'capital': '',
  'attempts': 0x0,
  'waitTime': 0x14,
  'preAns': 'previousAnswer',
  'timer': ''
};
async function timerFuntions(_0x546211, _0x2efb27) {
  await _0x546211.bot.sendMessage(_0x546211.chat, {
    'text': "*Game Over, run out of time*\n\n*Player:* _@$player_\n*Reason:* _TimeOut!, You're not responed_\n\n*Answer:*\n The Capital of *$country* is *$capital*".replace('$player', _0x2efb27.player.split('@')[0x0]).replace("$country", _0x2efb27.country).replace('$capital', _0x2efb27.capital),
    'mentions': [_0x2efb27.player]
  });
  delete astro_patch_Capital[_0x546211.sender];
}
smd({
  'pattern': 'co',
  'alias': ["capital"],
  'desc': "Find capital of the city",
  'category': 'game',
  'filename': __filename
}, async _0x17651f => {
  const _0x376119 = Object.keys(countries);
  let _0x29ce1c = _0x376119[Math.floor(Math.random() * _0x376119.length)];
  let _0x35c1fd = countries[_0x29ce1c];
  console.log("country : ", _0x29ce1c);
  console.log("capital : ", _0x35c1fd);
  if (!astro_patch_Capital[_0x17651f.sender]) {
    astro_patch_Capital[_0x17651f.sender] = {
      'id': _0x17651f.chat,
      'player': _0x17651f.sender,
      'country': _0x29ce1c,
      'capital': _0x35c1fd,
      'attempts': 0x0,
      'waitTime': 0x1e,
      'preAns': _0x17651f.text,
      'timer': ''
    };
  }
  let _0x16538d = astro_patch_Capital[_0x17651f.sender];
  await _0x17651f.bot.sendMessage(_0x17651f.chat, {
    'text': "*Capital Finding Game Started*\n*Player:* _@$player_\n*Task :* _Tell the Capital of *$country*_\n\n_Your Time Starts Now, You Have $waitTime seconds to Answer_".replace("$player", _0x16538d.player.split('@')[0x0]).replace("$country", _0x16538d.country).replace('$waitTime', _0x16538d.waitTime),
    'mentions': [_0x16538d.player]
  });
  _0x16538d.timer = setTimeout(() => {
    timerFuntions(_0x17651f, _0x16538d);
  }, _0x16538d.waitTime * 0x3e8);
});
let hcg_Logo = "█▄█ ▀ █▀▄ █▀▄ ██▀ █▄ █\n█   █ █ █▄▀ █▄▀ █▄▄ █ ▀█\n  ".trim();
const astro_patch_hcg = {};
class HiddenCardGame {
  constructor() {
    this.column = 0x4;
    this.row = 0x4;
    this.player1 = '';
    this.player2 = '';
    this.currentPlayer = '';
    this.board = [];
    this.hiddenCardIndex = 0x7;
    this.gameStatus = false;
    this.attempts = {};
  }
  ["startGame"](_0xcd31bc, _0x305115) {
    this.player1 = _0xcd31bc;
    this.player2 = _0x305115;
    this.attempts[this.player1] = 0x0;
    this.attempts[this.player2] = 0x0;
    this.currentPlayer = _0xcd31bc;
    this.board = this.createBoard();
    this.gameStatus = true;
  }
  ['createBoard']() {
    const _0x47159f = [];
    for (let _0x134263 = 0x0; _0x134263 < this.row; _0x134263++) {
      const _0x400f9b = [];
      for (let _0x247cd3 = 0x0; _0x247cd3 < this.column; _0x247cd3++) {
        _0x400f9b.push('🈲');
      }
      _0x47159f.push(_0x400f9b);
    }
    return _0x47159f;
  }
  ["makeMove"](_0x42926e, _0x50fbfa) {
    if (!this.gameStatus) {
      return '';
    }
    if (_0x42926e !== this.currentPlayer) {
      return "*_Hey Master, It's not your turn._*";
    }
    this.attempts[this.currentPlayer]++;
    const _0x44065a = _0x50fbfa - 0x1;
    if (this.isValidMove(_0x44065a)) {
      if (_0x44065a === this.hiddenCardIndex) {
        this.board[Math.floor(_0x44065a / this.row)][_0x44065a % this.column] = '🃏';
        let _0x358326 = this.displayBoard();
        this.gameStatus = false;
        return hcg_Logo + "  𝗤𝗨𝗘𝗘𝗡 𝗖𝗔𝗥𝗗 𝗙𝗢𝗨𝗡𝗗`\n\n*𝗪𝗶𝗻𝗻𝗲𝗿 𝗜𝘀: _@" + _0x42926e.split('@')[0x0] + "_*\n*𝗟𝗼𝗼𝘀𝗲𝗿 𝗜𝘀: _@" + (_0x42926e === this.player1 ? this.player2 : this.player1).split('@')[0x0] + "_*\n\n" + _0x358326 + " \n\n\n*_Congratulations!_* \n  *_@" + _0x42926e.split('@')[0x0] + " you won the Game!!*_ \n_You found the Hidden Card in " + this.attempts[this.currentPlayer] + " Attempts._\n\n_Hidden Queen Game Session Finished Now_\n_Type *.hcg* to Start Hidden Queen Session._\n\n```\t 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 ANITA ```\n";
      } else {
        this.board[Math.floor(_0x44065a / this.row)][_0x44065a % this.column] = '🟦';
        const _0x4b6e35 = this.checkGameResult();
        return _0x4b6e35 === "continue" ? (this.currentPlayer = _0x42926e === this.player1 ? this.player2 : this.player1, hcg_Logo + "  𝗤𝗨𝗘𝗘𝗡 𝗖𝗔𝗥𝗗 𝗚𝗔𝗠𝗘` \n\n" + this.displayBoard() + "\n\n_Current Turn: @" + this.currentPlayer.split('@')[0x0] + "_\n_Next @" + (this.currentPlayer === this.player1 ? this.player2 : this.player1).split('@')[0x0] + "_\n\n\n ▢ *_Please take your turn & find card_*\n ▢ _Enter a number b/w *1* to *" + this.row * this.column + "* !!!_\n\n```\t 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 ANITA ```") : (this.gameStatus = false, "┏━━━━━━━━━━━━━━━━━━┓\n┃     𝗛𝗖𝗚---𝗜𝗡𝗩𝗔𝗟𝗜𝗗 𝗚𝗔𝗠𝗘     ┃\n┗━━━━━━━━━━━━━━━━━━┛\n\n\t*_Damnn!!! The hidden card was not found. Game over._*\n\n```\t 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 ANITA ```");
      }
    } else {
      return "┏━━━━━━━━━━━━━━━━━━┓\n┃     𝗛𝗖𝗚---𝗜𝗡𝗩𝗔𝗟𝗜𝗗 𝗠𝗢𝗩𝗘     ┃\n┗━━━━━━━━━━━━━━━━━━┛\n\n𝗡𝗢𝗧𝗘:\n  Hey _@" + this.currentPlayer.split('@')[0x0] + "_ (•̪●), \n▢ _You provide an Invalid or Already used number_\n▢ _Provide a number between *1* and *" + this.row * this.column + "* !!!_\n\n```\t Powered by Suhail MD ```";
    }
  }
  ["isValidMove"](_0x496589) {
    return _0x496589 >= 0x0 && _0x496589 < this.row * this.column && this.board[Math.floor(_0x496589 / this.row)][_0x496589 % this.column] === '🈲';
  }
  ["checkGameResult"]() {
    return this.board.some(_0x3b4b90 => _0x3b4b90.includes('🈲')) ? "continue" : "end";
  }
  ["displayBoard"]() {
    let _0x4748a9 = "\t ";
    let _0x42c9c4 = "◣━━";
    for (let _0x555d64 = 0x0; _0x555d64 < this.row; _0x555d64++) {
      for (let _0x593fd1 = 0x0; _0x593fd1 < this.column; _0x593fd1++) {
        _0x4748a9 += this.board[_0x555d64][_0x593fd1] + " ";
      }
      _0x42c9c4 += '━━';
      _0x4748a9 += "\n\t ";
    }
    _0x42c9c4 += '◢';
    return "\t " + _0x4748a9.trim() + "\n" + _0x42c9c4;
  }
}
smd({
  'pattern': 'hcg',
  'desc': "Starts a Hidden Card Game.",
  'filename': __filename,
  'category': "game"
}, async (_0xf0f863, _0x5cc61a) => {
  const _0x576701 = _0xf0f863.chat;
  let _0x19fc76 = astro_patch_hcg[_0x576701];
  if (_0x19fc76 && _0x19fc76.gameStatus) {
    return await _0xf0f863.reply("*_A game is already in progress in this chat._*");
  }
  if (!_0x19fc76) {
    _0x19fc76 = new HiddenCardGame();
    astro_patch_hcg[_0x576701] = _0x19fc76;
  }
  let _0x2624b6 = _0xf0f863.quoted ? _0xf0f863.quoted.sender : _0xf0f863.mentionedJid ? _0xf0f863.mentionedJid[0x0] : false;
  let _0x3cc30d = 0x5;
  if (_0x5cc61a) {
    _0x3cc30d = parseInt(_0x5cc61a) || 0x5;
    _0x3cc30d = _0x3cc30d > 0x2 && _0x3cc30d < 0x8 ? _0x3cc30d : 0x5;
  }
  _0x19fc76.row = _0x3cc30d;
  _0x19fc76.column = _0x3cc30d;
  if (!_0x19fc76.player1 || _0xf0f863.sender === _0x19fc76.player1) {
    if (_0x2624b6 && _0x2624b6 !== _0xf0f863.sender) {
      _0x19fc76.player1 = _0xf0f863.sender;
      _0x19fc76.player2 = _0x2624b6;
      _0x19fc76.startGame(_0x19fc76.player1, _0x19fc76.player2);
    } else {
      _0x19fc76.player1 = _0xf0f863.sender;
      return await _0xf0f863.send("┏━━━━━━━━━━━━━━━━━━┓\n┃     𝗛𝗜𝗗𝗗𝗘𝗡 𝗖𝗔𝗥𝗗 𝗚𝗔𝗠𝗘     ┃\n┗━━━━━━━━━━━━━━━━━━┛\n\n_*Hidden Card Game Created...*_\n_Player 1: @" + _0x19fc76.player1.split('@')[0x0] + " Joined_\n_Waiting For Another Player To Start Game..._\n\n*Type _" + prefix + "Hcg_ to Join This Game.*", {
        'mentions': [_0x19fc76.player1]
      });
    }
  } else if (_0xf0f863.sender !== _0x19fc76.player1) {
    _0x19fc76.player2 = _0xf0f863.sender;
    _0x19fc76.startGame(_0x19fc76.player1, _0x19fc76.player2);
  }
  if (_0x19fc76.gameStatus) {
    _0x19fc76.hiddenCardIndex = Math.floor(Math.random() * (_0x19fc76.row * _0x19fc76.column));
    return await _0xf0f863.send("┏━━━━━━━━━━━━━━━━━━┓\n┃     𝗛𝗜𝗗𝗗𝗘𝗡 𝗖𝗔𝗥𝗗 𝗚𝗔𝗠𝗘     ┃\n┗━━━━━━━━━━━━━━━━━━┛\n\n*Hidden Card Game started*\n_Current Turn: @" + _0x19fc76.currentPlayer.split('@')[0x0] + "_\n_Next Turn : @" + (_0x19fc76.currentPlayer === _0x19fc76.player1 ? _0x19fc76.player2 : _0x19fc76.player1).split('@')[0x0] + "_\n\n_Board Size : *" + _0x19fc76.row + 'x' + _0x19fc76.column + "*_\n_Theres a Hidden Queen Card *\"🃏\"* in Board_\n_Enter a number to find the Queen Card_\n\n" + _0x19fc76.displayBoard() + " ", {
      'mentions': [_0x19fc76.player1, _0x19fc76.player2, _0x19fc76.currentPlayer]
    });
  }
});
smd({
  'cmdname': "delhcg",
  'info': "deletes hidden card running session.",
  'filename': __filename,
  'type': "game"
}, async ({
  chat: _0x557bd3,
  isCreator: _0x2929ed,
  send: _0x454650,
  reply: _0x423c08,
  sender: _0x279a96
}) => {
  let _0x3bc03a = astro_patch_hcg[_0x557bd3];
  if (_0x3bc03a) {
    if (!_0x2929ed && _0x279a96 !== _0x3bc03a.player2 && _0x279a96 !== _0x3bc03a.player1) {
      await _0x454650("┏━━━━━━━━━━━━━━━━━━┓\n┃     𝗛𝗜𝗗𝗗𝗘𝗡 𝗖𝗔𝗥𝗗 𝗚𝗔𝗠𝗘     ┃\n┗━━━━━━━━━━━━━━━━━━┛\n\n*Uhh Please, _You are not a Player of running game!!!_\n");
    } else {
      delete astro_patch_hcg[_0x557bd3];
      await _0x423c08("\n" + hcg_Logo + "𝗖𝗔𝗥𝗗 𝗚𝗔𝗠𝗘 𝗗𝗘𝗟𝗘𝗧𝗘𝗗\n\n*Room Id : _hcg-" + _0x557bd3.split('@')[0x0] + "_ Cleared Successfully*\n*_Hidden Card Game Session Deleted From This Chat..._*\n");
    }
  } else {
    _0x423c08("┏━━━━━━━━━━━━━━━━━━┓\n┃   𝗤𝗨𝗘𝗘𝗡 𝗖𝗔𝗥𝗗 404𝗘𝗿𝗿𝗼𝗿    ┃\n┗━━━━━━━━━━━━━━━━━━┛ \n\n*Uhh Dear, _Theres No Game Started yet in This Chat_*\n");
  }
});
cmd({
  'on': "text"
}, async _0xdf774a => {
  if (!_0xdf774a || _0xdf774a.isBaileys) {
    return;
  }
  const _0x15e9c1 = _0xdf774a.chat;
  const _0x4954ea = parseInt(_0xdf774a.text ? _0xdf774a.text : "null");
  try {
    const _0x225ba8 = astro_patch_hcg[_0x15e9c1];
    if (_0x225ba8 && _0x225ba8.gameStatus && _0x225ba8.currentPlayer === _0xdf774a.sender && !isNaN(_0x4954ea) && _0xdf774a.text) {
      const _0x18d1ef = _0x225ba8.makeMove(_0xdf774a.sender, _0x4954ea);
      if (!_0x225ba8.gameStatus) {
        delete astro_patch_hcg[_0xdf774a.chat];
      }
      if (_0x18d1ef) {
        await send(_0xdf774a, _0x18d1ef, {
          'mentions': [_0x225ba8.player1, _0x225ba8.player2]
        });
      } else {
        '';
      }
    }
  } catch (_0x30fb8a) {
    console.log("Hidden card game error : ", _0x30fb8a);
  }
  try {
    const _0x48a152 = astro_patch_numGuess[_0x15e9c1];
    if (_0x48a152) {
      if (_0x48a152.id === _0xdf774a.chat && _0x48a152.player === _0xdf774a.sender && !isNaN(_0x4954ea)) {
        _0x48a152.guessedNumber = _0x4954ea;
        _0x48a152.attempts++;
        if (_0x48a152.guessedNumber < _0x48a152.randomNumber) {
          await _0xdf774a.send("█▄ █ █   █  █▄ ▄█  ██▄ ██▀ █▀▄\n█ ▀█ █▄█  █  ▀  █  █▄█ █▄▄ █▀▄\n  𝗡𝘂𝗺𝗯𝗲𝗿 𝗬𝗼𝘂 𝗚𝘂𝗲𝘀𝘀𝗲𝗱 𝗶𝘀 𝗟𝗼𝘄\n\n*Player : _@" + _0x48a152.player.split('@')[0x0] + "_*  \n*Attempts :* _" + _0x48a152.attempts + " yet_\n\n*Number Info:*\n *_▢ Its Too Low Number!_*\n *_▢ Try to Guess a High Number From ' " + _0x48a152.guessedNumber + "'._* \n *_▢ Make Sure to guess Number Between " + (_0x48a152.mode === 'Easy' ? "1 and 100" : _0x48a152.mode === "Medium" ? "1 and 1000" : "1 and 10000") + "._*\n", {
            'mentions': [_0x48a152.player]
          }, '');
        } else if (_0x48a152.guessedNumber > _0x48a152.randomNumber) {
          await _0xdf774a.send("█▄ █ █   █  █▄ ▄█  ██▄ ██▀ █▀▄\n█ ▀█ █▄█  █  ▀  █  █▄█ █▄▄ █▀▄\n 𝗡𝘂𝗺𝗯𝗲𝗿 𝗬𝗼𝘂 𝗚𝘂𝗲𝘀𝘀𝗲𝗱 𝗶𝘀 𝗛𝗶𝗴𝗵\n\n*Player : _@" + _0x48a152.player.split('@')[0x0] + "_*  \n*Attempts :* _" + _0x48a152.attempts + " yet_\n\n*Number Info:*\n *_▢ Its Too High Number!_*\n *_▢ Try to Guess a Smaller Number From ' " + _0x48a152.guessedNumber + "'._* \n *_▢ Make Sure to guess Number Between " + (_0x48a152.mode === "Easy" ? "1 and 100" : _0x48a152.mode === "Medium" ? "1 and 1000" : "1 and 10000") + "._*\n", {
            'mentions': [_0x48a152.player]
          });
        } else {
          await _0xdf774a.send("█▄ █ █   █  █▄ ▄█  ██▄ ██▀ █▀▄\n█ ▀█ █▄█  █  ▀  █  █▄█ █▄▄ █▀▄\n  𝗡𝘂𝗺𝗯𝗲𝗿 𝗚𝘂𝗲𝘀𝘀𝗶𝗻𝗴 𝗚𝗮𝗺𝗲 𝗙𝗶𝗻𝗶𝘀𝗵𝗲𝗱\n\n*𝗠𝗼𝗱𝗲 You Played : _" + _0x48a152.mode.toUpperCase() + "_* \n*_Congratulations! @" + _0x48a152.player.split('@')[0x0] + " you won the Game!_* \n  _▢ You guessed the correct number ' *" + _0x48a152.randomNumber + "* '._\n  _▢ You take " + _0x48a152.attempts + " attempts to Guess that Number._\n", {
            'mentions': [_0x48a152.player]
          });
          delete astro_patch_numGuess[_0x15e9c1];
        }
      }
    }
  } catch (_0x3a91dd) {
    console.log("Error in Number Guess Game, from command.On() --> ", _0x3a91dd);
  }
  try {
    const _0x45400a = astro_patch_Capital[_0xdf774a.sender];
    if (_0x45400a && _0x45400a.id === _0x15e9c1 && _0x45400a.player === _0xdf774a.sender && _0x45400a.preAns !== _0xdf774a.text) {
      _0x45400a.attempts += 0x1;
      clearTimeout(_0x45400a.timer);
      _0x45400a.preAns = _0x45400a.text;
      if (_0xdf774a.text.toLowerCase() === _0x45400a.capital.toLowerCase()) {
        let _0x2647c4 = parseInt(0x7d0) || 0x7d0;
        await _0xdf774a.bot.sendMessage(_0x15e9c1, {
          'text': "*_Waoww, Your Answer is Correct_*\n*Player:* _@$player_\n\n_Capital of *$country* is *$capital*._\n_You give right answer in *$attempt attepmt*_\n_$amount cash added in your wallet_".replace("$player", _0x45400a.player.split('@')[0x0]).replace("$country", _0x45400a.country).replace("$capital", _0x45400a.capital).replace("$amount", '' + _0x2647c4).replace("$attempt", '' + _0x45400a.attempts),
          'mentions': [_0x45400a.player]
        });
        delete astro_patch_Capital[_0xdf774a.sender];
        try {
          if (global.isMongodb) {
            await eco.give(_0x45400a.player, 'ANITA', _0x2647c4);
          }
        } catch {}
      } else {
        if (_0x45400a.attempts <= 0x3) {
          await _0xdf774a.bot.sendMessage(_0x15e9c1, {
            'text': "*_Uhh dear, Your answer is not correct_*\n\n*Player:* _@$player_\n_You have *$attempt more attempt!*_\n\n*You have $waitTime seconds to answer!*".replace("$player", _0x45400a.player.split('@')[0x0]).replace('$attempt', '' + (0x3 - _0x45400a.attempts)).replace("$waitTime", _0x45400a.waitTime),
            'mentions': [_0x45400a.player]
          });
          _0x45400a.timer = setTimeout(() => {
            timerFuntions(_0xdf774a, _0x45400a);
          }, _0x45400a.waitTime * 0x3e8);
        } else if (_0x45400a.attempts > 0x3) {
          await _0xdf774a.bot.sendMessage(_0x15e9c1, {
            'text': "*Game Over, Attempts limit Exceed*\n\n*Player:* _@$player_\n*Reason:* _Not responed right answer in 3 attemps_\n\n*Answer:*\n The Capital of *$country* is *$capital*".replace("$player", _0x45400a.player.split('@')[0x0]).replace("$country", _0x45400a.country).replace('$capital', _0x45400a.capital),
            'mentions': [_0x45400a.player]
          });
          delete astro_patch_Capital[_0xdf774a.sender];
        }
      }
    }
  } catch (_0x4306da) {
    console.log("Error in game Capital Of Country --> ", _0x4306da);
  }
});
const astro_patch_wcg = {};
class WordChainGame {
  constructor() {
    this.player1 = '';
    this.player2 = '';
    this.currentPlayer = '';
    this.previousWord = '';
    this.wordChain = '';
    this.wordsCount = 0x0;
    this.wordLength = 0x4;
    this.longestWordBy = "Theres No Word yet";
    this.gameStatus = false;
    this.botPlayer = false;
    this.wrongAttempts = {};
    this.maxAttempts = 0x5;
    this.turnTimeLimit = 0x2d;
    this.turnStartTime = 0x2d;
    this.currentRemTime = 0x2d;
    this.turnIntervalId = null;
  }
  ["stopTurn"]() {
    clearInterval(this.turnIntervalId);
  }
  async ["AwaitForSeconds"](_0x2a47a0) {
    await new Promise(_0x40994f => setTimeout(_0x40994f, _0x2a47a0 * 0x3e8));
    this.botPlayer = false;
  }
  async ["startTurn"](_0x3d5291) {
    this.turnIntervalId = setInterval(() => {
      const _0x15f74a = Math.floor((Date.now() - this.turnStartTime) / 0x3e8);
      this.currentRemTime = this.turnTimeLimit - _0x15f74a;
      if (this.currentRemTime === 0x0 && this.gameStatus) {
        try {
          this.botPlayer = true;
          if (this.wordsCount !== 0x0 && this.player2 && this.player1) {
            _0x3d5291.send("*_Damn, Time's up!_*\n _@" + this.currentPlayer.split('@')[0x0] + " Lost Game...!_", {
              'mentions': [this.currentPlayer]
            });
            this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
            let _0x345d8a = '@' + this.currentPlayer.split('@')[0x0] + " Won The Game.\nWrong Attempt By Player : " + this.wrongAttempts[this.currentPlayer] + "\n\n\t\t*Game Information*\n\nTotal Chain Words : " + this.wordsCount + "  \n" + this.longestWordBy + "\n*_Chain Started From :-_*  " + this.wordChain + " ...!  \n";
            _0x3d5291.send(_0x345d8a, {
              'mentions': [this.currentPlayer]
            });
          } else {
            if (this.wordsCount === 0x0 && this.player2 && this.player1) {
              _0x3d5291.bot.sendMessage(_0x3d5291.from, {
                'text': "*Wcg Session Terminated,* \nPLayer1 @" + this.player1.split('@')[0x0] + " And Player2 @" + this.player2.split('@')[0x0] + " both didn't take any move yet*",
                'mentions': [this.player1, this.player2]
              });
            } else if (!this.player2 || !this.player1) {
              _0x3d5291.bot.sendMessage(_0x3d5291.chat, {
                'text': "*Word Chain Game Session Expired,*\n*Reason : _One Player Still Missing_*"
              });
            }
          }
          this.stopTurn();
          delete astro_patch_wcg[_0x3d5291.chat];
        } catch (_0x2e96bd) {
          return _0x3d5291.reply("Error while ending game : " + _0x2e96bd);
        }
      } else {
        if (this.currentRemTime === 0xa) {
          this.botPlayer = true;
          if (this.player2 && this.player1) {
            let _0x2e0633 = "*Reminder : Game Terminates After " + this.currentRemTime + "s*\n\n*_Waiting For @" + this.currentPlayer.split('@')[0x0] + "'s Responce_*    \n_Take Your Turn, Otherwise Game Terminates_\n_Make Sure Your Word Must Start With *" + this.previousWord.slice(-0x1) + "* , and Must Have Atleast *" + this.wordLength + "* letters_\n\nYou Still Have *" + this.currentRemTime + "Secs* to Answer\nGive Your Best To Make Difficult For Opponent";
            _0x3d5291.send(_0x2e0633, {
              'mentions': [this.currentPlayer]
            }, "asta");
          } else if (!this.player2 || !this.player1) {
            _0x3d5291.bot.sendMessage(_0x3d5291.jid, {
              'text': "_Still Waiting For Player to Start Word Chain Game..._\n _Type *" + prefix + "wcg* to Join The Game_  \nOtherwise : _Wcg Session Expires After " + this.currentRemTime + 's_'
            });
          }
          this.AwaitForSeconds(0x1);
        }
      }
    }, 0x3e8);
  }
}
smd({
  'pattern': "wcg",
  'desc': "starts a Word Chain game.",
  'filename': __filename,
  'category': "game"
}, async (_0x1e7548, _0x39a942) => {
  const _0x2e41ff = _0x1e7548.chat;
  let _0xde7e55 = astro_patch_wcg[_0x2e41ff];
  if (_0x39a942.startsWith("end") && _0xde7e55) {
    _0xde7e55.stopTurn();
    delete astro_patch_wcg[_0x2e41ff];
    return await _0x1e7548.reply("Game ended. Goodbye!");
  }
  if (_0xde7e55 && _0xde7e55.gameStatus) {
    return await _0x1e7548.reply("A game is already in progress in this chat.\nType ```.wcg end``` Terminate the Session");
  }
  let _0x4d2d35 = _0x1e7548.quoted ? _0x1e7548.quoted.sender : _0x1e7548.mentionedJid ? _0x1e7548.mentionedJid[0x0] : false;
  if (!_0xde7e55) {
    _0xde7e55 = new WordChainGame();
    astro_patch_wcg[_0x2e41ff] = _0xde7e55;
  }
  if (!_0xde7e55.player1 || _0x1e7548.sender === _0xde7e55.player1) {
    if (_0x4d2d35 && _0x4d2d35 !== _0x1e7548.sender) {
      _0xde7e55.player1 = _0x1e7548.sender;
      _0xde7e55.player2 = _0x4d2d35;
      _0xde7e55.gameStatus = true;
    } else {
      _0xde7e55.player1 = _0x1e7548.sender;
      _0xde7e55.turnStartTime = Date.now();
      _0xde7e55.startTurn(_0x1e7548);
      return await _0x1e7548.bot.sendMessage(_0x1e7548.from, {
        'text': "_Game Starting..._\nPLayer 1 : _@" + _0xde7e55.player1.split('@')[0x0] + " Joined_ \n\n_Needs Another Player To Start Game..._\nType *_" + prefix + "wcg_* to Join This Game.",
        'mentions': [_0xde7e55.player1]
      });
    }
  } else if (_0x1e7548.sender !== _0xde7e55.player1) {
    _0xde7e55.player2 = _0x1e7548.sender;
    _0xde7e55.gameStatus = true;
  }
  if (_0xde7e55.gameStatus) {
    _0xde7e55.stopTurn();
    _0xde7e55.botPlayer = true;
    _0xde7e55.turnStartTime = Date.now();
    _0xde7e55.startTurn(_0x1e7548);
    _0xde7e55.wrongAttempts[_0xde7e55.player1] = 0x0;
    _0xde7e55.wrongAttempts[_0xde7e55.player2] = 0x0;
    _0xde7e55.previousWord = String.fromCharCode('a'.charCodeAt(0x0) + Math.floor(Math.random() * 0x1a));
    _0xde7e55.wordChain = _0xde7e55.previousWord;
    _0xde7e55.currentPlayer = _0xde7e55.player1;
    _0xde7e55.AwaitForSeconds(0x3);
    return await _0x1e7548.bot.sendMessage(_0x1e7548.chat, {
      'text': "*_Game started Now..._*\n _Turn : @" + _0xde7e55.player1.split('@')[0x0] + "_\n _Next @" + _0xde7e55.player2.split('@')[0x0] + "_\n *Let's play! :* @" + _0xde7e55.currentPlayer.split('@')[0x0] + "'s Word Must Start With *_\"" + _0xde7e55.previousWord + "\"_* .\n_you Have " + _0xde7e55.turnTimeLimit + "Secs to Answer_\n",
      'mentions': [_0xde7e55.player1, _0xde7e55.player2, _0xde7e55.currentPlayer]
    });
  }
});
smd({
  'cmdname': "delwcg",
  'info': "deletes word chain game running session.",
  'filename': __filename,
  'type': "game"
}, async ({
  chat: _0x5eabd9,
  isCreator: _0xab8b73,
  send: _0x5b6a46,
  reply: _0x19f0c2,
  sender: _0x5ee444,
  isAdmin: _0x345b65
}) => {
  let _0x495a1d = astro_patch_wcg[_0x5eabd9];
  if (_0x495a1d) {
    if (!_0xab8b73 && _0x5ee444 !== _0x495a1d.player2 && _0x5ee444 !== _0x495a1d.player1 && !_0x345b65) {
      await _0x5b6a46("┏━━━━━━━━━━━━━━━━━━┓\n┃     WORD CHAIN GAME     ┃\n┗━━━━━━━━━━━━━━━━━━┛\n\n*Uhh Please, _You are not a Player of running game!!!_\n");
    } else {
      _0x495a1d.stopTurn();
      await _0x19f0c2(("┏━━━━━━━━━━━━━━━━━━┓\n┃     WORD CHAIN GAME     ┃\n┗━━━━━━━━━━━━━━━━━━┛\n\n*Room Id : _wcg-" + _0x5eabd9.split('@')[0x0] + "_ Cleared Successfully*\n*_Word Chain Game Session Deleted From This Chat..._*\n\n\n\n" + (_0x495a1d.wordsCount > 0x0 ? "\t*Game Information*\n\nTotal Chain Words : " + _0x495a1d.wordsCount + "  \n" + _0x495a1d.longestWordBy + "\n*_Chain Started From :-_*  " + _0x495a1d.wordChain + " ...!" : '') + "\n\n").trim());
      console.log("counts : ", _0x495a1d.wordsCount);
      delete astro_patch_hcg[_0x5eabd9];
    }
  } else {
    _0x19f0c2("┏━━━━━━━━━━━━━━━━━━┓\n┃   WORD CHAIN 404Error    ┃\n┗━━━━━━━━━━━━━━━━━━┛ \n\n*Uhh Dear, _Theres No Game Started yet in This Chat_*\n");
  }
});
smd({
  'on': 'text'
}, async (_0x14612a, _0x4009e3, {
  isCreator: _0xf2ae66
}) => {
  if (_0x14612a.isBot) {
    return;
  }
  const _0x1168eb = _0x14612a.chat;
  const _0x1bdb71 = astro_patch_wcg[_0x1168eb];
  if (!_0x1bdb71) {
    return;
  }
  const _0x3e91cb = _0x14612a.user;
  if (_0x1bdb71.gameStatus && _0x1bdb71.currentPlayer === _0x14612a.sender && _0x14612a.text && !_0x1bdb71.botPlayer) {
    const _0x4f2118 = _0x4009e3.split(" ")[0x0].trim().toLowerCase();
    if (_0x4f2118.length >= _0x1bdb71.wordLength && _0x4f2118.charAt(0x0) === _0x1bdb71.previousWord.slice(-0x1)) {
      if (_0x4f2118.length > _0x1bdb71.wordLength) {
        _0x1bdb71.longestWordBy = "Longest Word With " + _0x4f2118.length + " letters is *" + _0x4f2118 + "* by @" + _0x1bdb71.currentPlayer.split('@')[0x0];
      }
      _0x1bdb71.wordsCount++;
      _0x1bdb71.botPlayer = true;
      _0x1bdb71.stopTurn();
      _0x1bdb71.turnStartTime = Date.now();
      _0x1bdb71.startTurn(_0x14612a);
      _0x1bdb71.previousWord = _0x4f2118;
      _0x1bdb71.wordChain += "\t⇢" + _0x1bdb71.previousWord;
      _0x1bdb71.turnTimeLimit = Math.floor(Math.random() * 0xa) + 0x23;
      await _0x14612a.bot.sendMessage(_0x14612a.chat, {
        'react': {
          'text': '✅',
          'key': _0x14612a.key
        }
      });
      _0x1bdb71.currentPlayer = _0x1bdb71.currentPlayer === _0x1bdb71.player1 ? _0x1bdb71.player2 : _0x1bdb71.player1;
      let _0x2a3307 = "\n*Word Accepted...? ✅*\n_Current Turn : @" + _0x1bdb71.currentPlayer.split('@')[0x0] + "_\n_Next Turn : @" + (_0x1bdb71.currentPlayer === _0x1bdb71.player1 ? _0x1bdb71.player2 : _0x1bdb71.player1).split('@')[0x0] + "_\n\n_Your word must start with *'" + _0x1bdb71.previousWord.slice(-0x1).toUpperCase() + "'* , and must have atleast *'" + _0x1bdb71.wordLength + "'* letters_\n_you have *" + _0x1bdb71.turnTimeLimit + "Secs* to answer_\n_Total words yet : " + _0x1bdb71.wordsCount + "\n\n            ";
      if (_0x3e91cb === _0x1bdb71.currentPlayer) {
        _0x1bdb71.AwaitForSeconds(0x3);
      } else {
        _0x1bdb71.botPlayer = false;
      }
      return await _0x14612a.bot.sendMessage(_0x14612a.from, {
        'text': _0x2a3307,
        'mentions': [_0x1bdb71.player1, _0x1bdb71.player2]
      });
    } else {
      if (!_0x1bdb71.botPlayer) {
        _0x1bdb71.botPlayer = true;
        await _0x14612a.bot.sendMessage(_0x14612a.chat, {
          'react': {
            'text': '❎',
            'key': _0x14612a.key
          }
        });
        if (!_0x1bdb71.wrongAttempts[_0x1bdb71.currentPlayer]) {
          _0x1bdb71.wrongAttempts[_0x1bdb71.currentPlayer] = 0x1;
        } else {
          _0x1bdb71.wrongAttempts[_0x1bdb71.currentPlayer]++;
        }
        if (_0x1bdb71.wrongAttempts[_0x1bdb71.currentPlayer] >= _0x1bdb71.maxAttempts) {
          _0x1bdb71.stopTurn();
          delete astro_patch_wcg[_0x1168eb];
          let _0x3a7bff = _0x1bdb71.wordChain.split(',');
          return await _0x14612a.reply("Wrong Attempt Exceeds! : " + _0x1bdb71.wrongAttempts[_0x1bdb71.currentPlayer] + "\n Game Terminated, " + _0x1bdb71.currentPlayer.split('@')[0x0] + " Can't Find a Word That should start with \"" + _0x1bdb71.previousWord.slice(-0x1) + "\".\n\n\n*Total Chain Words : " + _0x3a7bff.length + "\n Started From : " + _0x3a7bff.join("\t⇢") + "  \n\nGame ended.*");
        }
        let _0x229ee2 = _0x4f2118.charAt(0x0) === _0x1bdb71.previousWord.slice(-0x1) ? _0x4f2118.length > _0x1bdb71.wordLength ? "_Word Length is Smaller Then " + _0x1bdb71.wordLength + " letters_" : "Invalid Word" : "Given Word Not Start With '" + _0x1bdb71.previousWord.slice(-0x1) + "'";
        let _0x15d09e = "Word Not Accepted...? ❎\nReason : _" + _0x229ee2 + "_\n\n_Current Turn : @" + _0x1bdb71.currentPlayer.split('@')[0x0] + "_\n_Next Turn : @" + (_0x1bdb71.currentPlayer === _0x1bdb71.player1 ? _0x1bdb71.player2 : _0x1bdb71.player1).split('@')[0x0] + "_\n\n_You Word Must Start With *" + _0x1bdb71.previousWord.slice(-0x1) + "* , and Must Have Atleast *4* letters_\n_Try Again, you Still Have " + _0x1bdb71.currentRemTime + "Secs to Answer_\n";
        await _0x14612a.sendMessage(_0x14612a.chat, {
          'text': _0x15d09e,
          'mentions': [_0x1bdb71.player1, _0x1bdb71.player2]
        });
        if (_0x1bdb71.currentPlayer === _0x3e91cb) {
          return await _0x1bdb71.AwaitForSeconds(0x3);
        } else {
          _0x1bdb71.botPlayer = false;
        }
      }
    }
  }
});
const stickers = ['https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-1.webp', "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-2.webp", "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-3.webp", "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-3.webp", "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-4.webp", "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-4.webp", "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-5.webp", 'https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-6.webp'];
smd({
  'pattern': "dice",
  'desc': "Rolling Dice Game",
  'filename': __filename,
  'category': "game"
}, async _0x137ad2 => {
  try {
    try {
      const _0x2942a5 = Math.floor(Math.random() * stickers.length);
      return await _0x137ad2.bot.sendMessage(_0x137ad2.chat, {
        'sticker': {
          'url': stickers[_0x2942a5]
        },
        'packname': "ᴅɪᴄᴇ",
        'author': 'ANITA'
      });
    } catch (_0x15e683) {
      const _0x71d503 = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
      const _0xe8c53f = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", '6️⃣'];
      let _0x525967 = Math.floor(Math.random() * _0x71d503.length);
      let _0x25536f = await _0x137ad2.bot.sendMessage(_0x137ad2.chat, {
        'text': _0x71d503[_0x525967]
      });
      return await _0x137ad2.react(_0xe8c53f[_0x525967], _0x25536f);
    }
  } catch (_0x21feac) {
    await _0x137ad2.error(_0x21feac + "\n\ncommand: dice", _0x21feac);
  }
});
let A = ['😺', '👻', '⏳', '🍫'];
let B = ['🥳', '🍂', '😎', '💀'];
let C = ['💍', '🍁', '🔥', '💥'];
let D = ['✨', '❄️', '⭐', '🌚'];
let gtc = {};
function getEmojy(_0x2f4949) {
  return _0x2f4949[Math.floor(Math.random() * _0x2f4949.length)];
}
const randomChar = require("anime-character-random");
smd({
  'cmdname': "gtc",
  'info': "Guess the anime name, a new game",
  'type': "game",
  'filename': __filename,
  'use': "<guess name>"
}, async _0x398995 => {
  try {
    const _0x2a960e = await randomChar.GetChar();
    const _0x2e33e3 = [_0x2a960e.OtherCharacterList[0x0], _0x2a960e.OtherCharacterList[0x1], _0x2a960e.OtherCharacterList[0x2], _0x2a960e.CharacterName];
    const _0x2f5849 = _0x2e33e3.sort(() => Math.random() - 0.5);
    let _0x5ad901 = _0x2f5849.indexOf(_0x2a960e.CharacterName);
    let _0x4d1748 = A[Math.floor(Math.random() * A.length)];
    var _0x345cde = B[Math.floor(Math.random() * B.length)];
    var _0x401ccb = C[Math.floor(Math.random() * C.length)];
    var _0x2e16cc = D[Math.floor(Math.random() * D.length)];
    let _0x547988 = "*[GUESS THE ANIME NAME]*\n\n_React the message with correct emojy!_\n\n\n" + _0x4d1748 + ") " + _0x2f5849[0x0] + "\n" + _0x345cde + ") " + _0x2f5849[0x1] + "\n" + _0x401ccb + ") " + _0x2f5849[0x2] + "\n" + _0x2e16cc + ") " + _0x2f5849[0x3] + "\n\n\n" + Config.caption + "\n";
    let {
      key: _0xc7f500
    } = await _0x398995.send(_0x2a960e.CharacterImage, {
      'caption': _0x547988
    }, 'image');
    let _0x290694 = _0xc7f500.id;
    gtc[_0x290694] = {};
    gtc[_0x290694].emojies = [_0x4d1748, _0x345cde, _0x401ccb, _0x2e16cc];
    gtc[_0x290694].ans = _0x2a960e.CharacterName;
    gtc[_0x290694].emoji = gtc[_0x290694].emojies[_0x5ad901];
    console.log("gtc : ", gtc[_0x290694]);
  } catch (_0x302c57) {
    await _0x398995.error(_0x302c57 + "\n\ncommand: gtc(game)", _0x302c57);
  }
});
smd({
  'on': "text"
}, async _0x42d24a => {
  if (_0x42d24a.reaction || _0x42d24a.reply_message) {
    let _0x306eee = _0x42d24a.reaction ? _0x42d24a.msg.key.id : _0x42d24a.reply_message ? _0x42d24a.reply_message.id : false;
    if (!gtc[_0x306eee] || !gtc[_0x306eee].emojies.includes(_0x42d24a.text)) {
      return;
    }
    console.log("gtc : ", gtc);
    if (_0x42d24a.text == gtc[_0x306eee].emoji) {
      await _0x42d24a.send("*_Waow you @" + _0x42d24a.senderNum + " Guess the Correct Name!_*\n*_[NAME IS]: '" + gtc[_0x306eee].emoji + ") " + gtc[_0x306eee].ans + "'_*", {
        'mentions': [_0x42d24a.sender]
      });
      delete gtc[_0x306eee];
    } else {
      if (!gtc[_0x306eee][_0x42d24a.sender]) {
        gtc[_0x306eee][_0x42d24a.sender] = 0x1;
      } else {
        gtc[_0x306eee][_0x42d24a.sender]++;
      }
      if (gtc[_0x306eee][_0x42d24a.sender] >= 0x2) {
        await _0x42d24a.send("*Hey @" + _0x42d24a.senderNum + "You Lose!*\n_Better luck next time!_\n*Name is:* " + gtc[_0x306eee].emoji + ") " + gtc[_0x306eee].ans, {
          'mentions': [_0x42d24a.sender]
        });
        delete gtc[_0x306eee];
      } else if (gtc[_0x306eee][_0x42d24a.sender] > 0x0) {
        await _0x42d24a.send("*Hey @" + _0x42d24a.senderNum + " InCorrect answer!*\n_Try another emoji, you have one move!_", {
          'mentions': [_0x42d24a.sender]
        });
      }
    }
  }
});
smd({
  'pattern': 'ttt',
  'desc': "Play TicTacToe",
  'filename': __filename,
  'category': 'game'
}, async (_0x2661c0, _0x39da42) => {
  let _0x426ada = require('../lib/ttt');
  this.game = this.game ? this.game : {};
  if (Object.values(this.game).find(_0x2cd808 => _0x2cd808.id.startsWith("tictactoe") && [_0x2cd808.game.playerX, _0x2cd808.game.playerO].includes(_0x2661c0.sender))) {
    return _0x2661c0.reply("_A game is already going on_");
  }
  var _0x592362 = Object.values(this.game).find(_0x4a9509 => _0x4a9509.state === "WAITING" && (_0x39da42 ? _0x4a9509.name === _0x39da42 : true));
  let _0x5a8b22 = _0x2661c0.sender;
  let _0x1bbffa = _0x2661c0.quoted ? _0x2661c0.quoted.sender : _0x2661c0.mentionedJid ? _0x2661c0.mentionedJid[0x0] : false;
  if (!_0x592362 && _0x1bbffa && _0x5a8b22 && _0x5a8b22 != _0x1bbffa) {
    _0x592362 = {
      'id': "tictactoe-" + +new Date(),
      'x': _0x2661c0.chat,
      'o': '',
      'game': new _0x426ada(_0x1bbffa, 'o'),
      'state': "WAITING"
    };
    if (_0x39da42) {
      _0x592362.name = _0x39da42;
    }
    this.game[_0x592362.id] = _0x592362;
  }
  let _0x32486b = Object.values(this.game).find(_0x5ae5ed => _0x5ae5ed.state === 'WAITING' && (_0x39da42 ? _0x5ae5ed.name === _0x39da42 : true));
  if (_0x32486b) {
    _0x32486b.o = _0x2661c0.chat;
    _0x32486b.game.playerO = _0x2661c0.sender || _0x2661c0.mentionedJid[0x0];
    _0x32486b.state = "PLAYING";
    let _0x2624fe = _0x32486b.game.render().map(_0x1e03dc => {
      return {
        'X': '❌',
        'O': '⭕',
        0x1: '1️⃣',
        0x2: "2️⃣",
        0x3: "3️⃣",
        0x4: "4️⃣",
        0x5: '5️⃣',
        0x6: "6️⃣",
        0x7: "7️⃣",
        0x8: "8️⃣",
        0x9: '9️⃣'
      }[_0x1e03dc];
    });
    let _0x11c308 = "\nCurrent turn: @" + _0x32486b.game.currentTurn.split('@')[0x0] + "\nRoom ID: " + _0x32486b.id + "\n" + _0x2624fe.slice(0x0, 0x3).join("  ") + "\n" + _0x2624fe.slice(0x3, 0x6).join("  ") + "\n" + _0x2624fe.slice(0x6).join("  ") + "\n";
    return await _0x2661c0.bot.sendMessage(_0x2661c0.chat, {
      'text': _0x11c308,
      'mentions': [_0x32486b.game.currentTurn]
    });
  } else {
    _0x32486b = {
      'id': "tictactoe-" + +new Date(),
      'x': _0x2661c0.chat,
      'o': '',
      'game': new _0x426ada(_0x2661c0.sender, 'o'),
      'state': "WAITING"
    };
    if (_0x39da42) {
      _0x32486b.name = _0x39da42;
    }
    _0x2661c0.reply("_Waiting for player,use .ttt to join this game._ ");
    this.game[_0x32486b.id] = _0x32486b;
  }
});
smd({
  'pattern': "delttt",
  'desc': "deletes TicTacToe running session.",
  'filename': __filename,
  'category': "game"
}, async _0x39864f => {
  try {
    this.game = this.game ? this.game : false;
    let _0x3bc18c = Object.values(this.game).find(_0x111a36 => _0x111a36.id.startsWith("tictactoe"));
    let _0x65be69 = !!(_0x39864f.isGroup && _0x39864f.isAdmin || _0x39864f.isCreator);
    return _0x3bc18c ? _0x65be69 || [_0x3bc18c.game.playerX, _0x3bc18c.game.playerO].includes(_0x39864f.sender) ? (delete this.game, _0x39864f.reply("_Successfully Deleted running TicTacToe game._")) : _0x39864f.reply("*Uhh Please, _You are not a Player of running game!!!_") : _0x39864f.reply("No TicTacToe game🎮 is running.");
  } catch (_0x58c18a) {
    await _0x39864f.error(_0x58c18a + "\n\ncommand: delttt", _0x58c18a);
  }
});
smd({
  'on': "text"
}, async _0x402c15 => {
  this.game = this.game ? this.game : {};
  let _0x725881 = Object.values(this.game).find(_0x45b9c8 => _0x45b9c8.id && _0x45b9c8.game && _0x45b9c8.state && _0x45b9c8.id.startsWith("tictactoe") && [_0x45b9c8.game.playerX, _0x45b9c8.game.playerO].includes(_0x402c15.sender) && _0x45b9c8.state == "PLAYING");
  if (_0x725881) {
    let _0x519d57;
    let _0x1c676b = false;
    let _0x98a6eb = false;
    let _0x50c954 = false;
    if (!/^([1-9]|(me)?give_up|surr?ender|off|skip)$/i.test(_0x402c15.text)) {
      return;
    }
    _0x50c954 = !/^[1-9]$/.test(_0x402c15.text);
    if (_0x402c15.sender !== _0x725881.game.currentTurn) {
      if (!_0x50c954) {
        return true;
      }
    }
    if (!_0x50c954 && (_0x519d57 = _0x725881.game.turn(_0x402c15.sender === _0x725881.game.playerO, parseInt(_0x402c15.text) - 0x1)) < 0x1) {
      _0x402c15.reply({
        '-3': "The game is over.",
        '-2': "Invalid",
        '-1': "_Invalid Position_",
        0x0: "_Invalid Position_"
      }[_0x519d57]);
      return true;
    }
    if (_0x402c15.sender === _0x725881.game.winner) {
      _0x1c676b = true;
    } else if (_0x725881.game.board === 0x1ff) {
      _0x98a6eb = true;
    }
    let _0x593c17 = _0x725881.game.render().map(_0x516832 => {
      return {
        'X': '❌',
        'O': '⭕',
        0x1: "1️⃣",
        0x2: '2️⃣',
        0x3: "3️⃣",
        0x4: "4️⃣",
        0x5: "5️⃣",
        0x6: '6️⃣',
        0x7: "7️⃣",
        0x8: '8️⃣',
        0x9: '9️⃣'
      }[_0x516832];
    });
    if (_0x50c954) {
      _0x725881.game._currentTurn = _0x402c15.sender === _0x725881.game.playerX;
      _0x1c676b = true;
    }
    let _0x4e4f77 = _0x50c954 ? _0x725881.game.currentTurn : _0x725881.game.winner;
    let _0x30cffb = "Room ID: " + _0x725881.id + "\n\n" + _0x593c17.slice(0x0, 0x3).join("  ") + "\n" + _0x593c17.slice(0x3, 0x6).join("  ") + "\n" + _0x593c17.slice(0x6).join("  ") + "\n" + (_0x1c676b ? '@' + _0x4e4f77.split('@')[0x0] + " Won ! and got 2000💎 in wallet🤑" : _0x98a6eb ? "Game Tied,well done to both of you players." : "Current Turn " + ['❌', '⭕'][_0x725881.game._currentTurn * 0x1] + " @" + _0x725881.game.currentTurn.split('@')[0x0]) + "\n⭕:- @" + _0x725881.game.playerO.split('@')[0x0] + "\n❌:- @" + _0x725881.game.playerX.split('@')[0x0];
    if ((_0x725881.game._currentTurn ^ _0x50c954 ? _0x725881.x : _0x725881.o) !== _0x402c15.chat) {
      _0x725881[_0x725881.game._currentTurn ^ _0x50c954 ? 'x' : 'o'] = _0x402c15.chat;
    }
    if (_0x1c676b && isMongodb) {
      await eco.give(_0x402c15.sender, "ANITA", 0x7d0);
    }
    if (_0x1c676b || _0x98a6eb) {
      await _0x402c15.bot.sendMessage(_0x402c15.chat, {
        'text': _0x30cffb,
        'mentions': [_0x725881.game.playerO, _0x725881.game.playerX]
      });
      delete this.game[_0x725881.id];
    } else {
      await _0x402c15.bot.sendMessage(_0x402c15.chat, {
        'text': _0x30cffb,
        'mentions': [_0x725881.game.playerO, _0x725881.game.playerX]
      });
    }
  }
});