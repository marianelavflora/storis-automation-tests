class StorisHomePage {
  visitRoot() {
    cy.visit("/", { failOnStatusCode: false });
  }

  assertMainPageLoaded() {
    cy.location("hostname").should("include", "storis.com");
    cy.get("body").should("be.visible");
  }

  assertCloudflareBlockPage() {
    cy.get("body").invoke("text").then((text) => {
      const normalized = text.toLowerCase();
      expect(
        normalized.includes("cloudflare") ||
          normalized.includes("forbidden") ||
          normalized.includes("access denied")
      ).to.equal(true);
    });
  }
}

module.exports = new StorisHomePage();
