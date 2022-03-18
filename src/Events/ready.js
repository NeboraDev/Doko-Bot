module.exports = {
    name: "Ready",
    once: true,
    execute(client) {
        console.log("Ready! Logged in as ${client.user.tag}");
    },
}