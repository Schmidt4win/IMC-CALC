function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  console.log(buttonCalculateImc);
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

//função calculo imc
function calculateImc(weight, height) {
  return weight / (height * height);
}

//função click no botão
function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
  grauTeste();
}

//função de calculo de grau
function calculateGrau() {
  var imcCalc = parseFloat(document.querySelector('#imc-result').innerText);

  //console.log('imcCalc', imcCalc);

  if (imcCalc >= 16 && imcCalc < 16.9) {
    return 'Muito Abaixo do Peso';
  } else if (imcCalc >= 17 && imcCalc < 18.4) {
    return 'Abaixo do peso';
  } else if (imcCalc >= 18.5 && imcCalc < 24.9) {
    return 'Peso Normal';
  } else if (imcCalc >= 25 && imcCalc < 29.9) {
    return 'Sobrepeso';
  } else if (imcCalc >= 30 && imcCalc < 34.9) {
    return 'Obesidade Grau I';
  } else if (imcCalc >= 35 && imcCalc < 40) {
    return 'Obesidade Grau II';
  } else if (imcCalc > 40) {
    return 'Obesidade Grau III';
  } else {
    return 'Resultado Invalido';
  }
}

//função para retornar grau na tela
function grauTeste() {
  var grauResult = document.querySelector('#imc-grau');
  grauResult.innerHTML = calculateGrau();
}

start();
