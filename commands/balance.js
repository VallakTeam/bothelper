const Discord = require('discord.js')
const db = require('quick.db'),
      ms = require('parse-ms');
exports.run = async (client, message, args, tools) => {



    let user = message.mentions.users.first() || message.author;



    let balance = await db.fetch(`userbalance_${user.id}`);


    if (balance === null) balance = 0;


    message.channel.send(`${user.username}☛**Kamu Memiliki Saldo**$${balance}`);



}