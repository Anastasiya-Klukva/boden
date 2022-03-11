import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { browsersCapabilities } from './browsers';
import allureReporter from '@wdio/allure-reporter';
const { argv } = yargs(hideBin(process.argv));
const BROWSERS = argv.browser || 'chrome';

exports.config = {
  capabilities: [...browsersCapabilities[BROWSERS]],

  specs: ['./tests/**/*.test.js'],

  maxInstances: 10,

  logLevel: 'warn',

  bail: 0,

  baseUrl: 'http://localhost',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['geckodriver', 'chromedriver'],

  framework: 'mocha',

  reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  before: async function (config, capabilities, specs) {
    await browser.setWindowSize(1920, 1080);
  },
  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    if (error) {
      await browser.takeScreenshot();
      let url = await browser.getUrl();
      allureReporter.addAttachment('URL', url, 'text/plain');
      allureReporter.addAttachment('Error:', error, 'text/plain');
    }
    await browser.reloadSession();
    await browser.setWindowSize(1920, 1080);
  },
};
