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
     .addField  ("**𝐍𝐞𝐰 𝐔𝐩𝐝𝐚𝐭𝐞 𝐒𝐢𝐧𝐤𝐢 𝐁𝐲𝐩𝐚𝐬𝐬 𝟏.𝟏𝟕**",`[\`HERE DOWLOAD\`](https://www.mediafire.com/file/tgvlpdcpjbeeab9/SINKI_BYPASS.0117.vmp.rar/file)`)//link dowload bpsinki ganti mediafire nya dengan link dowload
     .addField  ("**Our Server**",`[\`HERE SERVER\`](https://discord.gg/yuHvPJ)`)//link server
message.channel.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.channel.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))//reaciton
  }
  }