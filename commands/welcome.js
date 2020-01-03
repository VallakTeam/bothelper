const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  var channel = member.guild.channels.find(ch => ch.id === "")

if(!channel) return;

let embed = new Discord.RichEmbed()
.setTitle("Welcome to my frends!")
.setDescription(`
Your Identify
\`\`\`Username : ${member.user.username}
Tag : $