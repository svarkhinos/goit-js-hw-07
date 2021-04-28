const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsList = document.getElementById('ingredients');

const ingredientsItem = ingredients.map(elem => {
    const elemName = document.createElement('li');
    elemName.textContent = elem;
    return elemName;
});

ingredientsList.append(...ingredientsItem);
