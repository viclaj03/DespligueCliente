'use strict'


function letras(cadena) {

	return cadena.length
}

function palabras(cadena) {
	
	return cadena.split(" ").length
	
}

function maysc(cadena) {
	return cadena.toUpperCase()
}

function titulo(cadena) {
	let palabras = cadena.split(" ")
	palabras = palabras.map(palabra => palabra.charAt(0).toUpperCase() +  palabra.substr(1) )
	return palabras.join(" ");	
}

function letrasReves(cadena) {
	let palabras = cadena.split("")
	palabras.reverse();
	return palabras.join("");


}

function palabrasReves(cadena) {
	let palabras = cadena.split(" ")
	palabras.reverse();
	return palabras.join(" ");
}

function palindromo(cadena) {
	let palabras = cadena.split(" ").join("").toLowerCase();
	let palabraReverse = palabras.split("").reverse().join("").toLowerCase();
	return palabras === palabraReverse;

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

