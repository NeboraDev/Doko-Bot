const Discord = require("discord.js")

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