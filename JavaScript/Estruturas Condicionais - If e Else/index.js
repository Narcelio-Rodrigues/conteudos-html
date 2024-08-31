/*
Permite criar blocos de código que vão ser executados somente quando uma determinada operção lógica for verdadeira

    SE condição === true ENTAO faça algo

Além disso, pode ser usado com o ELSE para acrescentar um bloco que vai ser executado somente quando essa mesma operação lógica for falsa

    SE condição === true ENTAO faça uma coisa SENÃO faça outra coisa
 */

/*
if (6 === 6) {
    console.log("Verdadeiro")
}   else {
    console.log("Falso")
}
*/
const idade = prompt ("Informe a sua idade: ")

if (idade > 18) {
    alert("Você é maior de idade")
}   else {
    alert("Você é menor de idade")
}