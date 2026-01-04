/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/


// 1. Captura una excepción utilizando try-catch
let numeros
try {
    //codigo ue intenta ejecutar
    // aca mira si tipo de dato es diferete si salta true o false
    console.log(numeros.email)
    console.log("finaliza sin errores")
} catch (error){
    // si llegua a tener error
    console.log("se producido un error" ,error.message)
}
// 2. Captura una excepción utilizando try-catch y finally
let casa

try {
    console.log(casa.floot)
} catch (error) {
    console.log("el sisteme tiene un error: ", error.message)
}finally {
    console.log("este codigo tiene un error")
}
// 3. Lanza una excepción genérica

//verificar si es decimal
function  verificar_decimal (num1){   
    if(num1 !== Math.trunc(num1)) {  // <= (4)
        throw new Error(`Error: Se esperaba un número entero, pero se recibió un decimal: ${num1}`)
    }
    return num1
}

try { 
    console.log(verificar_decimal(4.6)) 
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}
// 4. Crea una excepción personalizada
class verificar_entero2 extends Error {
     
    constructor(message ,cas , des) {
         super(message)
         this.cas = cas
         this.des = des 
    }
    losdatos(){
        console.log(this.cas, this.des)
    }
}

try {
    console.log(verificar_entero2(1,2))
}catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.losdatos
}
// 5. Lanza una excepción personalizada
function verificar(num1, num2) {
    if (num1 !== num2) {
        throw new datos("Los números no son iguales", num1, num2)
    }
    return "Los números son iguales";
}

class  datos  extends Error {
     
    constructor  (message , cuenta, casa) {
           super(message)
           this.cuenta = cuenta
           this.casa = casa
    }
    datos_clase() {
        console.log(`estos son los datos de casa : ${this.casa} y tambien los datos de mi cuenta ${this.cuenta}`)
    }
}

try { 
    console.log(verificar(2, 12))
} catch (error) {       
    console.log("Se ha producido un error personalizado:", error.message)
    error.datos_clase()
}   

// 6. Lanza varias excepciones según una lógica definida
let myarray = [2,3,5,8,12]
let numero_Buscado = 0
function buscar(larray) {
    for (let i = 0; i < larray.length; i++) {
         if (larray[i] ===  12) {
            throw new numero_buscado(`¡Éxito! Número encontrado.`, larray[i])
         }
    }
    return null
}
class numero_buscado extends Error {
   
    constructor (message , num1 ) {
               super(message)
               this.num1 = num1
    }
}

try {
    let resultado = buscar(myarray)
    console.log(resultado)
} catch (error) {
    console.log(`Se ha producido un error (${error.name}): ${error.message}`)
    console.log(`Valor encontrado: ${error.num1}`)
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    console.log(verificar(2, 12))
} catch (error)  {
   if( error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
   }else if (error instanceof Error) {
        console.log("Se ha producido un error de tipo:", error.message)
   }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let lista_Numeros = [12 ,23,52,5]
let caja =  0
let floats = []
  function trasformar_float(numero) {
        for (let i = 0; i < numero.length ; i++) {        
             caja = numero[i]
             caja = caja % 2.34
             floats.push(caja)
             if (floats < 1) {
                 throw new Error(`estos valor son floasst ${floats}`)
             }
        }
        return floats
    }


try {
    let dylan = trasformar_float(lista_Numeros)
    console.log(dylan)
} catch (error) {
  console.log("Se ha producido un error:", error.message)
}
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class HotelPropertyError extends Error {
    constructor (propiedad) {
        super(`La propiedad de hotel "${propiedad}" no se encontró.`);
        
        this.name = 'HotelPropertyError'; 
        this.propiedadFaltante = propiedad;
    }
}
function Propiedad_Esistente(objeto, propiedad) {
    if(Object.prototype.hasOwnProperty.call(objeto, propiedad) ) {
            return true
        }else {
            throw new HotelPropertyError(propiedad);
        }
}
const miObjeto = { cas: 1 , des: 2 };
const propiedadExistente = "cas";
const propiedadInexistente = "tv"

try {
    Propiedad_Esistente(miObjeto, propiedadExistente);
  console.log(`✅ ¡La propiedad '${propiedadExistente}' existe!`);
} catch (error) {
  // Este bloque no se ejecutará
  console.error(`❌ Error inesperado: ${error.message}`);
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function ejecutarConReintentos(operacion, maximo = 10) {
  // Inicializamos una variable para guardar el último error
  let ultimoError; 

  // 1. Usamos el límite 'maximo' en el bucle
  for (let intento = 1; intento <= maximo; intento++) {
    try {
      // 2. Ejecutamos la función o acción que puede fallar
      const resultado = operacion(); 
      
      // 3. Si llega a esta línea, la operación fue EXITOSA.
      // Retornamos el resultado y terminamos la función (salimos del bucle).
      console.log(`✅ ¡Operación exitosa en el intento #${intento}!`);
      return resultado; 
      
    } catch (error) {
      // 4. Si hay un error, lo registramos y lo guardamos
      ultimoError = error;
      console.warn(`❌ Error en el intento #${intento}: ${error.message}.`);
      
      // Opcional: Agregar un pequeño retardo antes del siguiente intento
      // await new Promise(resolve => setTimeout(resolve, 500)); 
    }
  }

  // 5. Si el bucle termina sin éxito, lanzamos el último error capturado.
  console.error(`\n🛑 Falla definitiva: Se alcanzó el máximo de ${maximo} reintentos.`);
  throw ultimoError;
}

// --------------------------------------------------------
// 🧪 Ejemplo de Uso
// --------------------------------------------------------

// Función de ejemplo que falla 3 veces y tiene éxito en la 4ta.
let contadorDeFallos = 0;
const operacionQuePuedeFallar = () => {
    contadorDeFallos++;
    console.log(`  > Ejecutando operación... (intento de fallo #${contadorDeFallos})`);
    
    if (contadorDeFallos < 4) {
        // Lanzamos un error para forzar el reintento
        throw new Error("Fallo temporal de conexión."); 
    }
    
    // Si llegamos aquí, la operación fue exitosa
    return "Datos recibidos correctamente."; 
};

// Intento 1: Exitoso antes del límite
try {
    const resultado = ejecutarConReintentos(operacionQuePuedeFallar, 5); 
    console.log(`\nResultado Final: **${resultado}**`);
} catch (error) {
    console.error(`Error no manejado: ${error.message}`);
}
