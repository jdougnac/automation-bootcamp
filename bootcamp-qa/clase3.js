/*
Ejemplo interactivo: Variables en JavaScript

Este código muestra la declaración, inicialización e impresión de diferentes tipos de variables.
*/

// Declaración e inicialización usando var, let y const:
var miVar = "Hola, soy var";
let miLet = "Hola, soy let";
const miConst = "Hola, soy const";

// Declaración de variables con diferentes tipos de datos:
let texto = "Esto es un string";         // Literal de texto
let numeroEntero = 42;                    // Literal numérico entero
let numeroDecimal = 3.14;                 // Literal numérico decimal
let booleano = true;                      // Literal booleano
let objeto = { nombre: "Ana", edad: 25 };   // Objeto
let arreglo = [1, 2, 3, 4, 5];              // Arreglo
let sinDefinir;                           // Undefined (no se ha asignado valor)
let nulo = null;                          // Null
let simbolo = Symbol("ejemplo");          // Símbolo

// Imprimir el valor de cada variable:
console.log("miVar:", miVar);
console.log("miLet:", miLet);
console.log("miConst:", miConst);
console.log("texto:", texto);
console.log("numeroEntero:", numeroEntero);
console.log("numeroDecimal:", numeroDecimal);
console.log("booleano:", booleano);
console.log("objeto:", objeto);
console.log("arreglo:", arreglo);
console.log("sinDefinir:", sinDefinir);
console.log("nulo:", nulo);
console.log("simbolo:", simbolo);

// Demostración de reasignación (solo para var y let):
miVar = "Nuevo valor para var";
miLet = "Nuevo valor para let";
// miConst = "Intento de reasignación para const"; // Esto genera error

console.log("Nuevo valor de miVar:", miVar);
console.log("Nuevo valor de miLet:", miLet);

// Mostrar el tipo de cada variable:
console.log("Tipo de texto:", typeof texto);
console.log("Tipo de numeroEntero:", typeof numeroEntero);
console.log("Tipo de numeroDecimal:", typeof numeroDecimal);
console.log("Tipo de booleano:", typeof booleano);
console.log("Tipo de objeto:", typeof objeto);
console.log("Tipo de arreglo:", typeof arreglo);
console.log("Tipo de sinDefinir:", typeof sinDefinir);
console.log("Tipo de nulo:", typeof nulo); // Nota: typeof null retorna "object" en JavaScript
console.log("Tipo de simbolo:", typeof simbolo);