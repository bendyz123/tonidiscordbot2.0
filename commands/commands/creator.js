const commando = require('discord.js-commando');

class WhoMadeMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'creator',
            group: 'commands',
            memberName: 'creator',
            description: 'Tells you who made me, Toni'
        });
    }

    async run(message, args)
    {
        {
            message.reply("The creator of me, Toni is bendyzf🎃#8761")
            
        }
    }
} 

module.exports = WhoMadeMeCommand;