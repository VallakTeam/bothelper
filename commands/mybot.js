const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let msg =  bot.guilds.map(guild => `**${guild.name}** Members: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`I am in ${bot.guilds.size} guilds!`)
  .setDescription(`${msg}`)
  .setTitle(`I am in ${bot})
  .addField("Server", bot.guilds.size)
  .addField("User", bot.users.size)
  .setColor("#ebf442");
  message.channel.send(embed);
}


module.exports.help = {
  name: "mybot"
}