const Discord = require("discord.js");

module.exports.run = async (bot, message, args, color, queue) => {
let embed = new Discord.RichEmbed()
.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
  .setColor("#4290AE")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
  .setThumbnail(`${message.author.avatarURL}`)
.setTitle('𝐇𝐄𝐋𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃')
.addField("黑𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐌𝐘 𝐂𝐎𝐌𝐌𝐀𝐍𝐃黑", "$sx | link Download Sx CW UPDATED 2.07\n$c4 | link Download C4 UPDATED V1.30\n$sinki | Link Download SINKI New V3.05\n$bpsinki | Link Download Bypass SINKI V2.1\n$aio | Link Download SINKI All In One Tool V1.5\n$venom | LINK OWNLOAD VENOM 2020 H+B\n$magnum | link Download Magnum X\n$driver | Link Download Full Driver\n$temp | Link Download Auto Clear Temp")
message.author.send({embed});
  message.react("✅");
  message.delete(2000).catch(console.error);//delete 3000 aja
}
