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
            allure.startStep("Klik tombol pencarian produk");
            const el1 = await driver.$("id:com.alfamart.alfagift:id/card_search_product");
            await el1.click();
            allure.endStep();

            allure.startStep("Masukkan produk 'Chitato' ke dalam pencarian");
            const el2 = await driver.$("id:com.alfamart.alfagift:id/edt_search");
            await el2.addValue("chitato");
            allure.endStep();

            allure.startStep("Pilih produk dari hasil pencarian");
            const el3 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(3)");
            await el3.click();
            allure.endStep();

            allure.startStep("Tambahkan produk ke dalam keranjang");
            const el4 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.alfamart.alfagift:id/btn_add_to_cart\").instance(0)");
            await el4.click();
            allure.endStep();

            allure.startStep("Tambahkan produk lagi ke dalam keranjang");
            const el5 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.alfamart.alfagift:id/btn_add_to_cart\").instance(0)");
            await el5.click();
            allure.endStep();

            allure.startStep("Menambah jumlah produk di keranjang");
            const el6 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.alfamart.alfagift:id/btn_increase_qty\").instance(0)");
            await el6.click();
            allure.endStep();

            allure.startStep("Klik tombol keranjang belanja");
            const el9 = await driver.$("id:com.alfamart.alfagift:id/btn_basket");
            await el9.click();
            allure.endStep();

            allure.startStep("Mengurangi jumlah produk dalam keranjang");
            const el10 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.alfamart.alfagift:id/btnDecreaseQty\").instance(0)");
            await el10.click();
            await el10.click();
            allure.endStep();

            allure.startStep("Konfirmasi checkout");
            const el11 = await driver.$("id:com.alfamart.alfagift:id/btn_primary");
            await el11.click();
            allure.endStep();

            allure.startStep("Kembali ke Home");
            await driver.executeScript("mobile: pressKey", [{ "keycode": 3 }]);
            allure.endStep();

            // Tambahkan screenshot ke laporan Allure
            const screenshot = await driver.takeScreenshot();
            allure.addAttachment("Final Screenshot", Buffer.from(screenshot, 'base64'), "image/png");

        } catch (error) {
            allure.addAttachment("Error Screenshot", Buffer.from(await driver.takeScreenshot(), 'base64'), "image/png");
            throw error;
        }
    });

    after(async () => {
        await driver.deleteSession();
    });
});
