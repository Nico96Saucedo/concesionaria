const autos = require ("./autos")
let concesionaria = {
   autos: autos,
 // en este caso buscamos un auto por patente
 //para ello en autoBuscado filtramos la patente de la lista de autos comparandola con la patente ingresada.
 // luego hicimos un if diciendo que si la patente se encontro nos devuelva el auto con sus caracteristicas.

 
   buscarAuto: function(patente){
   let autoBuscado = this.autos.filter(elemento => elemento.patente == patente)
   if (autoBuscado[0] != undefined){
      return autoBuscado[0]
   }
   else{ return null  }
   },
   //en este caso buscarmos un auto por patente con for
   //para ello iniciamos un ciclo for y ejecutamos un condicional.
   //diciento que si en el ciclo la propiedad patente es igual a la patente ingresada.
   //nos devuelva el auto encontrado.
   //de lo encontrario null.
   buscarAutoFor: function(patente){
      for (let i = 0; i<autos.length; i++){
         if (this.autos[i].patente == patente)
         { return this.autos[i] }
      }
      return null;
   },
// en este caso buscamos un auto con la  patente y a vendido le asignamos el valor true.
// para informar que el auto esta vendido (no se cambia en la lista)
   venderAuto: function(patente){
      return this.buscarAuto(patente).vendido = true;
      },
   //en este caso recibimos la patente como parametro dentro de la funcion y creamos una variable
   //para filtrar los autos que estan en la propiedad vendido con el valor false.
   // de esta manera logramos filtrar los autos que estan a la venta.
   autosParaLaVenta: function(patente){
     let autoEnVenta = this.autos.filter(enVenta => enVenta.vendido == false)
   {
   return autoEnVenta}
},
//en este caso creamos una funcion para filtrar a los autos con km menor a 100.
//para ello creamos la funcion autosNuevos con el parametro patente
//creamos dos variables una para traer los autos que estan a la venta con la funcion hecha anteriormente.
// y la variable nuevos filtra los autos para la venta que tengan kilometraje menor a 100.
autosNuevos: function(patente){
   let autoNuevo = this.autosParaLaVenta()
   let nuevos = autoNuevo.filter((losNuevos => losNuevos.km <= 100))
{return nuevos}
},
//este caso fue resuleto muy similar al anterior teniamos que devolver una lista con el precio de venta de los autos vendidos.
//creamos la funcion listaDeVentas junto con dos variables, una para filtrar los autos vendidos.
//otra para que nos devuelva un array nuevo con el precio de los autos vendidos.
listaDeVentasMap: function(){
   let autoVendido = this.autos.filter(vendidos => vendidos.vendido == true)
   let autosVendidos = autoVendido.map(precios => precios.precio)
{return autosVendidos}},
//este caso es una variacion de como armar una lista con los precios de los autos vendidos.
//creamos una funcion que contiene un array que va a contener la lista nueva.
//luego creamos una variable para almacenar el filtro de los autos vendidos.
//si estan vendidos que sume al array vacio el precio de los autos vendidos.
listasDeVentasPush: function(autoVendido){
   let array = []
   let lista = this.autos.filter(function(elemento){
      if (elemento.vendido == true)
   {
      array.push (elemento.precio)
   }
   }) 
 return array
 },
 //en este caso creamos una funcion que nos de el valor total  de la suma de todas las ventas.
 // para ello creamos una condicion que nos dice que si la lista de las ventas es mayor a 0 nos ejecute lo siguiete.
 //nos ejecuta la lista de las ventas con el metodo reduce que funciona de acumulador.
 //en este caso nos cuenta el precio y lo va acumulando. si no se cumple que de 0.
 totalDeVentas: function(){
  if(this.listaDeVentasMap().length > 0){
   return this.listaDeVentasMap().reduce(function(acum,precio){
   return acum+precio
   })
  } else {return 0}
 },
 //en este caso agregamos la funcion puedeComprar que sabiendo la capacidad de pago total y en cuotas de una persona.
 //nos avisa si estas dos condiciones se cumplen nos va a devolver true por el && sino false
puedeComprar: function (auto,persona){
   return (auto.precio <= persona.capacidadDePagoTotal &&
  auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas)
},
//en este caso agregamos la function autosQuePuedeComprar que recibe el parametro persona.
//adentro creamos una variable con un array vacio para acumular los autos que puede comprar.
//luego otra variable para almacenar los autos que estan a la venta.
//y creamos un ciclo for para iterar en todos los autos de la concesionaria bajo la condicion.
//de que si la persona puede comprar el auto (lo sabemos por la funcion anterior), nos lo agrege en el array vacio.
autosQuePuedeComprar:function(persona){
 let autosOk = []
 let autosParaLaVenta = this.autosParaLaVenta()
 autosParaLaVenta.forEach(function(valor,indice){
     if(concesionaria.puedeComprar(valor,persona)){autosOk.push(valor)}
 })
 return autosOk
}
}
let persona = {
   nombre: "Juan",
   capacidadDePagoEnCuotas: 200000,
   capacidadDePagoTotal: 100000000
   }

   
//console.log (concesionaria.buscarAuto("JJK116"))
//console.log("----------------------------")
//console.log (concesionaria.venderAuto("GDM584"))
//console.log("----------------------------")
//console.log (concesionaria.autosParaLaVenta())
//console.log("----------------------------")
//console.log (concesionaria.autosNuevos())
//console.log("----------------------------")
//console.log (concesionaria.listaDeVentasMap())
//console.log("----------------------------")
//console.log (concesionaria.listasDeVentasPush())
//console.log("----------------------------")
//console.log (concesionaria.buscarAutoFor("GDM584"))
//console.log("----------------------------")
//console.log (concesionaria.totalDeVentas())
//console.log("----------------------------")
//console.log (concesionaria.puedeComprar(concesionaria.autos[0], persona))
//console.log (concesionaria.autosQuePuedeComprar(persona))