// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.


const { ask } = require('../helpers/input');


async function main() {
  let opcion = '';
  
  let nombre = [];
  let edad = [];
  let calificacion = [];

  while (opcion !== '4') {
    opcion = await ask('¿Qué deseas hacer? \n1. Agregar una alumno \n2. Eliminar una fruta \n3. Imprimir \n4. Salir \n');
    if (opcion === '1') {
        //const personas = [
      //Agregarnombre
      let NombreNuevo = await ask('¿Qué nombre deseas agregar?: ');
      nombre.push(NombreNuevo);
      //console.log(`Fruta agregada: ${frutaNueva}`);
      //console.log('Frutas disponibles: ', frutas);


      //agregaedad
      let EdadNueva = await ask('¿Qué edad deseas agregar?: ');
      edad.push(EdadNueva);
      //console.log(`Fruta agregada: ${frutaNueva}`);
      //console.log('Frutas disponibles: ', frutas);


      //agregarcalificacion
      let CalificacionNueva = await ask('¿Qué califacion deseas agregar?: ');
      calificacion.push(CalificacionNueva);
      //console.log(`Fruta agregada: ${frutaNueva}`);
      //console.log('Frutas disponibles: ', frutas);
        
    
      //console.log('Alumno disponibles: ', personas);




    } else if (opcion === '2') {
      //Eliminar
      if (frutas.length === 0) {
        console.log('No hay frutas disponibles');
        continue;
      } else {
        let frutaEliminar = await ask('¿Qué fruta deseas eliminar?: ');
        let index = frutas.indexOf(frutaEliminar);

        if (index !== -1) {
          frutas.splice(index, 1);
          console.log(`${frutaEliminar} ha sido eliminada `)
        } else {
          console.log('Fruta no encontrada ');
        }
        console.log('Frutas disponibles: ', frutas);
      }

    }else if (opcion === '3'){
        console.log(`Las frutas son ${frutas}`)



    }   else if (opcion === '4') {
      //Salir
      console.log('Gracias por usar el programa');
    } else {
      console.log('Opción no válida');
    }
  }
}


// async function main() {

//   const personas = [
//     {
//       nombre: "Rodrigo",
//       edad: 36,
//       profesion: "Desarrollador",
//       hobbies: ["nadar", "futbol", "leer"],
//       birthDate: "1988-08-08",
//       saludar: function () {
//         console.log(`Hola mi nombre es ${this.nombre} `);
//       }
//     },
//     {
//       nombre: "Claudia",
//       edad: 36,
//       profesion: "Desarrollador",
//       hobbies: ["nadar", "futbol", "leer"],
//       birthDate: "1988-08-08",
//       saludar: function () {
//         console.log(`Hola mi nombre es ${this.nombre} `);
//       }
//     },
//     {
//       nombre: "Heriberto",
//       edad: 36,
//       profesion: "Desarrollador",
//       hobbies: ["nadar", "futbol", "leer"],
//       birthDate: "1988-08-08",
//       saludar: function () {
//         console.log(`Hola mi nombre es ${this.nombre} `);
//       }
//     },
//   ];

//   const alumno1 = {
//     nombre: "Yei Yei",
//     matricula: "AL089778",
//     promedio: 90,
//     edad: 18,
//     mostrarInfo: function () {
//       console.log(`Nombre: ${this.nombre}| \nMatricula: ${this.matricula}| \nPromedio: ${this.promedio}|`);
//       if (this.edad >= 18) {
//         console.log("Es mayor de edad");
//       } else {
//         console.log("No es mayor de edad");
//       }
//     }
//   }


//     setMayorEdad: function () {
//       if (this.edad >= 18) {
//         this.mayorDeEdad = true;
//       } else {
//         this.mayorDeEdad = false;
//       }
//     }


//   const alumnos = [alumno1, alumno2, alumno3];

//   for (let i = 0; i < alumnos.length; i++) {
//     alumnos[i].mostrarInfo();
//   }

//   // alumno1.mostrarInfo();
//   // alumno2.mostrarInfo();
//   // alumno3.mostrarInfo();
// }



main();