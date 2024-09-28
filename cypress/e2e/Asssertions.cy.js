
describe("Assertions demo",() =>{
    it("Implicit assertion",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")    
        cy.title().should('eq','OrangeHRM')

        cy.url().should('include','orangehrmlive')

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.url().should('contain','orangehrm')


        
        //cy.url().should('include','orangehrmlive')

        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        //.should('contain','orangehrm')
   
        //use and

        cy.url().should('include','orangehrmlive')

        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        .and('contain','orangehrm')
        

        //not - negative

        
        cy.url().should('not.include','123123')

        .and('not.eq','https://opensource-demo.123orangehrmlive.com/web/index.php/auth/login')
    
        .and('not.contain','orangehrm123')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')


        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

       // cy.xpath("//a").should('have.lenthg','5') //no of links

        cy.get("input[placeholder='Username']").type("Admin") //provide value into input text box

        cy.get("input[placeholder='Username']").should('have.value','Admin') //provide value into input text box
     })


     it("Explicit assertion",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin") //provide value into input text box
        cy.get("input[placeholder='Password']").type("admin123") //provide value into input text box
        cy.get("button[type='submit']").click()


        let expName="zEiFPuNCfw Aszx";
        
        cy.get('.oxd-userdropdown-name').then( (x)=>{
            let actName = x.text()

            //for more assertions refer --> cypress-->doc--> references--> assertions
            //BDD Style 
            expect(actName).to.equal(expName)
            expect("xyz").to.not.equal(expName)


            //TDD style
            assert.equal(actName, expName)
            assert.not.equal("xyz", expName)
        })

    })
})
