const webdriverAPI = 'https://webdriver.io/docs/api'


describe('home work 2 webdriver.io page', () => {
    it('home work 2', () => {
        browser.url(webdriverAPI);
        const elem1 = $('//*[text() = "JSONWire protocol"]');
        let jswine = elem1.getAttribute('href');
        console.log(jswine);
        browser.newWindow(jswine)

        browser.switchWindow(jswine)

        const homeEl = $('[href="/SeleniumHQ/selenium/wiki"]')
        console.log('home is displ ' + homeEl.isDisplayed());

        browser.switchWindow(webdriverAPI);

        browser.waitUntil(
            () => ($('h1').getText()) === 'Introduction', {
                timeout: 3000,
                timeoutMsg: 'expected text to be different after 3s'
            }
        );

        const elem = $('h1');
        elem.saveScreenshot('./screenshot/1.png');

        const twitLink = $('[href="https://twitter.com/webdriverio"]')
        console.log('twit is Displayed: ' + twitLink.isDisplayed());


        let isDisplayedInViewport = twitLink.isDisplayedInViewport();
        console.log('isDisplayedInViewport Twiter link:' + isDisplayedInViewport);


        twitLink.scrollIntoView();

        console.log('twit is Displayed: ' + twitLink.isDisplayed());


        isDisplayedInViewport = twitLink.isDisplayedInViewport();
        console.log('isDisplayedInViewport Twiter link:' + isDisplayedInViewport);

        const blog = $('[href="/blog"]');
        console.log('Focus for blog: ' + blog.isFocused());
        blog.click();
        console.log('Focus for blog: ' + blog.isFocused());

    });

});