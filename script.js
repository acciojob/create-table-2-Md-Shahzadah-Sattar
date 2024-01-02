// script.js

function createTable() {
  // Prompt for the number of rows
  const rowCount = prompt("Input number of rows");
  if (rowCount === null) {
    return; // Exit if the user cancels the prompt
  }

  // Prompt for the number of columns
  const colCount = prompt("Input number of columns");
  if (colCount === null) {
    return; // Exit if the user cancels the prompt
  }

  const table = document.getElementById('myTable');

  // Clear existing table content
  table.innerHTML = '';

  // Create rows and cells
  for (let i = 0; i < rowCount; i++) {
    const row = table.insertRow(i);

    for (let j = 0; j < colCount; j++) {
      const cell = row.insertCell(j);
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
