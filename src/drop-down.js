export { createDropdown };

import "./drop-down.css";

function createDropdown(id, callback, placeholder, data) {
    // Create the outer container
    const container = document.createElement("div");
    container.id = id;

    // Create the input box
    const input = document.createElement("div");
    input.classList = "dropdown-input dropdown-placeholder";
    input.textContent = placeholder;

    // Create a panel to house the data items
    const panel = document.createElement("div");
    panel.classList = "dropdown-panel hide";

    // Toggle the panel visibility when the input is clicked
    input.addEventListener("click", () => {
        // Close the panel of all other dropdowns when this
        // one is opened
        const allPanels = document.querySelectorAll(".dropdown-panel");
        allPanels.forEach(somePanel => {
            if (panel !== somePanel) {
                somePanel.classList.add("hide");
            }
        });

        // Toggle the visibility of this panel
        panel.classList.toggle("hide");
    })

    // Iterate through the data array and add each item to
    // the panel
    data.forEach((option) => {
        const optionItem = document.createElement("div");
        optionItem.classList.add("dropdown-item");
        optionItem.textContent = option;
        optionItem.addEventListener("click", () => {
            // If a callback was provided, call it.
            if (callback) {
                callback(option);
            }

            // Remove the placeholder styling of the input
            input.classList.remove("dropdown-placeholder");

            // Update the text of the input
            input.textContent = option;

            // Hide the panel
            panel.classList.toggle("hide");
        });
        panel.appendChild(optionItem);
    });

    // Add the elements to the container
    container.appendChild(input);
    container.appendChild(panel);

    return container;
}