const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (music, message, args) => {
  
    let bal = await db.fetch(`money_${message.guild.id}_${message.author.id}`);//ea dah bisa

    if (bal === null) bal = 0; 
    let embed = new Discord.RichEmbed()
    .setAuthor(`Daily`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Harian Reward**`)
    .addField(`Collected`, bal)
    message.channel.send(embed)
    db.add(`money_${message.guild.id}_${message.author.id}`, bal)
    db.set(`daily_${message.guild.id}_${message.author.id}`, Date.now())
        
    }

