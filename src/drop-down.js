export { createDropdown };

import "./drop-down.css";

function createDropdown(id, callback, placeholder, data) {
    // Create the outer container
    const container = document.createElement("div");
    container.id = id;
    container.classList = "dropdown";

    // Create the input box
    const input = document.createElement("div");
    input.classList = "dropdown-input dropdown-placeholder";
    input.textContent = placeholder;

    // Create an arrow indicator.
    // We are using a triangle character for this
    const arrow = document.createElement("div");
    arrow.classList = "dropdown-arrow";
    arrow.innerText = "\u25BC";

    // Create a slide-down drawer
    const drawer = document.createElement("div");
    drawer.classList = "dropdown-drawer";

    // Create a panel to house the data items
    const panel = document.createElement("div");
    panel.classList = "dropdown-panel hide";

    // Add the panel to the drawer
    drawer.appendChild(panel);

    // Toggle the panel visibility when the input is clicked
    input.addEventListener("click", () => {
        // Close the panel of all other dropdowns when this
        // one is opened
        const allPanels = document.querySelectorAll(".dropdown-panel");
        allPanels.forEach(somePanel => {
            if (panel !== somePanel) {
                // Hide the panel
                somePanel.classList.add("hide");

                // Un-rotate the arrow
                const parentDropDown = somePanel.parentNode.parentNode;
                const someArrow = parentDropDown.querySelector(".dropdown-arrow");
                someArrow.style.transform = "rotate(0deg)";
            }
        });

        // Toggle the visibility of this panel and rotate
        // the arrow indicator
        if (panel.classList.contains("hide")) {
            arrow.style.transform = "rotate(180deg)";
            panel.classList.remove("hide");
        }
        else {
            arrow.style.transform = "rotate(0deg)";
            panel.classList.add("hide");
        }
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

            // Un-rotate the arrow
            arrow.style.transform = "rotate(0deg)";
        });
        panel.appendChild(optionItem);
    });

    // Add the elements to the container
    container.appendChild(input);
    container.appendChild(arrow);
    container.appendChild(drawer);

    return container;
}