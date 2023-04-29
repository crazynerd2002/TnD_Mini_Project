function roundToDecimal(num, decimalPlaces) {
  return num.toFixed(decimalPlaces);
}


let distance;
let distanceAB;
let distanceBC;
let distanceCA;

const distanceInputsDiv = document.getElementById("distanceInputs");

// Add event listener to type of system radio buttons
const systemTypeInputs = document.getElementsByName("type_of_system");
for (let i = 0; i < systemTypeInputs.length; i++) {
  systemTypeInputs[i].addEventListener("click", generateDistanceInputs);
}

// Generate distance input fields based on system type
function generateDistanceInputs() {
  const systemType = document.querySelector('input[name="type_of_system"]:checked').value;
  if (systemType === "symmetrical") {
    distanceInputsDiv.innerHTML = `<label for="distance">Distance between phase lines:</label>
                                    <input type="number" id="distance" name="distance" min="0"><br>`;
  } else if (systemType === "asymmetrical") {
    distanceInputsDiv.innerHTML = `<label for="distanceAB">Distance between A and B phase lines:</label>
                                    <input type="number" id="distanceAB" name="distanceAB" min="0"><br>
                                    <label for="distanceBC">Distance between B and C phase lines:</label>
                                    <input type="number" id="distanceBC" name="distanceBC" min="0"><br>
                                    <label for="distanceCA">Distance between C and A phase lines:</label>
                                    <input type="number" id="distanceCA" name="distanceCA" min="0"><br>`;
  }
}



// let geometricMean = 0;
// let numConductors = 0;
// const conductorInputsDiv = document.getElementById("conductorInputs");
// const numConductorsInput = document.getElementById("numConductors");
// const conductorInputs = document.getElementById("conductorInputs");

// document.getElementById("numConductors").addEventListener("input", function () {
//   const numConductors = parseInt(this.value);
//   if (isNaN(numConductors) || numConductors < 1) {
//     conductorInputsDiv.innerHTML = "";
//     return;
//   }
//   let conductorInputsHTML = "";
//   for (let i = 1; i <= numConductors; i++) {
//     conductorInputsHTML += `<label for="conductor${i}">Conductor ${i} Distance:</label>
//     <input type="number" id="conductor${i}" name="conductor${i}" min="0"><br>`;
//   }
//   conductorInputsDiv.innerHTML = conductorInputsHTML;
// });



// // Add event listener to number of conductors input
// numConductorsInput.addEventListener("input", function () {
//   const numConductors = parseInt(numConductorsInput.value);
//   if (isNaN(numConductors) || numConductors < 1) {
//     return;
//   }
//   // Remove existing conductor inputs
//   conductorInputsDiv.innerHTML = "";
//   // Add new conductor inputs
//   for (let i = 1; i <= numConductors; i++) {
//     const label = document.createElement("label");
//     label.for = `conductor${i}`;
//     label.textContent = `Conductor ${i} Distance:`;
//     conductorInputsDiv.appendChild(label);
//     const conductorInput = document.createElement("input");
//     conductorInput.type = "number";
//     conductorInput.id = `conductor${i}`;
//     conductorInput.name = `conductor${i}`;
//     conductorInput.min = "0";
//     conductorInput.addEventListener("input", calculateGeometricMean);
//     conductorInputs.appendChild(conductorInput);
//   }
// });

// // Calculate geometric mean when any conductor input is changed
// function calculateGeometricMean() {
//   const numConductors = parseInt(numConductorsInput.value);
//   if (isNaN(numConductors) || numConductors < 1) {
//     return;
//   }
//   let product = 1;
//   let numValues = 0;
//   for (let i = 1; i <= numConductors; i++) {
//     const conductorDistance = parseFloat(document.getElementById(`conductor${i}`).value);
//     if (!isNaN(conductorDistance) && conductorDistance >= 0) {
//       product *= conductorDistance;
//       numValues++;
//     }
//   }
//   geometricMean = Math.pow(product, 1 / (numConductors * numConductors));
//   // document.getElementById("geometricMeanResult").textContent = `The geometric mean is: ${geometricMean}`;
//   // alert(`The geometric mean of the conductor distances is: ${geometricMean}`);
//   // console.log(geometricMean);

// }

function calculateValues(event) {
  event.preventDefault();


  var capacitance;
  // Get user inputs
  var typeOfSystem = document.getElementsByName('type_of_system');
  // var numberOfConductors = document.getElementById("numberOfConductorsperbundle").value;
  var numberOfStrands = document.getElementById("numberOfStrands").value;
  var d = document.getElementById("diameterOfEachStrand").value;
  var lengthOfLine = document.getElementById("lengthOfLine").value;
  var modelofline = document.getElementsByName('model_of_line');
  var Resistance = document.getElementById("resistanceOfLine").value;
  var freq = document.getElementById("powerFrequency").value;
  var receivingEndVoltage = document.getElementById("nominalSystemVoltage").value;
  var receivingEndLoad = document.getElementById("receivingEndLoad").value;
  var pf = document.getElementById("powerFactor").value;

  //Calculate values
  var pi = 3.141592654;
  // var esi = 8.85*Math.pow(10, -12);
  // console.log(esi)
  var Vrvalue =receivingEndVoltage/ Math.pow(3,1/2) ;
  const Vr = roundToDecimal(Vrvalue,5)
  // var layers = (3 + Math.sqrt(9 + 12 * (numberOfStrands - 1))) / 6;
  // var OverallD = (2 * layers - 1) * d;
  // console.log(layers)
  // var r = OverallD/2;
  // console.log(r) 
  // const r = 0.7788;


  // Number of Conductors
// if(document.getElementById("numConductors").value ==1){
//   var Q = r*0.7788;
//   var sgmd = Math.pow(Q,1);
//   var sgmd1 = Math.pow(Q/0.7788,1);
// }
// else if(document.getElementById("numConductors").value ==2){
//   var Q = r*0.7788*d;
//   var sgmd = Math.pow(Q*Q,1/4);
//   var sgmd1 = Math.pow(Q*Q/(0.7788*0.7788),1/4);
// }
// else if(document.getElementById("numConductors").value ==3){
//   var Q = r*0.7788*d*d;
//   var sgmd = Math.pow(Q*Q*Q,1/9);
//   var sgmd1 = Math.pow(Q*Q*Q/(Math.pow(0.7788,3)),1/9);
// }
// else if(document.getElementById("numConductors").value ==4){
//   var Q = r*0.7788*d*d*d*Math.pow(2,1/2);
//   var sgmd = Math.pow(Q*Q*Q*Q,1/16);
//   var sgmd1 = Math.pow(Q*Q*Q*Q/(Math.pow(0.7788,4)),1/16);
// }
// else if(document.getElementById("numConductors").value ==5){
//   var Q = r*0.7788*d*d*(2*d*0.5878*2*d*0.5878);
//   var sgmd = Math.pow(Q*Q*Q*Q*Q,1/25);
//   var sgmd1 = Math.pow(Q*Q*Q*Q*Q/(Math.pow(0.7788,5)),1/25);
// }
// else if(document.getElementById("numConductors").value ==6){
//   var x = Math.sqrt((d*Math.pow(3,1/2)/2)*(d*Math.pow(3,1/2)/2) + d*d)
//   var Q = r*0.7788*d*d*x*x*((d*Math.pow(3,1/2) + d));
//   var sgmd = Math.pow(Q*Q*Q*Q*Q*Q,1/36);
//   var sgmd1 = Math.pow(Q*Q*Q*Q*Q*Q/(Math.pow(0.7788,6)),1/36);
// }
// console.log(sgmd1)

  // if (typeOfSystem[0].checked) {
  //   distance = parseFloat(document.getElementById("distance").value);
  //   const G = distance;
  //   var inductance = 2 * (Math.pow(10, -4)) * (Math.log(G / (sgmd)));
  //   var capacitance = (2 * esi * pi * Math.pow(10, 3)) / (Math.log(G / (sgmd1)));
  // }
  // else if (typeOfSystem[1].checked) {
  //   distanceAB = document.getElementById("distanceAB").value;
  //   distanceBC = document.getElementById("distanceBC").value;
  //   distanceCA = document.getElementById("distanceCA").value;
  //   const G = Math.pow((distanceAB * distanceBC * distanceCA), 1 / 3);
  //   var inductance = 2 * (Math.pow(10, -4)) * (Math.log(G / (sgmd)));
  //   var capacitance = (2 * esi * pi * Math.pow(10, 3)) / (Math.log(G / (sgmd1)));
  // }
  // var XL = 2 * pi * freq * inductance * lengthOfLine;
  // var XC = (1 / (2 * pi * freq * capacitance* lengthOfLine ));
  // var Y = 1 / XC;
  XL = 0.5*150 , Y = 0.04 * Math.pow(10,-4)*150;
  var R = Resistance * lengthOfLine;
  var z = R*R + XL*XL;
  // var Ichr = Vr*1000*2*pi*freq*capacitance*lengthOfLine;
  var Irvalue = (receivingEndLoad * 1000000) / (Math.sqrt(3)* Math.sqrt(3) * Vr * pf * 1000);
  const Ir = roundToDecimal(Irvalue,5);
  console.log(Ir) 
  var Ir_angle = (180 * Math.acos(pf)) / pi;
  var Ir1 = Ir * pf, Ir2 = Ir * Math.sin(Math.acos(pf));
  if (modelofline[0].checked) {
    var A1 = 1, A2 = 0, C1 = 0, C2 = 0, D1 = 1, D2 = 0;
    var B1 = R, B2 = (XL);
    var Vs1 = Vr + Ir1 * B1 - Ir2 * B2; 
    var Vs2 = Ir1 * B2 + Ir2 * B1;
    var Vs = Math.sqrt(Vs1 * Vs1 + Vs2 * Vs2);
    var Vs_angle = 180*Math.atan(Vs2 / Vs1)/pi;
    var Is1 = Ir1, Is2 = Ir2;
    var Is = Math.sqrt(Is1 * Is1 + Is2 * Is2);
    var Is_angle = 180*Math.atan(Is2 / Is1)/pi;
    var Pin = 3*Vs*Is*Math.cos(Vs_angle - Ir_angle);
    var Ploss = Pin - receivingEndLoad;
  }
  else if (modelofline[1].checked) {
    var A1a = 1 - ((XL*Y)/2), D1 = 1 - ((XL*Y)/2);
    var A2a = (R*Y)/2, D2 = (R*Y)/2;
    var A1 = roundToDecimal(A1a,3);
    var A2 = roundToDecimal(A2a,3);
    var B1 = R , B2 = XL;
    var C1 = -(R*Y*Y)/4;
    var C2 = (Y) -((XL*Y*Y)/4);
    console.log(180*Math.atan(A2/A1)/pi)
    var Vs1v = A1*Vr*1000 + R*Ir1 + XL*Ir2;
    var Vs1 = roundToDecimal(Vs1v,3);
    var Vs2v = A2*Vr*1000 + R*Ir2 - XL*Ir1;
    var Vs2 = roundToDecimal(Vs2v,3)
    var Vs = Math.sqrt(Math.pow(Vs1,2) + Math.pow(Vs2,2));
    var Vs_angle = 180 *Math.atan(-Vs2/Vs1)/pi;
    var Is1 = C1*Vr + A1*Ir1 + A2*Ir2;
    var Is2 = C2*Vr + A1*Ir2 - A2*Ir1;
    var Is = Math.sqrt(Is1*Is1 + Is2*Is2);
    var Is_angle = 180*Math.atan(-Is2/Is1)/pi;
    // var P1 = Ir1 + ((Y*XL*R)/(z)) , P2 = Ir2 - ((Y*R*R*Vr)/z);
    var Pin = 3*Vs*Is*Math.cos(Vs_angle - Ir_angle);
    var Ploss = Pin - receivingEndLoad*1000000;
  }
  console.log(Pin)
  console.log(A1);
  console.log(A2);
  console.log(B1);
  console.log(B2);  
  console.log(C1);
  console.log(C2);
  var voltageRegulation = (((Vs/Math.sqrt(A1*A1 + A2*A2)) - Vr*1000)/(Vr*1000))*100;
  var efficiency = (receivingEndLoad * 1000000) / (Pin) * 100;
  // Set output values
  // document.getElementById("inductance").innerHTML = inductance;
  // document.getElementById("capacitance").innerHTML = capacitance;
  document.getElementById("inductiveReactance").innerHTML = XL;
  // document.getElementById("capacitiveReactance").innerHTML = XC;
  // document.getElementById("chargingcurrent").innerHTML = Ichr;
  document.getElementById("A11").innerHTML = A1;
  document.getElementById("A22").innerHTML = A2;
  document.getElementById("B11").innerHTML = B1;
  document.getElementById("B22").innerHTML = B2;
  document.getElementById("C11").innerHTML = C1;
  document.getElementById("C22").innerHTML = C2;
  document.getElementById("D11").innerHTML = D1;
  document.getElementById("D22").innerHTML = D2;
  document.getElementById("sendingEndCurrent").innerHTML = Is;
  document.getElementById("sendingEndCurrentangle").innerHTML = Is_angle;
  document.getElementById("sendingEndVoltage").innerHTML = Vs;
  document.getElementById("sendingEndVoltageangle").innerHTML = Vs_angle;
  document.getElementById("voltageRegulation").innerHTML = voltageRegulation;
  document.getElementById("ploss").innerHTML = Ploss;
  document.getElementById("eff").innerHTML = efficiency;


  // show popup message
  const popupMessage = document.getElementById("popup-message");
  popupMessage.style.display = "block";

  // hide popup message after 2 seconds
  setTimeout(function () {
    popupMessage.style.display = "none";
  }, 2000);

}
function downloadResults() {
  // Get the result values from the span elements
  const inductance = document.getElementById("inductance").textContent;
  const capacitance = document.getElementById("capacitance").textContent;
  const inductiveReactance = document.getElementById("inductiveReactance").textContent;
  const capacitiveReactance = document.getElementById("capacitiveReactance").textContent;
  const chargingcurrent = document.getElementById("chargingcurrent").textContent;
  const sendingEndVoltage = document.getElementById("sendingEndVoltage").textContent;
  const sendingEndVoltageangle = document.getElementById("sendingEndVoltageangle").textContent;
  const sendingEndCurrent = document.getElementById("sendingEndCurrent").textContent;
  const sendingEndCurrentangle = document.getElementById("sendingEndCurrentangle").textContent;
  const voltageRegulation = document.getElementById("voltageRegulation").textContent;
  const powerloss = document.getElementById("ploss").textContent;
  const efficiency = document.getElementById("eff").textContent;

  // Combine the result values into a single string
  const resultString = `
  Inductance: ${inductance} 
  Capacitance: ${capacitance} 
  Inductive Reactance: ${inductiveReactance}
  Capacitive Reactance: ${capacitiveReactance}
  Charging Current drawn from the sending end substation: ${chargingcurrent} 
  Sending End Voltage: ${sendingEndVoltage} ${sendingEndVoltageangle} 
  Sending End Current: ${sendingEndCurrent} ${sendingEndCurrentangle} 
  Voltage Regulation: ${voltageRegulation}
  Power Loss: ${powerloss}
  Transmission Effiency: ${efficiency}`;

  // Create a new blob object with the result string as the content
  const blob = new Blob([resultString], { type: "text/plain;charset=utf-8" });

  // Create a new download link element
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "Calculation Results.txt";

  // Append the download link to the document body and trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Clean up by removing the download link from the document body
  document.body.removeChild(downloadLink);
}

