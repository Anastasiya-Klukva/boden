import BasePage from '../pageObjects/basePage';
import baseElements from '../helpers/baseElements';

class Footer extends BasePage {
  get sizingButton() {
    return $('a[href$="sizing#Footer"]');
  }
  get freeDeliveryButton() {
    return $('a.cta[href*="delivery"]');
  }
  get facebookButton() {
    return $('//a[@href="https://www.facebook.com/JohnnieBoden"]');
  }
  get twitterButton() {
    return $('//a[@href="https://twitter.com/bodenclothing"]');
  }
  get pinterestButton() {
    return $('//a[@href="https://www.pinterest.com/boden/"]');
  }
  get instagramButton() {
    return $('//a[@href="https://www.instagram.com/boden_clothing/"]');
  }
  get returnsAndRefundsButton() {
    return $('//span[text()="Returns & Refunds"]');
  }
  get returnsAndRefundsPage() {
    return $('.even.last.is-current');
  }
  get singUpForEmailField() {
    return $('#strEmail');
  }
  get singUpForEmailConfirmPage() {
    return $('.email-signup__heading');
  }

  async clickFooterButton(button, url) {
    await button.scrollIntoView();
    await baseElements.click(button);
    await browser.switchWindow(url);
  }
}

export default new Footer();
