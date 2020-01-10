const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let commands = new Discord.RichEmbed()
  
  .setColor("#4290AE")
  .setTimestamp()
  .setAuthor(`Help List Rakan Aditya™`, "https://cdn.discordapp.com/avatars/661648558696562698/d5949dedc6bd8eb2ab9ab324c6e9cd1b.png?size=2048")
  .setThumbnail("https://cdn.discordapp.com/avatars/661648558696562698/d5949dedc6bd8eb2ab9ab324c6e9cd1b.png?size=2048")
  .addField(`---- **help command** --- `,`\`aj!main\` \`aj!music\` \`aj!economy\` \`aj!mod\` \`aj!time\` \`aj!statistics\` \`aj!jadwalsholat <kota>\``)
  .addField(`---- bot invite --- `,`[\`klik disini\`](https://discordapp.com/oauth2/authorize?client_id=657351969253490699&permissions=8&scope=bot)`)

message.channel.send(commands).then(message => message.react('✔'))

}