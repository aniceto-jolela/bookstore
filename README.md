# bookstore
A small e-commerce that allows users to buy technology books.

  The main objectives of the application are:

   1. Ensure secure access to users and their data
   2. Allow book searches
   3. Allow shopping for selected products

All development is based on ReactJS, and the application adapts to different screen sizes and orientations, all defined routes

## routes
   - `/`: is the access path to the application
   - `/books`: is the default path (home) where the latest published books will be displayed
   - `/books/{book_id}`: in this route the specific information of a book will be displayed by its ID (detail view)
   - `/users/{user_id}` – This route will display the user's profile by their ID
   - `/users/{user_id}/cart` – This route will display a user's shopping cart by their ID
   - `/checkout/{user_id}`: this route will contain the flow to make the payment for the products selected by the user ID

## Authentication and Authorization

The OAuth2 standard is used for user authentication. Which is supported by a [keycloak](https://www.keycloak.org/) server from which the credentials for its use will be provided to the contact email registered by the applicant.

   - The authentication domain has two possible scenarios: one where the client registers with a user and password;
   - and another where **Google** access is used to register.
   - For both cases, the **Keycloak** service is already configured to provide this functionality.

  The user module has two views:
   - a view profile information
   - and another the shopping cart.



## user profile

The personal data captured in the idToken obtained in authentication is displayed.

  - full user name
  - the e-mail
  - avatar

## Shopping cart

This view shows all products that the user has selected for a possible purchase.

- for each product:
    - Name
    - amount
    - Unit price
    - Subtotal
    - in the list summary:
    - total quantity of products
    - total number of items
    - Total price


The view has an action that initiates payment for the products (see [Checkout module](#checkout-module)).

 The integration of this module is carried out from the operations exported by a service that is available at the following address https://bookstore-api.gyfted.dev/api/cart.


The service has 4 operations:

   - `GET /api/cart`: get shopping cart for current user
   - `POST /api/cart/book`: allows you to add or modify the products in the shopping cart
   - `DELETE /api/cart/book/:book_id` – remove the product with book_id from the shopping cart
   - `POST /api/cart`: completes or closes a shopping cart, this action must be performed when completing checkout

  All operations described above require the use of authentication via the JWT access token obtained via user authentication.


 
 ## book module

ItEbooks API is used to query book information. Said API has the necessary resources to view and consult the information required.


- main view

In this view, the list of books is shown and also has a search option. You can search by title, author and ISBN.

 If you click on any book, you will go to the selected book's detail view (see: Detail view)
 detail view

- Detailed information of each book:

    - Title
    - rubric
    - Author
    - editorial
    - ISBN code
    - year of publication
    - price
    - Content description
    - Evaluation

In addition, there will be actions to add the current product to the cart as many times as the user wants. If this product exists in the cart, the selected values ​​and the existing one in the shopping cart will be added.
 


## checkout module

This module has 3 views as sequential steps (steps, or wizard). The 3 views to consider are:

  - purchase details
  - payment details
  - confirmation and thanks

 The user can go back and forth as long as the purchase has not been confirmed.
 
 > Purchase detail

The purchase detail is a summary of the products that the user has selected. The products and their quantities are shown, as well as the respective partial and total calculations of the payment to be made. This view merges seamlessly with the shopping cart.
 
 > Payment data

To capture payment data, Stripe integration is used. Applicants will receive access keys for a test account so that they can make as many purchases as they wish using said integration. The basic form must record:

  - the details of the means of payment,
  - purchase data (number of products and total number of items) product and
  - the user's email


Once the payment has been made, the user is informed of the result of the payment. If successful, a message is shown on the reference and the user is given the option to navigate to the main view of the application (see Main View). In case of error, a message is displayed with the error received and give the option to return to the shopping cart to try again.

## Running-the-Front-End

```bash
# Clone this repository
$ git clone https://github.com/aniceto-jolela/bookstore.git

# Access the project folder in terminal/cmd
$ cd bookstore

# Open the project in vs code and run this command in the terminal
$ npm install | yarn install

```

<p style='font-size:20px;color:pink'>Keycloak file</p>

```ts
//File location: src/keycloak.ts

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

<p style='font-size:20px;color:pink'>Index file</p>

```ts
//File location: src/index.tsx

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

<p style='font-size:20px;color:pink'>App file</p>

```ts
//File location: src/App.tsx

import * as React from "react";
import { useKeycloak } from "@react-keycloak/web";
import Routs from "./routers/routes";

export default function App() {
  const { initialized } = useKeycloak();

  !initialized ? <div>Loading...</div> : "";

  return <Routs/>
}


```

<p style='font-size:20px;color:pink'>Rotas file</p>

```ts
//File location: src/routers/routes.tsx

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

<p style='font-size:20px;color:pink'>Api file</p>

```ts
//File location: src/utils/api.ts

import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.itbook.store/1.0/",
});

export default Api;


```

<p style='font-size:20px;color:pink'>App Theme</p>

```ts
//File location: src/theme.ts

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


## Technologies 


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
 My  | [Linkedin](https://www.linkedin.com/in/aniceto-jolela-076547184/))


