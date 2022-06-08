const elsRadioInput = document.querySelectorAll(".radio-input");
const elsCardPrice = document.querySelectorAll(".card-price");

elsRadioInput.forEach(function (elInputRadio) {
  elInputRadio.addEventListener("click", function () {
    if (elInputRadio.value === "annually") {
      elsCardPrice.forEach(function (elCardPrice) {
        elCardPrice.textContent =
          elCardPrice.closest(".card").dataset.priceAnnually;
      });
    } else {
      elsCardPrice.forEach(function (elCardPrice) {
        elCardPrice.textContent =
          elCardPrice.closest(".card").dataset.priceMonthly;
      });
    }
  });
});
