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
    .setThumbnail(`${message.author.avatarURL}`)
     .setColor('WHITE')
     .addField  ("**CYBER HACK NEW UPDATE**",`[\`HERE DOWLOAD\`](https://cdn.discordapp.com/attachments/785967112257929267/812376929021329448/20022021.rar)`)//link dowload samain link doload nya temps
    .addField  ("**DEV**",`[\`@vallak_team09\`](https://bit.ly/2X3AcHe)`)//link server
    .setTimestamp();
message.react("✅");
  message.delete(3000).catch(console.error);
    message.author.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.author.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))//reaciton
  }
  }