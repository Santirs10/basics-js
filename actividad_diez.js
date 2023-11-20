const sc = require("prompt-sync")({sigint: true});
const password="1234"
let tries=0
let intentosAgotados=false


console.log("=Introduce la contraseña=")

let intento=sc("Introduce la contraseña --> ")
console.log (intento);

while (intento!=password && intentosAgotados==false) {
    intento=sc("Contraseña Incorrecta("+ tries +"). Vuelve a intentarlo --> ")
    tries++
    if (tries>3) {
        intentosAgotados=true
    }
}
if (intentosAgotados) {
    console.log("Ponte a hacer burpees")
}else {
console.log("==BIENVENIDO AL SISTEMA==")
console.log("==ACCESO AL MENU==")
}
