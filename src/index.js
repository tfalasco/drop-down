import { createDropdown } from "./drop-down";

import "./styles.css";

document.title = "Dropdowns!";

function loadUpCallback (packAnimal) {
    const loadUpButton = document.querySelector("#button-load");
    loadUpButton.textContent = `Load up the ${packAnimal}`;
}

const dropDownOptions1 = ["Horse", "Donkey", "Mule", "Burro", "Elephant", "Camel", "Cat", "None"];
const callback1 = function(option) {
    console.log(option);
}
const dd1 = createDropdown("dd1", loadUpCallback, "Select pack animal", dropDownOptions1);
const content = document.querySelector("#content");
content.appendChild(dd1);

const dropDownOptions2 = ["Let's go", "Move out", "Hyah!", "Mush"];
const dd2 = createDropdown("dd2", callback1, "Select motivational phrase", dropDownOptions2);
content.appendChild(dd2);
