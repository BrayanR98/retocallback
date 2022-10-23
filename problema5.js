const salarioMensual = 3500000

function calcularSalario(licencia){  
    return salarioMensual+(licencia*1500000)-(salarioMensual+(licencia*1500000)*0.05)
}

console.log(" el salario es: " + calcularSalario(2))

let rowCalcularSalario = (licencia) => salarioMensual+(licencia*1500000)-(salarioMensual+(licencia*1500000)*0.05)
