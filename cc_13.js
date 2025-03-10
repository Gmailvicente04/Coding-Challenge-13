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