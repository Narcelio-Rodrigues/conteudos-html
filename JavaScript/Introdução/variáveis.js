// Utilizar sempre o Camel case no JavaScript!
// JavaScript possui tipagem dinâmica: infere os tipos de daos
//JavaScript possui uma tipagem fraca

var nomeDoAluno = 'Narcélio'; //string (texto: Utilize sempre aspas)
var idade = 23; // number
var altura = 1.77; // number.
var estudando = true; // boolean (booleano: verdadeiro ou falso)

//  PARA IMPRIMIR:
console.log(nomeDoAluno)
console.log(idade)
console.log(altura)
console.log(estudando)

// PARA MOSTRAR O TIPO:
console.log(typeof nomeDoAluno);

var semConteudo; // declarando uma variável
console.log(semConteudo)

// undefined: variável que foi declarada mais não recebeu nenhum conteúdo.

// !Não utilize o var nos códigos JavaScript

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;
mediaDoAluno = 5; // Não é permitido!

console.log(notaDoAluno);
console.log(mediaDoAluno);


//VARIÁVEIS
//Servem para armazenar os dados para podermos usá-los no código

// var
// let
// const

var nome = 'Narcelio'
let nome = 'João'
const mes = 'Julho' //valor constante

// NOMEANDO VARIÁVEIS
// camel case (mais comum)
let nomeCompleto;

// pascal case
let NovaConta;

// snake case (sepado por underscores '_')
let nome_completo;

// Regras para Nomear Variáveis
// iniciar com uma letra, underscore (_) ou cifrão

let nome;
let _idade;
let $valor;

// Usar nomes significativos
// Utilize Constantes com Nome e MAIÚSCULOS
const PI = 3.14159;