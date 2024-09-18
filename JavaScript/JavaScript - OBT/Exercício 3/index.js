const veiculo1 =  prompt ('Informe a velocidade do veículo 1:')
const velocidade1 = parseFloat(prompt('informe a velocidade do veículo 1:'))

const veiculo2 =  prompt ('Informe a velocidade do veículo 2:')
const velocidade2 = parseFloat(prompt('informe a velocidade do veículo 2:'))

if (velocidade1 > velocidade2) {
    alert (veículo1 + 'é mais rápido do que ' + veiculo2)
}   else if (velocidade2 > velocidade1) {
    alert (veículo2 + 'é mais rápido do que ' + veiculo1)
}   else {
    alert (veiculo1 + ' e ' + veiculo2 + ' possuem velocidades iguais.')
}