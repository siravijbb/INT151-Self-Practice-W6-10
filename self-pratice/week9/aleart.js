// const bolt = document.querySelector('img')
// const submitbutton = document.querySelector("div>button")
// const divElement = document.querySelector("div")
// const bodyElement = document.querySelector("body")
//
// function logEvent(event, message) {
//     console.log('target:', event.target)
//     console.log('currentTarget:', event.currentTarget)
//     console.log('eventPhase:', event.eventPhase)
//     if (message) console.log(message)
// }
//
// if (submitbutton) {
//     submitbutton.addEventListener('click', (event) => {
//         logEvent(event, "Submit button was clicked!")
//     })
// }
//
// if (divElement) {
//     divElement.addEventListener('click', (event) => {
//         logEvent(event, "Div was clicked!!")
//     })
// }
//
// if (bodyElement) {
//     bodyElement.addEventListener('click', (event) => {
//         logEvent(event, "body was clicked!!")
//     })
// }

const fName = document.getElementById("fname")
const lName = document.getElementById("lname")
const message = document.getElementById("message")

function checkEmpty(e) {
    console.log(e)
    if (e.target.value.trim().length === 0) {
        message.style.color = "red"
        message.textContent = `your ${e.target.id} is empty`
    }
}
fName.addEventListener("blur", checkEmpty)
lName.addEventListener("blur", checkEmpty)
