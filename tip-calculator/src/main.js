import './style.css'


let billInput = document.getElementById("bill");
let peopleInput = document.getElementById("people");
let tip = 0;

// elements to display result
const tipAmount = document.getElementById("tipAmount");
const tipPerPerson = document.getElementById("tipPerPerson");

// tip buttons container
const tipPercent = document.querySelector(".tippercent");

// WHEN TIP BUTTON IS CLICKED
tipPercent.addEventListener("click", getTip);
tipPercent.addEventListener("input", getTip);

// WHEN BILL OR PEOPLE CHANGE
billInput.addEventListener("input", autoCalc);
peopleInput.addEventListener("input", autoCalc);

function getTip(event) {
    let target = event.target;

    // button 
    if (target.classList.contains("tip") && target.tagName === "DIV") {
        tip = parseInt(target.innerText.replace("%", ""));
        autoCalc();
    }

    // the custom input
    if (target.tagName === "INPUT" && target.classList.contains("tip")) {
        tip = parseFloat(target.value) || 0;
        autoCalc();
    }
}

function autoCalc() {
    let bill = parseFloat(billInput.value) || 0;
    let numPeople = parseInt(peopleInput.value) || 1;

    calculateTip(tip, numPeople, bill);
}

function calculateTip(tip, numPeople, bill) {
    let tipAmountValue = (bill * tip) / 100;
    let perPersonValue = tipAmountValue / numPeople;

    tipAmount.innerText = "$" + tipAmountValue.toFixed(2);
    tipPerPerson.innerText = "$" + perPersonValue.toFixed(2);
}

const tip1 = document.getElementById("tip1").value;
 const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', () => {
    billInput.value = '';
    numPeople.value = '';
    tip1 = '';
    tipPerPerson.innerText = "$" + 0.00;
     tipAmount.innerText = "$" + 0.00;
  });