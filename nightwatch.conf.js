const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

module.exports = {
    src_folders: ["tests"],
    selenium: {
        start_process: true,
        start_session: false,
        server_path: seleniumServer.path,
        check_process_delay: 5000,
        host: "127.0.0.1",
        port: 4444,
        cli_args: {
            "webdriver.chrome.driver": chromedriver.path,
        },
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: "chrome",
            },
        },
        chrome: {
            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                acceptSslCert: true,
                chromeOptions: {
                    w3c: false,
                    args: ["disable-gpu"],
                },
            },
        },
        headlessChrome: {
            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                acceptSslCert: true,
                chromeOptions: {
                    w3c: false,
                    args: ["disable-gpu", "headless"],
                },
            },
        },
    },
};
