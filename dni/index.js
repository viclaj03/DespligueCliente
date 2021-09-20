'use strict'

 
let dni = prompt('introduce el DNI')

if(!dni){
    alert('Debes introducir un DNI')
}


if(esValido(dni)){
    alert(`El dni ${dni} es correctop`)
}else{
    alert(`El dni ${dni} no es correctop`)
}

function esValido(dni){
    if (!dni.match(/^[0-9]{8}[a-zA-Z]$/)) {
        
    }

    let dniNum = Number(dni.substr(0,8))
    let dniLetter = dni.substr(8,1)
    let resto = dniNum % DIVISOR

    return (lETRAS.charAt(resto) === dniLetter) 
}