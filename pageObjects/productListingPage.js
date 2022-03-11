import baseElements from '../helpers/baseElements';
import BasePage from '../pageobjects/basePage';
import basketPage from './basketPage';

class ProductListingPage extends BasePage {
  get womensDepartment() {
    return $('[href="/en-gb/womens-clothing"]');
  }
  get mensDepartment() {
    return $('[href="/en-gb/mens-clothing"]');
  }
  get mensAllClothing() {
    return $('[href="/en-gb/mens-view-all"]');
  }
  get shopDresses() {
    return $('[href="/en-gb/womens-dresses"]');
  }
  get womensJeans() {
    return $('[href="/en-gb/womens-jeans"]');
  }
  get goods() {
    return $$('.product-grid-item');
  }
  get quickBuyForm() {
    return $('.quick-buy-dropdowns-wrapper');
  }
  get fit() {
    return $('.quick-buy-widget-fit');
  }
  get size() {
    return $('.quick-buy-widget-size');
  }
  get quickBuy() {
    return $('.quick-buy-open-button');
  }
  get addToBag() {
    return $('.quick-buy-add-button');
  }
  get fitItem() {
    return $('.quick-buy-widget-fit > div > button:nth-child(1)');
  }
  get sizeItem() {
    return $('.quick-buy-widget-item-size:not(.is-out-of-stock)');
  }
  get productItemPrice() {
    return $('.product-item-price-value');
  }
  get selectAnyError() {
    return $('.quick-buy-validation-message');
  }
  get productItemImage() {
    return $('.product-item-link[href*=maroon]');
  }
  get productTitleHeader() {
    return $('.product-title-header-style-description');
  }

  async openProductListingPage(department, plpPage) {
    await baseElements.selectUsingHover(department, plpPage);
  }

  async findItemWithParams(expectSizeCondition, expectFitCondition) {
    const goodsItemsArray = await this.goods;
    for (let i = 0; i < goodsItemsArray.length; i++) {
      const goodsItem = goodsItemsArray[i];
      goodsItem.scrollIntoView();

      await baseElements.click(await this.findeInItem(goodsItem, this.quickBuy));
      await (await this.findeInItem(goodsItem, this.quickBuyForm)).waitForDisplayed();

      let hasSize = await this.checkSize(goodsItem);
      let hasFit = await this.checkFit(goodsItem);

      if (expectSizeCondition === hasSize && expectFitCondition === hasFit) {
        return i;
      }
    }
  }

  async getPriceOfItem(item) {
    const priceOfItem = await (await this.findeInItem(this.goods[item], this.productItemPrice)).getText();
    return priceOfItem;
  }

  async selectItemsParams(item) {
    if (await this.checkFit(item)) {
      await baseElements.selectDropdownList(await this.findeInItem(item, this.fit), await this.findeInItem(item, this.fitItem));
    }
    if (await this.checkSize(item)) {
      await baseElements.selectDropdownList(await this.findeInItem(item, this.size), await this.findeInItem(item, this.sizeItem));
    }
  }

  async addGoodsToBasketWithParams(item) {
    const goodsItemsArray = await this.goods;
    const goodsItem = goodsItemsArray[item];
    await this.selectItemsParams(goodsItem);
    await baseElements.click(await this.findeInItem(goodsItem, this.addToBag));
  }

  async addItemWithoutParameters(item, expectFitButton) {
    const goodsItemsArray = await this.goods;
    const goodsItem = goodsItemsArray[item];

    let hasFit = await this.checkFit(goodsItem);

    if (expectFitButton === hasFit) {
      if (hasFit) {
        await baseElements.selectDropdownList(await this.findeInItem(goodsItem, this.size), await this.findeInItem(goodsItem, this.sizeItem));
      }
    }
    await baseElements.click(await this.findeInItem(goodsItem, this.addToBag));
    await this.selectAnyError.waitForDisplayed(2000);
  }

  async getErrorText() {
    return this.selectAnyError.getText();
  }

  async checkFit(item) {
    const hasFit = await (await this.findeInItem(item, this.fit)).isDisplayed();
    return hasFit;
  }

  async checkSize(item) {
    const hasSize = await (await this.findeInItem(item, this.size)).isDisplayed();
    return hasSize;
  }

  async findeInItem(item, element) {
    return item.$(await element.selector);
  }
}

export default new ProductListingPage();
