/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let Myarray = [1,2,3,4,5]
let [myArray0, myArray1] = Myarray
console.log(myArray0)
console.log(myArray1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [myArray3 =0, myArray5 =0 , myArray4=0 ,myArray22 =0 ,myArray21= 0 ,myArray9 =2] = Myarray
console.log(myArray3)
console.log(myArray5)
console.log(myArray4)
console.log(myArray22)
console.log(myArray21)
console.log(myArray9)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let Mis_cosas = {
    musica: 122,
    tecnologia: 22,
    telefonos: 12,
}
let {musica , tecnologia} =Mis_cosas
console.log(musica)
console.log(tecnologia)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let{musica:musica1 ,tecnologia:tecnologia12} = Mis_cosas
console.log(musica1)
console.log(tecnologia12)
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let Mis_cosas1 = {
    musica: 122,
    tecnologia: 22,
    telefonos: 12,
    JOBIS: {    
        videojuegos: true,
        programar : true,
        arquirirconocimieto :true,
        medificar_memoria: true
    }
}

let {JOBIS: {videojuegos ,programar}} =Mis_cosas1
console.log(videojuegos)
console.log(programar)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = [1,2]
let combinacion = [...Myarray,...myArray2]
console.log(combinacion)
// 7. Usa propagación para crear una copia de un array
let copia_array = ["hola",true,false]
let resutado = [...copia_array]
console.log(resutado)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let resutado1 = {...Mis_cosas1, ...Mis_cosas}
console.log(resutado1)
// 9. Usa propagación para crear una copia de un objeto
let objetctos = {
    nombre: "dylan",
    edad: 18,
    jobi: "programar",
}
let resutado12= { ...objetctos}
console.log(objetctos)
// 10. Combina desestructuración y propagación
let combinacion1 = [1,22,23,true]
let [myvalor0, mivalor2, myvalor3, mivalor4] = combinacion1
console.log(myvalor0)
console.log(mivalor2)
console.log(myvalor3)
console.log(mivalor4)

let propagación = [...combinacion1]
console.log(propagación)

