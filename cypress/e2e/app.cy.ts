describe("Home page", () => {
  it("renders title", () => {
    cy.visit("/");
    cy.get("h1").contains("Vite + React");

    cy.percySnapshot("Counter");

    cy.argosScreenshot("home");

    cy.get("button").click();

    cy.percySnapshot("Counter incremented");
  });
});
