// Desafio 1
const tigre = false;
const onca = true;
const lobo = false;
const leao = true;

function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
let result = 0;
function calcArea(base, height) {
  result = (base * height) / 2;
  return result;
}
// Desafio 3

function splitSentence(frase) {
  let myArray = frase.split(' ');
  return myArray;
}

// Desafio 4
function concatName(nomes) {
  let primeiroNome = nomes[0];
  let ultimoNome = nomes[nomes.length - 1];
  return ultimoNome + ', ' + primeiroNome;
}
concatName(['foguete', 'não', 'tem', 'ré']);

// Desafio 5
function footballPoints(wins, ties) {
  let counterWins = wins * 3 + ties;
  return counterWins;
}

// Desafio 6

function highestCount(numeros) {
  let repeticoes = 0;
  let maiorNumero = Math.max.apply(null, numeros);
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === maiorNumero) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
