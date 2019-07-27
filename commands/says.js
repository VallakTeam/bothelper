const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== '476202828033949697')return;
      const sayMessage = args.join(" ");
      let sembed = new Discord.RichEmbed()
      .setImage(`${sayMessage}`)
      .setColor("#ff0000");
      message.delete(2000).catch();
      message.channel.send(sembed);

}

module.exports.help = {
  name: "say"
}