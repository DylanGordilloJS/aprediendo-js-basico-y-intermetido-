/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let myname = "dylan"
let age = "mi edad es 16 y mi nombre es" + myname + "!"
// 2. Muestra la longitud de una cadena de texto
console.log(age.length)
// 3. Muestra el primer y último carácter de un string
console.log(age[0])
console.log(age[33])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(myname.toLocaleUpperCase())
console.log(myname.toLocaleLowerCase())
// 5. Crea una cadena de texto en varias líneas
myname = `esta es la
cadena de varias lineas`
// 6. Interpola el valor de una variable en un string
console.log(`hola este es  mi nombre ${myname}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("" , "?")
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(age.indexOf("nombre"))
// 9. Comprueba si dos strings son iguales
    
// 10. Comprueba si dos strings tienen la misma longitud
console.log(age.length)
