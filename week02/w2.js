function calculateTotalPages(items,itemsPerPage){

    if(items == 0 || itemsPerPage <= 0){
        throw new Error("items per pages must be greter than zero.")
    }

    return Math.ceil(items / itemsPerPage)
}

// console.log(calculateTotalPages(0,10));
