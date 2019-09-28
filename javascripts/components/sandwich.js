import bread from './bread.js'
import meat from './meat.js'
import cheese from './cheese.js'
import condiment from './condiments.js'
import veggie from './veggies.js'
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
    let domString2 = '<image src="https://media1.tenor.com/images/55effd612d6b5c97280e4f79f0e595fd/tenor.gif?itemid=5223959> id="image""';
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        let totalPrice = items[i].price;
        sum += totalPrice;
        totalPrice /= 100;
        let currency = totalPrice.toLocaleString("en-US", {style:"currency", currency:"USD"});
        domString2 += `<div>
        <p><strong>${items[i].name} ${currency}</strong></p>
        </div>
        `
    };
    sum /= 100;
    const total = sum.toLocaleString("en-US", {style:"currency", currency: "USD"});
    domString2 += `<hr>
    <h4>Total: ${total}</h4>`;
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