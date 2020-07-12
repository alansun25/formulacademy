function hendersonHasselbalchWeakAcid() {
  var answer;
  var pKa = document.getElementById("pKaBox").value;
  var weakAcid = document.getElementById("weakAcidBox").value;
  var conjBase = document.getElementById("conjBaseBox").value;
  var pH = document.getElementById("pHBox").value;


  if (pKa.trim() == '' && pH.trim() != ''&& weakAcid.trim() != '' &&
  conjBase.trim() != '') {
    if (pH < 0 || pH > 14) {
      answer = "Error: pH value must be from 0 to 14."
    }
    else {
      answer = pH - Math.log10(conjBase / weakAcid);
      answer = parseFloat(answer).toFixed(3);
      answer = "pKa = " + answer;
    }
  }
  else if (pH.trim() == '' && pKa.trim() != ''&& weakAcid.trim() != '' &&
  conjBase.trim() != '') {
    answer = parseFloat(pKa) + Math.log10(conjBase / weakAcid);
    answer = parseFloat(answer).toFixed(3);
    answer = "pH = " + answer;
  }
  else if (weakAcid.trim() == '' && pH.trim() != ''&& pKa.trim() != '' &&
  conjBase.trim() != '') {
    if (pH < 0 || pH > 14) {
      answer = "Error: pH value must be from 0 to 14."
    }
    else {
      answer = Math.pow(10, pH - pKa);
      answer = conjBase / answer;
      answer = parseFloat(answer).toFixed(3);
      answer = "Weak Acid Concentration = " + answer + " M";
    }
  }
  else if (conjBase.trim() == '' && pH.trim() != ''&& pKa.trim() != '' &&
  weakAcid.trim() != '') {
    if (pH < 0 || pH > 14) {
      answer = "Error: pH value must be from 0 to 14."
    }
    else {
      answer = Math.pow(10, pH - pKa);
      answer = answer * weakAcid;
      answer = parseFloat(answer).toFixed(3);
      answer = "Conjugate Base Concentration = " + answer + " M";
    }
  }
  else {
    answer = "Error: You must enter values for three variables.";
  }

  document.getElementById('answer1').textContent =
  answer;
  document.getElementById('pKaBox').value = '';
  document.getElementById('weakAcidBox').value = '';
  document.getElementById('conjBaseBox').value = '';
  document.getElementById('pHBox').value = '';

}

function hendersonHasselbalchWeakBase() {
  var answer;
  var pKb = document.getElementById("pKbBox").value;
  var weakBase = document.getElementById("weakBaseBox").value;
  var conjAcid = document.getElementById("conjAcidBox").value;
  var pOH = document.getElementById("pOHBox").value;


  if (pKb.trim() == '' && pOH.trim() != ''&& weakBase.trim() != '' &&
  conjAcid.trim() != '') {
    if (pOH < 0 || pOH > 14) {
      answer = "Error: pOH value must be from 0 to 14."
    }
    else {
      answer = pOH - Math.log10(conjAcid / weakBase);
      answer = parseFloat(answer).toFixed(3);
      answer = "pKb = " + answer;
    }
  }
  else if (pOH.trim() == '' && pKb.trim() != ''&& weakBase.trim() != '' &&
  conjAcid.trim() != '') {
    answer = parseFloat(pKb) + Math.log10(conjAcid/weakBase);
    answer = parseFloat(answer).toFixed(3);
    answer = "pOH = " + answer;
  }
  else if (weakBase.trim() == '' && pKb.trim() != ''&& pOH.trim() != '' &&
  conjAcid.trim() != '') {
    if (pOH < 0 || pOH > 14) {
      answer = "Error: pOH value must be from 0 to 14."
    }
    else {
      answer = Math.pow(10, pOH - pKb);
      answer = conjAcid / answer;
      answer = parseFloat(answer).toFixed(3);
      answer = "Weak Base Concentration = " + answer + " M";
    }
  }
  else if (conjAcid.trim() == '' && pKb.trim() != ''&& pOH.trim() != '' &&
  weakBase.trim() != '') {
    if (pOH < 0 || pOH > 14) {
      answer = "Error: pOH value must be from 0 to 14."
    }
    else {
      answer = Math.pow(10, pOH - pKb);
      answer = answer * weakBase;
      answer = parseFloat(answer).toFixed(3);
      answer = "Conjugate Acid Concentration = " + answer + " M";
    }
  }
  else {
    answer = "Error: You must enter values for three variables.";
  }

  document.getElementById('answer2').textContent =
  answer;
  document.getElementById('pKbBox').value = '';
  document.getElementById('weakBaseBox').value = '';
  document.getElementById('conjAcidBox').value = '';
  document.getElementById('pOHBox').value = '';
}
