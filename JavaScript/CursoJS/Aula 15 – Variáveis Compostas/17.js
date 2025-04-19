let frutas = ['maçã', 'banana', 'laranja']

frutas[3] = 'goiaba'

// organiza os elementos de um array em ordem alfabética ou numérica, dependendo do conteúdo
console.log(frutas.sort())

// Para ordem decrescente
numeros.sort((a, b) => b - a)

// Exemplo
let notas = [7.5, 9.2, 5.3, 8.0]
notas.sort((a, b) => a - b) // crescente
console.log('Notas em ordem crescente:', notas)

notas.sort((a, b) => b - a) // decrescente
console.log('Notas em ordem decrescente:', notas)
// 

// push() – Adiciona um valor no final
frutas.push('uva')

// pop() – Remove o último valor
frutas.pop()

// length – Mostra o tamanho do array
console.log(frutas.length)

// indexOf() – Procura a posição de um valor
console.log(frutas.indexOf('maçã'))

// includes() – Verifica se o valor existe no array
console.log(frutas.includes('laranja'))

console.log(frutas)


// # Percorrendo um array com for:
let p = ['Fulano', 'Ciclano', 'Beltrano']

for (let i = 0; i < p.length; i++) {
    console.log(`Pessoa ${i + 1}: ${p[i]}`)
}

// # Mostrar os nomes em ordem invertida (último para o primeiro):
let a = ['Fulano', 'Ciclano', 'Beltrano']

for (let i = a.length -1; i >= 0 ; i--) {
    console.log(`Pessoa ${i + 1}: ${a[i]}`)
}

// # Mostrar cada nome com as letras ao contrário:
let d = ['Fulano', 'Ciclano', 'Beltrano']

for (let i = 0; i < d.length; i++) {
    let nomeInvertido = d[i].split('').reverse().join('')
    console.log(`Pessoa ${i + 1}: ${nomeInvertido}`)
}

// 
let letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for (let i = 0; i < letra.length; i++) {
    console.log(`Índice ${i + 1}: Letra ${letra[i]}`)
}

// 
let num = [5, 8, 2, 9, 3, 6, 4, 7]
num.push(1)
num.sort()
console.log(num)
console.log(`O valor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// forma simplificada
for (let i in num) {
    console.log(num[i])
}

// 

let pos = num.indexOf(9)
console.log(`O valor 3 está na posição ${pos}`)