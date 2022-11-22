const { Client, Events, GatewayIntentBits, SlashCommandBuilder, REST, Routes } = require('discord.js');
const data = require('./data.json');
const fs = require('fs');
const readline = require('readline');

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var commands = [
  {
    name: 'helloworld',
    description: 'best computer program'
  }
]

var token = '';
var client_id = '';

function Main() {
  const rest = new REST({ version: '10' }).setToken(token);
  const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ] });

  // Refresh Commands
  console.log(token, client_id);
  (async ()=>{ await rest.put(Routes.applicationCommands(client_id), { body: commands }); })();
  
  // Handle the commands
  client.on('interactionCreate', async interaction => {
    await interaction.reply({
      content: "What have we gotten into here, Barry?  It's pretty big, isn't it?  I can't believe how many humansdon't work during the day.  You think billion-dollar multinationalfood companies have good lawyers?  Everybody needs to staybehind the barricade.  - What's the matter?- I don't know, I just got a chill.  Well, if it isn't the bee team.  You boys work on this?  All rise! The HonorableJudge Bumbleton presiding.\n\nhttps://discord.com/developers/active-developer"
    })
  })

  // When we are ready
  client.on('ready', ()=>{
    console.log(`We are live! ${client.user.tag}`);

    // Edit that json file
    fs.writeFile('data.json', JSON.stringify({
      "token": token,
      "clientid": client_id
    }), (err)=>{
      if (err) { console.log(err); }
    });
  })

  // Log into our beautiful bot :D
  client.login(token);
}

console.clear();

if (!data.token || !data.clientid) {
  readline_interface.question('Bot token: ', (input) => {
    token = input;
    readline_interface.question('Client id: ', (id) => {
      client_id = id
      readline_interface.close();
    })
  })

  readline_interface.on('close', Main);
} else {
  token = data.token;
  client_id = data.clientid;

  Main();
}