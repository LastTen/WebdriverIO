const assert = require('assert');

describe.skip('reload', () => {
    it('reload', () => {
        browser.url('https://github.com/');
        const footer = $('//footer')
        footer.scrollIntoView();

        const logoFoter = $('//footer //a[@href="/"]')
        logoFoter.click()

        const title = $('//h1')
        let textTitle = title.getText();
        let isDisplayedInViewport = title.isDisplayedInViewport();

        assert.strictEqual(textTitle, 'Where the world builds software');
        assert.strictEqual(isDisplayedInViewport, true);

    });

});