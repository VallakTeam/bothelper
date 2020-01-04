const Discord = require('discord.js');
const economy = require('discord-eco');


const client = new Discord.client();


client.on('message', message => {
  
    let prefix = 'r.';

   //commands

   //ping
   if (message.content.toUpperCase() === '${prefox}'