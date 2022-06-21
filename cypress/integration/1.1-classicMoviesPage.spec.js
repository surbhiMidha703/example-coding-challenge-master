describe("Checks components are present on the selected movie page", () => {
  it("Tests heading component is present", () => {
    cy.visit("http://localhost:3000/");
    cy.location("pathname").should("eq", "/");
    cy.get(".feature-box").eq(0).click();
    cy.get(".heading-primary--main").should("be.visible");
  });

  it("Tests the movie component is present", () => {
    cy.get(".movie-box").should("be.visible");
  });
});

describe("Checks elements within the components on the movie page are displayed correctly", () => {
  it("Tests the back button is displayed", () => {
    cy.get(".btn-primary").should("have.text", "← Back");
  });

  it("Tests the correct movie poster is displayed", () => {
    cy.get("img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
      );
  });

  it("Tests the correct movie title is displayed", () => {
    cy.get(".movie-box__title").should(
      "have.text",
      "Star Wars: Episode VII - The Force Awakens"
    );
  });

  it("Should display the plot heading with the movie plot below", () => {
    cy.get(".movie-box__plot").should("have.text", "Plot:");
    cy.get(".movie-box__plot--description").should(
      "have.text",
      "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Defected stormtrooper Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker."
    );
  });

  it("Should display the correct rating for the selected movie", () => {
    cy.get(".movie-box__rating")
      .should("have.attr", "src")
      // This was the only way I could find to import a PNG file into a cypress test
      .should(
        "include",
        "data:image/png;base64,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"
      );
  });

  it("Tests the price for cinemaWorld and ensures it's displayed green", () => {
    cy.get("#cheap").should("have.text", "Cinema World$24.7");
  });

  it("Tests the price for cinemaWorld is clickable", () => {
    cy.get("#cheap").click();
  });

  it("Tests the prince button for filmWorld and ensures it's displayed red", () => {
    cy.get("#expensive").should("have.text", "Film World$25");
  });

  it("Tests the price button for filmWorld is clickable", () => {
    cy.get("#expensive").click();
  });

  it("Tests the functionality of the back button", () => {
    cy.get(".btn-primary").click();
    cy.location("pathname").should("eq", "/");
  });
});
