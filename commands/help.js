const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()

const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("help Commands")
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("r.main","main command \n main commands")
    .addField("r.mod","Show a moderator information \n information moderator")
    .addField("r.statistics","Show a  information \n Either enter the french or english name")
    .addField("r.time","Show a pokemon information \n Either enter the french or english name")
    .addField ("l'm always here to chat with you","``To chat with me all you have to do is put Kim before your message. Ex kim hi.``")
  .setFooter("If you found a bug please report it using r.bugreport | make a channel name *logging*", "https://cdn.glitch.com/f216f59c-fdda-43ec-8a7f-cede07534573%2F1527593426949.png?1531314575611")
  
message.channel.send(embed);
    }
  message.channel.send(embed).then(message => message.react('✔'))
}