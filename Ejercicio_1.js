// Pide la edad y si es mayor a 18 decir que puede conducir

const sc = require("prompt-sync")({sigint: true});
const edad = sc("Cuál es tu edad? -->")
console.log("Tienes :" +edad) 
if (edad>=18){
    console.log("Puede conducir")
}else{
    console.log ("No puedes conducir,eres menor")
}
