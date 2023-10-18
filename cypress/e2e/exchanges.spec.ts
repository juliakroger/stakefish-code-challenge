describe("Exchanges Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads data correctly", () => {
    cy.get("[data-cy=table-row]").should("have.length.greaterThan", 0);
  });

  it("navigates to details page on item click", () => {
    cy.get("[data-cy=table-row]").first().click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/binance`);
  });

  it("pagination works", () => {
    cy.get("[data-cy=table-row]").first().should("contain", "Binance");

    cy.get("[data-cy=pagination-1-button]").should(
      "have.css",
      "background-color",
      "rgb(48, 149, 117)"
    );

    cy.get("[data-cy=pagination-3-button]").click();

    cy.get("[data-cy=table-row]").first().should("contain", "XT.COM");
  });

  it("redirects to Binance when link is clicked", () => {
    cy.get("[data-cy=table-row]")
      .first()
      .get("a")
      .should("have.attr", "href")
      .and("include", "https://www.binance.com/")
      .then((href: any) => {
        cy.request({
          url: href,
          failOnStatusCode: false,
        }).then((response: any) => {
          expect(response.status).to.eq(200);
          expect(response.redirects[0]).to.include("https://www.binance.com/");
        });
      });
  });
});
