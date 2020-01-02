const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()

const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("help Commands")
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("r.main","Show a pokemon information \n Either enter the french or english name")
    .addField("r.","Show a pokemon information \n Either enter the french or english name")
    .addField("r.main","Show a pokemon information \n Either enter the french or english name")
  .setColor("#e2df1b")
    .setFooter("if you want to suggest us something you can do it by doing ?suggest <suggestion>")
    .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
    name: "help"
}