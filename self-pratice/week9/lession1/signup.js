const [usernameInput, emailInput, passwordInput, confirmPasswordInput] = document.querySelectorAll('input')
const confirmBtn = document.querySelector('button')

confirmBtn.addEventListener('click', e => {
    e.preventDefault()
    hideMessage()

    const username = usernameInput.value?.trim()
    const email = emailInput.value?.trim()
    const password = passwordInput.value ?? ''
    const confirmPassword = confirmPasswordInput.value ?? ''

    if (!username || !email || !password || !confirmPassword) {
        showError('missing some values, please try again!')
        return
    }

    if (password !== confirmPassword) {
        showError('password and confirm do not match, check again')
        return
    }

    showSuccess('your data completed');
})

function showError(msg){
    const errDisplay = document.querySelector('p')
    errDisplay.classList.add('err')
    errDisplay.classList.remove('success')
    errDisplay.textContent = msg
}

function showSuccess(msg){
    const errDisplay = document.querySelector('p')
    errDisplay.classList.add('err', 'success')
    errDisplay.textContent = msg
}

function hideMessage(){
    const errDisplay = document.querySelector('p')
    errDisplay.classList.remove('err', 'success')
    errDisplay.textContent = '';
}