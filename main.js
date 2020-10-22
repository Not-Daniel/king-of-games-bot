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
            //vary a struktura message
            const usr = msg.author.username;
            var content = msg.content;
            var content = content.replace(/!request/,"");
            var content = `${content} ${usr}`;
            //konec varu 
            //embed
            const embed =  new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Request')
                .setDescription(`${content}`)

            msg.author.send("✅The request has been sent!✅");//napise odesilataly ✅The request has been sent!✅
            msg.client.channels.cache.get('768807673801736213').send(embed);
        break;
    }
});
bot.login(process.env.token);