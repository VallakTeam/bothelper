const { RichEmbed } = require("discord.js"),
      mom = require("moment");

module.exports.run = async (bot, msg, args) => {
  let semoji = args.join(" ");
   if (!semoji) return msg.channel.send(`r.emojiinfo <Emoji>`)
    let temoji = msg.guild.emojis.find(e => semoji.toLowerCase().includes(e.id)) || msg.guild.emojis.find(e => semoji.toLowerCase().includes(e.name.toLowerCase()));
    if (!temoji) return msg.channel.send(':thinking: Emoji Tidak ada?');
    let createdAt = mom(temoji.createdAt).locale('id').utcOffset('+0700').format('dddd, D/MMM/YYYY')
    let embed = new RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(temoji.url)
    .addField("Nama", temoji.name)
    .addField("ID", temoji.id)
    .addField("Identifier", temoji.identifier)
    .addField(temoji, `\`${temoji}\``)
    .setFooter(`Request: ${msg.author.tag}`, msg.author.displayAvatarURL)
    await msg.channel.send(embed).then(async last => {
      if (msg.channel.permissionsFor(bot.user.id).has("ADD_REACTIONS")) {
        last.react(temoji)
      }
    });
  }