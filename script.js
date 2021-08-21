/**
 * Memory,Storage,Delivery choices cost are return separetely and for addition this function will be use.
 */
function costOfChoice(typeOfChoice) {
  return parseInt(document.getElementById(typeOfChoice + "-cost").innerText);
}
// Here addition total-price and set this total-price value into final-price also return the value.
function totalPrice() {
  let bestPrice = document.getElementById("best-price");
  let bestPriceValue = parseInt(bestPrice.innerText);
  let totalPrice = document.getElementById("total-price");
  totalPrice.innerText =
    bestPriceValue +
    costOfChoice("memory") +
    costOfChoice("storage") +
    costOfChoice("delivery");

  return (document.getElementById("final-total").innerText =
    totalPrice.innerText);
}

/* /
  All type of choice selecting Functions with price are calling from HTML file by using onclick,also updating value eveywhere.
* */
function selectingChoice(choice, price) {
  document.getElementById(choice + "-cost").innerText = price;
  totalPrice();
}

// In this function checking input if it is stevekaku or not.
function checkInputValue() {
  let getTheTotalprice = (document.getElementById("total-price").innerText);
  let totalFinal = document.getElementById("final-total");
  let cuponInput = document.getElementById("cupon-input");

  let totalFinalOfferValue =
    parseInt(getTheTotalprice) - parseInt(getTheTotalprice) * (20 / 100);
  if (cuponInput.value === "stevekaku") {
    totalFinal.innerText = totalFinalOfferValue;
    cuponInput.value = "";
  }
}
// By clicking this apply button it will check and give 20% off and upadate the final-price only.
document.getElementById("apply-btn").addEventListener("click", function () {
  checkInputValue();
});
