require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { launchBots } = require('./lib/agario-client');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log('✅ Bot listo');
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;

  if (message.content.startsWith('!ping')) {
    message.reply('🏓 ¡Estoy vivo!');
  }

  if (message.content.startsWith('!bots')) {
    const [_, partyCode, region, mode] = message.content.trim().split(' ');
    if (!partyCode || !region || !mode) {
      return message.reply('Uso correcto: `!bots <código_party> <región> <modo>`');
    }

    message.reply(`🎮 Enviando bots a ${partyCode} en la región ${region} en modo ${mode}`);
    launchBots(partyCode, region, mode);
  }
});

client.login(process.env.TOKEN);
