// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  return array[array.length - 1];

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for(i=0;i < array.length;i++){
    array[i] = array[i] + 1;
  }
  return( array);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let respuesta = "";
  for(i= 0; i < palabras.length; i++){
    respuesta += ' '+ palabras[i];
   
  }
  return respuesta.trim();
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let existe = array.includes(elemento);
  if (existe){
    return true;
  }else{
    return false;
  }

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let resultado = 0;
  for(i=0;i<numeros.length;i++){
  resultado = resultado + numeros[i];
  }
  return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  let cantidad = resultadosTest.length;
  let resultado = 0;

  for(i = 0; i < resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
  }
  resultado = suma / cantidad;
  return resultado;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let grande = 0;

  for (i = 0; i < numeros.length; i++){
    if(grande < numeros[i]){
      grande = numeros[i]
    }
  }
  return grande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  let multiplicar = 1;

  if(arguments.length > 0){
    for (i = 0; i < arguments.length; i++){
      multiplicar = multiplicar * arguments[i];
    }
    return multiplicar;
  } else if(arguments.length == 1){
    return arguments;
  }else{
    return 0;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cantidad = 0;
  for (i=0; i < arreglo.length;i++){
    if(arreglo[i] > 18){
      cantidad++;
    }
  }
  return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia){
    case 1:
      return 'Es fin de semana';
      break;
    case 2:
      return 'Es dia Laboral';
      break;
    case 3:
      return 'Es dia Laboral';
      break;
    case 4:
      return 'Es dia Laboral';
      break;
    case 5:
      return 'Es dia Laboral';
      break;
    case 6:
      return 'Es dia Laboral';
      break;
    case 7:
      return 'Es fin de semana';
      break;
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numeros;
  let numInt = [];
  if(n > 10){
    numeros = String(n);
    for (i=0; i < numeros.length; i++){
    numInt.push(numeros[i]);
    }
    return parseInt(numInt) == 9;
  }

  if(n == 9){
    return true;
  }else{
    return false;
  }
}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (i = 0; i < arreglo.length; i++){
    if(arreglo[0] == arreglo[i]){
    }else{
      return false;
    }
  }
  return true;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoArreglo = [];
  for(i = 0; i < array.length; i++){
    if(array[i] == 'Enero'){
      nuevoArreglo.push(array[i]);
    }else if(array[i] == 'Marzo'){
      nuevoArreglo.push(array[i]);
    }else if(array[i] == 'Noviembre'){
      nuevoArreglo.push(array[i]);
    }
  }
  if (nuevoArreglo.length < 3){
    return 'No se encontraron los meses pedidos';
  }else{
    return nuevoArreglo;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  
  for (i = 0; i < array.length; i++){
    if(array[i] > 100 ){
      nuevoArray.push(array[i]);
    }
  }

  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  let nuevoArray = [];

  for(i = 0; i < 10; i++){
    numero += 2;
    nuevoArray.push(numero);
    
    if( i == numero){
      return 'Se interrumpió la ejecución';
    }
  }

  return nuevoArray;
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let nuevoArreglo = [];
  for(i = 0; i < 10; i++){
    if(i == 5){ 
      continue;
    }else{
      numero += 2;
      nuevoArreglo.push(numero);
    }
  }
  return nuevoArreglo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
