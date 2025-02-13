export const calculateUserInput = (arrayToSum: number[])=>{
    return arrayToSum.reduce((acc, curr)=> acc+=curr,0)
}