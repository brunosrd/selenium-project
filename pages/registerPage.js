const { By, Key } = require('selenium-webdriver');

class RegisterPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://paciente-staging.lacreisaude.com.br/cadastro/';
    }

    // Abre a página de cadastro
    async open() {
        await this.driver.get(this.url);
    }

    // Realiza o cadastro com os dados fornecidos
    async register(nome, sobrenome, email, confirmEmail, password, confirmPassword) {
        // Insere o nome civil ou social
        await this.driver.findElement(By.id('#first_name')).sendKeys(nome);
        // Insere o sobrenome
        await this.driver.findElement(By.id('#last_name')).sendKeys(sobrenome);
        // Insere o email
        await this.driver.findElement(By.id('#email')).sendKeys(email);
        // Confirma o email
        await this.driver.findElement(By.id('#email2')).sendKeys(confirmEmail);
        // Insere a senha
        await this.driver.findElement(By.id('#password1')).sendKeys(password, Key.RETURN);
        //Confirma a senha
        await this.driver.findElement(By.id('#password1')).sendKeys(confirmPassword, Key.RETURN);

        // Marca os checklists
        await this.driver.findElement(By.id('checklist1')).click();
        await this.driver.findElement(By.id('checklist2')).click()

        // Clica no botão de cadastrar
        await this.driver.findElement(By.id('register_button')).click();
    }
}

module.exports = RegisterPage;
