
//Table Function
function check() {
  var v1 = parseInt(document.getElementById('f-value').value);
  var v2 = parseInt(document.getElementById('s-value').value);

  // Get the output container div
  var outputDiv = document.getElementById('1');

  // Clear previous content
  outputDiv.innerHTML = '';

  // Generate and append the table to the output container
  for (var i = 1; i <= v2; i++) {
    outputDiv.innerHTML += v1 + " x " + i + " = " + v1 * i + "<br>";
  }
}