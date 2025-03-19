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
                 await driver.action('pointer')
                .move({ duration: 0, x: 459, y: 420 })
                .down({ button: 0 })
                .pause(50)
                .up({ button: 0 })
                .perform();

                const el1 = await driver.$("id:com.alfamart.alfagift:id/edt_search");
                await el1.addValue("chitato");
                const el2 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(3)");
                await el2.click();
                console.log("hehe");
                const el3 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.alfamart.alfagift:id/btn_add_to_cart\").instance(0)");
                await el3.click();
                const el4 = await driver.$("id:com.alfamart.alfagift:id/btn_increase_qty");
                await el4.click();
                const el5 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.alfamart.alfagift:id/btn_add_to_cart\").instance(0)");
                await el5.click();
                const el6 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.alfamart.alfagift:id/btn_decrease_qty\").instance(0)");
                await el6.click();
                const el7 = await driver.$("id:com.alfamart.alfagift:id/btn_basket");
                await el7.click();
                const el8 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.alfamart.alfagift:id/btnDecreaseQty\").instance(0)");
                await el8.click();
                const el9 = await driver.$("id:com.alfamart.alfagift:id/btn_primary");
                await el9.click();
                const el10 = await driver.$("id:com.alfamart.alfagift:id/btnDecreaseQty");
                await el10.click();
                const el11 = await driver.$("id:com.alfamart.alfagift:id/btn_primary");
                await el11.click();
                const el12 = await driver.$("id:com.alfamart.alfagift:id/btn_action_wrapper");
                await el12.click();
                const el13 = await driver.$("id:com.alfamart.alfagift:id/iv_homepage");
                await el13.click();


        } catch (error) {
            allure.addAttachment("Error Screenshot", Buffer.from(await driver.takeScreenshot(), 'base64'), "image/png");
            throw error;
        }
    });

    // after(async () => {
    //     await driver.deleteSession();
    // });
});
