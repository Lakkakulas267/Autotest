export const filterByOption = (filterOption) => {
    //browser.selectByVisibleText("//*[@class='RefinementList']//*[contains(text(),'"+filterOption+"')]");
    browser.isVisible("//*[@class='Button Filters-refineButton']//*[contains(text(),'"+filterOption+"')]");
};

export const filterByColour = (colour) => {
    browser.click("//*[@class='ValueOption']//*[contains(text(),'"+colour+"')]");
};

export const applySelectedFilters = () => {
    browser.isVisible("//*[@class='Refinements-applyButtonWrapper']//*[contains(text(),'Apply')]");
    browser.click("//*[@class='Refinements-applyButtonWrapper']//*[contains(text(),'Apply')]");
};

export const clearAllFilters = () => {
    browser.isVisible("//*[@class='Refinements-header']//*[contains(text(),'Clear all')]");
    browser.click("//*[@class='Refinements-header']//*[contains(text(),'Clear all')]");
};


