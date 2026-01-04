/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
     for (let j = 1 ; j < 11; j++) {
        console.log(`numeros ${j}`)
     }
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
     // almacena todo los indices
    let sumatoltal = 0
     for (let i = 1; i <= 101 ; i++) {
        //utilizamos la  asignacion y le sumamos  con el el indice
        sumatoltal += i
     }
    console.log(`suma: ${sumatoltal}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
     for (let i = 1; i < 51; i++) {
        //comprobar si es par  con su indice
             if(i % 2 === 0) {
                console.log(`estos son los numeros pares: ${i}` )
             }
     }
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
        // array  de Nombres
     let Names = ["Dylan","Kevin","Jorge","Molina"]
     //usar el bucle para imprimir
     // se utiliza for of para imprimir los valores
     for(let value of Names) {
        console.log(value)
     }
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
     // el que almacena todas la vocales
     let contadorvocales = 0
        //delcaracon y inicializacion de  la cadena
     let palabra = "hola todos los programdores"
     //bucle que mire la logitud de carateres de cadena
     for (let i = 0; i < palabra.length; i++) {
        let carateres = palabra[i].toLocaleLowerCase()

        if (carateres === "a" || carateres === "e" || carateres === "i" || carateres === "o" || carateres === "u") {
            contadorvocales++
        }
     }
console.log(contadorvocales)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
     let multiplicar = 1
    //array de numeres
     let Numeros1 = [4,42,16,2,29]
     //bucle
    for(let i = 0; i < Numeros1.length;i++) {
        //asignacion mutiplicacion  con el indice y los dato de la array
        multiplicar *= Numeros1[i]
    }
    console.log(multiplicar)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
    //tabla de mutiplicacion
    let tabla = 5
    // el limite de la multiplicacion
    const limite = 10
    // bucle para dar el limite y la multiplicacion
    for(let i = 1 ; i <= limite; i++){
        // la opracion
        let resultado = tabla * [i]
        //lo que se imprimira
        console.log(`${tabla}x ${i} x = ${resultado},`)
    }
// 8. Usa un bucle para invertir una cadena de texto
   // la cande de texto
   let informacion = "hola soy dylan"
   let cadena_invertida = ""
   //bucle invertir  la cadena con un bucle
   // si la logitud de informacion es que i o igual  lo lo manda invertido
   for(let i = informacion.length -1 ; i >= 0; i--) {
    //utiliza asignacion  
    cadena_invertida += informacion[i]
   }
   console.log(cadena_invertida)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
 let primero = 0
 let segundo = 1
 let  lista = [0 , 1]

   for (let i = 2; i < 10 ; i++) {
      //caculando numero siguente
      let suma =  primero + segundo 
      // alamacenar despues de calcular
      lista.push(suma)
      // pasa a valer  1
      primero = segundo
      //pasa a valer  el valor de  suma osea (0,1  y la suma  y los datos siguentes )
      segundo = suma
   }
   console.log(lista)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
// los numeros mayores
let  Mayor = []
//la array que los resivve
let numero_mayor = [5, 12, 8, 20, 3, 15, 7, 25, 9]
// el bulce que revisa  para que solo entre  numeros mayores que 10
 for(let i = 0; i < numero_mayor.length ; i++) {
   let numero_actual = numero_mayor[i]
     if (numero_actual > 10) {
       Mayor.push(numero_actual)
     }
 }
 console.log(numero_mayor)

