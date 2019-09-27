import utilities from '../helpers/utilities.js';


const cheeses = [
    {id: "cheese1", name: "provolone", price: 50},
    {id: "cheese2", name: "cheddar", price: 90},
    {id: "cheese3", name: "american", price: 500},
    {id: "cheese4", name: "pepper jack", price: 0},
    {id: "cheese5", name: "swiss", price: 5},

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

const cheesePrint = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++)
    domString += `
    <div class="form-group form-check">
    <input type="checkbox" class="form-check-input cheese" name=cheeses id="${cheeses[i].id}">
    <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
    </div>
    `
    utilities.printToDom('cheese-zone', domString);
};




export default { cheesePrint };