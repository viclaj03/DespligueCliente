'use strict'

let peticion = prompt('Introduzca el nombre del módulo o el NIA del alumno')

if(isNaN(peticion)){
	if(existeElModulo(datosAlumnos,peticion)){
		console.log("Los alumnos aprobados en elmodulo " + peticion + " son")
		console.log(alumnosAprobadosDelModulo(datosAlumnos,peticion))
		let notasModulo = datosAlumnos.map(item => item.notas.find(item2 => item2.modulo === peticion)).map(item3 => item3.nota)
		console.log("la nota media del módulo es: " + media(notasModulo))
	}else{
		alert("No existe ese Modulo")
	}
} else{
	let nia = parseInt(peticion)
	let alumno = buscaAlumno(datosAlumnos,nia);
	if (typeof alumno === 'undefined'){
		alert("El alumno no existe")
	}else{
		console.log("Los módulos aprobados por el alumno con nia " + nia + " son:")
		console.log(modulosAprobadosDelAlumno(alumno.notas))
		let notasAlumno = alumno.notas.map(asigNota => asigNota.nota)
		console.log("la nota media del alumno son: " + media(notasAlumno) )
	}

}

console.log("La lista alfabetica de alumnos es")
console.log(ordenaAlumnosPorApellido(datosAlumnos))
console.log("Alumnos ordenados por nia" )
console.log(ordenaAlumnosPorNia(datosAlumnos))
console.log("alumnos con algun modulo suspendo:")
console.log(alumnosConSuspensos(datosAlumnos))
console.log("alumnos con todos los módulos aprobados:")
console.log(alumnosConTodoAprobado(datosAlumnos))
