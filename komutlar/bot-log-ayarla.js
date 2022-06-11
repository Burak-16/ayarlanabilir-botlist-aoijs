module.exports = {

name:"bot-log-ayarla",

code:`

✔️ Bot Log Açıldı Bot Log Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı

$setServerVar[botlog;$mentionedChannels[1]]

$onlyIf[$mentionedChannels[1]!=;⚠️**Kullanım** !bot-log-ayarla #log ]

$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]

`

}