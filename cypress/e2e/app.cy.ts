describe("Home page", () => {
  it("renders title", () => {
    cy.visit("/");
    cy.get("h1").contains("Vite + React");

    cy.percySnapshot("Counter");

    cy.get("button").click();

    cy.percySnapshot("Counter incremented");
  });
});
