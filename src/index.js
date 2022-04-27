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

function BasicEmbedMessage(text, color) {
    return {
        embed: {
            color: color,
            description: text
        }
    };
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
    const normas = [
        `1. Se amable con los demás. Se puede debatir de cualquier tipo de tema, incluso off-topic, sin necesidad de atacar u ofender a nadie.`,
        `2. Evita temas conflictivos o delicados, estamos abiertos a todo tipo de temáticas e ideas y respetamos a las personas.`,
        `3. No se permite contenido NSFW. El contenido sexual y el contenido violento no tienen espacio aquí.`,
        `4. No abuses de las menciones masivas como @here, @everyone o roles; ni las uses para hacer spam.`,
        `5. No publiques spam ni promociones en cualquier canal, ${spamChannel} es un canal dedicado a ello. Úsalo.`,
        `6. El orden da paz, cada canal tiene su finalidad, no escribas cualquier cosa en cualquier canal.`,
        `7. Recuerda que, como en todo servidor de comunidad, tienes que seguir los **términos de servicio** (https://discord.com/tos) y las **Pautas de la comunidad de Discord** (https://discord.com/guidelines).`,
        `8. Se puede hablar de cine y literatura, pero no me seas, no hagas spoilers.`,
        `9. No pidas roles, puedes asignarte roles en ${roleChannel}.`
    ]
    const comunidadSWM = [
        `1. Si haces streams de SWM recuerda asignarte el rol en ${roleChannel}, puedes compartir tu twitch en ${introduceChannel}.`,
        `2. Si tienes dudas relacionadas con Twitch, puedes preguntar sin problemas en ${mainChannel}.`,
        `3. Puedes compartir herramientas, técnicas de estudio, webs y salitas de Forest o similar.`,
        `4. Puedes realizar todas las sugerencias que quieras para personalizar el servidor.`,
        `5. Podemos configurar alertas para tus streams, siempre que sea SWM.`,
        `6. Puedes sugerir juegos para Twitch, avisar cuando vas a jugar y compartir clips de juegos.`
    ]
    messageReference.channel.send(
        "```prolog\n 📕 Normas \n```"
    );
    normas.forEach( x => {
        messageReference.channel.send(BasicEmbedMessage(x, firstColor));
    })
    messageReference.channel.send(
        "```fix\n 📙 Comunidad SWM \n```"
    );
    comunidadSWM.forEach( x => {
        messageReference.channel.send(BasicEmbedMessage(x, secondColor));
    })
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