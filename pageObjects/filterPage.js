import searchComponents from '../pageComponents/searchComponents';
import BasePage from '../pageObjects/basePage';

class FilterPage extends BasePage {
  get departmentButton() {
    return $('#productGridFilters .product-grid-filter-item.product-grid-filter-item-department');
  }
  get sizeButton() {
    return $$('.product-grid-filter-item.product-grid-filter-item-all-size-availability')[0];
  }
  get clearAllButton() {
    return $('.product-grid-filter-clear-button.product-grid-filter-clear-button-all');
  }
  get viewboxLeftButton() {
    return $('#productGridFilters  button:nth-child(2) svg');
  }
  get sizeM() {
    return $('[data-title~=M]');
  }
  get departmentList() {
    return $('#productGridPopoverPortal .product-grid-filter-item.product-grid-filter-item-department');
  }
  get acceptCookies() {
    return $('#onetrust-accept-btn-handler');
  }
  get womenDepartment() {
    return $('#departmentWomen');
  }
  get departmentCounter() {
    return $('.product-grid-filter-item-department .product-grid-filter-item-toggle-button-counter');
  }
  get sizeCounter() {
    return $('.product-grid-filter-item-all-size-availability .product-grid-filter-item-toggle-button-counter');
  }

  async getSearchedItemList(item) {
    await searchComponents.search(searchComponents.searchButtonForSmallScreen, searchComponents.searchField, item);
  }
}

export default new FilterPage();
