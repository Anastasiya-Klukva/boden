import BasePage from './basePage';

class MainPage extends BasePage {
  open() {
    return super.open(`https://www.boden.co.uk/`);
  }
}

export default new MainPage();
