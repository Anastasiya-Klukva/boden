import BasePage from './basePage';

class productDetailsPage extends BasePage {
  get size() {
    return $('#size8');
  }
  get fit() {
    return $('#fitPetite');
  }
  get addToBagButton() {
    return $('.productAddToBagButton-button');
  }
  get numOfGoodInBag() {
    return $('.header-rd__mini-basket-count');
  }
  get numOfGoodInBagCircle() {
    return $('#dmpgCircleCounter');
  }
  get colour() {
    return $('.product-swatch-link[alt="Cherry Red, Abstract Sprig"]');
  }
  get deliteItemButton() {
    return $('.item-remove-from-bag-button');
  }
  get fitValidationMessage() {
    return $('.product-detail-filter-container-fit.has-validation-error .product-detail-validation-message');
  }
  get productTitleHeader() {
    return $('.product-title-header-style-description');
  }

  get sizeValidationMessage() {
    return $('.product-detail-filter-container-size.has-validation-error .product-detail-validation-message');
  }
  get continueShoppingButton() {
    return $('.product-banner-continue-shopping');
  }
  async getNumOfGoodsFromBasket() {
    if (await this.numOfGoodInBag.isDisplayed()) {
      await browser.waitUntil(async () => (await this.numOfGoodInBag.getText()) === '1', {
        timeout: 5000,
      });
      return this.numOfGoodInBag.getText();
    } else {
      await browser.waitUntil(async () => (await this.numOfGoodInBagCircle.getText()) === '1', {
        timeout: 5000,
      });
      return this.numOfGoodInBagCircle.getText();
    }
  }
}

export default new productDetailsPage();
