/*1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices Padawan a calcular la distancia a la que cualquiera de los planetas de la ruta N-14 pertenecientes a la ruta comercial de la federación intergaláctica, se encuentra del planeta NABOO.
Para calcular dicha distancia se debe:
• Recibir las coordenadas X,Y del planeta en UA
• Establecer la distancia como:*/

function hallarDistancia(x,y){
    return Math.sqrt(((Math.pow(Math.pow(x,2)-Math.pow(x,1),2))+(Math.pow(Math.pow(y,2)-Math.pow(y,1)),2)));
}

console.log(hallarDistancia(5,6))

const flechaHallarDistancia = (x,y)=>  Math.sqrt(((Math.pow(Math.pow(x,2)-Math.pow(x,1),2))+(Math.pow(Math.pow(y,2)-Math.pow(y,1)),2)));

console.log(flechaHallarDistancia(5,6))