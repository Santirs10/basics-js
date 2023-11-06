const usuarioTienePermiso = true;
const navegadorTienePermiso = false;

if(usuarioTienePermiso && navegadorTienePermiso){
    console.log("El usuario y el navegador tiene permisos")
}

else{
    console.log("SIN PERMISO")
}
if (usuarioTienePermiso || navegadorTienePermiso){
    console.log("Uno de los dos " +usuarioTienePermiso+ " tienen permiso")
}