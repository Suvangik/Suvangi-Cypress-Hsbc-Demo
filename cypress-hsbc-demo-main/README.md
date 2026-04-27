# cypress-hsbc-demo
## Tools Required:
1. Node.js
2. Visual Studio Code
3. Create project folder
	- mkdir cypress-demo
	- cd cypress-demo
4. Initialize npm, run cmd: 	> npm init -y
5. Install Cypress, run cmd: > npm install cypress --save-dev
6. Install XPath plugin, run cmd: >npm install -D cypress-xpath
7. Opens Cypress Launchpad, run cmd: > npx cypress open
8. Two main testing types:
	a) E2E Testing (End-to-End)
	b) Component Testing

## Cypress Locators finding methods

1. Element by ID : cy.get('#id')
2. Element by class: cy.get('.class')
3. Element by Tag Name: cy.get('input')
4. Element by Attribute: cy.get('[type="value"]')
5. Elements with regular expression:
    // Starts with text 'user'
	cy.get('[id^="user"]')

	//Ends with the name
	cy.get('[id$="name"]')

	//contains substring  "log"
	cy.get('[id*="log"]')

6. Working with multiple elements

	cy.get('ul li').should('have.length', 10)
	cy.get('ul li').first().click()
	cy.get('ul li').eq(2).should('contain', 'item')
	cy.get('ul li').last().click()
	cy.get('ul li').contains('item')
	cy.get('ul li').find('item')

------------------------------------------------------

1. Validate homepage -- logo, title
2. Navigate to the login page
3. verify login screen elements -- header, buttons, disabled
4. interaction with elements like email username filed, checkbox, tooltips
5. validate pop-up screen, close button

--------------------------------------------------------------------------

