module.exports.run = async(client, message, args) => {
    let resiSleeper = message.guild.emojis.cache.find(emoji => emoji.name === "residentsleeper");
    message.channel.send(`${resiSleeper} Dean ${resiSleeper} popping ${resiSleeper} off ${resiSleeper} on ${resiSleeper} Zoe ${resiSleeper} again ${resiSleeper}`);
}