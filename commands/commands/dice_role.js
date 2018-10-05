const commando = require('discord.js-commando');

class DiceRoleCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'commands',
            memberName: 'roll',
            description: 'Rolls a six sided die'
        });
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.reply("Your die landed on " + diceRoll);
    }
} 

module.exports = DiceRoleCommand;