function taxMultiplier() {
  var i = document.getElementById("Box1").value;
  var j = document.getElementById("Box2").value;
  if (i.trim() != '' && j.trim() != '') {
    var ans = -(i/j);
    ans = parseFloat(ans).toFixed(3);
 } else {
    answer = "Error: You must enter values for two variables.";
  }
  document.getElementById('answer').textContent = ans;
  document.getElementById('Box1').value = '';
  document.getElementById('Box2').value='';
}
