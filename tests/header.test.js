import mainBoden from '../pageobjects/mainBoden';
import header from '../pageComponents/header';
import baseElements from '../helpers/baseElements';
import { expect } from 'chai';
import topNavComponents from '../pageComponents/topNavComponents';

describe('Open main page and interact with heder', () => {
  beforeEach(async () => {
    await mainBoden.open();
  });

  it('Sould open main page by logo', async () => {
    await baseElements.click(header.logo);
    expect(await browser.getUrl()).is.equal('https://www.boden.co.uk/en-gb');
  });

  it(`Should sign in page opens if a user clicks button "Sign in"`, async () => {
    await header.signIn();
    expect(await browser.getTitle()).is.equal('Sign in');
  });

  it('Should open Basket by click button "Mini Basket"', async () => {
    await baseElements.click(header.miniBasketButton);
    expect(await header.basketTitle.getText()).to.equal('My bag');
  });

  it('Should opend serch panel which contain placeholder "Looking for something...?"', async () => {
    await baseElements.click(header.searchButton);
    const placeholderText = await header.getTextOfPlaceholder(header.searchPanel, 'placeholder');
    expect(placeholderText).is.equal('Looking for something...?');
  });

  it('should check if "New In New Arrivals" page opens', async () => {
    await baseElements.selectUsingHover(topNavComponents.womenNavigationButton, header.newArrivalsLink);
    expect(await browser.getTitle()).equal("Women's New In Clothing & Accessories | Boden UK");
  });

  it('should check if "Gifts for baby" page opens', async () => {
    await baseElements.selectUsingHover(topNavComponents.giftsNavigationButton, header.giftsForBabylsLink);
    expect(await browser.getTitle()).equal('Baby Gifts | Present Ideas for Baby Girls & Boys | Boden UK');
  });

  it('should check if  "Gifts Under £50" page opens', async () => {
    await baseElements.selectUsingHover(topNavComponents.giftsNavigationButton, header.giftsUnder50Link);
    expect(await browser.getTitle()).equal('Christmas Gift & Present Ideas | Boden UK');
  });

  it('should check if "Women’s Cosy Edit" page opens', async () => {
    await baseElements.selectUsingHover(topNavComponents.womenNavigationButton, header.theCosyEdit);
    expect(await browser.getTitle()).equal("Women's Winter Essentials | Winter Dresses & Shoes | Boden UK");
  });

  it('should check if "Gift Vouchers" page opens', async () => {
    await baseElements.selectUsingHover(topNavComponents.womenNavigationButton, header.giftVouchers);
    expect(await browser.getTitle()).equal('Boden Gift Vouchers | Boden UK');
  });

  it('should check if "Knitwear" page opens', async () => {
    await baseElements.selectUsingHover(topNavComponents.womenNavigationButton, header.knitWear);
    expect(await browser.getTitle()).equal("Women's Knitwear | Jumpers & Cardigans | Boden UK");
  });
});
