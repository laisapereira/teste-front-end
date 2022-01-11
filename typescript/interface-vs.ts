// Interfaces

//definição

interface Game {
    title: string;
};

interface DLC {
    extra: string;
}

// interseção/ extends

interface GameCollection extends Game, DLC {}

//implements (criar uma classe e implementá-la com base num type ou em uma interface)

class CreateGame implements GameCollection {}

// declarar função

interface getSimilars {
    (title:string): void
}

///////Diferenças

// nao permite declarar tipos primitivos

interface ID extends number {}


// não consigo definir tuples na interface
interface Tuple {
    0: number;
    1: number;
}
[1,2,3] as Tuple

// pode ter múltiplas declarações por escopo e ele vai unir
// de mesmo nome, ele adicionar novas coisas (mergeando)

interface Jquery {
    a: string;
}

interface Jquery {
    b: string;
}

const oi: Jquery = {
    a: "bla",
    b: "foo"
}

// quando estiver criando libs, prefira interfaces, porque são mais
//extensíveis

// criando objetos/ classes (POO)
