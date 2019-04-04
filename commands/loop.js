const Discord = require('discord.js');
exports.run = async(music, message, args, color, queue) => {

const serverQueue = queue.get(message.guild.id);  
  const loop = new Discord.RichEmbed()
  .setDescription("🔁 **Enable**")
  .setColor("#0aaaeb")
  const unloop = new Discord.RichEmbed()
  .setDescription("🔁 **Disable**")
  .setColor("#0aaaeb")
  serverQueue.loop = !serverQueue.loop;
  if(serverQueue.loop) return message.channel.send(loop)
  return message.channel.send(unloop)
}