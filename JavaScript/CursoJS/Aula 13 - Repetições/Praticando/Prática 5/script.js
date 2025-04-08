var historico = []
var opcao = window.prompt('Escolha uma opção: \n 1 - Digite um número aleatório \n 2 - Operações Matemáticas \n 3 - Ver Histórico \n 4 - Sair \n 5 - Limpar Histórico')
do {
    switch (opcao) {
        case '1':
            var aleatorio = window.prompt('1 - Digite um número aleatório')
            window.alert('O número digitado foi: ' + aleatorio)
            historico.push(`Número aleatório digitado: ${aleatorio}`)
            break;

        case '2':
            var operacoes = window.prompt('Operações Matemáticas:\n 1 - Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4 - Dividir \n')
            
            var n1 = Number.parseFloat(window.prompt('Digite o primeiro número:'))
            var n2 = Number.parseFloat(window.prompt('Digite o segundo número:'))
            var resultado;
            var descricao = '';

            if (operacoes === '1') {
                resultado = n1 + n2
                descricao = `${n1} + ${n2} = ${resultado}`

            } else if(operacoes === '2') {
                resultado = n1 - n2
                descricao = `${n1} - ${n2} = ${resultado}`

            } else if (operacoes === '3') {
                resultado = n1 * n2
                descricao = `${n1} * ${n2} = ${resultado}`

            } else if(operacoes === '4'){
                resultado = n1 / n2
                descricao = `${n1} / ${n2} = ${resultado}`

            } else {
                window.alert('[ERRO] Opção inválida!')
            }

            if (descricao !== '') {
                window.alert(`Resultado da operação: ${resultado}`)
                historico.push(descricao)
            }

            var continuar = window.confirm('Deseja voltar ao menu principal?')
            if(!continuar){
                opcao = '4'
                break
            }
            break
        
        case '3':
            if(historico.length === 0) {
                window.alert('Nenhuma operação registrada ainda.')
            } else {
                window.alert('Histórico de Operações:\n' + historico.join('\n'))
            }
            break


        case '4':
            window.alert('Saindo...')
            break

        case '5':
            if(historico.length === 0) {
                window.alert('O histórico já está vazio.')
            } else {
                var confirmarLimpar = window.confirm('Tem certeza que deseja apagar todo o histórico?')
                if (confirmarLimpar){
                    // historico = []
                    // historico.length = 0
                    historico.splice(0, historico.length)
                    window.alert('Histórico apagado com sucesso!')
                } else {
                    window.alert('Ação cancelada. O histórico foi mantido.')
                }
            }
            break

        default:
            window.alert('[ERRO] Opção inválida!')
            break
    }

    if(opcao !== '4') {
        opcao = window.prompt('Escolha uma opção: \n 1 - Digite um número aleatório \n 2 - Operações Matemáticas \n 3 - Ver Histórico \n 4 - Sair \n 5 - Limpar Histórico')
    }
    
} while (opcao !== '4')