
const input = document.getElementById('font-size-control');
const text = document.getElementById('text');



input.addEventListener('input', onInputMove);

function onInputMove(event) {
    const val = event.currentTarget.value;
   text.style.fontSize =`${val}px`
   
   }