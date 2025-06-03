
const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {

  //const nombres2 = await ask("¿Cuál es la palabra? ");
  const nombres2 = fs.readFileSync(0, 'utf8').trim();
  const vocales = "aeiou";

  var numero = 0;
      for (let index = 0; index < nombres2.length; index++) {
        //console.log ("Hola");
      if (vocales.includes(nombres2[index])) {
        numero += 1
      }
    }
    console.log (numero)
  }

main();