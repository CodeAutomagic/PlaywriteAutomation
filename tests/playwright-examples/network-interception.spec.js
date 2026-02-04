const { test, expect } = require('@playwright/test');

test('network: intercept and mock response', async ({ page }) => {
  await page.route('**/api/**', route => {
    route.fulfill({ status: 200, body: JSON.stringify({ hello: 'world' }) });
  });
  await page.setContent(`<script>
    fetch('/api/test').then(r=>r.json()).then(j=>document.body.innerText=j.hello)
  </script>`);
  await expect(page.locator('body')).toContainText('world');
});
