/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
    function mat( a, b) {
        return   a + b
    }
    console.log(mat(12,5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
   let numeros1 = [60,1,522,4,10,20]
   function recibe(mayor) {
        let max = mayor[0]
        for (let i = 1; i < mayor.length; i++) {     
             if (mayor[i] > max) {
                 max = mayor[i]
             }      
        }
        return max
   }
let resultado = recibe(numeros1)
console.log(resultado)
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const  string1 = (vocales) => {
    let frase = vocales.toLowerCase()
    let vocales1 = "aeiou"
    let contador = 0

    for (let i = 0; i < frase.length; i++) {
        if (vocales1.includes(frase[i])) {
            contador++
        }
    }
    return contador
}
const test = string1("esto un dylan")
console.log(test)
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
    let things =  ["dylan","telefono","cascada","corazon","amor"]
    const  hacer_mayor = (cadena) => {
        //array vacio que almacena los datos de strings de mayuscula
        let total = []
        // tener los datos de la array
            for (let i = 0; i < cadena.length; i++) {
                //  tener los elemetos de la interacion
                let elementos_actuales = cadena[i]
                // trasformar los datos  de strngs a masculas 
                let elemetos_trasformados = elementos_actuales.toUpperCase()
                //almacenado todo a la array vacia 
                total.push(elemetos_trasformados)
            }
            // se ponde aca ya que la varible esta dentro de bloque de function
            // si la ponemos a fuera con lo imprime la consola
             console.log(total)
        }
let resultaod_3 = hacer_mayor(things)
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario 
const numeros = (datos) => {
            if(datos <= 1) {
                return false
            }

            for (let i = 2; i < datos; i++) {
                if (datos % i === 0) {
                    return false
                }
            }
             return true
        }
        console.log(`¿Es 13 primo? ${numeros(1)}`);
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
// primera arrat 1
    let nueva_array = ["carros","casco","pastel"]
    //segunda array 2
    let segunda_array = ["ferrary","mause","monney","carros"]
    // verificacion con los indices para mira si esta  elemetos comunes
    const  creacion_array = (dato1,dato2) => {
            let contenedor = dato1.filter(datos3 => {
                //verificaion de elemtos comunes
                return dato2.includes(datos3)
            })
            // devebuelde contender 
            return contenedor
        }

let resultado9 = creacion_array(nueva_array,segunda_array)
console.log(resultado9)
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let nuemeros00 = [12 , 34 , 45, 56, 67, 78, 1, 2, 5, 4]
const more_array = (suma2) => {
        let sumaPares = 0
    for (let i = 0; i < suma2.length; i++) {
        const numeroActual = suma2[i]
        if (numeroActual % 2 == 0) {
            sumaPares = sumaPares + numeroActual;

        }
    }   
        return sumaPares
}

let resultado0 = more_array(nuemeros00)
console.log(resultado0)
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const return_elevadoalcudrado = (numeros2) => {
    let elevados = 2
    let todos_arrayNumeroselevados = []
    for (let i = 0; i < numeros2.length; i++) {
        todos_arrayNumeroselevados.push(Math.pow(numeros2[i], elevados))
    }
    console.log(todos_arrayNumeroselevados)

}
let result = return_elevadoalcudrado(nuemeros00)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let computer = "keyboard"
const strig_reversa = (strg) => {
    let resersa = 0
    for (let i = strg.length -1  ; i >= 0 ; i--) {
        resersa += strg[i]
    }
    console.log(resersa)
}

let reversa = strig_reversa(computer)
// 10. Crea una función que calcule el factorial de un número dado
const calcula_factorial = (n) => {
    let caja2 = 3
    for(let i = 1 ; i <= n ; i++) {
        caja2 *=  i
    }
  return caja2
}

let numero_factorial = calcula_factorial(3);
console.log(numero_factorial)






