import productDetailsPage from '../pageObjects/productDetailsPage';
import baseElements from '../helpers/baseElements';
import { expect } from 'chai';

describe('Put down goods with selected params in bag and check if they are there', () => {
  it('Should put goods with param: "size" into bag and check amount', async () => {
    await productDetailsPage.open('https://www.boden.co.uk/en-gb/short-puff-dress-navy-daisy-paisley/sty-d0111-nvy?cat=C1_S2_G4');
    await baseElements.click(baseElements.acceptCookies);
    await baseElements.click(productDetailsPage.size);
    await baseElements.click(productDetailsPage.addToBagButton);
    expect(await productDetailsPage.getNumOfGoodsFromBasket()).contain('1');
  });

  it('Should put goods with param: "size", "colour" and "fit" into bag and check amount', async () => {
    await productDetailsPage.open('https://www.boden.co.uk/en-gb/willow-midi-jersey-dress-midnight-garden-abstract-sprig/sty-d0037-dgr?cat=C1_S2_G4');
    await baseElements.click(baseElements.acceptCookies);
    await baseElements.click(productDetailsPage.colour);
    await baseElements.click(productDetailsPage.fit);
    await baseElements.click(productDetailsPage.size);
    await baseElements.click(productDetailsPage.addToBagButton);
    expect(await productDetailsPage.getNumOfGoodsFromBasket()).contain('1');
  });

  it('Should shoose goods with param: "size", "colour" but dont select "fit". Warn message should appear', async () => {
    await productDetailsPage.open('https://www.boden.co.uk/en-gb/willow-midi-jersey-dress-midnight-garden-abstract-sprig/sty-d0037-dgr?cat=C1_S2_G4');
    await baseElements.click(baseElements.acceptCookies);
    await baseElements.click(productDetailsPage.colour);
    await baseElements.click(productDetailsPage.size);
    await baseElements.click(productDetailsPage.addToBagButton);
    expect(await productDetailsPage.fitValidationMessage.getText()).contain('Please select a fit');
  });

  it('Should add goods to the bag without choosing Size when available. Warn message should appear', async () => {
    await productDetailsPage.open('https://www.boden.co.uk/en-gb/willow-midi-jersey-dress-midnight-garden-abstract-sprig/sty-d0037-dgr?cat=C1_S2_G4');
    await baseElements.click(baseElements.acceptCookies);
    await baseElements.click(productDetailsPage.colour);
    await baseElements.click(productDetailsPage.fit);
    await baseElements.click(productDetailsPage.addToBagButton);
    expect(await productDetailsPage.sizeValidationMessage.getText()).contain('Please select a size');
  });

  it('Should add goods to the bag without choosing both Size and Fit when available. Warn message should appear', async () => {
    await productDetailsPage.open('https://www.boden.co.uk/en-gb/willow-midi-jersey-dress-midnight-garden-abstract-sprig/sty-d0037-dgr?cat=C1_S2_G4');
    await baseElements.click(baseElements.acceptCookies);
    await baseElements.click(productDetailsPage.colour);
    await baseElements.click(productDetailsPage.addToBagButton);
    expect(await productDetailsPage.fitValidationMessage.getText()).contain('Please select a fit');
    expect(await productDetailsPage.sizeValidationMessage.getText()).contain('Please select a size');
  });

  it('Should continue shopping after adding goods to basket', async () => {
    await productDetailsPage.open('https://www.boden.co.uk/en-gb/willow-midi-jersey-dress-midnight-garden-abstract-sprig/sty-d0037-dgr?cat=C1_S2_G4');
    await baseElements.click(baseElements.acceptCookies);
    await baseElements.click(productDetailsPage.colour);
    await baseElements.click(productDetailsPage.size);
    await baseElements.click(productDetailsPage.fit);
    await baseElements.click(productDetailsPage.addToBagButton);
    expect(await productDetailsPage.getNumOfGoodsFromBasket()).contain('1');

    await baseElements.click(productDetailsPage.continueShoppingButton);
    expect(await browser.getTitle()).contain('Dresses | Women’s Dresses Online | Boden UK');
  });
});
