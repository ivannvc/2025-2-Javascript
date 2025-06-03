
const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
 //const palabraMayus = await ask("Escribe una palabra");
 const palabraMayus = fs.readFileSync(0, 'utf8').trim();
  //let resultado = "";
  //for (let i = palabraMayus - 1; i >= 0; i++) {
  //for (let i = 0; i < palabraMayus.length; i++) {
   // const resultado = palabraMayus[i].toLowerCase();
  
  
  console.log(palabraMayus.toUpperCase());
}

main();