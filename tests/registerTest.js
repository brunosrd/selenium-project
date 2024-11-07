const { Builder } = require('selenium-webdriver');
const RegisterPage = require('../../pages/registerPage');
const { expect } = require('chai');

describe('Register Tests', function() {
    this.timeout(30000); // Define um timeout maior para os testes

    let driver;
    let registerPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        registerPage = new RegisterPage(driver);
    });

    after(async function() {
        await driver.quit();
    });

    it('Deve realizar o cadastro com sucesso', async function() {
        // Abre a página de cadastro
        await registerPage.open();
        
        // Realiza o cadastro com os dados fornecidos
        await registerPage.register(
            'NomeExemplo', 
            'SobrenomeExemplo', 
            'teste@exemplo.com', 
            'teste@exemplo.com', 
            'senha123',
            'senha123'
        );
        
        // Verifica se o título da página é 'Confirmação de Cadastro - Lacrei Saúde'
        const title = await driver.getTitle();
        expect(title).to.equal('Confirmação de Cadastro - Lacrei Saúde');
    });
});
