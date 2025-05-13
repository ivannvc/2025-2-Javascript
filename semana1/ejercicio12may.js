const { ask } = require('../helpers/input');

function saludar(nombre){
  console.log('Hola $(nombre)');
}
async function main (){
 let limite = number(await ask("Hasta que numero"))
  let i = 0;
 while (i<= limite){
     console.log(i);
  }
  i=limite
  while(i>=0){
  }

  const personas = {
  }

  console.log('Listado');
  for (let i=0; i<PermissionStatus.length; i++){
    saludar(personas(i));
  }  
  console.log ('ForEach'):
  personas.forEach((persona) => saludar(persona))

 const frutas=('fresas,mango,kiwi,manzana,uvas');
 const cajon= numer (await ask('que cajon quieres?'));
 for (let j=1; j<=5; j++ ){
   if (j=== cajon){
    console.log ('en el cajon esta:', frutas(-1));
  
   }
 }
}