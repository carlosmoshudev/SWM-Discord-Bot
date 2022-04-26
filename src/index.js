require('dotenv').config();
const Discord = require('discord.js');

const oauth = process.env.DISCORD_OAUTH;
const chWelcome = process.env.CHANNEL_WELCOME_ID;
const chRules = process.env.CHANNEL_RULES_ID;
const chIntroduce = process.env.CHANNEL_INTRODUCE_ID;
const chSpam = process.env.CHANNEL_SPAM_ID;
const chMain = process.env.CHANNEL_MAIN_ID;
const chRole = process.env.CHANNEL_AUTOROLE_ID;

const client = new Discord.Client();

function Sleep(milliseconds) {
    const date = Date.now();
    var currentDate = null;
    do { currentDate = Date.now(); }
    while (currentDate - date < milliseconds);
}






client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity('estudiando contigo');
})
client.on('message', async message => {
    console.log('Message received from ' + message.author.username);
    if(message.content === '!write-rules'){
        message.channel.send('-Escribiendo reglas-');
        TypeRules();
    }
})
client.on('guildMemberAdd', member => {
    console.log('Member joined: ' + member.user.username);
})

client.login(oauth);