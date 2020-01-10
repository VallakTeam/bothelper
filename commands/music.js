const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Music Commands")

.setColor("RANDOM")
.setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail("https://cdn.glitch.com/f216f59c-fdda-43ec-8a7f-cede07534573%2Fgiphy.gif?1530387335563")
.setDescription("There are currently 8 commands in this category.")
    .addField("aj!play", "Play url or search a video on youtube.")
    .addField("aj!np", "Shows what is playing right now.")
    .addField ("aj!stop", "Stop the currently playing song.")
    .addField("aj!queue", "Shows the queue.")
    .addField("aj!pause","pause the custome music.")
    .addField("aj!skip", "Skips the currently playing song.")
    .addField("aj!volume", "Set the volume of the song.")
    .addField("aj!resume", "Resume the paused song.")
 .setFooter("If you found a bug please report it using ?bugreport")
  .setTimestamp()

message.channel.send(embed);
}

module.exports.help = {
  name: "music"
}