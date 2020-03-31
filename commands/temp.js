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
     .addField  ("**𝐀𝐔𝐓𝐎 𝐂𝐋𝐄𝐀𝐑 𝐓𝐄𝐌𝐏**",`[\`HERE DOWLOAD\`](https://mega.nz/#!xhZShS5A!v8I1wehW9dlUtCvxU1poaiH9HX4v1Tt4awc6PIOhGgY)`)//link dowload samain link doload nya temps
     .addField  ("**𝐎𝐔𝐑 𝐘𝐎𝐔𝐓𝐔𝐁𝐄**",`[\`𝐍𝐄𝐖 𝐘𝐎𝐔𝐓𝐔𝐁𝐄\`](https://rebrand.ly/4e918)`)//link server
message.react("✅");
  message.delete(2000).catch(console.error);
    message.author.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.author.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))//reaciton
  }
  }