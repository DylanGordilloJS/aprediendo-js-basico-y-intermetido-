/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función


    const suma = function (a ,b) {
            console.log( a + b)
    }
    // esta funcion nos retorna  la funciont  padre
    //ya que la funcion  imprime la  suma pardre  toca ponerla 
    // en una costante para que se logro imprimir
    function imprimir () {
        return suma
    }

    const retunr_suma = imprimir()
    // esto hara que se la suma diferetes   ya que  utilize metodos
    retunr_suma(Math.floor(Math.random()*10), Math.floor(Math.random()*10))
 

// 2. Implementa una función currificada que multiplique 3 números
       function multiplque (a , b ,c) {
           return  a * b * c
       }
        function currificada (a) {
            return function (b) {
                return function (c) {
                    return multiplque(a,b,c)
                }
            }
                
        }

    const resultado_currifcada = currificada(2)
    console.log(resultado_currifcada(2)(12))
// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
    function calular_potencia (numero, exponente) {
            if(exponente === 0){
                return 1
            }
           return numero * calular_potencia(numero,exponente-1) 
    }
   console.log(calular_potencia(4, 3)) 
// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closures para mantener el estado
  function createCounter(valor) {
     let valorinicial = valor

     function increment() {
        return   ++valorinicial
     }
 
     function  decrement() {
        return   --valorinicial
     }

     function getValue() {
        return valorinicial = valor
     }
     return {increment,decrement,getValue}
  }

  const cunter = createCounter(5)
  console.log(cunter.increment())
  console.log(cunter.decrement())
  console.log(cunter.getValue())
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
    function sumManyTimes(multiplier, ...numbers) {
        let resultado = 0
        for (const numeros of numbers) {
            resultado += numeros
        }
       return resultado *= multiplier
    }
    console.log(sumManyTimes(4,4,6,8,1,2))
// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
    function utilizacion_callback(datos,callback) {
        const resultado =  suma2(...datos)
        callback(resultado)
    }
    function print (resultado) {
        console.log(`este es el resultado ${resultado}`)
    }
    function  suma2 (...datos) {
        let total = 0
         for (const nuemros of datos) {
            total += nuemros
         }
         return total
    }

    utilizacion_callback([1,2,3,5] ,print)
// 7. Desarrolla una función parcial

     function parcial (a){
            return function (b ,c){
                return a + b + c
            }
     }

     const accoot = parcial(4)
     console.log(accoot(2,5))
     console.log(accoot(3,1))
// 8. Implementa un ejemplo que haga uso de Spread
    const uno   = [4,2]
    const dos = [3,2]
    const Spread = [...uno ,...dos]
    console.log(Spread)
// 9. Implementa un retorno implícito
    const implícito = (a ,s, b) => (a / s)*b  
    console.log(Math.floor(implícito(5,8,3)))
// 10. Haz uso del this léxico
    const lexico = {
        name: "carlos",

        saludo: function () {
            console.log(`hola ${this.name}`)
        }
    }

lexico.saludo()


//curring  utilizacion de multplicacion

 function curring (a) {
  return function (b) {
    return function (c) {
        return function (d) {
            return a * b  * c * d
        }
    }
  }
 }

const resultado_final = curring(3)(2)
console.log(resultado_final(2)(2))



