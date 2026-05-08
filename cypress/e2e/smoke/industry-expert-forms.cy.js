describe("STORIS industry expert form smoke", () => {
  it("types an invalid email in the Talk to an Industry Expert form", () => {
    cy.visit("/", { failOnStatusCode: false });

    cy.location("hostname").should("include", "storis.com");

    cy.get("#input_1335103461_3", { timeout: 30000 })
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("wrongEmail899798")
      .should("have.value", "wrongEmail899798");

    cy.get("#gform_submit_button_1335103461")
      .scrollIntoView()
      .should("be.visible")
      .click();
  });
});
