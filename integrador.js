alert("Bienbenidos a al polleria Comrralito")
var entrada=parseInt(prompt("Ingrese el precio de la entrada;"))
var segundo=parseInt(prompt("Ingrese el precio de la entrada;"))
var postre=parseInt(prompt("Ingrese el precio de la entrada;"))
var total=entrada+segundo+postre
var igv=(total*18/100)+total
console.log("El precio de la entrada es", entrada)
console.log("El precio del segundo es", segundo)
console.log("El precio del postre es", postre)
console.log("La cuenta es de:",total)
console.log("El cuenta total con IGV es", igv)


