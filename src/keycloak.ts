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