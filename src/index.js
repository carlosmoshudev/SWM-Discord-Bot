require('dotenv').config();
const Discord = require('discord.js');

const oauth         = process.env.DISCORD_OAUTH;
const chWelcome     = process.env.CHANNEL_WELCOME_ID;
const chRules       = process.env.CHANNEL_RULES_ID;
const chIntroduce   = process.env.CHANNEL_INTRODUCE_ID;
const chSpam        = process.env.CHANNEL_SPAM_ID;
const chMain        = process.env.CHANNEL_MAIN_ID;
const chRole        = process.env.CHANNEL_AUTOROLE_ID;

const client = new Discord.Client();

function Sleep(milliseconds) {
    const date = Date.now();
    var currentDate = null;
    do { currentDate = Date.now(); }
    while (currentDate - date < milliseconds);
}

function TypeRules(messageReference) {
    const welcomeChannel = messageReference.guild.channels.cache.find(
        channel => channel.id === chWelcome
    );
    const rulesChannel = messageReference.guild.channels.cache.find(
        channel => channel.id === chRules
    );
    const introduceChannel = messageReference.guild.channels.cache.find(
        channel => channel.id === chIntroduce
    );
    const spamChannel = messageReference.guild.channels.cache.find(
        channel => channel.id === chSpam
    );
    const mainChannel = messageReference.guild.channels.cache.find(
        channel => channel.id === chMain
    );
    const roleChannel = messageReference.guild.channels.cache.find(
        channel => channel.id === chRole
    );
    const firstColor    = '#FF0000';
    const secondColor   = '#C48B10';
    const thirdColor    = '#099CB0';

    messageReference.channel.send(
        "```prolog 📕 Normas```"
    );
}





client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity('estudiando contigo');
})
client.on('message', async message => {
    console.log('Message received from ' + message.author.username);
    if(message.content === '!write-rules'){
        message.channel.send('-Escribiendo reglas-');
        TypeRules(message);
    }
})
client.on('guildMemberAdd', member => {
    console.log('Member joined: ' + member.user.username);
})

client.login(oauth);