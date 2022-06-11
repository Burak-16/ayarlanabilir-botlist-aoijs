
module.exports = {

name:"prefix",

code:`

Prefix Başarıyla __$message[1]__ oldu.

$setServerVar[prefix;$message[1]]

$onlyIf[$message[1]!=;Prefix ne olacak?

$onlyPerms[admin;Admin Yetkisine İhtiyacın Var!]`}
