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

const DB = require("../lib/scraper");
const {
  Config,
  smd
} = require("../lib");
const simpleGit = require("simple-git");
const git = simpleGit();
try {
  const Heroku = require("heroku-client");
  async function updateHerokuApp() {
    try {
      const _0x42a720 = new Heroku({
        'token': process.env.HEROKU_API_KEY
      });
      await git.fetch();
      const _0x2f344b = await git.log(['main..origin/main']);
      if (_0x2f344b.total === 0x0) {
        return Config.botname + " IS ON IT'S LATEST VERSION";
      } else {
        console.log("Update Detected, trying to update your bot!");
        const _0x420fab = await _0x42a720.get("/apps/" + process.env.HEROKU_APP_NAME);
        const _0x1edf7a = _0x420fab.git_url.replace("https://", "https://api:" + process.env.HEROKU_API_KEY + '@');
        try {
          await git.addRemote('heroku', _0x1edf7a);
        } catch (_0x16983f) {
          print("Heroku remote adding error", _0x16983f);
        }
        await git.push("heroku", "main");
        return "Bot updated. Restarting.";
      }
    } catch (_0x5ba6cd) {
      print(_0x5ba6cd);
      return "Can't Update, Request Denied!";
    }
  }
  smd({
    'pattern': "checkupdate",
    'desc': "Shows repo's refreshed commits.",
    'category': "tools",
    'fromMe': true,
    'react': '🍂',
    'filename': __filename,
    'use': process.env.HEROKU_API_KEY ? "[ start ]" : ''
  }, async (_0xd6d080, _0x29f01f) => {
    try {
      let _0x12825c = await DB.syncgit();
      if (_0x12825c.total === 0x0) {
        return await _0xd6d080.reply("*ANITA IS RUNNING ON LATEST\nPATCHES\nFIXESUPGRADES*");
      }
      let _0xbcf0dd = await DB.sync();
      await _0xd6d080.bot.sendMessage(_0xd6d080.chat, {
        'text': _0xbcf0dd.replace(/SuhailTechIMd/, 'ANITA')
      }, {
        'quoted': _0xd6d080
      });
      if (_0x29f01f == 'start' && process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY) {
        _0xd6d080.reply("Build started...");
        const _0x343cf5 = await updateHerokuApp();
        return await _0xd6d080.reply(_0x343cf5);
      }
    } catch (_0x4e5428) {
      _0xd6d080.error(_0x4e5428 + "\n\nCommand: update", _0x4e5428, "ERROR!");
    }
  });
  smd({
    'pattern': 'update',
    'desc': process.env.HEROKU_API_KEY ? "*UPDATE SUCCESS*" : "UPDATED YOUR DEPLOYEMENT",
    'fromMe': true,
    'category': "tools",
    'filename': __filename
  }, async _0x334ae6 => {
    try {
      let _0x41f012 = await DB.syncgit();
      if (_0x41f012.total === 0x0) {
        return await _0x334ae6.reply('*' + Config.VERSION + " IS Updating*");
      }
      let _0x30006a = await DB.sync();
      let _0x278e8d = " \n*UPDATE RUNNING*\n\t" + _0x30006a + '*';
      await _0x334ae6.bot.sendMessage(_0x334ae6.jid, {
        'text': _0x278e8d
      });
      await require("simple-git")().reset('hard', ['HEAD']);
      await require("simple-git")().pull();
      await _0x334ae6.reply(process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY ? "*`BOT UPDATED`*\n*RESTART YOUR BOT FOR UPDATE TO TAKE EFFECT*" : "```*Successfully updated. Now You Have Latest Version Installed!*");
    } catch (_0x335fcc) {
      _0x334ae6.error(_0x335fcc + "\n\nCommand: updatenow", _0x335fcc, "ERROR!");
    }
  });
  if (process.env.HEROKU_API_KEY) {
    print("HEROKU : checking for auto update!");
    updateHerokuApp();
  }
} catch (_0x5f93e7) {}