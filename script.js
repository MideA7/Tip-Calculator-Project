const amountInput = document.getElementById("amountInput");
const calcBtn = document.getElementById("calcBtn");
const tip = document.getElementById("tip");
const splitInput = document.getElementById("splitInput");
const tipInput = document.getElementById("tipInput");
const totalAmount = document.getElementById("totalAmount");
const splitBill = document.getElementById("splitBill");
const lastBill = document.getElementById("lastBill");

//Load from local storage
let savedBill = JSON.parse(localStorage.getItem("bill")) || null;
//only render if somethin is stored
if (savedBill) {
  renderPage();
}

//calculate bill and save in local storage
calcBtn.addEventListener("click", () => {
  const tipPercentage = Number(tipInput.value);
  const splitBy = Number(splitInput.value);
  const billAmount = Number(amountInput.value);

  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter a valid Bill Amount");
    return;
  }

  if (splitBy <= 0) {
    alert("Please enter valid number");
    return;
  }

  const tipAmount = (billAmount * tipPercentage) / 100;
  const finalTotalAmount = billAmount + tipAmount;
  const splitBillAmount = finalTotalAmount / splitBy;

  savedBill = {
    finalTotalAmount,
    tipAmount,
    splitBillAmount,
  };

  localStorage.setItem("bill", JSON.stringify(savedBill));
  renderPage();
});


//function to display last bill on page
function renderPage() {
  lastBill.innerText = "Last Bill:";
  tip.innerText = `Tip: $${savedBill.tipAmount.toFixed(2)}`;
  totalAmount.innerText = `Total: $${savedBill.finalTotalAmount.toFixed(2)}`;
  splitBill.innerText = `Each pay: $${savedBill.splitBillAmount.toFixed(2)}`;
}
