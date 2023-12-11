function check() {
  var condition = document.getElementById('rp').value;
  if (condition === 'Add') {
    var a = parseInt(document.getElementById('f-value').value);
    var b = parseInt(document.getElementById('s-value').value);
    var sum = a + b;
    var answer = document.getElementById('g-value');
    console.log(sum);
    answer.setAttribute('placeholder', sum);

  }
  else if (condition === 'Subtract') {
    var a = parseInt(document.getElementById('f-value').value);
    var b = parseInt(document.getElementById('s-value').value);
    var min = a - b;
    var answer = document.getElementById('g-value');
    answer.setAttribute('placeholder', min);
  }
  else if (condition === 'Multiply') {
    var a = parseInt(document.getElementById('f-value').value);
    var b = parseInt(document.getElementById('s-value').value);
    var mul = a * b;
    var answer = document.getElementById('g-value');
    answer.setAttribute('placeholder', mul);
  }
  else {
    var a = parseInt(document.getElementById('f-value').value);
    var b = parseInt(document.getElementById('s-value').value);
    var div = a / b;
    var answer = document.getElementById('g-value');
    answer.setAttribute('placeholder', div);
  }
}