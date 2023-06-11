function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function calculate() {
    const expression = document.getElementById('result').value;
    let result;
  
    try {
      result = evalExpression(expression);
      if (result === Infinity || result === -Infinity || isNaN(result)) {
        displayError();
      } else {
        document.getElementById('result').value = result;
      }
    } catch (error) {
      displayError();
    }
  }
  
  function displayError() {
    document.getElementById('result').value = 'Error';
  }
  
  function evalExpression(expression) {
    let operator = '';
    let operands = expression.split(/([+\-*/])/);

    expression = expression.replace(/pi/g, Math.PI);
    expression = expression.replace(/e/g, Math.E);
  
    let result = parseFloat(operands[0]);
  
    for (let i = 1; i < operands.length; i += 2) {
      let value = parseFloat(operands[i + 1]);
  
      if (isNaN(value)) {
        return NaN;
      }
  
      switch (operands[i]) {
        case '+':
          result += value;
          break;
        case '-':
          result -= value;
          break;
        case '*':
          result *= value;
          break;
        case '/':
          if (value === 0) {
            return NaN;
          }
          result /= value;
          break;
        default:
          return NaN;
      }
    }
  
    return result;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-7").addEventListener("click", function () {
      appendToResult("7");
    });
  
    document.getElementById("btn-8").addEventListener("click", function () {
      appendToResult("8");
    });
  
    document.getElementById("btn-9").addEventListener("click", function () {
      appendToResult("9");
    });
  
    document.getElementById("btn-divide").addEventListener("click", function () {
      appendToResult("/");
    });
  
    document.getElementById("btn-4").addEventListener("click", function () {
      appendToResult("4");
    });
  
    document.getElementById("btn-5").addEventListener("click", function () {
      appendToResult("5");
    });
  
    document.getElementById("btn-6").addEventListener("click", function () {
      appendToResult("6");
    });
  
    document.getElementById("btn-multiply").addEventListener("click", function () {
      appendToResult("*");
    });
  
    document.getElementById("btn-1").addEventListener("click", function () {
      appendToResult("1");
    });
  
    document.getElementById("btn-2").addEventListener("click", function () {
      appendToResult("2");
    });
  
    document.getElementById("btn-3").addEventListener("click", function () {
      appendToResult("3");
    });
  
    document.getElementById("btn-subtract").addEventListener("click", function () {
      appendToResult("-");
    });
  
    document.getElementById("btn-0").addEventListener("click", function () {
      appendToResult("0");
    });
  
    document.getElementById("btn-decimal").addEventListener("click", function () {
      appendToResult(".");
    });
  
    document.getElementById("btn-equals").addEventListener("click", calculate);
  
    document.getElementById("btn-add").addEventListener("click", function () {
      appendToResult("+");
    });
    document.getElementById("btn-pi").addEventListener("click", function () {
      appendToResult("3.14");
    });
    document.getElementById("btn-eu").addEventListener("click", function () {
      appendToResult("2.71");
    });
  
    document.getElementById("btn-clear").addEventListener("click", clearResult);
  });
  