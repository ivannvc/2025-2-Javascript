//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;

  return promedio;
}

function aprobados(numeros) {
  let mayor = numeros >= 70;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function reprobados(numeros) {
  let menor = numeros < 70;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

// //function resumenEstadistico(numeros) {
//   const promedio = obtenerPromedio(numeros);
//   const mayor = obtenerMayor(numeros);
//   const menor = obtenerMenor(numeros);

//   return { menor, mayor, promedio }
//   return { 'menor': menor, 'mayor': mayor, 'promedio': promedio }
// //}

//function nombresConVocal(nombres) {
  //const vocales = ["a", "e", "i", "o", "u"];
  //const resultado = [];

 // for (let i = 0; i < nombres.length; i++) {
   // let primeraLetra = nombres[i][0].toLowerCase();
    //if (vocales.includes(primeraLetra)) {
     // resultado.push(nombres[i]);
    //}
  //}
  //return resultado;
//}

async function main() {
  const calificaciones = [20, 18, 25, 30, 22, 66, 90, 76, 54, 43];
  

  //console.log(`Promedio = ${obtenerPromedio(edades)}`);
  //console.log(`El número mayor de ${lista} = ${obtenerMayor(lista)}`);
  //const estadistica = resumenEstadistico(datos);
  //console.log(`El resumen estadístico de: ${datos}`);
  console.log(`Los aprobados son: ${aprobados}`);
  console.log(`Los reprobados son: ${reprobados}`);
  console.log(`El promedio es: ${estadistica.promedio}`);
  //console.log("Lista de nombres: ", nombres);
  //console.log("Nombres solo con vocal: ", nombresConVocal(nombres));

}

main();
