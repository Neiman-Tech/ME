//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hxeVpvQkVVcVgxVlFlK01yaWNIT05HQTA4SktubWh3VHpPWHZWRC9WRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOU96Y3lOWnRUZDEvSVFXbmpLaUM1amFGRHpzT0gzMFlMTjNRbXI5ckNsST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTDBGZVk2VjBYMmtRQ0NUWXp5OEtkWmNEcUtRNG04N20vbzMvNzVDSUZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSOXl1Ti95czFaOXcxQUYvcFVrUzFVN2s5dm5hbm1najBqY0RtSUZaSUZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtOR2xmejUrdUQyY1V3Y3ljaHRBb213ajFBUlhYODZ0ZW13Nm43RENWMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNXSnBEeXptRlE5a3lOdlFuRTdPelNTZitXQzlzVkxlby9VVDhDZGJ3SHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0x5cC9lL2ZDUVhLU2w3M2kzbXVLU1I0alB1dG9mSTNoMkRkSkxzdk9IVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTlGeFcvdnhqU2ZiVEE5VHJJSTZia0dWcm9PZnBDNERwaFQ0bk9IQWRsST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZsUGdCK2ZtY0w2aWZNNE01SGt6Y1hKcUFFdlcrMjYwdVlhUTcrN0JxTWMzK2t5WWxadVV5NFJXaXh5ZE1iVG50R2g3Rm14N3VDOXJEWVRYOFJ3R2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJrakwwQWNVOU03TktHaU5TM2tnK2hFQlJWL1ZyaTdzS2thM0JCbmFIdmdjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcyNTY5MzMwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1M0RCRUI4QkEyNUY5OTJFMTE2MkU1MjYyNDAzMkJGNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzNTMyOTU5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuUFZlR2F4alNlLXNmaXFRbjNxdVd3IiwicGhvbmVJZCI6IjM0MWQ0YzNmLTA5ZWItNGIyMy1hYzA5LWQ5Y2JhMGU5ODE1NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpNlRFc0xqenVFb2ZSN0Q0T3Y4YVV3aTRzR3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmdpTkwxamMrZkxna1hOeHNJVHJ3QlNEcEFRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRDR05IVzdRIiwibWUiOnsiaWQiOiIyNTQ3MjU2OTMzMDY6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTmVpbWFuIE1hcmN1cyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEh4NGFNR0VJdm5zTDhHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV2NIWHowbEYyR0lXR3g4T2EzZE9jNFpiKzExcHE2VFlQcDBiK282ZFdrZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMkdvamJZbE8wclJrcE12bTNwazByWlJXUCtUOHJUQmRQV1MvU2RCUGU0Tm1qWERETG5obHdNMTIrbXA0Wkx5OER3MnZUc1ArdGg2WjdzdUhOSXVhRHc9PSIsImRldmljZVNpZ25hdHVyZSI6InhiWXFCKzVsNnI3TWYvQUtreHhvUVRQaFBES3BrdEdOVUN3dC9JVGNOdElnUnlCeWtwb1E0aUtXUlVCOFByMnBOQk9SVjFiOTA4ZjBldkRGNjV1VGdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzI1NjkzMzA2OjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZuQjE4OUpSZGhpRmhzZkRtdDNUbk9HVy90ZGFhdWsyRDZkRy9xT25WcEkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDM1MzI5NTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzEzIn0=';
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
