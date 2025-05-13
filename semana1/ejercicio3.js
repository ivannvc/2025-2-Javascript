// Clase 3: Lógica con Condicionales
const { ask } = require('../helpers/input');

async function main() {
  const number = Number(prompt("Ingresa un número:"));

  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Múltiplo de 3 y 5");
  } else if (number % 3 === 0) {
    console.log("Múltiplo de 3");
  } else if (number % 5 === 0) {
    console.log("Múltiplo de 5");
  } else {
    console.log("No es múltiplo de 3 ni de 5");
  }

  // TODO : Convertir a switch
  //const multiplo5 = number % 5 === 0;
  //const multiplo3 = number % 3 === 0;
  //const multiploAmbos = multiplo5 && multiplo3;
  //switch(){
  //  case 1:
  //    break;
  //  default:
  //    break;
  //}

}

main();

const { ask } = require('../helpers/input');

async function main() {
 const number = Number(await ask ("Ingresa un numero"));
 if (number %3===0 && number %6===0){
    console.log("Es multiplo de 3 y 5")
 } else if (number %3===0){
 console.log("es multiplo de 3") 
 } else if (number %5===0){
    console.log("es multiplo de 5") 
 } else {
    console.log("es multiplo de niguno") 
}
}
main();

// Día de la semana según número
// Función que devuelve el día de la semana según un número del 1 al 7
// Ejercicio: Crear un programa que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 = Lunes, 2 = Martes, etc.).

const { ask } = require('../helpers/input');

async function main() {
  const dia = Number(await ask("Ingresa un número del 1 al 7:"));
  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  // TODO : Implementar la lógica para mostrar el día de la semana según el número ingresado
  // Ejemplo: Si el usuario ingresa 1, debe mostrar "Lunes"

  if (dia >= 1 && dia <= 7) {
    console.log(diasSemana[dia - 1]);
  }
  else {
    console.log("Numero no válido");
  }
}

main();