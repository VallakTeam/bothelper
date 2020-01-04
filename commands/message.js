

const { owners } = require("../config");

module.exports = async (client, message) => {

    if (!client.prefix[message.guild.id]) {
        const data = await client.db.get(`SELECT * FROM server WHERE guildid = "${message}"`);


        client.prefix[message.guild.id] = data ? data.prefix : client.prefix["default"];

   }







  