describe.only('reg', () => {
    it('reg', () => {
        browser.url('https://github.com/');
        const singup1 = $('//div[@class="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left"]//a[contains(@href, "signup?")]')
        singup1.click()


        browser.pause(5000);


        const inputEmail = $('//*[@id="email"]')
        inputEmail.setValue('Incorectmailtest.com');

        browser.waitUntil(
            () => ($('//*[@class="mb-0"]').isDisplayed()) === true, {
                timeout: 4000,
                timeoutMsg: 'expected text to be different after 4s'
            }
        );


    });

});