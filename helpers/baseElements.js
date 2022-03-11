class BaseElements {
  get acceptCookies() {
    return $('#onetrust-accept-btn-handler');
  }
  async click(element) {
    await element.waitForClickable();
    await element.click();
  }
  async switchFrame(element, frameIndex) {
    await element.waitForExist();
    await browser.switchToFrame(frameIndex);
  }
  async selectDropdownList(openDropDown, changeItem) {
    await openDropDown.waitForClickable();
    await openDropDown.click();
    await changeItem.waitForClickable();
    await changeItem.click();
  }
  async enterText(element, text) {
    await element.waitForExist();
    await element.clearValue();
    await element.addValue(text);
  }
  async selectUsingHover(elementToHover, elementToClick) {
    await elementToHover.moveTo();
    await elementToClick.waitForDisplayed(2000);
    await elementToClick.click();
  }
}

export default new BaseElements();
