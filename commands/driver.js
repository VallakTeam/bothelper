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
     .addField  ("**𝐅𝐔𝐋𝐋 𝐃𝐑𝐈𝐕𝐄𝐑**",`[\`HERE DOWLOAD\`](https://mega.nz/#!yjI33CLD!e_jxGZXuLDm9J0mRMUZtxuPMW2z1h903Xdiy8vpEUDo)`)//link dowload nya samain dnegan driver samin link dowload nya ganti https
     .addField  ("**Our Server**",`[\`HERE SERVER\`](https://discord.gg/yuHvPJ)`)//link server
message.react("✅");
  message.delete(3000).catch(console.error);
    message.author.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.author.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))//reaciton
  }
  }