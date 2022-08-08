const { REST, Routes } = require('discord.js');
require('dotenv').config();

const clientId = process.env.CLIENT_ID,
      guildId = process.env.GUILD_ID,
      token = process.env.DISCORD_TOKEN;

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands');

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();