
const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const email = document.querySelector('input[name="email"]');
const phone = document.querySelector('input[name="phone"]');
const topic = document.querySelector('input[name="topic"]');
// const country = document.querySelector('select');
const message = document.querySelector('textarea[name="message"]');

const agreement = document.querySelector('input[name="agreement"]');

const thankYou = document.querySelector('.thank-you');

const form = document.querySelector('form');
let isFormValid = false;



// RESEAT FUNCTION 
const reseatInput = (elm) => {
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add('hidden');
}


// CHECKING INPUT FUNCTION
const validateInputs = () => {
    isFormValid = true;

    reseatInput(firstName);
    reseatInput(lastName);
    reseatInput(email);
    reseatInput(phone);
    reseatInput(topic);
    // reseatInput(country);
    reseatInput(message);

    if (!firstName.value) {
        firstName.classList.add('invalid');
        firstName.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }

    if (!lastName.value) {
        lastName.classList.add('invalid');
        lastName.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }

    if (!email.value) {
        email.classList.add('invalid');
        email.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }

    if (!phone.value) {
        phone.classList.add('invalid');
        phone.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }

    if (!topic.value) {
        topic.classList.add('invalid');
        topic.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }

    // if (country.value === '') {
    //     country.classList.add('invalid');
    //     country.nextElementSibling.classList.remove('hidden');
    //     isFormValid = false;
    // }

    if (!message.value) {
        message.classList.add('invalid');
        message.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }
}

// PREVENTING FORM FROM SUBMITTING BEFORE CHECKING
form.addEventListener('submit', (e) => {

    e.preventDefault();
    validateInputs();

    if (isFormValid == true) {
        form.remove();
        thankYou.classList.remove('hidden');
    }
})


// validating the input 
const validInput = (elm) => {
    elm.nextElementSibling.classList.add('hidden');
    elm.classList.remove('invalid');
    elm.classList.add('valid');
}   



// EVENT WHEN CLICKING ON INPUT
firstName.addEventListener('input', () => {
    validateInputs();
    validInput(firstName);
})
lastName.addEventListener('input', () => {
    validateInputs();
    validInput(lastName);
})
email.addEventListener('input', () => {
    validateInputs();
    validInput(email);
})
phone.addEventListener('input', () => {
    validateInputs();
    validInput(phone);
})
topic.addEventListener('input', () => {
    validateInputs();
    validInput(topic);
})

message.addEventListener('input', () => {
    validateInputs();
    validInput(message);
})

