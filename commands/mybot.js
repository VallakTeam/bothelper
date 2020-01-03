const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
 let msg =  bot.guilds.map(guild => `**${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()};
  let embed = new Discord.RichEmbed()
  .setTitle(``I am in ${bot.guilds.size} User!``)
  .setDescription(``${msg}``)
  .setColor("RANDOM");
  message.channel.send(embed);

module.exports.run = async (bot, message, args) => {

let msg =  bot.guilds.map(guild => `**${guild.name}** Server: ${bot.guilds.size.toLocaleString()}`).join('\n');
  
  let embed = new Discord.RichEmbed()
  .setTitle(`I am in ${bot.guilds.size} Server!`)
  .setDescription(`${msg}`)
  .setColor("RANDOM");
  message.channel.send(embed);
}
}