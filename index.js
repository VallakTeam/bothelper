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

//nge tes welome $welcome
music.on('message', message => {
	if (message.content === "$welcome") {
		music.emit('guildMemberAdd', message.member);
	};
});

music.on('guildMemberAdd', async member => {
  //server message
  const channel = member.guild.channels.find(ch => ch.id === '669973023146901504');
  if (!channel) return;	

  let namam = member.user.tag;
  let username = namam.length > 12 ? namam.substring(0.10) + "" : namam;
  let imageUrlPhoto = /\?size=2048$/g;

async function createCanvas() {
  
  let image = 'https://cdn.discordapp.com/attachments/662300978845974549/665266319683485708/25255BUNSET25255D.png';
  let thumimg = 'https://cdn.discordapp.com/attachments/642400791205773322/665283461296422932/20200110_034626.png';
      
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


//join to create
music.on('voiceStateUpdate', (oldMember, newMember) => {

  const categorykita = '668221576079999013'
  const voicekita = '678663446702719014'

  if(newMember.voiceChannelID === voicekita){

    newMember.guild.createChannel(`${newMember.user.username}`, {type: 'voice'})
    .then(tempChannel => {
      tempChannel.setParent(categorykita);
      newMember.setVoiceChannel(tempChannel.id);
      tempChannel.setUserLimit('10');
      })
      .catch(console.error);

  }

  if(oldMember.voiceChannelID) {

    const voicelama = oldMember.guild.channels.get(oldMember.voiceChannelID);

    if(voicelama.name.startsWith(`${oldMember.user.username}`)) {
      voicelama.delete()
      .then(function() {
        console.log('sudah di hapus yang lama')
      })
      .catch(console.error);
    }

  }

})




app.get("/", (request, response) => {
  response.sendStatus(200);
});




music.on("ready", async () => {
  
  
    console.log(`Logged in as : ${music.user.tag}`);
    console.log(`${music.user.username} is ready!`)

 
             
});

music.login("NjY2MjU2ODQwMzE2ODEzMzM1.Xn_ZVA.etoQHxe1jb6rS1rMQEDFEykOIQA");