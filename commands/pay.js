const Discord = require('discord.js')
var os = require('os')
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

    let embed = new Discord.RichEmbed()
    .setAuthor('Successfully sent')
    .setColor('WHITE')
    .addField(`✉ Masuk duit `,`[\`${amount}\`]**kepada ${targetMember.user.username}!**`);
    message.channel.send(embed).then(msg => msg.react('✅'))
}