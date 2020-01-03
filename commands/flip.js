const Discord = require("discord.js");

	module.exports.run = async (bot, message, args) => {

	var resultflip = Math.floor((Math.random() * 2) + 1);
	if (resultflip == 1) {

	const embedheads = new Discord.RichEmbed()
	.setTitle("Coinflip")
  .setImage('https://discordemoji.com/assets/emoji/Coin.gif')
	.setColor("#F8A61C")
	.setDescription(`The coin landed **heads!**`);
	message.channel.send(embedheads);
	} else if (resultflip == 2) {

	const embedtails = new Discord.RichEmbed()
	.setTitle("Coinflip")
  .setImage('https://discordemoji.com/assets/emoji/Coin.gif')
	.setColor("#F8A61C")
	.setDescription(`The coin landed **tails!**`);
	message.channel.send(embedtails);

  var resultflip = Math.floor((Math.random() * 2) + 1);
	if (resultflip == 1) {
  const embedtails = new Discord.RichEmbed()
	.setTitle("Coinflip")
  .setImage('https://discordemoji.com/assets/emoji/Coin.gif')
	.setColor("#F8A61C")
	.setDescription(`The coin landed **body!**`);
	message.channel.send(embedtails);
  } else if (resultflip == 3) {

	const embedtails = new Discord.RichEmbed()
	.setTitle("Coinflip")
  .setImage('https://discordemoji.com/assets/emoji/Coin.gif')
	.setColor("#F8A61C")
	.setDescription(`The coin landed **lip!**`);
	message.channel.send(embedtails);
  } else if (resultflip === 4) {
  }
  }
	}
  

module.exports.help = {
	name: "flip"
}