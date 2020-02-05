// arrow function

const soma = (a,b) => a + b

console.log(soma(5,6))


// Arrow fuction (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro default

function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte')


// operador rest 

function tota(...numeros){
    let total = 0
    numeros.forEach(n => {
        total += n
        return total
    })
}

console.log(tota(1,2,3,4,5))