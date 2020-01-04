const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args, tools) => {


    if (!message.mentions.members.first()) return message.channel.send(`**Please mention a user!**`);
    
    
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember,``));



    if (isNaN(amount)) return message.channel(`**Please define an amout!**`)


    let targetBalance = await db.fetch(`userBalance_${targetMember.id}`),
        selfBalance = await  db.fetch(`userBalance_${message.authorr.id}`);


    if (targetBalance === null) targetBalance = 0;
    if (selfBalance === null) selfBalance = 0;


    if (amount > selfBalance) return