const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("bot music invite click here")
    .setColor("RANDOM")
  .setTimestamp()
  .setURL('https://discordapp.com/oauth2/authorize?client_id=657351969253490699permissions=8&scope=bot')
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
  .setThumbnail(bot.user.displayAvatarURL)
    .addField("r.?stop","stop the player")
   .addField("r.play","**it will play __UK__ radio for ya**")
.addField("r.mix","**it will play __The mix__ radio for ya**")
  .addField("r.beat","**it will play __The Beat (HipHop/R&B)__ radio for ya**")
    .addField("r.love","**it will play __The Heart (Love Songs)__ radio for ya**")
 .addField("r.top","**it will play __The tops__ radio for ya**")
   .addField("r.rock","**it will play __The Rock! (Hard Rock)__ radio for ya**")

 
 
  .setFooter("If you found a bug please report it using ?bugreport")
    message.channel.send(embed);
}
module.exports.help = {
    name: "radio"
}