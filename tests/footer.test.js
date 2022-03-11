import { expect } from 'chai';
import baseElements from '../helpers/baseElements';
import mainBoden from '../pageobjects/mainBoden';
import Footer from '../pageComponents/footer';

describe('footer test cases', () => {
  beforeEach(async () => {
    await mainBoden.open();
  });

  it('should check that "Facebook" opens', async () => {
    await Footer.clickFooterButton(Footer.facebookButton, 'facebook.com');
    expect(await browser.getUrl()).to.include('facebook.com');
  });

  it('should check that "Twitter" opens', async () => {
    await Footer.clickFooterButton(Footer.twitterButton, 'twitter.com');
    expect(await browser.getUrl()).to.include('twitter.com');
  });

  it('should check that "Pinterest" opens', async () => {
    await Footer.clickFooterButton(Footer.pinterestButton, 'pinterest.com');
    expect(await browser.getUrl()).to.include('pinterest.com');
  });

  it('should check that "Instagram" opens', async () => {
    await Footer.clickFooterButton(Footer.instagramButton, 'instagram.com');
    expect(await browser.getUrl()).to.include('instagram.com');
  });

  it('should open "Returns & Refunds" page', async () => {
    await baseElements.click(Footer.returnsAndRefundsButton);
    expect(await Footer.returnsAndRefundsPage.getText()).contain('Returns & Refunds');
  });

  it('should open "SIGN UP FOR EMAIL" page', async () => {
    await baseElements.enterText(Footer.singUpForEmailField, 'testMail@google.com');
    await browser.keys('Enter');
    expect(await Footer.singUpForEmailConfirmPage.getText()).contain('Thanks for signing up');
  });
});
