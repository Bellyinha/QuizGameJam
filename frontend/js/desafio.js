const container = document.getElementById('container');
const scoreElement = document.getElementById('score');

let score = 0;

let selectedEnglish = null; //Palavras selecionadas em inglês
let selectedTranslation = null; //Tradção das palavras selecionadas
let currentWords = []; //Lista das palavras da vez
let matchedPairs = 0; //Quantos pares foram combinados

//Função para atualizar o placar `score` no html
function updateScore() {
  scoreElement.textContent = `Pontos: ${score}`;
}

//Função para embaralhar
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

//Função para sortear 5 palavras da lista do json
function getRandomWords(lista, amount = 5) {
  const shuffled = shuffle(lista);
  return shuffled.slice(0, amount);
}

//Função para gerar um botão para as palavras sorteadas
function createButton(text, type, pairId) {
  const button = document.createElement('button');

  button.textContent = text;
  button.classList.add('word');
  button.dataset.type = type;
  button.dataset.pairId = pairId;

  button.addEventListener('click', () => handleSelection(button));

  return button;
}

//Função para definir os botões selecionados
function handleSelection(button) {
  if (
    button.classList.contains('correct') ||
    button.classList.contains('locked')
  ) {
    return;
  }

  if (button.dataset.type === 'english') {
    if (selectedEnglish) {
      selectedEnglish.classList.remove('selected');
    }

    selectedEnglish = button;
    button.classList.add('selected');
  } else {
    if (selectedTranslation) {
      selectedTranslation.classList.remove('selected');
    }

    selectedTranslation = button;
    button.classList.add('selected');
  }

  checkMatch();
}

//Função para verificar a dupla selecionada
function checkMatch() {
  if (!selectedEnglish || !selectedTranslation) return;

  const correct =
    selectedEnglish.dataset.pairId === selectedTranslation.dataset.pairId;

  if (correct) {
    selectedEnglish.classList.remove('selected');
    selectedTranslation.classList.remove('selected');

    selectedEnglish.classList.add('correct', 'locked');
    selectedTranslation.classList.add('correct', 'locked');

    score++;
    matchedPairs++;

    updateScore();

    selectedEnglish = null;
    selectedTranslation = null;

    //Filtro para quando combinar todas
    if (matchedPairs === 5) {
      setTimeout(() => {
        loadRound();
      }, 1000);
    }
  } else {
    selectedEnglish.classList.add('wrong');
    selectedTranslation.classList.add('wrong');

    score--;
    updateScore();

    const eng = selectedEnglish;
    const tra = selectedTranslation;

    selectedEnglish = null;
    selectedTranslation = null;

    setTimeout(() => {
      eng.classList.remove('wrong', 'selected');
      tra.classList.remove('wrong', 'selected');
    }, 2000);
  }
}

//Gera o HTML
function loadRound() {
  matchedPairs = 0;

  document.querySelector('.game-area')?.remove();

  const gameArea = document.createElement('div'); //Gera a div com a class 'game-area'
  gameArea.classList.add('game-area');

  const englishColumn = document.createElement('div'); //Gera uma div para as palavras em ingles com a class 'column'
  englishColumn.classList.add('column');

  const translationColumn = document.createElement('div');//Mesma coisa da anterior, para tradução
  translationColumn.classList.add('column');

  currentWords = getRandomWords(window.wordList, 5);

  const translations = shuffle(currentWords);

  currentWords.forEach((word) => {
    englishColumn.appendChild(createButton(word.content, 'english', word.id));
  });

  translations.forEach((word) => {
    translationColumn.appendChild(
      createButton(word.answer, 'translation', word.id)
    );
  });

  gameArea.appendChild(englishColumn);//inclui a coluna de ingles na div 'gameArea'
  gameArea.appendChild(translationColumn);//inclui a coluna de tradução na div 'gameArea'

  container.appendChild(gameArea);//inclui a div gameArea no container original definido no arquivo HTML fixo
}

//Carrega os dados do arquivo `ingles.json` dentro da pasta 'js'
fetch('./js/ingles.json')
  .then((response) => response.json())
  .then((lista) => {
    window.wordList = lista;

    updateScore();
    loadRound();
  })
  .catch((error) => {
    console.error(error);
  });