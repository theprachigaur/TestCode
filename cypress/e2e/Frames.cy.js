describe('Test Iframe',()=>{

    it.skip('Test iFrame',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const frame = cy.get('#mce_0_ifr')
                .its('0.contentDocument.body')
                .should('be.visible')
                .then(cy.wrap)

        frame.clear().type('welcome {ctrl+a}')
        cy.get("[aria-label='Bold']").click()           
    })


    it.skip('Test iFrame - approach 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIFrame('#mce_0_ifr')
        .clear().type('welcome {ctrl+a}')
        cy.get("[aria-label='Bold']").click()           
    })


    
    it.only('Test iFrame - approach 3 - using plugin',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_if')
        cy.iframe('#mce_0_if').clear().type("welcome")

    })
})