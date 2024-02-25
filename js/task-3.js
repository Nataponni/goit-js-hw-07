
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const trimmedValue = nameInput.value.trim(); // Видаляємо пробіли по краях тексту

    if (trimmedValue) {
        nameOutput.textContent = trimmedValue; // Якщо інпут не порожній, встановлюємо вміст спану на поточне значення
    } else {
        nameOutput.textContent = 'Anonymous'; // Якщо інпут порожній, встановлюємо вміст спану на "Anonymous"
    }
});