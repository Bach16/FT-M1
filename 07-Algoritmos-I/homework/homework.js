'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1]
for (let i = 2; i < num+1; i++) {
    if (num % i === 0) {
      arr.push(i);
      num/=i;
      i-=1;
    }
  }
return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: 
  let length = array.length  
  for (let i = 1; i < length; i++) {
    for (let e = 0; e < length; e++) {
       if (array[e] > array[e+1]){
        let h = array[e]        
        array[e] = array[e+1]
        array[e+1] = h
       } 
    }     
  }
  return array
}



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilinumando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  let length = array.length  
  for (let i = 0; i < length; i++) {
    let h = array[i]
    let j = i-1
    while (j >=0 && array[j] > h) {
      array[j+1] = array[j]
      j--
    }
    array[j+1] = h
  }
  return array
}
// [10,6,1,7,8,2,4]


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilinumando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let length = array.length  
  for (let i = 1; i < length; i++) {
    for (let e = 0; e < length; e++) {
       if (array[e] > array[e+1]){
        let h = array[e]        
        array[e] = array[e+1]
        array[e+1] = h
       } 
    }     
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
