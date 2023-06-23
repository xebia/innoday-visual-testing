describe("template spec", () => {
  it("screenshots a page with argos", () => {
    cy.visit("/");
    cy.get("h1").contains("Vite + React");

    cy.argosScreenshot("home");
  });
});
