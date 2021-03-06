const BOBasePage = require('../BObasePage.js');

class Login extends BOBasePage {
  constructor() {
    super();

    this.pageTitle = 'PrestaShop';
    this.loginErrorText = 'The employee does not exist, or the password provided is incorrect.';

    // Login header selectors
    this.loginHeaderBlock = '#login-header';
    this.psVersionBlock = `${this.loginHeaderBlock} div.text-center`;

    // Login Form selectors
    this.emailInput = '#email';
    this.passwordInput = '#passwd';
    this.submitLoginButton = '#submit_login';
    this.alertDangerDiv = '#error';
    this.alertDangerTextBlock = `${this.alertDangerDiv} li`;
  }

  /*
  Methods
   */

  /**
   * Enter credentials and submit login form
   * @param page
   * @param email
   * @param password
   * @param waitForNavigation, false if login should fail
   * @returns {Promise<void>}
   */
  async login(page, email = global.BO.EMAIL, password = global.BO.PASSWD, waitForNavigation = true) {
    await this.setValue(page, this.emailInput, email);
    await this.setValue(page, this.passwordInput, password);

    // Wait for navigation if login is successful
    if (waitForNavigation) {
      await this.clickAndWaitForNavigation(page, this.submitLoginButton);
    } else {
      await page.click(this.submitLoginButton);
    }
  }

  /**
   * Get login error
   * @param page
   * @return {Promise<string>}
   */
  async getLoginError(page) {
    return this.getTextContent(page, this.alertDangerTextBlock);
  }

  /**
   * Get prestashop version from login page
   * @param page
   * @return {Promise<string>}
   */
  getPrestashopVersion(page) {
    return this.getTextContent(page, this.psVersionBlock);
  }
}

module.exports = new Login();
