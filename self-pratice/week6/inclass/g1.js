let id = 1
function idGenerator(){
    let returnid = id
    id++
    return returnid

}
const idGen = idGenerator()



function outerFunction(x,y){
    function add(){
     return x + y
    }
}