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
  fetchJson,
  smd,
  tlang,
  send,
  getBuffer,
  prefix,
  Config,
  sleep
} = require("../lib");
const {
  MessageType,
  Mimetype
} = require("@whiskeysockets/baileys");
const fs = require('fs');
const ffmpeg = require("fluent-ffmpeg");
const exec = require("child_process").exec;
smd({
  'pattern': "x4mp4",
  'alias': ['tea', "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x5225d1 => {
  try {
    if (!_0x5225d1.reply_message.video) {
      return await _0x5225d1.send("*Need Video!*");
    }
    var _0x258c08 = await _0x5225d1.bot.downloadAndSaveMediaMessage(_0x5225d1.quoted.msg);
    ffmpeg(_0x258c08).withSize("25%").format("mp4").save("./temp/x4mp4.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x258c08);
      } catch (_0x5679aa) {}
      await _0x5225d1.bot.sendMessage(_0x5225d1.jid, {
        'video': fs.readFileSync("./temp/x4mp4.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/output.mp4");
      } catch (_0xf660d9) {}
    });
  } catch (_0x1360f2) {
    return await _0x5225d1.error(_0x1360f2 + "\n\n command: coffe", _0x1360f2, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "x2mp4",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x20e587 => {
  try {
    if (!_0x20e587.reply_message.video) {
      return await _0x20e587.send("*Need Video!*");
    }
    var _0x12f312 = await _0x20e587.bot.downloadAndSaveMediaMessage(_0x20e587.quoted.msg);
    ffmpeg(_0x12f312).withSize('50%').format("mp4").save('./temp/x2mp4.mp4').on("end", async () => {
      try {
        fs.unlinkSync(_0x12f312);
      } catch (_0x4a9645) {}
      await _0x20e587.bot.sendMessage(_0x20e587.jid, {
        'video': fs.readFileSync('./temp/x2mp4.mp4'),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync('./temp/x2mp4.mp4');
      } catch (_0x41e53f) {}
    });
  } catch (_0x599997) {
    return await _0x20e587.error(_0x599997 + "\n\n command: x2mp4", _0x599997, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'mp4image',
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x1e262c => {
  try {
    if (!_0x1e262c.reply_message.image) {
      return await _0x1e262c.send("*Need image!*");
    }
    var _0x23b1ab = await _0x1e262c.bot.downloadAndSaveMediaMessage(_0x1e262c.quoted.msg);
    console.log("checking location : ", _0x23b1ab);
    ffmpeg(_0x23b1ab).loop(0x6).fps(0x13).videoBitrate(0x190).size("640x480").format("mp4").save("./temp/x2mp4.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x23b1ab);
      } catch (_0x9537a0) {}
      await _0x1e262c.sendMessage(_0x1e262c.jid, {
        'video': fs.readFileSync("./temp/x2mp4.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/x2mp4.mp4");
      } catch (_0x569f23) {}
    });
  } catch (_0x27e385) {
    return await _0x1e262c.error(_0x27e385 + "\n\n command: x2mp4", _0x27e385, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp4vintage",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x1e08c6 => {
  try {
    if (!_0x1e08c6.reply_message.video) {
      return await _0x1e08c6.send("*Need Video!*");
    }
    var _0x2a3fc7 = await _0x1e08c6.bot.downloadAndSaveMediaMessage(_0x1e08c6.quoted.msg);
    ffmpeg(_0x2a3fc7).outputOptions(['-y', '-vf', "curves=vintage,format=yuv420p"]).fps(0x16).save("./temp/mp4vintage.mp4").on('end', async () => {
      try {
        fs.unlinkSync(_0x2a3fc7);
      } catch (_0x332990) {}
      await _0x1e08c6.bot.sendMessage(_0x1e08c6.jid, {
        'video': fs.readFileSync("./temp/mp4vintage.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4vintage.mp4");
      } catch (_0x146e4b) {}
    });
  } catch (_0x553699) {
    return await _0x1e08c6.error(_0x553699 + "\n\n command: mp4vintage", _0x553699, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp4reverse",
  'alias': ["tea", 'kofi'],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x13556d => {
  try {
    if (!_0x13556d.reply_message.video) {
      return await _0x13556d.send("*Need Video!*");
    }
    var _0x4064a1 = await _0x13556d.bot.downloadAndSaveMediaMessage(_0x13556d.quoted.msg);
    ffmpeg(_0x4064a1).outputOptions(['-y', "-vf", "reverse", "-af", "areverse"]).format('mp4').fps(0x16).save("./temp/mp4reverse.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x4064a1);
      } catch (_0x11aa19) {}
      await _0x13556d.bot.sendMessage(_0x13556d.jid, {
        'video': fs.readFileSync("./temp/mp4reverse.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4reverse.mp4");
      } catch (_0x3abbcf) {}
    });
  } catch (_0x23299a) {
    return await _0x13556d.error(_0x23299a + "\n\n command: mp4reverse", _0x23299a, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp4bw",
  'alias': ['tea', "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x3066cf => {
  try {
    if (!_0x3066cf.reply_message.video) {
      return await _0x3066cf.send("*Need Video!*");
    }
    var _0x89f921 = await _0x3066cf.bot.downloadAndSaveMediaMessage(_0x3066cf.quoted.msg);
    ffmpeg(_0x89f921).outputOptions(['-y', "-vf", 'hue=s=0']).format("mp4").save("./temp/mp4bw.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x89f921);
      } catch (_0x179841) {}
      await _0x3066cf.bot.sendMessage(_0x3066cf.jid, {
        'video': fs.readFileSync("./temp/mp4bw.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4bw.mp4");
      } catch (_0x759795) {}
    });
  } catch (_0x3caf62) {
    return await _0x3066cf.error(_0x3caf62 + "\n\n command: mp4bw", _0x3caf62, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp4enhance",
  'alias': ["tea", "kofi"],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x39515f => {
  try {
    if (!_0x39515f.reply_message.video) {
      return await _0x39515f.send("*Need Video!*");
    }
    var _0x17dc5e = await _0x39515f.bot.downloadAndSaveMediaMessage(_0x39515f.quoted.msg);
    ffmpeg(_0x17dc5e).outputOptions(['-y', "-vf", 'unsharp=3:3:1.5']).format("mp4").save('./temp/mp4enhance.mp4').on("end", async () => {
      try {
        fs.unlinkSync(_0x17dc5e);
      } catch (_0x192cc8) {}
      await _0x39515f.bot.sendMessage(_0x39515f.jid, {
        'video': fs.readFileSync('./temp/mp4enhance.mp4'),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync('./temp/mp4enhance.mp4');
      } catch (_0x10273b) {}
    });
  } catch (_0x428ada) {
    return await _0x39515f.error(_0x428ada + "\n\n command: mp4enhance", _0x428ada, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp4blur",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x3f7a49 => {
  try {
    if (!_0x3f7a49.reply_message.video) {
      return await _0x3f7a49.send("*Need Video!*");
    }
    var _0xae3ba1 = await _0x3f7a49.bot.downloadAndSaveMediaMessage(_0x3f7a49.quoted.msg);
    ffmpeg(_0xae3ba1).outputOptions(['-y', "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"]).save("./temp/mp4blur.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0xae3ba1);
      } catch (_0x1656f1) {}
      await _0x3f7a49.bot.sendMessage(_0x3f7a49.jid, {
        'video': fs.readFileSync("./temp/mp4blur.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4blur.mp4");
      } catch (_0x33ebed) {}
    });
  } catch (_0xd0106f) {
    return await _0x3f7a49.error(_0xd0106f + "\n\n command: mp4blur", _0xd0106f, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp4edge",
  'alias': ["tea", "kofi"],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x503396 => {
  try {
    if (!_0x503396.reply_message.video) {
      return await _0x503396.send("*Need Video!*");
    }
    var _0x406332 = await _0x503396.bot.downloadAndSaveMediaMessage(_0x503396.quoted.msg);
    ffmpeg(_0x406332).outputOptions(['-y', "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"]).format('mp4').save("./temp/mp4edge.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x406332);
      } catch (_0x58ed44) {}
      await _0x503396.bot.sendMessage(_0x503396.jid, {
        'video': fs.readFileSync("./temp/mp4edge.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4edge.mp4");
      } catch (_0x56a86c) {}
    });
  } catch (_0x3b0bb5) {
    return await _0x503396.error(_0x3b0bb5 + "\n\n command: mp4edge", _0x3b0bb5, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "gif2",
  'alias': ["tea", 'kofi'],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x5d9d6e => {
  try {
    if (!_0x5d9d6e.reply_message.video) {
      return await _0x5d9d6e.send("*Need Video!*");
    }
    var _0x4f68b4 = await _0x5d9d6e.bot.downloadAndSaveMediaMessage(_0x5d9d6e.quoted.msg);
    console.log("checking location : ", _0x4f68b4);
    ffmpeg(_0x4f68b4).noAudio().fps(0xd).videoBitrate(0x1f4).save("./temp/gif.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x4f68b4);
      } catch (_0x21910e) {}
      await _0x5d9d6e.sendMessage(_0x5d9d6e.jid, {
        'video': fs.readFileSync("./temp/gif.mp4"),
        'caption': Config.caption,
        'gifplayback': true
      });
      try {
        fs.unlinkSync("./temp/gif.mp4");
      } catch (_0x3bac1d) {}
    });
  } catch (_0x48a430) {
    return await _0x5d9d6e.error(_0x48a430 + "\n\n command: gif", _0x48a430, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "agif",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x449f47 => {
  try {
    if (!_0x449f47.reply_message.video) {
      return await _0x449f47.send("*Need Video!*");
    }
    var _0x46e29e = await _0x449f47.bot.downloadAndSaveMediaMessage(_0x449f47.quoted.msg);
    console.log("checking location : ", _0x46e29e);
    ffmpeg(_0x46e29e).fps(0xd).videoBitrate(0x1f4).save("./temp/agif.mp4").on('end', async () => {
      try {
        fs.unlinkSync(_0x46e29e);
      } catch (_0xe02586) {}
      await _0x449f47.sendMessage(_0x449f47.jid, {
        'video': fs.readFileSync("./temp/agif.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/agif.mp4");
      } catch (_0x44e047) {}
    });
  } catch (_0xfe01bc) {
    return await _0x449f47.error(_0xfe01bc + "\n\n command: agif", _0xfe01bc, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'mp4rainbow',
  'alias': ['tea', 'kofi'],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x52c137 => {
  try {
    if (!_0x52c137.reply_message.Video) {
      return await _0x52c137.send("*Need Video!*");
    }
    var _0x261075 = await _0x52c137.bot.downloadAndSaveMediaMessage(_0x52c137.quoted.msg);
    console.log("checking location : ", _0x261075);
    ffmpeg(_0x261075).outputOptions(['-y', "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"]).videoFilters("eq=brightness=0.5").save("./temp/mp4rainbow.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x261075);
      } catch (_0x4eee9e) {}
      await _0x52c137.sendMessage(_0x52c137.jid, {
        'video': fs.readFileSync("./temp/mp4rainbow.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4rainbow.mp4");
      } catch (_0xd73cc6) {}
    });
  } catch (_0x2b5912) {
    return await _0x52c137.error(_0x2b5912 + "\n\n command: mp4rainbow", _0x2b5912, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp4negative",
  'alias': ["tea", 'kofi'],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x22214d => {
  try {
    if (!_0x22214d.reply_message.Video) {
      return await _0x22214d.send("*Need Video!*");
    }
    var _0x30816d = await _0x22214d.bot.downloadAndSaveMediaMessage(_0x22214d.quoted.msg);
    console.log("checking location : ", _0x30816d);
    ffmpeg(_0x30816d).outputOptions(['-y', "-vf", "curves=color_negative,format=yuv420p"]).format("mp4").save("./temp/mp4negative.mp4").on('end', async () => {
      try {
        fs.unlinkSync(_0x30816d);
      } catch (_0x43568f) {}
      await _0x22214d.sendMessage(_0x22214d.jid, {
        'video': fs.readFileSync("./temp/mp4negative.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4negative.mp4");
      } catch (_0x26e2a7) {}
    });
  } catch (_0x102110) {
    return await _0x22214d.error(_0x102110 + "\n\n command: mp4negative", _0x102110, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp4art",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x5097b3 => {
  try {
    if (!_0x5097b3.reply_message.Video) {
      return await _0x5097b3.send("*Need Video!*");
    }
    var _0x413035 = await _0x5097b3.bot.downloadAndSaveMediaMessage(_0x5097b3.quoted.msg);
    console.log("checking location : ", _0x413035);
    ffmpeg(_0x413035).outputOptions(['-y', "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"]).format("mp4").save("./temp/mp4art.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x413035);
      } catch (_0x189a2e) {}
      await _0x5097b3.sendMessage(_0x5097b3.jid, {
        'video': fs.readFileSync("./temp/mp4art.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4art.mp4");
      } catch (_0x20402f) {}
    });
  } catch (_0x1f14c3) {
    return await _0x5097b3.error(_0x1f14c3 + "\n\n command: mp4art", _0x1f14c3, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'mp4stab',
  'alias': ["tea", 'kofi'],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x4a6db0 => {
  try {
    if (!_0x4a6db0.reply_message.Video) {
      return await _0x4a6db0.send("*Need Video!*");
    }
    var _0x59ce8a = await _0x4a6db0.bot.downloadAndSaveMediaMessage(_0x4a6db0.quoted.msg);
    console.log("checking location : ", _0x59ce8a);
    ffmpeg(_0x59ce8a).outputOptions(['-y', "-vf", "deshake,format=yuv420p"]).format("mp4").save("./temp/mp4stab.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x59ce8a);
      } catch (_0x2c7c1c) {}
      await _0x4a6db0.sendMessage(_0x4a6db0.jid, {
        'video': fs.readFileSync("./temp/mp4stab.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4stab.mp4");
      } catch (_0x3b699c) {}
    });
  } catch (_0x24a885) {
    return await _0x4a6db0.error(_0x24a885 + "\n\n command: mp4stab", _0x24a885, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'mp4color',
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x1e1085 => {
  try {
    if (!_0x1e1085.reply_message.Video) {
      return await _0x1e1085.send("*Need Video!*");
    }
    var _0x2bff29 = await _0x1e1085.bot.downloadAndSaveMediaMessage(_0x1e1085.quoted.msg);
    console.log("checking location : ", _0x2bff29);
    ffmpeg(_0x2bff29).outputOptions(['-y', "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"]).format("mp4").save("./temp/mp4color.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x2bff29);
      } catch (_0x2a2ae3) {}
      await _0x1e1085.sendMessage(_0x1e1085.jid, {
        'video': fs.readFileSync("./temp/mp4color.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4color.mp4");
      } catch (_0x26b90a) {}
    });
  } catch (_0x5b6731) {
    return await _0x1e1085.error(_0x5b6731 + "\n\n command: mp4color", _0x5b6731, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp4slowmo",
  'alias': ["tea", 'kofi'],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x339257 => {
  try {
    if (!_0x339257.reply_message.Video) {
      return await _0x339257.send("*Need Video!*");
    }
    var _0x3a3c4b = await _0x339257.bot.downloadAndSaveMediaMessage(_0x339257.quoted.msg);
    console.log("checking location : ", _0x3a3c4b);
    ffmpeg(_0x3a3c4b).videoFilters("minterpolate=fps=120").videoFilters("setpts=4*PTS").format("mp4").save("./temp/mp4slowmo.mp4").on("end", async () => {
      try {
        fs.unlinkSync(_0x3a3c4b);
      } catch (_0x3bacfa) {}
      await _0x339257.sendMessage(_0x339257.jid, {
        'video': fs.readFileSync("./temp/mp4slowmo.mp4"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/mp4slowmo.mp4");
      } catch (_0x2feb24) {}
    });
  } catch (_0x21c9cf) {
    return await _0x339257.error(_0x21c9cf + "\n\n command: mp4slowmo", _0x21c9cf, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'mp3volume',
  'alias': ["tea", 'kofi'],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x4c1b74 => {
  try {
    if (!_0x4c1b74.reply_message.audio) {
      return await _0x4c1b74.sendMessage("*Need Audio!*");
    }
    var _0x502ea0 = await _0x4c1b74.bot.downloadAndSaveMediaMessage(_0x4c1b74.quoted.msg);
    ffmpeg(_0x502ea0).outputOptions(['-y', "-filter:a", "volume=5.3"]).save("./temp/mp3volume.mp3").on("end", async () => {
      await _0x4c1b74.bot.sendMessage(_0x4c1b74.jid, {
        'audio': fs.readFileSync("./temp/mp3volume.mp3"),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x502ea0);
      } catch (_0x238770) {}
      try {
        fs.unlinkSync("./temp/mp3volume.mp3");
      } catch (_0x90a8e6) {}
    });
  } catch (_0x4a7e39) {
    return await _0x4c1b74.error(_0x4a7e39 + "\n\n command: mp3volume", _0x4a7e39, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp3reverse",
  'alias': ['tea', "kofi"],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x2c3ab3 => {
  try {
    if (!_0x2c3ab3.reply_message.audio) {
      return await _0x2c3ab3.sendMessage("*Need Audio!*");
    }
    var _0x193e8a = await _0x2c3ab3.bot.downloadAndSaveMediaMessage(_0x2c3ab3.quoted.msg);
    ffmpeg(_0x193e8a).outputOptions(['-y', "-filter_complex", "areverse"]).save('./temp/mp3reverse.mp3').on("end", async () => {
      await _0x2c3ab3.bot.sendMessage(_0x2c3ab3.jid, {
        'audio': fs.readFileSync('./temp/mp3reverse.mp3'),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x193e8a);
      } catch (_0x3f86cf) {}
      try {
        fs.unlinkSync('./temp/mp3reverse.mp3');
      } catch (_0x2ee3d9) {}
    });
  } catch (_0x2ac26b) {
    return await _0x2c3ab3.error(_0x2ac26b + "\n\n command: mp3reverse", _0x2ac26b, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "x2mp3",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x5bbcce => {
  try {
    if (!_0x5bbcce.reply_message.audio) {
      return await _0x5bbcce.sendMessage("*Need Audio!*");
    }
    var _0x2fcaa7 = await _0x5bbcce.bot.downloadAndSaveMediaMessage(_0x5bbcce.quoted.msg);
    ffmpeg(_0x2fcaa7).outputOptions(['-y', "-filter:a", "atempo=2.0", "-vn"]).save("./temp/x2mp3.mp3").on("end", async () => {
      await _0x5bbcce.bot.sendMessage(_0x5bbcce.jid, {
        'audio': fs.readFileSync("./temp/x2mp3.mp3"),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x2fcaa7);
      } catch (_0x3b1542) {}
      try {
        fs.unlinkSync("./temp/x2mp3.mp3");
      } catch (_0x5cc9f7) {}
    });
  } catch (_0xb499c0) {
    return await _0x5bbcce.error(_0xb499c0 + "\n\n command: x2mp3", _0xb499c0, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp3low",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x53b4c6 => {
  try {
    if (!_0x53b4c6.reply_message.audio) {
      return await _0x53b4c6.sendMessage("*Need Audio!*");
    }
    var _0x5af160 = await _0x53b4c6.bot.downloadAndSaveMediaMessage(_0x53b4c6.quoted.msg);
    ffmpeg(_0x5af160).outputOptions(['-y', "-af", "asetrate=44100*0.9"]).save("./temp/mp3low.mp3").on("end", async () => {
      await _0x53b4c6.bot.sendMessage(_0x53b4c6.jid, {
        'audio': fs.readFileSync("./temp/mp3low.mp3"),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x5af160);
      } catch (_0x1477b8) {}
      try {
        fs.unlinkSync("./temp/mp3low.mp3");
      } catch (_0x5b37a9) {}
    });
  } catch (_0x881dc4) {
    return await _0x53b4c6.error(_0x881dc4 + "\n\n command: mp3low", _0x881dc4, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp3pitch",
  'alias': ["tea", "kofi"],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x580ef7 => {
  try {
    if (!_0x580ef7.reply_message.audio) {
      return await _0x580ef7.sendMessage("*Need Audio!*");
    }
    var _0x42d4b7 = await _0x580ef7.bot.downloadAndSaveMediaMessage(_0x580ef7.quoted.msg);
    ffmpeg(_0x42d4b7).outputOptions(['-y', "-af", "asetrate=44100*1.3"]).save("./temp/mp3pitch.mp3").on('end', async () => {
      await _0x580ef7.bot.sendMessage(_0x580ef7.jid, {
        'audio': fs.readFileSync("./temp/mp3pitch.mp3"),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x42d4b7);
      } catch (_0x350ab4) {}
      try {
        fs.unlinkSync("./temp/mp3pitch.mp3");
      } catch (_0x424325) {}
    });
  } catch (_0x13c669) {
    return await _0x580ef7.error(_0x13c669 + "\n\n command: mp3pitch", _0x13c669, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp3crusher",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x2682cc => {
  try {
    if (!_0x2682cc.reply_message.audio) {
      return await _0x2682cc.sendMessage("*Need Audio!*");
    }
    var _0x3d7939 = await _0x2682cc.bot.downloadAndSaveMediaMessage(_0x2682cc.quoted.msg);
    ffmpeg(_0x3d7939).outputOptions(['-y', "-filter_complex", 'acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1']).save('./temp/mp3crusher.mp3').on("end", async () => {
      await _0x2682cc.bot.sendMessage(_0x2682cc.jid, {
        'audio': fs.readFileSync('./temp/mp3crusher.mp3'),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x3d7939);
      } catch (_0x27eb8c) {}
      try {
        fs.unlinkSync('./temp/mp3crusher.mp3');
      } catch (_0x10f7c9) {}
    });
  } catch (_0x55a537) {
    return await _0x2682cc.error(_0x55a537 + "\n\n command: mp3crusher", _0x55a537, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp3eq",
  'alias': ['tea', "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x445c2c => {
  try {
    if (!_0x445c2c.reply_message.audio) {
      return await _0x445c2c.sendMessage("*Need Audio!*");
    }
    var _0x1a2959 = await _0x445c2c.bot.downloadAndSaveMediaMessage(_0x445c2c.quoted.msg);
    ffmpeg(_0x1a2959).outputOptions(['-y', "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"]).save('./temp/mp3eq.mp3').on("end", async () => {
      await _0x445c2c.bot.sendMessage(_0x445c2c.jid, {
        'audio': fs.readFileSync('./temp/mp3eq.mp3'),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x1a2959);
      } catch (_0x40d3e5) {}
      try {
        fs.unlinkSync('./temp/mp3eq.mp3');
      } catch (_0x27317e) {}
    });
  } catch (_0x445f89) {
    return await _0x445c2c.error(_0x445f89 + "\n\n command: mp3eq", _0x445f89, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "mp3bass",
  'alias': ["tea", "kofi"],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x349df5 => {
  try {
    if (!_0x349df5.reply_message.audio) {
      return await _0x349df5.sendMessage("*Need Audio!*");
    }
    var _0x171662 = await _0x349df5.bot.downloadAndSaveMediaMessage(_0x349df5.quoted.msg);
    ffmpeg(_0x171662).outputOptions(['-y', "-filter:a", 'bass=g=9:f=110:w=0.6']).save("./temp/mp3bass.mp3").on("end", async () => {
      await _0x349df5.bot.sendMessage(_0x349df5.jid, {
        'audio': fs.readFileSync("./temp/mp3bass.mp3"),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x171662);
      } catch (_0x4608ed) {}
      try {
        fs.unlinkSync("./temp/mp3bass.mp3");
      } catch (_0x7f768c) {}
    });
  } catch (_0x5b48b0) {
    return await _0x349df5.error(_0x5b48b0 + "\n\n command: mp3bass", _0x5b48b0, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "waves",
  'alias': ['tea', "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x3f5704 => {
  try {
    if (!_0x3f5704.reply_message.audio) {
      return await _0x3f5704.sendMessage("*Need Audio!*");
    }
    var _0x4b9b75 = await _0x3f5704.bot.downloadAndSaveMediaMessage(_0x3f5704.quoted.msg);
    ffmpeg(_0x4b9b75).outputOptions(['-y', "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"]).save("./temp/waves.mp4").on('end', async () => {
      await _0x3f5704.bot.sendMessage(_0x3f5704.jid, {
        'video': fs.readFileSync("./temp/waves.mp4"),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x4b9b75);
      } catch (_0x573342) {}
      try {
        fs.unlinkSync("./temp/waves.mp4");
      } catch (_0x4faf65) {}
    });
  } catch (_0x42cc4e) {
    return await _0x3f5704.error(_0x42cc4e + "\n\n command: waves", _0x42cc4e, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'frequency',
  'alias': ["tea", "kofi"],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x16c816 => {
  try {
    if (!_0x16c816.reply_message.audio) {
      return await _0x16c816.sendMessage("*Need Audio!*");
    }
    var _0x5b5ae4 = await _0x16c816.bot.downloadAndSaveMediaMessage(_0x16c816.quoted.msg);
    ffmpeg(_0x5b5ae4).outputOptions(['-y', "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"]).save("./temp/frequency.mp4").on('end', async () => {
      await _0x16c816.bot.sendMessage(_0x16c816.jid, {
        'video': fs.readFileSync("./temp/frequency.mp4"),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x5b5ae4);
      } catch (_0x53219b) {}
      try {
        fs.unlinkSync("./temp/frequency.mp4");
      } catch (_0xeb7a47) {}
    });
  } catch (_0x86b5a9) {
    return await _0x16c816.error(_0x86b5a9 + "\n\n command: frequency", _0x86b5a9, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "avec",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x910ada => {
  try {
    if (!_0x910ada.reply_message.audio) {
      return await _0x910ada.sendMessage("*Need Audio!*");
    }
    var _0x486fe9 = await _0x910ada.bot.downloadAndSaveMediaMessage(_0x910ada.quoted.msg);
    ffmpeg(_0x486fe9).outputOptions(['-y', '-filter_complex', "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"]).save("./temp/avec.mp4").on("end", async () => {
      await _0x910ada.bot.sendMessage(_0x910ada.jid, {
        'video': fs.readFileSync("./temp/avec.mp4"),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x486fe9);
      } catch (_0x50029f) {}
      try {
        fs.unlinkSync("./temp/avec.mp4");
      } catch (_0x443b30) {}
    });
  } catch (_0x4f9a8c) {
    return await _0x910ada.error(_0x4f9a8c + "\n\n command: avec", _0x4f9a8c, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "volumeaudio",
  'alias': ["tea", "kofi"],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x58f9ba => {
  try {
    if (!_0x58f9ba.reply_message.audio) {
      return await _0x58f9ba.sendMessage("*Need Audio!*");
    }
    var _0x1ba511 = await _0x58f9ba.bot.downloadAndSaveMediaMessage(_0x58f9ba.quoted.msg);
    ffmpeg(_0x1ba511).outputOptions(['-y', "-filter_complex", '[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]', "-map", "[vid]", "-map 0:a"]).save("./temp/volumeaudio.mp4").on("end", async () => {
      await _0x58f9ba.bot.sendMessage(_0x58f9ba.jid, {
        'video': fs.readFileSync("./temp/volumeaudio.mp4"),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x1ba511);
      } catch (_0x33c815) {}
      try {
        fs.unlinkSync("./temp/volumeaudio.mp4");
      } catch (_0x41a9a7) {}
    });
  } catch (_0x24cae1) {
    return await _0x58f9ba.error(_0x24cae1 + "\n\n command: volumeaudio", _0x24cae1, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "cqtaudio",
  'alias': ['tea', "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x22571e => {
  try {
    if (!_0x22571e.reply_message.audio) {
      return await _0x22571e.sendMessage("*Need Audio!*");
    }
    var _0x33a71e = await _0x22571e.bot.downloadAndSaveMediaMessage(_0x22571e.quoted.msg);
    ffmpeg(_0x33a71e).outputOptions(['-y', "-filter_complex", '[0:a]showcqt=s=1280x720,format=yuv420p[v]', "-map", "[v]", "-map 0:a"]).save("./temp/cqtaudio.mp4").on("end", async () => {
      await _0x22571e.bot.sendMessage(_0x22571e.jid, {
        'video': fs.readFileSync("./temp/cqtaudio.mp4"),
        'caption': Config.caption,
        'ptt': false
      });
      try {
        fs.unlinkSync(_0x33a71e);
      } catch (_0x467959) {}
      try {
        fs.unlinkSync("./temp/cqtaudio.mp4");
      } catch (_0x515e12) {}
    });
  } catch (_0x25c648) {
    return await _0x22571e.error(_0x25c648 + "\n\n command: cqtaudio", _0x25c648, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "bwimage",
  'alias': ["tea", 'kofi'],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x321055 => {
  try {
    if (!_0x321055.reply_message.video) {
      return await _0x321055.send("*Need Video!*");
    }
    var _0x37e628 = await _0x321055.bot.downloadAndSaveMediaMessage(_0x321055.quoted.msg);
    ffmpeg(_0x37e628).outputOptions(['-y', "-vf", "hue=s=0"]).save("./temp/bwimage.png").on('end', async () => {
      try {
        fs.unlinkSync(_0x37e628);
      } catch (_0x3fa0fd) {}
      await _0x321055.bot.sendMessage(_0x321055.jid, {
        'image': fs.readFileSync("./temp/bwimage.png"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/bwimage.png");
      } catch (_0x418727) {}
    });
  } catch (_0x3f3ee1) {
    return await _0x321055.error(_0x3f3ee1 + "\n\n command: bwimage", _0x3f3ee1, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "vintageimage",
  'alias': ["tea", 'kofi'],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x10429b => {
  try {
    if (!_0x10429b.reply_message.video) {
      return await _0x10429b.send("*Need Video!*");
    }
    var _0x4fb216 = await _0x10429b.bot.downloadAndSaveMediaMessage(_0x10429b.quoted.msg);
    ffmpeg(_0x4fb216).outputOptions(['-y', "-vf", 'curves=vintage']).save("./temp/vintageimage.png").on("end", async () => {
      try {
        fs.unlinkSync(_0x4fb216);
      } catch (_0x49a279) {}
      await _0x10429b.bot.sendMessage(_0x10429b.jid, {
        'image': fs.readFileSync("./temp/vintageimage.png"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/vintageimage.png");
      } catch (_0x428175) {}
    });
  } catch (_0x4728ec) {
    return await _0x10429b.error(_0x4728ec + "\n\n command: vintageimage", _0x4728ec, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "blurimage",
  'alias': ["tea", "kofi"],
  'category': 'media',
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x28d829 => {
  try {
    if (!_0x28d829.reply_message.video) {
      return await _0x28d829.send("*Need Video!*");
    }
    var _0x3e563c = await _0x28d829.bot.downloadAndSaveMediaMessage(_0x28d829.quoted.msg);
    ffmpeg(_0x3e563c).outputOptions(['-y', '-vf', 'split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2']).save("./temp/blurimage.png").on("end", async () => {
      try {
        fs.unlinkSync(_0x3e563c);
      } catch (_0x350eb0) {}
      await _0x28d829.bot.sendMessage(_0x28d829.jid, {
        'image': fs.readFileSync("./temp/blurimage.png"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/blurimage.png");
      } catch (_0x6df7d6) {}
    });
  } catch (_0x46f937) {
    return await _0x28d829.error(_0x46f937 + "\n\n command: blurimage", _0x46f937, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'edgeimage',
  'alias': ['tea', "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x3b59eb => {
  try {
    if (!_0x3b59eb.reply_message.video) {
      return await _0x3b59eb.send("*Need Video!*");
    }
    var _0x4be916 = await _0x3b59eb.bot.downloadAndSaveMediaMessage(_0x3b59eb.quoted.msg);
    ffmpeg(_0x4be916).outputOptions(['-y', '-filter:v', 'edgedetect=low=0.9:high=0.2']).save("./temp/edgeimage.png").on('end', async () => {
      try {
        fs.unlinkSync(_0x4be916);
      } catch (_0x19b761) {}
      await _0x3b59eb.bot.sendMessage(_0x3b59eb.jid, {
        'image': fs.readFileSync("./temp/edgeimage.png"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/edgeimage.png");
      } catch (_0x46634a) {}
    });
  } catch (_0x38a978) {
    return await _0x3b59eb.error(_0x38a978 + "\n\n command: edgeimage", _0x38a978, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "enhanceimage",
  'alias': ["tea", 'kofi'],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x3a38dc => {
  try {
    if (!_0x3a38dc.reply_message.video) {
      return await _0x3a38dc.send("*Need Video!*");
    }
    var _0x4004ea = await _0x3a38dc.bot.downloadAndSaveMediaMessage(_0x3a38dc.quoted.msg);
    ffmpeg(_0x4004ea).outputOptions(['-y', '-vf', "unsharp=3:3:1.5"]).save("./temp/enhanceimage.png").on("end", async () => {
      try {
        fs.unlinkSync(_0x4004ea);
      } catch (_0x236f64) {}
      await _0x3a38dc.bot.sendMessage(_0x3a38dc.jid, {
        'image': fs.readFileSync("./temp/enhanceimage.png"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/enhanceimage.png");
      } catch (_0xc1c139) {}
    });
  } catch (_0x401256) {
    return await _0x3a38dc.error(_0x401256 + "\n\n command: enhanceimage", _0x401256, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "grenimage",
  'alias': ['tea', "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x4273e0 => {
  try {
    if (!_0x4273e0.reply_message.video) {
      return await _0x4273e0.send("*Need Video!*");
    }
    var _0x283717 = await _0x4273e0.bot.downloadAndSaveMediaMessage(_0x4273e0.quoted.msg);
    ffmpeg(_0x283717).videoFilters("noise=alls=100:allf=t+u").save("./temp/grenimage.png").on("end", async () => {
      try {
        fs.unlinkSync(_0x283717);
      } catch (_0x58f130) {}
      await _0x4273e0.bot.sendMessage(_0x4273e0.jid, {
        'image': fs.readFileSync("./temp/grenimage.png"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/grenimage.png");
      } catch (_0x2fac20) {}
    });
  } catch (_0x17edf0) {
    return await _0x4273e0.error(_0x17edf0 + "\n\n command: grenimage", _0x17edf0, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'rainbowimage',
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x45499b => {
  try {
    if (!_0x45499b.reply_message.video) {
      return await _0x45499b.send("*Need Video!*");
    }
    var _0x17578f = await _0x45499b.bot.downloadAndSaveMediaMessage(_0x45499b.quoted.msg);
    ffmpeg(_0x17578f).outputOptions(['-y', "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"]).videoFilters("eq=brightness=0.6").save("./temp/rainbowimage.png").on("end", async () => {
      try {
        fs.unlinkSync(_0x17578f);
      } catch (_0x378366) {}
      await _0x45499b.bot.sendMessage(_0x45499b.jid, {
        'image': fs.readFileSync("./temp/rainbowimage.png"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/rainbowimage.png");
      } catch (_0x5a66dc) {}
    });
  } catch (_0x45936d) {
    return await _0x45499b.error(_0x45936d + "\n\n command: rainbowimage", _0x45936d, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "negativeimage",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x288ba2 => {
  try {
    if (!_0x288ba2.reply_message.image) {
      return await _0x288ba2.send("*Need imagge!*");
    }
    var _0x5f240b = await _0x288ba2.bot.downloadAndSaveMediaMessage(_0x288ba2.quoted.msg);
    ffmpeg(_0x5f240b).outputOptions(['-y', "-vf", "curves=color_negative"]).save("./temp/negativeimage.png").on("end", async () => {
      try {
        fs.unlinkSync(_0x5f240b);
      } catch (_0x398096) {}
      await _0x288ba2.bot.sendMessage(_0x288ba2.jid, {
        'image': fs.readFileSync("./temp/negativeimage.png"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/negativeimage.png");
      } catch (_0x1cf495) {}
    });
  } catch (_0x3f6ce2) {
    return await _0x288ba2.error(_0x3f6ce2 + "\n\n command: negativeimage", _0x3f6ce2, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': "artimage",
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x4e64a0 => {
  try {
    if (!_0x4e64a0.reply_message.image) {
      return await _0x4e64a0.send("*Need imagge!*");
    }
    var _0xbb927a = await _0x4e64a0.bot.downloadAndSaveMediaMessage(_0x4e64a0.quoted.msg);
    ffmpeg(_0xbb927a).outputOptions(['-y', '-vf', "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"]).save("./temp/artimage.png").on("end", async () => {
      try {
        fs.unlinkSync(_0xbb927a);
      } catch (_0x4574e9) {}
      await _0x4e64a0.bot.sendMessage(_0x4e64a0.jid, {
        'image': fs.readFileSync("./temp/artimage.png"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/artimage.png");
      } catch (_0x3854df) {}
    });
  } catch (_0x16598c) {
    return await _0x4e64a0.error(_0x16598c + "\n\n command: artimage", _0x16598c, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'colorimage',
  'alias': ["tea", "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async _0x5a8967 => {
  try {
    if (!_0x5a8967.reply_message.image) {
      return await _0x5a8967.send("*Need imagge!*");
    }
    var _0x395b94 = await _0x5a8967.bot.downloadAndSaveMediaMessage(_0x5a8967.quoted.msg);
    ffmpeg(_0x395b94).outputOptions(['-y', '-vf', 'eq=contrast=1.3:saturation=1.5:brightness=-0.1']).save("./temp/colorimage.png").on("end", async () => {
      try {
        fs.unlinkSync(_0x395b94);
      } catch (_0x4823c1) {}
      await _0x5a8967.bot.sendMessage(_0x5a8967.jid, {
        'image': fs.readFileSync("./temp/colorimage.png"),
        'caption': Config.caption
      });
      try {
        fs.unlinkSync("./temp/colorimage.png");
      } catch (_0x1d3772) {}
    });
  } catch (_0x24c572) {
    return await _0x5a8967.error(_0x24c572 + "\n\n command: colorimage", _0x24c572, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'imterp',
  'alias': ['tea', "kofi"],
  'category': "media",
  'desc': "Finds info about song",
  'filename': __filename
}, async (_0x3047be, _0x49bcda) => {
  _0x49bcda = _0x49bcda.split(" ");
  _0x49bcda[0x1] = _0x49bcda[0x0];
  if (!_0x3047be.reply_message && _0x49bcda[0x1] === '') {
    return await _0x3047be.send("*Need Video and FPS Value!*\nEx: ```.interp 100```");
  }
  if (_0x49bcda[0x1] <= 0xa) {
    return await _0x3047be.send("*Low FPS Value ⚠️*\n*Please, type over 10*");
  }
  if (_0x49bcda[0x1] >= 0x1f4) {
    return await _0x3047be.send("*High FPS Value ⚠️*\n*Please, type under 500*");
  }
  await _0x3047be.send("```Interpolating..```");
  var _0x19d4b9 = await _0x3047be.bot.downloadAndSaveMediaMessage(_0x3047be.quoted.msg);
  exec("ffprobe -hide_banner -loglevel fatal -show_error -show_format -show_streams -show_programs -show_chapters -show_private_data -print_format json " + _0x19d4b9, async (_0x4c693c, _0x43d9bb, _0x4f1085) => {
    var _0x1b58fc = JSON.parse(_0x43d9bb);
    var _0x31f52c = {
      'value': 0x64
    };
    var _0x19acc3 = {
      'time': 0x1
    };
    if (_0x1b58fc.format.size / 0xf4240 > 0x0 && _0x1b58fc.format.size / 0xf4240 < 0x6) {
      _0x31f52c.value = 98;
      _0x19acc3.time = 2;
    }
    if (_0x1b58fc.format.size / 0xf4240 > 0x5 && _0x1b58fc.format.size / 0xf4240 < 0xb) {
      _0x31f52c.value = 95;
      _0x19acc3.time = 2.4;
    }
    if (_0x1b58fc.format.size / 0xf4240 > 0xa && _0x1b58fc.format.size / 0xf4240 < 0x15) {
      _0x31f52c.value = 91;
      _0x19acc3.time = 3;
    }
    if (_0x1b58fc.format.size / 0xf4240 > 0x14 && _0x1b58fc.format.size / 0xf4240 < 0x1f) {
      _0x31f52c.value = 75;
      _0x19acc3.time = 3.3;
    }
    if (_0x1b58fc.format.size / 0xf4240 > 0x1e) {
      _0x31f52c.value = 61;
      _0x19acc3.time = 10;
    }
    if (_0x1b58fc.streams[0x0].duration > 0x0 && _0x1b58fc.streams[0x0].duration < 0x15) {
      _0x31f52c.value = 96;
      _0x19acc3.time = 2;
    }
    if (_0x1b58fc.streams[0x0].duration > 0x14 && _0x1b58fc.streams[0x0].duration < 0x29) {
      _0x31f52c.value = 91;
      _0x19acc3.time = 2.4;
    }
    if (_0x1b58fc.streams[0x0].duration > 0x28 && _0x1b58fc.streams[0x0].duration < 0x3d) {
      _0x31f52c.value = 89;
      _0x19acc3.time = 3;
    }
    if (_0x1b58fc.streams[0x0].duration > 0x3c && _0x1b58fc.streams[0x0].duration < 0x51) {
      _0x31f52c.value = 85;
      _0x19acc3.time = 3.7;
    }
    if (_0x1b58fc.streams[0x0].duration > 0x50 && _0x1b58fc.streams[0x0].duration < 0x65) {
      _0x31f52c.value = 79;
      _0x19acc3.time = 4.4;
    }
    if (_0x1b58fc.streams[0x0].duration > 0x64 && _0x1b58fc.streams[0x0].duration < 0x79) {
      _0x31f52c.value = 73;
      _0x19acc3.time = 5;
    }
    if (_0x1b58fc.streams[0x0].duration > 0x78) {
      _0x31f52c.value = 61;
      _0x19acc3.time = 10;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x0 && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0xb) {
      _0x31f52c.value = 101;
      _0x19acc3.time = 0.4;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0xa && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x15) {
      _0x31f52c.value = 97;
      _0x19acc3.time = 2;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x14 && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x1f) {
      _0x31f52c.value = 81;
      _0x19acc3.time = 3.3;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x1e && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x29) {
      _0x31f52c.value = 69;
      _0x19acc3.time = 5.3;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x28) {
      _0x31f52c.value = 60;
      _0x19acc3.time = 10;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x9 && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x1f && _0x49bcda[0x1] > 0x27) {
      _0x19acc3.time = 4.3;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x1e && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x29 && _0x49bcda[0x1] > 0x27) {
      _0x19acc3.time = 6;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x1e && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x29 && _0x49bcda[0x1] > 0x31) {
      _0x19acc3.time = 6.4;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x1e && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x29 && _0x49bcda[0x1] > 0x3b) {
      _0x19acc3.time = 7;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x1e && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x29 && _0x49bcda[0x1] > 0x45) {
      _0x19acc3.time = 8.5;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x28 && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x3d && _0x49bcda[0x1] > 0x3b) {
      _0x19acc3.time = 10;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x28 && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x3d && _0x49bcda[0x1] > 0x40) {
      _0x19acc3.time = 10.2;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x28 && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x3d && _0x49bcda[0x1] > 0x45) {
      _0x19acc3.time = 10.5;
    }
    if (_0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] > 0x28 && _0x1b58fc.streams[0x0].r_frame_rate.split('/')[0x0] < 0x3d && _0x49bcda[0x1] > 0x4b) {
      _0x19acc3.time = 11;
    }
    await _0x3047be.send("_This process may take a while._\n_Envisaged Time:_ *1 Minute*\n_Success Rate:_ *100%*");
    var _0x3e611c = 0xa;
    ffmpeg(_0x19d4b9).videoFilters("minterpolate=fps=" + _0x49bcda[0x1] + ":mi_mode=mci:me_mode=bidir").format('mp4').save("output.mp4").on('progress', async _0x1a66c3 => {
      var _0x4e29b4 = _0x1a66c3.percent;
      while (_0x4e29b4 > 0xa && _0x3e611c == 0xa) {
        _0x3e611c = 0x1;
        await _0x3047be.send("*Completed %10!*");
      }
      while (_0x4e29b4 > 0x1e && _0x3e611c == 0x1) {
        _0x3e611c = 0x2;
        await _0x3047be.send("*Completed %30!*");
      }
      while (_0x4e29b4 > 0x32 && _0x3e611c == 0x2) {
        _0x3e611c = 0x3;
        await _0x3047be.send("*Completed %50!*");
      }
      while (_0x4e29b4 > 0x46 && _0x3e611c == 0x3) {
        _0x3e611c = 0x4;
        await _0x3047be.send("*Completed %70!*");
      }
      while (_0x4e29b4 > 0x5a && _0x3e611c == 0x4) {
        _0x3e611c = 0x5;
        await _0x3047be.send("*Preparing Video..*");
      }
    }).on('end', async () => {
      await _0x3047be.send(fs.readFileSync("output.mp4"), {
        'caption': "Made by ANITA\n_Interpolated to " + _0x49bcda[0x1] + " FPS_"
      }, "video");
    });
  });
});