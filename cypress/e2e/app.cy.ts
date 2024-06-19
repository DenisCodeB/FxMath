describe('Navigation', () => {
    it('should navigate to the "About page"', () => {
        cy.visit('http://localhost:3000/')
        cy.get('a[href*="about"]').click()
        cy.url().should('include', '/about')
        cy.get('h1').contains(/About/)
    })

    it('should navigate to the "Contacts page"', () => {
        cy.visit('http://localhost:3000/')
        cy.get('a[href*="contacts"]').click()
        cy.url().should('include', '/contacts')
        cy.get('h1').contains(/Contacts/)
    })
})
