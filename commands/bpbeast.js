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
     .addField  ("**𝐁𝐄𝐀𝐒𝐓 𝐁𝐘𝐏𝐀𝐒𝐒**",`[\`HERE DOWLOAD\`](http://www.nozzygaming.me/)`)//link dowload nya samain dnegan reyman ganti https
     .addField  ("**𝐎𝐔𝐑 𝐘𝐎𝐔𝐓𝐔𝐁𝐄**",`[\`𝐍𝐄𝐖 𝐘𝐎𝐔𝐓𝐔𝐁𝐄\`](https://www.youtube.com/channel/UC3WbAx_l7HtseSWpxRYI6rw)`)//link server
message.react("✅");
  message.delete(2000).catch(console.error);
    message.author.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.author.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))//reaciton
  }
  }