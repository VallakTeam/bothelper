let Djs = require('discord.js')
var os = require('os')
let token 
module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "629553839430959115" && message.author.id !== "602036985774997507") return message.channel.send("Kamu tidak bisa menggunakan command ini!, karena kamu bukan developer!")
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
     .setThumbnail("https://cdn.discordapp.com/avatars/666975140092837909/97b7199102b9a355b27a8c9e38575834.png?size=2048")
     .setColor('WHITE')
     .addField  ("**𝐑𝐄𝐘𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 v1.0**",`[\`HERE DOWLOAD\`](https://www.ytsubme.com/_/AHn7m/)`)//link dowload nya samain dnegan reyman ganti https
     .addField  ("**Our Server**",`[\`HERE SERVER\`](https://discord.gg/yuHvPJ)`)//link server
message.channel.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.channel.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))//reaciton
  }
  }