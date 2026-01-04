/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
 let k = 2
 let o = 5
// 2. Crea una variable para cada tipo de operación de asignación,
       let test = 9 
       test +=  3 //suma
       test  -= 3 //resta 
       test  *= 3 // multiplicacion 
       test  /= 3 //divicion
       test  %= 3 //modulo
       test  **= 3 //exponente
//que haga uso de las variables utilizadas para las operaciones aritméticas   
   k + o  //suma
   k - o //resta
   k * o //multiplicacion
   k % o //modulo
   k ** o //exponente
//3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log( 80>  66)
console.log( 7 > 2)
console.log( 90 > 24)
console.log( 11 > 7)
console.log( 165 > 9)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log( 67 > 100)
console.log(  59 > 80)
console.log( 170 > 300)
console.log( 9 > 89)
console.log( 572 > 621)
// 5. Utiliza el operador lógico and
console.log(65  > 56 &&  90 > 20)
// 6. Utiliza el operador lógico or
console.log(78 > 90 || 90 > 87) //tiene que aver uno  verdadero
// 7. Combina ambos operadores lógicos
console.log(68 > 24 &&  100 > 90 ||  290 > 100 )
// 8. Añade alguna negación
console.log(!(68 > 24 &&  100 > 90 ||  290 > 100 ))
// 9. Utiliza el operador ternario
let  Neflix = true
Neflix ? console.log("tiene neflix") : console.log("no tiene  neflix")
// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log( 6 + 6   ||   12 > 116 )
