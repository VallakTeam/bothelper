const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("join my partner")
    .setColor("RANDOM")
  .setTimestamp()
  .setURL('https://discord.gg/KysDzz3')
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
  .setThumbnail(bot.user.displayAvatarURL)
    .addField("aj!timer","Set a custome timer")
   .addField("aj!cuaca","Get custome weather stats. ``Ex:`` r.cuaca us")
.addField("aj!remind","Set custome reminder. ``Ex:`` r.remind 1m to to school")
  .setFooter("If you found a bug please report it using r.bugreport")
    message.channel.send(embed);
}
module.exports.help = {
    name: "time"
}