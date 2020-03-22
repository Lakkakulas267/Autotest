# READ ME

I have selected 

Account successful login - and navigating to the site - This is to ensure that I am able to login into  my account and view the products purchased and for visibility of my list of orders and make amendments accordingly. This scenario is important to identify any login issues, the users may encounter.

Shopping cart - to ensure able to add products to the cart and navigate to the homepage. This is to ensure that the end to end path is functioning

feedback - to ensure when a successful message is received when I complete the feedback section.

To setup this test project, please follow the below instructions,

prerequisites: npm, chrome browser

You should run the following in your terminal in the repo directory.

    $ npm install
    
 ^This will install the required node_modules for the selenium tests

    $ npm run test

 ^This will run the tests from the feature files
 
 Tests are setup in Page Object Model

 TEST PLAN AND TEST STRATEGY:

 Since the web application to be tested here (www.automationpractice.com) is a PHP based Yii2 application, protractor based test framework would not work as it is a non-angular application and Behat BDD using selenium webdriver is the optimal solution as both the application and test scripts will be in php.

 Instead I chose to use an alternative option webdriverIO framework with Cucumber BDD since the role is mostly based on Javascript for reactjs based application.

 The scope of Automation for testing the above application is for selection of products, addition of products to the cart, Product Detail page, Payments page, Recommended products page, Security, access and login related tests, wishlist creation, session management and browser compatibility.

 The types of tests that needs to be manual are mostly visual testing like product images, image content etc.

 SAMPLE BUG REPORT:

 Bug/Defect Title- Same product names for multiple products
 Bug Description- Multiple products have same product names which leads to confusion and errors in product pricing.
 Steps to Reproduce-
Go to product homepage
 2. Search for a product with name 'Printed Dress'
 
 Current Outcome- Multiple different products appear under the exact same product name.
 Expected Outcome- Product detail should be mentioned in the product name instead of displaying the different products with exact same name
 
 Severity/Priority of the Bug



