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

music.on("ready", function() {
  console.log(`${music.user.tag} has started!`);
  setInterval(async () => {
    const statuslist = [
      `Google Chrome`,
      `aj!help | Adit Jam Bot`,
      `user! | ${music.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
      `server! | ${music.guilds.size.toLocaleString()}`,
      `channel! | ${music.channels.size.toLocaleString()}`,
      `Jam: ${moment()
        .utcOffset("+0700")
        .format("HH:mm A")}`,
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

    let prefix = 'aj!';
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

app.get("/", (request, response) => {
  response.sendStatus(200);
});


music.on('guildMemberAdd', async member => {
  
  const channel = member.guild.channels.find(ch => ch.id === '662433738981900338');
  if (!channel) return;	

  let namam = member.user.tag;
  let username = namam.length > 12 ? namam.substring(0.10) + "" : namam;
  let imageUrlPhoto = /\?size=2048$/g;

async function createCanvas() {
  
  let image = 'https://cdn.discordapp.com/attachments/662300978845974549/665333325568802816/wp2474652.png';
  let thumimg = 'https://cdn.discordapp.com/attachments/627247046193184779/665275012005101578/polos_image.png';
      
            let { body : background } = await snekfetch.get(image);
            let { body : thumbnail } = await snekfetch.get(thumimg);
            let { body : avatar } = await snekfetch.get(member.user.avatarURL);
           
            return new Canvas(1000, 500)
              .addImage(background, 0, 0, 1000, 500) // BACKGROUND
              .addImage(thumbnail, 0, 0, 1000, 500) // THUMBNAIL
              .addCircularImage(avatar, 189 , 180, 140) // PROFILE
               
              .setColor('#ffffff')
              .setTextFont('40px sans-serif')
              .setTextAlign('left')
              .addText(`${username}`, 350, 225)
              .addText(`Member: ${member.guild.memberCount}`, 350, 280)
              
              .setColor('#ffffff')
              .setTextFont('40px sans-serif')
              .setTextAlign('center')
              .addText(`${member.guild.name}`, 635, 485)
      
              .toBufferAsync()
    };
    channel.send({
    files: [{
    attachment: await createCanvas(),
    name: 'welcome.png'}] 
  });    
});


music.login(process.env.TOKEN);

music.on("ready", async () => {
  
  
    console.log(`Logged in as : ${music.user.tag}`);
    console.log(`${music.user.username} is ready!`)

 
             
});

