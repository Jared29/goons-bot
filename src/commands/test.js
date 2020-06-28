module.exports.run = async(client, message, args) => {
    let unon = message.guild.emojis.find(emoji => emoji.name === "unon");
    message.channel.send(`${unon} Dean ${unon} popping ${unon} off ${unon} on ${unon} Zoe ${unon} again ${unon}`);
}