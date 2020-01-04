const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args, tools) => {


    if (!message.mentions.members.first()) return message.channel.send(`**Please mention a user!**`);
    
    
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember,``));



    if (isNaN)(amount)) return 