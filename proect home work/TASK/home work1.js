describe('Home work1 webDriverIO', () => {
    it('Home work1', () => {
        browser.url('https://webdriver.io');
        const API = $('[href = "/docs/api"]');
        API.click();
        console.log('URL for page: ' + browser.getUrl());

        const header = $('h1');
        console.log("text for header: " + header.getText());

        const elem1 = $('//*[text() = "JSONWire protocol"]');
        let attr = elem1.getAttribute('href');
        console.log('HREF for element :' + attr);

        const click1 = $('.DocSearch-Button-Placeholder');
        click1.click();

        const input = $('#docsearch-input');
        input.setValue('test is ');

        input.addValue('DONE!');
        browser.pause(5000);

    })
})