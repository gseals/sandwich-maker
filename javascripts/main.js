import bread from './components/bread.js';
import meat from './components/meat.js'
import cheese from './components/cheese.js';
import condiments from './components/condiments.js'
import veggies from './components/veggies.js'
import sandwich from './components/sandwich.js';

const init = () => {
    console.log('lovely')
    bread.breadPrint();
    meat.meatsPrint();
    cheese.cheesePrint();
    condiments.condimentsPrint();
    veggies.veggiesPrint();
    sandwich.printOrderButton();
    sandwich.submitButton();
};
init();