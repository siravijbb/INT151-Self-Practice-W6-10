
const parent = document.getElementById('demo')
const pElement1 = document.createElement('p')
pElement1.setAttribute('format','italic')
pElement1.innerHTML = '<i>Sample Italic Text</i>'
const pElement2 = document.createElement('p')
pElement2.setAttribute('format','italic')
pElement2.innerText = '<i>Sample Italic Text</i>'
const pElement3 = document.createElement('p')
pElement3.setAttribute('format','italic')
pElement3.textContent = '<i>Sample Italic Text</i>'

parent.appendChild(pElement1)
parent.appendChild(pElement2)
parent.appendChild(pElement3)

////

let secondparrent = document.getElementById('self') // create selector to select parrent
let lielem = document.createElement('ol') // create separate element we want to use
lielem.innerHTML = '<li> Hello WOrd </li>' //  inner of inner
secondparrent.appendChild(lielem) // insert to parrent


let pelemt= document.createElement('p')
pelemt.setAttribute('id','helloword')
let apprentinner = document.createElement('div')
apprentinner.innerHTML = 'inner of sekai'
pelemt.innerHTML = 'Hello Sekai!'

// secondparrent.appendChild(pelemt.appendChild(apprentinner)) // cant
pelemt.appendChild(apprentinner)
secondparrent.appendChild(pelemt)