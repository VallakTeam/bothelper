const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let commands = new Discord.RichEmbed().setColor("#4290AE")
  .setTimestamp()
  .setAuthor(`Help Cmd Rakan Aditya™`, "https://cdn.discordapp.com/avatars/657351969253490699/3615dfbdff9e139478686acd04264ee6.png?size=2048")
  .setThumbnail("https://cdn.discordapp.com/avatars/657351969253490699/3615dfbdff9e139478686acd04264ee6.png?size=2048")
  .addField(`---- **help command** --- `,`\`r.cmdavatar\` \`r.mod\` \`r.time\` \`r.statistics\` \`r.jadwalsholat <kota>\``)
message.channel.send(commands)

}