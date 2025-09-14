// Part 2: Functions with scope, parameters, return values

// Global variable
let globalMultiplier = 2;

// Function that takes parameters and returns a value
function multiplyNumbers(a, b) {
  let result = a * b * globalMultiplier; // uses global + local scope
  return result;
}

function showCalculation() {
  let value = multiplyNumbers(5, 3); // calling with params
  document.getElementById("result").textContent = value;
}

// Part 3: Combining JS + CSS Animations

// Animate box by toggling a class
function animateBox() {
  let box = document.getElementById("magic-box");
  box.classList.toggle("animate");
}

// Toggle modal visibility
function toggleModal() {
  let modal = document.getElementById("modal");
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}
