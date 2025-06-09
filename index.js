const {Client,GatewayIntentBits} = require('discord.js')
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ],
    partials:['CHANNEL']
})

const absurdMessage = ["MESSAGE APAPUN"]

async function kirimDM(){
    try{
        const guild = client.guilds.cache.first();
        if (!guild) return console.log('Bot belum gabung di server apapun.');

        await guild.members.fetch();

        const members = guild.members.cache.filter(m=>!m.user.bot);

        if (members.size ===0) return console.log('Gaada member yang bisa dikirimin DM.');

        const memberRandom = members.random();

        const message = absurdMessage[Math.floor(Math.random() * absurdMessage.length)];

        await memberRandom.send(message);

        console.log(`DM Terkirim ke ${memberRandom.user.tag}: ${message}`);
    }catch(err){
        console.error('Gagal kirim DM:',err);
    }
}

client.once('ready',()=>{
    console.log(`Logged in as ${client.user.tag}`);
    setInterval(kirimDM, 30 * 60 * 1000);
    kirimDM();
})

client.login('[MASUKAN TOKEN KALIAN]');