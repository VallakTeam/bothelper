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
     .addField  ("**𝐒𝐈𝐍𝐊𝐈 𝐇𝐀𝐂𝐊**",`[\`HERE DOWLOAD\`](https://sinkicheat.com/)`)//link dowload nya samain dnegan reyman ganti https
     .addField  ("**Our Server**",`[\`HERE DOWLOAD\`](https://discord.gg/wk5U3tt/)`)//link server
message.react("✅");
  message.delete(2000).catch(console.error);
    message.author.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.author.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))//reaciton
  }
  }