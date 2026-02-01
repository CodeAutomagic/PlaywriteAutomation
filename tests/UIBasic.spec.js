const { test } = require('@playwright/test');
const { chromium } = require('playwright');

test('Launch Chrome browser', async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://example.com');
  await page.waitForTimeout(2000);
  await browser.close();
});
