const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.once("ready", () => {
    console.log("Doko is now online!");
})

client.login(config.token);