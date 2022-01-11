interface Game {
    title: string;
    description: string;
    readonly genre: string;
    platform: string [];
    getSimilars?: (title:string) => void
}

const tlou: Game = {
    title: "The Last of  Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars?: (title:string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
    }
}

console.log(tlou.genre)

if(tlou.getSimilars) {
    tlou.getSimilars(tlou.title)
}



//extendendo a interface acima  (tudo da 1 interface + as coisas abaixo)

interface DLC extends Game {
    originalGame: Game;
    newContent:string[];
}

// criar um objeto a partir dessa interface

const leftbehind:DLC={
title:"The Last of Us - Left Behind",
description: "You play as Ellie",
genre: "Action",
platform: ["PS4"],
originalGame: tlou,
newContent: ["3 hours story", "new characters"]

}

// criar uma classe baseada numa interface

class CreateGame implements Game {          // classe Creategame precisa ter todos os tipos que são descritos na intfc
    title: string;
    description: string;
    genre: string;
    platform: string[];

    constructor(t: string, d:string, g:string){
        this.title = t;
        this.genre = g;
        this.description = d;
    
    }
}

