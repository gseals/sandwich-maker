import utilities from '../helpers/utilities.js';

const breads = [
    {id: "bread1", name: "white", price: 50},
    {id: "bread2", name: "italian", price: 90},
    {id: "bread3", name: "wheat", price: 500},
    {id: "bread4", name: "whole-grain wheat", price: 0},
    {id: "bread5", name: "honey wheat", price: 5},

];

// const getSelectedBreads = () => {
//     const selectedBread = [];
//     const breadCheckboxes = document.getElementsByClassName('cheese');
//     for(let j = 0; j < cheeseCheckboxes.length; j++){
//         for(let k = 0; k < cheeses.length; k++){
//           if(cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses[k].id){
//             selectedCheeses.push(cheeses[k]);
//           }
//         }
//       }
//       return selectedCheeses;
// }

const breadPrint = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++)
    domString += `
    <div class="form-group form-check">
    <input type="radio" class="form-check-input bread" name=breads id="${breads[i].id}">
    <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
    </div>
    `
    utilities.printToDom('bread-zone', domString);
};


export default { breadPrint };