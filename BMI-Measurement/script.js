const form = document.querySelector("form");
const btn = document.querySelector("#btn");
// console.log(btn)
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `Result: <span>${bmi} 😒</span> Your BMI falls within the underweight range. Please seek Medical Attention`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML = `Result: <span>${bmi} 😊</span> Your BMI falls within the under Healthy Weight range.`;
    } else {
      results.innerHTML = `Result: <span>${bmi} 😖</span> Your BMI falls within the under Over Weight range. Please seek Medical Attention. Your may have underlying health condition.`;
    }
  }
});
