import utilities from '../helpers/utilities.js';


const condiments = [
    {id: "condiments1", name: "mayo", price: .50},
    {id: "condiments2", name: "olive oil", price: .30},
    {id: "condiments3", name: "vinegar", price: 0.0},
    {id: "condiments4", name: "salt & pepper", price: 0.0},
    {id: "condiments5", name: "sriracha", price: .15},

];

const getSelectedCondiments = () => {
    const selectedCondiments = [];
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    for(let j = 0; j < condimentCheckboxes.length; j++){
        for(let k = 0; k < condiments.length; k++){
          if(condimentCheckboxes[j].checked && condimentCheckboxes[j].id === condiments[k].id){
            selectedCondiments.push(condiments[k]);
          }
        }
      }
      return selectedCondiments;
}

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


export default { condimentsPrint, getSelectedCondiments };