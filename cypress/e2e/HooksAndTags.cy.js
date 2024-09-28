//before - only once - before all it blocks
//after - only once - after all it blocks
//beforeach - Before every it block
//aftereach  -  after every it block

describe('My Test Suite',()=>{

    before(()=>{

        cy.log("********* Before launch *********")
    })

    after(()=>{

        cy.log("********* After launch *********")
    })

    beforeEach(()=>{

        cy.log("********* Login - Start method *********")
    })

    afterEach(()=>{

        cy.log("********* Close - End method *********")
    })
    it('search',()=>{
        cy.log("********* Search **********")
    })

    it('Advanced search',()=>{
        cy.log("********* Advanced Search **********")
    })

    it('Listing products',()=>{
        cy.log("********* Listing products **********")
    })
})