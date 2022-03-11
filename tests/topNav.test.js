import mainBoden from '../pageobjects/mainBoden';
import topNavComponents from '../pageComponents/topNavComponents';
import { expect } from 'chai';
import baseElements from '../helpers/baseElements';

describe('top navigation tests', () => {
  beforeEach(async () => {
    await mainBoden.open();
  });

  it('should check if the women page is open', async () => {
    await baseElements.click(topNavComponents.womenNavigationButton);
    expect(await browser.getTitle()).equal("Women's Clothing & Fashion, Ladies Clothes Online | Boden");
  });

  it('should check if the girls page is open', async () => {
    await baseElements.click(topNavComponents.girlsNavigationButton);
    expect(await browser.getTitle()).equal("Girls' Clothing & Fashion | Boden");
  });

  it('should check if the men page is open', async () => {
    await baseElements.click(topNavComponents.menNavigationButton);
    expect(await browser.getTitle()).equal("Men's Clothing | Shop Men's Fashion | Boden UK");
  });

  it('should check if the boys page is open', async () => {
    await baseElements.click(topNavComponents.boysNavigationButton);
    expect(await browser.getTitle()).equal("Boys' Clothes & Fashion | Boden");
  });

  it('should check if the Boden By Me page is open', async () => {
    await baseElements.selectUsingHover(topNavComponents.womenNavigationButton, topNavComponents.bodenByMe);
    expect(await browser.getTitle()).equal('Boden By Me Gallery | Boden UK');
  });

  it('should check if the Baby page is open', async () => {
    await baseElements.click(topNavComponents.babyNavigationButton);
    expect(await browser.getTitle()).equal('Baby Clothing | Babywear Outfits & Essentials | Boden UK');
  });
});
