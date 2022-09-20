const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')
require('driver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/index.html')
})

afterAll(async () => {
    await driver.quit()
})