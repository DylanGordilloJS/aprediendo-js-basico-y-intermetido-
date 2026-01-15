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

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread
    const uno   = [4,2]
    const dos = [3,2]
    const Spread = [...uno,...dos]
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



