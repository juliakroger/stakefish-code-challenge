describe("Exchange Details Page", () => {
  beforeEach(() => {
    cy.visit("/binance");
  });

  it("loads data correctly", () => {
    cy.contains("Binance").should("exist");
    cy.contains("2017").should("exist");
    cy.contains(
      "For more details and information about this exchange go to this link."
    ).should("exist");
  });

  it("should go back to '/' when 'Go Back' button is clicked", () => {
    // Click the "Go Back" button
    cy.contains("Go Back").click();

    // Check if the URL is '/'
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });
});
