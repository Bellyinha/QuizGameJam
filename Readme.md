# Game Jam

Projeto de quiz educativo com frontend em HTML, CSS e JavaScript e estrutura de backend em Node.js com Prisma e MySQL.

## Visão geral

O projeto já contempla a parte visual do jogo e também uma API/estrutura de dados para integrar o banco. Os temas disponíveis até o momento são:

- Matemática
- Ciências
- Geografia
- Língua Portuguesa

A estrutura do backend foi iniciada com Prisma para gerenciar o modelo de perguntas e comunicação com o banco de dados.

## Estrutura do projeto

```
frontend/
  ├── index.html
    ├── quizCien.html
    ├── quizGeo.html
    ├── quizMath.html
    ├── quizPort.html
    ├── css/
    ├── js/
        ├── ciencias.js
        ├── geografia.js
        ├── matematica.js
        ├── portugues.js
        └── montarPerguntas.js

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
- 
