const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "!";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Ping') {
        message.reply('pong');
      }
});



client.on('message', message => {
    if (message.author.bot) return;
if (message.content.startsWith(`say`)) {
    message.channel.startTyping(); 
     message.delete();
 let args = message.content.split(" ").slice(1);
         message.delete()
         message.channel.stopTyping(true); 
   message.channel.sendMessage(args.join(" ")).catch(console.error);
    
 }

}); 

const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
if(message.content.startsWith('!bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "SkillsTeam";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)
.addField('الرساله', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
})

  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "e")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });



client.on('message', message => {
      if(message.content.startsWith ("!marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 15 ثانية 
 اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))
   
   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})
        
  
             
    
  }
});

const bannedwords = [
  "كسمك",
  "زبي",
  "انيك امك",
  "Fuck You",
  "ass",
  "قحبة"

];

client.on('message',  message => {
if(bannedwords.some(word => message.content.includes(word))) {
  message.delete()
  message.reply(" احترم نفسك , يمنع الشتم في خادمنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(5000)});;
};
});

client.on('message',function(message) {
  if(message.content.startsWith (prefix +'server')) {
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAt = millis / 1000 / 60 / 60 / 24;
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField(`${message.guild.name}`,`\`\`منذ ${createdAt.toFixed(0)} يوما \`\``)
    .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${message.guild.region}__ **]`,true)
    .addField(':medal:** __الرتب__**',`[** __${message.guild.roles.size}__ **]`,true)
    .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${message.guild.memberCount}__ **]`,true)
    .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${message.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField(':pencil:**__ الرومات الكتابية__**',`[** __${message.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField(':microphone:**__ رومات الصوت__**',`[** __${message.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField(':crown:**__ الأونـر__**',`**${message.guild.owner}**`,true)
    .addField(':id:**__ ايدي السيرفر__**',`**${message.guild.id}**`,true)
    message.channel.send({embed:embed});
  }
});

client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
  }
}
});

client.on('message', message => {
  if(message.content.includes('youtube')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
  }
}
});

client.on('message', message => {
  if(message.content.startsWith(prefix + "invite")) { 
  message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`);
  }
  });

  client.on("message", message => {
    var prefix = "!"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });

    client.on("message", message => {
      if (message.content === prefix + "help") {
      message.channel.send("✅تم الارسال في الخاص ")
       const embed = new Discord.RichEmbed()
           .setColor("RANDOM")
           .setThumbnail(message.author.avatarURL)
           .setDescription(`∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞
           :pencil: | الاوامر العامة | :pencil:
           !id | للايدي :id:
           !avatar | للافاتار :round_pushpin:
           !ping | لمعرفة بينق البوت :satellite:
           !invite | لدعوة البوت :paperclip:
           !bot | للمعلومات عن البوت :book:
           !server | للمعلومات عن السيرفر :dolls:
           !report | تسوي تبليغ علي شغص بس سوي روم اسمه report
           !mcstats ip | كود يخليك تعرف احصائيات سيرفر ماين كرافت
           !mcskin | يضهر لك سكنك في ماين كرفت
           الوان لعرض قائمة الالوان
           لون و اي رقم لتغيير لونك
           !e | يكتبلك كلامك بالايموجي
           ∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞
           :telephone_receiver: | اوامر الادمنيه | :telephone_receiver:
           !bc
           !ban
           !mute
           !unmute
           !kick
           !clear
           ∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞
           :video_game: | اوامر الالعاب | :video_game:
           !فكك 
           !اسالني
           !كت تويت
           !marry
           !قرعه
           !صراحه
           !مريم
           !عقاب
     
     
     `)
     
     
     message.author.sendEmbed(embed)
     
     }
     });    
client.on('message', message => {
  const prefix = '!'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(': 🔱 | اسمك',`**<@` + `${z.id}` + `>**`, true)
.addField(': 🛡 | ايديك', "**"+ `${z.id}` +"**",true)
.addField(': ♨ | Playing','**'+y+'**' , true)
.addField(': 📛 | تاق حق حسابك',"**#" +  `${z.discriminator}**`,true)
.addField('**: 📆 | التاريح الذي انشئ فيه حسابك**', message.author.createdAt.toLocaleString())
.addField("**: ⌚ | تاريخ دخولك للسيرفر**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});

client.on("message", message => {
  var prefix = "!";

          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
      var msg;
      msg = parseInt();
    
    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "Done | تــم مسح الشات",
      color: 0x06DF00,
      description: "تم مسح الرسائل ",
      footer: {
        text: "©zabhm"
      }
    }}).then(msg => {msg.delete(3000)});
                        }

   
}); 

client.on("message", message => {
  if (message.content === "!avatar") {
   const embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setFooter('By ImM7MD')
       .setThumbnail(message.author.avatarURL)
       .addField(message.author.displayAvatarURL)
 message.channel.send(embed);
}
});

client.on('message', msg => {
let args = msg.content.split(" ").slice(1).join(" ")
if(msg.content.startsWith(prefix + 'ss')) {
client.user.setGame(args, 'https://www.twitch.tv/mr_imm7md');
}
});

client.on('message', async message => {
  let args = message.content.split(" ");
  let command = args[0];

  if(command === prefix + 'ban') {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('انت لا تملك الصلاحيات اللازمة').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('انا لا املك الصلاحيات اللازمة. يحب توفر صلاحيات `Ban Members , Embed Links`').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لطرده**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك طرد شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني طرد شخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك طرد  نفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

     let duration = args[2];
     if(!duration) return message.reply('**حدد وقت زمني لفك البان عن الشخص**').then(msg => {
       msg.delete(3500);
       message.delete(3500);
     });
     if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
       msg.delete(3500);
       message.delete(3500);
     });

     let reason = message.content.split(" ").slice(3).join(" ");
     if(!reason) reason = 'غير محدد';

     let thisEmbed = new Discord.RichEmbed()
     .setAuthor(mention.user.username , mention.user.avatarURL)
     .setTitle('لقد تبندت من سيرفر')
     .setThumbnail(mention.avatarURL)
     .addField('# - السيرفر:',message.guild.name,true)
     .addField('# - تم طردك بواسطة',message.author,true)
     .addField('# - السبب',reason)
     .setFooter(message.author.tag,message.author.avatarURL);
     mention.send(thisEmbed).then(() => {
     mention.ban({
       reason: reason,
     });
     message.channel.send(`**:white_check_mark: ${mention.user.username} banned from the server ! :airplane: **  `)
     setTimeout(() => {
       if(duration === 0) return;
       message.guild.unban(mention);
     },duration * 60000);
   });
 }
});

client.on('message', message => {
  const prefix = "!";
    if (message.author.kick) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "kick") {
                 if(!message.channel.guild) return;
           
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
  
    if (message.mentions.users.size < 1) return message.reply("منشن شخص");
    if(!reason) return message.reply ("اكتب سبب الطرد");
    if (!message.guild.member(user)
    .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
  
    message.guild.member(user).kick(7, user);
  
    const banembed = new Discord.RichEmbed()
    .setAuthor('Kicked !', user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("User:",  `[ + ${user.tag} + ]`)
    .addField("By:", `[  + ${message.author.tag} +  ]`)
    .addField("Reason:", `[ + ${reason} +  ]`)
    client.channels.get("آي دي روم اللوق").send({embed : banembed})
  }
  });

  client.on('message', async message => {
    let args = message.content.split(" ");
    if(message.content.startsWith(prefix + "mute")) {
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
  
      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
  
      let mention = message.mentions.members.first();
      if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
  
      if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
  
      let duration = args[2];
      if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
  
      if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
  
      let reason = message.content.split(" ").slice(3).join(" ");
      if(!reason) reason = "غير محدد";
  
      let thisEmbed = new Discord.RichEmbed()
      .setAuthor(mention.user.username, mention.user.avatarURL)
      .setTitle('تم اغطائك ميوت بسيرفر')
      .setThumbnail(mention.user.avatarURL)
      .addField('# - السيرفر',message.guild.name,true)
      .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
      .addField('# - السبب',reason)
  
      let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
      if(!role) try {
        message.guild.createRole({
          name: "Muted",
          permissions: 0
        }).then(r => {
          message.guild.channels.forEach(c => {
            c.overwritePermissions(r , {
              SEND_MESSAGES: false,
              READ_MESSAGES_HISTORY: false,
              ADD_REACTIONS: false
            });
          });
        });
      } catch(e) {
        console.log(e.stack);
      }
      mention.addRole(role).then(() => {
        mention.send(thisEmbed);
        message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
        mention.setMute(true);
      });
      setTimeout(() => {
        if(duration === 0) return;
        if(!mention.has.roles(role)) return;
        mention.setMute(false);
        mention.removeRole(role);
        message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
      },duration * 60000);
    } else if(message.content.startsWith(prefix + "unmute")) {
      let mention = message.mentions.members.first();
      let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
  
      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
  
      if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
  
        mention.removeRole(role);
        mention.setMute(false);
        message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    }
  });



client.on('message', msg => {//msg
  if (msg.content === 'الوان') {
    if (msg.channel.id !== "474573006316896277") return;
    msg.channel.send({file : "https://d.top4top.net/p_925trmdy1.png"})
  }
});;

const Client = require('discord.js');

client.on('message', message => {
  let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == 'لون'){
if (message.channel.id !== "474573006316896277") return;
   const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**لا يوجد لون بهاذا الرقم ** ❌ `)
.setColor(`ff0000`)

if(!isNaN(args) && args.length > 0)


var a = message.guild.roles.find("name",`${args}`)
        if(!a)return;
        if (a.name > 250 || a.name < 1) return;
const embed = new Discord.RichEmbed()
            
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**تم تغيير اللون بنجاح** ✅ `)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
  if (!args)return;
setInterval(function(){})
          let count = 0;
          let ecount = 0;
for(let x = 1; x < 201; x++){
   
    message.member.removeRole(message.guild.roles.find("name",`${x}`))
  
    }
        message.member.addRole(message.guild.roles.find("name",`${args}`));

    
}
});

    client.on('message', msg => { 
if (msg.content.startsWith(`!report`)) {
// تعريف الارجس
   let args = msg.content.split(" ").slice(1);
// لو ما منشن احد يرد عيله
  if (!msg.mentions.members.first()) return msg.reply(`يجب عليك منشن شخص`)
// لو ما كتب تبليغ بيقوله اكتب تبليغ
  if (!args) return msg.reply(`امممم .. اكتب تبليغك`)
// استبدل <الروم> بأسم الروم حقك
  if (msg.guild.channels.find('name', 'report')) {
// استبدل هنا بعد
    msg.guild.channels.find('name', 'report').send(`
 **تبليغ علي** : ${msg.mentions.members.first()}
  **بلغ عليه من قبل** : ${msg.author}
  **في روم** : ${msg.channel.name}
 **السبب** : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
  `)
  }
}
})

   client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('!mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** يجب كتابة ايدي السيرفر . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 اسم السيرفر",`${args}`,true)
        .addField("🌐 بورت السيرفر",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`Faster Bot.`)
                .setTimestamp()
    message.channel.send(embed)      
}})


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})



 client.on('message', message => { 
if(message.content.startsWith(prefix + 'sg')) {
      if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   let args = message.content.split(" ").slice(1);
   var ID = message.author.id 
   var emben = new Discord.RichEmbed()
   .setTimestamp()
   .setTitle(`:x: Error`)
   .setDescription(`الرجاء كتابت إقتراحك بعد الأمر `)
   if(!args.join(" ")) return message.channel.send(emben).then(message => {message.delete(50000)});
   var embet = new Discord.RichEmbed()
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`شكراً على اقتراحك !`)
.addField(`إقتراحك : `,args.join(" "))
   var embed = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   .setTitle(`${client.user.username}`)
   .setURL(`${client.user.avatarURL}`)
   .setDescription(`**
__المقترح__ :\n <@${ID}>\n
__الإقتراح__ :  \`\`\`${args.join(" ")}\`\`\`**`)
           client.channels.get("473899151197732864").sendEmbed(embed)
  message.channel.sendEmbed(embet).then(message => {message.delete(50000)})
            message.react("📩")
}
});

 client.on('message', async msg => {
        var user = msg.author;
            var a = msg.guild.roles.find("name", 'Agar');
            var ae = client.emojis.find("name", "Agar")
        if(!a){
        a = await msg.guild.createRole({
          name: "Agar",
          color: "#ffffff",
          permissions:[]
        })
 
        }
        var m = msg.guild.roles.find("name", 'Minecraft');
        var me = client.emojis.find("name", "MineCraft")
    if(!m){
        m =  await msg.guild.createRole({
          name: "Minecraft",
          color: "#ffffff",
          permissions:[]
        })
        }
        var f = msg.guild.roles.find("name", 'Fortnite');
        var fe = client.emojis.find("name", "purepng")
        if(!f){
        f =  await msg.guild.createRole({
          name: "Fortnite",
          color: "#ffffff",
          permissions:[]
        })
        }
        var b = msg.guild.roles.find("name", 'Brawlhalla');
var be = client.emojis.find("name", "bhlogocenter")
        if(!b){
        b =  await msg.guild.createRole({
          name: "Brawlhalla",
          color: "#ffffff",
          permissions:[]
        })
        }
        var black = msg.guild.roles.find("name", 'Blacksquad');
        var ble = client.emojis.find("name", "logo")
    if(!black){
        black =  await msg.guild.createRole({
          name: "Blacksquad",
          color: "#ffffff",
          permissions:[]
        })
        }
        var le = msg.guild.roles.find("name", 'League Of Legends');
var lee = client.emojis.find("name", "League_of_Legends_logo")
    if(!le){
        le =  await msg.guild.createRole({
          name: "League Of Legends",
          color: "#ffffff",
          permissions:[]
        })
        }
        var bn = msg.guild.roles.find("name", 'Bonk.io');
var bne = client.emojis.find("name", "df095113fba8e08a042a10ca77c002be")
 
    if(!bn){
        bn =  await msg.guild.createRole({
          name: "Bonk.io",
          color: "#ffffff",
          permissions:[]
        })
        }
var prefix = "!";
        if (msg.content.startsWith(prefix +'add')) {
 
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
msg.channel.send(`**\n${ae} : \` Agar\`  \n${me} :\` Minecraft \` \n${fe}  :\` Fortnite \` \n${be} :\`  Brawlhalla\`  \n${ble} :\` Blacksquad\` \n${lee} :\`League Of Legends\` \n${bne} :\`Bonk.io\`**`).then(res => {     res.react(ae).then(r=>{
     res.react(me).then(r=>{
     res.react(fe).then(r=>{
     res.react(be).then(r=>{
     res.react(ble).then(r=>{
     res.react(lee).then(r=>{
     res.react(bne).then(r=>{
    let aaa = (reaction ) => reaction.emoji.name === ae &&user.id
    let mmm = (reaction ) => reaction.emoji.name === me &&user.id
    let fff = (reaction ) => reaction.emoji.name === fe &&user.id
    let bbb = (reaction ) => reaction.emoji.name === be &&user.id
    let bbbb = (reaction) => reaction.emoji.name === ble && user.id
    let cn = (reaction) => reaction.emoji.name === lee && user.id
    let zg = (reaction) => reaction.emoji.name === bne && user.id
 
    let aa = res.createReactionCollector(aaa);
    let mm = res.createReactionCollector(mmm);
    let ff = res.createReactionCollector(fff);
    let bb = res.createReactionCollector(bbb);
    let bl = res.createReactionCollector(bbbb);
    let zgg = res.createReactionCollector(zg);
aa.on("collect", r => {
    msg.guild.member(user.id).addRole(a);
    msg.guild.member(user.id).removeRole(m);
    msg.guild.member(user.id).removeRole(f);
    msg.guild.member(user.id).removeRole(b);
    msg.guild.member(user.id).removeRole(black);
    msg.guild.member(user.id).removeRole(le);
    msg.delete();
    })
mm.on("collect", r => {
    msg.guild.member(user.id).addRole(m);
    msg.guild.member(user.id).removeRole(a);
    msg.guild.member(user.id).removeRole(f);
    msg.guild.member(user.id).removeRole(b);
    msg.guild.member(user.id).removeRole(black);
    msg.guild.member(user.id).removeRole(le);
    msg.delete();
})
ff.on("collect", r => {
    msg.guild.member(user.id).addRole(f);
    msg.guild.member(user.id).removeRole(m);
    msg.guild.member(user.id).removeRole(a);
    msg.guild.member(user.id).removeRole(b);
    msg.guild.member(user.id).removeRole(black);
    msg.guild.member(user.id).removeRole(le);
    msg.delete();
})
bb.on("collect", r => {
    msg.guild.member(user.id).addRole(b);
    msg.guild.member(user.id).removeRole(m);
    msg.guild.member(user.id).removeRole(f);
    msg.guild.member(user.id).removeRole(a);
    msg.guild.member(user.id).removeRole(black);
    msg.guild.member(user.id).removeRole(le);
    msg.delete();
})
bl.on("collect", r => {
    msg.guild.member(user.id).addRole(black);
    msg.guild.member(user.id).removeRole(m);
    msg.guild.member(user.id).removeRole(f);
    msg.guild.member(user.id).removeRole(b);
    msg.guild.member(user.id).removeRole(a);
    msg.guild.member(user.id).removeRole(le);
    msg.delete();
})
cnn.on("collect", r => {
    msg.guild.member(user.id).addRole(le);
    msg.guild.member(user.id).removeRole(m);
    msg.guild.member(user.id).removeRole(f);
    msg.guild.member(user.id).removeRole(b);
    msg.guild.member(user.id).removeRole(a);
    msg.guild.member(user.id).removeRole(black);
    msg.delete();
})
zgg.on("collect", r => {
    msg.guild.member(user.id).addRole(bn);
    msg.guild.member(user.id).removeRole(m);
    msg.guild.member(user.id).removeRole(f);
    msg.guild.member(user.id).removeRole(b);
    msg.guild.member(user.id).removeRole(a);
    msg.guild.member(user.id).removeRole(black);
    msg.guild.member(user.id).removeRole(le);
    msg.delete();
})
 
})
     })
     })
     })
     })
     })
     })
     })
     }
     });





client.on('message', message => {
   if (message.content.startsWith(prefix + "dc")) {
     message.guild.roles.filter(r => {
       if(!isNaN(r.name)) {
         r.delete()
       }
     })
     message.reply("Wait..")
   }
});


client.on('message', message => {

    if(message.content === prefix + "f!mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "f!unmutechannel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
      
    
});





client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
