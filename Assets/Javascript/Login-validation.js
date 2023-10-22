
const accountEmail = document.querySelector('input[name="accountEmail"]');
const accountPassword = document.querySelector('input[name="accountPassword"]');

const loginForm = document.querySelector('#loginForm');
let is_form_valid = false ;

const reseat_form = (elm) => {
    elm.classList.remove('invalid');
}

const validate_login_input = () => {

    is_form_valid = true;

    reseat_form(accountEmail);
    reseat_form(accountPassword);
    
    if (!accountEmail.value) {
        accountEmail.classList.add('invalid');
        is_form_valid = false;
    }
    if (!accountPassword.value) {
        accountPassword.classList.add('invalid');
        is_form_valid = false;
    }
}


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validate_login_input();

    if (is_form_valid == true) {
        loginForm.submit();
    }
})


const input_validate = (elm) => {
    elm.classList.remove('invalid');
    elm.classList.add('valid');
}

accountEmail.addEventListener('input', () => {
    validate_login_input();
    input_validate(accountEmail);
})
accountPassword.addEventListener('input', () => {
    validate_login_input();
    input_validate(accountPassword);
})
