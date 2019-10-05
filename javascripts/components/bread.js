import utilities from '../helpers/utilities.js';

const breads = [
    {id: "bread1", name: "white", price: 5.00},
    {id: "bread2", name: "italian", price: 9.00},
    {id: "bread3", name: "wheat", price: 5.00},
    {id: "bread4", name: "whole-grain wheat", price: 2.00},
    {id: "bread5", name: "honey wheat", price: 3.00},

];

const getSelectedBreads = () => {
    const selectedBreads = [];
    const breadCheckboxes = document.getElementsByClassName('bread');
    for(let j = 0; j < breadCheckboxes.length; j++){
        for(let k = 0; k < breads.length; k++){
          if(breadCheckboxes[j].checked && breadCheckboxes[j].id === breads[k].id){
            selectedBreads.push(breads[k]);
          }
        }
      }
      return selectedBreads;
}

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


export default { breadPrint, getSelectedBreads };