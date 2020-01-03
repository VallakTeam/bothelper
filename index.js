const Discord = require("discord.js");
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

music.on("ready", function() {
  console.log(`${music.user.tag} has started!`);
  setInterval(async () => {
    const statuslist = [
      `r.help | Adit Bot`,
      `r.dev | ON DEVELOPMENT`,
      `user | ${music.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
      `server | ${music.guilds.size.toLocaleString()}`,
      `channel | ${music.channels.size.toLocaleString()}`
    ];
    const random = Math.floor(Math.random() * statuslist.length);
    try {
      await music.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "STREAMING",
          url: "https://www.twitch.tv/rakanaditya"
        },
        status: "idle"
      });
    } catch (error) {
      console.log("status error");
    }
  }, 2000);  
});

music.on('message', async message => {

    let prefix = 'r.';
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

music.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'welcome-goodbye');
	if (!channel) return;
  let bicon = music.user.displayAvatarURL
  let embed = new Discord.RichEmbed()
  .setAuthor(`Welcome To Wibu My Life Otaku & Gamers`, music.user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .setThumbnail(bicon)
  .setDescription(`
Your Identify :
\`\`\Username : ${member.user.username}
Tag : ${member.user.tag}'
Member Now : ${member.guild.memberCount}\`\``)
  if(channel) return channel.send(embed)
});
  
music.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'welcome-goodbye');
	if (!channel) return;
  let bicon = music.user.displayAvatarURL
  let embed = new Discord.RichEmbed()
  .setAuthor(`GoodBye My Friends`, music.user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .setThumbnail(bicon)
  .setDescription(`
Your Identify :
\`\`\Username : ${member.user.username}
Tag : ${member.user.tag}'
Member Now : ${member.guild.memberCount}\`\``)
  if(channel) return channel.send(embed)
});

const {
    Client,
    Attachment
} = require('discord.js');
const bot = new Client();

const cheerio = require('cheerio');

const request = require('request');


const PREFIX = 'r.';

var version = '1.3';



bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'image anime':
        image(message);

        break;
    }

});

function image(message){

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "Anime hentai",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };





    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
  
 
        $ = cheerio.load(responseBody); 
 

        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        
        console.log(urls);

        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
 







}

music.login(process.env.TOKEN);

music.on("ready", async () => {
  
  
    console.log(`Logged in as : ${music.user.tag}`);
    console.log(`${music.user.username} is ready!`)

 
             
});

