// Clase 3: Lógica con Condicionales
const { ask } = require('../helpers/input');

async function main() {
  const number = Number(await ask("Ingresa un número:"));

  if (number % 3 !== 0 && number % 5 !== 0) {
    console.log("No es múltiplo de 3 y 5");
  } else if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Multiplo de 3")
  } else if (number % 5 === 0 && number % 3 !== 0) {
    console.log("Multiplo de 5")
  } else {
    console.log("Es múltiplo de 3 y 5");
  }

  switch (true) {
    case number % 3 === 0 && number % 5 === 0:
      console.log("Es múltiplo de 3 y 5");
      break;
    case number % 3 === 0:
      console.log("Es múltiplo de 3");
      break;
    case number % 5 === 0:
      console.log("Es múltiplo de 5");
      break;
    default:
      console.log("No es múltiplo de 3 o 5");
  }

  n % 3 === 0 && n % 5 === 0
    ? "Múltiplo de 3 y 5"
    : n % 3 === 0
      ? "Múltiplo de 3"
      : n % 5 === 0
        ? "Múltiplo de 5"
        : "No es múltiplo de 3 ni de 5";

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