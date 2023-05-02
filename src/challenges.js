// Desafio 1
const compareTrue = (param1, param2) => (!!(param1 && param2 === true));

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (frase) => frase.split(' ');

// Desafio 4
const concatName = (nomes) => `${nomes[nomes.length - 1]}, ${nomes[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + ties;

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
  const distanciaCat1 = Math.abs(cat1 - mouse);
  const distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return distanciaCat1 < distanciaCat2 ? 'cat1' : 'cat2';
}

console.log(catAndMouse(0, -4, 2));
// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[i] % 5 === 0) {
      result.push('buzz');
    } else if (numbers[i] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
// Desafio 9
function encode(string) {
  return string
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
}
encode('ola, estou na trybe');

function decode(string) {
  return string
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
}
decode('4l1, 2st45 n1 tryb2');

// Desafio 10
function techList(array, name) {
  if (array.length === 5) {
    array = array.sort();
  }
  let arrayTechAndName = [];

  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index in array) {
    arrayTechAndName.push({ tech: array[index], name });
  }
  return arrayTechAndName;
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
