// const el = document.querySelector('#appetizer');
// console.log(el.childNodes);
//
// const meatalle = document.querySelectorAll('.meat')
// meatalle.forEach((ele) => console.log(ele))
//
// //find all child node under apptizer
// const ulElemt = document.getElementById('appetizer')
//
//
// // 2.find meat element contain soup
// const meatAllElement = document.querySelectorAll(".meat")
// meatAllElement.forEach((ele) => console.log(ele)) // 4 meat element
// console.log(meatAllElement)
// // 2. find meat element that has text value contains "soup"
// //
// // const meatSoupElements = Array.from(meatAllElement).filter(ele =>
// //     ele.textContent.toLowerCase().includes("soup")
// // )
// // console.log(meatSoupElements)
//
//
// // 3.go to the first child elemt node under <ul soup> display all sibing
//
// const soupele = document.querySelector(".soup").firstElementChild;
//
// let sib = soupele;
// while (sib) {
//     console.log(sib);
//     sib = sib.nextElementSibling;
// }
//
//
// //////
//
// // const nameattele  = document.getElementsByName()
// // const nameattcol =  []
// // nameattele.forEach(el => nameattcol.push(el))
//
// const fnameele = document.getElementsByName('fname')
// console.log(fnameele.length)
// fnameele.forEach((el) => console.log(el))
//
// // get elemet by tag
// const inputele = document.getElementsByClassName('input')
// Array.from(inputele).forEach((el) => console.log(el))
//
// // get eleby class return colle data
//
// ///
// const el = document.querySelector('#appetizer',"soup")
// console.log(el)
//
//
//
// const allMeat = document.querySelectorAll('.meat')
// allMeat.forEach(e=>{
//     if (e.parentElement.id == 'soup' || e.parentElement.id == 'appetizer') console.log(e)
// })
// console.log(allMeat)

//
// //1. getElementsByName(), return NodeList (array-like) data type, implement forEach
// const fnameElements = document.getElementsByName("fname")
// console.log(fnameElements.length) //2
// fnameElements.forEach((ele) => console.log(ele))
//
// //2. getElementsByTagName(), return HTMLCollection (array-like) data type
// const inputElements = document.getElementsByTagName("input")
// Array.from(inputElements).forEach((ele) => console.log(ele))
//
// //3. getElementsByClassName(), return HTMLCollection (array-like)  data type
// const veganElements = document.getElementsByClassName("vegan")
// Array.from(veganElements).forEach((ele) => console.log(ele))
//
// //4. find the first element of document that has an ID values "appetizer" or "soup"
// const firstElement = document.querySelector("#appetizer, #soup")
// console.log(firstElement)
// //5. find all class "meat" elements under <ul id="appetizer"> or <ul id="soup"> only
//
// // find all class "meat" elemet under <ul id = "appetizer"> or <ul id="soup"> only
// const meatElemet = document.querySelectorAll("#appetizer .meat, #soup .meat")
// meatElemet.forEach((ele) => console.log(ele))
//


// insertBefore(newNode, referenceNode) //The node to insert becomes the previous sibling of the reference node
// replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
// removeChild(child)//removes a child node from the DOM and returns the removed node.

/* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 2. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 1. <li class="vegan">Cabbage Soup</li> -->
<li class="meat">Beef Soup</li>
<!-- 3. replace Beef Soup with Pork Soup -->
<li class="vegan">Coconut Soup</li>
</ul> */
// insertBefore(newNode, referenceNode) //The node to insert becomes the previous sibling of the reference node
// replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
// removeChild(child)//removes a child node from the DOM and returns the removed node.

/* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 2. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 1. <li class="vegan">Cabbage Soup</li> -->
<li class="meat">Beef Soup</li>
<!-- 3. replace Beef Soup with Pork Soup -->
<li class="vegan">Coconut Soup</li>
</ul> */
//
// // (insertBefore) 1. <li class="vegan">Cabbage Soup</li>
// //1.1 get its parent
// const soupUlElement = document.getElementById("soup")
// //1.2 get ref node -Beef Soup
// let refNode = null
// Array.from(soupUlElement.children).forEach((element) => {
//     if (element.textContent.trim().includes("Beef Soup")) refNode = element
// })
// //1.3 create node <li class="vegan">Cabbage Soup</li>
// const newNode = document.createElement("li")
// newNode.textContent = "Cabbage Soup"
// newNode.setAttribute("class", "vegan")
// //1.4 insertBefore(newNode, refNode)
// soupUlElement.insertBefore(newNode, refNode)
// // 2. remove Vegetable Soup
// //2.1 get its parent
// const soupUlElement = document.getElementById("soup")
// //2.2 get ref node -Beef Soup
// let refNode = null
// Array.from(soupUlElement.children).forEach((element) => {
//     if (element.textContent.trim() === "Vegetable Soup") refNode = element
// })
// //2.3 remove
// soupUlElement.removeChild(refNode)
// //  3. replace Beef Soup with Pork Soup
// //2.1 get its parent
// const soupUlElement = document.getElementById("soup")
// //2.2 get ref node -Beef Soup
// let refNode = null
// Array.from(soupUlElement.children).forEach((element) => {
//     if (element.textContent.trim() === "Beef Soup") refNode = element
// })
// //2.3 create new node <li class="meat">Pork Soup</li>
// const newNode = document.createElement("li")
// newNode.textContent = "Pork Soup"
// newNode.setAttribute("class", "meat")
// //2.4 replaceChild(newNode, refNode)
// soupUlElement.replaceChild(newNode, refNode)