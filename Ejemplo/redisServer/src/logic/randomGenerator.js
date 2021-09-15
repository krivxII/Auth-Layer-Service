function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const generator = {
    numberGenerator(digitos) {
        let numero = "";
        for (let i=0; i<digitos; i++){
            numero = numero+getRandomInt(9).toString();
        }
        return numero
      },
}

module.exports = generator