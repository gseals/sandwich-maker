import utilities from '../helpers/utilities.js';

const meats = [
    {id: "meats1", name: "shaved turkey", price: 5.00},
    {id: "meats2", name: "tuna", price: 6.00},
    {id: "meats3", name: "ham", price: 4.50},
    {id: "meats4", name: "tofu", price: 3.00},
    {id: "meats5", name: "chicken", price: 3.50},

];

const getSelectedMeats = () => {
    const selectedMeats = [];
    const meatCheckboxes = document.getElementsByClassName('meat');
    for(let j = 0; j < meatCheckboxes.length; j++){
        for(let k = 0; k < meats.length; k++){
          if(meatCheckboxes[j].checked && meatCheckboxes[j].id === meats[k].id){
            selectedMeats.push(meats[k]);
          }
        }
      }
      return selectedMeats;
}

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


export default { meatsPrint, getSelectedMeats };