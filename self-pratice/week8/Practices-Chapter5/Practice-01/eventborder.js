let state = false
function addbord(){
    const box = document.getElementById('box')
    box.classList.add('bordered')
}
function removbord(){
    const box = document.getElementById('box')
    box.classList.remove('bordered')
}

const addbutton = document.getElementById('add')
addbutton.addEventListener('click',() =>{
    addbord()
    state = true
})
const removbut = document.getElementById('remove')
removbut.addEventListener('click',() =>{
    removbord()
    state = false
})

const toggbut = document.getElementById('toggle')
toggbut.addEventListener('click',() =>{
    if(state === true){
        removbord()
    }else{
        addbord()
    }
    state = !state
})


