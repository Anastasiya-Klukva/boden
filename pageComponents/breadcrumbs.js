import BasePage from '../pageObjects/basePage';

class Breadcrumbs extends BasePage {
  get shoesBreadcrumb() {
    return $('.item-3');
  }
  get firstRowBreadcrumb() {
    return $('.breadcrumbs-list .first');
  }
  get secondRowBreadcrumb() {
    return $('.breadcrumbs-list .even');
  }
}

export default new Breadcrumbs();
