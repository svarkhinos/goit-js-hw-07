
const input = document.getElementById('name-input');
const nameLabel = document.getElementById('name-output');

input.addEventListener('input', onInputChange);
input.addEventListener('blur', onInputBlur);

function onInputChange(event) {
    nameLabel.textContent = event.currentTarget.value
};

function onInputBlur(event) {

if (event.currentTarget.value === '')
{ nameLabel.textContent = 'незнакомец'} 

}