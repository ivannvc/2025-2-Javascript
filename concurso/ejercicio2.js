
const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {

  //const pregunta = await ask ( "cual es tu nombre y letras a descomponer?");
  const pregunta = fs.readFileSync(0, 'utf8').trim();

   pregunta1 = pregunta.split(" ");

  const nombres2 = pregunta1[0];
  const letra = pregunta1[1];
  const letras = ["a", "b", "c" ,"d", "e", "f", "g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","x","y","z"];
     //for (let index1 = 0; index1 < nombres2.length; index1++) {
     //const primerLetra = nombres2[index1][0].toLowerCase();
  
  var numero = 0;
      for (let index = 0; index < letras.length; index++) {
      if (letra === nombres2[index]) {
        numero += 1
        // console.log(`${nombres2}  ${letras[index].toUpperCase()}`);
        
       }
      
     }

     console.log (numero)

}

main();