/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Brasileirão';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [
  'Athletico-PR',
  'Atlético-GO',
  'Atlético-MG',
  'Bahia',
  'Botafogo'
];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(position) {
  if(position > 5 || position < 1) {
    return 'Não temos a informação do time que está nessa posição.'
  }
  
  return `O time que esta em ${position}º lugar é o ${teams[position-1]}.`
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // "O time que esta em 1º lugar é o Athletico-PR."
showTeamPosition(6); // "Não temos a informação do time que está nessa posição."
showTeamPosition(4); // "O time que esta em 4º lugar é o Bahia."
showTeamPosition(5); // "O time que esta em 5º lugar é o Botafogo."
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;
while(counter <= 30) {
  console.log(counter);
  counter++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(color) {
  var ret = 'O hexadecimal para a cor';
  switch(color.toLowerCase()) {
    case 'red':
      console.log(ret + ` ${color} é #FF0000.`);
      break;
    case 'green':
      console.log(ret + ` ${color} é #00FF00.`);
      break;              
    case 'blue':
      console.log(ret + ` ${color} é #0000FF.`);
      break;
    case 'black':
      console.log(ret + ` ${color} é #000000.`);
      break;
    case 'white':
      console.log(ret + ` ${color} é #FFFFFF.`);
      break;
    default: 
      console.log(`Não temos o equivamente hexadecimal para ${color}.`);
  }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('Green');       // O hexadecimal para a cor Green é #00FF00.
convertToHex('Red');         // O hexadecimal para a cor Red é #FF0000.
convertToHex('WHITE');       // O hexadecimal para a cor WHITE é #FFFFFF.
convertToHex('BLACK');       // O hexadecimal para a cor BLACK é #000000.
convertToHex('blue');        // O hexadecimal para a cor blue é #0000FF.
convertToHex('light blue');  // Não temos o equivamente hexadecimal para light blue.
convertToHex('light red');   // Não temos o equivamente hexadecimal para light red.
convertToHex('light green'); // Não temos o equivamente hexadecimal para light green.
