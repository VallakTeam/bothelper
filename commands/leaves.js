const Discord = require('discord.js');
const ytdl = require('ytdl-core');


module.exports.run = async (client, message, args) => {

message.member.voiceChannel.leave()
let vEmbed = new Discord.RichEmbed()
.setDescription('**📵 Bot berhasil di keluarkan 📵**')
.setColor("#ff0000");  
message.channel.send(vEmbed);

}