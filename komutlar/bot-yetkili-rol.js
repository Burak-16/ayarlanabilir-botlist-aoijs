module.exports = {

name:"yetkili-rol-ayarla",

code:`

✅ Yetkili Rolü $roleName[$mentionedRoles[1]] olarak ayarlandı

$setServerVar[yetkilirol;$mentionedRoles[1]]

$onlyIf[$getServerVar[yetkilirol]==;⚠️ Yetkili Rol zaten ayarlanmış]

$suppressErrors[Lütfen Bir Rol Etiketle]

$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]

`}