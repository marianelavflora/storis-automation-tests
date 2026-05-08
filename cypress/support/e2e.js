require("./commands");

Cypress.on("uncaught:exception", () => {
  // Live websites can surface third-party script errors unrelated to core flows.
  return false;
});
