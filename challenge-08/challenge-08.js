/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(x, y) {
  return x + y;
};

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var x = 10;
var y = 5;
console.log(`A soma de ${x} e ${y} é igual a ${sum(x, y)}.`); // A soma de 10 e 5 é igual a 15.

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${sum.name}.`); //  nome da função que faz a soma é calculateSum.

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName() {
  return 'André Rodrigues';
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${varShowName.name} retorna ${varShowName()}.`); // A função showName retorna André Rodrigues.

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator(operation) {
  var ret = 'Resultado da operação: ';
  switch(operation) {
    case '+':
      return function sum(x, y) {
        ret += `${x} ${operation} ${y} = ${x+y}.`
        return ret;
      }
    case '-':
      return function subtract(x, y) {
        ret += `${x} ${operation} ${y} = ${x-y}.`
        return ret;
      }
    case '*':
      return function multiply(x, y) {
        ret += `${x} ${operation} ${y} = ${x*y}.`
        return ret;
      }
    case '/':
      return function division(x, y) {
        ret += `${x} ${operation} ${y} = ${x/y}.`
        return ret;
      }
    case '%':
       return function module(x, y) {
        ret += `${x} ${operation} ${y} = ${x%y}.`
        return ret;
      }
    default:
     return 'Operação Inválida';                                
  }
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(10, 5)); // Resultado da operação: 10 + 5 = 15.

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var substraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(substraction(50, 13));  // Resultado da operação: 50 - 13 = 37.
console.log(multiplication(8, 53)); // Resultado da operação: 8 * 53 = 424.
console.log(division(102, 20));     // Resultado da operação: 102 / 20 = 5.1.
console.log(mod(50, 10));           // Resultado da operação: 50 % 10 = 0.
