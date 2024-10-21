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
  sendAnimeReaction
} = require('../lib');
smd({
  'pattern': 'poke',
  'category': 'reaction',
  'use': '<quote|reply|tag>',
  'filename': __filename,
  'desc': "send Anime poke reaction."
}, async (_0x560523, _0x319e7e, {
  cmdName: _0x5f5b0b
}) => {
  await sendAnimeReaction(_0x560523, _0x5f5b0b, "poked to", "poked to everyone.");
});
smd({
  'pattern': 'hug',
  'category': 'reaction',
  'use': '<quote|reply|tag>',
  'filename': __filename,
  'desc': "send Anime hug reaction."
}, async (_0x3067d8, _0x26c3eb, {
  cmdName: _0xd0588f
}) => {
  await sendAnimeReaction(_0x3067d8, _0xd0588f, "hug to", "hug with everyone.");
});
smd({
  'pattern': "hold",
  'category': 'reaction',
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime hand hold reaction."
}, async (_0x5a02b8, _0x5be70d, {
  cmdName: _0x2ea3aa
}) => {
  await sendAnimeReaction(_0x5a02b8, "handhold", "hold hand of", "holded hand of everyone");
});
smd({
  'pattern': 'hifi',
  'category': 'reaction',
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime hifi reaction."
}, async (_0x31a8eb, _0x333a74, {
  cmdName: _0x2af266
}) => {
  await sendAnimeReaction(_0x31a8eb, 'highfive', "highfive with", "highfive with everyone.");
});
smd({
  'pattern': "bite",
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime bite reaction."
}, async (_0x720d51, _0xce1e, {
  cmdName: _0x530262
}) => {
  await sendAnimeReaction(_0x720d51, _0x530262, "bitten to", "bitten to everyone.");
});
smd({
  'pattern': 'blush',
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime blush reaction."
}, async (_0x36e8eb, _0x39e5b1, {
  cmdName: _0x14dec9
}) => {
  await sendAnimeReaction(_0x36e8eb, _0x14dec9, "blushed to", "blushed to everyone.");
});
smd({
  'pattern': "punch",
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime punch reaction."
}, async (_0x36cd39, _0x16d2d3, {
  cmdName: _0x550b2e
}) => {
  await sendAnimeReaction(_0x36cd39, "kick", "punched to", "punched everyone.");
});
smd({
  'pattern': "pat",
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime pated reaction."
}, async (_0x3e0ce8, _0x28a1df, {
  cmdName: _0x137688
}) => {
  await sendAnimeReaction(_0x3e0ce8, _0x137688, "patted with", "patted with everyone.");
});
smd({
  'pattern': 'kiss',
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime kiss reaction."
}, async (_0x326b8d, _0x5dee5f, {
  cmdName: _0x78836b
}) => {
  await sendAnimeReaction(_0x326b8d, _0x78836b, "kissed with", "kissed with everyone.");
});
smd({
  'pattern': "kill",
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime kill reaction."
}, async (_0x292fe8, _0x4e7072, {
  cmdName: _0x4bce48
}) => {
  await sendAnimeReaction(_0x292fe8, _0x4bce48, "kill ", "kill everyone over here");
});
smd({
  'pattern': "happy",
  'category': "reaction",
  'use': '<quote|reply|tag>',
  'filename': __filename,
  'desc': "send Anime happy reaction."
}, async (_0x3287da, _0x38505d, {
  cmdName: _0x41b906
}) => {
  await sendAnimeReaction(_0x3287da, "dance", "feel happy with", "feel happy with everyone");
});
smd({
  'pattern': "dance",
  'category': 'reaction',
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime dance reaction."
}, async (_0x37ff6a, _0x3a3131, {
  cmdName: _0x56ece1
}) => {
  await sendAnimeReaction(_0x37ff6a, _0x56ece1, "dance with", "dance with everyone over here");
});
smd({
  'pattern': "yeet",
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime yeet reaction."
}, async (_0x224cd2, _0x4e2dd1, {
  cmdName: _0x1d6696
}) => {
  await sendAnimeReaction(_0x224cd2, _0x1d6696, "yeeted to", "yeeted with everyone");
});
smd({
  'pattern': "wink",
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime wink reaction."
}, async (_0x4cf510, _0x367264, {
  cmdName: _0x5cc54c
}) => {
  await sendAnimeReaction(_0x4cf510, _0x5cc54c, "winked with", "winked with everyone");
});
smd({
  'pattern': "slap",
  'category': 'reaction',
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime slap reaction."
}, async (_0x3d128b, _0x4fc6d6, {
  cmdName: _0x357eb8
}) => {
  await sendAnimeReaction(_0x3d128b, _0x357eb8, "slap to", "slap to everyone");
});
smd({
  'pattern': "bonk",
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime bonk reaction."
}, async (_0x2e2e4b, _0xc24400, {
  cmdName: _0x28f4ce
}) => {
  await sendAnimeReaction(_0x2e2e4b, _0x28f4ce, "bonked to", "bonked to everyone");
});
smd({
  'pattern': "bully",
  'category': 'reaction',
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime bully reaction."
}, async (_0x95e2, _0x33c83b, {
  cmdName: _0x50e2c5
}) => {
  await sendAnimeReaction(_0x95e2, _0x50e2c5, "bullied to", "bullied to everyone");
});
smd({
  'pattern': "cringe",
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime cringe reaction."
}, async (_0x5def50, _0x41f904, {
  cmdName: _0x5a7c81
}) => {
  await sendAnimeReaction(_0x5def50, _0x5a7c81, "cringed to", "cringed to everyone");
});
smd({
  'pattern': "cuddle",
  'category': "reaction",
  'use': "<quote|reply|tag>",
  'filename': __filename,
  'desc': "send Anime cuddle reaction."
}, async (_0xadb919, _0x3d2fce, {
  cmdName: _0xcfd33c
}) => {
  await sendAnimeReaction(_0xadb919, _0xcfd33c, "cuddled with", "cuddled with everyone");
});