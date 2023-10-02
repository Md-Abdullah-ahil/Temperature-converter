let celInput = document.querySelector(".celcius > input");
let farInput = document.querySelector(".fahrenheit > input");
let kelInput = document.querySelector(".kelvin > input");

let btn = document.getElementById("reset");

function roundNum(number) {
  return Math.round(number * 100) / 100;
}

celInput.addEventListener("input", function () {
  let cTemp = parseFloat(celInput.value);
  let fTemp = cTemp * (9 / 5) + 32;
  let kTemp = cTemp + 273.15;

  farInput.value = roundNum(fTemp);
  kelInput.value = roundNum(kTemp);
});

farInput.addEventListener("input", function () {
  let fTemp = parseFloat(farInput.value);
  let cTemp = (fTemp - 32) * (5 / 9);
  let kTemp = cTemp + 273.15;

  celInput.value = roundNum(cTemp);
  kelInput.value = roundNum(kTemp);
});

kelInput.addEventListener("input", function () {
  let kTemp = parseFloat(kelInput.value);
  let cTemp = kTemp - 273.15;
  let fTemp = cTemp * (9 / 5) + 32;

  celInput.value = roundNum(cTemp);
  farInput.value = roundNum(fTemp);
});

btn.addEventListener("click", () => {
  celInput.value = "";
  farInput.value = "";
  kelInput.value = "";
});
