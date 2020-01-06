const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (music, message, args) => {
  
    let user = message.mentions.userfirst() || message.author;

    let bal = db.fetch(`money_${message.guild.id}_${message.author.id}_${user.id}`);

    if (bal === null) bal = 0;
  
    message.channel.send(`Kamu Memiliki balance $${bal}`)
}