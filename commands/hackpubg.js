const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let commands = new Discord.RichEmbed()
  
  .setColor("#4290AE")
  .setTimestamp()
  .setAuthor(`Help List Hack PUBG™`, "https://cdn.discordapp.com/avatars/666975140092837909/97b7199102b9a355b27a8c9e38575834.png?size=2048")
  .setThumbnail("https://cdn.discordapp.com/avatars/666975140092837909/97b7199102b9a355b27a8c9e38575834.png?size=2048")
.addField(`---- **help command ** --- `,`\`~aio\` \`~bpsinki\` \`~driver\` \`~kingsmen\` \`~reymen\` \`~sinki\` \`~temp\``)

message.channel.send(commands).then(message => message.react('✅'))

}