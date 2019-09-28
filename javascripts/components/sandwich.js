import bread from './bread.js'
import meat from './meat.js'
import cheese from './cheese.js'
import condiment from './condiments.js'
import veggie from './veggies.js'
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i = 0; i < items.length; i++) {
        domString2 += `<h2>${items[i].name} $${items[i].price}</h2>`
    }
    utilities.printToDom('order-zone', domString2);
};

const createOrderEvent = () => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meat.getSelectedMeats();
    const selectedCondiments = condiment.getSelectedCondiments();
    const selectedVeggies = veggie.getSelectedVeggies();
    const total = selectedBreads.concat(selectedCheeses, selectedMeats, selectedCondiments, selectedVeggies)
    createFinalOrder(total);
};

const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-secondary">Generate Sandwich?</button>'
    utilities.printToDom ('button-zone', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
}

const submitButton = () => {
    const domString2 = '<button id="submit-button" class="btn btn-success">Submit Order?</button>'
    utilities.printToDom ('submit-zone', domString2);
    document.getElementById('submit-button').addEventListener('click', () => {
        utilities.printToDom('order-zone', '')
})
}

export default { printOrderButton, submitButton };