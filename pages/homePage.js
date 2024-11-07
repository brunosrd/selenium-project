class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://staging.lacreisaude.com.br/';
        this.title = 'Olá, você está na Lacrei Saúde!';
    }

    // Abre a página inicial
    async open() {
        await this.driver.get(this.url);
    }
}

module.exports = HomePage;
