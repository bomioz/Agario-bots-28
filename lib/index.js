require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log('Bot listo!');
});

client.on('messageCreate', async message => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }

  if (message.content.startsWith('!bots')) {
    message.reply('Uso correcto: `!bots <código_party> <región> <modo>`');
    // Aquí luego activaremos los bots reales
  }
});

client.login(process.env.DISCORD_TOKEN);
