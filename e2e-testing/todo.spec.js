describe("Todo App", () => {
  it("successfully load app", () => {
    cy.visit("/");
  });

  it("add todo", () => {
    cy.get("#todo").type("mandi");
    cy.get("#todo-form").submit();
    cy.get("#todo-list").children().should("have.length", 3);
  });

  it("clear all todo", () => {
    cy.get("#todo-clear").click();
    cy.get("#todo-list").children().should("have.length", 0);
  });
});
