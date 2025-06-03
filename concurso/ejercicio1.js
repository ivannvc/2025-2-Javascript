
const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
 //const palabraAlReves = await ask("Escribe una palabra\n");
 const palabraAlReves = fs.readFileSync(0, 'utf8').trim();
  let resultado = "";
  for (let i = palabraAlReves.length - 1; i >= 0; i--) {
    resultado = resultado + palabraAlReves[i];
  }
  console.log(resultado);
}

main();
