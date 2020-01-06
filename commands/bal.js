const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (music, message, args) => {
  
    let bal = await db.fetch(`money_${message.guild.id}_${message.author.id}`);//ea dah bisa

    if (bal === null) bal = 0; 
  
    message.channel.send(`Kamu Memiliki balance $${bal}`)
}