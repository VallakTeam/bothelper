const Discord = require('discord.js');
const ytdl = require('ytdl-core');


module.exports.run = async (client, message, args) => {

message.member.voiceChannel.leave()
let vEmbed = new Discord.RichEmbed()
.setDescription('**📵 Radio berhasil di keluarkan 📵**')
.setColor("#0093f3");  
message.channel.send(vEmbed);

}