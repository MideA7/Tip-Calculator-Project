const amountInput = document.getElementById("amountInput");
const calcBtn = document.getElementById("calcBtn");
const tip = document.getElementById("tip");

calcBtn.addEventListener("click", () => {
  const billAmount = Number(amountInput.value) * .15;
  console.log(billAmount);
  tip.innerText = `Tip: $${billAmount.toFixed(2)}`;
});
