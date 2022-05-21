describe("My first test", function(){
    it("Visits the kitchen sink", function(){
        cy.visit('https://example.cypress.io')

    })
    it("Find an element", function(){
        cy.contains('type')
    })
    it("Click an element", function(){
        cy.contains('type').click()

        cy.url().should("include", "/commands/actions")
    })
    it("write an email", function(){
        cy.get('.action-email')
            .type("fake@email.com")
            .should("have.value", "fake@email.com")
    })
})