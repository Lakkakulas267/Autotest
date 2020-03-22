export const gotoPage = () => {
    browser.url('/');
};

export const clickCart = () => {
    browser.scroll("//*[@class='product-container']//*[contains(text(),'Blouse')]");
    browser.click("//*[@class='product-container']//*[contains(text(),'Blouse')]");
};

export const onCartPage = () => {
    browser.isVisible("//*[@class='row']//*[contains(text(),'Shopping')]");
};

export const seeProductInCart = (product1,product2) => {
    browser.scroll("//*[@id='cart_summary']//*[contains(text(),'"+product1+"')]");
    browser.isVisible("//*[@id='cart_summary']//*[contains(text(),'"+product1+"')]");
    browser.scroll("//*[@id='cart_summary']//*[contains(text(),'"+product2+"')]");
    browser.isVisible("//*[@id='cart_summary']//*[contains(text(),'"+product2+"')]");
    browser.pause(5000);
};

