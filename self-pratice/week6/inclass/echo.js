let a = 1 //global scope
function doSomething(x) {
    let a = 10 //local scope
    let greet = "Hello"
    echo()
    function echo() {
        let a = 555
        let b = "Bob"
        console.log(a, b)
    }
    return `${greet}, ${x}, a=${a}`
}
console.log(doSomething("guest"))
a = 100
console.log(`a= ${a}`)

