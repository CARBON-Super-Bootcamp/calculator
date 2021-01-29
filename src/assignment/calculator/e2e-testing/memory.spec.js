
describe('test memory', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    afterEach(() => {
      cy.get('#panel-calc').then(($panel) => {
        $panel[0].value=0;
      })
    });

    it('memorize value and show value ', () => {
        cy.get('#num-1').click()
        cy.get('#num-5').click()
        cy.get('#num-m').click()
        cy.get('#num-clear').click()
        cy.get('#num-n').click()
        cy.get("#save").children().should("have.length",2);
    })

    it('choose memory value ', () => {
        cy.get('#num-1').click()
        cy.get('#num-5').click()
        cy.get('#num-m').click()
        cy.get('#num-clear').click()
        cy.get('#num-n').click()
        cy.get('#save').select('15')
        cy.get('#panel-calc').should('value','15');
    })

    
})
