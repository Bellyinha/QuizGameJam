let perguntas = [];
let indiceAtual = 0;
let pontos = 0;

// Função para carregar perguntas de um arquivo JSON
async function carregarPerguntas(materia) {
  const response = await fetch('perguntas.json'); // caminho para o arquivo JSON
  const todas = await response.json(); // carrega todas as perguntas do arquivo JSON

  perguntas = todas.filter((p) => p.subject === materia); // filtra pela matéria desejada

  mostrarPergunta();
}

// Função para exibir a pergunta atual
function mostrarPergunta() {
  const quizDiv = document.getElementById('quiz'); // seleciona o elemento onde as perguntas serão exibidas
  quizDiv.innerHTML = '';

  // Verifica se todas as perguntas foram respondidas
  if (indiceAtual >= perguntas.length) {
    document.getElementById('final').style.display = 'block';
    document.getElementById('pontos').textContent =
      pontos + ' de ' + perguntas.length;
    return;
  }

  const pergunta = perguntas[indiceAtual]; // pega a pergunta atual

  const caixa = document.createElement('div'); // cria um elemento div para a pergunta
  caixa.classList.add('caixa');

  const titulo = document.createElement('h3'); // cria um elemento h3 para o título da pergunta
  titulo.classList.add('pergunta');
  titulo.textContent = 'Pergunta ' + (indiceAtual + 1); // define o texto do título como "Pergunta X", onde X é o índice da pergunta atual + 1
  caixa.appendChild(titulo); // adiciona o título à caixa

  // Cria um elemento p para o conteúdo da pergunta
  const texto = document.createElement('p');
  texto.classList.add('perguntas');
  texto.textContent = pergunta.content;
  caixa.appendChild(texto);

  // Cria uma lista ordenada para as alternativas
  const lista = document.createElement('ol');
  lista.type = 'a';
  for (const letra in pergunta.alternatives) {
    // recebe as alternativas da pergunta de acordo com a letra (a, b, c, d) vindas do JSON
    const li = document.createElement('li'); // cria um elemento li para cada alternativa
    li.textContent = pergunta.alternatives[letra]; // define o texto do li como a alternativa correspondente
    lista.appendChild(li);
  }
  caixa.appendChild(lista);

  // Cria um input para o usuário digitar a resposta
  const input = document.createElement('input');
  input.classList.add('resposta');
  input.placeholder = 'Digite a alternativa (a, b, c, d)';
  input.autocomplete = 'off';
  caixa.appendChild(input);

  // Cria um botão para conferir a resposta
  const botao = document.createElement('button');
  botao.classList.add('enviar', 'botao');
  botao.textContent = 'Conferir';
  botao.onclick = () =>
    conferirResposta(input.value, pergunta.answer, pergunta.explanation); // chama a função conferirResposta passando a resposta do usuário, a resposta correta e a explicação da pergunta
  caixa.appendChild(botao);

  quizDiv.appendChild(caixa);
}

// Função para conferir a resposta do usuário
function conferirResposta(resposta, correta, explicacao) {
  if (resposta.toLowerCase() === correta.toLowerCase()) {
    pontos++;
    alert('✅ Acertou!');
  } else {
    alert('❌ Errou! ' + explicacao); // exibe a explicação da pergunta caso o usuário erre, a explicação é carregada do JSON
  }
  indiceAtual++;
  mostrarPergunta();
}

export { carregarPerguntas, mostrarPergunta, conferirResposta };

//para usar essa função em outro arquivo, basta importar a função carregarPerguntas e chamar ela passando o nome da matéria como parâmetro, por exemplo: carregarPerguntas('Matemática');