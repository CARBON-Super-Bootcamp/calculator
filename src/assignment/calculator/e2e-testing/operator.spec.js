describe('test button operator', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    afterEach(() => {
        cy.get('#num-clear').click()
    })

    it('test operator + ', () => {
        cy.get('#num-1').click()
        cy.get('#num-plus').click()
        cy.get('#num-5').click()
        cy.get('#panel-calc').should('value', '1+5')
    })

    it('test operator - ', () => {
        cy.get('#num-8').click()
        cy.get('#num-sub').click()
        cy.get('#num-7').click()
        cy.get('#panel-calc').should('value', '8-7')
    })

    it('test operator * ', () => {
        cy.get('#num-9').click()
        cy.get('#num-mul').click()
        cy.get('#num-3').click()
        cy.get('#panel-calc').should('value', '9x3')
    })

    it('test operator / ', () => {
        cy.get('#num-6').click()
        cy.get('#num-dev').click()
        cy.get('#num-2').click()
        cy.get('#panel-calc').should('value', '6/2')
    })


    it('test operator = ', () => {
        cy.get('#num-6').click()
        cy.get('#num-dev').click()
        cy.get('#num-2').click()
        cy.get('#num-eq').click()
        cy.get('#panel-calc').should('value', '3')
    })

    it('test operator ** ', () => {
        cy.get('#num-2').click()
        cy.get('#num-pow').click()
        cy.get('#num-3').click()
        cy.get('#panel-calc').should('value', '2^3')
    })
})
