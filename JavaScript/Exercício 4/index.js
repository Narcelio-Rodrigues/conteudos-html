//Atacante
const atacante = prompt ('Qual é o nome do personagem atacante?')
const poderDeAtaque = parseFloat(prompt('Qual é o poder de ataque do ' + atacante + '?'))

// Defensor

const defensor = prompt ('Qual é o nome do personagem?')
let pontosDeVida = parseFloat(prompt('quantos pontos de vida o' + defensor + 'possui?')) 
const poderDeDefesa = parseFloat(prompt('qual é o seu poder de defesa?'))
const possuiEscudo = prompt('Ele possui um escudo? (Sim/Não)')

let danoCausado = 0