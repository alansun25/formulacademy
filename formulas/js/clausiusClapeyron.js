function clausiusClapeyron() {
  var answer;
  var temp1 = document.getElementById("temp1Box").value;
  var temp2 = document.getElementById("temp2Box").value;
  var pressure1 = document.getElementById("pressure1Box").value;
  var pressure2 = document.getElementById("pressure2Box").value;
  var deltaHVap = document.getElementById("deltaHVapBox").value;


  if (temp1.trim() == '' && temp2.trim() != '' && pressure1.trim() != ''
   && pressure2.trim() != '' && deltaHVap.trim() != '') {
    deltaHVap = deltaHVap * 1000;
    answer = Math.log(pressure2 / pressure1) * (8.314 / -deltaHVap) - 1/temp2;
    answer = -1/answer;
    answer = parseFloat(answer).toFixed(3);
    answer = "Temperature 1 = " + answer + " K";
  }
   else if (temp2.trim() == '' && temp1.trim() != '' && pressure1.trim() != ''
   && pressure2.trim() != '' && deltaHVap.trim() != '') {
    deltaHVap = deltaHVap * 1000;
    answer = Math.log(pressure2 / pressure1) * (8.314 / -deltaHVap) + 1/temp1;
    answer = 1/answer;
    answer = parseFloat(answer).toFixed(3);
    answer = "Temperature 2 = " + answer + " K";
  }
  else if (pressure1.trim() == '' && temp2.trim() != '' && temp1.trim() != ''
   && pressure2.trim() != '' && deltaHVap.trim() != '') {
    deltaHVap = deltaHVap * 1000;
    answer = ((deltaHVap / (8.314)) * (1/temp2 - 1/temp1)) + Math.log(pressure2);
    answer = Math.exp(answer);
    answer = parseFloat(answer).toFixed(3);
    answer = "Pressure 1 = " + answer + " atm";
  }
   else if (pressure2.trim() == '' && temp2.trim() != '' && pressure1.trim() != ''
   && temp1.trim() != '' && deltaHVap.trim() != '') {
    deltaHVap = deltaHVap * 1000;
    answer = ((-deltaHVap / (8.314)) * (1/temp2 - 1/temp1)) + Math.log(pressure1);
    answer = Math.exp(answer);
    answer = parseFloat(answer).toFixed(3);
    answer = "Pressure 2 = " + answer + " atm";
  }
   else if (deltaHVap.trim() == '' && temp2.trim() != '' && pressure1.trim() != ''
   && pressure2.trim() != '' && temp1.trim() != '') {
    answer = (Math.log(pressure2/pressure1)) * 8.314;
    answer = answer / (1/temp1 - 1/temp2);
    answer = answer * -0.001;
    answer = parseFloat(answer).toFixed(3);
    answer = "Enthalpy of Vaporization = " + answer + " kJ/mol";
  }
  else {
    answer = "Error: You must enter values for four variables.";
  }

  document.getElementById('answer').textContent =
  answer;
  document.getElementById('temp1Box').value = '';
  document.getElementById('temp2Box').value = '';
  document.getElementById('pressure1Box').value = '';
  document.getElementById('pressure2Box').value = '';
  document.getElementById('deltaHVapBox').value = '';
}
