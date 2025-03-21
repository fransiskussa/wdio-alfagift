exports.config = {
    runner: 'local',
    port: 4723,
    // specs: ['./test/specs/test.e2e.js'],
    specs: ['./test/specs/**/*.js'],
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'GIZPKF6TOFVWW4IV',
        'appium:platformVersion': '14',
        'appium:appPackage': 'com.alfamart.alfagift',
        'appium:appActivity': 'com.alfamart.alfagift.screen.splash.SplashActivity',
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
        'appium:newCommandTimeout': 3600
    }],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',  // Direktori penyimpanan hasil
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: false
        }]
    ],
    services: ['appium'],
    mochaOpts: {
        timeout: 60000
    }
};
