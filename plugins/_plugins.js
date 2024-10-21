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
  'cmdname': "restart",
  'info': "To restart bot",
  'type': 'tools',
  'fromMe': true,
  'filename': __filename
}, async _0x31ca36 => {
  const {
    exec: _0x53df5f
  } = require("child_process");
  _0x31ca36.reply("Restarting");
  _0x53df5f("pm2 restart all");
});
smd({
  'cmdname': "shutdown",
  'info': "To shutdown bot",
  'type': "tools",
  'fromMe': true,
  'filename': __filename
}, async _0x5ee0f9 => {
  const {
    exec: _0x5c3764
  } = require("child_process");
  _0x5ee0f9.reply("Shutting down");
  _0x5c3764("pm2 stop all");
});
smd({
  'cmdname': 'plugins',
  'alias': ["plugin"],
  'type': "owner",
  'info': "Shows list of all externally installed modules",
  'fromMe': true,
  'filename': __filename,
  'use': "<name>"
}, async (_0x14af15, _0x362c45) => {
  try {
    let _0x548790 = await plugins(_0x14af15, 'plugins', _0x362c45);
    return await _0x14af15.send(!_0x548790 ? "*_There's no plugin install in " + Config.botname + '_*' : !_0x362c45 ? "*All Installed Modules are:-*\n\n" + _0x548790 : _0x548790);
  } catch (_0x31ee3f) {
    _0x14af15.error(_0x31ee3f + " \n\ncmdName plugins\n");
  }
});
smd({
  'pattern': "uninstall",
  'alias': ["remove"],
  'type': "owner",
  'info': "removes external modules.",
  'fromMe': true,
  'filename': __filename,
  'use': "<plugin name>"
}, async (_0x550e65, _0x3d0182) => {
  if (!_0x3d0182) {
    return await _0x550e65.reply("*_Uhh Please, Provide Me Plugin Name_*");
  }
  if (_0x3d0182 === "alls") {
    return await _0x550e65.reply(await plugins("remove", 'all', __dirname));
  }
  try {
    await _0x550e65.send(await plugins(_0x550e65, "remove", _0x3d0182, __dirname), {}, '', _0x550e65);
  } catch {}
});
smd({
  'cmdname': 'install',
  'type': "owner",
  'info': "Installs external modules..",
  'fromMe': true,
  'filename': __filename,
  'use': "<gist url>"
}, async (_0x22666b, _0x7b0443) => {
  let _0x346ea2 = _0x7b0443 ? _0x7b0443 : _0x22666b.quoted ? _0x22666b.quoted.text : '';
  if (!_0x346ea2.toLowerCase().includes("https")) {
    return await _0x22666b.send("*_Uhh Please, Provide Me Plugin Url_*");
  }
  await _0x22666b.reply(await plugins(_0x22666b, "install", _0x346ea2, __dirname));
});