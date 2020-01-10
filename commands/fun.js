const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   let embed = new Discord.RichEmbed()
  .setTitle("fun")
  .setTimestamp()
  .addField("aj!slots", "Roll the slots!")
  .addField("aj!poke", "Poke a user.")
   .addField ("aj!8ball", "Ask the magical 8ball a question.")
   .addField("aj!get","Get a custom photo with your text ``Ex:`` r.get hi.")
  .addField("aj!meme", "Get a random meme.")
  .addField("aj!cat", "Get random cat image.")
   .addField("aj!rip","Show your condolences for something (or everything).") 
  .addField("aj!dog", "Get a random dog image.")
  .addField("aj!avatar", "Get a member's avatar.")
  .addField("aj!8ball", "Ask the magical 8ball a question.")
  .addField("aj!roll", "Roll a number between 1-100")
  .addField("aj!poll","Make a nice poll for ya")
  .addField("aj!level", "What level are you on.")
  .addField("aj!quiz","Get a random question")
  .addField("aj!flip","Coinflip")
   .addField("aj!animememe","Provide anime memes") 
   .addField("aj!say","make the bot say the smae things")
   .addField("aj!number","pick a custom number")
message.author.send({embed});
  message.reply ("l just send you all the **__fun__** commands in your DMs 📥")
}

module.exports.help = {
  name: "fun"
}
