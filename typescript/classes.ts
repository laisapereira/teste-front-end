class UserAccount {
    name: string;
    age: number;

    constructor (name:string, age:number) {
        this.name = name,
        this.age = age;
    }

    logDetails():void {
        console.log(`The player ${this.name} is ${this.age}`)
    }
}

class CharAccount extends UserAccount {
    nickname: string;
    public level: number;

    constructor (name: string, age: number, nickname:string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level
    }

    get getLevel() {        /// metodo que permite alterar propriedades
        return this.level
    }

    set setLevel(level:number) {
        this.level = level
    }




    logCharDetails():void {
        console.log(
            `The player ${this.name} has the char ${this.nickname} at level ${this.level}`
        )
    }
}

const laisa = new UserAccount ("Laisa", 18)
console.log(laisa);
console.log(laisa.age)
laisa.logDetails();


const jonhn = new CharAccount ("John", 45, "johnmaster", 80)

jonhn.logDetails(); // logDetails é um método (uma propriedade que armazena a função de mostrar o console.log)
console.log(jonhn.level)
jonhn.setLevel = 89999;
console.log(jonhn.getLevel)
