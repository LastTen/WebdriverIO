const assert = require('assert');

describe('webdriver.io page', () => {
    xit('getAttribute', () => {
        browser.url('https://webdriver.io');
        const set = $('.DocSearch-Button-Placeholder');
        set.click()
        const input = $('#docsearch-input');
        let attr = input.getAttribute('title')
        console.log("Title attribute is: " + attr) // outputs: "Search"


        input.setValue('test123');
        attr = input.getAttribute('value')
        console.log("Value attribute is: " + attr) // outputs: test123
    })


    xit('Click', () => {
        browser.url('https://webdriver.io');
        const set = $('[href="/blog"]');
        set.click();
        browser.pause(8000);

        const set1 = $('[href="/docs/gettingstarted"]');
        set1.click();
        browser.pause(8000);


    })


    xit('getLocation', () => {
        browser.url('https://webdriver.io');
        const logo = $('[href="/blog"]');

        const location = logo.getLocation();
        console.log(location);

        const xLocation = logo.getLocation('x')
        console.log("xLocation" + xLocation);



    })


    xit('GEt Text', () => {
        browser.url('https://webdriver.io');
        const blog = $('[href="/blog"]');
        console.log("Text for element:" + blog.getText());



    })

})