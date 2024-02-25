const form = document.querySelector(".login-form");

form.addEventListener('submit', event => {
    event.preventDefault(); // Забороняємо стандартну дію сабміту форми (перезавантаження сторінки)

    const formData = new FormData(form); // Створюємо об'єкт FormData для отримання значень полів форми

    const formValues = {}; // Об'єкт для збереження даних форми

    formData.forEach((value, key) => {
        formValues[key] = value.trim(); // Очищаємо значення від пробілів та додаємо до об'єкту formValues
    });

    // Перевіряємо, чи всі поля форми заповнені
    const allFieldsFilled = Object.values(formValues).every(value => value !== '');

    if (!allFieldsFilled) {
        alert('All form fields must be filled in');
    } else {
        console.log(formValues); // Виводимо об'єкт з введеними даними в консоль
        form.reset(); // Очищаємо значення полів форми
    }
});