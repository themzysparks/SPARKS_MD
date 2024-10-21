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
let antiCallMessage = process.env.ANTICALL_MESSAGE || "```Hii this is ANITA a Personal Assistant!!\n\n\tSorry for now, we cannot receive calls, whether in a group or personal \n\n if you need help or request features please chat owner\n\n\nPowered by ANITA Chatbot```";
let antiCallCountries = [];
let antiCallusers = {};
let bots = false;
const {
  smd,
  botpic,
  send,
  Config,
  tlang,
  sleep,
  smdBuffer,
  prefix,
  bot_
} = require('../lib');
smd({
  'pattern': "anticall",
  'desc': "Detects calls and decline them. ",
  'category': "owner",
  'use': "<on | off>",
  'filename': __filename
}, async (_0x50bffe, _0x42917d) => {
  let _0x40bc9d = (await bot_.findOne({
    'id': "bot_" + _0x50bffe.user
  })) || (await bot_["new"]({
    'id': "bot_" + _0x50bffe.user
  }));
  let _0x4979e8 = _0x42917d ? _0x42917d.toLowerCase().trim() : '';
  if (_0x4979e8.startsWith('off') || _0x4979e8.startsWith("deact") || _0x4979e8.startsWith('disable')) {
    if (_0x40bc9d.anticall === 'false') {
      return await _0x50bffe.send("*anticall Already Disabled In Current Chat!*");
    }
    await bot_.updateOne({
      'id': 'bot_' + _0x50bffe.user
    }, {
      'anticall': 'false'
    });
    return await _0x50bffe.send("*anticall Disable Succesfully!*");
  } else {
    if (!_0x42917d) {
      return await _0x50bffe.send("*_anticall " + (_0x40bc9d.anticall === "false" ? "Not set to any" : "set to \"" + _0x40bc9d.anticall + "\"") + " Country Code!_*\n *Provide Country code to Update Status*\n*Eg: _.anticall all | 27, 91_*");
    }
  }
  let _0x4bfe77 = _0x4979e8.includes('all') ? "all" : _0x42917d ? _0x42917d.split(',').map(_0x57987c => parseInt(_0x57987c)).filter(_0xa5b064 => !isNaN(_0xa5b064)).join(',') : false;
  return !_0x42917d || !_0x4bfe77 ? await _0x50bffe.send("*_Please provide country code to block calls_*\n*_eg: " + prefix + "anticall all | 92_*") : _0x4bfe77 ? (await bot_.updateOne({
    'id': "bot_" + _0x50bffe.user
  }, {
    'anticall': '' + _0x4bfe77
  }), await _0x50bffe.send("*anticall Succesfully set to \"" + _0x4bfe77 + "\"!*")) : await _0x50bffe.send("*_Please provide a Valid country code_*\n*example: " + prefix + "anticall all,27,91,231_*");
});
smd({
  'call': 'offer'
}, async _0x4ae586 => {
  try {
    if (!bots) {
      bots = await bot_.findOne({
        'id': "bot_" + _0x4ae586.user
      });
    }
    if (_0x4ae586.fromMe || !bots || !bots.anticall || bots.anticall === "false") {
      return;
    }
    if (!antiCallCountries || !antiCallCountries[0x0]) {
      antiCallCountries = bots.anticall?.["split"](',') || [];
      antiCallCountries = antiCallCountries.filter(_0x187309 => _0x187309.trim() !== '');
    }
    let _0x5774b7 = ('' + bots.anticall).includes("all") ? 'all' : '';
    let _0x2e58c3 = _0x5774b7 == "all" ? true : antiCallCountries.some(_0x42b05a => _0x4ae586.from?.['toString']()?.['startsWith'](_0x42b05a));
    if (_0x2e58c3 || _0x4ae586.isBot) {
      try {
        if (!antiCallusers || !antiCallusers[_0x4ae586.from]) {
          antiCallusers[_0x4ae586.from] = {
            'warn': 0x0
          };
        }
        if (antiCallusers[_0x4ae586.from].warn < 0x2) {
          await _0x4ae586.send(antiCallMessage);
        }
        antiCallusers[_0x4ae586.from].warn++;
        await _0x4ae586.send('*_' + antiCallusers[_0x4ae586.from].warn + " Call rejected From User @" + _0x4ae586.from.split('@')[0x0] + "..!!_*", {
          'mentions': [_0x4ae586.from]
        }, "anita", '', _0x4ae586.user);
        return await _0x4ae586.decline();
      } catch {}
    }
  } catch {}
});