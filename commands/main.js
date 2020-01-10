const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("main Commands")
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("aj!pokemon","Show a pokemon information \n Either enter the french or english name")
  .addField("aj!cowsay","Make the cow say anything")
  .addField("aj!yomama","funny jokes")
  .addField("aj!punch","Punches a user.")
  .addField("aj!user","Get user info")
  .addField ("missing","Google anything you want")
  .addField("aj!pat","Pat someone")
  .addField("aj!join","join your vc")
  .addField("aj!cuaca","see the weather conditions")
  .addField("aj!bunny","Get random bunny pictures")
  .addField("aj!daily","Get daily money.")
  .addField("aj!photograph","Get random photos.")
  .addField("aj!urban", "Usage: aj!urban [word here]")
  .addField("aj!pages", "To find out more about us!")
  .addField("aj!bank","your bank.")
    .addField("aj!rate","Ask me to rate someone or something")
    .addField("aj!wur","Would you rather.")
  .addField("aj!bond", "Displays how well two users would love/bond together.")
  .addField("aj!mybot","serverbot.")
   .addField("aj!seizure", "Usage: aj!seizure")
.addField("aj!ship", "Usage: aj!ship [@user1] [@user2]")
  .setColor("#e2df1b")
    .setFooter("if you want to suggest us something you can do it by doing r.suggest <suggestion>")
    .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
    name: "main"
}
