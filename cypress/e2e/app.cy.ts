describe("Home page", () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: "Visual testing app",
      testName: Cypress.currentTest.title,
    });
  });

  it("renders title", () => {
    cy.visit("/");
    cy.get("h1").contains("Vite + React");

    cy.percySnapshot("Counter");
    cy.argosScreenshot("home");
    cy.get("body").happoScreenshot();
    cy.eyesCheckWindow({ fully: true, timeout: 3000 });

    cy.get("button").click();

    cy.percySnapshot("Counter incremented");
  });

  afterEach(() => {
    cy.eyesClose();
  });
});
