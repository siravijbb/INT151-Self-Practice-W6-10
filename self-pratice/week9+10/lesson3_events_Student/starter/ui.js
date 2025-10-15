// Lesson 3 - Events Starter

import {addQuote,updateQuote,deleteQuote,getAllQuotes} from "./quote";

let quotes = []
const confirmBtn = document.querySelector('button')
const [content, author] = document.querySelectorAll('input')

// Select DOM elements
// const quoteList =
// const form = ...
// const contentInput =
// const authorInput =
// const idInput =
// const randomBtn =
// const randomDisplay =

confirmBtn.addEventListener('click', e => {
    e.preventDefault()
    let { id,content, author } = addQuote(content, author)
    let objq = {
        id:id,
        content:content,
        author:author
    }
    createQuoteElement(objq)

})

function createQuoteElement(quote) {
  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {}
function updateQuoteInDOM(quote) {}
function deleteQuoteFromDOM(id) {}
function renderQuotes() {}
function showRandomQuote() {}
// Event listeners for form submission, edit, and delete clicks
