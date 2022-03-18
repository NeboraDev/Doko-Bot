module.exports = class Messages{

    client.on("messageCreate", (message) => {
        if (message.content === "doko is a loser") {
            message.reply({
                content: "i am epic u r losr",
            })
        }
    })
}