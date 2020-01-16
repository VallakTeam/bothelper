const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
  .setColor("#4290AE")
  .setTimestamp()
  .setAuthor(`Help List Hack PUBG™`, "https://cdn.discordapp.com/avatars/666975140092837909/97b7199102b9a355b27a8c9e38575834.png?size=2048")
  .setThumbnail("https://cdn.discordapp.com/avatars/666975140092837909/97b7199102b9a355b27a8c9e38575834.png?size=2048")
.addField(`---- **𝐇𝐄𝐋𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃** --- `,`\`~aio\` \`~bpsinki\` \`~driver\` \`~kingsmen\` \`~reymen\` \`~sinki\` \`~temp\``)
message.author.send({embed});
  message.react("✅");
  message.delete(3000).catch(console.error);//delete 3000 aja //iya beb iyaa
}
