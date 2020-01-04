const botconfig = require("../botconfig.json")
const Discord = require("discord.js");
const money = require('discord-money');
const moment = require('moment');
require("moment-duration-format");
const db = require("quick.db");
const ms = require("ms");
let prefix = botconfig.prefix;

module.exports = {
    config: {
      name: 'balance',
      aliases: ['bal', 'bank', 'expenses', 'amount'],
      usage: '^balance [@user | id]',
      description: 'Displays a users balance',
      category: 'Economy',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
let m = message.mentions.members.first() || message.author || message.guild.members.get(args[0]);
let usrBalance = await db.fetch(`usrCash_${m.id}`);
  if(usrBalance === null) usrBalance = 0;
let usrBank = await db.fetch(`usrBank_${m.id}`);
  if(usrBank === null) usrBank = 0;

  if(!args[0]) {
  let embed = new RichEmbed()
    .setColor(orange)
    .setAuthor(`${message.author.tag}'s Balance`, message.author.displayAvatarURL)
    //.setThumbnail(client.user.displayAvatarURL)
    .addField('[**__Your Wallet:__**]', `**${usrBalance} ₪** `, true)
    .addField('[**__Your Bank:__**]', `**${usrBank} ₪**`, true)
  return message.channel.send(embed)
  } else {
  let embed2 = new RichEmbed()
    .setColor(orange)
    .setAuthor(`${m.user.tag}'s Balance`, m.user.displayAvatarURL)
    //.setThumbnail(client.user.displayAvatarURL)
    .addField('[**__Their Wallet:__**]', `**${usrBalance} ₪** `, true)
    .addField('[**__Their Bank:__**]', `**${usrBank} ₪**`, true)
  return message.channel.send(embed2)
      }
    }
  }
module.exports.help = {
    name: 'r.bank'
}