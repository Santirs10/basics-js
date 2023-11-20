//Pedir los numeros hasta que se introduzca "cancelar" Si no es un numero debera indicarse con un "no entendido" y seguir pidiendo. Al salir con "cancelar" debera indicarse la suma total de los numeros recibidos

const sc = require("prompt-sync")({sigint: true});
let num = sc("Dame un numero, si deseas salir escriba'cancelar'")
let suma=0
while (num!="cancelar") {
    
if(Number(num)){
    console.log("Es un numero")
    suma=suma+num
    num = ("Dame un numero, si deseas salir escriba'cancelar'")
    
}
else{ 
    console.log("No es un numero")
}
}
console.log("")
