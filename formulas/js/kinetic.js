function kineticEnergy() {
  var m = document.getElementById("Box1").value;
  var v = document.getElementById("Box2").value;
  if (m.trim() != '' && v.trim() != '') {
  var ans = m*Math.pow(v,2)/2;
  ans= ans + " J";
 } else {
    answer = "Error: You must enter values for two variables.";
  }
  document.getElementById('answer').textContent = ans;
  document.getElementById('Box1').value = '';
  document.getElementById('Box2').value='';
}
