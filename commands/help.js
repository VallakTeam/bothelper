const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let commands = new Discord.RichEmbed()
.setAuthor(`Rakan Aditya`)
.addField(`---- help command --- `,`\`r.main\ `,`\`r.mod\ `,`\`r.time\ `,`\`r.statistics\``)

message.channel.send(commands).then(message => message.react('✔'))

}