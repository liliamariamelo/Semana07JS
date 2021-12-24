function myFunction(valor, mensagem) {
  var valor = document.getElementById('valor').value;
  var palavra = document.getElementById('nome').value;
  for (a = 0; a < valor; a++) {
    var x = document.createElement('LI');
    var t = document.createTextNode(palavra + a + 1 + '');
    var t = document.createTextNode(palavra);
    x.appendChild(t);
    document.getElementById('lista').appendChild(x);
  }
}
