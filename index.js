const { Client, Intents } = require('discord.js')
const client = new Client(
  {
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ],
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
  });

client.once("ready", () => {
    console.log("READY");
})

client.login("YOUR DISCORD BOT TOKEN");
