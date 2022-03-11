const browsersCapabilities = {
  chrome: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      /*  'goog:chromeOptions': {
          args: ['--headless', '--disable-gpu'],
        }, */
    },
  ],

  firefox: [
    {
      maxInstances: 1,
      browserName: 'firefox',
      acceptInsecureCerts: true,
    },
  ],

  chromeAndFirefox: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 1,
      browserName: 'firefox',
      acceptInsecureCerts: true,
    },
  ],
};

export { browsersCapabilities };
