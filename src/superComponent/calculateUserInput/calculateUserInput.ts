export const calculateUserInput = (arrayToSum: number[])=>{
    return arrayToSum.reduce((acc, curr)=> acc+=curr,0)
}

export const displayLastExpenseValue = (arrayToCheck: number[])=>{
    return arrayToCheck[arrayToCheck.length-1]
}

export const removeLastElementFromArray = (array:number[])=>{
    return array.slice(0, array.length-1)
}