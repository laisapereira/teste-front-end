// accountInfo
// charInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: "laisa",

}

type charInfo = {
    nickname: string,
    level: number
}

const char: charInfo = {
    nickname: "laisap",
    level: 50
}

// mas se eu tirar o email da const, ele vai sinalizar. se eu quiser deixar essa propriedade como funcional: 
//usar ternário na propriedade com o type Alias

// como mesclar os dois tipos: (char + account) [intersection]

type PlayerInfo = AccountInfo & charInfo

const player: PlayerInfo = {
    id: 123,
    name: "laisa",
    nickname: "laisap",
    level: 100

}