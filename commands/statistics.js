 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("Statistics") 
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
.setThumbnail("https://cdn.glitch.com/f216f59c-fdda-43ec-8a7f-cede07534573%2Fwebsite-traffic-buy-home.gif?1530388247777")
.addField("r.stats", "Provides bot's statistics.")
  .addField("r.anime","Find Your Favoret anime")
.addField("r.botstat", "Provides more bot's statistics.")
.addField ("r.emojiinfo","Shows information of a specified emoji of your Discord server.")
.addField("r.userinfo", "Provide user statistics")
.addField("r.ping","Get your internet speed.")
.addField("r.serverinfo", "Provide server statistics.")
.addField("r.info","More About The Bot and us.")
.addField("r.svs","Show the servers that the bot's in.")
.addField ("r.member","A custome member count.")
.addField("r.date","Displays the date of a city you give it.")
.addField ("r.math","like a calculator.")
  .setFooter("If you found a bug please report it using r.bugreport | Do r.invite to invite me to your server")
    .setTimestamp()

message.author.send({embed});
  message.reply ("l just send you all the **__statistics__** commands in your DMs 📥")
}

module.exports.help = {
  name: "statistics"
}
