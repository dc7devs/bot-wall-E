const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interationCreate', async interaction => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
})

client.login(process.env.DISCORD_TOKEN);