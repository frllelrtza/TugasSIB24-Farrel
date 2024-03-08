let myVariable = "";







// JavaScript Data Types
function showDataType() {
  const dataType = document.getElementById("dataTypeSelect").value;
  alert("Selected Data Type: " + dataType);
}

// Type Conversion
function convertType() {
  const inputValue = document.getElementById("convertInput").value;
  const convertedValue = Number(inputValue);
  alert("Converted Value: " + convertedValue);
}

// JavaScript Operators
function useOperator() {
  const operatorInput = document.getElementById("operatorInput").value;
  const result = eval(operatorInput);
  alert("Operator Result: " + result);
}

// Popup
function showPrompt() {
  prompt("Ini Contoh dari Prompt");
}
 
function showAlert(){
    alert("Ini Contoh dari Alert");
}

function showConfirm(){
    confirm("Ini Contoh dari Confirm");
}

// If-Else Statement
function checkAge() {
  const age = document.getElementById("ageInput").value;
  if (age >= 18) {
    alert("You are an adult.");
  } else {
    alert("You are a minor.");
  }
}

// Looping
function loopExample() {
    let result = '';
    for (let i = 1; i <= 5; i++) {
      result += "Loop iteration " + i + "<br>";
      console.log("Loop iteration " + i);
    }
    document.getElementById("loopResult").innerHTML = result;
    
  }

// Break Statement
function breakLoop() {
    let result = '';
    for (let i = 1; i <= 10; i++) {
      if (i === 5) {
        break;
      }
      result += "Break example: " + i + "<br>";
      console.log("Break iteration " + i);
    }
    document.getElementById("loopResult").innerHTML = result;
  }

 