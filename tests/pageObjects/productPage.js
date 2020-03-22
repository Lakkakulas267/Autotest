// export const gotoProductPage = (username,password) => {
//     browser.("//*[@class='product-container']//*[contains(text(),'"+product+"')]");
//     browser.click("//*[@class='product-container']//*[contains(text(),'"+product+"')]");


//     //browser.url('/');
//     //browser.url('/en/category/clothing-427/tops-443')
//     // openCategoryTab();
//     // openClothingTab();
//     // clickOnProductTab(product);
//     // isOnProductPage(product);
// };  //*[@id='homefeatured']//*[contains(text(),'



export const seeProductPage = (product) => {
    browser.isVisible("//*[@class='pb-center-column col-xs-12 col-sm-4']//*[contains(text(),'"+product+"')]");
};

export const gotoProduct = (product) => {
    browser.scroll("/html/body/div/div[2]/div/div[3]/div[2]/ul/li[2]/div/div[1]/div/a[1]/img");
    browser.moveToObject("/html/body/div/div[2]/div/div[3]/div[2]/ul/li[2]/div/div[1]/div/a[1]/img");
    //browser.moveToObject("//*[@class='product-container']//*[contains(text(),'"+product+"')]");
    browser.click("//*[contains(text(),'Add to cart')]");

};

export const clickAddToCart = () => {
    browser.scroll("//*[contains(text(),'Add to cart')]");
    browser.click("//*[contains(text(),'Add to cart')]");
};

export const openCategoryTab = () => {
    browser.isVisible(".BurgerButton-bar");
    browser.click(".BurgerButton-bar");
};

export const openClothingTab = () => {
    browser.isVisible("//*[@class='TopNavMenu-parentListBlock']//*[contains(text(),'Clothing')]");
    browser.click("//*[@class='TopNavMenu-parentListBlock']//*[contains(text(),'Clothing')]");
};

export const clickOnProductTab = (product) => {
    browser.isVisible("//*[@class='Categories-listItem Categories-listItem208524']");
    browser.click("//*[@class='Categories-listItem Categories-listItem208524']");
};

export const isOnProductPage = (product) => {
    browser.isVisible("//*[@class='PlpContainer-productListContainer']//*[contains(text(),'"+product+"')]");
};

export const clickProductListTab = () => {
    browser.isVisible("//*[@class='ProductViews Filters-column']//*[contains(text(),'product')]");
    browser.click("//*[@class='ProductViews Filters-column']//*[contains(text(),'product')]");
};

export const clickOnFilterTab = () => {
    browser.isVisible("//*[@class='Button Filters-refineButton']");
    browser.click("//*[@class='Button Filters-refineButton']");
};

export const numberOfFiltersApplied = (numberOfFilters) => {
    browser.isVisible("//*[@class='Button Filters-refineButton']//*[contains(text(),'"+numberOfFilters+"')]");
};


export const hasNoFilters = () => {
    //if(browser.isVisible("//*[@class='Button Filters-refineButton']//*[contains(text(),'(')]")){}
};