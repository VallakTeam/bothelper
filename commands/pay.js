const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args, tools) => {


    if (!message.mentions.members.first()) return message.channel.send(`**Please mention a user!**`);


    let targetMember = message.mentions.member.first(),
        amount = parseInt(args.join(' ').replace(targetMember, ''));



    if (isNaN(amount)) return message.channel.send(`**Please define an amount!**`);


    let targetBalance = await db.fetch(`userBalance_${targetMember.id}`),
        selfBalance = await db.fetch(`userBalance_${targetMember.id}`);


    if (targetBalance === null) targetBalance = 0;
    if (selfBalance === null) selfBalance = 0;


    if (amount > selfBalance) return message.channel.send(`**Sorry, you don't have enought money!**`);


    db.add(`userBalance_${targetMember.id}`, amount);
    db.subtract(`userBalance_${message.author.id}`, amount);


    message.channel.send(`**Successfully send{amount} to ${targetMember.user.tag}!$$`);

    

}