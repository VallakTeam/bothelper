const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
  .setColor("#4290AE")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
  .setThumbnail(`${message.author.avatarURL}`)
.setTitle('𝐇𝐄𝐋𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃')
.addField("hack pubg", "$sinki | Link Download SINKI New 1.17\n$bpsinki | Link Download Bypass SINKI 1.17\n$aio | Link Download SINKI All In One Tool\n$bpbeast | Link Download Beast Bypass\n$reymen | link download reymen\n$driver | Link Download Full Driver\n$temp | Link Download Auto Clear Temp")
message.author.send({embed});
  message.react("✅");
  message.delete(3000).catch(console.error);//delete 3000 aja
}
