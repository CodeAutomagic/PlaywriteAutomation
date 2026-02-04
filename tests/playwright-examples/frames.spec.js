const { test, expect } = require('@playwright/test');

test('frames: interact with an iframe (example)', async ({ page }) => {
  // use a small test page with an iframe - example.com doesn't have one, so show pattern
  await page.setContent(`
    <iframe srcdoc="<p id='inside'>frame content</p>" title="demo"></iframe>
  `);
  const frame = page.frameLocator('iframe');
  await expect(frame.locator('#inside')).toHaveText('frame content');
});
