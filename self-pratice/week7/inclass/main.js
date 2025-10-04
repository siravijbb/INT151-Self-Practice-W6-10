// console.log(window.document)
// console.log(document)
// console.log(document.getElementById('123'))
// console.log(document.firstElementChild)
// console.log(document.lastChild)
// let twodivChildren = document.getElementById('123')
// const divChildren = twodivChildren.children
// console.log((divChildren).length)
// Array.from(divChildren).forEach((child) => console.log(child))
//
// const divElement = document.getElementById('123')
// const divAttr = divElement.attributes
// console.log(divAttr.length)
//
// Array.from(divAttr).forEach(divAttr => console.log(divAttr.name , divAttr.value, ))

// console.log(document.firstChild)
// const divELement = document.getElementById('123')
// console.log((document.firstChild).nodeType)
// console.log((document.firstChild).nodeValue)
//
// if(document.firstElementChild.)

//
// //1. What is the node type of first child of root node
// console.log(document.firstChild.nodeType)
//
// //2. if node type is an element node, display "Hello, HTML node", otherwise, display "Hello, any node"
// if (document.firstElementChild.nodeType === Node.ELEMENT_NODE)
//     console.log("Hello, HTML node")
// else console.log("Hello, any node")

//


let el = document.getElementById("demo")
console.log(el.innerHTML)
console.log(el.innerText)
console.log(el.textContent)


//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
//1.5 add format='italic' attribute to <p>
//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
//2.2  add <i>Sample Italic Text</i> with innerText
//2.3 add <i>Sample Italic Text</i> with textContent

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