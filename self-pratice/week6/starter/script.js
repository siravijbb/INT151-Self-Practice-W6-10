// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/


function addQuote(quote) {

    quotes.push({
        id: quote.id,
        content: quote.content,
        author: quote.author
    })
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
    const index = quotes.findIndex(q => q.id === id);
    if (index !== -1) {
        quotes.splice(index, 1);
    }
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
    const index = quotes.findIndex(q => q.id === id);
    if (index !== -1) {
        quotes[index].content = updatedQuote
    }
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()

addQuote({
    id: 1,
    content: "AAAA",
    author: "SIRA"
})
addQuote({
    id: 2,
    content: "FFFF",
    author: "SIERRA"
})
addQuote({
    id: 3,
    content: "GGGG",
    author: "DELTA"
})

// TODO: Delete 1 quote using deleteQuote()
deleteQuote(3)
// TODO: Update 1 quote using updateQuote()
updateQuote(2,'ASDW')
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())
