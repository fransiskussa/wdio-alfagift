exports.config = {
    runner: 'local',
    port: 4723,
    specs: ['./test/specs/test.e2e.js'],
    maxInstances: 3,
    capabilities: [{
        maxInstances: 2,
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
        ['junit', {
            outputDir: './junit-results/', // Direktori penyimpanan hasil XML
            outputFileFormat: function(options) {
                return `results-${options.cid}.xml`; // Nama file XML per session
            },
            errorOptions: {
                error: 'message',
                failure: 'stack'
            }
        }]
    ],
    services: ['appium'],
    mochaOpts: {
        timeout: 600000
    }
};
