/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
 let house = {
     mause : 1 ,
     keyboard: 1 ,
     computer: 1 ,
 }
// 2. Accede y muestra su valor
console.log(house)
// 3. Agrega una nueva propiedad
house.screen = 2
console.log(house)
// 4. Elimina una de las 3 primeras propiedades
delete house.mause
console.log(house)
// 5. Agrega una función e invócala
 let house2 = {
     mause : 1 ,
     keyboard: 1 ,
     computer: 1 ,
     saludo : function () {
         console.log(`tengo una ${this.computer} computador`)
     }
 }
house2.saludo()
// 6. Itera las propiedades del objeto
for (let clave in house2) {
    console.log(clave + ": " + house2[clave])
}
// 7. Crea un objeto anidado
 let house_more = {
     mause : 1 ,
     keyboard: 1 ,
     computer: 1 ,
     saludo : function () {
         console.log(`tengo una ${this.computer} computador`)
     },
     things_more: {
            
     }
}
// 8. Accede y muestra el valor de las propiedades anidadas
house_more.saludo()
// 9. Comprueba si los dos objetos creados son iguales
console.log(house_more == house)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(house.computer === house_more.computer)