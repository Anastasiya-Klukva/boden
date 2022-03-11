import baseElements from '../helpers/baseElements';
import BasePage from './basePage';
import productListingPage from './productListingPage';

class BasketPage extends BasePage {
  get miniBasketButton() {
    return $('button.header-rd__mini-basket');
  }
  get removeFromMiniBasket() {
    return $('.item-remove-from-bag-button');
  }
  get removeFromBasket() {
    return $('.remove');
  }
  get numberOfGoodsInBasket() {
    return $('.header-rd__mini-basket-count');
  }
  get circleCounter() {
    return $('#dmpgCircleCounter');
  }
  get secureCheckoutButton() {
    return $('.mini-basket-drawer-checkout');
  }
  get priceOfSelectedGoods() {
    return $('span.coPListFinalPrice');
  }
  get totalPrice() {
    return $('#shoppingBagTotalPrice');
  }
  get shoppingBagContents() {
    return $('#coShoppingBagContents');
  }
  get emptyBasket() {
    return $('.coShoppingBagEmpty');
  }
  get selectedParameters() {
    return $('.coPListPTitle');
  }
  get itemsNameLink() {
    return $('.coPListPTitle [href*="boden.co.uk"]');
  }
  get totalItemAmount() {
    return $('p.coPListTotal');
  }
  get continueShopingButton() {
    return $('#continueShoppingBottomLink');
  }
  get checkoutButton() {
    return $('#coGuestButtonTop');
  }

  async removeItemFromBusket() {
    await baseElements.click(this.removeFromBasket);
    await this.shoppingBagContents.waitUntil(async () => {
      return (await this.shoppingBagContents.isDisplayed()) == false;
    });
  }
}

export default new BasketPage();
