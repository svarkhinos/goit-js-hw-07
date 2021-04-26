
const input = document.getElementById('validation-input');
const DATA_LENGTH = Number(input.getAttribute('data-length'));


input.addEventListener('blur', onInputBlur);
input.addEventListener('focus', onInputFocus);


function onInputBlur(event) {
     
  return event.currentTarget.value.length === DATA_LENGTH ?
    input.classList.add('valid') :
    input.classList.add('invalid');
} 

function onInputFocus() {
input.removeAttribute('class')
}





// function onInputBlur(event) {
//     input.classList.add('invalid');
//     input.classList.remove('valid');
    
//     const inputLength = event.currentTarget.value.length;

//     if (inputLength === DATA_LENGTH) {
//         input.classList.add('valid');
//         input.classList.remove('invalid');
//     } 

// }




