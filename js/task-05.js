const input = document.getElementById('name-input');
const nameLabel = document.getElementById('name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        nameLabel.textContent = 'незнакомец';
    }
}
