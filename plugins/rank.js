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
} = require("../lib");
const Levels = require("discord-xp");
try {
  if (isMongodb) {
    Levels.setURL(mongodb);
  }
} catch {}
let utd = false;
smd({
  'pattern': 'levelup',
  'desc': "turn On/Off auto levelup",
  'fromMe': true,
  'category': "level",
  'use': "<on/off>",
  'filename': __filename
}, async (_0x3a63b8, _0x1bc064) => {
  try {
    if (!global.isMongodb) {
      return await _0x3a63b8.reply(_0x3a63b8.isCreator ? "*_Add MONGODB_URI to use these cmds_*" : "*_Please ask my Owner to add MONGODB_URI!_*");
    }
    let _0x80d1e6 = (await bot_.findOne({
      'id': 'bot_' + _0x3a63b8.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0x3a63b8.user
    }));
    let _0x45ab12 = _0x1bc064.toLowerCase().split()[0x0].trim();
    utd = true;
    if (_0x45ab12 === 'on' || _0x45ab12 === "enable" || _0x45ab12 === "act") {
      if (_0x80d1e6.levelup === 'true') {
        return await _0x3a63b8.reply("*levelup already enabled!*");
      }
      await bot_.updateOne({
        'id': "bot_" + _0x3a63b8.user
      }, {
        'levelup': 'true'
      });
      return await _0x3a63b8.reply("*levelup Succesfully enabled*");
    } else {
      if (_0x45ab12 === "off" || _0x45ab12 === "disable" || _0x45ab12 === "deact") {
        if (_0x80d1e6.levelup === "false") {
          return await _0x3a63b8.reply("*levelup already disabled*");
        }
        await bot_.updateOne({
          'id': "bot_" + _0x3a63b8.user
        }, {
          'levelup': "false"
        });
        return await _0x3a63b8.reply("*levelup Succesfully deactivated*");
      } else {
        return await _0x3a63b8.send("*_Use on/off to enable/disable levelup!_*");
      }
    }
  } catch (_0x5cf1d9) {
    await _0x3a63b8.error(_0x5cf1d9 + "\n\nCommand: levelup ", _0x5cf1d9);
  }
});
smd({
  'cmdname': "profile",
  'info': "Shows profile of user.",
  'type': "level",
  'use': "<@user>",
  'filename': __filename
}, async _0x1b6507 => {
  try {
    if (!global.isMongodb) {
      return await _0x1b6507.reply(_0x1b6507.isCreator ? "*_Add MONGODB_URI to use these cmds_*" : "*_Please ask my Owner to add MONGODB_URI!_*");
    }
    let _0x4ce12d = _0x1b6507.sender;
    if (_0x1b6507.isCreator) {
      _0x4ce12d = _0x1b6507.reply_message ? _0x1b6507.reply_message.sender : _0x1b6507.mentionedJid[0x0] ? _0x1b6507.mentionedJid[0x0] : _0x1b6507.sender || _0x1b6507.sender;
    }
    var _0x61b45b = await _0x1b6507.bot.fetchStatus(_0x4ce12d);
    var _0xbfb04f = _0x61b45b.status;
    const _0x312622 = await Levels.fetch(_0x4ce12d, "RandomXP");
    const _0xaa5a42 = _0x312622.level;
    var _0x2c9662 = "GOD✨";
    if (_0xaa5a42 <= 0x2) {
      var _0x2c9662 = "🏳Citizen";
    } else {
      if (_0xaa5a42 <= 0x4) {
        var _0x2c9662 = "👼Baby Wizard";
      } else {
        if (_0xaa5a42 <= 0x6) {
          var _0x2c9662 = '🧙‍♀️Wizard';
        } else {
          if (_0xaa5a42 <= 0x8) {
            var _0x2c9662 = "🧙‍♂️Wizard Lord";
          } else {
            if (_0xaa5a42 <= 0xa) {
              var _0x2c9662 = "🧚🏻Baby Mage";
            } else {
              if (_0xaa5a42 <= 0xc) {
                var _0x2c9662 = "🧜Mage";
              } else {
                if (_0xaa5a42 <= 0xe) {
                  var _0x2c9662 = "🧜‍♂️Master of Mage";
                } else {
                  if (_0xaa5a42 <= 0x10) {
                    var _0x2c9662 = "🌬Child of Nobel";
                  } else {
                    if (_0xaa5a42 <= 0x12) {
                      var _0x2c9662 = "❄Nobel";
                    } else {
                      if (_0xaa5a42 <= 0x14) {
                        var _0x2c9662 = "⚡Speed of Elite";
                      } else {
                        if (_0xaa5a42 <= 0x16) {
                          var _0x2c9662 = "🎭Elite";
                        } else {
                          if (_0xaa5a42 <= 0x18) {
                            var _0x2c9662 = "🥇Ace I";
                          } else {
                            if (_0xaa5a42 <= 0x1a) {
                              var _0x2c9662 = "🥈Ace II";
                            } else {
                              if (_0xaa5a42 <= 0x1c) {
                                var _0x2c9662 = "🥉Ace Master";
                              } else {
                                if (_0xaa5a42 <= 0x1e) {
                                  var _0x2c9662 = "🎖Ace Dominator";
                                } else {
                                  if (_0xaa5a42 <= 0x20) {
                                    var _0x2c9662 = "🏅Ace Elite";
                                  } else {
                                    if (_0xaa5a42 <= 0x22) {
                                      var _0x2c9662 = "🏆Ace Supreme";
                                    } else {
                                      if (_0xaa5a42 <= 0x24) {
                                        var _0x2c9662 = "💍Supreme I";
                                      } else {
                                        if (_0xaa5a42 <= 0x26) {
                                          var _0x2c9662 = "💎Supreme Ii";
                                        } else {
                                          if (_0xaa5a42 <= 0x28) {
                                            var _0x2c9662 = "🔮Supreme Master";
                                          } else {
                                            if (_0xaa5a42 <= 0x2a) {
                                              var _0x2c9662 = "🛡Legend III";
                                            } else {
                                              if (_0xaa5a42 <= 0x2c) {
                                                var _0x2c9662 = "🏹Legend II";
                                              } else {
                                                if (_0xaa5a42 <= 0x2e) {
                                                  var _0x2c9662 = "⚔Legend";
                                                } else {
                                                  if (_0xaa5a42 <= 0x37) {
                                                    var _0x2c9662 = "🐉Immortal";
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let _0x36ee8f = _0x312622.xp / 0x8;
    var _0x36db6f;
    try {
      _0x36db6f = await _0x1b6507.bot.profilePictureUrl(_0x4ce12d, "image");
    } catch {
      _0x36db6f = await botpic();
    }
    var _0x4f13a9;
    try {
      _0x4f13a9 = await _0x1b6507.bot.getName(_0x4ce12d);
    } catch {}
    const _0x52d0f5 = "\n*Hii " + _0x4f13a9 + ",*\n*Here is your profile information*\n*👤Username:* " + _0x4f13a9 + "\n*⚡Bio:* " + _0xbfb04f + "\n*🧩Role:* " + _0x2c9662 + "\n*🍁Level:* " + _0x312622.level + "\n*📥Total Messages* " + _0x36ee8f + "\n*Powered by " + tlang().title + "*\n";
    w;
    _0x1b6507.bot.sendMessage(_0x1b6507.chat, {
      'image': {
        'url': _0x36db6f
      },
      'caption': _0x52d0f5
    }, {
      'quoted': _0x1b6507
    });
  } catch (_0x1d1bd9) {
    await _0x1b6507.error(_0x1d1bd9 + "\n\ncommand: tagall", _0x1d1bd9, "*Can't fetch data,please check mongodb!!*");
  }
});
smd({
  'cmdname': "rank",
  'info': "Sends rank card of user.",
  'type': 'level',
  'use': '<@user>',
  'filename': __filename
}, async _0x3950d4 => {
  try {
    if (!global.isMongodb) {
      return await _0x3950d4.reply(_0x3950d4.isCreator ? "*_Please add MONGODB_URI to use this feature_*" : "*_Please ask my Owner to add MONGODB_URI!_*");
    }
    let _0x192feb = _0x3950d4.sender;
    if (_0x3950d4.isCreator) {
      _0x192feb = _0x3950d4.reply_message ? _0x3950d4.reply_message.sender : _0x3950d4.mentionedJid[0x0] ? _0x3950d4.mentionedJid[0x0] : _0x3950d4.sender || _0x3950d4.sender;
    }
    const _0x46cfc3 = await Levels.fetch(_0x192feb, 'RandomXP');
    const _0x157f5e = _0x46cfc3.level;
    var _0x350ad2 = "GOD✨";
    if (_0x157f5e <= 0x2) {
      var _0x350ad2 = "🏳Citizen";
    } else {
      if (_0x157f5e <= 0x4) {
        var _0x350ad2 = "👼Baby Wizard";
      } else {
        if (_0x157f5e <= 0x6) {
          var _0x350ad2 = "🧙‍♀️Wizard";
        } else {
          if (_0x157f5e <= 0x8) {
            var _0x350ad2 = "🧙‍♂️Wizard Lord";
          } else {
            if (_0x157f5e <= 0xa) {
              var _0x350ad2 = "🧚🏻Baby Mage";
            } else {
              if (_0x157f5e <= 0xc) {
                var _0x350ad2 = "🧜Mage";
              } else {
                if (_0x157f5e <= 0xe) {
                  var _0x350ad2 = "🧜‍♂️Master of Mage";
                } else {
                  if (_0x157f5e <= 0x10) {
                    var _0x350ad2 = "🌬Child of Nobel";
                  } else {
                    if (_0x157f5e <= 0x12) {
                      var _0x350ad2 = "❄Nobel";
                    } else {
                      if (_0x157f5e <= 0x14) {
                        var _0x350ad2 = "⚡Speed of Elite";
                      } else {
                        if (_0x157f5e <= 0x16) {
                          var _0x350ad2 = "🎭Elite";
                        } else {
                          if (_0x157f5e <= 0x18) {
                            var _0x350ad2 = "🥇Ace I";
                          } else {
                            if (_0x157f5e <= 0x1a) {
                              var _0x350ad2 = "🥈Ace II";
                            } else {
                              if (_0x157f5e <= 0x1c) {
                                var _0x350ad2 = "🥉Ace Master";
                              } else {
                                if (_0x157f5e <= 0x1e) {
                                  var _0x350ad2 = "🎖Ace Dominator";
                                } else {
                                  if (_0x157f5e <= 0x20) {
                                    var _0x350ad2 = "🏅Ace Elite";
                                  } else {
                                    if (_0x157f5e <= 0x22) {
                                      var _0x350ad2 = "🏆Ace Supreme";
                                    } else {
                                      if (_0x157f5e <= 0x24) {
                                        var _0x350ad2 = "💍Supreme I";
                                      } else {
                                        if (_0x157f5e <= 0x26) {
                                          var _0x350ad2 = "💎Supreme Ii";
                                        } else {
                                          if (_0x157f5e <= 0x28) {
                                            var _0x350ad2 = "🔮Supreme Master";
                                          } else {
                                            if (_0x157f5e <= 0x2a) {
                                              var _0x350ad2 = "🛡Legend III";
                                            } else {
                                              if (_0x157f5e <= 0x2c) {
                                                var _0x350ad2 = "🏹Legend II";
                                              } else {
                                                if (_0x157f5e <= 0x2e) {
                                                  var _0x350ad2 = "⚔Legend";
                                                } else {
                                                  if (_0x157f5e <= 0x37) {
                                                    var _0x350ad2 = "🐉Immortal";
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let _0x14fd2a = _0x192feb.substring(0x3, 0x7);
    var _0x23616a;
    try {
      _0x23616a = await _0x3950d4.bot.profilePictureUrl(_0x192feb, 'image');
    } catch {
      _0x23616a = THUMB_IMAGE;
    }
    var _0x56663f;
    try {
      _0x56663f = await _0x3950d4.bot.getName(_0x192feb);
    } catch {}
    let _0x279edb = _0x46cfc3.xp / 0x8;
    var _0xa998c6 = "*Hii " + tlang().greet + " ,🌟 " + (_0x56663f || "Sir_") + '∆' + _0x14fd2a + "'s* Exp\n\n\n*🌟Role*: " + _0x350ad2 + "\n*🟢Exp*: " + _0x46cfc3.xp + " / " + Levels.xpFor(_0x46cfc3.level + 0x1) + "\n*🏡Level*: " + _0x46cfc3.level + "\n*Total Messages:*- " + _0x279edb + "\n";
    await _0x3950d4.bot.sendMessage(_0x3950d4.chat, {
      'image': {
        'url': _0x23616a
      },
      'caption': _0xa998c6
    }, {
      'quoted': _0x3950d4
    });
  } catch (_0x1e648a) {
    await _0x3950d4.error(_0x1e648a + "\n\ncommand: leaderboard", _0x1e648a, "*Can't fetch data, make sure MONGODB_URI added!!*");
  }
});
smd({
  'cmdname': "leaderboard",
  'alias': ["deck"],
  'info': "To check leaderboard",
  'type': "level",
  'use': "<@user>",
  'filename': __filename
}, async _0x3c3c17 => {
  try {
    if (!global.isMongodb) {
      return await _0x3c3c17.reply(_0x3c3c17.isCreator ? "*_Add MONGODB_URI to use these cmds_*" : "*_Please ask my Owner to add MONGODB_URI!_*");
    }
    const _0x479873 = await Levels.fetchLeaderboard("RandomXP", 0x5);
    let _0x211c10 = "\n*-------------------------------*\n*----● LeaderBoard ● -----*\n*-------------------------------*\n\n\n";
    for (let _0x4bd5ee = 0x0; _0x4bd5ee < _0x479873.length; _0x4bd5ee++) {
      const _0x54a708 = _0x479873[_0x4bd5ee].level;
      var _0x5e70f2 = 'GOD✨';
      if (_0x54a708 <= 0x2) {
        var _0x5e70f2 = '🏳Citizen';
      } else {
        if (_0x54a708 <= 0x4) {
          var _0x5e70f2 = "👼Baby Wizard";
        } else {
          if (_0x54a708 <= 0x6) {
            var _0x5e70f2 = "🧙‍♀️Wizard";
          } else {
            if (_0x54a708 <= 0x8) {
              var _0x5e70f2 = "🧙‍♂️Wizard Lord";
            } else {
              if (_0x54a708 <= 0xa) {
                var _0x5e70f2 = "🧚🏻Baby Mage";
              } else {
                if (_0x54a708 <= 0xc) {
                  var _0x5e70f2 = '🧜Mage';
                } else {
                  if (_0x54a708 <= 0xe) {
                    var _0x5e70f2 = "🧜‍♂️Master of Mage";
                  } else {
                    if (_0x54a708 <= 0x10) {
                      var _0x5e70f2 = "🌬Child of Nobel";
                    } else {
                      if (_0x54a708 <= 0x12) {
                        var _0x5e70f2 = '❄Nobel';
                      } else {
                        if (_0x54a708 <= 0x14) {
                          var _0x5e70f2 = "⚡Speed of Elite";
                        } else {
                          if (_0x54a708 <= 0x16) {
                            var _0x5e70f2 = '🎭Elite';
                          } else {
                            if (_0x54a708 <= 0x18) {
                              var _0x5e70f2 = "🥇Ace I";
                            } else {
                              if (_0x54a708 <= 0x1a) {
                                var _0x5e70f2 = "🥈Ace II";
                              } else {
                                if (_0x54a708 <= 0x1c) {
                                  var _0x5e70f2 = "🥉Ace Master";
                                } else {
                                  if (_0x54a708 <= 0x1e) {
                                    var _0x5e70f2 = "🎖Ace Dominator";
                                  } else {
                                    if (_0x54a708 <= 0x20) {
                                      var _0x5e70f2 = "🏅Ace Elite";
                                    } else {
                                      if (_0x54a708 <= 0x22) {
                                        var _0x5e70f2 = "🏆Ace Supreme";
                                      } else {
                                        if (_0x54a708 <= 0x24) {
                                          var _0x5e70f2 = "💍Supreme I";
                                        } else {
                                          if (_0x54a708 <= 0x26) {
                                            var _0x5e70f2 = "💎Supreme Ii";
                                          } else {
                                            if (_0x54a708 <= 0x28) {
                                              var _0x5e70f2 = "🔮Supreme Master";
                                            } else {
                                              if (_0x54a708 <= 0x2a) {
                                                var _0x5e70f2 = "🛡Legend III";
                                              } else {
                                                if (_0x54a708 <= 0x2c) {
                                                  var _0x5e70f2 = "🏹Legend II";
                                                } else {
                                                  if (_0x54a708 <= 0x2e) {
                                                    var _0x5e70f2 = '⚔Legend';
                                                  } else {
                                                    if (_0x54a708 <= 0x37) {
                                                      var _0x5e70f2 = "🐉Immortal";
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      var _0x1d68cc;
      try {
        _0x1d68cc = await _0x3c3c17.bot.getName(_0x479873[_0x4bd5ee].userID);
      } catch {
        _0x1d68cc = _0x479873[_0x4bd5ee].userID?.["split"]('@')[0x0] || "Unknown";
      }
      _0x211c10 += '*' + (_0x4bd5ee + 0x1) + "●Name*: " + _0x1d68cc + "\n*●Level*: " + _0x479873[_0x4bd5ee].level + "\n*●Points*: " + _0x479873[_0x4bd5ee].xp + "\n*●Role*: " + _0x5e70f2 + "\n*●Total messages*: " + _0x479873[_0x4bd5ee].xp / 0x8 + "\n\n";
    }
    await _0x3c3c17.reply(_0x211c10);
  } catch (_0x525702) {
    await _0x3c3c17.error(_0x525702 + "\n\ncommand: leaderboard", _0x525702, "*Can't fetch data, make sure MONGODB_URI added!!*");
  }
});
smd({
  'on': "text"
}, async _0x30147d => {
  try {
    if (!bots || utd) {
      bots = await bot_.findOne({
        'id': 'bot_' + msg.user
      });
      utd = false;
    }
    if (!bots || !global.isMongodb) {
      return;
    }
    const _0xcc8fb = await Levels.appendXp(_0x30147d.sender, "RandomXP", 0x8);
    if (_0xcc8fb) {
      const _0x347e63 = await Levels.fetch(_0x30147d.sender, "RandomXP");
      const _0x46412b = _0x347e63.level;
      var _0xd20156 = "GOD";
      if (_0x46412b <= 0x2) {
        var _0xd20156 = '🏳Citizen';
      } else {
        if (_0x46412b <= 0x4) {
          var _0xd20156 = "👼Baby Wizard";
        } else {
          if (_0x46412b <= 0x6) {
            var _0xd20156 = "🧙‍♀️Wizard";
          } else {
            if (_0x46412b <= 0x8) {
              var _0xd20156 = "🧙‍♂️Wizard Lord";
            } else {
              if (_0x46412b <= 0xa) {
                var _0xd20156 = "🧚🏻Baby Mage";
              } else {
                if (_0x46412b <= 0xc) {
                  var _0xd20156 = "🧜Mage";
                } else {
                  if (_0x46412b <= 0xe) {
                    var _0xd20156 = "🧜‍♂️Master of Mage";
                  } else {
                    if (_0x46412b <= 0x10) {
                      var _0xd20156 = "🌬Child of Nobel";
                    } else {
                      if (_0x46412b <= 0x12) {
                        var _0xd20156 = "❄Nobel";
                      } else {
                        if (_0x46412b <= 0x14) {
                          var _0xd20156 = "⚡Speed of Elite";
                        } else {
                          if (_0x46412b <= 0x16) {
                            var _0xd20156 = "🎭Elite";
                          } else {
                            if (_0x46412b <= 0x18) {
                              var _0xd20156 = "🥇Ace I";
                            } else {
                              if (_0x46412b <= 0x1a) {
                                var _0xd20156 = "🥈Ace II";
                              } else {
                                if (_0x46412b <= 0x1c) {
                                  var _0xd20156 = "🥉Ace Master";
                                } else {
                                  if (_0x46412b <= 0x1e) {
                                    var _0xd20156 = "🎖Ace Dominator";
                                  } else {
                                    if (_0x46412b <= 0x20) {
                                      var _0xd20156 = "🏅Ace Elite";
                                    } else {
                                      if (_0x46412b <= 0x22) {
                                        var _0xd20156 = "🏆Ace Supreme";
                                      } else {
                                        if (_0x46412b <= 0x24) {
                                          var _0xd20156 = "💍Supreme I";
                                        } else {
                                          if (_0x46412b <= 0x26) {
                                            var _0xd20156 = "💎Supreme Ii";
                                          } else {
                                            if (_0x46412b <= 0x28) {
                                              var _0xd20156 = "🔮Supreme Master";
                                            } else {
                                              if (_0x46412b <= 0x2a) {
                                                var _0xd20156 = "🛡Legend III";
                                              } else {
                                                if (_0x46412b <= 0x2c) {
                                                  var _0xd20156 = "🏹Legend II";
                                                } else {
                                                  if (_0x46412b <= 0x2e) {
                                                    var _0xd20156 = "⚔Legend";
                                                  } else {
                                                    if (_0x46412b <= 0x37) {
                                                      var _0xd20156 = "🐉Immortal";
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (bots.levelup && bots.levelup === "true") {
        await _0x30147d.bot.sendUi(_0x30147d.chat, {
          'caption': "\n╔════⪨\n║ *Wow,Someone just*\n║ *leveled Up huh⭐*\n║ *👤Name*: " + _0x30147d.pushName + "\n║ *🎐Level*: " + _0x347e63.level + "🍭\n║ *🛑Exp*: " + _0x347e63.xp + " / " + Levels.xpFor(_0x347e63.level + 0x1) + "\n║ *📍Role*: *" + _0xd20156 + "*\n║ *Enjoy🥳*\n╚════════════⪨ "
        }, {
          'quoted': _0x30147d
        });
      }
    }
  } catch {}
});