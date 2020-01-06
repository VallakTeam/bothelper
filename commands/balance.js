const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
    let balance = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if (balance === null) balance = 0;
  
    message.channel.send(`Kamu Memiliki Saldo ${balance}$`)
}