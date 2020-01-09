const Discord = require("discord.js");
exports.run = async (client, message, args) => {
 if (message.channel.type === "dm") return;
  if (message.author.id !== '602036985774997507') return;
  const asu = client.emojis.find(a => a.name === 'terminal')
    var yuhuu = args[0];
  if (!yuhuu) return message.channel.send(`Not Found **ID**`)
    var peminta = message.author;
    client.fetchUser(yuhuu).then(wah => {
      if (!wah.bot) return message.channel.send('Bukan Bot Bangsat :v')
            let botembed = new Discord.RichEmbed()
            .setTitle(wah.tag)
            .setDescription(`[**BOT INVITES LINK**](https://discordapp.com/oauth2/authorize?client_id=${yuhuu}&scope=bot&permissions=0)`)
            .addField(`${asu.toString()} Name Bot: `, `${wah.username}`, true)
            .setColor("RANDOM")
            .setFooter("Bot Invite")
            .setThumbnail(`${wah.avatarURL}`)
            
            message.channel.send(botembed);
    })
}