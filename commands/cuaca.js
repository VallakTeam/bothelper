const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = async (client, message, args) => {

   weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) message.channel.send(err);

            if (result.length === 0) {
                message.channel.send('**Please enter a valid location.**')
                return;
            }

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Cuaca Untuk ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('Zona Waktu',`UTC${location.timezone}`, true)
                .addField('Suhu Derajat',`${current.temperature} °C`, true)
                .addField('Kecepatan Angin',current.windspeed, true)
                .addField('Kelembaban', `${current.humidity}%`, true)

                message.channel.send(embed);
        });
    }