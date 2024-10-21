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
  send
} = require("../lib");
const fetch = require("node-fetch");
smd({
  'pattern': "forex1",
  'category': "forex",
  'desc': "Fetches the latest forex news",
  'filename': __filename,
  'use': "forexnews"
}, async _0xf38b05 => {
  try {
    const _0x41b20e = await fetch("https://api.polygon.io/v2/reference/news?apiKey=Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45");
    const _0x563a6a = await _0x41b20e.json();
    if (!_0x563a6a.results || _0x563a6a.results.length === 0x0) {
      return _0xf38b05.send("*No forex news available at the moment.*");
    }
    const _0x1ac2c9 = _0x563a6a.results;
    let _0x12cced = '';
    _0x1ac2c9.forEach((_0xd688d4, _0x330a91) => {
      _0x12cced += "*Title:* " + _0xd688d4.title + "\n";
      _0x12cced += "*Publisher:* " + _0xd688d4.publisher.name + "\n";
      _0x12cced += "*Published UTC:* " + _0xd688d4.published_utc + "\n";
      _0x12cced += "*Article URL:* " + _0xd688d4.article_url + "\n\n";
      if (_0x330a91 < _0x1ac2c9.length - 0x1) {
        _0x12cced += "---\n\n";
      }
    });
    return _0xf38b05.send(_0x12cced, {
      'quoted': _0xf38b05
    });
  } catch (_0x11e4be) {
    console.error(_0x11e4be);
    return _0xf38b05.error(_0x11e4be, "*Failed to fetch forex news.*");
  }
});
smd({
  'pattern': "fxstatus",
  'category': "forex",
  'desc': "Fetches the current status of the forex market",
  'filename': __filename,
  'use': 'fxstatus'
}, async _0x4e7295 => {
  try {
    const _0x3ed2db = await fetch('https://api.polygon.io/v1/marketstatus/now?apiKey=Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45');
    const _0x4e2c2b = await _0x3ed2db.json();
    if (!_0x4e2c2b) {
      return _0x4e7295.send("*Failed to fetch forex market status.*");
    }
    let _0x7678aa = "*Forex Market Status:*\n";
    _0x7678aa += "After Hours: " + (_0x4e2c2b.afterHours ? 'Closed' : "Open") + "\n";
    _0x7678aa += "Market: " + (_0x4e2c2b.market ? "Open" : "Closed") + "\n";
    const _0x532c26 = _0x4e2c2b.currencies;
    _0x7678aa += "\n*Currencies:*\n";
    _0x7678aa += "Crypto: " + _0x532c26.crypto + "\n";
    _0x7678aa += "FX: " + _0x532c26.fx + "\n";
    const _0x19a88f = _0x4e2c2b.exchanges;
    _0x7678aa += "\n*Exchanges:*\n";
    _0x7678aa += "NASDAQ: " + _0x19a88f.nasdaq + "\n";
    _0x7678aa += "NYSE: " + _0x19a88f.nyse + "\n";
    _0x7678aa += "OTC: " + _0x19a88f.otc + "\n";
    const _0x55725a = _0x4e2c2b.indicesGroups;
    _0x7678aa += "\n*Indices Groups:*\n";
    _0x7678aa += "S&P: " + _0x55725a.s_and_p + "\n";
    _0x7678aa += "Societe Generale: " + _0x55725a.societe_generale + "\n";
    _0x7678aa += "MSCI: " + _0x55725a.msci + "\n";
    _0x7678aa += "FTSE Russell: " + _0x55725a.ftse_russell + "\n";
    _0x7678aa += "MStar: " + _0x55725a.mstar + "\n";
    _0x7678aa += "MStarC: " + _0x55725a.mstarc + "\n";
    _0x7678aa += "CCCY: " + _0x55725a.cccy + "\n";
    _0x7678aa += "CGI: " + _0x55725a.cgi + "\n";
    _0x7678aa += "NASDAQ: " + _0x55725a.nasdaq + "\n";
    _0x7678aa += "Dow Jones: " + _0x55725a.dow_jones + "\n";
    _0x7678aa += "\n*Server Time:* " + _0x4e2c2b.serverTime + "\n";
    return _0x4e7295.send(_0x7678aa, {
      'quoted': _0x4e7295
    });
  } catch (_0x5ee14d) {
    console.error(_0x5ee14d);
    return _0x4e7295.error(_0x5ee14d, "*Failed to fetch forex market status.*");
  }
});
smd({
  'pattern': "fxpairs",
  'category': "forex",
  'desc': "Fetches a list of active forex currency pairs",
  'filename': __filename,
  'use': 'fxpairs'
}, async _0x2b47fa => {
  try {
    const _0x5629c6 = await fetch("https://api.polygon.io/v3/reference/tickers?market=fx&active=true&apiKey=Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45");
    const _0x437df0 = await _0x5629c6.json();
    if (!_0x437df0 || !_0x437df0.results || _0x437df0.results.length === 0x0) {
      return _0x2b47fa.send("*Failed to fetch forex currency pairs.*");
    }
    let _0x5b1b29 = "*Active Forex Currency Pairs:*\n\n";
    _0x437df0.results.forEach(_0x4d2356 => {
      _0x5b1b29 += _0x4d2356.ticker + ": " + _0x4d2356.name + "\n";
    });
    return _0x2b47fa.send(_0x5b1b29, {
      'quoted': _0x2b47fa
    });
  } catch (_0x261ed2) {
    console.error(_0x261ed2);
    return _0x2b47fa.error(_0x261ed2, "*Failed to fetch forex currency pairs.*");
  }
});
smd({
  'pattern': "fxexchange",
  'category': "forex",
  'desc': "Fetches the latest foreign exchange rates against the US Dollar",
  'filename': __filename,
  'use': "fxexchange [currency_code]"
}, async (_0x1cce60, _0x389244) => {
  try {
    const _0x31bb92 = _0x389244 || 'USD';
    const _0x23fc9b = "https://api.exchangerate-api.com/v4/latest/" + _0x31bb92;
    const _0x47450a = await fetch(_0x23fc9b);
    const _0x46c3da = await _0x47450a.json();
    if (!_0x46c3da || !_0x46c3da.rates) {
      return _0x1cce60.send("*Failed to fetch exchange rates for " + _0x31bb92 + '.*');
    }
    let _0x162ada = "*Foreign Exchange Rates (" + _0x46c3da.base + ")*\n\n";
    for (const [_0x43b0d3, _0x256aa3] of Object.entries(_0x46c3da.rates)) {
      _0x162ada += _0x43b0d3 + ": " + _0x256aa3.toFixed(0x4) + "\n";
    }
    return _0x1cce60.send(_0x162ada, {
      'quoted': _0x1cce60
    });
  } catch (_0x28e1ed) {
    console.error(_0x28e1ed);
    return _0x1cce60.error(_0x28e1ed, "*Failed to fetch exchange rates.*");
  }
});
smd({
  'pattern': "stocktickers",
  'category': "forex",
  'desc': "Fetches a list of active stock tickers",
  'filename': __filename,
  'use': "stocktickers [limit]"
}, async (_0x3d6d9d, _0x4f0b04) => {
  try {
    const _0x3b0946 = _0x4f0b04 || 0x64;
    const _0x209264 = "https://api.polygon.io/v3/reference/tickers?active=true&limit=" + _0x3b0946 + "&apiKey=Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45";
    const _0x47ca27 = await fetch(_0x209264);
    const _0x45402d = await _0x47ca27.json();
    if (!_0x45402d || !_0x45402d.results || _0x45402d.results.length === 0x0) {
      return _0x3d6d9d.send("*No active stock tickers found.*");
    }
    let _0x410980 = "*Active Stock Tickers (Limit: " + _0x3b0946 + "):*\n\n";
    _0x45402d.results.forEach(_0x20cb96 => {
      _0x410980 += _0x20cb96.ticker + ": " + _0x20cb96.name + "\n";
    });
    return _0x3d6d9d.send(_0x410980, {
      'quoted': _0x3d6d9d
    });
  } catch (_0x12211f) {
    console.error(_0x12211f);
    return _0x3d6d9d.error(_0x12211f, "*Failed to fetch stock tickers.*");
  }
});