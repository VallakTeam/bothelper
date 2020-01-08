const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (music, message, args) => {


    let timeout = 86400000
    let amount = Math.floor(Math.random() * 500) + 1;

    let daily = await db.fetch(`daily_${message.guild.id}_${message.author.id}`);

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
    db.add(`money_${message.guild.id}_${message.author.id}`, amount)
    db.set(`daily_${message.guild.id}_${message.author.id}`, Date.now())
        
    }

}

//udh bisa tinggal tambahin weekly atau apa gitu susah bjriiir kuro :v