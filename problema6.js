function crearPadawan(nombre,planeta,edad,estatura){
    let padawan = {"nombre":nombre,"planeta":planeta,"ead":edad,"estatura":estatura}
    clasificarActividad(padawan)
}

function clasificarActividad(padawan){
    let actividad = ""
    if ( padawan.edad> 15 ){
        actividad = "Manejo del sable de luz"
    }else{
        actividad = "Manejo de la fuerza"
    }

    return console.log("El padawan : " + padawan.nombre + "aprender " + actividad + "debe ")
}
crearPadawan("Finn","Nabo",12,175);

let rowCrearPadawan = (nombre,planeta,edad,estatura) => {
    let padawan = {"nombre":nombre,"planeta":planeta,"edad":edad,"estatura":estatura}
    rowClasificarActividad(padawan)
}

let rowClasificarActividad = (padawan) => {
    let actividad = ""
    if( padawan.edad < 15){
        actividad = "Manejo del sable de luz"
    }else{
        actividad = "Manejo de la Fuerza"
    }
    return console.log("El padawan : " + padawan.nombre + " apender : " + actividad + "debe" )
}

rowCrearPadawan("Bill","Tierra",18,190)
