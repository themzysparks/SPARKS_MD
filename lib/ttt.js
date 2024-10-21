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

class TicTacToe {
   constructor(_0x39c8a2 = 'x', _0xd80217 = 'o') {
     this.playerX = _0x39c8a2;
     this.playerO = _0xd80217;
     this._currentTurn = false;
     this._x = 0x0;
     this._o = 0x0;
     this.turns = 0x0;
   }
   get ["board"]() {
     return this._x | this._o;
   }
   get ["currentTurn"]() {
     return this._currentTurn ? this.playerO : this.playerX;
   }
   get ["enemyTurn"]() {
     return this._currentTurn ? this.playerX : this.playerO;
   }
   static ["check"](_0x470108) {
     for (let _0x280885 of [0x7, 0x38, 0x49, 0x54, 0x92, 0x111, 0x124, 0x1c0]) if ((_0x470108 & _0x280885) === _0x280885) {
       return true;
     }
     return false;
   }
   static ["toBinary"](_0x43b24b = 0x0, _0x251188 = 0x0) {
     if (_0x43b24b < 0x0 || _0x43b24b > 0x2 || _0x251188 < 0x0 || _0x251188 > 0x2) {
       throw new Error("invalid position");
     }
     return 0x1 << _0x43b24b + 0x3 * _0x251188;
   }
   ["turn"](_0x37338a = 0x0, _0x5f193d = 0x0, _0x133d33) {
     if (this.board === 0x1ff) {
       return -0x3;
     }
     let _0x3b142d = 0x0;
     if (_0x133d33 == null) {
       if (_0x5f193d < 0x0 || _0x5f193d > 0x8) {
         return -0x1;
       }
       _0x3b142d = 0x1 << _0x5f193d;
     } else {
       if (_0x5f193d < 0x0 || _0x5f193d > 0x2 || _0x133d33 < 0x0 || _0x133d33 > 0x2) {
         return -0x1;
       }
       _0x3b142d = TicTacToe.toBinary(_0x5f193d, _0x133d33);
     }
     if (this._currentTurn ^ _0x37338a) {
       return -0x2;
     }
     if (this.board & _0x3b142d) {
       return 0x0;
     }
     this[this._currentTurn ? '_o' : '_x'] |= _0x3b142d;
     this._currentTurn = !this._currentTurn;
     this.turns++;
     return 0x1;
   }
   static ['render'](_0x58f38f = 0x0, _0x3635c2 = 0x0) {
     let _0x3d41a9 = parseInt(_0x58f38f.toString(0x2), 0x4);
     let _0x220eb4 = parseInt(_0x3635c2.toString(0x2), 0x4) * 0x2;
     return [...(_0x3d41a9 + _0x220eb4).toString(0x4).padStart(0x9, '0')].reverse().map((_0x303e85, _0x303fdf) => _0x303e85 == 0x1 ? 'X' : _0x303e85 == 0x2 ? 'O' : ++_0x303fdf);
   }
   ["render"]() {
     return TicTacToe.render(this._x, this._o);
   }
   get ["winner"]() {
     let _0x252368 = TicTacToe.check(this._x);
     let _0x405096 = TicTacToe.check(this._o);
     return _0x252368 ? this.playerX : _0x405096 ? this.playerO : false;
   }
 }
 new TicTacToe().turn;
 module.exports = TicTacToe;