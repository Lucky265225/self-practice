function groupByCategory(arr){
    let Stationery = []
    let Food = []
    arr.forEach( e => {
        if(e.category === "Stationery"){
            Stationery.push(e)
        }else{
            Food.push(e)
        }
    })
    return {Stationery:Stationery,Food:Food}
}

export {
    groupByCategory
}