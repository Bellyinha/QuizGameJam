//pagina inicial
function entrar() {
  document.location.href = 'quizPort.html';
}

function voltar() {
  document.location.href = 'index.html';
}

//contar ponto
var ponto = 0;

//pergunta 1
function conferir1() {
  let resposta = document.getElementById('r1').value;
  if (resposta == 'b' || resposta == 'B') {
    document.getElementById('ce1').innerHTML = 'Resposta certa :)';
    document.getElementById('d1').style.backgroundColor = '#ccffcc';
    ponto = ponto + 1;
  } else {
    document.getElementById('ce1').innerHTML = 'Resposta errada :(';
    document.getElementById('d1').style.backgroundColor = '#ffcbcb';
  }
  document.getElementById('c1').style.display = 'none';
  document.getElementById('proximo1').style.display = 'inline-block';
}

//pergunta 2
function conferir2() {
  let resposta = document.getElementById('r2').value;
  if (resposta == 'c' || resposta == 'C') {
    document.getElementById('ce2').innerHTML = 'Resposta certa :)';
    document.getElementById('d2').style.backgroundColor = '#ccffcc';
    ponto = ponto + 1;
  } else {
    document.getElementById('ce2').innerHTML = 'Resposta errada :(';
    document.getElementById('d2').style.backgroundColor = '#ffcbcb';
  }
  document.getElementById('c2').style.display = 'none';
  document.getElementById('proximo2').style.display = 'inline-block';
}

//pergunta3
function conferir3() {
  let resposta = document.getElementById('r3').value;
  if (resposta == 'b' || resposta == 'B') {
    document.getElementById('ce3').innerHTML = 'Resposta certa :)';
    document.getElementById('d3').style.backgroundColor = '#ccffcc';
    ponto = ponto + 1;
  } else {
    document.getElementById('ce3').innerHTML = 'Resposta errada :(';
    document.getElementById('d3').style.backgroundColor = '#ffcbcb';
  }
  document.getElementById('c3').style.display = 'none';
  document.getElementById('proximo3').style.display = 'inline-block';
}

//pergunta4
function conferir4() {
  let resposta = document.getElementById('r4').value;
  if (resposta == 'c' || resposta == 'C') {
    document.getElementById('ce4').innerHTML = 'Resposta certa :)';
    document.getElementById('d4').style.backgroundColor = '#ccffcc';
    ponto = ponto + 1;
  } else {
    document.getElementById('ce4').innerHTML = 'Resposta errada :(';
    document.getElementById('d4').style.backgroundColor = '#ffcbcb';
  }
  document.getElementById('c4').style.display = 'none';
  document.getElementById('proximo4').style.display = 'inline-block';
}

//pergunta5
function conferir5() {
  let resposta = document.getElementById('r5').value;
  if (resposta == 'c' || resposta == 'C') {
    document.getElementById('ce5').innerHTML = 'Resposta certa :)';
    document.getElementById('d5').style.backgroundColor = '#ccffcc';
    ponto = ponto + 1;
  } else {
    document.getElementById('ce5').innerHTML = 'Resposta errada :(';
    document.getElementById('d5').style.backgroundColor = '#ffcbcb';
  }
  document.getElementById('c5').style.display = 'none';
  document.getElementById('proximo5').style.display = 'inline-block';
}

//pergunta6
function conferir6() {
  let resposta = document.getElementById('r6').value;
  if (resposta == 'd' || resposta == 'D') {
    document.getElementById('ce6').innerHTML = 'Resposta certa :)';
    document.getElementById('d6').style.backgroundColor = '#ccffcc';
    ponto = ponto + 1;
  } else {
    document.getElementById('ce6').innerHTML = 'Resposta errada :(';
    document.getElementById('d6').style.backgroundColor = '#ffcbcb';
  }
  document.getElementById('c6').style.display = 'none';
  document.getElementById('proximo6').style.display = 'inline-block';
}

//pergunta7
function conferir7() {
  let resposta = document.getElementById('r7').value;
  if (resposta == 'b' || resposta == 'B') {
    document.getElementById('ce7').innerHTML = 'Resposta certa :)';
    document.getElementById('d7').style.backgroundColor = '#ccffcc';
    ponto = ponto + 1;
  } else {
    document.getElementById('ce7').innerHTML = 'Resposta errada :(';
    document.getElementById('d7').style.backgroundColor = '#ffcbcb';
  }
  document.getElementById('c7').style.display = 'none';
  document.getElementById('proximo7').style.display = 'inline-block';
}

//pergunta8
function conferir8() {
  let resposta = document.getElementById('r8').value;
  if (resposta == 'a' || resposta == 'A') {
    document.getElementById('ce8').innerHTML = 'Resposta certa :)';
    document.getElementById('d8').style.backgroundColor = '#ccffcc';
    ponto = ponto + 1;
  } else {
    document.getElementById('ce8').innerHTML = 'Resposta errada :(';
    document.getElementById('d8').style.backgroundColor = '#ffcbcb';
  }
  document.getElementById('c8').style.display = 'none';
  document.getElementById('proximo8').style.display = 'inline-block';
}

//pergunta9
function conferir9() {
  let resposta = document.getElementById('r9').value;
  if (resposta == 'a' || resposta == 'A') {
    document.getElementById('ce9').innerHTML = 'Resposta certa :)';
    document.getElementById('d9').style.backgroundColor = '#ccffcc';
    ponto = ponto + 1;
  } else {
    document.getElementById('ce9').innerHTML = 'Resposta errada :(';
    document.getElementById('d9').style.backgroundColor = '#ffcbcb';
  }
  document.getElementById('c9').style.display = 'none';
  document.getElementById('proximo9').style.display = 'inline-block';
}

//pergunta10
function conferir10() {
  let resposta = document.getElementById('r10').value;
  if (resposta == 'c' || resposta == 'C') {
    document.getElementById('ce10').innerHTML = 'Resposta certa :)';
    document.getElementById('d10').style.backgroundColor = '#ccffcc';
    ponto = ponto + 1;
  } else {
    document.getElementById('ce10').innerHTML = 'Resposta errada :(';
    document.getElementById('d10').style.backgroundColor = '#ffcbcb';
  }
  document.getElementById('c10').style.display = 'none';
  document.getElementById('proximo10').style.display = 'inline-block';
}

//ir para a proxima pergunta
function irProxima1() {
  document.getElementById('d1').style.display = 'none';
  document.getElementById('d2').style.display = 'block';
}

function irProxima2() {
  document.getElementById('d2').style.display = 'none';
  document.getElementById('d3').style.display = 'block';
}

function irProxima3() {
  document.getElementById('d3').style.display = 'none';
  document.getElementById('d4').style.display = 'block';
}

function irProxima4() {
  document.getElementById('d4').style.display = 'none';
  document.getElementById('d5').style.display = 'block';
}

function irProxima5() {
  document.getElementById('d5').style.display = 'none';
  document.getElementById('d6').style.display = 'block';
}

function irProxima6() {
  document.getElementById('d6').style.display = 'none';
  document.getElementById('d7').style.display = 'block';
}

function irProxima7() {
  document.getElementById('d7').style.display = 'none';
  document.getElementById('d8').style.display = 'block';
}

function irProxima8() {
  document.getElementById('d8').style.display = 'none';
  document.getElementById('d9').style.display = 'block';
}

function irProxima9() {
  document.getElementById('d9').style.display = 'none';
  document.getElementById('d10').style.display = 'block';
}

function irProxima10() {
  document.getElementById('d10').style.display = 'none';
  document.getElementById('final').style.display = 'block';
  document.getElementById('pontos').innerHTML = ponto + '/10';
}
