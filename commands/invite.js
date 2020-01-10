const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Invite link bot:")
    .setDescription("[Invite me!](https://discordapp.com/oauth2/authorize?client_id=661648558696562698&permissions=8&scope=bot)")
    .setThumbnail("https://cdn.discordapp.com/avatars/661648558696562698/d5949dedc6bd8eb2ab9ab324c6e9cd1b.png?size=2048")
    .setColor("RANDOM")
    message.channel.send(embed)       
}