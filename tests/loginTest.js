const { Builder } = require('selenium-webdriver');
const LoginPage = require('../../pages/loginPage');
const { expect } = require('chai');

describe('Login Tests', function() {
    this.timeout(30000); // Define um timeout maior para os testes

    let driver;
    let loginPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(driver);
    });

    after(async function() {
        await driver.quit();
    });

    it('Deve realizar o login com sucesso', async function() {
        // Abre a página de login
        await loginPage.open();
        
        // Realiza o login com email e senha
        await loginPage.login('bruno.soares@lacreisaude.com.br', 'Lacrei123@');
        
        // Verifica se o título da página é 'Dashboard - Lacrei Saúde'
        const title = await driver.getTitle();
        expect(title).to.equal('Boas-vindas à Lacrei Saúde!');
    });
});
