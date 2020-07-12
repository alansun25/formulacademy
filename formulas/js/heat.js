function heatEquation() {
  var answer;
  var heat = document.getElementById("heatBox").value;
  var mass = document.getElementById("massBox").value;
  var specificHeat = document.getElementById("specificHeatBox").value;
  var deltaT = document.getElementById("deltaTBox").value;

  if (heat.trim() == '' && mass.trim() != ''
  && specificHeat.trim() != '' && deltaT.trim() != '') {
    answer = parseFloat(mass) * specificHeat * deltaT;
    answer = parseFloat(answer).toFixed(3);
    answer = "Heat = " + answer + " J";
  }
  else if (mass.trim() == '' && heat.trim() != ''
  && specificHeat.trim() != '' && deltaT.trim() != '') {
    answer = heat / (specificHeat * deltaT);
    answer = parseFloat(answer).toFixed(3);
    answer = "Mass = " + answer + " g";
  }
  else if (specificHeat.trim() == '' && heat.trim() != ''
  && mass.trim() != '' && deltaT.trim() != '') {
    answer = heat / (mass * deltaT);
    answer = parseFloat(answer).toFixed(3);
    answer = "Specific Heat Capacity = " + answer + " J/g*K";
  }
  else if (deltaT.trim() == '' && heat.trim() != ''
  && specificHeat.trim() != '' && mass.trim() != '') {
    answer = heat / (specificHeat * mass);
    answer = parseFloat(answer).toFixed(3);
    answer = "Change in Temperature = " + answer + " K";
  }
  else {
    answer = "Error: You must enter values for three variables.";
  }

  document.getElementById('answer').textContent =
  answer;
  document.getElementById('heatBox').value = '';
  document.getElementById('massBox').value = '';
  document.getElementById('specificHeatBox').value = '';
  document.getElementById('deltaTBox').value = '';
}
