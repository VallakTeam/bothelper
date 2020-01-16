const Discord = require('discord.js');
const client = new Discord.Client();

var Message = function(t, m, message){
  let embed = new Discord.RichEmbed()
         .setTitle(t)
        .setDescription(m)
        .setColor("0x0000ff")
  .setTimestamp()
  .setThumbnail(`${message.author.avatarURL}`)
.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL);
        //.setTimestamp();
message.react("✅");
  message.delete(5000).catch(console.error);
    message.author.send(embed);

};

var cmds = [
  {
    name: "SINKI HACK",
   descr: "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐇𝐀𝐂𝐊 𝟏𝟐.𝟐𝟖",
    usage: "?sinki",
    cnames: ["sinki", "sinkihack"],
    command: function(message){
      var sinkihack = Math.floor(Math.random()*2);
      if(sinkihack === 1){
      Message("SINKI HACK", "New Update SINKI 1.06\n**https://www.ytsubme.com/_/hTkYt/**", message);
      }
      
      else{
        Message("SINKI HACK", "New Update SINKI 1.06\n**https://www.ytsubme.com/_/hTkYt/**", message);
      }
    },
  },
  {
    name: "SINKI BYPASS",
    descr: "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐁𝐘𝐏𝐀𝐒𝐒 𝟏𝟐.𝟏𝟒 | ``-bpsinki``",
    usage: "?bpsinki",
    cnames: ["bpsinki", "sinkibypass"],
    command: function(message){
      var sinkibypass = Math.floor(Math.random()*2);
      if(sinkibypass === 1){
        Message("SINKI BYPASS", "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐁𝐘𝐏𝐀𝐒𝐒 𝟏𝟐.𝟏𝟒\n**https://sinki.page.link/bypass**", message);
      }
      
      else{
        Message("SINKI BYPASS", "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐁𝐘𝐏𝐀𝐒𝐒 𝟏𝟐.𝟏𝟒\n**https://sinki.page.link/bypass**", message);
      }
    },
  },
  {
    name: "𝐒𝐈𝐍𝐊𝐈 𝐀𝐋𝐋 𝐈𝐍 𝐎𝐍𝐄",
    descr: "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐀𝐋𝐋 𝐈𝐍 𝐎𝐍𝐄 𝐓𝐎𝐎𝐋 | ``-aio``",
    usage: "?aio",
    cnames: ["aio", "aio"],
    command: function(message){
      var aio = Math.floor(Math.random()*2);
      if(aio === 5){
        Message("SINKI All In One", "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐀𝐋𝐋 𝐈𝐍 𝐎𝐍𝐄 𝐓𝐎𝐎𝐋\n**https://www.ytsubme.com/_/g0wvM/**", message);
      }
      else{
        Message("SINKI All In One", "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐀𝐋𝐋 𝐈𝐍 𝐎𝐍𝐄 𝐓𝐎𝐎𝐋\n**https://www.ytsubme.com/_/g0wvM/**", message);
      }
    },
  },
  {
    name: "KINGSMEN HACK",
    descr: "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐊𝐈𝐍𝐆𝐒𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 𝟒.𝟎 | ``-kingsmen``",
    usage: "?kingsmen",
    cnames: ["kingsmen", "kingsmen"],
    command: function(message){
      var kingsmen = Math.floor(Math.random()*2);
      if(kingsmen === 1){
        Message("KINGSMEN HACK", "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐊𝐈𝐍𝐆𝐒𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 𝟒.𝟎\n**https://mega.nz/#!7llFFSbA!va4BWGiRlfPyNuYee64Wf4jFd7H9iFSQ8HO99DqjUbY**", message);
      }
      else{
        Message("KINGSMEN HACK", "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐊𝐈𝐍𝐆𝐒𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 𝟒.𝟎\n**https://mega.nz/#!7llFFSbA!va4BWGiRlfPyNuYee64Wf4jFd7H9iFSQ8HO99DqjUbY**", message);
      }
    },
  },
  {
    name: "REYMEN HACK",
    descr: "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐑𝐄𝐘𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 v1.0 | ``-reymen``",
    usage: "?reymen",
    cnames: ["reymen", "reymen"],
    command: function(message){
      var reymen = Math.floor(Math.random()*2);
      if(reymen === 1){
        Message("REYMEN HACK", "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐑𝐄𝐘𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 v1.0\n**https://mega.nz/#!yjI33CLD!e_jxGZXuLDm9J0mRMUZtxuPMW2z1h903Xdiy8vpEUDo**" , message);
      }
      else{
        Message("REYMEN HACK", "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐑𝐄𝐘𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 v1.0\n**https://mega.nz/#!yjI33CLD!e_jxGZXuLDm9J0mRMUZtxuPMW2z1h903Xdiy8vpEUDo**" , message);
        
      }
    },
  },
  {
    name: "DRIVER",
    descr: "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐅𝐔𝐋𝐋 𝐃𝐑𝐈𝐕𝐄𝐑 | ``-driver``",
    usage: "?driver",
    cnames: ["driver", "driver"],
    command: function(message){
      var driver = Math.floor(Math.random()*2);
      if(driver === 1){
        Message("FULL DRIVER", "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐅𝐔𝐋𝐋 𝐃𝐑𝐈𝐕𝐄𝐑\n**https://mega.nz/#!yjI33CLD!e_jxGZXuLDm9J0mRMUZtxuPMW2z1h903Xdiy8vpEUDo**", message);
      }
      else{
        Message("FULL DRIVER", "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐅𝐔𝐋𝐋 𝐃𝐑𝐈𝐕𝐄𝐑\n**https://mega.nz/#!yjI33CLD!e_jxGZXuLDm9J0mRMUZtxuPMW2z1h903Xdiy8vpEUDo**", message);
      }
    },
  },
  {
    name: "TEMP",
    descr: "𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐀𝐔𝐓𝐎 𝐂𝐋𝐄𝐀𝐑 𝐓𝐄𝐌𝐏 | ``-temp``",
    usage: "?temp",
    cnames: ["temp", "temp"],
    command: function(message){
      var temp = Math.floor(Math.random()*2);
      if(temp === 1){
        Message("AUTO CLEAR TEMP", "𝐋𝐢𝐧𝐤 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐀𝐔𝐓𝐎 𝐂𝐋𝐄𝐀𝐑 𝐓𝐄𝐌𝐏\n**https://mega.nz/#!xhZShS5A!v8I1wehW9dlUtCvxU1poaiH9HX4v1Tt4awc6PIOhGgY**", message);
      }
      else{
        Message("AUTO CLEAR TEMP", "𝐋𝐢𝐧𝐤 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐀𝐔𝐓𝐎 𝐂𝐋𝐄𝐀𝐑 𝐓𝐄𝐌𝐏\n**https://mega.nz/#!xhZShS5A!v8I1wehW9dlUtCvxU1poaiH9HX4v1Tt4awc6PIOhGgY**", message);
      }
    },
  },
  {
    name: "help",
    descr: "𝐀 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐭𝐡𝐚𝐭 𝐥𝐢𝐬𝐭𝐬 𝐚𝐥𝐥 𝐞𝐱𝐢𝐬𝐭𝐢𝐧𝐠 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬",
    usage: "?help",
    cnames: ["help"],
    command: function(message, args, commands){
      var pg = Math.floor(args[0]) || 0;
      if(args[0] === undefined || args[0] === ""){
        args[0] = 1;
        pg = 1;
      }
      if(pg < 2 || pg > 2+Math.floor(commands.length/5)){
        Message("𝐇𝐄𝐋𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃", "-sinki | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐇𝐀𝐂𝐊 𝟏𝟐.𝟐𝟖\n-bpsinki | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐁𝐘𝐏𝐀𝐒𝐒 𝟏𝟐.𝟏𝟒\n-aio | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐀𝐋𝐋 𝐈𝐍 𝐎𝐍𝐄 𝐓𝐎𝐎𝐋\n-kingsmen | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐊𝐈𝐍𝐆𝐒𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 𝟒.𝟎\n-reymen | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐑𝐄𝐘𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 𝟖.𝟐\n-driver | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐅𝐔𝐋𝐋 𝐃𝐑𝐈𝐕𝐄𝐑\n-temp | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐀𝐔𝐓𝐎 𝐂𝐋𝐄𝐀𝐑 𝐓𝐄𝐌𝐏", message);
        
        return;
      }
      var max = pg*7;
      if(max >= commands.length){
        max = commands.length;
      }
      pg = pg-1;
      var h1 = "";
      for(var i = pg*5;i < max;i ++){
        h1 +=`**${commands[i].name}** - \`${commands[i].usage}\`\n${commands[i].descr}\n\n`;
      }
      
      Message(`**HELP:** Page ${pg+1}/${1+Math.floor(max/5)}:`, `${h1}`, message);
    },
  },
];
client.on('message', message => {
  if(message.channel.type === 'message') return;
  if(message.author.id === client.user.id || message.author.bot) return;
  
  var commandMessage = message.toString();
  if(commandMessage.startsWith("-")){
    commandMessage = commandMessage.slice(1);
    
    
    var fullCmd = commandMessage;
    var nameCmd = fullCmd.split(' ')[0]; //gets the name of the command
    var args = fullCmd.replace(nameCmd, ''); //gets the args and takes out the name of the command
    nameCmd = nameCmd.toLowerCase(); //converts the command to lowercase, so Flip and flip will work for example.
    args = args.slice(1); //takes out the space before the args
    args = args.split(' ');
    
    //console.log(commandMessage);
    for(var i = 0;i < cmds.length; i ++){
      for(var j = 0;j < cmds[i].cnames.length;j ++){
        if(nameCmd === cmds[i].cnames[j]){
          cmds[i].command(message, args, cmds);
          return;
        }
      }
    }
  }
});
client.on("ready", () => {
    client.user.setActivity('help | 7693 Users', { type: 'playing' })
  .then(presence => console.log(`Activity set to ${presence.STREAMING ? presence.STREAMING .NOBITA : '𝐍𝐎𝐁𝐈𝐓𝐀×𝐆𝐀𝐌𝐈𝐍𝐆 𝐘𝐓 𝐘𝐓'}`))
  .catch(console.error);
});