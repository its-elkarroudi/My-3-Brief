
const productForm = document.querySelector('form');

const sizeInput = document.querySelector('select[name="clothesSize"');
// console.log(sizeInput);
const colorInput = document.querySelector('select[name="clothesColor"');
// console.log(colorInput);

let orderValid = false;



const resetSelect = (elm) => {
    elm.classList.remove('invalid');
    elm.classList.add('valid');

    orderValid = true;
}


const orderValidate = () => {
    orderValid = true ;

    resetSelect(sizeInput);
    resetSelect(colorInput);

    if(sizeInput.value === '0') {
        sizeInput.classList.add('invalid');
        orderValid = false;
    }
    if(colorInput.value === '0') {
        colorInput.classList.add('invalid');
        orderValid = false;
    }
}


const validatingSelect = (elm) => {
    elm.classList.remove('invalid');
    elm.classList.add('valid');
}

sizeInput.addEventListener('input', () => {
    orderValidate(sizeInput);
    validatingSelect(sizeInput);
})
colorInput.addEventListener('input', () => {
    orderValidate(colorInput);
    validatingSelect(colorInput);
})



productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    orderValidate();

    if (orderValidate()) {
        FormData.submit();
    }

})