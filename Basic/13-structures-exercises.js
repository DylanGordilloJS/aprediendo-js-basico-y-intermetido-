/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
 let animales = ["tigre","perro","gato","pez","ardilla"]
// 2. Añade dos más. Uno al principio y otro al final
 animales.unshift("ratas",)
 animales.push("aves")
 console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
  animales.splice(3 ,1)
  console.log(animales)
// 4. Crea un set que almacene cinco libros
    let libro = new Set(["Cien años de soledad", "1984 de George Orwell", "El Señor de los Anillos","Orgullo y prejuicio de Jane Austen" ,"Un mundo feliz de Aldous Huxley"])
// 5. Añade dos más. Uno de ellos repetido
    console.log(libro)
    libro.add("javaScirpt")
    libro.add("Cien años de soledad")
    console.log(libro)
// 6. Elimina uno concreto a tu elección
    libro.delete("Cien años de soledad")
    console.log(libro)
// 7. Crea un mapa que asocie el número del mes a su nombre
    let datos_Mes = new Map([
            [1	, "Enero"],
            [2	,"Febrero"],
            [3  ,"Marzo"],
            [4	,"Abril"],
            [5	,"Mayo"],
            [6	,"Junio"],
            [7	,"Julio"],
            [8	,"Agosto"],
            [9	,"Septiembre"],
            [10	,"Octubre"],
            [11	,"Noviembre"],
            [12	,"Diciembre"],
    ])
    console.log(datos_Mes)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
   console.log(datos_Mes.has(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
    datos_Mes.set("Verano", ["Junio", "Julio", "Agosto"]);
    console.log(datos_Mes)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let  objects = ["mause","libro","carton","keyboard","computer"] 
let  segundo = new Set([])
segundo = new Set (objects)
console.log(segundo)

let tesoro = new Map()

tesoro.set("arros",segundo)
console.log("miSetDeObjetos", segundo)