
const input = document.getElementById('validation-input');
const DATA_LENGTH = Number(input.getAttribute('data-length'));


input.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    
    const inputLength = event.currentTarget.value.length;

    if (inputLength === DATA_LENGTH) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } 

}