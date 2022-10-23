
const l = '11vfjefk'
const pattern = /\d\d?/
 const rValidarCodigo = (codigo) => {
    let mensaje = ""
    if(parseInt(codigo.match(pattern))>10){
        mensaje = "debe ingresar otro codigo..."
    }else{
        mensaje = "despegue la nave ..."
    }

    return console.log(mensaje)
 }
 rValidarCodigo(l)

 function validarCodigo(codigo){
    let sms = ""
    if(parseInt(codigo.match(pattern))>10){
        sms = "ingrese otro codigo ..."
    }else{
        sms = "Despegue la nave..."
    }

    return console.log(sms)
 }
 validarCodigo(l)