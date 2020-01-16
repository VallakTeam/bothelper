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
    .setColor('WHITE')
     .addField(`📥 masuk`,`[\`Get Script  \`](http://www.mediafire.com/file/57qs2jw06m8jcsh/Sinki_0116.vmp.rar)`)//click link nya
message.channel.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.channel.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))
  }
  }