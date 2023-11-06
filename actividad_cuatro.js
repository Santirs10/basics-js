const sc = require("prompt-sync")({sigint: true});
const nombre = sc("Cuál es tu nombre? ==>")
console.log("Tu nombre es " +nombre)