//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "hacker@org";
global.location = "Africa, Johannesbueg";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://kadomew351:NTCEgsVqWUIrvF6I@cluster0.rsyakcp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/coderxsa/ANITA";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/WAYN3x/WAYN3x/refs/heads/main/a11fbb0001d82a2d244dfa6ba6ac52ce.jpg";
global.devs = "27723706396";
global.sudo = process.env.SUDO || "2650998538381";
global.owner = process.env.OWNER_NUMBER || "27723706396";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://raw.githubusercontent.com/WAYN3x/WAYN3x/refs/heads/main/a11fbb0001d82a2d244dfa6ba6ac52ce.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://coderx-sessions.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdTMlJZbDhnaU54QWdpMXhLUUFtTjl6Z09GQ2dsdGJrbzQ5Nnl0bE8wYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWIwOXUvTUFvMFRFSlM5VzQ1UnphZFFlS2JVdUFJSkpNWVBSSnhqNm0yaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTXY0T0xOeEtkMTdvdUt5TVhjT2ZmaHhxQ0xQa0xUc2pWWW9QbU9McVhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2ckVHV0NwdW1qYk1hWGZWcElON1gwcG15TDl3K1luSlBGTHRlNG5TNkRnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKUkFSRUdNUnpDWkxGUFdSOTBMN0kxbXZYRjdKVjAyN1cvTHBrcE5RMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ4VE9CKy9Rc21DdnY2QjMwM3RKb05TVHZnSnBKUFFHRnZPemxNQXBoUmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pKZEdDRXVFVzFVTk40S0xob1hidnBiSm5DSnlDS3VkWTRwWmIzUEJWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVy83N1BoYXBkSUEyTHN5U1J6QXV4a0F1clZ3UjBFVVlIeDgyV2Q3d2IyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HUkJVbm5pQ3VZWDBZV1VodHFIdmJuVExIUXRuZVptTEJEOUdSSUwyaHFxZXdDUVR2UU9VaGxlaTY5Y3hNMWF1dVJUMWZVZ0twNlpRODlkNnMwZGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6InlQMjZMRzVEaEFCZjc5b2NjTGNQTDZwYitEbSszRUgwVFhPTHJWNmZLbFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldOTTFrdDdoU25XQlM2b3ctU2J2dHciLCJwaG9uZUlkIjoiZDE3OTA0YmItYzA1OC00ZTJlLWEyZGEtNzk2YTVhNGUzMzFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA5RWhHanVPQVhDdFdVT0VkNnB0QjhEUk43OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSnBKeDZXSldmSnpWN1VNb0l1RkExWjRlblk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFI2N0M0WE4iLCJtZSI6eyJpZCI6IjI3NzIzNzA2Mzk2OjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pQdnU5d0hFSUNWd0xZR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImgzeFFvWmtqejZmeUZLbGhtS1d3N1JBSnR6Q3EyTTF1amNmNmJjNGxDVlk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkQ4RStURldYTWJiWFVQQnBQK3Z5WG1maTZlNVg3bUZORUF4OUhkcDIrR0ZpaWdqQjQ2ZFRaRy9ObUE1U2ZOZG5ZaTZnWDdZbDZBa3d2bjhacm9RYUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPTUd4UC9Hakh3SC9GbC9XWHRVNUc3cGptTXRhZzRPZ1dqUkNram1OQU5ZMkpuRmVBNjBqMUpnaGpyY2JPcHZvYml0Ni9sUXk2Q2tISlNXSDZFZy9pUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzIzNzA2Mzk2OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWQ4VUtHWkk4K244aFNwWVppbHNPMFFDYmN3cXRqTmJvM0grbTNPSlFsVyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDkxMDIyMX0" // put sesssion id
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "2.5.0",
  caption: process.env.CAPTION || "`WAYN3x™`",
  author: process.env.PACK_AUTHER || "BMW",
  packname: process.env.PACK_NAME || "BMW",
  botname: process.env.BOT_NAME || "BMW",
  ownername: process.env.OWNER_NAME || "〄𝓦𝓪𝔂𝓷𝓮.",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "whatsapp").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
