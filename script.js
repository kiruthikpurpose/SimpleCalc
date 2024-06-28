// Function to clear the display
function clearDisplay() {
  document.getElementById('result').value = '';
}

// Function to append characters to the display
function appendToDisplay(value) {
  document.getElementById('result').value += value;
}

// Function to delete the last character
function deleteLast() {
  let currentValue = document.getElementById('result').value;
  document.getElementById('result').value = currentValue.slice(0, -1);
}

// Function to perform calculations
function calculate() {
  try {
    const expression = document.getElementById('result').value;
    const result = eval(expression); // Using eval for simplicity, consider safer alternatives in production
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
