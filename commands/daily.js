const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    let timeout = 86400000
    let amount = Math.floor(Math.random() * 500) + 1;
    
    let daily = await db.fetch(`userBalance_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Anda telah mengumpulkan hadiah harian Anda, Anda dapat kembali dan mengambilnya **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Daily`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Harian Reward**`)
    .addField(`Collected`, amount)
        message.channel.send(embed)
        db.add(`userBalance_${message.author.id}`, amount)
        db.set(`daily_${message.author.id}`, Date.now())
    }
}