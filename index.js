const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NDk3NjM3NjY1NDU4MzU2MjI1.DpiEwQ.0OCUCkFmyyR2hPh8Nxf1pYvHI0k'

bot.registry.registerGroup('commands', 'commands');
bot.registry.registerGroup('music', 'music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 'help')
    {
        
    }
});

bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);