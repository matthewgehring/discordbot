let ConnectFour = require('./ConnectFour.js');

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

//message.author.username
//message.author.id

const prefix = "!";
const Methods = {
    "fib" : (args) => fibonacci(...args),
    "help" : () => message.reply('type !help to see list of commands... when Matthew impliments that')
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'fib'){
        if(!args.length){
            return message.channel.send(`You didn't provide any arguments, ${message.author}`)
        }
        if(args.length === 1){
            message.channel.send(`fibonacci taken to ${args[0]} is ${fibonacci(Number(args[0]))}!!`);
        }
    }
    if(command === 'connect4'){
        let red = '🔴';
        let empty = '⚪';
        let blue = '🔵';
        let emptyRow = `${empty}${empty}${empty}${empty}${empty}${empty}${empty}\r\n`;
        let board = new ConnectFour();
        board.newGame();
        message.channel.send(board.boardToString());
    }
});

const connect4 = (move) => {
    if(move === 'new'){
        return `\r\nA    B    C    D    E    F    G\r\n${empty}${empty}${empty}${empty}${empty}${empty}${empty}\r\n${empty}${empty}${empty}${empty}${empty}${empty}${empty}\r\n${empty}${empty}${empty}${empty}${empty}${empty}${empty}\r\n${empty}${empty}${empty}${empty}${empty}${empty}${empty}\r\n`
    }
}

const fibonacci = (num, memo) => {
    console.log(num);
    if(num >= 5000 || !num && num !== 0){
        return Infinity;
    }
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }

client.login(process.env.BOT_TOKEN);

