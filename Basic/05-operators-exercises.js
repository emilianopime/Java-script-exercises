/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/
let a = 5;
let b = 10;
// 1. Crea una variable para cada operación aritmética
let suma = a + b;
let resta = a - b;
let multiplicacion =  a * b;
let division = a / b;
let potencia = a ** b;
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
 let c = 10;
 c-=2; //restamos 2
 c+=2; // sumamos 2
 c**=2; // potencia 2
 c /= 2; // division entre 2
 c*=2; // multiplicacion por 2
 console.log(c);
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a < b);
console.log(a <= 5);
console.log(a == 5);
console.log(a != b);
console.log(b === 10);


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b);
console.log(a > 5);
console.log(a === '5');
console.log(a == b);
console.log(b === 20);

// 5. Utiliza el operador lógico and


console.log("parte 5");
console.log( 5 + 10 >= 15 && 10 + 30 <50);
console.log(suma > 10 && resta === -5);
console.log( a + c <= 40 && a + b == 43);

// 6. Utiliza el operador lógico or
console.log("parte 6");
console.log(a == 5 || b == 20);
console.log( a + b !== 15 || b > 10);
console.log( a === '5' || c == 23);
// 7. Combina ambos operadores lógicos
console.log("parte 7");
console.log( (suma >= 15 && resta <= -5) || (multiplicacion === 50 && division % 2 === 0));

// 8. Añade alguna negación
console.log("parte 8");
let diaSoleado = true;
console.log( `Es un dia soleado, ${diaSoleado}`);

let diaNoSoleado = !diaSoleado
console.log(`Esta es la negativa de diaSoleado ${diaNoSoleado}`);

// 9. Utiliza el operador ternario

let idPasable = 18;
let mensaje = idPasable >= 28 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

// 10. Combina operadores aritméticos, de comparáción y lógicas

let equipoNumero1 = a + b + c;
let equipoNumero2 = a - b * c;


console.log("parte ultima")
console.log((equipoNumero1 >=15 || equipoNumero1 < 50) && (equipoNumero2 < -10 || equipoNumero2 == - 50));