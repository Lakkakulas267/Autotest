
export const enterFeedbackDetails = (heading,email,reference,message) => {
    const subject = browser.element('//*[@id="uniform-id_contact"]');
    subject.selectByIndex(1);
    browser.setValue("//*[@id='email']",email);
    browser.setValue("//*[@id='id_order']",reference);
    browser.setValue("//*[@id='message']",message);
};

export const submit = () => {
    browser.click("//*[@id='submitMessage']");
};

export const success = () => {
    const message = "Your message has been successfully sent to our team."
    browser.getValue("//*[@id='center_column']//*[contains(text(),'Your message has been successfully sent to our team.')]") == message
};

