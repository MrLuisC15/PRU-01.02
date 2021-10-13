/*
  Ejercicio R1
  Haz una función que reciba un número de NIF (para personas físicas nacionales, no empresas ni extranjeros) y compruebe si la letra es correcta.
  Busca el algoritmo de comprobación en internet.
*/

'use strict'

//Declara aquí la función

//Programa de Comprobación
probar('44546750M', true)
probar('16180225W', false)
probar('52348825c', true)
probar('Q', false)
probar('', false)
probar(null, false)

function probar(nif, resultado) {
  document.write('<br />NIF: ' + nif)
  let ok = false
  try {
    if (comprobar(nif) == resultado)
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
