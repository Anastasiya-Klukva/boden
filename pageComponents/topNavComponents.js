import BasePage from '../pageObjects/basePage';

class TopNavComponents extends BasePage {
  get womenNavigationButton() {
    return $('//span[text()="Women"]');
  }
  get girlsNavigationButton() {
    return $('//span[text()="Girls"]');
  }
  get menNavigationButton() {
    return $('//span[text()="Men"]');
  }
  get boysNavigationButton() {
    return $('//span[text()="Boys"]');
  }
  get babyNavigationButton() {
    return $('//span[text()="Baby"]');
  }
  get newbornOrganicButton() {
    return $('img[src*=newborn_organic]');
  }
  get giftsNavigationButton() {
    return $('[data-item-id="topnav.gifts"]');
  }
  get bodenByMe() {
    return $('[data-item-id="topnav.women.new&trending.bodenbyme"]');
  }
  async hoverOverBabyButton() {
    await this.babyNavigationButton.moveTo();
    await this.newbornOrganicButton.waitForDisplayed(2000);
  }
}

export default new TopNavComponents();
