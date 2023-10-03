/**DOM: Document Object Model */

//console.log('hola mundo');

/** El principal punto de entrada al DOM es documnent, el DOM comienza con el objeto document*/

/**ETIQUETA ROOT*/
const htmlRoot = document.documentElement
//console.log(htmlRoot);

/**ETIQUETA HEAD*/
//console.log(document.head);

/**ETIQUETA BODY */
//console.log(document.body);

//console.log(document.documentElement.firstElementChild);
// console.log(document.documentElement.lastElementChild);

//console.log(document.body.firstElementChild);
//console.log(document.body.lastElementChild);


//DESCENDIENTES (.children) ⚠️ HTMLCollection

const hijos = document.body.children // HTMLCollection
//console.log(hijos);

for (const hijo of hijos) {
  // console.log(hijo);
}

//Transformar a un array el HTMLColletion
const hijosArray = Array.from(hijos)
// console.log(hijosArray);
// console.log(hijosArray[2]);

/**BUSQUEDAS DE ELEMENTOS */

//getElementById -> para buscar por id
const rootElement = document.getElementById('root')
// console.log(rootElement);

//Metodos que retornan HTMLCollection

//getElementsByClassName -> para buscar por clase
//console.log(document.getElementsByClassName('subtitulo'));
//console.log(document.getElementsByClassName('subtitulo')[0]);

//getElementsByTagName -> busqueda por etiquetas html
//console.log(document.getElementsByTagName('a'));

//console.log(document.querySelector('.subtitulo'));

// console.log(document.querySelector('#root'));

// console.log(document.querySelector("h1"));

// console.log(document.querySelector("nav"));

//querySelectorAll -> me devuelve NodeList
//console.log(document.querySelectorAll('#contenedor'));

//Agregar elementos htmls

const contenedor = document.getElementById('contenedor')
console.log(contenedor);

const frutas = ['manzanas', 'uvas', 'fresa', 'papaya', 'bananas']

for (const fruta of frutas) {
  contenedor.innerHTML += `<li class='li_agegado'>${fruta}</li>`
}


/**
 * ATRIBUTOS Y PROPIEDADES
 * element.hasAttribute(atributo) -> true/false
 * element.getAttribute(atributo) -> obtengo el valor
 * element.setAttribute(atributo, valor)
 */

console.log(document.querySelector('.link').hasAttribute('target'));
console.log(document.querySelector('.link').hasAttribute('pepito'));

console.log(document.querySelector('.link').getAttribute('target'));

document.querySelector('#root').setAttribute('class', 'h2__element');

console.log(document.querySelector('#root'));

document.querySelector('.link').removeAttribute('target')
console.log(document.querySelector('.link'));

