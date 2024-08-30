//Retornam um resultado booleano (true ou false)
/*
OPERADORES
== e ===
!= e !==
>, >=, <, <=
*/ 

/*
1. COMPARAÇÃO DE IGUALDADE

    #Igualdade Simples (==): Compara dois valores, convertendo-os para o mesmo tipo antes da comparação (coerção de tipo).
    */

    console.log(5 == '5'); // true (os valores são iguais após a conversão)
    console.log(true == 1); // true (true é convertido para 1)

    /*
    #Igualdade Estrita (===): Compara dois valores e seus tipos sem conversão de tipo. É a forma recomendada de comparação, pois evita resultados inesperados.
    */

    console.log(5 === '5'); // false (os tipos são diferentes: número vs string)
    console.log(true === 1); // false (os tipos são diferentes: boolean vs número)

/*
2. COMPARÇÃO DE DESIGUALDADE
    #Desigualdade Simples (!=): Compara dois valores, convertendo-os para o mesmo tipo antes da comparação.
    */

    console.log(5 != '5'); // false (os valores são iguais após a conversão)
    console.log(true != 1); // false (true é convertido para 1)
    
    /*
    #Desigualdade Estrita (!==): Compara dois valores e seus tipos sem conversão de tipo.
    */

    console.log(5 !== '5'); // true (os tipos são diferentes)
    console.log(true !== 1); // true (os tipos são diferentes)

/*
3. COMPARAÇÃO DE MAIOR OU MENOR
*/

/*
4. COMPARAÇÃO DE TIPOS
*/

console.log(5 == 5)