const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'website',
            group: 'commands',
            memberName: 'website',
            description: 'Links the website'
        });
    }

    async run(message, args)
    {   var myInfo = new discord.RichEmbed()
            .setAuthor("bendyzf🎃#8761")
            .setColor("#0000FF")
            .setDescription("file:///C:/Users/pulse/OneDrive/Desktop/Website/index.html")
            .setTitle("Website")

        message.channel.sendEmbed(myInfo);
    }
} 

module.exports = InfoCommand;