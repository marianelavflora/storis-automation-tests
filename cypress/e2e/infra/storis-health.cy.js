describe("STORIS infrastructure health", () => {
  it("returns a known status for the public homepage", () => {
    cy.safeRequest({
      method: "GET",
      url: "https://www.storis.com/",
      headers: {
        "user-agent": "cypress-e2e-health-check",
      },
    }).then((response) => {
      expect([200, 301, 302, 403, 404]).to.include(response.status);
      expect(response.headers).to.have.property("content-type");
    });
  });
});
