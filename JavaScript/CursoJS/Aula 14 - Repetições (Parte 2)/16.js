// Verifica a condição ANTES de executar o bloco.
// Usar quando quer repetir algo enquanto uma condição for verdadeira e não sabe exatamente quantas vezes vai repetir.

let c = 1
while (c <= 5) {
    console.log(c)
    c++
}

// Executa o bloco PELO MENOS UMA VEZ, mesmo que a condição seja falsa, pois a verificação é feita depois.
// Usar quando sempre precisa executar o código pelo menos uma vez, como em menus ou formulários que pedem dados.

let c = 1
do {
    console.log(c)
    c++
} while (c <= 5)

// Usado quando sabe exatamente quantas vezes quer repetir, como ao percorrer um array ou fazer um contador fixo.
// Tem 3 partes: início, condição e incremento.

// Contar de 1 a 10
for (let c = 1; c <= 10; c++) {
    console.log(c)
}

// Contar de 10 a 1
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// Contar números pares de 0 a 20
for (let d = 0; d <= 20; d += 2) {
    console.log(d);
}

// Mostre a tabuada do 5 (de 5x1 até 5x10).
for (let a = 1; a <= 10; a++) {
    console.log(`5 x ${a} = ${5 * a}`)
}

// Mostre a tabuada do 1 ao 10
for (let i = 1; i <= 10; i++) {
    console.log(`\nTabuada do ${i}:\n----------------`)
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

// Calcule a soma de todos os números de 1 a 100 e mostre o resultado.
let soma = 0
for (let i = 1; i <= 100; i++) {
    soma += i
}
console.log('Soma total:', soma)

// Listar letras de uma palavra
const palavra = 'Fone'
for (let i = 0; i < palavra.length; i++) {
    console.log(`Letra ${i + 1}: ${palavra[i]}`)
}
