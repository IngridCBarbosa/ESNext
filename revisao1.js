// let  e const 

// let e const tem escopo de bloco, se ele for definido em um bloco e for chamado fora do bloco , a variavel dará como indefinida


{ // um bloco
    var a = 2
    let b = 3
    console.log(b)
    const teste = 5
    console.log(teste)
}

console.log(a)

// Template String

const produto = 'iPad'

console.log(`${produto} é caro`)

// Destructuring => desetruturando atributos de uma String, array e objetos
const [l,e, ...tras] = "Cod3r"
console.log(l,e, tras)

const [x,y] = [1,2]

console.log(x,y)

const {idade: i,nome} = {nome:'Ana',idade: 9}
console.log(i,nome)