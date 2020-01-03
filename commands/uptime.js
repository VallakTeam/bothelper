const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
      .setTitle("Bot Uptime↓↓")
      .addField("Day:", (Math.round(client.uptime / (1000 * 60 * 60 * 24))))
      .addField("Hour:", (Math.round(client.uptime / (1000 * 60 * 60)) % 24))
      .addField("Minute:", (Math.round(client.uptime / (1000 * 60)) % 60))
      .addField("Second:", (Math.round(client.uptime / 1000) % 60))
      .setColor("WHITE")
     message.channel.send({embed});
}