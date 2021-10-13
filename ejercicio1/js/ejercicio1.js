/*
  Ejercicio 1
  Crea una función que reciba un lista de números reales y devuelva su suma.
  Si no es posible realizar la operación la función lanzará una excepción.
*/

'use strict'

//Declara aquí la función

function sumar(lista) {
  let total = 0;
  for(let i=0;i<lista.length;i++) {
    total=total+lista[i]
    if(Number.isNaN(parseFloat(lista[i]))) { // Pregunta por valor NaN
      return error
    }
    console.log(parseFloat(lista[i])); //Comprobación
  }
  return total
}

// Programa de prueba
const ERROR = Symbol()
const lista1 = [1, 2, 3, 4, 5]
probar(lista1, 15)
const lista2 = [-1, -2, -3, -4, -5]
probar(lista2, -15)
const lista3 = [3.15, -3.15]
probar(lista3, 0)
const lista4 = [3.15, 'a']
probar(lista4, ERROR)

function probar(lista, resultado) {
  document.write('<br />Lista: ' + lista)
  let suma = null
  let ok = false
  try {
    suma = sumar(lista)
    document.write(' suma = ' + suma)
    if (suma == resultado)
      ok = true
  } catch (e) {
    if (resultado == ERROR)
      ok = true;
  }
  if (ok)
    document.write(' <span class=ok>CORRECTO</span>')
  else
    document.write(' <span class=ko>ERROR</span>')
}
