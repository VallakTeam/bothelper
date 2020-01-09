const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Invite link:")
    .setDescription("[Invite me!](https://discordapp.com/oauth2/authorize?client_id=602763576373149697&scope=bot&permissions=1041442153)")
    .setThumbnail("https://cdn.discordapp.com/avatars/657351969253490699/3615dfbdff9e139478686acd04264ee6.png?size=2048")
    .setColor("RANDOM")
    message.channel.send(embed)       
}

//invite wkwk copas apaan yang mana lu :v mana ada ku copas bjir