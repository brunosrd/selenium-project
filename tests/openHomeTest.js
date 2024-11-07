const { Builder } = require('selenium-webdriver');
const HomePage = require('../../pages/homePage');
const { expect } = require('chai');

describe('Home Page Tests', function() {
    this.timeout(30000); // Define um timeout maior para os testes

    let driver;
    let homePage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        homePage = new HomePage(driver);
    });

    after(async function() {
        await driver.quit();
    });

    it('Deve abrir a página inicial e verificar o título', async function() {
        // Abre a página inicial
        await homePage.open();
        
        // Obtém o título da página
        const title = await driver.getTitle();
        
        // Verifica se o título é igual ao esperado
        expect(title).to.equal(homePage.title);
    });
});
