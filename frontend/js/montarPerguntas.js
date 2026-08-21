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
  input.placeholder = 'Digite a alternativa';
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
  // Criamos o modal que será usado tanto no acerto quanto no erro
  const modal = document.createElement('dialog');
  
  // Centralização absoluta no meio da tela
  modal.style.position = 'fixed';
  modal.style.top = '20%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.margin = '0';
  modal.style.padding = '20px';
  modal.style.borderRadius = '8px';
  modal.style.border = '1px solid #ccc';
  modal.style.width = '90%';
  modal.style.maxWidth = '400px';
  modal.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';

  // Criamos variáveis vazias para preencher dentro do IF e do ELSE
  let titulo = '';
  let corTitulo = '';
  let corBotao = '';
  let textoMensagem = '';

  // O SEU IF E ELSE TRADICIONAL AQUI:
  if (resposta.toLowerCase() === correta.toLowerCase()) {
    pontos++; // Aumenta os pontos
    
    // Configura os textos e cores para o ACERTO
    titulo = 'Acertou!';
    corTitulo = '#2ecc71'; // Verde
    corBotao = '#2ecc71';  // Botão Verde
    textoMensagem = 'Muito bem! Você domina o assunto.';
  } else {
    // Configura os textos e cores para o ERRO
    titulo = 'Errou!';
    corTitulo = '#e74c3c'; // Vermelho
    corBotao = '#3498db';  // Botão Azul
    textoMensagem = explicacao; // Mostra a explicação do seu JSON
  }

  // Agora que o IF/ELSE escolheu os textos, montamos o HTML do modal
  modal.innerHTML = `
    <p style="color: ${corTitulo}; font-weight: bold; font-size: 18px; margin-top: 0;">${titulo}</p>
    <p style="margin: 15px 0; line-height: 1.5; color: #333;">${textoMensagem}</p>
    <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
      <button style="padding: 8px 20px; cursor: pointer; background-color: ${corBotao}; color: white; border: none; border-radius: 4px; font-weight: bold;">Avançar</button>
    </div>
  `;

  // Coloca o modal na tela e abre
  document.body.appendChild(modal);
  modal.showModal(); 

  // Quando clicar no botão "Avançar", passa para a próxima pergunta
  modal.querySelector('button').onclick = () => {
    modal.close();
    modal.remove();
    indiceAtual++;
    mostrarPergunta();
  };
  return;

  // Esse bloco só roda se o usuário acertar (pois o erro entra no return acima)
  indiceAtual++;
  mostrarPergunta();
}

export { carregarPerguntas, mostrarPergunta, conferirResposta };

//para usar essa função em outro arquivo, basta importar a função carregarPerguntas e chamar ela passando o nome da matéria como parâmetro, por exemplo: carregarPerguntas('Matemática');