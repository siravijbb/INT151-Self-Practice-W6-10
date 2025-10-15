
const [bgcolor, fcolorinput ] = document.querySelectorAll('input')
let fsizeinput = document.querySelectorAll('input[name="size"]'); // Fixed selector
let bg = (localStorage.getItem('bg'))
let fontcolor = localStorage.getItem('fontcolor')
let fontsize = localStorage.getItem('fontsize')
const dom = document.querySelector("body")

if (bg === null || fontcolor === null || fontsize === null ) {
    localStorage.setItem('bg', 'white')
    localStorage.setItem(fontcolor,'black')
    localStorage.setItem(fontsize,'medium')

}
dom.style.background = bg
dom.style.fontSize = fontsize
dom.style.color = fontcolor

const confirmBtn = document.querySelector('button')

confirmBtn.addEventListener('click', e => {
    e.preventDefault()
    const selectedRadio = document.querySelector('input[name="size"]:checked')

    if(bgcolor.value == '' || fcolorinput.value == '' || fsizeinput.value == ''){
        console.log('X')
        return alert('missing input')
    }
    console.log(selectedRadio.value)
    localStorage.setItem('bg', bgcolor.value)
    localStorage.setItem('fontcolor', fcolorinput.value)
    localStorage.setItem('fontsize', selectedRadio.value)
    dom.style.background = bgcolor.value
    dom.style.fontSize = selectedRadio.value
    dom.style.color = fcolorinput.value

})