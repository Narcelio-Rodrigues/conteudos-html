var opcao = window.prompt('Escolha uma opção: \n 1 - Digite um número aleatório \n 2 - Operações Matemáticas \n 3 - Sair')
do {
    switch (opcao) {
        case '1':
            var aleatorio = window.prompt('1 - Digite um número aleatório')
            window.alert('O número digitado foi: ' + aleatorio)
            break;

        case '2':
            var operacoes = window.prompt('Operações Matemáticas:\n 1 - Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4 - Dividir \n')
            
            var n1 = Number.parseFloat(window.prompt('Digite o primeiro número:'))
            var n2 = Number.parseFloat(window.prompt('Digite o segundo número:'))
            var resultado;

            if (operacoes === '1') {
                resultado = n1 + n2
                window.alert(`Resultado de operação: ${resultado}`)

            } else if(operacoes === '2') {
                resultado = n1 - n2
                window.alert(`Resultado da operação: ${resultado}`)

            } else if (operacoes === '3') {
                resultado = n1 * n2
                window.alert(`Resultado da operação: ${resultado}`)

            } else if(operacoes === '4'){
                resultado = n1 / n2
                window.alert(`Resultado da operação: ${resultado}`)

            } else {
                window.alert('[ERRO] Opção inválida!')
            }

            var continuar = window.confirm('Deseja voltar ao menu principal?')
            if(!continuar){
                opcao = '3'
                break
            }
            break

        case '3':
            window.alert('Saindo...')
            break

        default:
            window.alert('[ERRO] Opção inválida!')
            break
    }

    if(opcao !== '3') {
       opcao = window.prompt('Escolha uma opção: \n 1 - Digite um número aleatório \n 2 - Operações Matemáticas \n 3 - Sair') 
    }
    
} while (opcao !== '3')