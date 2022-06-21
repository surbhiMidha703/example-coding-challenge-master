describe("Checks components are present on the landing page", () => {
  it("Tests heading component is present", () => {
    cy.visit("http://localhost:3000");
    cy.location("pathname").should("eq", "/");
    cy.get(".heading-primary--main")
      .should("be.visible")
      .should("have.text", "Prince's Theatre");
  });

  it("Tests about component is present", () => {
    cy.get(".about-text").should("be.visible");
    cy.get(".heading-secondary")
      .should("be.visible")
      .should("have.text", "Classic Movies At Home");
    cy.get(".about-text--p")
      .should("be.visible")
      .should(
        "have.text",
        "Prince’s Theatre is a small independent theatre in the inner eastern suburbs of Melbourne. The Prince family has run it for over 50 years. Recently the family business has been passed down to the families two youngest grand children Jane and Travis Prince. Check out Prince's Theatres awesome selection of classic feature films at the lowest prices on all streaming services."
      );
  });

  it("Tests movie list is present", () => {
    cy.get(".section-features").should("be.visible");
  });
});

describe("Checks elements within the components on the landing page are displayed accurately", () => {
  it("Tests the error message is not visible if there is no error, or their is movies to be displayed", () => {
    cy.get(".error-message").should("not.be.visible");
  });

  it("Tests the fetch request has returned all the movies from the api", () => {
    cy.get(".feature-box")
      .eq(0)
      .should("have.text", "Star Wars: Episode VII - The Force Awakens")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
      );
    cy.get(".feature-box")
      .eq(1)
      .should("have.text", "Star Wars: Episode VIII - The Last Jedi")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
      );
    cy.get(".feature-box")
      .eq(2)
      .should("have.text", "Star Wars: Episode IX - The Rise of Skywalker")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
      );
    cy.get(".feature-box")
      .eq(3)
      .should("have.text", "Rogue One: A Star Wars Story")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
      );
    cy.get(".feature-box")
      .eq(4)
      .should("have.text", "Solo: A Star Wars Story")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg"
      );
    cy.get(".feature-box")
      .eq(5)
      .should("have.text", "Star Wars: Episode IV - A New Hope")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      );
    cy.get(".feature-box")
      .eq(6)
      .should("have.text", "Star Wars: Episode V - The Empire Strikes Back")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      );
    cy.get(".feature-box")
      .eq(7)
      .should("have.text", "Star Wars: Episode VI - Return of the Jedi")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      );
    cy.get(".feature-box")
      .eq(8)
      .should("have.text", "Star Wars: Episode I - The Phantom Menace")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      );
    cy.get(".feature-box")
      .eq(9)
      .should("have.text", "Star Wars: Episode II - Attack of the Clones")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
      );
    cy.get(".feature-box")
      .eq(10)
      .should("have.text", "Star Wars: Episode III - Revenge of the Sith")
      .find("img")
      .should("have.attr", "src")
      .should(
        "contain",
        "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
      );
  });
});
