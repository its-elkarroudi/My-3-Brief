
const accountEmail = document.querySelector('input[name="accountEmail"]');
const accountPassword = document.querySelector('input[name="accountPassword"]');

const accountName = document.querySelector('input[name="accountName"]');
const accountPassword_Confirmation = document.querySelector('input[name="confirmPassword"]');
console.log(accountPassword_Confirmation);

const signUpForm = document.querySelector('#signUpForm');
let is_form_valid = false ;


const reseat_form = (elm) => {
    elm.classList.remove('invalid');
}


const validate_login_input = () => {

    is_form_valid = true;

    reseat_form(accountName);
    reseat_form(accountEmail);
    reseat_form(accountPassword);
    reseat_form(accountPassword_Confirmation);

    
    if (!accountEmail.value) {
        accountEmail.classList.add('invalid');
        is_form_valid = false;
    }
    if (!accountPassword.value) {
        accountPassword.classList.add('invalid');
        is_form_valid = false;
    }
    if (!accountName.value) {
        accountName.classList.add('invalid');
    } else {console.log('log in page');}
    if (!accountPassword_Confirmation.value) {
        accountPassword_Confirmation.classList.add('invalid');
    }else {console.log('log in page');}
}


signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validate_login_input();

    if (is_form_valid == true) {
        signUpForm.submit();
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
accountName.addEventListener('input', () => {
    validate_login_input();
    input_validate(accountName);
})

accountPassword_Confirmation.addEventListener('input', () => {
    
    if (accountPassword_Confirmation.value == accountPassword.value) {
        validate_login_input();
        input_validate(accountPassword_Confirmation);
    } else {
        accountPassword_Confirmation.classList.remove('valid')
        accountPassword_Confirmation.classList.add('invalid')
    }
})