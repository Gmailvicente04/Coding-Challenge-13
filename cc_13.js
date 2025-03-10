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

