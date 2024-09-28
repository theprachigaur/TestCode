
//https://docs.cypress.io/api/cypress-api/catalog-of-events
describe('Alerts',()=>{

//1. Javascript alert: will have some text and ok button

    it.skip('JS alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
//alert window automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })




//2. Javascript confirm alert: some text with ok and cancel button

it.skip('JS Confirm alert - Ok',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm')
    })
//alert window automatically closed by cypress
    cy.on('window:confirm',()=>false)//close by clicking on cancel button
    cy.get('#result').should('have.text','You clicked: Cancel')
})


it.skip('JS Confirm alert - Cancel',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm')
    })
//alert window automatically closed by cypress

    cy.get('#result').should('have.text','You clicked: Ok')
})

//3. Javascript prompt alert: some text with a text box for user input along with 'ok'
it.skip('JS Prompt alert - ok',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    
    cy.window().then(win=>{
        cy.stub(win, 'prompt').returns('welcome')
    })
    cy.get("button[onclick='jsPrompt()']").click()

    //cypress will automatically click on OK
    cy.get('#result').should('have.text','You entered: welcome')
})

it.skip('JS Prompt alert - cancel',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    
    cy.window().then(win=>{
        cy.stub(win, 'prompt').returns('welcome')
    })
    cy.get("button[onclick='jsPrompt()']").click()
    cy.on('window:prompt',()=>false)//close by clicking on cancel button
    //cypress will automatically click on OK
    cy.get('#result').should('have.text','You entered: null')
})


//4. Authentication alert


it('Authentication alert',()=>{
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                                {
                                                                    username:"admin",
                                                                    password:"admin"
                                                                }

    });
    cy.get("div[class='example'] p").should('have.contain','Congratulations')

  
})

it('Authentication alert',()=>{

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should('have.contain','Congratulations')

  
})

})
