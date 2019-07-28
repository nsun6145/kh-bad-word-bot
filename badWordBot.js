const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
  console.log("Connected as " + client.user.tag);
});

//Insert discord bot token in between the quotes if not hosting on Glitch. Comment out the lower one when doing it
//var token = process.env.SECRET;
/*
const loginPromise = new Promise((resolve, reject) =>{
  reject();
});

loginPromise.then((() => {client.login(process.env.SECRET);})).catch((err) => {console.log("Error: ", err)});
*/

var token = "NjA0ODE1NzAzOTcwOTM4OTIx.XT21_A.sWzNTx5SvAvCnvlBeuN6u-U31pg"; 
client.login(token);
client.on("message", (message) => {
  
  //Helper functions begin
  function contains(word){
    if (message.content.toLowerCase().includes(word))
      return true;
    else
      return false; 
  }
  //Helper functions end  
  
  if(contains("nigger")){
    message.reply('@Moderators https://media.discordapp.net/attachments/587879471244247040/604501676367282176/no_n_word.png');
  }
  
  if(contains("owo") || contains("uwu")|| contains("òwó")){
    message.reply('https://cdn.discordapp.com/attachments/587879471244247040/604497686749642766/nonwordv2.00_00_00_23.Still001.png');
  }
  
});