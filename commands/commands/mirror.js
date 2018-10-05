const commando = require('discord.js-commando');

class MirrorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mirror',
            group: 'commands',
            memberName: 'mirror',
            description: 'See your reflection'
        });
    }

    async run(message, args)
    {
        message.reply(message.author.avatarURL);
    }
} 

module.exports = MirrorCommand;