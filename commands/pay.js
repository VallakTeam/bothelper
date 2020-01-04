const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args, tools) => {


    if (!message.mentions.members.first()) return message.channel.send(`**Please mention a user!**`);
    
    
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember,``));



    if (isNaN(amount)) return message.channel(`**Please define an amout!**`)


    let targetBalance = await db.fetch(`userBalance_${targetMember.id}`),
        selfBalance = await  db.fetch(`userBalance_${message.author.id}`);


    if (targetBalance === null) targetBalance = 0;
    if (selfBalance === null) selfBalance = 0;  


    if (amount > selfBalance) return message.channel.send(`**Sorry, you don't have enough money!**`);


    db.add(`userBalance_${targetMember.id}`, amount);
    db.subtract(`userBalance_${message.author.id}`, amount);


    message.channel.send(`**Successfully sent $${amount} to ${targetMember.user.username}!**`);
}