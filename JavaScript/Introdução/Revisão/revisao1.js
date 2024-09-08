const x = parseFloat(prompt('Qual o primeiro valor?'));
const y = parseFloat(prompt('Qual o segundo valor?'));
let operacao = prompt('Qual operação matemática você deseja realizar com os valores? (+, -, *, /)');

let resultado;

if (operacao === '+') {
   resultado = x + y;
} else if(operacao === '-') {
   resultado = x - y;
} else if(operacao === '*') {
   resultado = x * y;
} else if(operacao === '/') {
   resultado = x / y;
}   else {
   resultado = ('inválida');
}

alert('O resultado da operação é ' + resultado);
