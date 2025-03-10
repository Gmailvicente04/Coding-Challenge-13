// Task 1: Creating the Base Structure
// This script assumes an HTML file with a main section containing an #employeeContainer
document.body.innerHTML = `
  <header>
    <h1>Employee Dashboard</h1>
  </header>
  <main>
    <div id="employeeContainer"></div>
  </main>
  <footer>
    <p>&copy; 2025 Employee Management</p>
  </footer>
`;

// Test case: Check if the employeeContainer exists
console.assert(document.getElementById("employeeContainer"), "Test Failed: employeeContainer not found");


// Task 2: Adding Employee Cards Dynamically
function addEmployeeCard(name, position) {
    const container = document.getElementById("employeeContainer");
    const card = document.createElement("div");
    card.classList.add("employee-card");
    
    const heading = document.createElement("h3");
    heading.textContent = name;
    
    const para = document.createElement("p");
    para.textContent = position;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => container.removeChild(card));
    
    card.appendChild(heading);
    card.appendChild(para);
    card.appendChild(removeButton);
    container.appendChild(card);
}

// Test case: Add a sample employee card
addEmployeeCard("Vicente Oswald", "Operations Analyst");
console.assert(document.querySelector(".employee-card"), "Test Failed: Employee card not added");

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightCards() {
    const cards = Array.from(document.querySelectorAll(".employee-card"));
    cards.forEach(card => card.classList.add("highlight"));
}

// Test case: Check if highlight class is added
highlightCards();
console.assert(document.querySelector(".employee-card.highlight"), "Test Failed: Highlight not applied");

// Task 4: Implementing Removal of Employee Cards with Event Bubbling
document.getElementById("employeeContainer").addEventListener("click", (event) => {
    if (event.target.classList.contains("employee-card")) {
        console.log("Employee card clicked");
    }
});

// Modify remove button event to use stopPropagation
function addEmployeeCardWithBubbling(name, position) {
    const container = document.getElementById("employeeContainer");
    const card = document.createElement("div");
    card.classList.add("employee-card");
    
    const heading = document.createElement("h3");
    heading.textContent = name;
    
    const para = document.createElement("p");
    para.textContent = position;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", (e) => {
        e.stopPropagation();
        container.removeChild(card);
    });
    
    card.appendChild(heading);
    card.appendChild(para);
    card.appendChild(removeButton);
    container.appendChild(card);
}

// Test case: Click event should log message unless removed
addEmployeeCardWithBubbling("Francisca Oswald", "Project Manager");

// Task 5: Inline Editing of Employee Details
function enableInlineEditing(card) {
    card.addEventListener("dblclick", () => {
        const nameElement = card.querySelector("h3");
        const positionElement = card.querySelector("p");
        
        const nameInput = document.createElement("input");
        nameInput.value = nameElement.textContent;
        
        const positionInput = document.createElement("input");
        positionInput.value = positionElement.textContent;
        
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        
        saveButton.addEventListener("click", () => {
            nameElement.textContent = nameInput.value;
            positionElement.textContent = positionInput.value;
            
            card.replaceChild(nameElement, nameInput);
            card.replaceChild(positionElement, positionInput);
            card.removeChild(saveButton);
        });
        
        card.replaceChild(nameInput, nameElement);
        card.replaceChild(positionInput, positionElement);
        card.appendChild(saveButton);
    });
}

// Apply inline editing to existing cards
document.querySelectorAll(".employee-card").forEach(enableInlineEditing);

// Test case: Double-clicking should allow editing
console.assert(document.querySelector(".employee-card"), "Test Failed: No employee card to edit");
