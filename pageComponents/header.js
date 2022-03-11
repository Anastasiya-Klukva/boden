import baseElements from '../helpers/baseElements';

class Header {
  get header() {
    return $('#header');
  }
  get logo() {
    return $('.header-rd__logo-img');
  }
  get searchButton() {
    return $('.subContainer.parsys.header-rd__after-nav-wrapper .header-rd__search-img');
  }
  get searchPanel() {
    return $('#header-search-input');
  }
  get signInButton() {
    return $('.header-rd__account-img');
  }
  get signInNow() {
    return $('.header-rd__account-dropdown-item[href="/Secure/Login.aspx?SignIn=1"]');
  }
  get miniBasketButton() {
    return $('.header-rd__mini-basket');
  }
  get basketTitle() {
    return $('.basketTitle');
  }
  get newArrivalsLink() {
    return $('[data-item-id="topnav.women.new&trending.newarrivals"]');
  }
  get giftsForBabylsLink() {
    return $('[data-item-id*="giftsforbabies"]');
  }
  get giftsUnder50Link() {
    return $('[data-item-id="topnav.gifts.giftsbyprice.giftsunder£50"]');
  }
  get dressesAndJumpsuitsLink() {
    return $('[data-item-id="topnav.women.clothing.dresses&jumpsuits"]');
  }
  get theCosyEdit() {
    return $('[data-item-id="topnav.women.edits&collections.thecosyedit"]');
  }
  get giftVouchers() {
    return $('[data-item-id="topnav.women.giftvouchers"]');
  }
  get knitWear() {
    return $('[data-item-id="topnav.women.clothing.knitwear"]');
  }

  async getTextOfPlaceholder(element, attributeName) {
    await element.waitForClickable();
    return element.getAttribute(attributeName);
  }
  async signIn() {
    await baseElements.selectDropdownList(this.signInButton, this.signInNow);
  }
}

export default new Header();
