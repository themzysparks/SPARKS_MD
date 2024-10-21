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

const {
  smd
} = require("../lib");
smd({
  'cmdname': "cat",
  'desc': "Send Images of randome Cats!",
  'type': "misc",
  'filename': __filename
}, async _0x5539d0 => {
  try {
    await _0x5539d0.send("https://cataas.com/cat", {
      'caption': "*meyaoooooooooooooon!*"
    }, "img", _0x5539d0);
  } catch (_0xd4da4f) {
    _0x5539d0.error(_0xd4da4f + "\n\nCommand: cat", _0xd4da4f, false);
  }
});