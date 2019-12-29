const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('sata siap digunakan');
});

client.on('message', async message => {
 if (message.content ==="halo") {
message.channel.send('Hello word');

}
