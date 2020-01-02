const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let commands = new Discord.RichEmbed()
.setAuthor(`Rakan Aditya`)
.addField(`---- main command --- `,`\`r.main\``)

message.channel.send(commands).then(message => message.react('✔'))

}