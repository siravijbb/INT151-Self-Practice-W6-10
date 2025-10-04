const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        box.style.background = button.dataset.color;
        box.innerHTML = (button.dataset.color).toUpperCase();
    });
});