module.exports = {

name:"yetkili-bot-log-ayarla",

code:`

✔️ Yetkili Bot Logu <#$mentionedChannels[1]> Olarak Ayarlandı

$setServerVar[yetkililog;$mentionedChannels[1]]

$onlyIf[$mentionedChannels[1]!=;⚠️**Kullanım** !yetkili-bot-log-ayarla #log ]

$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]

`

}