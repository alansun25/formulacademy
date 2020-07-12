function potentialEnergy() {
  var m = document.getElementById("Box1").value;
  var h = document.getElementById("Box2").value;
  if (m.trim() != '' && h.trim() != '') {
  var ans = m*h*9.8;
  ans = parseFloat(ans).toFixed(3);
  ans= ans + " J";
 } else {
    answer = "Error: You must enter values for two variables.";
  }
  document.getElementById('answer').textContent = ans;
  document.getElementById('Box1').value = '';
  document.getElementById('Box2').value='';
}
