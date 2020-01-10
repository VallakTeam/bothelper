 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("Statistics") 
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
.setThumbnail("https://cdn.glitch.com/f216f59c-fdda-43ec-8a7f-cede07534573%2Fwebsite-traffic-buy-home.gif?1530388247777")
.addField("aj!stats", "Provides bot's statistics.")
  .addField("aj!anime","Find Your Favoret anime")
.addField("aj!botstat", "Provides more bot's statistics.")
.addField("aj!userinfo", "Provide user statistics")
.addField("aj!ping","Get your internet speed.")
.addField("aj!serverinfo", "Provide server statistics.")
.addField("aj!info","More About The Bot and us.")
.addField("aj!svs","Show the servers that the bot's in.")
.addField ("aj!member","A custome member count.")
.addField("aj!date","Displays the date of a city you give it.")
.addField ("aj!math","like a calculator.")
  .setFooter("If you found a bug please report it using r.bugreport | Do r.invite to invite me to your server")
    .setTimestamp()

message.author.send({embed});
  message.reply ("l just send you all the **__statistics__** commands in your DMs 📥")
}

module.exports.help = {
  name: "statistics"
}
