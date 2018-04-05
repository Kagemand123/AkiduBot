const Discord = require('discord.js');
cont client = new Discord.Client();

client.on('ready', () => {
    console.log('Jeg er klar!');
]);

client.on('message', message => {
    if (message.content === 'kage') {
      message.reply(':cake:');
    }
]);

client.login(process.env.BOT_TOKEN);
