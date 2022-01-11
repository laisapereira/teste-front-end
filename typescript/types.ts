// boolean (true/false)

let isOpen: boolean
isOpen=true

//string ('foo', "foo", `foo`)

let message: string
message = `foo ${isOpen}`

//number (int, float, hex, binary)

let total: number
total = 0xff0

//array (type[])
let items: number[]         //sinalizar que os tipos do array são números
items = [1, 2, 3]

//ou

let oi: Array<number>
oi = [1,2,3]

// tuple (array que ja sabemos tipo dos elementos e a qntd de elementos)

let title: [number, string]
title = [1, "oi"]

//enum 

enum Colors {
    white = '#fff',
    black = '#000'
}

//any (não é legal)

let coisa: any
coisa = [1]


//void (vazio)

function logger():void {
    console.log('foo')
}

//null | undefined 

type Bla = string | undefined

//object 

let cart: object;

cart = {
    key: "fi"
}

// type inference (já passei ovalor, ele já identifica )

let message2 = "oioi"

// e se eu for redefinir o valor, só pode ser do mesmo tipo q ela teve primeiramente

window.addEventListener("click", (e) => {
    console.log(e.target)
})

// nao precisei tipificar o e (ots ja identificou que o e é um mouseevent)
