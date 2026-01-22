// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const biblioteca = new Map([
  ["978-1", { titulo: "JS Moderno", autor: "Juan", materia: "Programación", precio: 25 }],
  ["978-2", { titulo: "Cocina Fácil", autor: "Ana", materia: "Cocina", precio: 15 }],
  ["978-3", { titulo: "React Avanzado", autor: "Luis", materia: "Programación", precio: 30 }],
  ["978-4", { titulo: "Node.js Guía", autor: "Marta", materia: "Programación", precio: 18 }]
]);
const librosArray = Array.from(biblioteca.values()).filter(elemnto => elemnto.materia === "Programación" || elemnto.precio > 20).map(libro => libro.precio).reduce((acc,precio) =>  acc + precio , 0) 
console.log(librosArray)
// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
   const arrayNumeros = [2,4,1,5,1].map(numero => numero ** 3).filter(num => num % 2 === 0)
   console.log(arrayNumeros)
// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
   let  ejecicioflat = [2,[1,[3,[4]]]]
   console.log(ejecicioflat)
   let   arraysin1 = ejecicioflat.flat(1)
   console.log(arraysin1)
   arraysin1 = ejecicioflat.flat(2)
   console.log(arraysin1)
   arraysin1 = ejecicioflat.flat(3)
   console.log(arraysin1)
// 4. Ordena un array de números de mayor a menor
  const numero = [2,41,2,50,14,1].sort((a,b) => b - a)
 console.log(numero)
// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
 const sentA = new Set ([1,2,3,4])
 const setB = new Set ([2,3,5,6])
 const union = new Set([...sentA,...setB])

//intercecion 
const  intercecion = new Set([...sentA].filter(elemto =>  setB.has(elemto)))
console.log(intercecion)
//diferencia 
const diferente = new Set([...sentA].filter(elemnto => !setB.has(elemnto)))
console.log(diferente)
 // 6. Itera los resultados del ejercicio anterior
   const intercecionResutlado =  intercecion.forEach(elemnto => console.log(elemnto))
   const diferenciaResultaod = diferente.forEach(elemnto => console.log(elemnto))

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
const usuario = new Map([
  [1, { nombre: "Ana", edad: 25, email: "ana@example.com" }],
  [2, { nombre: "Luis", edad: 17, email: "luis@example.com" }],
  [3, { nombre: "Marta", edad: 30, email: "marta@example.com" }]
]);
 usuario.forEach((value,key) => console.log(`${key} : ${value}`))
// 8. Dado el mapa anterior, crea un array con los nombres
 const arrayNombres = [usuario.get("nombre")]
 console.log(arrayNombres)
// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
 const valores = Array.from(usuario.values())
 const  emailsArray = valores.filter(datos => datos.edad >= 18).map(elemnto => elemnto.email)
 const emailSet = new Set(emailsArray)
 console.log(emailSet)
// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
  const traformacionObjeto = Object.fromEntries(usuario)
const usuariosPorEmailMap = new Map(
  Object.values(traformacionObjeto).map(usuario => [usuario.email, usuario])
);  

console.log(usuariosPorEmailMap)