client.on("guildMemberAdd",function(message) {

  let guild = message.guild;
  let member = message;
  let membercount = client.user.size;

  const embed = new Discord.RichEmbed
  .setColor(0xffffff)
  .setTitle(`adit music Bot = welcome`)
  .setDescription('hallo ${member.user}, welcome to wibu & gamers.')
  .setThumbnail(member.user.avatarURL)
  

  member.guild.channel.find('name', 'welcome').send({ embed: embed});