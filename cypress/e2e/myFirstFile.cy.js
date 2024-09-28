describe('My First Test', () => {
    it('Verify title - Postitve', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")    
        cy.title().should('eq','OrangeHRM')
    })

    it('Verify title - Negative', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")    
        cy.title().should('eq','12OrangeHRM')
    })
  })