function coulombsLaw() {
  var answer;
  var constant = 8.9875517923e9;
  var charge1 = document.getElementById("charge1Box").value;
  var charge2 = document.getElementById("charge2Box").value;
  var distance = document.getElementById("distanceBox").value;
  var force = document.getElementById("electricForceBox").value;

  if (force.trim() == '' && charge1.trim() != ''
  && charge2.trim() != '' && distance.trim() != '') {
    charge1 = charge1 * 0.000001;
    charge2 = charge2 * 0.000001;
    answer = constant * (Math.abs(charge1) * Math.abs(charge2)) / Math.pow(distance, 2);
    answer = parseFloat(answer).toFixed(3);
    answer = "Electric Force Magnitude = " + answer + " Newtons";
    if (charge1 > 0 && charge2 < 0 || charge1 < 0 && charge2 > 0) {
      answer = answer + " (Attractive)";
    }
    else if (charge1 < 0 && charge2 < 0 || charge1 > 0 && charge2 > 0) {
      answer = answer + " (Repulsive)";
    }
  }
  else if (charge1.trim() == '' && force.trim() != '' &&
   charge2.trim() != '' && distance.trim() != '') {
    charge2 = charge2 * 0.000001;
    answer = (Math.abs(force) * Math.pow(distance, 2)) / (Math.abs(charge2) * constant);
    answer = answer * 1000000;
    answer = parseFloat(answer).toFixed(3);
    answer = "Charge 1 Magnitude = " + answer + " microcoulombs";
  }
  else if (charge2.trim() == '' && charge1.trim() != ''
  && force.trim() != '' && distance.trim() != '') {
    charge1 = charge1 * 0.000001;
    answer = (Math.abs(force) * Math.pow(distance, 2)) / (Math.abs(charge1) * constant);
    answer = answer * 1000000;
    answer = parseFloat(answer).toFixed(3);
    answer = "Charge 2 Magnitude = " + answer + " microcoulombs";
  }
  else if (distance.trim() == '' && charge1.trim() != ''
  && charge2.trim() != '' && force.trim() != '') {
    charge1 = charge1 * 0.000001;
    charge2 = charge2 * 0.000001;
    answer = (constant * Math.abs(charge1) * Math.abs(charge2)) / Math.abs(force);
    answer = Math.sqrt(answer);
    answer = parseFloat(answer).toFixed(3);
    answer = "Distance = " + answer + " meters";
  }
  else {
    answer = "Error: You must enter values for three variables.";
  }

  document.getElementById('answer').textContent = answer;
  document.getElementById('charge1Box').value = '';
  document.getElementById('charge2Box').value = '';
  document.getElementById('distanceBox').value = '';
  document.getElementById('electricForceBox').value = '';
}
