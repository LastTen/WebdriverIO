describe.skip('log', () => {
    it('log', () => {
        browser.url('https://github.com/');
        const singin1 = $('[class="HeaderMenu-link flex-shrink-0 no-underline"]');
        singin1.click();


        const email = $('#login_field');
        const pass = $('#password');
        const submit = $('[value="Sign in"]')
        email.setValue('usermame');
        pass.setValue('password');
        submit.click();

        browser.waitUntil(
            () => ($('[class="flash flash-full flash-error "]').isDisplayed()) === true, {
                timeout: 4000,
                timeoutMsg: 'expected text to be different after 4s'
            }
        );

        const elem = $('//main');
        elem.saveScreenshot('./screenshot/gitErr.png');




    });

});