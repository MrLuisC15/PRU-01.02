/*
  Ejercicio 2
  Programa la función comprobarEdad para comprobar si la fecha introducida en el campo de fecha
  corresponde a alguien mayor de 18 años o no.
  La función mostrará un mensaje por consola indicando si es mayor de edad o no.
*/

'use strict'


function comprobarEdad(fecha) {
  // Variables
  let anio= new Date(fecha)   //paso a tipo fecha
  let actual = new Date(Date.now()) //fecha actual
  let total =0  //total de años

  if(actual.getFullYear()>=anio.getFullYear()) { //Año menor al actual?
    total=actual.getFullYear()-anio.getFullYear()
    if(total>=18) {
      console.log('Es mayor de edad');
    }
    else {
      console.log('No es mayor de edad');
    }
  }
  else {
    console.log('Debes haber existido');
  }
}