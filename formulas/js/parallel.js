function findCapacitance() {
  var answer;
  var electricConstant = 8.85418782e-12;
  var area = document.getElementById("areaBox").value;
  var distance = document.getElementById("distanceBox").value;
  var dielectricConstant = document.getElementById("dielectricConstantBox").value;
  var capacitance = document.getElementById("capacitanceBox").value;

  if (area.trim() == '' && distance.trim() != ''
  && dielectricConstant.trim() != '' && capacitance.trim() != '') {
    capacitance = capacitance * 0.000000000001;
    distance = distance * 0.01;
    answer = (capacitance * distance) / (dielectricConstant * electricConstant);
    answer = answer * 10000;
    answer = parseFloat(answer).toFixed(3);
    answer = "Area = " + answer + " square cm";
  }
  else if (distance.trim() == '' && area.trim() != ''
  && dielectricConstant.trim() != '' && capacitance.trim() != '') {
    capacitance = capacitance * 0.000000000001;
    area = area * 0.0001;
    answer = (dielectricConstant * electricConstant * area) / capacitance;
    answer = answer * 100;
    answer = parseFloat(answer).toFixed(3);
    answer = "Distance between Plates = " + answer + " cm";
  }
  else if (dielectricConstant.trim() == '' && distance.trim() != ''
  && area.trim() != '' && capacitance.trim() != '') {
    capacitance = capacitance * 0.000000000001;
    area = area * 0.0001;
    distance = distance * 0.01;
    answer = (capacitance * distance) / (electricConstant * area);
    answer = parseFloat(answer).toFixed(3);
    answer = "Dielectric Constant = " + answer;
  }
  else if (capacitance.trim() == '' && distance.trim() != ''
  && area.trim() != '' && dielectricConstant.trim() != '') {
    area = area * 0.0001;
    distance = distance * 0.01;
    answer = (dielectricConstant * electricConstant * area) / distance;
    answer = answer * 1000000000000;
    answer = parseFloat(answer).toFixed(3);
    answer = "Capacitance = " + answer + " picofarads";
  }
  else {
    answer = "Error: You must enter values for three variables.";
  }

  document.getElementById('answer').textContent =
  answer;
  document.getElementById('areaBox').value = '';
  document.getElementById('distanceBox').value = '';
  document.getElementById('dielectricConstantBox').value = '';
  document.getElementById('capacitanceBox').value = '';
}
