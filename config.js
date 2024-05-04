/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                                                                                            // 
//          ██████╗ ██╗███████╗████████╗███████╗██████╗     ███╗   ███╗██████╗                // 
//         ██╔════╝ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ████╗ ████║██╔══██╗               // 
//         ██║  ███╗██║█████╗     ██║   █████╗  ██║  ██║    ██╔████╔██║██║  ██║               // 
//         ██║   ██║██║██╔══╝     ██║   ██╔══╝  ██║  ██║    ██║╚██╔╝██║██║  ██║               // 
//         ╚██████╔╝██║██║        ██║   ███████╗██████╔╝    ██║ ╚═╝ ██║██████╔╝               // 
//          ╚═════╝ ╚═╝╚═╝        ╚═╝   ╚══════╝╚═════╝     ╚═╝     ╚═╝╚═════╝                //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Gifted-Md
   * @author : Gifted Tech Info
   * @youtube : https://www.youtube.com/@giftedtechnexus
   * @description : Gifted-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Gifted Tech Info.
   * © 2024 Gifted-Md.


*/













const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/eb8c45663114a4cbd5a5c.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wabots@giftedtechnexus.co.ke"
global.location="Eldoret,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "karachi/pakistan";
global.github=process.env.GITHUB|| "https://github.com/saeedx305/Gifted-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2e08e0102f4c3ed1896a2.png"
global.devs = "923120443386,923477008403,2923137183974" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923120443386,923477008403,2923137183974";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923120443386,923477008403,2923137183974";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/2e08e0102f4c3ed1896a2.png",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923120443386,923477008403,2923137183974";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254xxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923120443386,923477008403,2923137183974";

global.api_smd = "https://api-smd.onrender.com" 
global.scan = "https://session.giftedtechnexus.co.ke";


global.SESSION_ID = process.env.SESSION_ID ||  "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpCNDhabEZlZGwwdXUxU3plMmJtVWdsZjlhR1ZBVkdvQ2ZzUEFkT09YST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVk4OXRuZ2NuOUFnMlZsa2UyMG13ZEVhZXNmTlpkZmxybDlWTlIxT1VVbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZT2IyZlIzSGh4U1JuYTVmRGVHcWpFOFJsMWswTktiKzVwME8zUy9raFU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1ckFJb3hxeUxDd3E2T0lwUzRVTFBpWWdQbnZTZWRLRWJpaVNYYW9NdVhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNOY09rRUpBSjYrckxRVnM1RnlzTkV6L3IwcUs1cHhabzkxeHBoWkU1MVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJZzR2Nm1hZzNJRlZoYytlbjNvaWpoeTh5ak5pTUdTenN3RlV5NjQyU1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0E4Y0hmbzY2OU1SRG5tRDNyd1NrY0d1OVowcmF6SkVWZlNReVp3UTkxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZFVHQ0dFBVdk5iVVNFNXhSWG5kYWFvcWhzWk5BelIvcllWWTJZVG9nST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Illrd0ZZVS9ONnJrNG14R0dzVUFWVHFVZUFMWkZ2NHlLcWFpd3JKK29uUDE1YUl1Rm83STh6T3RKdG5YeDFBYnIxMnN6ZnY3MEM5Z044VC9JN2Rsamd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiQ2Z1K2tocDRQRFp3djgycUl4U2dvSjRYbUoybUpsTlNLRWJrZHF3MjAwTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSGotWW9fVENTV2llSTFUUjQ5a1dNUSIsInBob25lSWQiOiJmZjY1ZjU4Yi0zYWRkLTRmMDctOWI0ZC04YTZjNzBjYWZlNjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiendDYXR1V1ZKZFYzVWkxTEpubUc3b0J4R0ljPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtSUzJmdGgxTjB5clNBamxGUTBFd2NPQ1Q1OD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIUFhFVzJLTCIsIm1lIjp7ImlkIjoiOTIzMTM3MTgzOTc0OjI5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IklNUkFOIEtIQU4g8J+ZgiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHFoNXFVR0VLL04xN0VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidjBka3g4ZzhWaGMxSEFDWG1ycTQ1dVhYOXZlbUNuQTRmSjhwNTRKTnJBRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV2ovM1VUQkxTY2tOZGpMak5pU2kvUG9KTXBaOGJadFptZ2gzaGVpMmxzMDVGck5naHExRlJ4MTdEYjdJYVhNYjBaVnpha0l2RElRZlJ6ekV1cDZtQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImUvL1pxSDNYZExFQi9RRkd2V0dHTHl1Q3pvaVVUNlJpWkdFMHBRWDM5dFNYeUwvcElCREFFbkJ4V1d5NFdlL2h0WVp0cjR0Y2V4RmRGcEw0b05lM2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTM3MTgzOTc0OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI5SFpNZklQRllYTlJ3QWw1cTZ1T2JsMS9iM3BncHdPSHlmS2VlQ1Rhd0IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTQ4MDg1MDksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSW1oIn0=" ; // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.5.1",
  caption : process.env.CAPTION || "*©²⁰²⁴ ɢɪғᴛᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛs*" , // ```『 ©²⁰²⁴ ɢɪғᴛᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛs 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "BABLI Tech",
  packname: process.env.PACK_NAME || "BABLI-Md♥️",
  botname : process.env.BOT_NAME  || "BABLI-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "BABLI Tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "Gifted",



};

























global.rank = "updated"
global.isMongodb = false ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "0",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
