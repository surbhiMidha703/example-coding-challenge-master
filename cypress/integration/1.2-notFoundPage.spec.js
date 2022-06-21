describe("Checks components are present on the not found page", () => {
  it("Tests heading component is present", () => {
    cy.visit("http://localhost:3000/thisisatest");
    cy.location("pathname").should("eq", "/thisisatest");
    cy.get(".heading-primary--main").should("be.visible");
  });

  it("Tests the page not markup is present", () => {
    cy.get(".page-not-found").should("be.visible");
  });

  it("Tests the error message is displayed to the user", () => {
    cy.get(".page-not-found__text").should(
      "have.text",
      "I'm sorry, that page doesn't exist! Please click the back button to go back to the homepage."
    );
  });

  it("Tests the back button returns the user to the homepage", () => {
    cy.get(".btn-primary").click();
    cy.location("pathname").should("eq", "/");
  });
});
