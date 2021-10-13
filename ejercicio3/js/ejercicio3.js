/*
  Ejercicio 3
  Crea las clases del diagrama de clases anexo.
  Los constructores de cada clase deben inicializar los atributos del objeto.
*/

'use strict'

// Declara aquí las clases

// Clase Vehiculo
class Vehiculo{
  constructor(fechaFabricacion){
    this.fechaFabricacion=fechaFabricacion
  }
  venderA(comprador) {
    this.propietario=comprador
  }
}

// Clase Coche
class Coche extends Vehiculo {
  constructor(fechaFabricacion,matricula, combustible, esNuevo) {
    super(fechaFabricacion)
    this.matricula=matricula
    this.combustible=combustible
    this.esNuevo=esNuevo
  }
  vender(comprador) {
    this.esNuevo=false // Si se vende ya no es nuevo
    super.venderA(comprador) //Llama a venderA y modifica el propietario
  }
}

// Clase Bicicleta
class Bicicleta extends Vehiculo {
  constructor(fechaFabricacion,color) {
    super(fechaFabricacion)
    this.color=color
  }
}


//Programa de Prueba
const coche = new Coche(new Date(1995, 11, 17), 'BA-1234-YZ', 'Diesel', true)
if (coche.fechaFabricacion.valueOf() !== (new Date(1995, 11, 17)).valueOf())
  console.error('Fallo 1: ' + coche.fechaFabricacion)
if (coche.matricula !== 'BA-1234-YZ')
  console.error('Fallo 2: ' + coche.matricula)
if (coche.combustible !== 'Diesel')
  console.error('Fallo 3: ' + coche.combustible)
if (!coche.esNuevo)
  console.error('Fallo 4: ' + coche.esNuevo)
if (coche.propietario)
  console.error('Fallo 5: ' + coche.propietario)

coche.vender('Pepe')
if (coche.propietario !== 'Pepe')
  console.error('Fallo 6: ' + coche.propietario)
if (coche.esNuevo)
  console.error('Fallo 7: ' + coche.esNuevo)

const bici = new Bicicleta(new Date(2000, 11, 17), 'rojo')
if (bici.fechaFabricacion.valueOf() !== (new Date(2000, 11, 17)).valueOf())
  console.error('Fallo 8: ' + bici.fechaFabricacion)
if (bici.propietario)
  console.error('Fallo 9: ' + bici.propietario)
if (bici.color !== 'rojo')
  console.error('Fallo 10: ' + bici.color)
