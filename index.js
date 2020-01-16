const Discord = require("discord.js");
const moment = require("moment");
const { resolve, join } = require('path');
const fetch = require("node-fetch");
const snekfetch = require('snekfetch');
const music = new Discord.Client({disableEveryone: true});
music.commands = new Discord.Collection();
const superagent = require("superagent");
const {color} = require('./config.json');
const queue = new Map();
const ytdl = require("ytdl-core");
const Canvas = require('canvas');

const http = require('http');
const fs = require("fs");
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//set activity
music.on('ready', () => {
  console.log(`${music.user.username} is watching ${music.guilds.size} Discord Servers!`);
	let Activities = [`People Join | ${music.guilds.size} Servers ${music.users.size} Users`,
	];
	setInterval(function() {
		let activity = Activities[Math.floor(Math.random() * Activities.length)];
		music.user.setActivity('$help | 319231 Servers', { type: 'playing' }); //
  }, 10000);
});

//prefix $
music.on('message', async message => {

    let prefix = '$';
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    if (!msg.startsWith(prefix)) return;
    if (sender.bot) return;
    
    try {
        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(music, message, args, color, queue); 
    } catch(e) { 
        console.log(e.message); 
    } finally { 
        console.log(`${message.author.username} ran the command: ${cmd} on ${message.guild.name}`);
    }
  if (message.content.startsWith(prefix + "radio pop")) {
message.member.voiceChannel.join().then(connection => {  
 console.log('Music sedang berjalan')
  const dispatcher = connection.playStream(ytdl(`https://www.youtube.com/watch?v=taD9hqwCb1o`));
  connection.dispatcher.setVolumeLogarithmic(0.8);

});
let vEmbed = new Discord.RichEmbed()
.setDescription('**📻 Radio `POP ENGLISH` Berhasil duputar 📻**')
.setColor("#0093f3");  
message.channel.send(vEmbed);

  }
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});


music.login(process.env.TOKEN);

music.on("ready", async () => {
  
  
    console.log(`Logged in as : ${music.user.tag}`);
    console.log(`${music.user.username} is ready!`)

 
             
});

