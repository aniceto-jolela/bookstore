# bookstore
  Um pequeno e-commerce que permita aos usuários comprar livros de tecnologia.

  Os principais objetivos do aplicativo são:

   1. Garanta o acesso seguro aos usuários e seus dados
   2. Permitir pesquisas de livros
   3. Permitir fazer compras dos produtos selecionados

Todo o desenvolvimento é baseado em ReactJS, e aplicação adaptar-se a diferentes tamanhos e orientações de ecrã, todas rotas definidas

## Rotas
   - `/`: é o caminho de acesso ao aplicativo
   - `/books`: é o caminho padrão (home) onde serão exibidos os últimos livros publicados
   - `/books/{book_id}`: neste percurso as informações específicas de um livro serão exibidas pelo seu ID (visualização de detalhes)
   - `/users/{user_id}` – Esta rota exibirá o perfil do usuário por seu ID
   - `/users/{user_id}/cart` – Esta rota exibirá o carrinho de compras de um usuário por seu ID
   - `/checkout/{user_id}`: esta rota conterá o fluxo para efetuar o pagamento dos produtos selecionados pelo user ID

## Autenticação e autorização

  O padrão OAuth2 é usado para autenticação do usuário. Que é suportado por um servidor [keycloak](https://www.keycloak.org/) a partir do qual serão fornecidas as credenciais para a sua utilização para o email de contacto registado pelo requerente.

   - O domínio de autenticação tem dois cenários possíveis: um onde o cliente se cadastra com um usuário e senha;  
   - e outro onde é usado o acesso do **Google** para se cadastrar.
   - Para ambos os casos, o serviço **Keycloak** já está configurado para fornecer essa funcionalidade.

  O módulo do usuário tem duas visualizações: 
   - uma visualiza as informações do perfil 
   - e outra o carrinho de compras.

## Perfil de usuário

É exibidos os dados pessoais capturados no idToken obtido na autenticação. 

  - nome completo do usuário
  - o email
  - avatar

## Carrinho de compras

Esta visualização mostra todos os produtos que o usuário selecionou para uma possível compra.  

  - para cada produto:
      - Nome
      - quantia
      - preço unitário
      - Subtotal
  - no resumo da lista:
      - quantidade total de produtos
      - número total de itens
      - Preço total

 A vista tem uma ação que inicie o pagamento dos produtos (ver [Modulo de checkout](#módulo-de-checkout)).

 A integração deste módulo é realizada a partir das operações exportadas por um serviço que está disponível no seguinte endereço https://bookstore-api.gyfted.dev/api/cart.


 O serviço tem 4 operações:

   - `GET /api/cart`: obtém o carrinho de compras para o usuário atual
   - `POST /api/cart/book`: permite adicionar ou modificar os produtos no carrinho de compras
   - `DELETE /api/cart/book/:book_id` – remove o produto com book_id do carrinho de compras
   - `POST /api/cart`: conclui ou fecha um carrinho de compras, esta ação deve ser executada ao concluir o checkout

  Todas as operações descritas acima requerem o uso de autenticação por meio do token de acesso JWT obtido por meio da autenticação do usuário.


 
 ## MÓDULO DE LIVROS

 API ItEbooks é utilizada para a consulta das informações dos livros.  A referida API dispõe dos recursos necessários para visualizar e consultar a informação que se requer.

  - vista principal

 Nesta visualização, a lista de livros é mostrada e também tem uma opção de pesquisa. Pode se pesquisar por title, author e ISBN.

 Se você clicar em qualquer livro, irá para a visualização de detalhes do livro selecionado (consulte: Visualização de detalhes)
 vista de detalhe

  - Informações detalhadas de cada livro:

    - Título
    - rubrica
    - Autor
    - editorial
    - código ISBN
    - ano de publicação
    - preço
    - Descrição do conteúdo
    - Avaliação

 Além disso, haverá ações para adicionar o produto atual ao carrinho quantas vezes o usuário desejar.  Se este produto existir no carrinho, serão adicionados os valores selecionados e o existente no carrinho de compras.
 


## módulo de checkout

 Neste módulo possui 3 visualizações como passos sequenciais (steps, ou wizard).  As 3 visualizações a serem consideradas são:

   - detalhe da compra
   - detalhes do pagamento
   - confirmação e obrigado

 O usuário poderá ir e voltar desde que a compra não tenha sido confirmada.
 
 > Detalhe da compra

 O detalhe da compra é um resumo dos produtos que o usuário selecionou.É mostrado os produtos e suas quantidades, bem como os respectivos cálculos parciais e totais do pagamento a ser efetuado.  Essa visão se funde perfeitamente com o carrinho de compras. 
 
 > Dados de pagamento

 Para capturar os dados de pagamento, é utilizada a integração com o Stripe.  Os solicitantes receberão as chaves de acesso de uma conta de teste para que possam realizar quantas compras desejarem usando a referida integração. O formulário básico deve registrar:

   - os dados do meio de pagamento,
   - dados de compra (número de produtos e número total de itens) produto e
   - o e-mail do usuário


 Uma vez efetuado o pagamento, o utilizador é informado do resultado do mesmo.  Caso seja bem-sucedido, é mostrado uma mensagem na referência e, é dada a opção para o usuário navegar até a visualização principal do aplicativo (consulte Visualização principal).  Em caso de erro, é exibido uma mensagem com o erro recebido e dê a opção de retornar ao carrinho de compras para tentar novamente.


## Running-the-Front-End

```bash
# Clone this repository
$ git clone https://github.com/aniceto-jolela/bookstore.git

# Access the project folder in terminal/cmd
$ cd bookstore

# Abre o projecto no vs code e roda este comando no terminal
$ npm install | yarn install

```

```ts
// Arquivo keycloak.ts
//Local: src/keycloak.ts

import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloakConfig ={
  realm: "BookStore",
  url: "http://0.0.0.0:8080/",
  clientId: "book-store",
};

const keycloak = new Keycloak(keycloakConfig)

export default keycloak;

```

```ts
//Arquivo index.ts
//Local: src/index.tsx

import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

const eventLogger = (event: unknown, error: unknown) => {
  console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens: unknown) => {
  console.log("onKeycloakTokens", tokens);
};

root.render(
  <ReactKeycloakProvider
    initOptions={{ onLoad: "login-required" }}
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}
  >
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ReactKeycloakProvider>
);


```


```ts

//Arquivo App
//Local: src/App.tsx

import * as React from "react";
import { useKeycloak } from "@react-keycloak/web";
import Routs from "./routers/routes";

export default function App() {
  const { initialized } = useKeycloak();

  !initialized ? <div>Loading...</div> : "";

  return <Routs/>
}


```



```ts

// Arquivo de rotas
//Local: src/routers/routes.tsx

import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "../books/books";
import BooksId from "../books/book_id";
import Checkout from "../checkout/checkout";
import Layout from "../components/base-layout";
import Body from "../dashboard/body";
import Cart from "../users/cart";
import UserId from "../users/user_id";


const Routs = () => {
  return (
    <Layout
      Children={
        <>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:books_id" element={<BooksId />} />
            <Route path="/users/user_id" element={<UserId />} />
            <Route path="/users/user_id/cart" element={<Cart />} />
            <Route path="/checkout/user_id" element={<Checkout />} />
          </Routes>
        </>
      }
    />
  );
};

export default Routs;

```

```ts

//Aquivo Api
//Local: src/utils/api.ts

import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.itbook.store/1.0/",
});

export default Api;


```

```ts

//Aquivo theme
//Local: src/theme.ts

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

```



## Tecnologias 


The following tools were used in the construction of the project:

- [Reactjs](https://reactjs.org/docs/create-a-new-react-app.html)
- [TypeScript](https://developer.mozilla.org/pt-BR/docs/Web/TypeScript)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Material ui](https://mui.com/material-ui/)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Keycloak](https://www.keycloak.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Vs code](https://code.visualstudio.com/download)
- [node](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)



###### Author : Aniceto Jolela 🥰
 Meu  | [Linkedin](https://www.linkedin.com/in/aniceto-jolela-076547184/))


