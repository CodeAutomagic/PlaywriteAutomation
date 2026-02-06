const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.username = 'input[name="username"]';
    this.password = 'input[name="password"]';
    this.submit = 'button[type="submit"]';
    this.welcome = '#welcome';
    this.userSpan = '#user';
  }

  async login(user, pass) {
    await this.fill(this.username, user);
    await this.fill(this.password, pass);
    await this.click(this.submit);
  }

  async getWelcome() {
    await this.waitForSelector(this.welcome);
    return (await this.textContent(this.welcome)) || '';
  }
}

module.exports = LoginPage;
