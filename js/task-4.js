const form = document.querySelector(".login-form");

form.addEventListener('submit', event => {
    event.preventDefault(); 

    const formData = new FormData(form); 

    const formValues = {}; 

    formData.forEach((value, key) => {
        formValues[key] = value.trim(); 
    });

   
    const allFieldsFilled = Object.values(formValues).every(value => value !== '');

    if (!allFieldsFilled) {
        alert('All form fields must be filled in');
    } else {
        console.log(formValues); 
        form.reset();
    }
});