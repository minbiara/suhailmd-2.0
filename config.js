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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349133982066";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_25_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MixcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2LFxuICAgICAgICA0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2LFxuICAgICAgICA1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA5LFxuICAgICAgICA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICA4NyxcbiAgICAgICAgMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlGYTkxaGF1K1hrRUV2RkJPSkdxRVZPbGduRGdHa1RXZnRrZjJsTnJyc0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMzk4MjA2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzQ5QUE3QjMxRkU3NTE0QUY1QTA4QjBDRTVDMDdGMUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMzAwNzMwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkViaHV1RmFkU09PZmR6UTFyOFlnbkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMThkMDFjZTctZTRhZi00ZGNhLThmMWMtNGZkODRhYTQzYWMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDI2LFxuICAgICAgNTEsXG4gICAgICAyNTEsXG4gICAgICAxNzYsXG4gICAgICAxNzcsXG4gICAgICAxOTYsXG4gICAgICAyNTUsXG4gICAgICAxMDgsXG4gICAgICAxMzQsXG4gICAgICAyNDAsXG4gICAgICAwLFxuICAgICAgNzksXG4gICAgICA0OSxcbiAgICAgIDk4LFxuICAgICAgNzMsXG4gICAgICAyNCxcbiAgICAgIDUxLFxuICAgICAgODIsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAyMDYsXG4gICAgICAyMzAsXG4gICAgICAxNjEsXG4gICAgICA2LFxuICAgICAgMTA3LFxuICAgICAgMTgsXG4gICAgICA0NSxcbiAgICAgIDE3NyxcbiAgICAgIDIxNixcbiAgICAgIDI0NSxcbiAgICAgIDEzMCxcbiAgICAgIDEwMyxcbiAgICAgIDI0NixcbiAgICAgIDIxOSxcbiAgICAgIDI4LFxuICAgICAgMTA4LFxuICAgICAgMTY1LFxuICAgICAgNzIsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlRZRTJNQkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzM5ODIwNjY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDE0NTk2ODg0MTk1NTg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLM2pvdEFFRVBLandMb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInkxcHVoY2FJL20rcFg0cTl1TFJkaXJCaXNOOHJVbDZmVS9zbmZPS1RtbEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicVhWT2lQRll6SENWZ1d1aXJ5djA3Zmt4cFZTSy9iS3VVcGpvQjBONVhZY0FSb1FlcEc5cVpuR3JjWm5CUWsvUzk4T0hSZW41UXB3YmwyYVAwY3R0QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZkVQNE95eU9yY2hBYVRDb0YxZ3pzRFFmakhaV1U2c3lrSjhmblhzQlFhbU03RVR1ajZJdXFsUWRiVkdpazEvSTNlc1lFU3YzMjkyQmFTeFRKYVNDaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMzk4MjA2NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMzMDA3MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBQTdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFBNy5qc29uIjogIntcImtleURhdGFcIjpcIjRHc0JYQTZ0bzNLYnVEU3ZqQ3Y4czBHY1pGY1llVmUyMi9BZS81NktMakE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI0MjA4Mzc1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMjM3NTU4ODQzXCJ9Igp9"  // PUT your SESSION_ID 


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
