const storisHomePage = require("../../pages/storisHomePage");

describe("STORIS regional access smoke", () => {
  it("handles allowed and blocked regional traffic explicitly", () => {
    const expectedRegion = Cypress.env("expectedRegion");

    cy.safeRequest({
      method: "GET",
      url: "https://www.storis.com/",
    }).then((response) => {
      if (expectedRegion === "blocked") {
        expect(
          [403, 503],
          `error: user ip region is blocked. expected blocked status [403, 503], got ${response.status}`
        ).to.include(response.status);
      } else {
        expect(
          [200, 301, 302],
          `error: expected allowed region access, but received ${response.status}. this usually means user ip region is blocked`
        ).to.include(response.status);
      }
    });

    storisHomePage.visitRoot();

    if (expectedRegion === "blocked") {
      cy.log("error: user ip region is blocked");
      storisHomePage.assertCloudflareBlockPage();
      cy.log("all tests passed, ip region is valid");
      return;
    }

    storisHomePage.assertMainPageLoaded();
    cy.log("all tests passed, ip region is valid");
  });
});
