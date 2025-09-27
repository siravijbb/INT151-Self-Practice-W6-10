
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

let secondparrent = document.getElementById('demo')
let lielem = document.createElement('ol')
