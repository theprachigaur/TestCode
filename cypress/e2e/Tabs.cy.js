describe('Handle tab-approach 1',()=>{
    it('approach 1',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get(".example >a").invoke('removeAttr','target').click()

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.go('back')
    })

    it('approach 2',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get(".example >a").then((e)=>{
            let url = e.prop('href')
            cy.visit(url)
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)
        cy.go('back')
    })
})