const Discord = require('discord.js');

exports.run = (bot, message, args, tools) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You must have the permission **Manage Messages** to use this command.");

    let argsresult
    let mChannel = message.mentions.channel.first()

    message.delete()
    if(mChannel) {
    argsresult = args.slice(1).join(" ")
    mChannel.send(argsresult)
    } else {
    argsresult = args.join(" ")
    message.channel.send(argsresult)
   }

}


module.exports.config = {
    name: "say",
    description: "sends a message that was inputted to a channel",
    usage: "r.say",
    accessableby: "Staff",
    aliases: ["acc", "announcement"]
}