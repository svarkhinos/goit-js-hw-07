

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById('value')


const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
};

decrementButton.addEventListener('click', onDecrementClick);
incrementButton.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    counter.decrement();
    counterValue.textContent = counter.value;
};

function onIncrementClick() {
    counter.increment();
    counterValue.textContent = counter.value;
}

