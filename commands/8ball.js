const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("Silakan ajukan pertanyaan lengkap")
  let replies = ["Sudah pasti", "Jelas sekali demikian",
										"Tanpa keraguan",
										"Iya tentu saja",
										"Seperti yang saya lihat, ya",
										"Yang paling disukai",
										"Iya",
										"Tanda menunjukkan ya",
										"Tanya lagi nanti",
										"Lebih baik tidak memberi tahu Anda sekarang",
										"Tidak dapat memprediksi sekarang",
										"Berkonsentrasi dan bertanya lagi",
										"Jangan mengandalkan itu",
										"Balasan saya tidak ",
										"Sumber saya mengatakan tidak",
										"Sangat meragukan"];
  
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");
  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#42f453")
  .addField("🎱Question", question)
  .addField("🎱Answer", replies[result]);
  message.channel.send(ballembed);
}
module.exports.help = {
  name: "aj!8ball"
}