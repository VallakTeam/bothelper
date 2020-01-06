const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    let timeout = 86400000
    let amount = 250

    let daily = await db.fetch(`daily_${message.guild.id}_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Anda telah mengumpulkan hadiah harian Anda, Anda dapat kembali dan mengambilnya **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
        
        message.channel.send(`Successfully collected $${amount}`);
      
    db.add(`money_${message.guild.id}_${message.author.id}`, amount)
    db.set(`daily_${message.guild.id}_${message.author.id}`, Date.now())
        
    }

}