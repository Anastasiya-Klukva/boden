import BasePage from '../pageObjects/basePage';

class MiniBasketComponents extends BasePage {
  get selectedItem() {
    return $('.item-head-wrapper');
  }
  get itemDescription() {
    return $('.item-heading a');
  }
  get itemDetails() {
    return $('.item-details');
  }
  get itemPrice() {
    return $('.miniBasketDrawerContent .product-item-price-value > span');
  }
  get removeButton() {
    return $('.item-remove-from-bag-button');
  }
  get emptyMinibasketDrawer() {
    return $('.snippetReference.reference-empty-mini-basket-drawer strong');
  }
  get checkoutSecurelyButton() {
    return $('.button.mini-basket-drawer-checkout');
  }
  async getTextFromMinibasketElement(element) {
    await element.waitForExist();
    await element.getText();
  }
  async getPriceOfItemFromMiniBasket() {
    await this.itemPrice.isDisplayed();
    return this.itemPrice.getText();
  }
}

export default new MiniBasketComponents();
