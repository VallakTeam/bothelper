bot.on("guildMemberAdd", member => {
  const channel = member.guild.channels
    .find(ch => ch.id === "662433738981900338");
  if (!channel) return;
  channel.send(
    `**Welcome To Server .....**`
  );
}); 

bot.on("guildMemberAdd", member => {
  const channel = member.guild.channels
    .find(ch => ch.name === "welcome-goodbye");
  if (!channel) return;
  channel.send(
    `**Welcome To Server .....**`
  );
}); 