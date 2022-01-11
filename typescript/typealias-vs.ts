// Type ALias

// definição

type GameT = {
    title:string;
};

type DLCT = {
    extra:string;
}

// intersection 

type GameCollection = Game & DLCT & { content: boolean}

//implements 

class CreateGameT implements GameCollection {}

// declarar função 

type getSimilarsT = (title:string) => void;






///////Diferenças

// permite declarar tipos primitivos

type IDT = string | number;

// declarar tuplas normalmente

type TupleT = [number,number];

[1, 2] as TupleT

// se eu colocar [1,2,3] as TupleT, o ts reclama pois eu defini
// que a tuple so teria 2 "number"







//Apenas uma declaração por escopo
// (se eu quero um typex nao posso colocar esse mesmo typex novamente para
//passar mais dados)

type JqueryT = { a: string};
type JqueryT =  { b: string};

// mais simples, uso de tipo de primitivos
// mais recomenadado na maioria das vezes
// React - Props 