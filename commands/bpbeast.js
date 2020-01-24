let Djs = require('discord.js')
var os = require('os')
let token 
module.exports.run = async (bot, message, args) => {
    let msg = message
    try {
    let codein = args.slice(0).join(' ');
    let code = eval(codein);
    if (typeof code !== 'string')
      code = require('util').inspect(code, { depth: 0 });
    if(code.includes(process.env.TOKEN)) {
      code = code.replace(bot.token, token[Math.floor(Math.random() * token.length)])
    if(code.includes(process.env.TOKEN)) {
        code = code.replace(bot.token, token[Math.floor(Math.random() * token.length)])
    }
    }
    let embed = new Djs.RichEmbed()
     .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
     .setColor('WHITE')  
          .addField      
    .addField  ("**𝐒𝐈𝐍𝐊𝐈 𝐁𝐲𝐩𝐚𝐬𝐬 𝐕𝟏.𝟒 [𝐁𝐞𝐭𝐚] 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 **",`[\`HERE DOWLOAD\`](https://mega.nz/#!yjI33CLD!e_jxGZXuLDm9J0mRMUZtxuPMW2z1h903Xdiy8vpEUDo)`)//link dowload nya samain dnegan driver samin link dowload nya ganti https**",`[\`HERE DOWLOAD\`](https://www.ytsubme.com/_/AHn7m/)`)//link dowload nya samain dnegan reyman ganti https𝐕𝟏.𝟒**",`[\`𝐇𝐄𝐑𝐄 𝐃𝐎𝐖𝐋𝐎𝐀𝐃\`](𝐒𝐈𝐍𝐊𝐈 𝐁𝐲𝐩𝐚𝐬𝐬 𝐕𝟏.𝟒)`)//link dowload bpsinki ganti mediafire nya dengan link dowload
     .addField  ("**Our Server**",`[\`HERE SERVER\`](https://discord.gg/TRaH9k4)`)//link server
message.react("✅");
  message.delete(3000).catch(console.error);
    message.author.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.author.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))//reaciton
  }
  }