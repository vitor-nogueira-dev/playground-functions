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
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = 0;
  let distanciaCat2 = 0;

  if (cat1 - mouse < 0) {
    distanciaCat1 = -1 * (cat1 - mouse);
  } else if (cat1 - mouse >= 0) {
    distanciaCat1 = cat1 - mouse;
  }
  if (cat2 - mouse < 0) {
    distanciaCat2 = -1 * (cat2 - mouse);
  } else if (cat2 - mouse >= 0) {
  }
  distanciaCat2 = cat2 - mouse;

  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else if (distanciaCat2 === distanciaCat1) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat1';
  }
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
