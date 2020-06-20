module.exports.run = async(client, message, args) => {
    let servant = args.replace(/ /g, "_");                          // "/ /g" replace all spaces in message contents
    message.channel.send("https://fategrandorder.fandom.com/wiki/" + servant);
}