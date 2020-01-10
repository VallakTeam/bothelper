const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"contoh > r.timer no s/m/h/ **aj!timer 2s**");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"contoh > r.timer no s/m/h/ **aj!timer 2s**");
  }

  message.channel.send(":white_check_mark: " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
}

module.exports.help = {
    name: "timer"
}