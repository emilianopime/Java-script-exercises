/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "Hola";
let cadena2 = "Alberto";

console.log( cadena1 + ' ' + cadena2);
// 2. Muestra la longitud de una cadena de texto
console.log(cadena1.length);

// 3. Muestra el primer y último carácter de un string
console.log(cadena1 [0],cadena1[3]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.toUpperCase());
console.log(cadena1.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

console.log(`Hola me llamo tal de tal,
soy de este pueblo magico situado
en esta parte de Mexico`);

// 6. Interpola el valor de una variable en un string
let nombre = 'Emiliano';
let pais = 'Mexico';
console.log(`Hola me llamo ${nombre} y soy de ${pais}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let parrafo = "Esto es un parrafo de prueba";
let parrafoModificado = parrafo.replace(/ /g, "_"); // remplaza los espacios en blanco por guiones
console.log(parrafoModificado);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales

// 10. Comprueba si dos strings tienen la misma longitud