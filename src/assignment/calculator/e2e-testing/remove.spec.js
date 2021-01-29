describe('test button remove', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    afterEach(() => {
        cy.get('#num-clear').click()
    })

    it('test del ', () => {
        cy.get('#num-1').click()
        cy.get('#num-5').click()
        cy.get('#num-9').click()
        cy.get('#num-del').click()
        cy.get('#panel-calc').should('value', '15')
    })

    
})
