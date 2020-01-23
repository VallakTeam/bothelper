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
     .addField  ("**𝐍𝐞𝐰 𝐔𝐩𝐝𝐚𝐭𝐞 𝐒𝐢𝐧𝐤𝐢 𝐁𝐲𝐩𝐚𝐬𝐬 𝟏.𝟏𝟕**",`[\`HERE DOWLOAD\`](https://www.ytsubme.com/_/2VhjE/)`)//link dowload bpsinki ganti mediafire nya dengan link dowload
     .addField  ("**Support Server**",`[\`HERE SERVER\`](https://discord.gg/TRaH9k4)`)//link server
message.react("✅");
  message.delete(3000).catch(console.error);
    message.author.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.author.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))//reaciton
  }
  }