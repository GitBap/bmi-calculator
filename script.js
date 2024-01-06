// bmi formmula: weight/height squared * 703

function calculateBmi() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi = (weight / (height * height)) * 703;

  document.getElementById("bmiOutput").innerHTML = "Your bmi is" + " " + bmi;
}
