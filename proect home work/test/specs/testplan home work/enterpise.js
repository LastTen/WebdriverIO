const assert = require('assert');

describe.skip('webdriver.io page', () => {
    it('enterprise', () => {
        browser.url('https://github.com/');
        const enterprise = $('//*[@class="d-lg-flex list-style-none"] //a[text()= "Enterprise"]')
        enterprise.click()


        assert.strictEqual(browser.getUrl(), 'https://github.com/enterprise');

    });

});