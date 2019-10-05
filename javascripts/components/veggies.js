import utilities from '../helpers/utilities.js';

const veggies = [
    {id: "veggies1", name: "spinach", price: 1.00},
    {id: "veggies2", name: "tomato", price: 1.00},
    {id: "veggies3", name: "green pepper", price: 1.00},
    {id: "veggies4", name: "onion", price: 1.00},
    {id: "veggies5", name: "jalapeño", price: .50},

];

const getSelectedVeggies = () => {
    const selectedVeggies = [];
    const veggieCheckboxes = document.getElementsByClassName('veggie');
    for(let j = 0; j < veggieCheckboxes.length; j++){
        for(let k = 0; k < veggies.length; k++){
          if(veggieCheckboxes[j].checked && veggieCheckboxes[j].id === veggies[k].id){
            selectedVeggies.push(veggies[k]);
          }
        }
      }
      return selectedVeggies;
}

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


export default { veggiesPrint, getSelectedVeggies };