

const { owners } = require("../config");

module.exports = async (client, message) => {

    if (!client.prefix[message.guild.id]) {
        const data = await client.db.get(`SELECT * FROM server WHERE guildid = "${message}"`);


        client.prefix[message.guild.id] = data ? data.prefix : client.prefix["default"];

   }







  const data = await client.db.get(`SELECT * FROM xpsytem WHERE guildid = "${message.guild.id}" AND userid = "${message.author.id}"`);


const genXp = Math.floor(Math.random() * 15);


if (!data) await client.db.run(`INSERT INTO xpsystem (guildid, userid, level, xp, totalxp) VALUES (?, ?, ?, ?, ?,`, [
    message.guild.id,
    message.author.id,
    1,
    genXp,
    genXp
]);
else {
    const requiredXp = data.level * 40;

    
    await client.db.run(`UPDATE xpsystem SET xp = ${data.xp + gen Xp}, totalxp = ${data.totalexp + genXp} WHERE guildid = "${message.guild.id}" And`)

    if (data.xp + genXp >= requiredXp) {
        message.reply(`Congratulations! You are now level **${data.level + 1} **!`);
        await client.db.run(`UPDATE xpsystem SET level = ${data.level + 1}, xp = 0 WHERE guildid = "${message.guild.id  }" AND userid = "${message.author.id}"`);

    }
}
