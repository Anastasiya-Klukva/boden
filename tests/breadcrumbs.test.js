import { expect } from 'chai';
import mainBoden from '../pageobjects/mainBoden';
import BaseElements from '../helpers/baseElements';
import Breadcrumbs from '../pageComponents/breadcrumbs';
import Footer from '../pageComponents/footer';
import topNavComponents from '../pageComponents/topNavComponents';
import { LEATHER_BOOTS_URL } from '../helpers/constant';

describe('breadrumbs test cases', () => {
  it('should check that clicking the link redirects to the respective page', async () => {
    await Breadcrumbs.open(LEATHER_BOOTS_URL);
    await BaseElements.click(Breadcrumbs.shoesBreadcrumb);
    await BaseElements.click(Breadcrumbs.firstRowBreadcrumb);
    expect(await browser.getUrl()).to.include('boden.co.uk/en-gb/girls-clothing');
  });
  it('should check that clicking the link "Shopping with us" redirects to the respective page', async () => {
    await mainBoden.open();
    await Footer.sizingButton.scrollIntoView();
    await BaseElements.click(Footer.sizingButton);
    await BaseElements.click(Breadcrumbs.firstRowBreadcrumb);
    expect(await browser.getUrl()).to.include('boden.co.uk/en-gb/shopping-with-us');
  });
  it('should check that clicking the link "Newborn Baby Clothes" redirects to the respective page', async () => {
    await mainBoden.open();
    await topNavComponents.hoverOverBabyButton();
    await BaseElements.click(topNavComponents.newbornOrganicButton);
    await BaseElements.click(Breadcrumbs.secondRowBreadcrumb);
    await BaseElements.click(Breadcrumbs.firstRowBreadcrumb);
    expect(await browser.getUrl()).to.include('https://www.boden.co.uk/en-gb/baby-clothing');
  });
  it('should check that clicking the link "Help" redirects to the respective page', async () => {
    await mainBoden.open();
    await Footer.freeDeliveryButton.scrollIntoView();
    await BaseElements.click(Footer.freeDeliveryButton);
    await BaseElements.click(Breadcrumbs.firstRowBreadcrumb);
    expect(await browser.getUrl()).to.include('boden.co.uk/en-gb/help');
  });
});
