import mainBoden from '../pageobjects/mainBoden';
import productListingPage from '../pageobjects/productListingPage';
import { expect } from 'chai';
import basketPage from '../pageObjects/basketPage';
import baseElements from '../helpers/baseElements';
import productDetailsPage from '../pageObjects/productDetailsPage';

describe('Open product Listing Page, set params and check them. ', () => {
  beforeEach(async () => {
    await mainBoden.open();
    await baseElements.click(baseElements.acceptCookies);
    await productListingPage.openProductListingPage(productListingPage.mensDepartment, productListingPage.mensAllClothing);
  });

  it('Should add goods with Size to the basket. ', async () => {
    let item = await productListingPage.findItemWithParams(true, false);
    await productListingPage.addGoodsToBasketWithParams(item);
    expect(await productDetailsPage.getNumOfGoodsFromBasket()).to.equal('1');
  });

  it('Should add goods with both Size and Fit to the basket', async () => {
    let item = await productListingPage.findItemWithParams(true, true);
    await productListingPage.addGoodsToBasketWithParams(item);
    expect(await productDetailsPage.getNumOfGoodsFromBasket()).to.equal('1');
  });

  it('Should add goods to the bag without choosing both Size and Fit when available', async () => {
    let item = await productListingPage.findItemWithParams(true, true);
    await productListingPage.addItemWithoutParameters(item, false);
    expect(await productListingPage.selectAnyError.getText()).to.equal('Please select any');
  });

  it('Should add goods to the bag without choosing Size when available', async () => {
    let item = await productListingPage.findItemWithParams(true, false);
    await productListingPage.addItemWithoutParameters(item, false);
    expect(await productListingPage.selectAnyError.getText()).to.equal('Please select a size');
  });

  it('Should add goods to the bag without choosing Fit when available', async () => {
    let item = await productListingPage.findItemWithParams(true, true);
    await productListingPage.addItemWithoutParameters(item, true);
    expect(await productListingPage.selectAnyError.getText()).to.equal('Please select a fit');
  });

  it('Should do transition from PL page to PD page', async () => {
    await baseElements.click(productListingPage.productItemImage);
    expect(await productListingPage.productTitleHeader.getText()).contain('Cashmere Crew Neck');
  });
});
