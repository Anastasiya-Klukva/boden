import mainBoden from '../pageobjects/mainBoden';
import productListingPage from '../pageobjects/productListingPage';
import topNavComponents from '../pageComponents/topNavComponents';
import header from '../pageComponents/header';
import miniBasketСomponents from '../pageComponents/miniBasketСomponents';
import baseElements from '../helpers/baseElements';
import productDetailsPage from '../pageObjects/productDetailsPage';
import { expect } from 'chai';

describe('MiniBasket tests ', () => {
  let priceOfItem;
  beforeEach(async () => {
    await mainBoden.open();
    await baseElements.click(baseElements.acceptCookies);
    await productListingPage.openProductListingPage(topNavComponents.womenNavigationButton, header.dressesAndJumpsuitsLink);
    let item = await productListingPage.findItemWithParams(true, true);
    priceOfItem = await productListingPage.getPriceOfItem(item);
    await productListingPage.addGoodsToBasketWithParams(item);
    await header.header.scrollIntoView();
    await header.miniBasketButton.waitForExist();
    await baseElements.click(header.miniBasketButton);
  });

  it('should check the ability to jump to goods page', async () => {
    await baseElements.click(miniBasketСomponents.selectedItem);
    expect(await productDetailsPage.productTitleHeader.getText()).to.contain(await miniBasketСomponents.itemDescription.getText());
  });

  it('should check the ability to delete goods', async () => {
    await baseElements.click(miniBasketСomponents.removeButton);
    await miniBasketСomponents.getTextFromMinibasketElement(miniBasketСomponents.emptyMinibasketDrawer);
    expect(await miniBasketСomponents.emptyMinibasketDrawer.getText()).to.equal('Your shopping bag is empty');
  });

  it('should check the ability to jump to basket', async () => {
    await baseElements.click(miniBasketСomponents.checkoutSecurelyButton);
    expect(await browser.getTitle()).to.equal('Boden UK - Checkout - Shopping bag');
  });

  it('should check if params of selected goods is correct', async () => {
    expect(await miniBasketСomponents.itemDetails.getText()).to.equal('Ivory, Exotic Floral 12 PET');
  });

  it('should check if price of selected goods is correct', async () => {
    expect(priceOfItem).to.equal(await miniBasketСomponents.getPriceOfItemFromMiniBasket());
  });
});
