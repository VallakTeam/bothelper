const Discord = require("discord.js");

module.exports.run = async (bot, message, args, color, queue) => {
let embed = new Discord.RichEmbed()
.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
  .setColor("#4290AE")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
  .setThumbnail(`${message.author.avatarURL}`)
.setTitle('𝐇𝐄𝐋𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃')
.addField("�𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐌𝐘 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 , "$sinki | Link Download SINKI V4.09-FINAL\n")
message.author.send({embed});
  message.react("✅");
  message.delete(2000).catch(console.error);//delete 3000 aja
}
