// Página de Login
const { By, Key } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://staging.lacreisaude.com.br/';
    }

    // Abre a página de login
    async open() {
        await this.driver.get(this.url);
    }

    // Realiza o login com email e senha fornecidos
    async login(email, password) {
        await this.driver.findElement(By.css("[aria-label='Ir para página de login do paciente']")).click();
        await this.driver.findElement(By.id('#email')).sendKeys(email);
        await this.driver.findElement(By.id('#password')).sendKeys(password, Key.RETURN);
    }
}

module.exports = LoginPage;
