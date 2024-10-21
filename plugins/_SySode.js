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
  plugins,
  smd,
  Config
} = require("../lib");
smd({
  'cmdname': "shutdown",
  'info': "To restart bot",
  'type': "tools",
  'fromMe': true,
  'filename': __filename
}, async _0x45d65b => {
  const {
    exec: _0x591e9b
  } = require("child_process");
  _0x45d65b.reply("Shutting Down");
  _0x591e9b("pm2 stop all");
});
smd({
  'cmdname': 'restart',
  'info': "To restart bot",
  'type': "tools",
  'fromMe': true,
  'filename': __filename
}, async _0x469fe2 => {
  const {
    exec: _0x5e3b67
  } = require("child_process");
  _0x469fe2.reply('Restarting');
  _0x5e3b67("pm2 restart all");
});
smd({
  'cmdname': "plugins",
  'alias': ['plugin'],
  'type': "owner",
  'info': "Shows list of all externally installed modules",
  'fromMe': true,
  'filename': __filename,
  'use': "<name>"
}, async (_0x1b4495, _0x366409) => {
  try {
    let _0x28c3e9 = await plugins(_0x1b4495, "plugins", _0x366409);
    return await _0x1b4495.send(!_0x28c3e9 ? "*_There's no plugin install in " + Config.botname + '_*' : !_0x366409 ? "*All Installed Modules are:-*\n\n" + _0x28c3e9 : _0x28c3e9);
  } catch (_0x2555dd) {
    _0x1b4495.error(_0x2555dd + " \n\ncmdName plugins\n");
  }
});
smd({
  'pattern': 'remove',
  'alias': ["uninstall"],
  'type': "owner",
  'info': "removes external modules.",
  'fromMe': true,
  'filename': __filename,
  'use': "<plugin name>"
}, async (_0x439c76, _0x5c413b) => {
  if (!_0x5c413b) {
    return await _0x439c76.reply("*_Uhh Please, Provide Me Plugin Name_*");
  }
  if (_0x5c413b === "alls") {
    return await _0x439c76.reply(await plugins("remove", "all", __dirname));
  }
  try {
    await _0x439c76.send(await plugins(_0x439c76, "remove", _0x5c413b, __dirname), {}, '', _0x439c76);
  } catch {}
});
smd({
  'cmdname': "install",
  'type': "owner",
  'info': "Installs external modules..",
  'fromMe': true,
  'filename': __filename,
  'use': "<gist url>"
}, async (_0x7f4496, _0x483f32) => {
  let _0x255422 = _0x483f32 ? _0x483f32 : _0x7f4496.quoted ? _0x7f4496.quoted.text : '';
  if (!_0x255422.toLowerCase().includes("https")) {
    return await _0x7f4496.send("*_Uhh Please, Provide Me Plugin Url_*");
  }
  await _0x7f4496.reply(await plugins(_0x7f4496, 'install', _0x255422, __dirname));
});