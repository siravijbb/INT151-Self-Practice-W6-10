import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'

const quoteList = document.querySelector('#quote-list')
const randomQuoteDisplay = document.querySelector('#randomQuoteDisplay')
const randomBtn = document.querySelector('#randomBtn')
const form = document.querySelector('form')

function createQuoteElement(quote) {
    const quoteDiv = document.createElement('div')
    quoteDiv.setAttribute('data-id', quote.id)
    const contentP = document.createElement('p')
    contentP.textContent = quote.content
    const authorP = document.createElement('p')
    authorP.textContent = quote.author
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.setAttribute('data-id', quote.id)
    editBtn.textContent = 'Edit'
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.setAttribute('data-id', quote.id)
    deleteBtn.textContent = 'Delete'
    quoteDiv.append(contentP, authorP, editBtn, deleteBtn)
    return quoteDiv
}

function addQuoteToDOM(quote) {
    const quoteElement = createQuoteElement(quote)
    quoteList.appendChild(quoteElement)
}

function updateQuoteInDOM(quote) {
    const existingQuoteDiv = document.querySelector(`[data-id="${quote.id}"]`)
    if (existingQuoteDiv) {
        const updatedQuoteElement = createQuoteElement(quote)
        existingQuoteDiv.replaceWith(updatedQuoteElement)
    }
}

function deleteQuoteFromDOM(id) {
    const quoteDiv = document.querySelector(`[data-id="${id}"]`)
    if (quoteDiv) {
        quoteDiv.remove()
    }
}

function renderQuotes() {
    quoteList.innerHTML = ''
    const allQuotes = getAllQuotes()
    allQuotes.forEach(quote => addQuoteToDOM(quote))
}

function showRandomQuote() {
    const allQuotes = getAllQuotes()
    if (allQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * allQuotes.length)
        const randomQuote = allQuotes[randomIndex]
        randomQuoteDisplay.textContent = `"${randomQuote.content}" - ${randomQuote.author}`
        randomQuoteDisplay.style.display = 'block'
    }
}

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const content = form.querySelector('input[name="content"]').value
        const author = form.querySelector('input[name="author"]').value

        if (content && author) {
            const newQuote = addQuote(content, author)
            addQuoteToDOM(newQuote)
            form.reset()
        }
    })


if (randomBtn) {
    randomBtn.addEventListener('click', showRandomQuote)
}

    quoteList.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'))

        if (e.target.classList.contains('delete-btn')) {
            deleteQuote(id)
            deleteQuoteFromDOM(id)
        } else if (e.target.classList.contains('edit-btn')) {
            const content = prompt('Enter new content:')
            const author = prompt('Enter new author:')

            if (content && author) {
                const updatedQuote = updateQuote(id, content, author)
                if (updatedQuote) {
                    updateQuoteInDOM(updatedQuote)
                }
            }
        }
    })

