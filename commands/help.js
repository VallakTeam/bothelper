const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let commands = new Discord.RichEmbed()
.setAuthor(`Rakan Aditya`)
.addField ("``r.welcome``","**__set up your welcome message channel.__**")


message.channel.send(commands).then(message => message.react('✔'))

}