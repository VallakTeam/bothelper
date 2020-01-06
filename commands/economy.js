const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("economy Commands")
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("r.daily","Get daily money.")
    .addField("r.bank","your bank.")
    .addField("r.pay","send money.")
    .addField("r.balance","your saldo.")

message.channel.send(embed);
}
module.exports.help = {
    name: "economy"
}