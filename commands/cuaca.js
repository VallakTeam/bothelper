const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
        const daerah = args.join(" ");
  
        if (!daerah) {
            return message.channel.send("Usage: /cuaca <kota>")
                .then(m => m.delete(5000));
        }

        const url = `https://rest.farzain.com/api/cuaca.php?id=${daerah}&apikey=21AuixDfnVIOkjlCOlfVcZJQe`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("Tidak Menemukan Cuaca Di Kota Itu")
                .then(m => m.delete(5000));
        }

        const cuaca = res.respon;

        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")//warna
            .addField("Daftar Cuaca", stripIndents`**- Tempat:** ${cuaca.tempat}
            **- Cuaca:** ${cuaca.cuaca}
            **- Deskripsi:** ${cuaca.deskripsi}
            **- Suhu:** ${cuaca.suhu}
            **- Kelembapan:** ${cuaca.kelembapan}
            **- Udara:** ${cuaca.udara}
            **- Angin:** ${cuaca.angin})
        message.channel.send(embed);

}