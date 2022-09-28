// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index of numeros) {
    if (index < 0 || index > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index of numeros) {
    numeroRepetido = 0;
    for (let i of numeros) {
      if (index === i) {
        numeroRepetido += 1;
        if (numeroRepetido === 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return (
    '(' +
    numeros[0] +
    '' +
    numeros[1] +
    ')' +
    ' ' +
    numeros[2] +
    '' +
    numeros[3] +
    '' +
    numeros[4] +
    '' +
    numeros[5] +
    '' +
    numeros[6] +
    '-' +
    numeros[7] +
    '' +
    numeros[8] +
    '' +
    numeros[9] +
    '' +
    numeros[10] +
    ''
  );
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 7, 7, 8, 9, 3, 0, 2]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
