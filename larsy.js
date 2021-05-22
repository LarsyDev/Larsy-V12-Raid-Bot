//-------------------------Required Modules--------------------------\\


const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const { Client, Util } = require('discord.js');
const fs = require('fs');
require('./Util/eventLoader.js')(client);
const Settings = require("./Settings.json");


//-------------------------Required Modules--------------------------\\


var prefix = Settings.prefix;//

const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./Commands/', (err, files) => {//
    if (err) console.error(err);//
    log("                          ")
    log("‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒")
    log(`   ${dev} ${y}${s}${r}${a}${l}`)
    log("‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒")
    log("                          ")
    log(`[ ${y}${s}${r}${a}${l} ] Komutlar Yükleniyor...`);//
    log("                          ")
    log("‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒")
    files.forEach(f => {//
        let cmds = require(`./Commands/${f}`);//
        log(`[COMMAND] ${cmds.help.name}     `);//
      
        client.commands.set(cmds.help.name, cmds);//
        cmds.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, cmds.help.name);//
        });
    });
});

fs.readdir("./Events/", (err, files) => {
if(err) return console.error(err);
log("‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒")
log("                          ")
log(`[ ${y}${s}${r}${a}${l} ] Eventler Yükleniyor...`);//
log("                          ")
log("‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒")
files.filter(rgevents => rgevents.endsWith(".js")).forEach(rgevents => {
let EventLoad = require(`./Events/${rgevents}`);
if(!EventLoad.configuration) return console.log(`[Event] ${rgevents}`)
client.on(EventLoad.configuration.name, EventLoad)})});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./Commands/${command}`)];
            let cmd = require(`./Commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Commands/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./Commands/${command}`)];
            let cmd = require(`./Commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === Settings.Owner) permlvl = 4;
    return permlvl;
};

client.login(Settings.token);


//---------------------------Messages Komutları------------------------------------\\



var dev = "Developed By"
var y = "L"
var s = "a"
var r = "r"
var a = "s"
var l = "y"