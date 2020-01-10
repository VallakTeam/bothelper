const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Bot Information",
    url: "http://google.com",
    description: "Thx for using our nice and cool discord bot!",
    fields: [{
        name: "The Owner",
        value: "It's the one and only Rakan Aditya Official#6073"
      },
           {
        name: "Developers",
        value: "We love the community and also our team MD. Kuro#9290 "
      },
      {
        name: "Feedback",
        value: "[Discord Server](https://discord.gg/TmSfsNj) | [invite](https://discordapp.com/oauth2/authorize?client_id=661648558696562698&permissions=8&scope=bot)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© Community Of People Developers"
    }
  }
});
}
module.exports.help = {
name:"info"
}