export const goHome = () => {
    browser.url('/');
};

export const SignIn = () => {
    browser.url('/');
    browser.click("//*[@class='header_user_info']");
};

export const contactPage = () => {
    browser.url('/');
    browser.click("//*[@id='contact-link']");
    const acc = "My account"
    browser.getValue("//*[@id='center_column']//*[contains(text(),'Customer service - Contact us')]") == acc
};

export const clickCart = () => {
    browser.scroll("//*[@class='shopping_cart']//*[contains(text(),'Cart')]");
    browser.click("//*[@class='shopping_cart']//*[contains(text(),'Cart')]");
};

export const gotoHomePage = () => {
    browser.scroll("//*[@id='header_logo']");
    browser.click("//*[@id='header_logo']");
};

export const clickSignIn = () => {
    browser.click("//*[@id='SubmitLogin']");
};



