const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
  .setColor("#4290AE")
  .setTimestamp()
  .setAuthor(`𝐇𝐄𝐋𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃™`, "https://cdn.discordapp.com/attachments/629691138567176196/667459303971487765/giphy.gif")
  .setThumbnail("https://cdn.discordapp.com/attachments/629691138567176196/667459303971487765/giphy.gif")
.addField("𝐇𝐄𝐋𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃", "$sinki | Link Download SINKI New 1.06\n$bpsinki | Link Download Bypass SINKI 12.14\n$aio | Link Download SINKI All In One Tool\n$kingsmen | Link Download Kingsmen 4.0\n$reymen | link download reymen v1.0\n$driver | Link Download Full Driver\n$temp | Link Download Auto Clear Temp")
message.author.send({embed});
  message.react("✅");
  message.delete(3000).catch(console.error);//delete 3000 aja
}
