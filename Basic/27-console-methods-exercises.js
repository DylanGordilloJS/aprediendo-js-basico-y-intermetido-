/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
        function metdo(a) {
            if (a === "basedatos") {
                console.error(`error de  base de datos tiene el mismo valor que parametro`)
            }
        }
    metdo("basedatos")
// 2. Crea una función que utilice warn correctamente
   function advertercia(advertercia) {
    let incotro_dato_privado = 2.3
           if(incotro_dato_privado === 2.3) {
              console.warn(`${advertercia}`)
           }
   } 

advertercia("no se puede ingresar aca")
// 3. Crea una función que utilice info correctamente
  function informacion(datosPV) {
        console.info(`${datosPV}`)
  }
  informacion("dylan : 1025142842")
// 4. Utiliza table
   let  house = [
     ["name", "dylan" ,18]
     ["name" , "kevin" ,16]
    ]
    console.table(house)

    house = [
        {name: "dylan" , ege: 18 },
        {name: "kevin", ege: 18}
    ]
       
  
    console.table(house)
// 5. Utiliza group
   console.group("datos:")
   console.log("Nombre :  dylan")
   console.log("Edad : 18")
   console.log("Tarjeta de Cuidadania: 1025142842")
   console.groupEnd("datos:")

// 6. Utiliza time
 console.time("tiempo de ejecucion")
 for (let index = 1; index < 10; index++) {
 }
 console.timeEnd("tiempo de ejecucion")
// 7. Valida con assert si un número es positivo
    let numero = -5
    console.assert(numero >= 0 , "este numero es negativo")
// 8. Utiliza count
  console.count("solo")
  console.count("solo")
  console.count("solo")
  console.count("solo")
  console.countReset("solo")
  console.count("solo")
  console.count("solo")

// 9. Utiliza trace
 function  fbE() { 
    fbR()
 }
 function fbR() {
            console.trace("seguimiento de ejecutacion")
 }
 fbE()

// 10. Utiliza clear
// console.clear()