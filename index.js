const Discord = require("discord.js");
const music = new Discord.Client({disableEveryone: true});
music.commands = new Discord.Collection();
const superagent = require("superagent");
const {color} = require('./config.json');
const queue = new Map();
const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const { get } = require("snekfetch");

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


music.on('message', async message => {

    let prefix = 'gwel';
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
});

music.login(process.env.TOKEN);

music.on("ready", async () => {
music.user.setActivity('WELCOMER GOOD GAME!!')
    console.log(`Logged in as : ${music.user.tag}`);
    console.log(`${music.user.username} is ready!`)
              
});
music.on("guildMemberAdd", async member => {  
            var namam = member.user.username
            var jadim = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
            async function createCanvas() {
            var imageUrlRegex = /\?size=2048$/g;

            var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/490474632147763200/491921782220128287/Screenshot_33.png`);
            var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

            return new Canvas(856, 376)
              .addImage(avatar, 100, 50, 256, 256, 128)
      .setColor('#11c40f')
              .setTextAlign('left')
              .setTextFont('bold 30px Arial')
              .addImage(background, 0, 0, 856, 376)
              .addText(`${jadim}`, 295, 88)
              .addImage(avatar, 40, 63, 164, 140)
              .toBufferAsync();
            }
    let channel = member.guild.channels.get(`493031211321655297`);
  channel.send(`💞 **Selamat Datang** ${member.user} **Jangan lupa untuk melihat <#493044741798363136> terlebih dahulu. Isi biodatanya ya biar saling kenal <#493044916801503233> semoga betah**💕 Instagram: https://instagram.com/g2_goodgame whattsap: https://chat.whatsapp.com/6x2OocGiR0oJndDKnm43uK`,{
  files: [{
    attachment: await createCanvas(),
    name: 'By Loyal.jpg'
  }] })
});
