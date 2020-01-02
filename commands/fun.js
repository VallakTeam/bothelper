const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   let embed = new Discord.RichEmbed()
  .setTitle("fun")
  .setTimestamp()
  .addField("r.slots", "Roll the slots!")
  .addField("r.poke", "Poke a user.")
   .addField ("r.8ball", "Ask the magical 8ball a question.")
   .addField("r.get","Get a custom photo with your text ``Ex:`` r.get hi.")
  .addField("r.meme", "Get a random meme.")
  .addField("r.cat", "Get random cat image.")
   .addField("r.rip","Show your condolences for something (or everything).") 
  .addField("r.dog", "Get a random dog image.")
  .addField("r.avatar", "Get a member's avatar.")
  .addField("r.8ball", "Ask the magical 8ball a question.")
  .addField("r.roll", "Roll a number between 1-100")
  .addField("r.poll","Make a nice poll for ya")
  .addField("r.level", "What level are you on.")
  .addField("r.quiz","Get a random question")
  .addField("r.flip","Coinflip")
   .addField("r.animememe","Provide anime memes") 
   .addField("r.say","make the bot say the smae things")
   .addField("r.number","pick a custom number")
message.author.send({embed});
  message.reply ("l just send you all the **__fun__** commands in your DMs 📥")
}

module.exports.help = {
  name: "fun"
}
