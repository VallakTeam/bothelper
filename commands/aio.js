let Djs = require('discord.js')
var os = require('os')
let token 
module.exports.run = async (bot, message, args, color, queue) => {
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
     .addField  ("**𝐒𝐈𝐍𝐊𝐈 𝐀𝐋𝐋 𝐈𝐍 𝐎𝐍𝐄**",`[\`HERE DOWLOAD\`](https://www.ytsubme.com/_/L9cDz/)`)//link dowload aioinki ganti mediafire nya
     .addField  ("**𝐎𝐔𝐑 𝐘𝐎𝐔𝐓𝐔𝐁𝐄**",`[\`𝐍𝐄𝐖 𝐘𝐎𝐔𝐓𝐔𝐁𝐄\`](https://rebrand.ly/74d0b)`)//link server
message.author.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.channel.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))//reaciton
  }
  }