import BasePage from '../pageObjects/basePage';

class SearchComponents extends BasePage {
  get searchButton() {
    return $('.subContainer.parsys.header-rd__after-nav-wrapper .header-rd__search-img');
  }
  get searchButtonForSmallScreen() {
    return $$('.header-rd__search-img-wrapper')[0];
  }
  get searchField() {
    return $('#header-search-input');
  }
  get searchResultsPage() {
    return $('.has-results-notification');
  }
  get notExistingItemPage() {
    return $('.no-results-notification');
  }
  get viewAllLink() {
    return $('.search-panel__view-all strong');
  }
  get searchResultList() {
    return $('.search-panel__results-item-link--highlight');
  }

  async fillingSearchLine(btn, field, text) {
    await btn.click();
    await field.waitForExist();
    await field.setValue(text);
    await field.waitForExist(text);
  }

  async search(btn, field, text) {
    await btn.click();
    await field.waitForExist();
    await field.setValue(text);
    await field.waitForExist(text);
    await browser.keys('Enter');
  }
}

export default new SearchComponents();
