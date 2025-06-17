function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let result = document.getElementById("result");

  if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
    result.textContent = "Enter valid numbers.";
    result.style.color = "red";
    return;
  }

  let bmi = weight / (height * height);
  let message = "";

  if (bmi < 16) {
    message = "Severely underweight";
  } else if (bmi < 18.5) {
    message = "Underweight";
  } else if (bmi < 25) {
    message = "Normal";
  } else if (bmi < 30) {
    message = "Overweight";
  } else {
    message = "Obese";
  }

  result.textContent = `Your BMI is ${bmi.toFixed(2)}: ${message}`;
  result.style.color = "black";
}
