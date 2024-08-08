const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const card = document.getElementById('card');

noButton.addEventListener('mouseover', () => {
    const offset = Math.random() * 200 - 100;  // Valor aleatorio entre -100 y 100
    noButton.style.transform = `translateX(${offset}px)`;
});

yesButton.addEventListener('click', () => {
    card.classList.remove('hidden');
    card.classList.add('visible');
});
