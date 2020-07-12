function RuleOf72() {
  var i = document.getElementById("Box1").value;
  if (i > 1) {
    var ans = "Please enter a valid interest rate (a decimal number ≤ 1)."
  } else {
    var ans = parseFloat(72 / i).toFixed(3);
  }
  document.getElementById('answer').textContent = ans;
  document.getElementById('Box1').value = '';
}
