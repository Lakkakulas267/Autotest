const usernameInputClass = '//*[@id="username"]'

export const getLoginContainer = () => {
    //modalPO.waitForOverlay()
    try {
        browser.waitForVisible(usernameInputClass, 10000)
        //modalPO.waitForOverlay()
        return browser.element(usernameInputClass)
    } catch (err) {
        shared.failWithScreenshotAndMessage('[ERROR CAPTURE] login page container did not appear', err, 'GET-LOGIN-CONTAINER-FAILED')
    }
};

export const enterEmail = (username,password) => {
    
    browser.setValue("//*[@id='email']", username)
    browser.setValue("//*[@id='passwd']", password)

};

export const account = () => {
    const acc = "My account"
    browser.getValue("//*[@id='center_column']//*[contains(text(),'My account')]") == acc
};