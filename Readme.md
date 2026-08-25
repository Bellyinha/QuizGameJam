# Game Jam

Projeto de quiz educativo com frontend em HTML, CSS e JavaScript.

## Visão geral

Os temas disponíveis até o momento são:

- Matemática
- Ciências
- Geografia
- Língua Portuguesa
- Inglês

## Estrutura do projeto

```
frontend/
  ├── css/
  ├── fonts/
  ├── img/
  ├── js/
      ├── ciencias.js
      ├── desafio.js
      ├── geografia.js
      ├── ingles.json
      ├── matematica.js
      ├── portugues.js
      └── montarPerguntas.js
  ├── desafio.html
  ├── index.html
  ├── perguntas.json
  ├── quizCien.html
  ├── quizGeo.html
  ├── quizMath.html
  └── quizPort.html

```

## Como rodar o projeto
1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` no seu navegador para acessar a página inicial do quiz.

## Distribuição de tarefas
- **montarPerguntas.js**: Responsável por carregar as perguntas de acordo com a matéria selecionada e gerenciar a lógica do quiz, incluindo a exibição das perguntas e a verificação das respostas.
- **ciencias.js, geografia.js, matematica.js, portugues.js**: Cada um desses arquivos importa a função `carregarPerguntas` de `montarPerguntas.js` e chama essa função com o nome da matéria correspondente para carregar as perguntas específicas.
- **HTML files (quizCien.html, quizGeo.html, quizMath.html, quizPort.html)**: Cada arquivo HTML corresponde a uma matéria específica e inclui o script JavaScript correspondente para carregar as perguntas da matéria selecionada.
- **index.html**: Página inicial do quiz, onde o usuário pode escolher a matéria que deseja jogar.
- **CSS files**: Contêm os estilos visuais para o quiz, garantindo uma experiência de usuário agradável e consistente em todas as páginas.
- **desafio.js**: Gera uma lógica exclusiva para o desafio de inglês.
  
  # Documentação da Lógica do Jogo de Associação de Palavras

## Objetivo

O sistema cria um minigame para praticar vocabulário em inglês.

O jogador deve:

1. Selecionar uma palavra em inglês.
2. Selecionar a tradução correspondente.
3. Receber pontos ao acertar.
4. Perder pontos ao errar.
5. Completar todas as 5 associações para avançar para uma nova rodada.

---

# Estrutura Geral

O fluxo principal do programa segue esta sequência:

```text
Carrega JSON
      ↓
Seleciona 5 palavras aleatórias
      ↓
Embaralha as traduções
      ↓
Exibe duas colunas
      ↓
Usuário seleciona um par
      ↓
Verifica se está correto
      ↓
Atualiza pontuação
      ↓
Todas as 5 palavras foram associadas?
      ↓
     Sim
      ↓
Nova rodada
```

---

# Variáveis Globais

## score
Armazena a pontuação atual do jogador.
```javascript
let score = 0;
```
---

## selectedEnglish
Guarda o botão da palavra inglesa atualmente selecionada.
```javascript
let selectedEnglish = null;
```
---
## selectedTranslation
Guarda a tradução atualmente selecionada.
```javascript
let selectedTranslation = null;
```
---
## currentWords
Armazena as 5 palavras utilizadas na rodada atual.
```javascript
let currentWords = [];
```
---
## matchedPairs
Conta quantos pares já foram encontrados na rodada.
```javascript
let matchedPairs = 0;
```
Quando chegar a:
```javascript
  matchedPairs === 5
```
uma nova rodada é criada.
---

# updateScore()

## Objetivo

Atualizar a pontuação exibida na tela.

### Código

```javascript
function updateScore() {
  scoreElement.textContent = `Pontos: ${score}`;
}
```

### Exemplo

Se:

```javascript
score = 8;
```

O HTML exibirá:

```text
Pontos: 8
```

---

# shuffle()

## Objetivo

Embaralhar uma lista.

### Código

```javascript
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
```

### Exemplo

Antes:

```javascript
["Casa", "Carro", "Livro"]
```

Depois:

```javascript
["Livro", "Casa", "Carro"]
```

---

# getRandomWords()

## Objetivo

Selecionar apenas 5 palavras aleatórias do JSON.

### Código

```javascript
function getRandomWords(lista, amount = 5) {
  const shuffled = shuffle(lista);
  return shuffled.slice(0, amount);
}
```

### Exemplo

JSON com 100 palavras:

```javascript
[
  ...
]
```

Resultado:

```javascript
[
  palavra12,
  palavra57,
  palavra3,
  palavra89,
  palavra41
]
```

---

# createButton()

## Objetivo

Criar dinamicamente um botão de palavra.

### Código

```javascript
function createButton(text, type, pairId)
```

### Parâmetros

| Parâmetro | Descrição              |
| --------- | ---------------------- |
| text      | Texto exibido          |
| type      | english ou translation |
| pairId    | ID da palavra          |

---

## Exemplo

```javascript
createButton(
  "House",
  "english",
  15
);
```

Gera:

```html
<button
  data-type="english"
  data-pair-id="15">
  House
</button>
```

---

# handleSelection()

## Objetivo

Controlar a seleção do usuário.

### Fluxo

Quando um botão é clicado:

```text
Clique
 ↓
É inglês?
 ↓
Sim → salva em selectedEnglish

Não
 ↓
salva em selectedTranslation
```

Depois:

```javascript
checkMatch();
```

é executado.

---

# checkMatch()

## Objetivo

Verificar se o par selecionado está correto.

---

## Regra

Os IDs devem ser iguais.

Exemplo:

```javascript
House
id = 10
```

e

```javascript
Casa
id = 10
```

Resultado:

```text
Acerto
```

---

## Acerto

Quando os IDs são iguais:

```javascript
score++;
matchedPairs++;
```

Além disso:

```javascript
.classList.add('correct');
```

deixa os botões verdes.

---

### Exemplo

Antes:

```text
House
Casa
```

Depois:

```text
🟩 House
🟩 Casa
```

---

## Erro

Quando os IDs são diferentes:

```javascript
score--;
```

Os botões recebem:

```javascript
.classList.add('wrong');
```

ficando vermelhos.

Após:

```javascript
2000 ms
```

eles retornam ao estado normal.

---

### Exemplo

Usuário seleciona:

```text
House
Livro
```

Resultado:

```text
🟥 House
🟥 Livro
```

Depois de 2 segundos:

```text
House
Livro
```

---

# Verificação de fim da rodada

Após cada acerto:

```javascript
if (matchedPairs === 5)
```

O sistema verifica se todos os pares já foram encontrados.

---

## Caso verdadeiro

```javascript
setTimeout(() => {
  loadRound();
}, 1000);
```

Após 1 segundo:

* a rodada atual é removida;
* uma nova rodada é criada.

---

# loadRound()

## Objetivo

Construir toda a interface de uma rodada.

---

## Passo 1

Resetar os pares encontrados.

```javascript
matchedPairs = 0;
```

---

## Passo 2

Remover a rodada anterior.

```javascript
document
  .querySelector('.game-area')
  ?.remove();
```

---

## Passo 3

Criar as duas colunas.

```javascript
const englishColumn =
document.createElement('div');

const translationColumn =
document.createElement('div');
```

---

## Passo 4

Selecionar 5 palavras aleatórias.

```javascript
currentWords =
getRandomWords(window.wordList, 5);
```

---

## Passo 5

Embaralhar as traduções.

```javascript
const translations =
shuffle(currentWords);
```

---

## Passo 6

Criar os botões da coluna inglesa.

Exemplo:

```text
House
Car
Book
Dog
Water
```

---

## Passo 7

Criar os botões da coluna traduzida.

Exemplo:

```text
Livro
Água
Casa
Cachorro
Carro
```

Observe que a ordem é diferente.

---

## Passo 8

Adicionar tudo ao HTML.

Estrutura final:

```html
<div class="game-area">

  <div class="column">
    House
    Car
    Book
    Dog
    Water
  </div>

  <div class="column">
    Livro
    Água
    Casa
    Cachorro
    Carro
  </div>

</div>
```

---

# Carregamento do JSON

## Objetivo

Buscar as palavras do arquivo:

```text
ingles.json
```

---

### Código

```javascript
fetch('./js/ingles.json')
```

---

### Fluxo

```text
Busca arquivo
      ↓
Converte JSON
      ↓
Armazena em wordList
      ↓
Atualiza placar
      ↓
Cria primeira rodada
```

---

# Resumo da Arquitetura

```text
ingles.json
      ↓
fetch()
      ↓
wordList
      ↓
loadRound()
      ↓
5 palavras aleatórias
      ↓
2 colunas
      ↓
Clique do usuário
      ↓
handleSelection()
      ↓
checkMatch()
      ↓
Acertou?
 ├─ Sim → +1 ponto
 └─ Não → -1 ponto
      ↓
5 pares encontrados?
 ├─ Não → continua
 └─ Sim → nova rodada
```

## exemplo de como seria o HTML gerado pelo `ingles.json`:
```html
<div class="game-area">

  <div class="column">

    <button
      class="word"
      data-type="english"
      data-pair-id="12">
      Friend
    </button>

    <button
      class="word"
      data-type="english"
      data-pair-id="28">
      Apple
    </button>

    <button
      class="word"
      data-type="english"
      data-pair-id="49">
      Computer
    </button>

    <button
      class="word"
      data-type="english"
      data-pair-id="65">
      Hospital
    </button>

    <button
      class="word"
      data-type="english"
      data-pair-id="95">
      Good
    </button>

  </div>

  <div class="column">

    <button
      class="word"
      data-type="translation"
      data-pair-id="49">
      Computador
    </button>

    <button
      class="word"
      data-type="translation"
      data-pair-id="95">
      Bom
    </button>

    <button
      class="word"
      data-type="translation"
      data-pair-id="12">
      Amigo
    </button>

    <button
      class="word"
      data-type="translation"
      data-pair-id="65">
      Hospital
    </button>

    <button
      class="word"
      data-type="translation"
      data-pair-id="28">
      Maçã
    </button>

  </div>

</div>
```