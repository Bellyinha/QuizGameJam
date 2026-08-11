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

```text
Quiz/
├── Readme.md
├── frontend/
│   ├── index.html
│   ├── quizMath.html
│   ├── quizCien.html
│   ├── quizGeo.html
│   ├── quizPort.html
│   ├── css/
│   ├── js/
│   ├── img/
│   └── fonts/
└── backend/
    ├── prisma/
    │   └── schema.prisma
    ├── prisma.config.ts
    ├── package.json
    ├── package-lock.json
    └── .gitignore
```

## Requisitos

Antes de rodar, certifique-se de ter instalado:

- Node.js 18+
- npm
- MySQL em execução localmente ou em algum serviço externo
- Git
- Navegador moderno

## Regras do projeto

1. O frontend continua sendo uma aplicação estática e pode ser acessada no navegador.
2. O backend ainda é uma base estrutural em Prisma e precisa do banco configurado para funcionar corretamente.
3. O arquivo de configuração do Prisma usa a variável de ambiente `DATABASE_URL`.
4. O schema atual define o banco como MySQL e o modelo `Pergunta`.
5. O banco deve estar ativo antes de rodar comandos do Prisma como `prisma validate`, `prisma migrate` ou `prisma db push`.
6. O projeto não deve rodar sem a variável `DATABASE_URL` configurada.

## Configuração do banco de dados

### 1. Entrar na pasta do backend

```bash
cd Quiz/backend
```

### 2. Verificar se as dependências estão instaladas

```bash
npm install
```

### 3. Criar o arquivo `.env`

Crie um arquivo chamado `.env` dentro da pasta `backend` com o conteúdo abaixo:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
```

Exemplo real:

```env
DATABASE_URL="mysql://root:123456@localhost:3306/quizgamejam"
```

> Ajuste o usuário, a senha, a porta e o nome do banco de acordo com sua instalação local do MySQL.

### 4. Garantir que o MySQL esteja rodando

Antes de iniciar o Prisma, confirme que o MySQL está ativo no servidor local ou no serviço externo que você está usando.

Se estiver usando MySQL localmente, normalmente você precisa:

- abrir o MySQL Workbench ou o serviço local do MySQL
- confirmar que o banco `quizgamejam` existe
- verificar se a porta `3306` está disponível

### 5. Validar a configuração do Prisma

```bash
npx prisma validate
```

Se tudo estiver correto, o Prisma reconhece o schema e a conexão configurada.

### 6. Criar ou sincronizar o banco

Dependendo do fluxo, você pode usar:

```bash
npx prisma migrate dev --name init
```

ou, se quiser sincronizar sem migração inicial:

```bash
npx prisma db push
```

### 7. Gerar o cliente Prisma

```bash
npx prisma generate
```

## Como rodar o frontend

### Opção recomendada: Live Server

1. Abra a pasta `Quiz/frontend` no VS Code.
2. Clique com o botão direito em `index.html`.
3. Selecione a opção `Open with Live Server`.
4. O navegador abrirá a aplicação localmente com suporte ao carregamento correto dos arquivos e assets.

### Importante

- O frontend deve ser executado com a extensão Live Server.
- Evite abrir apenas o arquivo HTML diretamente se o projeto estiver usando caminhos relativos e recursos locais, pois isso pode causar problemas de carregamento.

## Como rodar o backend

O backend ainda está em estrutura inicial. Para rodar a API quando ela estiver pronta, o fluxo padrão será:

```bash
cd Quiz/backend
npm install
npx prisma generate
npx prisma db push
node index.js
```

> Caso a API ainda não exista em um arquivo `index.js`, o comando acima deve ser usado apenas quando a rota/servidor for implementada.

## Observações importantes

- O projeto usa Prisma com MySQL, conforme o esquema em [Quiz/backend/prisma/schema.prisma](Quiz/backend/prisma/schema.prisma).
- O campo `DATABASE_URL` é obrigatório para qualquer operação do Prisma.
- Sem banco ativo, a conexão não funciona.
- No momento, o projeto principal continua sendo o front-end do quiz, com a base do backend já iniciada.

## Status atual

- Frontend: funcional
- Backend: em estrutura inicial com Prisma/MySQL configurado
- Banco de dados: precisa ser ativado e conectado antes de usar o Prisma
