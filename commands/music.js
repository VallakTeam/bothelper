const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("list of command")

.setColor("RANDOM")
.setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail("https://cdn.glitch.com/f216f59c-fdda-43ec-8a7f-cede07534573%2Fgiphy.gif?1530387335563")
.setDescription("There are currently 8 commands in this category.")
    .addField("r.play", "Play url or search a video on youtube.")
    .addField("r.np", "Shows what is playing right now.")
    .addField ("r.stop", "Stop the currently playing song.")
    .addField("r.queue", "Shows the queue.")
    .addField("r.pause","pause the custome music.")
    .addField("r.skip", "Skips the currently playing song.")
    .addField("r.volume", "Set the volume of the song.")
    .addField("r.resume", "Resume the paused song.")
 .setFooter("If you found a bug please report it using ?bugreport")
  .setTimestamp()

message.channel.send(embed);
}

module.exports.help = {
  name: "music"
}