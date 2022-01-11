//tyoe alias (apelido)
type Uid = number | string


function logDetails (uid: Uid, item:string) {
    console.log(`A  product  with ${uid} has a title as ${item}`)
}

function logInfo (uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}`)
}

type Plataform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlataform (plataform: Plataform) {
    return plataform
}

logDetails (123, "sapato")
logDetails("123", "sapato")

logInfo (55, "bobei")
logInfo("123", "bobei")

// quero que o uid seja ou numero ou  string type1 | type2 (union)
// criar um tipo alias pra nao precisar repetir o type1 | type2