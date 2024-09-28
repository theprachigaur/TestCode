describe("Mouse operations", ()=>{

    it.skip('Mouse Hover',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a')
        .should('not.be.visible');

        cy.get('.nav > :nth-child(1) > .dropdown-toggle')
        .trigger('mouseover').click()

        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a')
        .should('be.visible');
    })

    it.skip('Right Click',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span")
        .should('not.be.visible')
        cy.get('.context-menu-one')
        .trigger('contextmenu')
        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span")
        .should('be.visible')

    })

    it.skip('Double Click',()=>{
        
        //approach 1
        //.trigger(dblclick)

        //approach 2
        //dblclick

    })

    it.skip('Drag and Drop using plugin',()=>{
        //install plugin - npm install --save-dev @4tw/cypress-drag-drop
        //cy.get('.sourceitem').drag('.targetitem')
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-1.html")
        cy.get('#box1').drag('#box102')
    })

    it.only('Scrolling page',()=>{
        
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
//  scroll till element is found

        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(86) > td:nth-child(2)").scrollIntoView({duration:5000})

        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(86) > td:nth-child(2)")
        .should('be.visible')

        cy.get('#footer').scrollIntoView({duration:5000})

    })

    it('Mouse Hover',()=>{
        
    })


})