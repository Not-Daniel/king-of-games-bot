const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix ="!";



bot.on("ready", () =>{
    console.log("bot je on");
})

bot.on("message",msg=>{
    let args = msg.content.substring(prefix.length).split(" ");
    switch (args[0]) { 
        case 'request':
            const content = msg.content;
            const content2 = content.replace(/!request/,"");
            msg.author.send("✅The request has been sent!✅");
            msg.client.channels.cache.get('768789192951332874').send(`${content2}`);
        break;
    }
});
bot.login(process.env.token);