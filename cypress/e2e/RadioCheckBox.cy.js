/// <reference types="Cypress"/>

describe("Check UI elements",()=>{
    it("Checking radio buttons",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")

        //visibility of radio buttons
        //cy.get("#gender-radio-2").should('be.visible')
        //cy.get("#gender-radio-1").should('be.visible')

        //selecting radio buttons
        //cy.get("#gender-radio-2").click().should('be.checked')
        //cy.get("#gender-radio-1").click().should('not.be.checked')

        })

        it("Checking Check box buttons",()=>{
            cy.visit("https://demoqa.com/automation-practice-form")
    
            //visibility of radio buttons
            cy.get("#hobbies-checkbox-2").should('be.visible')
            cy.get("#hobbies-checkbox-2").check().should('be.checked')
            
    
            cy.get("#hobbies-checkbox-2").uncheck().should('not.be.checked')
            
        })
})