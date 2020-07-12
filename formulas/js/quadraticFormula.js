function quadraticFormula() {
  var i = document.getElementById("Box1").value;
  var j = document.getElementById("Box2").value;
  var k = document.getElementById("Box3").value;
  if (i.trim() != '' && j.trim() != ''
  && k.trim() != '') {
  var ans1 = (-j+Math.pow(Math.pow(j,2)-4*i*k,1/2))/2/i;
  var ans2 = (-j-Math.pow(Math.pow(j,2)-4*i*k,1/2))/2/i;
  } else {
    answer = "Error: You must enter values for three variables.";
  }
  document.getElementById('answer1').textContent = ans1;
  document.getElementById('answer2').textContent = ans2;
  document.getElementById('Box1').value = '';
  document.getElementById('Box2').value='';
  document.getElementById('Box3').value='';
}
