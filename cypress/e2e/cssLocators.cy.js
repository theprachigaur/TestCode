describe('CSS locators', () =>{
    it("cssLocators", () =>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("#search").type("T-Shirt")

        cy.get(".action.search").click()
        cy.get(".base").contains("T-Shirt")
    })
})