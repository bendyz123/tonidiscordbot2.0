const commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the channel'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.reply("Joined");
                    })
            }
        }
        else
        {
            message.reply("You must be in a voice channel");
        }   
    }
} 

module.exports = JoinChannelCommand;