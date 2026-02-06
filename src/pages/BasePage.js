class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url, options) {
    await this.page.goto(url, options);
  }

  async click(selector, options) {
    await this.page.click(selector, options);
  }

  async fill(selector, text, options) {
    await this.page.fill(selector, text, options);
  }

  async textContent(selector) {
    return await this.page.textContent(selector);
  }

  async waitForSelector(selector, options) {
    await this.page.waitForSelector(selector, options);
  }
}

module.exports = BasePage;
