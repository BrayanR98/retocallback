let bd = {"ARQ2555": "Sara Bel-Sun","ARQ2556":"Nodin Chavdri","ARQ2557":"Fin"};

function hallarPiloto(codigo){
    for (const [c,v] of Object.entries(bd)){
        if(c==codigo){
            console.log("el piloto es: "+v)
        }
    }
}
hallarPiloto("ARQ2555")

let rowHallarPiloto= (codigo)=>{
    for(const [c,v] of Object.entries(bd)){
        if(c==codigo){
            console.log("row el Piloto es: "+v)
        }
    }
}

rowHallarPiloto("ARQ2556")
