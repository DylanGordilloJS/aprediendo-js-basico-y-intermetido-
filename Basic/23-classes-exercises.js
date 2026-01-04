/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
  class Propedias {
     constructor(gato, muase) {
            this.gato = gato
            this.muase = muase
     }
  }

let propediades1 = new Propedias(1 ,2)
console.log(propediades1)
// 2. Añade un método a la clase que utilice las propiedades
  class Propedias1 {
     constructor(gato, muase) {
            this.gato = gato
            this.muase = muase
        }
        utilizar_propediades() {
              return `numero de gatos : ${this.gato}  y tambien ese el numero de mause :   ${this.muase}`
        }
    }
    //instancia  propocion de valor 
let ases = new Propedias1(23, 12)
let pro = ases.utilizar_propediades();
console.log(pro)
// 3. Muestra los valores de las propiedades e invoca a la función
class world  {
    constructor (people,cat,dog) {
        this.people = people
        this.cat = cat
        this.dog = dog
    }   
    invocar() {
        console.log(`have all it`)
    }
}
//iStancia 
// se crea un objecto llamado More_world  que toma como referencia la clase world 
let More_world = new world(50 , 2 ,6)
//paremetos de contructor   con su valor 
console.log(More_world)
More_world.invocar()
// 4. Añade un método estático a la primera clase
class Casa12 {
    static esNumeroValido(num) {
         return num > 0
    }
}

console.log(Casa12.esNumeroValido(2))
// 5. Haz uso del método estático
class  precios {
    //retorn true  si el portaril vale mas de 5 
     static More_Precios(portatil) {
        return portatil >= 5
     }
}

console.log(precios.More_Precios(2))
// 6. Crea una clase que haga uso de herencia
class Animal {

    constructor(Nombre) {
        this.Nombre = Nombre
    }
    sonido() {
         console.log('Emite un sonido')
    }
}
// herencia con la plantilla de animal
class Cat extends Animal {
    constructor(Nombre, tamano) {
        // llama a su super clase  
        super(Nombre)
        this.tamano = tamano
    }
    corre() {
        console.log('el gato corre')
    }
}
//istancia para  poner el argumeto o le valor a las propiedades
let gato = new  Cat('lucas', '20cm')
gato.corre()
gato.sonido()
// 7. Crea una clase que haga uso de getters y setters
class datos_Banco {
        // convertilos en privdados 
        #name
        #identificacion
        #datos_Personales
    constructor(name,identificacion,datos_Personales) {
        //guardado  com privadas 
         this.#name = name
         this.#identificacion = name
         this.#datos_Personales = datos_Personales
    }
    // solo quiero leer los datos de este usuario
    get name() {
        return this.#name
    }
    // para  solo que actulizar valor  (no se pueden ver)
    //aca se hace que los datos de esta persona de puedam actulizar
    set  identificacion(update) {
        this.#identificacion = update
    }
}

// istancias para los datos 
let usuario = new datos_Banco("dylan",1025142842 ,"dirrecion")
datos_Banco.identificacion = 102313122
console.log(datos_Banco.identificacion)
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class  datos_estadisticos  {
    // propiedades  privadas
    #personas
    #bancos
    constructor (personas ,gatos , computadores, bancos) {
        this.#personas = personas
        this.#bancos = bancos
        this.gatos = gatos
        this.computadore = computadores
    }
    // este devuelve el valor de que ponemos
    get  bancos() {
        return this.#bancos
    }

    // solo se puede actulizar no se puede ver el valor
    set personas(update) {
        this.#personas = update
    }
}

// instancia 
let numeros_Eestidisca = new datos_estadisticos(200 , 12 , 29 , 100)
datos_estadisticos.personas = 200
console.log(`estos son la estadisticas de las personas que hay :${datos_estadisticos.personas}`)
console.log(`estos son los  estidistica de los bancos que hay : ${numeros_Eestidisca.bancos}`)
// 9. Utiliza los get y set y muestra sus valores

//esta clase mira los precio de la computadora y  el precio original  que lo compro el vendedor
class computadores  {
    // poner privado
     #precios_Original
     #precio_Establecido
    constructor(precios_Original, precio_Establecido) {
        this.#precio_Establecido = precio_Establecido
        this.#precios_Original = precios_Original
    }

    // mira el prico que lo pucieron
    get precios_Original() {
        return this.#precios_Original
    }
  // precios origina establecido 
  get  precio_Establecido() {
     return this.#precio_Establecido
  }
  // modificaion de precio orginal
    set precio_Establecido(update) {
        this.#precio_Establecido = update
    }
}

// interacion de valores
let precios_Computadores = new computadores( "5millones" , "9millones")
precios_Computadores.precio_Establecido ="11millones"
console.log(`este el precio orignal ${precios_Computadores.precios_Original}`)
console.log(`este el precio que se actulizo ${precios_Computadores.precio_Establecido}`)
// 10. Sobrescribe un método de una clase que utilice herencia 
class PAPA {
    constructor(barba , altura) {
            this.barba = barba
            this.altura = altura
    }
  el_cabezaFamilia() {
        console.log(`manter todos sus hijis`)
  }
}

class Hijo extends PAPA {
    constructor(barba , altura ,inteligencia) {
            super(barba ,altura)
            this.inteligencia = inteligencia
    }
  estudiar() {
    console.log(`Ir todos los dias al colegio`)
  }
}

let herencias = new Hijo("si", 1.60, 120)
herencias.el_cabezaFamilia()