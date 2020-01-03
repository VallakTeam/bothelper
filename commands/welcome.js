const Discord = require("discord.js");
const client = new Discord.Client();
const http = require("https");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("guildMemberAdd", member => {
  var channel = member.guild.channels.find(ch => ch.id === "662433738981900338")

if(!channel) return;

let embed = new Discord.RichEmbed()
.setTitle("Welcome to my frends!")
.setDescription(`
Your Identify
\`\`\`Username : ${member.user.username}
Tag : ${member.user.tag}
Discrim : ${member.user.discriminator}
Member now : {member.guild.memberCount}\`\`\``)
  .setColor("RANDOM")
  if(channel) return channel.send(embed)
});
client.on("guildMemberRemove", member => {
  var channel = member.guild.channels.find(ch => ch.id === "662433738981900338")

if(!channel) return;

let embed = new Discord.RichEmbed()
.setTitle("Goodbye to my frends!")
.setDescription(`
Your Identify
\`\`\`Username : ${member.user.username}
Tag : ${member.user.tag}
Discrim : ${member.user.discriminator}
Member now : ${member.guild.memberCount}\`\`\``)
  .setColor("RANDOM")
  if(channel) return channel.send(embed)
});
client.login("NjU3MzUxOTY5MjUzNDkwNjk5.Xgp17w.nyWBwlqGOAwSAmKHcgPmBibGByM")