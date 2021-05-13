const input = document.getElementById('validation-input');
const DATA_LENGTH = Number(input.getAttribute('data-length'));

input.addEventListener('blur', onInputBlur);
input.addEventListener('focus', onInputFocus);

function onInputBlur(event) {
    if (event.currentTarget.value.length === DATA_LENGTH) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
}

function onInputFocus() {
    input.removeAttribute('class');
}

console.log(input.dataset.length);