function gibbsFreeEnergy() {
  var answer;
  var deltaH = document.getElementById("deltaHBox").value;
  var temp = document.getElementById("tempBox").value;
  var deltaS = document.getElementById("deltaSBox").value;
  var deltaG = document.getElementById("deltaGBox").value;

  if (deltaH.trim() == '' && temp.trim() != ''
  && deltaS.trim() != '' && deltaG.trim() != '') {
    deltaS = deltaS * 0.001;
    answer = parseFloat(deltaG) + (temp * deltaS);
    answer = parseFloat(answer).toFixed(3);
    answer = "Delta H = " + answer + " kJ";
  }
  else if (temp.trim() == '' && deltaH.trim() != ''
  && deltaS.trim() != '' && deltaG.trim() != '') {
    deltaS = deltaS * 0.001;
    answer = (deltaH - deltaG) / deltaS;
    answer = parseFloat(answer).toFixed(3);
    answer = "Temperature = " + answer + " K";
  }
  else if (deltaS.trim() == '' && temp.trim() != ''
  && deltaH.trim() != '' && deltaG.trim() != '') {
    answer = (deltaH - deltaG) / temp;
    answer = answer * 1000;
    answer = parseFloat(answer).toFixed(3);
    answer = "Delta S = " + answer + " J/K";
  }
  else if (deltaG.trim() == '' && temp.trim() != ''
  && deltaS.trim() != '' && deltaH.trim() != '') {
    deltaS = deltaS * 0.001;
    answer = deltaH - (temp * deltaS);
    answer = parseFloat(answer).toFixed(3);
    answer = "Delta G = " + answer + " kJ";
  }
  else {
    answer = "Error: You must enter values for three variables.";
  }

  document.getElementById('answer').textContent =
  answer;
  document.getElementById('deltaHBox').value = '';
  document.getElementById('tempBox').value = '';
  document.getElementById('deltaSBox').value = '';
  document.getElementById('deltaGBox').value = '';
}
