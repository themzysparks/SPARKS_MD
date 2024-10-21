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

var commands = [];
function cmd(_0x451072, _0x3f3643) {
  _0x451072["function"] = _0x3f3643;
  if (!_0x451072.pattern && _0x451072.cmdname) {
    _0x451072.pattern = _0x451072.cmdname;
  }
  if (!_0x451072.alias) {
    _0x451072.alias = [];
  }
  if (!_0x451072.dontAddCommandList) {
    _0x451072.dontAddCommandList = false;
  }
  if (!_0x451072.desc) {
    _0x451072.desc = _0x451072.info ? _0x451072.info : '';
  }
  if (!_0x451072.fromMe) {
    _0x451072.fromMe = false;
  }
  if (!_0x451072.category) {
    _0x451072.category = _0x451072.type ? _0x451072.type : 'misc';
  }
  _0x451072.info = _0x451072.desc;
  _0x451072.type = _0x451072.category;
  if (!_0x451072.use) {
    _0x451072.use = '';
  }
  if (!_0x451072.filename) {
    _0x451072.filename = "Not Provided";
  }
  commands.push(_0x451072);
  return _0x451072;
}
const Module = {
  'export': cmd
};
module.exports = {
  'cmd': cmd,
  'amd': cmd,
  'AddCommand': cmd,
  'Function': cmd,
  'Module': Module,
  'smd': cmd,
  'commands': commands,
  'bot': cmd
};