const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let commands = new Discord.RichEmbed()
  
  .setColor("#4290AE")
  .setTimestamp()
  .setAuthor(`Help List Rakan Aditya™`, "https://discordapp.com/channels/609377474815721472/662300978845974549/662395415022403586")
  .setThumbnail("https://discordapp.com/channels/609377474815721472/662300978845974549/662395415022403586")
.addField(`---- help command --- `,`\`r.main\`  \`r.mod\` \`r.time\` \`r.statistics\``)
.addField(`---- bot invite --- `,`[\`klik disini\`](https://discordapp.com/oauth2/authorize?client_id=657351969253490699&permissions=8&scope=bot)`)

message.channel.send(commands).then(message => message.react('✔'))

}