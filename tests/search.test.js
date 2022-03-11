import mainBoden from '../pageobjects/mainBoden';
import filterPage from '../pageObjects/filterPage';
import searchComponents from '../pageComponents/searchComponents';
import baseElements from '../helpers/baseElements';
import { expect } from 'chai';

describe('Open main page and interact with search line', () => {
  beforeEach(async () => {
    await mainBoden.open();
    await baseElements.click(filterPage.acceptCookies);
  });

  it('Sould open page with "shorts"', async () => {
    await searchComponents.search(searchComponents.searchButton, searchComponents.searchField, 'shorts');
    expect(await searchComponents.searchResultsPage.getText()).contain('Search results for "shorts"');
  });

  it('Sould open page with not existing goods', async () => {
    await searchComponents.search(searchComponents.searchButton, searchComponents.searchField, 'shkarpetki');
    expect(await searchComponents.notExistingItemPage.getText()).contain('Nothing matches your search "shkarpetki"');
  });

  it('Sould contain word "dresses" in results of search', async () => {
    await searchComponents.fillingSearchLine(searchComponents.searchButton, searchComponents.searchField, 'dresses');
    expect(await searchComponents.searchResultList.getText()).contain('dresses');
  });

  it('Sould open page with "dresses" by clickind view all link', async () => {
    await searchComponents.fillingSearchLine(searchComponents.searchButton, searchComponents.searchField, 'dresses');
    await baseElements.click(searchComponents.viewAllLink);
    expect(await searchComponents.searchResultsPage.getText()).contain('Search results for "dresses"');
  });
});
