function futureValue() {
  var i = document.getElementById("Box1").value;
  var j = document.getElementById("Box2").value;
  var z = document.getElementById("Box3").value;
  var y= document.getElementById("Box4").value;
  if (i.trim() != '' && j.trim() != ''&& z.trim() != ''&& y.trim() != '') {
    var ans = i* (Math.pow(1+(j/100/y), z*y));
 } else {
    answer = "Error: You must enter values for four variables.";
  }
  document.getElementById('answer').textContent = ans;
  document.getElementById('Box1').value = '';
  document.getElementById('Box2').value='';
  document.getElementById('Box3').value='';
  document.getElementById('Box4').value='';
}
