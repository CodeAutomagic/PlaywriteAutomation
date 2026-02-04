const { test, expect } = require('@playwright/test');

test('tracing and screenshots: start tracing and take screenshot', async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });
  await page.goto('https://example.com');
  await page.screenshot({ path: 'playwright-example-screenshot.png' });
  await context.tracing.stop({ path: 'trace-example.zip' });
  await expect(page).toHaveTitle(/Example Domain/);
});
