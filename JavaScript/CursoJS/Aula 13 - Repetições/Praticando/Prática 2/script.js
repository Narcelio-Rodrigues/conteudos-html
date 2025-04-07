var opcao = window.prompt('Escolha uma opção: \n 1 - Digite um número aleatório \n 2 - Operações Matemáticas \n 3 - Sair')
do {
    switch (opcao) {
        case '1':
            var aleatorio = window.prompt('1 - Digite um número aleatório')
            window.alert('O número digitado foi: ' + aleatorio)
            break;

        case '2':
            var operacoes = window.prompt('Operações Matemáticas:\n 1 - Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4 - Dividir \n')
            
            if (operacoes === '1') {
                var n1 = Number.parseFloat(window.prompt('Digite o primeiro número:'))
                var n2 = Number.parseFloat(window.prompt('Digite o segundo número:'))
                var soma = n1 + n2
                window.alert(`Resultado de operação: ${soma}`)
            } else if(operacoes === '2') {
                var n1 = Number.parseFloat(window.prompt('Digite o primeiro número:'))
                var n2 = Number.parseFloat(window.prompt('Digite o segundo número:'))
                var subtrair = n1 - n2
                window.alert(`Resultado da operação: ${subtrair}`)
            } else if (operacoes === '3') {
                var n1 = Number.parseFloat(window.prompt('Digite o primeiro número:'))
                var n2 = Number.parseFloat(window.prompt('Digite o segundo número:'))
                var multiplicar = n1 * n2
                window.alert(`Resultado da operação: ${multiplicar}`)
            } else if(operacoes === '4'){
                var n1 = Number.parseFloat(window.prompt('Digite o primeiro número:'))
                var n2 = Number.parseFloat(window.prompt('Digite o segundo número:'))
                var dividir = n1 / n2
                window.alert(`Resultado da operação: ${dividir}`)
            } else {
                window.alert('[ERRO] Opção inválida!')
            }
            break;

        case '3':
            window.alert('Saindo...')
            break;

        default:
            window.alert('[ERRO] Opção inválida!')
            break;
    }
} while (opcao ==! '3');