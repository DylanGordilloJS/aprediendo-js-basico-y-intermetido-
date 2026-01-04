/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let Nombre = "dylan"

if (Nombre == "dylan") {
    console.log(`mi nombre es ${Nombre}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin"
let contraseña = "31424"

if (usuario === "admin" && contraseña === "31424")  {
    console.log("el usuario y la contraseña conciden")
}else {
    console.log("el usuario y la contraseña no conciden")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let Numero = 2
 if (Numero > 0) {
    console.log(`le numero es positivo es ${Numero}`)
 }else if (Numero < 0) {
    console.log(`el numero negativo es ${Numero}`)
 }else{
    console.log(`el numero es cero`)
 }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15 
let edadMinima = 18 
if (edad >= edadMinima) {
    console.log("esta persona si puede votar")
}else {
    let edadfaltante = edadMinima - edad 
    console.log(`esta persona no puede votar le faltan  ${edadfaltante} para votar`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 
const l = edad == 18 ? "es adulto" : "es menor de dad"
console.log(l) 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
    let estacion 
    let mes = 0
    switch(mes) {
        case 0:
         estacion = "verano"
        break
     case 1:
        estacion = "primavera"
        break
        case 2:
            estacion = "otoño"
            break
        case 3:
            estacion = "invierno"
            break
            default:
                estacion = "numero incorreto "
    }
    console.log(estacion)
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let  mesnumero = 2
let numeroDedias

switch (mesnumero) {
    //mese 31 dias
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        numeroDedias = 31  //dia de estos mes
    break
  //meses 3o dias 
  case 4:
    case 6:
        case 9:
            case 11:
        numeroDedias = 30
        break

        case 2:
            numeroDedias = "28 o 29"
            break
            default:
                numeroDedias = "Número de mes no válido. Debe estar entre 1 y 12."
}


console.log(`El mes número ${mesnumero} tiene ${numeroDedias} días.`);