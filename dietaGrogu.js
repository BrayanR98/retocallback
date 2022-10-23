let alimentos=[{"nombre":"lechuga","tipo":"vegetal","nivelEnergia":150},
{"nombre":"pollo","tipo":"animal","nivelEnergia":200},
{"nombre":"Pepino","tipo":"vegetal","nivelEnergia":250},
{"nombre":"remolacha","tipo":"vegetal","nivelEnergia":300},
{"nombre":"brocoli","tipo":"vegetal","nivelEnergia":400}
]

const hallarVegetales = (alimentos) => {
    alimentos.forEach(alimento => {
        if(alimento.tipo == "vegetal" && alimento.nivelEnergia > 200){
            console.log("alimento: " + alimento.nombre + "Energia: " + alimento.nivelEnergia)
        }
    });
    sumaEnergiaVegetales(alimentos)
}

const sumaEnergiaVegetales = (alimentos) => {
    let suma=0
    alimentos.forEach(alimento => {
        if(alimento.tipo == "vegetal"){
            suma+=alimento.nivelEnergia
        }
    });
    console.log("La suma de la energia vegetal en dieto de grogu es: " + suma)
}

setTimeout(hallarVegetales(alimentos),5000)