const assert = require('assert');

describe.skip('webdriver.io page', () => {
    it('contacts', () => {
        browser.url('https://github.com/');
        const footer = $('//footer')
        footer.scrollIntoView();

        const contact = $('//footer// *[text()="Contact GitHub"]')
        contact.click()

        const title = $('//h1')
        let textTitle = title.getText();


        assert.strictEqual(textTitle, 'What can we help with?');

    });

});