// index.js
const { Client, GatewayIntentBits } = require('discord.js');

// Create Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

// Debug: check token
if (!process.env.DISCORD_TOKEN) {
    console.error("ERROR: DISCORD_TOKEN not found! Make sure it's set in Railway variables.");
    process.exit(1);
} else {
    console.log("DISCORD_TOKEN length:", process.env.DISCORD_TOKEN.length);
}

// Ready event
client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

// Login with token
client.login(process.env.DISCORD_TOKEN).catch(err => {
    console.error("Failed to login. Invalid token?");
    console.error(err);
});
