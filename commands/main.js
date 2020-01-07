const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("main Commands")
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("r.pokemon","Show a pokemon information \n Either enter the french or english name")
  .addField("r.cowsay","Make the cow say anything")
  .addField("r.yomama","funny jokes")
  .addField("r.punch","Punches a user.")
  .addField("r.user","Get user info")
  .addField ("missing","Google anything you want")
  .addField("r.pat","Pat someone")
  .addField("r.join","join your vc")
  .addField("r.cuaca","see the weather conditions")
  .addField("r.bunny","Get random bunny pictures")
  .addField("r.daily","Get daily money.")
  .addField("r.photograph","Get random photos.")
  .addField("r.urban", "Usage: ?urban [word here]")
  .addField("r.pages", "To find out more about us!")
  .addField("r.bank","your bank.")
    .addField("r.rate","Ask me to rate someone or something")
    .addField("r.wur","Would you rather.")
  .addField("r.bond", "Displays how well two users would love/bond together.")
  .addField("r.mybot","serverbot.")
   .addField("r.seizure", "Usage: r.seizure")
.addField("r.ship", "Usage: r.ship [@user1] [@user2]")
  .setColor("#e2df1b")
    .setFooter("if you want to suggest us something you can do it by doing r.suggest <suggestion>")
    .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
    name: "main"
}
