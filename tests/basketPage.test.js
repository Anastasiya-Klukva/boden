import mainBoden from '../pageobjects/mainBoden';
import basketPage from '../pageObjects/basketPage';
import { expect } from 'chai';
import baseElements from '../helpers/baseElements';
import productListingPage from '../pageObjects/ProductListingPage';
import header from '../pageComponents/header';

describe('Add goods to basket check them', () => {
  let priceOfItem;
  beforeEach(async () => {
    await mainBoden.open();
    await baseElements.click(baseElements.acceptCookies);
    await productListingPage.openProductListingPage(productListingPage.womensDepartment, productListingPage.womensJeans);
    let item = await productListingPage.findItemWithParams(true, true);
    await productListingPage.addGoodsToBasketWithParams(item);
    priceOfItem = await productListingPage.getPriceOfItem(item);
    await header.header.scrollIntoView();
    await baseElements.click(basketPage.miniBasketButton);
    await baseElements.click(basketPage.secureCheckoutButton);
  });

  it('Should check if price of selected goods is correct', async () => {
    expect(priceOfItem).to.equal(await basketPage.priceOfSelectedGoods.getText());
  });

  it('Should check if params of selected goods is correct', async () => {
    expect(await basketPage.selectedParameters.getText()).to.have.string('6 PET');
  });

  it('Should check if busket is empty after removing', async () => {
    await basketPage.removeItemFromBusket();
    expect(await basketPage.shoppingBagContents.isDisplayed()).to.equal(false);
  });

  it('Should be open goods page which redirected from busket after clicking it', async () => {
    const itemsName = await basketPage.itemsNameLink.getText();
    await baseElements.click(basketPage.itemsNameLink);
    expect(await browser.getTitle()).to.have.string(itemsName);
  });

  it('Should check if total price of goods is correct', async () => {
    expect(priceOfItem).to.equal(await basketPage.totalPrice.getText());
  });

  it('Should check if total amount of goods is correct', async () => {
    expect(await basketPage.totalItemAmount.getText()).to.have.string('Total: 1 item');
  });

  it('Should continue shopping', async () => {
    await baseElements.click(basketPage.continueShopingButton);
    expect(await browser.getTitle()).to.include('Denim Jeans');
  });

  it('Should go to checkout', async () => {
    await baseElements.click(basketPage.checkoutButton);
    expect(await browser.getTitle()).to.include('Sign in');
  });
});
