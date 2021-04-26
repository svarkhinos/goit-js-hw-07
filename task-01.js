const numberOfCategories = document.querySelectorAll('.item').length;

console.log(`В списке ${numberOfCategories} категории`);

const nameOfCategories = document.querySelectorAll('h2');

const categories = nameOfCategories.forEach(elem =>{
    console.log(`Категория: ${elem.textContent}`);
    const number = elem.nextElementSibling.children.length;
    
    console.log(`Количество элементов: ${number}`);
});
