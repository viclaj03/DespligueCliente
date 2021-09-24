'use strict'


function buscaAlumno(array,alumno) {
	return array.find((item) => item.nia === alumno)
}

function modulosAprobadosDelAlumno(notas) {
	let modulosAprobados = notas.filter(item => item.nota >= 5)
	return modulosAprobados.map(nombre => nombre.modulo)
}

function media(notas) {
	let notaMedia  = notas.reduce((total,nota)=> total += nota)
	notaMedia = notaMedia/notas.length
	return notaMedia.toFixed(2)
}

function ordenaAlumnosPorNia(array) {
	let alumnosOrdenados = array.sort((alumno1, alumno2) => alumno1.nia - alumno2.nia )
	return alumnosOrdenados.map(item2 => item2.alumno.nombre + " " + item2.alumno.apellido);
}

function ordenaAlumnosPorApellido(array) {
	let alumnosOrdenados = array.sort((alumno1, alumno2) => alumno1.alumno.apellido.localeCompare(alumno2.alumno.apellido) )
	return alumnosOrdenados.map(item2 => item2.alumno.nombre + " " + item2.alumno.apellido);
}

function alumnosConSuspensos(array) {
	let alumnosSuspendido = array.filter(item => item.notas.some(item2 => item2.nota <5))
	return alumnosSuspendido.map(nombre => (nombre.alumno.nombre + " " + nombre.alumno.apellido )) 
}

function alumnosConTodoAprobado(array) {
	 let alumnosAprobados = array.filter(item => item.notas.every(item2 => item2.nota >=5))
	 return alumnosAprobados.map(nombre => (nombre.alumno.nombre + " " + nombre.alumno.apellido )) 
}

function alumnosAprobadosDelModulo(array,modulo) {
	let aprobadosModulo = array.filter(item => item.notas.some(item2 => (item2.nota >= 5 && item2.modulo === modulo)))
	return aprobadosModulo.map(nombre => (nombre.alumno.nombre + " " + nombre.alumno.apellido ))
}

/*Averigua que el modulo buscado existe*/
function existeElModulo(array,modulo){
	return array.some(item => item.notas.some(notas => notas.modulo === modulo))

}

module.exports = {
	buscaAlumno,
	modulosAprobadosDelAlumno,
	media,
	ordenaAlumnosPorNia,
	ordenaAlumnosPorApellido,
    alumnosConSuspensos,
    alumnosConTodoAprobado,
	alumnosAprobadosDelModulo,
	existeElModulo
}