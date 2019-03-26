const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('inputIngredient');

const printToDom = (divId, print) => {
    document.getElementById(divId).innerHTML += print;
};

const eventListeners = () =>{
    addButton.addEventListener('click', addIngredient);
};

const addIngredient = (e) => {
    e.preventDefault();
    const inputText = inputIngredient.value;
    printToDom('ingredient-container', inputText);
    inputIngredient.value = '';
};


const init = () => {
    eventListeners();
};
init();