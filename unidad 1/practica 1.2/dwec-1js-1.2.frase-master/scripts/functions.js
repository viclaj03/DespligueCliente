'use strict'
let frase = prompt("Di una frase");
console.log(frase)
console.log(letras(frase));

function letras(cadena) {
	return cadena.length
}

function palabras(cadena) {
	return cadena.toUpperCase
	
}

function maysc(cadena) {

}

function titulo(cadena) {

}

function letrasReves(cadena) {

}

function palabrasReves(cadena) {

}

function palindromo(cadena) {

}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}