const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('inputIngredient');

const ingredients = [];

const printToDom = (divId, print) => {
    document.getElementById(divId).innerHTML = print;
};

const eventListeners = () =>{
    addButton.addEventListener('click', addIngredient);
};

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    arrayToPrint.forEach((ingredient) => {
      domString += `<div class="card col-3">`;
      domString += `  <div class="card-body">`;
      domString += `    <h5 class="card-title">${ingredient.item}</h5>`;
    //   domString += `    <a href="#" class="btn btn-primary">Go somewhere</a>`;
      domString += `  </div>`;
      domString += `</div>`;
    });
  
    printToDom('ingredient-container', domString);
  };

const addIngredient = (e) => {
    e.preventDefault();
    const inputText = inputIngredient.value;
    const newIngredient = {
        item: inputText
    };
    ingredients.push(newIngredient);
    domStringBuilder(ingredients);
    inputIngredient.value = '';
    
};


const init = () => {
    eventListeners();
};
init();