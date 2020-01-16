const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
  .setColor("#4290AE")
  .setTimestamp()
  .setAuthor(`𝐇𝐄𝐋𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃™`, "https://cdn.discordapp.com/avatars/666975140092837909/97b7199102b9a355b27a8c9e38575834.png?size=2048")
  .setThumbnail("https://cdn.discordapp.com/avatars/666975140092837909/97b7199102b9a355b27a8c9e38575834.png?size=2048")
.addField("𝐇𝐄𝐋𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃", "~sinki | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐇𝐀𝐂𝐊 𝟏𝟐.𝟐𝟖\n~bpsinki | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐁𝐘𝐏𝐀𝐒𝐒 𝟏𝟐.𝟏𝟒\n~aio | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐒𝐈𝐍𝐊𝐈 𝐀𝐋𝐋 𝐈𝐍 𝐎𝐍𝐄 𝐓𝐎𝐎𝐋\n~kingsmen | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐊𝐈𝐍𝐆𝐒𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 𝟒.𝟎\n~reymen | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐑𝐄𝐘𝐌𝐄𝐍 𝐇𝐀𝐂𝐊 𝟖.𝟐\n~driver | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐅𝐔𝐋𝐋 𝐃𝐑𝐈𝐕𝐄𝐑\n~temp | 𝐋𝐈𝐍𝐊 𝐃𝐎𝐖𝐋𝐎𝐀𝐃 𝐀𝐔𝐓𝐎 𝐂𝐋𝐄𝐀𝐑 𝐓𝐄𝐌𝐏")
message.author.send({embed});
  message.react("✅");
  message.delete(3000).catch(console.error);//delete 3000 aja //iya beb iyaa udah berubah ko
}
