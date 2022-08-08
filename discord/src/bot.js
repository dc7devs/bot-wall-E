require('dotenv').config();
const { DISCORD_TOKEN } = process.env;
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logado com ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply(`🏓 Pong!\n${client.ws.ping} ms`);
    } else if (interaction.commandName === 'server') {
        await interaction.reply(`${interaction.guild.emojis}\n${interaction.guild.members}\nNome do servidor:${interaction.guild.name}\nTotal de membros: ${interaction.guild.memberCount}`);
    } else if (interaction.commandName === 'user'){
        await interaction.reply(`${interaction.user.avatar}\n\nSuas tags: ${interaction.user.tag}\nSeu ID: ${interaction.user.id}`);
    }
})

client.login(DISCORD_TOKEN);