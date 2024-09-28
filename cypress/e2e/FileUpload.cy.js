import 'cypress-file-upload';

describe('File uploads',()=>{
    it('single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.wait(5000)
        cy.get('#file-upload').attachFile('Test1.pdf')
        cy.get('#file-submit').click()

        
        cy.wait(5000)
        cy.get('h3').should('have.text','File Uploaded!')
 
    })
    it('File upload - Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.wait(5000)
        cy.get('#file-upload').attachFile({filePath:'Test1.pdf', fileName:'myFile.pdf'})
        cy.get('#file-submit').click()

        
        cy.wait(5000)
        cy.get('h3').should('have.text','File Uploaded!')
        
    })
    it.only('File Upload - Drag and drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.wait(5000)
        cy.get('#drag-drop-upload').attachFile('Test1.pdf', {subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('Test1.pdf')        
    })
    it('Multiple file uploads',()=>{

        
    })
    it('File upload - shadow down',()=>{

        
    })
    it('single file upload',()=>{

        
    })

})