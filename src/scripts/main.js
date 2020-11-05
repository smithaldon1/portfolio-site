const card = document.querySelector('.card')

card.addEventListener('click', () => {
    card.classList.toggle('is__flipped');
});

function buttonPress() {
    window.location.href='#about';
}
