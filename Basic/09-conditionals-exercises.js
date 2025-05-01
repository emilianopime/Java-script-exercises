/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Emiliano";

if ( nombre === "Emiliano"){
    console.log(`Esta variable: ${nombre}, 
    tiene tu nombre`);
}else{
    console.log("No lo tiene");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin";
let contraseña = 1234;

if( usuario === "admin" && contraseña ===1234){
    console.log("Si es el usuario y contraseña");
}else{
    console.log("No es el usuario ni contrasenia");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let a = 6;
let b = 8;
if (a > 0 || a < 0 || a == 0){
    console.log('Es un positivo, negativo o cero')// nos dice si es un entero, no especifica que tipo.
}else{
    console.log('Debe ser un string u otro tipo de dato.')
}

if (b > 0) {// nos dice que tipo de entero es o en su caso si es un 0
    console.log("Es un número positivo");
} else if (b < 0) {
    console.log("Es un número negativo");
} else {
    console.log("Es cero");
}



// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 6;

if(edad >=18){
    console.log("Puedes pasar papu")
}else{
    let anios = (18 - edad);
    console.log( `te faltan ${anios} anios para entrar a la disco`);
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 6;
let mesNombre;
switch(mes){
    case 1:
        mesNombre = 'enero'
        break;

    case 2:
        mesNombre = 'febrero'
        break;
    case 3:
        mesNombre = 'marzo'
        break;
    case 4:
        mesNombre = 'abril'
        break;
    case 5:
        mesNombre = 'mayo'
        break;    
    case 6:
        mesNombre = 'junio'
         break;
    case 7:
        mesNombre = 'julio'
        break;
    case 8:
        mesNombre = 'agosto'
        break;
    case 9:
        mesNombre = 'septiembre'
        break;
    case 10:
        mesNombre = 'octubre'
        break;
    case 11:
        mesNombre = 'noviembre'
        break;
    case 12:
        mesNombre = 'diciembre'
        break;
    default:
        mesNombre = 'No existe el mes 13 papu'
}

console.log(mesNombre);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
    let dias;
    switch(mes){
    case 4: // abril
    case 6: // junio
    case 9: // septiembre
    case 11: // noviembre
    dias = 30;
    break;

    case 1: // enero
    case 3: // marzo
    case 5: // mayo
    case 7: // julio
    case 8: // agosto
    case 10: // octubre
    case 12: // diciembre
    dias = 31;
    break;

    case 2: // febrero
    dias = 28; // Podrías hacer lógica adicional para años bisiestos
    break;

    default:
    dias = "Mes no válido";
    }
    console.log(`El mes ${mes}, tiene ${dias} dias.`);

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "aleman";
let saludo;
switch(idioma){
    case "ingles": 
    saludo = "hello!"
    break;
    case "espanol": 
    saludo = "Hola!"
    break;
    case "aleman":
    saludo = "gutentag!"
    break;
    default:
    saludo = "No tenemos saludos para ti";


}
console.log(`el idioma es ${idioma}, y el saludo es ${saludo}`);
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes3 = 6;
let mesNombre3;

if (mes3 === 1) {
    mesNombre3 = "enero";
} else if (mes3 === 2) {
    mesNombre3 = "febrero";
} else if (mes3 === 3) {
    mesNombre3 = "marzo";
} else if (mes3 === 4) {
    mesNombre3 = "abril";
} else if (mes3 === 5) {
    mesNombre3 = "mayo";
} else if (mes3 === 6) {
    mesNombre3 = "junio";
} else if (mes3 === 7) {
    mesNombre3 = "julio";
} else if (mes3 === 8) {
    mesNombre3 = "agosto";
} else if (mes3 === 9) {
    mesNombre3 = "septiembre";
} else if (mes3 === 10) {
    mesNombre3 = "octubre";
} else if (mes3 === 11) {
    mesNombre3 = "noviembre";
} else if (mes3 === 12) {
    mesNombre3 = "diciembre";
} else {
    mesNombre3 = "No existe el mes 13 papu";
}

console.log(mesNombre3);




// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mes2 = 6; // Puedes cambiar este valor para probar otros meses
let dias2;

if (mes2 === 2) {
    dias2 = 28; // Puedes agregar lógica adicional para años bisiestos
} else if (mes2 === 4 || mes2 === 6 || mes2 === 9 || mes2 === 11) {
    dias2 = 30;
} else if (mes2 >= 1 && mes2 <= 12) {
    dias2 = 31;
} else {
    dias2 = "Mes no válido";
}

console.log(`El mes ${mes} tiene ${dias} días.`);