//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVxMjFOQm5NZFhaejhBRHFTd1N4aCsxcmprbkVKWDZ6YXZtbE5pY2UwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNCtXRUFZZi9rSWt3eTBwTTZqc1I1UVRmMC9sNk5CT1FCL2F1VnoxMm56WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQUV6dEkzSEI0d3lKM3NjOHpHeTNvcDl6ZDZSV1VaNURVWVk0TmlTaUhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiWEx5ajFSTjBnRUJRRmN5bm5NTlN1N0w5RUNRV056NllXVFNOVlI0aUgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OQnNaRGFlc1pmb1MzQ29CV2QvUUpwSnAzWW9KQTdmSG9jTkVnK3ZrSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRudmV0RzJQU3Q2MzYyWTJlMFZDVjV2QnlPTi8vc3FKS1FGSWdEQyttQ3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU00yZGQxRjdPTkxacitDUUhRRGdkZGp1cTIyY1FtQ3ZNVFVGdmo2VFZuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUt2dlNaRndjWjdEcldUYWNXUytDSlRwaEpwVmY0OEs0dHBPSVExZExFTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdEYWVvbU53VEhld0RzWFdKN0VDUkNzeVRVeng5UG1OZXRFdnpzREdEaWVvTXlrYmpYdkVid2I2ZWlnUitDUUtMdWNKaS9weGVFSHhxWGhQeXEyaER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6ImdoZEJJVFREeG1lSnA1dHlvYlh4dnRjQmtSYmlkRHpWWUI1bythRWtKSmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTA2NDY1MTQyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJEOEZCRTEwMDRFRDQ3QTE2MDVBQzQyMTIzQjRGREQzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDMzMzEzMTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDEwNjQ2NTE0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4MEY2M0FGNTE1RTI4NTY0NjkzNkY1NzRBMDlGMTY3RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzMzMxMzE4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGSDYzYzdLbFEyS1NJUjVheEtTcnlRIiwicGhvbmVJZCI6IjA5MDE3Mzk3LTYzYWEtNDEzMy1hNDBiLTlmYzRjNzQyMTZmYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvMk1QMzQ4aUh2c3cxZm5UeEF0NlZVTEF4OFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RmZ1hWS3pFUTJWZ21hMnBEY0lrb3hFdlBRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlI0UVJHM1hDIiwibWUiOnsiaWQiOiIyNTQxMDY0NjUxNDI6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSW5jb2duaXRvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPeUE1N1lDRU9XL3BMOEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjWlR5YTF3YzBOMlNNOW52MmpJVWlJclJpaXlpeWNoVTdmUFRhWEs1N253PSIsImFjY291bnRTaWduYXR1cmUiOiJKek9aZTE5WXlOcXJmUG9wNU9QVG96RitVczl1M1dsTmpjbUE5VkU5NDNPTms4QStoc28wOUVIR292TWhSdC8rUHVhUmhBeE53NURiVit5NjY3akVBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibXU0TmE1M0FTdWs4Syt1ZVJwNm5QdFF4djRMdG4xcTVNVmVrcnJ0UU5rdmxMQ2IvRHZjdVNrWmFpbTNEU1MrVE9adTRaNlNSWWRsak5XaTlkUGdhREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMDY0NjUxNDI6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEdVOG10Y0hORGRralBaNzlveUZJaUswWW9zb3NuSVZPM3owMmx5dWU1OCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzMzMTMxNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJNkQifQ=='; 


const session = sessionId.replace('NEIMAN-TECH-SESSION-ID;;;=>.','');
const prefix = process.env.PREFIX || '%';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || '𝐍ᴇɪᴍᴀɴ 𝐌ᴀʀᴄᴜs';
const packname = process.env.PACKNAME || 'Marcus';
const dev = process.env.OWNER_NUMBER || '254725693306';
const fridayActive = process.env.FRIDAY || "true"; //you can always deactivate by typing (friday off)
const DevMarcus = dev.split(",");
const botname = process.env.BOTNAME || 'Sᴛᴀʀᴋ-ᴍᴅ';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'typing';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://media-database-mcjv.onrender.com/media/images/a98e77ee75af1bf5d5d49fc6e840f123.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vb9EZIl60eBdl8fIY10p';
const reactemoji = process.env.EMOJI || '⚒️';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || '❌ This Residence Cannot Pick Your Call At This Time Please Leave A Message 😌';
const autobio = process.env.AUTOBIO || 'true';

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: true,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: true,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl, 
  antibad: groupControl, 
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevMarcus,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete,
  fridayActive
};
