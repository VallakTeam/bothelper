const Discord = require('discord.js');

module.exports.run = (bot, message, args,) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Anda harus memiliki izin ** Kelola Pesan ** untuk menggunakan perintah ini.");

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
      argsresult = args.slice(1).join(" ")
      mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
   }

}


module.exports.config = {
    name: "say",
    description: "mengirim pesan yang dimasukkan ke saluran",
    usage: "r.say",
    accessableby: "Staff",
    aliases: ["acc", "announcement"]
}