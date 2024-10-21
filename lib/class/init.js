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

'use strict';

var fetch = require('node-fetch');
var FormData = require('form-data');
var crypto = require("crypto");
var acr = function () {
  function _0xaa99f6(_0x593fce) {
    this.endpoint = "/v1/identify";
    this.signature_version = '1';
    var _0xc72a0a = _0x593fce.host;
    var _0x174a3f = _0x593fce.access_key;
    var _0x2440b0 = _0x593fce.access_secret;
    var _0xce9a5d = _0x593fce.data_type;
    var _0x482563 = _0x593fce.audio_format;
    var _0x220718 = _0x593fce.sample_rate;
    var _0x4e0cfd = _0x593fce.audio_channels;
    this.host = _0xc72a0a || "identify-us-west-2.acrcloud.com";
    this.access_key = _0x174a3f;
    this.access_secret = _0x2440b0;
    this.data_type = _0xce9a5d || "audio";
    this.audio_format = _0x482563 || '';
    this.sample_rate = _0x220718 || '';
    this.audio_channels = _0x4e0cfd || 0x2;
  }
  _0xaa99f6.prototype.buildStringToSign = function (_0x38f406, _0x20e330, _0x490cbf, _0x1bfe32, _0x4c32f8, _0x396fc2) {
    return [_0x38f406, _0x20e330, _0x490cbf, _0x1bfe32, _0x4c32f8, _0x396fc2].join("\n");
  };
  _0xaa99f6.prototype.sign = function (_0x3bf9b8, _0x3d4d20) {
    return crypto.createHmac("sha1", _0x3d4d20).update(Buffer.from(_0x3bf9b8, "utf-8")).digest().toString("base64");
  };
  _0xaa99f6.prototype.generateFormData = function (_0x105254) {
    var _0x5fd19d = new FormData();
    Object.keys(_0x105254).forEach(function (_0x2b24ce) {
      _0x5fd19d.append(_0x2b24ce, _0x105254[_0x2b24ce]);
    });
    return _0x5fd19d;
  };
  _0xaa99f6.prototype.identify = function (_0x491db1) {
    var _0x5756a1 = new Date();
    var _0x13021d = _0x5756a1.getTime() / 0x3e8;
    var _0x283b59 = this.buildStringToSign("POST", this.endpoint, this.access_key, this.data_type, this.signature_version, _0x13021d);
    var _0x1b8ee2 = this.sign(_0x283b59, this.access_secret);
    var _0x44ccf7 = {
      'sample': _0x491db1,
      'access_key': this.access_key,
      'data_type': this.data_type,
      'signature_version': this.signature_version,
      'signature': _0x1b8ee2,
      'sample_bytes': _0x491db1.length,
      'timestamp': _0x13021d
    };
    return fetch('https://' + this.host + '/' + this.endpoint, {
      'method': "POST",
      'body': this.generateFormData(_0x44ccf7)
    }).then(function (_0x4488d6) {
      return _0x4488d6.json();
    });
  };
  return _0xaa99f6;
}();
module.exports = acr;