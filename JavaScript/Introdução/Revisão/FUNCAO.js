// FUNÇÃO SEM RETORNO (se não houver 'return', a função retorna 'undefined'por padrão.)
function teste(){
        let x = 10;
        let y = 5;
        let z = x + y;
        console.log('Resultado ' + z);
}

teste(); //para chamar uma função basta colocar o nome + ()

// FUNÇÃO COM PASSGEM DE PARÂMETRO
// Exemplo 1
function dobro(x) {
    let y = x * 2
    console.log(y)
}
let valor = 4
dobro(valor)

// Exemplo 2 
function soma(a, b) {
    return a + b;
}

console.log(soma(5, 10));

// Exemplo 3
function dobro(v) {
    let m = v * 2
    console.log('O dobro de ' + v + ' é ' + m)
}
let valor2 = 4
dobro(valor2)
let valor3 = 100
dobro(valor3)