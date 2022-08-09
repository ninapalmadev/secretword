
# Secret Word em React

![sc2](https://user-images.githubusercontent.com/99814252/183717178-b1093446-8826-4996-9f0b-dd711fb01f2e.png)

## Índice

* [Título e Imagem do projeto](#Secret-Word-em-React)
* [Índice](#índice)
* [Descrição do projeto](#Descrição-do-projeto)
* [React](#React)
* [Funcionalidades e Como Executar](#funcionalidades-do-projeto)

## Descrição do projeto
Este repositório tem como finalidade apresentar um jogo de advinhação de palavras usando React. 

É o primeiro projeto do curso [React do Zero a Maestria (c/ hooks, router, API, Projetos)](https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/) ministrado por [Matheus Battisti](https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/#instructor-1) na plataforma [Udemy](https://www.udemy.com).

## React
O [React](https://pt-br.reactjs.org) é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.

Os componentes dessa ferramenta foram desenvolvidos pelo Facebook. Ela foi lançada em 2013 como uma ferramenta JavaScript de código aberto. Atualmente, ela permanece na frente das suas principais competidoras, como a Angular e a Bootstrap, as duas bibliotecas JavaScript mais bem vendidas.  

## Funcionalidades do projeto

- `Funcionalidade 1`: gerar uma palavra a ser adivinhada
- `Funcionalidade 2`: tentar adivinhar a palavra chutando letras do alfabeto. é possível errar até 3 vezes as letras e elas serão mostradas abaixo do input de tentativa.

## Como executar
É possível visualizar o projeto [aqui](https://secretword-ninapalmadev.vercel.app) ou fazer um clone do repositório com o link disponível aqui no GitHub.

No diretório do projeto, use:
### `npm start`

Rodará em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para vê-lo em seu navegador.

Será apresentada a página inicial do jogo. Nela, clique no botão `Começar o Jogo`.
![sc1](https://user-images.githubusercontent.com/99814252/183717476-abf400ca-c738-41db-bfe9-c88bf9f0d878.png)

Na tela você poderá começar a dar seus palpites para acertar a palavra.

A tela apresenta _pontuação_, _dica da palavra_, _número de tentativas_ e _letras já usadas_.

Conforme for acertando a palavra, novas palavras serão geradas para que se tente adivinhar. O jogo é finalizado ao errar 3 letras que não constam na palavra a ser adivinhada.

![sw3](https://user-images.githubusercontent.com/99814252/183717905-1f647e14-6e1c-49d5-ba16-bb32698c7680.png)

