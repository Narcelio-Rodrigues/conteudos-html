let frutas = ['maçã', 'banana', 'laranja']

frutas [1] = 'goiaba'
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
