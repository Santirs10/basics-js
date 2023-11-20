//Pide una nota. Muestra la calificacion segun la nota y hacerlo como sufi sobre etc.
const sc = require("prompt-sync")({sigint: true});
const nota = sc("Cuál es tu nota? -->")

if(nota>0 && nota<3){
    console.log("Tienes : " +nota) 
    console.log("Muy deficiente")
}
else if(nota>=3 && nota<5){
    console.log("Tienes : " +nota) 
    console.log("Deficiente")
}
else if (nota>5 && nota <7){ 
    console.log("Tienes : " +nota) 
    console.log("Bien")
}
else if (nota>6 && nota<9){ 
    console.log("Tienes : " +nota) 
    console.log("Notable")
}
else if (nota>=9 && nota <=10){ 
    console.log("Tienes : " +nota) 
    console.log("Sobresaliente")
}