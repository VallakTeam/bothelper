const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let mentioneddude = message.mentions.members.first();
            if (!mentioneddude) return message.channel.send('Please mentioned a user.')

            let message2 = args.slice(1).join("")
            if (!message2) return message.channel.send('Please provide a message.')

            mentioneddude.send(message2)
message.delete();
           
            }

module.exports.help = {
    name: "test"
}