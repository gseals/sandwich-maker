import utilities from '../helpers/utilities.js';

const meats = [
    {id: "meats1", name: "shaved turkey", price: 50},
    {id: "meats2", name: "tuna", price: 90},
    {id: "meats3", name: "ham", price: 500},
    {id: "meats4", name: "pork", price: 0},
    {id: "meats5", name: "chicken", price: 5},

];

// const getSelectedBreads = () => {
//     const selectedBread = [];
//     const breadCheckboxes = document.getElementsByClassName('cheese');
//     for(let j = 0; j < cheeseCheckboxes.length; j++){
//         for(let k = 0; k < meats.length; k++){
//           if(cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === meats[k].id){
//             selectedmeats.push(meats[k]);
//           }
//         }
//       }
//       return selectedmeats;
// }

const meatsPrint = () => {
    let domString = '';
    for (let i = 0; i < meats.length; i++)
    domString += `
    <div class="form-group form-check">
    <input type="checkbox" class="form-check-input meat" name=meats id="${meats[i].id}">
    <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
    </div>
    `
    utilities.printToDom('meat-zone', domString);
};


export default { meatsPrint };