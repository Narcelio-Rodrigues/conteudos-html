const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")
//'prompt' é usada para exibir uma caixa de diálogo que solicita ao usuário a entrada de uma valor.

//'parseFloat' é uma função usada para converter uma string em um número de ponto flutuante(número decimal).
const x = parseFloat(entrada1) 
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    'Resultados:\n' +
    '\nSoma: ' + soma + 
    '\nSubtração: ' + subtracao + 
    '\nMultiplicação: ' + multiplicacao +
    '\nDivisão: ' + divisao
)
