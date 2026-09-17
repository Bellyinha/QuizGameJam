const container = document.getElementById('container');
const scoreElement = document.getElementById('score');

let score = 0;

let selectedEnglish = null; //Palavras selecionadas em inglês
let selectedTranslation = null; //Tradção das palavras selecionadas
let currentWords = []; //Lista das palavras da vez
let matchedPairs = 0; //Quantos pares foram combinados

// Variáveis para controlar o deck e evitar repetição excessiva - NOVO
let remainingWords = [];

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
    // const shuffled = shuffle(lista); - antigo
    // return shuffled.slice(0, amount); - antigo

    // NOVO
    // Se o deck estiver vazio, retorna vazio (sinalizando o fim do jogo)
    if (remainingWords.length === 0) {
        return [];
    }

    // Pega o menor valor entre 5 e o que restou no deck (ex: se restaram 3, pega 3)
    const takeCount = Math.min(amount, remainingWords.length);
    return remainingWords.splice(0, takeCount);
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
        //     if (matchedPairs === 5) {
        //         setTimeout(() => {
        //             loadRound();
        //         }, 1000);
        //     }
        // }
        //NOVO apenas o if
        if (matchedPairs === currentWords.length) {
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
        }, 1000);
    }
}

//Gera o HTML
function loadRound() {
    matchedPairs = 0;

    document.querySelector('.game-area')?.remove();
    // NOVO
    currentWords = getRandomWords(window.wordList, 5);

    // Se o deck acabou e não há mais palavras, mostra a tela final de pontuação
    if (currentWords.length === 0) {
        showGameOver();
        return;
    }
    // Fim do NOVO
    const gameArea = document.createElement('div'); //Gera a div com a class 'game-area'
    gameArea.classList.add('game-area');

    const englishColumn = document.createElement('div'); //Gera uma div para as palavras em ingles com a class 'column'
    englishColumn.classList.add('column');

    const translationColumn = document.createElement('div'); //Mesma coisa da anterior, para tradução
    translationColumn.classList.add('column');

    // currentWords = getRandomWords(window.wordList, 5);

    const translations = shuffle(currentWords);

    currentWords.forEach((word) => {
        englishColumn.appendChild(
            createButton(word.content, 'english', word.id)
        );
    });

    translations.forEach((word) => {
        translationColumn.appendChild(
            createButton(word.answer, 'translation', word.id)
        );
    });

    gameArea.appendChild(englishColumn); //inclui a coluna de ingles na div 'gameArea'
    gameArea.appendChild(translationColumn); //inclui a coluna de tradução na div 'gameArea'

    container.appendChild(gameArea); //inclui a div gameArea no container original definido no arquivo HTML fixo
}

// NOVA função
function showGameOver() {
    let title = document.getElementById('title');
    let scoreElement = document.getElementById('score');
    const gameOverArea = document.createElement('div');
    gameOverArea.classList.add('game-area', 'game-over');
    title.innerHTML = '';
    scoreElement.innerHTML = '';
    gameOverArea.innerHTML = `
        <p><strong>Fim de Jogo!</strong></p>
        <p>Sua pontuação final foi: <strong>${score} pontos</strong></p>
        <p>Pontuação máxima possível: <strong>${window.wordList.length} pontos</strong></p>
        <p>Obrigada por jogar!</p>
        <p>Você pode voltar para a tela inicial pela <strong>casinha</strong> e tentar novos temas.</p>
    `;

    container.appendChild(gameOverArea);
}

//Carrega os dados do arquivo `matematica.json` dentro da pasta 'js'
fetch('./js/matematica.json')
    .then((response) => response.json())
    .then((lista) => {
        window.wordList = lista;

        // Inicializa o deck embaralhado assim que o JSON é carregado
        remainingWords = shuffle(window.wordList);

        updateScore();
        loadRound();
    })
    .catch((error) => {
        console.error(error);
    });
