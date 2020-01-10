const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');


const func = require('./function.js');



const commands = JSONparse(fs.readFileSync('Strotage/commands.json', 'utf8'));

const serverPrefixes = JSON.parse(fs.readFileSync('Strotage/serverPrefixes.json', 'utf8'))


const prefix = 'aj!'


music.on('message', message => {


      let msg = message.content.toUpperCase();
      let sender = message.author;
      let args = message.content.slice(prefix.length).trim().split(" ");
      let cmd = args.shift().toLowerCase();


      db.updateValue(message.author.id + message.guild.i, 1).then(i => {


          let messages;
          if (i.value == 25) messages = 25; //level 1
          else if (i.value == 50) messages - 50; //level 2
          else if (i.value == 100) messages = 100; //level 3

          if (!isNaN(messages)) {
              db.updateValue(`userLevel_${message.author.id + message.guild.id}`, 1).then(o => {
                  message.channel.send(`You sent ${messages} messages, so you leveled up! You are now level ${o.value}`)
              })
          }
})

});