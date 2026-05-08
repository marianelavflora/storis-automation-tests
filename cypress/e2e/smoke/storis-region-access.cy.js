const storisHomePage = require("../../pages/storisHomePage");

describe("STORIS regional access smoke", () => {
  // Flow:
  // 1) Read expected region from env.
  // 2) Check homepage status against allowed/blocked rules.
  // 3) Visit UI and validate block page or main page.
  it("handles allowed and blocked regional traffic explicitly", () => {
    const expectedRegion = Cypress.env("expectedRegion");

    cy.safeRequest({
      method: "GET",
      url: "https://www.storis.com/",
    }).then((response) => {
      if (expectedRegion === "blocked") {
        expect(
          [403, 503],
          `info: valid region was received. expected blocked status [403, 503], got ${response.status}`
        ).to.include(response.status);
      } else {
        expect(
          [200, 301, 302],
          `info: valid region was received. expected allowed status [200, 301, 302], got ${response.status}`
        ).to.include(response.status);
      }
    });

    storisHomePage.visitRoot();

    if (expectedRegion === "blocked") {
      cy.log("info: valid region was received");
      storisHomePage.assertCloudflareBlockPage();
      cy.log("info: valid region was received");
      return;
    }

    storisHomePage.assertMainPageLoaded();
    cy.log("info: valid region was received");
  });
});
