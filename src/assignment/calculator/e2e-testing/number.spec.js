
describe('test button number', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    afterEach(() => {
      cy.get('#panel-calc').then(($panel) => {
        $panel[0].value=0;
      })
    });

    it('test number 1', () => {
      cy.get('#num-1').click();
      cy.get('#panel-calc').should('value',1);
    });

    it('test number 2', () => {
      cy.get('#num-2').click();
      cy.get('#panel-calc').should('value',2);
    });

    it('test number 3', () => {
      cy.get('#num-3').click();
      cy.get('#panel-calc').should('value',3);
    });

    it('test number 4', () => {
      cy.get('#num-4').click();
      cy.get('#panel-calc').should('value',4);
    });
 
    it('test number 5', () => {
       cy.get('#num-5').click();
       cy.get('#panel-calc').should('value',5);
    });

    it('test number 6', () => {
      cy.get('#num-6').click();
      cy.get('#panel-calc').should('value',6);
    });

    it('test number 7', () => {
      cy.get('#num-7').click();
      cy.get('#panel-calc').should('value',7);
    });

    it('test number 8', () => {
      cy.get('#num-8').click();
      cy.get('#panel-calc').should('value',8);
    });

    it('test number 9', () => {
      cy.get('#num-9').click();
      cy.get('#panel-calc').should('value',9);
    });

    it('test number 0', () => {
      cy.get('#num-0').click();
      cy.get('#panel-calc').should('value',0);
    });
})
