module.exports = {

name:"bot-kanal",

code:`


✅ Bot Ekleme Kanalı <#$mentionedChannels[1]> olarak ayarlandı

$setServerVar[botkanal;$mentionedChannels[1]]

$onlyIf[$mentionedChannels[1]!=;⚠️ Bir kanal etiketle]

$onlyIf[$getServerVar[botkanal]==;⚠️ Bot Ekleme Kanalı zaten ayarlanmış]

$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]

`}