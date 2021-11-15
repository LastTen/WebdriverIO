describe('webdriver.io page', () => {
    xit('10 lecture', () => {
        browser.url('https://webdriver.io');
        const blog = $('[href="/blog"]');
        let Clickable = blog.isClickable();
        console.log('Clickable' + Clickable);

        let isdisplaed = blog.isDisplayed();
        console.log('isdisplaed' + isdisplaed);

        let git = $('#footer [href="https://github.com/webdriverio/webdriverio"]').isDisplayedInViewPort;
        console.log('isDisplayedInViewPort' + git);
    })


    xit('scrolIntoView', () => {
        browser.url('https://webdriver.io');
        const elem = $('.footer [href="https://github.com/webdriverio/webdriverio"]');
        browser.pause(2000);
        elem.scrollIntoView();
        browser.pause(3000);

        const blog = $('.hero__title');
        blog.scrollIntoView()
        browser.pause(3000);

    })


    xit('scrolIntoView', () => {
        browser.url('https://webdriver.io');
        browser.waitUntil(() => {
            return $('[href="/blog"]').isDisplayed();
        }, 5000, 'dlog is not displaid');

    })

    xit('innerHTML', () => {
        browser.url('https://webdriver.io/docs/api');
        let outerHTML = $('[class="navbar__item navbar__link navbar__link--active"]').getHTML();
        console.log('INNER HTML  :' + outerHTML);


    })


})