const Discord = require('discord.js');

exports.run = (bot, message, args, tools) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You must have the permission **Manage Messages** to use this command.");

    let