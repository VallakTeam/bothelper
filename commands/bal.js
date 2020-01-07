const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (music, message, args) => {
  
    let bal = await db.fetch(`money_${message.guild.id}_${message.author.id}`);//ea dah bisa

    if (bal === null) bal = 0; 
    let embed = new Discord.RichEmbed()
    .setAuthor(`Balance`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Your Saldo**`)
    .addField(`Money`, bal)
        
    message.channel.send(embed)
    
     }
