function calculate(num,comp){
    return comp(num)
}
function sum(ele){
    return ele.reduce((total,cur)=> cur+total)
}

