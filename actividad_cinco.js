const sc = require("prompt-sync")({sigint: true});
const ciclo = sc("Cuál es tu ciclo? ==>")
console.log("Tu ciclo es " +ciclo)