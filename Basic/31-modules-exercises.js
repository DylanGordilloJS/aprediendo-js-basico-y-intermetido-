/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
     export function conteo(A,V) {
         return A * V
     }
// 2. Exporta una constante
export const ID =  1235632
// 3. Exporta una clase
export class  Metodologia{
    constructor(Pomodoro){
        this.Pomodoro = Pomodoro
    }   
    Pomodoro_acciont() {
        return `se estudia durante 25 minutos y 5 minutos de descanso `
    }
}
// 4. Importa una función
import {add,PI,Circle} from "./28-export-modules.js";
console.log(add(23,6))
// 5. Importa una constante
console.log(PI)
// 6. Importa una clase
let circulo = new Circle(10)
console.log(circulo)
// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)\

// este de caso solo de puedo una por que la defual solo deja una 
export default function suma (num1,num2) {
    return num1 + num2
}
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// export default const Numero_bynaro =  11011   <= en este caso esto nose puedo por que solo se
//puede utilizar una vez
// este de caso solo de puedo una por que la defual solo deja una 


// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import {diablica,EMAIL,computer} from "./.vscode/Export.js";

console.log(diablica(23,12))

console.log(EMAIL)

//Istancia de  objeto de clase

let Valores_Clase = new computer(1 ,2 ,2)
console.log(Valores_Clase)
console.log(Valores_Clase.Trabajo_Estudio())
console.log(Valores_Clase.VideoJUEGOS_Divercion())

