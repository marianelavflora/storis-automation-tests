Cypress.Commands.add("safeRequest", (options) => {
  const requestOptions = {
    failOnStatusCode: false,
    ...options,
  };

  cy.log(`Request ${requestOptions.method || "GET"} ${requestOptions.url}`);
  return cy.request(requestOptions);
});
