const { remote } = require('webdriverio');
const allure = require("@wdio/allure-reporter").default;

describe('Alfagift App Automation', () => {
    let driver;

    before(async () => {
        driver = await remote({
            hostname: '127.0.0.1',
            port: 4723,
            path: '/',
            capabilities: {
                platformName: 'Android',
                'appium:deviceName': 'GIZPKF6TOFVWW4IV',
                'appium:platformVersion': '14',
                'appium:appPackage': 'com.alfamart.alfagift',
                'appium:appActivity': 'com.alfamart.alfagift.screen.splash.SplashActivity',
                'appium:automationName': 'UiAutomator2',
                'appium:noReset': true,
                'appium:newCommandTimeout': 3600
            }
        });
    });

    it('should automate Alfagift app', async () => {
        try {
            await driver.$("id:com.alfamart.alfagift:id/edt_search").waitForExist({ timeout: 5000 });
            const searchBox = await driver.$("id:com.alfamart.alfagift:id/edt_search");
            await searchBox.addValue("chitato");
    
            const firstItem = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(3)");
            await firstItem.waitForExist({ timeout: 5000 });
            await firstItem.click();
    
            allure.addStep("Menambahkan produk ke keranjang");
            const addToCart = await driver.$("id:com.alfamart.alfagift:id/btn_add_to_cart");
            await addToCart.waitForExist({ timeout: 5000 });
            await addToCart.click();
    
            const increaseQty = await driver.$("id:com.alfamart.alfagift:id/btn_increase_qty");
            await increaseQty.waitForExist({ timeout: 5000 });
            await increaseQty.click();
    
            allure.addStep("Mengurangi jumlah produk");
            const decreaseQty = await driver.$("id:com.alfamart.alfagift:id/btn_decrease_qty");
            await decreaseQty.waitForExist({ timeout: 5000 });
            await decreaseQty.click();
    
            allure.addStep("Membuka halaman keranjang");
            const openCart = await driver.$("id:com.alfamart.alfagift:id/btn_basket");
            await openCart.waitForExist({ timeout: 5000 });
            await openCart.click();
    
        } catch (error) {
            allure.addAttachment("Error Screenshot", Buffer.from(await driver.takeScreenshot(), 'base64'), "image/png");
            throw error;
        }
    });
    

 
});
