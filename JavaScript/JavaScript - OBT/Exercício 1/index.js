const primeiroNome = prompt('Infome o primeiro nome do recruta:')
const sobrenome = prompt('Informe o sobrenoome do recruta:')
const campoDeEstudo = prompt('Qual é o campo de estudo do recruta?')
const anoDeNAscimento = prompt('Qual é o ano de nascimento do recruta?')

// 'alert' Para exibir uma caixa de diálogo pop-up com uma mensagem(string) para o usuário.

// '\n' Para pular linha dentro de uma string.
alert(
    'Recruta cadastrado com sucesso!\n' + 
    '\nNome completo: ' + primeiroNome + " " + sobrenome + '\nCampo de estudo: ' + campoDeEstudo + '\nIdade: ' + (2024 - anoDeNAscimento)
)