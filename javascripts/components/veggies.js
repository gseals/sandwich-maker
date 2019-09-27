import utilities from '../helpers/utilities.js';

const veggies = [
    {id: "veggies1", name: "spinach", price: 50},
    {id: "veggies2", name: "tomato", price: 90},
    {id: "veggies3", name: "green pepper", price: 500},
    {id: "veggies4", name: "onion", price: 0},
    {id: "veggies5", name: "jalapeño", price: 5},

];

// const getSelectedBreads = () => {
//     const selectedBread = [];
//     const breadCheckboxes = document.getElementsByClassName('cheese');
//     for(let j = 0; j < cheeseCheckboxes.length; j++){
//         for(let k = 0; k < veggies.length; k++){
//           if(cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === veggies[k].id){
//             selectedveggies.push(veggies[k]);
//           }
//         }
//       }
//       return selectedveggies;
// }

const veggiesPrint = () => {
    let domString = '';
    for (let i = 0; i < veggies.length; i++)
    domString += `
    <div class="form-group form-check">
    <input type="checkbox" class="form-check-input veggie" name=veggies id="${veggies[i].id}">
    <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name}</label>
    </div>
    `
    utilities.printToDom('veggies-zone', domString);
};


export default { veggiesPrint };