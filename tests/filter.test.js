import mainBoden from '../pageobjects/mainBoden';
import baseElements from '../helpers/baseElements';
import filterPage from '../pageObjects/filterPage';
import { expect } from 'chai';

describe('filter tests', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1199, 1080);
    await mainBoden.open();
    await baseElements.click(filterPage.acceptCookies);
    await filterPage.getSearchedItemList('coat');
  });

  it('should check if clicking on the department button opens the department list', async () => {
    await baseElements.click(filterPage.departmentButton);
    expect(await filterPage.departmentList.getText()).contain('Women');
  });

  it('should check if chosing filter options change showing items counter', async () => {
    await baseElements.click(filterPage.departmentButton);
    await baseElements.click(filterPage.womenDepartment);
    expect(await filterPage.departmentCounter.getText()).contain('(1)');
  });

  it('should check if filter options can be deleted', async () => {
    await baseElements.click(filterPage.departmentButton);
    await baseElements.click(filterPage.womenDepartment);
    await baseElements.click(filterPage.clearAllButton);
    expect(await filterPage.departmentCounter.getText()).not.contain('(1)');
  });

  it('should check if size button is become clickable if user selects department category', async () => {
    await baseElements.click(filterPage.departmentButton);
    await baseElements.click(filterPage.womenDepartment);
    await baseElements.click(filterPage.sizeButton);
    await baseElements.click(filterPage.sizeM);
    expect(await filterPage.sizeCounter.getText()).contain('(1)');
  });
});
