const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348120977815";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_07_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDczLFxuICAgICAgICA3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI3LFxuICAgICAgICA1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk1LFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICA2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDI3LFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY0LFxuICAgICAgICA1NixcbiAgICAgICAgMTgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk1LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV095eHB5SDlreGs3UGpDWUdpdEdvWUloS1NhWk0ySzBHTmxRMzVjN1hURT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVkZOcGFfZHdSdmU0aERZZDlqZlpId1wiLFxuICBcInBob25lSWRcIjogXCJlN2UzZjhiYy1kNDFmLTQwM2ItOTZmYi0zZmJhZjYzN2IxOGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMzksXG4gICAgICA2MSxcbiAgICAgIDY3LFxuICAgICAgMTUyLFxuICAgICAgMTc5LFxuICAgICAgMTM5LFxuICAgICAgMTEzLFxuICAgICAgMTA2LFxuICAgICAgMTgyLFxuICAgICAgMjQxLFxuICAgICAgMTk0LFxuICAgICAgMSxcbiAgICAgIDI5LFxuICAgICAgMTU2LFxuICAgICAgOTksXG4gICAgICA1MSxcbiAgICAgIDg1LFxuICAgICAgMTg0LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMjQ1LFxuICAgICAgMTEyLFxuICAgICAgMTAsXG4gICAgICAyMTcsXG4gICAgICA2MyxcbiAgICAgIDY1LFxuICAgICAgMzEsXG4gICAgICA4MCxcbiAgICAgIDExNixcbiAgICAgIDEwNixcbiAgICAgIDE0MCxcbiAgICAgIDE4OSxcbiAgICAgIDIyMyxcbiAgICAgIDEzNixcbiAgICAgIDE5NSxcbiAgICAgIDEzMixcbiAgICAgIDIxNyxcbiAgICAgIDY4LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFNRTNNTEtEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTIwOTc3ODE1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNaW5iaWFyYSBLaWRzIE1pbmJpYXJhIGxlZ2FsY29uc3VsdFwiLFxuICAgIFwibGlkXCI6IFwiMTE4NTAyNDkzMDU3MjA1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUNRdmRzRUVLYjI5N2tHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRN2dQUlF1TU41NnIzaVIrQjljc1A3eUtBS1ZNcll3WjRkL3Q1THpFcmtJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtFK3NVcDJIRGlhZFBpQ3VoVXhGWnI1SnNLWlFVM0dOV3ZRSE1lNWU3MFlBVHYxWHJHcCs1OFBManc4czhTU3lnb2JUTWxJbC9UWWNydDNucVZ2SENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxPd0tDZVZ2YkI3OXV4QmJZUldJbUx5dzFiN1BZcUM4dXZGOVo1WTNBUjVNZEZrVSsyL29oUUx5SHQ3R1JXSG5oY3k2dHIvR1VlODFHMmQrajZtSUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjA5Nzc4MTU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjExNTI0M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
