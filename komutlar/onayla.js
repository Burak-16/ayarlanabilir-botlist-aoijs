module.exports = {
  name:"onayla",
  code:`
  $channelSendMessage[$getServerVar[botlog];<@$message[1]>{author:$userTag[$getServerVar[başvuranbotu;$message[1]]] adlı botun onaylandı:$userAvatar[$getServerVar[başvuranbotu;$message[1]]]}{color:GREEN}]
  $onlyIf[$getServerVar[başvuranbotu;$message[1]]!=;❌ Kullanıcı bir bot için başvurmamış]
  $onlyIf[$isNumber[$message[1]]==true;❌ Bu bir kullanıcı id'si değil]
  $onlyIf[$message[1]!=;❌ Başvuran kullanıcının id'sini gir]
  $channelSendMessage[$channelID;Bot Başarı İle Onaylandı Ve Loglandi]
  $onlyIf[$hasRole[$authorID;$getServerVar[yetkilirol]]==true;❌ Bunun için yetkin yok]
  `
  }
