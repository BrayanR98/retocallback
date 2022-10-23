let sables = [2,4,-8,5,-6]

function hallarSablesDefectuosos(arr){
    let defectuoso=0
    arr.forEach(sable => {
        if(sable<0){
            defectuoso+=1
        }
    });
    return defectuoso;
};
console.log("cantidad de sables defectuosos: "+hallarSablesDefectuosos(sables))
 const rowHallarSablesDefectuosos = (sables)=>{
    sables.forEach(sable => {
        let defectosos=0
        if( sable < 0){
            defectosos+=1
        }
    })
    return defectosos;
 };
 console.log("row Cantidad de sables defectuosos: "+rowHallarSablesDefectuosos(sables))