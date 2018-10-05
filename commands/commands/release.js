const commando = require('discord.js-commando');

class ReleaseCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'release',
            group: 'commands',
            memberName: 'release',
            description: 'Release information etc'
        });
    }

    async run(message, args)
    {
        message.reply("Released on the 5th of October, planning to keep updating")
    }
} 

module.exports = ReleaseCommand;