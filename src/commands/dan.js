module.exports.run = async(client, message, args) => {
    let gigaDan1 = message.guild.emojis.cache.find(emoji => emoji.name === "gigamonkaomegadan1");
    let gigaDan2 = message.guild.emojis.cache.find(emoji => emoji.name === "gigamonkaomegadan2");
    let gigaDan3 = message.guild.emojis.cache.find(emoji => emoji.name === "gigamonkaomegadan3");
    let gigaDan4 = message.guild.emojis.cache.find(emoji => emoji.name === "gigamonkaomegadan4");
    message.channel.send(`${gigaDan1}${gigaDan2}${gigaDan3}${gigaDan4}`);
}