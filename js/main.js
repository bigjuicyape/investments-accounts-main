// Investment Accounts Start Code

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let maxDataVal = 5000; // max data value

// *****************************************************
// INITIALIZE ACCOUNTS ARRAY
// *****************************************************
let accounts = [];
for (let i = 0; i < 50; i++) {
  accounts.push(Math.round(Math.random() * 5000));
}
// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function deposit() {
  let accNum = +prompt("account #") - 1;
  let deposit = +prompt("How much would you like to deposit?");
  if (deposit > 0) {
    accounts[accNum] += deposit;
    outputEl.innerHTML = `deposit succesful`;
  }
  if (accounts[accNum] > maxDataVal) {
    maxDataVal += accounts[accNum] -= maxDataVal;
  }
}

function withdrawal() {
  let accNum = +prompt("account #") - 1;
  let withdraw = +prompt("How much would you like to withdraw?");
  if (withdraw > 0 && accounts[accNum] >= withdraw) {
    accounts[accNum] -= withdraw;
    outputEl.innerHTML = `withdrawal succesful`;
  }
}

function countUnder2000() {
  let brokies = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      brokies++;
    }
  }
  outputEl.innerHTML = `${brokies} accounts under 2000$`;
}

function generousDonor() {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      accounts[i] += 500;
    }
  }
  outputEl.innerHTML = "Generous Donor";
}

function hackerAttack() {
  for (let i = 0; i < accounts.length; i++) {
    accounts[i] *= 0.95;
  }

  outputEl.innerHTML = "Hacker Attack";
}

// ******************************************************
// END OF MENU SELECTION FUNCTIONS
// ******************************************************

// Display Data
drawArray(accounts, maxDataVal);

// Main Menu & Go Button
document.getElementById("go-btn").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu-select").value;

  // Take action based on menu selection
  if (selection === "deposit") {
    deposit();
  } else if (selection === "withdrawal") {
    withdrawal();
  } else if (selection === "count") {
    countUnder2000();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "attack") {
    hackerAttack();
  }

  // Redraw array to show any changes
  drawArray(accounts, maxDataVal);
}

// DRAW ARRAY FUNCTION
// Function to draw current state of grades array
function drawArray(array, maxVal) {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < array.length; i++) {
    divHeight = (array[i] / maxVal) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  document.getElementById("container").innerHTML = outputStr;
}
