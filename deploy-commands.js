require('dotenv').config();

token = process.env.DISCORD_TOKEN;
secret = process.env.CLIENT_SECRET;
clientId = process.env.CLIENT_ID;
guildId = process.env.GUILD_ID;

const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}
