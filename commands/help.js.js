const Discord = require("discord.js");

module.exports.run = async (bot, message, args, color, queue) => {
let embed = new Discord.RichEmbed()
.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
  .setColor("#4290AE")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
  .setThumbnail(`${message.author.avatarURL}`)
.setTitle('𝐇𝐄𝐋𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃')
.addField("𝐏𝐊  𝐂𝐎𝐌𝐌𝐀𝐍𝐃" , "$marco | Link Download X Mouse 2.19.2\n$cheat | Link Download Cheat Auto Update\n$winrar Link Download Winrar x64-600")
message.author.send({embed});
  message.react("✅");
  message.delete(3000).catch(console.error);//delete 3000 aja
}
