//Texto con comolla simple
console.log('Texto a imprimir.')
//Texto con comilla doble
console.log("Texto con comilla doble")
//Texto con comilla simple inclinada
console.log(`Texto con comilla simple inclinada`)

//variables: let var
let nombre = "Diana"; //String o cadena de caracteres 
let numero = 1234; // number o numérico 

console.log(nombre);
console.log(numero);

// Variables: const (No se puede modificar)

const pi = 3.1416;
const cedula = '12345';

console.log(pi);
console.log(cedula);


// Accesder al DOM (Document Object Model) 
//document.writeln("Texto midificado");
let contenido;
contenido = document.getElementById('hola').textContent;
console.log(contenido)

//Modificando el contenido de un eqtiqueta por su ID
contenido = document.getElementById('hola').textContent = 'Texto de Binevenido Modificado';

//Modificando el contenido de un eqtiqueta por si ID con innerHTML puede modificar el texto utilizando etiquetas de html
contenido = document.getElementById('hola').innerHTML = 'Texto de <b>Binevenido</b> Modificado';


//Modificar la variable contenido
contenido = 'contenido modificado';
contenido = document.getElementById('hola').textContent = contenido;

contenido = 1234;
contenido = document.getElementById('hola').textContent = contenido;

// tipo de datos string:
let name1 = 'Carlos';
let lastname = 'Rodriguez'

console.log(name1,lastname)
console.log(name1.concat(' '+lastname))
console.log(name1+' '+lastname)
console.log(`Mi combre es ${name1} y mi apellido es ${lastname}`)

// Tipo de dato number

let num1 = 10;
let num2 = 20;

// Sumas con operador + variables numericas
console.log(num1 + num2)
// Sumas con operador + variables string
console.log(num1 + name1)


// Tipos de datos Boolean:
let verdad = true;
let mentira = false;

// operaciones + entre variables booleanas 
console.log(verdad + mentira);

// operaciones + entre variables booleanas y una numérica
console.log(verdad + num1);

// operaciones + entre variables booleanas y un string
console.log(verdad + name1);

//TIPOS DE DATO NULL:

let datonulo = null;
console.log(datonulo);

//Tipo de dsto OBject

let persona = {nombre: 'Carlos', celular: '123456789'};
console.log(persona.nombre);

// CAMBIAR CONTENIDO POR CLASE
document.getElementsByClassName('parrafo')[1].innerHTML = 'Texto cambiado';
document.getElementsByClassName('parrafo')[1].innerHTML = 'Texto cambiado';
document.getElementsByClassName('parrafo')[1].innerHTML = 'Texto cambiado';