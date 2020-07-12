function inflationRate() {
  var i = document.getElementById("Box1").value;
  var j = document.getElementById("Box2").value;
  if (i.trim() != '' && j.trim() != '') {
    var ans = (j-i)/i*100;
    ans= parseFloat(ans).toFixed(3);
    ans= ans + " %";
 } else {
    answer = "Error: You must enter values for two variables.";
  }
  document.getElementById('answer').textContent = ans;
  document.getElementById('Box1').value = '';
  document.getElementById('Box2').value='';
}
