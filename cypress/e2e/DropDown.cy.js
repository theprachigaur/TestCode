describe('handle dropdown', () => {
    it.skip('Dropdown with select', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")    
        cy.get("#zcf_address_country")
        .select('Italy').should('have.value','Italy')
    })


    it.skip('Dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")    
        
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Italy").type('{Enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')
    })

    it.skip('AutoSuggest dropdown', () => {
        cy.visit("https://www.wikipedia.org/")    
        
        cy.get("#searchInput").type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()

    })

    
    it('Dynamic dropdown', () => {
        cy.visit("https://www.google.com/")    
        
        cy.get("textarea[name='q']").type('Cypress Automation')

       // cy.get('div.wM6W7d').should('have.length',11)
        cy.get('div.wM6W7d').each(($el, text, $list)=>{
            if($el.text()=='cypress automation tool'){
                cy.wrap($el).click()
            }
        })

        cy.get("textarea[name='q']").should('have.value','cypress automation tool')

    })
}) 