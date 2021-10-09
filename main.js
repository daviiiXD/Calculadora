function somar() {
  var valor1 = parseFloat(document.getElementById('n1').value);
  var valor2 = parseFloat(document.getElementById('n2').value);
  
  document.getElementById('resultado').innerHTML = ("O resultado é: " + (valor1 + valor2));
}
function subtrair() {
  var valor1 = parseFloat(document.getElementById('n1').value);
  var valor2 = parseFloat(document.getElementById('n2').value);
  
  document.getElementById('resultado').innerHTML = ("O resultado é: " + (valor1 - valor2));
}
function multiplicar() {
  var valor1 = parseFloat(document.getElementById('n1').value);
  var valor2 = parseFloat(document.getElementById('n2').value);
  
  document.getElementById('resultado').innerHTML = ("O resultado é: " + (valor1 * valor2));
}
function dividir() {
  var valor1 = parseFloat(document.getElementById('n1').value);
  var valor2 = parseFloat(document.getElementById('n2').value);
  
  document.getElementById('resultado').innerHTML = ("O resultado é: " + (valor1 / valor2));
  
  if(valor1, valor2 == 0) {
     document.getElementById('resultado').innerHTML = ("amigo, isso é impossível :p");
  }
}
function limpar() {
  document.getElementById('n1').value = "";
  document.getElementById('n2').value = "";
}
