import utilities from '../helpers/utilities.js';


const condiments = [
    {id: "condiments1", name: "mayo", price: 50},
    {id: "condiments2", name: "olive oil", price: 90},
    {id: "condiments3", name: "vinegar", price: 500},
    {id: "condiments4", name: "salt & pepper", price: 0},
    {id: "condiments5", name: "sriracha", price: 5},

];

// const getSelectedBreads = () => {
//     const selectedBread = [];
//     const breadCheckboxes = document.getElementsByClassName('cheese');
//     for(let j = 0; j < cheeseCheckboxes.length; j++){
//         for(let k = 0; k < condiments.length; k++){
//           if(cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === condiments[k].id){
//             selectedcondiments.push(condiments[k]);
//           }
//         }
//       }
//       return selectedcondiments;
// }

const condimentsPrint = () => {
    let domString = '';
    for (let i = 0; i < condiments.length; i++)
    domString += `
    <div class="form-group form-check">
    <input type="checkbox" class="form-check-input condiment" name=condiments id="${condiments[i].id}">
    <label class="form-check-label" for="${condiments[i].id}">${condiments[i].name}</label>
    </div>
    `
    utilities.printToDom('condiments-zone', domString);
};


export default { condimentsPrint };