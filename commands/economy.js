const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("economy Commands")
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("aj!daily","Get daily money.")
    .addField("missing","your bank.")
    .addField("aj!pay","send money.")
    .addField("aj!bal","your saldo.")

message.channel.send(embed);
}
module.exports.help = {
    name: "economy"
}